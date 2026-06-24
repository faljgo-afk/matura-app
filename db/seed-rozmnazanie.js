// Seed: Rozmnażanie i rozwój człowieka — 20 questions
// Topic: 9318fe27-0bc0-48da-921d-bef5291289fe

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '9318fe27-0bc0-48da-921d-bef5291289fe'

const S = {
  zenski:    'ad80d8e8-08db-4467-a3b7-f3621dc5d766',
  cykl:      'fa1c366b-5f36-4b00-8223-b4f7d3dac1cd',
  meski:     '3b8f8ef2-b2d6-457c-8c0e-15bd7a6eabf4',
  gamety:    'e3f3cab2-ea59-40be-9bb0-f7bbb232816b',
  zaplodnienie:'e7c90d10-927c-473a-aeba-6de486cc562f',
  ciaza:     '5ea044a7-8f53-45d2-b42c-a5060bf0a0f3',
  porod:     'b055c17e-4c2f-4aa2-a726-bbed4a66b2c9',
  hormony:   '4527aa1f-d80a-417d-9aed-392e9833e154',
}

const questions = [
  // --- Układ rozrodczy żeński ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zenski,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących żeńskiego układu rozrodczego.\nA. Jajowody (tuby uterine) stanowią miejsce zapłodnienia — tu dochodzi do połączenia komórki jajowej z plemnikiem.\nB. Endometrium (błona śluzowa macicy) ulega cyklicznym zmianom grubości pod wpływem estrogenów i progesteronu.\nC. Jajniki pełnią wyłącznie funkcję endokrynną — produkują hormony płciowe, ale nie uczestniczą w wytwarzaniu gamet.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Zapłodnienie następuje w jajowodzie.', is_correct: true },
      { id: 'B', text: 'Endometrium ulega cyklicznym zmianom pod wpływem estrogenów i progesteronu.', is_correct: true },
      { id: 'C', text: 'Jajniki pełnią wyłącznie funkcję endokrynną.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: po owulacji komórka jajowa jest wychwytywana przez strzępki jajowodu; zapłodnienie zachodzi w bańce jajowodu (ampulla tubae uterinae) — ok. 12–24 h po owulacji. B — Prawda: estrogeny (faza folikularna) stymulują proliferację endometrium; progesteron (faza lutealna) pobudza jego wydzielnicze dojrzewanie, przygotowując macicę na implantację. C — Fałsz: jajniki pełnią DWOJAKĄ funkcję: egzokrynną (produkcja komórek jajowych — oogeneza) i endokrynną (estrogeny, progesteron, inhibina).',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zenski,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nOwulacja u kobiety to:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'proces podziału mejotycznego oocytu II rzędu zakończony wytworzeniem dojrzałej komórki jajowej i trzech ciałek kierunkowych', is_correct: false },
      { id: 'B', text: 'pęknięcie dojrzałego pęcherzyka Graafa i uwolnienie oocytu II rzędu z jajnika do jajowodu', is_correct: true },
      { id: 'C', text: 'moment zapłodnienia komórki jajowej przez plemnik w jajniku', is_correct: false },
      { id: 'D', text: 'comiesięczne złuszczanie endometrium wraz z niezapłodnioną komórką jajową', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Owulacja to uwolnienie oocytu II rzędu (zatrzymanego w metafazie II mejozy) z pęcherzyka Graafa pod wpływem szczytu LH (~14. dzień cyklu). Oocyt, a nie dojrzała komórka jajowa, opuszcza jajnik. Drugi podział mejotyczny dokańcza się dopiero po wniknięciu plemnika (zapłodnienie). A — opisuje zakończenie oogenezy po zapłodnieniu, nie owulację. C — błąd: zapłodnienie zachodzi w jajowodzie, nie w jajniku. D — opisuje miesiączkę (menstruację).',
    difficulty: 2,
    verified: true,
  },

  // --- Cykl menstruacyjny ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.cykl,
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisuje fazy cyklu menstruacyjnego (28-dniowego)?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Faza folikularna trwa od owulacji do następnej miesiączki i charakteryzuje się wysokim poziomem progesteronu', is_correct: false },
      { id: 'B', text: 'Szczyt LH (hormon luteinizujący) pojawia się ok. 14. dnia cyklu i bezpośrednio wyzwala owulację', is_correct: true },
      { id: 'C', text: 'Ciałko żółte (corpus luteum) powstaje z pęcherzyka Graafa po miesiączce i produkuje estrogeny hamujące LH', is_correct: false },
      { id: 'D', text: 'Progesteron wydzielany w fazie folikularnej przygotowuje endometrium do implantacji zarodka', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Cykl 28-dniowy: dni 1–5 menstruacja → dni 1–14 faza folikularna (FSH stymuluje dojrzewanie pęcherzyków, estrogeny rosną) → ok. dnia 12–13 szczyt estrogenów → dodatnie sprzężenie zwrotne → szczyt LH → owulacja (dzień 14) → dni 15–28 faza lutealna (ciałko żółte produkuje progesteron i estrogeny → przygotowanie endometrium) → brak zapłodnienia → zanik ciałka żółtego → spadek hormonów → miesiączka. A, C, D — błędne opisy faz.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.cykl,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cyklu menstruacyjnego.\nA. W fazie lutealnej ciałko żółte produkuje progesteron, który utrzymuje endometrium w stanie wydzielniczym — gotowym na implantację.\nB. Jeśli nie dojdzie do zapłodnienia, ciałko żółte zanika po ok. 14 dniach, poziom progesteronu spada i dochodzi do miesiączki.\nC. FSH (folikulotropina) osiąga szczyt tuż przed owulacją i jest bezpośrednią przyczyną pęknięcia pęcherzyka Graafa.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Ciałko żółte produkuje progesteron utrzymujący endometrium w stanie wydzielniczym.', is_correct: true },
      { id: 'B', text: 'Bez zapłodnienia ciałko żółte zanika, progesteron spada i następuje miesiączka.', is_correct: true },
      { id: 'C', text: 'FSH osiąga szczyt tuż przed owulacją i jest bezpośrednią przyczyną pęknięcia pęcherzyka.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A i B — Prawda: to kluczowe zasady fazy lutealnej. Ciałko żółte (luteum) żyje ok. 12–14 dni; bez sygnału hCG (od zarodka) ulega regresji → luteoliza → brak progesteronu i estrogenów → złuszczenie endometrium. C — Fałsz: bezpośrednią przyczyną owulacji jest SZCZYT LH (nie FSH). FSH wzrasta na początku cyklu i stymuluje wzrost pęcherzyków, ale to wyrzut LH powoduje owulację. Szczyt FSH jest wcześniejszy i mniejszy niż szczyt LH.',
    difficulty: 2,
    verified: true,
  },

  // --- Układ rozrodczy męski ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.meski,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących męskiego układu rozrodczego.\nA. Spermatogeneza zachodzi w kanalikach nasiennych jąder w temperaturze niższej niż temperatura wnętrza ciała — dlatego jądra zlokalizowane są w mosznie.\nB. Najądrze (epididymis) jest miejscem dojrzewania i magazynowania plemników przed wytryskiem.\nC. Gruczoł krokowy (prostata) produkuje testosteron niezbędny do inicjacji spermatogenezy.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Spermatogeneza wymaga niższej temperatury — jądra zlokalizowane są w mosznie.', is_correct: true },
      { id: 'B', text: 'Najądrze jest miejscem dojrzewania i magazynowania plemników.', is_correct: true },
      { id: 'C', text: 'Gruczoł krokowy produkuje testosteron niezbędny do spermatogenezy.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: spermatogeneza przebiega optymalnie w ok. 35°C (2–3°C poniżej temp. ciała) — wnętrostwo (niezstąpione jądra) prowadzi do niepłodności. B — Prawda: najądrze (3–4 m kanalika) jest miejscem finalnego dojrzewania (nabywanie zdolności ruchu), pojemności (magazynowanie do 2–3 tygodni) i koncentracji plemników. C — Fałsz: testosteron produkują komórki Leydiga (śródmiąższowe komórki jądra), a nie prostata. Gruczoł krokowy wydziela do nasienia płyn bogaty w cynk, kwas cytrynowy i enzymy proteolityczne.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.meski,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nKomórki Sertoliego w kanalikach nasiennych jąder pełnią funkcję:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wydzielania testosteronu pod wpływem LH z przysadki mózgowej', is_correct: false },
      { id: 'B', text: 'odżywiania i wspierania rozwijających się komórek płciowych oraz tworzenia bariery krew–jądro', is_correct: true },
      { id: 'C', text: 'produkcji FSH regulującego przebieg spermatogenezy', is_correct: false },
      { id: 'D', text: 'magazynowania dojrzałych plemników do czasu wytrysku', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Komórki Sertoliego (komórki podporowe/piastunki) pełnią kluczowe funkcje: odżywiają spermatogonia, spermatocyty i spermatydy (dostarczają glikogen, czynniki wzrostu); tworzą barierę krew–jądro (szczelne połączenia między komórkami Sertoliego chroniące rozwijające się plemniki przed układem immunologicznym); produkują inhibinę (hamuje FSH) i białko wiążące androgeny (ABP — utrzymuje wysokie stężenie testosteronu w kanalikach). A — testosteron produkują komórki Leydiga (pod wpływem LH). C — FSH produkuje przysadka. D — magazynowanie to funkcja najądrza.',
    difficulty: 2,
    verified: true,
  },

  // --- Spermatogeneza i owogeneza ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.gamety,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń porównujących spermatogenezę i owogenezę.\nA. W wyniku spermatogenezy z jednej komórki macierzystej (spermatocytu I rzędu) powstają 4 równoważne funkcjonalnie plemniki.\nB. W wyniku oogenezy z jednego oocytu I rzędu powstaje tylko jedna dojrzała komórka jajowa i trzy ciałka kierunkowe, które ulegają degeneracji.\nC. Zarówno spermatogeneza, jak i oogeneza, są procesami ciągłymi trwającymi od okresu dojrzewania przez całe życie człowieka.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Ze spermatocytu I rzędu powstają 4 równoważne funkcjonalnie plemniki.', is_correct: true },
      { id: 'B', text: 'Z oocytu I rzędu powstaje jedna dojrzała komórka jajowa i trzy ciałka kierunkowe.', is_correct: true },
      { id: 'C', text: 'Zarówno spermatogeneza jak i oogeneza trwają od dojrzewania przez całe życie.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: spermatocyt I rzędu (2n) → mejoza I → 2 spermatocyty II rzędu (n) → mejoza II → 4 spermatydy (n) → spermiogeneza → 4 plemniki. Wszystkie równorzędne genetycznie i funkcjonalnie. B — Prawda: w oogenezie podziały mejotyczne są asymetryczne — jedno duże jajo i małe ciałka kierunkowe (pierwsze ciałko przy mejoza I, dwa kolejne przy mejoza II) → zachowanie maksymalnej cytoplazmy w komórce jajowej. C — Fałsz: spermatogeneza u mężczyzn jest ciągła (od pokwitania całe życie). Oogeneza u kobiet jest CYKLICZNA i limitowana — kobiety rodzą się z zapasem ok. 1–2 mln oocytów I rzędu zatrzymanych w profazie I mejozy; po menopauzie oogeneza ustaje.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.gamety,
    question_text: 'Które z poniższych cech odróżniają komórkę jajową od plemnika?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Komórka jajowa jest znacznie większa od plemnika i zawiera duże rezerwy cytoplazmatyczne (żółtko, organelle)', is_correct: true },
      { id: 'B', text: 'Komórka jajowa jest nieruchoma, a plemnik porusza się dzięki wici (flagellum)', is_correct: true },
      { id: 'C', text: 'Komórka jajowa jest haploidalna (n), a plemnik — diploidalny (2n)', is_correct: false },
      { id: 'D', text: 'Główka plemnika zawiera akrosom z enzymami (hialuronidaza, akrozyna) umożliwiającymi penetrację osłonki przejrzystej', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: komórka jajowa (ok. 100–120 µm) jest jedną z największych komórek ciała; zawiera zapasy mRNA, białek, organelli i żółtka dla wczesnego rozwoju zarodka. Plemnik (~60 µm) jest bardzo mały — główka, wstawka (mitochondria) i wić. B — Prawda: komórka jajowa jest nieruchoma, a plemnik porusza się dzięki wici (ruch falujący, energia z ATP mitochondriów we wstawce). D — Prawda: akrosom (modyfikowany lizosomem) zawiera enzymy trawące osłonkę przejrzystą (zona pellucida) — hialuronidaza rozkłada hialuronową macierz wieńca promienistego, akrozyna (proteaza) trawi zona pellucida. C — Fałsz: OBIE gamety są haploidalne (n = 23 chromosomy) — połączenie daje zygotę 2n.',
    difficulty: 2,
    verified: true,
  },

  // --- Zapłodnienie i wczesny rozwój ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zaplodnienie,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nBlok wielorodkowy (reakcja blokowania polispermii) po zapłodnieniu polega na:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wydzieleniu przez komórkę jajową substancji przyciągających wyłącznie jeden plemnik gatunkowy', is_correct: false },
      { id: 'B', text: 'natychmiastowej depolaryzacji błony komórki jajowej po wniknięciu pierwszego plemnika (blok szybki) i reakcji kortykalnej tworzącej osłonkę zapłodnienia (blok wolny)', is_correct: true },
      { id: 'C', text: 'aktywacji limfocytów matki niszczących nadmiarowe plemniki wewnątrz komórki jajowej', is_correct: false },
      { id: 'D', text: 'wydzieleniu przez akrosom enzymu hyaluronidazy blokującego receptory na błonie komórki jajowej', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Po wniknięciu pierwszego plemnika następują dwa mechanizmy zapobiegające polispermii (wniknięciu więcej niż jednego plemnika): Blok szybki (electrical block, sekundy): depolaryzacja błony komórki jajowej z -70 mV do +20 mV — zmiana potencjału uniemożliwia fuzję kolejnych plemników. Blok wolny (cortical reaction, minuty): granule kortykalane (lizosomopodobne) egzocytują enzymy do przestrzeni między błoną a zona pellucida → twardnienie osłonki zapłodnienia (fertilization envelope). A — nie istnieje taki mechanizm specyficzności. C — układ immunologiczny nie jest zaangażowany. D — hyaluronidaza to enzym ułatwiający WNIKANIE, nie blokowania.',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zaplodnienie,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wczesnego rozwoju zarodkowego człowieka.\nA. Zygota przechodzi bruzdkowanie — kolejne podziały mitotyczne bez wzrostu komórek — tworząc najpierw morulę, a potem blastocystę.\nB. Implantacja blastocysty w ścianie macicy następuje zwykle ok. 6–10 dni po zapłodnieniu.\nC. Gastrulacja polega na różnicowaniu trofoblastu na warstwy: ektodermy, mezodermy i endodermy tworzące trzy listki zarodkowe.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Bruzdkowanie daje morulę, potem blastocystę — podziały mitotyczne bez wzrostu.', is_correct: true },
      { id: 'B', text: 'Implantacja blastocysty następuje ok. 6–10 dni po zapłodnieniu.', is_correct: true },
      { id: 'C', text: 'Gastrulacja polega na różnicowaniu trofoblastu na trzy listki zarodkowe.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: bruzdkowanie to szybkie podziały mitotyczne zygoty bez fazy wzrostu → komórki (blastomery) stają się coraz mniejsze. Morula (ok. 16 komórek, dzień 4) → blastocysta (ok. dzień 5–6): jama (blastocel), węzeł zarodkowy (embrioblast) i trofoblast. B — Prawda: blastocysta implantuje się w endometrium ok. 6.–10. dnia po zapłodnieniu — trofoblast wydziela enzymy trawiące endometrium i wnika w ścianę macicy. C — Fałsz: gastrulacja to przekształcenie EMBRIOBLASTU (węzła zarodkowego), nie trofoblastu, w trzy listki zarodkowe (ektodermę, mezodermę, endodermę). Trofoblast tworzy kosmówkę i łożysko.',
    difficulty: 2,
    verified: true,
  },

  // --- Ciąża i rozwój płodu ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ciaza,
    question_text: 'Które z poniższych struktur powstają z poszczególnych listków zarodkowych?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Z ektodermy: naskórek skóry, układ nerwowy, narządy zmysłów', is_correct: true },
      { id: 'B', text: 'Z mezodermy: układ mięśniowy, szkielet, układ krwionośny i nerki', is_correct: true },
      { id: 'C', text: 'Z endodermy: wyściółka przewodu pokarmowego, wątroba, trzustka, płuca', is_correct: true },
      { id: 'D', text: 'Z ektodermy: serce i naczynia krwionośne tworzące pierwsze funkcjonujące narządy płodu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Listki zarodkowe i ich pochodne: Ektodermа: naskórek i przydatki skóry, cały układ nerwowy (neurulacja → cewa nerwowa), narządy zmysłów (siatkówka, soczewka, ucho wewnętrzne), szkliwo zębów, przysadka mózgowa. Mezodermа: układ mięśniowy (miomery), szkielet (kości, chrząstki), układ krwionośny i krew (mezenchyma), nerki i gruczoły płciowe, otrzewna i opłucna. Endodermа: wyściółka przewodu pokarmowego, wątroba, trzustka, płuca i oskrzela, tarczyca i przytarczyce, pęcherz moczowy. D — błąd: serce i naczynia krwionośne wywodzą się z MEZODERMY.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ciaza,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nŁożysko (placenta) pełni w czasie ciąży następujące funkcje:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wyłącznie wymianę gazową między krwią matki a płodu — tlen i CO₂ dyfundują przez barierę łożyskową', is_correct: false },
      { id: 'B', text: 'wymianę substancji odżywczych, gazów i produktów przemiany materii oraz funkcję endokrynną — wydziela hCG, progesteron i estrogeny', is_correct: true },
      { id: 'C', text: 'bezpośrednie mieszanie krwi matki z krwią płodu w celu przeniesienia przeciwciał i substancji odżywczych', is_correct: false },
      { id: 'D', text: 'produkcję komórek krwi płodu zastępując funkcję szpiku kostnego przez całą ciążę', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Łożysko pełni wielorakie funkcje: Oddechowa: O₂ dyfunduje z krwi matki do krwi płodu, CO₂ w odwrotnym kierunku. Odżywcza: glukoza, aminokwasy, kwasy tłuszczowe, witaminy, minerały transportowane przez barierę łożyskową. Wydalnicza: mocznik i inne odpady metaboliczne płodu do krwi matki. Endokrynna: produkuje hCG (utrzymuje ciałko żółte do ok. 12 tyg.), a od II trymestru przejmuje produkcję progesteronu i estrogenów. Immunologiczna: transfer IgG matki (odporność bierna noworodka). C — błąd: krew matki i płodu NIE mieszają się — barierę tworzą komórki syncytiotrofoblastu.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ciaza,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących rozwoju płodu.\nA. Serce płodu zaczyna bić już ok. 4. tygodnia ciąży — jest pierwszym funkcjonalnym narządem zarodka.\nB. W I trymestrze ciąży (1.–12. tydzień) kształtują się wszystkie główne narządy — jest to okres największej wrażliwości na teratogeny.\nC. Płód przez całą ciążę oddycha przez skrzela, a układ oddechowy płucny dojrzewa dopiero w III trymestrze.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Serce płodu bije już ok. 4. tygodnia — pierwsze funkcjonalne narząd.', is_correct: true },
      { id: 'B', text: 'W I trymestrze kształtują się narządy — największa wrażliwość na teratogeny.', is_correct: true },
      { id: 'C', text: 'Płód przez całą ciążę oddycha przez skrzela.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: serce zaczyna bić ok. 22.–23. dnia (4. tydzień ciąży) — jest to pierwszy narząd, który zaczyna funkcjonować; w 8. tygodniu ma już 4 komory. B — Prawda: organogeneza w I trymestrze — alkohol, leki, infekcje (różyczka, CMV) mogą powodować wady wrodzone; szczególnie wrażliwy okres to 3.–8. tydzień. C — Fałsz: człowiek nie posiada skrzeli na żadnym etapie życia; płód pobiera O₂ z krwi matki przez łożysko. Płuca są wypełnione płynem owodniowym i dojrzewają w III trymestrze (surfaktant od ok. 24. tygodnia).',
    difficulty: 1,
    verified: true,
  },

  // --- Poród i laktacja ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.porod,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nOksytocyna odgrywa kluczową rolę w porodzie, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'hamuje skurcze macicy, umożliwiając bezpieczne urodzenie dziecka bez nadmiernego bólu', is_correct: false },
      { id: 'B', text: 'stymuluje skurcze mięśniówki macicy i jej wydzielanie wzrasta na zasadzie dodatniego sprzężenia zwrotnego podczas porodu', is_correct: true },
      { id: 'C', text: 'produkowana jest przez łożysko i inicjuje poród poprzez hamowanie progesteronu', is_correct: false },
      { id: 'D', text: 'powoduje dojrzewanie szyjki macicy, ale nie wpływa na siłę skurczów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Oksytocyna (produkowana przez podwzgórze, wydzielana przez tylny płat przysadki) jest kluczowym hormonem porodu. Działanie: stymuluje skurcze mięśniówki macicy (myometrium). Mechanizm: rozciąganie szyjki macicy → impulsy do podwzgórza → więcej oksytocyny → silniejsze skurcze → większe rozciąganie → jeszcze więcej oksytocyny (dodatnie sprzężenie zwrotne — pętla Fergusona) → skurcze nasilają się aż do urodzenia dziecka. Po porodzie oksytocyna stymuluje wyrzut mleka (odruch wyprysku mleka). A — odwrotne działanie. C — oksytocyna produkowana przez podwzgórze, nie łożysko.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.porod,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących laktacji.\nA. Prolaktyna (produkowana przez przedni płat przysadki) stymuluje produkcję mleka przez gruczoły mleczne.\nB. Ssanie piersi przez niemowlę powoduje odruchowe wydzielanie oksytocyny, która stymuluje wyprysk mleka (letdown reflex).\nC. Siara (colostrum) wydzielana w pierwszych dniach po porodzie ma niższą zawartość białek i przeciwciał IgA niż dojrzałe mleko matki.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Prolaktyna z przedniego płata przysadki stymuluje produkcję mleka.', is_correct: true },
      { id: 'B', text: 'Ssanie piersi wywołuje wyrzut oksytocyny i odruch wyprysku mleka.', is_correct: true },
      { id: 'C', text: 'Siara ma niższą zawartość białek i IgA niż dojrzałe mleko.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: prolaktyna (PRL) z przedniego płata przysadki jest głównym hormonem laktogennym — stymuluje syntezę białek mleka (kazeiny, α-laktalbuminy). W ciąży hamowana przez progesteron i estrogeny; po porodzie ich spadek → wzrost PRL → laktacja. B — Prawda: odruch neuroendokrynny: ssanie → receptory brodawki → nerwy → podwzgórze → tylny płat przysadki → oksytocyna → skurcz komórek mioepitelialnych → wyprysk mleka. C — Fałsz: siara (colostrum) to BOGATE w białka i IgA (wydzielnicze) pierwsze mleko — zapewnia noworodkowi bierną odporność; ma więcej białek, mniej tłuszczu i laktozy niż dojrzałe mleko.',
    difficulty: 2,
    verified: true,
  },

  // --- Regulacja hormonalna rozrodu ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.hormony,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących hormonalnej regulacji rozrodu.\nA. GnRH (gonadoliberyna) wydzielana przez podwzgórze stymuluje przedni płat przysadki do wydzielania FSH i LH.\nB. FSH u kobiet stymuluje wzrost pęcherzyków jajnikowych i produkcję estrogenów przez komórki ziarniste.\nC. LH u mężczyzn pobudza komórki Sertoliego do produkcji testosteronu.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'GnRH z podwzgórza stymuluje przysadkę do wydzielania FSH i LH.', is_correct: true },
      { id: 'B', text: 'FSH stymuluje wzrost pęcherzyków i produkcję estrogenów przez komórki ziarniste.', is_correct: true },
      { id: 'C', text: 'LH u mężczyzn pobudza komórki Sertoliego do produkcji testosteronu.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: oś podwzgórzowo-przysadkowo-gonadalna: GnRH (pulsacyjnie) → FSH i LH z przysadki → efekty w gonadach. B — Prawda: FSH u kobiet pobudza wzrost pęcherzyków pierwotnych; komórki ziarniste pod wpływem FSH syntetyzują estrogeny (aromataza konwertuje androgeny na estradiol). C — Fałsz: LH u mężczyzn pobudza KOMÓRKI LEYDIGA (nie Sertoliego) do produkcji testosteronu. FSH pobudza komórki Sertoliego (spermatogeneza, inhibina, białko ABP).',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.hormony,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nhCG (ludzka gonadotropina kosmówkowa) wydzielana przez zarodek po implantacji:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'hamuje ciałko żółte, powodując jego zanik i rozpoczęcie miesiączki', is_correct: false },
      { id: 'B', text: 'podtrzymuje ciałko żółte, które kontynuuje produkcję progesteronu i estrogenów do czasu przejęcia tej funkcji przez łożysko', is_correct: true },
      { id: 'C', text: 'stymuluje przysadkę matki do wydzielania większych ilości FSH i LH', is_correct: false },
      { id: 'D', text: 'inicjuje poród poprzez wywoływanie skurczów macicy podobnych do oksytocyny', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'hCG jest produkowane przez syncytiotrofoblast zarodka od ok. 8.–10. dnia po zapłodnieniu. Kluczowa rola: "ratuje" ciałko żółte przed luteolizy — hCG działa jak LH na receptory komórek luteinowych → ciałko żółte kontynuuje produkcję progesteronu i estrogenów przez I trymestr (do ok. 12. tygodnia), kiedy łożysko przejmuje tę funkcję (luteo-placentarny shift). Bez hCG → zanik ciałka żółtego → brak progesteronu → złuszczenie endometrium → poronienie. hCG wykrywane jest w moczu kobiety ciężarnej — podstawa testów ciążowych. A — odwrotne działanie. C i D — błędne.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.hormony,
    question_text: 'Które hormony są odpowiedzialne za pojawienie się drugorzędowych cech płciowych u chłopców w czasie pokwitania?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Testosteron — powoduje wzrost mięśni, owłosienie, zmianę barwy głosu, wzrost jąder i prącia', is_correct: true },
      { id: 'B', text: 'DHT (dihydrotestosteron) — pochodna testosteronu aktywna w skórze, odpowiedzialna za owłosienie łonowe i pachowe oraz trądzik', is_correct: true },
      { id: 'C', text: 'Estrogeny produkowane przez jądra — główna przyczyna skoku wzrostowego u chłopców', is_correct: false },
      { id: 'D', text: 'GH (hormon wzrostu) z przysadki — wraz z IGF-1 odpowiada za skok wzrostowy w czasie pokwitania', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: testosteron (produkowany przez komórki Leydiga pod wpływem LH) jest głównym androgenem pokwitania: wzrost i dojrzewanie narządów płciowych, owłosienie, mutacja głosu, wzrost mięśni, przetłuszczenie skóry. B — Prawda: DHT (5α-reduktaza konwertuje testosteron do DHT) jest bardziej aktywny w skórze i mieszkach włosowych — odpowiada za owłosienie płciowe, trądzik, łysienie androgenowe. D — Prawda: hormon wzrostu (GH) i IGF-1 (somatomedyna) odpowiadają za skok wzrostowy; androgeny przyspieszają dojrzewanie chrząstek nasadowych i ostatecznie zamykają nasady. C — błąd: estrogeny produkowane są przez jądra w małych ilościach, ale główna przyczyna skoku to GH/IGF-1 i androgeny (nie estrogeny).',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.hormony,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mechanizmów antykoncepcji hormonalnej.\nA. Tabletki antykoncepcyjne zawierające estrogeny i progestagen hamują wydzielanie GnRH i gonadotropin, zapobiegając owulacji.\nB. Progestagen w tabletkach antykoncepcyjnych zagęszcza śluz szyjkowy, utrudniając plemnikom dotarcie do komórki jajowej.\nC. Antykoncepcja awaryjna (tzw. tabletka po) działa na zasadzie wywołania poronienia — eliminuje już zagnieżdżony zarodek.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Tabletki antykoncepcyjne hamują GnRH i gonadotropiny, zapobiegając owulacji.', is_correct: true },
      { id: 'B', text: 'Progestagen zagęszcza śluz szyjkowy, utrudniając ruch plemników.', is_correct: true },
      { id: 'C', text: 'Tabletka po wywołuje poronienie zagnieżdżonego zarodka.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: stały (nie pulsacyjny) poziom estrogenów i progestagenu hamuje pulsacyjne wydzielanie GnRH → brak szczytu LH → brak owulacji (główny mechanizm). B — Prawda: progestagen zagęszcza śluz szyjki macicy (staje się gęsty i nieprzepuszczalny dla plemników) — mechanizm dodatkowy. C — Fałsz: antykoncepcja awaryjna (lewonorgestrel lub octan uliprystalu) działa PRZED implantacją — opóźnia lub hamuje owulację, ewentualnie utrudnia implantację. Nie działa po zagnieżdżeniu zarodka — nie jest środkiem poronnym (abortywnym). To ważne rozróżnienie kliniczne i etyczne.',
    difficulty: 3,
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
  console.log(`Seeding ${questions.length} questions for Rozmnażanie i rozwój człowieka...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
