// Seed: mock_questions — Genetyka i dziedziczenie (20 questions)
// These appear in the /mock-exam "Sprawdzian z całego materiału"

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

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
  // ─── Prawa Mendla ───
  {
    subtopic: 'Genetyka i dziedziczenie — Prawa Mendla',
    subtopic_id: S.mendel,
    question_type: 'single',
    question_text: 'Skrzyżowano dwie rośliny grochu — obie o nasionach żółtych (cecha dominująca). W potomstwie uzyskano: 74 rośliny o nasionach żółtych i 26 roślin o nasionach zielonych.\nKtóry wniosek jest uzasadniony na podstawie tych danych?',
    options: [
      { id: 'A', text: 'Oboje rodzice byli homozygotami dominującymi (YY × YY)', is_correct: false },
      { id: 'B', text: 'Oboje rodzice byli heterozygotami (Yy × Yy) — stosunek 3:1 wskazuje na monohybrydę F2', is_correct: true },
      { id: 'C', text: 'Jeden rodzic był homozygotą dominującą, drugi recesywną (YY × yy)', is_correct: false },
      { id: 'D', text: 'Zielona barwa jest cechą dominującą, żółta — recesywną', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Stosunek 74:26 ≈ 3:1 (żółte:zielone) jest charakterystyczny dla krzyżówki Yy × Yy (monohybrydowe F2). Potomstwo: 1/4 YY + 2/4 Yy + 1/4 yy → 3/4 żółte (YY i Yy) : 1/4 zielone (yy). Gdyby oboje byli YY → 100% żółtych (brak zielonych). Gdyby YY × yy → 100% Yy (żółte, bez zielonych). Gdyby zielona była dominująca — zielone powinny stanowić 3/4.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Prawa Mendla',
    subtopic_id: S.mendel,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących II prawa Mendla (prawa niezależnej segregacji):\nA. Prawo niezależnej segregacji dotyczy genów leżących na różnych chromosomach (lub daleko od siebie na tym samym chromosomie).\nB. Krzyżówka dihybrydowa AaBb × AaBb daje potomstwo w stosunku fenotypowym 9:3:3:1.\nC. II prawo Mendla obowiązuje zawsze — nawet gdy dwa geny leżą na tym samym chromosomie blisko siebie.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, P, F', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: prawo niezależnej segregacji dotyczy genów na różnych parach homologów (lub odległych loci) — segregują niezależnie podczas mejozy. B — PRAWDA: AaBb × AaBb: gamety AB, Ab, aB, ab (po 1/4 każda) → potomstwo 9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb = 9:3:3:1. C — FAŁSZ: geny sprzężone (na tym samym chromosomie, blisko siebie) NIE segregują niezależnie — dziedziczą się razem (ze sprzężeniem), co jest wyjątkiem od II prawa Mendla odkrytym przez Morgana.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Prawa Mendla',
    subtopic_id: S.mendel,
    question_type: 'single',
    question_text: 'U pewnego gatunku rośliny allel A (kwiaty czerwone) dominuje niezupełnie nad allelem a (kwiaty białe). Roślina Aa ma kwiaty różowe. Jakie fenotypy i w jakim stosunku wystąpią w potomstwie krzyżówki Aa × Aa?',
    options: [
      { id: 'A', text: '3 czerwone : 1 biała (klasyczny stosunek mendlowski)', is_correct: false },
      { id: 'B', text: '1 czerwona : 2 różowe : 1 biała', is_correct: true },
      { id: 'C', text: '1 czerwona : 1 różowa (brak homozygot)', is_correct: false },
      { id: 'D', text: 'Wszystkie potomstwo różowe — dominacja niezupełna wyrównuje fenotypy', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Dominacja niezupełna: heterozygota ma pośredni fenotyp (różowy = Aa). Krzyżówka Aa × Aa → potomstwo: 1/4 AA (czerwone) + 2/4 Aa (różowe) + 1/4 aa (białe) → stosunek fenotypowy 1:2:1. W odróżnieniu od dominacji pełnej (gdzie AA i Aa są nie do odróżnienia fenotypowo i wynik to 3:1), przy dominacji niezupełnej stosunek genotypowy = fenotypowy = 1:2:1. Przykład klasyczny: Mirabilis jalapa (dziwaczek), Antirrhinum majus (lwia paszcza).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Budowa chromosomów ───
  {
    subtopic: 'Genetyka i dziedziczenie — Budowa chromosomów',
    subtopic_id: S.budowa,
    question_type: 'single',
    question_text: 'Locus genu to:\n(wybierz najdokładniejszy opis)',
    options: [
      { id: 'A', text: 'Jeden konkretny allel genu (np. allel dominujący A)', is_correct: false },
      { id: 'B', text: 'Stałe miejsce na chromosomie, w którym zlokalizowany jest dany gen — identyczne u wszystkich osobników gatunku', is_correct: true },
      { id: 'C', text: 'Para chromosomów homologicznych zawierająca allele tego samego genu', is_correct: false },
      { id: 'D', text: 'Sekwencja regulatorowa (promotor) kontrolująca ekspresję genu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Locus (l. mn. loci): określona pozycja na chromosomie, w której zlokalizowany jest gen. Chromosomy homologiczne mają geny w identycznych loci (ale mogą nieść różne allele — np. A na chromosomie ojcowskim, a na matczynym). Allele to różne warianty sekwencji DNA w danym locus. Mapowanie genetyczne (crossover) wyznacza odległości między loci w cM (centimorganach).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mejoza ───
  {
    subtopic: 'Genetyka i dziedziczenie — Mejoza',
    subtopic_id: S.mejoza,
    question_type: 'single',
    question_text: 'Które ze zdarzeń zachodzi wyłącznie w MEJOZIE I, a NIE w mejozie II ani mitozie?',
    options: [
      { id: 'A', text: 'Kondensacja chromatyny (chromosomy stają się widoczne pod mikroskopem)', is_correct: false },
      { id: 'B', text: 'Synapsis chromosomów homologicznych i crossing-over między chromatydami niesiostrzanymi', is_correct: true },
      { id: 'C', text: 'Rozejście się chromatyd siostrzanych do przeciwnych biegunów komórki', is_correct: false },
      { id: 'D', text: 'Zanik otoczki jądrowej i tworzenie wrzeciona kariokinetycznego', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'A — kondensacja chromatyny: zachodzi w profazie każdego podziału (mitoza, mejoza I i II). C — rozejście chromatyd siostrzanych: anafaza mitotyczna i anafaza II mejozy (w anafazie I mejozy rozchodzą się chromosomy homologiczne, a nie chromatydy siostrzane). D — zanik otoczki i wrzeciono: każdy podział. B — synapsis (ścisłe sparowanie homologów) i crossing-over: tylko profaza I mejozy, tylko między chromosomami homologicznymi (niesiostrzanymi chromatydami) — to kluczowe i unikalne dla mejozy I.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Mejoza',
    subtopic_id: S.mejoza,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mejozy i zmienności genetycznej:\nA. W wyniku mejozy z jednej komórki diploidalnej (2n) powstają cztery komórki haploidalne (n).\nB. Crossing-over między chromatydami siostrzanymi (należącymi do tego samego chromosomu) zwiększa zmienność genetyczną potomstwa.\nC. Niezależna segregacja chromosomów homologicznych w metafazie I mejozy jest losowa — każda para homologów ustawia się niezależnie od pozostałych par.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: mejoza = 2 podziały (I redukcyjny + II ekwacyjny) → 4 komórki n. B — FAŁSZ: crossing-over zachodzi między chromatydami NIESIOSTRZANYMI (należącymi do różnych chromosomów homologicznych) — wymiana między identycznymi chromatydami siostrzanymi nie generuje nowych kombinacji alleli (są identyczne). Tylko wymiana między homologami tworzy rekombinacyjne chromatydy. C — PRAWDA: losowa orientacja biwaalentów na wrzecionie w metafazie I → każda para niezależnie kieruje chromosom matczyny/ojczysty do bieguna → 2²³ ≈ 8 mln kombinacji u człowieka.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Determinacja płci i dziedziczenie sprzężone z płcią ───
  {
    subtopic: 'Genetyka i dziedziczenie — Determinacja płci',
    subtopic_id: S.plec,
    question_type: 'single',
    question_text: 'Barwna ślepota (daltonizm) jest cechą recesywną sprzężoną z chromosomem X. Matka ma prawidłowe widzenie barw, ale jest nosicielką genu daltonizmu. Ojciec widzi barwy prawidłowo.\nJakie jest prawdopodobieństwo, że ich córka będzie daltonistką?',
    options: [
      { id: 'A', text: '0% — córki nigdy nie mogą być daltonistkami przy takim układzie rodziców', is_correct: true },
      { id: 'B', text: '25% — co czwarta córka będzie daltonistką', is_correct: false },
      { id: 'C', text: '50% — połowa córek będzie daltonistkami', is_correct: false },
      { id: 'D', text: '100% — wszystkie córki będą daltonistkami', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Matka: X^D X^d (nosicielka — widzi barwy, ale niesie allel d). Ojciec: X^D Y (prawidłowe widzenie). Córki otrzymują chromosom X od ojca (zawsze X^D) + chromosom X od matki (X^D lub X^d). Córki: 1/2 X^D X^D (zdrowa) i 1/2 X^D X^d (nosicielka). Żadna córka nie dostanie od ojca X^d (ojciec ma tylko X^D), więc żadna córka nie będzie homozygotą X^d X^d (daltonistką). Daltonizm u córki: wymaga X^d od OBOJGA rodziców — tu ojciec nie może dać X^d.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Determinacja płci',
    subtopic_id: S.plec,
    question_type: 'single',
    question_text: 'Oceń, które stwierdzenie POPRAWNIE opisuje różnicę między determinacją płci u ssaków (system XY) a u ptaków (system ZW).',
    options: [
      { id: 'A', text: 'U ssaków płeć żeńska to XX (homogamety), a u ptaków płeć żeńska to ZW (heterogamety)', is_correct: true },
      { id: 'B', text: 'U ssaków płeć determinuje chromosom matki, u ptaków — chromosom ojca', is_correct: false },
      { id: 'C', text: 'System XY i ZW są funkcjonalnie identyczne — tylko nazewnictwo chromosomów się różni', is_correct: false },
      { id: 'D', text: 'U ptaków samce są heterogametyczne (ZW), a samice homogametyczne (ZZ)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'System XY (ssaki, Drosophila): samce XY (heterogametyczne — produkują gamety X i Y), samice XX (homogametyczne). System ZW (ptaki, wiele gadów i owadów): samce ZZ (homogametyczne), samice ZW (heterogametyczne). Konsekwencja: u ptaków cechy sprzężone z chromosomem Z dziedziczą się odwrotnie niż u ssaków — "synowie" dostają Z od matki, "córki" dostają Z od ojca i W od matki. Cecha recesywna sprzężona z Z: u ptaków częściej ujawnia się u samic (ZW mają tylko jedną kopię Z).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Sprzężenie genów ───
  {
    subtopic: 'Genetyka i dziedziczenie — Sprzężenie genów',
    subtopic_id: S.sprzezenie,
    question_type: 'single',
    question_text: 'Dwa geny A i B są sprzężone i leżą w odległości 20 cM od siebie. Heterozygota AB/ab (konformacja cis) jest krzyżowana z osobnikiem ab/ab (krzyżówka testowa).\nJaki oczekiwany procent potomstwa będzie miało genotyp AB/ab (parental)?',
    options: [
      { id: 'A', text: '25% — oczekiwana proporcja niezależnej segregacji', is_correct: false },
      { id: 'B', text: '40% — parentale są najczęstsze przy 20 cM odległości', is_correct: true },
      { id: 'C', text: '50% — sprzężenie nie wpływa na proporcje', is_correct: false },
      { id: 'D', text: '80% — rekombinacja wynosi 80% przy 20 cM', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: '20 cM = 20% częstość rekombinacji (RF). Gamety heterozygoty AB/ab: parentalne (AB i ab) = 80% łącznie (po 40% każda); rekombinacyjne (Ab i aB) = 20% łącznie (po 10% każda). Krzyżówka testowa z ab/ab: potomstwo odzwierciedla typy gamet heterozyg. AB/ab → 40%; ab/ab → 40%; Ab/ab → 10%; aB/ab → 10%. Parental AB/ab = 40%. Odległość 20 cM: 20% gamet to rekombinacyjne → 80% parentalnych → po 40% AB i ab.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Sprzężenie genów',
    subtopic_id: S.sprzezenie,
    question_type: 'single',
    question_text: 'W krzyżówce testowej heterozygoty o genach sprzężonych uzyskano 4 klasy potomstwa:\n— typ parental 1: 432 osobniki\n— typ parental 2: 428 osobników\n— typ rekombinacyjny 1: 68 osobników\n— typ rekombinacyjny 2: 72 osobniki\n\nOblicz odległość genetyczną między tymi genami (w cM).',
    options: [
      { id: 'A', text: '7 cM', is_correct: false },
      { id: 'B', text: '14 cM', is_correct: true },
      { id: 'C', text: '28 cM', is_correct: false },
      { id: 'D', text: '50 cM — geny segregują niezależnie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Odległość genetyczna (cM) = (liczba rekombinantów / łączna liczba potomstwa) × 100%. Rekombinanci: 68 + 72 = 140. Łącznie: 432 + 428 + 68 + 72 = 1000. RF = 140/1000 × 100% = 14%. Odległość = 14 cM. Interpretacja: między tymi dwoma loci dochodzi do crossing-over w 14% mejozy. Im mniejsza wartość cM, tym silniejsze sprzężenie (geny bliżej siebie).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Grupy krwi ───
  {
    subtopic: 'Genetyka i dziedziczenie — Grupy krwi i Rh',
    subtopic_id: S.krew,
    question_type: 'single',
    question_text: 'Układ grupowy AB0 jest przykładem kodominancji i wieloallelizmu. Które z poniższych stwierdzeń POPRAWNIE opisuje dziedziczenie grup krwi?',
    options: [
      { id: 'A', text: 'Allele I^A i I^B są kodominujące — obydwa wyrażają się fenotypowo u heterozygoty I^A I^B, dając grupę AB', is_correct: true },
      { id: 'B', text: 'Allel I^A dominuje nad I^B, dlatego heterozygoty I^A I^B mają grupę A', is_correct: false },
      { id: 'C', text: 'Istnieją tylko dwa allele genu ABO: I^A i I^B — allel i (grupa 0) nie istnieje', is_correct: false },
      { id: 'D', text: 'Grupy krwi AB0 są determinowane przez dwa niezależne geny na różnych chromosomach', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Gen ABO (chromosom 9) ma trzy główne allele: I^A (koduje transferazę N-acetylogalaktozaminy), I^B (koduje transferazę galaktozy), i (allel recesywny — nieaktywna transferaza → brak antygenu). I^A i I^B są KODOMINUJĄCE — obydwa produkty są syntetyzowane u heterozygoty I^A I^B → erytrocyty mają antygeny A i B → grupa AB. Allel i jest recesywny wobec I^A i I^B: genotypy I^A i → gr. A; I^B i → gr. B; ii → gr. 0.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Grupy krwi i Rh',
    subtopic_id: S.krew,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących układu Rh i konfliktu serologicznego:\nA. Konflikt serologiczny (hemolityczna choroba noworodka) może wystąpić, gdy matka jest Rh− (dd), a ojciec Rh+ (Dd lub DD), a dziecko odziedziczyło allel D.\nB. Konflikt serologiczny jest najgroźniejszy przy pierwszej ciąży — organizm matki nie zdążył jeszcze wytworzyć przeciwciał anty-D.\nC. Zapobieganie konfliktowi serologicznemu polega na podaniu matce Rh− immunoglobuliny anty-D (anty-Rh) po pierwszym porodzie lub aborcji.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, P, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: matka Rh− (brak antygenu D) + dziecko Rh+ (ma antygen D) → erytrocyty dziecka mogą przedostać się do krwi matki (głównie przy porodzie) → matka produkuje przeciwciała IgG anty-D. B — FAŁSZ: PIERWSZA ciąża jest zazwyczaj bezpieczna — przy pierwszym porodzie dopiero zaczyna się uczulenie matki. KOLEJNA ciąża z Rh+ płodem jest najgroźniejsza: matka ma już IgG anty-D → przenikają przez łożysko → niszczą erytrocyty płodu → erythroblastosis fetalis. C — PRAWDA: immunoglobulina anty-D (RhoGAM) podana matce Rh− w ciągu 72h po narażeniu na krwinki Rh+ neutralizuje antygeny D zanim matka wytworzy własne przeciwciała.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Kariotyp i aberracje ───
  {
    subtopic: 'Genetyka i dziedziczenie — Kariotyp i aberracje',
    subtopic_id: S.kariotyp,
    question_type: 'single',
    question_text: 'Zespół Downa (trisomia 21) najczęściej powstaje w wyniku nondysjunkcji chromosomów. Który z poniższych zapisów kariotypu odpowiada osobie z klasycznym zespołem Downa?',
    options: [
      { id: 'A', text: '45, XO', is_correct: false },
      { id: 'B', text: '47, XX, +21', is_correct: true },
      { id: 'C', text: '47, XXY', is_correct: false },
      { id: 'D', text: '46, XY, del(5p)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: '47, XX, +21: 47 chromosomów, kobieta (XX), dodatkowy chromosom 21 (+21) = trisomia 21 = zespół Downa. Inne: 45, XO = zespół Turnera (monosomia X, kobieta); 47, XXY = zespół Klinefeltera (mężczyzna z dodatkowym X); 46, XY, del(5p) = zespół kociego krzyku (delecja krótkiego ramienia chr. 5, prawidłowa liczba chromosomów). Notacja ISCN: najpierw liczba chromosomów, potem płeć, potem aberracja.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Kariotyp i aberracje',
    subtopic_id: S.kariotyp,
    question_type: 'single',
    question_text: 'Amniopunkcja i biopsja kosmówki (CVS) to metody diagnostyki prenatalnej. Które stwierdzenie POPRAWNIE opisuje różnicę między tymi metodami?',
    options: [
      { id: 'A', text: 'Amniopunkcja pobiera komórki kosmówki (trofoblastu), CVS pobiera płyn owodniowy z komórkami płodu', is_correct: false },
      { id: 'B', text: 'CVS można wykonać wcześniej (ok. 10–12 tyg. ciąży) niż amniopunkcję (ok. 15–20 tyg.) — ale wiąże się z nieco wyższym ryzykiem poronienia', is_correct: true },
      { id: 'C', text: 'Obie metody pobierają krew płodową — różnią się tylko miejscem wkłucia igły', is_correct: false },
      { id: 'D', text: 'Amniopunkcja jest bardziej ryzykowna i rzadziej stosowana niż CVS', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'CVS (chorionic villus sampling / biopsja kosmówki): pobiera fragment trofoblastu (łożyska) — ~10–12 tydzień ciąży; wynik szybciej, ale ryzyko poronienia ~0,5–1% wyższe niż amniopunkcja. Amniopunkcja: nakłucie worka owodniowego i pobranie ok. 15–20 ml płynu owodniowego z komórkami nabłonka płodu — ~15–20 tydzień ciąży; ryzyko poronienia ~0,1–0,3%. Obie metody pozwalają na analizę kariotypu płodu (i badania genetyczne) w celu wykrycia np. trisomii 21.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mutacje i choroby jednogenowe ───
  {
    subtopic: 'Genetyka i dziedziczenie — Mutacje i choroby jednogenowe',
    subtopic_id: S.mutacje,
    question_type: 'single',
    question_text: 'Achondroplazja (karłowatość chrzęstnokostna) jest chorobą autosomalną DOMINUJĄCĄ. Co to oznacza dla potomstwa chorego heterozygoty (Aa) i zdrowego partnera (aa)?',
    options: [
      { id: 'A', text: '100% dzieci będzie chorych — allel dominujący zawsze się ujawnia', is_correct: false },
      { id: 'B', text: '50% dzieci będzie chorych (Aa), 50% zdrowych (aa)', is_correct: true },
      { id: 'C', text: '25% dzieci będzie chorych — jak przy chorobach recesywnych', is_correct: false },
      { id: 'D', text: 'Żadne dziecko nie będzie chore — choroba dominująca nie przenosi się na dzieci', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Krzyżówka: Aa (chory, heterozygota) × aa (zdrowy) → 1/2 Aa (chorzy) + 1/2 aa (zdrowi) = stosunek 1:1. Cecha dominująca: wystarczy jeden allel choroby, żeby wystąpił fenotyp chorobowy. Uwaga: homozygoty AA dla achondroplazji są letalnie — allel A w układzie homozygotycznym jest niezgodny z życiem (lethal equivalent). W populacji praktycznie wszyscy chorzy są heterozygotami Aa.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Mutacje i choroby jednogenowe',
    subtopic_id: S.mutacje,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE cechy charakterystyczne dla chorób autosomalnych RECESYWNYCH (np. fenyloketonuria, mukowiscydoza).',
    options: [
      { id: 'A', text: 'Choroba może pojawić się u dziecka zdrowych rodziców — oboje rodzice mogą być nosicielami (Aa × Aa)', is_correct: true },
      { id: 'B', text: 'Choroba dotyka z równym prawdopodobieństwem kobiety i mężczyzn (jeśli gen jest autosomalny)', is_correct: true },
      { id: 'C', text: 'Chory rodzic zawsze przekazuje chorobę wszystkim dzieciom', is_correct: false },
      { id: 'D', text: 'Częstość chorych w populacji = q², częstość nosicieli = 2pq (prawo Hardy\'ego-Weinberga)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — PRAWDA: zdrowi nosiciele Aa × Aa → 25% chorych aa; choroba może "zaskoczyć" w rodzinie bez historii choroby. B — PRAWDA: gen autosomalny → płeć nie wpływa na prawdopodobieństwo; inaczej niż choroby X-sprzężone. C — FAŁSZ: chory (aa) × zdrowy (AA) → 100% Aa (zdrowi nosiciele, żadne dziecko chore); nawet chory (aa) × nosiciel (Aa) → 50% aa chorych, 50% Aa zdrowych. D — PRAWDA: przy równowadze H-W: chorzy = q², nosiciele = 2pq. Np. mukowiscydoza: q² ≈ 1/2500, q ≈ 0,02, nosiciele 2pq ≈ 4%.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Genetyka populacyjna ───
  {
    subtopic: 'Genetyka i dziedziczenie — Genetyka populacyjna',
    subtopic_id: S.populacyjna,
    question_type: 'single',
    question_text: 'W pewnej populacji w równowadze Hardy\'ego-Weinberga częstość allelu recesywnego a wynosi 0,3. Jaka jest częstość heterozygot Aa w tej populacji?',
    options: [
      { id: 'A', text: '0,09 (9%)', is_correct: false },
      { id: 'B', text: '0,42 (42%)', is_correct: true },
      { id: 'C', text: '0,49 (49%)', is_correct: false },
      { id: 'D', text: '0,30 (30%)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'q = 0,3 (allel a); p = 1 − q = 0,7 (allel A). Częstość heterozygot = 2pq = 2 × 0,7 × 0,3 = 0,42 = 42%. Kontrola: p² + 2pq + q² = 0,49 + 0,42 + 0,09 = 1,00 ✓. Częste błędy: q² = 0,09 (to homozygoty aa, nie heterozygoty); p² = 0,49 (to homozygoty AA). Heterozygoty (nosiciele) są zawsze najliczniejszą grupą gdy q < 0,5.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Genetyka populacyjna',
    subtopic_id: S.populacyjna,
    question_type: 'single',
    question_text: 'Efekt założyciela (founder effect) jest formą dryfu genetycznego. Który opis NAJDOKŁADNIEJ charakteryzuje ten efekt?',
    options: [
      { id: 'A', text: 'Stopniowe zwiększanie się częstości korzystnych alleli pod wpływem doboru naturalnego w dużej populacji', is_correct: false },
      { id: 'B', text: 'Utrata różnorodności genetycznej po katastrofalnym zmniejszeniu liczebności populacji (np. epidemia, katastrofa naturalna)', is_correct: false },
      { id: 'C', text: 'Losowe zmiany częstości alleli w nowej populacji założonej przez małą grupę osobników oddzieloną od populacji macierzystej — pula genowa założycieli ≠ pula macierzysta', is_correct: true },
      { id: 'D', text: 'Napływ nowych alleli do populacji przez imigrację osobników z innej populacji', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Efekt założyciela: mała liczba osobników (założyciele) opuszcza populację macierzystą i tworzy nową populację w izolacji. Pula genowa założycieli jest losową próbką — może zawierać nieproporcjonalnie wysoką częstość rzadkich alleli (lub brak częstych). Przykłady: wysoka częstość choroby Tay-Sachsa u Żydów aszkenazyjskich; fenylketonuria u Irlandczyków; choroba porfyrii u Afrykanerów (Południowa Afryka). B opisuje efekt wąskiego gardła (bottleneck) — różnica: bottleneck to zmniejszenie w tej samej lokalizacji, efekt założyciela to migracja i założenie nowej populacji.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Dziedziczenie wielogenowe ───
  {
    subtopic: 'Genetyka i dziedziczenie — Dziedziczenie wielogenowe',
    subtopic_id: S.wielogenowe,
    question_type: 'single',
    question_text: 'Kolor skóry człowieka jest cechą wielogenową kontrolowaną przez kilka genów o addytywnym działaniu. Które stwierdzenie POPRAWNIE opisuje dziedziczenie tej cechy?',
    options: [
      { id: 'A', text: 'Kolor skóry dziecka rodziców o skórze ciemnej i jasnej zawsze będzie pośredni — żadne dziecko nie może mieć skóry ciemniejszej niż ciemniejszy rodzic', is_correct: false },
      { id: 'B', text: 'Im więcej "aktywnych" alleli (kodujących melaninę) dziedziczy dziecko, tym ciemniejsza skóra — możliwy pełny zakres od bardzo jasnej do bardzo ciemnej u potomstwa par heterozygotycznych', is_correct: true },
      { id: 'C', text: 'Kolor skóry zależy wyłącznie od jednego genu z wieloma allelami — identycznie jak grupy krwi ABO', is_correct: false },
      { id: 'D', text: 'Środowisko (opalenizna) trwale zmienia ekspresję genów melaniny i jest dziedziczona przez potomstwo', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Kolor skóry: ok. 6 genów (w uproszczeniu: A, B, C, każde z allelem aktywnym + biernym), łącznie ok. 12 alleli, działanie addytywne — każdy aktywny allel dodaje "jedną porcję" melaniny. Rodzice podwójnie heterozygotyczni (AaBbCc × AaBbCc) mogą mieć potomstwo w pełnym spektrum od 0/12 (najjaśniejszy) do 12/12 (najciemniejszy) aktywnych alleli → ciągły zakres kolorów w potomstwie. D — FAŁSZ: opalenizna to zmienność modyfikacyjna (niedziedziczna), nie zmienia sekwencji DNA.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka i dziedziczenie — Dziedziczenie wielogenowe',
    subtopic_id: S.wielogenowe,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cech wielogenowych i środowiska:\nA. Heritabilność (h²) = 1,0 oznacza, że 100% zmienności obserwowanej cechy w danej populacji wynika z różnic genetycznych między osobnikami.\nB. Cecha o wysokiej heritabilności reaguje silnie na zmiany środowiska — środowisko jest ważniejsze niż geny.\nC. Masa ciała człowieka jest cechą wielogenową, ale też silnie modulowaną przez środowisko (dieta, aktywność fizyczna) — heritabilność wynosi ok. 40–70%.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, F', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: heritabilność h² = V_G / V_P (wariancja genetyczna / wariancja fenotypowa); h²=1,0 = cała obserwowana zmienność wynika z genów w tej populacji. B — FAŁSZ: wysoka heritabilność oznacza, że GENY wyjaśniają dużą część zmienności w tej populacji — NIE oznacza, że środowisko nie wpływa na cechę. Przykład: wzrost człowieka ma h²≈0,8 w krajach zachodnich, ale dieta i zdrowie w dzieciństwie silnie wpływają na wzrost bezwzględny; w obu populacjach geny wyjaśniają zmienność wewnątrz grupy. C — PRAWDA: masa ciała wykazuje h²≈40–70% w różnych badaniach — zarówno geny (leptyna, receptory, metabolizm) jak i środowisko (dieta, tryb życia) są ważne.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body))
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/mock_questions',
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
  console.log(`Seeding ${questions.length} mock questions for Genetyka i dziedziczenie...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
