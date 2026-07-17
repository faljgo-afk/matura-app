// Migration: fix correct_answer format for true_false questions
// Changes ['A', 'B'] → ['A-P', 'B-P', 'C-F'] based on options[].is_correct
// Affects all true_false questions where correct_answer has no dashes

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co'

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const data = body ? Buffer.from(JSON.stringify(body), 'utf8') : null
    const headers = {
      apikey: KEY,
      Authorization: 'Bearer ' + KEY,
      'Content-Type': 'application/json',
    }
    if (data) headers['Content-Length'] = data.length
    const req = https.request({ hostname: HOST, path, method, headers }, res => {
      let r = ''
      res.on('data', c => r += c)
      res.on('end', () => resolve({ status: res.statusCode, body: r }))
    })
    req.on('error', reject)
    if (data) req.write(data)
    req.end()
  })
}

async function main() {
  // Fetch all true_false questions
  const { status, body } = await request(
    'GET',
    '/rest/v1/questions?question_type=eq.true_false&select=id,options,correct_answer',
  )
  if (status !== 200) {
    console.error('Failed to fetch questions:', status, body)
    process.exit(1)
  }

  const questions = JSON.parse(body)
  console.log(`Found ${questions.length} true_false questions`)

  let updated = 0
  let skipped = 0

  for (const q of questions) {
    const correct = q.correct_answer
    // Skip if already in P/F format
    if (correct.some(c => c.includes('-'))) {
      skipped++
      continue
    }

    // Build new correct_answer from options[].is_correct
    const options = q.options
    if (!options || !Array.isArray(options)) {
      console.log('SKIP (no options):', q.id)
      skipped++
      continue
    }

    const newCorrect = options.map(opt =>
      opt.is_correct ? `${opt.id}-P` : `${opt.id}-F`
    )

    const { status: s, body: b } = await request(
      'PATCH',
      `/rest/v1/questions?id=eq.${q.id}`,
      { correct_answer: newCorrect }
    )

    if (s === 200 || s === 204) {
      console.log('OK', q.id, JSON.stringify(correct), '→', JSON.stringify(newCorrect))
      updated++
    } else {
      console.log('ERR', s, b.slice(0, 200))
    }
  }

  console.log(`\nDone. Updated: ${updated}, Skipped (already correct): ${skipped}`)
}

main().catch(err => { console.error(err); process.exit(1) })
