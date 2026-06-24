// Seed: Układ ruchu człowieka — 20 questions (batch 2)
// Topic: 42b3edde-2027-4bbb-8a90-38568031d9b0

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '42b3edde-2027-4bbb-8a90-38568031d9b0'

const S = {
  kostna:    '81b1ff0e-35ce-4ab3-9442-cbe175a409e2',
  kosci:     '41d461d3-7688-475f-bd67-3c61d46b0127',
  staw:      '4b0f4c0b-7c18-48c4-9599-a7f7d619db94',
  miesniowa: '5837158f-0ba4-47e2-8f59-4d8888b5feab',
  skurcz:    '33ff4db4-4b68-4c16-846d-f6db534b5752',
  zmeczenie: '957b8505-0f02-4284-900d-854311b0952a',
  choroby:   '7552bf0c-5c0d-4f28-8549-8326ae76b95c',
}

const questions = [
  // --- Tkanka kostna (3) ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.kostna,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nKość jest tkanką łączną zbudowaną z macierzy zewnątrzkomórkowej i komórek. Wytrzymałość mechaniczna kości wynika z:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'obecności wyłącznie włókien kolagenowych tworzących elastyczną, ale nieodporną na ucisk strukturę', is_correct: false },
      { id: 'B', text: 'synergistycznego działania włókien kolagenowych (odporność na rozciąganie) i kryształów hydroksyapatytu Ca₁₀(PO₄)₆(OH)₂ (twardość i odporność na ucisk)', is_correct: true },
      { id: 'C', text: 'jednorodnej budowy z chityny, analogicznej do egzoszkieletu owadów', is_correct: false },
      { id: 'D', text: 'obecności włókien elastynowych zapewniających kości sprężystość przy zginaniu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Macierz kostna to kompozyt biologiczny: organiczna (35%): kolagen typu I — elastyczność, odporność na rozciąganie (kość pozbawiona minerałów jest giętka jak guma); nieorganiczna (65%): hydroksyapatyt Ca₁₀(PO₄)₆(OH)₂ — twardość, odporność na ucisk (kość pozbawiona kolagenu jest krucha jak kreda). Współdziałanie obu składników daje unikalne właściwości mechaniczne przewyższające każdy ze składników z osobna. A i D — częściowe opisy. C — błąd: chityna to polisacharyd stawonogów i grzybów, nie kość.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.kostna,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wzrostu i przebudowy kości.\nA. Kości długie (np. kość udowa) rosną na długość dzięki chrząstce nasadowej (płytce wzrostu, epifizycznej), która ulega ossyfikacji z wiekiem.\nB. Przebudowa kości (remodeling) to ciągły proces — osteoblasty i osteoklasty przez całe życie wymieniają ok. 10% masy kostnej rocznie.\nC. Hormon wzrostu (GH) i insulinopodobny czynnik wzrostu (IGF-1) nie mają wpływu na wzrost i mineralizację kości — jest to regulowane wyłącznie przez witaminę D.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Kości rosną na długość dzięki chrząstce nasadowej, która ossyfikuje z wiekiem.', is_correct: true },
      { id: 'B', text: 'Remodeling kości trwa przez całe życie — ok. 10% masy wymieniane rocznie.', is_correct: true },
      { id: 'C', text: 'GH i IGF-1 nie mają wpływu na wzrost kości — regulacja wyłącznie przez wit. D.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: chrząstka wzrostowa (nasadowa) między trzonem a nasadą umożliwia wydłużanie kości przez proliferację chondrocytów; po osiągnięciu dojrzałości płciowej pod wpływem estrogenów/androgenów chrząstka ossyfikuje → koniec wzrostu. B — Prawda: remodeling kostny jest niezbędny do naprawy mikropęknięć, adaptacji do obciążeń i homeostazy wapnia; dysequilibrium (więcej resorpcji niż budowy) prowadzi do osteoporozy. C — Fałsz: GH stymuluje wzrost chrząstki nasadowej pośrednio przez IGF-1 produkowany w wątrobie; niedobór GH w dzieciństwie powoduje niskorosłość przysadkową. Witamina D reguluje mineralizację, ale nie jest jedynym regulatorem.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.kostna,
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisuje różnicę między kością zbitą (korową) a kością gąbczastą (beleczkową)?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Kość zbita jest obecna wyłącznie w kościach płaskich czaszki, a gąbczasta — wyłącznie w kościach długich kończyn', is_correct: false },
      { id: 'B', text: 'Kość zbita tworzy zwarty zewnętrzny walec kości długich i jest zbudowana z osteonów; kość gąbczasta tworzy wewnętrzną sieć beleczek z przestrzeniami wypełnionymi szpikiem', is_correct: true },
      { id: 'C', text: 'Kość gąbczasta jest twardsza mechanicznie niż zbita, bo beleczki rozpraszają siły we wszystkich kierunkach', is_correct: false },
      { id: 'D', text: 'Jedyną funkcją kości gąbczastej jest magazynowanie tłuszczu w szpiku żółtym — nie uczestniczy w hematopoezie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Kość zbita (corticalis): zewnętrzna, zwarta warstwa kości długich; zbudowana z osteonów Haversa (lamelle koncentryczne wokół kanału z naczyniami); zapewnia wytrzymałość mechaniczną; stanowi ~80% masy szkieletu. Kość gąbczasta (trabecularis, spongiosa): wewnętrzna sieć beleczek zorientowanych wzdłuż linii sił; przestrzenie między beleczkami wypełnione szpikiem czerwonym (hematopoeza u dzieci i w nasadach) lub żółtym (tłuszcz u dorosłych); lżejsza, absorbuje obciążenia. A — błąd: obie tkanki kostne występują we wszystkich typach kości. C — błąd: kość zbita jest twardsza. D — błąd: szpik czerwony w kości gąbczastej jest miejscem hematopoezy.',
    difficulty: 2,
    verified: true,
  },

  // --- Kości i ich połączenia (3) ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.kosci,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących szkieletu człowieka.\nA. Szkielet osiowy obejmuje kości czaszki, kręgosłup, żebra i mostek — tworzy oś podłużną ciała i chroni narządy wewnętrzne.\nB. Szkielet kończyny górnej wolnej zbudowany jest z: kości ramiennej, kości przedramienia (promieniowej i łokciowej) oraz kości ręki (nadgarstka, śródręcza, paliczków).\nC. Kości płaskie (np. łopatka, kości czaszki) mają jamę szpikową wypełnioną szpikiem podobnie jak kości długie.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Szkielet osiowy: czaszka, kręgosłup, żebra, mostek.', is_correct: true },
      { id: 'B', text: 'Kończyna górna wolna: kość ramienna + promieniowa i łokciowa + kości ręki.', is_correct: true },
      { id: 'C', text: 'Kości płaskie mają jamę szpikową jak kości długie.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: szkielet osiowy (80 kości): 29 kości czaszki, 26 kości kręgosłupa, 24 żebra + mostek. Chroni mózg, rdzeń kręgowy, serce i płuca. B — Prawda: kończyna górna wolna: humerus (kość ramienna) → radius + ulna (przedramię) → 8 kości nadgarstka + 5 śródręcza + 14 paliczków. C — Fałsz: kości płaskie (łopatka, łopatki, mostek, kości czaszki) NIE mają centralnej jamy szpikowej — zbudowane są z dwóch warstw kości zbitej (blaszki zewnętrzna i wewnętrzna) z warstwą kości gąbczastej (diploë) pomiędzy. Szpik czerwony (hematopoeza) znajduje się właśnie w tej warstwie gąbczastej kości płaskich.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.kosci,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nKręgosłup człowieka pełni wiele funkcji. Które z poniższych stwierdzeń NAJLEPIEJ opisuje jego budowę?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Kręgosłup zbudowany jest z 33–34 kręgów tworzących prostą, pionową kolumnę bez żadnych krzywizn', is_correct: false },
      { id: 'B', text: 'Kręgosłup składa się z 7 kręgów szyjnych, 12 piersiowych, 5 lędźwiowych, 5 zrośniętych w kość krzyżową i 4–5 szczątkowych kości ogonowej (guzicznej)', is_correct: true },
      { id: 'C', text: 'Między kręgami nie ma żadnych struktur łączących — kręgi stykają się ze sobą powierzchniami kostnymi', is_correct: false },
      { id: 'D', text: 'Krzywizna szyjna (lordoza) i lędźwiowa (lordoza) są wadami postawy, które należy korygować', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Kręgosłup człowieka: 7 C (szyjnych) + 12 Th (piersiowych) + 5 L (lędźwiowych) + os sacrum (5 zrośniętych) + os coccygis (4–5 szczątkowych) = 33–34 kręgi. Fizjologiczne krzywizny: lordoza szyjna (C), kifoza piersiowa (Th), lordoza lędźwiowa (L), kifoza krzyżowa — amortyzują siły pionowe, umożliwiają dwunożność. Między trzonami kręgów: krążki międzykręgowe (nucleus pulposus + annulus fibrosus) pełniące funkcję amortyzatorów. A — błąd: kręgosłup ma fizjologiczne krzywizny. C — błąd: dyski międzykręgowe. D — lordoza szyjna i lędźwiowa to fizjologiczne krzywizny, nie wady.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.kosci,
    question_text: 'Które z poniższych połączeń kości są przykładami synarthroz (połączeń nieruchomych lub półruchomych)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Szwy czaszki (suturae) — kości połączone tkanką łączną włóknistą', is_correct: true },
      { id: 'B', text: 'Spojenie łonowe (symphysis pubica) — kości połączone krążkiem chrzęstnym', is_correct: true },
      { id: 'C', text: 'Staw kolanowy (articulatio genus) — typowy staw maziowy z szerokim zakresem ruchów', is_correct: false },
      { id: 'D', text: 'Połączenia między trzonami kręgów przez krążki międzykręgowe (dyskarthroza)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Synarthroses (połączenia ciągłe, nieruchome lub ograniczone): A — szwy (suturae): typ włóknisty — kości czaszki złączone tkanką łączną; u dorosłych ulegają ossyfikacji (synostozа). B — chrząstkozrost (synchondrosis/symphysis): kości połączone chrząstką szklistą (chrząstki nasadowe) lub chrząstką włóknistą (spojenie łonowe, krążki m-kręgowe) → mała ruchomość. D — dyski międzykręgowe między trzonami kręgów to typ amphiarthrozy — minimalna ruchomość w każdym segmencie, sumuje się do znacznej ruchomości całego kręgosłupa. C — staw kolanowy to diarthroza (staw maziowy) z jamą stawową i pełnym zakresem ruchów — nie jest połączeniem nieruchomym.',
    difficulty: 3,
    verified: true,
  },

  // --- Budowa stawu (2) ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.staw,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy i funkcji stawu maziowego.\nA. Jama stawowa wypełniona jest mazią stawową (synovia) — lepką cieczą produkowaną przez błonę maziową, zmniejszającą tarcie między powierzchniami stawowymi.\nB. Chrząstka stawowa pokrywająca powierzchnie stawowe jest tkanką silnie unaczynioną — naczynia krwionośne w chrząstce szybko transportują substancje odżywcze.\nC. Torebka stawowa ogranicza ruchomość stawu i zapobiega jego zwichnięciu — wzmocniona jest więzadłami zbudowanymi z tkanki łącznej włóknistej.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Maź stawowa (synovia) zmniejsza tarcie — produkowana przez błonę maziową.', is_correct: true },
      { id: 'B', text: 'Chrząstka stawowa jest silnie unaczyniona.', is_correct: false },
      { id: 'C', text: 'Torebka stawowa z więzadłami ogranicza ruchomość i zapobiega zwichnięciu.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: maź stawowa (płyn maziowy) to filtrат osocza wzbogacony w kwas hialuronowy — zmniejsza tarcie, odżywia chrząstkę, usuwa produkty metabolizmu. B — Fałsz: chrząstka stawowa (szklista) jest BEZNACZYNIOWA i beznerwowa — odżywiana jest przez dyfuzję z mazi stawowej i naczyń podchrzęstnych. To jest przyczyną jej słabej regeneracji po uszkodzeniu. C — Prawda: torebka stawowa (warstwa zewnętrzna włóknista + warstwa wewnętrzna maziowa) i więzadła ograniczają zakres ruchu i chronią przed nadmiernym przemieszczeniem kości.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.staw,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nStaw zawiasowy (np. staw łokciowy, staw kolanowy) różni się od stawu kulistego (np. staw ramienny, staw biodrowy) tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'staw zawiasowy umożliwia ruchy we wszystkich płaszczyznach, a kulisty — tylko w jednej', is_correct: false },
      { id: 'B', text: 'staw zawiasowy umożliwia ruch tylko w jednej płaszczyźnie (zgięcie i prostowanie), a staw kulisty — we wszystkich płaszczyznach', is_correct: true },
      { id: 'C', text: 'staw zawiasowy jest bardziej ruchomy niż kulisty, bo panewka jest płytsza', is_correct: false },
      { id: 'D', text: 'oba typy stawów umożliwiają identyczny zakres ruchów, różnią się jedynie kształtem powierzchni stawowych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Stawy klasyfikuje się wg kształtu powierzchni i zakresu ruchu: Staw zawiasowy (ginglimus): bloczkowato ukształtowane powierzchnie → ruch w jednej płaszczyźnie: zgięcie/prostowanie (flexio/extensio); przykłady: łokieć (humeroulnaris), kolano (głównie), stawy palców. Staw kulisty (enarthrosis): głowa kulista w głębokiej panewce → ruchy we wszystkich płaszczyznach: zgięcie/prostowanie, odwodzenie/przywodzenie, rotacja, circumductio; przykłady: bark (humerus + łopatka), biodro (femur + panewka). Im głębsza panewka → mniejsza ruchomość, ale większa stabilność (bark < biodro w stabilności).',
    difficulty: 1,
    verified: true,
  },

  // --- Tkanka mięśniowa (3) ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.miesniowa,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nWłókna mięśniowe szkieletowe dzielą się na wolnokurczące (typ I) i szybkokurczące (typ II). Właściwe opisanie różnic między nimi to:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'włókna typu I (czerwone) są bogate w mioglobinę i mitochondria, odporne na zmęczenie, przystosowane do długotrwałego wysiłku tlenowego', is_correct: true },
      { id: 'B', text: 'włókna typu II (czerwone) mają więcej mitochondriów niż typ I i są efektywniejsze energetycznie przy długich wysiłkach', is_correct: false },
      { id: 'C', text: 'włókna szybkokurczące (typ II) produkują energię głównie przez fosforylację oksydacyjną i nie ulegają zmęczeniu', is_correct: false },
      { id: 'D', text: 'skład włókien mięśniowych jest identyczny u wszystkich ludzi i nie zmienia się pod wpływem treningu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Typ I (slow-twitch, „czerwone"): dużo mioglobiny (magazyn O₂) i mitochondriów → metabolizm tlenowy (oksydacyjny) → wolny, ale bardzo odporny na zmęczenie → triathloniści, maratończycy. Typ IIa (fast oxidative): pośrednie; typ IIx/IIb (fast glycolytic, „białe"): mało mitochondriów i mioglobiny, dużo glikogenu → glikoliza beztlenowa → bardzo szybki i silny skurcz, ale szybko ulega zmęczeniu → sprinty, podnoszenie ciężarów. B i C — odwrócone opisy. D — błąd: trening wytrzymałościowy zwiększa udział włókien tlenowych, siłowy — włókien szybkokurczących; proporcje częściowo zmieniają się pod wpływem treningu.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.miesniowa,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących organizacji mięśnia szkieletowego.\nA. Sarkomer jest podstawową jednostką kurczliwą mięśnia — ograniczony jest przez dwie linie Z, między którymi ułożone są filamenty aktynowe i miozynowe.\nB. W czasie skurczu mięśnia długość filamentów aktynowych i miozynowych skraca się — filamenty dosłownie się kurczą.\nC. Prążkowanie poprzeczne mięśnia szkieletowego widoczne w mikroskopie wynika z regularnego układu ciemnych (A) i jasnych (I) prążków — odpowiednio filamentów grubych (miozyna) i cienkich (aktyna).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Sarkomer: jednostka między dwiema liniami Z z filamentami aktyny i miozyny.', is_correct: true },
      { id: 'B', text: 'W skurczu filamenty aktynowe i miozynowe skracają swoją długość.', is_correct: false },
      { id: 'C', text: 'Prążkowanie A (ciemne, miozyna) i I (jasne, aktyna) wyjaśnia poprzeczną budowę mięśnia.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: sarkomer (linia Z → linia Z): zawiera filamenty cienkie (aktyna + troponina + tropomiozyna) zakotwiczone w linii Z i filamenty grube (miozyna II). C — Prawda: prążek A (anizotropowy, ciemny) = region filamentów miozynowych (z lub bez nakładania aktyny); prążek I (izotropowy, jasny) = tylko aktyna; strefa H = tylko miozyna; linia M = środek sarkomeru. B — Fałsz: teoria ślizgowa Huxleya (1954) — filamenty NIE skracają się; aktyna wsuwa się między miozynę → sarkomery się skracają, bo filamenty nakładają się bardziej, ale ich długość pozostaje stała.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.miesniowa,
    question_text: 'Które z poniższych stwierdzeń dotyczących płytki nerwowo-mięśniowej (synapsy nerwowo-mięśniowej) są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Neuroprzekaźnikiem w synapsie nerwowo-mięśniowej jest acetylocholina (ACh), uwalniana z pęcherzyków synaptycznych aksonu motoneuronu', is_correct: true },
      { id: 'B', text: 'ACh wiąże się z receptorami nikotynowymi na błonie postsynaptycznej (sarkolemmie), powodując depolaryzację i potencjał płytki końcowej', is_correct: true },
      { id: 'C', text: 'Każdy motoneuron unerwia dokładnie jeden włókno mięśniowe — tworząc jednostkę ruchową składającą się z dwóch komórek', is_correct: false },
      { id: 'D', text: 'Acetylocholinesteraza (AChE) rozkłada ACh w szczelinie synaptycznej, kończąc sygnał i umożliwiając rozkurcz', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: synapsа nerwowo-mięśniowa (NMJ): potencjał czynnościowy → egzocytoza pęcherzyków z ACh → dyfuzja przez szczelinę (20–50 nm). B — Prawda: ACh wiąże receptory nikotynowe (jonotropowe, kanały Na⁺/K⁺) na fałdach złącza → depolaryzacja (EPP, end-plate potential) → potencjał czynnościowy mięśnia → skurcz. D — Prawda: AChE w błonie podstawnej i postsynaptycznej szybko hydrolizuje ACh → cholina + octan → zakończenie sygnału; inhibitory AChE (np. neostygmina, sarin) powodują ciągłe skurcze. C — Fałsz: jeden motoneuron unerwia WIELE włókien mięśniowych (jednostka ruchowa, motor unit); liczba włókien zależy od precyzji wymaganego ruchu (oko: 1–3 włókna/neuron, udo: setki).',
    difficulty: 2,
    verified: true,
  },

  // --- Mechanizm skurczu (3) ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.skurcz,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących roli ATP w skurczu mięśniowym.\nA. ATP jest potrzebne do oderwania główki miozyny od aktyny po wykonaniu „skoku mostu" — bez ATP mięsień pozostaje w stanie skurczu (rigor mortis).\nB. Energia z hydrolizy ATP (ATP → ADP + Pi) jest uwalniana i bezpośrednio napędza ruch główki miozyny wzdłuż filamenta aktynowego.\nC. W spoczynku (rozkurcz) mięśnia ATP nie jest zużywane — pompa Ca²⁺-ATPaza gromadzi jony wapnia w siateczce sarkoplazmatycznej pasywnie, bez nakładu energii.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'ATP jest potrzebne do oderwania główki miozyny od aktyny — bez ATP: rigor mortis.', is_correct: true },
      { id: 'B', text: 'Energia z hydrolizy ATP napędza ruch główki miozyny wzdłuż aktyny.', is_correct: true },
      { id: 'C', text: 'W rozkurczu ATP nie jest zużywane — pompa Ca²⁺ działa pasywnie.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: cykl mostków poprzecznych: (1) główka miozyny-ATP przyłącza się do aktyny; (2) hydroliza ATP → ADP+Pi → „skok" główki → aktyna przesuwa się; (3) nowe ATP odłącza główkę od aktyny (bez ATP: mostek poprzeczny zacisnięty → rigor mortis — stężenie pośmiertne). B — Prawda: energia z hydrolizy ATP jest magazynowana w zmianie konformacji główki miozyny (jak naciągnięta sprężyna) i wyzwalana podczas „skoku". C — Fałsz: pompa SERCA (Ca²⁺-ATPaza siateczki sarkoplazmatycznej) AKTYWNIE pompuje Ca²⁺ z sarkoplazmy do SR wbrew gradientowi stężeń — zużywa 1 ATP na każde 2 jony Ca²⁺. Rozkurcz mięśnia kosztuje energię.',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.skurcz,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nSumowanie skurczów (tetanus) polega na:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'połączeniu siły wielu jednostek ruchowych pracujących synchronicznie w jednym momencie', is_correct: false },
      { id: 'B', text: 'nakładaniu się kolejnych skurczów jednego włókna mięśniowego wywołanych przez impulsy nerwowe następujące zbyt szybko, by między nimi nastąpił pełny rozkurcz — efektem jest stały, silny skurcz (tetanus zupełny)', is_correct: true },
      { id: 'C', text: 'wzroście siły skurczu mięśnia wywołanym przez zwiększenie stężenia Ca²⁺ w płynie zewnątrzkomórkowym', is_correct: false },
      { id: 'D', text: 'rekrutacji coraz większej liczby wolnokurczących włókien mięśniowych przy długotrwałym wysiłku', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Sumowanie czasowe skurczów: pojedynczy impuls → skurcz jednoszczytowy (twitch, trwa ~100 ms). Jeśli kolejny impuls nadejdzie przed całkowitym rozkurczem → skurcze sumują się → tetanus niezupełny (częściowe fuzja) lub tetanus zupełny (pełna fuzja, gładki stały skurcz przy >50 Hz). Mechanizm: wysokie tempo impulsów → Ca²⁺ nie zdąża być wychwytywaany przez SR → utrzymuje się wysokie stężenie Ca²⁺ w sarkoplazmie → trwałe aktywowanie kompleksu akto-miozynowego. Normalne skurcze mięśni szkieletowych to tetanus zupełny (nie pojedyncze szarpnięcia). A — opisuje sumowanie przestrzenne (rekrutację). D — opisuje hierarchię rekrutacji jednostek ruchowych.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.skurcz,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących rodzajów skurczu mięśniowego.\nA. W skurczu izometrycznym mięsień wytwarza napięcie (siłę), ale nie zmienia swojej długości — np. trzymanie ciężaru w wyciągniętej ręce.\nB. W skurczu izokinetycznym mięsień skraca się przy stałym obciążeniu zewnętrznym (stałej sile) — np. unoszenie ciężarka.\nC. Skurcz ekscentryczny (wydłużający) polega na tym, że mięsień aktywnie napięty ulega WYDŁUŻENIU pod wpływem siły zewnętrznej większej niż jego siła — np. schodzenie ze schodów przy kontrolowanym ruchu uda.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Izometryczny: mięsień napięty bez zmiany długości.', is_correct: true },
      { id: 'B', text: 'Izokinetyczny: mięsień skraca się przy stałym obciążeniu zewnętrznym.', is_correct: false },
      { id: 'C', text: 'Ekscentryczny: mięsień czynny ulega wydłużeniu pod wpływem siły zewnętrznej.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: skurcz izometryczny (iso = równy, metryczny = długość): siła mięśnia = siła zewnętrzna → brak ruchu, brak zmiany długości; duże napięcie, np. pchanie muru, utrzymywanie pozycji. C — Prawda: skurcz ekscentryczny (elongation under load): mięsień aktywny, ale siła zewnętrzna go rozciąga → kontrolowane wydłużenie; kontrola w fazie opuszczania ciężaru, schodzenie ze schodów; generuje największe napięcie i powoduje największe mikrozerwania (DOMS). B — Fałsz: izokinetyczny (stała prędkość ruchu) ≠ izotoniczny (stała siła/obciążenie). Skurcz izotoniczny (isotonic): stałe obciążenie zewnętrzne, mięsień skraca się (koncentryczny) lub wydłuża (ekscentryczny) — np. uginanie z hantlą.',
    difficulty: 3,
    verified: true,
  },

  // --- Zmęczenie mięśni (2) ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zmeczenie,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nZmęczenie mięśni szkieletowych podczas intensywnego wysiłku beztlenowego jest spowodowane głównie:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wyczerpaniem zapasów tlenu w mioglobinie, co uniemożliwia dalszą fosforylację oksydacyjną', is_correct: false },
      { id: 'B', text: 'nagromadzeniem fosforanów nieorganicznych (Pi) i jonów H⁺ (spadek pH) zaburzających wiązanie Ca²⁺ z troponiną i aktywność ATPazy miozyny', is_correct: true },
      { id: 'C', text: 'nadmierną produkcją acetylocholiny w synapsie nerwowo-mięśniowej powodującą desensytyzację receptorów nikotynowych', is_correct: false },
      { id: 'D', text: 'wyczerpaniem zapasów białka miozyny, które jest rozkładane na aminokwasy podczas długotrwałego wysiłku', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Współczesne rozumienie zmęczenia mięśniowego (obalono mit "kwasu mlekowego"): Główne przyczyny zmęczenia w intensywnym wysiłku: Fosforany nieorganiczne (Pi): nagromadzenie z hydrolizy ATP i PCr → hamują cykl mostków poprzecznych (zmniejszają siłę "skoku"), zaburzają uwalnianie Ca²⁺ z SR. Jony H⁺ (zakwaszenie): wzrost [H⁺] z hydrolizy ATP i glikolizy → obniżenie pH (6,5–6,8) → zmniejszona wrażliwość troponiny na Ca²⁺, zaburzenie aktywności ATPazy miozyny. Uwaga: kwas mlekowy sam w sobie nie powoduje zmęczenia — mleczan może być paliwem energetycznym. A — błąd: tlen w mioglobinie to tylko lokalny bufor. C — błąd: desensytyzacja ACh nie jest mechanizmem typowego zmęczenia mięśni. D — błąd: miozyna nie jest rozkładana podczas wysiłku.',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zmeczenie,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących źródeł energii w mięśniach podczas wysiłku fizycznego.\nA. W pierwszych sekundach intensywnego wysiłku mięśnie korzystają z zapasów ATP i fosfokreatyny (PCr) — system fosfagenowy.\nB. Podczas wysiłku o umiarkowanej intensywności (aerobowego) głównym substancją energetycznym są kwasy tłuszczowe utleniane w mitochondriach.\nC. Dług tlenowy (EPOC — Excess Post-Exercise Oxygen Consumption) po wysiłku beztlenowym jest związany m.in. z odtworzeniem fosfokreatyny i usunięciem mleczanu.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Pierwsze sekundy wysiłku: ATP + fosfokreatyna (system fosfagenowy).', is_correct: true },
      { id: 'B', text: 'Wysiłek aerobowy: kwasy tłuszczowe utleniane w mitochondriach.', is_correct: true },
      { id: 'C', text: 'Dług tlenowy (EPOC) związany z odtworzeniem PCr i usunięciem mleczanu.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'Trzy układy energetyczne mięśni: (1) Fosfagenowy (ATP-PCr): natychmiastowy, 0–10 s; PCr + ADP → Cr + ATP (kinaza kreatynowa); bez tlenu i mleczanu; sprinterzy. (2) Glikolityczny beztlenowy: 10 s–2 min; glikogen → mleczan + ATP (2/mol glukozy); szybki, ale zakwaszenie. (3) Tlenowy (oksydacyjny): >2 min; glukoza, kwasy tłuszczowe, aminokwasy → CO₂ + H₂O + 30–38 ATP/mol; wolny, ale wydajny i nieograniczony tlenem. EPOC: zwiększone zużycie O₂ po wysiłku na odtworzenie PCr, usunięcie mleczanu (wątroba: glukoneogeneza lub utlenienie), normalizację temperatury i hormonów.',
    difficulty: 2,
    verified: true,
  },

  // --- Choroby układu ruchu (4) ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.choroby,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chorób i urazów układu ruchu.\nA. Reumatoidalne zapalenie stawów (RZS) jest chorobą autoimmunologiczną — układ odpornościowy atakuje błonę maziową stawów, prowadząc do ich zniszczenia.\nB. Choroba zwyrodnieniowa stawów (artroza) polega na niszczeniu chrząstki stawowej wskutek procesów zapalnych autoimmunologicznych, identycznie jak w RZS.\nC. Zwichnięcie stawu polega na trwałym przemieszczeniu powierzchni stawowych względem siebie, natomiast skręcenie — na nadmiernym rozciągnięciu lub zerwaniu więzadeł bez przemieszczenia.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'RZS: choroba autoimmunologiczna atakująca błonę maziową stawów.', is_correct: true },
      { id: 'B', text: 'Artroza i RZS mają identyczny mechanizm patologiczny — autoimmunologiczny.', is_correct: false },
      { id: 'C', text: 'Zwichnięcie: przemieszczenie powierzchni stawowych; skręcenie: uszkodzenie więzadeł bez przemieszczenia.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: RZS (rheumatoid arthritis) — autoimmunologiczne zapalenie błony maziowej (synovitis) → panus → niszczenie chrząstki i kości stawowej; markery: RF (czynnik reumatoidalny), anty-CCP. C — Prawda: zwichnięcie (luxatio) = przemieszczenie kości w stawie, wymaga nastawienia; skręcenie (distorsio) = uraz więzadeł bez przemieszczenia (I°: naciągnięcie, II°: częściowe zerwanie, III°: pełne zerwanie). B — Fałsz: artroza (osteoarthritis) to ZWYRODNIENIOWA, nie autoimmunologiczna choroba — wynika ze zużycia chrząstki (wiek, przeciążenie, otyłość), bez dominującego zapalenia. Inne leczenie i patofizjologia niż RZS.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.choroby,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nSkolioza to:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'nadmierne wygięcie kręgosłupa ku tyłowi w odcinku piersiowym (plecy okrągłe) — wada postawy polegająca na nadmiernej kifozie', is_correct: false },
      { id: 'B', text: 'boczne skrzywienie kręgosłupa z towarzyszącym obrotem kręgów — może powodować asymetrię tułowia i problemy z oddychaniem w ciężkich przypadkach', is_correct: true },
      { id: 'C', text: 'nadmierne wygięcie kręgosłupa ku przodowi w odcinku lędźwiowym (wklęsłe plecy) — wada polegająca na nadmiernej lordozie', is_correct: false },
      { id: 'D', text: 'zapalenie kręgów wywołane przez bakterie Mycobacterium tuberculosis — gruźlica kręgosłupa', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Wady postawy kręgosłupa: Skolioza: boczne skrzywienie (>10° wg Cobba) z rotacją kręgów → asymetria tułowia (wyższy bark, garb żebrowy) → może uciskać płuca i serce w ciężkich przypadkach; etiologia: idiopatyczna (80%, szczególnie u dziewcząt w skoku wzrostowym), wrodzona, nerwowo-mięśniowa. Hiperkifoza: nadmierne wygięcie ku tyłowi w klatce piersiowej (>40°) — "plecy okrągłe". Hiperlordoza: nadmierne wygięcie ku przodowi w odcinku szyjnym lub lędźwiowym. A — opis hiperkifozy. C — opis hiperlordozy. D — opis choroby Potta (gruźlica kręgosłupa).',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.choroby,
    question_text: 'Które z poniższych czynników zwiększają ryzyko złamań kości?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Osteoporoza — zmniejszona gęstość mineralna kości (BMD) poniżej wartości prawidłowych', is_correct: true },
      { id: 'B', text: 'Niedobór witaminy D i wapnia w diecie prowadzący do niedostatecznej mineralizacji', is_correct: true },
      { id: 'C', text: 'Regularna aktywność fizyczna z obciążeniem mechanicznym (np. bieganie, taniec)', is_correct: false },
      { id: 'D', text: 'Długotrwała sterydoterapia (kortykosteroidy) hamująca aktywność osteoblastów', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Czynniki ryzyka złamań: A — osteoporoza: kości porowate i kruche (T-score < −2,5) → złamania niskoenergetyczne (z upadku z wysokości stania). B — niedobory Ca²⁺ i witaminy D → osteomalacja u dorosłych (niewystarczająca mineralizacja), krzywica u dzieci. D — kortykosteroidy (np. prednizon, deksametazon) hamują osteoblasty, stymulują osteoklasty, zmniejszają wchłanianie Ca²⁺ → osteoporoza jatrogenna (wywołana leczeniem). Dodatkowe czynniki ryzyka: palenie, alkohol, niska masa ciała, menopauza, wiek, unieruchomienie. C — błąd: regularna aktywność fizyczna z obciążeniem ZMNIEJSZA ryzyko złamań — mechaniczne bodźce pobudzają osteoblasty i utrzymują BMD.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.choroby,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących dystrofii mięśniowej Duchenne\'a (DMD).\nA. DMD jest chorobą genetyczną sprzężoną z chromosomem X, wywołaną mutacją w genie kodującym dystrofinę — białko łączące cytoszkielet mięśniowy z macierzą zewnątrzkomórkową.\nB. DMD dotyczy głównie chłopców, ponieważ mają tylko jeden chromosom X — nie mają drugiej kopii genu dystrofiny, która mogłaby kompensować mutację.\nC. W DMD mięśnie oddechowe i sercowe nigdy nie są zajęte — choroba ogranicza się wyłącznie do mięśni szkieletowych kończyn.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'DMD: choroba sprzężona z X, mutacja w genie dystrofiny.', is_correct: true },
      { id: 'B', text: 'DMD dotyczy głównie chłopców — jeden chromosom X, brak kompensującej kopii genu.', is_correct: true },
      { id: 'C', text: 'W DMD mięśnie sercowe i oddechowe nigdy nie są zajęte.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: dystrofina (427 kDa) stabilizuje sarkolemmę podczas skurczu; bez niej błona mięśniowa pęka → napływ Ca²⁺ → nekroza → stopniowe zastępowanie tkanki mięśniowej przez tłuszcz i tkankę łączną. B — Prawda: gen DMD na chromosomie X; dziewczęta (XX) mają drugą kopię → nosicielki lub łagodniejszy przebieg (Lyon); chłopcy (XY) z mutacją chorują. Jeden z największych genów człowieka (~2,4 Mb). C — Fałsz: DMD jest postępującą chorobą obejmującą WSZYSTKIE typy mięśni: mięsień sercowy (kardiomiopatia rozstrzeniowa) i mięśnie oddechowe (przepona, mięśnie międzyżebrowe) → najczęstsza przyczyna śmierci to niewydolność sercowo-oddechowa w 2.–3. dekadzie życia.',
    difficulty: 2,
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
  console.log(`Seeding ${questions.length} questions for Układ ruchu (batch 2)...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
