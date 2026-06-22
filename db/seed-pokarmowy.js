const https = require('https')

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w'

const TOPIC_ID   = 'b876f606-00ef-4586-81c2-82d3fe69e97d'
const SUB = {
  weglowodany: '60fed091-5212-4c65-b9fa-a1c959253a9c',
  bialka:      '013f473b-19f6-46d8-8cb1-44057ec6d0a7',
  tluszcze:    '09368317-490e-4c23-a959-bae8e1e9a1ed',
  wchlanianie: '297c84c0-0408-498b-8f51-15ff9eed9939',
  watroba:     '66f677dd-0e93-4a2b-acac-d7af8a2b6082',
  mikrobiom:   '97c24e5a-7597-4d3e-8678-1e04184e906d',
  nerki:       '822e422f-2309-42e6-9572-8d0dbda9c811',
  mocz:        'caceb5e0-d63e-4c62-9bcd-faac6e5baa3a',
  regulacja:   '7bd4a3e4-c538-4ad2-9f34-600d3c99dcce',
}

function supabaseRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null
    const options = {
      hostname: URL_HOST,
      path: '/rest/v1/' + path,
      method,
      headers: {
        'apikey': KEY,
        'Authorization': `Bearer ${KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
        ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {}),
      },
    }
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

  // ── CLOSED 1: single — Trawienie białek ──────────────────────────────────
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUB.bialka,
    question_type: 'single',
    difficulty: 2,
    verified: true,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPepsyna jest enzymem proteolitycznym, który:',
    options: [
      { id: 'A', text: 'jest wydzielana w postaci aktywnej przez komórki okładzinowe żołądka', is_correct: false },
      { id: 'B', text: 'katalizuje hydrolizę białek w kwaśnym środowisku żołądka (pH 1,5–2)', is_correct: true },
      { id: 'C', text: 'rozkłada białka do aminokwasów w jelicie cienkim przy udziale żółci', is_correct: false },
      { id: 'D', text: 'działa optymalnie w środowisku zasadowym i jest wydzielana przez trzustkę', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Pepsyna jest wydzielana przez komórki główne żołądka jako nieaktywny pepsynogen, który ulega aktywacji pod wpływem kwasu solnego (HCl) produkowanego przez komórki okładzinowe. Optymalne pH działania pepsyny wynosi 1,5–2 — jest ona więc typowym enzymem żołądkowym. W alkalicznym środowisku jelita cienkiego pepsyna jest inaktywowana, a trawienie białek kontynuują enzymy trzustkowe (trypsyna, chymotrypsyna). Żółć nie trawi białek — emulguje tłuszcze.',
  },

  // ── CLOSED 2: true_false — Powstawanie moczu ─────────────────────────────
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUB.mocz,
    question_type: 'true_false',
    difficulty: 2,
    verified: true,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących powstawania moczu w nerkach.',
    options: [
      { id: 'A', text: 'W kłębuszku nerkowym glukoza przedostaje się do moczu pierwotnego.', is_correct: true },
      { id: 'B', text: 'Reabsorpcja glukozy zachodzi głównie w kanaliku zbiorczym.', is_correct: false },
      { id: 'C', text: 'Hormon ADH zwiększa przepuszczalność kanalika zbiorczego dla wody, zmniejszając objętość moczu.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A – Prawda: filtracja kłębuszkowa jest nieselektywna (nie dotyczy białek i komórek krwi) — glukoza, aminokwasy, mocznik i inne małe cząsteczki przechodzą do przesączu. B – Fałsz: glukoza jest reabsorbowana niemal w całości w kanaliku krętym I rzędu (bliższym) za pomocą transportu aktywnego. Kanalik zbiorczy odpowiada głównie za regulację wody i elektrolitów. C – Prawda: ADH (wazopresyna) produkowana przez podwzgórze i uwalniana przez przysadkę zwiększa ekspresję akwaporyn w kanaliku zbiorczym, co umożliwia reabsorpcję wody i zagęszczenie moczu.',
  },

  // ── CLOSED 3: single — Budowa nerek ──────────────────────────────────────
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUB.nerki,
    question_type: 'single',
    difficulty: 2,
    verified: true,
    question_text: 'Które z poniższych zestawień prawidłowo przyporządkowuje strukturę nefronu do pełnionej przez nią funkcji?',
    options: [
      { id: 'A', text: 'Kłębuszek naczyniowy → reabsorpcja glukozy i aminokwasów', is_correct: false },
      { id: 'B', text: 'Kanalik kręty I rzędu → filtracja krwi pod wysokim ciśnieniem', is_correct: false },
      { id: 'C', text: 'Pętla Henlego → zagęszczanie moczu poprzez wytworzenie gradientu osmotycznego w rdzeniu nerki', is_correct: true },
      { id: 'D', text: 'Kanalik zbiorczy → wydzielanie reniny regulującej ciśnienie krwi', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Pętla Henlego (ramię zstępujące i wstępujące) wytwarza gradient osmotyczny w rdzeniu nerki, który jest niezbędny do zagęszczania moczu w kanaliku zbiorczym. Kłębuszek naczyniowy odpowiada za filtrację krwi (nie reabsorpcję). Reabsorpcja glukozy i aminokwasów zachodzi w kanaliku krętym I rzędu (bliższym). Reninę wydzielają komórki aparatu przykłębuszkowego — nie kanalik zbiorczy.',
  },

  // ── CLOSED 4: multiple — Wchłanianie w jelicie cienkim ───────────────────
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUB.wchlanianie,
    question_type: 'multiple',
    difficulty: 2,
    verified: true,
    question_text: 'Zaznacz wszystkie substancje, które są wchłaniane bezpośrednio do naczyń krwionośnych (włosowatych) kosmków jelitowych — a nie do naczyń limfatycznych.',
    options: [
      { id: 'A', text: 'Glukoza', is_correct: true },
      { id: 'B', text: 'Kwasy tłuszczowe długołańcuchowe', is_correct: false },
      { id: 'C', text: 'Aminokwasy', is_correct: true },
      { id: 'D', text: 'Chylomikrony', is_correct: false },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'Glukoza (produkt trawienia węglowodanów) i aminokwasy (produkty trawienia białek) są wchłaniane do naczyń włosowatych krwionośnych w kosmkach jelitowych i transportowane żyłą wrotną do wątroby. Natomiast kwasy tłuszczowe długołańcuchowe i glicerol są w enterocytach ponownie syntetyzowane do trójglicerydów i pakowane w chylomikrony, które są wydzielane do naczyń limfatycznych (chłonki). Droga limfatyczna omija wątrobę.',
  },

  // ── CLOSED 5: true_false — Rola wątroby ──────────────────────────────────
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUB.watroba,
    question_type: 'true_false',
    difficulty: 3,
    verified: true,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących roli wątroby w metabolizmie.',
    options: [
      { id: 'A', text: 'Żółć produkowana przez wątrobę zawiera enzymy trawienne rozkładające tłuszcze.', is_correct: false },
      { id: 'B', text: 'Wątroba przekształca nadmiar amoniaku (produkt katabolizmu aminokwasów) w mocznik wydalany z moczem.', is_correct: true },
      { id: 'C', text: 'Glikogen zmagazynowany w wątrobie może być rozkładany do glukozy i uwalniany do krwi podczas hipoglikemii.', is_correct: true },
    ],
    correct_answer: ['A-F', 'B-P', 'C-P'],
    explanation: 'A – Fałsz: żółć nie zawiera enzymów trawiennych. Jej funkcją jest emulgacja tłuszczów — zwiększenie powierzchni kontaktu z lipazą trzustkową. Enzymy trawiące tłuszcze (lipazy) są wydzielane przez trzustkę. B – Prawda: wątroba przeprowadza cykl mocznikowy, w którym toksyczny amoniak (NH₃) powstający z dezaminacji aminokwasów jest przekształcany w mocznik (CO(NH₂)₂), wydalany przez nerki. C – Prawda: wątroba pełni kluczową rolę w homeostazji glukozy — magazynuje glikogen (glikogenogeneza) i rozkłada go do glukozy (glikogenoliza) gdy stężenie glukozy we krwi spada.',
  },

  // ── OPEN 1: Trawienie białek — 2 pkt ─────────────────────────────────────
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUB.bialka,
    question_type: 'open',
    difficulty: 2,
    verified: true,
    max_points: 2,
    question_text: 'Trawienie białek przebiega sekwencyjnie — najpierw w żołądku, a następnie w jelicie cienkim. Wyjaśnij, dlaczego te dwa etapy wymagają różnych wartości pH. W odpowiedzi podaj nazwy enzymów działających w każdym z tych środowisk oraz wyjaśnij, co aktywuje enzymy żołądkowe.',
    options: [],
    correct_answer: [],
    explanation: '',
    key_points: [
      'Pepsyna działa optymalnie w kwaśnym środowisku żołądka (pH ~2) i jest aktywowana przez HCl wydzielany przez komórki okładzinowe; w postaci nieaktywnej (pepsynogen) jest produkowana przez komórki główne.',
      'W jelicie cienkim środowisko jest zasadowe (pH 7–8) dzięki wodorowęglanom z trzustki; działają tu enzymy trzustkowe (trypsyna, chymotrypsyna) i jelitowe (peptydazy), które rozkładają polipeptydy do aminokwasów.',
    ],
    model_answer: 'W żołądku trawienie białek katalizuje pepsyna — enzym działający optymalnie przy pH 1,5–2. Wydzielana jest w postaci nieaktywnego pepsynogenu przez komórki główne żołądka i aktywowana przez HCl produkowany przez komórki okładzinowe. Pepsyna przeprowadza wstępną hydrolizę białek do polipeptydów.\nW jelicie cienkim treść żołądkowa jest neutralizowana przez wodorowęglany (z trzustki i śluzówki jelita), a pH wzrasta do 7–8. W tym środowisku zasadowym działają trypsyna i chymotrypsyna (enzymy trzustkowe) oraz peptydazy (jelitowe), które dokańczają trawienie do wolnych aminokwasów wchłanianych do krwi.',
    source: 'własne, wzorowane na CKE',
  },

  // ── OPEN 2: Powstawanie moczu — ADH — 2 pkt ──────────────────────────────
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUB.mocz,
    question_type: 'open',
    difficulty: 2,
    verified: true,
    max_points: 2,
    question_text: 'Osoba wypiła dużą ilość wody morskiej (słonej). Wyjaśnij, jak zmieni się stężenie hormonu ADH we krwi tej osoby oraz jaki będzie to miało wpływ na objętość i stężenie wydalanego moczu. Uwzględnij w odpowiedzi mechanizm działania ADH na poziomie komórkowym.',
    options: [],
    correct_answer: [],
    explanation: '',
    key_points: [
      'Wzrost osmolarności osocza (spowodowany nadmiarem NaCl) pobudza osmoreceptory podwzgórza, które zwiększają wydzielanie ADH przez tylny płat przysadki mózgowej — stężenie ADH we krwi rośnie.',
      'ADH zwiększa przepuszczalność kanalika zbiorczego dla wody poprzez wbudowanie akwaporyn w błonę komórkową; woda jest reabsorbowana, mocz staje się zagęszczony i jego objętość maleje.',
    ],
    model_answer: 'Woda morska zawiera dużo soli (NaCl), co podnosi osmolarność osocza. Osmoreceptory w podwzgórzu rejestrują ten wzrost i pobudzają tylny płat przysadki mózgowej do zwiększonego uwalniania ADH (wazopresyny) — jego stężenie we krwi rośnie.\nADH wiąże się z receptorami komórek kanalika zbiorczego, co powoduje wbudowanie akwaporyn (kanałów wodnych) do błony luminalnej. Przepuszczalność kanalika dla wody wzrasta, woda jest reabsorbowana do krwi zgodnie z gradientem osmotycznym wytworzonym przez pętlę Henlego. Efekt: mocz staje się silnie zagęszczony, a jego objętość znacznie maleje. Pomimo tego mechanizmu woda morska powoduje odwodnienie — utrata soli z moczem jest niewystarczająca, by zrównoważyć nadmiar NaCl.',
    source: 'własne, wzorowane na CKE',
  },

  // ── OPEN 3: Mikrobiom jelitowy — 2 pkt ───────────────────────────────────
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUB.mikrobiom,
    question_type: 'open',
    difficulty: 2,
    verified: true,
    max_points: 2,
    question_text: 'Jelito grube człowieka zasiedlają miliardy mikroorganizmów tworzących mikrobiotę jelitową. Podaj dwa różne przykłady korzyści, jakie organizm człowieka czerpie z bytowania tych mikroorganizmów, i wyjaśnij mechanizm każdej z nich.',
    options: [],
    correct_answer: [],
    explanation: '',
    key_points: [
      'Synteza witamin (np. witaminy K, witamin z grupy B — biotyny, folianów): bakterie jelitowe syntetyzują te witaminy, które następnie są wchłaniane przez nabłonek jelita i wykorzystywane przez organizm.',
      'Ochrona przed patogenami (kolonizacja ochronna): mikrobiota zajmuje dostępne nisze ekologiczne w jelicie i konkuruje z patogenami o substancje odżywcze i miejsca przyczepu do nabłonka, uniemożliwiając im namnażanie się.',
    ],
    model_answer: '1. Synteza witamin: bakterie jelitowe (np. Bacteroides, Bifidobacterium) syntetyzują witaminę K (niezbędną do krzepnięcia krwi) oraz witaminy z grupy B (biotynę, foliany). Witaminy te są wchłaniane przez nabłonek okrężnicy i uzupełniają ich niedobory w organizmie.\n2. Ochrona przed patogenami (efekt bariery): mikrobiota zasiedla nabłonek jelita i produkuje substancje przeciwdrobnoustrojowe (bakteriocyny, kwasy organiczne). Konkuruje z drobnoustrojami chorobotwórczymi o substancje odżywcze i miejsca przyczepu do enterocytów, uniemożliwiając kolonizację przez patogeny takie jak Clostridium difficile.',
    source: 'własne, wzorowane na CKE',
  },

]

async function main() {
  console.log(`Inserting ${questions.length} questions for Układ pokarmowy i wydalniczy...`)
  for (const q of questions) {
    const row = {
      topic_id: q.topic_id,
      subtopic_id: q.subtopic_id,
      question_type: q.question_type,
      difficulty: q.difficulty,
      verified: q.verified,
      question_text: q.question_text,
      options: q.options,
      correct_answer: q.correct_answer,
      explanation: q.explanation || '',
      ...(q.max_points != null ? { max_points: q.max_points } : {}),
      ...(q.key_points    ? { key_points: q.key_points } : {}),
      ...(q.model_answer  ? { model_answer: q.model_answer } : {}),
      ...(q.source        ? { source: q.source } : {}),
    }
    const res = await supabaseRequest('POST', 'questions', row)
    if (res.status === 201) {
      console.log(`  ✓ [${q.question_type}] ${q.question_text.slice(0, 60).replace(/\n/g, ' ')}...`)
    } else {
      console.error(`  ✗ FAILED (${res.status}):`, JSON.stringify(res.body).slice(0, 200))
    }
  }
  console.log('\nDone.')
}

main().catch(err => { console.error(err); process.exit(1) })
