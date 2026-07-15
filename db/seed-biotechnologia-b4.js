// Seed batch 4/6 — Biotechnologia
// Biotechnologia medyczna (4) + Diagnostyka molekularna (6)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '8abfb5fe-655a-44b2-910c-7ffe3ce744a1'

const S = {
  med:  '2801c82b-c3d0-4e23-9b72-4604b20cbfa8',
  diag: 'f4edf8a6-b6f7-4d30-b9ca-5dbcdfeea93c',
}

const questions = [

  // ── BIOTECHNOLOGIA MEDYCZNA (4) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.med, question_type: 'single',
    question_text: 'Komórki macierzyste (stem cells) mają zdolność do samoodnawiania i różnicowania. Które zestawienie POPRAWNIE opisuje typy komórek macierzystych?',
    options: [
      { id: 'A', text: 'Totipotentne (zygota i blastomery do 8-komórkowego stadium): mogą dać KAŻDY typ komórek włącznie z trofoblastem i błonami płodowymi; pluripotentne (ESC z ICM blastocysty, iPSC): mogą dać wszystkie komórki ciała, ale nie trofoblast; multipotentne (HSC, MSC): ograniczone do jednej linii komórkowej', is_correct: true },
      { id: 'B', text: 'Komórki totipotentne to te, które mogą dać wyłącznie jeden typ komórek (np. tylko neurony); pluripotentne mogą dać dwa typy; multipotentne mogą dać wszystkie typy — nazwy są przypisane w odwrotnej kolejności niż zazwyczaj uczy się w biologii', is_correct: false },
      { id: 'C', text: 'Wszystkie komórki organizmu dorosłego są totipotentne po odpowiedniej stymulacji hormonami wzrostu; różnicowanie jest procesem odwracalnym dla każdej komórki bez potrzeby reprogramowania genetycznego', is_correct: false },
      { id: 'D', text: 'Embrionalne komórki macierzyste (ESC) i iPSC są identyczne pod każdym względem i mogą być stosowane zamiennie w każdym zastosowaniu terapeutycznym bez żadnych różnic w skuteczności lub bezpieczeństwie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hierarchia potencji: (1) TOTIPOTENTNE: zygota + blastomery do 4–8 komórek → mogą dać trofoblast (łożysko) + ICM + wszystkie tkanki; (2) PLURIPOTENTNE: ESC (ICM blastocysty d5); iPSC (reprogramowane); EpiSC (epiblast) → 3 listki zarodkowe + wszystkie komórki ciała; nie dają trofoblastu; (3) MULTIPOTENTNE: HSC (hematopoetyczne) → krew; NSC (nerwowe) → neurony, astrocyty, oligodendrocyty; MSC (mezenchymalne) → kość, chrząstka, tłuszcz; (4) OLIGOPOTENTNE: progenitory lin. limfoidalnej (CLP) → T,B,NK; (5) UNIPOTENTNE: progenitory jednego typu (np. keratynocyt epidermalny). ESC vs iPSC: ESC = "autentyczniejsze" pluripotentne; iPSC: reprogramowane (Yamanaka factors), mogą mieć epigenetyczne pamięci tkanki źródłowej; obie stosowane terapeutycznie (iPSC bez etycznych obaw).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.med, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują biofarmaceutyki produkowane metodami biotechnologicznymi? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Hormon wzrostu rekombinowany (somatotropina, rhGH): gen GH ekspresjonowany w E. coli lub komórkach CHO; zastąpił GH wyizolowany z przysadek mózgowych ludzkich zwłok (który powodował chorobę Creutzfeldta-Jakoba)', is_correct: true },
      { id: 'B', text: 'Czynnik krzepnięcia VIII (rFVIII): produkowany przez komórki CHO lub BHK (Baby Hamster Kidney) z genem F8; stosowany w hemofilii A; zastąpił koncentraty z osocza krwi dawców (które powodowały zakażenia HIV i HCV)', is_correct: true },
      { id: 'C', text: 'Interferony alfa, beta i gamma (IFN-α, IFN-β, IFN-γ): rekombinowane; IFN-α stosowany w leczeniu białaczek włochatych i wirusowego zapalenia wątroby C; IFN-β w stwardnieniu rozsianym (SM)', is_correct: true },
      { id: 'D', text: 'Rekombinowane biofarmaceutyki są zawsze identyczne cząsteczkowo z naturalnymi białkami ludzkimi; nie istnieją żadne różnice w glikozylacji ani strukturze trzeciorzędowej między ludzkim białkiem a jego rekombinowaną kopią produkowaną przez E. coli', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) rhGH: przed 1985: GH z ludzkich przysadek → wCJD (wariant choroby CJ, prionowa); Genentech 1985: somatrem (E. coli, Met- na N-końcu) → somatropin (identyczny z ludzkim); dziś: wskazania: niedobór GH u dzieci, dorośli z niedoborem, syndrom Turnera; doping. (B) rFVIII: lata 1980s: zakażenie hemofiliów HIV+HCV przez koncentraty osoczowe; Recombinate (Bayer) 1992; Advate (pełna rekombinacja, brak białek ludzkich/zwierzęcych w procesie produkcji); Hemlibra (emicizumab, bispecific Ab zastępujący F.VIII). (C) IFN-β1a (Avonex, Rebif): produkowane w CHO; IFN-β1b (Betaferon): E. coli; różnice glikozylacji; mechanizm SM: immnomodulacja, zmniejszenie przechodzenia limfocytów przez BBB. (D) fałsz: E. coli: brak glikozylacji (brak ER/Golgi) → białka aglikanowe mogą mieć inne właściwości farmakokinetyczne (krótszy t½, immunogenność); CHO/BHK: glikozylacja ssacza ale nieco różna od ludzkiej (galaktoza-α-1,3-galaktoza u myszy/hamstewrów → allergeny).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.med, question_type: 'single',
    question_text: 'Terapia CRISPR-Casgevy (exagamglogene autotemcel) uzyskała historyczne zatwierdzenie FDA i EMA w 2023 roku. Czego dotyczy?',
    options: [
      { id: 'A', text: 'Casgevy leczy niedokrwistość sierpowatą i talasemię beta: CRISPR-Cas9 ex vivo reaktywuje gen HBG1/HBG2 (hemoglobina płodowa, HbF) w macierzystych komórkach krwiotwórczych pacjenta przez inaktywację represora BCL11A; HbF zastępuje nieprawidłową HbS lub kompensuje brak HbA', is_correct: true },
      { id: 'B', text: 'Casgevy leczy cukrzycę typu 1: CRISPR usuwa gen insuliny w komórkach beta trzustki i zastępuje go zmodyfikowaną wersją produkującą insulinę przy każdym wzroście glukozy bez dodatkowych sygnałów', is_correct: false },
      { id: 'C', text: 'Casgevy leczy raka płuca przez CRISPR-Cas9 edycję komórek T: inaktywacja genów hamujących (PD-1, CTLA-4) w limfocytach T pozwala na silniejszą odpowiedź przeciwnowotworową bez hamowania przez guza', is_correct: false },
      { id: 'D', text: 'Casgevy leczy chorobę Huntingtona: CRISPR edytuje gen HTT w neuronach mózgu po bezpośrednim wstrzyknięciu AAV-Cas9 do płynu mózgowo-rdzeniowego; usunięte zostaje powtórzenie CAG z allelu zmutowanego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Casgevy (Vertex/CRISPR Therapeutics): zatwierdzony FDA 8 grudnia 2023 i EMA 2024 — 1. zatwierdzona terapia CRISPR u ludzi. Mechanizm: (1) aferezia: CD34+ HSC (hematopoetyczne komórki macierzyste) pobrane od pacjenta; (2) CRISPR-Cas9 ex vivo: cięcie enhancera genu BCL11A erytrocytarnego → BCL11A nie tłumi HBG1/HBG2 → reaktywacja genu hemoglobiny płodowej (HbF, γ-globina); (3) mieloablacja (chemioterapia busulfanem = zniszczenie szpiku) → przeszczep zmodyfikowanych HSC; (4) HbF u dorosłych: antypolimeryzacyjne (dla HbS) i kompensuje brak HbA; wyniki kliniczne: brak kryzysu sierpowego u 29/29 pacjentów (SCD) i brak transfuzji u 39/42 pacjentów (TDT). Cena: ~2 mln USD; jednokrotne leczenie.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.med, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących inżynierii tkankowej i medycyny regeneracyjnej:',
    options: [
      { id: 'A', text: 'Biodruk 3D (biofabrykacja) umożliwia tworzenie struktur tkankowych przez warstwowe nanoszenie bioatramentu (komórki + biomateriały jak hydrożele kolagenowe, alginiany); stosowany do tworzenia skóry, chrząstki, a w badaniach — narządów do przeszczepów.', is_correct: true },
      { id: 'B', text: 'Skafold (rusztowanie, scaffold) w inżynierii tkankowej to trójwymiarowa matryca biodegradowalna (np. z polilaktydu PLA, kolagenu, hydroksyapatytu) na którą nanoszone są komórki; skafold stopniowo degraduje się gdy komórki syntetyzują własną macierz zewnątrzkomórkową.', is_correct: true },
      { id: 'C', text: 'Ksenoprzeszczepy (narządy od zwierząt, np. świni, do człowieka) nie wymagają modyfikacji genetycznych ponieważ układ odpornościowy człowieka nie rozpoznaje antygenów powierzchniowych świni jako obcych.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: biodruk 3D: inkjet (krople bioatramentu), extrusion (wyciskanie), stereolitografia (UV-utwardzanie); przykład: Organovo = biodrukowane tkanki wątroby do testowania leków; skóra biodrukowana klinicznie (ATHOS). B — Prawda: biomateriały: PLA (polilaktyd), PLGA, HA (kwas hialuronowy), Matrigel, dekellularyzowane matryce (tkanki oczyszczone z komórek → zostawiona ECM); chrzęstne skafoldowe przeszczepy u psów/koni (Cartilage Engineering). C — Fałsz: ksenoprzeszczepy WYMAGAJĄ silnych modyfikacji genetycznych: (1) usunięcie genów α-1,3-galaktosylotransferazy (GGTA1) — epitop Gal powoduje hiperozstrą odrzucielnię; (2) usunięcie CMAH (N-glikoliloneuraminowy kwas), B4GALNT2; (3) humanizacja: wprowadzenie ludzkich genów: CD46, CD55 (inhibitory dopełniacza), THBD, EPCR (koagulacja), HLA-E/G; przykład: nerka świni genmodifowanej (United Therapeutics) przeszczepiona do człowieka 2021–2024.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── DIAGNOSTYKA MOLEKULARNA (6) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.diag, question_type: 'single',
    question_text: 'Test ELISA (Enzyme-Linked Immunosorbent Assay) jest podstawową techniką diagnostyczną. Które stwierdzenie POPRAWNIE opisuje sandwich ELISA?',
    options: [
      { id: 'A', text: 'Przeciwciało "przechwytujące" (capture Ab) przytwierdzone do studzienki → dodanie próbki (antygen wiąże się) → dodanie przeciwciała "detekcyjnego" (detection Ab, sprzężonego z enzymem) → substrat enzymatyczny → zmiana koloru proporcjonalna do ilości antygenu', is_correct: true },
      { id: 'B', text: 'Antygen przytwierdza się bezpośrednio do przeciwciała w roztworze (nie na płytce); kompleks wiruje przez ultrawirowanie; osad mierzy się spektrofotometrycznie jako metoda ilościowa', is_correct: false },
      { id: 'C', text: 'Sandwich ELISA stosuje wyłącznie jedną klasę enzymów (glukozy izomerazy) do zabarwienia; nie jest możliwa detekcja antygenów o masie < 50 kDa przez sandwich ELISA', is_correct: false },
      { id: 'D', text: 'Sandwich ELISA nie wymaga żadnych przeciwciał; antygen jest wytrącany chlorkiem sodu i bezpośrednio mierzony spektrofotometrycznie w 280 nm bez użycia enzymów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ELISA typy: (1) DIRECT: antygen → płytka; enkubacja z Ab-enzym → substrat → kolor; (2) INDIRECT: antygen → płytka; pierwotne Ab (bez enzymu) → wtórne Ab-enzym → substrat; (3) SANDWICH (najczulszy): capture Ab → płytka; próbka (Ag) → detection Ab-enzym → substrat; (4) COMPETITIVE: Ag w próbce konkuruje z Ag-enzyme za capture Ab → odwrotna proporcja sygnału. Enzymy: HRP (horseradish peroxidase) + TMB (3,3,5,5-tetramethylbenzidine, niebieski) + H₂SO₄ (stop → żółty, 450 nm); AP (alkaline phosphatase) + pNPP (żółty, 405 nm). Zastosowania: anty-HIV ELISA (skrining krwi dawców), anty-SARS-CoV-2 (serologiczne), diagnostyka alergii (IgE specyficzne), hs-CRP, troponina sercowa.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.diag, question_type: 'multiple',
    question_text: 'Które z poniższych technik diagnostyki molekularnej są POPRAWNIE opisane? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'FISH (Fluorescence In Situ Hybridization): znakowane fluorescencyjnie sondy hybrydyzują do chromosomów na preparacie; stosowana do wykrywania aberracji chromosomowych (translokacje, amplifikacje, delecje) np. BCR-ABL w białaczce szpikowej, Her2 w raku piersi', is_correct: true },
      { id: 'B', text: 'Array CGH (Comparative Genomic Hybridization): DNA pacjenta i referencyjne (różne fluorofory) hybrydyzują na mikromacierzy z tysiącami sond genomowych; różnice sygnałów wykrywają zysk lub utratę materiału genetycznego (CNV — copy number variations)', is_correct: true },
      { id: 'C', text: 'Sekwencjonowanie NGS (Next Generation Sequencing, np. Illumina): WGS (cały genom), WES (eksom), panel genów; stosowane w diagnostyce chorób rzadkich, diagnostyce prenatalnej (NIPT), onkogenomice (identyfikacja mutacji somatycznych w nowotworach)', is_correct: true },
      { id: 'D', text: 'Western blot i ELISA wykrywają DNA; służą do identyfikacji sekwencji nukleotydowych w próbkach klinicznych; są stosowane jako alternatywa dla PCR gdy dostępny jest tylko materiał białkowy', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) FISH: interphase lub metaphase chromosomy; dual-color FISH wykrywa translokacje (BCR-ABL t(9;22) = chromosom Filadelfia w CML); break-apart probe: jeden sygnał w normie, dwa rozdzielone przy translokacji; CISH (chromogenic) = wersja barwnikowa. (B) array CGH: 1 Mb → 100 kb → 10 kb rozdzielczość; aCGH zastąpiło tradycyjną kariotypię w diagnostyce chromosomowej wad wrodz.; SNP array: jednocześnie CNV + heterozygotyczność. (C) NGS: Illumina = sekwencjonowanie przez syntezę z fluorescencyjnymi dNTP; ONT (Oxford Nanopore): długie odczyty (>50 kb), bezpośrednie sekwencjonowanie RNA; zastosowania medyczne: mutacje BRCA1/2 (rak piersi/jajnika), KRAS/NRAS/BRAF (nowotwory jelita), TMB (tumor mutational burden) → immunoterapia. (D) fałsz: Western blot i ELISA wykrywają BIAŁKA przez przeciwciała; Southern blot = DNA, Northern blot = RNA; nie są alternatywą dla PCR w analizie DNA/RNA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.diag, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących diagnostyki genetycznej chorób:',
    options: [
      { id: 'A', text: 'Diagnostyka prenatalna inwazyjne (amniocenteza — punkcja płynu owodniowego ok. 15–20 tygodnia ciąży; biopsja kosmówki CVS — ok. 10–13 tygodnia) umożliwia kariotypowanie i analizę DNA płodu; ryzyko poronienia ~0,5–1%.', is_correct: true },
      { id: 'B', text: 'Preimplantacyjna diagnostyka genetyczna (PGD) wykonywana jest na zarodkach po in vitro — biopsia 1–2 komórek trofoblastu lub blastomeru; analiza pod kątem chorób monogenowych (mukowiscydoza, SMA, Huntington) lub aberracji chromosomowych przed transferem do macicy.', is_correct: true },
      { id: 'C', text: 'Testy farmakogenetyczne (np. CYP2C9, CYP2C19, CYP2D6 — geny cytochromu P450) określają metabolizm leków u pacjenta; osoby z wolnym metabolizmem mogą mieć toksyczne stężenia leków przy standardowej dawce, szybkie metabolizatory — zbyt niską skuteczność.', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: amniocenteza: 15–20 tyg., USG-guided, wynik kariotypu 2–3 tyg. (hodowla komórek owodniowych) lub 48h (FISH); CVS: 10–13 tyg., biopsia kosmka łożyskowego; szybszy wynik; ryzyko nieco wyższe. B — Prawda: PGD (Preimplantation Genetic Diagnosis): IVF → fertilizacja → biopsia D3 (8 komórek, 1–2 blastomery) lub D5 (blastocysta, ~10 komórek trofoblastu); PCR (chorob monogenowe) lub NGS/aCGH (PGT-A = aneuploidia testing); transferowane tylko zdrowe zarodki; w Polsce: ograniczona dostępność. C — Prawda: farmakogenetyka / farmakogenomika: CYP2D6: metabolizuje ~25% leków (kodeina, tamoksifen, trójpierścieniowe antydepresanty); PM (poor metabolizer): zagrożenie toksycznością kodeiny; UM (ultrarapid metabolizer): brak efektu. CYP2C19: klopidogrel → PM: brak efektu antyagregacyjnego; CYP2C9: warfaryna; FDA wymaga testów farmakogenetycznych przed przepisywaniem niektórych leków (BRCA diagnostics, HLA-B*5701 przed abacavirem).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.diag, question_type: 'single',
    question_text: 'Mikromacierze DNA (microarrays, DNA chips) stosowane są do analizy ekspresji genów na skalę całego transkryptomu. Na czym polega ta technika?',
    options: [
      { id: 'A', text: 'Na stałym podłożu (szkło, krzem) unieruchomione są tysiące sond oligonukleotydowych (probes); cDNA z próbki (znakowane fluorescencyjnie) hybrydyzuje do komplementarnych sond; intensywność sygnału fluorescencji wskazuje poziom ekspresji każdego genu', is_correct: true },
      { id: 'B', text: 'Mikromacierze mierzą bezpośrednio masę białek przez spektrometię mas; na płytce osadzone są przeciwciała, a białka z próbki wiążą się i są identyfikowane przez masę jonową', is_correct: false },
      { id: 'C', text: 'DNA chip stosuje się wyłącznie do sekwencjonowania — każda sonda odpowiada jednej pozycji w sekwencji, a wynik odczytuje się jak sekwencer automatyczny; zastąpiła metodę Sangera całkowicie', is_correct: false },
      { id: 'D', text: 'Mikromacierze analizują wyłącznie epigenom (metylację DNA); nie mogą być stosowane do analizy poziomu mRNA; w tym celu stosuje się wyłącznie Northern blot', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mikromacierze DNA (Schena et al., 1995, Science): (1) synteza sond (oligonukleotydy 25–70 nt) na powierzchni chipów fotosyntetycznie (Affymetrix) lub spotowanie (Stanford); (2) ekstrakcja mRNA z 2 próbek → cDNA (z fluoroforami Cy3 zielony vs Cy5 czerwony) → hybrydyzacja konkurencyjna; (3) skaner laserowy: intensywność fluorescencji dla każdej sondy → macierz danych; (4) analiza bioinformatyczna: normalizacja (loess, quantile) → geny różnicowo ekspresjonowane (DEG) → heatmapy, klasteryzacja. Zastosowania: porównanie transkryptomu choroba vs zdrowie, efekty leków, subtypy nowotworów; np. PAM50 (chip do klasyfikacji raka piersi → Oncotype DX). Dziś: RNA-seq (NGS) > mikromacierze (wyższa dynamika, bez sond specyficznych).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.diag, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują diagnostykę nowotworów metodami molekularnymi? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Biopsja płynna (liquid biopsy): wykrywanie cfDNA (cell-free DNA), ctDNA (circulating tumor DNA) lub CTC (circulating tumor cells) we krwi pacjenta; umożliwia nieinwazyjny monitoring nowotworu, wykrywanie mutacji oporności bez ponownej biopsji tkanki', is_correct: true },
      { id: 'B', text: 'Onkogenomika: sekwencjonowanie panelu genów nowotworowych (np. BRCA1/2, TP53, EGFR, KRAS, ALK, ROS1, PDL1) w tkance guza pozwala dobrać celowaną terapię (targeted therapy); np. mutacja EGFR → erlotynib; fuzja EML4-ALK → kryzotynib', is_correct: true },
      { id: 'C', text: 'Wskaźniki nowotworowe (tumor markers) jak AFP (rak wątroby/jądra), PSA (rak prostaty), CA-125 (rak jajnika), CEA (rak jelita grubego) mierzone są w surowicy krwi; są stosowane do monitoringu leczenia i wykrywania nawrotu, ale rzadko wystarcząją jako jedyne kryterium diagnostyczne', is_correct: true },
      { id: 'D', text: 'Sekwencjonowanie całego genomu guza (WGS) jest standardem diagnostycznym dostępnym rutynowo we wszystkich szpitalach w Polsce; każdy pacjent onkologiczny ma automatycznie wykonany WGS przed ustaleniem leczenia', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) liquid biopsy: ctDNA (frakcja cfDNA z nowotworu, 0,01–10% cfDNA przy zaawansowanym); mutacje KRAS, EGFR, PIK3CA wykrywane metodą ddPCR lub NGS (ultra-sensitive); CTC: EpCAM+ komórki nowotworowe → CellSearch; zastosowania: MRD (minimalna choroba resztkowa), monitoring rezystencji EGFR T790M (Osimertynib). (B) targeted therapy: EGFR (exon 19 del, L858R) → erlotynib/gefitinib/osimertynib (NSCLC); BRAF V600E → wemurafenib (czerniak); HER2 amp → trastuzumab; TMB (tumor mutational burden) → pembrolizumab; MSI-H → immunoterapia. (C) tumor markers: PSA: skrining kontrowersyjny (FDA zaleca dyskusję); CEA: monitorowanie, nie diagnostyka; AFP: badanie wątroby (marskość/HCC); CA-125: przede wszystkim monitorowanie odpowiedzi na leczenie raka jajnika. (D) fałsz: WGS rutynowo dostępne tylko w ośrodkach referencyjnych/badawczych; standardem jest panel NGS (~50–500 genów); WGS stosowane w badaniach klinicznych, białaczkach kompleksowych; koszt WGS ~500–2000 USD; dostępność ograniczona.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.diag, question_type: 'single',
    question_text: 'Test paskowy (lateral flow assay, LFA) jest przykładem szybkiej diagnostyki punktowej. Jakie zasady leżą u podstaw działania testu paskowego np. na COVID-19?',
    options: [
      { id: 'A', text: 'Próbka (śluz nosowy) + bufor → migracja przez membranę nitrocelulozową; antygen SARS-CoV-2 wiąże się do Ab-koloidalne złoto w strefie koniugatu → kompleks Ag-Ab-złoto migruje → wiązanie z immobilizowanym Ab w linii T (test) → nagromadzenie złota → czerwona linia T; wolne Ab-złoto wiąże Ab w linii C (kontrola) → zawsze czerwona linia C', is_correct: true },
      { id: 'B', text: 'Test paskowy stosuje PCR miniaturowe: próbka migruje przez membranę gdzie osadzone są termostabilne polimerazy; amplifikacja PCR przebiega w kilka minut w temperaturze pokojowej; produkt PCR barwi membranę na czerwono', is_correct: false },
      { id: 'C', text: 'Test paskowy wykrywa DNA wirusa przez bezpośrednią hybrydyzację z sondami znakowanymi złotem; wynik jest w 100% pewny i nigdy nie daje wyników fałszywie pozytywnych lub negatywnych', is_correct: false },
      { id: 'D', text: 'Test paskowy mierzy poziom ciśnienia osmotycznego próbki; wirusy powodują zmiany osmotyczne które wykrywane są przez sensor ciśnieniowy na membranie; wynik wyświetlany jest cyfrowo na wyświetlaczu LED', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Lateral flow assay (LFA): immunochromatografia; struktura: podkładka → koniugat (Ab-złoto koloidalne 40 nm, czerwone) → membrana NC (z linią T i C) → poduszka absorpcyjna. Mechanizm: próbka + bufor → lizuje komórki/wirusy → antygen wolny → migracja kapilarną → w strefie koniugatu: Ab-Au wiąże Ag → kompleks AU-Ab-Ag migruje → linia T: 2. Ab (inny epitop) unieruchomiony → sandwich wiąże kompleks → AU nagromadzone → czerwona linia T (POZYTYWNY); linia C: goat anty-Ab wiąże wolne Ab-Au → zawsze czerwona (walidacja). Pozytywny = 2 linie (T + C); negatywny = 1 linia C; invalid = tylko T lub brak linii. Czułość antygenowych LFA-COVID: ~50–80% vs RT-qPCR; specyficzność >99%; zastosowanie: skrining populacyjny.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: {
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => {
      let r = ''; res.on('data', c => r += c)
      res.on('end', () => resolve({ status: res.statusCode, body: r }))
    })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding batch 4 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
