/**
 * import-matura.js
 *
 * Usage:
 *   node db/import-matura.js --arkusz <path-to-arkusz.pdf> --klucz <path-to-klucz.pdf> --year 2025 --session czerwiec
 *
 * What it does:
 *   1. Parses arkusz PDF → finds all zadania + page ranges
 *   2. Identifies open questions (with key_points in klucz)
 *   3. Screenshots relevant pages → uploads to Supabase Storage
 *   4. Extracts key_points from klucz PDF
 *   5. Inserts into matura_exams + matura_questions
 */

const https = require('https')
const http  = require('http')
const fs    = require('fs')
const path  = require('path')
const { execSync, spawnSync } = require('child_process')

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w'
const STORAGE_BUCKET = 'matura-images'
const PDF_CLI = path.join(__dirname, '../node_modules/pdf-parse/bin/cli.mjs')

// ── helpers ──────────────────────────────────────────────────────────────────

function supabaseReq(method, path_, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://${URL_HOST}/rest/v1/${path_}`)
    const payload = body ? JSON.stringify(body) : null
    const opts = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method,
      headers: {
        'apikey': KEY,
        'Authorization': `Bearer ${KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
    }
    if (payload) opts.headers['Content-Length'] = Buffer.byteLength(payload)
    const r = https.request(opts, res => {
      let d = ''; res.on('data', c => d += c)
      res.on('end', () => { try { resolve({ status: res.statusCode, body: JSON.parse(d) }) } catch { resolve({ status: res.statusCode, body: d }) } })
    })
    r.on('error', reject)
    if (payload) r.write(payload)
    r.end()
  })
}

async function withRetry(fn, retries = 3, delay = 1500) {
  for (let i = 0; i < retries; i++) {
    try { return await fn() } catch (e) {
      if (i === retries - 1) throw e
      console.log(`     ↻ Retry ${i + 1}...`)
      await new Promise(r => setTimeout(r, delay))
    }
  }
}

function storageUpload(storagePath, fileBuf, contentType = 'image/png') {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://${URL_HOST}/storage/v1/object/${STORAGE_BUCKET}/${storagePath}`)
    const opts = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'apikey': KEY,
        'Authorization': `Bearer ${KEY}`,
        'Content-Type': contentType,
        'Content-Length': fileBuf.length,
        'x-upsert': 'true',
      },
    }
    const r = https.request(opts, res => {
      let d = ''; res.on('data', c => d += c)
      res.on('end', () => resolve({ status: res.statusCode, body: d }))
    })
    r.on('error', reject)
    r.write(fileBuf)
    r.end()
  })
}

function storagePublicUrl(storagePath) {
  return `https://${URL_HOST}/storage/v1/object/public/${STORAGE_BUCKET}/${storagePath}`
}

function extractPdfText(pdfPath) {
  const result = spawnSync('node', [PDF_CLI, 'text', pdfPath], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 })
  if (result.error) throw result.error
  return result.stdout
}

function screenshotPages(pdfPath, pageRange, outputDir) {
  // e.g. pageRange = '25-26'
  const result = spawnSync('node', [PDF_CLI, 'screenshot', pdfPath, '--pages', pageRange, '--scale', '1.5', '--output', outputDir], { encoding: 'utf8' })
  if (result.error) throw result.error
  // Returns list of generated files
  return fs.readdirSync(outputDir).filter(f => f.endsWith('.png')).map(f => path.join(outputDir, f))
}

// ── parse PDF text → zadanie page map ────────────────────────────────────────

function buildPageMap(text) {
  // Split by page markers '-- N of M --'
  const parts = text.split(/-- (\d+) of \d+ --/)
  const map = {}
  for (let i = 1; i < parts.length; i += 2) {
    map[parseInt(parts[i]) + 1] = parts[i + 1] || ''
  }
  return map
}

function detectZadaniePages(pageMap) {
  const zadaniePages = {}
  for (const [pageNum, content] of Object.entries(pageMap)) {
    for (const m of content.matchAll(/Zadanie (\d+)\./g)) {
      const num = parseInt(m[1])
      if (!zadaniePages[num]) zadaniePages[num] = parseInt(pageNum)
    }
  }
  return zadaniePages
}

function getZadaniePageRange(zadaniePages, num) {
  const pageNums = Object.keys(zadaniePages).map(Number).sort((a, b) => a - b)
  const idx = pageNums.indexOf(num)
  if (idx === -1) return null
  const start = zadaniePages[num]
  const end = idx + 1 < pageNums.length ? zadaniePages[pageNums[idx + 1]] - 1 : start + 1
  return { start, end }
}

// ── parse klucz → open questions + key_points ────────────────────────────────

function parseKlucz(kluczText) {
  /**
   * Returns array of:
   * { zadanieNumber: '14.2', maxPoints: 1, keyPoints: [...], modelAnswer: '...' }
   * Only for open questions (not A/B/C/D answers).
   */
  const results = []

  // Split klucz by zadanie sections
  const sections = kluczText.split(/(?=Zadanie \d+\.\d+\. \(0[–-]\d+\))/)

  for (const section of sections) {
    const headerMatch = section.match(/Zadanie (\d+\.\d+)\. \(0[–-](\d+)\)/)
    if (!headerMatch) continue

    const zadanieNumber = headerMatch[1]
    const maxPoints = parseInt(headerMatch[2])
    if (maxPoints === 0) continue

    // Skip closed questions (those with single letter answer like 'A', 'B', 'C', 'D', or P/F table)
    const rozwiazanieMatch = section.match(/Rozwiązanie\s*\n([\s\S]*?)(?:\n\n|$)/)
    if (rozwiazanieMatch) {
      const sol = rozwiazanieMatch[1].trim()
      // If solution is just a letter A-D or P/F pattern → closed question, skip
      if (/^[A-D]$/.test(sol) || /^\d+\.\s*[–-]\s*[PF]/.test(sol)) continue
    }

    // Extract "Zasady oceniania" section — contains official criteria
    const zasadyMatch = section.match(/Zasady oceniania\s*([\s\S]*?)(?:Przykładowe odpowiedzi|Rozwiązanie|$)/)
    if (!zasadyMatch) continue
    const zasady = zasadyMatch[1].trim()

    // Each "1 pkt – za ..." is a criterion
    const keyPoints = []
    for (const m of zasady.matchAll(/\d+ pkt [–-] za ([^\n]+(?:\n(?!\d+ pkt)[^\n]+)*)/g)) {
      keyPoints.push(m[1].replace(/\s+/g, ' ').trim())
    }
    if (keyPoints.length === 0) {
      // fallback: use zasady text as single key point
      keyPoints.push(zasady.replace(/\s+/g, ' ').trim())
    }

    // Extract example answer
    const przykladMatch = section.match(/Przykładowe odpowiedzi\s*([\s\S]*?)(?:Zadanie \d+|$)/)
    const modelAnswer = przykladMatch
      ? przykladMatch[1].replace(/•\s*/g, '').trim().split('\n•')[0].trim()
      : ''

    results.push({ zadanieNumber, maxPoints, keyPoints, modelAnswer })
  }

  return results
}

// ── topic slug → id mapping ───────────────────────────────────────────────────

const TOPIC_KEYWORDS = {
  'komórka i biochemia':              ['mioglobina', 'białko', 'atp', 'lizos', 'siateczka', 'aparat golgiego', 'rybos', 'mitochond', 'chloro', 'komórk', 'błon', 'fagoc', 'pinocyt'],
  'genetyka i dziedziczenie':         ['gen', 'allel', 'dziedzicz', 'rodowód', 'krzyżówk', 'dna', 'rna', 'mutacj', 'chromosom', 'mejs', 'locus', 'transkrypcj', 'translacj', 'replikacj'],
  'ewolucja':                         ['ewolucj', 'dobór naturalny', 'dobór sztuczny', 'specjacj', 'selekcj', 'adaptacj', 'filogenet', 'dryf', 'populacj', 'mutacj', 'oporność'],
  'ekologia':                         ['ekolog', 'populacj', 'biocenoz', 'ekosystem', 'łańcuch pokarm', 'sieć pokarm', 'nisza', 'konkurencj', 'pasożyt', 'symbioz', 'sukcesj', 'różnorodność'],
  'fizjologia roślin':                ['roślin', 'fotosyntez', 'transpiracja', 'korzeń', 'łodyg', 'liść', 'kwiat', 'nasion', 'owoców', 'auksyn', 'giberelinę', 'chlorofil'],
  'fizjologia człowieka — układ krążenia i oddechowy': ['krew', 'serce', 'tętnic', 'żył', 'hemoglobin', 'erytrocyt', 'leukocyt', 'płytk', 'oddech', 'płuc', 'hemoglobin', 'krążen'],
  'fizjologia człowieka — układ nerwowy i hormonalny': ['nerw', 'neuron', 'mózg', 'synapt', 'hormon', 'insulin', 'glukagon', 'adrenalin', 'tarczyc', 'przysadk'],
  'fizjologia człowieka — układ pokarmowy i wydalniczy': ['trawien', 'enzym', 'żołąd', 'jelito', 'wątrob', 'nerka', 'mocznik', 'wydaln', 'pokarm'],
  'różnorodność organizmów':          ['bakterie', 'wirusy', 'grzyb', 'protist', 'mszak', 'paproć', 'nagonas', 'okrytonas', 'ssak', 'ptak', 'gad', 'płaz', 'ryb', 'owad', 'pajęcz', 'stawonóg'],
  'biotechnologia':                   ['biotechnolog', 'inżynier genetyczn', 'klonow', 'pcr', 'elektroforez', 'restrykcyjn', 'wektorem', 'plazmid', 'gmo', 'idursulfaz', 'terapia gen'],
}

async function getTopicMap() {
  const res = await supabaseReq('GET', 'topics?select=id,slug,name', null)
  const map = {}
  for (const t of res.body) map[t.slug] = t.id
  return map
}

function guessTopicSlug(questionText, klucz_section) {
  const text = (questionText + ' ' + klucz_section).toLowerCase()
  let best = null, bestScore = 0
  for (const [name, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    const score = keywords.filter(k => text.includes(k)).length
    if (score > bestScore) { bestScore = score; best = name }
  }
  // Convert name to slug
  const slugMap = {
    'komórka i biochemia': 'komorka-i-biochemia',
    'genetyka i dziedziczenie': 'genetyka-i-dziedziczenie',
    'ewolucja': 'ewolucja',
    'ekologia': 'ekologia',
    'fizjologia roślin': 'fizjologia-roslin',
    'fizjologia człowieka — układ krążenia i oddechowy': 'fizjologia-krazenie',
    'fizjologia człowieka — układ nerwowy i hormonalny': 'fizjologia-nerwowy',
    'fizjologia człowieka — układ pokarmowy i wydalniczy': 'fizjologia-pokarmowy',
    'różnorodność organizmów': 'roznorodnosc-organizmow',
    'biotechnologia': 'biotechnologia',
  }
  return bestScore > 0 ? (slugMap[best] || null) : null
}

// ── main ─────────────────────────────────────────────────────────────────────

async function run() {
  const args = process.argv.slice(2)
  const get = (flag) => { const i = args.indexOf(flag); return i !== -1 ? args[i + 1] : null }

  const arkuszPath = get('--arkusz')
  const kluczPath  = get('--klucz')
  const year       = parseInt(get('--year') || '2025')
  const session    = get('--session') || 'czerwiec'

  if (!arkuszPath || !kluczPath) {
    console.error('Usage: node db/import-matura.js --arkusz <pdf> --klucz <pdf> --year 2025 --session czerwiec')
    process.exit(1)
  }

  console.log(`\n📄 Importing: ${year} ${session}`)
  console.log(`   Arkusz: ${arkuszPath}`)
  console.log(`   Klucz:  ${kluczPath}\n`)

  // 1. Parse texts
  console.log('1/5 Extracting text from PDFs...')
  const arkuszText = extractPdfText(arkuszPath)
  const klucztText = extractPdfText(kluczPath)

  // 2. Build page map + detect zadanie pages
  console.log('2/5 Detecting zadanie page ranges...')
  const pageMap      = buildPageMap(arkuszText)
  const zadaniePages = detectZadaniePages(pageMap)
  const totalPages   = Math.max(...Object.keys(pageMap).map(Number))
  console.log(`   Found ${Object.keys(zadaniePages).length} zadania across ${totalPages} pages`)

  // 3. Parse klucz → open questions
  console.log('3/5 Parsing klucz for open questions...')
  const openQuestions = parseKlucz(klucztText)
  console.log(`   Found ${openQuestions.length} open questions:`)
  openQuestions.forEach(q => console.log(`   - Zadanie ${q.zadanieNumber} (${q.maxPoints} pkt)`))

  if (openQuestions.length === 0) {
    console.log('No open questions found. Exiting.')
    return
  }

  // 4. Get topic map
  const topicMap = await getTopicMap()

  // 5. Insert matura_exam record
  console.log('\n4/5 Creating matura_exam record...')
  const examRes = await supabaseReq('POST', 'matura_exams', { year, session, subject: 'biologia', level: 'rozszerzony' })
  if (examRes.status !== 201) {
    // Maybe already exists — fetch it
    const existing = await supabaseReq('GET', `matura_exams?year=eq.${year}&session=eq.${session}&select=id`)
    if (!existing.body?.[0]) { console.error('Failed to create/find exam', examRes.body); process.exit(1) }
    console.log(`   Exam already exists, using id: ${existing.body[0].id}`)
    var examId = existing.body[0].id
  } else {
    var examId = examRes.body[0].id
    console.log(`   Created exam: ${examId}`)
  }

  // 6. Screenshot + upload + insert for each open question
  console.log('\n5/5 Processing questions...\n')
  const tmpDir = path.join(require('os').tmpdir(), `matura_import_${Date.now()}`)
  fs.mkdirSync(tmpDir, { recursive: true })

  for (const q of openQuestions) {
    const parentNum = parseInt(q.zadanieNumber.split('.')[0])
    const range = getZadaniePageRange(zadaniePages, parentNum)
    if (!range) {
      console.log(`   ⚠ Could not find pages for Zadanie ${parentNum}, skipping ${q.zadanieNumber}`)
      continue
    }

    const pageRange = range.start === range.end ? `${range.start}` : `${range.start}-${range.end}`
    console.log(`   Zadanie ${q.zadanieNumber}: pages ${pageRange}...`)

    // Skip if already inserted
    const existCheck = await supabaseReq('GET', `matura_questions?exam_id=eq.${examId}&zadanie_number=eq.${encodeURIComponent(q.zadanieNumber)}&select=id`, null)
    if (existCheck.body?.[0]) {
      console.log(`     ⏭ Already exists, skipping\n`)
      continue
    }

    // Screenshot
    const ssDir = path.join(tmpDir, `zadanie_${q.zadanieNumber.replace('.', '_')}`)
    fs.mkdirSync(ssDir, { recursive: true })
    const files = screenshotPages(arkuszPath, pageRange, ssDir)

    const imageUrls = []
    for (const file of files.sort()) {
      const buf = fs.readFileSync(file)
      const storagePath = `${year}/${session}/zadanie_${q.zadanieNumber.replace('.', '_')}_${path.basename(file)}`
      const upRes = await withRetry(() => storageUpload(storagePath, buf, 'image/png'))
      if (upRes.status === 200 || upRes.status === 201) {
        imageUrls.push(storagePublicUrl(storagePath))
        console.log(`     ✓ Uploaded: ${storagePath}`)
      } else {
        console.error(`     ✗ Upload failed (${upRes.status}): ${upRes.body}`)
      }
    }

    if (imageUrls.length === 0) {
      console.log(`     ⚠ No images uploaded for ${q.zadanieNumber}, skipping`)
      continue
    }

    // Guess topic
    const arkuszSection = Object.values(pageMap).slice(range.start - 1, range.end).join(' ')
    const topicSlug = guessTopicSlug(arkuszSection, q.keyPoints.join(' '))
    const topicId = topicSlug ? topicMap[topicSlug] : null
    if (topicId) console.log(`     Topic: ${topicSlug}`)
    else console.log(`     Topic: not detected`)

    // Insert matura_question
    const insertRes = await supabaseReq('POST', 'matura_questions', {
      exam_id:        examId,
      topic_id:       topicId || null,
      zadanie_number: q.zadanieNumber,
      image_url:      imageUrls.join('|'),   // '|' separated if multi-page
      page_start:     range.start,
      page_end:       range.end,
      max_points:     q.maxPoints,
      key_points:     q.keyPoints,
      model_answer:   q.modelAnswer,
    })

    if (insertRes.status === 201) {
      console.log(`     ✓ Inserted Zadanie ${q.zadanieNumber} (${q.maxPoints} pkt)\n`)
    } else {
      console.error(`     ✗ Insert failed (${insertRes.status}):`, JSON.stringify(insertRes.body).substring(0, 200))
    }
  }

  // Cleanup
  fs.rmSync(tmpDir, { recursive: true, force: true })
  console.log(`\n✅ Import complete! Exam ID: ${examId}`)
  console.log(`   Check /archiwum to see the results.`)
}

run().catch(console.error)
