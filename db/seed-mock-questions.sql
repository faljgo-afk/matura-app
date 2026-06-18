-- ============================================================
-- MOCK EXAM QUESTIONS — only for próbna matura
-- Complex questions spanning multiple topics
-- ============================================================

insert into mock_questions (question_text, question_type, options, correct_answer, explanation, difficulty, verified)
values
(
  'Uczeń obserwuje pod mikroskopem komórkę, w której widoczne są: wrzeciono kariokinetyczne, chromosomy ustawione w płaszczyźnie równikowej komórki, brak otoczki jądrowej. Który etap podziału komórkowego przedstawia ten obraz?',
  'single',
  '[{"id":"A","text":"Profaza mitozy","is_correct":false},{"id":"B","text":"Metafaza mitozy","is_correct":true},{"id":"C","text":"Anafaza mejozy I","is_correct":false},{"id":"D","text":"Telofaza mitozy","is_correct":false}]',
  '["B"]',
  'Metafaza mitozy charakteryzuje się: chromosomami ustawionymi w płaszczyźnie równikowej (płyta metafazalna), w pełni uformowanym wrzecionem podziałowym i brakiem otoczki jądrowej (rozpadła się w profazie). W profazie chromosomy dopiero kondensują się. W anafazie chromosomy wędrują do biegunów. W telofazie tworzy się nowa otoczka jądrowa.',
  2,
  true
),
(
  'Analizując rodowód pewnej choroby genetycznej, stwierdzono że: chorują zarówno kobiety jak i mężczyźni, chorzy rodzice mogą mieć zdrowe dzieci, u zdrowych rodziców mogą urodzić się chore dzieci. Jaki jest najprawdopodobniejszy typ dziedziczenia tej choroby?',
  'single',
  '[{"id":"A","text":"Autosomalne dominujące","is_correct":false},{"id":"B","text":"Autosomalne recesywne","is_correct":true},{"id":"C","text":"Sprzężone z chromosomem X, dominujące","is_correct":false},{"id":"D","text":"Sprzężone z chromosomem Y","is_correct":false}]',
  '["B"]',
  'Autosomalne recesywne dziedziczenie: chorują obie płcie (gen na autosomie), zdrowi rodzice-nosiciele (Aa × Aa) mogą mieć chore dzieci (aa — 25%), chorzy rodzice (Aa × aa) mogą mieć zdrowe dzieci-nosiciele (Aa). Gdyby było dominujące, zdrowi rodzice nie mieliby chorych dzieci. Sprzężone z Y dotyczyłoby tylko mężczyzn.',
  3,
  true
),
(
  'W ekosystemie jeziornym producenci wytworzyli w ciągu roku 10 000 kJ energii. Ile energii będzie dostępne dla konsumentów III rzędu, zakładając 10% efektywność każdego poziomu troficznego?',
  'single',
  '[{"id":"A","text":"1000 kJ","is_correct":false},{"id":"B","text":"100 kJ","is_correct":false},{"id":"C","text":"10 kJ","is_correct":true},{"id":"D","text":"1 kJ","is_correct":false}]',
  '["C"]',
  'Stosując regułę 10%: Producenci → 10 000 kJ. Konsumenci I rzędu: 10 000 × 10% = 1000 kJ. Konsumenci II rzędu: 1000 × 10% = 100 kJ. Konsumenci III rzędu: 100 × 10% = 10 kJ. Z każdym poziomem troficznym 90% energii jest tracone jako ciepło, dlatego łańcuchy pokarmowe są krótkie.',
  2,
  true
),
(
  'Które z poniższych stwierdzeń dotyczących fotosyntezy i oddychania komórkowego są prawdziwe?',
  'multiple',
  '[{"id":"A","text":"Oba procesy produkują ATP","is_correct":true},{"id":"B","text":"Oba procesy zachodzą w chloroplastach","is_correct":false},{"id":"C","text":"Fotosynteza pochłania CO2, oddychanie go wydziela","is_correct":true},{"id":"D","text":"Oba procesy wymagają obecności tlenu","is_correct":false}]',
  '["A","C"]',
  'ATP jest produktem zarówno fotosyntezy (faza jasna) jak i oddychania (fosforylacja oksydacyjna i substratowa). Fotosynteza pochłania CO2 (do cyklu Calvina) i wydziela O2 (z fotolizy wody), oddychanie odwrotnie. Oddychanie zachodzi w mitochondriach (i cytoplazmie), nie w chloroplastach. Oddychanie beztlenowe (fermentacja) nie wymaga tlenu.',
  2,
  true
),
(
  'Nerka człowieka produkuje mocz ostateczny zagęszczony w stosunku do moczu pierwotnego. Który element nefronu jest kluczowy dla tego zagęszczania?',
  'single',
  '[{"id":"A","text":"Kłębuszek nerkowy","is_correct":false},{"id":"B","text":"Kanalik proksymalny","is_correct":false},{"id":"C","text":"Pętla Henlego","is_correct":true},{"id":"D","text":"Torebka Bowmana","is_correct":false}]',
  '["C"]',
  'Pętla Henlego (pętla nefronu) tworzy gradient osmotyczny w rdzeniu nerki — ramię zstępujące jest przepuszczalne dla wody (woda wychodzi), ramię wstępujące przepuszcza aktywnie jony Na+ i Cl- (ale nie wodę). Ten gradient pozwala kanalikowi zbiorczemu (pod wpływem ADH) wchłaniać wodę, zagęszczając mocz. Kłębuszek — filtracja. Kanalik proksymalny — resorpcja glukozy, aminokwasów.',
  3,
  true
),
(
  'Bakterie Helicobacter pylori mogą przeżywać w żołądku człowieka mimo bardzo niskiego pH. Który mechanizm im to umożliwia?',
  'single',
  '[{"id":"A","text":"Wytwarzają śluz neutralizujący kwas w całym żołądku","is_correct":false},{"id":"B","text":"Produkują ureazę rozkładającą mocznik do amoniaku, który neutralizuje kwas wokół bakterii","is_correct":true},{"id":"C","text":"Żyją tylko na powierzchni śluzu z dala od kwasu","is_correct":false},{"id":"D","text":"Mają wyjątkowo grubą ścianę komórkową odporną na kwasy","is_correct":false}]',
  '["B"]',
  'H. pylori produkuje enzym ureazę, który rozkłada mocznik (obecny w żołądku) do amoniaku (NH3) i CO2. Amoniak neutralizuje kwas solny bezpośrednio wokół bakterii, tworząc mikrośrodowisko o wyższym pH. To umożliwia przeżycie mimo pH 1-2 w żołądku. H. pylori jest przyczyną większości wrzodów żołądka i dwunastnicy — odkrycie Marshalla i Warrena (Nobel 2005).',
  3,
  true
),
(
  'U rośliny C3 rosnącej w warunkach wysokiej temperatury i niskiego stężenia CO2 dochodzi do procesu zwanego fotooddychaniem. Jakie są jego skutki?',
  'multiple',
  '[{"id":"A","text":"Zmniejszenie wydajności fotosyntezy","is_correct":true},{"id":"B","text":"Pobieranie O2 i wydzielanie CO2","is_correct":true},{"id":"C","text":"Zwiększenie produkcji glukozy","is_correct":false},{"id":"D","text":"Utlenianie RuBP zamiast jego karboksylacji","is_correct":true}]',
  '["A","B","D"]',
  'Fotooddychanie zachodzi gdy RuBisCO (enzym cyklu Calvina) zamiast CO2 wiąże O2 — przy wysokiej temperaturze i niskim CO2 enzym traci selektywność. RuBP jest utleniane zamiast karboksylowane, co nie produkuje cukrów, a wręcz zużywa ATP i NADPH. Roślina pobiera O2 i wydziela CO2 — odwrotnie niż w fotosyntezie. Efekt: nawet 50% redukcja wydajności fotosyntezy. Rośliny C4 i CAM unikają tego problemu.',
  3,
  true
),
(
  'Szczepionki działają na zasadzie:',
  'single',
  '[{"id":"A","text":"Dostarczania gotowych przeciwciał do organizmu","is_correct":false},{"id":"B","text":"Pobudzenia układu odpornościowego do wytworzenia pamięci immunologicznej","is_correct":true},{"id":"C","text":"Zabijania patogenów antybiotykami zawartymi w szczepionce","is_correct":false},{"id":"D","text":"Wzmocnienia bariery skórno-śluzówkowej","is_correct":false}]',
  '["B"]',
  'Szczepionki zawierają osłabiony lub zabity patogen, jego fragmenty (antygeny) lub mRNA kodujące antygen. Układ odpornościowy rozpoznaje antygeny i uruchamia odpowiedź immunologiczną — powstają limfocyty pamięci B i T. Przy kontakcie z prawdziwym patogenem odpowiedź jest szybka i skuteczna. Dostarczanie gotowych przeciwciał to surowica (odporność bierna, krótkotrwała). Antybiotyki zwalczają bakterie, nie wirusy.',
  2,
  true
),
(
  'Darwin obserwując zięby na Wyspach Galapagos zauważył że różne gatunki mają odmiennie ukształtowane dzioby dostosowane do różnych źródeł pożywienia. Zjawisko to jest przykładem:',
  'single',
  '[{"id":"A","text":"Konwergencji ewolucyjnej","is_correct":false},{"id":"B","text":"Adaptacyjnej radiacji ewolucyjnej","is_correct":true},{"id":"C","text":"Koewolucji","is_correct":false},{"id":"D","text":"Dryfu genetycznego","is_correct":false}]',
  '["B"]',
  'Radiacja adaptacyjna to szybkie różnicowanie się jednego wspólnego przodka w wiele gatunków zajmujących różne nisze ekologiczne. Przodkowie zięb Darwina skolonizowali Galapagos i w izolacji ewoluowali w kierunku różnych źródeł pokarmu (nasiona, owady, nektar) — stąd różne kształty dziobów. Konwergencja to niezależne nabycie podobnych cech przez niespokrewnione gatunki. Koewolucja to wzajemne ewoluowanie dwóch gatunków.',
  2,
  true
),
(
  'Insulina jest hormonem białkowym. Które stwierdzenia dotyczące jej syntezy i wydzielania są prawdziwe?',
  'multiple',
  '[{"id":"A","text":"Jest syntetyzowana na rybosomach szorstkiego retikulum endoplazmatycznego","is_correct":true},{"id":"B","text":"Przechodzi przez aparat Golgiego gdzie jest modyfikowana i pakowana","is_correct":true},{"id":"C","text":"Jest wydzielana do krwi gdy poziom glukozy spada poniżej normy","is_correct":false},{"id":"D","text":"Działa na komórki docelowe wiążąc się z receptorami na ich powierzchni","is_correct":true}]',
  '["A","B","D"]',
  'Insulina jako białko jest syntetyzowana na rybosomach szorstkiego ER (jako prepropeptyd), następnie trafia do aparatu Golgiego gdzie jest modyfikowana i pakowana do pęcherzyków wydzielniczych. Wydzielana jest gdy poziom glukozy ROŚNIE (po posiłku) — nie spada. Jako hormon peptydowy nie przenika przez błonę komórkową, lecz wiąże się z receptorami kinazowymi na powierzchni komórek docelowych (mięśnie, tkanka tłuszczowa, wątroba).',
  3,
  true
);
