const https = require('https')

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w'

const TOPIC_ID = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'
const SUB = {
  fotosynteza:  '0f762f3b-45ca-422b-ab30-8cc5e2dfc530',
  c3c4:         '469e8529-d140-498f-bed7-5790c9e2d55d',
  transpiracja: '0587c00d-b47e-4264-8a86-cebd8544ae22',
  transport:    'f69fab83-0563-4d75-92a0-6e49afd505d0',
  hormony:      'c3f1012e-cde4-47d7-adcb-9887d090322a',
  ruchy:        '550d7c0b-6b30-4527-93d7-aab33d62dfb1',
  kielkowanie:  '203f922f-00e6-458f-8239-5614e0777ff1',
  fotoperiodyzm:'c426d845-182c-48d9-b420-bdda8dc95c2a',
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
  // ── IMAGE: C4 photosynthesis diagram ──────────────────────────────────────
  const c4img = await findWikiThumb([
    'C4 photosynthesis NADP-ME type en.svg',
    'C4 photosynthesis PEPCK type.svg',
    'C4 photosynthesis NAD-ME type.svg',
    'C4 photosynthesis is less complicated.svg',
  ])

  return [

    // ── CLOSED 1: single — Fotosynteza (faza jasna) ───────────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.fotosynteza,
      question_type: 'single', difficulty: 2, verified: true,
      image_url: null,
      question_text: 'Wskaż prawidłowe dokończenie zdania.\nW fazie jasnej fotosyntezy (reakcjach świetlnych) dochodzi do:',
      options: [
        { id: 'A', text: 'redukcji CO₂ do glukozy z wykorzystaniem ATP i NADPH', is_correct: false },
        { id: 'B', text: 'syntezy ATP i NADPH w wyniku pochłaniania energii świetlnej oraz fotolizy wody', is_correct: true },
        { id: 'C', text: 'wiązania CO₂ przez RuBisCO i powstania związków 3-węglowych', is_correct: false },
        { id: 'D', text: 'rozkładu glukozy do pirogronianu w stromie chloroplastu', is_correct: false },
      ],
      correct_answer: ['B'],
      explanation: 'Faza jasna (reakcje świetlne) przebiega w błonach tylakoidów. Energia świetlna jest absorbowana przez chlorofil i przekształcana: napędza fotolizę wody (2H₂O → 4H⁺ + 4e⁻ + O₂), syntezę ATP (fosforylacja fotosyntetyczna) i redukcję NADP⁺ do NADPH. Produkt uboczny — O₂ — jest uwalniany do atmosfery. Redukcja CO₂ do glukozy (cykl Calvina, wiązanie CO₂ przez RuBisCO) zachodzi natomiast w fazie ciemnej (w stromie chloroplastu) z wykorzystaniem ATP i NADPH powstałych w fazie jasnej.',
    },

    // ── CLOSED 2: true_false — Rośliny C3, C4 i CAM (Z OBRAZKIEM) ─────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.c3c4,
      question_type: 'true_false', difficulty: 2, verified: true,
      image_url: c4img,
      question_text: 'Na schemacie przedstawiono uproszczony cykl fotosyntezy u roślin C4. Oceń prawdziwość poniższych stwierdzeń dotyczących roślin C4 w porównaniu z roślinami C3.',
      options: [
        { id: 'A', text: 'Rośliny C4 wstępnie wiążą CO₂ w komórkach mezofilu, tworząc 4-węglowe kwasy organiczne.', is_correct: true },
        { id: 'B', text: 'Rośliny C4 wykazują wyższą aktywność fotosyntetyczną w warunkach niskiego natężenia światła niż rośliny C3.', is_correct: false },
        { id: 'C', text: 'Rośliny C4 są lepiej przystosowane do wysokich temperatur i silnego nasłonecznienia niż rośliny C3.', is_correct: true },
      ],
      correct_answer: ['A-P', 'B-F', 'C-P'],
      explanation: 'A – Prawda: rośliny C4 (np. kukurydza, trzcina cukrowa) wiążą CO₂ w komórkach mezofilu przez enzym PEP-karboksylazę, tworząc 4-węglowy szczawiooctan (OAA), a następnie jabłczan lub asparaginian. Związki te są transportowane do komórek pochwy okołowiązkowej, gdzie CO₂ jest uwalniany i wchodzi do cyklu Calvina. B – Fałsz: przy niskim nasłonecznieniu rośliny C3 są równie efektywne lub nawet bardziej (wyższy koszt energetyczny C4). Przewaga C4 ujawnia się przy wysokim świetle. C – Prawda: mechanizm C4 pozwala utrzymać wysokie stężenie CO₂ przy stomach prawie zamkniętych (ogranicza fotooddychanie), co jest kluczowe w gorącym, suchym klimacie.',
    },

    // ── CLOSED 3: single — Transpiracja i gospodarka wodna ───────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.transpiracja,
      question_type: 'single', difficulty: 2, verified: true,
      image_url: null,
      question_text: 'Które z poniższych stwierdzeń prawidłowo opisuje mechanizm otwierania się aparatów szparkowych?',
      options: [
        { id: 'A', text: 'Napływ jonów K⁺ do komórek szparkowych obniża ich potencjał osmotyczny, co powoduje pobieranie wody i zwiększenie turgoru', is_correct: true },
        { id: 'B', text: 'Odpływ wody z komórek szparkowych zwiększa ich turgor i rozszerza szparkę', is_correct: false },
        { id: 'C', text: 'Wzrost stężenia CO₂ w liściu stymuluje otwieranie się szparki przez aktywację pompy protonowej', is_correct: false },
        { id: 'D', text: 'Kwas abscysynowy (ABA) stymuluje napływ K⁺ do komórek szparkowych i otwieranie szparki', is_correct: false },
      ],
      correct_answer: ['A'],
      explanation: 'Otwieranie szparki jest napędzane przez aktywny transport jonów K⁺ (potasu) do komórek szparkowych (przy udziale pompy protonowej H⁺-ATPazy aktywowanej światłem). Wzrost stężenia K⁺ obniża potencjał osmotyczny komórek szparkowych → woda napływa osmotycznie → turgor rośnie → komórki szparkowe, dzięki nierównomiernie pogrubiałym ścianom, wyginają się i szparka się otwiera. Zamykanie szparki jest inicjowane przez ABA (kwas abscysynowy, hormon stresu wodnego) — powoduje odpływ K⁺ i zamknięcie. Wysoki CO₂ sprzyja zamykaniu, nie otwieraniu szparki.',
    },

    // ── CLOSED 4: multiple — Hormony roślinne ────────────────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.hormony,
      question_type: 'multiple', difficulty: 2, verified: true,
      image_url: null,
      question_text: 'Zaznacz wszystkie procesy, w których auksyny (IAA) odgrywają kluczową rolę regulacyjną.',
      options: [
        { id: 'A', text: 'Dominacja wierzchołkowa — hamowanie wzrostu pędów bocznych', is_correct: true },
        { id: 'B', text: 'Fototropizm — kierunkowy wzrost ku źródłu światła', is_correct: true },
        { id: 'C', text: 'Indukcja kwitnienia w odpowiedzi na długość dnia', is_correct: false },
        { id: 'D', text: 'Wzrost elongacyjny komórek przez rozluźnienie ściany komórkowej', is_correct: true },
      ],
      correct_answer: ['A', 'B', 'D'],
      explanation: 'Auksyny (głównie IAA — kwas indolilooctowy) regulują: A — dominację wierzchołkową: wysokie stężenie auksyn produkowanych w wierzchołku pędu hamuje wzrost pędów bocznych (pączkowanie boczne); B — fototropizm: nierównomierna dystrybucja auksyn (więcej po stronie zaciemnionej) powoduje szybszy wzrost komórek po tej stronie → pęd wygina się ku światłu; D — wzrost elongacyjny: auksyny aktywują H⁺-ATPazę, zakwaszają ścianę, aktywują ekspansyny → ściana staje się bardziej plastyczna → komórka wydłuża się pod ciśnieniem turgoru. Kwitnienie jest regulowane przez fitochromy i florigen (gibeliny + białka FT) — nie auksyny.',
    },

    // ── CLOSED 5: true_false — Transport wody ─────────────────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.transport,
      question_type: 'true_false', difficulty: 3, verified: true,
      image_url: null,
      question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transportu wody i soli mineralnych w roślinie.',
      options: [
        { id: 'A', text: 'Woda jest transportowana w ksylemie drogą apoplastową — przez przestrzenie międzykomórkowe i ściany komórkowe bez przekraczania błon.', is_correct: true },
        { id: 'B', text: 'Pasmo Casparyego w endodermie korzenia wymusza przejście wody przez symplast, umożliwiając selekcję jonów wnikających do ksylemu.', is_correct: true },
        { id: 'C', text: 'Cukry są transportowane w ksylemie z liści do korzeni zgodnie z gradientem stężeń.', is_correct: false },
      ],
      correct_answer: ['A-P', 'B-P', 'C-F'],
      explanation: 'A – Prawda: droga apoplastyczna biegnie przez ściany komórkowe i przestrzenie między komórkami bez wnikania do cytoplazmy. Jest główną drogą transportu wody w korze korzenia. B – Prawda: pasmo Casparyego (suberynowan ligniny w ścianach radialnych komórek endodermy) blokuje apoplastyczny transport jonów — muszą one przejść przez błonę i cytoplazmę komórek endodermy (symplast), gdzie są selektywnie pobierane przez białka transportowe. To mechanizm kontroli składu mineralnego soku ksylemowego. C – Fałsz: cukry (głównie sacharoza) transportowane są we floemie (nie ksylemie), w obu kierunkach — od źródeł (liście) do biorców (korzenie, owoce). Ksylem transportuje wyłącznie wodę i jony mineralne (od korzeni ku górze).',
    },

    // ── OPEN 1: Fotosynteza — faza jasna i ciemna — 2 pkt ────────────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.fotosynteza,
      question_type: 'open', difficulty: 2, verified: true,
      max_points: 2,
      image_url: null,
      question_text: 'Wyjaśnij, w jaki sposób produkty fazy jasnej fotosyntezy (reakcji świetlnych) są wykorzystywane w fazie ciemnej (cyklu Calvina). Podaj, w których strukturach chloroplastu zachodzą obie fazy oraz co jest bezpośrednim donorem elektronów w fazie jasnej.',
      options: [], correct_answer: [], explanation: '',
      key_points: [
        'ATP i NADPH powstałe w fazie jasnej (w błonach tylakoidów) są wykorzystywane w cyklu Calvina (w stromie) do redukcji CO₂ — ATP dostarcza energii, NADPH dostarcza elektronów do przekształcenia 3-fosforoglicerynianu (3-PGA) w aldehyd 3-fosfoglicerynowy (G3P).',
        'Bezpośrednim donorem elektronów w fazie jasnej jest woda (H₂O), która ulega fotolizie w fotosystemie II: 2H₂O → 4H⁺ + 4e⁻ + O₂.',
      ],
      model_answer: 'Faza jasna zachodzi w błonach tylakoidów chloroplastu. Pod wpływem energii świetlnej dochodzi do fotolizy wody (2H₂O → 4H⁺ + 4e⁻ + O₂) — woda jest bezpośrednim donorem elektronów. Energia świetlna jest przekształcana w energię chemiczną: syntetyzowane są ATP (fosforylacja fotosyntetyczna) i NADPH (redukcja NADP⁺).\nFaza ciemna (cykl Calvina) zachodzi w stromie chloroplastu. ATP dostarcza energii do fosforylacji, a NADPH — elektronów do redukcji 3-fosforoglicerynianu (3-PGA) do aldehydu 3-fosfoglicerynowego (G3P), z którego powstaje m.in. glukoza. Bez ciągłego dostarczania ATP i NADPH z fazy jasnej cykl Calvina zatrzymuje się.',
      source: 'własne, wzorowane na CKE',
    },

    // ── OPEN 2: Hormony roślinne — auksyny i fototropizm — 2 pkt ─────────
    {
      topic_id: TOPIC_ID, subtopic_id: SUB.hormony,
      question_type: 'open', difficulty: 2, verified: true,
      max_points: 2,
      image_url: null,
      question_text: 'Siewka rośliny była jednostronnie oświetlana przez kilka godzin. W efekcie wygięła się ku źródłu światła. Wyjaśnij mechanizm tego zjawiska na poziomie komórkowym, uwzględniając rolę auksyn i zmiany zachodzące w ścianie komórkowej.',
      options: [], correct_answer: [], explanation: '',
      key_points: [
        'Auksyny (IAA) produkowane w stożku wzrostu przemieszczają się na stronę zaciemnioną pędu (polarny transport auksyn) — stężenie auksyn jest wyższe po stronie odciętej od światła.',
        'Wyższe stężenie auksyn po stronie zaciemnionej aktywuje H⁺-ATPazę → zakwaszenie ściany komórkowej → aktywacja ekspansyn → rozluźnienie ściany → szybszy wzrost elongacyjny komórek po stronie zaciemnionej → wygięcie ku światłu.',
      ],
      model_answer: 'Fototropizm jest wywoływany przez nierównomierny rozkład auksyn (IAA). Światło po jednej stronie powoduje, że auksyny przemieszczają się ku stronie zaciemnionej (polarny transport w kierunku od światła). Po stronie zaciemnionej stężenie auksyn jest wyższe.\nAuksyny aktywują błonową H⁺-ATPazę, która pompuje protony do ściany komórkowej. Obniżenie pH ściany aktywuje enzymy (ekspasyny) rozluźniające wiązania między włóknami celulozowymi. Ściana staje się bardziej plastyczna, a ciśnienie turgoru powoduje elongację komórek. Komórki po stronie zaciemnionej rosną szybciej → łodyga wygina się ku źródłu światła.',
      source: 'własne, wzorowane na CKE',
    },

  ]
}

async function main() {
  const questions = await buildQuestions()
  console.log(`Inserting ${questions.length} questions for Fizjologia roślin...`)
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
