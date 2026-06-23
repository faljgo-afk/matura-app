const https = require('https')

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co'
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

function req(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://${URL_HOST}/rest/v1/${path}`)
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

const patches = [
  {
    source: 'CKE Matura 2025 (czerwiec), Zadanie 14.2',
    // Official criterion: presence of resistant bacteria + natural selection mechanism (survival + multiplication)
    key_points: [
      'W populacji prątków gruźlicy naturalnie istniały nieliczne komórki oporne na lek (z mutacjami oporności).',
      'Lek eliminował bakterie wrażliwe, ale oporne przeżywały i namnażały się (mechanizm doboru naturalnego), co prowadziło do nawrotu choroby wywołanej opornym szczepem.',
    ],
    model_answer: `Populacja prątków gruźlicy składa się w większości z komórek wrażliwych na lek, ale nieliczne bakterie są dzięki posiadanym mutacjom na niego oporne. Po podaniu jednego leku wrażliwe komórki obumierają (stąd prawie całkowite wyleczenie), ale oporne przeżywają i namnażają się — mechanizm doboru naturalnego prowadzi do wzrostu częstości opornych komórek w populacji, co skutkuje nawrotem choroby. Podawanie dwóch leków jednocześnie praktycznie wyklucza możliwość, że jakaś komórka będzie oporna na oba leki jednocześnie.`,
  },
  {
    source: 'CKE Matura 2025 (czerwiec), Zadanie 20.2',
    // Official criterion: brak celowego działania ze strony człowieka
    key_points: [
      'Zmiany częstości obu form ciem nastąpiły bez celowego działania człowieka — to drapieżniki (czynnik naturalny) eliminowały osobniki bardziej widoczne, a nie człowiek świadomie wybierał osobniki do rozrodu (co byłoby doborem sztucznym).',
    ],
    model_answer: `Dobór sztuczny polega na tym, że człowiek celowo selekcjonuje osobniki o pożądanych cechach do rozrodu. W opisanej obserwacji człowiek nie ingerował w dobór osobników — zanieczyszczenie środowiska (ciemna kora) było co prawda skutkiem działalności człowieka, ale nie były to celowe działania mające na celu selekcję ciem. Selekcji dokonały drapieżniki działające niezależnie od woli człowieka, co jest cechą doboru naturalnego.`,
  },
  {
    source: 'CKE Matura 2025 (czerwiec), Zadanie 20.3',
    // Official criteria: plan doświadczenia (1 pkt) + sposób wnioskowania (1 pkt)
    key_points: [
      'Plan doświadczenia: w zanieczyszczonym środowisku (ciemna kora drzew) wypuszczono równą liczbę jasnych i ciemnych osobników krępaka nabrzozaka i po ustalonym czasie zliczono, ile osobników każdej formy zostało upolowanych przez drapieżniki.',
      'Weryfikacja hipotezy: jeżeli wśród upolowanych przez drapieżniki owadów przeważają osobniki jasne — hipoteza zostaje potwierdzona; jeżeli różnica nie wystąpiła — hipoteza zostaje obalona.',
    ],
    model_answer: `Plan doświadczenia: W zanieczyszczonym środowisku (drzewa z ciemną korą, bez jasnych porostów) wypuszczono równą liczbę (np. po 50) jasnych i ciemnych form krępaka nabrzozaka. Po ustalonym czasie obserwowano i zliczano, ile osobników każdej formy zostało upolowanych przez drapieżniki (ptaki).

Weryfikacja hipotezy: Jeżeli wśród upolowanych owadów przeważały osobniki jasne — hipoteza, że w zanieczyszczonym środowisku jasne owady częściej padają ofiarą drapieżników, zostaje potwierdzona. Jeżeli różnica między liczbą upolowanych form jasnych i ciemnych nie była istotna — hipoteza zostaje odrzucona.`,
  },
]

async function run() {
  for (const patch of patches) {
    // Find question by source
    const findRes = await req('GET', `questions?source=eq.${encodeURIComponent(patch.source)}&select=id,source`, null)
    if (!findRes.body?.[0]) {
      console.error(`✗ Not found: ${patch.source}`)
      continue
    }
    const id = findRes.body[0].id

    const updateRes = await req('PATCH', `questions?id=eq.${id}`, {
      key_points: patch.key_points,
      model_answer: patch.model_answer,
    })
    if (updateRes.status === 200) {
      console.log(`✓ Updated: ${patch.source}`)
    } else {
      console.error(`✗ Failed (${updateRes.status}): ${patch.source}`, JSON.stringify(updateRes.body).substring(0, 200))
    }
  }
  console.log('\nDone.')
}

run().catch(console.error)
