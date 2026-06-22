/**
 * auto-fill.js
 * Automatically fills all topics to TARGET questions each.
 * Uses Claude API to generate CKE-style biology questions.
 *
 * Usage:
 *   node db/auto-fill.js                  — fill all topics
 *   node db/auto-fill.js --topic genetyka — fill one topic by slug
 *   node db/auto-fill.js --dry-run        — show plan without inserting
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ── Config ───────────────────────────────────────────────────────────────────

const TARGET = 100;      // questions per topic
const BATCH = 5;         // questions per Claude API call
const DELAY_MS = 3000;   // ms between API calls (rate limiting)
const MODEL = 'claude-sonnet-4-6';

// ── Load env ─────────────────────────────────────────────────────────────────

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  const content = fs.readFileSync(envPath, 'utf8');
  const env = {};
  for (const line of content.split('\n')) {
    const idx = line.indexOf('=');
    if (idx > 0) env[line.substring(0, idx).trim()] = line.substring(idx + 1).trim();
  }
  return env;
}

const ENV = loadEnv();
const SB_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co';
const SB_KEY = ENV.SUPABASE_SERVICE_ROLE_KEY;
const ANTHROPIC_KEY = ENV.ANTHROPIC_API_KEY;

if (!ANTHROPIC_KEY || !ANTHROPIC_KEY.startsWith('sk-')) {
  console.error('ERROR: ANTHROPIC_API_KEY not found in .env.local');
  process.exit(1);
}

// ── Parse CLI args ────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const topicFilter = (() => {
  const i = args.indexOf('--topic');
  return i >= 0 ? args[i + 1] : null;
})();

// ── HTTP helpers ──────────────────────────────────────────────────────────────

function sbGet(pathStr) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: SB_HOST, path: pathStr, method: 'GET',
      headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY }
    }, (res) => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch (e) { reject(new Error('JSON parse: ' + d.substring(0, 100))); }
      });
    });
    req.on('error', reject); req.end();
  });
}

function sbPost(pathStr, rows) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(rows);
    const req = https.request({
      hostname: SB_HOST, path: pathStr, method: 'POST',
      headers: {
        'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'Prefer': 'return=representation',
        'Content-Length': Buffer.byteLength(body, 'utf-8')
      }
    }, (res) => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode === 201) resolve(JSON.parse(d));
        else reject(new Error('HTTP ' + res.statusCode + ': ' + d.substring(0, 200)));
      });
    });
    req.on('error', reject); req.write(body); req.end();
  });
}

function callClaude(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }]
    });
    const req = https.request({
      hostname: 'api.anthropic.com', path: '/v1/messages', method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(body, 'utf-8')
      }
    }, (res) => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error('Claude HTTP ' + res.statusCode + ': ' + d.substring(0, 200)));
        try {
          const resp = JSON.parse(d);
          resolve(resp.content[0].text);
        } catch (e) { reject(new Error('Claude response parse: ' + d.substring(0, 100))); }
      });
    });
    req.on('error', reject); req.write(body); req.end();
  });
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── JSON extraction ───────────────────────────────────────────────────────────

function extractJsonArray(text) {
  // Strip markdown code fences
  const stripped = text.replace(/^```(?:json)?\s*/m, '').replace(/\s*```\s*$/m, '').trim();

  // Try parsing the whole array first
  const start = stripped.indexOf('[');
  const end = stripped.lastIndexOf(']');
  if (start === -1 || end === -1) throw new Error('No JSON array found');

  try {
    return JSON.parse(stripped.substring(start, end + 1));
  } catch (_) {
    // Fallback: extract individual objects one by one
    // Handles cases where Claude puts unescaped quotes inside long explanation strings
    const results = [];
    let pos = start + 1;
    while (pos < end) {
      const objStart = stripped.indexOf('{', pos);
      if (objStart === -1) break;
      // Find matching closing brace (track nesting and strings)
      let depth = 0, inStr = false, escape = false, objEnd = -1;
      for (let i = objStart; i < stripped.length; i++) {
        const ch = stripped[i];
        if (escape) { escape = false; continue; }
        if (ch === '\\' && inStr) { escape = true; continue; }
        if (ch === '"' && !escape) { inStr = !inStr; continue; }
        if (!inStr) {
          if (ch === '{') depth++;
          else if (ch === '}') { depth--; if (depth === 0) { objEnd = i; break; } }
        }
      }
      if (objEnd === -1) break;
      try {
        results.push(JSON.parse(stripped.substring(objStart, objEnd + 1)));
      } catch (e2) {
        // Single object unparseable — skip it
      }
      pos = objEnd + 1;
    }
    if (results.length === 0) throw new Error('No valid question objects found');
    return results;
  }
}

// ── Question validation + auto-fix ───────────────────────────────────────────

function validateQuestion(q) {
  if (!q.question_text || typeof q.question_text !== 'string') return 'missing question_text';
  if (!['single', 'multiple', 'true_false'].includes(q.question_type)) return 'invalid question_type';
  if (!Array.isArray(q.options) || q.options.length < 2) return 'options must be array with 2+ items';
  if (!Array.isArray(q.correct_answer) || q.correct_answer.length === 0) return 'missing correct_answer';
  if (!q.explanation || q.explanation.length < 50) return 'explanation too short';
  // Auto-fix: sync is_correct flags with correct_answer array
  for (const opt of q.options) {
    opt.is_correct = q.correct_answer.includes(opt.id);
  }
  return null; // valid
}

// ── Generation prompt ─────────────────────────────────────────────────────────

function buildPrompt(topicName, subtopicName, count) {
  return `Jesteś ekspertem z biologii i twórcą zadań maturalnych dla polskich uczniów (poziom rozszerzony, program CKE).

TEMAT GŁÓWNY: ${topicName}
PODTEMAT: ${subtopicName}
LICZBA PYTAŃ DO WYGENEROWANIA: ${count}
TRUDNOŚĆ: 2 (średnie — główny poziom matury)

Wygeneruj ${count} pytań testowych. Zwróć TYLKO tablicę JSON — zero tekstu przed i po.

Format każdego pytania:
{
  "question_text": "Treść pytania (konkretna, w stylu CKE)",
  "question_type": "single",
  "options": [
    {"id": "A", "text": "Odpowiedź A", "is_correct": false},
    {"id": "B", "text": "Odpowiedź B", "is_correct": true},
    {"id": "C", "text": "Odpowiedź C", "is_correct": false},
    {"id": "D", "text": "Odpowiedź D", "is_correct": false}
  ],
  "correct_answer": ["B"],
  "explanation": "Szczegółowe wyjaśnienie (min. 3 merytoryczne zdania). Wyjaśnij DLACZEGO odpowiedź jest prawidłowa i DLACZEGO pozostałe są błędne.",
  "difficulty": 2,
  "ai_confidence": 0.92
}

ZASADY OBOWIĄZKOWE:
1. Pytania sprawdzają ROZUMIENIE i ZASTOSOWANIE wiedzy — nie same definicje
2. Używaj sformułowań CKE: "Wskaż prawidłowe...", "Które z poniższych...", "Oceń prawdziwość...", "W wyniku [...] dochodzi do..."
3. Dystrakcory (błędne odpowiedzi) muszą być wiarygodne — typowe błędy uczniów, nie absurdy
4. Pytania NIE mogą się powtarzać tematycznie między sobą w tej paczce
5. Dla pytań "multiple" (wielokrotny wybór) — użyj co najmniej 2 poprawnych odpowiedzi i odpowiednio ustaw is_correct
6. Dla pytań true_false — podaj 3 stwierdzenia do oceny w question_text, opcje to kombinacje P/F
7. Zwróć TYLKO tablicę JSON — żadnego tekstu przed ani po`;
}

// ── Main logic ────────────────────────────────────────────────────────────────

async function getTopics() {
  let url = '/rest/v1/topics?select=id,name,slug&order=order_index';
  if (topicFilter) url += '&slug=eq.' + topicFilter;
  return sbGet(url);
}

async function getSubtopics(topicId) {
  return sbGet('/rest/v1/subtopics?topic_id=eq.' + topicId + '&select=id,name&order=order_index');
}

async function getQuestionCounts(topicId) {
  // Get count per subtopic
  const rows = await sbGet('/rest/v1/questions?topic_id=eq.' + topicId + '&select=subtopic_id');
  const counts = {};
  for (const r of rows) {
    const k = r.subtopic_id || 'null';
    counts[k] = (counts[k] || 0) + 1;
  }
  return { total: rows.length, bySubtopic: counts };
}

async function generateAndInsert(topicId, topicName, subtopic, batchSize) {
  const prompt = buildPrompt(topicName, subtopic.name, batchSize);
  const text = await callClaude(prompt);

  let questions;
  try {
    questions = extractJsonArray(text);
  } catch (e) {
    console.log('    [WARN] JSON parse failed: ' + e.message);
    console.log('    Raw response start: ' + text.substring(0, 200));
    return 0;
  }

  let inserted = 0;
  for (const q of questions) {
    const err = validateQuestion(q);
    if (err) {
      console.log('    [SKIP] Validation failed: ' + err + ' — ' + (q.question_text || '').substring(0, 40));
      continue;
    }

    if (DRY_RUN) {
      console.log('    [DRY] Would insert: ' + q.question_text.substring(0, 60));
      inserted++;
      continue;
    }

    try {
      await sbPost('/rest/v1/questions', [{
        topic_id: topicId,
        subtopic_id: subtopic.id,
        image_url: null,
        question_text: q.question_text,
        question_type: q.question_type,
        options: q.options,
        correct_answer: q.correct_answer,
        explanation: q.explanation,
        difficulty: q.difficulty || 2,
        verified: false,
        ai_confidence: q.ai_confidence || 0.9
      }]);
      inserted++;
    } catch (e) {
      console.log('    [FAIL] Insert error: ' + e.message.substring(0, 80));
    }
  }
  return inserted;
}

async function fillTopic(topic) {
  const subtopics = await getSubtopics(topic.id);
  if (subtopics.length === 0) {
    console.log('  [SKIP] No subtopics found');
    return;
  }

  let { total, bySubtopic } = await getQuestionCounts(topic.id);
  console.log(`\n━━ ${topic.name} — ${total}/${TARGET} questions`);

  if (total >= TARGET) {
    console.log('  Already at target, skipping.');
    return;
  }

  let round = 0;
  while (total < TARGET) {
    round++;
    // Pick the subtopic with fewest questions
    const ranked = subtopics
      .map(s => ({ ...s, count: bySubtopic[s.id] || 0 }))
      .sort((a, b) => a.count - b.count);
    const subtopic = ranked[0];

    const need = TARGET - total;
    const batchSize = Math.min(BATCH, need);

    process.stdout.write(`  [${total}→${total + batchSize}] "${subtopic.name}" (${subtopic.count} q)... `);

    if (DRY_RUN) {
      console.log('[DRY-RUN — skipping API call]');
      total += batchSize;
      bySubtopic[subtopic.id] = (bySubtopic[subtopic.id] || 0) + batchSize;
      continue;
    }

    let n = 0;
    try {
      n = await generateAndInsert(topic.id, topic.name, subtopic, batchSize);
    } catch (e) {
      console.log('ERROR: ' + e.message.substring(0, 100));
    }

    if (n === 0) {
      // No questions inserted — bump subtopic count by 1 to force rotation to next subtopic
      // Prevents infinite retry loop on one problematic subtopic
      bySubtopic[subtopic.id] = (bySubtopic[subtopic.id] || 0) + 1;
      console.log('  → rotating to next subtopic');
    } else {
      total += n;
      bySubtopic[subtopic.id] = (bySubtopic[subtopic.id] || 0) + n;
      console.log('✓ +' + n + ' (total: ' + total + ')');
    }

    if (total < TARGET) await delay(DELAY_MS);
  }

  console.log(`  ✓ ${topic.name} complete: ${total}/${TARGET}`);
}

async function main() {
  console.log('=== auto-fill.js ===');
  console.log('Target: ' + TARGET + ' questions per topic');
  console.log('Batch:  ' + BATCH + ' questions per Claude call');
  if (DRY_RUN) console.log('MODE:   DRY RUN (no inserts)');
  if (topicFilter) console.log('Filter: --topic ' + topicFilter);
  console.log('');

  const topics = await getTopics();
  if (topics.length === 0) {
    console.log('No topics found' + (topicFilter ? ' with slug: ' + topicFilter : ''));
    process.exit(1);
  }

  console.log('Topics to process: ' + topics.map(t => t.name).join(', '));

  for (const topic of topics) {
    await fillTopic(topic);
  }

  console.log('\n=== Done ===');
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
