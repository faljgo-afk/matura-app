// Seed: mock_questions — Narządy zmysłów (20 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  oko:      '8bb948ee-7e73-4026-8ffd-054c2ff1f1d3',
  foto:     'f1eb0693-7da6-4a9c-bb53-70b0eb85273b',
  wady:     'f744279d-4057-4678-a9e1-bcd1913f0449',
  ucho:     'cb00ccb8-621f-4056-862a-fa8993480298',
  sluch:    '03a20c72-b897-4f94-a81e-7b2bd3cafd69',
  chemo:    '9782fe2a-7012-4165-b23f-545fe0c7b0e1',
  skora:    '78ffad1b-12bd-46d1-a419-626401847a47',
}

const questions = [
  // ─── Budowa i funkcja oka ───
  {
    subtopic: 'Narządy zmysłów — Budowa i funkcja oka',
    subtopic_id: S.oko,
    question_type: 'single',
    question_text: 'Gałka oczna zbudowana jest z trzech warstw. Wskaż prawidłowe przyporządkowanie warstw do ich budowy i funkcji.',
    options: [
      { id: 'A', text: 'Twardówka (biała, zewnętrzna) — mechaniczna ochrona oka; naczyniówka (bogata w naczynia krwionośne i melaninę) — odżywianie i pochłanianie światła; siatkówka (wewnętrzna) — warstwa fotoreceptorów', is_correct: true },
      { id: 'B', text: 'Naczyniówka (zewnętrzna) — ochrona mechaniczna; twardówka (środkowa) — odżywianie; siatkówka (zewnętrzna) — filtracja światła UV', is_correct: false },
      { id: 'C', text: 'Twardówka zawiera fotoreceptory i nerwy wzrokowe; naczyniówka — soczewkę; siatkówka — naczynia krwionośne', is_correct: false },
      { id: 'D', text: 'Siatkówka jest warstwą zewnętrzną i pełni funkcję ochronną; twardówka wewnętrzną — fotoreceptorową', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Gałka oczna — 3 warstwy: (1) Twardówka (sclera) — zewnętrzna, zbudowana z gęstej tkanki łącznej włóknistej, biała i twarda → ochrona mechaniczna; z przodu przechodzi w rogówkę (przezroczystą). (2) Naczyniówka (choroidea) — środkowa, bogata w naczynia krwionośne (odżywianie siatkówki) i melaninę (pochłanianie rozproszonych fotonów, "czarny boks"). Z przodu tworzy ciało rzęskowe (mięśnie akomodacji + produkcja cieczy wodnistej) i tęczówkę (z mięśniami regulującymi średnicę źrenicy). (3) Siatkówka (retina) — wewnętrzna, zawiera pręciki i czopki + komórki bipolarne + zwojowe (tworzą nerw wzrokowy).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Budowa i funkcja oka',
    subtopic_id: S.oko,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy oka:\nA. Rogówka i soczewka skupiają (załamują) promienie świetlne na siatkówce — rogówka odpowiada za większość mocy łamiącej oka (~70%).\nB. Ciecz wodnista wypełnia komorę ciała szklistego (za soczewką) i ma stałą objętość przez całe życie — jej nadmiar jest przyczyną krótkowzroczności.\nC. Plamka żółta (fovea centralis) to obszar o najwyższej ostrości widzenia, bogaty w czopki — nerw wzrokowy opuszcza gałkę oczną przez plamkę ślepą (tarczę nerwu wzrokowego), gdzie nie ma fotoreceptorów.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: rogówka (~43 dioptrie) > soczewka (~20 D) pod względem mocy łamiącej, lecz soczewka jest zmienna (akomodacja). B — FAŁSZ: ciecz wodnista (humor aquosus) wypełnia komory PRZEDNIĄI I TYLNĄ (przed soczewką); za soczewką jest ciało SZKLISTE (humor vitreus) — galaretowate, stałe. Ciecz wodnista jest stale produkowana i drenowana (przez kąt przesączania); blokada odpływu → jaskra (glaucoma), nie krótkowzroczność. C — PRAWDA: fovea centralis = centralny dołek siatkówki, tylko czopki (brak pręcików), największa gęstość = najlepsza ostrość wzroku. Plamka ślepa (discus nervi optici) = miejsce wyjścia nerwu wzrokowego, zero fotoreceptorów = brak widzenia w tym punkcie.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Budowa i funkcja oka',
    subtopic_id: S.oko,
    question_type: 'single',
    question_text: 'Akomodacja oka polega na dostosowaniu ostrości widzenia do odległości obiektu. Który mechanizm opisuje patrzenie na bliski obiekt?',
    options: [
      { id: 'A', text: 'Mięśnie rzęskowe rozkurczają się → więzadła obwódki naprężają się → soczewka spłaszcza się → mniejsza moc łamiąca — ognisko przesuwa się do przodu', is_correct: false },
      { id: 'B', text: 'Mięśnie rzęskowe kurczą się → więzadła obwódki rozluźniają się → soczewka zaokrągla się (przez własną sprężystość) → większa moc łamiąca → ognisko skupia się na siatkówce', is_correct: true },
      { id: 'C', text: 'Tęczówka zwęża źrenicę → więcej światła dostaje się do oka → soczewka automatycznie spłaszcza się', is_correct: false },
      { id: 'D', text: 'Ciało rzęskowe wydziela więcej cieczy wodnistej → wzrasta ciśnienie wewnątrzgałkowe → soczewka jest wypychana do przodu zmieniając ogniskową', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Akomodacja: mięśnie rzęskowe (okrężne, gładkie) kurczą się (unerwione przez układ przywspółczulny, nerw III) → zmniejsza się napięcie więzadeł obwódki (zonula Zinnii) → soczewka, pozbawiona naprężenia, zaokrągla się (własna elastyczność) → wzrasta moc łamiąca → można ostro widzieć bliskie obiekty. Patrzenie w dal: mięśnie rzęskowe rozluźniają się → więzadła naprężają soczewkę → spłaszcza się → mniejsza moc → ostrość na dalekie obiekty. Z wiekiem soczewka traci elastyczność → presbiopia (starczowzroczność): trudności z czytaniem.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Fotoreceptory — czopki i pręciki ───
  {
    subtopic: 'Narządy zmysłów — Fotoreceptory — czopki i pręciki',
    subtopic_id: S.foto,
    question_type: 'single',
    question_text: 'Pręciki i czopki siatkówki różnią się pod względem lokalizacji, czułości i rodzaju widzenia. Które zestawienie jest POPRAWNE?',
    options: [
      { id: 'A', text: 'Pręciki: obwód siatkówki, widzenie skotopowe (przy słabym świetle), czarno-białe, jeden typ barwnika (rodopsyna); czopki: głównie plamka żółta, widzenie fotopowe (przy silnym świetle), barwne — 3 typy (L, M, S)', is_correct: true },
      { id: 'B', text: 'Czopki: obwód siatkówki, czarno-białe; pręciki: plamka żółta, barwne — rozróżniają wszystkie kolory', is_correct: false },
      { id: 'C', text: 'Pręciki odpowiadają za widzenie barwne w dzień; czopki — za widzenie nocne w skali szarości', is_correct: false },
      { id: 'D', text: 'Oba typy receptorów zawierają identyczny barwnik (rodopsynę) i różnią się wyłącznie kształtem', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Pręciki (~120 mln): na obwodzie siatkówki; zawierają rodopsynę (opsyna + retinal); bardzo czułe (reagują na pojedynczy foton); widzenie skotopowe (nocne, zmierzchowe) w skali szarości; duże pola recepcyjne (wiele pręcików → 1 komórka zwojowa) → niska ostrość, wysoka czułość. Czopki (~6 mln): skupione w plamce żółtej (fovea); 3 typy: L (red, maks. 560 nm), M (green, 530 nm), S (blue, 420 nm) — podstawa widzenia barwnego (teoria Young-Helmholtza); widzenie fotopowe (dzienne); każdy czopek w fovei → osobna komórka zwojowa → wysoka ostrość. Daltonizm: brak lub mutacja jednego z 3 typów opsynów (gen na chromosomie X → częstszy u mężczyzn).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Fotoreceptory — czopki i pręciki',
    subtopic_id: S.foto,
    question_type: 'single',
    question_text: 'W jaki sposób absorpcja fotonu przez rodopsynę prowadzi do powstania sygnału nerwowego w pręciku?',
    options: [
      { id: 'A', text: 'Foton bezpośrednio depolaryzuje błonę pręcika przez kanały świetlnoczułe — impulsy natychmiast biegnądo mózgu', is_correct: false },
      { id: 'B', text: 'Absorpcja fotonu → izomeryzacja 11-cis-retinalu do trans-retinalu → aktywacja transducyny (białko G) → wzrost cGMP-fosfodiesterazy → spadek cGMP → zamknięcie kanałów Na⁺ → hiperpolaryzacja pręcika → zmniejszenie wydzielania glutaminianu → sygnał do komórek bipolarnych', is_correct: true },
      { id: 'C', text: 'Foton aktywuje ATP-azę → wytworzenie ATP → depolaryzacja przez kanały ATP-zależne → przekazanie sygnału przez synapsy elektryczne bezpośrednio do nerwu wzrokowego', is_correct: false },
      { id: 'D', text: 'Absorpcja fotonu podgrzewa błonę pręcika → cieplna depolaryzacja → mechanizm identyczny jak w termoreceptorach skórnych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Fototransdukcja: (1) Foton absorbowany przez rodopsynę (opsyna + 11-cis-retinal). (2) 11-cis-retinal izomeryzuje do all-trans-retinalu → konformacja opsyny zmieniona → aktywna metarodopsyna II. (3) Aktywuje transducynę (białko G) → aktywuje fosfodiesterazę cGMP. (4) cGMP hydrolizowany → stężenie cGMP spada. (5) Kanały kationowe (głównie Na⁺) zależne od cGMP zamykają się → hiperpolaryzacja pręcika (zmieniasz ~-40 mV → ~-70 mV). (6) Mniej glutaminianu wydzielanego w ciemności → komórki bipolarne zmieniają aktywność → sygnał do komórek zwojowych → nerw wzrokowy. Zaskakujące: pręcik hiperpolaryzuje (a nie depolaryzuje) na światło!',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Wady wzroku ───
  {
    subtopic: 'Narządy zmysłów — Wady wzroku',
    subtopic_id: S.wady,
    question_type: 'single',
    question_text: 'Krótkowzroczność (myopia) i dalekowzroczność (hiperopia) to najczęstsze wady refrakcji. Które zdanie POPRAWNIE opisuje ich przyczynę i korekcję?',
    options: [
      { id: 'A', text: 'Krótkowzroczność: gałka oczna zbyt długa lub rogówka/soczewka zbyt wysklepiona → ognisko pada PRZED siatkówką → korekcja soczewką rozpraszającą (wklęsłą, wartość ujemna dpt); dalekowzroczność: gałka zbyt krótka lub soczewki za płaskie → ognisko za siatkówką → korekcja soczewką skupiającą (wypukłą, wartość dodatnia dpt)', is_correct: true },
      { id: 'B', text: 'Krótkowzroczność: ognisko za siatkówką → korekcja soczewką wypukłą; dalekowzroczność: ognisko przed siatkówką → korekcja soczewką wklęsłą', is_correct: false },
      { id: 'C', text: 'Obie wady mają identyczną przyczynę — różnicę w budowie soczewki — ale korekcja jest lustrzanym odbiciem', is_correct: false },
      { id: 'D', text: 'Krótkowzroczność jest dziedziczna i nieuleczalna; dalekowzroczność jest chorobą zakaźną i można ją leczyć antybiotykami', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Krótkowzroczność (myopia, "negatywne" dioptrie): zbyt silna refrakcja (długa gałka oczna lub zbyt wysklepiona rogówka/soczewka) → ognisko przed siatkówką → blisko widzi ostro, daleko nieostro. Korekcja: soczewka wklęsła (rozpraszająca, ujemna wartość dpt) → "cofa" ognisko na siatkówkę. Dalekowzroczność (hiperopia, "pozytywne" dioptrie): zbyt słaba refrakcja (krótka gałka lub płaska rogówka) → ognisko za siatkówką → blisko nieostro (daleko może być ostro dzięki akomodacji, ale ją szybko wyczerpuje). Korekcja: soczewka wypukła (skupiająca, dodatnia dpt). Astygmatyzm: nieregularna krzywizna rogówki → różne ogniskowe w różnych płaszczyznach → korekcja soczewkami cylindrycznymi.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Wady wzroku',
    subtopic_id: S.wady,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wad wzroku i ich podłoża biologicznego:\nA. Daltonizm (dichromatyzm) jest najczęściej spowodowany mutacją genów kodujących opsyny czopków — geny te są zlokalizowane na chromosomie X, co tłumaczy częstsze występowanie u mężczyzn (XY).\nB. Jaskra (glaucoma) jest wynikiem zbyt niskiego ciśnienia wewnątrzgałkowego, co prowadzi do zapadnięcia się gałki ocznej i uszkodzenia siatkówki.\nC. Zaćma (cataract) polega na zmętnieniu soczewki oka — najczęstszą przyczyną jest denaturacja krystaliny (białek soczewki) w wyniku starzenia, promieniowania UV lub cukrzycy.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: geny opsyn czopków L i M: chromosom X (sprzężone z płcią); S: autosomalny. Mężczyźni (XY): jeden allel → jeśli wadliwy, choroba. Kobiety (XX): dwa allele → nosicielki. Częstość daltonizmu: ~8% mężczyzn, ~0,5% kobiet. B — FAŁSZ: jaskra = ZBYT WYSOKIE ciśnienie wewnątrzgałkowe (>21 mmHg) z powodu zaburzonego odpływu cieczy wodnistej → ucisk na nerw wzrokowy → stopniowa utrata pola widzenia i ślepota (b. podstępna choroba, bo bezbólowa). C — PRAWDA: krystaliny to stabilne białka, które w normalnych warunkach nie ulegają wymianie przez całe życie; starzenie, UV (szczególnie UVB), hiperglikemia (glukoza → sorbitol → obrzęk osmotyczny) → denaturacja, agregacja krystaliny → zmętnienie → ograniczenie transmisji światła. Leczenie: operacja (wymiana soczewki na sztuczną).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Budowa i funkcja ucha ───
  {
    subtopic: 'Narządy zmysłów — Budowa i funkcja ucha',
    subtopic_id: S.ucho,
    question_type: 'single',
    question_text: 'Ucho dzieli się na trzy części. Wskaż prawidłowe zestawienie ich budowy i funkcji.',
    options: [
      { id: 'A', text: 'Ucho zewnętrzne (małżowina + przewód słuchowy + błona bębenkowa) — zbiera i przewodzi fale dźwiękowe; ucho środkowe (kosteczki: młoteczek, kowadełko, strzemiączko) — wzmacnia i przewodzi drgania; ucho wewnętrzne (ślimak + narząd przedsionkowy) — zamienia drgania w impulsy nerwowe', is_correct: true },
      { id: 'B', text: 'Ucho zewnętrzne zawiera kosteczki słuchowe; ucho środkowe — ślimak; ucho wewnętrzne — małżowinę uszną', is_correct: false },
      { id: 'C', text: 'Kosteczki słuchowe są zlokalizowane w uchu wewnętrznym i bezpośrednio stymulują nerw słuchowy', is_correct: false },
      { id: 'D', text: 'Błona bębenkowa należy do ucha środkowego i wytwarza ciecz limfatyczną niezbędną do przekazywania dźwięków', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ucho zewnętrzne: małżowina uszna (zbieranie dźwięku), przewód słuchowy zewnętrzny (z woskowymi gruczołami), błona bębenkowa. Ucho środkowe: 3 kosteczki (ossicula): młoteczek (malleus) → kowadełko (incus) → strzemiączko (stapes; ok. 3 mg — najmniejsza kość ciała); trąbka Eustachiusza (wyrównuje ciśnienie z gardłem). Wzmocnienie dźwięku: ratio powierzchni błony bębenkowej do okienka owalnego ≈ 17:1 + dźwignia kosteczek → łącznie ~22-dkrotne wzmocnienie ciśnienia akustycznego. Ucho wewnętrzne: ślimak (cochlea, narząd Cortiego — komórki rzęsate → nerw słuchowy VIII), narząd przedsionkowy (łagiewka, woreczek, kanały półkoliste → równowaga).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Budowa i funkcja ucha',
    subtopic_id: S.ucho,
    question_type: 'single',
    question_text: 'Narząd Cortiego zlokalizowany w ślimaku jest odpowiedzialny za zamianę drgań mechanicznych w sygnał nerwowy. Które stwierdzenie POPRAWNIE opisuje ten proces?',
    options: [
      { id: 'A', text: 'Drgania strzemiączka → okienko owalne → perilimfa poruszona → błona podstawna (basilar membrane) ugina się → komórki rzęsate (hair cells) — stereocylia wyginają się → otwierają kanały jonowe → depolaryzacja → neurotransmiter do nerwu słuchowego', is_correct: true },
      { id: 'B', text: 'Dźwięk → błona bębenkowa → bezpośrednio elektryczny sygnał → ślimak wzmacnia sygnał elektrycznie i przesyła do kory', is_correct: false },
      { id: 'C', text: 'Perilimfa drgająca w ślimaku bezpośrednio aktywuje nerw słuchowy przez kontakt chemiczny — bez pośrednictwa komórek rzęsatych', is_correct: false },
      { id: 'D', text: 'Komórki rzęsate ślimaka wydzielają rodopsynę, która absorbuje fale dźwiękowe i zamienia je w impulsy nerwowe analogicznie do czopków siatkówki', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Transdukcja mechanosensoryczna w narządzie Cortiego: drgania strzemiączka → okienko owalne (fenestra ovalis) → fala ciśnienia w perilimfie (scala vestibuli → scala tympani) → ugięcie błony podstawnej (różne miejsca dla różnych częstotliwości — tonotopia: podstawa = wysokie tony, szczyt = niskie tony) → ugięcie stereocylii komórek rzęsatych względem błony pokrywającej (tectorial membrane) → mechaniczne otwarcie kanałów K⁺/Ca²⁺ (tip links) → napływ K⁺ (z endolimfy bogatej w K⁺) → depolaryzacja komórek rzęsatych → wydzielanie glutaminianu → aktywacja aferentnych włókien nerwu słuchowego (n. VIII). Tonotopia umożliwia odróżnianie wysokości dźwięku.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Słyszenie i równowaga ───
  {
    subtopic: 'Narządy zmysłów — Słyszenie i równowaga',
    subtopic_id: S.sluch,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących układu przedsionkowego i równowagi:\nA. Kanały półkoliste (3 pary, prostopadłe do siebie) wykrywają przyśpieszenia kątowe (obroty głowy) — przepływ endolimfy w kanale ugina grzebykiem (cupula) i stereocyliami komórek rzęsatych.\nB. Łagiewka i woreczek (utriculus i sacculus) zawierają plamki otolityczne (maculae) z otolitami (kryształki węglanu wapnia) — wykrywają przyśpieszenia liniowe i pozycję głowy względem grawitacji.\nC. Nerw przedsionkowy (część VIII nerwu czaszkowgo) przekazuje sygnały równowagi bezpośrednio do kory ruchowej, omijając móżdżek i pień mózgu.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: 3 kanały półkoliste (poziomy, strzałkowy, czołowy) → wzajemnie prostopadle = wykrywanie rotacji w każdej płaszczyźnie 3D. Obrót → endolimfa "lenieje" z bezwładności → ugina cupulę → stereocylia → sygnał. B — PRAWDA: otolity (CaCO₃ = kalcyt) na błonie otolitycznej = ciężarki → przy przyśpieszeniu liniowym lub zmianie pozycji względem g → ślizgają się → wyginają stereocylia → sygnał o kierunku grawitacji i przyśpieszeniu liniowym. C — FAŁSZ: nerw przedsionkowy (n. VIII, pars vestibularis) → jądra przedsionkowe w pniu mózgu → móżdżek (koordynacja) → rdzeniowe jądra ruchowe (odruchy) + kora przedsionkowa. Móżdżek jest kluczowy dla integracji równowagi z napięciem mięśniowym.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Słyszenie i równowaga',
    subtopic_id: S.sluch,
    question_type: 'single',
    question_text: 'Głuchota przewodzeniowa (conductive hearing loss) różni się od głuchoty odbiorczej (sensorineural hearing loss). Które zestawienie POPRAWNIE opisuje ich przyczynę?',
    options: [
      { id: 'A', text: 'Głuchota przewodzeniowa: uszkodzenie ślimaka lub nerwu słuchowego; głuchota odbiorcza: blokada mechaniczna w uchu zewnętrznym lub środkowym', is_correct: false },
      { id: 'B', text: 'Głuchota przewodzeniowa: zaburzenie mechanicznego przewodzenia dźwięku (np. zatkany woskowinę przewód, perforacja błony bębenkowej, skostnienie kosteczek w otosklerozie); głuchota odbiorcza: uszkodzenie komórek rzęsatych ślimaka lub nerwu słuchowego (np. hałas, wiek, leki ototoksyczne)', is_correct: true },
      { id: 'C', text: 'Głuchota przewodzeniowa dotyczy wyłącznie dzieci; odbiorcza — wyłącznie dorosłych po 60. roku życia', is_correct: false },
      { id: 'D', text: 'Obie formy głuchoty mają identyczne przyczyny — różni je wyłącznie stopień nasilenia objawów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Głuchota przewodzeniowa: problem z mechanicznym przekazywaniem drgań dźwięku do ucha wewnętrznego. Przyczyny: czop woskowinowy, zapalenie ucha środkowego (otitis media) z płynem, perforacja błony bębenkowej, otoskleroza (unieruchomienie strzemiączka przez patologiczne kości). Można często leczyć (mycie uszu, operacja). Aparat słuchowy pomaga. Głuchota odbiorcza (sensorineuralna): uszkodzenie komórek rzęsatych (ślimaka) lub włókien nerwu VIII. Przyczyny: długotrwały hałas > 85 dB (hałas powoduje mechaniczne uszkodzenie stereocylii), starzenie (presbyacusis — najpierw traci się wysokie częstotliwości), leki ototoksyczne (gentamycyna, cisplatyna), wirusowe (odra, świnka). Często nieodwracalna; implant ślimakowy (cochlear implant) w ciężkich przypadkach.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Chemoreceptory ───
  {
    subtopic: 'Narządy zmysłów — Chemoreceptory',
    subtopic_id: S.chemo,
    question_type: 'single',
    question_text: 'Receptory smaku (kubki smakowe) zlokalizowane są przede wszystkim na brodawkach smakowych języka. Ile podstawowych smaków rozróżniają chemoreceptory smakowe człowieka?',
    options: [
      { id: 'A', text: 'Trzy smaki: słodki, kwaśny, gorzki', is_correct: false },
      { id: 'B', text: 'Cztery smaki: słodki, kwaśny, słony, gorzki', is_correct: false },
      { id: 'C', text: 'Pięć smaków: słodki, kwaśny, słony, gorzki, umami (glutaminian) — inne smaki (np. tłusty, metaliczny) są nadal badane', is_correct: true },
      { id: 'D', text: 'Siedem smaków: słodki, kwaśny, słony, gorzki, umami, pikantny, cierpki', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: '5 podstawowych smaków (udowodnionych receptorowo): (1) Słodki: receptory GPCR (TAS1R2+TAS1R3) → cukry, sztuczne słodziki. (2) Umami ("smaczny"): TAS1R1+TAS1R3 → glutaminian, asparaginan; odkryty przez Ikedę (1908). (3) Gorzki: TAS2R (ok. 25 typów!) → alkaloidы, glikozydy; sygnał ostrzegawczy przed toksynami. (4) Słony: kanały jonowe (ENaC) → Na⁺. (5) Kwaśny: kanały protonoczułe (PKD2L1, OTOP1) → H⁺. Uwaga: pikantność (kapsaicyna) i cierpkość (garbniki) NIE są smakami — aktywują receptory bólu i dotyku (TRPV1). Smak = chemorecepcja + zapach (80% wrażenia smakowego to olfakcja!) + tekstura, temperatura.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Chemoreceptory',
    subtopic_id: S.chemo,
    question_type: 'single',
    question_text: 'Nabłonek węchowy (olfaktoryczny) zlokalizowany jest w górnej części jamy nosowej. Jak molekuły zapachowe wywołują sygnał nerwowy?',
    options: [
      { id: 'A', text: 'Molekuły zapachowe dyfundują przez krew do opuszki węchowej i tam bezpośrednio aktywują neurony — nos służy tylko filtracji i nawilżaniu powietrza', is_correct: false },
      { id: 'B', text: 'Molekuły zapachowe wiążą się z receptorami węchowymi (GPCR, kodowane przez największą rodzinę genów u ssaków: ~400 u człowieka) na rzęskach neuronów węchowych → cAMP → depolaryzacja → sygnał przez nerw węchowy (I) do opuszki węchowej → kora węchowa', is_correct: true },
      { id: 'C', text: 'Nos wykrywa zapachy termicznie — molekuły zapachowe podgrzewają zakończenia nerwów węchowych, co jest interpretowane jako konkretny zapach', is_correct: false },
      { id: 'D', text: 'Receptor węchowy jest wspólny dla wszystkich zapachów — różnicowanie zapachów zachodzi wyłącznie w korze mózgowej przez uczenie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Olfakcja: (1) Odoranty (molekuły zapachowe, lipofilne) docierają do nabłonka węchowego w szczycie jamy nosowej i rozpuszczają się w śluzie. (2) Wiążą do receptorów olfaktorycznych (OR) na rzęskach bipolarnuych neuronów węchowych — GPCR sprzężone z Gα-olf → aktywacja AC III → cAMP → otwarcie CNG-kanałów → napływ Ca²⁺ i Na⁺ → depolaryzacja. (3) Każdy neuron węchowy = jeden typ OR (~400 genów u człowieka, ~1000 u myszy; największa rodzina GPCR). (4) Aksony neuronów → kłębuszki w opuszce węchowej (glomeruli, jeden OR = jeden kłębuszek) → komórki mitralne → droga węchowa → kora piriformna, ciało migdałowate (emocje, pamięć węchowa!). Bezpośrednie połączenie z układem limbicznym wyjaśnia silny związek zapachu z emocjami.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Chemoreceptory',
    subtopic_id: S.chemo,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chemoreceptorów:\nA. Chemoreceptory centralne (w rdzeniu przedłużonym) wykrywają głównie stężenie CO₂ / pH płynu mózgowo-rdzeniowego — są kluczowe dla regulacji oddychania.\nB. Kubki smakowe zawierają neurony czuciowe, które przeżywają przez całe życie organizmu i nie ulegają wymianie.\nC. Ciałka szyjne (glomus caroticum) są obwodowymi chemoreceptorami wykrywającymi spadek pO₂, wzrost pCO₂ i spadek pH we krwi tętniczej — sygnalizują do ośrodka oddechowego w pniu mózgu.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: chemoreceptory centralne: na powierzchni rdzenia przedłużonego, wykrywają pH/pCO₂ płynu mózgowo-rdzeniowego (CO₂ dyfunduje przez barierę krew-mózg → tworzy H₂CO₃ → H⁺ → spadek pH → pobudzenie → wzrost wentylacji). Główny sygnał dla głębokości oddechu. B — FAŁSZ: komórki smakowe (gustatory receptor cells) to komórki nabłonkowe (nie neurony!), ulegają ciągłej wymianie co ok. 10–14 dni. Neurony pierwszorzędowe smaku są w zwojach nerwów czaszkowch (VII, IX, X). C — PRAWDA: ciałka szyjne (glomus caroticum, przy rozwidleniu tętnicy szyjnej) = obwodowe chemoreceptory arteryjne; wykrywają hypoksję (pO₂ < 60 mmHg), hiperkapnię, kwasicę → n. IX (Hering) → ośrodek oddechowy w rdzeniu przedłużonym → wzrost wentylacji. Ciałka aortalne (glomus aorticum) — podobna funkcja.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Receptory skórne ───
  {
    subtopic: 'Narządy zmysłów — Receptory skórne',
    subtopic_id: S.skora,
    question_type: 'single',
    question_text: 'Skóra zawiera wiele typów receptorów czuciowych. Które zestawienie POPRAWNIE przyporządkowuje receptory do ich funkcji?',
    options: [
      { id: 'A', text: 'Ciałka Meissnera — wibracja i dotyk lekki (w brodawkach skórnych, opuszki palców); ciałka Pacciniego — nacisk głęboki i wibracja (w tkance podskórnej); wolne zakończenia nerwowe — ból (nocycepcja) i temperatura', is_correct: true },
      { id: 'B', text: 'Ciałka Pacciniego — temperatura; wolne zakończenia — dotyk; ciałka Meissnera — ból', is_correct: false },
      { id: 'C', text: 'Wszystkie receptory skórne są identyczne — różnicowanie bodźców następuje wyłącznie w korze mózgowej', is_correct: false },
      { id: 'D', text: 'Wolne zakończenia nerwowe reagują tylko na bodźce mechaniczne; ciałka Meissnera — wyłącznie na temperaturę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Receptory skórne (mechanoreceptory i termoreceptory): (1) Ciałka Meissnera (Meissner): naskórek właściwy, brodawki skórne; szybko adaptujące, typ SAI → dotyk lekki, tekstura, ruch obiektu po skórze; gęste na opuszkach palców, wargach. (2) Ciałka Merkel (tarczki Merkla): powolnie adaptujące (SAI) → kształt, krawędzie. (3) Ciałka Pacciniego (Vater-Pacini): duże, warstwowe, w tkance podskórnej; szybko adaptujące (RAIl) → wibracja 200–300 Hz, nacisk głęboki. (4) Ciałka Ruffiniego: powolnie adaptujące → rozciąganie skóry, ciepło. (5) Wolne zakończenia nerwowe: ból (nocycepcja), temperatura (zimno: TRPM8; gorąco/ból: TRPV1), świąd. (6) Receptory włosa (perifollicular): ruch włosa = dotyk.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Receptory skórne',
    subtopic_id: S.skora,
    question_type: 'single',
    question_text: 'Nocycepcja (odczuwanie bólu) jest ważnym mechanizmem ochronnym. Które stwierdzenie POPRAWNIE opisuje dwa typy bólu ostrego?',
    options: [
      { id: 'A', text: 'Ból szybki (ostry, kłujący) — włókna Aδ (mielinowane, szybkie ~20 m/s) → dokładnie zlokalizowany, pojawia się natychmiast; ból wolny (palący, tępy) — włókna C (niemielinowane, powolne ~1–2 m/s) → słabiej zlokalizowany, pojawia się z opóźnieniem', is_correct: true },
      { id: 'B', text: 'Ból szybki przewodzą włókna C (niemielinowane); ból wolny — włókna Aδ (mielinowane)', is_correct: false },
      { id: 'C', text: 'Oba typy bólu są przewodzone przez identyczne włókna — różni je tylko intensywność bodźca', is_correct: false },
      { id: 'D', text: 'Ból jest przewodzony wyłącznie przez jedno włókno Aβ na każdy obszar ciała — nie ma podziału na typy bólu ostrego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Drogi bólu ostrego: (1) Włókna Aδ (cienkie, mielinowane, 5–30 m/s): reagują na bodźce mechaniczne i termiczne (mech-termoreceptory) → ból szybki ("first pain"): kłujący, ostry, dobrze zlokalizowany, pojawia się w ułamku sekundy → skłania do natychmiastowej reakcji (odruch cofnięcia ręki). (2) Włókna C (niemielinowane, 0,5–2 m/s): polimodalne nocyceptory (mechaniczne, termiczne, chemiczne — np. bradykinina, histamina, H⁺, kapsaicyna via TRPV1) → ból wolny ("second pain"): palący, tępy, słabiej zlokalizowany, pojawia się po 0,5–2 s, długotrwały. Droga do mózgu: rdzeń kręgowy → skrzyżowanie → droga rdzeniowo-wzgórzowa → wzgórze → kora somatosensoryczna. Modulacja bólu: opioidowe peptydy endogenne (endorfiny, enkefaliny).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Receptory skórne',
    subtopic_id: S.skora,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących odczuwania temperatury:\nA. Receptor zimna TRPM8 (kanał jonowy) aktywowany jest przez chłód (poniżej 25°C) i mentol — stąd uczucie chłodzącego smaku mentolu nawet w temperaturze pokojowej.\nB. Receptor ciepła/bólu TRPV1 aktywowany jest przez temperaturę powyżej 43°C i przez kapsaicynę (substancja aktywna papryczki chili) — dlatego chili jest odczuwane jako "ostre".\nC. Receptory temperatury skóry są wyłącznie proprioreceptorami — informacja o temperaturze pochodzi jedynie z narządów wewnętrznych.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, P, F', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: TRPM8 (Transient Receptor Potential Melastatin 8) = receptor zimna i mentolu; aktywowany przez T < 25°C i przez mentol, icilin, eukaliptol → wrażenie chłodzenia. Ewolucja molekularna receptorów smaku: mentol aktywuje TRPM8 w jamie ustnej → fałszywy sygnał zimna = "odświeżający smak". B — PRAWDA: TRPV1 (Transient Receptor Potential Vanilloid 1) = kapsaicynowy receptor; aktywowany przez T > 43°C i kapsaicynę → ten sam szlak bólowy = "pieczenie". Dlatego capsaicin wywołuje uczucie bólu/gorąca, nie smaku (ból nocyceptywny, nie chemorecepcja smaku). C — FAŁSZ: termoreceptory skórne są eksteroreceptorami (wykrywają temperaturę otoczenia/bodźce zewnętrzne). Proprioreceptory = wykrywają pozycję ciała (mięśniowe wrzeciona, narządy Golgiego). Interoceptory = narządy wewnętrzne.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Narządy zmysłów — Receptory skórne',
    subtopic_id: S.skora,
    question_type: 'single',
    question_text: 'Proprioreceptory informują mózg o pozycji ciała i ruchu. Które struktury należą do proprioreceptorów i jaką funkcję pełnią?',
    options: [
      { id: 'A', text: 'Wrzeciona mięśniowe (muscle spindles) wykrywają rozciąganie mięśnia (długość i szybkość rozciągania); narządy ścięgniste Golgiego (Golgi tendon organs) wykrywają napięcie ścięgna — razem umożliwiają koordynację ruchów i utrzymanie postawy (propriocepcja)', is_correct: true },
      { id: 'B', text: 'Ciałka Pacciniego i Meissnera to proprioreceptory — wykrywają ruch stawów przez detekcję nacisku na skórę nad stawem', is_correct: false },
      { id: 'C', text: 'Proprioreceptory to wyłącznie narząd Cortiego i kanały półkoliste — nie ma proprioreceptorów w mięśniach i ścięgnach', is_correct: false },
      { id: 'D', text: 'Wrzeciona mięśniowe wykrywają siłę skurczu mięśnia; narządy Golgiego — długość mięśnia w spoczynku', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Proprioreceptory (receptory czucia głębokiego): (1) Wrzeciona mięśniowe (muscle spindles): wyspecjalizowane włókna intrafuzalne (Ia i II aferentne) owinięte wokół środkowej (niekurczliwej) części wrzeciona → wykrywają rozciąganie mięśnia (długość i szybkość); podstawa odruchu na rozciąganie (odruch kolanowy: uderzenie w ścięgno piszczelowe → rozciągnięcie m. czworogłowego → odruch). (2) Narządy ścięgniste Golgiego (GTO): na styku mięsień-ścięgno; Ib aferentne → wykrywają napięcie ścięgna; przy zbyt dużym napięciu: inhibicja mięśnia (odruch myotatyczny odwrócony = ochrona przed zerwaniem). (3) Receptory stawowe: w torebkach stawowych → kąt i ruch stawu. Wszystko razem → móżdżek integruje → płynne, skoordynowane ruchy.',
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
  console.log(`Seeding ${questions.length} mock questions for Narzady zmyslow...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
