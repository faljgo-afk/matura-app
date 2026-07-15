// Seed batch 3/6 — Biotechnologia
// Klonowanie genów (1) + Organizmy GMO (6) + Biotechnologia medyczna (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '8abfb5fe-655a-44b2-910c-7ffe3ce744a1'

const S = {
  klon: '5e7ee9ea-3144-4dc7-9f99-b8ca1c38c049',
  gmo:  '2628cff0-d8c2-42cb-ab4c-60c609063091',
  med:  '2801c82b-c3d0-4e23-9b72-4604b20cbfa8',
}

const questions = [

  // ── KLONOWANIE GENÓW — ostatnie (1) ──────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.klon, question_type: 'single',
    question_text: 'Technika Gibson Assembly umożliwia łączenie wielu fragmentów DNA bez użycia restryktaz. Na czym polega?',
    options: [
      { id: 'A', text: 'Fragmenty DNA z nakładającymi się końcami (~20–40 nt homologii) inkubowane są jednocześnie z: eksonukleazą 5\'→3\' (odsłania jednoniciowe końce), polimerazą DNA (wypełnia luki) i ligazą DNA (uszczelnia nacięcia); łączone jest do 15 fragmentów w jednej reakcji', is_correct: true },
      { id: 'B', text: 'Gibson Assembly stosuje specjalną modyfikowaną Taq polimerazę z aktywnością ligazy; działa wyłącznie w temperaturze 72°C; nie wymaga żadnych dodatkowych enzymów ani homologicznych końców', is_correct: false },
      { id: 'C', text: 'Fragmenty DNA cięte są specjalną ligasą DNA Gibson (odkrytą przez J. Gibsona) która tnie i łączy DNA jednocześnie; enzymy restrykcyjne są wymagane jako kofaktory', is_correct: false },
      { id: 'D', text: 'Gibson Assembly to technika wyłącznie in silico (komputerowa); nie wymaga fizycznej pracy z DNA i służy wyłącznie do projektowania sekwencji przed tradycyjnym klonowaniem', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Gibson Assembly (Gibson et al., Nature Methods 2009): jednoetapowa, izotemperaturalna (50°C) metoda klonowania. Mieszanina Master Mix: (1) T5 eksonukleaza 5\'→3\': degraduje 5\' końce → odsłania jednoniciowe 3\' końce z homologią; (2) Phusion polimeraza DNA (high-fidelity): wypełnia luki; (3) Taq ligaza: uszczelnia nacięcia przy 50°C; fragmenty z ~20 nt nakładającymi się końcami → jednoetapowe łączenie. Zalety: brak ograniczeń restrykcyjnych, do 15 fragmentów jednocześnie, blizny minimalne; Wady: wymaga zaprojektowania primerów z nakładkami; drogie enzymy. Inne metody bezrestrykcyjne: Gateway (rekombinacja lambda), TOPO cloning, ligation-independent cloning (LIC).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── ORGANIZMY GMO (6) ─────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.gmo, question_type: 'single',
    question_text: 'Kukurydza Bt jest genetycznie zmodyfikowaną rośliną odporną na szkodniki. Co oznacza skrót "Bt" i jaki jest mechanizm działania?',
    options: [
      { id: 'A', text: 'Bt = Bacillus thuringiensis; gen cry kodujący białko Cry (delta-endotoksyna/Bt toksyna) wprowadzony do genomu kukurydzy; Bt toksyna jest aktywowana w alkalicznym środowisku jelita larw owadów (pH 9–10) → wiąże się do receptorów nabłonka jelitowego → tworzy pory → paraliż i śmierć larwy', is_correct: true },
      { id: 'B', text: 'Bt = biotechnologia; kukurydza Bt produkuje własny herbicyd glifosatowy który niszczy chwasty otaczające uprawę; sama kukurydza jest odporna bo zawiera zmodyfikowaną EPSPS', is_correct: false },
      { id: 'C', text: 'Bt = beta-toksyna; kukurydza Bt produkuje silny neurotoksyn działający na owady dorosłe i larwy; toksyna aktywna w kwaśnym środowisku żołądka ssaków → enzymy trawienne je inaktywują → bezpieczna dla ludzi z podobnych powodów', is_correct: false },
      { id: 'D', text: 'Bt = białko transportowe; kukurydza Bt produkuje specjalne białka transportujące, które wychwytują toksyny z gleby i wydzielają je przez korzenie; toksyny te działają na owady glebowe, ale nie na szkodniki nadziemne', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Kukurydza Bt (cry1Ab, cry1Ac, cry3Bb etc.): (1) Bacillus thuringiensis: glebowa bakteria produkująca białka Cry w postaci kryształków (protoksyny, 130–140 kDa); (2) w alkach. jelicie larwy (pH 9): proteazy aktywują protoksynę → toksyna aktywna (65 kDa); (3) toksyna Cry wiąże się do receptorów kadherynowych lub aminopeptydaz N nabłonka jelitowego → oligomeryzacja → wstawienie do błony → kationowe pory → osmotyczny szok → śmierć komórek → śmierć larwy; (4) specyficzność: receptory tylko u larw Lepidoptera (motyle)/Coleoptera/Diptera; ssaki: brak alkalicznego środowiska jelita + brak receptorów; (5) zastosowania rolnicze: ograniczenie pestycydów chemicznych; problem: oporność owadów (refugia = pasy niezmodyfikowanej kukurydzy).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gmo, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują organizmy GMO stosowane w rolnictwie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Soja Roundup Ready: gen EPSPS z bakterii Agrobacterium sp. str. CP4 (odporna na glifosat) wprowadzony do soi; soja toleruje herbicyd glifosat (Roundup), który niszczy chwasty; EPSPS = enzym szlaku szikimowego syntezy aminokwasów aromatycznych', is_correct: true },
      { id: 'B', text: 'Złoty ryż (Golden Rice): geny biosyntezy beta-karotenu (phytoene synthase z narcyza + carotene desaturase z bakterii) wprowadzone do bielma ryżu; ziarno ma żółty kolor i zawiera prowitaminę A; adresuje niedobór witaminy A w krajach rozwijających się', is_correct: true },
      { id: 'C', text: 'Bawełna Bt (Bollgard): gen cry1Ac → toksyna Bt w tkankach rośliny → ochrona przed bawełniakiem (Helicoverpa armigera, H. zea); zredukowane zużycie insektycydów chemicznych; uprawiana komercyjnie od 1996 r.', is_correct: true },
      { id: 'D', text: 'Wszystkie organizmy GMO są identycznie modyfikowane przez wprowadzenie tych samych genów; nie ma możliwości stworzenia roślin GMO odpornych na choroby grzybowe lub wirusowe — jedyną modyfikacją jest oporność na owady lub herbicydy', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) EPSPS (5-enolpyruvoylshikimate-3-phosphate synthase): glifosat inhibuje EPSPS roślinne → brak fenyloalaniny, tyrozyny, tryptofanu → śmierć; CP4-EPSPS: low affinity dla glifosatu → aktywna → soja przeżywa. (B) Golden Rice 1 (Ye et al. 2000): ryż z PSY (phytoene synthase) z narcyza + CrtI (carotene desaturase) z E. uredovora; Golden Rice 2 (PSY z kukurydzy): 23× więcej beta-karotenu; kontrowersje regulacyjne w SE Azji. (C) Bollgard (Monsanto) 1996: zredukowanie Helicoverpa o 80%; Bollgard II: cry1Ac + cry2Ab → szersze spektrum + opóźnienie oporności. (D) fałsz: istnieje wiele typów GMO: odporność na wirusy (papaja Ringspot Virus Resistant od 1998); oporność na grzyby (pszenica z genem Lr34 odporności na rdze); tolerancja suszy (DREB geny); wzbogacenie odżywcze; produkcja biofarmaceutyków.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gmo, question_type: 'single',
    question_text: 'W Polsce i UE obowiązują przepisy dotyczące znakowania żywności GMO. Które stwierdzenie POPRAWNIE opisuje te regulacje?',
    options: [
      { id: 'A', text: 'W UE żywność zawierająca składniki z GMO w ilości powyżej 0,9% musi być obowiązkowo oznakowana; próg 0,9% dotyczy przypadkowej lub technicznie nieuniknionej obecności GMO; celowe używanie GMO musi być znakowane bez progu', is_correct: true },
      { id: 'B', text: 'W UE żywność GMO jest całkowicie zakazana i nie może być importowana ani sprzedawana; wszystkie uprawy GMO są nielegalne we wszystkich krajach UE bez wyjątku', is_correct: false },
      { id: 'C', text: 'Znakowanie GMO w UE jest dobrowolne; producenci mogą oznaczyć produkt jako GMO lub nie-GMO według własnego uznania; nie ma żadnych progów ani obowiązkowych wymagań', is_correct: false },
      { id: 'D', text: 'Próg znakowania GMO w UE wynosi 10%; produkty z < 10% składników GMO nie muszą być znakowane; powyżej 10% znakowanie jest wymagane na opakowaniu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Regulacje UE dotyczące GMO: Rozporządzenie (WE) Nr 1829/2003 i 1830/2003: (1) znakowanie obowiązkowe dla żywności/pasz z ≥0,9% składników GMO (w każdym składniku osobno); (2) < 0,9%: zwolnienie jeśli przypadkowa/nieunikniona technicznie obecność; (3) celowe użycie: znakowanie niezależnie od ilości; (4) autoryzacja: każda odmiana GMO wymaga osobnej autoryzacji przez EFSA + Komisję EU; (5) 2023: nowe regulacje NGT (New Genomic Techniques, np. CRISPR): propozycja łagodniejszych reguł dla NGT1 (edycja bez obcego DNA); kontrowersyjne. Polska: implementacja UE + zakaz komercyjnej uprawy GM kukurydzy MON 810. USA: USDA Bioengineered Food Disclosure Standard (2022): znakowanie "Bioengineered" lub QR kod.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gmo, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących GMO w środowisku:',
    options: [
      { id: 'A', text: 'Główną obawą ekologiczną związaną z GMO jest możliwość przepływu genów (gene flow) z upraw GMO do dzikich krewniaków lub tradycyjnych odmian przez pyłek; może to prowadzić do niekontrolowanego rozprzestrzenienia cech (np. oporności na herbicydy) w populacjach dzikich roślin.', is_correct: true },
      { id: 'B', text: 'Uprawy GMO odporne na owady (Bt) mogą przyczyniać się do redukcji populacji owadów niebędących szkodnikami (np. motyli monarszych) jeśli te żywią się na roślinach GMO lub w ich pobliżu; badania wskazują na możliwe efekty pozadocelowe.', is_correct: true },
      { id: 'C', text: 'Powszechna zgoda naukowa (WHO, EFSA, NAS) stwierdza, że żywność GMO zatwierdzona do spożycia jest równie bezpieczna jak konwencjonalna; nie wykazano w kontrolowanych badaniach szkodliwości konsumpcji żywności GMO dla zdrowia ludzi.', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: gene flow przez pyłek udokumentowany dla rzepaku GMO (Brassica napus) i dzikich Brassica; superchwasty (resistant weeds) przez krzyżowanie; oporność na glifosat u chwastów na polach Roundup Ready (Amaranthus palmeri, Kochia scoparia). B — Prawda: kontrowersje motyla monarszego (Losey et al. 1999, Nature): pyłek Bt na milkweed (żywiciel larw monarcha) → śmiertelność lab; badania polowe: efekt ograniczony, ale możliwe negatywne wpływy przy uprawach blisko siedlisk monarcha. C — Prawda: konsensus naukowy popierają: WHO, EFSA, NAS (National Academies of Sciences 2016: 900 stron analizy), American Medical Association; GMO zatwierdzone przez EFSA bezpieczne dla człowieka i środowiska w warunkach zatwierdzonego użycia; obawy społeczne są uzasadnione ekologicznie (gene flow, bioróżnorodność) ale nie toksykologicznie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gmo, question_type: 'multiple',
    question_text: 'Które z poniższych są przykładami GMO stosowanych poza rolnictwem? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Insulina ludzka produkowana przez E. coli lub drożdże Saccharomyces cerevisiae z genem insuliny ludzkiej (od 1982 r., Humulin); zastąpiła insulinę zwierzęcą (wieprzową/bydlęcą) w leczeniu cukrzycy', is_correct: true },
      { id: 'B', text: 'Erytropoetyna (EPO) produkowana przez komórki CHO z genem ludzkim EPO; stosowana do leczenia niedokrwistości w chorobach nerek i w onkologii; nadużywana przez sportowców (doping krwi)', is_correct: true },
      { id: 'C', text: 'Chymozyna (rennina) do produkcji sera: gen cielęcej chymozyny ekspresjonowany w drożdżach Kluyveromyces marxianus lub Aspergillus niger; zastąpiła podpuszczkę zwierzęcą; ok. 80–90% twardych serów produkowanych z rekombinowaną chymozyną', is_correct: true },
      { id: 'D', text: 'Antybiotyki (penicylina, streptomycyna, tetracyklina) są produkowane przez genetycznie zmodyfikowane bakterie E. coli z wprowadzonymi genami syntezy antybiotyków; naturalne grzyby i bakterie nie mogą produkować antybiotyków w ilościach przemysłowych', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) insulina: Eli Lilly + Genentech 1982: gen insuliny A i B łańcucha klonowany w E. coli → osobna produkcja → połączenie; lub proinsulin → enzymatyczna obróbka; Novo Nordisk: drożdże S. cerevisiae → proinsulin → enzymy → insulina; wcześniej: wyodrębnianie z trzustki świń/krów (alergeny, mała ilość). (B) EPO (erytropoetyna): glikoproteina 165 aa; CHO (konieczna N-glikozylacja: długi t½); Amgen Epoetin alfa (Epogen) 1989; problem dopingowy: autologiczne transfuzje zastąpione egz. EPO; WADA: testy krwi + immunoassay. (C) chymozyna (EC 3.4.23.4): zamiast wyekstrahowania żołądka cielęcego → rekombinowana; Fermentation Produced Chymosin (FPC); status GRAS (Generally Recognized As Safe) w USA; wegetariańskie/koszerne produkty. (D) fałsz: antybiotyki produkowane NATURALNIE przez grzyby (Penicillium → penicylina, Fleming 1928) i bakterie (Streptomyces → streptomycyna, tetracyklina); fermentacja przemysłowa z naturalnymi, ewentualnie mutagenizowanymi (nie GMO) szczepami; nadprodukcja przez selekcję szczepów, optymalizację podłoża.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gmo, question_type: 'single',
    question_text: 'Świnie transgeniczne z genem ludzkiej alfa-1-antytrypsyny (AAT) produkują to białko w mleku. Które stwierdzenie POPRAWNIE opisuje tę technologię?',
    options: [
      { id: 'A', text: 'Gen AAT pod kontrolą promotora specyficznego dla gruczołu mlekowego (np. beta-kazeinowego) ekspresjonowany jest wyłącznie w gruczole mlekowym; AAT wydzielana jest do mleka i może być oczyszczana; stosowana w leczeniu niedoboru AAT (emfizema płuc)', is_correct: true },
      { id: 'B', text: 'Świnie produkują AAT we wszystkich komórkach ciała jednocześnie; białko akumuluje się w mięśniach i jest spożywane przez ludzi jako "lek mięsny"; nie może być wydzielane do mleka ponieważ gruczoły mlekowe to tkanki specjalne niepodlegające transgenezji', is_correct: false },
      { id: 'C', text: 'Świnie transgeniczne wytwarzają AAT syntetycznie z aminokwasów pobranych z paszy; nie ma żadnego obcego genu — białko jest produkowane przez naturalną biochemię trzody po podaniu specjalnego karmu zawierającego pre-AAT', is_correct: false },
      { id: 'D', text: 'AAT jest białkiem produkowanym przez wątrobę człowieka i nie może być produkowana przez świnie niezależnie od wprowadzonych genów z powodu nieodpowiedniego środowiska biochemicznego gruczołu mlekowego świni', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Farmingi molekularne (molecular pharming, biopharming): produkcja białek terapeutycznych przez zwierzęta transgeniczne lub rośliny. Świnia ATryn/AAT: PPL Therapeutics (Edynburg, ta sama firma co owca Dolly); transgeny pod promotorem beta-laktoglobuliny lub kappa-kazeiny → tkankowa specyficzność ekspresji tylko w gruczole mlekowym → sekrecja do mleka. Zalety: łatwe oczyszczanie z mleka (tanie, skalowalne), prawidłowe fałdowanie i glikozylacja (ssacze komórki). AAT (alfa-1-antytrypsyna): inhibitor proteaz serynowych; niedobór → rozedma płuc (emphysema); leczenie: tygodniowe wlewy oczyszczonej AAT. Inne: ATryn (antytrombina III z kozy transgend.) = 1. lek z pharming zatwierdz. w EU 2006. Rośliny: bananowe, ziemniaczane szczepionki (edible vaccines) → jadalne antygeny.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── BIOTECHNOLOGIA MEDYCZNA (3) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.med, question_type: 'single',
    question_text: 'Terapia genowa polega na wprowadzeniu do komórek pacjenta prawidłowej kopii genu lub modyfikacji wadliwego genu. Które stwierdzenie POPRAWNIE opisuje terapię genową in vivo i ex vivo?',
    options: [
      { id: 'A', text: 'In vivo: wektor terapeutyczny (AAV, LNP-mRNA) podawany bezpośrednio do organizmu pacjenta; ex vivo: komórki pobrane od pacjenta → transdukcja/transfekcja wektorem poza organizmem → selekcja zmodyfikowanych komórek → przeszczep z powrotem do pacjenta; ex vivo bezpieczniejsza, ale droższa', is_correct: true },
      { id: 'B', text: 'Terapia genowa in vivo oznacza leczenie całego organizmu przez inhalację; ex vivo to terapia wyłącznie jelita grubego; obydwie metody wymagają chirurgicznego usunięcia chorych narządów przed zastosowaniem wektora', is_correct: false },
      { id: 'C', text: 'In vivo i ex vivo to synonimy — oznaczają tę samą procedurę wykonywaną w warunkach szpitalnych; różnica polega wyłącznie na tym, czy pacjent jest znieczulony (in vivo) czy przytomny (ex vivo)', is_correct: false },
      { id: 'D', text: 'Terapia genowa nie może być stosowana do leczenia chorób genetycznych ponieważ nie istnieje możliwość wprowadzenia DNA do jądra komórkowego żywego organizmu — tylko komórki w hodowli mogą przyjmować obcy DNA', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Terapia genowa: (1) IN VIVO: wektor podawany bezpośrednio: AAV (adeno-associated virus, nie integruje, episomalna; Zolgensma — SMA; Luxturna — wrodzona ślepota RPE65; Hemgenix — hemofilia B); LNP-mRNA (lipidowe nanocząstki + mRNA: terapia TTR amyloidozy, szczepionki COVID-19 mRNA); retrowirusy (integracja — ryzyko insertional mutagenesis). (2) EX VIVO: pobieranie komórek macierzystych (HSC z szpiku) → transdukcja lentiwirusowa → selekcja + klonalna selekcja → infuzja; stosowane w: SCID-X1, ADA-SCID, talasemia beta (Zynteglo), niedokrwistość sierpowata (Casgevy: CRISPR ex vivo); wymagana chemioterapia przygotowawcza; drogie (>1 mln EUR). Terapia komórkowa CAR-T: ex vivo inżynieria limfocytów T z chimerycznym receptorem antygenowym → białaczki.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.med, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują szczepionki mRNA (np. przeciw COVID-19)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Szczepionki mRNA (BNT162b2 Pfizer/BioNTech, mRNA-1273 Moderna) zawierają syntetyczne mRNA kodujące białko S (spike) SARS-CoV-2 zamknięte w lipidowych nanocząstkach (LNP); mRNA nie wchodzi do jądra i nie integruje z genomem', is_correct: true },
      { id: 'B', text: 'Po podaniu: LNP fuzjonują z błoną komórkową → mRNA uwolniony do cytoplazmy → translacja → białko S produkowane przez komórki → prezentacja przez MHC → aktywacja limfocytów T i B → pamięć immunologiczna', is_correct: true },
      { id: 'C', text: 'mRNA szczepionkowe jest zmodyfikowane (pseudourydyna zamiast urydyny): modyfikacja redukuje aktywację wrodzonego układu odpornościowego (IFN-α, TNF) i zwiększa stabilność mRNA; odkrycie Karikó & Weissman (Nobel 2023)', is_correct: true },
      { id: 'D', text: 'Szczepionki mRNA COVID-19 zmieniają DNA człowieka przez odwrotną transkrypcję; mRNA jest przepisywane na DNA przez naturalną odwrotną transkryptazę obecną we wszystkich komórkach człowieka', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) LNP (lipid nanoparticles): jonowe lipidy kationowe (ALC-0315 u Pfizer) + pomocnicze (DSPC, cholesterol, PEG-lipid) → samorzutna enkapsulacja mRNA; dostarczane domięśniowo; termin przechowywania: -70°C (Pfizer) lub -20°C (Moderna); modRNA (modified RNA). (B) mechanizm: endocytoza LNP → endosom → uciecz do cytoplazmy → rybosomy translatują mRNA → białko S (z 2 Pro mutacjami = stabilizowane prefusion) → prezentacja MHC-I/II → CTL + Th + B → IgG anty-S → pamięć 6+ miesięcy. (C) Karikó & Weissman 2005 (University of Pennsylvania): N1-metylopseudourydyna (m1Ψ) zamiast U → nie aktywuje TLR3, TLR7, TLR8 → brak szybkiej degradacji; wyższy poziom ekspresji białka; Nobel 2023: Physiology or Medicine. (D) fałsz: mRNA → DNA wymaga enzymu odwrotnej transkryptazy; ludzkie komórki somatyczne nie mają aktywnej RT; mRNA degraduje się w ciągu dni; brak mechanizmu integracji; SARS-CoV-2 mRNA nie jest odwrotnie transkrybowane do DNA w komórkach.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.med, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących biotechnologii medycznej:',
    options: [
      { id: 'A', text: 'Przeciwciała monoklonalne (MAbs) produkowane przez hybrydomy (fuzja limfocytu B z komórką szpiczaka mieloma) są monospecyficzne — każde MAb rozpoznaje jeden konkretny epitop; stosowane w leczeniu nowotworów (trastuzumab — Her2, rituximab — CD20), chorób autoimmunologicznych i diagnostyce.', is_correct: true },
      { id: 'B', text: 'Terapia CAR-T: limfocyty T pacjenta modyfikowane ex vivo wektorem lentiwirusowym kodującym chimeryczny receptor antygenowy (CAR) skierowany przeciw antygenowi nowotworowemu (CD19 w białaczkach B); zmodyfikowane T-komórki namnażane i podawane dożylnie.', is_correct: true },
      { id: 'C', text: 'Diagnostyka prenatalna metodą NIPT (Non-Invasive Prenatal Testing) polega na analizie komórek płodu pobranych przez nakłucie macicy igłą (inwazyjnie); poszukuje się chromosomów płodu w próbce tkankowej macicy.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: hybrydomy: Köhler & Milstein 1975 (Nobel 1984); limfocyt B + szpiczak HAT-wrażliwy → hybrydom (nieśmiertelny + produkuje Ab); humanizowane MAbs (sufiks -zumab: cząstka ludzka + CDR mysia); w pełni ludzkie (sufiks -umab: YTE); trastuzumab (Herceptin) → anty-Her2/neu → rak piersi HER2+; rituximab → anty-CD20 → chłoniaki B, RZS. B — Prawda: Kymriah (tisagenlecleucel, Novartis) + Yescarta (axicabtagene ciloleucel, Kite/Gilead): CD19 CAR-T; remisja ALL (Acute Lymphoblastic Leukemia) u dzieci: 80%; duże koszty (>400 tys. USD); działania niepożądane: cytokine release syndrome (CRS). C — Fałsz: NIPT = NIEINWAZYJNA: analiza cfDNA płodowego (cell-free fetal DNA) w krwi matki (bez nakłucia); cfDNA pochodzi od łożyska; sekwencjonowanie NGS → wykrywanie trisomii (T21, T18, T13) i aneuploidii płciowych; czułość >99% dla T21; nie wymaga nakłucia macicy (amniocenteza = inwazyjna, stosowana przy potwierdzeniu).',
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
  console.log(`Seeding batch 3 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
