// Seed: mock_questions — Rozmnażanie i rozwój człowieka (20 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  zen:   'ad80d8e8-08db-4467-a3b7-f3621dc5d766',
  cykl:  'fa1c366b-5f36-4b00-8223-b4f7d3dac1cd',
  meski: '3b8f8ef2-b2d6-457c-8c0e-15bd7a6eabf4',
  gamety:'e3f3cab2-ea59-40be-9bb0-f7bbb232816b',
  zaplod:'e7c90d10-927c-473a-aeba-6de486cc562f',
  ciaza: '5ea044a7-8f53-45d2-b42c-a5060bf0a0f3',
  porod: 'b055c17e-4c2f-4aa2-a726-bbed4a66b2c9',
  horm:  '4527aa1f-d80a-417d-9aed-392e9833e154',
}

const questions = [
  // ─── Układ rozrodczy żeński ───
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Układ rozrodczy żeński',
    subtopic_id: S.zen,
    question_type: 'single',
    question_text: 'Jajowód (tuba uterina, tuba Fallopa) pełni kluczową rolę w rozrodzie. Które zestawienie POPRAWNIE opisuje jego funkcje i budowę?',
    options: [
      { id: 'A', text: 'Jajowód transportuje komórkę jajową od jajnika do macicy — nabłonek rzęskowy przesuwa jajową w kierunku macicy; zapłodnienie najczęściej następuje w bańce jajowodu (ampulla); mięśniówka gładka jajowodu wykonuje ruchy perystaltyczne', is_correct: true },
      { id: 'B', text: 'Jajowód produkuje hormony płciowe (estrogeny i progesteron) i przekazuje je bezpośrednio do jajnika; zapłodnienie odbywa się wyłącznie w macicy', is_correct: false },
      { id: 'C', text: 'Jajowód jest zbudowany z nabłonka rogowaciejącego (jak naskórek); jego główną funkcją jest produkcja śluzu owulacyjnego; rzęski na powierzchni jajowodu wciągają plemniki z macicy do jajnika', is_correct: false },
      { id: 'D', text: 'Jajowód bezpośrednio łączy się z jamą otrzewnej przez ujście zewnętrzne szyjki macicy — jajeczko po owulacji przechodzi z otrzewnej przez szyjkę do jajowodu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Jajowód (tuba uterina): budowa: lejek (infundibulum) z fimbriami (strzępki obejmują jajnik po owulacji → wychwytują komórkę jajową) → bańka (ampulla, 2/3 dł.) → cieśń (isthmus) → część śródścienna (maciczna). Nabłonek: cylindryczny rzęskowy + komórki wydzielnicze; rzęski bijące w kierunku macicy + perystaltyka mięśniówki = transport. Czas transportu: 3–4 dni. Zapłodnienie: najczęściej w bańce (ampulla) w ciągu 12–24 h po owulacji. Ciąża ektopowa (pozamaciczna): zarodek implantuje się w jajowodzie (95% ciąż pozamacicznych) → jajowód nie może się rozciągnąć → ryzyko pęknięcia i krwawienia wewnętrznego (zagrożenie życia); leczenie: metotreksat lub operacja. Podwiązanie jajowodów: nieodwracalna metoda antykoncepcji.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Układ rozrodczy żeński',
    subtopic_id: S.zen,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy jajnika:\nA. Jajnik zbudowany jest z kory (zawierającej pęcherzyki jajnikowe w różnych stadiach rozwoju) i rdzenia (tkanka łączna z naczyniami); kobieta rodzi się z zapasem wszystkich oocytów I rzędu (ok. 1–2 milionów), który stopniowo maleje — do pokwitania pozostaje ok. 300–400 tysięcy.\nB. Pęcherzyk Graafa (pęcherzyk dojrzały, przed owulacją) zawiera oocyt II rzędu zatrzymany w metafazie II podziału mejotycznego — drugi podział mejotyczny jest kończony dopiero po zapłodnieniu przez plemnik.\nC. Ciałko żółte (corpus luteum) powstaje z pękniętego pęcherzyka jajnikowego po owulacji i produkuje wyłącznie estrogeny przez całą ciążę — nie produkuje progesteronu.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: oocyty I rzędu (zatrzymane w profazie I mejozy) = pula na całe życie; noworodek: ~1–2 mln; pokwitanie: ~300–400 tys.; przez życie rozrodcze owuluje ok. 400–500; pozostałe atrezja (apoptoza). B — PRAWDA: owulacja = uwolnienie oocytu II rzędu (zatrzymanego w MII = metafaza II mejozy), nie dojrzałego jajeczka! Pęcherzyk Graafa przed owulacją: wzrost LH → oocyt I → zakończenie mejozy I → oocyt II + pierwsze ciałko kierunkowe → zatrzymanie w MII → owulacja. Drugie ciałko kierunkowe i dojrzały oocyt (jajeczko) powstaje TYLKO po zapłodnieniu przez plemnik (wnikanie plemnika → aktywacja → zakończenie MII). Jeśli brak zapłodnienia: oocyt II obumiera. C — FAŁSZ: ciałko żółte (corpus luteum): ziarniste komórki pęcherzyka luteinizują się → komórki luteinowe → produkują PROGESTERON (głównie) + estrogeny + inhibinę A. Progesteron: utrzymuje endometrium wydzielnicze, hamuje skurcze macicy, ↑T ciała. Brak zapłodnienia: ciałko żółte degeneruje po ~14 dniach → ↓progesteronu/estrogenów → menstruacja. Zapłodnienie: hCG z trofoblastu → ratuje ciałko żółte (przez receptor LH/hCG) → produkuje progesteron do ~10 tyg. ciąży (potem łożysko przejmuje).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Cykl menstruacyjny ───
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Cykl menstruacyjny',
    subtopic_id: S.cykl,
    question_type: 'single',
    question_text: 'Cykl menstruacyjny trwa średnio 28 dni i jest podzielony na fazy. Wskaż prawidłową sekwencję zmian hormonalnych i endometrialnych.',
    options: [
      { id: 'A', text: 'Faza folikularna (dni 1–14): ↑FSH → wzrost pęcherzyka → ↑estradiol → proliferacja endometrium; owulacja (dzień 14): pik LH → pęknięcie pęcherzyka; faza lutealna (dni 15–28): ciałko żółte → ↑progesteron + estrogeny → endometrium wydzielnicze; brak zapłodnienia → ↓hormonów → menstruacja', is_correct: true },
      { id: 'B', text: 'Faza lutealna poprzedza owulację; progesteron jest wydzielany przed owulacją i hamuje FSH; pik LH powoduje wzrost pęcherzyka (nie owulację)', is_correct: false },
      { id: 'C', text: 'Owulacja zachodzi w dniu 1 cyklu (pierwszego dnia menstruacji); FSH i LH nie uczestniczą w regulacji cyklu jajnikowego; endometrium nie zmienia grubości przez cały cykl', is_correct: false },
      { id: 'D', text: 'Estrogeny i progesteron są produkowane wyłącznie przez przysadkę — jajnik nie produkuje hormonów steroidowych; FSH i LH produkowane są przez jajnik i regulują przysadkę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cykl menstruacyjny (28 dni, dni 1–28): Jajnikowy: (1) Faza folikularna (1–14 d): GnRH (pulsatylny) → FSH i LH z przysadki → rekrutacja kohorty pęcherzyków → selekcja dominującego → komórki ziarniste produkują estradiol (E2) → ↑E2 → proliferacja endometrium + ↑śluz szyjkowy (wodnisty, "nitkujący" → spermatolizacja). Ujemne sprzężenie → ↓FSH (selekcja jednego pęcherzyka). (2) Owulacja (ok. dzień 14): E2 > 200 pg/mL przez >48 h → dodatnie sprzężenie z przysadką → pik LH (~36 h po piku LH = owulacja) → pęknięcie pęcherzyka → uwolnienie oocytu II. Endomet: proliferacyjne (grubość 8–12 mm). (3) Faza lutealna (15–28 d): corpus luteum → progesteron (P4, max ~10 ng/mL) + E2 + inhibina A → endometrium wydzielnicze (gruczoły korkociągowe, glikogen) + ↑T ciała 0,2–0,5°C. Brak zapłodnienia: CL degeneruje dzień 26–28 → ↓P4 i E2 → skurcz tętnic spiralnych → niedotlenienie → złuszczanie endometrium (menstruacja, dzień 1 następnego cyklu). Zapłodnienie: trofoblast → hCG → podtrzymuje CL.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Cykl menstruacyjny',
    subtopic_id: S.cykl,
    question_type: 'single',
    question_text: 'W połowie cyklu (ok. dzień 14) dochodzi do owulacji poprzedzonej pikiem LH. Dlaczego w tej fazie cyklu wysokie stężenie estradiolu POBUDZA (a nie hamuje) wydzielanie LH?',
    options: [
      { id: 'A', text: 'Przy stężeniu E2 >200 pg/mL utrzymanym >48 h następuje zmiana z ujemnego na dodatnie sprzężenie zwrotne w podwzgórzu i przysadce — E2 ↑ekspresję receptorów GnRH i ↑wrażliwość gonadotropów → pik LH (zjawisko wyjątkowe, zwykle estrogen hamuje LH)', is_correct: true },
      { id: 'B', text: 'Estradiol zawsze pobudza LH — nie istnieje ujemne sprzężenie estradiolu z przysadką; przez cały cykl wzrost E2 powoduje wzrost LH', is_correct: false },
      { id: 'C', text: 'Pik LH jest wywołany przez FSH, a nie przez estradiol — E2 nie ma żadnego wpływu na wydzielanie LH przez przysadkę; LH wzrasta stopniowo przez cały cykl', is_correct: false },
      { id: 'D', text: 'Progesteron produkowany przez pęcherzyk Graafa przed owulacją wyzwala pik LH; estradiol hamuje LH przez cały cykl bez wyjątku', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mechanizm piku LH — zjawisko pozytywnego sprzężenia: W fazie folikularnej (niski E2): ujemne sprzężenie E2 → ↓GnRH i ↓odpowiedź przysadki → ↓LH. Wraz ze wzrostem pęcherzyka dominującego (E2 ↑): gdy E2 przekracza próg (~200 pg/mL) przez >48 h → SWITCH na dodatnie sprzężenie: (1) ↑GnRH pulsatility; (2) ↑ekspresja receptorów GnRH na gonadotropach; (3) ↑pula LH gotowego do uwolnienia; efekt: LH surge (10–20× wzrost w ciągu 36 h). Owulacja: ok. 36–40 h po początku piku LH (klinicznie: testy owulacyjne mierzą LH w moczu). LH spike: aktywuje proteazy (enzymy degradujące ścianę pęcherzyka), ↑synteza prostaglandyn (skurcz naczyń), wznowienie mejozy I oocytu → oocyt II. Progesteron z komórek granulosa (~dzień 13) wzmaga amplitudę piku LH przez dodatkowe dodatnie sprzężenie. Antykoncepcja hormonalna: podaje stały E2+P4 → brak piku LH → brak owulacji.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Układ rozrodczy męski ───
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Układ rozrodczy męski',
    subtopic_id: S.meski,
    question_type: 'single',
    question_text: 'Jądro (testis) pełni dwie główne funkcje. Które zestawienie POPRAWNIE opisuje komórki odpowiedzialne za każdą z nich?',
    options: [
      { id: 'A', text: 'Spermatogeneza: cewki nasienne (kanaliki kręte) — komórki Sertoliego (pielęgnują gamety, bariera krew-jądro, AMH, inhibina B) + komórki spermatogenne (spermatogonia → spermatocyty → spermatydy → plemniki). Synteza testosteronu: komórki Leydiga (śródmiąższ) pod wpływem LH', is_correct: true },
      { id: 'B', text: 'Komórki Leydiga produkują plemniki; komórki Sertoliego produkują testosteron; spermatogonia leżą w śródmiąższu jądra, poza cewkami nasiennymi', is_correct: false },
      { id: 'C', text: 'Jądro produkuje wyłącznie testosteron — spermatogeneza odbywa się w najądrzu; komórki Sertoliego to makrofagi tkanki łącznej jądra bez roli w spermatogenezie', is_ך: false },
      { id: 'D', text: 'FSH stymuluje komórki Leydiga do produkcji testosteronu; LH stymuluje komórki Sertoliego do spermatogenezy; inhibina hamuje LH', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Jądro — dwa przedziały: (1) Cewki (kanaliki kręte, tubuli seminiferi contorti): ~250 m łącznie w obu jądrach; komórki Sertoliego (SC): wysokie kolumnowe, opierają się od błony podstawnej do światła; tworzą połączenia ścisłe między sobą → bariera krew-jądro (BTB) = chroni gamety przed układem odpornościowym; funkcje: fagocytoza ciałek resztkowych, wydzielanie płynu kanalikowego, synteza ABP (androgen-binding protein = koncentruje T), AMH (u płodu), inhibina B (hamuje FSH). Komórki spermatogenne: spermatogonia (na błonie podstawnej, dzielą się) → spermatocyty I → (mejoza I) → spermatocyty II → (mejoza II) → spermatydy → spermiogeneza (przekształcenie w dojrzałe plemniki w kontakcie z SC). (2) Śródmiąższ: komórki Leydiga (Leydig cells): skupiska między cewkami; pod wpływem LH → cAMP → steroidogeneza → testosteron; T → lokalnie (kanaliki, spermatogeneza) + do krwi → drugo-płciowe cechy. Najądrze (epididymis): dojrzewanie i magazynowanie plemników (14–21 dni).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Spermatogeneza i owogeneza ───
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Spermatogeneza i owogeneza',
    subtopic_id: S.gamety,
    question_type: 'single',
    question_text: 'Spermatogeneza i owogeneza to procesy tworzenia gamet. Które zestawienie POPRAWNIE opisuje kluczowe różnice między nimi?',
    options: [
      { id: 'A', text: 'Spermatogeneza: ciągła od pokwitania, z 1 spermatogonii → 4 równorzędne plemniki (mejoza symetryczna), całkowita (72 dni); owogeneza: zaczyna się prenatalnie, zatrzymana w profazie I do owulacji, z 1 oocytu I → 1 jajeczko + 3 ciałka kierunkowe (podziały asymetryczne)', is_correct: true },
      { id: 'B', text: 'Owogeneza produkuje 4 równorzędne komórki jajowe z jednego oocytu; spermatogeneza produkuje 1 plemnik z każdej spermatogonii; oba procesy zaczynają się dopiero po urodzeniu', is_correct: false },
      { id: 'C', text: 'Spermatogeneza i owogeneza są identyczne — obie produkują 4 jednakowe komórki haploidalne; jedyną różnicą jest ich lokalizacja (jądro vs jajnik)', is_correct: false },
      { id: 'D', text: 'Owogeneza jest procesem ciągłym trwającym przez całe życie kobiety — nowe oocyty są stale produkowane ze stem cells w jajniku; spermatogeneza zatrzymuje się po 40 roku życia', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Porównanie gametogenezy: Spermatogeneza: (1) Trwa ciągle od pokwitania (puberty, ~12–13 r.ż.) do późnej starości; (2) ~72 dni od spermatogonii do dojrzałego plemnika; (3) Spermatogonie (2n) → mejoza I → 2 spermatocyty II (n) → mejoza II → 4 spermatydy (n) → spermiogeneza → 4 RÓWNORZĘDNE PLEMNIKI; (4) Brak ciałek kierunkowych — podział cytoplazmy symetryczny; (5) ~200–500 mln/ejakulat. Owogeneza: (1) Oocyty I rzędu (zatrzymane w profazie I) obecne już u płodu; (2) Zatrzymanie I: profaza I → utrzymana do owulacji (przez cAMP, cGMP); (3) Przy owulacji (pik LH) → zakończenie mejozy I → oocyt II + 1. ciałko kierunkowe; (4) Zatrzymanie II: metafaza II; (5) Dopiero po wniknięciu plemnika → zakończenie mejozy II → 2. ciałko kierunkowe + dojrzały oocyt (n); (6) Z jednego oogonium → 1 jajeczko + 3 ciałka kierunkowe (podziały ASYMETRYCZNE — cała cytoplazma do jednej komórki = duże jajeczko bogate w substancje odżywcze). Ciałko kierunkowe = "pakiet chromosomów" bez cytoplazmy.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Spermatogeneza i owogeneza',
    subtopic_id: S.gamety,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy plemnika:\nA. Główka plemnika zawiera silnie skondensowane jądro (haploidalne DNA z protaminami zamiast histonów) i akrosom (modyfikowany lizozom z enzymami hydrolatycznymi: akrozoną, hialuronidazą) niezbędnymi do penetracji osłonki przejrzystej jajeczka.\nB. Wić (flagellum) plemnika napędzana jest przez dypeiny (białka motoryczne, ATPazy) w strukturze aksonem (9+2) — ruch "8" wiązań dypeiny z mikrotubulami peryferycznymi generuje falowanie wici; defekt dyneiny → nieruchomość plemników (zespół Kartagenera).\nC. Mitochondria w środkowym segmencie wici (midpiece) zapewniają ATP potrzebne do ruchu; plemnik nie korzysta z fruktozy zawartej w nasieniu — źródłem energii jest wyłącznie glikoliza wewnątrzkomórkowa glikogenu plemnikowego.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: główka (5 µm): jądro (haploidalne, DNA 2,3 pg, ~3000× bardziej skondensowane niż w somatycznych; histony zastąpione protaminami → brak transkrypcji); akrosom: okrywa 2/3 jądra; zawiera enzymу: akrozoną (proteaza, SP3, ZP3-receptor), hialuronidaza, neuraminidaza, fosfataza kwaśna → reakcja akrosomalna przy kontakcie z osłonką przejrzystą (ZP). B — PRAWDA: wić (50 µm): axonema 9+2 (9 par dublety mik.obwodowych + 1 para centralna); dypeiny zewnętrzne (ODA) i wewnętrzne (IDA): motoryczne ATPazy; ODA ↑prędkość, IDA regulacja kształtu ruchu; prądek ATP hydrolizuje ATP → zmiana konformacji → przesuwanie dubletów → wygięcie wici. Zespół Kartagenera (Primary Ciliary Dyskinesia, PCD): mutacje w DNAI1, DNAI2, DNAAF1 (dyneina) → nieruchome rzęski i wici → bezpłodność ( астеноспермia) + przewlekłe infekcje oddechowe + situs inversus (30% = Kartagener). C — FAŁSZ: plemniki UŻYWAJĄ fruktozy! Nasieniaki wydzielają fruktozę (do ~3 mg/mL nasienia); plemniki: dwa szlaki: (1) glikoliza (z fruktozy w cieczy nasiennej → ATP dla wici, głównie dystalnej), (2) fosforylacja oksydacyjna (mitochondria w midpiece → ATP). Oba szlaki współpracują; fruktoza jest GŁÓWNYM substratem zewnątrzkomórkowym (test: brak fruktozy nasienia → niedrożność nasieniakow).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Zapłodnienie i wczesny rozwój ───
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Zapłodnienie i wczesny rozwój',
    subtopic_id: S.zaplod,
    question_type: 'single',
    question_text: 'Zapłodnienie przebiega przez kilka etapów. Wskaż prawidłową kolejność zdarzeń od wnikania plemnika do pierwszego podziału zygoty.',
    options: [
      { id: 'A', text: 'Kapacytacja → penetracja warstwy komórek ziarnistych → reakcja akrosomalna (enzymy trawią ZP) → fuzja błon plemnika i oocytu → fala Ca²⁺ → reakcja blokady polispermii (ZP3 inaktywacja) → zakończenie mejozy II oocytu → pronukleusy → kariokineza (pierwsza bruzdkowanie)', is_correct: true },
      { id: 'B', text: 'Zygota od razu dzieli się bez zapłodnienia; płeć jest określana przez jajeczko (chromosom X lub Y jajeczka); reakcja akrosomalna zachodzi po wejściu do macicy, a nie w jajowodzie', is_correct: false },
      { id: 'C', text: 'Wiele plemników jednocześnie wnika do jajeczka (polispermia normalna) — tylko jeden z nich łączy chromosomy z jajeczkiem; pozostałe są trawione przez lizosomy jajeczka', is_correct: false },
      { id: 'D', text: 'Kapacytacja to proces, w którym jajeczko dojrzewa do oocytu II rzędu — odbywa się w jajniku bezpośrednio przed owulacją; nie dotyczy plemników', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Zapłodnienie (fertilizatio): (1) Kapacytacja: zm. błony plemnikowej w drogach rodnych kobiety (~7 h) → hiperpolaryzacja → aktywacja ruchu wici (hyperactivation) + możliwość reakcji akrosomalnej. (2) Penetracja corona radiata: hialuronidaza + ruch wici. (3) Wiązanie z ZP (osłonka przejrzysta): ZP3 → receptor na główce → reakcja akrosomalna: fuzja błony akrosomalnej zewnętrznej z PM → egzocytoza enzymów → lokalne trawienie ZP. (4) Fuzja błon: IZUMO1 (plemnik) + JUNO (jajeczko) → fuzja → wnikanie jądra i centrosomu. (5) Aktywacja oocytu: PLCζ (fosfolipaza C) z plemnika → IP₃ → oscylacje Ca²⁺ (kilkadziesiąt uderzeń przez godzinę) → (a) blokada polispermii: egzocytoza ziarnistości korowych → modyfikacja ZP2/ZP3 → nieprzepuszczalność dla nowych plemników; (b) zakończenie mejozy II: uwolnienie 2. ciałko kierunkowe; (c) aktywacja metabolizmu. (6) Pronukleusy: pronukleus żeński (jajeczko) + pronukleus męski (chromosomy ojcowskie dekondensują) → synapsis → 46 chromosomów → replikacja DNA. (7) Pierwsze bruzdkowanie: ~24–30 h po zapłodnieniu → 2 blastomery. Płeć: chromosom Y od OJCA decyduje (XY=mężczyzna, XX=kobieta).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Zapłodnienie i wczesny rozwój',
    subtopic_id: S.zaplod,
    question_type: 'single',
    question_text: 'Wczesny zarodek przechodzi przez kolejne stadia rozwojowe. Które zestawienie POPRAWNIE opisuje etapy od zygoty do implantacji?',
    options: [
      { id: 'A', text: 'Zygota (1 komórka) → bruzdkowanie (2,4,8,16 blastomerów) → morula (16–32 komórki, lita kulka) → blastocysta (>64 komórki: trofoblast zewnętrzny + embrioblast wewnętrzny + jamka blastocysty) → implantacja w endometrium ok. 6–10 dnia po zapłodnieniu', is_correct: true },
      { id: 'B', text: 'Zygota → gastrula (3 listki zarodkowe) → neurula (cewa nerwowa) → morula → blastocysta; implantacja następuje w jajniku', is_correct: false },
      { id: 'C', text: 'Bruzdkowanie polega na wzroście komórek (blastomery rosną po każdym podziale) — zarodek po 5 dniach jest wielokrotnie większy niż zygota; osłonka przejrzysta (ZP) rozszerza się wraz ze wzrostem zarodka', is_correct: false },
      { id: 'D', text: 'Blastocysta składa się z jednego typo komórek — nie ma rozróżnienia między trofoblastem a embrioblastem; implantacja zachodzi w trzecim miesiącu ciąży', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Wczesny rozwój: (1) Zygota (2n, ~0,1 mm) → bruzdkowanie (cleavage): podziały mitotyczne BEZ wzrostu komórek → blastomery coraz mniejsze, zarodek tej samej wielkości (ogranicza go ZP). Czas: 2 komórki (~30 h) → 4 (~40 h) → 8 (~3 dni) → 16 = morula (~4 dni). (2) Morula: lite skupisko komórek, wchodzi do macicy z jajowodu; kompakcja: E-kadheryny → ciasne połączenia, różnicowanie na zewnętrzne (przyszły trofoblast) i wewnętrzne (przyszły embrioblast/ICM). (3) Blastocysta (~5–6 dzień): pompowanie Na⁺ i wody → jama (blastocel); trofoblast (TE) = zewnętrzna warstwa → łożysko; ICM (embrioblast, inner cell mass) = wewnętrzna masa → zarodek właściwy i błony płodowe; oba Hippo pathway (YAP/TEAD). (4) Hatching: ~6 dzień: enzymy lizują ZP → blastocysta "wylęga się" → gotowa do implantacji. (5) Implantacja (~6–10 dzień): endometrium wydzielnicze (faza lutealna, progesteron); syncytiotrofoblast (fuzja TE) + cytotrofoblast → inwazja endometrium; hCG z trofoblastu od ~8-9 dnia → test ciążowy (+).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Ciąża i rozwój płodu ───
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Ciąża i rozwój płodu',
    subtopic_id: S.ciaza,
    question_type: 'single',
    question_text: 'Łożysko (placenta) jest narządem o kluczowym znaczeniu dla przebiegu ciąży. Które zestawienie POPRAWNIE opisuje jego funkcje?',
    options: [
      { id: 'A', text: 'Łożysko: wymiana gazowa (O₂/CO₂), transport składników odżywczych (glukoza przez GLUT1, aminokwasy, lipidy) i odpadów metabolicznych, bariera (chroni przed niektórymi patogenami), produkcja hormonów: hCG, progesteron (od ~10 tyg.), estrogeny (z DHEA-S nadnerczy płodowych), HPL', is_correct: true },
      { id: 'B', text: 'Łożysko produkuje wyłącznie insulinę i reguluje glikemię płodu; tlen i CO₂ są wymieniane przez pępek bez udziału łożyska; barierę łożyskową tworzą erytrocyty matki otaczające płód', is_correct: false },
      { id: 'C', text: 'Krew matki i krew płodu mieszają się w łożysku — łożysko to organ wspólny, przez który krew krąży swobodnie między matką i dzieckiem; bariery łożyskowej nie ma', is_correct: false },
      { id: 'D', text: 'Łożysko jest organem płodowym bez udziału tkanek matki; produkuje wyłącznie hCG; funkcja wymiany gazowej spoczywa wyłącznie na płucach płodu, które działają od 10 tygodnia ciąży', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Łożysko (placenta): organ przejściowy (200–600 g, ~22 cm średnicy); dwie składowe: (1) trofoblastyczna (część płodowa): syncytiotrofoblast + cytotrofoblast → kosmki łożyskowe z kapilarami płodowymi zanurzone w przestrzeni między kosmkowej wypełnionej krwią matczyną (hemochorialna łożysko = krew matki bezpośrednio omywa kosmki). Krew matki i płodu NIE MIESZAJĄ SIĘ (bariera: syncytiotrofoblast + błona podstawna + śródbłonek naczyń płodowych). Funkcje: (1) Wymiana gazowa: O₂ z krwi matki → dyfuzja przez barierę → krew płodu (duże powinowactwo HbF do O₂); CO₂ odwrotnie. (2) Odżywianie: glukoza (GLUT1, facilitated diffusion), aminokwasy (transportery aktywne), wolne kw.tłuszczowe (dyfuzja), żelazo (transferyna receptorowa), witaminy. (3) Wydalanie: CO₂, mocznik, kreatynina → krew matki. (4) Endokrynna: hCG (I trymestre → podtrzymanie CL); progesteron (od ~8–10 tyg. łożysko przejmuje od CL); estrogeny (z DHEA-S nadnerczy płodowych → aromataza łożyska → estradiol i estriol); HPL (human placental lactogen = przygotowanie gruczołów mlecznych, ↑IR u matki → glukoza dla płodu). (5) Immunologiczna: IgG (transport przez FcRn = jedyne Ig przechodzące przez łożysko → pasywna odporność noworodka na 3–6 mies.).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Ciąża i rozwój płodu',
    subtopic_id: S.ciaza,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących rozwoju płodowego:\nA. Gastrulacja (tworzenie trzech listków zarodkowych) jest procesem, w wyniku którego z ektodermy powstaje układ nerwowy i skóra, z mezodermy — mięśnie, kości, układ krążenia i nerki, z endodermy — nabłonek układu pokarmowego i oddechowego.\nB. Krążenie płodowe różni się od pourodzeniowego: krew utlenowana płynie przez żyłę pępkową do płodu; serce płodu ma otwór owalny (foramen ovale) i przewód tętniczy (ductus arteriosus) umożliwiające ominięcie nieczynnych płuc płodowych.\nC. Hemoglobina płodowa (HbF, α₂γ₂) ma MNIEJSZE powinowactwo do tlenu niż hemoglobina dorosłych (HbA, α₂β₂) — dlatego płód pobiera mniej tlenu z krwi matki niż po urodzeniu i jest stale niedotleniony w macicy.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, P', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: gastrulacja (2–3 tydzień): tworzy 3 listki: (1) Ektoderm → naskórek + OUN + PNS + zmysły + gruczoły skórne + szkliwo zębów; (2) Mezoderm → mięśnie (szkieletowe, gładkie, sercowe), kości, tk. łączna, układ sercowo-naczyniowy, nerki (mezoderm pośredni), gonady, opłucna, otrzewna; (3) Endoderm → nabłonek układu pokarmowego (jelita, żołądek), układu oddechowego (od krtani do pęcherzyków), wątroba, trzustka, tarczyca, gruczoły przytarczyczne, pęcherz moczowy. B — PRAWDA: krążenie płodowe: żyła pępkowa (krew natlenowana z łożyska) → wątroba (częściowo przez przewód żylny Arantii z pominięciem) → żyła główna dolna → prawy przedsionek → foramen ovale (otwór owalny między PP a PL) → lewa komora → aorta; część krwi prawy przedsionek → PK → tętnica płucna → przewód tętniczy (Botalla, ductus arteriosus) → aorta (bo płuca nie działają). Po urodzeniu: oddech → ↑O₂ → zamknięcie DA (w ciągu godzin; PGE₂↓, O₂↑ → skurcz) + zamknięcie FO (↑ciśnienie w lewym przedsionku). C — FAŁSZ: HbF MA WIĘKSZE powinowactwo do O₂ niż HbA (krzywa dysocjacji przesunięta w lewo) — to kluczowe dla pobierania O₂ od matki w łożysku: w warunkach o tym samym pO₂ HbF jest bardziej nasycona O₂ niż HbA = efektywny transfer O₂ z krwi matki do płodowej.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Poród i laktacja ───
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Poród i laktacja',
    subtopic_id: S.porod,
    question_type: 'single',
    question_text: 'Oksytocyna odgrywa kluczową rolę w porodzie i laktacji. Jak działa mechanizm pozytywnego sprzężenia zwrotnego podczas porodu?',
    options: [
      { id: 'A', text: 'Skurcze macicy → rozciąganie szyjki macicy → sygnał do podwzgórza → ↑oksytocyna z neurohipofyzy → silniejsze skurcze macicy (sprzężenie dodatnie) — pętla nasila się aż do urodzenia dziecka (wtedy sygnał zanika)', is_correct: true },
      { id: 'B', text: 'Oksytocyna działa przez ujemne sprzężenie zwrotne — wzrost skurczów hamuje dalsze wydzielanie oksytocyny, co spowalnia poród; poród jest napędzany wyłącznie przez mechanizmy mechaniczne bez udziału hormonów', is_correct: false },
      { id: 'C', text: 'Progesteron wyzwala poród przez stymulację receptorów oksytocyny; estrogeny hamują poród; oksytocyna produkowana jest przez przedni płat przysadki i działa wyłącznie na gruczoł mleczny', is_correct: false },
      { id: 'D', text: 'Pęknięcie wód płodowych jest czynnikiem hormonalnym wyzwalającym uwolnienie oksytocyny — dopiero po pęknięciu worka owodniowego oksytocyna może oddziaływać na macicę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Oksytocyna (OT) i poród — wzorcowy przykład dodatniego sprzężenia zwrotnego: Synteza: neurony jądra nadwzrokowego (SON) i przykomorowego (PVN) podwzgórza → aksony do neurohipofyzy (tylny płat przysadki) → uwolnienie do krwi (peptyd, 9 aa). Podczas porodu: (1) Rozciąganie szyjki macicy przez główkę → mechanoreceptory szyjki → neurony czuciowe (n. miedniczny) → rdzeń → wzgórze → OT neurony → ↑pulsatylne uwalnianie OT; (2) OT wiąże receptory (OXTR, GPCR Gq → IP₃ → Ca²⁺) na miometrium (↑pod koniec ciąży przez E2) → skurcze; (3) Skurcze → silniejsze rozciąganie szyjki → więcej OT → silniejsze skurcze... (pętla dodatnia); (4) Po porodzie (dziecko rodzi się) → szyjka nie jest rozciągana → pętla przerwana → ↓OT → skurcze ustają (+ wyparcie łożyska przez skurcze). Dodatkowe wydzielanie OT w laktacji: ssanie → receptory brodawki → ↑OT → skurcze komórek mioepitelialnych gruczołu mlecznego (ejection = let-down reflex) → mleko do przewodów. Syntetyczna oksytocyna (Syntocynon): indukcja porodu, hamowanie poporodowych krwawień.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Poród i laktacja',
    subtopic_id: S.porod,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących laktacji:\nA. Prolaktyna (z adenohipofyzy) jest głównym hormonem stymulującym produkcję mleka — jej wydzielanie wzrasta po porodzie (gdy spada progesteron hamujący receptory prolaktyny) i jest podtrzymywane przez odruch ssania.\nB. Mleko matki zawiera immunoglobuliny IgA wydzielnicze (sIgA) — stanowią pasywną odporność noworodka chroniącą przed patogenami układu pokarmowego i oddechowego; siara (colostrum, pierwsze 3–5 dni) jest szczególnie bogata w IgA i limfocyty.\nC. Laktacja hamuje owulację wyłącznie przez mechanizm immunologiczny — limfocyty mleka przenikają do krwi matki i blokują receptory LH w jajniku; progesteron nie jest zaangażowany w zahamowanie cyklu podczas karmienia piersią.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, P', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: prolaktyna (PRL, 199 aa polipeptyd, adenohipofiza, komórki laktotropowe): w ciąży: ↑PRL ale hamowana przez progesteron (receptor PRL na zraziku gruczołu zahamowany przez P4). Po porodzie: ↓P4 → odblokowanie receptora PRL → ↑aktywność PRL → laktopoeza (synteza kazeiny, laktozy, lipidów). Odruch ssania: noworodek ssie brodawkę → impulsy nerwowe → podwzgórze → ↓dopamina (PIF) → ↑PRL pulsatylnie; każde karmienie wyzwala pik PRL; nocne karmienia szczególnie ważne (wyższe PRL w nocy). B — PRAWDA: siara (colostrum, 1.–5. dzień): żółtawa, gęsta; bogata w: IgA (sIgA = polimer IgA z komponentem sekrecyjnym chroniącym przed trawieniem enzymatycznym; wiąże patogeny w jelicie i górnych drogach oddechowych), leukocyty (mak., limfocyty T, NK), TGF-β (immunotolerancja), laktoferyna (antybakteryjna, chelatuje żelazo), cytokiny; ↑białko, ↓tłuszcz vs mleko dojrzałe. Dojrzałe mleko: ↑laktoza (energia), ↑tłuszcze (DHA dla mózgu), sIgA (niżej niż siara). C — FAŁSZ: laktacyjna amenorrhea (LAM): mechanizm neurohormonalny; ssanie → ↑PRL → podwzgórze → ↑opioidów (β-endorfina) + ↓GnRH pulsatility → ↓FSH i LH → brak rekrutacji pęcherzyli → brak owulacji → brak cyklu (amenorrhea). Skuteczność: >98% przy wyłącznym karmieniu piersią <6 mies. + amenorrhea. NIE immunologiczny!',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Regulacja hormonalna rozrodu ───
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Regulacja hormonalna rozrodu',
    subtopic_id: S.horm,
    question_type: 'single',
    question_text: 'hCG (gonadotropina kosmówkowa) jest hormonem ciążowym o kluczowym znaczeniu diagnostycznym i fizjologicznym. Które stwierdzenie POPRAWNIE opisuje jego rolę?',
    options: [
      { id: 'A', text: 'hCG (z trofoblastu) działa przez ten sam receptor co LH (receptor LH/hCG) → podtrzymuje ciałko żółte w I trymestrze → produkcja progesteronu przez CL → utrzymanie endometrium i ciąży; hCG jest podstawą testu ciążowego (wykrywalne ~8–10 dni po zapłodnieniu)', is_correct: true },
      { id: 'B', text: 'hCG jest produkowana przez jajnik po owulacji — jest biomarkerem owulacji, a nie ciąży; rośnie przez cały cykl niezależnie od zapłodnienia; testu ciążowego nie można oprzeć na hCG', is_correct: false },
      { id: 'C', text: 'hCG działa przez receptor FSH i stymuluje wzrost nowych pęcherzyków jajnikowych w I trymestrze ciąży — dlatego w ciąży wielopłodowej może dochodzić do hiperstymulacji jajnika', is_correct: false },
      { id: 'D', text: 'hCG produkowana jest przez przysadkę matki i jest identyczna z LH — laboratoryjnie nie można odróżnić hCG od LH, dlatego testy ciążowe mierzą LH jako wskaźnik ciąży', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'hCG (human Chorionic Gonadotropin): glikoproteina, heterodimer α+β; podjednostka α = identyczna z FSH, LH, TSH (wspólna); podjednostka β-hCG = unikalna (testy ciążowe wykrywają β-hCG). Producent: syncytiotrofoblast (od ~8–9 dnia po zapłodnieniu). Receptor: LHCGR (receptor LH/hCG) na komórkach Leydig i luteinowych → cAMP → steroidogeneza. Rola: "ratowanie" ciałka żółtego (corpus luteum rescue): bez hCG CL degeneruje po 14 dniach → ↓P4 → menstruacja (stąd brak miesiączki = sygnał ciąży); hCG utrzymuje CL przez I trymestr (~10 tyg.) → P4 i E2 z CL. Od ~10 tyg.: łożysko przejmuje produkcję P4 (luteolacental shift). Kinetyka hCG: podwaja się co ~48 h (I trymest); szczyt ~10 tyg. (~100 000 IU/L); potem spada; wydalana w moczu → test domowy (≥25 IU/L czułość). Zastosowanie: test ciążowy domowy/laboratoryjny; diagnostyka ciąży ektopowej (wolniejszy wzrost); marker nowotworów (kosmówczak = choriocarcinoma = bardzo wysoka hCG); protokoły IVF (hCG jako trigger owulacji zamiast LH; stymulacja jajnika przez duże dawki hCG → OHSS u predysponowanych).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Regulacja hormonalna rozrodu',
    subtopic_id: S.horm,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących hormonalnej regulacji płciowego dojrzewania:\nA. Dojrzewanie płciowe (pubertas) jest inicjowane przez zwiększenie częstotliwości i amplitudy pulsatylnego wydzielania GnRH przez podwzgórze (reaktywacja "generatora pulsów GnRH" po cichym dzieciństwie) → ↑FSH i LH → dojrzewanie gonad.\nB. Testosteron u chłopców jest odpowiedzialny za: wzrost jąder (pierwsza oznaka dojrzewania), wzrost prącia, owłosienie łonowe i pachowe, zmianę głosu (powiększenie krtani, obniżenie głosu), skok wzrostowy (przez konwersję do estradiolu w kościach — zamknięcie chrząstki wzrostowej).\nC. Menarche (pierwsza miesiączka) jest PIERWSZYM objawem dojrzewania płciowego u dziewczynek — pojawia się przed rozwojem piersi (thelarche) i owłosieniem łonowym (pubarche).',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: oś HPG (podwzgórze–przysadka–gonady): w dzieciństwie GnRH supresjonowane (przez GABA, endokannabinoidy, kiss-peptyna odgrywa rolę w inicjacji); w puberty: ↑kisspeptyna (neurony ARC/KNDy) → ↑GnRH pulse generator → ↑FSH i LH pulsatylnie → gonady dojrzewają. Wiek: dziewczynki 8–13 r.ż. (mediana 10–11), chłopcy 9–14 r.ż. B — PRAWDA: testosteron u chłopców: wzrost jąder (pierwsze, ~9–11 r.ż. = Tanner B1→G2); prącie, moszna; owłosienie łonowe, pachowe, twarzy; larynx ↑ → mutacja głosu (obniżenie o ok. oktawę); spermatogeneza; ↑mięśnie; skok wzrostowy (T → E2 przez aromatazę w nasadach → zamknięcie nasad po skoku). C — FAŁSZ: menarche jest OSTATNIM (nie pierwszym) klinicznym objawem dojrzewania u dziewczynek! Kolejność (Tanner stages): Thelarche (B2, pojaw. pąka piersiowego) PIERWSZA (~10–11 r.ż.) → Pubarche (PH2, pierwsze owłosienie łonowe) → wzrost piersi (B3–B4) → skok wzrostowy → menarche (~12–13 r.ż., średnio 2–3 lata po thelarche). Wczesne thelarche bez innych cech = wariant normy (izolowana thelarche).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Rozmnażanie i rozwój człowieka — Regulacja hormonalna rozrodu',
    subtopic_id: S.horm,
    question_type: 'single',
    question_text: 'Menopauza jest naturalnym zakończeniem okresu rozrodczego u kobiet. Które zestawienie POPRAWNIE opisuje jej mechanizm hormonalny i objawy?',
    options: [
      { id: 'A', text: 'Wyczerpanie puli pęcherzyków jajnikowych → ↓estradiol + ↓inhibina B → brak ujemnego sprzężenia → ↑↑FSH i LH (diagnostyczne: FSH >40 IU/L) → objawy: uderzenia gorąca (hot flushes), atrofia urogenitalna, osteoporoza, zmiany nastroju', is_correct: true },
      { id: 'B', text: 'Menopauza jest spowodowana wyczerpaniem przysadki — ↓FSH i LH → jajniki tracą stymulację; estrogeny nie zmieniają stężenia; FSH <5 IU/L jest diagnostyczne dla menopauzy', is_correct: false },
      { id: 'C', text: 'W menopauzie jajniki nadal produkują estradiol w niezmienionej ilości — objawy menopauzy wynikają z nadmiaru estrogenów a nie ich niedoboru; menopauza jest leczona lekami blokującymi receptory estrogenowe', is_correct: false },
      { id: 'D', text: 'Menopauza dotyczy wyłącznie kobiet z usuniętymi jajnikami (menopauza chirurgiczna) — u kobiet z nienaruszonymi jajnikami cykl menstruacyjny trwa przez całe życie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Menopauza (klimakterium): naturalne wyczerpanie puli oocytów + pęcherzyków jajnikowych (~51 r.ż. średnio; peri-menopauza kilka lat przed). Mechanizm: rezerwa jajnikowa ↓ → pęcherzyki nie odpowiadają na FSH → ↓E2 + ↓inhibina B (inhibina hamuje FSH w fazie folikularnej) → brak ujemnego sprzężenia z przysadką → ↑↑FSH (>40 IU/L w 2 pomiarach → kryterium diagnostyczne) + ↑LH; jajnik androgenowy: stroma jajnika produkuje nadal androstendion → obwodowa aromatyzacja do estronu (słabszy estrogen, E1) w tkance tłuszczowej. Objawy niedoboru estrogenów: vasomotoryczne: uderzenia gorąca (hot flushes, 75%: nagłe zaczerwienienie, pocenie, kołatanie; mechanizm: ↓E2 → destabilizacja termostatu w POAH); urogenitalne: atrofia pochwy/cewki moczowej (dyspareunia, infekcje, incontinence); kostne: ↑resorpcja kości → osteoporoza (E2 hamuje osteoklasty przez ↓RANKL); nastrój, funkcje kognitywne; ↑CVD risk (E2 kardioprotekcja przez ↑HDL, ↓LDL, ↑NO produkcja). MHT (Menopausal Hormone Therapy): E2 + progesteron (u kobiet z macicą) = łagodzi objawy, chroni kości; ryzyko: ↑zakrzepica, ↑rak piersi (przy długim stosowaniu).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/mock_questions',
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
  console.log(`Seeding ${questions.length} mock questions for Rozmnazanie i rozwoj czlowieka...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
