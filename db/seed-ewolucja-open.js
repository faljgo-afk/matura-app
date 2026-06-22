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
    question_text: `Wyjaśnij, na czym polega mechanizm doboru naturalnego jako czynnika ewolucji. W odpowiedzi uwzględnij rolę zmienności dziedzicznej oraz skutek działania doboru dla puli genowej populacji.`,
    question_type: 'open',
    options: [],
    correct_answer: [],
    explanation: '',
    difficulty: 2,
    verified: true,
    max_points: 3,
    key_points: [
      'W populacji istnieje zmienność dziedziczna — osobniki różnią się cechami uwarunkowanymi genetycznie.',
      'Osobniki lepiej przystosowane do warunków środowiska mają wyższy sukces reprodukcyjny — przeżywają i pozostawiają więcej potomstwa.',
      'W kolejnych pokoleniach częstość alleli warunkujących korzystne cechy wzrasta w puli genowej populacji.',
    ],
    model_answer: `W każdej populacji osobniki różnią się cechami dziedzicznymi (zmienność dziedziczna). Część tych cech zwiększa przystosowanie do warunków środowiska, co przekłada się na wyższe szanse przeżycia i pozostawienia potomstwa (wyższy sukces reprodukcyjny). Ponieważ korzystne cechy są przekazywane potomstwu, ich częstość rośnie w kolejnych pokoleniach — pula genowa populacji zmienia się w kierunku lepszego przystosowania. Taki kierunkowy proces kumulowania się korzystnych alleli nazywamy doborem naturalnym.`,
    source: 'CKE matura rozszerzona, styl zadania 2022',
  },
  {
    question_text: `Na podstawie koncepcji Darwina wyjaśnij, w jaki sposób w populacji żyraf mogła ewoluować długa szyja. Odpowiedź oprzyj na trzech etapach: zmienność → selekcja → skutek dla populacji.`,
    question_type: 'open',
    options: [],
    correct_answer: [],
    explanation: '',
    difficulty: 2,
    verified: true,
    max_points: 3,
    key_points: [
      'W populacji żyraf występowała dziedziczna zmienność długości szyi — część osobników miała szyję nieco dłuższą, część krótszą.',
      'Żyrafy z dłuższą szyją miały dostęp do pokarmu (liści) na wyższych gałęziach, co zwiększało ich szanse przeżycia i rozmnażania — były faworyzowane przez dobór naturalny.',
      'Allele warunkujące długą szyję były częściej przekazywane potomstwu, więc w kolejnych pokoleniach średnia długość szyi w populacji wzrastała.',
    ],
    model_answer: `Zgodnie z teorią Darwina, w pradawnej populacji żyraf istniała dziedziczna zmienność długości szyi. Osobniki z dłuższą szyją mogły sięgać wyżej położonych liści, co dawało im przewagę pokarmową — przeżywały częściej i pozostawiały więcej potomstwa (wyższy sukces reprodukcyjny). Allele warunkujące dłuższą szyję były więc dziedziczone częściej niż allele krótszej szyi. W kolejnych pokoleniach odsetek osobników z długą szyją rósł, co doprowadziło do ewolucji tej cechy w całej populacji.`,
    source: 'Klasyczne zadanie maturalne CKE — teoria doboru naturalnego',
  },
  {
    question_text: `Podaj dwa różne rodzaje dowodów ewolucji (z różnych dziedzin nauki) i wyjaśnij, w jaki sposób każdy z nich świadczy o wspólnym pochodzeniu organizmów.`,
    question_type: 'open',
    options: [],
    correct_answer: [],
    explanation: '',
    difficulty: 3,
    verified: true,
    max_points: 4,
    key_points: [
      'Dowody anatomiczne (np. narządy homologiczne, np. kończyny kręgowców) — podobna budowa wewnętrzna przy różnej funkcji wskazuje na wspólnego przodka, od którego dany narząd był dziedziczony i ulegał modyfikacji.',
      'Dowody molekularne (podobieństwo sekwencji DNA lub białek) — im bliższe pokrewieństwo ewolucyjne między gatunkami, tym większy procent identycznych nukleotydów/aminokwasów, co potwierdza wspólne pochodzenie.',
      'Dowody paleontologiczne (skamieniałości i formy pośrednie) — dokumentują kolejne etapy ewolucji i formy łączące grupy organizmów, potwierdzając stopniowe zmiany w czasie geologicznym.',
      'Dowody embriologiczne (podobne stadia zarodkowe) — zarodki różnych kręgowców przechodzą przez podobne stadia rozwojowe (np. obecność gardzielowych szczelin skrzelowych), co wskazuje na wspólne dziedzictwo ewolucyjne.',
    ],
    model_answer: `Przykładowe dwie grupy dowodów:\n\n1. Dowody anatomiczne — narządy homologiczne, takie jak kończyny przednie kręgowców (skrzydło ptaka, płetwa delfina, ręka człowieka), mają identyczny plan budowy kości (humerus, radius, ulna), mimo że pełnią różne funkcje. Świadczy to o tym, że wywodzą się od tej samej struktury u wspólnego przodka i uległy modyfikacjom adaptacyjnym.\n\n2. Dowody molekularne — analiza sekwencji DNA lub białek (np. cytochromu c) wykazuje, że gatunki bliżej spokrewnione mają bardziej podobne sekwencje. Na przykład człowiek i szympans dzielą ~98,7% identycznego DNA, co potwierdza ich niedawne wspólne pochodzenie.`,
    source: 'CKE matura rozszerzona — dowody ewolucji',
  },
]

async function run() {
  // Get Ewolucja topic id
  const topicRes = await supabaseRequest('GET', 'topics?slug=eq.ewolucja&select=id,name', null)
  if (!topicRes.body?.[0]) {
    console.error('Topic ewolucja not found')
    process.exit(1)
  }
  const topicId = topicRes.body[0].id
  console.log(`Topic: ${topicRes.body[0].name} (${topicId})`)

  for (let i = 0; i < questions.length; i++) {
    const q = { ...questions[i], topic_id: topicId }
    const res = await supabaseRequest('POST', 'questions', q)
    if (res.status === 201) {
      console.log(`✓ Q${i + 1} inserted: ${q.question_text.substring(0, 60)}...`)
    } else {
      console.error(`✗ Q${i + 1} failed (${res.status}):`, JSON.stringify(res.body).substring(0, 200))
    }
  }

  console.log('\nDone. Check /topics/ewolucja/open')
}

run().catch(console.error)
