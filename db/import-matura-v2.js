#!/usr/bin/env node
// Import matura v2 — reads klucz PDF, parses all questions, uploads arkusz PDF to storage
// Usage: node db/import-matura-v2.js --arkusz <pdf> --klucz <pdf> --year 2025 --session czerwiec

const { execSync } = require('child_process')
const fs = require('fs')
const https = require('https')
const path = require('path')

const SUPABASE_URL = 'https://gzpxvfaftvkfwpvljcrk.supabase.co'
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Topic keyword detection (same as before)
const TOPIC_KEYWORDS = {
  'komorka-i-biochemia': ['białk','aminokwas','lipid','węglowodan','DNA','RNA','ATP','mitochondri','rybos','siateczk','aparat Golgiego','lizosom','chloroplast','fotosyntez','oddychanie komórkow','glikol','cykl Krebsa','enzym','błon','komórk'],
  'genetyka-i-dziedziczenie': ['gen','allel','chromosom','dziedzicz','krzyżówk','fenotyp','genotyp','mutacj','DNA','replikacj','transkrypcj','translacj','kodon','nukleotyd','dominuj','recesyw','sprzężen','rodowód'],
  'ewolucja': ['ewolucj','dobór naturalny','selekcj','adapta','specjacj','filogene','paleontolog','homolog','analogicz','biogeografi','populacj genety'],
  'ekologia': ['ekologi','ekosystem','biocenoz','biom','łańcuch pokarmow','sieć pokarmow','producent','konsument','decomposer','nisza ekolog','konkurencj','symbioz','pasożyt','populacj','ochrona przyrody'],
  'fizjologia-roslin': ['roślina','fotosyntez','transpiracji','osmoz','turgor','korzeń','łodyg','liść','chlorofil','auksynu','cytokinin','giberelin','kwiat','nasieni','zapylan'],
  'fizjologia-czlowieka-krazenie-oddychanie': ['serce','krew','tętnica','żyła','naczyni','hemoglob','erytrocyt','leukocyt','płytk','krążen','ciśnien','płuco','tchawic','oskrzel','oddychani','wentylacj','wymiana gazow'],
  'fizjologia-czlowieka-nerwowy-hormonalny': ['neuron','synaps','neurotransmiter','mózg','rdzeń','nerw','hormony','insulina','glukagon','kortyzol','adrenalin','tarczyc','nadnercz','przysadk','podwzgórz'],
  'fizjologia-czlowieka-pokarmowy-wydalniczy': ['trawien','żołądek','jelito','wątorb','trzustk','enzym','nerka','mocznik','homeostaz','osmola','wydalani'],
  'roznorodnosc-organizmow': ['bakterie','wirus','grzyb','porost','mszak','paproć','nagonasienni','okrytonasienni','gąbki','parzydełkowce','pierścienice','stawonogi','owad','ryby','płazy','gady','ptaki','ssaki','taksonomia','systematyk'],
  'biotechnologia': ['biotechnologi','inżynier genetyczn','PCR','elektroforez','klonowani','terapia genow','GMO','plazmid','enzym restrykcyjn','sekwencjonowanie'],
}

function detectTopic(text) {
  const lower = text.toLowerCase()
  const scores = {}
  for (const [slug, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    scores[slug] = keywords.filter(kw => lower.includes(kw.toLowerCase())).length
  }
  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]
  return best[1] >= 2 ? best[0] : null
}

function parseArgs() {
  const args = {}
  process.argv.slice(2).forEach((arg, i, arr) => {
    if (arg.startsWith('--')) args[arg.slice(2)] = arr[i + 1]
  })
  return args
}

// Extract text from PDF using pdf-parse CLI
function extractPdfText(pdfPath) {
  return execSync(
    `node node_modules/pdf-parse/bin/cli.mjs text "${pdfPath}"`,
    { maxBuffer: 20 * 1024 * 1024 }
  ).toString('utf8')
}

// ─── Klucz Parser ────────────────────────────────────────────────────────────

function parseKlucz(text) {
  const questions = []

  // Match "Zadanie X.Y. (0–N)" and "Zadanie X. (0–N)" (with en-dash or hyphen)
  const ZADANIE_RE = /Zadanie (\d+(?:\.\d+)?)\.\s*\(0[–\-](\d+)\)/g
  const matches = [...text.matchAll(ZADANIE_RE)]

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i]
    const next = matches[i + 1]
    const num = match[1]
    const maxPts = parseInt(match[2])
    const block = text.slice(match.index, next ? next.index : text.length)

    const q = parseBlock(num, maxPts, block)
    questions.push(q)
  }

  return questions
}

function parseBlock(num, maxPoints, block) {
  // ── 1. Try to detect "Rozwiązanie\n<answer>" ──
  const rozMatch = block.match(/Rozwiązanie\s*\n([\s\S]*?)(?=Zasady oceniania|Przykładow[ae]|Uwaga:|$)/)
  if (rozMatch) {
    const answer = rozMatch[1].trim()
    const firstLine = answer.split('\n')[0].trim()
    const parsed = classifyAnswer(firstLine)
    if (parsed) {
      return {
        zadanie_number: num,
        max_points: maxPoints,
        question_type: parsed.type,
        correct_answer: parsed.correct_answer,
        num_statements: parsed.num_statements ?? null,
        key_points: [],
        model_answer: null,
      }
    }
    // Open question with a Rozwiązanie block (table/assignment answers)
    const keyPoints = extractKeyPoints(block, maxPoints)
    const exampleAnswer = extractModelAnswer(block)
    return {
      zadanie_number: num,
      max_points: maxPoints,
      question_type: 'open',
      correct_answer: null,
      num_statements: null,
      key_points: keyPoints,
      // Prefer explicit example answer; fall back to Rozwiązanie block
      model_answer: exampleAnswer ?? answer.slice(0, 1000),
      topic_slug: detectTopic(block.slice(0, 300)),
    }
  }

  // ── 2. Open question with no Rozwiązanie ──
  const keyPoints = extractKeyPoints(block, maxPoints)
  const modelAnswer = extractModelAnswer(block)

  return {
    zadanie_number: num,
    max_points: maxPoints,
    question_type: 'open',
    correct_answer: null,
    num_statements: null,
    key_points: keyPoints,
    model_answer: modelAnswer,
    topic_slug: detectTopic(block.slice(0, 300)),
  }
}

function classifyAnswer(answer) {
  // Single letter: A B C D
  if (/^[A-D]$/.test(answer)) {
    return { type: 'single', correct_answer: { letter: answer } }
  }

  // Compound single: B1, B2, A1, etc.
  if (/^[A-D]\d$/.test(answer)) {
    return { type: 'single', correct_answer: { letter: answer } }
  }

  // Multiple letters: A, C
  if (/^[A-D](,\s*[A-D])+$/.test(answer)) {
    const letters = answer.split(',').map(s => s.trim())
    return { type: 'multiple', correct_answer: { letters } }
  }

  // True/False with P/F (Prawda/Fałsz): "1. – P, 2. – F."
  // Pattern: digit, optional dot, optional spaces, dash or en-dash, spaces, P or F
  if (/\d+\.?\s*[-–]\s*[PF]/i.test(answer)) {
    const pattern = parsePFPattern(answer, ['P', 'F'])
    if (pattern.length > 0) {
      return { type: 'true_false', correct_answer: { pattern }, num_statements: pattern.length }
    }
  }

  // True/False with T/N (Tak/Nie): "1. – T, 2. – N, 3. – T."
  if (/\d+\.?\s*[-–]\s*[TN]/i.test(answer)) {
    const raw = parsePFPattern(answer, ['T', 'N'])
    const pattern = raw.map(v => v === 'T' ? 'P' : 'F')
    if (pattern.length > 0) {
      return { type: 'true_false', correct_answer: { pattern }, num_statements: pattern.length }
    }
  }

  // Couldn't classify → open
  return null
}

function parsePFPattern(text, tokens) {
  const [trueToken, falseToken] = tokens
  // Match "N. – X" or "N– X" where X is P/F or T/N
  const re = new RegExp(`\\d+\\.?\\s*[-–]\\s*([${trueToken}${falseToken}])`, 'gi')
  const matches = [...text.matchAll(re)]
  return matches.map(m => m[1].toUpperCase())
}

function extractKeyPoints(block, maxPoints) {
  // Find text between "Zasady oceniania" and next section marker
  const zasadyMatch = block.match(/Zasady oceniania\s*\n([\s\S]*?)(?=Przykładow[ae]|Uwaga:|Rozwiązanie|$)/)
  if (!zasadyMatch) return []

  const zasadyText = zasadyMatch[1].trim()

  // Extract "N pkt – za ..." lines (only lines with N > 0)
  const ptLines = [...zasadyText.matchAll(/(\d+)\s*pkt\s*[–-]\s*za\s*([\s\S]*?)(?=\d+\s*pkt\s*[–-]|$)/gi)]
  const criteria = ptLines
    .filter(m => parseInt(m[1]) > 0)
    .map(m => m[2].trim().replace(/\s+/g, ' ').replace(/\s*0\s*pkt\s*[–-].*$/i, '').trim())
    .filter(Boolean)

  if (criteria.length > 0) return criteria

  // Fallback: whole zasady block, strip trailing "0 pkt" sentence
  const clean = zasadyText
    .replace(/\s+/g, ' ')
    .replace(/\s*0\s*pkt\s*[–-].*$/i, '')
    .trim()
  if (clean.length > 10) return [clean]
  return []
}

function extractModelAnswer(block) {
  const match = block.match(/Przykładow[ae] odpowied[zź][^:]*:?\s*\n([\s\S]*?)(?=Uwaga:|Zadanie \d|$)/i)
  if (!match) return null
  return match[1].replace(/^[•\-]\s*/gm, '').trim().slice(0, 1000)
}

// ─── Supabase REST helpers ────────────────────────────────────────────────────

function supabaseRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const data = body ? Buffer.from(JSON.stringify(body)) : null
    const options = {
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/' + path,
      method,
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        ...(data ? { 'Content-Length': data.length } : {}),
      },
    }
    const req = https.request(options, res => {
      let raw = ''
      res.on('data', chunk => (raw += chunk))
      res.on('end', () => {
        try { resolve(raw ? JSON.parse(raw) : null) }
        catch { resolve(raw) }
      })
    })
    req.on('error', reject)
    if (data) req.write(data)
    req.end()
  })
}

async function uploadPdf(filePath, year, session) {
  const fileData = fs.readFileSync(filePath)
  const storagePath = `${year}/${session}/arkusz.pdf`
  const bucket = 'matura-images'

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: `/storage/v1/object/${bucket}/${storagePath}`,
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/pdf',
        'Content-Length': fileData.length,
        'x-upsert': 'true',
      },
    }
    const req = https.request(options, res => {
      let raw = ''
      res.on('data', chunk => (raw += chunk))
      res.on('end', () => {
        const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${storagePath}`
        console.log(`   ✓ PDF uploaded: ${publicUrl}`)
        resolve(publicUrl)
      })
    })
    req.on('error', reject)
    req.write(fileData)
    req.end()
  })
}

async function getExamId(year, session) {
  const data = await supabaseRequest('GET', `matura_exams?year=eq.${year}&session=eq.${session}&select=id`)
  if (data && data[0]) return data[0].id
  return null
}

async function upsertExam(year, session, pdfUrl) {
  let id = await getExamId(year, session)
  if (id) {
    await supabaseRequest('PATCH', `matura_exams?id=eq.${id}`, { pdf_url: pdfUrl })
    console.log(`   Exam exists, updated pdf_url. id: ${id}`)
  } else {
    const res = await supabaseRequest('POST', 'matura_exams', {
      year, session, subject: 'biologia', level: 'rozszerzony', pdf_url: pdfUrl
    })
    id = res[0].id
    console.log(`   Created exam. id: ${id}`)
  }
  return id
}

async function deleteExistingQuestions(examId) {
  await supabaseRequest('DELETE', `matura_questions?exam_id=eq.${examId}`, null)
  console.log('   Deleted existing questions')
}

async function getTopicId(slug) {
  if (!slug) return null
  const data = await supabaseRequest('GET', `topics?slug=eq.${slug}&select=id`)
  return data && data[0] ? data[0].id : null
}

async function insertQuestion(examId, q) {
  const topicId = await getTopicId(q.topic_slug || null)
  const row = {
    exam_id: examId,
    topic_id: topicId,
    zadanie_number: q.zadanie_number,
    question_type: q.question_type,
    max_points: q.max_points,
    correct_answer: q.correct_answer ?? null,
    num_statements: q.num_statements ?? null,
    key_points: q.key_points ?? [],
    model_answer: q.model_answer ?? null,
  }
  await supabaseRequest('POST', 'matura_questions', row)
}

// ─── Compound grid detection from arkusz ─────────────────────────────────────

function getArkuszBlock(arkuszText, num) {
  const escaped = num.replace(/\./g, '\\.')
  const re = new RegExp(`Zadanie\\s+${escaped}\\.([\\s\\S]{0,2000}?)(?=Zadanie\\s+\\d|$)`)
  const m = arkuszText.match(re)
  return m ? m[1] : ''
}

function detectCompoundGrid(arkuszText, num) {
  // For sub-questions like "5.1", also try parent "5"
  const parentNum = num.includes('.') ? num.split('.')[0] : null
  const block = getArkuszBlock(arkuszText, num) || (parentNum ? getArkuszBlock(arkuszText, parentNum) : '')

  let rows = 3, cols = 3

  // "odpowiedź A albo B" → rows=2; "odpowiedź A, B albo C" → rows=3
  const letterMatch = block.match(/odpowied[zź]\s+([A-C](?:[,\s]+[A-C])*\s+albo\s+[A-C])/i)
  if (letterMatch) {
    const letters = [...new Set((letterMatch[1].match(/[A-C]/g) || []).map(l => l.toUpperCase()))]
    rows = letters.length
  }

  // "odpowiedź 1. albo 2." → cols=2; "odpowiedź 1., 2. albo 3." → cols=3
  const digitMatch = block.match(/odpowied[zź]\s+(\d+\.?(?:[,\s]+\d+\.?)*\s+albo\s+\d+\.?)/i)
  if (digitMatch) {
    const digits = (digitMatch[1].match(/\d+/g) || []).map(Number)
    cols = Math.max(...digits)
  }

  return { rows, cols }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs()
  if (!args.arkusz || !args.klucz || !args.year || !args.session) {
    console.error('Usage: node import-matura-v2.js --arkusz <pdf> --klucz <pdf> --year 2025 --session czerwiec')
    process.exit(1)
  }

  console.log(`\n📄 Importing: ${args.year} ${args.session}`)
  console.log(`   Arkusz: ${args.arkusz}`)
  console.log(`   Klucz:  ${args.klucz}\n`)

  // 1. Parse klucz + arkusz
  console.log('1/4 Extracting klucz and arkusz text...')
  const kluczText = extractPdfText(args.klucz)
  const arkuszText = extractPdfText(args.arkusz)

  console.log('2/4 Parsing questions from klucz...')
  const questions = parseKlucz(kluczText)

  // Enrich compound single answers with grid dimensions from arkusz
  for (const q of questions) {
    if (q.question_type === 'single' && q.correct_answer?.letter && /^[A-Z]\d$/.test(q.correct_answer.letter)) {
      const { rows, cols } = detectCompoundGrid(arkuszText, q.zadanie_number)
      q.correct_answer = { ...q.correct_answer, rows, cols }
    }
  }

  console.log(`   Found ${questions.length} questions:`)
  for (const q of questions) {
    const grid = q.correct_answer?.rows ? ` [${q.correct_answer.rows}×${q.correct_answer.cols}]` : ''
    console.log(`   - Zadanie ${q.zadanie_number} (${q.max_points} pkt) [${q.question_type}]${grid}`)
  }

  // 3. Upload PDF
  console.log('\n3/4 Uploading arkusz PDF...')
  const pdfUrl = await uploadPdf(args.arkusz, args.year, args.session)

  // 4. DB
  console.log('\n4/4 Saving to database...')
  const examId = await upsertExam(parseInt(args.year), args.session, pdfUrl)
  await deleteExistingQuestions(examId)

  for (const q of questions) {
    await insertQuestion(examId, q)
    process.stdout.write(`   ✓ Zadanie ${q.zadanie_number}\n`)
  }

  console.log(`\n✅ Import complete! ${questions.length} questions saved.`)
  console.log(`   Exam ID: ${examId}`)
  console.log(`   PDF URL: ${pdfUrl}`)
}

main().catch(err => { console.error(err); process.exit(1) })
