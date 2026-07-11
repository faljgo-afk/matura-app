// Seed: mock_questions — Ekologia (18 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  ekosys: 'd3fbbe32-335b-4893-979c-9ca4962494e3',
  lancuch:'d012abdd-8747-4b9d-bffd-fa4928e8b48c',
  energia:'a6a5a9e9-026e-4ef4-9857-5ef0f07cdcff',
  obieg:  '8de030ed-9c47-429a-b69a-6356cbbf57fb',
  popul:  'ddb988fb-1e19-498c-9c4c-f72bb5779c9c',
  zalezn: '2fbd2cbd-e4a3-428c-af6d-38c4a2e71080',
  sukcesj:'63b1ca74-4c2d-4c15-95d6-3b322d07d1b9',
  biomy:  '0ede378a-6be2-442c-a02b-b8c70b3630c7',
  ochr:   '1ec41dca-9d4b-4d3f-9bb0-7890b8d6354a',
}

const questions = [
  // ─── Ekosystem — struktura ───
  {
    subtopic: 'Ekologia — Ekosystem — struktura',
    subtopic_id: S.ekosys,
    question_type: 'single',
    question_text: 'Ekosystem składa się z biotopu i biocenozy. Które zestawienie POPRAWNIE opisuje te komponenty i poziomy organizacji ekologicznej?',
    options: [
      { id: 'A', text: 'Biotop: nieożywione (abiotyczne) składniki środowiska (klimat, gleba, woda, światło, temperatura); biocenoza: zespół wszystkich organizmów (producentów, konsumentów, destruentów) w tym samym miejscu; poziomy: osobnik → populacja → biocenoza → ekosystem → biom → biosfera', is_correct: true },
      { id: 'B', text: 'Biocenoza to nieożywiona część ekosystemu (skały, woda, gleba); biotop to zespół organizmów; producenci należą do biotopu, a konsumenci do biocenozy', is_correct: false },
      { id: 'C', text: 'Ekosystem składa się wyłącznie z biotopu — biocenoza jest tylko tymczasowym zjawiskiem niemającym wpływu na przepływ energii; destruenci nie wchodzą w skład ekosystemu', is_correct: false },
      { id: 'D', text: 'Biosfera jest mniejszą jednostką od ekosystemu — jeden biom zawiera wiele biosfer; populacja jest większa od biocenozy i składa się z wielu ekosystemów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ekosystem (Tansley, 1935): podstawowa jednostka funkcjonalna ekologii; obejmuje: (1) Biotop (środowisko abiotyczne): czynniki fizyczne i chemiczne: temperatura (T), nasłonecznienie (PAR), opady, wilgotność, pH gleby, skład mineralny, wiatr, zasolenie; czynniki periodyczne (zmienne sezonowo). (2) Biocenoza (środowisko biotyczne): fitocenoza (rośliny) + zoocenoza (zwierzęta) + mykocenoza (grzyby) + mikrobiocenoza (mikroorganizmy); rola: producenci (autotrofy fotosyntetyczne lub chemosyntetyczne), konsumenci I°/II°/III° (heterotrofy), destruenci/dekompozerzy (rozkładają martwą materię → mineralizacja). (3) Nisze ekologiczne: hipervolume Hutchinsona — wielowymiarowa przestrzeń czynników abiotycznych, w której gatunek może przeżyć i rozmnażać się; nisza fundamentalna (potencjalna) vs realizowana (faktyczna, węższa przez konkurencję). Poziomy organizacji: komórka → tkanka → organ → organizm (osobnik) → populacja (osobniki tego samego gatunku na danym terenie) → biocenoza (wszystkie populacje ekosystemu) → ekosystem (biocenoza + biotop) → biom (typ ekosystemu o podobnym klimacie i roślinności) → biosfera (wszystkie ekosystemy Ziemi).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ekologia — Ekosystem — struktura',
    subtopic_id: S.ekosys,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących struktury troficznej ekosystemu:\nA. Producenci (autotrofy) zajmują zawsze I poziom troficzny i stanowią podstawę każdego łańcucha pokarmowego — bez producentów nie mogą istnieć żadne wyższe poziomy troficzne w ekosystemie lądowym ani wodnym.\nB. Destruenci (dekompozerzy, głównie grzyby i bakterie) są organizmami heterotroficznymi rozkładającymi martwą materię organiczną (detrytus) do związków nieorganicznych — ich działalność zamyka obieg materii, umożliwiając producentom ponowne pobieranie składników mineralnych.\nC. Konsumenci II rzędu (drapieżniki II rzędu) to organizmy zjadające wyłącznie producentów — są utożsamiane z roślinożercami (herbivores) i reprezentują II poziom troficzny.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: producenci = I poziom troficzny; autotrofy: fotoautotrofy (rośliny, glony, sinice → fotosynteza) + chemoautotrofy (bakterie nitryfikacyjne, siarkowe → chemosynter; podstawa ekosystemów geotermalnych i hydrothermalnych bez słońca). Wyjątek: łańcuchy detrytusowe zaczynają się od martwej materii (nie żywych producentów), ale materiał ten pochodzi od producentów. B — PRAWDA: dekompozerzy: grzyby (celulozy, ligniny → białe i brunatne gnicie drewna) + bakterie (proteobakterie, aktinomycety, Clostridium); etapy rozkładu: fragmentacja (fauna gleby: dżdżownice, krocionogi) → katabolizm enzymatyczny przez mikroby → mineralizacja: org.C → CO₂; org.N → NH₄⁺ → NO₃⁻ (nitryfikacja); org.P → PO₄³⁻ → zwrot do gleby. C — FAŁSZ: konsumenci II rzędu (C2) zjadają konsumentów I rzędu (C1 = roślinożercy, II poziom troficzny) → C2 = drapieżniki zjadające roślinożerców = III poziom troficzny. Konsumenci I rzędu (C1) to roślinożercy (herbivores): zjadają producentów = II poziom troficzny. Pример: trawa (P, I) → zając (C1, II) → lis (C2, III) → orzeł (C3, IV).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Łańcuchy i sieci pokarmowe ───
  {
    subtopic: 'Ekologia — Łańcuchy i sieci pokarmowe',
    subtopic_id: S.lancuch,
    question_type: 'single',
    question_text: 'Na podstawie poniższego łańcucha pokarmowego: trawa → mysz → lis → orzeł. Które stwierdzenie POPRAWNIE opisuje zależności w tym łańcuchu?',
    options: [
      { id: 'A', text: 'Trawa = producent (I poziom troficzny); mysz = konsument I rzędu/roślinożerca (II poziom); lis = konsument II rzędu/mięsożerca (III poziom); orzeł = konsument III rzędu (IV poziom); energia maleje z każdym poziomem (~10% przekazywane)', is_correct: true },
      { id: 'B', text: 'Orzeł jest producentem ponieważ stoi najwyżej w łańcuchu; trawa jest konsumentem IV rzędu; mysz zajmuje I poziom troficzny jako pierwsze zwierzę', is_correct: false },
      { id: 'C', text: 'Wszystkie ogniwa łańcucha są równorzędne — energia przepływa w obu kierunkach (od orła do trawy i z powrotem); żadne z ogniw nie jest producentem', is_correct: false },
      { id: 'D', text: 'Mysz jest destruentem, bo rozkłada trawę do form nieorganicznych; lis jest producentem wtórnym (fotosyntetyzuje w nocy); orzeł to konsument I rzędu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Analiza łańcucha pokarmowego: trawa (Producent, P, I poziom troficzny): autotroficzny fotosyntezator; węgiel organiczny z CO₂ + H₂O + światło; biomasa roślinna = zasoby energetyczne ekosystemu. Mysz (Konsument I rzędu, C1, II poziom): fitofag/herbivore; zjada trawę; absorpcja energii z trawy ≈10% biomasy trawy. Lis (C2, III poziom): carnivore/drapieżnik I rzędu (relative to C1); zjada myszy; absorpcja ≈10% biomasy myszy. Orzeł (C3, IV poziom): superdrapieżnik/top predator; zjada lisy; absorpcja ≈10% biomasy lisów. Reguła 10%: na każdym poziomie ok. 90% energii tracone jako ciepło (metabolizm, oddychanie, ruch) + niedostępna biomasa → efektywność ekologiczna = ~10% (zakres: 5–20%). Skutek: łańcuchy rzadko mają >4–5 ogniw (za mało energii dociera do wyższych poziomów). Biomasa i liczebność maleje od dołu: piramidy ekologiczne (biomasy, liczebności, energii) zazwyczaj mają kształt piramidy prawidłowej.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ekologia — Łańcuchy i sieci pokarmowe',
    subtopic_id: S.lancuch,
    question_type: 'single',
    question_text: 'Sieć pokarmowa jest bardziej realistycznym modelem zależności troficznych niż łańcuch pokarmowy. Dlaczego usunięcie jednego gatunku z sieci pokarmowej może mieć kaskadowe skutki dla całego ekosystemu?',
    options: [
      { id: 'A', text: 'Gatunki kluczowe (keystone species) mają nieproporcjonalnie duży wpływ na strukturę biocenozy względem swojej biomasy — ich usunięcie (np. wilka jako drapieżnika szczytowego) wyzwala kaskadę troficzną: ↑herbivory → ↓roślinność → ↓inne gatunki', is_correct: true },
      { id: 'B', text: 'Usunięcie jednego gatunku nie wpływa na inne gatunki w sieci — każdy gatunek jest całkowicie niezależny i ma własne izolowane zasoby; ekosystem jest sumą niezwiązanych ze sobą organizmów', is_correct: false },
      { id: 'C', text: 'Kaskada troficzna zachodzi wyłącznie w ekosystemach morskich; w ekosystemach lądowych usunięcie dowolnego gatunku jest bez znaczenia dla pozostałych gatunków sieci pokarmowej', is_correct: false },
      { id: 'D', text: 'W sieci pokarmowej energia przepływa odwrotnie — od drapieżników szczytowych do producentów (trophic cascade = energia idzie z góry w dół); usunięcie producenta nie wpływa na drapieżniki', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Kaskada troficzna (trophic cascade): efekt pośredni usunięcia lub dodania drapieżnika na poziomy niższe. Klasyczny przykład: Yellowstone (wilk Canis lupus): (1) 1926: wilki wytępione → ↑populacja jeleni (elk) → nadmierne zgryzanie roślinności rzecznej (wierzby, topole, osiki) → ↓korony drzew przy rzekach → ↓bobry → mniejsze stawy → mniejsza różnorodność siedlisk. (2) 1995: reintrodukcja 14 wilków → ↓jelenie (bezpośrednio) + zmiana zachowania jeleni (unikanie dolin) → regeneracja roślinności → ↑bobry → ↑stawy i mokradła → ↑ptaki, wydry, żaby → zmiana biegu rzek (ecosystem engineering). Gatunek kluczowy (keystone): rozgwiazda Pisaster ochraceus w strefie pływowej (Paine 1966) — bez niej małże zdominowały i ↓bioróżnorodność 50–75%. Inne przykłady: wydry morskie (kontrolują jeże morskie → ochrana wodorostów kelp); wilk szary; rekiny szczytowe. Reguła: nawet 5% populacji gatunku kluczowego może kontrolować strukturę ekosystemu.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Przepływ energii ───
  {
    subtopic: 'Ekologia — Przepływ energii',
    subtopic_id: S.energia,
    question_type: 'single',
    question_text: 'Produkcja pierwotna brutto (GPP) różni się od netto (NPP). Które zestawienie POPRAWNIE opisuje te pojęcia i ich znaczenie ekologiczne?',
    options: [
      { id: 'A', text: 'GPP (Gross Primary Production): całkowita energia utrwalona przez producentów w fotosyntezie; NPP (Net Primary Production) = GPP − oddychanie własne producentów (Ra) — to energia dostępna dla konsumentów; NPP = biomasa przyrastająca producentów', is_correct: true },
      { id: 'B', text: 'NPP jest zawsze większa od GPP — producenci wytwarzają więcej energii przez oddychanie niż przez fotosyntezę; GPP = NPP + energia utrwalona przez konsumentów', is_correct: false },
      { id: 'C', text: 'GPP i NPP są identyczne — producenci nie oddychają, więc cała energia z fotosyntezy trafia do konsumentów bez strat; Ra = 0 dla roślin', is_correct: false },
      { id: 'D', text: 'NPP mierzy się wyłącznie w ekosystemach morskich; w ekosystemach lądowych stosuje się wyłącznie GPP; producenci nie zużywają energii na własny metabolizm', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Produkcja pierwotna: (1) GPP (Gross Primary Production): całkowita fotosynteza brutto; całkowita ilość energii chemicznej związanej przez autotrofy z CO₂ w jednostce czasu i powierzchni [g C/m²/rok lub kJ/m²/rok]; GPP = NPP + Ra. (2) Oddychanie autotroficzne (Ra): energia zużyta przez samych producentów na własny metabolizm (~20–60% GPP w zależności od ekosystemu; lasy tropikalne: Ra ≈ 50% GPP). (3) NPP = GPP − Ra: "nettoprodukcja" = energia dostępna dla kolejnych poziomów troficznych (roślinożerców, destruentów); najwyższe NPP: lasy tropikalne (~2200 g C/m²/rok), ujścia rzek, bagna; najniższe: pustynia (<50), open ocean (~100). (4) NEP (Net Ecosystem Production) = NPP − heterotrophic respiration (Rh) = bilans CO₂ ekosystemu; NEP > 0 = pochłanianie CO₂ (sink); NEP < 0 = emisja (source). Efektywność troficzna ≈ NPP konsumenta/NPP producenta ≈ 10%. Przykład: jeśli łąka ma NPP = 500 g C/m²/rok, to roślinożercy mogą przyswoić max ~50 g C/m²/rok, drapieżniki ~5 g C/m²/rok.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ekologia — Przepływ energii',
    subtopic_id: S.energia,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących piramid ekologicznych:\nA. Piramida energii zawsze ma kształt prawidłowej piramidy (szeroka podstawa = producenci, wąski szczyt = drapieżniki) — w przeciwieństwie do piramid biomasy i liczebności, które mogą być odwrócone.\nB. Odwrócona piramida biomasy może wystąpić w ekosystemach morskich, gdzie fitoplankton (mała biomasa, szybko rosnący) może utrzymywać wyższą biomasę zooplanktonu — możliwe dzięki bardzo krótkim czasom generacji fitoplanktonu.\nC. Piramida liczebności jest zawsze prawidłowa (producenci > roślinożercy > drapieżniki) — odwrócona piramida liczebności nigdy nie może wystąpić w żadnym ekosystemie naturalnym.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, P', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: piramida energii ZAWSZE prawidłowa — II prawo termodynamiki gwarantuje utratę energii na każdym poziomie troficznym; niemożliwy kształt odwrócony (naruszałoby zasadę zachowania energii). B — PRAWDA: odwrócona piramida biomasy (w ekosystemach morskich): fitoplankton: mała chwilowa biomasa (~4 g C/m²), ale turnover rate wysoki (podwojenie biomasy co 1–2 dni!) → produkuje dużo biomasy rocznie; zooplankton: większa chwilowa biomasa (skumulowana) → biomasa zooplanktonu > fitoplanktonu w danej chwili. To jak fabrycznie vs magazynowo: fabryka (fitoplankton) ma małe zapasy ale wysoki obrót. C — FAŁSZ: piramida liczebności MOŻE być odwrócona: np. jeden stary dąb (producent, 1 osobnik) utrzymuje tysiące owadów (konsumenci I: liście, kora, korzenie), które z kolei utrzymują setki drapieżców. Kształt: 1 (dąb) > 10 000 (owady) > 1000 (ptaki) — tu na poziomie P jest 1, na C1 jest 10 000 = piramida odwrócona na dole. Lub ekosystem pasożytniczy: 1 żywiciel (ryba) → 100 pasożytów → 1000 hiperparasoids.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Obieg materii ───
  {
    subtopic: 'Ekologia — Obieg materii',
    subtopic_id: S.obieg,
    question_type: 'single',
    question_text: 'Obieg azotu w ekosystemie obejmuje kilka procesów mikrobiologicznych. Wskaż prawidłową kolejność transformacji azotu od N₂ atmosferycznego do formy dostępnej dla roślin i z powrotem.',
    options: [
      { id: 'A', text: 'Wiązanie azotu (N₂ → NH₃/NH₄⁺, bakterie: Rhizobium, Azotobacter, sinice) → nitryfikacja (NH₄⁺ → NO₂⁻ → NO₃⁻, Nitrosomonas, Nitrobacter) → pobieranie NO₃⁻ i NH₄⁺ przez rośliny → białka → amoniakalizacja (destruenci: NH₄⁺) → denitryfikacja (NO₃⁻ → N₂, Pseudomonas, Paracoccus) → powrót N₂ do atmosfery', is_correct: true },
      { id: 'B', text: 'Obieg azotu nie wymaga bakterii — rośliny bezpośrednio pobierają N₂ z atmosfery przez aparaty szparkowe; azot jest przekształcany w glebę wyłącznie przez deszcz (wymywanie)', is_correct: false },
      { id: 'C', text: 'Nitryfikacja to proces, w którym NO₃⁻ jest redukowane do N₂ przez rośliny w korzeniach; denitryfikacja to utlenianie NH₃ do NO₃⁻ przez algi; wiązanie N₂ odbywa się wyłącznie w atmosferze przez wyładowania elektryczne', is_correct: false },
      { id: 'D', text: 'Azot krąży wyłącznie między roślinami i zwierzętami bez udziału mikroorganizmów — bakterie glebowe nie uczestniczą w obiegu azotu; rośliny pobierają azot wyłącznie w formie cząsteczkowej N₂', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Obieg azotu (cykl N): N = 78% atmosfery (N₂, triply bonded, niedostępny dla eukariontów). (1) Wiązanie biologiczne N₂ (BNF): nitrogenaza (Fe-Mo kofaktor, ATP-zależna, wrażliwa na O₂); Rhizobium (brodawki korzeniowe roślin strączkowych = symbioza), Frankia (olcha), sinice (Anabaena = wolnożyjące + w symbozie z Azolla, paprotnik), Azotobacter/Clostridium (wolnożyjące); N₂ + 8H⁺ + 16 ATP → 2NH₃ + H₂. Wyładowania: ok. 10% wiązania. Haber-Bosch: przemysłowe NH₃ = ~50% N dla rolnictwa. (2) Mineralizacja/amonifikacja: białka → aminokwasy → NH₄⁺ (bakterie i grzyby glebowe na det. organicznym). (3) Nitryfikacja: NH₄⁺ → NO₂⁻ (Nitrosomonas/Nitrosospira) → NO₃⁻ (Nitrobacter/Nitrospira); tlenowa chemosyneza; NO₃⁻ = główna forma N dla roślin. (4) Asymilacja: korzenie pobierają NO₃⁻ (redukcja azotanowa → NH₄⁺ → glutamina) + NH₄⁺. (5) Denitryfikacja: NO₃⁻ → NO₂⁻ → N₂O → N₂ (Pseudomonas denitrificans, Paracoccus denitrificans); beztlenowa, gleby mokre; ubytek N z ekosystemu. Anammox (anaerobic ammonium oxidation): NH₄⁺ + NO₂⁻ → N₂ + H₂O; beztlenowe środowiska.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ekologia — Obieg materii',
    subtopic_id: S.obieg,
    question_type: 'single',
    question_text: 'Efekt cieplarniany jest wzmacniany przez działalność człowieka. Które zestawienie POPRAWNIE opisuje mechanizm naturalnego efektu cieplarnianego i jego wzmocnienie antropogeniczne?',
    options: [
      { id: 'A', text: 'Naturalny: gazy cieplarniane (CO₂, H₂O, CH₄, N₂O, O₃) absorbują promieniowanie IR emitowane przez Ziemię i reemitują je ku powierzchni → T śr. Ziemi = +15°C (bez: −18°C). Antropogeniczny: spalanie paliw, deforestacja → ↑CO₂; hodowla, wysypiska → ↑CH₄; nawozy → ↑N₂O → wzmocnienie efektu', is_correct: true },
      { id: 'B', text: 'Efekt cieplarniany jest zjawiskiem wyłącznie antropogenicznym — bez działalności człowieka nie istnieje; naturalne gazy atmosferyczne nie absorbują promieniowania IR; Ziemia bez gazów cieplarnianych miałaby temperaturę +15°C', is_correct: false },
      { id: 'C', text: 'CO₂ chłodzi atmosferę przez odbijanie promieniowania słonecznego — jego wzrost spowalnia ocieplenie klimatu; CH₄ jest neutralny klimatycznie; deforestacja obniża temperaturę przez zmniejszenie transpiracji', is_correct: false },
      { id: 'D', text: 'Głównym gazem cieplarnianym odpowiedzialnym za ocieplenie klimatu jest tlen (O₂) — jego wzrost od rewolucji przemysłowej jest przyczyną zmian klimatycznych; CO₂ i CH₄ mają marginalne znaczenie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Efekt cieplarniany (greenhouse effect): (1) Mechanizm naturalny: promieniowanie krótkofalowe słoneczne (vis + UV) → przechodzi przez atmosferę → pochłaniane przez powierzchnię Ziemi → reemisja długofalowego promieniowania IR; gazy cieplarniane (GHG): absorbują IR (wibracje cząsteczek wieloatomowych: CO₂, H₂O para, CH₄, N₂O, O₃, freony) → reemisja we wszystkich kierunkach, w tym z powrotem ku Ziemi → efekt "koca" → T śr. = +15°C (bez GHG = −18°C, różnica 33°C). N₂ i O₂ = dwuatomowe, nie absorbują IR. (2) Wzmocnienie antropogeniczne: CO₂: od 1750: 280 → 421 ppm (2023); spalanie węgla/ropy/gazu + deforestacja (lasy = pochłaniacze CO₂); GWP100 = 1 (jednostka referencyjna). CH₄: 722 → 1922 ppb; hodowla bydła (metanogeneza w żwaczu), wysypiska, pola ryżowe, wycieki gazu; GWP100 = 28–36 (dużo silniejszy niż CO₂, ale krótszy T½ ~12 lat). N₂O: nawozy azotowe, hodowla; GWP100 = 265; niszczy ozon. Skutki: ↑T (IPCC AR6: +1,1°C od 1850–1900 do dziś); podniesienie poziomu mórz; ekstrema pogodowe; zakwaszenie oceanów (CO₂ + H₂O → H₂CO₃).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Populacja — cechy i dynamika ───
  {
    subtopic: 'Ekologia — Populacja — cechy i dynamika',
    subtopic_id: S.popul,
    question_type: 'single',
    question_text: 'Wzrost logistyczny populacji różni się od wykładniczego. Które zestawienie POPRAWNIE opisuje oba modele i ich parametry?',
    options: [
      { id: 'A', text: 'Wzrost wykładniczy (J-shaped): dN/dt = rN; nieograniczony, brak pojemności środowiska; wzrost logistyczny (S-shaped, sigmoidal): dN/dt = rN(K−N)/K; K = pojemność środowiska (carrying capacity) — przy N→K wzrost zwalnia do 0; punkt przegięcia (max przyrost) przy N = K/2', is_correct: true },
      { id: 'B', text: 'Wzrost logistyczny jest zawsze szybszy od wykładniczego; K (pojemność środowiska) jest stała na poziomie 0 w obu modelach; krzywa logistyczna ma kształt litery J', is_correct: false },
      { id: 'C', text: 'W obu modelach populacja rośnie w nieskończoność; wzrost wykładniczy jest bardziej realistyczny biologicznie; przy wzroście logistycznym r (tempo wzrostu wewnętrznego) = 0 przez cały czas', is_correct: false },
      { id: 'D', text: 'Pojemność środowiska (K) wyznacza minimalną, a nie maksymalną liczebność populacji; przy N = K populacja rośnie najszybciej; N > K = populacja wymarła', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Modele wzrostu populacji: (1) Wzrost wykładniczy (geometryczny, J-shaped): dN/dt = rN; r = tempo wzrostu wewnętrznego (intrinsic rate of natural increase) = b − d (birth − death); zakłada: nieograniczone zasoby, brak drapieżników i chorób; realistyczny tylko przy niskiej gęstości lub kolonizacji nowych terenów. Nt = N₀·eʳᵗ. (2) Wzrost logistyczny (Verhulst-Pearl, S-shaped/sigmoidal): dN/dt = rN·(K−N)/K; (K−N)/K = "wolna przestrzeń" = hamowanie gęstościozależne; K = pojemność środowiska (carrying capacity): maks. trwała liczebność, którą może utrzymać środowisko (zasoby pokarmowe, przestrzeń, schronienia); mechanizm: ↑N → ↑konkurencja wewnątrzgatunkowa → ↓r (efektywne); przy N = K/2: max dN/dt (punkt pracy, optymalne poławianie ryb = MSY, maximum sustainable yield); przy N = K: dN/dt = 0 (równowaga); przy N > K (przeludnienie): dN/dt < 0 (śmiertelność > rodność). (3) Czynniki gęstościozależne (regulują przez pętlę sprzężenia): konkurencja, drapieżnictwo, choroby; czynniki gęstościoniezależne: mróz, susza, erupcja (nie reagują na gęstość).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ekologia — Populacja — cechy i dynamika',
    subtopic_id: S.popul,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących strategii życiowych organizmów (r vs K selekcja):\nA. Organizmy r-strategiczne (np. mysz, owad, chwast) cechuje: wysoka płodność, mała ciała, krótkie życie, mała opieka nad potomstwem, szybkie dojrzewanie — przystosowane do zmiennych, nieprzewidywalnych środowisk.\nB. Organizmy K-strategiczne (np. słoń, orzeł, sekwoja) cechuje: niska płodność, duże ciało, długie życie, duża opieka nad potomstwem, późne dojrzewanie — przystosowane do stabilnych, przewidywalnych środowisk bliskich pojemności K.\nC. Gatunek inwazyjny (np. szczur wędrowny, rak pręgowany) wykazuje wyłącznie cechy K-strategii — duże ciało, niska płodność, długie życie; sukces inwazji opiera się na powolnym, stabilnym wzroście populacji.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: r-strategiści: r = tempo wewn. przyrostu; "weeds and pests"; cechy: krótki czas generacji, mała ciała, wiele małych jaj/nasion/młodych, brak opieki, wysokie r, szybki wzrost wykładniczy gdy zasoby dostępne; adaptacja do disturbed habitats (po pożarze, w polach uprawnych). Przykłady: Drosophila (12 dni generacja), mysz polna, mniszek lekarski (wiele nasion z puchem), komary. B — PRAWDA: K-strategiści: K = pojemność środowiska; "climax species"; cechy: długie życie, duże ciało, mało potomstwa, duża opieka rodzicielska, konkurencyjność; stała liczebność bliska K; wrażliwe na zaburzenia (niskie r → wolna odbudowa populacji). Przykłady: słoń afrykański (ciąża 22 mies., 1 cielę), kondor, sekwoja (1000+ lat), człowiek. C — FAŁSZ: gatunki inwazyjne to typowi r-STRATEGIŚCI: wysoka płodność, szybkie dojrzewanie, tolerancja szerokiego spektrum warunków, brak naturalnych wrogów w nowym środowisku → eksplozja wykładnicza. Rak pręgowany (Orconectes limosus): do 200 jaj, dojrzałość w 1 roku, wytrzymały, wypiera raka szlachetnego. Szczur wędrowny (Rattus norvegicus): 5–6 miotów/rok, 8–12 młodych. Cechy inwazji: duża r + preadaptacja + brak wrogów = "ecological release".',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Zależności międzygatunkowe ───
  {
    subtopic: 'Ekologia — Zależności międzygatunkowe',
    subtopic_id: S.zalezn,
    question_type: 'single',
    question_text: 'Zależności międzygatunkowe można podzielić według wpływu na oba gatunki (+/−/0). Które zestawienie POPRAWNIE przyporządkowuje typy zależności?',
    options: [
      { id: 'A', text: 'Mutualizm (++): obaj zyskują (symbioza porostów, mikoryza, zapylanie); komensalizm (+0): jeden zyskuje, drugi bez zmiany (czapla na grzbiecie bydła); antagonizm (drapieżnictwo +−, pasożytnictwo +−, amensalizm 0−, konkurencja −−)', is_correct: true },
      { id: 'B', text: 'Komensalizm: oba gatunki tracą (−−); mutualizm: jeden zyskuje, drugi traci (+−); pasożytnictwo (++): oba zyskują; drapieżnictwo (00): bez wpływu na oba', is_correct: false },
      { id: 'C', text: 'Konkurencja (++): oba gatunki zyskują na wzajemnym współzawodnictwie; mutualizm (−−): oba tracą energię na utrzymanie symbozy; pasożytnictwo (00): neutralne', is_correct: false },
      { id: 'D', text: 'Drapieżnictwo to forma mutualizmu — drapieżnik zabijając zdobycz oczyszcza środowisko (zysk dla obu); pasożytnictwo (++) bo pasożyt zyskuje i gospodarz zyskuje przez selekcję odporności', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Klasyfikacja zależności międzygatunkowych wg wpływu (+/−/0): Mutualizm (++): obaj zyskują; obligatoryjny (niezbędny: mrówki akacjowe) vs fakultatywny; przykłady: porosty (grzyb + glony/sinice), mikoryza (grzyby + korzenie roślin: ↑P, ↑woda ↔ ↑glukoza), zapylanie (pszczoła + roślina), bakterie jelitowe (Bacteroidetes + człowiek), krab pustelnik + ukwiał. Komensalizm (+0): komensalik zyskuje, gospodarz obojętny; epifity (storczyki na drzewach), czapla bydlęca (zbiera owady spłoszone przez bydło). Protokooperacja (++, fakultatywna): bocian + orka (bocian łapie ryby wypłoszone). Antagonizmy: Drapieżnictwo (+−): drapieżnik (+), ofiara (−); reguluje populacje ofiar. Pasożytnictwo (+−): pasożyt (+), gospodarz (−); endopasożyty (tasiemiec), ektoparasożyty (kleszcz); pasożytnictwo lęgowe (kukułka). Amensalizm (0−): jeden gatunek traci, drugi bez zmiany; wydzieliny allelopatyczne (orzech włoski → Juglone hamuje inne rośliny). Konkurencja (−−): oba tracą zasoby; wewnątrzgatunkowa (silniejsza) vs międzygatunkowa → zasada wykluczenia Gausego (2 gatunki o identycznej niszy nie mogą współistnieć). Drapieżnictwo + pasożytnictwo: parazytoidyzm (np. osice pasożytnicze składają jaja w ciele ofiary → ona ginie).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ekologia — Zależności międzygatunkowe',
    subtopic_id: S.zalezn,
    question_type: 'single',
    question_text: 'Mikoryza jest jedną z najważniejszych symbioz na Ziemi. Które zestawienie POPRAWNIE opisuje typy mikoryzy i ich znaczenie dla ekosystemów?',
    options: [
      { id: 'A', text: 'Ektomikoryza: grzyby (Boletus, Amanita) oplatają korzenie z zewnątrz, tworząc płaszcz — nie wnikają do komórek; głównie drzewa liściaste i iglaste. Arbuskularna (AM/endomikoryza): grzyby (Glomus) wnikają DO komórek korzenia (arbuskule, pęcherzyki); >80% roślin lądowych; ↑pobieranie P i Zn przez roślinę', is_correct: true },
      { id: 'B', text: 'Mikoryza to forma pasożytnictwa — grzyb czerpie składniki pokarmowe od rośliny, nie dając nic w zamian; ektomikoryza i endomikoryza mają identyczną budowę; rośliny w glebach żyznych korzystają z mikoryz bardziej niż w ubogich', is_correct: false },
      { id: 'C', text: 'Arbuskularna mikoryza wytwarza owocniki jadalne na powierzchni gleby (pieczarki, borowiki); ektomikoryza nie wytwarza owocników i jest niewidoczna; oba typy pobierają głównie azot atmosferyczny dla roślin', is_correct: false },
      { id: 'D', text: 'Mikoryza jest relacją (−−) — oba organizmy tracą: roślina oddaje glukozę i nie zyska nic, grzyb wytwarza enzymy bez pobierania substratów; mikoryza jest rzadka u roślin uprawnych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mikoryza (mycorhiza): mutualistyczna symbioza grzyba z korzeniami rośliny; ~90% roślin lądowych wchodzi w mikoryzę. Typy: (1) Ektomikoryza (ECM): grzyby Basidiomycota i Ascomycota (Boletus, Amanita, Lactarius, Paxillus, Pisolithus); płaszcz grzybiowy otacza korzeń + siatka Hartigiego między komórkami kory (nie wewnątrzkomórkowe); drzewa iglaste (sosna, świerk) i liściaste (buk, dąb, brzoza). Mechanizm wymiany: roślina → fotosynteza → glukoza → grzyb; grzyb → ↑powierzchnia chłonna → ↑P, K, woda, Cu, Zn → roślina; owocniki = "grzyby leśne". (2) Arbuskularna mikoryza (AM/VAM): grzyby Glomeromycota (Glomus, Rhizophagus); wnikają DO komórek korzenia przez fuzję błon (nie przez penetrację ściany = koekwolucja); tworzą arbuskule (tree-like branched haustoria = interface wymiany) i pęcherzyki (magazyn tłuszczu); >80% roślin naczyniowych (trawy, rośliny uprawne, zioła). Znaczenie ekologiczne: sieć mikoryzowa ("wood wide web"): grzyby łączą wiele drzew → transfer C, N, sygnałów między drzewami; niedobór P → ↑mikoryzacja; pH, pestycydy mogą hamować.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Sukcesja ekologiczna ───
  {
    subtopic: 'Ekologia — Sukcesja ekologiczna',
    subtopic_id: S.sukcesj,
    question_type: 'single',
    question_text: 'Sukcesja pierwotna i wtórna różnią się punktem wyjścia. Które zestawienie POPRAWNIE opisuje oba typy i podaje przykłady?',
    options: [
      { id: 'A', text: 'Sukcesja pierwotna: kolonizacja nagiego substratu bez gleby (lawa wulkaniczna, nagie skały po lodowcu) — zaczyna się od pionierów (porosty, mchy) → stopniowe tworzenie gleby → klimaks (las); sukcesja wtórna: po zaburzeniu zbiorowiska z zachowaną glebą (pożar, wylesienie) — szybsza, bo gleba już istnieje', is_correct: true },
      { id: 'B', text: 'Sukcesja pierwotna zachodzi wyłącznie w wodzie; sukcesja wtórna — wyłącznie na lądzie; w obu typach gatunki pionierskie to drzewa wielkie (dęby, buki) wkraczające jako pierwsze', is_correct: false },
      { id: 'C', text: 'Sukcesja wtórna jest wolniejsza od pierwotnej — odbudowa gleby od zera zajmuje więcej czasu niż zasiedlenie całkowicie nowego obszaru; klimaks zawsze jest łąką', is_correct: false },
      { id: 'D', text: 'Klimaks (stadium szczytowe) ekosystemu jest stanem niestabilnym i dąży do zmiany w uboższe stadim; porosty pojawiają się jako ostatni etap sukcesji, a nie jako pionierzy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Sukcesja ekologiczna: kierunkowa i przewidywalna zmiana składu biocenozy w czasie. (1) Pierwotna (primary): punkt startowy = nagi, nieożywiony substrat bez gleby; przyczyny: recesja lodowca, erupcja wulkanu (nowa lawa), obnazone dno jeziora, nowe wyspy; czas: setki–tysiące lat; etapy: porosty (pionierzy: symbiotyczne grzyb+glony, wydzielają kwasy rozkładające skałę) → mchy → trawy/zioła → krzewy → las liściasty lub iglasty (klimaks); glebotwórczość: humus = fundament sukcesji. (2) Wtórna (secondary): punkt startowy = zaburzone zbiorowisko z zachowaną glebą i bankiem nasion; przyczyny: pożar, powódź, wylesienie, porzucone pole; czas: dziesiątki–setki lat (szybsza!); etapy: chwasty → rośliny wieloletnie → krzewy → las pionierski (brzoza, osika, sosna) → las klimaksowy (buczyna, grądek). Klimaks (Clements): stabilne, samoregenerujące się stadium końcowe dostosowane do klimatu; dziś: "steady-state" (mozaika stadiów przez zaburzenia); w Polsce: grąd (Tilio-Carpinetum), buczyna (Fagion). Seria hydroseryczna (w wodzie): fitoplankton → makrofity zanurzone → pływające → szuwar → łąka → las.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Biomy ───
  {
    subtopic: 'Ekologia — Biomy',
    subtopic_id: S.biomy,
    question_type: 'single',
    question_text: 'Biomy lądowe są zdeterminowane głównie przez klimat. Które zestawienie POPRAWNIE opisuje zależność między temperaturą, opadami a typem biomu?',
    options: [
      { id: 'A', text: 'Lasy tropikalne deszczowe: T wysoka (>25°C), opady >2000 mm/rok → najwyższa bioróżnorodność i NPP. Tajga (borealna): T niska, opady umiarkowane → iglaki (świerk, sosna). Pustynia: T wysoka lub niska, opady <250 mm/rok → sukulenty, kserofile. Tundra: T bardzo niska, permafrost → mchy, porosty, karłowate krzewy', is_correct: true },
      { id: 'B', text: 'Tundra arktyczna ma najwyższą bioróżnorodność i NPP; pustynia = biom wilgotny z opadami >2000 mm/rok; las tropikalny = zimna i sucha strefa; tajga = biom równikowy', is_correct: false },
      { id: 'C', text: 'Wszystkie biomy lądowe mają identyczną bioróżnorodność i NPP — rozkład biomów na Ziemi zależy wyłącznie od szerokości geograficznej, a nie od temperatury i opadów', is_correct: false },
      { id: 'D', text: 'Opady są jedynym czynnikiem determinującym biom — temperatura nie ma wpływu; regiony o opadach 500 mm/rok są zawsze lasami tropikalnymi; przy 0 mm/rok są zawsze tundrą', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Biomy lądowe — gradient klimatyczny: (1) Lasy tropikalne wilgotne (deszczowe): 10°N–10°S; T=25–30°C, opady 2000–10 000 mm/rok, bez pory suchej; NPP~2200 gC/m²/r (max); 50–75% gatunków lądowych Ziemi; piętrowa budowa pionowa: baldachim, piętro średnie, ruń, grunt. (2) Sawanna (tropikalna murawa z drzewami): 10–25° szerokości; T wysoka, wyraźna pora sucha 3–6 mies.; ogień + megafauna roślinożerna utrzymują sawannę. (3) Pustynia: <250 mm/rok lub silne parowanie (ETP > opady); gorąca (Sahara) lub zimna (Gobi, Atakama); sukulenty (CAM), mikrofity. (4) Las śródziemnomorski (maquis, chaparral, fynbos): 30–40° szer.; upalne suche lato, łagodna mokra zima; adaptacje do ognia. (5) Umiarkowane trawiaste (stepy, prerie): kontynentalne, opady 250–750 mm; głęboka gleba czarnoziemna. (6) Las liściasty umiarkowany: 40–60°N; wyraźne 4 pory roku; dąb, buk, klon, lipa; opady 750–1500 mm. (7) Tajga (borealna, największy biom lądowy): 50–70°N; T niska (−40 do +20°C), opady 200–600 mm; iglaki (Picea, Pinus, Abies, Larix), kwasna gleba-bielica. (8) Tundra: >70°N; permafrost, wegetacja 60–80 dni/rok; mchy (Sphagnum), porosty, carex; niskie NPP ~100 gC/m²/r.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Ochrona przyrody ───
  {
    subtopic: 'Ekologia — Ochrona przyrody',
    subtopic_id: S.ochr,
    question_type: 'single',
    question_text: 'Fragmentacja siedlisk jest jedną z głównych przyczyn utraty bioróżnorodności. Teoria biogeografii wysp (MacArthur i Wilson) tłumaczy skutki fragmentacji. Które stwierdzenie POPRAWNIE opisuje jej główne założenia?',
    options: [
      { id: 'A', text: 'Liczba gatunków na wyspie (lub fragmencie siedliska) zależy od równowagi między imigracją (↑przy bliskości "lądu stałego") a wymieraniem (↑na małej wyspie); większa i bliższa wyspa = więcej gatunków w równowadze; korytarze ekologiczne zwiększają imigrację między fragmentami', is_correct: true },
      { id: 'B', text: 'Teoria wysp przewiduje, że mniejsze wyspy mają więcej gatunków niż duże — mniejsza powierzchnia = mniejsza konkurencja = więcej gatunków; odległość od lądu stałego nie ma wpływu na liczbę gatunków', is_correct: false },
      { id: 'C', text: 'Fragmentacja siedlisk jest korzystna dla bioróżnorodności — im więcej izolowanych fragmentów, tym więcej unikalnych gatunków może ewoluować niezależnie; nie ma potrzeby tworzenia korytarzy ekologicznych', is_correct: false },
      { id: 'D', text: 'Teoria biogeografii wysp dotyczy wyłącznie prawdziwych wysp oceanicznych i nie ma zastosowania do fragmentów lasu lub innych habitatów lądowych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Teoria biogeografii wysp (IBT, MacArthur & Wilson 1967): model równowagi liczby gatunków na wyspach. Założenia: (1) Imigracja: gatunek kolonizuje wyspę z "lądu stałego" (źródła); tempo imigracji maleje wraz z liczbą gatunków (bo coraz mniej nowych) i maleje z odległością wyspy. (2) Wymieranie: tempo rośnie wraz z N gatunków (więcej = większa konkurencja) i rośnie gdy wyspa mała (małe populacje = wyższe ryzyko stochastycznego wymarcia). Równowaga S*: punkt przecięcia krzywych imigracji i wymierania; duże wyspy = wyższa S*; bliskie wyspy = wyższa S*. Zasada SLOSS (Single Large Or Several Small): debata o optymalne rezerwaty; generalnie: jeden duży > kilka małych o tej samej łącznej powierzchni (edge effects, minimum viable population). Fragmentacja siedlisk: las → "wyspy" fragmentów → ↑edge effects (inwazje, drapieżniki krawędziowe) + ↑izolacja (↓imigracja między fragmentami) + ↓min viable population w każdym fragmencie → local extinction debt. Rozwiązania: korytarze ekologiczne (ecological corridors, stepping stones) zwiększają imigrację między fragmentami (= zmniejszają dystans ekologiczny); sieci Natura 2000; buffer zones. Minimum viable population (MVP): min. N, przy którym populacja przeżyje np. 100 lat z prawdop. 95%; zwykle 50–500 osobników (50/500 reguła Franklina: Ne > 50 unikanie inbreeding, > 500 zachowanie potencjału ewolucyjnego).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ekologia — Ochrona przyrody',
    subtopic_id: S.ochr,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ochrony bioróżnorodności:\nA. Gatunki parasolowe (umbrella species, np. niedźwiedź brunatny, ryś, wilk) wymagają dużych areałów — ochrona ich siedlisk automatycznie chroni wiele innych gatunków żyjących na tym samym terenie.\nB. Ochrona ex situ (np. ogrody zoologiczne, banki nasion, hodowle zachowawcze) jest uzupełnieniem, a nie alternatywą dla ochrony in situ (parki narodowe, rezerwaty) — gatunek pozbawiony naturalnego środowiska traci zdolność adaptacji do warunków naturalnych.\nC. Konwencja o różnorodności biologicznej (CBD, Konwencja z Rio 1992) zobowiązuje sygnatariuszy wyłącznie do ochrony gatunków zagrożonych wyginięciem — nie obejmuje ekosystemów ani różnorodności genetycznej.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: gatunki parasolowe (umbrella species): wymagają dużych, zdrowych siedlisk → ochrona ich areału automatycznie chroni wiele gatunków symbiotycznych (zasada "parasola"); przykłady: wilk = duże areały leśne (ochrona ptaków, jeleni, bobra); słoń afrykański = savanna corridors; panda wielka = lasy bambusowe (chroni inne endemiczne gatunki Chin). Różni się od keystone species (kluczowy dla struktury) i flagship species (ambasador, np. panda, tygrys, koala = "twarz" kampanii fundraisingowych). B — PRAWDA: ex situ: ogrody zoologiczne (~800 tys. zwierząt z 1000 sp. zagrożonych), banki nasion (Svalbard Global Seed Vault: >1,3 mln próbek z 5400 sp.), banki genów, hodowle in vitro; ograniczenia: dominowanie zaledwie małej reprezentacji puli genowej; zanikanie adaptacji do warunków dzikich (domestication selection); koszt; nie rozwiązuje przyczyn wyginięcia. In situ: jedyna długoterminowa opcja; wymaga ochrony siedlisk. CBD (1992, Rio, 196 Stron): 3 cele: (1) ochrona bioróżnorodności (gatunki, ekosystemy, geny); (2) zrównoważone użytkowanie; (3) sprawiedliwy podział korzyści z zasobów genetycznych (ABS). C — FAŁSZ: CBD obejmuje trzy poziomy bioróżnorodności: genetyczną (allele, odmiany), gatunkową (taksony) i ekosystemową (typy środowisk) — nie tylko gatunki zagrożone. Protokoły: Cartagena (GMO), Nagoya (dostęp i podział korzyści). Cele Aichi (2010–2020): 20 celów np. 17% lądów i 10% mórz jako obszary chronione.',
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
  console.log(`Seeding ${questions.length} mock questions for Ekologia...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
