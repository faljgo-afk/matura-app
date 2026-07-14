// Seed batch 1/7 — Fizjologia roślin
// Fotosynteza — fazy jasna i ciemna (10)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'

const S = {
  foto: '0f762f3b-45ca-422b-ab30-8cc5e2dfc530',
}

const questions = [
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'single',
    question_text: 'W której strukturze komórki roślinnej zachodzi fotosynteza i jak zorganizowane są błony wewnętrzne chloroplastu?',
    options: [
      { id: 'A', text: 'W chloroplaście; błony tylakoidów tworzą stosy (grana) połączone błonami stromalnych lameli; stroma otacza układ tylakoidów i jest miejscem cyklu Calvina', is_correct: true },
      { id: 'B', text: 'W mitochondrium; błony wewnętrzne tworzą grzebienie (cristae), na których osadzone są kompleksy fotosyntetyczne; matrix jest miejscem fotosyntezy ciemnej', is_correct: false },
      { id: 'C', text: 'W wakuoli; barwniki fotosyntetyczne (chlorofile, karotenoidy) są rozpuszczone w soku wakuolarnym i pochłaniają światło przez ścianę komórkową', is_correct: false },
      { id: 'D', text: 'W jądrze komórkowym; DNA chloroplastowy koduje wszystkie enzymy fotosyntezy, a reakcje świetlne zachodzą na błonie jądrowej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Chloroplast ma dwie błony zewnętrzne (zewnętrzna + wewnętrzna = koperta) i wewnętrzny układ tylakoidów. Tylakoidы układają się w stosy (grana; jeden stos = granum, pl. grana) połączone stromalną lamelą. Na błonach tylakoidów osadzone są kompleksy fotosyntetyczne (PSII, PSI, cytochrom b6f, syntaza ATP) — tu zachodzi faza jasna. Stroma (macierz chloroplastu) zawiera enzymy cyklu Calvina (faza ciemna). Mitochondria mają cristae, ale służą do oddychania komórkowego.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'single',
    question_text: 'Fotoliza wody (reakcja Hilla) zachodzi podczas fazy jasnej fotosyntezy. Które stwierdzenie POPRAWNIE opisuje ten proces?',
    options: [
      { id: 'A', text: 'Fotoliza wody zachodzi w fotosystemie II (PSII); woda jest rozkładana: 2H₂O → 4H⁺ + 4e⁻ + O₂; elektrony przekazywane są do P680, a uwolniony O₂ jest produktem ubocznym fotosyntezy', is_correct: true },
      { id: 'B', text: 'Fotoliza wody zachodzi w fotosystemie I (PSI); woda dostarcza protony do redukcji CO₂ w cyklu Calvina; uwolniony O₂ pochodzi z CO₂, nie z wody', is_correct: false },
      { id: 'C', text: 'Fotoliza wody zachodzi w stromie chloroplastu; enzymy stromalny rozkładają wodę na wodór i tlen; wodór bezpośrednio łączy się z CO₂ tworząc glukozę', is_correct: false },
      { id: 'D', text: 'Fotoliza wody nie jest reakcją fotosyntezy; zachodzi wyłącznie podczas oddychania komórkowego w mitochondriach jako źródło protonów dla łańcucha oddechowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fotoliza wody (splitting of water) zachodzi na kompleksie OEC (oxygen-evolving complex) przy PSII: 2H₂O → 4H⁺ + 4e⁻ + O₂. Elektrony uzupełniają "dziury" w P680 (chlroofil a w PSII) po ekscytacji fotonu. Protony (H⁺) przyczyniają się do gradientu protonowego przez błonę tylakoidu (napęd syntezy ATP przez syntazę ATP). O₂ jest produktem ubocznym uwalnianym do atmosfery. Eksperyment z izotopem ¹⁸O wykazał, że O₂ pochodzi z wody, nie z CO₂.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują transport elektronów w fazie jasnej fotosyntezy? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Elektrony przepływają od PSII przez plastochinon (PQ), kompleks cytochromu b6f, plastocyjaninę (PC) do PSI — tworząc niehemilinearny łańcuch transportu elektronów', is_correct: true },
      { id: 'B', text: 'W PSI elektrony są przenoszone na ferriredoksynę (Fd), a następnie przez reduktazę ferriredoksyny-NADP⁺ (FNR) redukują NADP⁺ do NADPH używanego w cyklu Calvina', is_correct: true },
      { id: 'C', text: 'Transport elektronów przez kompleks b6f jest sprzężony z transportem protonów ze stromy do wnętrza tylakoidu (lumen), tworząc gradient protonowy napędzający syntazę ATP', is_correct: true },
      { id: 'D', text: 'Cykliczny transport elektronów (CEF) wokół PSI produkuje wyłącznie NADPH bez ATP; jest to główna droga energii w warunkach niedoboru CO₂', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) liniowy transport elektronów (LEF): H₂O → PSII (P680) → PQ → cyt b6f → PC → PSI (P700) → Fd → FNR → NADPH. (B) FNR (ferriredoksyna-NADP⁺-reduktaza): katalizuje NADP⁺ + 2Fd(red) → NADPH. (C) kompleks b6f pompuje H⁺ do lumen; gradient ΔpH + Δψ (PMF) napędza CFo-CF1 syntazę ATP (syntezę ATP w chloroplaście = fotofosforylacja). (D) fałsz: CEF wokół PSI produkuje ATP BEZ NADPH (elektrony wracają przez Fd → PQ → cyt b6f → PC → PSI bez redukcji NADP⁺); zwiększa stosunek ATP/NADPH; ważny gdy potrzeba więcej ATP (np. w wiązaniu CO₂ u roślin C4).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'single',
    question_text: 'Fotosynteza pochłania określone długości fali świetlnej. Wskaż prawidłowe stwierdzenie dotyczące widma absorpcji barwników fotosyntetycznych:',
    options: [
      { id: 'A', text: 'Chlorofil a i b pochłaniają głównie światło niebiesko-fioletowe (~430–450 nm) i czerwone (~660–680 nm); najsłabiej pochłaniane jest światło zielone (~550 nm), które jest odbijane — stąd zielona barwa liści', is_correct: true },
      { id: 'B', text: 'Chlorofil pochłania wyłącznie światło zielone i żółte; czerwone i niebieskie długości fali są przepuszczane przez chloroplast i wykorzystywane przez mitochondria do produkcji ATP', is_correct: false },
      { id: 'C', text: 'Karotenoidy (beta-karoten, ksantofile) pochłaniają wyłącznie światło czerwone i IR; ich główna funkcja to wychwytywanie ciepła słonecznego dla termoregulacji chloroplastu', is_correct: false },
      { id: 'D', text: 'Widmo absorpcji chlorofilu i widmo akcji fotosyntezy są całkowicie rozbieżne — chlorofil absorbuje inne długości fali niż te, które faktycznie napędzają fotosyntezę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Widmo absorpcji chlorofilu a: dwa piki — niebieski ok. 430 nm i czerwony ok. 662 nm. Chlorofil b: 453 nm i 645 nm. Zielone światło (~500–600 nm) jest słabo absorbowane → odbijane → oko ludzkie widzi zieleń. Widmo akcji fotosyntezy (Engelmann 1882, Emerson & Lewis 1943) pokrywa się z widmem absorpcji barwników → potwierdzenie, że chlorofile napędzają fotosyntezę. Karotenoidy pochłaniają niebieskofioletowe i niebieskie (400–500 nm) → są barwą żółtą/pomarańczową; przekazują energię do chlorofilu a (pułapki antenowe).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących fazy jasnej fotosyntezy:',
    options: [
      { id: 'A', text: 'Produktami fazy jasnej fotosyntezy przekazywanymi do cyklu Calvina są: ATP (energia) i NADPH (siła redukcyjna); tlen (O₂) jest produktem ubocznym uwalnianym do atmosfery.', is_correct: true },
      { id: 'B', text: 'Fotosystem I (PSI) zawiera chlorofil P700 jako centrum reakcji; jest wzbudzany głównie przez światło o długości fali 700 nm i odpowiada za redukcję NADP⁺ do NADPH.', is_correct: true },
      { id: 'C', text: 'Synteza ATP w chloroplaście (fotofosforylacja) zachodzi w stromie, gdzie syntaza ATP jest zakotwiczona i spontanicznie syntetyzuje ATP bez gradientu protonowego.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: faza jasna: H₂O + NADP⁺ + ADP+Pi + hν → O₂ + NADPH + ATP; ATP i NADPH to "waluta energetyczna" cyklu Calvina. B — Prawda: PSI = P700 (chlroofil a z przesunięciem absorpcji do 700 nm ze względu na otoczenie białkowe); PSI katalizuje Fd-NADP⁺-oksydoreduktazę. C — Fałsz: synteza ATP zachodzi dzięki gradientowi protonowemu; syntaza ATP (CF₁-CF₀) jest zakotwiczona w błonie tylakoidu; CF₀ (kanał protonowy) w błonie, CF₁ (kataliza) wystaje do stromy; przepływ H⁺ z lumen (kwasowe) przez CF₀ do stromy napędza CF₁ do syntezy ATP z ADP+Pi (chemiosmoza Mitchella).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'single',
    question_text: 'Cykl Calvina (faza ciemna/cykl C3) przebiega w stromie chloroplastu. Wskaż prawidłową kolejność etapów cyklu:',
    options: [
      { id: 'A', text: 'Karboksylacja (CO₂ + RuBP → 2×PGA, katalizuje RuBisCO) → redukcja (PGA + ATP + NADPH → G3P) → regeneracja akceptora (G3P + ATP → RuBP)', is_correct: true },
      { id: 'B', text: 'Redukcja (CO₂ + ATP → PGA) → karboksylacja (PGA + NADPH → G3P) → regeneracja (G3P → RuBP bez nakładu ATP)', is_correct: false },
      { id: 'C', text: 'Regeneracja akceptora (RuBP → PGA) → redukcja (PGA → G3P) → karboksylacja (G3P + CO₂ → RuBP)', is_correct: false },
      { id: 'D', text: 'Karboksylacja (CO₂ + PGA → G3P, katalizuje PEP-karboksylaza) → redukcja (G3P → glukoza) → regeneracja (glukoza → RuBP)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cykl Calvina (Benson-Bassham-Calvin, 1950): (1) KARBOKSYLACJA: 3CO₂ + 3RuBP (C5) → 6×PGA (3-fosfoglicerinian, C3) — katalizuje RuBisCO (rybulozo-1,5-bisfosforanokarboksylaza/oksygenaza); (2) REDUKCJA: 6PGA + 6ATP + 6NADPH → 6G3P (aldehydo-3-fosfoglicerynowy, C3) — fosfoglicerynokarboksylaza + kinaza fosfoglicerynianowa + reduktaza G3P; (3) REGENERACJA: 5×G3P + 3ATP → 3×RuBP; 1×G3P wychodzi z cyklu (produkt netto). Na 1 cząsteczkę glukozy: 3 obroty = 6 CO₂ + 18 ATP + 12 NADPH.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'single',
    question_text: 'RuBisCO jest kluczowym enzymem cyklu Calvina. Które stwierdzenie POPRAWNIE opisuje właściwości tego enzymu?',
    options: [
      { id: 'A', text: 'RuBisCO katalizuje zarówno karboksylację RuBP (fotosynteza) jak i oksygenację RuBP (fotooddychanie); przy wysokim stężeniu O₂ preferuje oksygenację, co obniża efektywność fotosyntezy', is_correct: true },
      { id: 'B', text: 'RuBisCO jest wysoce specyficzny wyłącznie dla CO₂ i nigdy nie reaguje z O₂; fotooddychanie jest katalizowane przez odrębny enzym (oksygenaza RuBP) nieobecny u roślin C3', is_correct: false },
      { id: 'C', text: 'RuBisCO jest enzymem błony tylakoidów; działa tylko w świetle i jest inaktywowany natychmiast po zachodzie słońca poprzez degradację przez proteazę', is_correct: false },
      { id: 'D', text: 'RuBisCO nie wymaga kofaktorów; jest prostym enzymem jednodomeniowym kodowanym wyłącznie przez jądro komórkowe, a nie przez DNA chloroplastu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'RuBisCO (rybulozo-1,5-bisfosforanokarboksylaza/oksygenaza): (1) karboksylacja: RuBP + CO₂ → 2×PGA (fotosynteza); (2) oksygenacja: RuBP + O₂ → PGA + fosfoglikolan (fotooddychanie/fotorespiracja) — prowadzi do straty węgla i energii. Przy niskim CO₂/O₂ (np. w liściach w upale po zamknięciu aparatów szparkowych) O₂ konkuruje z CO₂ → wzrost fotooddychania. RuBisCO: hexadekamer (8L + 8S), podjednostki L kodowane przez cpDNA, S przez jądrowe DNA; aktywowany przez Mg²⁺ i karbamylację lizynową.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują zależność fotosyntezy od warunków środowiskowych? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Natężenie fotosyntezy wzrasta wraz ze wzrostem natężenia światła do wartości nasycającej (punkt nasycenia świetlnego); powyżej tej wartości intensywność nie rośnie, a przy bardzo silnym świetle może dochodzić do fotoinhibicji', is_correct: true },
      { id: 'B', text: 'Wzrost stężenia CO₂ powyżej atmosferycznego (~0,04%) zwiększa intensywność fotosyntezy u roślin C3 (bo RuBisCO nie jest nasycone CO₂ przy normalnym stężeniu); u roślin C4 efekt jest mniejszy', is_correct: true },
      { id: 'C', text: 'Temperatura optymalna fotosyntezy to ~25–30°C dla większości roślin umiarkowanego klimatu; powyżej ~40°C enzymy (RuBisCO, enzymy cyklu Calvina) denaturują i intensywność gwałtownie spada', is_correct: true },
      { id: 'D', text: 'Punkt kompensacji świetlnej to natężenie światła, przy którym fotosynteza brutto jest równa zeru; poniżej tego punktu roślina wyłącznie oddycha i nie asymiluje węgla', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) krzywa P-I (fotosynteza vs irradiancja): liniowy wzrost → nasycenie (punkt nasycenia świetlnego) → plateau; fotoinhibicja = uszkodzenie PSII przez nadmiar energii świetlnej (degradacja białka D1). (B) CO₂ jako czynnik limitujący u C3: RuBisCO nie jest nasycone przy 400 ppm CO₂ → wzrost [CO₂] → ↑ fotosyntezy; efekt Farbera (CO₂ enrichment). C4: mechanizm koncentracji CO₂ → RuBisCO prawie nasycone → mniejszy efekt wzrostu [CO₂]. (C) prawda: optimum ~25–30°C; Q10 ≈ 2 (do optimum); powyżej: denaturacja enzymów, zamknięcie aparatów szparkowych, wzrost fotooddychania. (D) fałsz: punkt kompensacji świetlnego (LCP) = natężenie, przy którym fotosynteza brutto = oddychanie (Pgross = R); netto = 0; POWYŻEJ LCP roślina asymiluje węgiel netto.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących fotooddychania (fotorespiracji):',
    options: [
      { id: 'A', text: 'Fotooddychanie zachodzi gdy RuBisCO katalizuje reakcję RuBP z O₂ zamiast z CO₂; produktem jest fosfoglikolan, który jest metabolizowany w peroksysomach i mitochondriach z uwolnieniem CO₂ — zmniejsza efektywność fotosyntezy.', is_correct: true },
      { id: 'B', text: 'Rośliny C4 i CAM prawie nie prowadzą fotooddychania, ponieważ mają mechanizmy zagęszczające CO₂ w komórkach zawierających RuBisCO — zapobiega to konkurencji O₂ z CO₂.', is_correct: true },
      { id: 'C', text: 'Fotooddychanie jest procesem korzystnym dla roślin C3 w każdych warunkach — produkuje dodatkowe ATP i NADPH, które uzupełniają zasoby energetyczne komórki podczas długiego dnia.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: oksygenaza RuBisCO: RuBP + O₂ → PGA + 2-fosfoglikolan; fosfoglikolan → glikolan (fosfataza) → peroksysom (oksydaza glikolanowa, katalaza) → mitochondrium (aminotransferaza, dehydrogenaza) → powrót do cyklu Calvina; net: przy każdych 2 fosfoglikanach 1 CO₂ jest tracone. B — Prawda: C4 — PEP-karboksylaza w komórkach mezofilu wiąże CO₂ do OAA → malat → kom. pochwy wiązki → RuBisCO przy wysokim [CO₂]; C4 ≈ brak fotooddychania. CAM: stomata nocą otwarte (CO₂ fixacja → malat), w dzień zamknięte (malat → CO₂ → Calvin). C — Fałsz: fotooddychanie jest KOSZTOWNE — zużywa ATP i NADPH, traci CO₂; szacuje się że obniża wydajność fotosyntezy C3 nawet o 25–50% w ciepłe dni; ewolucja C4/CAM to adaptacja do zmniejszenia tego kosztu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.foto, question_type: 'single',
    question_text: 'Badacz zmierzył intensywność fotosyntezy i oddychania u rośliny w różnych warunkach. Przy jakim stosunku CO₂ pobranego do O₂ oddanego (RQ) i ilorazie fotosyntetycznym (PQ = O₂/CO₂) możemy wnioskować, że roślina asymiluje wyłącznie cukry?',
    options: [
      { id: 'A', text: 'RQ oddychania ≈ 1 (gdy substrat to glukoza: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O); PQ fotosyntezy ≈ 1 (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂); oba ilorazy równe 1 wskazują na cukry jako substrat/produkt', is_correct: true },
      { id: 'B', text: 'RQ ≈ 0,7 i PQ ≈ 1,4; wartości te wskazują że roślina oddycha tłuszczami i asymiluje białka — cukry mają RQ = 2,0', is_correct: false },
      { id: 'C', text: 'RQ ≈ 1 i PQ ≈ 0 — wartości te pokazują, że produkt fotosyntezy to wyłącznie ATP, bez syntezy związków organicznych; PQ = 0 oznacza brak wymiany O₂', is_correct: false },
      { id: 'D', text: 'Nie ma związku między RQ a substratem oddychania; RQ jest zawsze stałe i wynosi 0,5 niezależnie od substratu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Iloraz oddychania (RQ = CO₂ wyd. / O₂ pobr.): glukoza → RQ = 1,0; tłuszcze (tripalmitin) → RQ ≈ 0,70 (więcej O₂ potrzeba do utleniania → mniej CO₂ na mol O₂); białka → RQ ≈ 0,8; kwasy organiczne (malat) → RQ > 1. Iloraz fotosyntetyczny (PQ = O₂ wyd. / CO₂ pochł.): dla syntezy cukrów PQ = 1; dla syntezy tłuszczów PQ < 1 (więcej energii potrzeba, więcej CO₂ na mol O₂); PQ > 1 gdy asymilacja z jednoczesnym utlenianiem substratów. Równanie: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (RQ=1); 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (PQ=1).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding batch 1 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
