// Seed: Genetyka i dziedziczenie — 10 open questions
// Topic: 417e905f-f10b-49e8-ab02-f7042144e68b

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const T = '417e905f-f10b-49e8-ab02-f7042144e68b'
const S = {
  mendel:      'a0020902-50b3-4481-850e-44023d3662ac',
  budowa:      '04e56717-9ed0-40a0-b95c-6fe700bdb818',
  mejoza:      '979ad1bd-9768-4c1d-bdc1-66353738b09c',
  plec:        'aa092ab8-8b73-42be-ade5-937612aa3149',
  sprzezenie:  'ed509292-e3e8-483b-b09f-f066f8ad616f',
  krew:        'efcb697c-fb46-4bdf-bb03-a2fdba82bcaa',
  kariotyp:    '52fd9442-e616-425b-9c71-ae47d73e3708',
  mutacje:     '44534440-600c-4ca4-9598-b1275669b85b',
  populacyjna: 'f9d3bfb0-8814-413f-90f2-1f3bfaff333b',
  wielogenowe: '31a062c8-86e5-4a19-b039-c83e7ea60f9f',
}

const questions = [
  {
    topic_id: T, subtopic_id: S.mendel,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega krzyżówka testowa (krzyżowanie testowe). Podaj, jakich informacji o genotypie badanego osobnika dostarcza wynik tej krzyżówki.',
    max_points: 2,
    key_points: [
      'Krzyżówka testowa polega na skrzyżowaniu osobnika o nieznanym genotypie (wykazującego fenotyp dominujący) z homozygotą recesywną (aa) — osobnikiem o fenotypie recesywnym, który wytwarza wyłącznie gamety z allelem recesywnym.',
      'Wynik: jeśli CAŁE potomstwo wykazuje fenotyp dominujący → badany osobnik jest homozygotem dominującym (AA); jeśli POŁOWA potomstwa wykazuje fenotyp dominujący, a połowa recesywny (1:1) → badany osobnik jest heterozygotem (Aa).',
    ],
    model_answer: 'Krzyżówka testowa: osobnik o fenotypie dominującym (AA lub Aa — nie wiemy) krzyżujemy z homozygotą recesywną (aa). Homozygota recesywna wytwarza tylko gamety "a", więc potomstwo ujawnia allele odziedziczone od badanego osobnika. Wyniki: jeśli badany = AA → potomstwo 100% Aa (fenotyp dominujący, stosunek 1:0); jeśli badany = Aa → potomstwo 1 Aa : 1 aa (1:1 — połowa dominujących, połowa recesywnych). Krzyżówka testowa pozwala więc jednoznacznie rozstrzygnąć, czy osobnik dominujący jest homo- czy heterozygotem — czego nie można ustalić wyłącznie na podstawie obserwacji fenotypu.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mendel,
    question_type: 'open',
    question_text: 'U grochu siewnego barwa kwiatów purpurowa (allel A) dominuje nad białą (allel a). Skrzyżowano dwie rośliny o kwiatach purpurowych. W potomstwie F1 uzyskano: 87 roślin z kwiatami purpurowymi i 29 roślin z kwiatami białymi.\n\na) Określ genotypy obu roślin rodzicielskich. Uzasadnij odpowiedź.\nb) Podaj oczekiwany stosunek genotypów w potomstwie F1.',
    max_points: 3,
    key_points: [
      'Stosunek fenotypowy potomstwa (87:29 ≈ 3:1) wskazuje na krzyżówkę dwóch heterozygot: Aa × Aa — jest to typowy wynik mendlowski dla monohybrydy F2.',
      'Oboje rodzice mają genotyp Aa (heterozygoty) — mają kwiaty purpurowe (allel A dominuje), ale niosą ukryty allel a; krzyżówka Aa × Aa daje stosunek 3 purpurowe : 1 białe.',
      'Stosunek genotypów w potomstwie F1: 1 AA : 2 Aa : 1 aa (25% AA, 50% Aa, 25% aa).',
    ],
    model_answer: 'a) Stosunek 87:29 ≈ 3:1 (purpurowe:białe) jest charakterystyczny dla krzyżówki Aa × Aa. Oboje rodzice mają genotyp Aa — są heterozygotami z kwiatami purpurowymi (A dominuje nad a), ale niosą ukryty allel a. Uzasadnienie: krzyżówka Aa × Aa daje gamety A i a (po 50%) od każdego z rodziców → potomstwo: 1/4 AA + 2/4 Aa + 1/4 aa → 3/4 purpurowe (AA i Aa) + 1/4 białe (aa) = 3:1.\nb) Stosunek genotypów: 1 AA : 2 Aa : 1 aa.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mejoza,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego mejoza jest niezbędnym procesem w rozmnażaniu płciowym organizmów diploidalnych. Co by się stało z liczbą chromosomów w kolejnych pokoleniach, gdyby gamety powstawały przez mitozę, a nie mejozę?',
    max_points: 2,
    key_points: [
      'Mejoza jest redukcyjnym podziałem — zmniejsza liczbę chromosomów z diploidalnej (2n) do haploidalnej (n); gamety (n) po zapłodnieniu łączą się i przywracają liczbę 2n w zygocie — utrzymując stałą liczbę chromosomów charakterystyczną dla gatunku.',
      'Gdyby gamety powstawały przez mitozę (byłyby diploidalne, 2n), po każdym zapłodnieniu liczba chromosomów podwajałaby się (2n + 2n = 4n, potem 8n itd.) — już po kilku pokoleniach organizm miałby niekompatybilną liczbę chromosomów, co prowadziłoby do niezdolności do życia.',
    ],
    model_answer: 'Organizmy diploidalne mają 2n chromosomów (dwa zestawy homologów). Przy rozmnażaniu płciowym dwa gamety łączą się (zapłodnienie). Aby potomstwo miało prawidłowe 2n, każda gameta musi wnosić n chromosomów — stąd konieczność mejozy (podział redukcyjny: 2n → n). Gdyby gamety powstawały przez mitozę, byłyby diploidalne (2n). Po zapłodnieniu: 2n + 2n = 4n. W kolejnym pokoleniu: 4n + 4n = 8n itd. Liczba chromosomów rosłaby geometrycznie z każdym pokoleniem → poliploidia → niestabilność genomu → zaburzenia ekspresji genów → organizmy niezdolne do życia (u zwierząt; u roślin poliploidia jest częściej tolerowana, ale nadal ogranicza płodność).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.plec,
    question_type: 'open',
    question_text: 'Hemofilia A jest chorobą X-sprzężoną recesywną. Zdrowa kobieta, której ojciec chorował na hemofilię, wyszła za mąż za zdrowego mężczyznę.\n\na) Określ genotyp kobiety. Uzasadnij.\nb) Oblicz prawdopodobieństwo, że ich syn będzie chory na hemofilię.\nc) Wyjaśnij, dlaczego córki tej pary nie będą chore na hemofilię, nawet jeśli odziedziczą allel choroby.',
    max_points: 3,
    key_points: [
      'Genotyp kobiety: X^H X^h (nosicielka) — jej ojciec był chory (X^h Y), więc przekazał jej allel X^h; matka kobiety była zdrowa, więc dała X^H → kobieta X^H X^h (zdrowa nosicielka).',
      'Prawdopodobieństwo chorego syna: synowie dostają X od matki z p=1/2 X^h lub 1/2 X^H; chory syn = X^h Y → prawdopodobieństwo 1/2 (50%).',
      'Córki: dostają X^H od ojca (zdrowy mężczyzna ma X^H Y → daje córkom X^H) + X od matki (X^H lub X^h) → córki mają X^H X^H lub X^H X^h; nawet jeśli X^H X^h = nosicielka, drugi allel X^H dominuje → córka zdrowa.',
    ],
    model_answer: 'a) Ojciec kobiety chorował (X^h Y) → przekazał córce chromosom X^h. Matka była zdrowa (zakładamy X^H X^H lub nosicielka). Kobieta dostała X^h od ojca i X^H od matki → genotyp X^H X^h (zdrowa nosicielka). b) Mąż: X^H Y. Gamety matki: 1/2 X^H i 1/2 X^h. Synowie = Y od ojca + X od matki: 1/2 X^H Y (zdrowy) i 1/2 X^h Y (chory). Prawdopodobieństwo chorego syna = 1/2 = 50%. c) Córki: X od ojca = zawsze X^H (mąż zdrowy, ma tylko X^H). Córki = X^H od ojca + X^H lub X^h od matki → X^H X^H (zdrowa, 50%) lub X^H X^h (nosicielka, 50%). Allel X^h jest recesywny — przy obecności X^H hemofilia nie wystąpi. Żadna córka nie zachoruje (brak X^h X^h).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.sprzezenie,
    question_type: 'open',
    question_text: 'Dwa geny A i B leżą na tym samym chromosomie (są sprzężone) w konformacji cis: AB/ab. Wyjaśnij, w jaki sposób crossing-over między tymi genami podczas mejozy wpływa na typy gamet produkowanych przez heterozygotę AB/ab. Wymień wszystkie cztery klasy gamet i określ, które są parentalne, a które rekombinacyjne.',
    max_points: 2,
    key_points: [
      'Bez crossing-over heterozygota AB/ab produkuje wyłącznie gamety parentalne: AB i ab (w proporcjach zależnych od odległości między genami — im bliżej siebie, tym większy udział parentalnych).',
      'Crossing-over między loci A i B w profazie I generuje dodatkowe klasy rekombinacyjne: Ab i aB; cztery klasy gamet: AB (parentalna), ab (parentalna), Ab (rekombinacyjna), aB (rekombinacyjna); częstość rekombinantów = odległość genetyczna w cM.',
    ],
    model_answer: 'Heterozygota AB/ab: w konformacji cis allele dominujące (A i B) leżą NA TYM SAMYM chromosomie. Bez crossing-over: tylko gamety parentalne AB i ab (ich częstość sumaryczna >50%). Z crossing-over między A i B (wymiana między chromosomami homologicznymi): powstawanie dwóch nowych chromatyd z nowymi kombinacjami alleli → gamety rekombinacyjne Ab i aB. Cztery klasy gamet: (1) AB — parentalna (częsta), (2) ab — parentalna (częsta), (3) Ab — rekombinacyjna (rzadka), (4) aB — rekombinacyjna (rzadka). Suma rekombinantów / wszystkie gamety × 100% = częstość rekombinacji (RF) w centimorgan. Im geny bliżej siebie, tym mniej crossing-over i rzadsze rekombinacyjne gamety.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.krew,
    question_type: 'open',
    question_text: 'Matka ma grupę krwi A (fenotypowo), ojciec ma grupę krwi B (fenotypowo). Ich dziecko ma grupę krwi 0.\n\na) Podaj wszystkie możliwe genotypy matki i ojca.\nb) Wyjaśnij, jakie genotypy rodziców są konieczne, aby ich dziecko miało grupę krwi 0. Uzasadnij.',
    max_points: 2,
    key_points: [
      'Matka grupa A: genotypy możliwe I^A I^A lub I^A i; ojciec grupa B: genotypy możliwe I^B I^B lub I^B i.',
      'Dziecko z grupą 0 ma genotyp ii — musi otrzymać allel i od każdego z rodziców; dlatego matka MUSI być I^A i (heterozygota), a ojciec MUSI być I^B i (heterozygota) — tylko wtedy każde z rodziców może przekazać gamety z allelem i.',
    ],
    model_answer: 'a) Matka (gr. A): może być I^A I^A lub I^A i. Ojciec (gr. B): może być I^B I^B lub I^B i. b) Dziecko z grupą 0 ma genotyp ii — oba allele recesywne i. Aby dziecko dostało i od matki, matka musi mieć co najmniej jeden allel i → genotyp I^A i (nie może być I^A I^A, bo nie ma allelu i). Analogicznie ojciec musi być I^B i. Jedyna możliwa kombinacja rodziców: matka I^A i × ojciec I^B i. Z tej krzyżówki potomstwo: 1/4 I^A I^B (AB), 1/4 I^A i (A), 1/4 I^B i (B), 1/4 ii (0). Każde z rodziców jest więc heterozygotą.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.kariotyp,
    question_type: 'open',
    question_text: 'Na podstawie rodowodu przedstawionego schematycznie opisz, jakie cechy dziedziczenia tej choroby możesz odczytać, i określ najbardziej prawdopodobny typ dziedziczenia.\n\nRodowód (opisz słownie): Chory dziadek (pokolenie I) — zdrowa babcia. Ich syn (pokolenie II) jest zdrowy, córka chora. Chora córka i zdrowy mąż mają: jednego chorego syna i jedną zdrową córkę.\n\nOkreśl typ dziedziczenia i uzasadnij na podstawie co najmniej dwóch cech rodowodu.',
    max_points: 2,
    key_points: [
      'Choroba pojawia się w każdym pokoleniu (dziadek → córka → wnuk) i dotyczy zarówno kobiet jak i mężczyzn → sugeruje dziedziczenie autosomalne dominujące (AD).',
      'Chorzy rodzice (chora córka) mają chore i zdrowe dzieci w stosunku ~1:1, co odpowiada krzyżówce Aa × aa (heterozygota dominująca × zdrowy); choroba nie pomija pokoleń → AD; gdyby była X-sprzężona dominująca, chory mężczyzna (pokolenie I) przekazywałby cechę WSZYSTKIM córkom, a nie tylko jednej — więc najbardziej prawdopodobne autosomalne dominujące.',
    ],
    model_answer: 'Cechy odczytane z rodowodu: (1) choroba występuje w każdym pokoleniu (I, II, III) — brak "przeskoczenia" pokoleń; (2) chorobę wykazują zarówno mężczyźni (dziadek, wnuk) jak i kobiety (córka) — choroba nie jest ograniczona do jednej płci; (3) chora matka (II pokolenie) × zdrowy ojciec → dzieci chore i zdrowe (ok. 1:1). Typ dziedziczenia: autosomalny dominujący (AD). Uzasadnienie: (1) choroba w każdym pokoleniu + zarówno u kobiet jak i mężczyzn → autosomalny (nie X-sprzężony); (2) rodzic chory × zdrowy → 50% chorych → jeden allel wystarczy → dominujący; (3) gdyby X-sprzężony dominujący: chory dziadek (X^A Y) przekazywałby X^A WSZYSTKIM córkom (byłyby chore) — tu tylko jedna córka chora → wyklucza X-sprzężony dominujący.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mutacje,
    question_type: 'open',
    question_text: 'Mukowiscydoza jest chorobą autosomalną recesywną spowodowaną mutacją genu CFTR. W pewnej populacji europejskiej częstość zachorowań wynosi 1 na 2500 urodzeń. Zakładając równowagę Hardy\'ego-Weinberga:\n\na) Oblicz częstość allelu chorobotwórczego (q) w tej populacji.\nb) Oblicz, ilu na 100 losowo dobranych mieszkańców tej populacji jest nosicielem (heterozygotą Aa).',
    max_points: 2,
    key_points: [
      'Częstość chorych = q² = 1/2500 = 0,0004; q = √0,0004 = 0,02; p = 1 − 0,02 = 0,98.',
      'Częstość nosicieli = 2pq = 2 × 0,98 × 0,02 = 0,0392 ≈ 3,9%; na 100 osób ≈ 4 osoby są nosicielami (heterozygotami Aa).',
    ],
    model_answer: 'a) Równanie Hardy\'ego-Weinberga: p² + 2pq + q² = 1; chorzy = aa = q². q² = 1/2500 = 0,0004; q = √0,0004 = 0,02 (2%). p = 1 − q = 1 − 0,02 = 0,98 (98%). b) Nosiciele (heterozygoty Aa) = 2pq = 2 × 0,98 × 0,02 = 0,0392 = 3,92% ≈ 4%. Na 100 osób: ~4 osoby są nosicielami. Stosunek nosicieli do chorych: 2pq/q² = 2p/q = 2×0,98/0,02 = 98:1 — na 98 nosicieli przypada 1 chory. To wyjaśnia, dlaczego w populacji jest znacznie więcej ukrytych nosicieli niż chorych.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.populacyjna,
    question_type: 'open',
    question_text: 'Podaj cztery warunki konieczne do utrzymania równowagi Hardy\'ego-Weinberga w populacji i wyjaśnij, dlaczego rzeczywiste populacje rzadko spełniają te warunki jednocześnie.',
    max_points: 2,
    key_points: [
      'Warunki H-W: (1) bardzo duża (nieskończona) liczebność populacji — brak dryfu genetycznego; (2) losowe kojarzenie (panmiksja) — brak preferencji wyboru partnera; (3) brak mutacji lub równowaga mutacji forward/reverse; (4) brak migracji (brak przepływu genów do/z populacji); (5) brak doboru naturalnego — wszystkie genotypy mają jednakowy fitness.',
      'Populacje realne: są skończone (dryf genetyczny); kojarzenie bywa nielosowe (dobór seksualny, inbreeding); mutacje stale zachodzą; migracje są powszechne; dobór naturalny działa na wszystkie genotypy — co najmniej jeden warunek jest zawsze naruszony.',
    ],
    model_answer: 'Pięć warunków H-W: (1) nieskończona wielkość populacji (brak dryfu); (2) losowe kojarzenie (panmiksja — brak doboru partnera na podstawie genotypu); (3) brak mutacji (lub symetryczne mutacje forward i reverse); (4) brak migracji (izolacja od innych populacji); (5) brak doboru naturalnego (wszystkie genotypy jednakowo płodne i przeżywające). Dlaczego populacje realne odbiegają: żadna populacja nie jest nieskończona → dryf genetyczny nieunikniony; kojarzenie bywa nielosowe (dobór płciowy, bliskość geograficzna, podobieństwo kulturowe); mutacje stale powstają (10⁻⁸ per locus per pokolenie); migracja i emigracja normalne zjawiska; selekcja naturalna działa na każdy fenotyp. H-W jest modelem idealnym — przydatnym jako punkt odniesienia do wykrywania działania sił ewolucyjnych.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.wielogenowe,
    question_type: 'open',
    question_text: 'Wzrost człowieka jest cechą wielogenową (poligenową). Wyjaśnij, dlaczego wzrost w ludzkiej populacji wykazuje rozkład zbliżony do normalnego (dzwonowy), a nie rozkład nieciągły z wyraźnymi klasami fenotypowymi, jak ma to miejsce przy dziedziczeniu mendlowskim (np. barwa kwiatów grochu).',
    max_points: 2,
    key_points: [
      'Wzrost kontrolowany jest przez setki genów (loci), z których każdy wnosi mały, addytywny efekt — im więcej alleli "wzrostowych" dziedziczy osobnik, tym jest wyższy; addytywne nakładanie się efektów wielu niezależnych loci daje (z centralnego twierdzenia granicznego) rozkład normalny.',
      'Dodatkowo środowisko (odżywianie, stan zdrowia, warunki wzrastania) nakłada się na podłoże genetyczne, poszerzając ciągłość rozkładu; w odróżnieniu od grochu (jeden gen, dwa allele → dwa wyraźne fenotypy), wielogenowość i środowisko powodują brak wyraźnych granic między klasami fenotypowymi — zmienność jest ciągła.',
    ],
    model_answer: 'Wzrost człowieka zależy od setek loci genetycznych (GWAS identyfikuje >700 SNP), z których każdy wnosi małe addytywne przyczynki (np. +2 mm lub −2 mm). Osobnik dziedziczy losową kombinację alleli "wzrostowych" i "niskości" — im więcej alleli wzrostowych, tym wyższy wzrost. Przy wielu niezależnych lociach o małych efektach, rozkład sumy tych efektów zbliża się do normalnego (centralne twierdzenie graniczne). Dodatkowo środowisko (dieta białkowa, stan zdrowia w dzieciństwie, choroby) modyfikuje ekspresję genetyczną → kolejna warstwa ciągłej zmienności. Kontrast z grochem: barwa kwiatów = 1 gen, 2 allele → 2 wyraźne klasy fenotypowe (purpurowa/biała) = zmienność nieciągła. Poligenizm + środowisko = zmienność ciągła + rozkład normalny.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
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
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} open questions for Genetyka i dziedziczenie...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 120))
    else console.log('OK', q.max_points + 'pkt', q.question_text.slice(0, 72).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
