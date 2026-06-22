const https = require('https');
const fs = require('fs');

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w';

const TOPIC_ID = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf';

const questions = [
  {
    topic_id: TOPIC_ID,
    subtopic_id: 'ade8a64a-1b78-47c6-a317-a90c15dcf367',
    image_url: null,
    question_text: 'Wirusy nie są uznawane za organizmy żywe. Wskaż cechę, która ODRÓŻNIA wirusy od wszystkich komórkowych form życia:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Wirusy nie posiadają kwasów nukleinowych — ich informacja genetyczna zakodowana jest wyłącznie w białkach kapsydu', is_correct: false },
      { id: 'B', text: 'Wirusy namnażają się wyłącznie wewnątrz komórki gospodarza, korzystając z jej metabolizmu — same nie mają własnego', is_correct: true },
      { id: 'C', text: 'Wirusy zbudowane są wyłącznie z RNA — żaden wirus nie zawiera DNA jako materiału genetycznego', is_correct: false },
      { id: 'D', text: 'Wirusy nie mogą wywoływać chorób u organizmów eukariotycznych — infekują wyłącznie bakterie', is_correct: false }
    ],
    correct_answer: ['B'],
    explanation: 'Wirusy są cząstkami niekomórkowymi (acellular) i nie posiadają własnego metabolizmu — nie mają rybosomów, mitochondriów ani innych organelli. Ich namnażanie jest możliwe wyłącznie wewnątrz komórki gospodarza: wirus przejmuje maszynerię metaboliczną komórki, by replikować swój materiał genetyczny i syntetyzować białka kapsydu. Budowa wirusa: kwas nukleinowy (DNA lub RNA, jedno- lub dwuniciowy) otoczony kapsydem białkowym; niektóre wirusy mają osłonkę lipidową (np. HIV, wirus grypy). Nie jest prawdą, że wirusy nie mają kwasów nukleinowych — posiadają DNA (np. adenowirusy, HSV) lub RNA (np. HIV, koronawirus). Wirusy infekujące bakterie to bakteriofagi, ale wirusy infekują też eukarionty.',
    difficulty: 2,
    verified: true,
    ai_confidence: 0.98
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: '34a5f416-a22e-438b-b4ff-7d56dd7279a4',
    image_url: null,
    question_text: 'Komórka bakteryjna jest komórką prokariotyczną. Wskaż zestaw cech, które ŁĄCZNIE charakteryzują komórkę bakteryjną:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Brak jądra komórkowego z błoną jądrową, rybosomy 70S, ściana komórkowa z peptydoglikanu', is_correct: true },
      { id: 'B', text: 'Obecność jądra komórkowego, rybosomy 80S, ściana komórkowa z celulozy', is_correct: false },
      { id: 'C', text: 'Brak rybosomów, DNA w jądrze otoczonym błoną, brak ściany komórkowej', is_correct: false },
      { id: 'D', text: 'Rybosomy 70S, obecność mitochondriów i chloroplastów, brak ściany komórkowej', is_correct: false }
    ],
    correct_answer: ['A'],
    explanation: 'Komórki prokariotyczne (bakteryjne) charakteryzują się: (1) brakiem jądra komórkowego — DNA (zazwyczaj kolista cząsteczka) leży swobodnie w cytoplazmie, w obszarze zwanym nukleoidem, bez otaczającej błony jądrowej; (2) rybosomami 70S (podjednostki 30S i 50S), mniejszymi niż eukariotyczne rybosomy 80S — ta różnica jest podstawą selektywnego działania antybiotyków (np. streptomycyny); (3) ścianą komórkową z peptydoglikanu (mureiny) — polimeru cukrowo-peptydowego; (4) brakiem błoniastych organelli (mitochondriów, ER, aparatu Golgiego). Ściana komórkowa z celulozy jest cechą roślin, a nie bakterii.',
    difficulty: 2,
    verified: true,
    ai_confidence: 0.99
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: '44e9a9be-d038-4287-a1fb-819e129d63f9',
    image_url: null,
    question_text: 'Grzyby tworzą odrębne królestwo organizmów. Wskaż zestawienie cech, które ŁĄCZNIE są charakterystyczne wyłącznie dla grzybów:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Cudzożywność heterotroficzna, ściana komórkowa z chityny, brak chloroplastów', is_correct: true },
      { id: 'B', text: 'Samożywność autotroficzna, ściana komórkowa z celulozy, obecność chloroplastów', is_correct: false },
      { id: 'C', text: 'Cudzożywność, ściana komórkowa z peptydoglikanu, rybosomy 70S', is_correct: false },
      { id: 'D', text: 'Samożywność, brak ściany komórkowej, obecność chloroplastów i mitochondriów', is_correct: false }
    ],
    correct_answer: ['A'],
    explanation: 'Grzyby (Fungi) są organizmami eukariotycznymi i cudzożywnymi (heterotroficznymi) — pozyskują substancje organiczne z zewnątrz przez wchłanianie (absorpcja), wydzielając enzymy trawienne poza komórkę. Ich ściana komórkowa zbudowana jest z chityny (polimer N-acetyloglukosaminy) — to cecha odróżniająca grzyby od roślin (celuloza) i bakterii (peptydoglikan). Grzyby nie mają chloroplastów i nie przeprowadzają fotosyntezy. Ciało grzybów zbudowane jest ze strzępek (hyfae) tworzących grzybnię (mycelium), z wyjątkiem drożdży (formy jednokomórkowe). Grzyby odgrywają rolę destruentów (saprotrofy), tworzą mikoryzę z korzeniami roślin oraz porosty (licheny) we współżyciu z sinicami lub glonami.',
    difficulty: 2,
    verified: true,
    ai_confidence: 0.99
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: '331cb215-d830-49f5-b3dd-19c5d51b1374',
    image_url: null,
    question_text: 'Podczas ewolucji roślin lądowych następowały kolejne adaptacje do życia na lądzie. Wskaż POPRAWNĄ kolejność pojawiania się tych grup w historii ewolucji:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Mchy → Paprocie → Nagonasienne → Okrytonasienne', is_correct: true },
      { id: 'B', text: 'Paprocie → Mchy → Okrytonasienne → Nagonasienne', is_correct: false },
      { id: 'C', text: 'Nagonasienne → Paprocie → Mchy → Okrytonasienne', is_correct: false },
      { id: 'D', text: 'Mchy → Nagonasienne → Paprocie → Okrytonasienne', is_correct: false }
    ],
    correct_answer: ['A'],
    explanation: 'Ewolucja roślin lądowych przebiegała od form zależnych od wody do coraz bardziej niezależnych: (1) Mchy (Bryophyta, ~470 mln lat temu) — pierwsze rośliny lądowe, brak tkanki przewodzącej (nietracheofity), gamety i zarodniki wymagają wody, dominuje gametofit. (2) Paprocie i skrzypy (Pteridophyta, ~400 mln lat temu) — pierwsze tracheofity (tkanka przewodząca: ksylem i floem), ale gamety (plemniki) nadal wymagają wody do zapłodnienia, dominuje sporofit. (3) Nagonasienne (Gymnospermae, ~350 mln lat temu) — uniezależnienie od wody przez pyłek przenoszący gamety męskie; nasiona nie osłonięte owocownią. (4) Okrytonasienne (Angiospermae, ~140 mln lat temu) — nasiona zamknięte w owocni, zapylanie przez zwierzęta lub wiatr, dominują we współczesnej florze.',
    difficulty: 2,
    verified: true,
    ai_confidence: 0.98
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: '2e08b827-45a1-4f25-a87f-01ca8bdcffda',
    image_url: null,
    question_text: 'Porównując typy bezkręgowców, wskaż stwierdzenie POPRAWNIE opisujące cechę odróżniającą pierścienice (Annelida) od nicieni (Nematoda):',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Pierścienice mają segmentowane ciało i wtórną jamę ciała (celomę), natomiast nicienie są nieposegmentowane i mają pierwotną jamę ciała (pseudocelomę)', is_correct: true },
      { id: 'B', text: 'Nicienie mają segmentowane ciało i wtórną jamę ciała, a pierścienice są nieposegmentowane z pierwotną jamą ciała', is_correct: false },
      { id: 'C', text: 'Pierścienice nie mają układu krwionośnego, natomiast nicienie mają dobrze rozwinięty zamknięty układ krwionośny', is_correct: false },
      { id: 'D', text: 'Zarówno pierścienice, jak i nicienie mają chitynowy szkielet zewnętrzny, który linieją podczas wzrostu', is_correct: false }
    ],
    correct_answer: ['A'],
    explanation: 'Pierścienice (Annelida, np. dżdżownice, pijawki, wieloszczety) mają ciało zbudowane z powtarzających się segmentów (metamerów/somitów) — jest to metameryzm. Posiadają wtórną jamę ciała (celomę) wyścieloną nabłonkiem śródbłonkowym (mezotelium) oraz zamknięty układ krwionośny. Nicienie (Nematoda, np. glista ludzka, owsik) mają ciało cylindryczne, nieposegmentowane, i pierwotną jamę ciała (pseudocelomę) — bez wyściółki śródbłonkowej, wypełnioną płynem pod ciśnieniem (pełni funkcję szkieletu hydrostatycznego). Chitynowy szkielet zewnętrzny z linieniem (ecdysis) jest cechą stawonogów (Arthropoda) i nicieni — jednak w przypadku nicieni mowa o kutykuli, nie o szkielecie zewnętrznym w sensie stawonogów. Metameryzm pierścienic jest ewolucyjnym postępem umożliwiającym specjalizację segmentów.',
    difficulty: 2,
    verified: true,
    ai_confidence: 0.97
  }
];

function postQuestion(q) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify([q]);
    const opts = {
      hostname: URL_HOST,
      path: '/rest/v1/questions',
      method: 'POST',
      headers: {
        'apikey': KEY,
        'Authorization': 'Bearer ' + KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'Prefer': 'return=representation',
        'Content-Length': Buffer.byteLength(body, 'utf-8')
      }
    };
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => {
        if (res.statusCode === 201) resolve(JSON.parse(data)[0].id);
        else reject(new Error('HTTP ' + res.statusCode + ': ' + data.substring(0, 150)));
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function run() {
  let ok = 0;
  for (let i = 0; i < questions.length; i++) {
    try {
      const id = await postQuestion(questions[i]);
      console.log('[' + (i + 1) + '/5] OK: ' + id.substring(0, 8) + '... — ' + questions[i].question_text.substring(0, 55));
      ok++;
    } catch (e) {
      console.log('[' + (i + 1) + '/5] FAIL: ' + e.message);
    }
  }
  console.log('Done: ' + ok + '/5 inserted');
}

run();
