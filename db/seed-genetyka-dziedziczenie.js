// Seed: Genetyka i dziedziczenie — 20 questions
// Topic: 417e905f-f10b-49e8-ab02-f7042144e68b

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '417e905f-f10b-49e8-ab02-f7042144e68b'

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
  // ─── Prawa Mendla (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'Krzyżówka testowa (wsteczna) polega na skrzyżowaniu osobnika o nieznanym genotypie z osobnikiem:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'homozygotycznym dominującym (AA), aby wzmocnić cechę dominującą w potomstwie', is_correct: false },
      { id: 'B', text: 'homozygotycznym recesywnym (aa), dzięki czemu stosunek fenotypów potomstwa ujawnia genotyp osobnika badanego', is_correct: true },
      { id: 'C', text: 'heterozygotycznym (Aa), co pozwala ocenić siłę dominacji allelu', is_correct: false },
      { id: 'D', text: 'o identycznym fenotypie, aby potwierdzić czystość linii hodowlanej', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Krzyżówka testowa (test cross): nieznany genotyp × homozygota recesywna (aa). Jeśli badany to AA → potomstwo 100% Aa (wszystkie fenotypowo dominujące). Jeśli Aa → potomstwo 1 Aa : 1 aa (50% dominujące, 50% recesywne). Osobnik aa „ujawnia" allele badanego, bo jego własny recesywny allel nie maskuje niczego. Stosowana przez Mendla i do dziś w hodowli zwierząt i roślin.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących II prawa Mendla (prawo niezależnego dziedziczenia).\nA. Allele dwóch różnych genów (zlokalizowanych na różnych parach chromosomów homologicznych) są przekazywane potomstwu niezależnie od siebie — losowa segregacja każdej pary homologów w mejozie.\nB. II prawo Mendla stosuje się bez wyjątków do wszystkich par genów, bez względu na ich lokalizację chromosomową.\nC. Wynikiem krzyżowania dihybrydowego (AaBb × AaBb) przy niezależnym dziedziczeniu jest stosunek fenotypów 9:3:3:1 w pokoleniu F₂.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Niezależne dziedziczenie alleli genów na różnych chromosomach — losowa segregacja.', is_correct: true },
      { id: 'B', text: 'II prawo Mendla stosuje się do wszystkich par genów bez wyjątku.', is_correct: false },
      { id: 'C', text: 'Dihybryd AaBb × AaBb → stosunek fenotypów 9:3:3:1.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: losowe ustawienie par homologów na płytce metafazowej I mejozy → każda para segreguje niezależnie od pozostałych (prawo Mendla, potwierdzone chromosomową teorią dziedziczności Morgana). C — Prawda: krzyżówka dihybrydowa: AABB × aabb → F₁: AaBb (diheterozygoty) → F₂: 9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb przy pełnej dominacji i niezależnym dziedziczeniu. B — Fałsz: II prawo nie obowiązuje dla genów sprzężonych (na tym samym chromosomie) — tam allele dziedziczą się razem (sprzężenie genów), chyba że rozdzieli je crossing-over. Morgan wykazał wyjątki od II prawa przez odkrycie sprzężenia.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'U grochu zwyczajnego (Pisum sativum) żółte nasiona (Y) dominują nad zielonymi (y), a gładkie (R) nad pomarszczonymi (r). Badacz skrzyżował rośliny YyRr × yyRr. Jaki stosunek fenotypów oczekuje się w potomstwie (przy założeniu niezależnego dziedziczenia)?',
    question_type: 'single',
    options: [
      { id: 'A', text: '9 żółte gładkie : 3 żółte pomarszczone : 3 zielone gładkie : 1 zielone pomarszczone', is_correct: false },
      { id: 'B', text: '3 żółte gładkie : 3 zielone gładkie : 1 żółte pomarszczone : 1 zielone pomarszczone', is_correct: true },
      { id: 'C', text: '1 żółte gładkie : 1 zielone gładkie : 1 żółte pomarszczone : 1 zielone pomarszczone', is_correct: false },
      { id: 'D', text: 'Wszystkie potomstwo żółte gładkie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Krzyżówka: YyRr × yyRr. Rozkładamy na dwa niezależne geny: Gen Y: Yy × yy → ½ Yy (żółte) + ½ yy (zielone). Gen R: Rr × Rr → ¾ R_ (gładkie) + ¼ rr (pomarszczone). Fenotypy potomstwa: żółte gładkie: ½ × ¾ = 3/8; żółte pomarszczone: ½ × ¼ = 1/8; zielone gładkie: ½ × ¾ = 3/8; zielone pomarszczone: ½ × ¼ = 1/8. Stosunek: 3:1:3:1 → uproszczony: 3 żółte gładkie : 1 żółte pomarszczone : 3 zielone gładkie : 1 zielone pomarszczone = B odpowiedź 3:3:1:1.',
    difficulty: 2, verified: true,
  },

  // ─── Budowa DNA i podstawy genetyki (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących relacji między genem, allelem i locus.\nA. Gen to odcinek DNA kodujący określony produkt (białko lub RNA); allele to alternatywne wersje tego samego genu różniące się sekwencją nukleotydów.\nB. Locus to fizyczna lokalizacja genu na chromosomie — wszystkie allele danego genu zajmują to samo locus na chromosomach homologicznych.\nC. Organizm diploidalny (2n) może mieć więcej niż dwa allele jednego genu, ponieważ posiada dwie kopie każdego chromosomu.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Gen = odcinek DNA; allele = alternatywne wersje genu różniące się sekwencją.', is_correct: true },
      { id: 'B', text: 'Locus = lokalizacja genu; allele zajmują to samo locus na chromosomach homologicznych.', is_correct: true },
      { id: 'C', text: 'Osobnik diploidalny może posiadać więcej niż dwa allele jednego genu.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: allele powstają w wyniku mutacji oryginalnego genu; np. gen HBB ma allel HbA (prawidłowy) i HbS (sierpowatokrwinkowy — substytucja GAG→GTG w kodonie 6). B — Prawda: diploidalny organizm ma dwa homologi → dwa loci dla każdego genu → maksymalnie dwa allele u danego osobnika. C — Fałsz: OSOBNIK diploidalny może mieć co najwyżej DWA allele jednego genu (po jednym na każdy chromosom homologiczny). Natomiast w POPULACJI może istnieć wiele alleli (allelizm wielokrotny, np. gen I grup krwi: Iᴬ, Iᴮ, i — ale jeden osobnik ma tylko 2 z nich).',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nDominacja niezupełna (niepełna) różni się od dominacji zupełnej tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'heterozygota (Aa) ma fenotyp pośredni między homozygotą dominującą (AA) a recesywną (aa) — np. kwiaty różowe przy czerwonych (AA) i białych (aa) rodzicach', is_correct: true },
      { id: 'B', text: 'w F₂ po skrzyżowaniu Aa × Aa zawsze otrzymuje się stosunek 3:1 fenotypów, tak samo jak przy dominacji zupełnej', is_correct: false },
      { id: 'C', text: 'oba allele są równorzędnie wyrażone i obydwa produkty białkowe są widoczne w fenotypie heterozygoty (jak grupy krwi AB)', is_correct: false },
      { id: 'D', text: 'allel recesywny jest całkowicie zahamowany przez dominujący i heterozygota jest identyczna z homozygotą dominującą', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Typy dominacji: Zupełna: AA = Aa w fenotypie; allel A całkowicie maskuje a. Niezupełna (niepełna): heterozygota Aa ma fenotyp POŚREDNI — np. kwiaty lwie (Antirrhinum): AA czerwone, Aa różowe, aa białe. W F₂ (Aa × Aa): 1 AA : 2 Aa : 1 aa → stosunek FENOTYPÓW 1:2:1 (nie 3:1, bo każdy genotyp ma inny fenotyp). Kodominacja: obydwa allele wyrażone jednocześnie — np. AB: antygeny A i B na erytrocytach, oba produkty białkowe widoczne (C opisuje kodominację). D — opis dominacji zupełnej.',
    difficulty: 1, verified: true,
  },

  // ─── Mejoza i rekombinacja (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mejoza,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mejozy.\nA. Mejoza składa się z dwóch kolejnych podziałów (mejoza I i II) poprzedzonych jedną replikacją DNA — w wyniku powstają 4 haploidalne komórki potomne.\nB. W metafazie I mejozy pary chromosomów homologicznych (biwalenty) ustawiają się na płytce podziałowej — losowe ustawienie każdego biwalentu jest źródłem niezależnej segregacji genów (II prawo Mendla).\nC. Mejoza II jest podziałem redukcyjnym — podczas niej liczba chromosomów ulega zmniejszeniu o połowę.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mejoza: dwa podziały, jedna replikacja → 4 komórki haploidalne.', is_correct: true },
      { id: 'B', text: 'Metafaza I: biwalenty na płytce; losowe ustawienie → niezależna segregacja (II prawo).', is_correct: true },
      { id: 'C', text: 'Mejoza II jest podziałem redukcyjnym — zmniejsza liczbę chromosomów.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: interfaza S → replikacja (każdy chromosom = 2 chromatydy siostrzane) → mejoza I (redukcyjna, rozdziela homologi) → mejoza II (ekwacyjna, rozdziela chromatydy) → 4 komórki haploidalne (n). B — Prawda: losowa orientacja biwalentów (maternal/paternal) w metafazie I → niezależna segregacja → 2ⁿ kombinacji gamet (u człowieka 2²³ ≈ 8 mln). C — Fałsz: MEJOZA I jest podziałem REDUKCYJNYM (2n → n, rozdziela homologi). Mejoza II jest podziałem EKWACYJNYM (jak mitoza) — rozdziela chromatydy siostrzane; liczba chromosomów (n) nie zmienia się, ale liczba chromatyd zostaje zmniejszona o połowę.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mejoza,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nCrossing-over (wymiana odcinków chromatyd niessiostrzanych) podczas mejozy I jest ważny dla dziedziczenia, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'jest jedynym źródłem zmienności genetycznej — bez crossing-over gamety byłyby identyczne', is_correct: false },
      { id: 'B', text: 'powoduje rekombinację alleli genów sprzężonych — przerywa sprzężenie i tworzy nowe kombinacje alleli na chromosomach; jest źródłem zmienności rekombinacyjnej', is_correct: true },
      { id: 'C', text: 'zwiększa liczbę chromosomów w gametach, co zapewnia większą różnorodność genetyczną potomstwa', is_correct: false },
      { id: 'D', text: 'naprawia uszkodzenia DNA powstałe w trakcie mejozy I, eliminując mutacje z gamet', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Crossing-over (rekombinacja homologiczna): w profazie I mejozy chromatydy niessiostrzane homologów wymieniają odpowiadające sobie odcinki w chiazmach → nowe kombinacje alleli na chromosomach rekombinantowych. Znaczenie: przerywa sprzężenie genów → allele, które zawsze dziedziczyłyby się razem, mogą być rozdzielone; główne źródło zmienności rekombinacyjnej. A — błąd: inne źródła zmienności to niezależna segregacja chromosomów (metafaza I) i losowe łączenie gamet. C — błąd: crossing-over nie zmienia liczby chromosomów. D — błąd: naprawa przez HR (homologous recombination) zachodzi w komórkach somatycznych podczas G₂/S, nie jest główną funkcją mejotycznego crossing-over.',
    difficulty: 2, verified: true,
  },

  // ─── Dziedziczenie sprzężone z płcią (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.plec,
    question_text: 'Hemofilia A (niedobór czynnika VIII krzepnięcia) jest chorobą sprzężoną z chromosomem X, dziedziczoną recesywnie. Kobieta nosicielka (XᴴX) wychodzi za mąż za mężczyznę zdrowego (X Y). Oceń prawdziwość poniższych stwierdzeń dotyczących ich potomstwa.\nA. Prawdopodobieństwo urodzenia chorego syna wynosi 50% (½) spośród wszystkich synów.\nB. Żadna córka tej pary nie będzie chora na hemofilię.\nC. Każda córka tej pary ma 50% szansy na bycie nosicielką genu hemofilii.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: '50% synów będzie chorych na hemofilię.', is_correct: true },
      { id: 'B', text: 'Żadna córka nie zachoruje na hemofilię.', is_correct: true },
      { id: 'C', text: '50% córek będzie nosicielkami genu hemofilii.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'Krzyżówka: XᴴX (nosicielka) × XY (zdrowy mężczyzna). Gamety matki: Xᴴ lub X (po 50%). Gamety ojca: X lub Y (po 50%). Potomstwo: córki: XᴴX (nosicielka, 50%) + XX (zdrowa, 50%); synowie: XᴴY (chory na hemofilię, 50%) + XY (zdrowy, 50%). A — Prawda: ½ synów dziedziczy Xᴴ od matki → chory. B — Prawda: córki zawsze dostają X od ojca (zdrowy) → nawet jeśli dostaną Xᴴ od matki → nosicielka, nie chora (recesywna, potrzeba XᴴXᴴ). C — Prawda: ½ córek dostaje Xᴴ od matki → XᴴX (nosicielki). Wszystkie trzy stwierdzenia prawdziwe.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.plec,
    question_text: 'Daltonizm (ślepota barw na czerwień-zieleń) jest cechą recesywną sprzężoną z chromosomem X. W rodzinie: ojciec daltonista, matka o prawidłowym widzeniu barw z ojcem niechorującym. Które z poniższych stwierdzeń o potomstwie tej pary są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Żaden syn tej pary nie będzie daltonistą — chromosom X ojca z wadą trafia do córek, nie do synów', is_correct: true },
      { id: 'B', text: 'Wszystkie córki tej pary będą nosicielkami genu daltonizmu', is_correct: true },
      { id: 'C', text: 'Połowa córek tej pary będzie daltonistkami', is_correct: false },
      { id: 'D', text: 'Wnuki płci męskiej mogą być daltonistami, jeśli któraś z córek przekaże wadliwy chromosom X swojemu synowi', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Genotypy: ojciec Xᵈ Y (daltonista); matka: jej ojciec był zdrowy → dostała X od ojca; jej matka zdrowa i nienosicielka → matka XX. Krzyżówka: XX × Xᵈ Y. Córki: XXᵈ (wszystkie nosicielki, bo dostają Xᵈ od ojca) → 100% nosicielek. Synowie: XY (zdrowi, dostają X od matki, zdrowej nienosicielki). A — Prawda: synowie dostają X od MATKI (zdrowej) i Y od ojca → żaden syn nie chory. B — Prawda: córki dostają Xᵈ od ojca i X od matki → wszystkie XXᵈ (nosicielki). C — Fałsz: żadna córka nie będzie chora (potrzebuje XᵈXᵈ). D — Prawda: córki (XXᵈ) krzyżując się ze zdrowym mężczyzną mogą mieć synów XᵈY (daltonistów) — tzw. dziedziczenie „criss-cross" przez pokolenie.',
    difficulty: 2, verified: true,
  },

  // ─── Geny sprzężone i crossing-over (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.sprzezenie,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nGeny sprzężone to geny zlokalizowane na tym samym chromosomie. Częstość rekombinacji (crossing-over) między dwoma genami sprzężonymi:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wynosi zawsze 50%, niezależnie od odległości między genami na chromosomie', is_correct: false },
      { id: 'B', text: 'jest tym większa, im dalej od siebie leżą geny na chromosomie; przy odległości >50 cM geny zachowują się jak niezależne (pozorne niezależne dziedziczenie)', is_correct: true },
      { id: 'C', text: 'jest tym mniejsza, im dalej leżą geny — odległe geny nigdy nie ulegają rekombinacji', is_correct: false },
      { id: 'D', text: 'nie zależy od fizycznej odległości między genami, lecz wyłącznie od aktywności enzymów rekombinacyjnych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Częstość rekombinacji (RF, recombination frequency) między dwoma genami sprzężonymi: RF = (liczba rekombinantów / łączna liczba potomstwa) × 100%. RF ≈ odległość genetyczna w centimorganach (cM, 1% rekombinacji = 1 cM). Bliskie geny (mało cM): rzadki crossing-over między nimi → niska RF → silne sprzężenie. Odległe geny (>50 cM lub na różnych chromosomach): wielokrotne crossing-over → RF ≈ 50% → zachowują się jak niezależne (pozorne wypełnienie II prawa Mendla). Morgan i Sturtevant (1913): pierwsze mapy genetyczne oparte na RF. A — błąd: 50% to maksimum, nie stała wartość.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.sprzezenie,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących map genetycznych.\nA. Mapa genetyczna (sprzężeniowa) chromosomu przedstawia względne odległości między genami wyrażone w centimorganach (cM), obliczone na podstawie częstości rekombinacji.\nB. Odległości genetyczne (cM) i odległości fizyczne (pary zasad, bp) zawsze korelują proporcjonalnie — 1 cM odpowiada zawsze tej samej liczbie par zasad na całym genomie.\nC. Mapowanie genetyczne wykorzystuje częstości klas rekombinantów i parentalnych w potomstwie krzyżowania testowego (trihybrydy lub dihybrydy sprzężone).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mapa genetyczna: względne odległości w cM = częstość rekombinacji.', is_correct: true },
      { id: 'B', text: '1 cM odpowiada zawsze tej samej liczbie par zasad na całym genomie.', is_correct: false },
      { id: 'C', text: 'Mapowanie genetyczne: analiza klas rekombinantów vs parentalnych w potomstwie.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: mapa Sturtevanta: odległość w cM = % rekombinantów (dla krótkich odcinków <10 cM); dla dłuższych trzeba korygować funkcją mapowania (Haldane, Kosambi) ze względu na wielokrotne crossing-over. C — Prawda: krzyżowanie testowe pozwala wprost odczytać klasy gamet (parental vs rekombinant) z fenotypów potomstwa. B — Fałsz: korelacja między cM a bp jest NIEproporcjonalna — hot-spots rekombinacji (np. telomery, okolice PRDM9) mają wysoką RF na krótkim odcinku DNA; heterochromatyna (centromer) ma niską RF mimo dużej odległości fizycznej. Np. u człowieka ~1 cM ≈ 1 Mbp średnio, ale w regionach hot-spot znacznie mniej.',
    difficulty: 2, verified: true,
  },

  // ─── Dziedziczenie grup krwi (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.krew,
    question_text: 'Kobieta grupy krwi A (heterozygotyczna, Iᴬi) i mężczyzna grupy B (heterozygotyczny, Iᴮi) oczekują potomstwa. Które grupy krwi mogą mieć ich dzieci?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Grupa A (genotyp Iᴬi)', is_correct: true },
      { id: 'B', text: 'Grupa B (genotyp Iᴮi)', is_correct: true },
      { id: 'C', text: 'Grupa AB (genotyp IᴬIᴮ)', is_correct: true },
      { id: 'D', text: 'Grupa 0 (genotyp ii)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C', 'D'],
    explanation: 'Krzyżówka: Iᴬi × Iᴮi. Gamety matki: Iᴬ lub i (po ½). Gamety ojca: Iᴮ lub i (po ½). Potomstwo: IᴬIᴮ (grupa AB, 25%) + Iᴬi (grupa A, 25%) + Iᴮi (grupa B, 25%) + ii (grupa 0, 25%). Stosunek grup krwi: 1A : 1B : 1AB : 1O. Wszystkie cztery grupy krwi możliwe — jest to jedyna krzyżówka rodziców, gdzie mogą pojawić się wszystkie 4 grupy. Allele Iᴬ i Iᴮ są kodominujące (oba wyrażone w AB); i jest recesywny wobec Iᴬ i Iᴮ.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.krew,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących układu grupowego krwi ABO i Rh.\nA. Czynnik Rh (antygen D) jest dziedziczony niezależnie od genów układu ABO — gen RHD (Rh+) jest dominujący nad rhdel/rh (Rh-).\nB. Konfliktu serologicznego Rh między matką a płodem nie może wywołać pierwsza ciąża — niebezpieczeństwo pojawia się od drugiej ciąży Rh+ płodu, gdy matka Rh- jest już uczulona.\nC. Przetoczenie krwi grupy A osobie grupy B jest bezpieczne, ponieważ obaj mają czerwone krwinki z antygenami i nie dochodzi do aglutynacji.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Rh+/Rh- dziedziczone niezależnie od ABO; gen D dominujący nad d.', is_correct: true },
      { id: 'B', text: 'Konflikt Rh: niebezpieczeństwo od drugiej ciąży — po uczuleniu w pierwszej.', is_correct: true },
      { id: 'C', text: 'Przetoczenie krwi grupy A osobie grupy B jest bezpieczne.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: gen RHD na chromosomie 1 (inny chromosom niż ABO na chr. 9) → niezależne dziedziczenie. Dd lub DD = Rh+; dd = Rh-. B — Prawda: w pierwszej ciąży matka Rh- uczula się krwinkami Rh+ płodu (przenikają w czasie porodu/poronienia) → wytwarzanie IgG anty-D; w kolejnych ciążach IgG matki przekraczają łożysko → hemoliza krwinek Rh+ płodu → choroba hemolityczna noworodków (erythroblastosis fetalis). Zapobieganie: immunoglobulina anty-D (Rhophylac) po porodzie/poronieniu. C — Fałsz: osoba grupy B ma w surowicy PRZECIWCIAŁA anty-A → przetoczenie krwi A wywoła reakcję aglutynacyjną/hemolityczną — potencjalnie śmiertelna. Przetoczenie niezgodne grupowo jest bezwzględnie zakazane.',
    difficulty: 2, verified: true,
  },

  // ─── Kariotyp i chromosomy płci (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.kariotyp,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nZespół Turnera (45,X) powstaje w wyniku:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'trisomii chromosomu X — kobieta ma trzy chromosomy X (47,XXX)', is_correct: false },
      { id: 'B', text: 'monosomii chromosomu X — osobnik ma tylko jeden chromosom X i brak drugiego chromosomu płci (45,X); fenotypowo kobieta, ale z niedoborem estrogenów i bezpłodna', is_correct: true },
      { id: 'C', text: 'obecności dodatkowego chromosomu Y — mężczyzna 47,XYY (zespół podwójnego Y)', is_correct: false },
      { id: 'D', text: 'obecności chromosomu X i Y z inaktywacją Y — osobnik jest fenotypowo kobietą', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Zespół Turnera (45,X lub 45,X0): monosomia gonozomów (jedyny autosomalna-monosomia w pełni nieśmiertelna u człowieka). Przyczyna: nondysjunkcja w mejozie (brak podziału X lub Y) lub utrata chromosomu po zapłodnieniu. Objawy: fenotypowo kobieta; infantylizm płciowy (brak estrogenów, pierwotny brak miesiączki); bezpłodność (pasma gonadalne zamiast jajników); niskorosłość (~150 cm); pterygium colli (skrzydlata szyja); koarktacja aorty. Kariotyp 45,X (70%) lub mozaika 45,X/46,XX. Inne aneuploidie gonozomów: 47,XXX (syndrom trisomii X); 47,XXY (zespół Klinefeltera); 47,XYY (syndrom Jacobsa).',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.kariotyp,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących kariotypu człowieka i chromosomów płci.\nA. Prawidłowy kariotyp człowieka zawiera 46 chromosomów: 44 autosomy (22 pary) + 2 gonozomy (XX u kobiet, XY u mężczyzn).\nB. Chromosom Y jest znacznie mniejszy od X i zawiera niewiele genów — główne to SRY (determinuje płeć męską) i AZF (czynniki spermatogenezy).\nC. Ciałko Barra (płciowe) to nieaktywna kopia chromosomu X — u kobiety XX widoczne jest jedno ciałko, u mężczyzny XY — żadnego; u pacjentki XXX — dwa ciałka.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Kariotyp: 46 chromosomów; 44 autosomy + XX (kobieta) lub XY (mężczyzna).', is_correct: true },
      { id: 'B', text: 'Chromosom Y mały, mało genów; SRY (determinacja płci) i AZF (spermatogeneza).', is_correct: true },
      { id: 'C', text: 'Ciałko Barra = nieaktywny X; kobiety XX mają 1 ciałko, XXX mają 2 ciałka.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: 2n = 46; pary 1–22: autosomy; para 23: gonozomy. B — Prawda: chromosom Y (~57 Mbp, ok. 200 genów) vs X (~155 Mbp, ~800 genów). SRY (sex-determining region Y) → białko TDF determinuje jądra; translokacja SRY na X → mężczyzna XX (zespół de la Chapelle). AZFa/b/c → mikrodelekcje powodują azoospermię. C — Prawda: reguła Lyona: liczba ciałek Barra = n(X) – 1. Kobiety XX: 1 ciałko (jedno X inaktywowane). Kobiety XXX: 2 ciałka. Mężczyźni XY: 0 ciałek. Mężczyźni XXY (Klinefelter): 1 ciałko (jedno X inaktywowane). Inaktywacja zachodzi losowo w każdej komórce → mozaika ekspresji genów X-sprzężonych u kobiet.',
    difficulty: 2, verified: true,
  },

  // ─── Mutacje — podstawy (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mutacje,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mutacji chromosomowych strukturalnych.\nA. Delecja chromosomowa polega na utracie odcinka chromosomu — może powodować haploinsuficjencję, gdy jeden zachowany allel nie dostarcza wystarczającej ilości produktu.\nB. Translokacja Robertsonowska (np. t(14;21)) łączy dwa chromosomy akrocentryczne w jeden — nosiciel ma 45 chromosomów, ale (u nosiciela zrównoważonego) prawidłowy fenotyp; ryzyko trisomii 21 (zespół Downa) u potomstwa.\nC. Inwersja pericentryczna chromosomu nie zmienia ilości materiału genetycznego, ale może zaburzać crossing-over i ekspresję genów leżących przy punktach złamania.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Delecja: utrata odcinka chromosomu → haploinsuficjencja.', is_correct: true },
      { id: 'B', text: 'Translokacja Robertsonowska t(14;21): 45 chromosomów, ryzyko trisomii 21.', is_correct: true },
      { id: 'C', text: 'Inwersja: bez zmiany ilości materiału, ale może zaburzać crossing-over.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: delecje kliniczne: del(5p) → koci płacz (cri-du-chat); del(15q11-13) od matki → Angelman; del(22q11) → DiGeorge. Haploinsuficjencja: jeden allel nie dostarcza 50% wymaganego produktu. B — Prawda: translokacja Robertsonowska: fuzja centromers akrocentrycznych (13, 14, 15, 21, 22) → utrata krótkich ramion → 45 chromosomów u nosiciela zrównoważonego. Ryzyko dla potomstwa: 1/6 trisomia 21 (zależy od płci nosiciela translokacji). C — Prawda: inwersja pericentryczna (obejmuje centromer): crossing-over wewnątrz odwróconego segmentu → chromosomy z duplikacjami i delecjami w potomstwie (pętle inwersji). Wszystkie trzy prawdziwe.',
    difficulty: 3, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mutacje,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nMutacje somatyczne różnią się od mutacji germinalnych (w linii zarodkowej) tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'mutacje somatyczne są zawsze szkodliwe i letalne dla komórki, natomiast germinalne — obojętne', is_correct: false },
      { id: 'B', text: 'mutacje somatyczne dotyczą komórek ciała i nie są przekazywane potomstwu (nie wchodzą do gamet); mogą jednak prowadzić do nowotworów jeśli dotyczą protoonkogenów lub genów supresorowych', is_correct: true },
      { id: 'C', text: 'mutacje germinalne są zawsze naprawiane przez mechanizmy komórkowe — nigdy nie są przekazywane następnemu pokoleniu', is_correct: false },
      { id: 'D', text: 'mutacje somatyczne zawsze powodują choroby dziedziczne przenoszone na dzieci', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mutacje somatyczne: powstają w komórkach ciała (nie płciowych) → dziedziczone przez komórki potomne w obrębie organizmu (klonalnie), ale NIE przekazywane na potomstwo przez gamety. Kliniczne znaczenie: akumulacja mutacji somatycznych w protoonkogenach (RAS, MYC) i genach supresorowych (TP53, RB1) → nowotwory (np. rak płuca od palenia). Mutacje germinalne (w liniach zarodkowych lub gametach): przekazywane potomstwu → choroby dziedziczne; mogą być szkodliwe (choroba monogenowa), neutralne lub korzystne (ewolucja). C — błąd: mechanizmy naprawy DNA nie są bezbłędne; mutacje germinalne są stale przekazywane (np. mutacja BRCA1, achondroplazja). D — błąd: mutacje somatyczne NIE są przekazywane potomstwu.',
    difficulty: 1, verified: true,
  },

  // ─── Genetyka populacyjna (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.populacyjna,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących równowagi Hardy\'ego-Weinberga (H-W).\nA. Równowaga H-W przewiduje, że przy spełnieniu warunków (duża populacja, losowe kojarzenie, brak mutacji, migracji i doboru) częstości alleli i genotypów pozostają stałe z pokolenia na pokolenie.\nB. Jeśli częstość allelu a wynosi q = 0,2, to przy równowadze H-W częstość homozygot aa = q² = 0,04, a częstość heterozygot Aa = 2pq = 2 × 0,8 × 0,2 = 0,32.\nC. Równowaga H-W zostaje zachowana w małych populacjach izolowanych nawet przy silnym doborze naturalnym.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Równowaga H-W: stałe częstości alleli i genotypów przy 5 założeniach.', is_correct: true },
      { id: 'B', text: 'q = 0,2 → aa = 0,04; Aa = 0,32 (przy p = 0,8).', is_correct: true },
      { id: 'C', text: 'Małe populacje z silnym doborem zachowują równowagę H-W.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: równanie H-W: p² (AA) + 2pq (Aa) + q² (aa) = 1; p + q = 1; warunki: (1) duża populacja (brak dryfu), (2) losowe kojarzenie (panmiksja), (3) brak mutacji, (4) brak migracji, (5) brak doboru naturalnego. B — Prawda: p = 1 – 0,2 = 0,8; AA = p² = 0,64; Aa = 2 × 0,8 × 0,2 = 0,32; aa = q² = 0,04; suma = 0,64 + 0,32 + 0,04 = 1,00 ✓. C — Fałsz: małe populacje → dryf genetyczny (losowe zmiany częstości alleli) → naruszenie H-W; silny dobór eliminuje/faworyzuje allele → zmiana częstości alleli → brak równowagi. Efekt założyciela i wąskie gardła to ekstremalny dryf w małych populacjach.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.populacyjna,
    question_text: 'W populacji ludzkiej częstość choroby fenyloketonurii (PKU) wynosi 1/10 000. PKU jest dziedziczona autosomalnie recesywnie. Zakładając równowagę Hardy\'ego-Weinberga, jaka jest w tej populacji przybliżona częstość nosicieli (heterozygot)?',
    question_type: 'single',
    options: [
      { id: 'A', text: '1/100 (1%)', is_correct: false },
      { id: 'B', text: '1/50 (2%)', is_correct: true },
      { id: 'C', text: '1/200 (0,5%)', is_correct: false },
      { id: 'D', text: '1/10 000 (0,01%)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Dane: częstość choroby q² = 1/10 000. Obliczenia: q = √(1/10 000) = 1/100 = 0,01. p = 1 – q ≈ 1 – 0,01 = 0,99 ≈ 1 (bo q bardzo małe). Częstość nosicieli: 2pq = 2 × 0,99 × 0,01 ≈ 2 × 0,01 = 0,02 = 1/50 ≈ 2%. Odpowiedź B: 1/50. Zauważ: nosiciele (~1/50) są ZNACZNIE liczniejsi niż chorzy (1/10 000) — to typowa cecha chorób recesywnych; większość alleli recesywnych jest ukryta u nosicieli, nie wyeliminowana przez dobór. Dla PKU: 1 na 50 osób jest nosicielem, choć choroba dotyka 1/10 000.',
    difficulty: 2, verified: true,
  },

  // ─── Dziedziczenie wielogenowe (1) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.wielogenowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących dziedziczenia wielogenowego (poligenowego).\nA. Cechy ilościowe (np. wzrost, masa ciała, kolor skóry) są determinowane przez wiele genów (loci), z których każdy ma mały addytywny efekt — dlatego mają rozkład normalny (Gaussa) w populacji.\nB. Na cechy poligenowe wpływ mają wyłącznie geny — środowisko (dieta, klimat) nie zmienia ich ekspresji.\nC. Odziedziczalność (h²) mierzy, jaka część zmienności danej cechy w populacji wynika z różnic genetycznych — h² = 0 oznacza, że zmienność jest wyłącznie środowiskowa, h² = 1 — wyłącznie genetyczna.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Cechy poligenowe: wiele genów + addytywne efekty → rozkład normalny.', is_correct: true },
      { id: 'B', text: 'Na cechy poligenowe wpływają wyłącznie geny — środowisko nie ma znaczenia.', is_correct: false },
      { id: 'C', text: 'Odziedziczalność h²: 0 = tylko środowisko, 1 = tylko geny.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: poligenizm: suma małych efektów addytywnych wielu alleli → rozkład normalny; np. wzrost człowieka zależy od >700 loci; każdy allel różni się o frakcje mm wzrostu. C — Prawda: odziedziczalność h² (w szerszym sensie H²) = Vg/Vf (wariancja genetyczna / fenotypowa); wzrost człowieka h² ≈ 0,8 (80% zmienności to różnice genetyczne); IQ h² ≈ 0,5–0,8; h² dotyczy POPULACJI w określonym środowisku, nie mówi o jednostce. B — Fałsz: cechy poligenowe są efektem interakcji genotypu ze środowiskiem (GxE): np. wzrost zależy od genów ORAZ diety, hormonów, chorób w dzieciństwie; kolor skóry zależy od genów melaniny ORAZ ekspozycji na UV. Środowisko ma istotny wpływ na ekspresję cech ilościowych.',
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
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve(res.statusCode)) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} questions for Genetyka i dziedziczenie...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
