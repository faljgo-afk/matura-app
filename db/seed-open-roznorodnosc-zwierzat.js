// Seed: open questions — Różnorodność zwierząt (10 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2'

const S = {
  gady:  'f74eae00-3b0d-43b3-8d4b-9c1926bfca14',
  parz:  '9bf9e59b-8bdc-46d2-b6ab-916dad2a8028',
  pier:  '9a5979f6-3df4-4eda-a3ed-b685fd68671d',
  por:   '4f0309a9-4d03-411f-b8d6-e8754b440294',
  prz:   'ce14c990-8cbe-4d71-8946-f3c362cf9d96',
  rozm:  '84cf9348-1042-491d-b895-4ab150164c94',
  ryby:  'e4f2e4c8-e23e-4e5c-9109-021d3af3c648',
  ssaki: '64f6fdff-c569-414d-a414-739fd02dca2e',
  staw:  '825907dd-fee6-47ab-9b83-87fbab18941b',
}

const questions = [
  // ─── Parzydełkowce i płazińce ───
  {
    topic_id: TOPIC, subtopic_id: S.parz,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega pasożytniczy tryb życia tasiemca uzbrojonego (Taenia solium). Opisz dwa etapy jego cyklu życiowego, podając żywiciela pośredniego i ostatecznego oraz formę pasożyta na każdym etapie.',
    options: [], correct_answer: [],
    explanation: 'Żywiciel pośredni: świnia (lub człowiek) — larwa (wągier/cysticerkus) w mięśniach. Żywiciel ostateczny: człowiek — dorosły tasiemiec w jelicie cienkim. Człowiek zaraża się przez zjedzenie niedogotowanego mięsa świni z wągrami.',
    max_points: 2,
    key_points: [
      'Żywiciel pośredni (świnia, rzadko człowiek): człowiek lub świnia połyka jaja tasiemca (z kałem żywiciela ostatecznego) → z jaj wylęgają się onkosfery (larwy z hakami) → przenikają przez ścianę jelita → krew → mięśnie (lub mózg) → tworzą wągry (cysticerki, Cysticercus cellulosae) = larwy otorbione, z inwaginowaną skoleksem (główką z hakami i przyssawkami)',
      'Żywiciel ostateczny (człowiek): człowiek zjada surowe lub niedostatecznie ugotowane mięso wieprzowe z wągrami → wąger uwalnia się w żołądku → ewaginacja skoleksa → przyczepia się do ściany jelita cienkiego (haki + przyssawki) → rośnie przez wytwarzanie proglotydów (człony) → dojrzały tasiemiec może osiągać 2–8 m długości; dojrzałe proglotki wypełnione jajami są oddzielane i wydalane z kałem → cykl zamknięty'
    ],
    model_answer: 'Tasiemiec uzbrojony (Taenia solium) — cykl życiowy: Etap I — w żywicielu pośrednim (świnia, przypadkowo człowiek): człowiek (żywiciel ostateczny) wydala z kałem dojrzałe człony (proglottydy) pełne jaj → świnia połyka jaja z paszą → z jaja wykluwają się onkosfery (larwy z 6 hakami) → przebijają ścianę jelita → via krew do mięśni → tworzą wągry (cysticerki): otoczkowane larwy ~1 cm z inwaginowanym skoleksem z hakami i 4 przyssawkami. Etap II — w żywicielu ostatecznym (człowiek): człowiek zjada surowe/niedogotowane mięso wieprzowe z wągrami → w żołądku enzymy trawienne uwalniają skoleks → skoleks ewaginuje i przytwierdza się do ściany jelita cienkiego → strobilizacja: sukcesywne wytwarzanie proglotydów (do kilku tysięcy) → całkowita długość 2–8 m; dojrzałe proglottydy (hermafrodytyczne, samonawożące się lub krzyżowe) oddzielają się i z kałem opuszczają żywiciela. Człowiek może być też żywicielem pośrednim (wągrzycą mózgu) przy połknięciu jaj.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.parz,
    question_type: 'open',
    question_text: 'Porównaj budowę polipa i meduzy u parzydełkowców (Cnidaria). Wskaż dwie cechy wspólne i dwie różnice między tymi formami morfologicznymi.',
    options: [], correct_answer: [],
    explanation: 'Cechy wspólne: symetria promienista, dwie warstwy komórek (ektoderma + endoderma) z mezoglea, jamochłonność, komórki parzydełkowe (nematocysty). Różnice: polip — osiadły, cylindryczny, otwór gębowy ku górze; meduza — pływająca, dzwonowata, otwór gębowy ku dołowi, dobrze rozwinięta mezoglea.',
    max_points: 2,
    key_points: [
      'Cechy wspólne polipa i meduzy: (1) symetria promienista (radialna) — ciało zorganizowane wokół osi apikalno-bazalnej, brak lewej/prawej strony; (2) dwie warstwy komórkowe (diploblastyczność): ektoderma (zewnętrzna) + endoderma (wewnętrzna) z bezkomórkową mezoglą między nimi; obie formy mają nematocysty (komórki parzydełkowe/knidocyty) służące do polowania i obrony',
      'Różnice: (1) tryb życia i kształt ciała: polip — osiadły (przyrośnięty do podłoża), cylindryczny/rurkowy, otwór gębowy skierowany ku górze z ramionami/czułkami; meduza — swobodnie pływająca (plankton), dzwonowata (parasolkowa), otwór gębowy skierowany ku dołowi, ramiona ramienne (tentakle marginalne); (2) mezoglea: u polipa cienka warstwa; u meduzy gruba, galaretowata, stanowi większość masy ciała (zawiera dużo wody = płyci gęstość = pływalność)'
    ],
    model_answer: 'Parzydełkowce (Cnidaria) wykazują przemianę pokoleń między formą polipa i meduzy (np. u meduz właściwych — Scyphozoa; u koralowców — Anthozoa tylko polip; u stułbi — Hydrozoa zazwyczaj tylko polip). Cechy wspólne: (1) Symetria promienista: ciało zorganizowane wokół osi centralnej, brak głowy i przodu/tyłu w sensie dwubocznym; przystosowanie do planktonowego/osiadłego trybu życia; (2) Diploblastyczność: ektoderma + mezoglea + endoderma (gastroderma); jedyna "jama ciała" to gastrowaskularna (jama chłonno-trawiąca); komórki parzydełkowe (cnidocyty/nematocysty) w obu formach. Różnice: (1) Kształt i orientacja: polip — cylindryczny, przytwierdzony podstawą do podłoża, otwór gębowy z tentaklami ku górze; meduza — dzwonowata/parasolkowa, wolnopływająca, otwór gębowy ku dołowi z ramionami marginalnie i centralnie; (2) Udział mezoglei: polip — mezoglea cienka (ciało głównie komórkowe); meduza — mezoglea gruba, galaretowata, nawodniona (96% wody), stanowi większość objętości ciała → pływalność zbliżona do wody morskiej.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Pierścienice i mięczaki ───
  {
    topic_id: TOPIC, subtopic_id: S.pier,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega celom (jama ciała wtórna) i jakie znaczenie ewolucyjne ma jego pojawienie się u pierścienic. Porównaj z jamą ciała u nicieni (pseudocelom) i bezkręgowców acelomatycznych.',
    options: [], correct_answer: [],
    explanation: 'Celom: wypełniona płynem jama wyścielona mezodermalnym nabłonkiem (peritoneum), między ścianą ciała a jelitem. Pierścienice: celom prawdziwy = hydrostatyczny szkielet (umożliwia ruchy robaczkowe), przestrzeń dla narządów wewnętrznych. Nicienie: pseudocelom (nie wyścielony nabłonkiem mezodermalnym). Acelomaty (płazińce): brak jamy ciała — narządy zanurzone w miąższu.',
    max_points: 2,
    key_points: [
      'Celom (jama ciała wtórna): jama wypełniona płynem celomatycznym, wyścielona nabłonkiem mezodermalnym (peritoneum) po obu stronach — między ektodermą a endodermą; u pierścienic celom prawdziwy jest podzielony przegrodami na segmenty (metameria); funkcje: (1) szkielet hydrostatyczny (ciśnienie płynu celomatycznego + mięśnie okrężne i podłużne umożliwiają ruch perystaltyczny — kopanie, pełzanie); (2) przestrzeń dla rozwoju narządów wewnętrznych (nerki = metanefrydia, gonady)',
      'Porównanie: acelomaty (Platyhelminthes — płazińce): brak jamy ciała, narządy zanurzone w miąższu (parenchymie mezodermalnej) → ogranicza rozmiary i złożoność narządów; pseudocelom (nicienie, Nematoda): jama ciała NIE wyścielona nabłonkiem mezodermalnym (pochodzi z blastocoela) → funkcjonuje jako hydrostatyczny szkielet, ale brak peritoneum; celom (pierścienice, stawonogi, mięczaki, szkarłupnie, strunowce): jama wyścielona peritoneum → narządy zawieszone na krezce, lepsze unaczynnienie, większa złożoność anatomiczna'
    ],
    model_answer: 'Celom (jama ciała wtórna): powstaje w trakcie embriogenezy z mezodermy (schizocelom — pęknięcie mezodermalne; enterocelom — uwypuklenie jelita pierwotnego); jest wyścielony cienkim nabłonkiem mezodermalnym (peritoneum/otrzewna) po stronie ściany ciała (somatopleura) i po stronie jelit (splanchnopleura); wypełniony płynem celomatycznym. Znaczenie ewolucyjne u pierścienic: (1) Szkielet hydrostatyczny: niesymetrycznie ułożone mięśnie (okrężne + podłużne) działają na zamkniętą jamę celomiczną → ruchy perystaltyczne (robaczkowe), kopanie w glebie (dżdżownice); (2) Przestrzeń dla narządów: zawieszenie jelit na krezce (mesenteria) → swobodny rozwój układu wydalniczego (metanefrydia) i rozrodczego; (3) Transport: płyn celomatyczny pełni rolę pierwotnej "krwi" — rozsiewanie substancji przed pojawieniem się układu krążenia. Porównanie: Acelomaty (Platyhelminthes): brak jamy → narządy zanurzone w litym miąższu → ograniczona złożoność anatomiczna, mały rozmiar. Pseudocelomaty (Nematoda, Rotifera): jama ciała bez peritoneum (blastocel zarodkowy) → hydrostatyka tak, ale brak krezki → jelit nie zawieszony. Celomaty: pierścienice, mięczaki, stawonogi, szkarłupnie, strunowce → wysoka złożoność anatomiczna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Stawonogi ───
  {
    topic_id: TOPIC, subtopic_id: S.staw,
    question_type: 'open',
    question_text: 'Wyjaśnij, w jaki sposób szkielet zewnętrzny (egzoszkielet) stawonogów pełni funkcję ochronną i lokomotoryczną, oraz jakie ograniczenie wzrostu z niego wynika. Opisz, jak stawonogi rozwiązują ten problem.',
    options: [], correct_answer: [],
    explanation: 'Egzoszkielet (kutikulа z chityny): ochrona przed urazami i wysychaniem, miejsce przyczepu mięśni. Ograniczenie: nie rozciąga się → wzrost możliwy tylko po lince (ekdyzie). W czasie linienia zwierzę jest bezbronne i wchłania wodę, by rozszerzyć nową kutykulę przed jej stwardnieniem.',
    max_points: 2,
    key_points: [
      'Funkcje egzoszkieletu: (1) ochronna — sztywna kutikula z chityny (polisacharyd) wzmocniona u skorupiaków węglanem wapnia, u owadów sklerotyną — chroni przed mechanicznym uszkodzeniem, drapieżnikami i wysuszeniem (warstwa woskowa epikutikuli zapobiega utracie wody u owadów lądowych); (2) lokomotoryczna — mięśnie przyczepiają się do wewnętrznej powierzchni kutikuli i do wyrostków (apodemy), działając jak dźwignie przy ruchach kończyn i tułowia',
      'Ograniczenie wzrostu i jego rozwiązanie: nierozciągliwy egzoszkielet uniemożliwia ciągły wzrost ciała → rozwiązanie: linienie (ekdyzja, molting) — hormon ekdyzon (ekdysteron) wyzwala syntezę nowej, miękkiej kutikuli pod starą; stara kutikula pęka i jest odrzucana → zwierzę pochłania wodę/powietrze, powiększając ciało zanim nowa kutikula stwardnieje (sklerotyzacja); w czasie linienia zwierzę jest miękkie i bezbronne (stadium apomolt)'
    ],
    model_answer: 'Egzoszkielet (kutikula) stawonogów — budowa i funkcje: Kutikula = wielowarstwowa: epikutikula (cienka, z lipidami i woskiem — bariera wodna), egzokutikula (sklerotynoproteinowa, twarda, ciemna) + endokutikula (chitynowo-białkowa, elastyczna). Funkcje: (1) Ochronna: mechaniczna ochrona tkanek miękkich; u skorupiaków (Crustacea) impregnacja solami wapnia (CaCO₃) → pancerz; hydrofobowe lipidy epikutikuli → zapora przed wysychaniem (kluczowe u owadów lądowych; chityna bez wosków byłaby przepuszczalna); (2) Lokomotoryczna: mięśnie (często antagonistyczne pary: zginacze + prostowniki) przyczepiają się do wewnętrznej powierzchni lub do apodemy (wpukleń kutikuli) → system dźwigni przy każdym stawonożu (Arthropoda = "stawonogi"). Ograniczenie wzrostu: kutikula nie rozciąga się → wzrost możliwy tylko skokowo. Rozwiązanie — linienie (ekdyzja): neuropeptyd PTTH → gruczoł piersiowy (owady) → ekdyzon → synteza nowej, miękkiej kutikuli pod starą → aktywacja proteaz → stara kutikula wchłania się częściowo lub pęka i jest zrzucana (exuvium) → zwierzę chwilowo miękkie (teneral stage) → pęcznieje przez absorpcję wody/powietrza → nowa kutikula twardnieje (sklerotyzacja) i ciemnieje (tanning/melanizacja) → wzrost utrwalony do następnego linienia.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Ryby i płazy ───
  {
    topic_id: TOPIC, subtopic_id: S.ryby,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega podwójny obieg krwi u płazów i czym różni się od pojedynczego obiegu u ryb. Jakie znaczenie ma podwójny obieg dla wydajności zaopatrzenia tkanek w tlen?',
    options: [], correct_answer: [],
    explanation: 'Ryby: jeden obieg — serce (2 komory: przedsionek + komora) → skrzela (utlenowanie) → tkanki → serce. Płazy: dwa obiegi — małe (płucne): serce → płuca/skóra → serce; duże (systemowe): serce → tkanki → serce. Serce płazów: 3 komory (2 przedsionki + 1 komora — mieszanie krwi). Podwójny obieg = wyższe ciśnienie w krążeniu systemowym → lepsza perfuzja tkanek.',
    max_points: 2,
    key_points: [
      'Pojedynczy obieg ryb: krew przepływa przez serce tylko raz na jeden pełny obieg ciała; serce dwukomorowe (przedsionek + komora) pompuje krew do skrzeli (kapilary skrzelowe — utlenowanie + usunięcie CO₂) → krew utlenowana (ale ze spadkiem ciśnienia przez opór skrzeli) płynie do tkanek → krew odtlenowana wraca do serca; niskie ciśnienie w naczyniach systemowych po przejściu przez skrzela — ogranicza wydajność krążenia',
      'Podwójny obieg płazów: dwa oddzielne obiegi przez serce trójkomorowe (2 przedsionki + 1 komora — mieszanie krwi!); (1) obieg mały (płucno-skórny): prawa komora → płuca i skóra → lewa część przedsionka → lewy przedsionek → komora; (2) obieg duży (systemowy): lewa część komory → aorta → tkanki → prawy przedsionek → komora; krew wraca do serca utlenowana i od razu pompowana do tkanek bez utraty ciśnienia przez opór skrzeli → wyższe ciśnienie w krążeniu systemowym → lepsza perfuzja narządów; częściowe mieszanie krwi utlenowanej i odtlenowanej w komorze — ograniczenie płazów'
    ],
    model_answer: 'Pojedynczy obieg krwi (ryby, Pisces): serce dwukomorowe (1 przedsionek + 1 komora); krew → serce → tętnica doprzelotowa (bulbus arteriosus / conus arteriosus) → łuki skrzelowe (kapilary skrzelowe: wymiana gazowa, utlenowanie) → tętnica grzbietowa → naczynia systemowe (tkanki, narządy) → żyły → zatoka żylna → przedsionek → komora; ciśnienie spada po przejściu przez skrzela (duży opór kapilarny) → krew do tkanek płynie pod niskim ciśnieniem → ograniczona perfuzja. Podwójny obieg (płazy, Amphibia): serce trójkomorowe (2 przedsionki + 1 komora); (1) Obieg mały (płucno-skórny): prawa część komory → tętnica płucno-skórna → płuca i skóra (wymiana gazowa) → żyły płucno-skórne → lewy przedsionek; (2) Obieg duży (systemowy): lewa część komory (dominuje krew utlenowana z lewego przedsionka) → łuk aorty → naczynia systemowe → żyły systemowe → prawy przedsionek; serce pompuje krew do naczyń systemowych bezpośrednio po utlenowaniu → wyższe ciśnienie systemowe → lepsza perfuzja tkanek. Ograniczenie płazów: niekompletna przegroda w komorze → częściowe mieszanie krwi utlenowanej i odtlenowanej; rozwiązanie u gadów (4 komory u krokodyli) i ptaków/ssaków (serce 4-komorowe = całkowity podział obiegu).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ryby,
    question_type: 'open',
    question_text: 'Wyjaśnij, jakie przystosowania do życia w wodzie posiada ryba kostna w zakresie oddychania i osmoregulacji. Uwzględnij funkcję pęcherza pławnego i pracy skrzeli w regulacji ciśnienia osmotycznego.',
    options: [], correct_answer: [],
    explanation: 'Skrzela: wymiana gazowa (O₂/CO₂) i osmoregulacja (komórki chlorkowe wydalają Na⁺/Cl⁻ u ryb słonowodnych lub aktywnie pobierają jony u słodkowodnych). Pęcherz pławny: regulacja pływalności (zmiana objętości gazu = hydrostatyczna ruchliwość w pionie bez wydatku energii). Ryby słodkowodne — hiperosmotyczne vs słonowodne — hipoosmotyczne.',
    max_points: 2,
    key_points: [
      'Oddychanie i osmoregulacja przez skrzela: skrzela mają dwie funkcje jednocześnie: (1) wymiana gazowa — krew przepływa przez kapilary blaszkowe countercurrent (przeciwprądowo) do wody → maksymalna ekstrakcja O₂ i eliminacja CO₂; (2) osmoregulacja — komórki chlorkowe (ionocyty) w nabłonku skrzelowym aktywnie transportują jony: u ryb słodkowodnych (hiperosmotycznych) aktywne pobieranie Na⁺, Cl⁻ z rozcieńczonej wody + nerki produkują dużo rozcieńczonego moczu (eliminacja nadmiaru wody wnikającej osmotycznie); u ryb morskich (hipoosmotycznych) aktywne wydalanie Na⁺, Cl⁻ przez skrzela + piją wodę morską + nerki produkują mało zagęszczonego moczu',
      'Pęcherz pławny: narząd hydrostatyczny wypełniony mieszaniną gazów (O₂, CO₂, N₂); regulacja pływalności: zmiana objętości gazu (wydzielanie przez gruczoł gazowy = rete mirabile / wchłanianie przez owalne ciało) zmienia gęstość ciała → ryba unosi się lub opada bez energochłonnego ruchu płetwami; dzięki pęcherzowi pławnemu ryby kostne mogą efektywnie zasiedlać różne głębokości i przez długi czas pozostawać nieruchomo w toni'
    ],
    model_answer: 'Ryby kostne (Osteichthyes) — przystosowania do środowiska wodnego: Oddychanie: skrzela (cztery łuki po każdej stronie u teleostei) pokryte blaszkami I- i II-rzędu (lamellae) → ogromna powierzchnia wymiany gazowej; przepływ wody przez skrzela jednokierunkowy (woda → otwór gębowy → przestrzeń skrzelowa → szpara skrzelowa); krew w kapilarach blaszkowych płynie w kierunku przeciwnym do wody (wymiana przeciwprądowa) → efektywność ekstrakcji O₂ > 80%. Osmoregulacja przez skrzela: jonocyty (komórki chlorkowe, rich-cell) z Na⁺/K⁺-ATPazą i kotransporterami: ryby słodkowodne — aktywnie pobierają Na⁺, Cl⁻ z wody (bo otoczenie jest hipoosmotyczne) + produkują dużo rozcieńczonego moczu (eliminacja wody wnikającej osmotycznie); ryby morskie — aktywnie wydalają Na⁺ przez skrzela i piją wodę morską (bo są hipoosmotyczne = tracą wodę osmotycznie). Pęcherz pławny (pęcherz gazowy): jednokomorowy lub dwukomorowy; gruczoł gazowy (rete mirabile = sieć cudna) wydziela O₂ do pęcherza przez countercurrent multiplication → ↑objętość → ↓gęstość → ryba unosi się; owalne ciało wchłania gaz → ↑gęstość → ryba opada; umożliwia pasywne utrzymywanie pływalności na żądanej głębokości bez ciągłego ruchu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Gady i ptaki ───
  {
    topic_id: TOPIC, subtopic_id: S.gady,
    question_type: 'open',
    question_text: 'Wyjaśnij, jakie cechy budowy i fizjologii ptaków świadczą o tym, że są one stałocieplne (endotermiczne). Podaj trzy konkretne przystosowania i wyjaśnij, jak każde z nich pomaga utrzymać stałą temperaturę ciała.',
    options: [], correct_answer: [],
    explanation: 'Pióra (izolacja termiczna), wysoki metabolizm (generowanie ciepła), worki powietrzne (efektywna wymiana gazowa = więcej O₂ = wyższy metabolizm), serce 4-komorowe (oddzielenie obiegów = wyższe ciśnienie = szybszy metabolizm tkanek), regulacja behawioralna (nastroszenie piór, zimowanie/migracja).',
    max_points: 3,
    key_points: [
      'Pióra (pierze): warstwa puchu (pióra puchowe) tworzy warstwę izolacyjną z nieruchomego powietrza przylegającego do ciała → minimalizuje straty ciepła przez przewodzenie i konwekcję; możliwość nastroszenia piór (mięśnie przywłosowe) zwiększa grubość warstwy izolacyjnej przy zimnie; tłuszcz podskórny u niektórych ptaków wodnych to dodatkowa izolacja',
      'Wysoki metabolizm podstawowy i serce 4-komorowe: metabolizm ptaków ok. 5–10× wyższy niż gadów o tej samej masie → stałe wytwarzanie ciepła przez reakcje utleniania; serce 4-komorowe (całkowite oddzielenie krążenia płucnego i systemowego) → krew utlenowana nigdy nie miesza się z odtlenowaną → wyższe ciśnienie systemowe → szybsza perfuzja mięśni i narządów → wyższe tempo metabolizmu i produkcja ciepła',
      'Worki powietrzne (system przepływowy płuc): 9 worków powietrznych połączonych z płucami tworzy system przepływowy (powietrze przechodzi przez płuca jednokierunkowo przy wdechu i wydechu) → ciągła, efektywna ekstrakcja O₂ (w przeciwieństwie do ssaczego płuca workowego z martwą przestrzenią); wyższa ekstrakcja O₂ → wyższy metabolizm tlenowy → więcej ciepła metabolicznego; worki powietrzne też chłodzą ciało przez parowanie (termoregulacja w upale)'
    ],
    model_answer: 'Ptaki (Aves) — przystosowania endotermiczne: (1) Pióra (pierze): konturowe pióra (lotki, sterówki, okrywowe) tworzą aerodinamiczny profil; pióra puchowe (plumes) wewnątrz: gałązki bez haczyków → puszysty "kołdra" z nieruchomego powietrza → znakomita izolacja termiczna; przewodność cieplna powietrza 0,024 W/(m·K) → minimalne straty ciepła; nastroszenie (pilo-erekcja) przy zimnie → ↑grubość warstwy izolacyjnej; tłuszczenie piór (gruczoł kuprowy — olej grzebieniowy) = hydrofobowość (ptaki wodne). (2) Serce 4-komorowe i wysokie ciśnienie krwi: kompletna przegroda międzykomorowa → obieg płucny (niskociśnieniowy) całkowicie oddzielony od systemowego (wysokociśnieniowy) → krew w pełni utlenowana do tkanek → szybki i wydajny transport O₂ → podtrzymanie wysokiego metabolizmu (temperatura ciała 40–42°C). (3) Worki powietrzne (9 worków): płuca ptaków sztywne (parabronchialne), powietrze płynie przez nie jednokierunkowo (paraoskunienie) → eliminacja "martwej przestrzeni" płuca; przy każdym oddechu przez płuca przepływa świeże powietrze → ekstrakcja O₂ ~75% (ssaki ~25%) → więcej O₂ dla metabolizmu → więcej ciepła; w upale worki parują → chłodzenie (ptaki nie pocą się).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Ssaki ───
  {
    topic_id: TOPIC, subtopic_id: S.ssaki,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego ssaki łożyskowe (Eutheria) zdominowały większość lądowych nisz ekologicznych, podczas gdy torbacze (Metatheria) przetrwały głównie w Australii. Uwzględnij w odpowiedzi różnice w rozrodzie i rolę izolacji geograficznej.',
    options: [], correct_answer: [],
    explanation: 'Łożyskowce: długa ciąża, dobrze rozwinięty noworodek → wyższa przeżywalność. Torbacze: krótka ciąża, wczesny noworodek (dojrzewa w torbie) — mniej wydajny reprodukcyjnie w konkurencji. Australia odizolowała się zanim łożyskowce wyewoluowały → torbacze zajęły nisze bez konkurencji.',
    max_points: 2,
    key_points: [
      'Różnica w rozrodzie: łożyskowce (Eutheria) mają długą ciążę z w pełni wykształconym łożyskiem (allantochorialne) → wymiana substancji odżywczych, gazów i usuwanie odpadów przez łożysko przez całą ciążę → noworodek urodzony stosunkowo dojrzały (choć u wielu gatunków gniazdowniki); torbacze (Metatheria): łożysko prymitywne (żółtkowo) → krótka ciąża (np. kangur olbrzymi: 33 dni) → noworodek bardzo nierozwinięty (ok. 1 g, ślepy, bez tylnych kończyn) → kontynuuje rozwój w torbie (marsupium) ssąc mleko → dłuższy okres zależności, wyższe ryzyko w czasie migracji do torby',
      'Izolacja geograficzna Australii: Australia oddzieliła się od Gondwany (~45 mln lat temu) zanim łożyskowce zdominowały glob → torbacze ewoluowały bez konkurencji ze strony łożyskowców → radiacja adaptacyjna: kangury (odpowiedniki jeleni/koni), koala (jak leniwce), diabeł tasmański (jak wolverine), wilk workowaty (wymarły — jak wilk); na innych kontynentach łożyskowce konkurencyjnie wyparły większość torbaczy (wyjątek: oposy w Ameryce Pd./Pn.)'
    ],
    model_answer: 'Łożyskowce (Eutheria) vs torbacze (Metatheria): Różnice reprodukcyjne: Łożyskowce: łożysko allantochorialne (silnie rozwinięte naczynia z omoczni przerastają do kosmówki → bliska bliskość krwi matki i płodu bez mieszania → wydajna wymiana gazów, substancji odżywczych i metabolitów przez długi okres ciąży); wynik: noworodek rozwinięty (wiele gatunków gniazdownikami: człowiek, krowa; inne zagniazdownikami: mysz, królik — ale wszystkie dojrzalsze niż torbacze). Torbacze: "łożysko" (kosmówkowo-żółtkowe, u części tymczasowe allantochorialne jak u bandikuta) → ograniczona wymiana → krótka ciąża → malutki, niedorozwinięty noworodek (joey) wędruje do torby i przyczepia się do sutka; kangur olbrzymi: ciąża 33 dni, joey 0,8 g. Dlaczego łożyskowce dominują: dłuższa opieka płodowa → wyższa przeżywalność przy urodzeniu → efektywniejsza reprodukcja w środowiskach z drapieżnikami i konkurencją. Australia — wyjątek: oddzieliła się ~45–55 mln lat temu (kiedy torbacze były dominujące) → brak łożyskowców → torbacze wypełniły wszystkie nisze przez radiację adaptacyjną; łożyskowce wprowadzone przez człowieka (królik, lis, kot, szczur) → dewastacja populacji torbaczy (efekt inwazyjna gatunków).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Porównanie budowy kręgowców ───
  {
    topic_id: TOPIC, subtopic_id: S.por,
    question_type: 'open',
    question_text: 'Porównaj budowę serca i obieg krwi u ryb, płazów i ssaków. Wykaż, że stopniowe doskonalenie serca w toku ewolucji kręgowców związane jest z przejściem do lądowego trybu życia i endotermią.',
    options: [], correct_answer: [],
    explanation: 'Ryby: serce 2-komorowe, obieg pojedynczy. Płazy: serce 3-komorowe (2 przedsionki + 1 komora), obieg podwójny niekompletny. Gady: serce 3–4-komorowe (u krokodyli 4), obieg podwójny. Ssaki i ptaki: serce 4-komorowe, obieg podwójny pełny — całkowite oddzielenie krwi utlenowanej i odtlenowanej.',
    max_points: 3,
    key_points: [
      'Ryby (Pisces): serce 2-komorowe (1 przedsionek + 1 komora + zatoka żylna + stożek tętniczy); JEDEN obieg (monogyracja): serce → skrzela (utlenowanie) → tkanki → serce; po przejściu przez kapilary skrzelowe ciśnienie krwi spada → niska perfuzja tkanek; ektotermia (zmiennocieplne) = niski metabolizm = serce 2-komorowe wystarczające',
      'Płazy (Amphibia): serce 3-komorowe (2 przedsionki + 1 komora); DWA obiegi (digyracja) — mały (płucno-skórny) i duży (systemowy); wadliwa: wspólna komora → mieszanie krwi utlenowanej (z lewego przedsionka: z płuc i skóry) z odtlenowaną (z prawego: z tkanek) → krew do tkanek nie w pełni utlenowana; pierwsze kręgowce lądowe — potrzeba obiegu płucnego (skrzela → płuca/skóra); ektotermia — jeszcze 3-komorowe serce nie limituje',
      'Ssaki (Mammalia) i ptaki (Aves): serce 4-komorowe (2 przedsionki + 2 komory z PEŁNĄ przegrodą); DWA CAŁKOWICIE ODDZIELONE obiegi; krew utlenowana i odtlenowana nie mieszają się → optymalne dostarczanie O₂ do tkanek; endotermia (stałocieplność) = wysoki metabolizm (5–10× wyższy niż u gadów) = wymaga stałego, wydajnego dostarczania O₂ → 4-komorowe serce jest warunkiem koniecznym endotermii; ewolucja od 3-komorowego serca gadów do 4-komorowego: przegroda komorowa rozwijała się stopniowo (u krokodyli 4-komorowe, ale z otworem Foramen Panizzae)'
    ],
    model_answer: 'Ewolucja serca kręgowców — od ryb do ssaków: Ryby: serce 2-komorowe (zatoka żylna → przedsionek → komora → conus arteriosus); monogyracja — krew okrąża ciało raz (skrzela → tkanki → serce); ciśnienie systemowe niskie (opór skrzeli); ektotermia → niski metabolizm → 2-komorowe serce wystarczające. Płazy: pierwsze dwuobiegowe; serce 3-komorowe (2 przedsionki + 1 komora); krew z płuc (lewy przedsionek) i ze skóry miesza się z krwią żylną z tkanek (prawy przedsionek) w jednej komorze → częściowe "zanieczyszczenie" krwi tętniczej; adaptacja do lądowych płuc i częściowej niezależności od wody; wciąż ektotermia. Gady (nielatające): serce 3-komorowe z niepełną przegrodą komorową (wyjątek: krokodyle = 4-komorowe z Foramen Panizzae), obieg podwójny; większa separacja niż u płazów; ektotermia. Ptaki i ssaki: serce 4-komorowe z PEŁNĄ przegrodą — lewa komora (silna, gruba ściana) → tętnica systemowa → tkanki → żyły → prawy przedsionek → prawa komora → tętnica płucna → płuca → żyły płucne → lewy przedsionek → cykl; endotermia wymaga 5–10× wyższego metabolizmu → ciągłe, wydajne dostarczanie O₂ → tylko pełne oddzielenie krążeń to gwarantuje; krew utlenowana (saturacja ~98%) zawsze do tkanek.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Rozmnażanie zwierząt ───
  {
    topic_id: TOPIC, subtopic_id: S.rozm,
    question_type: 'open',
    question_text: 'Porównaj jajo amnioty (gad, ptak) z jajem płaza pod względem budowy i przystosowania do środowiska lądowego. Wyjaśnij, jaką rolę pełnią błony płodowe (owodnia, kosmówka, omocznia) w jaju ptaka.',
    options: [], correct_answer: [],
    explanation: 'Jajo amniotyczne: skorupka (ochrona mechaniczna i przed wysychaniem), białko (bufor, zapas wody), żółtko (pokarm), błony płodowe: owodnia (wypełniona płynem — środowisko wodne dla zarodka), omocznia (zbiera odpady azotowe jako kwas moczowy, wymiana gazowa), kosmówka (otacza wszystko, wymiana gazowa ze skorupką). Jajo płaza: brak skorupki i błon płodowych → musi być składane w wodzie.',
    max_points: 2,
    key_points: [
      'Jajo amniotyczne (gad, ptak): nieprzepuszczalna skorupka (wapniowa u ptaków lub skórzasta u gadów) → ochrona przed wysychaniem i mechaniczna; białko → zapas wody + bufor + ochrona przed wstrząsami; żółtko → zapas składników odżywczych (lipidy, białka); trzy błony płodowe wewnątrz: (1) owodnia (amnion) — wypełniona płynem owodniowym → tworzy "sztuczne środowisko wodne" dla zarodka na lądzie; (2) omocznia (allantois) — zbiera odpady azotowe (kwas moczowy — nierozpuszczalny, nie toksyczny dla zarodka) + naczynia omoczni vaskularyzują błony → wymiana gazowa ze skorupką; (3) kosmówka (chorion) — zewnętrzna błona otaczająca całość + ściśle przylega do skorupki → wymiana O₂/CO₂',
      'Różnica od jaja płaza: jajo płaza (np. żaby) nie ma skorupki ani błon płodowych → pozbawione zabezpieczenia przed wysychaniem → musi być składane w wodzie lub wilgotnym środowisku; galaretowata osłonka jajowa płaza (mukopolisacharydy) chroni mechanicznie i przed infekcją, ale jest przepuszczalna dla wody; brak owodni → zarodek bezpośrednio w wodzie (zewnętrznej lub środowisku wodnym wewnątrz skrzeku); jajo amniotyczne = kluczowa innowacja ewolucyjna umożliwiająca zupełne uniezależnienie się od wody przy rozrodzie'
    ],
    model_answer: 'Jajo amniotyczne — ewolucja klucz do ladu: Budowa jaja ptaka (przykład): (1) Skorupka wapniowa (CaCO₃) z porami: ochrona mechaniczna + semi-przepuszczalność dla gazów (O₂ wnika, CO₂ i para wodna wychodzą) + bariera przed wysychaniem; (2) Białko (albumen): zapas wody + bufor osmotyczny + mechaniczna amortyzacja + inhibitory bakteryjne (lizozym, awidyna); (3) Żółtko: bogaty zapas lipidów, białek, witamin dla rozwijającego się zarodka; (4) Trzy błony płodowe: Owodnia (amnion): okotacza zarodek bezpośrednio, wypełniona płynem owodniowym (wodny "mikrobiom") → zarodek "pływa" w wodzie mimo że jajo jest na lądzie; amortyzacja mechaniczna. Omocznia (allantois): uwypuklenie tylnego jelita zarodka; naczynia omoczni dochodzą do porów skorupki → wymiana O₂/CO₂; jama omoczni gromadzi kwas moczowy (nierozpuszczalny kryształ = bezpieczna forma azotu) — zarodek nie wydala moczu. Kosmówka (chorion): zewnętrzna błona; przylega do omoczni tworząc chorioallantois przylegający do skorupki; główna powierzchnia wymiany gazowej. Jajo płaza: brak skorupki i błon płodowych → wrażliwe na wysychanie → środowisko wodne obligatoryjne; galaretowata osłonka = ochrona mechaniczna + przed mikroorganizmami, ale przepuszczalna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions',
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
  console.log(`Seeding ${questions.length} open questions for Różnorodność zwierząt...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.max_points}pkt]`, q.question_text.slice(0, 70).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
