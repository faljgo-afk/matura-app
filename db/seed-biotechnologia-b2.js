// Seed batch 2/6 — Biotechnologia
// PCR i elektroforeza (5) + Klonowanie genów (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '8abfb5fe-655a-44b2-910c-7ffe3ce744a1'

const S = {
  pcr:  'e2a9978b-d943-439a-abc7-f411778757c1',
  klon: '5e7ee9ea-3144-4dc7-9f99-b8ca1c38c049',
}

const questions = [

  // ── PCR I ELEKTROFOREZA (5) ────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.pcr, question_type: 'single',
    question_text: 'Elektroforeza żelowa DNA pozwala rozdzielić fragmenty DNA według ich wielkości. Na jakiej zasadzie odbywa się ten rozdział?',
    options: [
      { id: 'A', text: 'DNA jest ujemnie naładowany (grupy fosforanowe) i migruje w polu elektrycznym ku anodzie (+); mniejsze fragmenty migrują szybciej przez pory żelu agarozowego niż większe; pozycja w żelu ujawniana bromkiem etydyny (EtBr) lub SYBR Safe pod UV', is_correct: true },
      { id: 'B', text: 'DNA jest dodatnio naładowany (zasady purynowe) i migruje ku katodzie (−); większe fragmenty migrują szybciej ponieważ mają więcej zasad i więcej ładunku dodatniego napędzającego ruch', is_correct: false },
      { id: 'C', text: 'Rozdział odbywa się na podstawie zawartości G+C: fragmenty bogate w GC (mocniejsze wiązania) migrują szybciej, bo ich helisa jest stabilniejsza i cząsteczka bardziej kompaktowa', is_correct: false },
      { id: 'D', text: 'Elektroforeza rozdziela fragmenty DNA według masy atomowej poszczególnych zasad; adenina (A) migruje inaczej niż tymina (T); metoda pozwala odczytać sekwencję DNA bezpośrednio z żelu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Elektroforeza żelowa DNA (agarose gel electrophoresis): (1) DNA: ładunek ujemny (grupy fosforanowe, pKa ~1) → migracja ku anodzie (+) w buforze TBE lub TAE; (2) żel agarozowy: sieć polimerowa o regulowanych porach (0,5–3% → fragmenty 50 bp–50 kb); (3) rozdział: trzy parametry = rozmiar (mniejsze szybciej), kształt (liniowy > otwarty kolisty > superscrolled), ładunek (stały dla dsDNA → nie różnicuje); (4) wizualizacja: EtBr (interkaluje w dsDNA, fluorescencja 590 nm, mutagenny) lub SYBR Safe (bezpieczniejszy); (5) marker (DNA ladder) = mix fragmentów o znanych rozmiarach. Szybkość × 1/log(L), gdzie L = rozmiar fragmentu [bp].',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.pcr, question_type: 'single',
    question_text: 'Southern blotting jest techniką hybrydyzacji do wykrywania specyficznych sekwencji DNA. Na czym polega ta technika?',
    options: [
      { id: 'A', text: 'DNA trawiony restryktazami → elektroforeza żelowa → przeniesienie (blotting) na membranę nylonową → denaturacja → hybrydyzacja ze znakowaną sondą komplementarną do szukanej sekwencji → wizualizacja (autoradiografia lub chemiluminescencja)', is_correct: true },
      { id: 'B', text: 'RNA rozdzielany elektroforezą → przeniesienie na membranę → hybrydyzacja z sondą DNA; technika stosowana do wykrywania specyficznych sekwencji RNA (mRNA)', is_correct: false },
      { id: 'C', text: 'Białka rozdzielane SDS-PAGE → przeniesienie na membranę PVDF → inkubacja z przeciwciałem pierwszorzędowym → przeciwciało drugorzędowe sprzężone z enzymem → wizualizacja; stosowana do wykrywania białek', is_correct: false },
      { id: 'D', text: 'Southern blotting to technika amplifikacji PCR prowadzona bezpośrednio na żelu agarozowym; produkty PCR wizualizowane są in situ bez potrzeby przenoszenia na membranę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Rodzina blottingów: (1) Southern blot (E.M. Southern, 1975): DNA → mem; (2) Northern blot: RNA → mem; (3) Western blot: białka (SDS-PAGE) → mem; (4) Eastern blot: modyfikacje potranslacyjne. Procedura Southern: trawienie restryktazą → żel agarozowy → denaturacja NaOH → transfer kapilary lub próżniowy → membrana (nitroceluloza lub nylon) → utrwalenie UV → hybrydyzacja z sondą (nick translation lub random primer z ³²P, DIG, biotyna) w T ~Tm-25°C → wash (niestringentny→stringentny) → detekcja. Zastosowania: analiza RFLP (restriction fragment length polymorphism), potwierdzenie integracji transgenu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.pcr, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących elektroforezy i analizy DNA:',
    options: [
      { id: 'A', text: 'PAGE (polyacrylamide gel electrophoresis) stosowana jest do rozdziału małych fragmentów DNA (<500 bp) lub RNA z wyższą rozdzielczością niż żel agarozowy; żel poliakrylamidowy ma mniejsze pory i rozdziela fragmenty różniące się nawet 1 parą zasad.', is_correct: true },
      { id: 'B', text: 'PFGE (pulsed-field gel electrophoresis) umożliwia rozdział bardzo dużych fragmentów DNA (50 kb–10 Mb, np. całe chromosomy); pole elektryczne zmienia kierunek pulsami, co pozwala na migrację dużych cząsteczek przez żel.', is_correct: true },
      { id: 'C', text: 'Żel agarozowy i poliakrylamidowy rozdzielają DNA wyłącznie na podstawie sekwencji nukleotydów; dwa fragmenty o takiej samej długości w parach zasad (bp) zawsze migrują z identyczną prędkością niezależnie od swojej sekwencji.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: PAGE np. w sekwencjonowaniu Sangera (denaturujące PAGE-urea) rozdziela oligonukleotydy różniące się o 1 nt; sekwencjonowanie SSCP (single-strand conformation polymorphism); PAGE natywna (bez SDS) rozdziela białka wg ładunku i kształtu. B — Prawda: PFGE (Chu, 1984): zmieniający się kierunek pola elektrycznego (kąt 120°, 60°, alternujące) → cząsteczki DNA muszą się reorientować → czas reorientacji ∝ rozmiaru; stosowana w typowaniu epidemiologicznym bakterii (MRSA, Salmonella) — "gold standard" typowania; rozdziela chromosomy drożdży 200 kb–2 Mb. C — Fałsz: migracja w żelu zależy od rozmiaru I kształtu: (1) supercoiled DNA migruje szybciej niż liniowe tej samej długości; (2) DNA bogate w GC nieznacznie różni się w TEMPERATURZE denaturacji ale nie w migracji w standardowej elektroforezie; (3) sekwencja wpływa na krzywiznę DNA (curved DNA migruje wolniej niż proste tej samej długości).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.pcr, question_type: 'multiple',
    question_text: 'Które z poniższych zastosowań PCR są POPRAWNIE opisane? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Diagnostyka chorób zakaźnych: PCR wykrywa DNA/RNA patogenu (wirusów, bakterii, pierwotniaków) nawet przy bardzo małej liczbie kopii; np. diagnoza gruźlicy (M. tuberculosis), COVID-19 (RT-qPCR), HIV (viral load)', is_correct: true },
      { id: 'B', text: 'Analiza DNA sądowa (forensic DNA): STR (short tandem repeats) amplifikowane wieloma primerami jednocześnie (multiplex PCR); profil STR jest unikalny dla każdej osoby i stosowany do identyfikacji sprawców, ofiar i ustalania ojcostwa', is_correct: true },
      { id: 'C', text: 'Paleogenetyka: PCR umożliwia amplifikację starożytnego DNA (aDNA) z próbek sprzed tysięcy lat (kości mamutów, neandertalczyków, starożytnych ludzi); wymagane szczególne warunki sterylności dla uniknięcia kontaminacji', is_correct: true },
      { id: 'D', text: 'PCR może amplifikować wyłącznie fragmenty krótsze niż 200 pz (par zasad); dłuższe sekwencje muszą być klonowane tradycyjnymi metodami do plazmidów zanim będą mogły być amplifikowane', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) diagnostyka: czułość RT-qPCR = detekcja 1–10 kopii; COVID-19: target: gen E, N, RdRp; HIV viral load: określenie liczby kopii RNA/mL → monitorowanie leczenia. (B) STR (microsatellites): powtórzenia 2–6 nt np. (AGAT)n; 13–20 loci multipleksem → profil kombinatorycznie unikalny; baza CODIS (FBI); prawdopodobieństwo fałszywego dopasowania < 10⁻¹⁰. (C) aDNA: wysoce sfragmentowane, zmodyfikowane chemicznie (deaminacja → C→U); specjalne biblioteki; sekwencjonowanie NGS > PCR obecnie; genom Neandertalczyka 2010 (Pääbo, Nobel 2022). (D) fałsz: long-range PCR amplifikuje do 20+ kb (np. dla analizy mitochondrialnego DNA 16,5 kb); Long PCR kit (Roche, NEB) z polimerazą korekcyjną (Pfu, Q5) + niższa temperatura elongacji + dłuższy czas.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.pcr, question_type: 'single',
    question_text: 'Metoda RFLP (Restriction Fragment Length Polymorphism) jest stosowana w genetyce populacyjnej i diagnostyce. Na czym polega?',
    options: [
      { id: 'A', text: 'Mutacje punktowe lub insercje/delecje mogą tworzyć lub niszczyć miejsca restrykcyjne; różne allele genu dają różne wzory fragmentów po trawieniu restryktazą i elektroforezie; każda osoba ma charakterystyczny wzór prążków (RFLP marker)', is_correct: true },
      { id: 'B', text: 'RFLP mierzy długość telomerów metodą elektroforezy; telomery różnych osób mają różną liczbę powtórzeń TTAGGG co daje różne wzory prążków jako marker wieku biologicznego', is_correct: false },
      { id: 'C', text: 'RFLP to technika wykrywania białek w żelu przez zmianę koloru po dodaniu barwnika Coomassie; białka różnych form allelicznych mają różną masę cząsteczkową i różną pozycję w żelu', is_correct: false },
      { id: 'D', text: 'RFLP mierzy methylację DNA przez trawienie metylowrażliwymi restryktazami; trawi tylko niezmetylowane miejsca CpG; nie stosuje się go do identyfikacji osób ani diagnostyki chorób genetycznych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'RFLP (Botstein et al., 1980): polimorfizm długości fragmentów restrykcyjnych = pierwsze markery molekularne stosowane w mapowaniu genomu i diagnostyce. Mechanizm: SNP (single nucleotide polymorphism) w miejscu restrykcyjnym → allel A: restryktaza tnie → 2 fragmenty; allel B: brak cięcia → 1 fragment; elektroforeza → różny wzór. Zastosowania: (1) diagnostyka: choroba Huntingtona (HindIII RFLP sprzężony z genem HTT); mukowiscydoza (ΔF508); (2) genetyka sądowa (przed STR); (3) mapowanie genomu; (4) identyfikacja roślin i zwierząt. Ograniczenia: Southern blot (powolny) lub PCR-RFLP (szybszy); tylko kilka alleli na marker (bialliczny); zastąpiony przez SNP chips i sekwencjonowanie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── KLONOWANIE GENÓW (5) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.klon, question_type: 'single',
    question_text: 'Na czym polega klonowanie genu metodą biblioteki genomowej (genomic library)?',
    options: [
      { id: 'A', text: 'Genomowe DNA trawione restryktazą → fragmenty ligowane do wektora (fagowego lub kosmidowego) → transformacja/transdukcja bakterii → każda kolonia/plakieta zawiera jeden fragment genomu; razem klony tworzą bibliotekę pokrywającą cały genom', is_correct: true },
      { id: 'B', text: 'mRNA izolowane z komórek → przepisywane przez odwrotną transkryptazę na cDNA → ligowane do plazmidu → biblioteka cDNA reprezentuje tylko transkrybowane geny w danym typie komórek', is_correct: false },
      { id: 'C', text: 'Oba terminy (biblioteka genomowa i cDNA) oznaczają to samo; różnią się wyłącznie rozmiarem wektora, nie zawartością; obydwie biblioteki zawierają identyczną informację genetyczną', is_correct: false },
      { id: 'D', text: 'Biblioteka genomowa jest tworzona przez sekwencjonowanie całego genomu komputerowo; każdy wirtualny fragment jest klonowany in silico i nie wymaga pracy laboratoryjnej z prawdziwym DNA', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Biblioteka genomowa vs cDNA: (1) GENOMOWA: fragment całego DNA organizmu; zawiera introny, eksony, regiony regulatorowe, sekwencje powtórzone; wektory: kosmidy (35–45 kb wkładki), BAC (100–300 kb), YAC (200 kb–2 Mb); niezbędna dla kompletnego sekwencjonowania genomu. (2) cDNA (expression library): tylko transkrybowane sekwencje (mRNA → cDNA); nie zawiera intronów; specyficzna dla tkanki/warunku; wektory: plazmidy lub fagi λgt11; do identyfikacji białek przez screening z przeciwciałem. Screening biblioteki: hybrydyzacja kolonii/plakietek z znakowaną sondą lub PCR colony screening lub sekwencjonowanie next-gen (shotgun sequencing).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.klon, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują klonowanie terapeutyczne i reprodukcyjne? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Klonowanie somatyczne (SCNT — somatic cell nuclear transfer): jądro komórki somatycznej dawcy transferowane do wyłuczonej oocyty (bez jądra) → stymulacja elektryczna lub chemiczna → rozwój zarodka z DNA dawcy; użyte do uzyskania owcy Dolly (1996)', is_correct: true },
      { id: 'B', text: 'Klonowanie terapeutyczne: zarodek uzyskany przez SCNT służy jako źródło embrionalnych komórek macierzystych (ESC) genetycznie dopasowanych do dawcy; ESC mogą być różnicowane in vitro do tkanek terapeutycznych (immunologicznie tolerowane przez dawcę)', is_correct: true },
      { id: 'C', text: 'Indukowane pluripotencjalne komórki macierzyste (iPSC, Yamanaka 2006, Nobel 2012): komórki somatyczne przeprogramowane przez wprowadzenie czynników Oct4, Sox2, Klf4, c-Myc → pluripotentność bez potrzeby użycia oocytów i niszczenia zarodka', is_correct: true },
      { id: 'D', text: 'Klonowanie reprodukcyjne człowieka jest prawnie dozwolone i praktykowane komercyjnie w wielu krajach; dziesiątki klonowanych dzieci rodzą się każdego roku w ramach programów medycznych wspomaganego rozrodu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) SCNT: Wilmut et al. 1997 (Nature): owca Dolly = 1. ssak sklonowany ze skomórki somatycznej (komórka gruczołu mlecznego); efektywność SCNT ~0,1–3%; klonowane: krowy, świnie, koty, psy; bydło z lepszymi cechami mlecznymi. (B) terapeutyczne: zarodek do stadium blastocysty → ICM (inner cell mass) → ESC; ESC pluripotentne = mogą dać każdy typ komórek; problem etyczny: niszczenie zarodka; autologiczne (od dawcy DNA) → brak odrzucenia. (C) iPSC (Takahashi & Yamanaka, 2006): fibroblasty myszy → 4 czynniki transkrypcyjne (OKSM) → pluripotentność; 2012 Nobel Medicine; ludzkie iPSC 2007; aplikacje: modelowanie chorób, testowanie leków, potencjalna terapia. (D) fałsz: klonowanie reprodukcyjne człowieka jest zakazane we wszystkich krajach posiadających odpowiednie przepisy; brak udokumentowanych przypadków; uznane za nieetyczne przez WHO, UNESCO i wszystkie główne organizacje naukowe.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.klon, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących klonowania molekularnego:',
    options: [
      { id: 'A', text: 'Selekcja niebiesko-biała (blue-white screening) z genem lacZ w wektorze: wstawienie obcego DNA do MCS przerywa gen lacZ → brak aktywnej β-galaktozydazy → biała kolonia; wektor bez wstawki → czynny lacZ → niebieska kolonia na podłożu z IPTG i X-Gal.', is_correct: true },
      { id: 'B', text: 'Wektory fagowe lambda (λ) mogą przyjmować wkładki DNA o wielkości 15–20 kb; tworzą plakietki na trawniku bakteryjnym zamiast kolonii; stosowane głównie do tworzenia bibliotek genomowych i cDNA.', is_correct: true },
      { id: 'C', text: 'Po transformacji komórek E. coli plazmidem rekombinowanym wszystkie komórki przyjmują plazmid i wszystkie wyrosłe kolonie zawierają ten sam zrekombinowany DNA — selekcja jest konieczna tylko gdy stosuje się wiele różnych wkładek jednocześnie.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: pUC19 wektor: lacZ-MCS (gen lacZ z wielomiejscowym klonowaniem); bez wkładki: IPTG indukuje lacZ → β-galaktozydaza hydrolizuje X-Gal → niebieski produkt → niebieska kolonia; z wkładką: lacZ przerwany → brak enzymu → biała; wybiera się białe kolonie do dalszej analizy. B — Prawda: λgt10, λgt11, λZAP: fagi lityczne/lizogenne; pakowanie in vitro; pojemność 15–22 kb; plakietki = lizy komórek bakteryjnych w żelu agarozowym; screening z sondą. C — Fałsz: efektywność transformacji = 10³–10⁸ kolonii/µg DNA; komórki nietkompetentne nie przyjmują plazmidu → rosną na podłożu bez antybiotyku; selekcja (ampicylina, kanamycyna) zabija komórki bez plazmidu → pozostają tylko transformanty; selekcja konieczna ZAWSZE, bo > 99% komórek nie przyjmuje plazmidu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.klon, question_type: 'single',
    question_text: 'Które stwierdzenie POPRAWNIE opisuje zastosowanie systemu dwuhybrydowego drożdżowego (yeast two-hybrid, Y2H)?',
    options: [
      { id: 'A', text: 'Y2H służy do wykrywania oddziaływań białko–białko in vivo: białko "przynęta" (bait) fuzjonowane z domeną wiążącą DNA (DBD) + białko "zdobycz" (prey) fuzjonowane z domeną aktywacji transkrypcji (AD); jeśli oddziałują → rekonstytucja czynnika transkrypcyjnego → ekspresja genu reporterowego (HIS3, lacZ)', is_correct: true },
      { id: 'B', text: 'Y2H to technika amplifikacji genomu drożdży metodą PCR; drożdże mają 2 genomy (hybryda mitochondrialny + jądrowy) i Y2H amplifikuje oba równocześnie w jednej reakcji PCR', is_correct: false },
      { id: 'C', text: 'Y2H jest stosowany wyłącznie do analizy sekwencji DNA metodą hybrydyzacji na membranie; litera "2" oznacza dwie membrany stosowane jednocześnie w jednym eksperymencie', is_correct: false },
      { id: 'D', text: 'System Y2H identyfikuje RNA wiążące się do białek; drożdże z dwoma zestawami genów reporterowych sygnalizują, gdy RNA z jednego szczepu wiąże się do białka z drugiego szczepu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Y2H (Fields & Song, 1989): oparty na modularności czynnika transkrypcyjnego Gal4 (DBD + AD). Schemat: (1) konstrukt "bait": GAL4-DBD − białko X; (2) konstrukt "prey": GAL4-AD − białko Y; (3) jeśli X oddziałuje z Y → DBD+AD → aktywacja GAL4 → geny reporterowe HIS3 (wzrost bez histydyny), ADE2, lacZ. Zastosowanie: skanowanie interakcji proteomicznych (interaktom); biblioteka prey = wszystkie geny organizmu; identyfikacja nowych partnerów białkowych. Ograniczenia: fałszywie dodatnie (autoaktywacja prey), fałszywie ujemne (brak odpowiednich modyfikacji post-translacyjnych u drożdży). Warianty: Split-ubiquitin (membranowe białka), LUMIER, co-IP + MS-MS (in vitro).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.klon, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują sekwencjonowanie Sangera i jego znaczenie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Sekwencjonowanie Sangera (dideoxy chain-termination, 1977): synteza DNA z dideoksynukleotydami (ddNTP) które nie posiadają 3\'OH → terminacja łańcucha w pozycji odpowiadającej zasadzie ddNTP; produkty rozdzielane elektroforezą odczytują sekwencję', is_correct: true },
      { id: 'B', text: 'Automatyczne sekwencjonowanie Sangera: cztery ddNTP (ddA, ddT, ddG, ddC) znakowane różnymi fluorofluorami; jeden lane na próbkę; laser detekcyjny odczytuje prążki według koloru fluorescencji → sekwencja automatycznie odczytywana przez software', is_correct: true },
      { id: 'C', text: 'Sekwencjonowanie Sangera jest wciąż stosowane jako "gold standard" weryfikacji małych fragmentów DNA (do ~1000 nt) i potwierdzania wyników klonowania; zastąpione przez NGS tylko przy projektach wymagających sekwencjonowania dużych genomów', is_correct: true },
      { id: 'D', text: 'W sekwencjonowaniu Sangera każdy nukleotyd na pozycji n generuje prążek o rozmiarze n; czytając prążki od dołu żelu (małe fragmenty) do góry (duże) odczytujemy sekwencję od 3\' do 5\' matrycy', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) ddNTP: 2\',3\'-dideoksy-nukleotyd; brak 3\'OH → polimeraza nie może dodać kolejnego nukleotydu → terminacja; 4 osobne reakcje (lub jedna z 4 fluoroforami); statystycznie terminacja w każdej pozycji → drabinka fragmentów. (B) automatyzacja (Applied Biosystems 370A, 1986): jeden lane, 4 kolory; kapilarna elektroforeza (zamiast żelowej PAGE); odczyt: chromatogram; przepustowość: 96 próbek × 800 nt/próbkę = ~80 kb/dzień. (C) Sanger = gold standard do ~1 kb; projekt Human Genome (1990–2003) używał Sangera; dziś: Sanger do potwierdzania klonów, diagnostyki genetycznej punktowej (BRCA1/2, monogenowe choroby); NGS (Illumina, ONT) do genomów/transkryptomów/metagenomik. (D) fałsz: prążki czytane od dołu (małe = krótkie = pierwsze pozycje od primeru) ku górze (duże = późne pozycje); sekwencja odczytywana 5\' → 3\' (bo synteza idzie 5\' → 3\'); mały = pozycja blisko primeru = 5\' koniec nowej nici.',
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
  console.log(`Seeding batch 2 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
