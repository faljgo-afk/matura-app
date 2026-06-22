const https = require('https')

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w'

function supabaseRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://${URL_HOST}/rest/v1/${path}`)
    const payload = body ? JSON.stringify(body) : null
    const options = {
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
    if (payload) options.headers['Content-Length'] = Buffer.byteLength(payload)
    const req = https.request(options, res => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }) }
        catch { resolve({ status: res.statusCode, body: data }) }
      })
    })
    req.on('error', reject)
    if (payload) req.write(payload)
    req.end()
  })
}

const questions = [
  {
    // CKE Matura czerwiec 2025, Zadanie 14.2
    question_text: `Leczenie gruźlicy polega na podawaniu co najmniej dwóch leków jednocześnie: rifampicyny i izoniazydu. Podawanie tylko jednego leku prowadzi początkowo do prawie całkowitego wyleczenia choroby, ale po pewnym czasie dochodzi do jej nawrotu, mimo ciągłego podawania leku.

Wyjaśnij, dlaczego podawanie tylko jednego leku prowadzi najpierw do prawie całkowitego wyleczenia gruźlicy, a następnie – do jej nawrotu. W odpowiedzi uwzględnij mechanizm działania doboru naturalnego.`,
    question_type: 'open',
    options: [],
    correct_answer: [],
    explanation: '',
    difficulty: 2,
    verified: true,
    max_points: 1,
    key_points: [
      'W populacji prątków gruźlicy istniały osobniki z mutacjami warunkującymi oporność na lek — jeden lek eliminował bakterie wrażliwe, ale osobniki oporne przeżywały i rozmnażały się (dobór naturalny), co prowadziło do nawrotu choroby wywołanej opornym szczepem.',
    ],
    model_answer: `W populacji prątków gruźlicy u pacjenta część bakterii posiadała mutacje warunkujące oporność na podawany lek. Jeden lek eliminował bakterie wrażliwe (stąd początkowo prawie całkowite wyleczenie), ale osobniki oporne na ten lek przeżywały i były faworyzowane przez dobór naturalny — miały przewagę reprodukcyjną. W kolejnych pokoleniach oporny szczep dominował w populacji, co prowadziło do nawrotu choroby mimo ciągłego podawania leku. Zastosowanie dwóch leków jednocześnie znacznie zmniejsza prawdopodobieństwo, że bakteria będzie oporna na oba jednocześnie.`,
    source: 'CKE Matura 2025 (czerwiec), Zadanie 14.2',
  },
  {
    // CKE Matura czerwiec 2025, Zadanie 20.2
    question_text: `Krępak nabrzozak (Biston betularia) to ćma występująca na pniach drzew, która ma dwie naturalne formy – jasną i ciemną, występujące w środowisku jeszcze przed rewolucją przemysłową. W Anglii na przełomie XIX i XX wieku zauważono, że populacje krępaka nabrzozaka różnią się ubarwieniem w zależności od stopnia zanieczyszczenia środowiska.

Sformułowano hipotezę, że różnice w ubarwieniu są związane z kamuflażem. Forma, która była bardziej widoczna na tle kory drzew, częściej padała ofiarą drapieżników. W wyniku rewolucji przemysłowej środowisko zostało zanieczyszczone dwutlenkiem siarki, co doprowadziło do wymarcia jasno zabarwionych nadrzewnych mchów i porostów — kora drzew stała się ciemna. Obserwacje wykazały, że w zanieczyszczonym środowisku dominuje forma ciemna, a w niezanieczyszczonym – forma jasna.

Uzasadnij, że opisana obserwacja jest dowodem na działanie doboru naturalnego, a nie – doboru sztucznego.`,
    question_type: 'open',
    options: [],
    correct_answer: [],
    explanation: '',
    difficulty: 2,
    verified: true,
    max_points: 1,
    key_points: [
      'Zmiany częstości obu form ciem były wynikiem działania naturalnych czynników środowiskowych (drapieżniki eliminujące osobniki mniej skryte) bez celowego udziału człowieka — co jest cechą doboru naturalnego, a nie sztucznego (w którym to człowiek świadomie wybiera osobniki do rozrodu).',
    ],
    model_answer: `Dobór naturalny polega na tym, że środowisko (tu: drapieżniki) bez celowego udziału człowieka eliminuje osobniki gorzej przystosowane. W opisanej obserwacji to drapieżniki — działając niezależnie od człowieka — częściej zjadały te formy ciem, które były bardziej widoczne na tle kory drzew. Człowiek nie ingerował w dobór osobników do rozrodu, co odróżnia tę sytuację od doboru sztucznego, w którym człowiek świadomie selekcjonuje osobniki o pożądanych cechach.`,
    source: 'CKE Matura 2025 (czerwiec), Zadanie 20.2',
  },
  {
    // CKE Matura czerwiec 2025, Zadanie 20.3
    question_text: `Krępak nabrzozak (Biston betularia) to ćma mająca dwie formy – jasną i ciemną. Sformułowano hipotezę, że w zanieczyszczonym środowisku (ciemna kora drzew, brak jasnych porostów) jasne owady są bardziej widoczne dla drapieżników i częściej padają ich ofiarą niż owady ciemne.

Opisz doświadczenie pozwalające na weryfikację tej hipotezy. W rozwiązaniu uwzględnij plan badania oraz sposób weryfikacji hipotezy.`,
    question_type: 'open',
    options: [],
    correct_answer: [],
    explanation: '',
    difficulty: 3,
    verified: true,
    max_points: 2,
    key_points: [
      'Plan badania: w zanieczyszczonym środowisku umieszczono równą (i ustaloną) liczbę jasnych i ciemnych form ciem na pniach drzew (z grupą kontrolną w niezanieczyszczonym środowisku lub porównaniem proporcji obu form) i obserwowano, ile osobników każdej formy zostało zjedzonych przez drapieżniki w tym samym czasie.',
      'Weryfikacja hipotezy: jeżeli w zanieczyszczonym środowisku drapieżniki zjadły istotnie więcej osobników formy jasnej niż ciemnej — hipoteza zostaje potwierdzona; jeżeli różnica nie wystąpiła — hipoteza zostaje obalona.',
    ],
    model_answer: `Plan badania: W zanieczyszczonym środowisku (ciemna kora, brak porostów) umieszczono na pniach drzew jednakową liczbę (np. po 50) jasnych i ciemnych form krępaka nabrzozaka. Jako grupę kontrolną analogiczne doświadczenie przeprowadzono w niezanieczyszczonym środowisku (jasna kora z porostami). Przez określony czas obserwowano i zliczano, ile osobników każdej formy zostało zjedzonych przez drapieżniki (ptaki).

Weryfikacja: Jeżeli w zanieczyszczonym środowisku drapieżniki zjadły istotnie więcej osobników formy jasnej niż ciemnej — hipoteza o kamuflażu jako mechanizmie doboru zostaje potwierdzona. Jeżeli różnica między liczbą zjedzonych form jasnych i ciemnych nie była istotna — hipoteza zostaje odrzucona.`,
    source: 'CKE Matura 2025 (czerwiec), Zadanie 20.3',
  },
]

async function run() {
  const topicRes = await supabaseRequest('GET', 'topics?slug=eq.ewolucja&select=id,name', null)
  if (!topicRes.body?.[0]) { console.error('Topic ewolucja not found'); process.exit(1) }
  const topicId = topicRes.body[0].id
  console.log(`Topic: ${topicRes.body[0].name} (${topicId})\n`)

  for (let i = 0; i < questions.length; i++) {
    const q = { ...questions[i], topic_id: topicId }
    const res = await supabaseRequest('POST', 'questions', q)
    if (res.status === 201) {
      console.log(`✓ Q${i + 1} [${q.max_points} pkt] ${q.source}`)
    } else {
      console.error(`✗ Q${i + 1} failed (${res.status}):`, JSON.stringify(res.body).substring(0, 200))
    }
  }
  console.log('\nDone.')
}

run().catch(console.error)
