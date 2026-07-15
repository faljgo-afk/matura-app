// Seed batch 1/6 — Ekologia
// Ekosystem — struktura (6) + Łańcuchy i sieci pokarmowe (4)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '27daaa5f-30d8-4519-a525-4b136cad02f2'

const S = {
  ekosystem: 'd3fbbe32-335b-4893-979c-9ca4962494e3',
  lancuchy:  'd012abdd-8747-4b9d-bffd-fa4928e8b48c',
}

const questions = [

  // ── EKOSYSTEM — STRUKTURA (6) ─────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.ekosystem, question_type: 'single',
    question_text: 'Ekosystem składa się z biocenozy i biotopu. Które z poniższych stwierdzeń POPRAWNIE opisuje relację między tymi pojęciami?',
    options: [
      { id: 'A', text: 'Biocenoza to zespół wszystkich organizmów żywych zamieszkujących dany obszar (producenci, konsumenci, destruenci), a biotop to nieożywione środowisko ich życia (gleba, woda, klimat, sole mineralne); razem tworzą ekosystem jako funkcjonalną jednostkę', is_correct: true },
      { id: 'B', text: 'Biotop obejmuje zarówno organizmy żywe, jak i elementy nieożywione środowiska; biocenoza to wyłącznie roślinność danego obszaru; ekosystem jest nadrzędnym pojęciem obejmującym tylko lądowe zbiorowiska organizmów', is_correct: false },
      { id: 'C', text: 'Biocenoza i biotop to synonimy opisujące to samo zjawisko; pojęcie ekosystemu odnosi się wyłącznie do zbiorników wodnych; lądowe układy ekologiczne określa się wyłącznie terminem biogeocenoza', is_correct: false },
      { id: 'D', text: 'Biocenoza zawiera tylko zwierzęta (zoo-cenoza), biotop zawiera tylko rośliny (fito-cenoza); grzyby i bakterie tworzą odrębną warstwę ekosystemu niezwiązaną ani z biocenozą ani biotopem', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ekosystem (Tansley 1935) = biocenoza + biotop. BIOCENOZA: wszystkie populacje organizmów żywych na danym obszarze — producenci (rośliny, glony, sinice: autotrofy fotosyntetyzujące), konsumenci (heterotrofy: roślinożercy, drapieżniki, pasożyty), destruenci/reducenci (bakterie, grzyby: rozkładają martwą materię organiczną do związków mineralnych). BIOTOP: nieożywione czynniki środowiska (czynniki abiotyczne) — temperatura, światło, wilgotność, pH, sole mineralne, rodzaj podłoża, opady. Wzajemne oddziaływania biocenoza ↔ biotop: organizmy modyfikują swoje środowisko (np. rośliny zmniejszają nasłonecznienie dna lasu, bóbr zmienia bieg rzeki), biotop warunkuje skład biocenozy.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ekosystem, question_type: 'multiple',
    question_text: 'Które z poniższych organizmów pełnią rolę DESTRUENTÓW (reducentów) w ekosystemie leśnym? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Grzyby saprofityczne (np. Armillaria mellea, Agaricus campestris) rozkładające martwe drewno i ściółkę leśną do prostych związków mineralnych', is_correct: true },
      { id: 'B', text: 'Bakterie glebowe (np. Bacillus subtilis, Pseudomonas fluorescens) mineralizujące szczątki organiczne — białka, tłuszcze, celulozę — do NH₄⁺, PO₄³⁻, CO₂', is_correct: true },
      { id: 'C', text: 'Dżdżownice (Lumbricus terrestris) rozdrabniające ściółkę i mieszające materię organiczną z glebą mineralną, przez co przyspieszają rozkład i zwiększają żyzność gleby', is_correct: false },
      { id: 'D', text: 'Chrząszcze z rodziny gnojarzowatych (Scarabaeidae) żywiące się odchodami ssaków i rozkładające je, wzbogacając glebę w związki azotu', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'DESTRUENCI (reducenci, saprotrofy): organizmy rozkładające martwą materię organiczną do prostych związków nieorganicznych (mineralizacja). Prawdziwi destruenci: grzyby (zewnątrzkomórkowe enzymy: celulazy, ligninazy, proteazy) i bakterie (aerobowe i beztlenowe). DŻDŻOWNICE (C) i CHRZĄSZCZE (D) to DETRYTUSOŻERCY (detritusofagi) — rozdrabniają, ale nie mineralizują do nieorganicznych związków; ich działanie przyspiesza rozkład przez zwiększenie powierzchni dla właściwych destruentów, ale same są konsumentami 3. lub wyższego rzędu w łańcuchu detrytusowym. W terminologii CKE: destruenci = grzyby + bakterie; detrytusożercy = inna kategoria.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ekosystem, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących piramid ekologicznych:',
    options: [
      { id: 'A', text: 'Piramida liczb może mieć kształt odwrócony (podstawa węższa niż wyższe poziomy), np. gdy jeden duży dąb (producent) żywi tysiące owadów fitofagicznych (konsumenci I rzędu).', is_correct: true },
      { id: 'B', text: 'Piramida biomasy jest zawsze prosta (podstawa najszersza) — masa producentów musi zawsze przekraczać masę konsumentów wszystkich rzędów we wszystkich ekosystemach na Ziemi.', is_correct: false },
      { id: 'C', text: 'Piramida energii (produkcji) jest zawsze prosta i nigdy nie może być odwrócona, ponieważ energia przepływa jednostronnie i przy każdym przeniesieniu jej część jest tracona jako ciepło (II zasada termodynamiki).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: piramida liczb MOŻE być odwrócona — jeden organizm-producent (dąb, trawa) może żywić więcej osobników niż sam waży (owady, gryzonie). Inny przykład odwróconej piramidy liczb: pasożyty na jednym żywicielu (jeden sarny → tysiące kleszczy → miliony bakterii pasożytniczych). B — Fałsz: piramida biomasy MOŻE być odwrócona w ekosystemach pelagicznych (otwarte wody oceanu) — fitoplankton (producenci) ma mniejszą biomasę niż zooplankton (konsumenci), bo fitoplankton ma bardzo krótki czas życia i szybki obrót (turnover); w danym momencie biomasa producentów jest mniejsza, ale ich produkcja roczna jest wyższa. C — Prawda: piramida energii jest ZAWSZE prosta — II zasada termodynamiki (entropia) gwarantuje, że część energii jest zawsze tracona jako ciepło na każdym poziomie; sprawność ekologiczna wynosi 5–20%, więc wyższy poziom zawsze ma mniej energii.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ekosystem, question_type: 'single',
    question_text: 'Gatunki kluczowe (keystone species) mają nieproporcjonalnie duży wpływ na ekosystem w stosunku do swojej liczebności. Który przykład POPRAWNIE ilustruje rolę gatunku kluczowego?',
    options: [
      { id: 'A', text: 'Wydra morska (Enhydra lutris) — kontroluje liczebność jeżowców morskich; gdy wydrę wyeliminowano, jeżowce przeżarły pokłady kelpu (alg), co zniszczyło ekosystem leśny kelpu zależny od niego setki gatunków; przywrócenie wydry odbudowało ekosystem', is_correct: true },
      { id: 'B', text: 'Trawa na łące jest gatunkiem kluczowym, ponieważ stanowi 90% biomasy i bez niej łąka by nie istniała; każdy gatunek dominujący biomasą jest automatycznie gatunkiem kluczowym', is_correct: false },
      { id: 'C', text: 'Gatunek kluczowy to zawsze szczytowy drapieżnik (top predator) w każdym ekosystemie; mucha domowa Musca domestica jest gatunkiem kluczowym w ekosystemie miejskim bo jest najliczniejszym owadem', is_correct: false },
      { id: 'D', text: 'Człowiek jest gatunkiem kluczowym we wszystkich ekosystemach naturalnych; bez człowieka żaden ekosystem nie mógłby funkcjonować; koncepcja gatunku kluczowego dotyczy wyłącznie ekosystemów przekształconych przez człowieka', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Gatunek kluczowy (Paine 1969): nieproporcjonalnie duży wpływ na ekosystem względem swojej biomasy/liczebności; często reguluje strukturę sieci pokarmowej. Przykłady: (1) Wydra morska (Pacyfik PNW): wydra → kontroluje jeżowce → jeżowce jedzą korzenie kelpu → bez wydry: "urchin barrens" (pustynie jeżowcowe); Termin "keystone species" użyty po raz pierwszy przez Paine 1969 po eksperymencie usunięcia rozgwiazdy Pisaster ochraceus; (2) Wilk w Yellowstone: powrót 1995 → redukcja jeleni → regeneracja wierzb i osik → bobry powróciły → zmiana hydrologii rzek (trophic cascade); (3) Drzewa figowe w tropikach: owoce przez cały rok → kluczowy zasób dla setek gatunków; (4) Słoń afrykański: utrzymuje mozaikę sawanny/lasu. Gatunek dominujący (np. trawa) ≠ gatunek kluczowy — dominuje biomasą ale jego rola jest proporcjonalna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ekosystem, question_type: 'single',
    question_text: 'Na rysunku przedstawiono schematyczny przekrój przez ekosystem leśny z zaznaczonymi warstwami roślinności. Która sekwencja od dołu ku górze POPRAWNIE opisuje pionowe uwarstwianie lasu liściastego?',
    options: [
      { id: 'A', text: 'Warstwa mszysta (briofit i porosty) → warstwa zielna (trawy, paprocie, byliny) → warstwa krzewów (podszyt) → warstwa niskich drzew (podrost) → warstwa koron drzew (drzewostan)', is_correct: true },
      { id: 'B', text: 'Warstwa koron drzew → warstwa krzewów → warstwa zielna → warstwa mszysta — uwarstwianie opisuje się zawsze od góry ku dołu, zgodnie z kierunkiem przepływu energii słonecznej', is_correct: false },
      { id: 'C', text: 'W lesie liściastym nie ma pionowego uwarstwiania; wszystkie gatunki roślin zajmują tę samą warstwę (0,5–2 m) i żaden gatunek nie toleruje warunków panujących w koronach drzew', is_correct: false },
      { id: 'D', text: 'Warstwa zielna → warstwa mszysta → warstwa krzewów → warstwa koron drzew; warstwa mszysta zawsze leży powyżej warstwy zielnej gdyż mszaki są wyżej ewolucyjnie od roślin naczyniowych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Pionowe uwarstwianie (stratyfikacja) lasu liściastego (dąbrowa, grąd, buczyna): od dołu: (1) WARSTWA MSZYSTA (do 0,1 m): mchy (Polytrichum, Pleurozium), porosty, wątrobowce; cień i wilgotność; (2) WARSTWA ZIELNA (0,1–1 m): paprocie (Dryopteris), trawy (Poa nemoralis), byliny (Anemone nemorosa, Oxalis acetosella, Asarum europaeum); (3) WARSTWA KRZEWÓW / PODSZYT (1–5 m): leszczyna (Corylus avellana), bez czarny (Sambucus nigra), trzmielina (Euonymus), Rubus; (4) WARSTWA PODROSTU (5–10 m): młode drzewa, wiąz, grab, dereń; (5) DRZEWOSTAN (10–40 m): dąb (Quercus robur), buk (Fagus sylvatica), lipa (Tilia cordata), grab (Carpinus betulus). Uwarstwianie dotyczy też fauny: ryjówka (ściółka) → mysz leśna (runo) → kos (krzewy) → dzięcioł (drzewostan).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ekosystem, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnice między ekosystemami lądowymi a wodnymi? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'W ekosystemach wodnych woda nie jest czynnikiem limitującym (jak na lądzie), natomiast limitować mogą: światło (głębokość strefy fotycznej), zawartość O₂, temperatura oraz stężenie biogenów (N, P) — to one wyznaczają produktywność ekosystemu wodnego', is_correct: true },
      { id: 'B', text: 'Producenci w ekosystemach wodnych to głównie fitoplankton (jednokomórkowe glony i sinice) oraz makroalgi; ich biomasa jest często mniejsza niż biomasa konsumentów (odwrócona piramida biomasy), ale roczna produkcja (obieg) jest wysoka ze względu na szybki obrót komórek', is_correct: true },
      { id: 'C', text: 'Ekosystemy wodne charakteryzują się wyższą biodywersyfikacją gatunkową niż lądowe na każdym poziomie taksonomicznym; ocean jest siedliskiem każdego typu (każdej gromady) organizmów wielokomórkowych opisanych przez naukę', is_correct: false },
      { id: 'D', text: 'Strefa litoralna (przybrzeżna) jeziora jest bardziej produktywna niż strefa pelaginalna (otwarta woda), ponieważ ma dostęp do substancji biogennych z sedymentu dna oraz pełne nasłonecznienie — obydwa warunki jednocześnie', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) czynniki limitujące w wodzie: prawo minimum Liebiga; w wodzie słodkiej — fosfor (P) najczęściej limituje (eutrofizacja przez spływ nawozów P → zakwit sinic); w morzu — azot lub żelazo (HNLC strefy: High Nutrient Low Chlorophyll → Fe limitacja); głębokość strefy fotycznej: 1% światła powierzchniowego = dolna granica fotosyntezy (~ 200 m w czystym oceanie); (B) paradoks planktonu: fitoplankton szybki obrót biomasy (doubling time: godziny–dni); dlatego mimo mniejszej biomasy w danym momencie, roczna produkcja jest ogromna; (C) fałsz: glony lądowe (np. Trentepohlia, kserofity) są wyjątkiem; bioróżnorodność nie jest jednoznacznie wyższa w wodzie; lasy tropikalne mają wyższą różnorodność naczyniowych niż oceany; (D) litoral: płytka woda → dno dostępne dla korzeni roślin naczyniowych (makrofity), pełne nasłonecznienie + detrytus z lądu + regeneracja biogenów z osadów → najwyższa produkcja pierwotna w jeziorze; pelagial: ograniczony przez miksję warstw i dostatek biogenów.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── ŁAŃCUCHY I SIECI POKARMOWE (4) ───────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.lancuchy, question_type: 'single',
    question_text: 'Schemat przedstawia uproszczoną sieć pokarmową łąki: trawa → konik polny → żaba → bocian; trawa → mysz → lis; mysz → kania. Który organizm zajmuje najwyższy poziom troficzny i dlaczego?',
    options: [
      { id: 'A', text: 'Bocian i kania — obydwa są konsumentami III rzędu (zajmują 4. poziom troficzny: producent→ herbiwor→ karniwor→ top predator); w tej sieci nie ma organizmów na wyższym poziomie troficznym', is_correct: true },
      { id: 'B', text: 'Lis — jako jedyny drapieżnik w sieci, lis automatycznie zajmuje najwyższy poziom troficzny we wszystkich łańcuchach, w których uczestniczy; bocian i kania są niżej ponieważ żywią się mniejszymi zwierzętami', is_correct: false },
      { id: 'C', text: 'Trawa — producenci zajmują najwyższy poziom troficzny, ponieważ to od nich pochodzi cała energia ekosystemu; bez producentów konsumenci nie mogliby istnieć', is_correct: false },
      { id: 'D', text: 'Wszystkie organizmy w sieci pokarmowej zajmują ten sam poziom troficzny, ponieważ tworzą sieć wzajemnych powiązań; pojęcie "poziom troficzny" dotyczy tylko prostych łańcuchów pokarmowych, nie sieci', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Poziomy troficzne w podanej sieci: POZIOM 1 (producenci): trawa; POZIOM 2 (konsumenci I rzędu, herbiwory): konik polny, mysz; POZIOM 3 (konsumenci II rzędu, karniwory I): żaba, lis, kania (mysz jest na poziomie 2 → kania na 3); POZIOM 4 (konsumenci III rzędu): bocian (zjada żabę, która zjada konika, który zjada trawę → 4. poziom). Kania w tej sieci: trawa→mysz→kania = 3. poziom. Bocian: trawa→konik→żaba→bocian = 4. poziom. W złożonych sieciach pokarmowych jeden gatunek może zajmować RÓŻNE poziomy troficzne zależnie od łańcucha (np. lis je myszy = poziom 3, ale może jeść koniki bezpośrednio = poziom 3 inaczej). Dlatego pojęcie "poziomu troficznego" w sieciach jest uśredniane lub opisuje zakres.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lancuchy, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących sieci i łańcuchów pokarmowych:',
    options: [
      { id: 'A', text: 'Kaskada troficzna (trophic cascade) to zjawisko, w którym usunięcie lub zmniejszenie populacji szczytowego drapieżnika powoduje wzrost liczebności jego ofiar, co z kolei prowadzi do nadmiernego spasania roślinności przez roślinożerców — efekty kaskadowo rozchodzą się w dół sieci pokarmowej.', is_correct: true },
      { id: 'B', text: 'W łańcuchu spasania (grazing chain) energia przepływa od materii nieożywionej (detrytus, martwa materia organiczna) do organizmów żywych; łańcuch detrytusowy (detritus chain) zaczyna się od żywych roślin zjadanych przez roślinożerców.', is_correct: false },
      { id: 'C', text: 'Omniwory (wszystkożercy), takie jak człowiek, dzik czy niedźwiedź, mogą zajmować różne poziomy troficzne jednocześnie — zjadając rośliny (poziom 2) i mięso drapieżników (poziom 4) w tej samej diecie — co utrudnia przypisanie im jednego poziomu troficznego.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: kaskada troficzna (top-down regulation): klasyczny przykład — wilki w Yellowstone (przywrócone 1995): wilki → redukcja jeleni wapiti → regeneracja wierzb/topolc → bobry → zmiana koryt rzecznych (trophic cascade landscape level). Odwrotna kaskada: usunięcie rekina szczytowego → wzrost liczby tuńczyków → zmniejszenie małych ryb → wzrost zooplanktonu → zmniejszenie fitoplanktonu (cascade przez 4 poziomy). B — Fałsz: odwrócone definicje. Łańcuch SPASANIA (grazing chain = pasterski): żywe rośliny → roślinożercy → drapieżniki; łańcuch DETRYTUSOWY (saprotroficzny): martwa materia organiczna → detrytusożercy (dżdżownice, skoczogonki) → destruenci (grzyby, bakterie). C — Prawda: omniwory mają tzw. "omnivore trophic level" obliczany jako średnia ważona poziomów pokarmów; np. człowiek: ~2,2–2,5 (mix roślin i mięsa); niedźwiedź: 2,0 (głównie jagody) lub 4,5 (gdy je łososia); dlatego w modelach sieciowych (np. Ecopath) używa się frakcji diety.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lancuchy, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują przepływ energii przez sieć pokarmową? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Sprawność ekologiczna transferu energii między kolejnymi poziomami troficznymi wynosi zazwyczaj 5–20%; oznacza to, że z 1000 kJ pobranej przez roślinożercę tylko 50–200 kJ zostaje wbudowane w biomasę ciała i jest dostępne dla drapieżnika', is_correct: true },
      { id: 'B', text: 'Większość energii asymilowanej przez organizm jest tracona jako ciepło podczas oddychania (respiracji) — stąd w każdym ekosystemie łańcuchy pokarmowe nie mogą mieć więcej niż 4–5 ogniw, bo na wyższych poziomach energia jest zbyt mała, by utrzymać populację', is_correct: true },
      { id: 'C', text: 'Energia w ekosystemie krąży w zamkniętym obiegu — tak jak materia (węgiel, azot, fosfor) — i może być wielokrotnie wykorzystywana przez różne organizmy; nie ma strat energii z ekosystemu do otoczenia', is_correct: false },
      { id: 'D', text: 'Organizmy stałocieplne (endotermiczne) — ssaki i ptaki — mają niższą sprawność ekologiczną niż zmiennocieplne (ektotermiczne) — gady, płazy, ryby — ponieważ więcej energii wydatkują na utrzymanie stałej temperatury ciała', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) sprawność Lindermana (Lindeman 1942, "trophic-dynamic aspect of ecology"): 10% reguła (uproszczenie); realnie 5–20%; straty energii: niestrawialne resztki (egesta) → wydalanie → oddychanie (respiracja) → ruchy/termoregulacja; tylko netto przyrost biomasy (produkcja wtórna netto) przechodzi na wyższy poziom. (B) granica 4–5 ogniw: przy sprawności 10%, po 5 poziomach: 10⁻⁵ pierwotnej produkcji → za mało na utrzymanie populacji; WYJĄTEK: pasożyty mogą tworzyć dodatkowe poziomy; ekosystemy morskie czasem mają 6 ogniw (fitoplankton→zooplankton→sardyny→tuńczyk→rekin→wielka biała rekinka). (C) fałsz: energia przepływa jednostronnie (I i II zasada termodynamiki) — nie krąży jak materia; materia (C, N, P, S) krąży w cyklach biogeochemicznych, energia jest tracona jako ciepło i nie może wrócić; ekosystem stale wymaga dopływu energii słonecznej (lub chemicznej w ekosystemach głębinowych). (D) prawda: ssaki i ptaki: 1–2% sprawności (70–80% energii na termoregulację); gady: 10–20% (brak termoregulacji energetycznej); dlatego biomasa drapieżnych gadów może być wielokrotnie większa niż drapieżnych ssaków przy tej samej bazie pokarmowej (np. węże vs. łasice).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lancuchy, question_type: 'single',
    question_text: 'W eksperymencie usunięto wszystkie drapieżniki z pewnego obszaru leśnego. Który zestaw zmian NAJLEPIEJ opisuje przewidywane konsekwencje dla ekosystemu po kilku latach?',
    options: [
      { id: 'A', text: 'Wzrost liczebności roślinożerców → nadmierne spasanie roślinności → zmniejszenie różnorodności roślin → zmiana struktury ekosystemu; ponadto wzrost chorób zakaźnych wśród zagęszczonych populacji roślinożerców (efekt gęstościowy)', is_correct: true },
      { id: 'B', text: 'Zmniejszenie liczebności roślinożerców → regeneracja roślinności → wzrost różnorodności biologicznej → stabilizacja ekosystemu; usunięcie drapieżników zawsze poprawia stan ekosystemu przez eliminację stresu u ofiar', is_correct: false },
      { id: 'C', text: 'Brak zmian — roślinożercy sami regulują swoją liczebność przez mechanizmy behawioralne (ograniczenie rozrodu); drapieżniki nie mają istotnego wpływu na dynamikę populacji roślinożerców', is_correct: false },
      { id: 'D', text: 'Wzrost liczebności drapieżników wtórnych (mesodrapieżników) — ponieważ gdy top predator znika, niższe drapieżniki wypełniają jego niszę i regulują roślinożerców tak samo efektywnie; nie obserwuje się żadnych zmian na poziomie roślinności', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Usunięcie drapieżników → efekty top-down: (1) wzrost liczebności roślinożerców (jelenie, zające, gryzonie): bez predacji powyżej pojemności środowiska (K); (2) nadmierne spasanie (overgrazing): erozja gleby, zmiana składu gatunkowego roślin (preferowane gatunki zjedzone → dominacja gatunków niepalatalnych); (3) spadek różnorodności roślin → kaskadowy spadek różnorodności owadów, ptaków gniazdujących itp.; (4) zagęszczenie populacji → epidemie: choroby zakaźne (wścieklizna, świerzb, pryszczyca) szybciej się szerzą; (5) mesopredator release: coyote, lis, szopy — wzrastają po eliminacji wilka/puma → dodatkowa presja na ptaki gniazdujące i drobne ssaki (efekt odwrotny niż zakładano). Klasyczny przykład: eliminacja wilków z Wyoming 1920-90 → eksplozja jeleni wapiti → zdegradowane doliny rzeczne. Przywrócenie wilków 1995 (Yellowstone) naprawiło ekosystem.',
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
  console.log(`Seeding batch 1 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
