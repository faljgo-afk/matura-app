// Seed batch 2/6 — Ekologia
// Łańcuchy i sieci pokarmowe (2) + Przepływ energii (6) + Obieg materii (2)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '27daaa5f-30d8-4519-a525-4b136cad02f2'

const S = {
  lancuchy: 'd012abdd-8747-4b9d-bffd-fa4928e8b48c',
  energia:  'a6a5a9e9-026e-4ef4-9857-5ef0f07cdcff',
  obieg:    '8de030ed-9c47-429a-b69a-6356cbbf57fb',
}

const questions = [

  // ── ŁAŃCUCHY I SIECI POKARMOWE (2) ───────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.lancuchy, question_type: 'single',
    question_text: 'Bioakumulacja i biomagnifikacja to zjawiska dotyczące kumulowania się zanieczyszczeń w sieci pokarmowej. Które stwierdzenie POPRAWNIE je opisuje?',
    options: [
      { id: 'A', text: 'Bioakumulacja: gromadzenie się substancji w organizmie w stężeniu wyższym niż w środowisku; biomagnifikacja: wzrost stężenia substancji w kolejnych ogniwach łańcucha pokarmowego; DDT, PCB, rtęć i dioksyny ulegają biomagnifikacji bo są lipofilne i nie ulegają metabolizmowi', is_correct: true },
      { id: 'B', text: 'Bioakumulacja i biomagnifikacja dotyczą wyłącznie składników odżywczych (witamin, soli mineralnych) kumulowanych przez producenta; substancje toksyczne nie mogą się kumulować w tkankach zwierząt bo są szybko metabolizowane przez wątrobę', is_correct: false },
      { id: 'C', text: 'Biomagnifikacja oznacza, że stężenie substancji maleje na wyższych poziomach troficznych — drapieżniki mają niższe stężenie toksyn niż ich ofiary, ponieważ duże ciało rozcieńcza zanieczyszczenia', is_correct: false },
      { id: 'D', text: 'Bioakumulacja dotyczy wyłącznie pierwiastków radioaktywnych (Cs-137, Sr-90); związki chemiczne organiczne (pestycydy, PCB) są rozkładane przez destruentów zanim dotrą do wyższych ogniw łańcucha pokarmowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'BIOAKUMULACJA: organizm pobiera substancję szybciej niż ją wydala/metabolizuje → koncentracja w tkankach > środowisko. BIOMAGNIFIKACJA: stężenie rośnie na każdym poziomie troficznym (konsument ma wyższe niż ofiara). Substancje podatne: lipofilne (DDT, PCB, dioksyny, metylortęć) — gromadzą się w tkance tłuszczowej, nie wydalane przez nerki; ciągłe spożywanie ofiar kumuluje toksyny. Klasyczny przykład: DDT w jeziorze Clear Lake (Kalifornia, 1949): woda: 0,02 ppb → plankton: 5 ppb → drobne ryby: 40–300 ppb → perkozy (ptaki): 1600 ppb (×80 000 vs woda). Efekty biomagnifikacji DDT: cienkie skorupki jaj — orzeł bielik i sokół wędrowny niemal wyginęły; zakaz DDT w USA 1972 → odbudowa populacji. Rtęć: tuna, miecznik — najwyższe stężenia, ostrzeżenia WHO dla kobiet ciężarnych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lancuchy, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących różnych typów łańcuchów pokarmowych:',
    options: [
      { id: 'A', text: 'W ekosystemach leśnych większa część produkcji pierwotnej brutto przepływa przez łańcuch detrytusowy (martwa materia organiczna → destruenci) niż przez łańcuch spasania (żywe rośliny → roślinożercy), ponieważ większość biomasy roślinnej nie jest zjadana na żywo lecz obumiera i trafia do ściółki.', is_correct: true },
      { id: 'B', text: 'Łańcuchy pokarmowe w ekosystemach głębinowych (strefa abysalna oceanu) zaczynają się od fotosyntezy — choć nie dociera tam światło, glony przystosowały się do fotosyntezy przy ekstremalnie słabym oświetleniu bioluminescencyjnych organizmów.', is_correct: false },
      { id: 'C', text: 'Organizmy chemosyntetyzujące (np. bakterie siarkowe Thiobacillus, bakterie nitryfikacyjne Nitrosomonas) mogą pełnić rolę producentów w ekosystemach pozbawionych światła słonecznego — np. przy kominach hydrotermalnych na dnie oceanu.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: w lesie liściastym tylko ~10% NPP (net primary production) jest spasana przez fitofagi; ~90% trafia jako opad liści, martwe drewno → ściółka → detrytusożercy (dżdżownice, skoczogonki, krocionogi) → destruenci (grzyby, bakterie). Wyróżnienie: ekosystemy morskie (pelagial) — odwrotnie: zooplankton spasa do 80% fitoplanktonu. B — Fałsz: strefa abysalna (>4000 m) jest całkowicie pozbawiona światła słonecznego i fotosynteza tam nie zachodzi; źródłem materii organicznej jest "deszcz morski" (marine snow) — opadające szczątki z eufotycznej; przy kominach hydrotermalnych (black smokers): chemosynteza. C — Prawda: kominy hydrotermalne (Galapagos Rift, odkrycie 1977): Thiobacillus, Beggiatoa — utlenianie H₂S → ATP bez światła; rury robacze (Riftia pachyptila) hostem dla endosymbiotycznych bakterii siarkowych; całe ekosystemy oparte na chemolitoautotrofii.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── PRZEPŁYW ENERGII (6) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.energia, question_type: 'single',
    question_text: 'Produkcja pierwotna brutto (GPP) i produkcja pierwotna netto (NPP) to kluczowe pojęcia ekologii energetycznej. Czym się różnią?',
    options: [
      { id: 'A', text: 'GPP = całkowita ilość energii związanej przez producenta w procesie fotosyntezy (lub chemosyntezy) w jednostce czasu; NPP = GPP − energia wydana przez producenta na własną respirację; NPP to energia dostępna dla konsumentów i destruentów', is_correct: true },
      { id: 'B', text: 'GPP obejmuje tylko energię związaną przez fotosyntezę, NPP obejmuje energię związaną przez fotosyntezę i chemosyntezę łącznie; różnica między GPP a NPP to energia tracona przez konsumentów na trawienie', is_correct: false },
      { id: 'C', text: 'NPP jest zawsze większa niż GPP, ponieważ NPP uwzględnia dodatkowe źródła energii (np. energię z rozkładu materii organicznej); GPP jest pojęciem przestarzałym nieużywanym w nowoczesnej ekologii', is_correct: false },
      { id: 'D', text: 'GPP i NPP są synonimami; różnica terminologiczna wynika z różnych tradycji naukowych (europejskiej i amerykańskiej); obie wartości są mierzone identyczną metodą i dają te same wyniki', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Produkcja ekologiczna: GPP (Gross Primary Production): całkowita energia zasymilowana przez producentów (asymilacja CO₂ w fotosyntezie); mierzona w J/m²/rok lub g C/m²/rok; NPP (Net Primary Production): GPP − Ra (respiracja autotrofów); energia dostępna dla heterotrofów; NPP = ΔBiomasa + Litopad + Spasanie + Wydzieliny; globalne NPP: ~120 Pg C/rok (lasy: 53 Pg, oceany: 49 Pg, łąki/tundra: reszta). Przykłady NPP [g C/m²/rok]: las tropikalny: 800–2000; las umiarkowany: 400–800; łąka: 150–500; tundra: 40–100; pustynia: <40; ocean otwarty: 50–150. Rola NPP: wyznacza pojemność środowiska (carrying capacity); biomasa wszystkich konsumentów zależy od NPP; zmiany klimatu → zmiany NPP (+ w rejonach arktycznych, − w subtropikach).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.energia, question_type: 'multiple',
    question_text: 'Tabela przedstawia dane energetyczne ekosystemu trawiastego [kJ/m²/rok]: Produkcja pierwotna brutto = 20 000; Respiracja roślin = 8 000; Spasanie przez roślinożerców = 3 000; Przyrost biomasy roślinożerców = 400. Które z poniższych POPRAWNIE wynikają z tych danych? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Produkcja pierwotna netto (NPP) = 20 000 − 8 000 = 12 000 kJ/m²/rok; ilość ta jest dostępna dla konsumentów i destruentów', is_correct: true },
      { id: 'B', text: 'Sprawność spasania (consumption efficiency) = spasanie / NPP = 3 000 / 12 000 = 25%; oznacza to, że 75% NPP trafia do łańcucha detrytusowego (nie jest spasane na żywo)', is_correct: true },
      { id: 'C', text: 'Produkcja wtórna netto roślinożerców = 400 kJ/m²/rok; sprawność asymilacji roślinożerców (assimilation efficiency) = 400 / 3000 = 13,3%; pozostałe 86,7% jest tracone jako egesta (kał) i przez respirację', is_correct: false },
      { id: 'D', text: 'Sprawność ekologiczna (ecological efficiency) transferu energia→roślinożercy = przyrost biomasy / NPP = 400 / 12 000 ≈ 3,3%; w typowych ekosystemach wartość ta wynosi 5–20%, więc wynik wskazuje na niską efektywność łańcucha pokarmowego', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) NPP = GPP − Ra = 20 000 − 8 000 = 12 000 kJ/m²/rok ✓ (B) Consumption efficiency (CE) = In / NPP = 3000 / 12 000 = 0,25 = 25% ✓; reszta 75% (9000 kJ) trafia do detrytusowego. (C) fałsz: 400/3000 = 13,3% ale TO JEST production efficiency (P/A), nie assimilation efficiency; assimilation efficiency = A/In = (In − E)/In; z danych nie wiemy ile to egesta, więc nie możemy obliczyć assimilation efficiency; sprawność asymilacji zwierząt typowo: roślinożercy: 40–80%, drapieżniki: 80–90%. Poprawna sekwencja: In (spasanie, 3000) → E (egesta, niestrawione) + A (asymilacja) = In; A → R (respiracja) + P (produkcja netto, 400). (D) Ecological efficiency (EE) = P₂ / P₁ = 400 / 12 000 ≈ 3,3% ✓; niższe niż typowe 5–20% może oznaczać: duże straty na respirację (aktywne ssaki), duże egesta (celuloza trudna do trawienia), lub wysoka presja drapieżnicza redukująca przyrost.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.energia, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących produktywności ekosystemów:',
    options: [
      { id: 'A', text: 'Ekosystemy estuariów (ujścia rzek), raf koralowych i lasów tropikalnych należą do najbardziej produktywnych na Ziemi (NPP > 1000 g C/m²/rok), podczas gdy otwarte wody oceaniczne i pustynie należą do najmniej produktywnych.', is_correct: true },
      { id: 'B', text: 'Wzrost stężenia CO₂ w atmosferze zawsze i we wszystkich ekosystemach zwiększa NPP (efekt nawożenia CO₂), ponieważ CO₂ jest substratem fotosyntezy; nie istnieją żadne inne czynniki limitujące, które mogłyby ograniczyć ten pozytywny efekt.', is_correct: false },
      { id: 'C', text: 'Ekosystemy głębinowe (abysalne strefy oceanu) mają bardzo niską NPP z powodu braku światła, jednak ich produkcja wtórna może być relatywnie wysoka dzięki "martwemu deszczowi" (marine snow) z warstw eufotycznych.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: estuaria: rzeki niosą biogeny → bogata fauna i flora; NPP ~1500 g C/m²/rok; rafy koralowe: mutualizm z zooxanthellae (Symbiodinium) → NPP ~2000 g C/m²/rok; lasy tropikalne: ciepło + woda + nasłonecznienie przez cały rok → NPP ~800–2000 g C/m²/rok; otwary ocean: oligotroficzny (ubogi w P i N) → NPP ~50–150 g C/m²/rok; pustynia → ~10–40 g C/m²/rok. B — Fałsz: "CO₂ fertilization effect" jest realny (FACE experiments: wzrost NPP o 10–20% przy podwojeniu CO₂) ale ograniczony przez: (1) N i P limitację — rośliny potrzebują azotu do rubisco; (2) temperaturę (wzrost T → wzrost respiracji, net NPP może maleć); (3) suszę (stomata zamknięte przy stresie wodnym → mniej CO₂ wewnątrz liścia); w wielu biomed GPP rośnie, ale NPP już nie. C — Prawda: abysalna (>4000 m): bez NPP; marine snow (agregaty detrytusu, kał, ciała organizmów) opada 2–4 cm/dobę → 6–12 miesięcy z powierzchni; >99% rozłożone zanim dotrze; ale to, co dociera, żywi faunę bentoniczną (holothurie, wieloszczety, ślimaki głębinowe).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.energia, question_type: 'single',
    question_text: 'Dlaczego ekologowie zalecają spożywanie produktów roślinnych zamiast mięsa jako strategię zmniejszenia presji na środowisko? Które stwierdzenie POPRAWNIE wyjaśnia ten argument z perspektywy energetyki ekosystemów?',
    options: [
      { id: 'A', text: 'Żywiąc się roślinami (poziom 2), człowiek korzysta bezpośrednio z NPP; żywiąc się mięsem zwierząt hodowlanych (poziom 3), traci się ~90% energii na każdy transfer troficzny — do produkcji 1 kg wołowiny potrzeba ~7–10 kg paszy roślinnej', is_correct: true },
      { id: 'B', text: 'Rośliny zawierają więcej kalorii niż mięso w przeliczeniu na gram masy; człowiek musi zjeść więcej mięsa niż roślin by przeżyć; dlatego dieta mięsna wymaga większych połaci upraw paszowych niż dieta roślinna', is_correct: false },
      { id: 'C', text: 'Mięso nie zawiera żadnej energii użytecznej dla człowieka; białka zwierzęce są całkowicie niestrawne przez ludzki układ pokarmowy; człowiek jest bilogicznie herbiworem i jego enzymaty nie trawią białek zwierzęcych', is_correct: false },
      { id: 'D', text: 'Argument jest błędny — produkcja mięsa jest bardziej efektywna energetycznie niż uprawa roślin, ponieważ zwierzęta konwertują paszę na białko z wyższą sprawnością niż rośliny produkują białko przez fotosyntezę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Argument energetyczny dla diety roślinnej: sprawność transferu troficznego ~10% → każde ogniwo łańcucha traci ~90% energii. Przeliczniki pasz (feed conversion ratio): wołowina: 6–8 kg paszy / kg mięsa; wieprzowina: 3–4 kg/kg; kurczak: 1,7–2 kg/kg; ryby hodowlane: 1,2–2 kg/kg; lentilki: 1 kg/kg. Ślad środowiskowy: wołowina: ~60 kg CO₂e/kg (produkcja metanu, wylesianie); soja: ~2 kg CO₂e/kg; 1 hamburger: ~165 g CO₂ (przejazd 600 km). WYJĄTKI: (1) zwierzęta pastwiskowe na terenach nienawadnianych (owce w górach) mogą być efektywniejsze niż uprawa zbóż wymagająca irygacji; (2) rybołówstwo pelagiczne: tanie energetycznie, jeśli zarządzane zrównoważone. W polskim CKE pytanie o sprawność troficzną pojawia się regularnie.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.energia, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnice między produkcją pierwotną a wtórną? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Produkcja pierwotna (roślin, glonów, sinic): synteza związków organicznych z nieorganicznych przy użyciu energii słonecznej (fotosynteza) lub chemicznej (chemosynteza); produkcja wtórna (zwierzęta, grzyby): synteza biomasy z gotowych związków organicznych pobranych z pożywienia', is_correct: true },
      { id: 'B', text: 'Produkcja wtórna netto konsumenta oblicza się jako: Asymilacja (A) − Respiracja własna (R); pozostała po respiracji energia zostaje wbudowana w biomasę ciała lub przeznaczona na rozród', is_correct: true },
      { id: 'C', text: 'Destruenci (grzyby i bakterie) nie mają własnej produkcji wtórnej — całą pobieraną energię tracą jako ciepło w procesie mineralizacji; nie wbudowują żadnej energii w swoją biomasę', is_correct: false },
      { id: 'D', text: 'Produkcja wtórna roślinożerców jest zawsze wyższa niż produkcja pierwotna netto ekosystemu, w którym żyją, ponieważ roślinożercy są bardziej efektywni metabolicznie niż rośliny', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: '(A) klasyfikacja produkcji: autotroficzna (P1 = primary) → heterotroficzna (P2 = secondary); chemosynteza: ekosystemy głębinowe, gleby (nitryfikacja). (B) P_netto = A − R; A = In − E (In = ingestion/spasanie; E = egesta/kał); przykład: zając spasie 100 kJ siana: E = 50 kJ (celuloza niestrawiona) → A = 50 kJ; R = 44 kJ → P_netto = 6 kJ (przyrost biomasy + rozród). (C) fałsz: destruenci MAJĄ własną biomasę (biomasa bakterii w glebie: 0,3–0,4 kg/m² suchej masy; grzyby: 0,1–2 kg/m²); rozkładając materię organiczną, asymilują część C i N na własną biomasę; reszta → mineralizacja; sprawność asymilacji destruentów: 2–50% zależnie od jakości substratu (lignina trudna → 5%; cukry łatwe → 50%). (D) fałsz: produkcja wtórna ZAWSZE jest mniejsza niż NPP — wynika bezpośrednio z II zasady termodynamiki i sprawności troficznej <100%; gdyby P2 > NPP, ekosystem łamałby zasady zachowania energii.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.energia, question_type: 'single',
    question_text: 'Badacz mierzy produkcję pierwotną brutto (GPP) jeziora metodą butelkową (jasna i ciemna butelka). W butelce jasnej (dostęp światła) po 24 h O₂ wzrósł o 8 mg/L. W butelce ciemnej (brak światła) O₂ spadł o 2 mg/L. Ile wynosi GPP i NPP (w mg O₂/L/24h)?',
    options: [
      { id: 'A', text: 'GPP = 10 mg O₂/L/24h; NPP = 8 mg O₂/L/24h; respiracja = 2 mg O₂/L/24h; wzrost w butelce jasnej = NPP (fotosynteza minus oddychanie); w ciemnej butelce mierzymy tylko respirację', is_correct: true },
      { id: 'B', text: 'GPP = 8 mg O₂/L/24h; NPP = 6 mg O₂/L/24h; respiracja = 2 mg O₂/L/24h; zmiana w butelce jasnej bezpośrednio równa GPP, bo butelka jasna wyklucza respirację', is_correct: false },
      { id: 'C', text: 'GPP = 6 mg O₂/L/24h; NPP = 4 mg O₂/L/24h; respiracja = 2 mg O₂/L/24h; należy odjąć zmianę w butelce ciemnej od zmiany w butelce jasnej i podzielić wynik przez 2', is_correct: false },
      { id: 'D', text: 'Nie można obliczyć GPP tą metodą; butelkowa metoda mierzy wyłącznie respirację organizmów; fotosynteza nie może być mierzona w zamkniętej butelce gdyż CO₂ się wyczerpuje', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Metoda jasnej i ciemnej butelki (Gaarder & Gran 1927): CIEMNA BUTELKA: brak fotosyntezy; mierzy się tylko respirację (R); R = spadek O₂ = 2 mg/L/24h. JASNA BUTELKA: fotosynteza − respiracja = NPP; wzrost O₂ = NPP = 8 mg/L/24h. GPP = NPP + R = 8 + 2 = 10 mg O₂/L/24h. Weryfikacja: GPP > NPP > 0 (po ekw. 1:1 z CO₂ dla fotosyntezy). Przelicznik: 1 mg O₂ = 0,375 mg C (M O₂ = 32, M C = 12 → 12/32 = 0,375). Ograniczenia metody: (1) zamknięcie → wyczerpanie CO₂ przy długich inkubacjach; (2) brak przepływu wody → inne warunki niż in situ; (3) respiracja ciemna ≠ respiracja w świetle (photorespiration, Mehler reaction) → możliwe niedoszacowanie GPP.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── OBIEG MATERII (2) ─────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.obieg, question_type: 'single',
    question_text: 'Obieg węgla w przyrodzie obejmuje procesy asymilacji i uwalniania CO₂. Które procesy biologiczne UWALNIAJĄ CO₂ do atmosfery? (zaznacz wszystkie poprawne)',
    options: [
      { id: 'A', text: 'Oddychanie tlenowe organizmów (respiracja komórkowa), fermentacja beztlenowa przez bakterie i drożdże, rozkład materii organicznej przez destruentów (mineralizacja) oraz spalanie paliw kopalnych przez człowieka', is_correct: true },
      { id: 'B', text: 'Fotosynteza, chemosynteza oraz produkcja masy ciała przez konsumentów — wszystkie te procesy pochłaniają CO₂ i dlatego są źródłami tlenu atmosferycznego, nie CO₂', is_correct: false },
      { id: 'C', text: 'Wyłącznie procesy przemysłowe (spalanie paliw) i wulkany; procesy biologiczne nie uczestniczą w uwalnianiu CO₂ — żywe organizmy tylko pochłaniają ten gaz', is_correct: false },
      { id: 'D', text: 'Transpiracja roślin i parowanie wody uwalniają CO₂ związany w wodzie; sole mineralne pobierane przez korzenie zawierają węgiel, który jest uwalniany przez liście w procesie transpiracji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Źródła CO₂ w cyklu węglowym: BIOLOGICZNE: (1) oddychanie tlenowe (wszystkie organizmy): C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP; (2) fermentacja: glukoza → etanol + CO₂ (drożdże) lub mleczan + CO₂ (heterofermentatywne bakterie); (3) mineralizacja (destruenci): rozkład białek, tłuszczów, węglowodanów → CO₂ + H₂O + sole; ABIOTYCZNE: (4) spalanie paliw kopalnych (węgiel, ropa, gaz): ~36 Pg C/rok (2022); (5) wybuchy wulkanów: ~0,2 Pg C/rok (pomijalne vs. przemysł); (6) pożary lasów: ~2–3 Pg C/rok. POCHŁANIANIE CO₂: fotosynteza i chemosynteza (producenci: ~120 Pg C/rok brutto); rozpuszczanie w oceanach (~2–3 Pg C/rok netto). Saldo: emisje ~10 Pg/rok wyższe niż pochłanianie → wzrost CO₂ w atmosferze (415 ppm w 2023, przed industrializacją: 280 ppm).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.obieg, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących obiegu azotu w przyrodzie:',
    options: [
      { id: 'A', text: 'Azotowanie (wiązanie N₂): wyspecjalizowane prokarioty (Rhizobium w brodawkach korzeniowych roślin strączkowych, Azotobacter w glebie, sinice Nostoc, Anabaena) redukują N₂ do NH₃ przy udziale nitrogenazy — enzymu wrażliwego na O₂; bez tych organizmów rośliny nie mogłyby korzystać z azotu atmosferycznego.', is_correct: true },
      { id: 'B', text: 'Denitryfikacja (oddenitryfikowanie): bakterie beztlenowe (Pseudomonas denitrificans, Paracoccus denitrificans) redukują azotany (NO₃⁻) do N₂ i N₂O w warunkach beztlenowych; jest to szkodliwy proces, który niszczy żyzność gleby i powinien być eliminowany w rolnictwie.', is_correct: false },
      { id: 'C', text: 'Nitryfikacja zachodzi dwuetapowo: (1) Nitrosomonas/Nitrosospira utleniają NH₄⁺ do NO₂⁻; (2) Nitrobacter/Nitrospira utleniają NO₂⁻ do NO₃⁻; oba etapy przeprowadzają chemoautotrofy tlenowe; NO₃⁻ jest formą azotu łatwo przyswajalną przez rośliny.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: nitrogenaza: kompleks dwie podjednostki (Fe-białko + Mo-Fe białko); reakcja: N₂ + 8H⁺ + 8e⁻ + 16 ATP → 2NH₃ + H₂ + 16 ADP + 16 Pi; wymaga anoksycznych warunków (O₂ inaktywuje nitrogenazę) → symbionty chronione w leghemoglobinie (brodawki) lub heterocystach (sinice heterocystyczne); biologiczne wiązanie N₂ (BNF): ~200 Tg N/rok; przemysłowy proces Habera-Boscha: ~150 Tg N/rok (przy temp. 400°C, 200 atm, Fe katalizator). B — Fałsz: denitryfikacja NIE JEST szkodliwa — zamyka obieg azotu, zwracając N₂ do atmosfery (utrzymuje równowagę cyklu); bez denitryfikacji azot gromadziłby się w oceanie jako NO₃⁻; jest problematyczna TYLKO w odniesieniu do nawozów — nawożone pola uprawne tracą N przez denitryfikację (straty azotu z pól: 10–40%), ale to cecha cyklu, nie patologia; N₂O (podtlenek azotu) = silny gaz cieplarniany (298× CO₂) i niszczy ozon. C — Prawda: Winogradsky 1890 odkrył nitryfikację jako chemolitoautotrofię; nitryfikacja jest procesem tlenowym; NO₃⁻ jest formą pobieraną przez korzenie (obok NH₄⁺).',
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
  console.log(`Seeding batch 2 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
