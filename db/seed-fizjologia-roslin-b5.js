// Seed batch 5/7 — Fizjologia roślin
// Hormony roślinne (7) + Ruchy roślin (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'

const S = {
  hormon: 'c3f1012e-cde4-47d7-adcb-9887d090322a',
  ruchy:  '550d7c0b-6b30-4527-93d7-aab33d62dfb1',
}

const questions = [

  // ── HORMONY ROŚLINNE (7) ─────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'single',
    question_text: 'Dominacja wierzchołkowa polega na hamowaniu wzrostu pędów bocznych przez pęd główny. Który mechanizm hormonalny wyjaśnia to zjawisko?',
    options: [
      { id: 'A', text: 'Auksyna produkowana w wierzchołku wzrostu pędu transportowana biegunowo w dół hamuje wzrost pąków bocznych (bezpośrednio lub przez indukcję produkcji strygolaktorów); cytokininy z korzenia promują wzrost pąków; stosunek IAA/CK decyduje o dominacji', is_correct: true },
      { id: 'B', text: 'Wierzchołek wzrostu produkuje inhibitor fotosyntezy (antooksydanty), który blokuje chloroplasty pędów bocznych; bez energii z fotosyntezy pąki boczne nie mogą rosnąć', is_correct: false },
      { id: 'C', text: 'Dominacja wierzchołkowa jest zjawiskiem czysto fizycznym: pęd główny absorbuje całe dostępne światło, zacienając pąki boczne; bez światła fototropizm jest niemożliwy i pąki pozostają w spoczynku', is_correct: false },
      { id: 'D', text: 'Auksyna produkowana w pąkach bocznych hamuje wzrost samych pędów bocznych (autoregulacja); wierzchołek główny produkuje gibeerliny, które neutralizują lokalnie auksyny pąków', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Dominacja wierzchołkowa (apical dominance): (1) wierzchołkowy meristem produkuje IAA → transport biegunowy w dół (PIN3, PIN7 w noduach) → nagromadzenie IAA przy pąkach bocznych; (2) IAA indukuje syntezę strygolaktorów (SL) w nodusach łodygi → SL (MAX2) hamuje transport CK do pąków i inhibituje białka D14-SL kompleksu; (3) cytokininy (CK) z korzenia → aktywacja pąków (promują podziały); (4) stosunek IAA/CK: wysokie IAA → dominacja; obcięcie wierzchołka → IAA spada → CK dominuje → wzrost pędów bocznych; (5) zastosowanie: ogrodnictwo — przycinanie = usunięcie IAA → krzaczasty pokrój.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'single',
    question_text: 'Etylen odgrywa kluczową rolę w procesach senescencji (starzenia) liści i opadania (abscyzji) liści i owoców. Który mechanizm jest POPRAWNY?',
    options: [
      { id: 'A', text: 'Etylen indukuje syntezę hydrolaz w strefie abscyzji (specjalna warstwa komórek przy nasadzie ogonka liściowego/owocu): cellulaz i pektynaz rozkładających ścianę komórkową; warstwa oddzielająca pęka → opadnięcie; IAA hamuje, etylen promuje abscyzję', is_correct: true },
      { id: 'B', text: 'Etylen bezpośrednio trawi chlorofil w chloroplastach przez oksydację; liście zielone zawierają inhibitor etylenu (antoetylen), który zapobiega starzeniu dopóki liść jest aktywny fotosyntetycznie', is_correct: false },
      { id: 'C', text: 'Abscyzja jest wywoływana wyłącznie przez ABA: ABA rozkłada warstw komórkową u nasady liścia; etylen jest nieaktywny w procesie abscyzji i działa wyłącznie na dojrzewanie owoców', is_correct: false },
      { id: 'D', text: 'Etylen hamuje starzenie liści i zapobiega ich opadaniu; wysoka produkcja etylenu jest sygnałem dla rośliny aby utrzymać liście jak najdłużej na gałęzi podczas suszy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Abscyzja (opadanie): (1) senescencja liścia: → wzrost produkcji etylenu (endogennego) → aktywacja genów SAG (senescence-associated genes) → degradacja chlorofilu (chlorofilaza → fagosomalne trawienie), białek, RNA, lipidów; przenoszone składniki do aktywnych organów; (2) strefa abscyzji: 2–5 warstw komórek o cienkiej ścianie przy nasadzie; IAA transport z blaszki → hamuje rozwój strefy abscyzji; gdy liść starzeje → IAA spada → etylen rośnie → cellulazy (endo-β-1,4-glukanazy) + pektynazy (pektylowanaza) → hydroliza ściany → opadnięcie; (3) jesienne opadanie liści: krótki dzień → ABA → senescencja → etylen → abscyzja.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'multiple',
    question_text: 'Brassinosteroidy (BR) i strygolaktorye (SL) to stosunkowo nowo poznane hormony roślinne. Które stwierdzenia są POPRAWNE? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Brassinosteroidy są steroidowymi hormonami roślinnymi (strukturalnie podobne do hormonów sterydowych zwierząt); regulują elongację komórek, różnicowanie naczyń ksylemu, odpowiedź na stres; mutanty bri1 (brak receptora BR) są karłowate i ciemnozielone', is_correct: true },
      { id: 'B', text: 'Strygolaktorye (SL) odkryto jako sygnały warunkujące kiełkowanie pasożytniczych chwastów (Striga, Orobanche) z nasion w glebie; w roślinie macierzystej regulują rozgałęzianie pędów (hamowanie pąków bocznych)', is_correct: true },
      { id: 'C', text: 'Kwas jasmonowy (JA) jest hormonem obrony: syntezowany po zranieniu mechanicznym lub ataku owadów → indukuje syntezę inhibitorów proteinaz, toksyn (glukozynolany, nikotyna) i substancji lotnych wabiących drapieżniki owadów', is_correct: true },
      { id: 'D', text: 'Brassinosteroidy są produkowane wyłącznie w korzeniach i transportowane ksylemem do pędów; na miejscu miejscowe stosowanie BR nie ma żadnego efektu ponieważ działają tylko w korzeniu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) brassinosteroidy (BL, epibrassinolid): C28/C29 sterole; receptor BRI1 (LRR-kinaza receptorowa w błonie) + koreceptor BAK1 → fosforylacja BES1/BZR1 → geny wzrostu; karłowatość bri1 = kompaktowy (brak elongacji) + ciemnozielony (akumulacja chlorofilu). (B) strygolaktorye: terpenoidy (karboksylowe laktotryterpeny); wydzielane do gleby przez korzenie → kiełkowanie Striga, Orobanche, Phelipanche (pasożyty korzeniowe niszczące zboża w Afryce); wewnątrzroślinnie: receptor D14 (α/β-hydrolaza) + MAX2 (F-box) → degradacja represorów D53/SMXL → hamowanie pąków. (C) JA: synteza z kwasu linolowego (octadecanoic pathway w chloroplastach + peroksysomach); rana → Ca²⁺ → fosfolipaza → JA; indukuje PR-proteins, inhibitory proteaz (hamują trawienie przez owady); wabienie drapieżników: HIPVs (herbivore-induced plant volatiles). (D) fałsz: BR produkowane lokalnie w wielu tkankach; działają parakrynnie; zewnętrzna aplikacja skuteczna.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących giberelin:',
    options: [
      { id: 'A', text: 'Gibereliny były odkryte w związku z chorobą "głupiego siewki" (bakanae) ryżu wywoływaną przez grzyb Gibberella fujikuroi; chore rośliny rosły dwukrotnie szybciej od zdrowych z powodu nadmiernego wydzielania GA przez grzyba.', is_correct: true },
      { id: 'B', text: 'Gibereliny stosowane zewnętrznie na rośliny dwuletnie mogą zastąpić wymagane traktowanie niską temperaturą (wernalizację) i długim dniem (fotoperiodyzm) i indukować kwitnienie.', is_correct: true },
      { id: 'C', text: 'Gibereliny powodują karłowatość roślin przez hamowanie elongacji komórek; rośliny karłowate z mutacjami w szlaku giberelin mają podwyższony poziom GA, co tłumaczy ich kompaktowy pokrój.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: E. Kurosawa 1926 (Japonia): obserwacja bakanae; T. Yabuta i T. Hayashi 1935: izolacja gibereliny A; Cross et al. 1954 (UK): struktura GA3; aktywne GA: GA1, GA3, GA4, GA7 (z ok. 136 naturalnych GA). B — Prawda: rośliny dwuletnie (marchew, burak) wymagają vernalizacji (chłód) + długi dzień → kwitnienie; GA może zastąpić oba wymagania u wielu gatunków (np. hyzop, szpinach); zastosowanie: produkcja nasion roślin dwuletnich. C — Fałsz: GA stymuluje elongację; rośliny karłowate mają NIEDOBÓR GA lub defekty w percepcji GA; np. la (brak ent-kaurenu syntazy = la crette, brak GA); paclobutrazol (inhibitor biosyntezy GA) → karłowacenie; nadmiar GA → gigantyzm ("Mendlows" u grochu: Mendel Le = brak funkcjonalnej ent-kaurenu syntazy → brak GA → karłowate le le).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'single',
    question_text: 'Cytokininy (np. zeatyna, benzyloadenina) i auksyny współdziałają w regulacji organogenezy. Które zestawienie POPRAWNIE opisuje wyniki eksperymentu z kulturą tkankową na pożywkach o różnym stosunku CK:IAA?',
    options: [
      { id: 'A', text: 'Wysoki stosunek CK/IAA (np. 10:1) → tworzenie pąków przybyszowych (caulogeneza); niski stosunek CK/IAA (1:10) → tworzenie korzeni przybyszowych (rizogeneza); równy stosunek → kaliogeneza (kalus niezróżnicowany)', is_correct: true },
      { id: 'B', text: 'Wysoki CK/IAA → tworzenie nasion; niski CK/IAA → tworzenie tkanki vascular; równy → tworzenie zarodków somatycznych bez żadnej regulacji', is_correct: false },
      { id: 'C', text: 'Stosunki CK i IAA nie mają znaczenia — organogeneza jest determinowana wyłącznie przez skład mineralny pożywki (poziom azotu i fosforu); cytokininy i auksyny nie wpływają na organogenezę in vitro', is_correct: false },
      { id: 'D', text: 'Każdy gatunek rośliny wymaga identycznego stosunku CK/IAA = 5:1 dla kaulugenezy i 1:5 dla rizogenezy; wartości te są stałe dla wszystkich gatunków roślin naczyniowych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Klasyczny eksperyment Skoog & Miller (1957, Sci.): tytoniowy kalus (Nicotiana tabacum) na pożywkach MS z różnymi stosunkami kinetyny (CK) do IAA: (1) wysoki CK, niski IAA (np. 10 µM CK + 0,03 µM IAA) → pąki wegetatywne (caulogeneza); (2) niski CK, wysoki IAA (0,02 µM CK + 3 µM IAA) → korzenie (rizogeneza); (3) pośredni stosunek → kalus niezróżnicowany; (4) oba nieobecne → brak wzrostu; mechanizm: CK → podziały (CDK aktywacja) + IAA → elongacja i różnicowanie; stosunek aktywuje różne ścieżki. Podstawa techniki mikropropagacji: klonowanie roślin przez tkanki in vitro.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują rolę auksyn w rozwijaniu się owoców i ich praktyczne zastosowanie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Auksyny produkowane przez rozwijające się nasiona stymulują wzrost ścianki owocni; usunięcie zapłodnionego słupka lub nasion z kwiatu powoduje zahamowanie wzrostu owocni; egzogenna IAA może zastąpić nasiona i wywołać partenokarpię', is_correct: true },
      { id: 'B', text: 'Partenokarpiczne owoce (bez nasion, np. odmiany bananów, winogron bezpestkowych, pomidorów szklarniowych) mogą powstawać naturalnie lub być indukowane przez zewnętrzne zastosowanie auksyn lub GA', is_correct: true },
      { id: 'C', text: 'Syntetyczne auksyny (2,4-D, MCPA) stosowane w stężeniach herbicydowych selektywnie niszczą szerokolistne chwasty (dwuliścienne) a nie trawę (jednoliścienne); różnica wrażliwości zależy od tempa metabolizmu 2,4-D', is_correct: true },
      { id: 'D', text: 'Auksyny hamują opadanie owoców przez aktywację strefy abscyzji; aplikacja IAA na ogon owocowy przyspiesza abscyzję i stosowana jest do kontrolowanego zbioru mechanicznego w sadach', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) klasyczny eksperyment Gustafson (1936): usunięcie pyłku/nasion → brak wzrostu owocni; zastosowanie IAA/GA → owoc beznasienny (partenokarpiczny); nasiona = źródło IAA w naturalnym owocu. (B) partenokarpia naturalna: banana (Musa): tryptoploidalne, nasiona zredukowane; winogron bezpestkowy (Vitis, odmiany Thompson Seedless): bez zapłodnienia lub GA; pomidor szklarniowy: zapylany wibracją (brak wiatru) lub GA. (C) herbicydy auksynoowe: 2,4-D (dichlorofenoksyoctan), MCPA, 2,4,5-T; dwuliścienne: bardziej wrażliwe = bardziej przenikliwy kalkulus + mniejsze zdolności rozkładu; jednoliścienne (trawy): szybszy metabolizm 2,4-D → mniej szkody; selektywność oparta na kinetyce metabolizmu. (D) fałsz: auksyny HAMUJĄ abscyzję (por. batach 5 — IAA hamuje rozwój strefy abscyzji); zastosowanie auksyn (NAA — kwas naftylooctowy) → zapobieganie opadaniu owoców przed zbiorem; etylen/Ethephon → przyspieszenie abscyzji w sadach.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'single',
    question_text: 'Kwas salicylowy (SA) jest hormonem regulującym odpowiedź roślin na patogeny. Który efekt SA jest POPRAWNIE opisany?',
    options: [
      { id: 'A', text: 'SA indukuje SAR (Systemic Acquired Resistance — układową nabytą odporność): po zakażeniu jednego liścia → SA sygnalizuje do pozostałych liści → pre-aktywacja mechanizmów obronnych (PR-proteins: chitynazy, PR-1, PR-2) we wszystkich liściach przed atakiem patogenu', is_correct: true },
      { id: 'B', text: 'SA powoduje otwieranie aparatów szparkowych podczas ataku patogenu, ułatwiając wnikanie obrończe komórek T-limfocytów z powietrza do tkanki liścia', is_correct: false },
      { id: 'C', text: 'SA jest wyłącznie inhibitorem wzrostu: aplikacja SA na rośliny powoduje ich natychmiastowe obumieranie poprzez inhibicję wszystkich enzymów mitochondrialnych bez żadnych efektów obronnych', is_correct: false },
      { id: 'D', text: 'Kwas salicylowy jest przekształcany przez rośliny w aspirynę (kwas acetylosalicylowy) jako forma transportowa przez ksylem do wszystkich narządów; aspiryna jest aktywnym hormonem roślinnym', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Kwas salicylowy (SA): (1) lokalnie: zakażenie wirusem/grzybem/bakterią → hipersensitive response (HR = lokalna śmierć komórkowa = programowana śmierć jako pułapka); SA gromadzi się; (2) SAR: SA (lub methylSA, lotnisty) transportowany do innych liści → aktywacja NPR1 (receptor SA) → czynniki transkrypcyjne TGA → PR-geny: PR-1 (marker SAR), PR-2 (β-1,3-glukanaza), PR-3/4 (chitynazy); (3) praktyczne: odkrycie SAR przez Ross 1961 (tytoń-TMV); podobieństwo do układu odporności zwierząt; (4) indukcja przez SA analogów (BTH — benzothiadiazole) w ochronie roślin ("priming"). SA ≠ aspiryna (kwas acetylosalicylowy); aspiryna to syntetyczna modyfikacja SA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── RUCHY ROŚLIN (3) ──────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.ruchy, question_type: 'single',
    question_text: 'Tropizmy i nastie to dwa rodzaje ruchów roślin. Czym różnią się te zjawiska?',
    options: [
      { id: 'A', text: 'Tropizmy: kierunkowe ruchy wzrostowe w stosunku do bodźca (fototropizm, geotropizm, tigmotropizm) — kierunek zależy od źródła bodźca; nastie: niedirektywne ruchy (zależne od intensywności bodźca, nie kierunku) — np. nyktinastia (ruchy dobowe) lub tigmonastia (dotyk)', is_correct: true },
      { id: 'B', text: 'Tropizmy są ruchami odwracalnymi i nie powodują trwałych zmian morfologicznych; nastie są ruchami nieodwracalnymi i zawsze prowadzą do trwałej zmiany kształtu rośliny', is_correct: false },
      { id: 'C', text: 'Tropizmy zachodzą wyłącznie w korzeniach; nastie wyłącznie w liściach; łodygi nie wykazują ani tropizmów ani nastii', is_correct: false },
      { id: 'D', text: 'Tropizmy są ruchami taksji (przemieszczanie całego organizmu); nastie są ruchami wzrostowymi; rośliny w przeciwieństwie do zwierząt nie mogą wykonywać ruchów taksji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ruchy roślin: (1) TROPIZMY (ruchy wzrostowe kierunkowe): fototropizm (ku/od światła, mediowane auksynami i fototropinami); geotropizm/grawitropizm (korzeń: pozytywny; pęd: negatywny; mediowane przez statocysty z amyloplastami — statolitami i przeniesienie auksyn); tigmotropizm (dotyk: wąsaczki wspinaczkowe); chemotropizm (łagiewka pyłkowa ku komórce jajowej). (2) NASTIE (ruchy niezależne od kierunku bodźca): nyktinastia (rytm dobowy; liście fasoli); tigmonastia (Mimosa pudica, muchotrap — szybkie ruchy turgorowe); termonastia (tulipan: ciepło → otwieranie kwiatu); fotonastia (kwiaty otwierają się przy świetle). Mechanizm nastii: zmiany turgoru (osmotyczne, szybkie) lub ruchy wzrostowe (powolne).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ruchy, question_type: 'multiple',
    question_text: 'Mimoza wstydliwa (Mimosa pudica) gwałtownie składa liście po dotknięciu. Które stwierdzenia POPRAWNIE opisują mechanizm tego ruchu? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Ruch jest turgorowym: komórki motoryczne pulwinus (poducha ruchowa u nasady liścia i listków) gwałtownie tracą wodę (jony K⁺, Cl⁻ i H₂O wypływają przez kanały) → utrata turgoru po stronie dolnej → opadnięcie liścia', is_correct: true },
      { id: 'B', text: 'Sygnał elektryczny (potencjał czynnościowy lub potencjał wariacyjny) przenosi się przez cały liść od miejsca bodźca do sąsiednich listków z prędkością ok. 1–2 cm/s, uruchamiając kolejne pulwiny', is_correct: true },
      { id: 'C', text: 'Regeneracja turgoru po złożeniu liścia trwa ok. 15–30 minut (jony K⁺ są aktywnie pompowane z powrotem do komórek motorycznych → napływ wody → turgor przywrócony → liść prostuje się)', is_correct: true },
      { id: 'D', text: 'Mimosa pudica zamyka liście wyłącznie w nocy (nyktinastia) a otwiera w dzień; ruch po dotknięciu to zjawisko oddzielne, powodowane przez toksyczne substancje uwalnianie w miejscu dotyku', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) mechanizm turgorowy: pulwinus (poducha ruchowa) = wyspecjalizowane komórki z dużymi wakuolami; bodziec → otwarcie kanałów anionowych → wypływ Cl⁻ → depolaryzacja → otwarcie GORK (K⁺-out) → wypływ K⁺ → H₂O osmotycznie wychodzi → kolaps turgoru strony abaksjalnej → opadnięcie. (B) propagacja sygnału: potencjał czynnościowy (AP) i potencjał wariacyjny (VP) w łyku; prędkość 1–40 mm/s; Ca²⁺ jako wtórny przekaźnik. (C) regeneracja: H⁺-ATPaza i K⁺-transportery aktywnie ładują K⁺ z powrotem → osmotyczny napływ H₂O → turgor przywrócony; czas: 15–30 min. (D) fałsz: Mimosa zamyka liście nocą (nyktinastia) I w odpowiedzi na dotyk (tigmonastia) — dwa niezależne mechanizmy; dotyk: mechanoreceptory wyzwalają AP przez system kanalowy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ruchy, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących geotropizmu (grawitropizmu):',
    options: [
      { id: 'A', text: 'Korzenie wykazują pozytywny geotropizm (rosną w kierunku siły grawitacji), a pędy wykazują negatywny geotropizm (rosną przeciw grawitacji); percepcja grawitacji odbywa się w kolanku korzenia (columella) przez ciężkie amyloplasty (statolity) opadające ku dolnej ścianie komórki.', is_correct: true },
      { id: 'B', text: 'Auksyna jest przenoszona do dolnej strony leżącego poziomo korzenia lub pędu; w korzeniu wyższa auksyna po stronie dolnej hamuje wzrost (korzeń bardziej wrażliwy na IAA) → korzenie giną ku dołowi; w pędzie wyższa auksyna stymuluje wzrost dolnej strony → pęd ginie ku górze.', is_correct: true },
      { id: 'C', text: 'Rosliny kosmicznych hodowane w warunkach braku grawitacji (stacja ISS) nie wykazują żadnych ruchów ukierunkowanych i nie potrafią orientować swoich korzeni ani pędów; ich wzrost jest całkowicie chaotyczny ponieważ kolanko korzenia nie działa bez grawitacji.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: columella = warstwa komórek z amyloplastami (statocytami) w kolanku korzenia (cap = kaliptra); statolity opadają do dołu → sygnał Ca²⁺/InsP3/PIN → redystrybucja auksyn; geotropizm korzenia: pozytywny (−g); pędu: negatywny (+g). B — Prawda: Cholodny-Went teoria: boczna redystrybucja IAA (PIN3, PIN7) do dolnej strony; wrażliwość korzenia na IAA: 100× wyższa niż pędu → stężenie IAA po stronie dolnej: pęd: stymuluje → elongacja dolnej strony → giecie ku górze; korzenia: inhibituje elongację dolnej strony → krótsza dolna strona → giecie ku dołowi. C — Fałsz: rośliny na ISS wykazują autotropizm (fototropizm) i thigmotropizm; mogą rosnąć w kierunku światła bez grawitacji; statocysty działają, ale nie mają referencji grawitacyjnej → rośliny używają innych wskazówek (światło, dotyk, polaryteyzm wewnętrzny).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding batch 5 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
