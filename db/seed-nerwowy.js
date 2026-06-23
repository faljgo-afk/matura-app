const https = require('https')

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co'
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC_ID = 'a4962fbb-433e-47f2-a241-1562fc6ecae4'
const SUB = {
  neuron:       'd7975ac2-1866-4a54-8763-e26e7a5c05c7',
  potencjal:    '7b6eea4d-0085-4f28-9a8a-95345f5d33f6',
  synapsy:      '86146a38-c978-497d-b37b-2f30e1a8f180',
  podzial:      '6fa0b262-2757-46e7-b1c2-5567045f657a',
  mozgowie:     '4b37bd4a-466f-408b-82f6-d0c9579f5fd1',
  luk:          '99cb3294-cdec-47a4-a6bd-bd9ca1e9ca4f',
  gruczoły:     '3896b2c0-3159-404b-8ee1-1741dc2aba11',
  glikemia:     'aeee95f6-97c3-498e-af9e-2d147a252099',
  podwzgorze:   'c2486387-820e-478f-8142-de6c5bd8bafd',
  homeostaza:   'f87eddfa-5288-4e00-a08a-c980645f560f',
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const opts = new URL(url)
    opts.headers = { 'User-Agent': 'matura-app/1.0 (faljgo@gmail.com)' }
    https.get(opts, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)))
    }).on('error', reject)
  })
}

async function getWikiThumb(filename, width = 700) {
  const encoded = encodeURIComponent('File:' + filename)
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encoded}&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=${width}&format=json`
  const data = await httpsGet(url)
  const page = Object.values(data.query.pages)[0]
  if (!page.imageinfo) return null
  return page.imageinfo[0].thumburl
}

async function findWikiThumb(candidates, width = 700) {
  for (const name of candidates) {
    const thumb = await getWikiThumb(name, width)
    if (thumb) { console.log('  Image found:', name, thumb.slice(0, 80)); return thumb }
  }
  throw new Error('No image found for: ' + candidates.join(', '))
}

function supabaseRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null
    const options = {
      hostname: URL_HOST,
      path: '/rest/v1/' + path,
      method,
      headers: {
        'apikey': KEY, 'Authorization': `Bearer ${KEY}`,
        'Content-Type': 'application/json', 'Prefer': 'return=representation',
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

async function buildQuestions() {
  // ── IMAGE: Chemical synapse diagram ──────────────────────────────────────────
  const synapseImg = await findWikiThumb([
    'Chemical synapse schema cropped.jpg',
    'Synapse diag4.png',
    'SynapseSchematic en.svg',
  ])

  return [

    // ── CLOSED 1: single — Potencjał czynnościowy ─────────────────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.potencjal,
      question_type: 'single', difficulty: 2, verified: true,
      image_url: null,
      question_text: 'Wskaż prawidłowe dokończenie zdania.\nPodczas depolaryzacji błony komórkowej neuronu dochodzi do:',
      options: [
        { id: 'A', text: 'gwałtownego napływu jonów Na⁺ do wnętrza komórki przez otwarte kanały sodowe zależne od napięcia', is_correct: true },
        { id: 'B', text: 'odpływu jonów K⁺ na zewnątrz komórki, co powoduje wzrost potencjału błonowego do wartości dodatnich', is_correct: false },
        { id: 'C', text: 'aktywnego transportu Na⁺ na zewnątrz i K⁺ do wnętrza przez pompę sodowo-potasową', is_correct: false },
        { id: 'D', text: 'wzrostu przepuszczalności błony dla jonów Cl⁻, co hiperpolaryzuje błonę', is_correct: false },
      ],
      correct_answer: ['A'],
      explanation: 'Potencjał czynnościowy przebiega w kilku fazach. Depolaryzacja następuje, gdy bodziec osiąga próg pobudliwości (~−55 mV): otwierają się bramkowane napięciem kanały sodowe (Na⁺), jony Na⁺ gwałtownie napływają do wnętrza komórki zgodnie z gradientem stężeń i elektrycznym — potencjał błonowy szybko rośnie z −70 mV do ok. +30 mV. Odpływ K⁺ (przez kanały potasowe) następuje w fazie repolaryzacji — przywraca ujemny potencjał. Pompa Na⁺/K⁺-ATPaza działa stale, ale nie jest odpowiedzialna za samą depolaryzację. Jony Cl⁻ i hiperpolaryzacja są charakterystyczne dla działania hamujących synaps GABA-ergicznych.',
    },

    // ── CLOSED 2: true_false Z OBRAZKIEM — Synapsa chemiczna ─────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.synapsy,
      question_type: 'true_false', difficulty: 2, verified: true,
      image_url: synapseImg,
      question_text: 'Na schemacie przedstawiono budowę synapsy chemicznej. Oceń prawdziwość poniższych stwierdzeń dotyczących przekazywania impulsu przez synapsę chemiczną.',
      options: [
        { id: 'A', text: 'Neuroprzekaźnik jest uwalniany z pęcherzyków synaptycznych neuronu presynaptycznego w wyniku napływu jonów Ca²⁺ do zakończenia aksonu.', is_correct: true },
        { id: 'B', text: 'Neuroprzekaźnik po związaniu z receptorem błony postsynaptycznej może być bezpośrednio wychwytywany z powrotem do pęcherzyków bez żadnych modyfikacji.', is_correct: false },
        { id: 'C', text: 'Transmisja synaptyczna jest jednokierunkowa — impuls przechodzi tylko od neuronu pre- do postsynaptycznego.', is_correct: true },
      ],
      correct_answer: ['A-P', 'B-F', 'C-P'],
      explanation: 'A – Prawda: napływ Ca²⁺ przez kanały wapniowe zależne od napięcia (po dotarciu potencjału czynnościowego do zakończenia aksonu) wyzwala egzocytozę pęcherzyków synaptycznych i uwolnienie neuroprzekaźnika do szczeliny synaptycznej. B – Fałsz: neuroprzekaźniki są inaktywowane enzymatycznie (np. acetylocholina przez acetylocholinoesterazę) lub wychwytywane przez transporter błonowy (reuptake) w postaci cząsteczek wolnych — nie bezpośrednio z powrotem do pęcherzyków; dopiero po wychwycie są pakowane do nowych pęcherzyków. C – Prawda: receptory neuroprzekaźników są tylko po stronie postsynaptycznej (błona dendrytu lub ciała komórkowego), a pęcherzyki synaptyczne — wyłącznie w zakończeniu presynaptycznym, co zapewnia jednokierunkowość przewodzenia.',
    },

    // ── CLOSED 3: true_false — Regulacja glikemii ────────────────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.glikemia,
      question_type: 'true_false', difficulty: 2, verified: true,
      image_url: null,
      question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących hormonalnej regulacji poziomu glukozy we krwi.',
      options: [
        { id: 'A', text: 'Insulina wydzielana przez komórki β wysp Langerhansa trzustki obniża poziom glukozy we krwi, stymulując jej wychwyt przez komórki i syntezę glikogenu.', is_correct: true },
        { id: 'B', text: 'Glukagon wydzielany przez komórki α trzustki działa antagonistycznie do insuliny — pobudza glikogenolizę i glukoneogenezę w wątrobie.', is_correct: true },
        { id: 'C', text: 'Adrenalina wydzielana przez rdzeń nadnerczy obniża poziom glukozy we krwi, nasilając jej zużycie przez mięśnie w warunkach stresu.', is_correct: false },
      ],
      correct_answer: ['A-P', 'B-P', 'C-F'],
      explanation: 'A – Prawda: po posiłku wzrost glikemii pobudza komórki β do wydzielania insuliny. Insulina zwiększa wychwyt glukozy przez komórki mięśniowe i tłuszczowe (przez przenośniki GLUT4), pobudza syntezę glikogenu (glikogenogenezę) w wątrobie i mięśniach oraz hamuje glukoneogenezę → glikemia spada. B – Prawda: przy hipoglikemii komórki α wydzielają glukagon, który w wątrobie aktywuje fosforylazę glikogenową (glikogenoliza: rozpad glikogenu → glukoza) i nasila glukoneogenezę → glikemia rośnie. C – Fałsz: adrenalina PODNOSI poziom glukozy — nasila glikogenolizę w wątrobie i mięśniach oraz hamuje wydzielanie insuliny. Jest hormonem stresu przygotowującym organizm do reakcji "walcz lub uciekaj".',
    },

    // ── CLOSED 4: single — Łuk odruchowy ─────────────────────────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.luk,
      question_type: 'single', difficulty: 2, verified: true,
      image_url: null,
      question_text: 'W wyniku ukłucia w palec człowiek odruchowo cofa rękę, zanim uświadomi sobie ból. Które stwierdzenie poprawnie opisuje drogę impulsu w tym odruchu rdzeniowym?',
      options: [
        { id: 'A', text: 'Receptor → neuron czuciowy → rdzeń kręgowy → neuron ruchowy → efektor', is_correct: true },
        { id: 'B', text: 'Receptor → neuron ruchowy → mózgowie → neuron czuciowy → efektor', is_correct: false },
        { id: 'C', text: 'Receptor → neuron czuciowy → mózgowie → neuron ruchowy → efektor', is_correct: false },
        { id: 'D', text: 'Receptor → neuron łącznikowy → rdzeń kręgowy → neuron czuciowy → efektor', is_correct: false },
      ],
      correct_answer: ['A'],
      explanation: 'Odruch rdzeniowy (bezwarunkowy) przebiega przez łuk odruchowy z ośrodkiem w rdzeniu kręgowym — bez udziału mózgowia (stąd reakcja jest szybsza niż świadome odczucie bólu). Kolejność: 1) receptor skóry (nocyceptor) odbiera bodziec, 2) impuls biegnie neuronem czuciowym (aferentnym) przez korzeń grzbietowy do rogu tylnego rdzenia, 3) w rdzeniu impuls jest przekazywany przez neuron(y) pośredniczące do neuronu ruchowego (eferentnego) w rogu brzusznym, 4) neuron ruchowy przewodzi impuls do efektora (mięśnia zginacza), który kurczy się — ręka jest cofana. Jednocześnie informacja jest przesyłana do mózgowia, gdzie pojawia się świadome odczucie bólu — z opóźnieniem.',
    },

    // ── CLOSED 5: multiple — Oś podwzgórze–przysadka ─────────────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.podwzgorze,
      question_type: 'multiple', difficulty: 3, verified: true,
      image_url: null,
      question_text: 'Zaznacz wszystkie stwierdzenia, które poprawnie opisują mechanizmy osi podwzgórze–przysadka–gruczoły obwodowe.',
      options: [
        { id: 'A', text: 'Podwzgórze wydziela liberyny i statyny regulujące wydzielanie hormonów tropowych przez przedni płat przysadki', is_correct: true },
        { id: 'B', text: 'Wysoki poziom kortyzolu we krwi hamuje wydzielanie CRH przez podwzgórze i ACTH przez przysadkę (ujemne sprzężenie zwrotne)', is_correct: true },
        { id: 'C', text: 'Tylny płat przysadki produkuje ADH (wazopresynę) i oksytocynę', is_correct: false },
        { id: 'D', text: 'TSH wydzielany przez przedni płat przysadki pobudza tarczycę do produkcji tyroksyny (T4) i trijodotyroniny (T3)', is_correct: true },
      ],
      correct_answer: ['A', 'B', 'D'],
      explanation: 'A – Prawda: podwzgórze produkuje hormony uwalniające (liberyny: np. TRH, CRH, GnRH) i hamujące (statyny: np. somatostatyna), które przez układ wrotny przysadki docierają do przedniego płata i regulują wydzielanie hormonów tropowych (TSH, ACTH, FSH, LH, GH). B – Prawda: kortyzol (produkowany przez korę nadnerczy pod wpływem ACTH) hamuje zarówno podwzgórze (mniej CRH), jak i przysadkę (mniej ACTH) — klasyczny przykład ujemnego sprzężenia zwrotnego stabilizującego poziom kortyzolu. C – Fałsz: ADH i oksytocyna są PRODUKOWANE przez neurony podwzgórza (jądra nadwzrokowe i przykomorowe), a jedynie MAGAZYNOWANE i UWALNIANE przez tylny płat przysadki (neurohipofizę). D – Prawda: TSH (tyreotropina) wiąże się z receptorami na komórkach tyreocytów tarczycy, stymulując syntezę i wydzielanie hormonów tarczycy (T3, T4).',
    },

    // ── OPEN 1: Synapsa — mechanizm przekaźnictwa — 2 pkt ────────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.synapsy,
      question_type: 'open', difficulty: 2, verified: true,
      max_points: 2,
      image_url: null,
      question_text: 'Wyjaśnij, w jaki sposób potencjał czynnościowy docierający do zakończenia aksonu prowadzi do pobudzenia neuronu postsynaptycznego. Uwzględnij rolę jonów wapnia oraz sposób inaktywacji neuroprzekaźnika w szczelinie synaptycznej.',
      options: [], correct_answer: [], explanation: '',
      key_points: [
        'Potencjał czynnościowy otwiera kanały Ca²⁺ zależne od napięcia w błonie presynaptycznej → napływ Ca²⁺ do zakończenia aksonu → egzocytoza pęcherzyków synaptycznych → uwolnienie neuroprzekaźnika do szczeliny synaptycznej → wiązanie z receptorami błony postsynaptycznej → depolaryzacja (lub hiperpolaryzacja) neuronu postsynaptycznego.',
        'Neuroprzekaźnik jest inaktywowany przez degradację enzymatyczną (np. acetylocholina → acetylocholinoesteraza rozkłada ją na cholinę i octan) lub przez wychwyt zwrotny (reuptake) do neuronu presynaptycznego przez specyficzne transportery błonowe.',
      ],
      model_answer: 'Gdy potencjał czynnościowy dociera do zakończenia presynaptycznego (kolbki synaptycznej), depolaryzacja błony otwiera bramkowane napięciem kanały wapniowe. Jony Ca²⁺ napływają do wnętrza zakończenia, co wyzwala egzocytozę pęcherzyków synaptycznych. Neuroprzekaźnik (np. acetylocholina, glutaminian) zostaje uwolniony do szczeliny synaptycznej i dyfunduje do błony postsynaptycznej, gdzie wiąże się ze swoistymi receptorami (jonotropowymi lub metabotropowymi). Pobudzający neuroprzekaźnik (np. glutaminian) powoduje otwarcie kanałów dla Na⁺/K⁺ → depolaryzację błony postsynaptycznej.\nInaktywacja: acetylocholina jest rozkładana przez acetylocholinoesterazę do choliny i octanu (produkty są wychwyty do neuronu presynaptycznego i ponownie wykorzystywane). Inne neuroprzekaźniki (np. dopamina, serotonina) są inaktywowane głównie przez wychwyt zwrotny (reuptake) — transportery błonowe wciągają cząsteczki z powrotem do neuronu presynaptycznego.',
      source: 'własne, wzorowane na CKE',
    },

    // ── OPEN 2: Regulacja glikemii — odpowiedź na posiłek — 2 pkt ───────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.glikemia,
      question_type: 'open', difficulty: 2, verified: true,
      max_points: 2,
      image_url: null,
      question_text: 'Godzinę po spożyciu posiłku bogatego w węglowodany poziom glukozy we krwi badanej osoby wynosił 8,5 mmol/l (norma: 3,9–5,5 mmol/l na czczo). Opisz hormonalną odpowiedź organizmu na ten stan, uwzględniając narząd wydzielający hormon, nazwę hormonu oraz jego działanie na tkanki docelowe.',
      options: [], correct_answer: [], explanation: '',
      key_points: [
        'Wzrost glikemii powyżej normy pobudza komórki β wysp Langerhansa trzustki do wydzielania insuliny do krwi.',
        'Insulina zwiększa wychwyt glukozy przez komórki mięśniowe i tłuszczowe (przez przenośniki GLUT4) oraz pobudza wątrobę do syntezy glikogenu (glikogenogeneza) i zahamowania glukoneogenezy — w efekcie stężenie glukozy we krwi spada do wartości prawidłowych.',
      ],
      model_answer: 'Po posiłku bogatym w węglowodany stężenie glukozy we krwi wzrasta (hiperglikemia). Komórki β wysp Langerhansa w trzustce wykrywają ten wzrost i wydzielają insulinę do krwioobiegu.\nInsulina działa na komórki docelowe:\n1. Mięśnie szkieletowe i tkanka tłuszczowa: insulina stymuluje translokację przenośników glukozy GLUT4 do błony komórkowej → zwiększony wychwyt glukozy przez te komórki.\n2. Wątroba: insulina pobudza syntezę glikogenu (glikogenogeneza) z nadmiaru glukozy oraz hamuje glukoneogenezę i glikogenolizę.\n3. Tkanka tłuszczowa: insulina pobudza lipogenezę — nadmiar glukozy jest przekształcany w kwasy tłuszczowe i magazynowany jako triglicerydy.\nW efekcie stężenie glukozy we krwi stopniowo wraca do wartości prawidłowych (normoglikemia).',
      source: 'własne, wzorowane na CKE',
    },

  ]
}

async function main() {
  const questions = await buildQuestions()
  console.log(`Inserting ${questions.length} questions for Fizjologia człowieka — układ nerwowy i hormonalny...`)
  for (const q of questions) {
    const row = {
      topic_id: q.topic_id, subtopic_id: q.subtopic_id,
      question_type: q.question_type, difficulty: q.difficulty, verified: q.verified,
      question_text: q.question_text, options: q.options,
      correct_answer: q.correct_answer, explanation: q.explanation || '',
      image_url: q.image_url ?? null,
      ...(q.max_points != null ? { max_points: q.max_points } : {}),
      ...(q.key_points     ? { key_points: q.key_points } : {}),
      ...(q.model_answer   ? { model_answer: q.model_answer } : {}),
      ...(q.source         ? { source: q.source } : {}),
    }
    const res = await supabaseRequest('POST', 'questions', row)
    const icon = q.image_url ? '🖼 ' : '   '
    if (res.status === 201) {
      console.log(`${icon}✓ [${q.question_type}] ${q.question_text.slice(0, 65).replace(/\n/g, ' ')}...`)
    } else {
      console.error(`${icon}✗ FAILED (${res.status}):`, JSON.stringify(res.body).slice(0, 200))
    }
  }
  console.log('\nDone.')
}

main().catch(err => { console.error(err); process.exit(1) })
