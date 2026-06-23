// Seed: Układ ruchu człowieka — 5 questions
// Topic: 42b3edde-2027-4bbb-8a90-38568031d9b0

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '42b3edde-2027-4bbb-8a90-38568031d9b0'

const S = {
  kostna:   '81b1ff0e-35ce-4ab3-9442-cbe175a409e2',
  kosci:    '41d461d3-7688-475f-bd67-3c61d46b0127',
  staw:     '4b0f4c0b-7c18-48c4-9599-a7f7d619db94',
  miesniowa:'5837158f-0ba4-47e2-8f59-4d8888b5feab',
  skurcz:   '33ff4db4-4b68-4c16-846d-f6db534b5752',
  zmeczenie:'957b8505-0f02-4284-900d-854311b0952a',
  choroby:  '7552bf0c-5c0d-4f28-8549-8326ae76b95c',
}

const questions = [
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.kostna,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących tkanki kostnej.\nA. Osteoklasty są komórkami odpowiedzialnymi za resorpcję (niszczenie) tkanki kostnej, uwalniając wapń do krwi.\nB. Osteocyty to dojrzałe komórki kostne, które nie uczestniczą aktywnie w przebudowie tkanki.\nC. Tkanka kostna zbita (korowa) zbudowana jest z osteonów — cylindrycznych jednostek czynnościowych otaczających kanał Haversa.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Osteoklasty są komórkami odpowiedzialnymi za resorpcję tkanki kostnej.', is_correct: true },
      { id: 'B', text: 'Osteocyty to dojrzałe komórki kostne nieaktywne w przebudowie tkanki.', is_correct: false },
      { id: 'C', text: 'Tkanka kostna zbita zbudowana jest z osteonów otaczających kanał Haversa.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: osteoklasty to wielojądrowe komórki wywodzące się z monocytów, które wydzielają enzymy i kwasy rozkładające macierz kostną — proces kluczowy dla homeostazy wapnia. B — Fałsz: osteocyty aktywnie utrzymują macierz kostną i uczestniczą w regulacji poziomu wapnia; komunikują się przez kanaliki kostne z innymi osteocytami i osteoklastami. C — Prawda: osteon (system Haversa) to jednostka strukturalna kości zbitej — blaszki kostne koncentryczne wokół kanału centralnego (Haversa), przez który biegną naczynia krwionośne i nerwy.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.kosci,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPołączenie kości ramieniowej z łopatką (staw ramienny) jest przykładem stawu kulistego, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'umożliwia ruch wyłącznie w jednej płaszczyźnie — zgięcie i prostowanie ramienia', is_correct: false },
      { id: 'B', text: 'główka kości ramieniowej ma kształt kulisty wpasowany w panewkę łopatki, co umożliwia ruch we wszystkich płaszczyznach', is_correct: true },
      { id: 'C', text: 'powierzchnie stawowe obu kości są płaskie, co zapewnia ślizganie się kości względem siebie', is_correct: false },
      { id: 'D', text: 'kości połączone są chrząstką szklistą bez możliwości ruchów obrotowych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Staw ramienny (kulisty) jest najbardziej ruchomym stawem w ciele człowieka — kulista głowa kości ramieniowej osadzona jest w płytkiej panewce łopatki, co umożliwia ruchy we wszystkich płaszczyznach: zginanie, prostowanie, odwodzenie, przywodzenie i rotację. A — błąd: opisuje staw zawiasowy (np. łokciowy). C — błąd: opisuje staw płaski (np. między kręgami). D — błąd: opisuje chrząstkozrost, czyli połączenie półruchome.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.skurcz,
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisuje mechanizm skurczu mięśnia szkieletowego?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'W czasie skurczu filament aktynowy kurczy się, skracając sarkomery', is_correct: false },
      { id: 'B', text: 'Jony wapnia uwolnione z siateczki sarkoplazmatycznej wiążą się z troponiną, odsłaniając miejsca wiązania miozyny na aktynie', is_correct: true },
      { id: 'C', text: 'ATP jest potrzebne wyłącznie do rozkurczu mięśnia — do oderwania główki miozyny od aktyny', is_correct: false },
      { id: 'D', text: 'Potencjał czynnościowy dociera do mięśnia przez nerwy motoryczne, powodując bezpośrednie wiązanie miozyny z aktyną bez udziału jonów wapnia', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mechanizm ślizgowy Huxleya: impuls nerwowy → depolaryzacja błony sarkoplazmatycznej → uwolnienie Ca²⁺ z siateczki sarkoplazmatycznej → Ca²⁺ wiąże się z troponiną (kompleks TnC) → zmiana konformacji tropomiozyny → odsłonięcie miejsc aktywnych na aktynie → główka miozyny (z ATP→ADP+Pi) przyłącza się do aktyny → "skok mostu" → filament aktynowy przesuwa się → sarkomery się skracają. A — błąd: filamenty aktynowe nie kurczą się — ślizgają się między miozynowymi. C — błąd: ATP jest potrzebne zarówno do skurczu (energia do "skoku") jak i do rozkurczu (oderwanie główki). D — błąd: Ca²⁺ jest niezbędnym pośrednikiem.',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.miesniowa,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących rodzajów tkanki mięśniowej człowieka.\nA. Mięśnie szkieletowe działają zależnie od woli (są dowolne) i zbudowane są z wielojądrowych, poprzecznie prążkowanych włókien.\nB. Mięsień sercowy jest zbudowany z komórek połączonych wstawkami (dyski wstawkowe), co umożliwia synchroniczne kurczenie się całego serca.\nC. Tkanka mięśniowa gładka tworzy ściany narządów wewnętrznych i kurczy się szybko i silnie, podobnie jak mięśnie szkieletowe.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mięśnie szkieletowe są dowolne i mają wielojądrowe, prążkowane włókna.', is_correct: true },
      { id: 'B', text: 'Mięsień sercowy ma dyski wstawkowe umożliwiające synchroniczny skurcz.', is_correct: true },
      { id: 'C', text: 'Tkanka mięśniowa gładka kurczy się szybko i silnie, podobnie jak mięśnie szkieletowe.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: włókna mięśni szkieletowych to syncytia — komórki zlewają się, tworząc wielojądrowe struktury z widocznymi poprzecznymi prążkami (regularny układ sarkomerów). B — Prawda: dyski wstawkowe (desmosomy + złącza szczelinowe) wiążą kardiomiocyty mechanicznie i elektrycznie — impuls elektryczny rozchodzi się przez całe serce jak fala. C — Fałsz: tkanka mięśniowa gładka kurczy się POWOLI i mimowolnie (autonomicznie) — nie jest unerwiona somatycznie i nie posiada prążkowania poprzecznego.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.choroby,
    question_text: 'Osteoporoza jest chorobą polegającą na zmniejszeniu masy i gęstości kości. Które z poniższych stwierdzeń dotyczących osteoporozy są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Osteoporoza wynika z przewagi aktywności osteoklastów nad osteoblastami, co prowadzi do ubytku masy kostnej', is_correct: true },
      { id: 'B', text: 'Niedobór witaminy D i wapnia w diecie zwiększa ryzyko wystąpienia osteoporozy', is_correct: true },
      { id: 'C', text: 'Osteoporoza dotyczy wyłącznie kobiet po menopauzie i nie występuje u mężczyzn', is_correct: false },
      { id: 'D', text: 'Regularna aktywność fizyczna (obciążenie mechaniczne) stymuluje osteoblasty i zmniejsza ryzyko osteoporozy', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: w osteoporozie resorpcja (osteoklasty) przeważa nad tworzeniem (osteoblasty) → ubytek masy kostnej → kości stają się porowate i kruche. B — Prawda: wapń jest budulcem hydroksyapatytu, a witamina D warunkuje wchłanianie Ca²⁺ w jelicie — ich niedobór zaburza mineralizację. D — Prawda: mechaniczne obciążenie kości (np. chodzenie, ćwiczenia siłowe) stymuluje osteoblasty przez mechanotransdukcję. C — Fałsz: mężczyźni również chorują na osteoporozę, choć rzadziej i zwykle później (brak nagłego spadku estrogenu, ale testosteron spada z wiekiem).',
    difficulty: 2,
    verified: true,
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body))
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions',
      method: 'POST',
      headers: {
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve(res.statusCode)) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} questions for Układ ruchu człowieka...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
