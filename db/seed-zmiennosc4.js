// Seed: Zmienność i mutacje — batch 4 (15 questions, final)
const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const T = 'dbd40510-9cc5-4a56-8733-2455c18e5c76'
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
  // ─── Rodzaje zmienności (2) ───
  {
    topic_id: T, subtopic_id: S.rodzaje,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących polimorfizmu genetycznego.\nA. Polimorfizm genetyczny (genetic polymorphism) to stan, w którym w populacji istnieją co najmniej dwa allele danego locus, przy czym rzadszy allel ma częstość powyżej 1% (umowna granica odróżniająca polimorfizm od rzadkiej mutacji).\nB. SNP (single nucleotide polymorphism) to najpowszechniejszy typ polimorfizmu u człowieka — szacuje się ok. 4-5 mln SNP w genomie jednej osoby względem genomu referencyjnego.\nC. Polimorfizm może dotyczyć tylko regionów niekodujących DNA (intronów, sekwencji międzygenowych) — SNP w eksonach są zbyt rzadkie, by mogły być polimorfizmami.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Polimorfizm: co najmniej 2 allele; rzadszy >1% w populacji.', is_correct: true },
      { id: 'B', text: 'SNP: najpowszechniejszy polimorfizm; ~4-5 mln na genom człowieka.', is_correct: true },
      { id: 'C', text: 'Polimorfizm tylko w regionach niekodujących — SNP eksonalne zbyt rzadkie.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: polimorfizm (Hardy): częstość rzadszego allelu >1% (0,01); poniżej tej granicy → rzadka mutacja lub choroba monogenowa. B — Prawda: projekt 1000 Genomes / gnomAD: każdy człowiek ma ~4-5 mln SNP, ~400-500 tys. indeli i ~10 000 CNV względem genomu referencyjnego. C — Fałsz: SNP eksonalne (coding SNPs, cSNP) są częste i ważne: synonimiczne (cSNP) → brak zmiany aminokwasu; niesynonimiczne (nsSNP) → zmiana aminokwasu; mogą mieć wysoką częstość allelu (MAF >1%) → polimorfizm. Wiele ważnych polimorfizmów medycznych jest eksonalnych: ApoE4 (Alzheimer), CYP2D6 (metabolizm leków), BRCA1 (rak).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.rodzaje,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nCNV (copy number variation, zmienność liczby kopii) jest formą polimorfizmu genomowego polegającą na tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'jeden nukleotyd w sekwencji DNA jest zastąpiony innym — różne osoby mają różne zasady w danej pozycji', is_correct: false },
      { id: 'B', text: 'odcinki genomu (od 1 kb do kilku Mb) mogą być obecne w różnej liczbie kopii u różnych osobników — delecje, duplikacje lub wielokrotne kopie tego samego odcinka; CNV mogą obejmować całe geny', is_correct: true },
      { id: 'C', text: 'całe chromosomy mogą być obecne w różnej liczbie (trisomia, monosomia) — CNV to synonim aneuploidii', is_correct: false },
      { id: 'D', text: 'CNV to wyłącznie delecje genomowe — duplikacje nie są zaliczane do CNV', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'CNV: segmentalne warianty liczby kopii (1 kb–10 Mb); obejmują delecje i duplikacje (wielokrotne kopie); łącznie CNV stanowią ~12% genomu ludzkiego (~500 CNV na osobę). Mechanizm: NAHR (non-allelic homologous recombination) przez LCR (low-copy repeats); NHEJ; fork stalling. Znaczenie: CNV genów o dużym wpływie: AMY1A (amylaza ślinowa): 2-20 kopii → korelacja z dietą bogatą w skrobię; CCL3L1 (chemokin): więcej kopii → odporność na HIV; SMN1 (SMA): delecja → atrofia mięśni rdzeniowych. CNV w neuropsychiatrii: del/dup 16p11.2 → autyzm; del 22q11.2 → psychoza; del 1q21.1 → schizofrenia lub autyzm.',
    difficulty: 2, verified: true,
  },

  // ─── Mutacje genowe (2) ───
  {
    topic_id: T, subtopic_id: S.genowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mutacji spontanicznych vs indukowanych.\nA. Mutacje spontaniczne powstają bez udziału zewnętrznych mutagenów — są wynikiem błędów replikacji DNA (tautomeria zasad, ślizganie polimerazy na powtórzeniach), przypadkowego uszkodzenia DNA (depurynacja, deaminacja cytyzyny) lub błędów rekombinacji.\nB. Deaminacja cytyzyny (C→U) jest częstym spontanicznym uszkodzeniem DNA — jeśli nie zostanie naprawiona przed replikacją, prowadzi do tranzycji GC→AT.\nC. Mutacje indukowalne (przez mutageny) zawsze powstają tylko u osobników narażonych — nie mogą być przekazane potomstwu i nie mają znaczenia ewolucyjnego.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mutacje spontaniczne: błędy replikacji, depurynacja, deaminacja — bez zewnętrznych mutagenów.', is_correct: true },
      { id: 'B', text: 'Deaminacja C→U → tranzycja GC→AT, jeśli nienaprawniona przed replikacją.', is_correct: true },
      { id: 'C', text: 'Mutacje indukowane nie mogą być przekazane potomstwu i nie mają znaczenia ewolucyjnego.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: depurynacja: utrata puryny z DNA backbone (~5000/komórkę/dobę) → AP site → może prowadzić do podstawień przy replikacji; deaminacja C→U (~100-500/komórkę/dobę): szczególnie w kontekście CpG → 5mC → T (deaminacja metylowanej cytozyny jest 5× częstsza → mutacje C→T przy CpG są nadreprezentowane u człowieka). B — Prawda: C deaminuje → U paruje z A → po replikacji: nić z U koduje A zamiast G → tranzycja GC→AT. Dlatego CpG dinukleotydy są "hot spots" mutacji (metylacja cytyzyny → deaminacja do T). C — Fałsz: mutacje indukowane w KOMÓRKACH LINII ZARODKOWEJ (gonady) są dziedziczone przez potomstwo i mogą mieć znaczenie ewolucyjne; np. promieniowanie jonizujące na gonady może powodować mutacje przekazywane potomstwu. Tylko mutacje somatyczne nie są przekazywane (tylko w danym organie).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nHaploinsuficjencja jest mechanizmem choroby genetycznej, w którym:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'obydwa allele muszą być nieaktywne, żeby wystąpiła choroba — jeden prawidłowy allel w pełni kompensuje wadliwy allel', is_correct: false },
      { id: 'B', text: 'jedna kopia prawidłowego allelu (z dwóch) jest niewystarczająca do zapewnienia normalnej funkcji — heterozygoty z jednym wadliwym allelem chorują, mimo że drugi allel jest prawidłowy', is_correct: true },
      { id: 'C', text: 'haploinsuficjencja dotyczy wyłącznie genów na chromosomie X — u samców hemizygotycznych brak jednej kopii zawsze powoduje chorobę', is_correct: false },
      { id: 'D', text: 'haploinsuficjencja jest synonimem dominacji negatywnej — oba terminy oznaczają to samo zjawisko genetyczne', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Haploinsuficjencja: jeden sprawny allel nie wystarcza do normalnej funkcji → choroba u heterozygoty (LOF dziedziczone dominująco). Mechanizm: dane białko wymaga produkcji z obu alleli, aby osiągnąć minimalny próg funkcjonalny; utrata jednej kopii → produkcja o 50% → niewystarczająca. Przykłady: BRCA1/2: utrata jednej kopii → zwiększone ryzyko raka (heterozygotyczność zwiększa ryzyko mutacji drugiego allelu); PAX6 (aniridia): jedno oko pozbawione tęczówki (brak tęczówki); NF1; RUNX1 (trombocytopenia, białaczka). Różni się od dominacji negatywnej (dominant negative): w tej drugiej wadliwe białko aktywnie hamuje prawidłowe białko (efekt "zatruwający" — np. oligomeryczne kolotypy kolagenu, TP53 dominująco negatywny).',
    difficulty: 2, verified: true,
  },

  // ─── Mutacje chromosomowe (2) ───
  {
    topic_id: T, subtopic_id: S.chromosom,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących niestabilności mikrosatelitarnej (MSI).\nA. Mikrosatelity (STR, short tandem repeats) to krótkie powtarzające się sekwencje DNA (1-6 pz), które są szczególnie podatne na błędy replikacji (polimera ślizga się na powtórzeniach) — błędy te normalnie są naprawiane przez MMR.\nB. Niestabilność mikrosatelitarna (MSI) pojawia się, gdy system MMR jest uszkodzony — mikrosatelity mają wtedy różną długość między komórkami nowotworowymi a prawidłowymi (można to wykryć elektroforezą).\nC. MSI-H (high microsatellite instability) w nowotworach koreluje ze złą odpowiedzią na immunoterapię (anty-PD-1/PD-L1) — dlatego MSI jest negatywnym czynnikiem predykcyjnym dla terapii checkpoint inhibitorami.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mikrosatelity: krótkie powtórzenia podatne na błędy polimery; naprawiane przez MMR.', is_correct: true },
      { id: 'B', text: 'MSI: defekt MMR → różna długość mikrosatelitów w komórkach nowotworowych vs normalnych.', is_correct: true },
      { id: 'C', text: 'MSI-H: zła odpowiedź na immunoterapię anty-PD-1.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: polimeraza DNA ślizga się na powtórzeniach (slip-strand mispairing) → insercje/delecje w mikrosatelitach; MMR (MLH1, MSH2, MSH6, PMS2) naprawia te błędy. B — Prawda: MSI detektowana przez PCR amplifikację mikrosatelitów z DNA guza i normalnego → różne szczyty/prążki = MSI. Klasyfikacja: MSI-H (high): uszkodzenie MMR; MSS (microsatellite stable): sprawny MMR. C — Fałsz (odwrotnie): MSI-H koreluje z DOBRĄ odpowiedzią na immunoterapię (anty-PD-1: pembrolizumab, nivolumab)! MSI-H guzy: wiele neoantygenów (mutacyjne obciążenie TMB-H) → więcej neopeptydów rozpoznawanych przez limfocyty T → wyraźna odpowiedź na blokadę punktów kontrolnych. Pembrolizumab zatwierdzony dla MSI-H/dMMR niezależnie od lokalizacji (przełomowa decyzja FDA 2017).',
    difficulty: 3, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nMutacje strukturalne chromosomów dzielone są na zrównoważone i niezrównoważone. Klinicznie ważniejsze są zazwyczaj mutacje niezrównoważone, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'mutacje niezrównoważone powodują utratę lub nadmiar materiału genetycznego → haploinsuficjencja lub efekt dawki → zaburzenie ekspresji wielu genów → wady wrodzone, niepełnosprawność intelektualna', is_correct: true },
      { id: 'B', text: 'mutacje niezrównoważone zmieniają kolejność genów na chromosomie, ale nie zmieniają ich ilości — dlatego są groźniejsze niż zrównoważone', is_correct: false },
      { id: 'C', text: 'mutacje niezrównoważone dotyczą wyłącznie chromosomów płciowych X i Y — autosomalne mutacje strukturalne zawsze są zrównoważone', is_correct: false },
      { id: 'D', text: 'niezrównoważone zmiany są łagodne, a zrównoważone powodują ciężkie choroby genetyczne', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mutacje strukturalne: Zrównoważone (balanced): prawidłowa ilość materiału genetycznego, zmieniona kolejność/organizacja; nosiciel zazwyczaj zdrowy (mogą być pozycyjne efekty: gen normalny, ale w innym sąsiedztwie regulatorowym); problem w mejozie → niezrównoważone gamety. Niezrównoważone (unbalanced): utrata lub nadmiar DNA → haploinsuficjencja (za mało → brak funkcji) lub efekt dawki (za dużo → nadekspresja). Skutki: wady wrodzone wielonarządowe, niepełnosprawność intelektualna, opóźnienie wzrostu; mogą być letalne (duże niezrównoważone). Przykłady niezrównoważonych: del 5p (cri-du-chat), del 22q11 (DiGeorge), del 7q11 (Williams), dup(17)(p11.2) (HNPP → dziedziczna neuropatia).',
    difficulty: 1, verified: true,
  },

  // ─── Mutacje genomowe (1) ───
  {
    topic_id: T, subtopic_id: S.genomowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zespołu Klinefeltera i trisomii X w kontekście inaktywacji X.\nA. U mężczyzn z zespołem Klinefeltera (47,XXY) jeden chromosom X jest inaktywowany (ciałko Barra widoczne w jądrach interfazowych) — jednak geny pseudoautosomalne (PAR1, PAR2) oraz ok. 15-20% genów X uciekają inaktywacji, co przyczynia się do fenotypu.\nB. Kobiety z trisomią X (47,XXX) mają dwa ciałka Barra — dwa spośród trzech chromosomów X są inaktywowane, co chroni przed ciężkim fenotypem polisomii X.\nC. Pełna inaktywacja X u 47,XXY i 47,XXX chroni te osoby przed wszystkimi skutkami klinicznymi nadliczbowych chromosomów X — osoby te mają całkowicie normalny fenotyp.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: '47,XXY: jedno ciałko Barra; geny PAR i "escape genes" uciekają inaktywacji → przyczyniają się do fenotypu.', is_correct: true },
      { id: 'B', text: '47,XXX: dwa ciałka Barra; dwa X inaktywowane → łagodniejszy fenotyp.', is_correct: true },
      { id: 'C', text: 'Pełna inaktywacja X u XXY i XXX → całkowicie normalny fenotyp.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: reguła Lyona: n(ciałek Barra) = n(X) – 1; 47,XXY → 1 ciałko. Geny PAR1 (2,7 Mb) i PAR2 (0,4 Mb) uciekają inaktywacji całkowicie; ~15-20% genów X poza PAR częściowo uciekają (różnie w różnych tkankach) → "escape genes" → dodatkowa dawka genów X → fenotyp Klinefeltera. B — Prawda: 47,XXX: 2 ciałka Barra; dwa X inaktywowane → łagodne objawy (problemy z uczeniem, opóźnienie mowy); porównaj 49,XXXXX: 4 ciałka Barra, ale ciężki fenotyp. C — Fałsz: mimo inaktywacji, geny uciekające dawkowanie przyczyniają się do fenotypu; 47,XXY: Klinefelter ma realny fenotyp (hipogonadyzm, niepłodność); 47,XXX: subtelne efekty.',
    difficulty: 2, verified: true,
  },

  // ─── Mutageny i naprawa DNA (2) ───
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nXeroderma pigmentosum (XP) jest genetycznym schorzeniem wynikającym z:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'defektu naprawy przez wycinanie nukleotydów (NER) — mutacje w genach XPA-XPG powodują niemożność naprawy dimerów pirymidynowych po UV → kumulacja uszkodzeń DNA w skórze → 1000× zwiększone ryzyko raka skóry', is_correct: true },
      { id: 'B', text: 'defektu MMR (mismatch repair) — niemożność naprawy błędów replikacyjnych prowadzi do nowotworów skóry i fotouczulenia', is_correct: false },
      { id: 'C', text: 'niedoboru melaniny w melanocytach — albinistyczne melanocyty nie chronią skóry przed UV i dlatego pacjenci zachorowują na raka', is_correct: false },
      { id: 'D', text: 'mutacji receptora dla witaminy D — brak sygnalizacji witaminy D uniemożliwia naprawę uszkodzeń UV w keratynocytach', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Xeroderma pigmentosum (XP): AR; 7 grup komplementacyjnych (XPA-XPG) + XP-V (pol. eta). XPA-XPG: defekty NER → niemożność naprawy CPD i 6-4PP (dimery UV) → kumulacja mutacji w genach supresorowych i onkogenach skóry → rak skóry (BCC, SCC, melanoma) 1000-2000× częstszy niż u zdrowych; onset: dzieciństwo. XP-V (Variant): prawidłowy NER, ale brak pol. eta (polymerase eta); pol. eta bezbłędnie omija dimery TT; bez niej TLS przez inne (błędne) polimerazy → mutageneza. Zarządzanie: absolutna ochrona przed UV (ubrania, ekrany, specjalne żarówki filtrujące UV); dzieci "księżycowe" (tylko w nocy).',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących odpowiedzi na uszkodzenia DNA (DDR) u eukariontów.\nA. Białko ATM (Ataxia Telangiectasia Mutated) jest kinazą aktywowaną przez dwuniciowe pęknięcia DNA (DSB) — fosforyluje H2AX (gammaH2AX), CHK2, p53, BRCA1, powodując zatrzymanie cyklu komórkowego i uruchomienie naprawy.\nB. Zatrzymanie cyklu komórkowego przez p53 (G1/S checkpoint) zapobiega replikacji uszkodzonego DNA — p53 indukuje transkrypcję CDKN1A (p21), który hamuje kompleksy cyklina-CDK.\nC. Apoptoza w odpowiedzi na nienaprawialne uszkodzenia DNA jest niekorzystna ewolucyjnie — komórki z uszkodzonym DNA powinny zawsze naprawiać swoje DNA i nigdy nie ulegać apoptozie.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'ATM: kinaza aktywowana przez DSB; fosforyluje H2AX, CHK2, p53, BRCA1 → checkpoint i naprawa.', is_correct: true },
      { id: 'B', text: 'p53 → p21 → hamowanie cyklina-CDK → zatrzymanie G1/S → zapobiega replikacji uszkodzonego DNA.', is_correct: true },
      { id: 'C', text: 'Apoptoza po uszkodzeniu DNA jest niekorzystna — komórki powinny zawsze naprawiać, nie ginąć.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: ATM (9q22): aktywowana autofosforylacją po DSB → kinaza fosforyluje setki substratów: H2AX (ser139) → gammaH2AX ogniska przy DSB (marker); CHK2 (ser19) → aktywacja CDT25A degradacji → G2/M arrest; p53 (ser15, ser20) → stabilizacja p53 (zapobiega MDM2 degradacji). Mutacje ATM → ataksja-teleangiektazja: progresywna ataksja, teleangiektazje, niedobór odporności, predyspozycja do chłoniaków. B — Prawda: p53 → p21 (WAF1/CIP1) → hamuje kompleksy CDK2/cyklina E i CDK4/6/cyklina D → pRb hipofosforylowany → E2F unieruchomiony → zatrzymanie G1/S. C — Fałsz: apoptoza przy nienaprawialnych uszkodzeniach DNA jest mechanizmem ochronnym przed nowotworami — eliminuje potencjalnie onkogeniczne komórki; utrata zdolności do apoptozy (np. mutacja p53) → kumulacja mutacji → onkogeneza.',
    difficulty: 2, verified: true,
  },

  // ─── Zmienność kombinatoryczna (1) ───
  {
    topic_id: T, subtopic_id: S.kombinat,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nHypermutacja somatyczna w centrum rozmnażania (germinal center) limfocytów B polega na tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'endonukleaza AID (activation-induced cytidine deaminase) wprowadza mutacje punktowe w obszarach V genów immunoglobulin — selekcja B-komórek z wyższym powinowactwem antygenu (affinity maturation); wybrańcy różnicują się w komórki pamięci i plazmocyty wydzielające przeciwciała o wyższym powinowactwie', is_correct: true },
      { id: 'B', text: 'limfocyty B mutują geny całego genomu, aby szybciej adaptować się do nowych patogenów — to mechanizm nabytej odporności komórkowej', is_correct: false },
      { id: 'C', text: 'hypermutacja somatyczna zachodzi w szpiku kostnym podczas V(D)J rekombinacji — przed ekspozycją na antygen', is_correct: false },
      { id: 'D', text: 'hypermutacja somatyczna jest patologicznym procesem prowadzącym wyłącznie do chłoniaków B-komórkowych; u zdrowych osób nie zachodzi', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hypermutacja somatyczna (SHM): etap dojrzewania odpowiedzi humoralnej. Centrum rozmnażania (GC) węzła chłonnego: aktywowane komórki B proliferują → AID (deaminaza cytydyny) wprowadza mutacje C→U w locus Ig (~10⁻³ mutacji/bp/pokolenie vs ~10⁻⁹ dla reszty genomu) → naprawiane błędnie → mutacje w CDR (complementarity determining regions) → zróżnicowane powinowactwa. Selekcja: B-komórki z wyższym powinowactwem do antygenu (na powierzchni FDC) → przeżywają; niskie powinowactwo → apoptoza. Efekt: przeciwciała IgG/IgA/IgE o 100-1000× wyższym powinowactwie niż pierwotne IgM (affinity maturation). B — Fałsz: tylko locus Ig (Heavy i Light). C — Fałsz: VDJ rekombinacja = w szpiku przed antygenem; SHM = w GC po antygenie.',
    difficulty: 3, verified: true,
  },

  // ─── Choroby jednogenowe (2) ───
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących talagasemii.\nA. Beta-talasemia major (postać homozygotyczna lub compound heterozygotyczna) charakteryzuje się ciężką niedokrwistością hemolityczną wymagającą regularnych transfuzji krwi — wynika z braku lub znacznie zmniejszonej produkcji beta-globiny w hemoglobinie.\nB. Heterozygotyczna beta-talasemia minor jest klinicznie łagodna lub bezobjawowa — nosiciele mają zwykle nieznaczną niedokrwistość mikrocytarną, ale nie wymagają leczenia.\nC. Talasemie i anemia sierpowatokrwinkowa to jedyne choroby genetyczne dające odporność na malarię — inne choroby genetyczne krwi nie mają znaczenia dla przeżycia w rejonach endemicznych.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Beta-talasemia major: brak/mało beta-globiny; ciężka niedokrwistość; wymaga transfuzji.', is_correct: true },
      { id: 'B', text: 'Beta-talasemia minor (heterozygota): łagodna/bezobjawowa; mikrocytoza.', is_correct: true },
      { id: 'C', text: 'Tylko SCA i talasemia dają odporność na malarię.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: talasemia major (Cooley): transfuzje co 2-4 tygodnie → hemochromatoza transfuzyjna → chelacja żelaza (deferoksamina); splenomegalia (niszczenie erytrocytów); opóźnienie wzrostu, deformacje kości. Leczenie: przeszczep szpiku (najskuteczniejszy); terapia genowa (betibeglogene, 2022). B — Prawda: nosiciele talasemii minor: Hb ~10-12 g/dl (lekka), MCV niskie, MCH niskie; może być mylone z niedoborem żelaza. C — Fałsz: inne choroby hematologiczne dające odporność: G6PD (niedobór dehydrogenazy glukozo-6-fosforanu) → hemoliza w zakażeniu malarią → pasożyt nie przeżywa; ovalocytoza SE (SAO, MYO-1 Band 3) → erytrocyty owalne, oporne na inwazję plasmodium; hemoglobina C (HbC) → mniejsza inwazyjność P. falciparum.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nProgram przesiewowy noworodków (newborn screening) w Polsce i innych krajach obejmuje wiele chorób metabolicznych, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wczesne wykrycie i leczenie (dieta, enzymy zastępcze, witaminy) przed pojawieniem się objawów zapobiega nieodwracalnym uszkodzeniom mózgu i narządów — kluczowe okno terapeutyczne istnieje tylko we wczesnym niemowlęctwie', is_correct: true },
      { id: 'B', text: 'przesiew noworodkowy umożliwia diagnozę genetyczną rodziców i planowanie rodziny, ale nie ma znaczenia terapeutycznego dla samego noworodka', is_correct: false },
      { id: 'C', text: 'choroby metaboliczne są tak częste (>1:100), że masowy przesiew jest ekonomicznie nieopłacalny — stosowany jest tylko u dzieci z grup ryzyka', is_correct: false },
      { id: 'D', text: 'noworodkowy przesiew genetyczny obejmuje sekwencjonowanie całego genomu każdego dziecka i wykrywa wszystkie możliwe choroby genetyczne', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Przesiew noworodkowy: krew pobierana na bibułę (dried blood spot, Guthrie card) w 2-3. dobie życia → analiza MS/MS (tandem mass spectrometry) → wykrycie ponad 50 chorób. W Polsce: PKU (fenyloketonuria), hipotyroza, galaktozemia, mukowiscydoza, wrodzone niedobory biooptobiocytyny, kwasice organiczne (IVA, PA, MMA, GA1), zaburzenia beta-oksydacji (MCAD, VLCAD), SMA od 2021. Uzasadnienie: "window of opportunity" — przed ekspozycją na metabolit toksyczny → zapobieganie nieodwracalnym uszkodzeniom neurologicznym (PKU: Phe uszkadza mózg → dieta niskophe od 1-2 tygodnia życia → normalny rozwój). Wilson\'s rule of screening (1968): choroba ważna, znana historia naturalna, terapia dostępna, tani test, długi presymptomatyczny okres.',
    difficulty: 1, verified: true,
  },

  // ─── Choroby chromosomowe (1) ───
  {
    topic_id: T, subtopic_id: S.chromosom_c,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zespołu Turnera (45,X).\nA. Osoby z zespołem Turnera (45,X) są fenotypowo kobietami — brak chromosomu Y oznacza brak genu SRY → brak indukcji gonad do jąder → rozwój gonad w kierunku żeńskim (atroficzne pasma zamiast jajników).\nB. Fizyczne cechy Turnera: niskorosłość (utrata SHOX z chromosomu X, gen pseudoautosomalny), szyja skrzydlata (pterygium colli), koarktacja aorty, obrzęk limfatyczny rąk/nóg (hydrops fetalis), kubitusa valga (szerszy kąt noszenia).\nC. Kariotyp 45,X jest zawsze izolowany — nie istnieje mozaicyzm 45,X/46,XX ani 45,X/46,XY; kobiety z Turnerem mają identyczny kariotyp we wszystkich komórkach ciała.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Turner (45,X): kobieta; brak SRY → brak jąder; gonady jako pasma.', is_correct: true },
      { id: 'B', text: 'Objawy: niskorosłość (SHOX), szyja skrzydlata, koarktacja aorty, limfedema.', is_correct: true },
      { id: 'C', text: '45,X zawsze izolowany — brak mozaicyzmu w zespole Turnera.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: SRY (sex-determining region Y) na Yp11.3: aktywuje SOX9 → jądra; bez SRY (45,X lub 46,XX) → domyślny rozwój żeński; jednak gonady przy 45,X degenerują (streak gonads) → brak estrogenów. B — Prawda: SHOX (short stature homeobox): na PAR1 chromosomów X i Y; tylko jedna kopia u Turner → niskorosłość; leczenie: GH (hormon wzrostu) + estrogeny (feminizacja, gęstość kości). C — Fałsz: ok. 50% przypadków Turnera to mozaicyzm: 45,X/46,XX (łagodniejszy fenotyp, możliwa spontaniczna ciąża); 45,X/46,XY (ryzyko dysgerminoma w pasmach gonadowych → profilaktyczna gonadektomia); 45,X/47,XXX. Czysty 45,X (~50%) jest rzadszy niż mozaicyzm i często cięższy klinicznie.',
    difficulty: 2, verified: true,
  },

  // ─── Znaczenie ewolucyjne (1) ───
  {
    topic_id: T, subtopic_id: S.ewolucja,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nEwolucja genów przez duplikacje i dywergencję (model Ohno) jest ważna, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'duplikacja genu tworzy dodatkową kopię, która może ewoluować niezależnie — jeden paralog zachowuje pierwotną funkcję, drugi może nabywać nowe mutacje bez ryzyka utraty pierwotnej funkcji; pozwala to na ewolucję nowych białek bez utraty niezbędnych funkcji', is_correct: true },
      { id: 'B', text: 'duplikacja genu jest zawsze szkodliwa — każde podwojenie genu prowadzi do chorób genetycznych przez efekt dawki', is_correct: false },
      { id: 'C', text: 'duplikacje genów dotyczą wyłącznie prokariontów — u eukariontów geny nie mogą się duplikować', is_correct: false },
      { id: 'D', text: 'zduplikowane geny zawsze ewoluują ku nieaktywnym pseudogenom — żadna z kopii nie może nabyć nowej funkcji po duplikacji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Model Ohno (1970) "Evolution by Gene Duplication": podstawa ewolucji genomowej. Scenariusze po duplikacji: Subfunkcjonalizacja: każdy paralog traci część pierwotnych funkcji (podział ról) → oba konieczne. Neofunkcjonalizacja: jeden zachowuje pierwotną funkcję; drugi pod mniejszą presją selekcji gromadzi mutacje → nowa funkcja. Pseudogenizacja (najczęstsza): jeden paralog traci funkcję → pseudogen (wyciszony). Przykłady neofunkcjonalizacji: rodzina genów globin (embryonalne, płodowe, dorosłe hemoglobiny); geny opsyn (różne wavelength sensitivity → barwne widzenie); geny hox (kolinearna ekspresja wzdłuż osi A-P) po duplikacji klasterów. ~50% genów człowieka to ohnologi (paralongi z duplikacji genomowej u kręgowców: 2R WGD).',
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
