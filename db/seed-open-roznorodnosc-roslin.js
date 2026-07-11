// Seed: open questions — Różnorodność roślin — tkanki i organy (10 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC = '715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d'

const S = {
  korz:  '7412b8c7-d272-4d2e-b7fd-2c476174fa8b',
  kwiat: '2f534143-8c2e-493a-8040-f4f5008765b4',
  lisc:  '9a12bb4f-29e7-4946-a454-3ddd83af0cd0',
  lodz:  '127bb517-9e07-44a3-821c-1c811ffe356e',
  syst:  'd9f251fc-9b3b-4922-af0d-e4aa4356871c',
  nas:   '78b9339f-9ce4-4e22-9842-584ab100daf9',
  przew: 'af3b084b-a1ed-492e-abed-ed136e095415',
  tkan:  '9ec87867-e7fd-445f-9df4-dd309c78f156',
}

const questions = [
  // ─── Tkanki roślinne ───
  {
    topic_id: TOPIC,
    subtopic_id: S.tkan,
    question_type: 'open',
    question_text: 'Wyjaśnij różnicę między tkankami twórczymi (merystemami) a tkankami stałymi roślin. Podaj dwa przykłady merystemów i określ, gdzie w roślinie się znajdują i jaką pełnią funkcję.',
    options: [], correct_answer: [],
    explanation: 'Merystemy: komórki niezróżnicowane, zdolne do podziałów mitotycznych — umożliwiają wzrost rośliny. Tkanki stałe: zróżnicowane, wyspecjalizowane, z reguły niezdolne do podziałów. Merystem wierzchołkowy pędu/korzenia — wzrost na długość; merystem boczny (kambium) — wzrost na grubość.',
    max_points: 2,
    key_points: [
      'Merystemy (tkanki twórcze): komórki niezróżnicowane, izodiametryczne, o dużych jądrach i cienkiej ścianie komórkowej, zdolne do intensywnych podziałów mitotycznych — produkują nowe komórki, z których różnicują się tkanki stałe; umożliwiają wzrost pierwotny i wtórny rośliny',
      'Przykłady merystemów: (1) merystem wierzchołkowy pędu (SAM) / korzenia (RAM) — zlokalizowany na szczycie łodygi i korzenia, odpowiada za wzrost na długość (wzrost pierwotny); (2) kambium (merystem boczny walcowaty) — zlokalizowane między łykiem a drewnem w łodydze i korzeniu, odpowiada za wzrost na grubość (wzrost wtórny) produkując drewno (ksylem wtórny) i łyko (floem wtórny)'
    ],
    model_answer: 'Merystemy (tkanki twórcze): komórki niezróżnicowane, drobne, izodiametryczne, o dużym jądrze i cienkiej ścianie celulozowej, zdolne do ciągłych podziałów mitotycznych; nie mają wakuoli centralnej lub mają małe wakuole. Tkanki stałe: powstają z merystemów przez różnicowanie — są wyspecjalizowane funkcjonalnie (przewodzące, okrywające, miękiszowe, wzmacniające, wydzielnicze), zazwyczaj niezdolne lub ograniczone w zdolności do podziałów. Dwa przykłady merystemów: (1) Merystem wierzchołkowy korzenia (RAM — Root Apical Meristem): zlokalizowany tuż za czapeczką korzeniową; generuje tkanki pierwotne korzenia (epiderma, kora, walec osiowy) → wzrost korzenia na długość; (2) Kambium naczyniowe (merystem boczny): umieszczone między drewnem a łykiem w łodydze i korzeniu roślin dwuliściennych i nagozalążkowych; produkuje ksylem wtórny (do wewnątrz) i floem wtórny (na zewnątrz) → wzrost wtórny na grubość (tworzenie drewna).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC,
    subtopic_id: S.tkan,
    question_type: 'open',
    question_text: 'Oceń prawdziwość stwierdzenia: „Sklerenchyma jest tkanką martwą, dlatego nie pełni żadnej funkcji życiowej w roślinie". Uzasadnij swoją ocenę, podając funkcję sklerenchymy i wyjaśniając, dlaczego jej komórki obumierają.',
    options: [], correct_answer: [],
    explanation: 'Stwierdzenie fałszywe. Sklerenchyma jest martwą tkanką wzmacniającą — lignina w grubej ścianie wtórnej nadaje sztywność i wytrzymałość mechaniczną. Komórki obumierają po wytworzeniu grubej ściany wtórnej — są zbędne metabolicznie, ale strukturalnie działają jako "wbudowana armatura".',
    max_points: 2,
    key_points: [
      'Ocena: stwierdzenie FAŁSZYWE — sklerenchyma jest martwą tkanką, lecz pełni kluczową funkcję mechaniczną (wzmacniającą): gruba, zlignifikowana ściana wtórna komórek sklerenchymy nadaje roślinie sztywność, wytrzymałość na rozciąganie i zgniatanie; jest odpowiednikiem "zbrojenia" w konstrukcji rośliny',
      'Komórki sklerenchymy (włókna i sklereidy) obumierają po wytworzeniu bardzo grubej ściany wtórnej nasyconej ligniną — żywa protoplast jest zbędna gdy ściana jest już skompletowana; właśnie martwa, pusta komórka z grubą zlignifikowaną ścianą jest funkcjonalna — analogicznie do komórek tracheID i naczyń drewna (ksylemu)'
    ],
    model_answer: 'Stwierdzenie FAŁSZYWE. Sklerenchyma (tkanka wzmacniająca/mechaniczna) jest wprawdzie tkanką martwą w dojrzałym stadium, lecz pełni niezbędną funkcję mechaniczną — nadaje roślinie wytrzymałość i sztywność. Gruba ściana wtórna komórek sklerenchymy jest silnie nasycona ligniną (lignifikacja) — lignina jest twardym, odpornym polimerem fenylopropanoidowym, który unieruchamia włókna celulozowe i czyni ścianę nierozciągliwą i odporną na kompresję. Komórki sklerenchymy (dwa typy: włókna — wydłużone, i sklereidy/kamienne komórki — izodiametryczne) obumierają po zakończeniu syntezy ściany wtórnej — żywa protoplast jest metabolicznie zbędna gdy ściana jest już zbudowana; właśnie martwa, pusta przestrzeń wewnętrzna (lumen) otoczona grubą ścianą jest funkcjonalna — analogia do stali w betonie. Sklerenchyma wzmacnia łodygi, korzenie, ogonki liściowe, łupiny owoców (np. pestka śliwki = łupina nasienna ze sklereidów).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Tkanki przewodzące ───
  {
    topic_id: TOPIC,
    subtopic_id: S.przew,
    question_type: 'open',
    question_text: 'Porównaj budowę i funkcję ksylemu (drewna) oraz floemu (łyka) jako tkanek przewodzących roślin naczyniowych. Wskaż, które elementy są żywe, a które martwe w dojrzałym stadium, i wyjaśnij, dlaczego.',
    options: [], correct_answer: [],
    explanation: 'Ksylem: przewodzi wodę i sole mineralne w górę (transpiracja); naczynia i cewki = komórki martwe (gruba ściana lignifikowana, brak protoplastu). Floem: przewodzi asymilaty (sacharoza) w dół i w górę; rurki sitowe = żywe (bez jądra), komórki towarzyszące = żywe (jądro, mitochondria — obsługują rurki sitowe).',
    max_points: 3,
    key_points: [
      'Ksylem (drewno): przewodzi wodę i jony mineralne od korzenia do liści (strumień transpiracyjny, siła napędowa: transpiracja + kohezja wody); główne elementy przewodzące: naczynia (vessels) i cewki (tracheidy) — obie MARTWE w dojrzałości: silnie zlignifikowane ściany wtórne, brak protoplastu (obumieranie po złożeniu ściany wtórnej = luz dla przepływu wody); cewki (starsze ewolucyjnie) przewodzą przez jamki; naczynia mają otwarte perforacje między segmentami',
      'Floem (łyko): przewodzi organiczne asymilaty (głównie sacharozę) z liści do wszystkich organów (dwukierunkowy transport); główne elementy: rurki sitowe (sieve tube elements) — ŻYWE, lecz pozbawione jądra, rybosomów i wakuoli centralnej (zredukowany cytoplazm) — jądro znika w trakcie różnicowania; komórki towarzyszące (companion cells) — ŻYWE, z jądrem i licznymi mitochondriami — kontrolują metabolizm rurek sitowych i załadunek/rozładunek sacharozy przez plasmodesmy',
      'Powód obumierania naczyń/cewek ksylemu: gruba ściana wtórna z ligniną wzmacnia rurę transportową i umożliwia przepływ pod ujemnym ciśnieniem (napięcie przy transpiracji) bez zapadania się; żywy protoplast byłby przeszkodą dla swobodnego przepływu wody — musi być usunięty (autoliza); rurki sitowe zachowują żywy (choć zredukowany) cytoplazm, bo aktywny transport sacharozy wymaga ATP i białek transportowych'
    ],
    model_answer: 'Ksylem (drewno) i floem (łyko) — porównanie: Ksylem: funkcja = przewodzenie wody i soli mineralnych od korzeni do liści (strumień transpiracyjny); kierunek = ku górze (apoplastowo i symplastowo); siła napędowa = ujemne ciśnienie (transpiracja pociąga wodę za sobą — teoria kohezji-tensji Dixona i Jolly\'ego). Elementy: naczynia (vessel elements) — krótkie komórki ułożone w rurki z perforacjami na ścianach czołowych; cewki (tracheidy) — wydłużone z jamkami na ścianach bocznych. Obie MARTWE: po wytworzeniu grubej, zlignifikowanej ściany wtórnej protoplast ulega autolizie — martwa, pusta przestrzeń lumenalna jest idealna do transportu wody pod ujemnym ciśnieniem; lignina zapobiega zapadaniu się ścian. Floem: funkcja = transport asymilatów (sacharoza, aminokwasy, hormony) z miejsc produkcji (source: liście) do miejsc zużycia (sink: korzenie, owoce, pąki); kierunek = dwukierunkowy (wg modelu ciśnienia Müncha: source → sink). Elementy: rurki sitowe ŻYWE, lecz pozbawione jądra i rybosomów w dojrzałości → obsługiwane przez komórki towarzyszące (żywe, z dużym jądrem, licznymi mitochondriami) połączone plasmodesmami (plasmodesmy wyspecjalizowane = plazmodesmy filamentowe); transport aktywny sacharozy wymaga żywego systemu enzymatycznego.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Budowa liścia ───
  {
    topic_id: TOPIC,
    subtopic_id: S.lisc,
    question_type: 'open',
    question_text: 'Wyjaśnij, w jaki sposób budowa anatomiczna blaszki liściowej jest przystosowana do efektywnego przeprowadzania fotosyntezy. Odnieś się do rozmieszczenia chloroplastów, obecności aparatów szparkowych i budowy mezofilu.',
    options: [], correct_answer: [],
    explanation: 'Epiderma: przezroczysta (przepuszcza światło) bez chloroplastów. Mezofil palisadowy (górna strona): komórki walcowate, upakowane chloroplastami — maksymalna absorpcja światła. Mezofil gąbczasty: luźne ułożenie z przestworami powietrznymi — wymiana CO₂/O₂. Aparaty szparkowe (dolna strona): regulują wnikanie CO₂ i parowanie wody.',
    max_points: 2,
    key_points: [
      'Mezofil palisadowy (adaksjalny): komórki walcowate ułożone prostopadle do powierzchni liścia, gęsto upakowane chloroplastami (40–50 na komórkę) — przystosowanie do absorpcji maksymalnej ilości światła słonecznego padającego z góry; chloroplasty mogą przemieszczać się wzdłuż ściany (awoidancja przy nadmiarze światła); epiderma górna jest przezroczysta (brak chloroplastów) — przepuszcza światło do mezofilu',
      'Mezofil gąbczasty (abaksjalny): luźno ułożone komórki z dużymi przestworami powietrznymi — ułatwiają dyfuzję CO₂ z aparatów szparkowych do chloroplastów i odprowadzenie O₂; aparaty szparkowe (głównie na dolnej epidermie): para komórek szparkowych z chloroplastami i centralnym porkiem (szparką) — regulują wymianę gazową (CO₂ wnika, O₂ i para wodna wychodzą) oraz transpirację'
    ],
    model_answer: 'Budowa blaszki liściowej jest ściśle przystosowana do fotosyntezy: Epiderma górna i dolna: pojedyncza warstwa komórek bez chloroplastów, pokryta kutykulą (woskową) zmniejszającą transpirację; komórki przezroczyste — przepuszczają światło do mezofilu. Mezofil palisadowy (pod górną epidermą): komórki wydłużone (walcowate), ułożone prostopadle do powierzchni liścia, gęsto upakowane chloroplastami (nawet 50 na komórkę); przystosowanie do maksymalnej absorpcji energii świetlnej; chloroplasty mogą przemieszczać się do ściany prostopadłej do światła (akumulacja) lub równoległej (awoidancja). Mezofil gąbczasty (nad dolną epidermą): komórki nieregularne, luźno ułożone z dużymi przestworami powietrznymi (intracellular spaces) tworzącymi wewnętrzną atmosferę liścia; ułatwiają dyfuzję CO₂ z aparatów szparkowych do chloroplastów (CO₂ jest substratem cyklu Calvina) i odprowadzenie O₂. Aparaty szparkowe (stomata): zlokalizowane głównie w dolnej epidermie (unikają bezpośredniego nasłonecznienia → mniejsza transpiracja); każdy aparat = para komórek szparkowych z chloroplastami i szparką (pore) — regulują wymianę CO₂/O₂ i transpirację; otwierają się przy fotosyntezie (K⁺ w komórkach szparkowych → ↑turgor → szparka otwarta).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Budowa korzenia ───
  {
    topic_id: TOPIC,
    subtopic_id: S.korz,
    question_type: 'open',
    question_text: 'Wyjaśnij rolę paska Casparyego w korzeniu. Dlaczego jego obecność w komórkach endodermy umożliwia selektywną kontrolę składu jonów wchodzących do walca osiowego?',
    options: [], correct_answer: [],
    explanation: 'Pasek Casparyego (zbudowany z suberyny) uszczelnia ściany radialne i poprzeczne komórek endodermy — blokuje przepływ apoplastyczny (przez ściany komórkowe) do walca osiowego. Jony muszą przejść przez symplast (przez błonę komórkową), gdzie transportery jonowe decydują, co przejdzie — selektywność.',
    max_points: 2,
    key_points: [
      'Pasek Casparyego: hydrofobowa wstawka z suberyny (i ligniny) w ścianach radialnych i poprzecznych komórek endodermy — blokuje przepływ wody i jonów drogą apoplastyczną (przez ściany komórkowe i przestrzenie między nimi) do walca osiowego; wymusza, by wszystkie substancje przeszły przez błonę komórkową i cytoplazm komórki endodermy (droga symplastyczna)',
      'Selektywna kontrola: błona komórkowa endodermy posiada selektywne transportery jonowe (białka kanałowe i nośnikowe: akwaporyny dla wody, kanały jonowe dla K⁺, Ca²⁺, NO₃⁻, transportery dla soli mineralnych) — tylko jony i cząsteczki, dla których istnieją odpowiednie transportery, mogą przejść do walca osiowego i dalej do ksylemu; umożliwia to regulację składu mineralnego soku ksylemowego niezależnie od składu roztworu glebowego'
    ],
    model_answer: 'Pasek Casparyego (Caspary strip) — odkryty przez Roberta Caspariego 1865: nieprzepuszczalna wstawka z suberyny (tłuszczowy polimer) w ścianach radialnych (pionowych) i poprzecznych komórek endodermy (wewnętrzna warstwa kory korzenia). Funkcja: uszczelnienie apoplastyczne — jony i woda nie mogą przejść między komórkami endodermy przez ściany komórkowe (apoplast) do walca osiowego; zostają "skierowane" przez symplast — muszą wniknąć do cytoplazmy przez błonę komórkową. Dlaczego to umożliwia selektywność: błona komórkowa endodermy wyposażona jest w specyficzne transportery (kanały jonowe, białka ATPase, symportery H⁺/jony) → tylko substancje, dla których istnieją transportery, przechodzą; roślina może regulować pobieranie selektywnie: blokować toksyczne jony (np. Cd²⁺, Al³⁺), a aktywnie pobierać niezbędne (NO₃⁻, K⁺, PO₄³⁻). Bez paska Casparyego: apoplastyczny przepływ wody z gleby bezpośrednio do ksylemu — brak selekcji = skład soku ksylemowego identyczny ze składem roztworu glebowego.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Budowa łodygi ───
  {
    topic_id: TOPIC,
    subtopic_id: S.lodz,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega wzrost wtórny łodygi roślin dwuliściennych. Jakie tkanki powstają w wyniku działania kambium i korka, i jak zmienia się budowa łodygi wraz z wiekiem?',
    options: [], correct_answer: [],
    explanation: 'Kambium naczyniowe (między łykiem a drewnem): do wewnątrz → ksylem wtórny (drewno), na zewnątrz → floem wtórny (łyko). Kambium korkotwórcze (fellogen): korek (na zewnątrz) + felloderm (do wewnątrz) = peryderm zastępuje epidermę. Łodyga rośnie na grubość, epiderma pęka i jest zastępowana korkiem.',
    max_points: 2,
    key_points: [
      'Wzrost wtórny = działanie merystemów bocznych: (1) kambium naczyniowe (między floemem a ksylemem pierwotnym) — produkuje ksylem wtórny (drewno) do wnętrza i floem wtórny (łyko) na zewnątrz; słoje roczne drewna = wiosenne (duże naczynia) + letnie (gęste, małe cewki); (2) kambium korkotwórcze (fellogen) — powstaje w epidermie lub zewnętrznych warstwach kory; produkuje korek (phellem) na zewnątrz i felloderm do wewnątrz → peryderm zastępuje epidermę',
      'Zmiany budowy z wiekiem: epiderma (budowa pierwotna) pęka i odpada — zastępowana przez peryderm (korek); kora pierwotna jest "wypychana" przez rosnącą masę drewna i łyko wtórne i stopniowo zanika; łodyga wieloletnia = rdzeniowa strefa drewna (biel + twardziel) + cienka warstwa kambium + łyko wtórne + korek; twardziel (heartwood) = starsze drewno nasycone garbnikami i żywicami (nieaktywne); biel (sapwood) = świeże drewno aktywnie przewodzące wodę'
    ],
    model_answer: 'Wzrost wtórny łodygi roślin dwuliściennych (i nagozalążkowych): po zakończeniu wzrostu pierwotnego (elongacja komórek merystemowych) zachodzi wzrost wtórny — zwiększenie grubości przez dwa meristemy boczne. (1) Kambium naczyniowe: pasek merystematyczny między floemem pierwotnym (na zewnątrz) a ksylemem pierwotnym (wewnątrz); łączy się w pierścień kambialny; podziały antyperyklinalne → ksylem wtórny (drewno) do środka i floem wtórny (łyko) na zewnątrz; proporcje: ~9:1 (więcej drewna niż łyka); słoje roczne: drewno wczesnowiosenne (duże naczynia) + drewno letnie (gęstsze, małe cewki) = granica widoczna na przekroju poprzecznym. (2) Fellogen (kambium korkotwórcze): powstaje w epidermie lub subepidermalnej warstwie kory; produkuje korek (suberyna, martwy) na zewnątrz i felloderm (żywy miękisz) do wewnątrz → peryderm = korek + fellogen + felloderm. Z wiekiem: epiderma pęka → odpadają pierwotne elementy kory → peryderm tworzy łupinę; twardziel (ciemna, centralna) vs biel (jasna, zewnętrzna, przewodząca).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Budowa kwiatu i zapylanie ───
  {
    topic_id: TOPIC,
    subtopic_id: S.kwiat,
    question_type: 'open',
    question_text: 'Porównaj zapylenie przez wiatr (anemogamię) i przez owady (entomogamię). Podaj po dwie cechy kwiatów przystosowanych do każdego z tych typów zapylania i wyjaśnij, dlaczego cechy te są adaptacyjnie korzystne.',
    options: [], correct_answer: [],
    explanation: 'Anemogamia: kwiaty dyskretne (brak płatków/nektaru), pręciki na długich nitkach, dużo lekkiego pyłku, znamię pierzaste. Entomogamia: kwiaty barwne, zapach, nektar, mniej lepkiego pyłku, znamię lepkie — owad jest "świadomym" transporterem pyłku do konkretnego gatunku.',
    max_points: 2,
    key_points: [
      'Kwiaty wiatropylne (anemogamiczne): (1) drobne, niepozorne, bez barwnych płatków i nektaru — barwa i nektar są zbędne (wiatr nie jest "wabiony"); oszczędność energii; (2) pręciki na długich, elastycznych nitkach wysuniętych poza kwiat + duże, luźno osadzone woreczki pylnikowe (pylą w wietrze) + pyłek suchy, lekki, gładki (lub z pęcherzykami powietrznymi u sosnowatych), produkowany w ogromnych ilościach — kompensuje losowość transportu wiatrowego',
      'Kwiaty owadopylne (entomogamiczne): (1) jaskrawe, duże płatki korony (lub okolnica barwna) + wzory UV dla owadów + specyficzny kształt dostosowany do budowy zapylacza (np. rurka kwiatowa długości trąbki motyla) — wabiące i kierujące owada do pyłku/słupka; (2) nektar i/lub zapach (lotne olejki eteryczne) jako nagroda dla zapylacza — owad aktywnie odwiedza kwiaty i przenosi pyłek do kwiatu tego samego gatunku (specyficzność > anemogamii); pyłek lepki (oleisty), w mniejszych ilościach niż u anemogamicznych'
    ],
    model_answer: 'Anemogamia (wiatropylność) — cechy kwiatów: (1) Niepozorne, bez płatków i nektaru: wiatr nie reaguje na sygnały wizualne ani zapachowe → brak sensu wydatkowania energii na budowę kolorowej korony lub produkcję nektaru; kwiaty zazwyczaj zebrane w kotki, kłosy (leszczyna, olcha, topola, trawy, zboża); (2) Ogromna ilość lekkiego, suchego, gładkiego pyłku: transport wiatrowy jest przypadkowy → statystyczne prawdopodobieństwo trafienia na znamię słupka jest niskie → kompensacja przez masową produkcję; pyłek sosny z woreczkami powietrznymi unosi się wiele km; pierzaste, rozgałęzione znamiona słupka: zwiększają powierzchnię wychwytywania pyłku z powietrza. Entomogamia (owadopylność) — cechy kwiatów: (1) Barwne, duże płatki (lub przebarwiona okrywa) i wzory UV (pszczoły widzą UV): przyciągają i kierują owada do nektarium i pręcików → zwiększa precyzję i wydajność zapylenia; budowa kwiatu często pasuje do budowy zapylacza (koewolucja: motyl — długie kwiaty rurkowe); (2) Nektar (cukry, aminokwasy, lipidy) i/lub zapach jako nagroda: owad świadomie szuka nagrody → wielokrotnie odwiedza kwiaty tego samego gatunku → wysoce wydajne przenoszenie pyłku między kwiatami konspecyficznymi; pyłek lepki (adhezja do ciała owada).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Nasiona i owoce ───
  {
    topic_id: TOPIC,
    subtopic_id: S.nas,
    question_type: 'open',
    question_text: 'Wyjaśnij rolę bielma (endospermu) w nasionach roślin okrytonasiennych. Jak bielmo powstaje i czym różni się od tkanki odżywczej w nasionach nagozalążkowych?',
    options: [], correct_answer: [],
    explanation: 'Bielmo okrytonasiennych: powstaje przez podwójne zapłodnienie (jądro centralne woreczka zarodkowego 2n + jeden plemnik n = triploidalne bielmo 3n) — zapas pokarmowy dla zarodka. U nagozalążkowych: tkanka odżywcza = gametofit żeński (haploidalny, n), nie wymaga zapłodnienia.',
    max_points: 2,
    key_points: [
      'Bielmo (endosperma) okrytonasiennych: powstaje w wyniku podwójnego zapłodnienia (Nawaszczin 1898) — jeden z dwóch plemników zapładnia komórkę centralną woreczka zarodkowego (zawierającą dwa jądra polarne 2×n) → triploidalne jądro (3n) → podział → bielmo 3n; funkcja: magazyn substancji zapasowych (skrobia, białka, tłuszcze, np. bielmo kukurydzy, pszenicy, palmy kokosowej = kopra) dla rozwijającego się zarodka podczas kiełkowania',
      'Różnica od nagozalążkowych: u roślin nagonasiennych (np. sosna) tkanka odżywcza nasienia = gametofit żeński (haploidalny, n) — powstaje bez zapłodnienia przez podziały mitotyczne z megaspory; u okrytonasiennych bielmo powstaje tylko w wyniku zapłodnienia (jest triploidalne 3n); u wielu okrytonasiennych bielmo jest wchłaniane przez liścienie zarodka podczas dojrzewania (nasiona bezbielmowe, np. fasola, groch — substancje zapasowe w liścieniach) lub zachowane w dojrzałym nasieniu (bielmowe, np. kukurydza, ryż)'
    ],
    model_answer: 'Bielmo (endosperma) u okrytonasiennych: Powstawanie: podwójne zapłodnienie (Strasburger opisał, Nawaszczin udowodnił 1898) — dwa plemniki z łagiewki pyłkowej: (1) jeden zapładnia komórkę jajową → zygota (2n) → zarodek; (2) drugi łączy się z komórką centralną (zawierającą dwa jądra polarne n+n = 2n) → jądro wtórne (3n) → podziały mitotyczne → bielmo triploidalne (3n). Funkcja bielma: materiał zapasowy dla kiełkującego zarodka — może zawierać skrobię (zboża: ryż, pszenica, kukurydza), białka (pszenica — gliadyna i glutenina → gluten), tłuszcze (kokos = kopra, endosperma kokosa). Typy nasion: bielmowe (bielmo zachowane w dojrzałym nasieniu: jednoliścienne — zboża, jednoliścienne) vs bezbielmowe (bielmo wchłonięte przez liścienie: fasola, groch, dynia — substancje zapasowe w liścieniach). Porównanie z nagozalążkowymi: u sosen, świerków tkanka odżywcza = pierwotna bielmo = gametofit żeński (haploidalny, n), powstały przez mitozę z megaspory BEZ zapłodnienia drugiego komórki; u okrytonasiennych bielmo ZAWSZE triploidalne i ZAWSZE z podwójnego zapłodnienia — innowacja ewolucyjna okrytonasiennych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Grupy systematyczne roślin ───
  {
    topic_id: TOPIC,
    subtopic_id: S.syst,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega przemiana pokoleń u roślin lądowych (mszaki i paprotniki). Porównaj, które pokolenie dominuje u mszaków, a które u paprotników, i podaj, czym jest sporofit, a czym gametofit.',
    options: [], correct_answer: [],
    explanation: 'Przemiana pokoleń: gametofit (n) → gamety → zapłodnienie → sporofit (2n) → mejoza → zarodniki → gametofit. Mszaki: dominuje gametofit (zielona plecha/łodyżka/listki) — sporofit (seta + puszka) pasożytuje na gametoficie. Paprotniki: dominuje sporofit (zielona roślina z liśćmi) — gametofit (protalium) mały, niezależny.',
    max_points: 2,
    key_points: [
      'Gametofit (pokolenie płciowe, n): haploidalny, produkuje gamety (w anterydium: spermatozoidy; w archegonium: komórka jajowa) → po zapłodnieniu (potrzeba wody!) powstaje zygota (2n) → sporofit. Sporofit (pokolenie bezpłciowe, 2n): diploidalny, produkuje zarodniki przez mejozę → zarodniki haploidalne (n) → kiełkują → gametofit',
      'Mszaki (mchy, wątrobowce, glewiki): dominuje GAMETOFIT — to zielona, fotosyntetyzująca plecha/roślinka z listkami, samożywna; sporofit (seta + puszka zarodnionośna) wyrasta z gametofitu i pozostaje od niego zależny (pozbawiony chlorofilu, pasożytuje). Paprotniki (paprocie, widłaki, skrzypy): dominuje SPOROFIT — to zielona roślina z liśćmi i korzeniami (to co widujemy w lesie); gametofit = protalium — małe (kilka mm), sercowate, haploidalne, krótkotrwałe, niezależne, wówczas bez przewodzenia'
    ],
    model_answer: 'Przemiana pokoleń (metageneza): regularne następowanie po sobie dwóch pokoleń — gametofitu i sporofitu. Gametofit (n, haploidalny): faza płciowa; wytwarza gamety żeńskie (w archegoniach) i męskie (w anterydium, spermatozoidy z wiciami); do zapłodnienia potrzebna woda (spermatozoidy pływają); zygota (2n) → sporofit. Sporofit (2n, diploidalny): faza bezpłciowa; produkuje zarodniki przez mejozę → haploidalne zarodniki rozsiewane (wiatr) → kiełkują → gametofit. Dominacja pokoleń: Mszaki (Bryophyta): DOMINUJE GAMETOFIT — zielona roślinka (plecha lub łodyżka z listkami) jest gametofitem, samożywna (fotosynteza); sporofit (nóżka/seta + zarodniak/puszka) wyrasta z czubka gametofitu i jest od niego całkowicie zależny odżywczo (heterotroficzny); dlatego mszaki są małe (gametofit bez tkanek przewodzących). Paprotniki (Pteridophyta): DOMINUJE SPOROFIT — imponująca zielona roślina z liśćmi (megafyle), korzeniami i łodygą; ma tkanki przewodzące (ksylem, floem); zarodnię wytwarza na spodzie liści (sori); gametofit (protalium) = mała (kilka mm) sercowata płyteczka, niezależna, krótkotrwała, produkuje gamety.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Budowa korzenia (drugi) ───
  {
    topic_id: TOPIC,
    subtopic_id: S.korz,
    question_type: 'open',
    question_text: 'Podaj dwie funkcje włośników korzenia i wyjaśnij, dlaczego ich obecność znacząco zwiększa wydajność pobierania wody i soli mineralnych przez roślinę. Uwzględnij w odpowiedzi pojęcie powierzchni absorpcji.',
    options: [], correct_answer: [],
    explanation: 'Włośniki: wypustki epidermy strefy włośnikowej korzenia — zwiększają powierzchnię absorpcji nawet 10-krotnie. Funkcje: pobieranie wody (osmoza, gradient potencjału wodnego: gleba → włośnik) i soli mineralnych (aktywny transport jonów przez przenośniki błonowe).',
    max_points: 2,
    key_points: [
      'Funkcje włośników: (1) pobieranie wody z gleby na drodze osmozy — sok komórkowy włośnika ma wyższe stężenie substancji rozpuszczonych niż woda glebowa → niższy potencjał wodny → woda wnika osmotycznie; (2) aktywny transport jonów mineralnych (NO₃⁻, K⁺, PO₄³⁻, Ca²⁺) przez selektywne białka nośnikowe i kanały jonowe w błonie komórkowej, często z wydatkiem energii (ATP)',
      'Zwiększenie powierzchni absorpcji: włośniki = pojedyncze wydłużone komórki epidermy (długość 0,1–1 cm) gęsto pokrywające strefę włośnikową; ich obecność zwiększa efektywną powierzchnię kontaktu z cząstkami gleby i roztworem glebowym kilkudziesięciokrotnie (np. u żyta — 401 cm² powierzchni włośnikowej na 1 cm³ gleby); większa powierzchnia = więcej nośników jonowych = szybsze i wydajniejsze pobieranie składników mineralnych i wody przy tym samym czasie kontaktu z glebą'
    ],
    model_answer: 'Włośniki (root hairs): jednokomórkowe wypustki komórek ryzodermy (epidermy korzenia) zlokalizowane w strefie włośnikowej (bezpośrednio za strefą wydłużania); żyją krótko (kilka dni) — nowe powstają za stale rosnącym wierzchołkiem korzenia. Dwie funkcje: (1) Pobieranie wody: osmoza bierna — sok wakuolarny włośnika ma wyższe stężenie osmotyczne niż woda glebowa → niższy potencjał wody (ψ) w komórce → woda wnika przez błonę (przez akwaporyny); gradient ψ: gleba → włośnik → kora → śródbłona → naczynia ksylemu. (2) Aktywne pobieranie jonów mineralnych: błona włośnika wyposażona w H⁺-ATPazy (pompujące H⁺ na zewnątrz → elektrochemiczny gradient napędza symportery H⁺/NO₃⁻, H⁺/K⁺, H⁺/PO₄³⁻) i kanały jonowe; pobieranie jonów wbrew gradientowi stężeń wymaga ATP. Zwiększenie powierzchni absorpcji: włośniki dramatycznie powiększają powierzchnię kontaktu z roztworem glebowym — klasyczny eksperyment Dittmera (1937) z żytem: ~14 mln włośników na jedną roślinę = łączna długość ~10 000 km; powierzchnia absorpcji rośnie kilkudziesięciokrotnie → proporcjonalnie wyższa szybkość pobierania H₂O i jonów.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
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
  console.log(`Seeding ${questions.length} open questions for Różnorodność roślin — tkanki i organy...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.max_points}pkt]`, q.question_text.slice(0, 70).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
