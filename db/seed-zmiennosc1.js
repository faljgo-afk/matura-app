// Seed: Zmienność i mutacje — batch 1 (16 questions)
// Topic: dbd40510-9cc5-4a56-8733-2455c18e5c76

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const T = 'dbd40510-9cc5-4a56-8733-2455c18e5c76'
const S = {
  rodzaje:    '5f6cbed8-a87b-4021-89fa-9cb36c97512d',
  genowe:     '88be4b09-5208-4c92-b8cb-9d8b39a5d92b',
  chromosom:  '642a17ec-fb42-4e0b-b787-a036e08f405b',
  genomowe:   '815d85a0-7af8-4e53-8afe-d0262f58a693',
  mutageny:   'f7594d3c-f046-492b-a6d7-b8c2fbcf2907',
  kombinat:   '344119b8-5be6-4265-9cff-afe41db719ad',
  jednogenowe:'6853283a-4c8b-4117-ab70-432aa25e4a58',
  chromosom_c:'2020184b-368b-4365-a9ad-708db9f1030f',
  ewolucja:   '3f1ac27d-827e-4715-932d-a815516d8396',
}

const questions = [
  // ─── Rodzaje zmienności (5) ───
  {
    topic_id: T, subtopic_id: S.rodzaje,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nZmienność niedziedziczna (modyfikacyjna) różni się od zmienności genetycznej tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'zmienność modyfikacyjna jest zapisana w sekwencji DNA i przekazywana potomstwu, a genetyczna — nie', is_correct: false },
      { id: 'B', text: 'zmienność modyfikacyjna wynika z reakcji organizmu na warunki środowiskowe (temperatura, pokarm, światło) i NIE zmienia sekwencji DNA — nie jest dziedziczona; zmienność genetyczna wynika ze zmian w DNA (mutacje, rekombinacja)', is_correct: true },
      { id: 'C', text: 'zmienność modyfikacyjna dotyczy wyłącznie roślin — u zwierząt każda zmiana fenotypu ma podłoże genetyczne', is_correct: false },
      { id: 'D', text: 'zmienność modyfikacyjna i genetyczna są synonimami — każda zmiana fenotypu jest jednocześnie zmianą genotypu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Zmienność modyfikacyjna (fenotypowa): te same geny, różne środowiska → różne fenotypy; przykłady: tan skóry pod wpływem UV, masa mięśniowa po treningu, karłowatość roślin na dużej wysokości. Nie zmienia DNA → nie jest dziedziczona. Granica normy reakcji (reaction norm) zależy od genotypu. Zmienność genetyczna: mutacje (zmiany sekwencji DNA) i rekombinacja → dziedziczone, podlegają selekcji naturalnej. Ważne rozróżnienie w genetyce: "natura vs. nurtura".',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.rodzaje,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ciągłej i nieciągłej zmienności.\nA. Zmienność nieciągła (skokowa) charakteryzuje cechy jakościowe — osobniki należą do wyraźnych, odrębnych klas (np. grupy krwi, kolor oczu modeli mendlowskich).\nB. Zmienność ciągła charakteryzuje cechy ilościowe kontrolowane przez wiele genów i środowisko — fenotypy tworzą spektrum bez wyraźnych granic między klasami (np. wzrost, masa ciała).\nC. Zmienność ciągła nigdy nie ma podłoża genetycznego — rozkład normalny wyklucza udział genów.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Zmienność nieciągła: cechy jakościowe, oddzielne klasy.', is_correct: true },
      { id: 'B', text: 'Zmienność ciągła: cechy ilościowe, wiele genów + środowisko, spektrum fenotypów.', is_correct: true },
      { id: 'C', text: 'Zmienność ciągła: brak podłoża genetycznego — rozkład normalny wyklucza geny.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: przykłady nieciągłej: ABO (A, B, AB, 0), Rh+/-, albinizm (tak/nie), PKU. B — Prawda: wzrost człowieka: wynik addytywnego działania setek loci + dieta + zdrowie → rozkład normalny. C — Fałsz: heritabilność wzrostu H² ≈ 0,80 — silne podłoże genetyczne; GWAS identyfikuje >700 SNP wpływających na wzrost; ciągłość rozkładu wynika z nakładania się efektów wielu genów, nie z braku genetyki.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.rodzaje,
    question_text: 'Które z poniższych są przykładami zmienności GENETYCZNEJ (a nie modyfikacyjnej)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Albinizm u człowieka — brak melaniny spowodowany mutacją genu TYR kodującego tyrozynazę', is_correct: true },
      { id: 'B', text: 'Opalenizna skóry pod wpływem promieniowania UV — zwiększona produkcja melaniny jako odpowiedź na światło', is_correct: false },
      { id: 'C', text: 'Trisomia 21 (zespół Downa) — dodatkowy chromosom 21 w kariotypie', is_correct: true },
      { id: 'D', text: 'Różny wzrost bliźniąt jednojajowych wychowanych w różnych środowiskach — efekt diety i aktywności fizycznej', is_correct: false },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — genetyczna: mutacja punktowa w genie TYR → nieaktywna tyrozynaza → brak syntezy melaniny; autosomalnie recesywna, dziedziczona. C — genetyczna: zmiana liczby chromosomów (mutacja genomowa, aneuploidia) → dziedziczona w komórkach. B — modyfikacyjna: melanocyty reagują na UV zwiększoną produkcją melaniny; to ochronna reakcja fizjologiczna, nie zmiana DNA; opala się ten sam genotyp. D — modyfikacyjna: norma reakcji wzrostu zależy od genotypu, ale różnica między bliźniętami MZ wynika z warunków środowiskowych (nutricja, choroby), nie mutacji.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.rodzaje,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nEpigenetyczna zmienność dziedziczna polega na tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'zmiany w sekwencji nukleotydów DNA (mutacje punktowe) są przekazywane potomstwu przez epigenomy', is_correct: false },
      { id: 'B', text: 'dziedziczne zmiany ekspresji genów (wzorce metylacji DNA, modyfikacje histonów, małe RNA) mogą być przekazywane komórkom potomnym bez zmiany sekwencji DNA — wpływają na fenotyp bez mutacji', is_correct: true },
      { id: 'C', text: 'epigenetyczne modyfikacje dotyczą wyłącznie komórek somatycznych i nigdy nie są przenoszone na kolejne pokolenia organizmów', is_correct: false },
      { id: 'D', text: 'epigenetyka i genetyka są synonimami — każda zmiana metylacji DNA jest jednocześnie mutacją punktową w sekwencji CpG', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Epigenetyka: "ponad genetyką" — regulacja ekspresji genów bez zmiany sekwencji DNA. Mechanizmy: metylacja DNA (CpG wyspy → wyciszenie genu); modyfikacje histonów (acetylacja → aktywacja, metylacja → wyciszenie lub aktywacja zależnie od miejsca); non-coding RNA (miRNA, lncRNA). Dziedziczna: imprinting genomowy (geny matczyne vs. ojcowskie różnie wyrażane); efekty mogą utrzymywać się przez kilka pokoleń (transgeneracyjne dziedziczenie epigenetyczne u roślin i zwierząt). C — Fałsz: imprinting przekazywany przez linię zarodkową. D — Fałsz: metylacja cytyzyny (5-metylocytozyna) może spontanicznie deaminować do tyminy → mutacja, ale to efekt uboczny, nie definicja.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.rodzaje,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących imprintingu genomowego.\nA. Imprinting genomowy polega na tym, że ekspresja pewnych genów zależy od tego, czy allel pochodzi od matki, czy od ojca — jeden allel jest wyciszony przez metylację, drugi aktywny.\nB. Zespół Pradera-Williego i zespół Angelmana są spowodowane brakiem tej samej kopii chromosomu 15 (delecja 15q11-13), ale dają różne fenotypy, ponieważ fenotyp zależy od tego, czy delecja dotyczy chromosomu ojcowskiego (PWS) czy matczynego (AS).\nC. Imprinting genomowy jest przykładem epigenetycznego mechanizmu dziedziczenia — wzorce metylacji są przywracane w każdym pokoleniu specyficznie dla linii matczynej lub ojcowskiej.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Imprinting: ekspresja genu zależy od rodzicielskiego pochodzenia allelu.', is_correct: true },
      { id: 'B', text: 'PWS = delecja ojcowska 15q11; AS = delecja matczyna 15q11 — ten sam region, różne fenotypy.', is_correct: true },
      { id: 'C', text: 'Imprinting = epigenetyczny mechanizm; wzorce metylacji przywracane co pokolenie.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: ok. 100 genów u człowieka ulega imprintingowi; gen H19 (aktywny allel matczyny), IGF2 (aktywny allel ojcowski). B — Prawda: PWS (Prader-Willi): brak ojcowskiej kopii 15q11-13 → hipotonia, otyłość, hipogonadyzm; AS (Angelman): brak matczynej kopii → ciężka niepełnosprawność intelektualna, napady śmiechu ("happy puppet"), napady padaczki. Potwierdzenie imprintingu: te same delecje, różne fenotypy zależnie od rodzica. C — Prawda: w zygotach imprinty są "resetowane" i przywracane zgodnie z płcią osobnika → potomstwo samic inaktywuje allele matczyne we właściwych genach; imprinty utrzymywane przez metylację CpG i wzorce modyfikacji histonów.',
    difficulty: 2, verified: true,
  },

  // ─── Mutacje genowe (6) ───
  {
    topic_id: T, subtopic_id: S.genowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nMutacja zmiany sensu (missense mutation) to taka mutacja punktowa, która:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wprowadza przedwczesny kodon STOP do sekwencji kodującej — powoduje syntezę skróconego (niefunkcjonalnego) białka', is_correct: false },
      { id: 'B', text: 'zmienia jeden nukleotyd w kodonie tak, że kodon ten koduje inny aminokwas — może zmienić strukturę i funkcję białka lub być neutralna (jeśli zamiana jest konserwatywna)', is_correct: true },
      { id: 'C', text: 'polega na insercji lub delecji nukleotydu, co przesuwa ramkę odczytu i zmienia wszystkie kolejne aminokwasy', is_correct: false },
      { id: 'D', text: 'zmienia nukleotyd, ale kodon nadal koduje ten sam aminokwas — mutacja cicha (synonimiczna)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Typy mutacji punktowych: Cicha (synonimiczna/silent): zmiana nukletydu → ten sam aminokwas (degeneracja kodu genetycznego); np. UCU → UCC (oba = Ser). Zmiany sensu (missense): zmiana nukletydu → inny aminokwas; np. GAG→GTG w HBB → Glu→Val → hemoglobina sierpowata HbS. Nonsens (nonsense): zmiana nukletydu → kodon STOP; np. UAG, UAA, UGA → skrócone białko (często degradowane przez NMD). Przesunięcia ramki (frameshift): insercja lub delecja (nie wielokrotność 3) → zmiana wszystkich dalszych aminokwasów. A — nonsens. C — frameshift. D — cicha.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mutacji w miejscach splicingu (splice site mutations).\nA. Mutacje w konserwatywnych sekwencjach splice donor (GT na początku intronu) lub splice acceptor (AG na końcu intronu) mogą prowadzić do pominięcia eksonu (exon skipping) lub włączenia sekwencji intronowej do mRNA.\nB. Mutacje w miejscach splicingu mogą mieć skutki podobne do mutacji missense — zmienione białko o częściowej funkcji — lub podobne do mutacji nonsens — całkowita utrata funkcji białka.\nC. Mutacje w miejscach splicingu nigdy nie prowadzą do chorób genetycznych u człowieka, ponieważ komórka zawsze prawidłowo wycina introny niezależnie od sekwencji.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mutacje splice site → exon skipping lub retencja intronu.', is_correct: true },
      { id: 'B', text: 'Mutacje splicingu: efekty od missense (częściowa funkcja) do nonsens (LOF).', is_correct: true },
      { id: 'C', text: 'Mutacje splicingu nie powodują chorób genetycznych.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: spliceosom rozpoznaje konserwatywne sekwencje: GT...AG (GT-AG rule). Mutacja GT→AT → spliceosom nie rozpoznaje → exon skipping (pominięcie sąsiedniego eksonu) lub aktywacja kryptycznych miejsc splicingowych → aberrantny mRNA. B — Prawda: efekt zależy od lokalizacji: pominięcie eksonu bez zmiany ramki (wielokrotność 3 nt) → brak domeny → częściowa funkcja (missense-like); z zmianą ramki lub kodon STOP → LOF (nonsens-like). C — Fałsz: mutacje splicingu stanowią ok. 10-15% wszystkich mutacji chorobowych. Przykłady: beta-talasemia (mutacje w IVS1 i IVS2 genu HBB); SMA (SMN1); CFTR (mukowiscydoza); wiele chorób metabolicznych.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genowe,
    question_text: 'Które z poniższych cech dotyczą MUTACJI CIĄGLE SYNONIMICZNYCH (silent mutations)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Zmiana nukletydu w kodonie nie zmienia aminokwasu, który kodon koduje — wynika z degeneracji kodu genetycznego', is_correct: true },
      { id: 'B', text: 'Mutacje ciche są zawsze neutralne ewolucyjnie i nie podlegają selekcji naturalnej', is_correct: false },
      { id: 'C', text: 'Najczęściej dotyczą trzeciej pozycji kodonu (pozycja "chwiejna", wobbling position), gdzie zamiana jest najczęściej synonimiczna', is_correct: true },
      { id: 'D', text: 'Mogą wpływać na efektywność translacji (codon usage bias) i fałdowanie białka (przez zmianę tempa translacji wpływającą na strukturę trzeciorzędową)', is_correct: true },
    ],
    correct_answer: ['A', 'C', 'D'],
    explanation: 'A — Prawda: 64 kodony → 20 aminokwasów → degeneracja; np. UUA, UUG, CUU, CUC, CUA, CUG — wszystkie kodują Leu. C — Prawda: pozycja 3 (wobble): tRNA rozpoznaje dwie pierwsze pozycje kodonu ściśle; trzecia pozycja może "chybotać" → wiele synonimicznych kodonów różni się na pozycji 3. D — Prawda: codon usage bias: rzadkie kodony → wolniejsza translacja → wpływa na fałdowanie białka; mutacja MDR1 (ABCB1) P-glikoproteiny w pozycji 3 (cicha) zmienia szybkość translacji → zmiana konformacji białka → zmieniony profil substratów. B — Fałsz: selekcja na codon usage jest udokumentowana; geny o wysokiej ekspresji preferują "szybkie" kodony odpowiadające obfitym tRNA; mutacje ciche w takich genach mogą być negatywnie selekcjonowane.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nMutacja gain-of-function (GOF) różni się od mutacji loss-of-function (LOF) tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'GOF zwiększa lub zmienia aktywność białka (nadekspresja, nowa funkcja, konstytutywna aktywność), LOF powoduje utratę lub zmniejszenie aktywności białka (brak produktu, nieaktywne białko)', is_correct: true },
      { id: 'B', text: 'GOF dotyczy tylko mutacji recesywnych, a LOF — tylko dominujących', is_correct: false },
      { id: 'C', text: 'GOF zwiększa liczbę kopii genu (amplifikacja), LOF zawsze usuwa gen z genomu (delecja)', is_correct: false },
      { id: 'D', text: 'GOF i LOF są synonimami opisującymi tę samą zmianę aktywności białka w różnych kontekstach chorobowych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'GOF (gain-of-function): białko zyskuje nową lub wzmożoną aktywność; często dominujące (jeden allel wystarczy); przykłady: mutacja RAS (onkogeny) → konstytutywna aktywność sygnalizacyjna → nowotwory; mutacja p53 R175H → dominujący negatywny efekt (GOF mutant p53). LOF (loss-of-function): białko traci funkcję; częściej recesywne (haploinsuficjencja lub potrzeba utraty obu kopii); przykłady: PKU (PAH LOF), mukowiscydoza (CFTR LOF), retinoblastoma (RB1 LOF, Knudson two-hit). Kluczowe: dominacja często zależy od mechanizmu: GOF → dominujące; LOF → recesywne (chyba że haploinsuficjencja, jak BRCA1).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mutacji dynamicznych (ekspansja powtórzeń).\nA. Choroby z ekspansją powtórzeń trinukleotydowych wykazują antycypację — objawy pojawiają się wcześniej i/lub są cięższe u kolejnych pokoleń, ponieważ liczba powtórzeń wzrasta przy transmisji.\nB. Ekspansja powtórzeń CAG w genie HTT (Huntington) powyżej ~36 powtórzeń powoduje chorobę Huntingtona — dziedziczoną autosomalnie dominująco z penetracją zależną od liczby powtórzeń.\nC. Ekspansja powtórzeń GGGGCC w genie C9orf72 jest najczęstszą przyczyną rodzinnej ALS i FTD — tysiące powtórzeń (norma: <30) prowadzi do toksyczności RNA i białka.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Antycypacja: wcześniejszy onset i cięzsza choroba w kolejnych pokoleniach = wzrost liczby powtórzeń.', is_correct: true },
      { id: 'B', text: 'CAG w HTT: >36 powtórzeń → HD; AD, penetracja zależy od liczby CAG.', is_correct: true },
      { id: 'C', text: 'GGGGCC w C9orf72: najczęstsza przyczyna rodzinnej ALS i FTD; norma <30.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: antycypacja opisana dla HD, myotonii miotonicznej (CTG), SCA, FXS; mechanizm: niestabilność powtórzeń podczas replikacji (slip-strand) → wzrost przy transmisji, częściej przy transmisji matczynej (FXS) lub ojcowskiej (HD). B — Prawda: HTT: 36-39 CAG — zmniejszona penetracja; 40+ — pełna penetracja; >60 — juvenile HD. Huntingtyna z poly-Q >36 tworzy agregaty, uszkadza neurony prążkowia. C — Prawda: C9orf72 (hexanukleotyd GGGGCC): >30 powtórzeń = patologiczne; 1000+ powtórzeń u chorych; toksyczność przez: RNA foci (wiązanie białek RNA) + dipeptydowe polipeptydy (DPR, z odczytu RAN translation). Wszystkie trzy prawdziwe.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genowe,
    question_text: 'W sekwencji kodującej genu doszło do insercji jednego nukleotydu w pozycji 10. Które ze stwierdzeń dotyczących skutków tej mutacji są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Wstawionych zostanie jeden nukleotyd → zmiana ramki odczytu od pozycji 10 do końca genu (frameshift)', is_correct: true },
      { id: 'B', text: 'Aminokwasy zakodowane przez kodony 1-3 (przed pozycją 10) pozostają niezmienione', is_correct: true },
      { id: 'C', text: 'Insercja jednego nukleotydu zawsze prowadzi do przedwczesnego kodonu STOP i NMD — skrócone białko jest zawsze syntetyzowane', is_correct: false },
      { id: 'D', text: 'Jeśli w dalszej części genu wystąpi delecja jednego nukleotydu, ramka odczytu może zostać przywrócona od miejsca delecji — supresor frameshiftu', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: insercja +1 przesuwa ramkę odczytu (n ≠ wielokrotności 3); wszystkie kodony od miejsca mutacji są zmienione. B — Prawda: kodony przed insercją (nt 1-9 → kodony 1-3) są niezmienione; zmiana zaczyna się od kodonu 4 (nukleotydy 10-12). D — Prawda: kompensująca delecja -1 w pobliżu przywraca ramkę od miejsca delecji; to genetyczny supresor frameshiftu (intragenny); odcinek między insercją a delecją koduje zmienioną sekwencję aminokwasów, ale reszta białka może być prawidłowa. C — Fałsz: NIE zawsze; frameshift może nie trafić w kodon STOP, jeśli gen jest krótki lub kodon STOP pojawia się tuż za delecją; ponadto NMD degraduje mRNA z przedwczesnymi kodonami STOP, ale nie zawsze — zależy od pozycji (reguła 50-55 nt przed ostatnim złączem ekson-ekson).',
    difficulty: 2, verified: true,
  },

  // ─── Mutacje chromosomowe (5) ───
  {
    topic_id: T, subtopic_id: S.chromosom,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nInwersja chromosomowa polega na tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'fragment chromosomu zostaje odcięty i przyłączony do chromosomu niehomologicznego (translokacja)', is_correct: false },
      { id: 'B', text: 'odcinek chromosomu zostaje odcięty, obrócony o 180° i wstawiony z powrotem w to samo miejsce — geny są zachowane, ale w odwróconej kolejności i orientacji', is_correct: true },
      { id: 'C', text: 'fragment chromosomu jest powielany — osobnik ma więcej niż dwie kopie danego odcinka (duplikacja)', is_correct: false },
      { id: 'D', text: 'cały chromosom zostaje zduplikowany (polisomia) lub utracony (monosomia)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Rodzaje mutacji strukturalnych chromosomów: Delecja: utrata odcinka. Duplikacja: zdwojenie odcinka. Inwersja: odwrócenie odcinka o 180°; typy: paracentryczna (nie obejmuje centromeru) i pericentryczna (obejmuje centromer, zmienia proporcje ramion). Nosiciele inwersji: zrównoważony kariotyp (brak utraty materiału), ale problemy podczas mejozy (pętla inwersji) → gamety z duplikacjami i delecjami → poronienia, wady wrodzone. Translokacja: przeniesienie odcinka na inny chromosom. D — mutacja genomowa (aneuploidia), nie strukturalna.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących translokacji chromosomowych.\nA. Nosiciel zrównoważonej translokacji Robertsonowskiej (np. t(14;21)) ma 45 chromosomów i prawidłowy fenotyp, ale może mieć potomstwo z trisomią 21 (Down) lub monosomią 21 (letalna).\nB. Translokacja wzajemna (reciprocal translocation) polega na wymianie odcinków między dwoma niehomologicznymi chromosomami — nosiciel zrównoważony jest zdrowy, ale ma zwiększone ryzyko niezrównoważonego potomstwa.\nC. Translokacja Robertsonowska dotyczy chromosomów akrocentrycznych (13, 14, 15, 21, 22) — chromosomy łączą się ramieniem długim (q) z utratą krótkich ramion (p), które zawierają tylko geny rRNA i są nieistotne dla fenotypu.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Nosiciel t(14;21): 45 chromosomów, zdrowy; ryzyko potomstwa z Down lub monosomią 21.', is_correct: true },
      { id: 'B', text: 'Translokacja wzajemna: wymiana między niehomologami; nosiciel zrównoważony zdrowy, ryzyko niezrównoważonego potomstwa.', is_correct: true },
      { id: 'C', text: 'Robertsonowska: chromosomy akrocentryczne; fuzja q-q z utratą ramion p (geny rRNA).', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: t(14;21) = chromosom Robertsonowski z ramion q 14 i 21; nosiciel: 45 chromosomów (tr14;21 + wolne 14 + wolne 21); podczas mejozy segregacja: alternatywna → zdrowe 46 lub 45 nosiciel; sąsiednia-1 → trisomia 21 (Down) lub monosomia 21 (letalna). Ryzyko Downa u córki nosicielki t(14;21): ok. 10-15%; u syna nosiciela: ok. 2-5%. B — Prawda: nosiciel zrównoważonej translokacji wzajemnej (np. t(9;22) = Ph chromosom BCR-ABL): normalny fenotyp, ale produkty mejozy mogą być niezrównoważone. C — Prawda: chromosomy akrocentryczne (p zawiera satelitarne regiony z genami 5S rRNA i 45S rRNA) — utrata p nie zmienia fenotypu (wiele kopii genów rRNA w genomie).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom,
    question_text: 'Które z poniższych aberracji chromosomowych strukturalnych są zrównoważone (nosiciel ma prawidłową ilość materiału genetycznego)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Inwersja pericentryczna — cały odcinek z centromerem obrócony, brak ubytku materiału', is_correct: true },
      { id: 'B', text: 'Zrównoważona translokacja wzajemna — wymiana odcinków bez utraty materiału', is_correct: true },
      { id: 'C', text: 'Delecja interstitialna — utrata środkowego odcinka chromosomu', is_correct: false },
      { id: 'D', text: 'Izochromosom — chromosom z dwiema identycznymi ramionami (np. i(17q) = dwa ramiona q chromosomu 17)', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'Zrównoważone aberracje: prawidłowa ilość materiału, brak utraty ani nadmiaru. A — Prawda: inwersja (para- lub pericentryczna): ten sam materiał, zmieniona kolejność/orientacja; nosiciele zdrowi (brak utraty), ale problemy przy tworzeniu gamet. B — Prawda: translokacja wzajemna zrównoważona: te same odcinki, przeorganizowane; nosiciel zdrowy. Niezrównoważone: C — delecja: utrata materiału → haploinsuficjencja; np. delecja 5p → cri-du-chat; 22q11 → DiGeorge. D — izochromosom: nieprawidłowy chromosom z dwiema identycznymi ramionami; i(17q): dwa ramiona q17 = dodatkowa kopia q17, brak ramienia p → jednocześnie trisomia q i monosomia p → niezrównoważony; częsty w białaczkach.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nZespół cri-du-chat (miau kota) jest spowodowany:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'trisomią chromosomu 5 — dodatkowy chromosom 5 powoduje charakterystyczny płacz', is_correct: false },
      { id: 'B', text: 'delecją krótkiego ramienia chromosomu 5 (5p-) — utrata odcinka 5p15.2-15.3 powoduje charakterystyczny wysoki płacz niemowlęcia (przypominający miauczenie kota), małogłowie, hipotonia, niepełnosprawność intelektualna', is_correct: true },
      { id: 'C', text: 'translokacją chromosomu 5 na chromosom 21 — chromosom hybrydowy powoduje objawy', is_correct: false },
      { id: 'D', text: 'mutacją punktową genu CTNND2 na chromosomie 5 — pojedyncza substytucja powoduje wszystkie objawy', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Cri-du-chat (cry of the cat): delecja 5p15.2-15.3 (krótkie ramię chromosomu 5); utrata genów: CTNND2 (katenina delta-2, synapsy), SEMA5A (rozwój mózgu), TERT (telomeraz). Częstość: 1:15 000-50 000 urodzeń. Objawy: charakterystyczny wysoki płacz (uszkodzenie krtani/układu nerwowego), małogłowie, okrągła twarz, hiperteloryzm, niepełnosprawność intelektualna (różny stopień), hipotonia. Kariotyp: 46,XY,del(5)(p15.2) lub 46,XX,del(5)(p15.2). De novo w ~85% przypadków; 15% od nosiciela translokacji.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chromosomu Philadelphia.\nA. Chromosom Philadelphia (Ph) powstaje w wyniku translokacji wzajemnej t(9;22)(q34;q11) — gen BCR z chromosomu 22 łączy się z genem ABL1 z chromosomu 9, tworząc onkogen fuzyjny BCR-ABL1.\nB. Białko BCR-ABL1 ma konstytutywnie aktywną kinazę tyrozynową — aktywuje szlaki proliferacyjne (RAS, PI3K, JAK-STAT) → CML (przewlekła białaczka szpikowa).\nC. Inhibitor kinazy tyrozynowej imatynib (Gleevec) jest lekiem opracowanym specyficznie przeciw BCR-ABL1 — blokuje aktywne centrum katalityczne kinazy, co stanowi przykład terapii celowanej w onkologii.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Ph = t(9;22): BCR-ABL1 onkogen fuzyjny.', is_correct: true },
      { id: 'B', text: 'BCR-ABL1: konstytutywna kinaza tyrozynowa → aktywacja proliferacji → CML.', is_correct: true },
      { id: 'C', text: 'Imatynib: inhibitor BCR-ABL1; celowana terapia CML.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: chromosom Ph odkryty 1960 (Nowell, Hungerford); t(9;22): ABL1 (9q34) przenosi się na BCR (22q11) → fuzja BCR-ABL1 na skróconym chromosomie 22 (Ph). B — Prawda: p210-BCR-ABL1 (CML) lub p190 (ALL) → konstytutywna kinaza Tyr → ciągła sygnalizacja proliferacji bez czynnika wzrostu. C — Prawda: imatynib (Gleevec, STI571): blokuje kieszeń ATP w domenie kinazy ABL1; przełom w onkologii molekularnej (2001); 5-letnie przeżycie CML wzrosło z ~30% do >90%. Wszystkie prawdziwe — klasyczny przykład terapii celowanej.',
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
  console.log(`Seeding ${questions.length} questions...`)
  for (const q of questions) {
    const s = await post(q)
    console.log((s===201||s===204?'OK':'ERR '+s), q.question_type, q.question_text.slice(0,60).replace(/\n/g,' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
