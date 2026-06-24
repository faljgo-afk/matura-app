// Seed: Biotechnologia — 20 questions
// Topic: 8abfb5fe-655a-44b2-910c-7ffe3ce744a1

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '8abfb5fe-655a-44b2-910c-7ffe3ce744a1'

const S = {
  inzynieria:    '31834ef0-8ae2-4ced-806f-014e54b7dd1d',
  pcr:           'e2a9978b-d943-439a-abc7-f411778757c1',
  klonowanie:    '5e7ee9ea-3144-4dc7-9f99-b8ca1c38c049',
  gmo:           '2628cff0-d8c2-42cb-ab4c-60c609063091',
  medyczna:      '2801c82b-c3d0-4e23-9b72-4604b20cbfa8',
  diagnostyka:   'f4edf8a6-b6f7-4d30-b9ca-5dbcdfeea93c',
  fermentacja:   'ab4c8dd5-833b-4094-b7e4-0c94ff44ccc1',
  sekwencjonowanie:'9f59fca4-ceb3-4483-a3a8-0afcdfa601ee',
  bioetyka:      '306a13c3-097a-448a-beb8-bf8d17534678',
}

const questions = [
  // --- Inżynieria genetyczna ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.inzynieria,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących narzędzi inżynierii genetycznej.\nA. Enzymy restrykcyjne (restryktazy) rozcinają dwuniciowy DNA w specyficznych sekwencjach nukleotydowych, tworząc „lepkie końce" lub końce tępe.\nB. Ligaza DNA łączy fragmenty DNA przez tworzenie wiązań peptydowych między komplementarnymi końcami.\nC. Wektory (np. plazmidy, wirusy) służą do wprowadzania obcego DNA do komórki gospodarza w celu jego namnożenia lub ekspresji.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Restryktazy rozcinają DNA w specyficznych sekwencjach, tworząc lepkie lub tępe końce.', is_correct: true },
      { id: 'B', text: 'Ligaza DNA łączy fragmenty przez wiązania peptydowe.', is_correct: false },
      { id: 'C', text: 'Wektory (plazmidy, wirusy) służą do wprowadzania i namnażania obcego DNA.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: restryktazy (endonukleazy restrykcyjne) rozpoznają palindromiczne sekwencje (4–8 pz) i tną DNA — cięcie niesymetryczne tworzy „lepkie końce" (5\'- lub 3\'-wystające), cięcie symetryczne — końce tępe. B — Fałsz: ligaza DNA tworzy wiązania FOSFODIESTROWE (nie peptydowe) między grupą 3\'-OH i 5\'-fosforanową sąsiednich nukleotydów — uszczelnia nadciecia w nici DNA. C — Prawda: wektor klonujący musi mieć: miejsce klonowania (MCS), marker selekcyjny (oporność na antybiotyki), origin replikacji. Plazmidy (bakterie), wektory wirusowe (komórki eukariotyczne), BAC dla dużych wstawek.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.inzynieria,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nTechnologia CRISPR-Cas9 umożliwia precyzyjną edycję genomu, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'białko Cas9 losowo wycina fragmenty genomu, a komórka następnie naprawia DNA według dostarczonego szablonu', is_correct: false },
      { id: 'B', text: 'cząsteczka sgRNA (guide RNA) naprowadza nukleazę Cas9 do precyzyjnie określonego miejsca w genomie komplementarnego do sekwencji sgRNA, gdzie Cas9 wprowadza pęknięcie dwuniciowe', is_correct: true },
      { id: 'C', text: 'CRISPR-Cas9 działa wyłącznie na RNA — wycina niepożądane transkrypty bez modyfikowania sekwencji DNA', is_correct: false },
      { id: 'D', text: 'Cas9 jest enzymem restrykcyjnym bakteryjnym stosowanym do cięcia plazmidów przed klonowaniem', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'CRISPR-Cas9 (Clustered Regularly Interspaced Short Palindromic Repeats): sgRNA (single guide RNA, ~20 nt) komplementarna do docelowej sekwencji genomu prowadzi białko Cas9 (nukleazę) dokładnie do miejsca docelowego → Cas9 wprowadza DSB (double-strand break) → komórka naprawia przez: NHEJ (non-homologous end joining → mutacja/knock-out) lub HDR (homology-directed repair z dostarczonym szablonem → precyzyjna edycja). Zastosowania: terapia genowa, modyfikacje roślin, modele zwierzęce. Nagroda Nobla 2020 (Doudna, Charpentier). A — błąd: kierowanie jest precyzyjne, nie losowe. C — CRISPR modyfikuje DNA. D — Cas9 to nukleaza CRISPR, nie restryktaza.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.inzynieria,
    question_text: 'Które z poniższych elementów musi zawierać plazmid, aby mógł być skutecznie wykorzystany jako wektor klonujący w bakteriach?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Origin replikacji (ori) — sekwencja umożliwiająca autonomiczną replikację plazmidu w komórce bakteryjnej', is_correct: true },
      { id: 'B', text: 'Marker selekcyjny (np. gen oporności na antybiotyk) — pozwala wyselekcjonować bakterie zawierające plazmid', is_correct: true },
      { id: 'C', text: 'Miejsce wielokrotnego klonowania (MCS) z sekwencjami rozpoznawanymi przez różne restryktazy', is_correct: true },
      { id: 'D', text: 'Gen kodujący kapsyd wirusowy umożliwiający pakowanie plazmidu do cząstek wirusowych', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Wektor plazmidowy musi mieć: A — ori: sekwencja startowa replikacji, decyduje o liczbie kopii plazmidu w komórce (high-copy vs low-copy); bez ori plazmid nie replikuje się. B — marker selekcyjny: po transformacji bakterii selekcja na pożywce z antybiotykiem — tylko komórki z plazmidem rosną (np. gen blaAmpR dla ampicyliny); umożliwia też niebiesko-białą selekcję (lacZ). C — MCS (multiple cloning site): skupisko miejsc cięcia różnych restryktaz ułatwiające wstawienie obcego DNA w określonej orientacji. D — błąd: gen kapsydu to element wektorów wirusowych (retrowirusy, adenowirusy), nie plazmidów bakteryjnych.',
    difficulty: 3,
    verified: true,
  },

  // --- PCR i elektroforeza ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.pcr,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nW reakcji PCR (łańcuchowej reakcji polimerazy) etap denaturacji polega na:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'przyłączeniu starterów (primerów) do komplementarnych sekwencji na matrycy DNA w temperaturze ok. 50–65°C', is_correct: false },
      { id: 'B', text: 'syntezie nowej nici DNA przez polimerazę Taq w kierunku 5\'→3\' w temperaturze ok. 72°C', is_correct: false },
      { id: 'C', text: 'rozdzieleniu dwóch nici DNA matrycy przez podgrzanie do ok. 94–98°C, co zrywa wiązania wodorowe między zasadami', is_correct: true },
      { id: 'D', text: 'tworzeniu produktu PCR przez ligację komplementarnych starterów bez udziału polimerazy', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'PCR składa się z cykli trójstopniowych: 1) Denaturacja (94–98°C): wysoka temperatura zrywa wiązania wodorowe między komplementarnymi zasadami → dwie oddzielone nici ssDNA jako matryca. 2) Przyłączanie starterów/annealig (50–65°C, zależnie od Tm primerów): startery (ok. 18–25 nt) hybrydyzują z komplementarnymi sekwencjami na matrycach. 3) Elongacja/synteza (72°C, optimum polimerazy Taq): Taq polimeraz syntetyzuje nową nić 5\'→3\' od startera. Po 30 cyklach: 2³⁰ ≈ miliard kopii docelowego fragmentu. A i B opisują inne etapy. D — ligacja nie jest częścią PCR.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.pcr,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących elektroforezy żelowej DNA.\nA. W elektroforezie żelowej DNA wędruje w kierunku elektrody dodatniej (anody), ponieważ grupy fosforanowe szkieletu DNA mają ładunek ujemny.\nB. Mniejsze fragmenty DNA wędrują szybciej przez żel agarozowy niż fragmenty większe.\nC. Marker molekularny (drabinka DNA) zawiera fragmenty DNA o znanych rozmiarach, co pozwala oszacować długość badanych fragmentów.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'DNA wędruje ku anodzie (+) ze względu na ujemny ładunek fosforanów.', is_correct: true },
      { id: 'B', text: 'Mniejsze fragmenty DNA wędrują szybciej przez żel agarozowy.', is_correct: true },
      { id: 'C', text: 'Marker molekularny to fragmenty o znanych rozmiarach do kalibracji żelu.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: DNA ma ładunek ujemny (grupy fosforanowe, pKa ~1) w standardowym buforze elektroforezy (pH 8) → migracja w polu elektrycznym w stronę anody (+). B — Prawda: żel agarozowy działa jak sito molekularne — mniejsze cząsteczki łatwiej przechodzą przez pory żelu → wędrują dalej. C — Prawda: marker (ladder) to mieszanina fragmentów DNA o znanych długościach (np. 100 bp, 200 bp…1000 bp) → po elektroforezie i barwieniu (EtBr lub SYBR Green) widoczne jako drabinka prążków, pozwalająca na kalibrację i określenie długości badanych fragmentów.',
    difficulty: 1,
    verified: true,
  },

  // --- Klonowanie genów ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.klonowanie,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących klonowania genów.\nA. Biblioteka cDNA (complementary DNA) powstaje przez odwrotną transkrypcję mRNA — zawiera tylko geny aktywnie transkrybowane w danej tkance, bez intronów.\nB. Biblioteka genomowa zawiera fragmenty całego genomu organizmu, w tym introny, sekwencje regulatorowe i niekodujące.\nC. Do stworzenia biblioteki cDNA używa się enzymu DNA-polimerazy zależnej od DNA (Taq polymerase), który syntetyzuje DNA na matrycy mRNA.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'cDNA powstaje z mRNA przez odwrotną transkrypcję — bez intronów, tylko geny aktywne.', is_correct: true },
      { id: 'B', text: 'Biblioteka genomowa zawiera cały genom — introny, sekwencje regulatorowe, niekodujące.', is_correct: true },
      { id: 'C', text: 'Do syntezy cDNA z mRNA używa się polimerazy Taq.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: cDNA (complementary DNA) tworzony jest przez odwrotną transkryptazę (reverse transcriptase) z mRNA jako matrycy → cDNA odzwierciedla tylko ekson-ekson sekwencje (spliced mRNA, bez intronów). Cenne gdy gen ma wiele intronów lub chcemy ekspresji w prokariotach. B — Prawda: biblioteka genomowa reprezentuje cały genom, w tym introny, promotory, enhancery, sekwencje repetytywne — umożliwia badanie struktury i regulacji genów. C — Fałsz: do syntezy cDNA używa się ODWROTNEJ TRANSKRYPTAZY (reverse transcriptase, RNA-zależna polimeraza DNA, enzym retrowirusów). Taq polymerase to termostabilna polimeraza DNA używana w PCR.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.klonowanie,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nTransformacja bakterii w klonowaniu genów polega na:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wprowadzeniu rekombinowanego plazmidu do komórki bakteryjnej, gdzie będzie się replikował i ulegał ekspresji', is_correct: true },
      { id: 'B', text: 'fuzji dwóch bakterii (koniugacja) w celu wymiany plazmidów między szczepami', is_correct: false },
      { id: 'C', text: 'aktywacji endogennych transpozonów bakteryjnych przenoszących obcy gen w chromosomie', is_correct: false },
      { id: 'D', text: 'lizie bakterii przez bakteriofagi zawierające obcy gen docelowy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Transformacja to wprowadzenie nagiego DNA (plazmidu) do komórki bakteryjnej — bakterie nie pobierają obcego DNA w warunkach naturalnych, więc trzeba je uczynić kompetentymi: metoda chemiczna (CaCl₂ + szok termiczny 42°C) lub elektroporacja (krótki impuls elektryczny otwierający pory w błonie). Po transformacji → selekcja na pożywce z antybiotykiem → kolonie z plazmidem rosną → namnożenie klonu → izolacja białka lub DNA. B — koniugacja to transfer plazmidów przez pilus płciowy (naturalny proces, nie transformacja). C — transpozony to mobilne elementy genomu, niezwiązane z transformacją. D — opisuje transdukcję wirusową.',
    difficulty: 2,
    verified: true,
  },

  // --- GMO ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.gmo,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących organizmów GMO.\nA. Kukurydza Bt jest rośliną transgeniczną zawierającą gen bakterii Bacillus thuringiensis kodujący białko Cry toksyczne dla owadów szkodników.\nB. Złoty ryż (Golden Rice) został zmodyfikowany genetycznie w celu produkcji beta-karotenu (prowitaminy A) w ziarnach ryżu, by zwalczać niedobory witaminy A.\nC. GMO nie mogą być stosowane w rolnictwie ekologicznym i są zakazane we wszystkich krajach Unii Europejskiej.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Kukurydza Bt zawiera gen Bacillus thuringiensis — białko Cry toksyczne dla owadów.', is_correct: true },
      { id: 'B', text: 'Złoty ryż produkuje beta-karoten (prowitamina A) w ziarnach, by zwalczać niedobory witaminy A.', is_correct: true },
      { id: 'C', text: 'GMO są zakazane we wszystkich krajach Unii Europejskiej.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: białka Cry (crystal proteins, delta-endotoksyny) zaburzają błonę jelita środkowego owadów (larwy motyli, chrząszczy) → śmierć szkodnika; bezpieczne dla ssaków. Kukurydza Bt redukuje użycie pestycydów. B — Prawda: Golden Rice (1999, Ye i Peng) — wstawiono geny szlaku biosyntezy karotenoidów (PSY1 z kukurydzy, CrtI z bakterii) → biała bielmo ryżu produkuje beta-karoten → złoty kolor; projekt humanitarny (Azja). C — Fałsz: w UE obowiązują restrykcyjne przepisy dotyczące GMO, ale zakaz nie jest bezwzględny — kilka roślin GMO (np. kukurydza MON810) jest dopuszczona do uprawy lub importu; każdy kraj ma pewną swobodę decyzji.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.gmo,
    question_text: 'Które z poniższych zastosowań dotyczą organizmów transgenicznych w biotechnologii przemysłowej lub medycznej?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Bakterie E. coli z ludzkim genem insuliny — produkcja ludzkiej insuliny do leczenia cukrzycy', is_correct: true },
      { id: 'B', text: 'Transgeniczne owce produkujące w mleku ludzkie białka (np. antytrypsynę alfa-1) do celów farmaceutycznych', is_correct: true },
      { id: 'C', text: 'Rośliny transgeniczne odporne na herbicydy (np. soja RoundUp Ready) — tolerancja na glifosat', is_correct: true },
      { id: 'D', text: 'Klonowanie reprodukcyjne człowieka — tworzenie genetycznych kopii ludzi do celów medycznych', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: insulina rekombinowana (Humulin, 1982, Genentech) — gen insuliny ludzkiej w E. coli lub drożdżach Saccharomyces → rewolucja w leczeniu cukrzycy (wcześniej insulina wołowa/świńska). B — Prawda: "pharmfarm" — transgeniczne zwierzęta (owce, kozy) z ludzkimi genami w promotorach gruczołów mlecznych → białka terapeutyczne w mleku (łatwiejsze oczyszczanie). C — Prawda: soja RR (Monsanto) zawiera zmodyfikowaną syntazę EPSP odporną na glifosat → plantacja opryskiwana herbicydem niszącym chwasty, nie roślinę. D — błąd: klonowanie reprodukcyjne człowieka jest zakazane prawnie i etycznie praktycznie wszędzie na świecie.',
    difficulty: 2,
    verified: true,
  },

  // --- Biotechnologia medyczna ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.medyczna,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPrzeciwciała monoklonalne stosowane w medycynie są produkowane przez:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'limfocyty B izolowane od zwierząt uodpornionych antygenem, hodowane in vitro bez żadnych modyfikacji', is_correct: false },
      { id: 'B', text: 'hybrydomу — komórki powstałe z fuzji limfocytów B produkujących pożądane przeciwciało z komórkami szpiczaka (immortalizowanymi), co zapewnia nieograniczoną produkcję', is_correct: true },
      { id: 'C', text: 'bakterie E. coli transformowane genem ludzkiego przeciwciała — najprostsza i najtańsza metoda produkcji', is_correct: false },
      { id: 'D', text: 'komórki dendrytyczne pacjenta modyfikowane ex vivo w celu produkcji specyficznych immunoglobulin', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Technologia hybrydomy (Köhler i Milstein, 1975, Nagroda Nobla 1984): immunizacja myszy antygenem → izolacja limfocytów B ze śledziony produkujących pożądane przeciwciało → fuzja z komórkami szpiczaka (myeloma, immortalizowanymi, nie produkującymi własnych Ig) → hybrydomу: nieśmiertelne + produkują specyficzne przeciwciało → selekcja (pożywka HAT) → klonowanie → klon monoklonalny → nieograniczona produkcja jednorodnego przeciwciała. Zastosowania: terapia nowotworów (herceptyna, pembrolizumab), diagnostyka, testy ciążowe. A — normalne limfocyty B giną po kilku dniach in vitro. C — bakterie nie glikozylują białek (ważne dla aktywności IgG).',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.medyczna,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących terapii genowej.\nA. Terapia genowa somatyczna polega na wprowadzeniu prawidłowej kopii genu do komórek somatycznych pacjenta — zmiany nie są dziedziczone przez potomstwo.\nB. Terapia genowa germinalna modyfikuje komórki rozrodcze lub zarodek — zmiany byłyby dziedziczone, co rodzi poważne kontrowersje etyczne.\nC. Wszystkie choroby genetyczne mogą być dziś skutecznie leczone terapią genową, która zastępuje tradycyjną farmakoterapię.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Terapia somatyczna modyfikuje komórki pacjenta — nie dziedziczy potomstwo.', is_correct: true },
      { id: 'B', text: 'Terapia germinalna modyfikuje komórki rozrodcze — zmiany dziedziczne, kontrowersyjna etycznie.', is_correct: true },
      { id: 'C', text: 'Wszystkie choroby genetyczne mogą być dziś leczone terapią genową.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: terapia somatyczna jest etycznie akceptowana — modyfikuje komórki konkretnego pacjenta (np. limfocyty T w terapii CAR-T, komórki wątroby w hemofilii). Przykład: Luxturna (degeneracja siatkówki), Zolgensma (SMA). B — Prawda: modyfikacja zarodka (jak przypadek He Jiankui 2018 — edycja genu CCR5 u ludzkich zarodków) jest potępiana naukowo i etycznie — nieodwracalne zmiany bez zgody przyszłej osoby. C — Fałsz: terapia genowa jest wciąż w dużej mierze eksperymentalna; działa w wybranych chorobach monogenicznych (SMA, hemofilia, ADA-SCID), ale większość chorób genetycznych jest zbyt złożona, za droga lub technicznie nierozwiązana.',
    difficulty: 2,
    verified: true,
  },

  // --- Diagnostyka molekularna ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.diagnostyka,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących diagnostyki molekularnej.\nA. Test RT-PCR (real-time PCR lub reverse transcription PCR) pozwala na wykrycie obecności RNA wirusa (np. SARS-CoV-2) przez odwrotną transkrypcję do cDNA i jego amplifikację.\nB. Metoda Southern blot służy do wykrywania specyficznych sekwencji RNA w próbce — np. do analizy ekspresji genów.\nC. Testy ELISA (enzyme-linked immunosorbent assay) wykrywają obecność specyficznych antygenów lub przeciwciał poprzez reakcję antygen-przeciwciało z enzymem sygnałowym.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'RT-PCR wykrywa RNA wirusa przez odwrotną transkrypcję do cDNA i amplifikację.', is_correct: true },
      { id: 'B', text: 'Southern blot służy do wykrywania specyficznych sekwencji RNA.', is_correct: false },
      { id: 'C', text: 'ELISA wykrywa antygeny lub przeciwciała przez reakcję z enzymem sygnałowym.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: RT-PCR: RNA → odwrotna transkryptaza → cDNA → PCR z fluorescencyjną sondą (qPCR) → ilościowe wykrycie docelowego RNA. Kluczowa metoda diagnostyki COVID-19. B — Fałsz: Southern blot (Edwin Southern, 1975) wykrywa DNA, nie RNA. Do wykrywania RNA służy Northern blot. Western blot — do wykrywania białek. C — Prawda: ELISA (sandwich lub competitive): antygen/przeciwciało przyłączone do płytki → inkubacja z próbką → dodanie przeciwciała sprzężonego z enzymem (HRP, AP) → substrat chromogenny → intensywność barwy proporcjonalna do ilości analitu. Zastosowania: testy HIV, COVID antygen, alergie, hormony.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.diagnostyka,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nAnaliza DNA metodą PCR jest wykorzystywana w kryminalistyce do identyfikacji osób, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'każdy człowiek ma unikalną sekwencję całego genomu, dlatego porównuje się całe genomy podejrzanych i ofiar', is_correct: false },
      { id: 'B', text: 'analiza polimorfizmów mikrosatelitarnych (STR — short tandem repeats) w kilkunastu loci daje profil DNA unikalny dla każdego człowieka (z wyjątkiem bliźniąt jednojajowych)', is_correct: true },
      { id: 'C', text: 'DNA pobrane z miejsca zbrodni można amplifikować tylko jeśli pochodzi od żywej osoby — martwe komórki nie zawierają użytecznego DNA', is_correct: false },
      { id: 'D', text: 'sekwencja mitochondrialnego DNA jest identyczna u wszystkich ludzi, więc każda różnica wskazuje na sprawcę', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Profilowanie DNA (DNA fingerprinting, Jeffreys 1984) oparte jest na polimorfizmach STR (short tandem repeats) — regiony genomu z powtórzonymi jednostkami (np. AGAT×n), gdzie liczba powtórzeń różni się między osobami. Analiza 13–20 loci STR daje profil o prawdopodobieństwie losowej zgodności <1:10¹⁵ — praktycznie unikalne dla każdego człowieka. Materiał: krew, ślina, włosy z cebulką, nasienie — wystarczy śladowa ilość DNA (PCR amplifikuje małe próbki). A — sekwencjonowanie całego genomu do kryminalistyki byłoby zbyt drogie i powolne. C — martwe komórki zawierają DNA (np. z kości sprzed tysięcy lat). D — mtDNA jest dziedziczone matrilineralnie i nie identyfikuje indywiduum.',
    difficulty: 2,
    verified: true,
  },

  // --- Fermentacja ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.fermentacja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących fermentacji przemysłowej.\nA. Fermentacja alkoholowa prowadzona przez drożdże Saccharomyces cerevisiae przekształca glukozę w etanol i CO₂ w warunkach beztlenowych.\nB. Fermentacja mlekowa bakterii Lactobacillus polega na przekształceniu glukozy w kwas mlekowy — bez produkcji CO₂.\nC. Biotechnologia fermentacyjna jest wykorzystywana wyłącznie do produkcji żywności i napojów — nie ma zastosowań farmaceutycznych.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Drożdże fermentują glukozę do etanolu i CO₂ w warunkach beztlenowych.', is_correct: true },
      { id: 'B', text: 'Bakterie Lactobacillus fermentują glukozę do kwasu mlekowego bez CO₂.', is_correct: true },
      { id: 'C', text: 'Biotechnologia fermentacyjna stosowana wyłącznie do żywności i napojów.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: drożdże (S. cerevisiae): glikoza → 2 pirogronian → 2 acetaldehydu → 2 etanol + 2 CO₂; regeneracja NAD⁺ bez łańcucha oddechowego; podstawa produkcji piwa, wina, etanolu przemysłowego. B — Prawda: bakterie mlekowe: glukoza → 2 kwas mlekowy (fermentacja homofermentatywna, brak CO₂); stosowane w produkcji jogurtu, sera, kiszonek. C — Fałsz: biofermentacja ma kluczowe zastosowania farmaceutyczne: penicylina (Penicillium chrysogenum), insulina (E. coli/drożdże), witamina B₁₂ (Propionibacterium), aminokwasy, enzymy przemysłowe.',
    difficulty: 1,
    verified: true,
  },

  // --- Sekwencjonowanie ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.sekwencjonowanie,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nProjekt Poznania Ludzkiego Genomu (Human Genome Project, zakończony w 2003 r.) wykazał, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'ludzki genom zawiera ok. 100 000 genów kodujących białka, proporcjonalnie do liczby białek w organizmie', is_correct: false },
      { id: 'B', text: 'ludzki genom zawiera ok. 20 000–25 000 genów kodujących białka, a ponad 98% genomu stanowi DNA niekodujące białka', is_correct: true },
      { id: 'C', text: 'cały ludzki genom jest aktywnie transkrybowany, a każdy fragment DNA koduje jakiś produkt funkcjonalny', is_correct: false },
      { id: 'D', text: 'sekwencja ludzkiego genomu jest identyczna u wszystkich ludzi — różnice genotypowe nie istnieją', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Human Genome Project ujawnił zaskakujące fakty: ~20 000–25 000 genów kodujących białka (mniej niż oczekiwano — pierwotne szacunki to 100 000+); ponad 98% genomu to DNA niekodujące białka (dawniej zwane "junk DNA") — obejmuje: introny, sekwencje regulatorowe (promotory, enhancery), retrotransposony, satelitarne powtórzenia, pseudogeny; alternatywny splicing i modyfikacje potranslacyjne kompensują małą liczbę genów → proteom o wiele bogatszy niż liczba genów. A — błąd: ok. 20–25 tys., nie 100 tys. C — błąd: nie cały genom jest transkrybowany; D — błąd: polimorfizmy SNP, CNV różnią osoby.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.sekwencjonowanie,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących sekwencjonowania DNA.\nA. Metoda Sangera (dideoksy) polega na syntezie DNA z włączaniem dideoksynukleotydów (ddNTP) kończących elongację — fragmenty rozdzielane są wg rozmiaru.\nB. Sekwencjonowanie nowej generacji (NGS) umożliwia jednoczesne sekwencjonowanie milionów krótkich fragmentów DNA (odczyty), co jest znacznie szybsze i tańsze niż metoda Sangera.\nC. Sekwencjonowanie genomu nowotworu jest dziś stosowane klinicznie wyłącznie do badań naukowych i nie ma zastosowania diagnostycznego.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Metoda Sangera: ddNTP kończą elongację → fragmenty rozdzielane wg rozmiaru.', is_correct: true },
      { id: 'B', text: 'NGS: równoległe sekwencjonowanie milionów fragmentów — szybsze i tańsze niż Sanger.', is_correct: true },
      { id: 'C', text: 'Sekwencjonowanie nowotworów stosowane wyłącznie naukowo — brak zastosowań diagnostycznych.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: metoda Sangera (1977, Nagroda Nobla): ddNTP (brak grupy 3\'-OH) włączone przez polimerazę kończą syntezę → reakcja w 4 probówkach (lub z 4 fluorescencyjnymi ddNTP) → elektroforeza → sekwencja z długości prążków. Złoty standard do ok. 500–1000 pz. B — Prawda: NGS (Next Generation Sequencing): masowe równoległe sekwencjonowanie (MPS) → cały ludzki genom za kilkaset dolarów w ciągu jednego dnia (HGP kosztował ~3 mld USD, trwał 13 lat). C — Fałsz: sekwencjonowanie nowotworów ma kluczowe zastosowania kliniczne: identyfikacja mutacji driver (EGFR, KRAS, BRAF), dobór terapii celowanej (np. inhibitory EGFR w niedrobnokomórkowym raku płuca), śledzenie minimalnej choroby resztkowej (liquid biopsy).',
    difficulty: 2,
    verified: true,
  },

  // --- Bioetyka ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.bioetyka,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nGłównym argumentem przeciwników stosowania organizmów GMO w rolnictwie jest:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'brak udowodnionych korzyści ekonomicznych dla rolników — GMO jest droższe w produkcji niż konwencjonalne odmiany', is_correct: false },
      { id: 'B', text: 'obawy dotyczące niezamierzonych skutków ekologicznych (np. poziomy genów na chwasty przez poziomy przepływ pyłku, wpływ na pożyteczne owady) i koncentracji własności intelektualnej nasion', is_correct: true },
      { id: 'C', text: 'naukowo udowodniona szkodliwość produktów GMO dla zdrowia ludzi i zwierząt przez wyspecjalizowane agencje regulacyjne', is_correct: false },
      { id: 'D', text: 'GMO nie mogą zwiększać plonów ani odporności na suszę, więc nie mają żadnych realnych korzyści', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Debata wokół GMO jest wielowymiarowa. Główne argumenty przeciw (naukowe i społeczne): przepływ genów (gene flow) przez pyłek do dzikich krewnych lub chwastów → "superchwasty" odporne na herbicydy; wpływ na bioróżnorodność i organizmy niebędące celem (np. Bt kukurydza a monarche); monopolizacja rynku nasiennego przez korporacje (patenty na nasiona, zależność rolników); nieprzewidywalne efekty ekosystemowe. C — błąd: główne agencje (EFSA, WHO, FDA) oceniają zatwierdzone produkty GMO jako bezpieczne dla zdrowia; nie istnieją dowody naukowe szkodliwości zatwierdzone przez mainstream science. D — błąd: GM crops wykazują realne korzyści (wyższe plony, odporność na szkodniki, redukcja pestycydów).',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.bioetyka,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących etycznych aspektów biotechnologii.\nA. Klonowanie terapeutyczne (w celu uzyskania komórek macierzystych dla pacjenta) budzi mniejsze kontrowersje etyczne niż klonowanie reprodukcyjne, bo nie prowadzi do narodzin klona.\nB. Badania na embrionach ludzkich są zakazane we wszystkich krajach na świecie, niezależnie od celu badań.\nC. Prawo do informacji genetycznej pacjenta (np. wyniki testów genetycznych) może wchodzić w konflikt z prawem do prywatności i ryzykiem dyskryminacji przez pracodawców lub ubezpieczycieli.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Klonowanie terapeutyczne budzi mniejsze kontrowersje niż reprodukcyjne.', is_correct: true },
      { id: 'B', text: 'Badania na embrionach ludzkich są zakazane we wszystkich krajach.', is_correct: false },
      { id: 'C', text: 'Wyniki testów genetycznych mogą kolidować z prywatnością i ryzykiem dyskryminacji.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: klonowanie terapeutyczne (somatic cell nuclear transfer → blastocysta → komórki macierzyste, nie implantacja) jest kontrowersyjne, ale szeroko dyskutowane jako etycznie możliwe do zaakceptowania przy spełnieniu warunków; klonowanie reprodukcyjne (tworzenie klona-człowieka) jest potępiane przez cały mainstream etyki i zakazane prawnie. B — Fałsz: część krajów (np. Wielka Brytania, Belgia, Szwecja) zezwala na badania na embrionach do 14. dnia rozwoju (reguła 14 dni); inne zakazują. C — Prawda: GINA (Genetic Information Nondiscrimination Act, USA 2008) chroni przed dyskryminacją genetyczną w zatrudnieniu i ubezpieczeniu zdrowotnym — istnieje realny konflikt interesów między wiedzą genetyczną a prawem do prywatności.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.bioetyka,
    question_text: 'Które z poniższych zastosowań biotechnologii są powszechnie uznawane za etycznie akceptowalne i powszechnie stosowane?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Produkcja insuliny ludzkiej przez genetycznie zmodyfikowane bakterie E. coli dla chorych na cukrzycę', is_correct: true },
      { id: 'B', text: 'Szczepionki produkowane metodami rekombinantowymi (np. szczepionka przeciw WZW B, HPV)', is_correct: true },
      { id: 'C', text: 'Klonowanie reprodukcyjne człowieka w celu stworzenia genetycznej kopii wybitnego naukowca', is_correct: false },
      { id: 'D', text: 'Diagnostyczne testy genetyczne identyfikujące predyspozycje do dziedzicznych chorób (np. BRCA1/2 a rak piersi)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Powszechnie akceptowane: insulina rekombinowana (od 1982) jest standardem leczenia cukrzycy na całym świecie — bezpieczna, tania, ludzka sekwencja. B — Szczepionki rekombinantowe są powszechnym i akceptowanym narzędziem profilaktyki: HBV (białko HBs produkowane w drożdżach), HPV (białko L1), szczepionki mRNA COVID-19. D — Testy genetyczne BRCA1/2, APC, MLH1 są standardem w onkologii i genetyce klinicznej — pomagają w profilaktyce i wczesnym wykrywaniu. C — błąd: klonowanie reprodukcyjne człowieka jest zakazane prawnie w praktycznie wszystkich krajach, potępiane przez środowisko naukowe i etyczne — nie jest akceptowanym zastosowaniem biotechnologii.',
    difficulty: 1,
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
  console.log(`Seeding ${questions.length} questions for Biotechnologia...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
