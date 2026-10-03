// Fix: true_false questions with T/F ("Prawda"/"Fałsz") options were wrongly migrated to
// ['T-P','F-F'] by migrate-truefalse-answers.js. The UI treats T/F options as single choice,
// so correct_answer must be ['T'] or ['F'] (taken from options[].is_correct).
// Usage: node db/fix-truefalse-tf-options.js          (dry run)
//        node db/fix-truefalse-tf-options.js --apply  (write)

const fs = require('fs')
const path = require('path')

const env = fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8')
const get = k => (env.match(new RegExp('^' + k + '=(.*)$', 'm')) || [])[1]?.trim()
const URL = get('NEXT_PUBLIC_SUPABASE_URL')
const KEY = get('SUPABASE_SERVICE_ROLE_KEY')
const APPLY = process.argv.includes('--apply')

const headers = { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json' }

async function main() {
  const res = await fetch(`${URL}/rest/v1/questions?question_type=eq.true_false&select=id,options,correct_answer`, { headers })
  if (!res.ok) throw new Error('Fetch failed: ' + res.status)
  const rows = await res.json()

  const broken = rows.filter(q => {
    const ids = (q.options || []).map(o => o.id)
    return (ids.includes('T') || ids.includes('F')) && (q.correct_answer || []).some(c => c.includes('-'))
  })
  console.log(`Found ${broken.length} broken question(s)${APPLY ? '' : ' (dry run)'}`)

  for (const q of broken) {
    const correctOpts = q.options.filter(o => o.is_correct)
    if (correctOpts.length !== 1) {
      console.log('SKIP (expected exactly one is_correct option):', q.id)
      continue
    }
    const fixed = [correctOpts[0].id]
    console.log(q.id, JSON.stringify(q.correct_answer), '→', JSON.stringify(fixed))
    if (!APPLY) continue

    const r = await fetch(`${URL}/rest/v1/questions?id=eq.${q.id}`, {
      method: 'PATCH',
      headers: { ...headers, Prefer: 'return=minimal' },
      body: JSON.stringify({ correct_answer: fixed }),
    })
    console.log(r.ok ? '  OK' : '  ERR ' + r.status)
  }
}

main().catch(e => { console.error(e); process.exit(1) })
