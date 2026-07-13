// Seed batch 5/6 — Różnorodność roślin — tkanki i organy
// Budowa kwiatu i zapylanie (5) + Nasiona i owoce (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d'

const S = {
  kwiat:   '2f534143-8c2e-493a-8040-f4f5008765b4',
  nasiona: '78b9339f-9ce4-4e22-9842-584ab100daf9',
}

const questions = [

  // ── BUDOWA KWIATU I ZAPYLANIE (5) ─────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.kwiat, question_type: 'single',
    question_text: 'Podwójne zapłodnienie (double fertilization) jest cechą charakterystyczną okrytonasiennych. Na czym polega i jaki jest jego wynik?',
    options: [
      { id: 'A', text: 'Jeden gamet łączy się z komórką jajową tworząc zygotę (2n), drugi gamet łączy się z komórką centralną (2n, z 2 jądrami polarnymi) tworząc komórkę pierwotną endospermu (3n = triploidalne bielmo)', is_correct: true },
      { id: 'B', text: 'Dwa gamety łączą się jednocześnie z komórką jajową tworząc komórkę tetraploidalną (4n) — stąd "podwójne" zapłodnienie; bielmo nie powstaje', is_correct: false },
      { id: 'C', text: 'Podwójne zapłodnienie oznacza, że każdy kwiat jest zapylany dwukrotnie przez dwa różne ziarna pyłku — jedno tworzy nasiono, drugie — owoc', is_correct: false },
      { id: 'D', text: 'Jeden gamet zapładnia komórkę jajową (zygota 2n), drugi gamet zapładnia antypody (3n) tworząc dodatkowy zarodek będący klonem rośliny matecznej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Podwójne zapłodnienie (odkryte przez Nawarschina 1898): łagiewka pyłkowa dostarcza 2 gamety do woreczka zalążkowego. Gamet 1 + komórka jajowa (n) → zygota (2n) → zarodek. Gamet 2 + komórka centralna (n+n=2n, 2 jądra polarne) → pierwotna komórka bielma (3n) → endosperm triploidalny (bielmo). Bielmo dostarcza składniki odżywcze zarodkowi. U nagonasiennych: tylko jedno zapłodnienie (brak endospermu 3n — gametofit żeński n pełni funkcję zapasową). Ewolucyjne znaczenie: efektywniejsze zaopatrzenie zarodka.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwiat, question_type: 'single',
    question_text: 'Dichogamia to mechanizm zapobiegający samozapyleniu. Na czym polega?',
    options: [
      { id: 'A', text: 'Dichogamia to wytwarzanie przez roślinę dwóch typów kwiatów jednocześnie — żeńskich i męskich — na różnych częściach tej samej rośliny (monecia)', is_correct: false },
      { id: 'B', text: 'Dichogamia to dojrzewanie pręcików i słupka w różnych momentach w obrębie tego samego kwiatu: proterandria (najpierw pręciki) lub proteroginia (najpierw słupek) — zapobiega samozapyleniu wewnątrz kwiatu', is_correct: true },
      { id: 'C', text: 'Dichogamia to wydzielanie inhibitorów kiełkowania przez pyłek z własnej rośliny, które uniemożliwiają kiełkowanie łagiewki pyłkowej na własnym znamieniu', is_correct: false },
      { id: 'D', text: 'Dichogamia to zjawisko wyłącznie u dwupiennych (diocious) roślin — jako że płcie rozdzielone są na różnych osobnikach', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mechanizmy obcopylności: (1) Dichogamia = sekwencyjne dojrzewanie organów płciowych w kwiecie: proterandria (pręciki dojrzewają pierwsze, słupek później) → np. dzwonek, marchew; proteroginia (słupek pierwszy) → np. zawilec, plantago. (2) Hercogamia = przestrzenne rozmieszczenie znamienia i pylników (np. rośliny heterostyliczne jak pierwiosnek — krótko- i długosłupkowe). (3) Niezgodność (incompatibility) = genetyczna blokada kiełkowania pyłku własnej rośliny na własnym znamieniu (np. kapusta, jabłoń). (4) Diecia/monecia = rozmieszczenie płci na różnych kwiatach/roślinach.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwiat, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują budowę i funkcję słupka? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Słupek zbudowany jest z zalążni (ovary) zawierającej zalążki (ovule), szyjki słupka (style) i znamienia (stigma) wychwytującego pyłek', is_correct: true },
      { id: 'B', text: 'Znamię słupka wydziela wydzielinę ułatwiającą kiełkowanie ziaren pyłku i rozpoznanie zgodności genetycznej (self-incompatibility reaction)', is_correct: true },
      { id: 'C', text: 'Każdy zalążek zawiera woreczek zalążkowy (gametofit żeński) z komórką jajową — po zapłodnieniu zalążek staje się nasieniem, a zalążnia dojrzewa w owoc', is_correct: true },
      { id: 'D', text: 'Słupek złożony z wielu wolnych owocolistków (apokarpia) jest bardziej ewolucyjnie zaawansowany niż słupek z zrośniętych owocolistków (synkarpia) — apokarpia jest cechą nowoczesnych roślin', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) budowa słupka: zalążnia (jedno- lub wielo-komorowa z zalążkami na łożysku = placenta) + szyjka (kanał transmisyjny dla łagiewki pyłkowej) + znamię (wyspecjalizowana powierzchnia do przyjęcia pyłku). (B) znamię mokre (lepkie wydzielina = recepcja pyłku) lub suche; niezgodność pyłku oceniana przez białka S-lokus → odrzucenie własnego pyłku → stymulacja obcego. (C) prawidłowy schemat: zapłodnienie → zalążek (ovule) → nasiono; zalążnia → owoc (pericarp = owocnia). (D) fałsz: apokarpia (wolne słupki, np. truskawka, magnolia) = cecha PRYMITYWNA (plesiomorficzna); synkarpia (zrośnięte) = cecha ZAAWANSOWANA (apomorficzna) u ewolucyjnie nowoczesnych okrytonasiennych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwiat, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zapylenia i kiełkowania łagiewki pyłkowej:',
    options: [
      { id: 'A', text: 'Po wylądowaniu ziarna pyłku na znamieniu słupka komórka wegetatywna kiełkuje w łagiewkę pyłkową, która rośnie przez tkankę szyjki słupka (prowadnikową) wzdłuż gradientu chemicznego do mikropyle zalążka.', is_correct: true },
      { id: 'B', text: 'Komórka generatywna w czasie wzrostu łagiewki dzieli się mitotycznie na dwa gamety (komórki plemnikowe); oba gamety są dostarczane przez łagiewkę do woreczka zalążkowego.', is_correct: true },
      { id: 'C', text: 'Kiełkowanie łagiewki pyłkowej jest procesem bezpośrednio napędzanym przez ATP z mitochondriów ziarna pyłku; znamię słupka nie dostarcza żadnych składników odżywczych ani sygnałów kierunkowych.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: łagiewka pyłkowa rośnie w tempie 0,1–1 cm/h przez tkankę transmisyjną szyjki; kierunek: gradient GABA, peptydów (np. LURE u Arabidopsis) wydzielanych przez synergidy. B — Prawda: komórka generatywna dzieli się w łagiewce → 2 nierzeskie, nieruchliwe gamety transportowane przez cytoplazm łagiewki. C — Fałsz: znamię słupka aktywnie uczestniczy: (1) wydzielina (AEC = arachidic acid + estry) ułatwia kiełkowanie; (2) sygnały chemoatraktantów z woreczka zalążkowego (synergidy: LURE = malectin-like peptides) kierują wzrost łagiewki; pollen tube guidance to aktywny biologiczny proces.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwiat, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują inflorescencje (kwiatostany)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Grono (raceme) jest kwiatostanem, w którym kwiaty na szypułkach bocznych wyrastają wzdłuż nierozerwanej osi głównej (rachis); np. agrest, porzeczka, lupin', is_correct: true },
      { id: 'B', text: 'Baldach (umbel) to kwiatostan, w którym szypułki kwiatowe wyrastają z jednego punktu osi głównej, rozchodząc się promieniście; typowy dla baldaszkowatych (Apiaceae) np. marchew, koper, seler', is_correct: true },
      { id: 'C', text: 'Koszyczek (capitulum) to kwiatostan złożony z wielu drobnych kwiatków (floretów) osadzonych bezszypułkowo na rozszerzonym, spłaszczonym osi kwiatostaną (receptaculum); typowy dla astrowatych (Asteraceae) — np. słonecznik, stokrotka', is_correct: true },
      { id: 'D', text: 'Kolba (spadix) u araceae (np. calla, skrzydłokwiat) jest kwiatostanem złożonym z małych kwiatów na rozszerzonej, mięsistej osi, otoczonej pochwą (spatha) będącą pojedynczym pręcikiem', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) grono: oś główna nierozerywana, kwiaty na bocznych szypułkach; odgałęzienie − kwiat odcinkowy. (B) baldach: typowy dla Apiaceae (marchew, pietruszka, seler, koper) — szypułki kwiatowe wyrastają z jednego punktu → okrągły kształt parasola. (C) koszyczek (capitulum) Asteraceae: zewnętrzne kwiaty języczkowe (ray florets, bezpłciowe lub żeńskie, funkcja wabiąca) + wewnętrzne rurkowate (disc florets, obupłciowe, właściwe kwiaty płodne); receptaculum = spłaszczone łożysko. (D) fałsz: spatha (pochwa) u araceae to LIŚĆ przykwiatowy (braktea) otaczający kolbę, nie pręcik; kolba (spadix) to mięsista oś kwiatostaną z drobnymi kwiatami.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── NASIONA I OWOCE (5) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.nasiona, question_type: 'single',
    question_text: 'Nasiono okrytonasiennych zbudowane jest z trzech głównych elementów. Które zestawienie jest PRAWIDŁOWE?',
    options: [
      { id: 'A', text: 'Łupina nasienna (z integumentów) + zarodek (z zygoty) + bielmo (z pierwotnej komórki bielma 3n)', is_correct: true },
      { id: 'B', text: 'Owocnia (z zalążni) + gametofit żeński + kariopsja', is_correct: false },
      { id: 'C', text: 'Kutykula + merystem nasionny + epiderma', is_correct: false },
      { id: 'D', text: 'Łupina nasienna (z integumentów) + bielmo diploidalne (z komórki jajowej) + kiełek', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Nasiono okrytonasiennych (po podwójnym zapłodnieniu): (1) łupina nasienna (testa) — z integumentów (zewnętrznych osłon zalążka; 1 lub 2 warstwy); ochrona zarodka; (2) zarodek (embryo, 2n) — z zygoty; zawiera: hipokotyl, radikula (zaczątek korzenia), epikotyl (zaczątek łodygi), liścień/liścienie (cotyledones); (3) bielmo (endosperm, 3n) — z pierwotnej komórki bielma (triploidalne); zapas składników odżywczych. Rośliny bezbielmowe (np. groch, fasola, dąb): bielmo wchłoniete przez liścienie podczas dojrzewania — liścienie grube, spichrzowe.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.nasiona, question_type: 'single',
    question_text: 'Owoce dzielimy na prawdziwe i rzekome. Co odróżnia owoc rzekomy od prawdziwego?',
    options: [
      { id: 'A', text: 'Owoc prawdziwy powstaje wyłącznie z zalążni; owoc rzekomy obejmuje także inne części kwiatu lub kwiatostanu (dno kwiatowe, kielich, oś kwiatostanu) biorące udział w tworzeniu mięsistej części owocu', is_correct: true },
      { id: 'B', text: 'Owoc rzekomy zawiera nasiona, owoc prawdziwy — wyłącznie miąższ bez nasion', is_correct: false },
      { id: 'C', text: 'Owoc rzekomy jest charakterystyczny tylko dla kwiatu wiatropylnego; owoc prawdziwy — dla owadopylnego', is_correct: false },
      { id: 'D', text: 'Oba typy owoców mają identyczną budowę; różnią się jedynie smakiem — owoce rzekome są zawsze kwaśne, prawdziwe — słodkie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Owoc prawdziwy: tylko z zalążni (owocnia = ściana zalążni; endokarp + mezokarp + egzokarp); np. wiśnia, gruszka, pomidor. Owoc rzekomy (pseudocarp): z zalążni + inne elementy kwiatu: (1) jabłko (Malus): mięsista część z dna kwiatowego (hypanthium) otaczającego zalążnię; "właściwa" zalążnia to centralne gniazda z nasionami; (2) truskawka: mięsiste dno kwiatowe (receptaculum), "pestki" to prawdziwe owoce (niełupki); (3) figa: mięsiste osi kwiatostanu (syconium); (4) róża: czerwona owocnia (hip) = mięsiste dno kwiatowe z wieloma orzeszkami wewnątrz.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.nasiona, question_type: 'multiple',
    question_text: 'Które z poniższych mechanizmów rozsiewania nasion i owoców POPRAWNIE opisują adaptacje do danego wektora rozsiewania? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Anemochoria (rozsiewanie przez wiatr): nasiona lub owoce mają skrzydełka (klon, jesion), pappus (mlecz, mniszek — puchowy wiechetek), lub są drobne i lekkie (orchidee, begonie)', is_correct: true },
      { id: 'B', text: 'Zoochoria (przez zwierzęta): mięsiste owoce (żołędź, wiśnia, jagody) zjadane przez ptaki i ssaki — nasiona nie trawione, rozsiewane z kałem; lub owoce z haczykami i kolcami (rzep, łopian) przyczepiające się do sierści', is_correct: true },
      { id: 'C', text: 'Hydrochoria (przez wodę): owoce i nasiona kokosa mają grube, wodoszczelne łupiny z warstwą włóknistą (mezokarp) trapping powietrza — pływają przez wiele tygodni bez uszkodzenia nasion', is_correct: true },
      { id: 'D', text: 'Autochoria (samodzielne rozsiewanie): u balsaminów (niecierpek) owoce nagle pękają wyrzucając nasiona (eksplozja), ale nasiona zawsze lądują w bezpośrednim sąsiedztwie rośliny matecznej (brak odległości)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) anemochoria: skrzydełka (samarze klonu = autorotacja helikoptera), pappus (mlecz — 5+ km), kulki balonu (dmuchawiec). (B) endozoochoria (połykanie) → ptaki i ssaki; epizoochoria (przyczepianie) → rzep, łopian, świdwina z kolcami i haczykami. (C) hydrochoria: kokos (włóknisty mezokarp trapping air > 3 miesiące pływania), lilia wodna, pierścień zawiązania, wierzba. (D) częściowo fałsz: autochoria balistyczna (niecierpek, paprocie, bób diabelski) wyrzuca nasiona dalej (do kilku metrów); nie "w bezpośrednim sąsiedztwie" — odległość może wynosić 1–5+ m. Niecierpek wyrzuca z prędkością ok. 4 m/s.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.nasiona, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących typów owoców:',
    options: [
      { id: 'A', text: 'Pestkowiec (drupa), np. wiśnia, śliwka, brzoskwinia, zbudowany jest z cienkiego egzokarpu (skórka), mięsistego mezokarpu i twardego, zdrewniałego endokarpu (pestka) osłaniającego nasiono.', is_correct: true },
      { id: 'B', text: 'Jagoda (bacca), np. pomidor, winogrono, arbuz, to owoc o mięsistym perikarpie bez twardego endokarpu; nasiona zanurzone bezpośrednio w miękiszu lub galarecie; orzechy brazylijskie i banany są botanicznie również jagodami.', is_correct: true },
      { id: 'C', text: 'Strąk (legume), np. groch, fasola, soja, to owoc suchego, pękającego wzdłuż dwóch linii — brzusznej i grzbietowej owocolistka; typowy dla roślin strączkowych (Fabaceae).', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: pestkowiec/drupa = trójwarstwowy perikarp: egzokarp (cienka skórka, np. czerwona skórka wiśni), mezokarp (mięsisty, jadalny), endokarp (twardy/zdrewniały = pestka). B — Prawda: jagoda botaniczna: pomidor, bakłażan, kiwi, porzeczka, winogrono, arbuz, ogórek, banan, orzech kokos; truskawka, malina = NIE są botanicznie jagodami; jabłko = owoc rzekomy. C — Prawda: strąk (legume) pęka wzdłuż obu szwów owocolistka → wyrzuca nasiona (autochoria lub spadają pod roślinę); jedna komora, nasiona na szwach brzusznych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.nasiona, question_type: 'multiple',
    question_text: 'Kiełkowanie nasion wymaga odpowiednich warunków. Które stwierdzenia POPRAWNIE opisują ten proces? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Do kiełkowania wymagane są: odpowiednia temperatura, woda (nawodnienie nasiona aktywuje enzymy hydrolityczne) i tlen (aerobowy oddech do produkcji ATP dla wzrostu zarodka)', is_correct: true },
      { id: 'B', text: 'U roślin wymagających stratyfikacji (np. jabłko, buk) nasiona muszą przejść przez okres chłodu (0–5°C) zanim kiełkują — adaptacja do klimatu umiarkowanego zapobiegająca kiełkowaniu w jesieni', is_correct: true },
      { id: 'C', text: 'Gibereliny (GA₃) stymulują kiełkowanie nasion przez aktywację α-amylazy w bielmie zbóż, która rozkłada skrobię bielma na cukry dostarczane do zarodka jako substrat energetyczny', is_correct: true },
      { id: 'D', text: 'Kwas abscysynowy (ABA) stymuluje kiełkowanie nasion przy każdym kontakcie z wodą — ewolucyjna adaptacja ułatwiająca szybkie kiełkowanie po opadach deszczu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) warunki: woda (rehydratacja → enzymy hydrolityczne: proteazy, lipazy, amylazy), temperatura optymalna (rośliny ciepłolubne: 25–35°C; pszenica: 15–20°C), O₂ (oddech tlenowy → ATP). (B) stratyfikacja (vernalizacja nasion): jabłoń, buk, grusz → 4–6 tygodni w chłodzie + wilgoć → brak stratyfikacji = nasiona nie kiełkują wiosną. Fotoblastyczność: niektóre wymagają światła (sałata: fytochrom FR), inne nie. (C) gibereliny w bielmie zbóż: GA wydawane przez zarodek (bielnik = scutellum + warstwę aleuronową) → synteza i wydzielanie α-amylazy → hydroliza skrobi → glukoza + maltoza → zarodek. (D) fałsz: ABA (kwas abscysynowy) HAMUJE kiełkowanie — utrzymuje dormancję nasion; antagonista GA; ABA ↓ = GA ↑ = kiełkowanie.',
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
  console.log(`Seeding batch 5 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
