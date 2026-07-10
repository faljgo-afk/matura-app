// Seed: Genetyka i dziedziczenie — 20 questions (batch 3)
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
  // ─── Prawa Mendla (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPierwsze prawo Mendla (prawo czystości gamet) stwierdza, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'geny leżące na różnych chromosomach są dziedziczone niezależnie od siebie', is_correct: false },
      { id: 'B', text: 'każdy osobnik diploidalny posiada dwa allele każdego genu, które rozdzielają się do różnych gamet podczas mejozy — każda gameta zawiera tylko jeden allel danego genu', is_correct: true },
      { id: 'C', text: 'allele dominujące zawsze maskują allele recesywne, dlatego heterozygota jest nieodróżnialna fenotypowo od dominującej homozygoty', is_correct: false },
      { id: 'D', text: 'cechy nabyte przez organizm w ciągu życia są dziedziczone przez potomstwo', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'I prawo Mendla (prawo segregacji / prawo czystości gamet): organizmy diploidalne mają dwa allele każdego genu (jeden od matki, jeden od ojca); podczas mejozy te dwa allele segregują do różnych gamet → każda gameta jest haploidalna i zawiera tylko jeden allel. Stąd heterozygota Aa produkuje gamety A i a w stosunku 1:1. A — to II prawo Mendla (niezależna segregacja). C — opisuje dominację, nie I prawo. D — lamarckizm, odrzucony.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących krzyżówki trójhybrydowej (trihybryd).\nA. Trihybryd AaBbCc (geny niezależne) wytwarza 2³ = 8 typów gamet.\nB. Po skrzyżowaniu AaBbCc × AaBbCc stosunek fenotypowy w F₂ wynosi 27:9:9:9:3:3:3:1 (8 klas fenotypowych), przy założeniu pełnej dominacji alleli A, B i C.\nC. Ułamek potomstwa o fenotypie dominującym we wszystkich trzech cechach (A_B_C_) wynosi (3/4)³ = 27/64.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'AaBbCc wytwarza 8 typów gamet (2³).', is_correct: true },
      { id: 'B', text: 'F₂ AaBbCc × AaBbCc: stosunek 27:9:9:9:3:3:3:1 (8 klas fenotypowych).', is_correct: true },
      { id: 'C', text: 'Fenotyp A_B_C_ = (3/4)³ = 27/64.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: każdy heterozygotyczny locus (Aa) produkuje 2 typy gamet; 3 niezależne loci → 2³ = 8 kombinacji (ABC, ABc, AbC, Abc, aBC, aBc, abC, abc). B — Prawda: analogia do I prawa i niezależnej segregacji; dla 3 genów: (3:1)³ → stosunek 27:9:9:9:3:3:3:1; suma = 64. C — Prawda: P(A_) = 3/4; P(B_) = 3/4; P(C_) = 3/4; przy niezależności: iloczyn = 27/64. Wszystkie trzy prawdziwe.',
    difficulty: 2, verified: true,
  },

  // ─── Budowa DNA i podstawy genetyki (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'U królika kolor sierści kontrolowany jest przez szereg alleliczny z czterema allelami (kolejność dominacji: C > cᶜʰ > cʰ > c): C — dziki (szary agouti), cᶜʰ — szynszylowy (szary srebrny), cʰ — himalajski (białe ciało z czarnymi kończynami), c — albinizm (brak pigmentu). Które z poniższych stwierdzeń są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Królik o genotypie Ccʰ będzie miał fenotyp dzikiego (agouti), bo allel C jest dominujący nad cʰ', is_correct: true },
      { id: 'B', text: 'Królik o genotypie cᶜʰcʰ będzie miał fenotyp szynszylowy, bo cᶜʰ dominuje nad cʰ', is_correct: true },
      { id: 'C', text: 'Seria alleliczna oznacza, że jeden osobnik może mieć wszystkie cztery allele jednocześnie', is_correct: false },
      { id: 'D', text: 'Dwa albinistyczne króliki (cc × cc) mogą mieć wyłącznie albinistyczne potomstwo', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: C dominuje nad wszystkimi innymi allelami → Ccʰ = fenotyp dzikiego. B — Prawda: cᶜʰ dominuje nad cʰ → cᶜʰcʰ = szynszylowy. D — Prawda: cc × cc → 100% cc = albinizm (brak funkcjonalnego enzymu pigmentacyjnego). C — Fałsz: seria alleliczna opisuje wiele możliwych alleli danego LOCUS w populacji; konkretny osobnik diploidalny ma TYLKO DWA allele (jeden na każdym chromosomie homologicznym) — niezależnie od liczby alleli w populacji. Seria alleliczna to populacyjna różnorodność alleli, nie liczba alleli u jednego osobnika.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nKodominancja różni się od dominacji niezupełnej tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'w kodominancji heterozygota wykazuje fenotyp pośredni (mieszankę) obu alleli, natomiast w dominacji niezupełnej heterozygota wyraża oba allele jednocześnie i oddzielnie', is_correct: false },
      { id: 'B', text: 'w kodominancji heterozygota wyraża oba allele w pełni i jednocześnie (np. erytrocyty MN mają oba antygeny M i N); w dominacji niezupełnej heterozygota wykazuje fenotyp pośredni (np. kwiat różowy z rodziców czerwonego i białego)', is_correct: true },
      { id: 'C', text: 'kodominancja dotyczy wyłącznie genów sprzężonych z chromosomem X, a dominacja niezupełna — tylko genów autosomalnych', is_correct: false },
      { id: 'D', text: 'kodominancja i dominacja niezupełna są synonimami opisującymi ten sam zjawisko genetyczny', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Kodominancja: obydwa allele są równocześnie w pełni wyrażone w heterozygotach — przykłady: grupa krwi MN (antygeny M i N oba na erytrocytach), sierpowatokrwinkowość heterozygotyczna (HbA + HbS w tych samych erytrocytach), grupy krwi AB (antygeny A i B). Dominacja niezupełna (semidominacja): heterozygota wykazuje fenotyp POŚREDNI między dwiema homozygatami — przykłady: kwiaty lwiej paszczy (czerwone × białe → różowe), anemia sierpowatokrwinkowa (u heterozygot HbAS: klinicznie pośrednie), grzebień rozetowaty u kur (różokształtny × grochodajny → orzechowy — to epistaza, nie semidominacja). A — opis jest odwrócony. B — prawidłowe.',
    difficulty: 2, verified: true,
  },

  // ─── Mejoza (1) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mejoza,
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnice między mitozą a mejozą?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Mejoza obejmuje dwa kolejne podziały jądrowe (mejoza I i II) bez replikacji DNA między nimi, w wyniku czego z jednej komórki 2n powstają cztery komórki haploidalne (n)', is_correct: true },
      { id: 'B', text: 'Synapsis (parowanie chromosomów homologicznych) zachodzi w mejozie I, ale nie w mitozie — chromosomy homologiczne w mitozie nie parują się i segregują niezależnie', is_correct: true },
      { id: 'C', text: 'Crossing-over może zachodzić zarówno podczas mejozy (profaza I), jak i podczas mitozy (profaza) z równą częstością — nie ma różnicy między tymi podziałami pod tym względem', is_correct: false },
      { id: 'D', text: 'Mitoza zachowuje liczbę chromosomów (2n → 2n), ponieważ chromosomy siostrzane (chromatydy) rozchodzą się do komórek potomnych; mejoza redukuje liczbę chromosomów (2n → n), bo homologiczne chromosomy rozchodzą się w mejozie I', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: mejoza I (redukcyjna) → 2 komórki n; mejoza II (ekwacyjna, jak mitoza) → 4 komórki n; brak replikacji DNA między I a II. B — Prawda: synapsis (wiązanie homologów via kompleks synaptynemalny) i chiazmy są unikalne dla profazy I mejozy; w mitozie chromosomy homologiczne nie parują się. D — Prawda: mitoza: centromery pękają w anafazie → siostrzane chromatydy rozchodzą się → 2n. Mejoza I: homologiczne chromosomy (każdy złożony z 2 chromatyd) rozchodzą się → n. C — Fałsz: crossing-over mitotyczny istnieje, ale jest bardzo rzadki (ok. 10⁻⁵ na podział), zachodzi przypadkowo bez syntezy specjalnego aparatu; mejotyczny crossing-over: wysoce regulowany, obowiązkowy (co najmniej jedno chiazmo na chromosom), częstość 10⁴× wyższa niż mitotyczny.',
    difficulty: 2, verified: true,
  },

  // ─── Dziedziczenie sprzężone z płcią (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.plec,
    question_text: 'Kobieta o prawidłowym wzroku ma ojca z daltonizmem (czerwono-zielony, X-sprzężony recesywny). Jej mąż widzi kolory prawidłowo. Jakie jest prawdopodobieństwo, że ich syn będzie daltonistą?',
    question_type: 'single',
    options: [
      { id: 'A', text: '0% — skoro ojciec kobiety był daltonistą, ona sama widzi prawidłowo, więc nie może przekazać allelu daltonizmu', is_correct: false },
      { id: 'B', text: '25% — oboje rodzice są heterozygotami (Aa)', is_correct: false },
      { id: 'C', text: '50% — kobieta jest obligatoryjną nosicielką (dostała Xᵈ od ojca), więc każdy jej syn ma 50% szansy być daltonistą', is_correct: true },
      { id: 'D', text: '100% — skoro ojciec kobiety był daltonistą, wszystkie jej dzieci płci męskiej będą daltonistami', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Daltonizm: X-sprzężony recesywny (allel Xᵈ). Ojciec kobiety był daltonistą: genotyp XᵈY → dał córce chromosom Xᵈ. Matka kobiety (widziała prawidłowo, bez danych o nosicielstwie) dała jej X (bez Xᵈ). Kobieta: XᵈX — obligatoryjna nosicielka (musi być, bo dostała Xᵈ od ojca) — widzi prawidłowo (X-sprzężony recesywny). Mąż: XY (widzi prawidłowo). Gamety kobiety: ½ Xᵈ, ½ X. Synowie (XY od ojca): dostają X od matki z p=½ Xᵈ lub ½ X. P(syn daltonista) = ½. Odpowiedź C. D — błąd: nie wszystkie synowie, tylko ½.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.plec,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących determinacji płci u różnych organizmów.\nA. U Drosophila melanogaster płeć jest determinowana przez stosunek liczby chromosomów X do zestawów autosomów (X:A) — samice mają X:A=1 (XX), samce X:A=0,5 (XY); chromosom Y nie jest niezbędny do bycia samcem.\nB. U ptaków i gadów (np. węże, krokodyle) system płciowy jest ZW/ZZ: samice są heterogametyczne (ZW), samce homogametyczne (ZZ) — odwrotnie niż u ssaków.\nC. U niektórych owadów (np. szarańcza) i u nicienia C. elegans stosowany jest system X0 — samice mają dwa chromosomy X (XX lub 2X), samce tylko jeden (X0 — brak chromosomu Y).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Drosophila: płeć = stosunek X:A; Y nie decyduje o płci samca.', is_correct: true },
      { id: 'B', text: 'Ptaki/gady: samice ZW (heterogametyczne), samce ZZ (homogametyczne).', is_correct: true },
      { id: 'C', text: 'System X0: u szarańczy/C. elegans samice XX, samce X0 (brak Y).', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: u Drosophila kluczowy gen Sxl (Sex-lethal) aktywowany gdy X:A = 1 (samice); dezaktywowany gdy X:A = 0,5 (samce). XO-samice (turneropodobne) są płodne i są samicami. XXY-samce (klinefelterpodobne) są płodne i są samcami — odwrotnie niż u człowieka! Chromosom Y u Drosophila niezbędny do płodności samców, ale nie do determinacji płci. B — Prawda: u ptaków gen DMRT1 (chromosom Z) determinuje płeć; ZW = samica (heterogametyczna, jedno jajo co gen); ZZ = samiec. U gadów często determinacja przez temperaturę (TSD). C — Prawda: u Orthoptera (szarańcza) XX = samica, X0 = samiec; brak chromosomu Y (nie ewoluował). C. elegans: XX = hermafrodyta, X0 = samiec. Wszystkie trzy prawdziwe.',
    difficulty: 2, verified: true,
  },

  // ─── Geny sprzężone i crossing-over (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.sprzezenie,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nKonformacja trans (repulsion) genów sprzężonych AB/ab różni się od konformacji cis (coupling) Ab/aB tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'w konformacji trans allele dominujące obu genów (A i B) znajdują się na TYM SAMYM chromosomie homologicznym; w konformacji cis — na RÓŻNYCH chromosomach', is_correct: false },
      { id: 'B', text: 'konformacja trans (Ab/aB): allele dominujące A i B na RÓŻNYCH chromosomach homologicznych (A z b, a z B); w konformacji cis (AB/ab): oba allele dominujące na TYM SAMYM chromosomie', is_correct: true },
      { id: 'C', text: 'konformacje trans i cis opisują wyłącznie geny na chromosomach płciowych — dla genów autosomalnych nie stosuje się tych pojęć', is_correct: false },
      { id: 'D', text: 'konformacja trans i cis są tożsame — obie oznaczają, że geny leżą na tym samym chromosomie, różnią się jedynie odległością między genami', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Konformacje sprzężenia: Cis (coupling, faza sprzężenia): allele dominujące NA TYM SAMYM chromosomie: AB/ab. Gamety parentalne (częste): AB i ab. Gamety rekombinacyjne (rzadkie): Ab i aB. Trans (repulsion, faza odpychania): allele dominujące na RÓŻNYCH chromosomach: Ab/aB. Gamety parentalne (częste): Ab i aB. Gamety rekombinacyjne (rzadkie): AB i ab. Znaczenie: ta sama odległość genetyczna (cM), ale krzyżówka testowa z homozygotą recesywną (aabb) daje różne proporcje klas potomstwa. Przy ścisłym sprzężeniu: cis → prawie wyłącznie AB i ab; trans → prawie wyłącznie Ab i aB.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.sprzezenie,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących interferencji (interference) i koincydencji w mapowaniu genetycznym.\nA. Koincydencja (coefficient of coincidence, CoC) = (obserwowana częstość podwójnych rekombinantów) / (oczekiwana częstość podwójnych rekombinantów); wartość CoC = 1 oznacza brak interferencji.\nB. Interferencja pozytywna (I > 0, CoC < 1) oznacza, że jedno crossing-over zmniejsza prawdopodobieństwo drugiego crossing-over w pobliżu — podwójne rekombinacje są rzadsze niż oczekiwano.\nC. Interferencja negatywna (CoC > 1) jest typowa dla genów eukariotycznych — jedno crossing-over stymuluje kolejne i dlatego u ssaków obserwujemy bardzo częste podwójne crossing-over.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'CoC = obserwowane/oczekiwane podwójne rekombinacje; CoC=1 → brak interferencji.', is_correct: true },
      { id: 'B', text: 'Interferencja pozytywna (I>0, CoC<1): jedno crossing-over hamuje kolejne w pobliżu.', is_correct: true },
      { id: 'C', text: 'Interferencja negatywna typowa dla eukariontów: crossing-over stymuluje kolejne.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: CoC = (rzeczywista liczba podwójnych rekombinantów) / (produkt obu RF) × 100%; CoC = 1: obserwowane = oczekiwane → brak interferencji. B — Prawda: interferencja pozytywna (I = 1 − CoC > 0 → CoC < 1): jedno chiazmo "wyklucza" kolejne w okolicy ~ 20-40 cM → podwójne rekombinacje rzadsze. U ssaków interferencja pozytywna jest dominująca (CoC < 1 dla bliskich loci). C — Fałsz: interferencja NEGATYWNA (CoC > 1: podwójne rekombinacje częstsze niż oczekiwano) jest rzadkością u eukariotów (opisywana np. u drożdży w pewnych regionach, u wirusów); u ssaków interferencja jest głównie POZYTYWNA. Interferencja pozytywna ma biologiczne podstawy: tworzone chiazmo wymaga białek (np. MLH1) i "wyczerpuje" zasób lub zajmuje przestrzeń na chromosomie, utrudniając kolejne.',
    difficulty: 3, verified: true,
  },

  // ─── Grupy krwi (1) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.krew,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nGen sekrecji ABO (FUT2, gen Se/se) determinuje, czy antygeny ABO są wydzielane do śliny i innych wydzielin. Osoba niewydzielająca (se/se) różni się od wydzielającej (Se/_) tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'osoba niewydzielająca nie posiada antygenów ABO na żadnych komórkach ciała — ani na erytrocytach, ani w wydzielinach', is_correct: false },
      { id: 'B', text: 'osoba niewydzielająca ma prawidłowe antygeny ABO na erytrocytach (determinowane przez gen ABO, chromosom 9), ale nie posiada tych antygenów w ślinie, łzach ani nasieniu — gen FUT2 dotyczy wydzielania do płynów ciała, nie erytrocytów', is_correct: true },
      { id: 'C', text: 'osoby niewydzielające (se/se) mają zawsze grupę krwi 0, bo brak FUT2 uniemożliwia ekspresję antygenów A i B w organizmie', is_correct: false },
      { id: 'D', text: 'gen FUT2 i gen ABO to różne nazwy tego samego genu zlokalizowanego na chromosomie 9', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Status wydzielacza (secretor status): Gen ABO (chromosom 9): koduje transferazy A/B → antygeny A, B na erytrocytach i nabłonku (zawsze). Gen FUT2 = gen Se (chromosom 19): koduje fukozylotransferazę-2 → antygen H w wydzielinach (ślina, łzy, pot, nasienie, wydzielina szyjki macicy). Wydzielacz (Se/_): ma antygeny ABO w ślinie → można określić grupę krwi ze śliny (kryminalistyka). Niewydzielacz (se/se; ~20% Europejczyków): prawidłowe antygeny ABO na erytrocytach (FUT1 = H na erytrocytach działa normalnie), ale brak antygenów w wydzielinach. Ciekawostka medyczna: status wydzielacza wpływa na podatność na zakażenia (norovirus, H. pylori preferują wydzielające osoby ABO+H).',
    difficulty: 3, verified: true,
  },

  // ─── Kariotyp (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.kariotyp,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mozaicyzmu (mosaicism) chromosomowego.\nA. Mozaicyzm chromosomowy powstaje, gdy nondysjunkcja lub utrata chromosomu zachodzi w komórce zarodkowej po zapłodnieniu (w trakcie pierwszych podziałów mitotycznych zygoty) — organizm ma dwie lub więcej linii komórkowych o różnych kariotypach.\nB. Mozaicyzm konstytucyjny (ogólnoustrojowy) jest zawsze łagodniejszy klinicznie niż pełna trisomia — fenotyp zależy od odsetka komórek z nieprawidłowym kariotypem i od etapu, w którym nastąpiła błędna segregacja.\nC. Badanie kariotypu z limfocytów krwi obwodowej zawsze wykrywa mozaicyzm ograniczony do łożyska (confined placental mosaicism, CPM) — chromosomy łożyska i płodu są identyczne.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mozaicyzm: nondysjunkcja po zapłodnieniu → dwie linie komórkowe o różnych kariotypach.', is_correct: true },
      { id: 'B', text: 'Mozaicyzm konstytucyjny zazwyczaj łagodniejszy niż pełna trisomia — zależny od % komórek.', is_correct: true },
      { id: 'C', text: 'Badanie kariotypu z krwi zawsze wykrywa confined placental mosaicism (CPM).', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: nondysjunkcja mitotyczna po zapłodnieniu: np. podział 2-komórkowy z błędem → jedna linia komórkowa traci chromosom, druga zyskuje → np. 46,XX/47,XX+21 (mozaicyzm trisomii 21). B — Prawda: mozaicyzm Downa (46/47,+21): fenotyp zazwyczaj łagodniejszy niż pełna trisomia 21; jednak zależy od proporcji komórek tri 21 i od tkanki. C — Fałsz: CPM (confined placental mosaicism): błąd w podziale trofoblastu (tk. łożyska) → łożysko trisomiczne, ale płód diploidalny (korekcja postzygotyczna). Badanie kariotypu z krwi obwodowej (limfocyty = tkanki płodu) nie wykryje CPM! CPM wymaga biopsji kosmówki (CVS) lub amniopunkcji; może powodować fałszywie pozytywne wyniki CVS.',
    difficulty: 3, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.kariotyp,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nNieinwazyjna diagnostyka prenatalna (NIPT, cell-free DNA) polega na tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'z krwi matki izoluje się komórki płodu i bada ich kariotyp metodą hodowli in vitro — tak samo jak w amniopunkcji', is_correct: false },
      { id: 'B', text: 'z krwi matki analizuje się wolne DNA płodowe (cfDNA, ~10–15% wolnego DNA we krwi matki, pochodzi z apoptozy trofoblastu) — wykrywa aneuploidie chromosomów 13, 18, 21 i gonozomów metodą sekwencjonowania nowej generacji (NGS)', is_correct: true },
      { id: 'C', text: 'diagnoza NIPT jest ostateczna i wystarczająca do podjęcia decyzji klinicznych — nie wymaga potwierdzenia metodami inwazyjnymi (amniopunkcja, CVS)', is_correct: false },
      { id: 'D', text: 'badanie NIPT może być wykonane już w 6. tygodniu ciąży i wykrywa wszystkie znane aberracje chromosomowe z czułością 100%', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'NIPT (Non-Invasive Prenatal Testing): pobieramy krew matki → izolujemy wolne DNA (cfDNA) z osocza: ~85-90% to cfDNA matki (z apoptozy leukocytów), ~10-15% to cfDNA płodowe (z apoptozy syncytiotrofoblastu łożyska). Sekwencjonowanie NGS (massive parallel sequencing) liczy fragmenty z każdego chromosomu → więcej odczytów chr. 21 → sugestia trisomii 21. Czułość: trisomia 21 ~99%, trisomia 18 ~97%, trisomia 13 ~90%; fałszywie dodatnie ~0.1–0.5%. Termin: od 10. tygodnia ciąży. Ograniczenia: test przesiewowy (screening), NIE diagnostyczny → wyniki dodatnie wymagają potwierdzenia CVS lub amniopunkcją (kariotyp/FISH). A — fałsz: izolacja komórek płodowych z krwi matki to inna (trudniejsza) metoda. C i D — fałsz.',
    difficulty: 2, verified: true,
  },

  // ─── Mutacje (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mutacje,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mutacji dynamicznych (ekspansja powtórzeń trinukleotydowych).\nA. Choroba Huntingtona (HD) jest spowodowana ekspansją powtórzeń CAG w genie HTT — powyżej ok. 36 powtórzeń gen koduje huntingtynę z długim pasmem poliglutaminowym, która ma właściwości toksyczne; HD dziedziczy się autosomalnie dominująco.\nB. Zespół łamliwego chromosomu X (FXS, Fragile X syndrome) jest spowodowany ekspansją powtórzeń CGG w regionie 5-prime UTR genu FMR1 — przy >200 powtórzeniach gen jest wyciszony przez metylację → brak białka FMRP → najczęstsza genetyczna przyczyna niepełnosprawności intelektualnej u chłopców.\nC. Ekspansja powtórzeń trinukleotydowych jest dziedziczona stabilnie — liczba powtórzeń nie zmienia się z pokolenia na pokolenie i nie wpływa na wiek zachorowania.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Huntington: ekspansja CAG w HTT; >36 powtórzeń = patologia; dziedziczenie AD.', is_correct: true },
      { id: 'B', text: 'Fragile X (FXS): ekspansja CGG w FMR1; >200 powtórzeń → metylacja → brak FMRP.', is_correct: true },
      { id: 'C', text: 'Ekspansja trinukleotydowa stabilna — liczba powtórzeń nie zmienia się między pokoleniami.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: HD: 40+ powtórzeń CAG → choroba; 36-39 → zmniejszona penetracja; <36 → normalnie. Huntingtyna patologiczna agreguje w neuronach → neurotoksyczność (jądra prążkowane). B — Prawda: FMR1: <55 powtórzeń CGG: normalnie; 55-200: premutacja (przekazywana, ryzyko ekspansji u potomków); >200: pełna mutacja + metylacja promotora + wyciszenie genu. FMRP (RNA-binding protein) niezbędny dla synaptogenezy. FXS: IQ<70 u chłopców, długa twarz, duże uszy, makroorchidyzm. C — Fałsz: ekspansja trinukleotydowa jest NIESTABILNA — przy transmisji z pokolenia na pokolenie liczba powtórzeń często wzrasta (szczególnie przy transmisji przez matkę u FXS; przez ojca u HD). Zjawisko antycypacji: potomstwo choruje wcześniej i ciężej niż rodzic.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mutacje,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPrawo Haldane\'a dotyczące mutacji sprzężonych z chromosomem X stwierdza, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'częstość mutacji w genach sprzężonych z X jest trzy razy wyższa niż w genach autosomalnych, ze względu na hemizygotyczność samców', is_correct: false },
      { id: 'B', text: 'w stanie równowagi mutacyjno-selekcyjnej, dla letalnych chorób X-sprzężonych recesywnych, jedna trzecia (1/3) przypadków w każdym pokoleniu to nowe mutacje (de novo), ponieważ samce hemizygotyczne są zawsze dotknięte i eliminowane', is_correct: true },
      { id: 'C', text: 'mutacje w genach sprzężonych z X mogą być dziedziczone tylko po linii matczynej — ojciec nie może przekazać mutacji sprzężonej z X żadnemu potomkowi', is_correct: false },
      { id: 'D', text: 'prawo Haldane\'a dotyczy wyłącznie mutacji chromosomowych (aneuploidii) — nie odnosi się do mutacji punktowych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Prawo Haldane\'a (1935): dla chorób X-sprzężonych recesywnych letalnych (lub całkowicie niezdolnych do reprodukcji, jak hemofilia A/B przed erą czynników krzepnięcia): allele chorobotwórcze tracone są wyłącznie z hemizygotycznych samców (dotknięci, nie rozmnażają się). Równowaga: straty kompensowane przez nowe mutacje. W populacji alleli patologicznych: 1/3 u dotkniętych samców (XᵃY) + 2/3 u nosicielek samic (XᴬXᵃ). Każde pokolenie traci 1/3 alleli (te u samców, zawsze dotknięci). Stąd 1/3 przypadków to nowe mutacje de novo. Potwierdzono dla hemofilii A (F8) i B (F9), dystrofii mięśniowej Duchenne\'a (DMD). C — Fałsz: ojciec MOŻE przekazać X-sprzężoną mutację córkom (wszystkim), ale nie synom (synowie dostają Y od ojca).',
    difficulty: 3, verified: true,
  },

  // ─── Genetyka populacyjna (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.populacyjna,
    question_text: 'W populacji ludzkiej pewna choroba autosomalna recesywna (aa) występuje z częstością 1/10 000 urodzin. Przy założeniu równowagi Hardy\'ego-Weinberga, ile wynosi częstość nosicieli (Aa) w tej populacji?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Około 2/100 (2%) — czyli co 50. osoba jest nosicielem', is_correct: true },
      { id: 'B', text: 'Około 1/100 (1%) — nosiciele są tak samo rzadcy jak chorzy', is_correct: false },
      { id: 'C', text: 'Około 1/50 (2%) nosicieli — to ta sama wartość, odpowiedź A jest błędna', is_correct: false },
      { id: 'D', text: 'Około 1/200 (0,5%) — nosiciele są dwukrotnie rzadsi niż chorzy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'H-W: q² = 1/10 000 → q = 1/100 = 0,01. p = 1 − q = 0,99 ≈ 1. Nosiciele (Aa): 2pq = 2 × 0,99 × 0,01 ≈ 2 × 0,01 = 0,02 = 2% = 1/50. Czyli na ok. 50 osób jedna jest nosicielem. Chorzy (aa): 1/10 000 = 0,01%. Stosunek nosicieli do chorych: 2pq/q² = 2p/q ≈ 2/0,01 = 200:1. Paradoks H-W: dla rzadkich chorób recesywnych zdecydowana większość alleli patologicznych jest ukryta u heterozygot-nosicieli, a nie u chorych. Odpowiedź A.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.populacyjna,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wsobności (inbreeding) i depresji inbredowej.\nA. Wsobność (inbreeding) — kojarzenie się blisko spokrewnionych osobników — zwiększa udział homozygot w populacji kosztem heterozygot, podnosząc ryzyko ujawnienia się recesywnych alleli chorobliwych u potomstwa.\nB. Depresja inbredowa: obniżenie sprawności (fitnessu) u inbredowych potomków w porównaniu z potomkami niespokrewnionych osobników — wynika głównie z homozygotyzacji szkodliwych alleli recesywnych.\nC. Współczynnik inbredu F (inbreeding coefficient) osobnika wynoszący F = 0,25 oznacza, że 25% jego genów pochodzi od przodków obu linii rodzicielskich jednocześnie — jest to charakterystyczne dla potomka brata i siostry lub wujka i siostrzenicy.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Wsobność: więcej homozygot → ryzyko ujawnienia alleli recesywnych chorób.', is_correct: true },
      { id: 'B', text: 'Depresja inbredowa: obniżony fitness → homozygotyzacja szkodliwych alleli recesywnych.', is_correct: true },
      { id: 'C', text: 'F=0,25 odpowiada rodzeństwu (brat-siostra) lub wujek-siostrzenica.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: heterozygotyczność maleje o ½F na pokolenie inbreedu; wzrasta ryzyko homozygot aa (np. albinizm, PKU, hemofilia autosomalna recesywna). B — Prawda: depresja inbredowa dokumentowana u zwierząt (lwy w Ngorongoro, gepardów) i u roślin; u człowieka: dzieci z małżeństw spokrewnionych: wyższa śmiertelność niemowlęca, wyższe ryzyko wad wrodzonych. C — Prawda: F = prawdopodobieństwo, że dwa allele w locus są identyczne przez descendencję (IBD). F(brat × siostra) = 1/4 = 0,25. F(wujek × siostrzenica) = 1/8 = 0,125. Uwaga: brat-siostra i rodzic-dziecko mają F=0,25; pierwsi kuzyni F=0,0625. Interpretacja F: odsetek loci, w których potomek jest IBD-homozygotem. Wszystkie trzy prawdziwe.',
    difficulty: 3, verified: true,
  },

  // ─── Dziedziczenie wielogenowe (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.wielogenowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nHeritabilność w szerokim sensie (H²) i heritabilność w wąskim sensie (h²) różnią się tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'H² uwzględnia tylko wariancję addytywną (efekty średnie alleli), natomiast h² uwzględnia wszystkie efekty genetyczne (addytywne, dominacji i epistazy)', is_correct: false },
      { id: 'B', text: 'h² (heritabilność w wąskim sensie) = V_A / V_P (wariancja addytywna / całkowita wariancja fenotypowa) — mierzy, jaka część zmienności fenotypowej odpowiada dziedzicznym efektom addytywnym; H² = V_G / V_P uwzględnia wszystkie efekty genetyczne (dominacja, epistaza)', is_correct: true },
      { id: 'C', text: 'heritabilność H² = 1 oznacza, że cecha jest w 100% zdeterminowana przez środowisko i jej zmienność nie ma podłoża genetycznego', is_correct: false },
      { id: 'D', text: 'heritabilność jest stała dla danej cechy w każdej populacji i środowisku — raz wyznaczona H² obowiązuje wszędzie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Heritabilność: Szeroki sens: H² = V_G / V_P, gdzie V_G = V_A + V_D + V_I (addytywna + dominacja + epistatyczna); odpowiada na pytanie "jaka część zmienności fenotypowej jest genetyczna?". Wąski sens: h² = V_A / V_P; odpowiada na pytanie "ile z tej zmienności jest dziedziczone addytywnie (przewidywalnie)?"; h² jest ważne w hodowli i selekcji → odzwierciedla odpowiedź na selekcję. A — definicje odwrócone. C — Fałsz: H²=1 → CAŁA zmienność to genetyczna (np. grupy krwi AB0: H²≈1); H²=0 → cała zmienność środowiskowa. D — Fałsz: heritabilność zależy od POPULACJI i ŚRODOWISKA; ta sama cecha może mieć H²=0,8 w jednym środowisku, H²=0,3 w innym (zróżnicowanym środowiskowo).',
    difficulty: 3, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.wielogenowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cech ilościowych i jakościowych w genetyce.\nA. Cechy jakościowe (np. grupe krwi ABO, barwa kwiatów u grochu Mendla) wykazują nieciągłą zmienność — osobniki można jednoznacznie przypisać do dyskretnych kategorii; są zazwyczaj kontrolowane przez jeden lub kilka genów o dużym efekcie (geny główne).\nB. Cechy ilościowe (np. wzrost, masa ciała, IQ) wykazują ciągłą zmienność i rozkład zbliżony do normalnego — kontrolowane przez wiele genów (poligenizm) i silnie modyfikowane przez środowisko.\nC. Cecha ilościowa nigdy nie może mieć podłoża genetycznego — ciągłość rozkładu fenotypowego wyklucza udział genów w jej determinacji.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Cechy jakościowe: nieciągła zmienność, kategorie dyskretne, geny główne.', is_correct: true },
      { id: 'B', text: 'Cechy ilościowe: ciągła zmienność, rozkład normalny, poligenizm + środowisko.', is_correct: true },
      { id: 'C', text: 'Cechy ilościowe nie mają podłoża genetycznego — ciągłość wyklucza geny.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: cechy jakościowe (Mendelowskie): grupy krwi ABO (4 kategorie: A, B, AB, 0), barwa kwiatów (czerwona/biała), grupy krwi MN — determinowane przez jeden lub kilka loci z wyraźną dominacją. B — Prawda: cechy ilościowe: wzrost, masa ciała, ciśnienie krwi, plonowanie zbóż — wiele loci o małym addytywnym efekcie + wpływ środowiska → ciągły rozkład (normalnopodobny). C — Fałsz: cechy ilościowe mają SILNE podłoże genetyczne (heritabilność H²: wzrost ~80%, IQ ~50-70%); ciągłość rozkładu jest właśnie skutkiem nakładania się efektów wielu genów (każdy wnosi mały efekt) + środowisko; GWAS (genome-wide association studies) identyfikuje setki loci wpływające na wzrost czy BMI.',
    difficulty: 1, verified: true,
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
  console.log(`Seeding ${questions.length} questions for Genetyka i dziedziczenie (batch 3)...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
