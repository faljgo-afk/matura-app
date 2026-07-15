// Seed batch 3/6 — Ekologia
// Obieg materii (4) + Populacja — cechy i dynamika (6)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '27daaa5f-30d8-4519-a525-4b136cad02f2'

const S = {
  obieg:    '8de030ed-9c47-429a-b69a-6356cbbf57fb',
  populacja:'ddb988fb-1e19-498c-9c4c-f72bb5779c9c',
}

const questions = [

  // ── OBIEG MATERII (4) ─────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.obieg, question_type: 'single',
    question_text: 'Cykl fosforowy różni się od cyklu węglowego i azotowego brakiem fazy gazowej. Jakie są konsekwencje tego faktu dla produktywności ekosystemów?',
    options: [
      { id: 'A', text: 'Fosfor krąży wyłącznie między glebą/osadami a organizmami; nie ma rezerwuaru atmosferycznego; główne źródło to wietrzenie skał fosforanowych (apatyt); fosfor jest często czynnikiem limitującym produkcję pierwotną — szczególnie w jeziorach i glebach tropikalnych', is_correct: true },
      { id: 'B', text: 'Brak fazy gazowej oznacza, że fosfor w ogóle nie krąży; jest pobierany przez rośliny jednorazowo i gromadzony w biomasie na zawsze; nie wraca do gleby nawet po śmierci organizmu; rolnictwo szybko wyczerpuje zapasy fosforu niemożliwe do uzupełnienia', is_correct: false },
      { id: 'C', text: 'Fosfor ma swój własny cykl atmosferyczny — para fosforowa (PH₃, fosfina) jest uwalniana przez bagienne środowiska i jest źródłem fosforu dla organizmów; cykl fosforowy jest podobny do cyklu azotowego pod względem udziału fazy gazowej', is_correct: false },
      { id: 'D', text: 'Brak fazy gazowej powoduje, że fosfor nie może być limitujący, bo zawsze dostępny jest w glebie; azot i węgiel są jedynymi czynnikami limitującymi produkcję pierwotną; eutrofizacja jezior jest spowodowana wyłącznie nadmiarem azotu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cykl fosforowy (sedymentarny, bez fazy gazowej): wietrzenie skał (apatyt Ca₅(PO₄)₃OH, fluoroapatyt) → HPO₄²⁻, H₂PO₄⁻ w glebie/wodzie → pobieranie przez rośliny (transportery PHT1) → konsumenci → destruenci → mineralizacja → fosforany → gleba lub wymywanie do oceanu → osady denne → skały. Brak atmosferycznego rezerwuaru = brak możliwości biologicznego "wiązania" fosforu z powietrza (jak N₂); deplecja gleby → nieodwracalna bez dodatkowego nawozu. Fosfor jako czynnik limitujący (Liebig): (1) jeziora słodkowodne: P limitor (prawo Vollenwedera); eutrofizacja z rolnictwa = spływ PO₄³⁻ → zakwit sinic (Microcystis, Anabaena); (2) gleby tropikalne: P zaadsorbowany przez Fe/Al tlenki → niedobór; (3) otwarte oceany: Fe i N limitor; (4) wody przybrzeżne: N limitor. Zasoby fosforu: rezerwy na ~100–300 lat (głównie Maroko, Chiny, USA); peak phosphorus prognozowany na 2030–2070.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.obieg, question_type: 'multiple',
    question_text: 'Eutrofizacja jest procesem degradacji ekosystemów wodnych. Które z poniższych stwierdzeń POPRAWNIE opisują mechanizm i skutki eutrofizacji? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Nadmiar biogenów (N, P) pochodzący ze spływów rolniczych i ścieków komunalnych powoduje masowy wzrost fitoplanktonu i sinic (zakwit) → ograniczenie wnikania światła do głębszych warstw → obumieranie roślin podwodnych → wzrost rozkładu → deficyt O₂ w głębszych warstwach (hypoksja)', is_correct: true },
      { id: 'B', text: 'Sinice (Cyanobacteria) masowo pojawiające się podczas zakwitów mogą produkować toksyny (mikrocystyny, cylindrospermopsyna, anatoksyna-a) niebezpieczne dla zwierząt i człowieka; zakazy kąpieli i poboru wody pitnej są typową konsekwencją zakwitów sinic', is_correct: true },
      { id: 'C', text: 'Eutrofizacja jest procesem naturalnym zachodzącym w każdym jeziorze przez całą jego historię; antropogeniczna (przyspieszona) eutrofizacja prowadzi do tego samego końcowego stanu co naturalna, lecz w ciągu lat zamiast tysięcy lat', is_correct: true },
      { id: 'D', text: 'Eutrofizacja zwiększa bioróżnorodność jezior przez dostępność większej ilości biogenów — wszystkie grupy organizmów (ryby, raki, małże, owady wodne) skorzystają na wzroście produktywności jeziora i żaden gatunek nie wygiąłby wskutek eutrofizacji', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) mechanizm: spływ PO₄³⁻ + NO₃⁻ → fitoplankton → termiklina latem blokuje mieszanie → H₂S + O₂ deplecja w hypolimnionie → śnięcie ryb; "dead zones": ujście Missisipi do Zatoki Meksykańskiej (~22 000 km² w lecie 2019); Morze Bałtyckie: 70 000 km² deficytu O₂. (B) mikrocystyny (MC-LR, MC-RR): hepatotoksyny (uszkadzają wątrobę przez inhibicję fosfataz białkowych); dopuszczalne stężenie WHO pitnej wody: 1 μg/L MC-LR; anatoksyna-a: neurotoksyna (inhibitor acetylocholinesterazy); śmierć psów w jeziorach sinicowych. (C) naturalna sukcesja jeziora: oligotroficzne → mezotroficzne → eutroficzne → hipertroficzne → zabagnienie → łąka (torfowiec); trwa tysiące lat; anthropogeniczna eutrofizacja: to samo, lecz 10–100 lat; rekultywacja: aeracja (pompy O₂), ograniczenie spływu, siarczany glinu (precypitacja P). (D) fałsz: eutrofizacja zmniejsza bioróżnorodność — ryby bentoniczne (okoń, pstrąg, szczupak) giną przy deficycie O₂; dominacja 1–2 gatunków sinic; eliminacja ramienic (Chara, Nitella) i roślin podwodnych; zanik bezkręgowców wrażliwych na O₂ (jętki, widelnice).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.obieg, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących globalnych cykli biogeochemicznych:',
    options: [
      { id: 'A', text: 'Efekt cieplarniany jest naturalnym zjawiskiem niezbędnym dla życia na Ziemi — bez CO₂, H₂O, CH₄ i N₂O w atmosferze średnia temperatura Ziemi wynosiłaby około −18°C zamiast obecnych +15°C; człowiek wzmacnia ten efekt przez emisję gazów cieplarnianych.', is_correct: true },
      { id: 'B', text: 'Deforestacja (wylesienie) lasów tropikalnych zmniejsza stężenie CO₂ w atmosferze, ponieważ drewno zgromadzone w pniach drzew jest bogatym rezerwuarem węgla; po wycięciu lasu węgiel pozostaje w glebie na setki lat, nie trafiając do atmosfery.', is_correct: false },
      { id: 'C', text: 'Ozon troposferyczny (O₃ przy powierzchni ziemi) i ozon stratosferyczny (warstwa ozonowa) mają różne oddziaływanie: stratosferyczny pochłania szkodliwe promieniowanie UV-B (funkcja ochronna), a troposferyczny jest składnikiem smogu fotochemicznego i jest szkodliwy dla organizmów.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: naturalny efekt cieplarniany: główne gazy: H₂O (para wodna: 50% efektu), CO₂ (20%), O₃, CH₄, N₂O; bez atmosfery: T = −18°C (albedo Ziemi); z atmosferą: +15°C; Δ = 33°C = efekt cieplarniany naturalny. Antropogeniczny: CO₂: +48% od 1750 (280→420 ppm); CH₄: rolnictwo (bydło, ryżowiska), wydobycie gazu; N₂O: nawozy azotowe. B — Fałsz: deforestacja ZWIĘKSZA CO₂: wypalanie/rozkład biomasy → CO₂; zmiana użytkowania ziemi (LULUCF): ~4–5 Pg CO₂/rok; bez bioróżnorodności las nie rośnie z powrotem; degradacja gleby tropikalnej → erozja → brak regeneracji; "carbon debt" = dług węglowy zaciągany przez wylesienie. C — Prawda: stratosferyczny O₃ (20–50 km): pochłania UV-B (280–315 nm); ubytek warstwy ozonowej (freony/CFC) → CFC + UV → Cl· → Cl· + O₃ → ClO + O₂ (reakcja łańcuchowa: 1 Cl· niszczy 100 000 cząsteczek O₃); Protokół Montrealski 1987: zakaz CFC; odbudowa warstwy ozonowej do 2060–2070. Troposferyczny O₃: NOₓ + VOC + UV → O₃ (smog Los Angeles, Pekinu); uszkadza płuca, roślinność (liście).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.obieg, question_type: 'single',
    question_text: 'Które z poniższych procesów są elementami cyklu siarki i prowadzą do powstawania kwaśnych deszczy?',
    options: [
      { id: 'A', text: 'Spalanie paliw bogatych w siarkę (węgiel kamienny, ropa) → SO₂ → reakcja z H₂O i O₂ w atmosferze → H₂SO₄ (kwas siarkowy); ponadto NO₂ z silników spalinowych → HNO₃; kwaśne deszcze mają pH < 5,6', is_correct: true },
      { id: 'B', text: 'Kwaśne deszcze powstają wyłącznie z CO₂ rozpuszczającego się w wodzie deszczowej; siarka nie uczestniczy w tym procesie; spalanie węgla produkuje wyłącznie CO₂, który jest nieszkodliwy dla ekosystemów', is_correct: false },
      { id: 'C', text: 'Kwaśne deszcze są zjawiskiem wyłącznie naturalnym (erupcje wulkanów); emisje przemysłowe SO₂ są neutralizowane przez atmosferę zanim opadną na ziemię; pH deszczu niezależnie od zanieczyszczeń wynosi zawsze 5,6', is_correct: false },
      { id: 'D', text: 'H₂S wydzielany przez organizmy beztlenowe jest jedynym źródłem kwasów w atmosferze; SO₂ ze spalania paliw nie uczestniczy w tworzeniu kwaśnych deszczy; problem kwaśnych deszczy jest wyolbrzymiony przez media', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cykl siarki i kwaśne deszcze: SO₂ z procesów przemysłowych (spalanie węgla, ropa, hutnictwo) i naturalnych (wulkany) + NO₂ (spalanie w silnikach): SO₂ + OH· → HOSO₂· → SO₃ + H₂O → H₂SO₄ (kwas siarkowy); NO₂ + OH· → HNO₃; pH deszczu naturalnego: 5,6 (CO₂ w równowadze z wodą → H₂CO₃); kwaśny deszcz: pH 4,2–4,4 (np. w Skandynawii w latach 70.–80.); SKUTKI: wymywanie zasadowych kationów (Ca²⁺, Mg²⁺, K⁺) z gleby → deficyt dla roślin; mobilizacja Al³⁺ (toksyczny dla korzeni); zakwaszenie jezior → śnięcie ryb (pstrąg ginie pH < 5,0); korozja budowli (marmur, wapień: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂); Schwarzwald (Niemcy) lata 80.: "Waldsterben" (wymieranie lasów). Ochrona: odsiarczanie spalin (mokre lub suche skrubery: CaO + SO₂ → CaSO₃), katalityczne redukory NOₓ (SCR z NH₃), paliwa niskosiarczane.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── POPULACJA — CECHY I DYNAMIKA (6) ─────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.populacja, question_type: 'single',
    question_text: 'Krzywa wzrostu logistycznego (sigmoidalna) opisuje wzrost populacji w środowisku o ograniczonych zasobach. Który opis POPRAWNIE charakteryzuje jej kształt i parametry?',
    options: [
      { id: 'A', text: 'Faza wykładnicza (J-shaped, przy niskiej gęstości) → punkt przegięcia (N = K/2, maksymalna szybkość wzrostu dN/dt) → faza hamowania (wzrost odporności środowiska, opór środowiska rośnie) → plateau przy N = K (pojemność środowiska); wzór: dN/dt = rN(1 − N/K)', is_correct: true },
      { id: 'B', text: 'Krzywa sigmoidalna zaczyna od plateau przy N = K, a następnie maleje do zera gdy populacja wyczerpie zasoby; nie ma fazy wykładniczej — wzrost jest zawsze hamowany od pierwszego osobnika', is_correct: false },
      { id: 'C', text: 'Wzrost logistyczny jest identyczny z wykładniczym (J-shaped); jedyna różnica to skala osi — przy większej skali każda krzywa wykładnicza wygląda jak sigmoidalna; K (pojemność środowiska) nie istnieje w przyrodzie', is_correct: false },
      { id: 'D', text: 'Krzywa sigmoidalna zakłada, że populacja rośnie w nieskończoność bez ograniczeń; "plateau" przy K jest tylko chwilowym zahamowaniem — populacja zawsze w końcu przekracza K i nie wraca do tego poziomu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Model logistyczny (Verhulst 1838, Pearl & Reed 1920): dN/dt = rN · (K−N)/K = rN(1−N/K); N = liczebność populacji; r = właściwy przyrost (intrinsic rate of increase = b−d); K = pojemność środowiska (carrying capacity). FAZY: (1) lag phase: mała N, powolny wzrost; (2) wykładnicza (exponential phase): N mała → (1−N/K) ≈ 1 → dN/dt ≈ rN; (3) punkt przegięcia: N = K/2 → dN/dt maksymalne = rK/4; (4) hamowanie: N rośnie → (1−N/K) maleje → opór środowiska (environmental resistance) = zasoby, drapieżniki, choroby; (5) plateau: N = K → dN/dt = 0. Opór środowiska: czynniki gęstościozależne (density-dependent): rywalizacja o pokarm, terytoria, drapieżnictwo, choroby zakaźne (R₀ > 1 przy gęstości > progowej); czynniki gęstościoniezależne: temperatura, burze, susze (niezależnie od N). MSY (Maximum Sustainable Yield) = rK/4 przy N = K/2 — stosowane w rybołówstwie.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.populacja, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują cechy charakterystyczne populacji? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Struktura wiekowa populacji (piramida wieku) informuje o jej perspektywach demograficznych: szeroka podstawa (przewaga młodych) → rosnąca populacja; wąska podstawa (mało młodych) → kurczącą się populacja; równa szerokość → stabilna', is_correct: true },
      { id: 'B', text: 'Rozrodczość (natalność) i śmiertelność (mortalność) to podstawowe parametry dynamiki populacji; współczynnik przyrostu naturalnego r = b − d (gdzie b = birth rate, d = death rate); r > 0 → wzrost, r < 0 → zanik, r = 0 → stabilna', is_correct: true },
      { id: 'C', text: 'Rozmieszczenie osobników w populacji może być losowe (Poissona), skupiskowe (agregacyjne, najczęstsze w naturze) lub równomierne (regularne, np. na terytoriach ptaków lęgowych); typ rozmieszczenia odzwierciedla relacje między osobnikami i zasoby środowiska', is_correct: true },
      { id: 'D', text: 'Gęstość populacji jest zawsze stała i niezmienna w czasie — każdy gatunek ma swoją "normalną" gęstość wyznaczoną przez geny; wahania gęstości są niemożliwe w warunkach naturalnych i świadczą o interwencji człowieka', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) piramidy wieku: progresywna (szeroka podstawa): kraje rozwijające się, wiele populacji roślin i owadów; regresywna (wąska podstawa): kraje wysoko rozwinięte (Niemcy, Japonia), starzejące się populacje; stacjonarna: stabilna (niektóre populacje w K). (B) paramety demograficzne: b (birth rate) = liczba urodzin/osobnik/rok; d (death rate) = śmiertelność; r_max = biotic potential (bez ograniczeń); λ = er = finite rate of increase; R₀ = net reproductive rate (potomstwo na pokolenie). (C) rozmieszczenie: losowe (random): zasoby równomierne, brak interakcji (siewki roślin w niektórych populacjach); skupiskowe (clumped): najczęstsze — zasoby są nierównomiernie rozmieszczone (zwierzęta przy wodopojach, ryby w ławicach), socjalność, ochrona przed drapieżnikami; równomierne (uniform): obrona terytoriów (mewy gniazdujące, pingwiny), allelopatia roślin (salwia, eukaliptus). (D) fałsz: gęstość populacji zmienia się nieustannie pod wpływem czynników gęstościozależnych i niezależnych; wahania wieloletnie (cycles): zając polarny + ryś (Hudson Bay Company, dane od 1845): 9–11 lat cykl; lemmingi: 3–4 lata; cykadki: 13 lub 17 lat (liczby pierwsze!).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.populacja, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących strategii życiowych (r- i K-strategia):',
    options: [
      { id: 'A', text: 'Gatunki r-strategów (np. myszy, owady, chwasty) charakteryzują się: krótkim życiem, wczesnym dojrzewaniem, dużą liczbą małego potomstwa, małymi rozmiarami ciała i zdolnością do szybkiego kolonizowania nowych siedlisk; ich populacje szybko rosną i często przekraczają K.', is_correct: true },
      { id: 'B', text: 'K-strategowie (np. słonie, wieloryby, dęby, człowiek) mają odwrócone cechy: długie życie, późne dojrzewanie, małą liczbę dużego potomstwa, dużą opiekę rodzicielską, wysoką przeżywalność młodych; ich populacje są stabilne blisko K i wolno się odbudowują po spadku liczebności.', is_correct: true },
      { id: 'C', text: 'Strategia r lub K jest sztywno przypisana każdemu gatunkowi — nie może zmieniać się w czasie ani pod wpływem warunków środowiskowych; ten sam gatunek nie może wykazywać cech obu strategii jednocześnie.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: r-strategowie: wysoce podatni na wyginięcie lokalne, szybko się odradzają; przykłady: Drosophila (r = 10/dzień), myszy (dojrzałość 6 tyg., 5–10 miotów/rok), chwasty jednoletnie (Arabidopsis: 30 dni do nasion), bakterie (r = 0,7–1,5/h). B — Prawda: K-strategowie: wrażliwi na polowania i fragmentację siedlisk; słoń afrykański: pierwsza ciąża w 10–14 r.ż., 1 cielę co 4–5 lat, ciąża 22 mies.; wieloryb płetwal błękitny (Balaenoptera musculus): dojrzałość ~10 lat, 1 young co 2–3 lata; dąb: nasiona od 20–50 r.ż. C — Fałsz: strategia r/K to kontinuum, nie dychotomia; ten sam gatunek może zachowywać się jak r-strateg w warunkach dystrubancji (nowe siedlisko, po katastrofie) i K-strateg gdy środowisko ustabilizowane; np. jelenie eurazjatyckie (Cervus elaphus): wysoka płodność po polowaniach (kompensacja demograficzna); ryby mogą mieć cechy mieszane (iteroparous vs semelparous).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.populacja, question_type: 'single',
    question_text: 'Wahania liczebności populacji zająca polarnego (Lepus americanus) i rysia kanadyjskiego (Lynx canadensis) wykazują regularny cykl ~10-letni z opóźnieniem rysia za zającem o 1–2 lata. Który model NAJLEPIEJ wyjaśnia to zjawisko?',
    options: [
      { id: 'A', text: 'Model drapieżnik-ofiara (Lotka-Volterra): wzrost populacji zająca → wzrost pokarmu dla rysia → wzrost rysia → nadmierne drapieżnictwo → spadek zająca → spadek rysia (brak pokarmu) → regeneracja zająca → cykl; opóźnienie wynika z czasu opóźnienia reprodukcji rysia za zającem', is_correct: true },
      { id: 'B', text: 'Cykl jest w pełni regulowany przez czynniki klimatyczne (temperatura, opady śniegu) niezależne od populacji rysia; ryś nie wpływa na liczebność zająca — jest zbyt małym drapieżnikiem; obserwowane korelacje to przypadkowe zbieżności', is_correct: false },
      { id: 'C', text: 'Rytm cyklu 10-letni wynika z cyklu słonecznego (plamy słoneczne); wzrost aktywności słonecznej zwiększa produktywność roślin → zające rosną; zmniejszenie → zające giną; ryś nie jest powiązany ze wzrostem zająca i wykazuje niezależny cykl 5-letni', is_correct: false },
      { id: 'D', text: 'Model Lotki-Volterry nie ma zastosowania do ssaków; cykl dotyczy wyłącznie owadów i mikroorganizmów; relacja zając-ryś jest komensalizmem (ryś korzysta ale zającowi jest obojętny) bez żadnych powiązań demograficznych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Lotka-Volterra (1925-1926): równania różniczkowe opisujące układ drapieżnik-ofiara; dN/dt = aN − bNP (ofiara N rośnie wykładniczo, ginie od kontaktu z P); dP/dt = cNP − dP (drapieżnik P rośnie dzięki N, ginie bez N); CYKL: N wzrasta → P wzrasta (z opóźnieniem τ) → N spada → P spada → N wzrasta. Dane historyczne: Hudson Bay Company (futrzarze, 1845–1935): skóry zająca i rysia; cykl ~10 lat; amplituda: 10-krotna zmiana liczebności; opóźnienie rysia: ~1–2 lata. Komplikacje realnego układu: (1) zające limitowane przez roślinność (3-składnikowy model: rośliny-zające-rysie) — Krebs et al. 1995 (Science); (2) "fear ecology" — zające wolniej rosną i jedzą mniej przy obecności rysia nawet bez zabijania (zachowanie antypredatoryjne). Inne cykle: lemmingi (Lemmus, Dicrostonyx) + myszołowy i lisy: 3–4 lata; cykadki (Magicicada): 13 lub 17 lat (liczby pierwsze = unikanie synchronizacji z cyklem drapieżników 2, 3, 4, 6-letnimi).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.populacja, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują czynniki regulujące liczebność populacji? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Czynniki gęstościozależne (density-dependent) nasilają się wraz ze wzrostem gęstości populacji: rywalizacja wewnątrzgatunkowa o pokarm i terytoria, drapieżnictwo (gdy drapieżnik specjalizuje się na ofierze), choroby zakaźne (R₀ wzrasta z gęstością), pasożytnictwo', is_correct: true },
      { id: 'B', text: 'Czynniki gęstościoniezależne (density-independent) działają z taką samą intensywnością niezależnie od liczebności populacji: ekstremalne temperatury, pożary, powodzie, susze, erupcje wulkanów; mogą redukować populacje poniżej K niezależnie od jej rozmiaru', is_correct: true },
      { id: 'C', text: 'Efekt Allee (Allee effect): przy bardzo niskiej gęstości populacja może wykazywać obniżoną przeżywalność i rozrodczość z powodu trudności ze znalezieniem partnera, zmniejszenia efektu grupowej obrony lub spadku różnorodności genetycznej; istnieje minimalna populacja przeżywalności (MVP)', is_correct: true },
      { id: 'D', text: 'Czynniki gęstościozależne i gęstościoniezależne działają zawsze antagonistycznie i nigdy nie mogą jednocześnie redukować tej samej populacji; naturalna regulacja populacji angażuje wyłącznie jeden z tych mechanizmów', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) gęstościozależne: regulują populację w pobliżu K (ujemne sprzężenie zwrotne); rywalizacja: interspecyficzna i intraspecyficzna o pokarm, gniazdowiska, terytoria; choroby: mykomatoza (wirus wśród królików australijskich); drapieżnictwo: functional response — drapieżnik zjada więcej ofiar przy wyższym zagęszczeniu (Type II, III). (B) gęstościoniezależne: wypadkowe (stochastyczne): katastrofalne wichury 1987 w Wielkiej Brytanii zabiły podobny % drzew niezależnie od gęstości lasu; pożary, powodzie; zmiany klimatu mogą zmieniać charakter tych czynników (stochastyczne → regularne). (C) efekt Allee (Warder Clyde Allee, 1931): obligatoryjny efekt Allee — populacja maleje poniżej minimalnej gęstości (Allee threshold), może dochodzić do extinkcji; np. łoś z Wyspy Isle Royale: 50 osobników → inbreeding → problemy neurologiczne (osteochondroza, wady kręgosłupa); kondor kalifornijski (Gymnogyps californianus): 27 osob. (1987) → hodowla niewolnicza → 500+ (2022); MVP (Minimum Viable Population): obliczana przez Population Viability Analysis (PVA). (D) fałsz: oba typy działają jednocześnie na każdą populację; np. populacja jeleni: sucha zima (niezależny, redukuje K) + zwiększone drapieżnictwo wilka gdy jelenie osłabione (zależny) → podwójna presja; modelowanie PVA uwzględnia oba typy stochastyczności.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.populacja, question_type: 'single',
    question_text: 'Na diagramach poniżej przedstawiono trzy piramidy wieku populacji ludzkich: (A) szeroka podstawa, zwężająca się ku górze; (B) mniej więcej równe kolumny; (C) wąska podstawa, szersza w środku. Która piramida odpowiada krajowi o najwyższym tempie wzrostu populacji?',
    options: [
      { id: 'A', text: 'Piramida A — szeroka podstawa oznacza dużą liczbę dzieci i młodzieży (wysoka rozrodczość), mało starszych (wysoka śmiertelność lub krótkie życie); taka piramida jest typowa dla krajów rozwijających się (Nigeria, Mali, Afganistan) z szybko rosnącą populacją', is_correct: true },
      { id: 'B', text: 'Piramida B — równe kolumny oznaczają, że każda kohorta wiekowa jest identycznej wielkości; kraj z piramidą B ma najwyższe tempo wzrostu, ponieważ wszystkie grupy wiekowe są równie liczne i każda produkuje tyle samo potomstwa', is_correct: false },
      { id: 'C', text: 'Piramida C — wąska podstawa i szersza środkowa część oznacza, że jest dużo dorosłych w wieku produkcyjnym; kraj z piramidą C rośnie najszybciej ponieważ ma najwięcej osób zdolnych do reprodukcji spośród trzech krajów', is_correct: false },
      { id: 'D', text: 'Żadna z piramid nie określa tempa wzrostu — kształt piramidy wieku ma wyłącznie znaczenie historyczne i nie pozwala prognozować przyszłego wzrostu populacji; jedynym wskaźnikiem tempa wzrostu jest aktualny współczynnik urodzeń', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Piramidy wieku (age pyramids) — interpretacja: (A) PROGRESYWNA (expansive, szeroka podstawa): wysoka natalność + wysoka śmiertelność niemowląt/dzieci → duże pokolenia wchodzą w wiek rozrodczy → szybki wzrost; TFR (Total Fertility Rate) > 4; r > 2%; kraje sub-Sahary: Nigeria (TFR 5,3, 2022), Mali, Niger (TFR 7,2 — najwyższy na świecie); (B) STACJONARNA (stationary): TFR ~2,1 (replacement level); r ≈ 0%; Finlandia, Szwecja; (C) REGRESYWNA (constrictive, wąska podstawa): TFR < 2,1; r < 0 (kurczenie się); Niemcy, Japonia, Polska, Włochy; starzenie populacji → presja na systemy emerytalny i zdrowotny; "demograficzna bomba zegarowa"; globalna TFR spadła z 5,3 (1963) do 2,3 (2021) → globalne spowolnienie wzrostu; prognoza ONZ: 10–11 mld ok. 2080–2100, potem stabilizacja lub spadek.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
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
  console.log(`Seeding batch 3 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
