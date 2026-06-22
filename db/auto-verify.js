/**
 * auto-verify.js
 * Verifies all unverified questions using Claude as a cross-checker.
 * Approves good questions (verified=true), deletes bad ones.
 *
 * Usage:
 *   node db/auto-verify.js                  — verify all topics
 *   node db/auto-verify.js --topic ewolucja  — one topic by slug
 *   node db/auto-verify.js --dry-run         — show decisions without applying
 *   node db/auto-verify.js --keep-bad        — mark bad as verified=false (don't delete)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────────────────────

const DELAY_MS = 2000;
const MODEL = 'claude-sonnet-4-6';

// ── Load env ──────────────────────────────────────────────────────────────────

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

// ── CLI args ──────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const KEEP_BAD = args.includes('--keep-bad');
const topicFilter = (() => {
  const i = args.indexOf('--topic');
  return i >= 0 ? args[i + 1] : null;
})();

// ── HTTP helpers ──────────────────────────────────────────────────────────────

function sbRequest(method, pathStr, body) {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const headers = {
      'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY,
      'Content-Type': 'application/json; charset=utf-8'
    };
    if (bodyStr) headers['Content-Length'] = Buffer.byteLength(bodyStr, 'utf-8');
    if (method === 'POST') headers['Prefer'] = 'return=representation';

    const req = https.request({ hostname: SB_HOST, path: pathStr, method, headers }, (res) => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode >= 400) return reject(new Error('HTTP ' + res.statusCode + ': ' + d.substring(0, 150)));
        try { resolve(d ? JSON.parse(d) : null); } catch (e) { resolve(null); }
      });
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

function callClaude(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    });
    const req = https.request({
      hostname: 'api.anthropic.com', path: '/v1/messages', method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_KEY, 'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(body, 'utf-8')
      }
    }, (res) => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error('Claude HTTP ' + res.statusCode + ': ' + d.substring(0, 150)));
        try { resolve(JSON.parse(d).content[0].text); }
        catch (e) { reject(new Error('Claude parse: ' + d.substring(0, 100))); }
      });
    });
    req.on('error', reject); req.write(body); req.end();
  });
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Verification prompt ───────────────────────────────────────────────────────

function buildVerifyPrompt(q, topicName) {
  const questionJson = JSON.stringify({
    question_text: q.question_text,
    question_type: q.question_type,
    options: q.options,
    correct_answer: q.correct_answer,
    explanation: q.explanation
  }, null, 2);

  return `Jesteś biologiem i egzaminatorem CKE. Weryfikujesz pytanie testowe do przygotowania do matury z biologii (poziom rozszerzony).

TEMAT: ${topicName}

PYTANIE DO WERYFIKACJI:
${questionJson}

Oceń pytanie pod kątem WSZYSTKICH poniższych kryteriów:
1. POPRAWNOŚĆ MERYTORYCZNA — czy zaznaczona odpowiedź jest faktycznie poprawna? Czy żadna z błędnych odpowiedzi nie jest przypadkowo prawdziwa?
2. ZGODNOŚĆ Z CKE — czy temat jest w podstawie programowej matury rozszerzonej z biologii?
3. JAKOŚĆ DYSTRAKTORÓW — czy błędne odpowiedzi są wiarygodne i typowe dla błędów uczniów (nie absurdalne)?
4. JAKOŚĆ WYJAŚNIENIA — czy jest kompletne, merytoryczne, min. 2-3 zdania, wyjaśnia dlaczego poprawna jest poprawna i dlaczego pozostałe są błędne?
5. STYL CKE — czy pytanie sprawdza ROZUMIENIE i ZASTOSOWANIE (nie samo zapamiętywanie definicji)? Czy sformułowanie jest konkretne i precyzyjne?

Zwróć TYLKO JSON (zero tekstu przed i po):
{
  "approve": true,
  "issues": [],
  "confidence": 0.95
}

Zasady decyzji:
- approve: true — pytanie jest poprawne we wszystkich 5 kryteriach, można je pokazać uczniom
- approve: false — pytanie ma błąd merytoryczny, lub odpowiedź jest dyskusyjna, lub wyjaśnienie jest zbyt krótkie/błędne
- issues: lista konkretnych problemów jeśli approve=false (puste jeśli approve=true)
- confidence: twoja pewność oceny (0.0–1.0)

Zwróć TYLKO JSON.`;
}

// ── Parse verification result ─────────────────────────────────────────────────

function parseVerifyResult(text) {
  const stripped = text.replace(/^```(?:json)?\s*/m, '').replace(/\s*```\s*$/m, '').trim();
  const start = stripped.indexOf('{');
  const end = stripped.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object in response');
  return JSON.parse(stripped.substring(start, end + 1));
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function getUnverifiedQuestions(topicId) {
  let url = '/rest/v1/questions?verified=eq.false&select=id,question_text,question_type,options,correct_answer,explanation&order=created_at.asc';
  if (topicId) url += '&topic_id=eq.' + topicId;
  return sbRequest('GET', url);
}

async function getTopics() {
  let url = '/rest/v1/topics?select=id,name,slug&order=order_index';
  if (topicFilter) url += '&slug=eq.' + topicFilter;
  return sbRequest('GET', url);
}

async function setVerified(questionId) {
  return sbRequest('PATCH', '/rest/v1/questions?id=eq.' + questionId, { verified: true });
}

async function deleteQuestion(questionId) {
  return sbRequest('DELETE', '/rest/v1/questions?id=eq.' + questionId, null);
}

async function run() {
  console.log('=== auto-verify.js ===');
  if (DRY_RUN) console.log('MODE: DRY RUN (no changes)');
  if (KEEP_BAD) console.log('MODE: --keep-bad (bad questions kept, not deleted)');
  if (topicFilter) console.log('Filter: --topic ' + topicFilter);
  console.log('');

  const topics = await getTopics();
  if (!topics.length) { console.log('No topics found'); process.exit(1); }

  let totalApproved = 0, totalRejected = 0, totalErrors = 0;

  for (const topic of topics) {
    const questions = await getUnverifiedQuestions(topic.id);
    if (!questions.length) {
      console.log(`[${topic.name}] — no unverified questions, skipping`);
      continue;
    }

    console.log(`\n━━ ${topic.name} — ${questions.length} questions to verify`);
    let approved = 0, rejected = 0, errors = 0;

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const preview = q.question_text.substring(0, 55).replace(/\n/g, ' ');
      process.stdout.write(`  [${i + 1}/${questions.length}] ${preview}... `);

      if (DRY_RUN) { console.log('[DRY]'); approved++; continue; }

      try {
        const prompt = buildVerifyPrompt(q, topic.name);
        const text = await callClaude(prompt);
        const result = parseVerifyResult(text);

        if (result.approve) {
          await setVerified(q.id);
          console.log('✓ approved (conf: ' + (result.confidence || '?') + ')');
          approved++;
        } else {
          const issues = (result.issues || []).join('; ').substring(0, 80);
          if (KEEP_BAD) {
            console.log('✗ rejected (kept) — ' + issues);
          } else {
            await deleteQuestion(q.id);
            console.log('✗ deleted — ' + issues);
          }
          rejected++;
        }
      } catch (e) {
        console.log('ERR: ' + e.message.substring(0, 80));
        errors++;
      }

      if (i < questions.length - 1) await delay(DELAY_MS);
    }

    console.log(`  → ${topic.name}: ✓${approved} approved, ✗${rejected} rejected, ⚠${errors} errors`);
    totalApproved += approved;
    totalRejected += rejected;
    totalErrors += errors;
  }

  console.log(`\n=== Done ===`);
  console.log(`Total: ✓${totalApproved} approved, ✗${totalRejected} deleted, ⚠${totalErrors} errors`);
}

run().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
