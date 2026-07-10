// Seed: mock_questions — Zmienność i mutacje (19 questions)
// These appear in the /mock-exam "Sprawdzian z całego materiału"

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  rodzaje:     '5f6cbed8-a87b-4021-89fa-9cb36c97512d',
  genowe:      '88be4b09-5208-4c92-b8cb-9d8b39a5d92b',
  chromosom:   '642a17ec-fb42-4e0b-b787-a036e08f405b',
  genomowe:    '815d85a0-7af8-4e53-8afe-d0262f58a693',
  mutageny:    'f7594d3c-f046-492b-a6d7-b8c2fbcf2907',
  kombinat:    '344119b8-5be6-4265-9cff-afe41db719ad',
  jednogenowe: '6853283a-4c8b-4117-ab70-432aa25e4a58',
  chromosom_c: '2020184b-368b-4365-a9ad-708db9f1030f',
  ewolucja:    '3f1ac27d-827e-4715-932d-a815516d8396',
}

const questions = [
  // ─── Rodzaje zmienności ───
  {
    subtopic: 'Zmienność i mutacje — Rodzaje zmienności',
    subtopic_id: S.rodzaje,
    question_type: 'single',
    question_text: 'Jednojajowe bliźnięta mają identyczne genotypy, a mimo to mogą się różnić masą ciała i podatnością na niektóre choroby. Który wniosek jest uzasadniony na podstawie tej obserwacji?',
    options: [
      { id: 'A', text: 'Identyczny genotyp zawsze daje identyczny fenotyp — różnice bliźniąt wynikają z błędów pomiaru', is_correct: false },
      { id: 'B', text: 'Fenotyp zależy nie tylko od genotypu, ale też od środowiska — tę samą informację genetyczną środowisko może ekspresjonować różnie (norma reakcji)', is_correct: true },
      { id: 'C', text: 'U bliźniąt jednojajowych dochodzi do mutacji kompensujących, które przywracają różnice między osobnikami', is_correct: false },
      { id: 'D', text: 'Różnice między bliźniętami jednojajowymi dowodzą, że geny nie mają żadnego wpływu na masę ciała', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Bliźnięta MZ (monozygotyczne) mają identyczne DNA, ale różne środowiska (dieta, aktywność, stres, mikrobiom) prowadzą do różnych fenotypów. To klasyczny przykład normy reakcji — zakres możliwych fenotypów danego genotypu w różnych warunkach środowiskowych. Wraz z wiekiem bliźnięta MZ zyskują też różnice epigenetyczne (metylacja DNA, modyfikacje histonów), które wzmacniają fenotypowe różnice mimo identycznej sekwencji DNA.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Rodzaje zmienności',
    subtopic_id: S.rodzaje,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących rodzajów zmienności:\nA. Zmienność ciągła (np. wzrost, masa ciała) jest typowa dla cech wielogenowych modulowanych przez środowisko.\nB. Zmienność nieciągła (np. grupy krwi ABO, płeć) dzieli osobniki na wyraźne klasy bez form pośrednich.\nC. Zmienność modyfikacyjna (niedziedziczna) i zmienność genetyczna wpływają na pulę genową populacji w jednakowym stopniu.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: cechy wielogenowe + wpływ środowiska → rozkład ciągły (normalny) bez wyraźnych klas. B — PRAWDA: zmienność nieciągła daje odrębne klasy fenotypowe (A, B, AB, 0; male/female) bez pośrednich form. C — FAŁSZ: zmienność modyfikacyjna NIE wpływa na pulę genową — nie zmienia DNA i nie jest przekazywana potomstwu; tylko zmienność genetyczna (mutacje, rekombinacja) zmienia częstości alleli w populacji i podlega ewolucji.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mutacje genowe ───
  {
    subtopic: 'Zmienność i mutacje — Mutacje genowe',
    subtopic_id: S.genowe,
    question_type: 'single',
    question_text: 'W sekwencji kodującej genu doszło do zmiany: kodon GAG (Glu) → kodon GUG (Val). Ten typ mutacji punktowej to:\n(przyjmij, że zmiana w DNA: GAG → GTG)',
    options: [
      { id: 'A', text: 'Mutacja synonimiczna (cicha) — nie zmienia aminokwasu', is_correct: false },
      { id: 'B', text: 'Mutacja nonsense — tworzy kodon stop', is_correct: false },
      { id: 'C', text: 'Mutacja missense — zmienia jeden aminokwas na inny (Glu → Val)', is_correct: true },
      { id: 'D', text: 'Mutacja frameshift — przesuwa ramkę odczytu', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Mutacja missense: substytucja jednego nukleotydu zmienia kodon na inny kodujący INNY aminokwas. GAG (Glu, kwas glutaminowy) → GUG (Val, walina) — to dokładnie mutacja prowadząca do anemii sierpowatej (pozycja 6 łańcucha beta-hemoglobiny). Konsekwencja: walina jest hydrofobowa, kwas glutaminowy hydrofilowy → hemoglobina S (HbS) polimeryzuje w warunkach niskiego pO₂ → odkształcenie erytrocytów. Mutacja cicha: kodon → inny kodon dla TEGO SAMEGO aminokwasu. Nonsense: kodon aminokwasowy → kodon stop (UAA, UAG, UGA).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Mutacje genowe',
    subtopic_id: S.genowe,
    question_type: 'single',
    question_text: 'Sekwencja matrycowa DNA pewnego genu (fragment): 3′-TACGCCATG-5′\nW wyniku mutacji doszło do insercji nukleotydu T po pierwszym nukleotydzie (od strony 3′): 3′-TATCGCCATG-5′\nJaki jest skutek tej mutacji?',
    options: [
      { id: 'A', text: 'Mutacja synonimiczna — aminokwas nie zmienia się', is_correct: false },
      { id: 'B', text: 'Przesunięcie ramki odczytu (frameshift) — wszystkie kodony poniżej miejsca insercji ulegają zmianie', is_correct: true },
      { id: 'C', text: 'Mutacja missense — zmienia się tylko jeden aminokwas', is_correct: false },
      { id: 'D', text: 'Mutacja nonsense — bezpośrednio tworzy kodon stop w miejscu insercji', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Insercja 1 nukleotydu → przesunięcie ramki odczytu (frameshift). Oryginalna nić mRNA (komplementarna do matrycy): 5′-AUGCGGUAC-3′ → kodony: AUG-CGG-UAC (Met-Arg-Tyr). Po insercji T w matrycy: nić mRNA: 5′-AUAGCGGUAC-3′ → nowa ramka: AUA-GCG-GUA-C... → Ile-Ala-Val-... (całkowicie inna sekwencja). Wszystkie aminokwasy poniżej punktu insercji ulegają zmianie → zazwyczaj pojawia się przedwczesny stop → białko skrócone i niefunkcjonalne. Wyjątek: insercja/delecja wielokrotności 3 nukleotydów nie przesuwa ramki.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Mutacje genowe',
    subtopic_id: S.genowe,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mutacji genowych:\nA. Mutacje spontaniczne powstają bez udziału znanych czynników zewnętrznych — są wynikiem naturalnych błędów replikacji DNA lub spontanicznej depurynacji zasad.\nB. Większość mutacji punktowych w regionach kodujących jest korzystna dla organizmu i zwiększa jego fitness.\nC. Mutacja w komórce somatycznej może prowadzić do nowotworu, ale nie zostanie przekazana potomstwu płciowemu organizmu.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, F', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: mutacje spontaniczne: błędy polimerazy DNA (~1 błąd/10⁹ nt, po korekcji ~1/10¹⁰), tautomeria zasad (formy imino/enol parują błędnie), depurynacja (utrata puryny ~5000×/komórkę/dobę), deaminacja cytozyny → uracyl. B — FAŁSZ: zdecydowana większość mutacji w regionach kodujących jest obojętna lub SZKODLIWA; korzystne mutacje są rzadkością (ale to właśnie one są „paliwem" ewolucji). C — PRAWDA: komórki somatyczne nie tworzą gamet → mutacja somatyczna nie trafia do potomstwa; może natomiast powodować niekontrolowany podział (nowotwór) przez mutację protoonkogenów lub genów supresorowych.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mutacje chromosomowe strukturalne ───
  {
    subtopic: 'Zmienność i mutacje — Mutacje chromosomowe',
    subtopic_id: S.chromosom,
    question_type: 'single',
    question_text: 'Inwersja chromosomowa to aberracja strukturalna polegająca na:\n(wybierz najdokładniejszy opis)',
    options: [
      { id: 'A', text: 'Przeniesieniu fragmentu chromosomu na niehomologiczny chromosom', is_correct: false },
      { id: 'B', text: 'Obróceniu fragmentu chromosomu o 180° — sekwencja genów w obrębie fragmentu jest odwrócona', is_correct: true },
      { id: 'C', text: 'Utracie fragmentu chromosomu wraz z zawartymi w nim genami', is_correct: false },
      { id: 'D', text: 'Podwojeniu (duplikacji) fragmentu chromosomu — jeden odcinek jest reprezentowany dwukrotnie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Cztery typy aberracji strukturalnych: (1) Delecja: utrata fragmentu (C). (2) Duplikacja: podwojenie fragmentu (D). (3) Inwersja: fragment wycięty i wstawiony odwrotnie (B) — może być pericentryczna (obejmuje centromer) lub paracentryczna (nie obejmuje). Geny obecne, ale w zmienionej kolejności → problemy podczas mejozy (pętle inwersji). (4) Translokacja: przeniesienie fragmentu na niehomologiczny chromosom (A). Nosiciele inwersji i translokacji zrównoważonych mogą być fenotypowo normalni, ale mają ryzyko niezrównoważonego potomstwa.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Mutacje chromosomowe',
    subtopic_id: S.chromosom,
    question_type: 'single',
    question_text: 'Translokacja Robertsonowska (fuzja centryczna) polega na połączeniu długich ramion dwóch chromosomów akrocentrycznych. Najczęściej dotyczy chromosomów 13, 14, 15, 21, 22. Nosiciel translokacji Rob(14;21) ma 45 chromosomów i jest fenotypowo normalny.\nDlaczego dzieci nosiciela są narażone na zespół Downa mimo że rodzic jest zdrowy?',
    options: [
      { id: 'A', text: 'Nosiciel przekazuje dziecku dodatkowy wolny chromosom 21 wskutek nondysjunkcji podczas mejozy', is_correct: false },
      { id: 'B', text: 'Podczas mejozy chromosom Rob(14;21) segreguje razem z wolnym chromosomem 21 → część gamet ma dwie kopie materiału chr. 21 → po zapłodnieniu trisomia 21 (translokacyjny zespół Downa)', is_correct: true },
      { id: 'C', text: 'Translokacja Robertsonowska spontanicznie cofa się u płodu, odtwarzając trzy wolne chromosomy 21', is_correct: false },
      { id: 'D', text: 'Nosiciel Rob(14;21) ma de facto trzy kopie chromosomu 21 — sam wykazuje łagodny zespół Downa', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Nosiciel Rob(14;21): ma chromosom 14;21 (fuzja) + wolny chr. 14 + wolny chr. 21 = 45 chr., ale cały materiał genetyczny jest obecny → normalny fenotyp. Podczas mejozy: chromosom Rob(14;21) musi sparować z homologami (chr. 14 i chr. 21). Przy nieprawidłowej segregacji: gameta może zawierać Rob(14;21) + wolny 21 → po zapłodnieniu normalną gametą (z wolnym 21): zygota 46 chr. ale z trzema kopiami materiału chr. 21 → translokacyjny zespół Downa. Ryzyko: ~10–15% dla matki nosicielki, ~2–5% dla ojca nosiciela.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mutacje genomowe ───
  {
    subtopic: 'Zmienność i mutacje — Mutacje genomowe',
    subtopic_id: S.genomowe,
    question_type: 'single',
    question_text: 'Nondysjunkcja w mejozie I różni się od nondysjunkcji w mejozie II. Które stwierdzenie POPRAWNIE opisuje tę różnicę pod względem rodzaju gamet nieprawidłowych?',
    options: [
      { id: 'A', text: 'Nondysjunkcja w mejozie I: nie rozchodzą się CHROMOSOMY HOMOLOGICZNE → gamety zawierają oba chromosomy z danej pary lub żadnego; w mejozie II: nie rozchodzą się CHROMATYDY SIOSTRZANE → dwie identyczne gamety z dodatkowym chromosomem i dwie bez', is_correct: true },
      { id: 'B', text: 'Nondysjunkcja w mejozie I i II daje identyczne typy gamet — nie ma różnicy w produkcie końcowym', is_correct: false },
      { id: 'C', text: 'Nondysjunkcja w mejozie I dotyczy tylko chromosomów płci, a w mejozie II — tylko autosomów', is_correct: false },
      { id: 'D', text: 'W mejozie I nondysjunkcja nie jest możliwa — crossing-over zapobiega błędom segregacji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mejoza I (nondysjunkcja): para homologów (np. oba chromosomy 21) nie rozdziela się w anafazie I → jedna komórka po mejozie I dostaje oba chr. 21, druga żadnego → po mejozie II: 2 gamety n+1 (mają oba chr. 21) i 2 gamety n-1 (brak chr. 21). Mejoza II (nondysjunkcja): chromatydy siostrzane jednego chromosomu 21 nie rozdzielają się → 1 gameta z dwiema identycznymi kopiami chr. 21 (n+1), 1 gameta bez chr. 21 (n-1) oraz 2 normalne gamety n. Statystycznie nondysjunkcja w mejozie I jest częstsza i odpowiada za ~75% przypadków trisomii.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Mutacje genomowe',
    subtopic_id: S.genomowe,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mutacji genomowych:\nA. Trisomia to stan, w którym organizm ma trzy kopie danego chromosomu (2n+1), zamiast prawidłowych dwóch (2n).\nB. Autopoliploidia (np. 4n) u roślin uprawnych jest zawsze niekorzystna — prowadzi do niezdolności do rozmnażania.\nC. Monosomia (2n−1) u człowieka dotyczy najczęściej chromosomów płci — monosomia autosomalna jest zwykle letalna we wczesnym życiu płodowym.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, F', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: trisomia = 2n+1, np. trisomia 21 (zespół Downa, 47 chr.); trisomia 13 (Patau); trisomia 18 (Edwards). B — FAŁSZ: autopoliploidia u roślin MOŻE być korzystna — wiele ważnych roślin uprawnych to allopoliploidy lub autopoliploidy: pszenica (alloheksaploid 6n=42), truskawka (oktoploida 8n=56), banan (triploid 3n=33 — beznasienny i stąd przydatny). Rośliny poliploidalne często mają większe owoce i nasiona. C — PRAWDA: monosomia autosomalna (np. monosomia 21) = 45 chromosomów z brakiem jednego autosomu → brak ekspresji genów z brakującego chromosomu → letalność wczesnozarodkowa. Wyjątek: monosomia X (45, X0 = Turner) — przeżywalna, choć z licznymi zaburzeniami.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mutageny ───
  {
    subtopic: 'Zmienność i mutacje — Mutageny',
    subtopic_id: S.mutageny,
    question_type: 'single',
    question_text: 'Analogo zasad (np. 5-bromouracyl, BU) są mutagenami chemicznymi. Mechanizm ich działania polega na tym, że:',
    options: [
      { id: 'A', text: 'Bezpośrednio tną nić DNA, powodując pęknięcia dwuniciowe', is_correct: false },
      { id: 'B', text: 'Wbudowują się do DNA zamiast normalnych zasad i podczas kolejnych replikacji parują z nieodpowiednią zasadą — prowadząc do tranzycji', is_correct: true },
      { id: 'C', text: 'Blokują polimerazę DNA, całkowicie uniemożliwiając replikację', is_correct: false },
      { id: 'D', text: 'Interkalują między zasadami DNA, powodując insercje i delecje podczas replikacji', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: '5-bromouracyl (BU): analog tyminy (ma Br zamiast CH₃ w pozycji 5). W formie keto paruje normalnie z A (jak tymina). Może tautomeryzować do formy enol → paruje z G zamiast A. Wynik po dwóch replikacjach: para A-T → G-C (tranzycja). BU musi być wbudowany do DNA podczas replikacji — mutagenność zależy od fazy S. Interkalatory (D): bromek etydyny, akrydyny — wsuwają się między zasady → odkształcają helisę → polimeraza pomija lub wstawia dodatkowy nukleotyd → insercja/delecja → frameshift. Pęknięcia DSB (A): promieniowanie jonizujące, bleomycyna.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Mutageny',
    subtopic_id: S.mutageny,
    question_type: 'single',
    question_text: 'Test Amesa służy do oceny mutagenności związków chemicznych. Na czym polega zasada tego testu?',
    options: [
      { id: 'A', text: 'Mierzy wzrost częstości nowotworów u myszy eksponowanych na badaną substancję przez 2 lata', is_correct: false },
      { id: 'B', text: 'Ocenia zdolność substancji do wywoływania mutacji powrotnych (revertant) u auxotroficznych szczepów Salmonella — wzrost kolonii bez histydyny wskazuje na mutagenność', is_correct: true },
      { id: 'C', text: 'Mierzy liczbę pęknięć DNA w komórkach ludzkich metodą elektroforezy (comet assay)', is_correct: false },
      { id: 'D', text: 'Sprawdza czy substancja blokuje syntezę ATP w mitochondriach, co jest markerem genotoksyczności', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Test Amesa (Bruce Ames, 1973): używa szczepów Salmonella typhimurium z mutacją uniemożliwiającą syntezę histydyny (His⁻). Bakterie te nie rosną bez histydyny. Jeśli badana substancja jest mutagenem → indukuje mutacje powrotne (revertant) → część bakterii odzyskuje zdolność syntezy histydyny (His⁺) → tworzą kolonie na podłożu bez His. Liczba kolonii ∝ mutagenność substancji. Zalety: szybki, tani, wysoka korelacja z karcynogennością u ssaków (karcynogeny często są mutagenami). Wada: nie wykrywa mutagenów wymagających metabolicznej aktywacji (dlatego dodaje się ekstrakt wątrobowy S9 symulujący metabolizm u ssaków).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Zmienność kombinatoryczna ───
  {
    subtopic: 'Zmienność i mutacje — Zmienność kombinatoryczna',
    subtopic_id: S.kombinat,
    question_type: 'single',
    question_text: 'Człowiek ma 2n = 46 (23 pary chromosomów). Ile potencjalnych kombinacji chromosomów może zawierać gameta człowieka, biorąc pod uwagę wyłącznie niezależną segregację chromosomów (bez crossing-over)?',
    options: [
      { id: 'A', text: '46 kombinacji', is_correct: false },
      { id: 'B', text: '23² = 529 kombinacji', is_correct: false },
      { id: 'C', text: '2²³ = ponad 8 milionów kombinacji', is_correct: true },
      { id: 'D', text: '2⁴⁶ = ponad 70 bilionów kombinacji', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Niezależna segregacja: każda z 23 par chromosomów homologicznych rozdziela się niezależnie — chromosom matczyny lub ojczysty trafia losowo do gamety. Dla każdej pary: 2 możliwości. Dla 23 par: 2²³ = 8 388 608 ≈ 8,4 miliona kombinacji. To minimum zmienności genetycznej. Crossing-over (rekombinacja) nakłada się na niezależną segregację i wielokrotnie zwiększa różnorodność — teoretycznie każda gameta jest unikalna. Stąd dwie gamy losowo dobranych rodziców dają potomstwo o praktycznie niepowtarzalnym genotypie.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Zmienność kombinatoryczna',
    subtopic_id: S.kombinat,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zmienności rekombinacyjnej:\nA. Crossing-over zachodzi między chromatydami niesiostrzanymi chromosomów homologicznych — produktem są chromatydy z nowymi kombinacjami alleli.\nB. Im dalej od siebie leżą dwa geny na tym samym chromosomie, tym rzadziej między nimi dochodzi do crossing-over.\nC. Rekombinacja zachodzi jedynie w komórkach linii płciowej podczas mejozy — w komórkach somatycznych crossing-over nie jest możliwy.',
    options: [
      { id: 'A', text: 'P, F, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, P, F', is_correct: false },
      { id: 'D', text: 'F, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: crossing-over = wymiana odcinków między chromatydami niesiostrzanymi (z chromosomów matczynego i ojcowskiego) → powstają rekombinacyjne chromatydy z novymi kombinacjami alleli. B — FAŁSZ: im dalej leżą geny, tym CZĘŚCIEJ dochodzi między nimi do crossing-over → wyższa częstość rekombinacji (RF) → większa odległość genetyczna (cM). Bliskie geny = rzadkie crossing-over = silne sprzężenie. C — FAŁSZ: rekombinacja (choć rzadsza) zachodzi też w komórkach somatycznych jako mechanizm naprawy DNA (rekombinacja homologiczna naprawia DSB). Jednak ma znaczenie ewolucyjne tylko w linii płciowej.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Choroby jednogenowe ───
  {
    subtopic: 'Zmienność i mutacje — Choroby jednogenowe',
    subtopic_id: S.jednogenowe,
    question_type: 'single',
    question_text: 'Choroba Huntingtona (pląsawica Huntingtona) jest spowodowana ekspansją trójnukleotydową (powtórzenia CAG) w genie HTT. Dziedziczy się autosomalnie dominująco.\nKtóre stwierdzenie NAJLEPIEJ tłumaczy, dlaczego ta choroba ujawnia się dopiero w wieku dorosłym (30–50 rok życia)?',
    options: [
      { id: 'A', text: 'Allel dominujący HTT jest aktywny tylko u dorosłych — u dzieci gen jest wyciszony epigenetycznie', is_correct: false },
      { id: 'B', text: 'Zmutowane białko huntingtyna (z rozszerzoną polią-Q) stopniowo agreguje w neuronach przez dziesięciolecia — toksyczne agregaty kumulują się zanim dojdzie do objawowego uszkodzenia neuronów prążkowia', is_correct: true },
      { id: 'C', text: 'Ekspansja CAG rośnie z każdym podziałem komórkowym — dopiero po 30 latach powtórzeń jest wystarczająco dużo, by wywołać chorobę', is_correct: false },
      { id: 'D', text: 'Choroba jest dominująca tylko u osób po 40. roku życia — u młodszych allel recesywny maskuje jej objawy', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Huntingtyna z powtórzeniami poliglutaminowymi (>36 CAG → >36 Gln): białko przyjmuje nieprawidłową konformację → tworzy agregaty wewnątrzkomórkowe → stopniowe uszkadzanie neuronów (głównie prążkowie i kora) przez mechanizmy toksyczne (mitochondrialna dysfunkcja, aktywacja kaspaz, zaburzona transkrypcja). Proces zajmuje dekady → objawy kliniczne (ruchy pląsawicze, demencja) ujawniają się zwykle w 4.–5. dekadzie życia. Anticipacja: ekspansja CAG może rosnąć przy przekazywaniu przez ojca (niestabilność w linii płciowej) → dzieci chorego mogą zachorować wcześniej i ciężej.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Choroby jednogenowe',
    subtopic_id: S.jednogenowe,
    question_type: 'single',
    question_text: 'Albinizm (brak pigmentu melaniny) jest chorobą autosomalną recesywną spowodowaną brakiem aktywności tyrozynazy. Rodzice dziecka z albinizmem mają prawidłowe zabarwienie skóry.\nJakie są genotypy rodziców i jakie jest prawdopodobieństwo, że kolejne dziecko tej pary będzie albinistyczne?',
    options: [
      { id: 'A', text: 'Oboje rodzice AA (homozygoty dominujące) — prawdopodobieństwo 0%', is_correct: false },
      { id: 'B', text: 'Oboje rodzice Aa (nosiciele) — prawdopodobieństwo 25%', is_correct: true },
      { id: 'C', text: 'Jeden rodzic AA, drugi Aa — prawdopodobieństwo 50%', is_correct: false },
      { id: 'D', text: 'Oboje rodzice Aa — prawdopodobieństwo 50%', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Albinizm recesywny (aa). Rodzice mają prawidłową pigmentację → nie są aa → muszą mieć co najmniej jeden allel A. Ponieważ mają dziecko aa → każde z rodziców musiało przekazać allel a → oboje są nosicielami Aa. Krzyżówka Aa × Aa: potomstwo 1/4 AA + 2/4 Aa + 1/4 aa → prawdopodobieństwo albinizmu = 25% dla każdego kolejnego dziecka (zdarzenia są niezależne — obecność chorego pierwszego dziecka nie zmienia prawdopodobieństwa dla następnych).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Chromosomowe uwarunkowania płci ───
  {
    subtopic: 'Zmienność i mutacje — Chromosomowe uwarunkowania płci',
    subtopic_id: S.chromosom_c,
    question_type: 'single',
    question_text: 'U mężczyzny z zespołem Klinefeltera (47, XXY) stwierdza się azoospermię (brak plemników w nasieniu). Który mechanizm NAJLEPIEJ wyjaśnia niepłodność tych mężczyzn?',
    options: [
      { id: 'A', text: 'Dodatkowy chromosom X blokuje syntezę testosteronu w jądrach — brak hormonu uniemożliwia spermatogenezę', is_correct: false },
      { id: 'B', text: 'Podczas mejozy chromosomy XXY nie mogą prawidłowo ustawić się na wrzecionie → wszystkie komórki rozrodcze giną (blok mejozy) → brak produkcji plemników', is_correct: true },
      { id: 'C', text: 'Mężczyźni XXY nie mają jąder — gonady są całkowicie nieobecne', is_correct: false },
      { id: 'D', text: 'Azoospermia w XXY wynika z blokady nasieniowodów przez złogi wapnia', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Spermatogeneza wymaga sprawnej mejozy. Komórki pierwotne spermatocytów u mężczyzny XXY muszą rozdzielić trzy chromosomy płci (X, X, Y) w mejozie I. Parowanie homologów jest zaburzone (X nie ma pełnego homologa, Y jest mały) → nieprawidłowe tworzenie trójwalentów → blokada punktów kontrolnych mejozy → apoptoza spermatocytów → brak produkcji prawidłowych spermatyd i plemników (azoospermia). Testosteron jest produkowany (choć często obniżony), jądra są obecne (choć małe i twarde). Część mężczyzn XXY ma mozaicyzm (46,XY/47,XXY) i może mieć oligospermię.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Chromosomowe uwarunkowania płci',
    subtopic_id: S.chromosom_c,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chromosomowych uwarunkowań płci i chorób:\nA. Inaktywacja chromosomu X (ciałko Barra) zachodzi w każdej komórce somatycznej kobiety — jeden chromosom X jest losowo wyciszany epigenetycznie.\nB. Kobieta z zespołem Turnera (45, X0) ma ciałko Barra, ponieważ jej jedyny chromosom X ulega inaktywacji.\nC. Liczba ciałek Barra w komórce jest zawsze o jeden mniejsza niż liczba chromosomów X.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, F', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: inaktywacja X (lyonizacja) następuje ok. 16. doby zarodkowego — w każdej komórce somatycznej jeden X (losowo matczyny lub ojczysty) jest inaktywowany przez RNA Xist → heterochromatyna → ciałko Barra. B — FAŁSZ: Turner (45, X0) ma tylko jeden chromosom X, który NIE ulega inaktywacji (bo inaktywuje się "nadmiarowy" X — przy jednym nie ma czego wyciszać) → brak ciałka Barra. C — PRAWDA: liczba ciałek Barra = n(X) − 1; kobieta 46,XX: 1 ciałko; mężczyzna 46,XY: 0 ciałek; 47,XXX: 2 ciałka; 47,XXY (Klinefelter): 1 ciałko.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Ewolucyjne znaczenie mutacji ───
  {
    subtopic: 'Zmienność i mutacje — Ewolucyjne znaczenie mutacji',
    subtopic_id: S.ewolucja,
    question_type: 'single',
    question_text: 'Allel HbS (hemoglobina sierpowata) w układzie heterozygotycznym (HbA/HbS) daje odporność na ciężką malarię wywołaną przez Plasmodium falciparum. W Afryce Subsaharyjskiej, gdzie malaria jest endemiczna, allel HbS utrzymuje się w populacji na stosunkowo wysokim poziomie pomimo śmiertelności homozygot HbS/HbS.\nJaki mechanizm ewolucyjny najlepiej wyjaśnia utrzymanie allelu HbS?',
    options: [
      { id: 'A', text: 'Dryf genetyczny — allel HbS utrzymuje się przez przypadek w małych populacjach afrykańskich', is_correct: false },
      { id: 'B', text: 'Dobór stabilizujący — dobór faworyzuje fenotypy pośrednie (heterozygoty HbA/HbS)', is_correct: false },
      { id: 'C', text: 'Przewaga heterozygot (heterozja, overdominance) — heterozygota HbA/HbS ma wyższy fitness niż obie homozygoty w środowisku z malarią', is_correct: true },
      { id: 'D', text: 'Mutacja powrotna — allel HbS stale mutuje z powrotem do HbA, utrzymując równowagę', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Przewaga heterozygot (heterosis / overdominance): HbA/HbA — podatny na malarię (obniżony fitness w obszarach endemicznych); HbS/HbS — poważna anemia sierpowata (wysoka śmiertelność); HbA/HbS — odporność na ciężką malarię bez poważnej anemii (najwyższy fitness). Selekcja balansująca utrzymuje allel HbS w populacji, bo dobór jednocześnie premiuje jego obecność (ochrona przed malarią u het.) i eliminuje jego nadmiar (letalność u homozygot). To klasyczny przykład doboru balansującego przez przewagę heterozygot — utrzymuje polimorfizm genetyczny w populacji.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Zmienność i mutacje — Ewolucyjne znaczenie mutacji',
    subtopic_id: S.ewolucja,
    question_type: 'single',
    question_text: 'Melanizm przemysłowy u ćmy Biston betularia jest klasycznym przykładem ewolucji przez dobór naturalny. Przed rewolucją przemysłową dominowały osobniki jasne (typica), po uprzemysłowieniu — ciemne (carbonaria).\nKtóry mechanizm ewolucyjny jest tutaj odpowiedzialny za zmianę częstości alleli w populacji?',
    options: [
      { id: 'A', text: 'Dryf genetyczny — losowa zmiana częstości alleli w małej populacji ćmy', is_correct: false },
      { id: 'B', text: 'Dobór kierunkowy — środowisko (osmalone drzewa) faworyzuje ciemny fenotyp przez lepsze przeżycie (kamuflarz przed ptakami), zwiększając częstość allelu carbonaria', is_correct: true },
      { id: 'C', text: 'Efekt założyciela — ciemne ćmy przybyły z innej populacji i założyły nową kolonię', is_correct: false },
      { id: 'D', text: 'Dobór stabilizujący — faworyzuje ćmy o pośrednim zabarwieniu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Dobór kierunkowy (directional selection): zmienia średnią wartości cechy w populacji w jednym kierunku. Przed industrializacją: jasne drzewa (porosty) → jasne ćmy dobrze ukryte → ciemne ćmy eliminowane przez ptaki. Po industrializacji (1850–1900): zanieczyszczenie zabija porosty, sadza ciemni korę → ciemne ćmy (carbonaria, allel dominujący) są ukryte → jasne są zjadane → częstość allelu carbonaria wzrasta z <1% do ~90% w pewnych regionach. Po wprowadzeniu czystszego powietrza (Clean Air Act, UK 1956) sytuacja zaczęła się odwracać. To bezpośrednia obserwacja doboru naturalnego w czasie rzeczywistym.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
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
  console.log(`Seeding ${questions.length} mock questions for Zmiennosc i mutacje...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
