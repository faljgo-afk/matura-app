// Seed: mock_questions — Fizjologia człowieka — układ pokarmowy i wydalniczy (19 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  weglo:   '60fed091-5212-4c65-b9fa-a1c959253a9c',
  bialka:  '013f473b-19f6-46d8-8cb1-44057ec6d0a7',
  tluszcz: '09368317-490e-4c23-a959-bae8e1e9a1ed',
  wchlann: '297c84c0-0408-498b-8f51-15ff9eed9939',
  watroba: '66f677dd-0e93-4a2b-acac-d7af8a2b6082',
  jelitog: '97c24e5a-7597-4d3e-8678-1e04184e906d',
  nerka:   '822e422f-2309-42e6-9572-8d0dbda9c811',
  mocz:    'caceb5e0-d63e-4c62-9bcd-faac6e5baa3a',
  regul:   '7bd4a3e4-c538-4ad2-9f34-600d3c99dcce',
}

const questions = [
  // ─── Trawienie węglowodanów ───
  {
    subtopic: 'Fizjologia człowieka — Trawienie węglowodanów',
    subtopic_id: S.weglo,
    question_type: 'single',
    question_text: 'Trawienie skrobi rozpoczyna się w jamie ustnej. Wskaż prawidłową kolejność enzymów i produktów trawienia węglowodanów od jamy ustnej do jelita cienkiego.',
    options: [
      { id: 'A', text: 'Amylaza ślinowa (ptyalina) → maltoza/dekstryny; amylaza trzustkowa → maltoza; maltaza/sacharaza/laktaza (rąbek szczoteczkowy enterocytów) → glukoza, fruktoza, galaktoza', is_correct: true },
      { id: 'B', text: 'Pepsyna (żołądek) → glukoza; lipaza (jelito) → galaktoza; amylaza (ślina) → sacharoza', is_correct: false },
      { id: 'C', text: 'Trawienie skrobi zachodzi wyłącznie w jelicie cienkim — amylaza ślinowa nie ma aktywności enzymatycznej w środowisku jamy ustnej', is_correct: false },
      { id: 'D', text: 'Amylaza trzustkowa trawi skrobię bezpośrednio do glukozy — disacharydy nie są produktem pośrednim', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Trawienie węglowodanów: (1) Jama ustna: amylaza ślinowa (ptyalina, wydzielana przez gruczoły ślinowe) + pH 7 → skrobia (amyloza + amylopektyna) → maltoza + maltotrioza + dekstryny graniczne (alfa-1,6 wiązania). Dezaktywacja przez kwas żołądkowy (pH 2). (2) Jelito cienkie: amylaza trzustkowa (sok trzustkowy, pH 7–8) → maltoza + izomaltoza + maltotrioza. (3) Rąbek szczoteczkowy enterocytów (mikrokosmki): maltaza → glukoza + glukoza; sacharaza → glukoza + fruktoza; laktaza → glukoza + galaktoza; izomaltaza. Nietolerancja laktozy: brak/niedobór laktazy → laktoza fermentuje w jelicie grubym (gazy, biegunka). Końcowe produkty wchłaniane: glukoza, fruktoza, galaktoza (monosacharydy).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Trawienie węglowodanów',
    subtopic_id: S.weglo,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących trawienia i wchłaniania węglowodanów:\nA. Glukoza i galaktoza są wchłaniane przez kotransport z Na⁺ (SGLT1, aktywny) na rąbku szczoteczkowym enterocytów; fruktoza — przez ułatwioną dyfuzję (GLUT5, biernie).\nB. Indeks glikemiczny (IG) opisuje szybkość wzrostu glikemii po spożyciu produktu — skrobia gotowana ma wyższy IG niż skrobia surowa, bo żelowanie rozrywa strukturę krystaliczną i ułatwia trawienie.\nC. Błonnik pokarmowy (celuloza, pektyny) jest trawiony przez enzymy człowieka w jelicie cienkim — dostarcza kalorie identycznie jak skrobia.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: SGLT1 (sodium-glucose linked transporter 1): kotransport Na⁺ i glukozy/galaktozy przez rąbek szczoteczkowy (aktywny, zależny od gradientu Na⁺ tworzonego przez Na⁺/K⁺-ATPazę); GLUT2 przez podstawno-boczną błonę enterocytu do krwi portalnej. Fruktoza: GLUT5 (biernie) → wchłanianie wolniejsze. B — PRAWDA: żelowanie skrobi (gotowanie + woda) → zerwanie wiązań wodorowych → skrobia dostępna dla amylaz → szybszy wzrost glikemii (wyższy IG). Skrobia surowa = częściowo oporna = niższy IG. Skrobia oporna (RS): niestrawiona w jelicie cienkim, fermentowana w grubym. C — FAŁSZ: człowiek nie posiada celulazy (beta-1,4-glikozydazy) ani pektynaz → błonnik nie jest trawiony enzymatycznie; jest fermentowany przez mikrobiom jelita grubego (SCFA: octan, propionian, maślan) → ~2 kcal/g (vs 4 kcal/g dla skrobi).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Trawienie białek ───
  {
    subtopic: 'Fizjologia człowieka — Trawienie białek',
    subtopic_id: S.bialka,
    question_type: 'single',
    question_text: 'Pepsyna jest endopeptydazą żołądkową. Jakie warunki są niezbędne do jej aktywacji i działania?',
    options: [
      { id: 'A', text: 'Pepsyna wydzielana jest jako nieaktywny pepsynogen przez komórki główne żołądka; kwas solny (HCl, pH 1,5–2) wydzielany przez komórki okładzinowe powoduje autokatalityczne przekształcenie pepsynogenu w pepsynę; optimum pH pepsyny: 1,5–2', is_correct: true },
      { id: 'B', text: 'Pepsyna jest aktywna wyłącznie w jelicie cienkim przy pH 7–8; w kwaśnym środowisku żołądka jest inaktywowana', is_correct: false },
      { id: 'C', text: 'Pepsyna jest aktywowana przez jon Zn²⁺ w środowisku zasadowym; komórki okładzinowe wydzielają zasadę zamiast kwasu', is_correct: false },
      { id: 'D', text: 'Pepsyna jest jedynym enzymem trawiennym białek — enzymy trzustkowe (trypsyna, chymotrypsyna) nie uczestniczą w trawieniu białek', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Trawienie białek w żołądku: (1) Komórki główne (chief cells): wydzielają pepsynogen (nieaktywny zymogen). (2) Komórki okładzinowe (parietal cells): wydzielają HCl (przez H⁺/K⁺-ATPazę = pompę protonową) → pH żołądka 1,5–2. (3) HCl: aktywacja pepsynogenu → pepsyna (autokatalityczna: pepsyna aktywuje kolejne cząsteczki pepsynogenu); denaturacja białek pokarmowych (rozwinięcie → dostęp do wiązań peptydowych). Pepsyna: endopeptydaza, tnie przy Phe, Tyr, Trp → peptony + polipeptydy. W dwunastnicy: pH wzrasta (8) → pepsyna inaktywowana. Enzymy trzustkowe: trypsyna (aktywowana z trypsynogenu przez enterokinazę z enterocytów), chymotrypsyna, elastaza, karboksypeptydazy A i B → dalszy rozkład peptydów. Dipeptydazy/aminopeptydazy rąbka szczoteczkowego → wolne aminokwasy.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Trawienie białek',
    subtopic_id: S.bialka,
    question_type: 'single',
    question_text: 'Enzymy proteolityczne trzustki (trypsyna, chymotrypsyna) są wydzielane jako nieaktywne proenzymy (zymogeny). Dlaczego ten mechanizm jest niezbędny?',
    options: [
      { id: 'A', text: 'Gdyby enzymy były aktywne od razu w trzustce, trawiłyby własne białka trzustki — prowadząc do autolizy i ostrego zapalenia trzustki (pancreatitis); zymogeny aktywowane są dopiero w dwunastnicy przez enterokinazę', is_correct: true },
      { id: 'B', text: 'Zymogeny są mniej stabilne chemicznie od aktywnych enzymów — wydzielanie nieaktywnych form zapobiega ich rozkładowi podczas transportu do jelita', is_correct: false },
      { id: 'C', text: 'Nieaktywne proenzymy łatwiej przenikają przez ściany przewodów trzustkowych — aktywacja w jelicie zwiększa ich masę cząsteczkową i uniemożliwia dyfuzję z powrotem', is_correct: false },
      { id: 'D', text: 'Mechanizm zymogenów służy regulacji dobowej — zymogeny są aktywowane rano, wieczorem wracają do formy nieaktywnej w rytmie dobowym', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Zymogeny (proenzymy): strategia ewolucyjna chroniąca trzustkę przed samostrawieniem. Kaskada aktywacji: enterokinaza (enteropeptydaza; enzym rąbka szczoteczkowego enterocytów dwunastnicy) → trypsynogen → trypsyna. Trypsyna aktywuje: chymotrypsynogen → chymotrypsyna; proelastazę → elastazę; prokarboksypeptydazy → karboksypeptydazy A, B; prokalalitreiny itd. Trypsyna aktywuje też więcej trypsynogenu (autokataliza). Ostre zapalenie trzustki (acute pancreatitis): przedwczesna aktywacja proteaz (np. przy kamicy żółciowej blokującej odpływ soku trzustkowego, alkohol, uraz) → autolizy → martwica → wyciek enzymów → miejscowy i ogólny stan zapalny. Marker kliniczny: wzrost amylazy i lipazy w surowicy.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Trawienie tłuszczów ───
  {
    subtopic: 'Fizjologia człowieka — Trawienie tłuszczów',
    subtopic_id: S.tluszcz,
    question_type: 'single',
    question_text: 'Trawienie tłuszczów (triacylogliceroli) wymaga udziału żółci. Jaką rolę pełni żółć w tym procesie?',
    options: [
      { id: 'A', text: 'Żółć (sole żółciowe) emulguje tłuszcze — rozbija duże krople tłuszczu na małe micele, zwiększając powierzchnię dostępną dla lipazy trzustkowej; żółć sama nie trawi tłuszczu, jest detergentem biologicznym', is_correct: true },
      { id: 'B', text: 'Żółć zawiera lipazę żółciową, która bezpośrednio hydrolizuje wiązania estrowe w triacyloglicerolach; bez żółci lipaza trzustkowa nie istnieje', is_correct: false },
      { id: 'C', text: 'Żółć neutralizuje kwas solny z żołądka, tworząc zasadowe środowisko niezbędne do działania amylazy; tłuszcze trawi pepsyna żołądkowa', is_correct: false },
      { id: 'D', text: 'Żółć wchłania tłuszcze bezpośrednio przez ścianę jelita do naczyń limfatycznych — lipaza trzustkowa nie uczestniczy w tym procesie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Trawienie tłuszczów: (1) Żołądek: lipaza żołądkowa (~15% trawienia, szczególnie u niemowląt) + ruch peristaltyczny = wstępna emulsja. (2) Dwunastnica: żółć (sole żółciowe: cholesterol → chenodesoksycholanol i cholanol w wątrobie; wydzielane do pęcherzyka żółciowego, uwalniane przez CCK) — sole żółciowe: amfipatyczne → adsorpcja do powierzchni kropelek tłuszczu → emulgacja (krople 1mm → micele 20 nm) → ogromny wzrost powierzchni. (3) Lipaza trzustkowa (z kolipazą, która kotwiczy lipazę do miceli) → hydroliza wiązań estrowych C1 i C3 → 2 kwasy tłuszczowe + 2-monoacyloglicerol. (4) Produkty wbudowują się w micele z solami żółciowymi i lecytyną → transport do enterocytów → endocytoza lub dyfuzja. W enterocycie: resynteza TAG → chylomikrony → limfa (drogi chłonne kosmków) → przewód piersiowy → krew.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Wchłanianie w jelicie cienkim ───
  {
    subtopic: 'Fizjologia człowieka — Wchłanianie w jelicie cienkim',
    subtopic_id: S.wchlann,
    question_type: 'single',
    question_text: 'Jelito cienkie ma bardzo dużą powierzchnię wchłaniania. Które struktury anatomiczne odpowiadają za jej zwiększenie?',
    options: [
      { id: 'A', text: 'Fałdy okrężne Kerckringa (makroskopowe) → kosmki jelitowe (1 mm, mikroskopowe) → mikrokosmki enterocytów tworzące rąbek szczoteczkowy (~0,1 µm) — łącznie powierzchnia wchłaniania: ~250–400 m²', is_correct: true },
      { id: 'B', text: 'Wyłącznie kosmki jelitowe — fałdy okrężne i mikrokosmki nie mają znaczenia dla wchłaniania; powierzchnia wchłaniania = ~1 m²', is_correct: false },
      { id: 'C', text: 'Jelito cienkie jest gładkie — powierzchnię wchłaniania zwiększa wyłącznie duża długość (6–7 m) bez żadnych strukturalnych adaptacji', is_correct: false },
      { id: 'D', text: 'Rąbek szczoteczkowy tworzy się wyłącznie w okrężnicy — jelito cienkie wchłania przez płaski nabłonek bez mikrokosmków', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Zwiększenie powierzchni wchłaniania jelita cienkiego — 3 poziomy: (1) Fałdy okrężne (plicae circulares, Kerckringa): makroskopowe wpuklenia błony śluzowej i podśluzowej obiegające okrężnie lub spiralnie; permanentne (widoczne na RTG/endoskopii). ×3 wzrost powierzchni. (2) Kosmki jelitowe (villi intestinales): mikroskopowe wypustki błony śluzowej, wys. 0,5–1,5 mm; każdy kosmek = enterocyty + komórki kubkowe + naczynia (kapilary krwionośne + środkowa naczynie chłonne = mleczak). ×10 wzrost. (3) Mikrokosmki (microvilli): na szczycie każdego enterocytu ~1000–3000 mikrokosmków → rąbek szczoteczkowy (brush border); zawiera enzymy (maltaza, laktaza, aminopeptydazy). ×20 wzrost. Razem: 250–600 m² (szacunki różne w źródłach). Enterocyty: żywotność ~3–5 dni → krypty Lieberkühn = źródło nowych komórek (Lgr5+ stem cells).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Wchłanianie w jelicie cienkim',
    subtopic_id: S.wchlann,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wchłaniania składników odżywczych:\nA. Aminokwasy i monosacharydy wchłaniane są do naczyń krwionośnych kosmka i transportowane żyłą wrotną do wątroby — nie trafiają bezpośrednio do krążenia ogólnego.\nB. Witamina B12 (kobalamina) wchłaniana jest wyłącznie w odcinku jelita cienkiego (jelito kręte, ileum) w kompleksie z czynnikiem wewnętrznym (IF, intrinsic factor) wydzielanym przez komórki okładzinowe żołądka.\nC. Żelazo (Fe) wchłaniane jest w formie Fe³⁺ (utlenionej) przez enterocyty dwunastnicy — witamina C hamuje wchłanianie żelaza przez utlenianie Fe²⁺ do Fe³⁺.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: aminokwasy i glukoza/galaktoza/fruktoza → kapilary krwionośne kosmka → żyłka → żyła krezkowa → żyła wrotna wątrobowa → wątroba (first-pass metabolism). B — PRAWDA: IF (intrinsic factor) = glikoproteina, komórki okładzinowe żołądka; B12 + IF → kompleks odporny na trawienie → receptor kubilina w ileum → endocytoza; brak IF (autoimmunologiczne zapalenie żołądka, gastrektomia) → niedokrwistość złośliwa (perniciosa); leczenie: B12 i.m. lub wysokie dawki doustne. C — FAŁSZ: żelazo wchłaniane w formie Fe²⁺ (zredukowanej); Fe³⁺ musi być zredukowane przez ferrireduktazę (DCYTB) na rąbku szczoteczkowym (i przez witaminę C!) → Fe²⁺ → transporter DMT1 → enterocyt → ferroportyna → krew → transferyna. Witamina C ZWIĘKSZA wchłanianie Fe (redukuje Fe³⁺→Fe²⁺). Mięso hem-Fe (Fe²⁺ w hemie) wchłaniane niezależnie, efektywniej.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Rola wątroby w metabolizmie ───
  {
    subtopic: 'Fizjologia człowieka — Rola wątroby w metabolizmie',
    subtopic_id: S.watroba,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE prawdziwe stwierdzenia dotyczące funkcji wątroby w metabolizmie.',
    options: [
      { id: 'A', text: 'Wątroba syntetyzuje większość białek osocza: albuminę (regulacja ciśnienia onkotycznego), fibrynogen i protrombinę (krzepnięcie), globuliny transportowe (transferyna, ceruloplazmina)', is_correct: true },
      { id: 'B', text: 'Wątroba jest głównym miejscem glukoneogenezy (synteza glukozy z aminokwasów, mleczanu, glicerolu) i glikogenolizy — utrzymuje glikemię między posiłkami', is_correct: true },
      { id: 'C', text: 'Wątroba produkuje żółć (sole żółciowe z cholesterolu + bilirubinę z hemu) i wydziela ją do przewodu żółciowego → pęcherzyk żółciowy → dwunastnica', is_correct: true },
      { id: 'D', text: 'Wątroba jest jedynym narządem wydzielania insuliny — trzustka produkuje wyłącznie enzymy trawienne (lipazę, amylazę, trypsynę)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Wątroba — funkcje metaboliczne: Synteza białek: albumina (60% białek osocza, COP = colloid osmotic pressure; hypoalbuminemia → obrzęki); fibrynogen, protrombina i inne czynniki krzepnięcia (witamina K-zależne: II, VII, IX, X); globuliny; transferyna (Fe); ceruloplazmina (Cu). Metabolizm glukozy: glukoneogeneza (między posiłkami, głód): AK + mleczan + glicerol → glukoza; glikogenoliza: glikogen wątrobowy (100–120 g) → glukoza → krew; glikogeneza po posiłku. Żółć: hepatocyty syntetyzują sole żółciowe (7α-hydroksylacja cholesterolu) + bilirubinę (katabolizm hemu hemoglobiny: hem → biliwerdyna → bilirubina niesprzężona → koniugacja glukuronianem → bilirubina sprzężona → żółć). D — FAŁSZ: insulinę produkują komórki beta wysp Langerhansa trzustki; trzustka ma dwie funkcje: zewnątrzwydzielniczą (enzymy trawienne) i wewnątrzwydzielniczą (insulina, glukagon, somatostatyna).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Rola wątroby w metabolizmie',
    subtopic_id: S.watroba,
    question_type: 'single',
    question_text: 'Żółtaczka (icterus) to żółte zabarwienie skóry i białek oczu spowodowane wzrostem bilirubiny we krwi. Wskaż różnicę między żółtaczką przedwątrobową, wątrobową i pozawątrobową.',
    options: [
      { id: 'A', text: 'Przedwątrobowa (hemolityczna): nadmierna hemoliza → bilirubina niesprzężona↑; wątrobowa: uszkodzenie hepatocytów (marskość, wirusowe zapalenie wątroby) → upośledzona koniugacja i wydzielanie; pozawątrobowa (mechaniczna): blokada przewodu żółciowego (kamień, nowotwór) → bilirubina sprzężona↑ we krwi + jasny stolec + ciemny mocz', is_correct: true },
      { id: 'B', text: 'Wszystkie typy żółtaczki mają identyczny mechanizm — różni je wyłącznie nasilenie objawów', is_correct: false },
      { id: 'C', text: 'Żółtaczka pozawątrobowa powoduje wzrost bilirubiny niesprzężonej; wątrobowa — wzrost sprzężonej; przedwątrobowa = brak bilirubiny we krwi', is_correct: false },
      { id: 'D', text: 'Żółtaczka hemolityczna jest wynikiem niedoboru koniugazy bilirubiny w wątrobie — niezależna od hemolizy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Bilirubina: hem (z Hb starych RBC) → biliwerdyna → bilirubina niesprzężona (BSN, lipofilna, wiąże albuminy, NIE filtrowana przez nerki). Wątroba: BSN + UDP-glukuroniotransferaza → bilirubina sprzężona (BSP, hydrofilna) → żółć → jelito → urobilinogen/sterkobilinogen → brunatny stolec. Typy żółtaczki: (1) Przedwątrobowa (hemolityczna): nadmierna hemoliza (np. malaria, sferocytoza, choroba hemolityczna noworodka) → za dużo BSN → wątroba nie nadąża; BSN↑, BSP normalna; mocz bez bilirubiny (BSN nie filtrowana); stolec ciemny (więcej urobilinogenu). (2) Wątrobowa: uszkodzenie hepatocytów → upośledzona koniugacja + wydzielanie; BSN↑ i BSP↑; wzrost ALT/AST. (3) Pozawątrobowa (cholestatyczna): blokada dróg żółciowych (kamień żółciowy, rak głowy trzustki) → żółć nie odpływa → BSP do krwi; BSP↑; jasny stolec (brak sterkobiliny); ciemny mocz (BSP filtrowana przez nerki → urobilinogen w moczu).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Jelito grube i mikrobiom ───
  {
    subtopic: 'Fizjologia człowieka — Jelito grube i mikrobiom',
    subtopic_id: S.jelitog,
    question_type: 'single',
    question_text: 'Mikrobiom jelita grubego liczy ok. 10¹⁴ mikroorganizmów. Które stwierdzenie POPRAWNIE opisuje jego funkcje?',
    options: [
      { id: 'A', text: 'Mikrobiom fermentuje niestrawiony błonnik → SCFA (short-chain fatty acids: maślan, propionian, octan) — główne źródło energii kolonocytów; syntetyzuje witaminę K i niektóre witaminy B; moduluje układ odpornościowy', is_correct: true },
      { id: 'B', text: 'Mikrobiom jelita grubego przeprowadza fotosyntezę dostarczając energię do wchłaniania składników odżywczych; pełni wyłącznie funkcję mechaniczną', is_correct: false },
      { id: 'C', text: 'Bakterie jelitowe trawią białka i tłuszcze w jelicie grubym — jelito cienkie wchłania wyłącznie wodę i sole mineralne', is_correct: false },
      { id: 'D', text: 'Mikrobiom jest wyłącznie patogenny — antybiotyki eliminujące mikrobiom poprawiają zdrowie metaboliczne i odpornościowe', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mikrobiom jelita grubego: ~10¹⁴ komórek bakteryjnych (liczba porównywalna z komórkami ciała lub ok. 10× więcej); ok. 1000 gatunków (dominują Firmicutes i Bacteroidetes); łączna masa ~1,5 kg. Funkcje: (1) Fermentacja błonnika: celuloza, hemiceluloza, pektyny, skrobia oporna → SCFA; maślan (butyrat) = główne źródło energii kolonocytów (60–70% energii), przeciwnowotworowy (hamuje HDAC); propionian → wątroba (glukoneogeneza); octan → mięśnie, serce. (2) Synteza witamin: K₂ (menadion), B₁, B₂, B₁₂, biotyna, kwas foliowy. (3) Immunomodulacja: edukacja GALT (gut-associated lymphoid tissue), tolerancja pokarmowa, ochrona przed patogenami (kolonizacyjna rezystencja). (4) Metabolizm kwasów żółciowych, leków (first-pass hepatic + bakteryjny). Dysbioza → IBD, otyłość, cukrzyca T2, zaburzenia lękowe (oś jelitowo-mózgowa).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Budowa nerek i nefronów ───
  {
    subtopic: 'Fizjologia człowieka — Budowa nerek i nefronów',
    subtopic_id: S.nerka,
    question_type: 'single',
    question_text: 'Nefron jest podstawową jednostką strukturalną i funkcjonalną nerki. Wskaż prawidłową kolejność odcinków nefronu przez które przepływa przesącz kłębuszkowy.',
    options: [
      { id: 'A', text: 'Ciałko nerkowe (kłębuszek + torebka Bowmana) → kanalik proksymalny → pętla Henlego (ramię zstępujące + wstępujące) → kanalik dystalny → cewka zbiorcza → miedniczka nerkowa', is_correct: true },
      { id: 'B', text: 'Torebka Bowmana → cewka zbiorcza → kanalik dystalny → pętla Henlego → kanalik proksymalny → miedniczka', is_correct: false },
      { id: 'C', text: 'Kłębuszek → kanalik dystalny → pętla Henlego → kanalik proksymalny → cewka zbiorcza', is_correct: false },
      { id: 'D', text: 'Miedniczka → cewka zbiorcza → kanalik proksymalny → kłębuszek → torebka Bowmana — mocz płynie od wewnątrz nerki na zewnątrz', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Nefron (~1 mln/nerkę): (1) Ciałko nerkowe: kłębuszek naczyniowy (glomerulus, kapilary między tętniczką doprowadzającą i odprowadzającą) + torebka Bowmana (podocyty z szczelinami filtracyjnymi) → filtracja → przesącz pierwotny. (2) Kanalik proksymalny (PCT): reabsorpcja izoosmotyczna: ~65% Na⁺, H₂O, glukozy (SGLT2), aminokwasów, HCO₃⁻, fosfanów, mocznika; rąbek szczoteczkowy (mikrokosmki) + wiele mitochondriów. (3) Pętla Henlego: ramię zstępujące (przepuszczalne dla H₂O, nie dla soli → zagęszczanie) + wstępujące cienkie + grube (nieprzepuszczalne dla H₂O, aktywna reabsorpcja NaCl przez NKCC2 → tworzenie rdzeniowego gradientu osmotycznego). (4) Kanalik dystalny (DCT): regulacja Ca²⁺ (PTH), Mg²⁺; NaCl przez NCC. (5) Cewka zbiorcza (CD): regulacja H₂O (ADH → akwaporyny AQP2) i K⁺/H⁺ (aldosteron → kanały ENaC, ROMK).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Budowa nerek i nefronów',
    subtopic_id: S.nerka,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących filtracji kłębuszkowej:\nA. GFR (glomerular filtration rate, przesączanie kłębuszkowe) u zdrowego dorosłego wynosi ok. 120 ml/min (~180 L/dobę) — zdecydowana większość przesączu jest reabsorbowana, a mocz ostateczny to ok. 1–2 L/dobę.\nB. Bariera filtracyjna kłębuszka przepuszcza cząsteczki o masie do ok. 70 kDa — białka o masie albuminy (~66 kDa) nie powinny w ogóle przechodzić do przesączu; ich obecność w moczu (albuminuria) świadczy o uszkodzeniu bariery.\nC. Inulina (polisacharyd) jest używana klinicznie do pomiaru GFR, ponieważ jest całkowicie filtrowana i całkowicie reabsorbowana — jej klirens nerkowy równa się GFR.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: GFR ~125 ml/min = 180 L/dobę; reabsorpcja ~178–179 L/dobę → mocz ostateczny 1–2 L; filtracja = bierna ultraprzefiltracja napędzana ciśnieniem hydrostatycznym w kłębuszku (~55 mmHg). B — PRAWDA (z niuansem): bariera filtracyjna: śródbłonek fenestrowany (pory 70–100 nm, ładunek ujemny) + błona podstawna (typ IV kolagenu, ujemna) + podocyty (szczeliny filtracyjne, nephrin) → ogranicza przepuszczalność wg rozmiaru i ładunku. Albumina (66 kDa) normalnie minimal amount (<30 mg/dobę) w moczu; albuminuria > 30 mg/dobę = wczesny wskaźnik nefropatii (cukrzycowej, nadciśnieniowej). C — FAŁSZ: inulina jest filtrowana w kłębuszku, lecz w kanalikach ani reabsorbowana, ani wydzielana → klirens inuliny = GFR (to wzorzec złoty do badań); ALE klinicznie GFR mierzy się klirensem kreatyniny lub eGFR (wzory CKD-EPI, MDRD) bo inulina wymaga wlewu i.v.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Powstawanie moczu ───
  {
    subtopic: 'Fizjologia człowieka — Powstawanie moczu',
    subtopic_id: S.mocz,
    question_type: 'single',
    question_text: 'Mechanizm zagęszczania moczu w rdzeniu nerki opiera się na pętli Henlego i cewce zbiorczej. Jak działa ten mechanizm (pętlowy system przeciwprądowy)?',
    options: [
      { id: 'A', text: 'Ramię zstępujące (przepuszczalne dla H₂O, nie dla soli) → woda wychodzi osmotycznie → zagęszczenie przesączu; ramię wstępujące grube (aktywna reabsorpcja NaCl przez NKCC2, nieprzepuszczalne dla H₂O) → rodzeń staje się hipertoniczny; cewka zbiorcza (ADH→AQP2) → H₂O wychodzi do hipertonicznego rdzenia → zagęszczony mocz', is_correct: true },
      { id: 'B', text: 'Pętla Henlego pompuje mocznik do moczu aktywnie; NaCl pozostaje w przesączu; cewka zbiorcza absorbuje NaCl bez udziału ADH', is_correct: false },
      { id: 'C', text: 'Ramię wstępujące jest przepuszczalne dla wody; ramię zstępujące aktywnie pompuje Na⁺; cewka zbiorcza jest zawsze nieprzepuszczalna dla wody niezależnie od stanu nawodnienia', is_correct: false },
      { id: 'D', text: 'Mechanizm zagęszczania moczu nie wymaga energii — jest wyłącznie bierny i nie zależy od pompy Na⁺/K⁺-ATPazy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'System przeciwprądowy (countercurrent multiplier): (1) Ramię zstępujące pętli (descending thin limb): przepuszczalne dla H₂O (AQP1) + umiarkowanie dla mocznika; woda wychodzi do hipertonicznego śródmiąższu rdzenia (bo sąsiednie ramię wstępujące aktywnie pompuje NaCl) → przesącz gęstnieje (do ~1200 mOsm/kg na szczycie pętli). (2) Ramię wstępujące grube (thick ascending limb, TAL): kotransporter NKCC2 (Na⁺-K⁺-2Cl⁻, zależny od ATP; zablokowany przez furosemid = silny diuretyk pętlowy) → aktywna reabsorpcja NaCl bez H₂O (nieprzepuszczalne) → rdzeń hipertoniczny. (3) Cewka zbiorcza: ADH (wazopresyna) → receptory V2 → cAMP → fosforylacja → insercja akwaporyn AQP2 do apikalnej błony → woda wychodzi osmotycznie do hipertonicznego rdzenia → zagęszczony mocz (do ~1200 mOsm). Bez ADH: mocz rozcieńczony (~50 mOsm, moczówka prosta).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Powstawanie moczu',
    subtopic_id: S.mocz,
    question_type: 'single',
    question_text: 'Glukoza jest całkowicie reabsorbowana przez kanaliki nerkowe u zdrowej osoby. Dlaczego glukozuria (glukoza w moczu) pojawia się przy cukrzycy?',
    options: [
      { id: 'A', text: 'Przy glikemii > ~180 mg/dl (10 mmol/l) ilość glukozy filtrowanej przekracza maksymalną zdolność reabsorpcji (Tm) transporterów SGLT2 w kanaliku proksymalnym → nadmiar glukozy trafia do moczu', is_correct: true },
      { id: 'B', text: 'Insulina bezpośrednio hamuje reabsorpcję glukozy w nerkach — przy braku insuliny (cukrzyca T1) nerki celowo wydalają glukozę jako mechanizm obronny', is_correct: false },
      { id: 'C', text: 'Glukozuria wynika z uszkodzenia kłębuszków przez cukrzycę — uszkodzona bariera filtracyjna przepuszcza glukozę, której normalnie nie filtruje', is_correct: false },
      { id: 'D', text: 'W cukrzycy nerki syntetyzują dodatkową glukozę przez glukoneogenezę i wydalają jej nadmiar do moczu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Reabsorpcja glukozy: kanalik proksymalny (PCT) → SGLT2 (cotransport Na⁺-glukoza, 90% reabsorpcji) + SGLT1 (~10%) → normalne: 100% glukozy filtrowanej reabsorbowane; glukoza = 0 w moczu. Próg nerkowy glukozy (renal threshold): ~180 mg/dl (10 mmol/l) glikemii → ilość filtrowanej glukozy przekracza Tm (transport maximum) SGLT2 (~375 mg/min) → nadmiar nie reabsorbowany → glukozuria. W cukrzycy: hiperglikemia > progu → glukoza w moczu → efekt osmotyczny → poliuria (duże ilości moczu) → polidypsja (pragnienie). Klinicznie: flozyny (inhibitory SGLT2: empagliflozyna, dapagliflozyna) = leki p/cukrzycowe sztucznie obniżające próg → wydalanie glukozy w moczu → obniżenie glikemii + efekt kardioprotekcyjny i nerkoprotekcyjny.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Regulacja wydalania ───
  {
    subtopic: 'Fizjologia człowieka — Regulacja wydalania',
    subtopic_id: S.regul,
    question_type: 'single',
    question_text: 'Aldosteron i ADH (wazopresyna) regulują gospodarkę wodno-elektrolitową nerek. Które stwierdzenie POPRAWNIE porównuje ich mechanizm działania?',
    options: [
      { id: 'A', text: 'ADH (wazopresyna): produkowany w podwzgórzu, uwalniany z przysadki tylnej; działa na cewkę zbiorczą → wstawia AQP2 → retencja wody; aldosteron: kortykosteroid z kory nadnerczy; działa na DCT i CD → wstawia kanały ENaC i pompy Na⁺/K⁺ → retencja Na⁺ i wydalanie K⁺', is_correct: true },
      { id: 'B', text: 'ADH jest produkowany w korze nadnerczy i działa na DCT (kanalik dystalny) poprzez receptor mineralokortykoidowy; aldosteron produkowany w podwzgórzu działa na kłębuszki', is_correct: false },
      { id: 'C', text: 'Oba hormony mają identyczne miejsce działania (kanalik proksymalny) i efekty — różni je wyłącznie struktura chemiczna (ADH = białko, aldosteron = lipid)', is_correct: false },
      { id: 'D', text: 'ADH powoduje wydalanie wody przez nerki (diurezę) w odpowiedzi na przewodnienie; aldosteron hamuje wchłanianie Na⁺ przy jego nadmiarze', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ADH (wazopresyna, AVP): nonapeptyd syntezowany w jądrach nadwzrokowych i przykomorowych podwzgórza, magazynowany i uwalniany z neurohipofizalnej (tylnej przysadki). Bodziec: wzrost osmolalności osocza (osmoreceptory podwzgórza) lub spadek objętości krwi. Działanie: receptor V2 na komórkach cewki zbiorczej (i DCT) → cAMP → PKA → fosforylacja AQP2 → insercja do apikalnej błony → woda reabsorbowana osmotycznie → zagęszczony mocz, wzrost objętości krwi. Brak ADH → moczówka prosta (DI): poliuria ~ 10–20 L/dobę. Aldosteron: mineralokortykoid (kora nadnerczy, zona glomerulosa); stymulowany przez angiotensynę II (układ RAA), hiperkaliemię, ACTH. Działanie: receptor mineralokortykoidowy (MR, wewnątrzkomórkowy) → transkrypcja → więcej ENaC (apikalny Na⁺) + Na⁺/K⁺-ATPazy (bazolateralnej) → retencja Na⁺ + H₂O → wydalanie K⁺ i H⁺. Nadmiar aldosteronu (hiperaldosteronizm, zespół Conna) → nadciśnienie + hipokaliemia.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Regulacja wydalania',
    subtopic_id: S.regul,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących regulacji wydalania i homeostazy:\nA. Układ renina-angiotensyna-aldosteron (RAA): przy spadku ciśnienia tętniczego (lub niedoborze Na⁺) aparat przykłębuszkowy nerek wydziela reninę → angiotensynogen → angiotensyna I → ACE → angiotensyna II → skurcz naczyń + stymulacja aldosteronu → wzrost ciśnienia i retencja Na⁺.\nB. Kwasica metaboliczna (niskie pH krwi) jest kompensowana przez nerki przez zwiększone wydalanie jonów H⁺ (przez pompę protonową cewki zbiorczej) i zwiększoną reabsorpcję HCO₃⁻ — nerki działają wolniej niż płuca (doby vs minuty).\nC. Erytropoetyna (EPO) produkowana przez nerki przy hipoksji stymuluje szpik kostny do produkcji erytrocytów — jest to przykład regulacji hormonalnej funkcji pozanerkowę przez nerki.',
    options: [
      { id: 'A', text: 'P, P, P', is_correct: true },
      { id: 'B', text: 'P, F, P', is_correct: false },
      { id: 'C', text: 'P, P, F', is_correct: false },
      { id: 'D', text: 'F, P, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: RAA: komórki ziarniste (JG, juxtaglomerular) → renina (proteaza); substrat: angiotensynogen (wątroba) → angiotensyna I (10 aa) → ACE (angiotensin-converting enzyme, nabłonek płuc) → angiotensyna II (8 aa): skurcz naczyń (↑TPR↑BP) + aldosteron (nadnercza) + ADH (podwzgórze) + pragnienie + reabsorpcja Na⁺. Inhibitory ACE (lizynopryl) i sartany (ARBs) = podstawowe leki na nadciśnienie. B — PRAWDA: kompensacja kwasicy: płucna (minuty): hiperwentylacja → wydalanie CO₂ → pH ↑; nerkowa (doby): aktywacja H⁺-ATPazy w cewce zbiorczej A (type A intercalated cells) → wydalanie H⁺ jako NH₄⁺ i titratable acid; reabsorpcja HCO₃⁻ wzrasta. Nerki = wolna lecz pełna kompensacja. C — PRAWDA: EPO (erytropoetyna): fibroblasty śródmiąższu kory nerki (90%) i wątroba (10%); bodziec: hipoksja (HIF-1α → transkrypcja EPO); EPO → receptor na BFU-E/CFU-E w szpiku → proliferacja i różnicowanie erytrocytów → więcej RBC → lepszy transport O₂. Niedokrwistość nerkowa w PChN: nerki nie produkują EPO → leczenie: EPO-analogi (epoetyna).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Trawienie tłuszczów',
    subtopic_id: S.tluszcz,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących trawienia i transportu tłuszczów:\nA. Produkty trawienia tłuszczów (kwasy tłuszczowe + monoacyloglicerole) wchłonięte przez enterocyty są resyntezowane do triacylogliceroli i pakowane w chylomikrony, które transportowane są limfą do krwi (z pominięciem wątroby).\nB. Krótkie i średnie kwasy tłuszczowe (C<12) mogą być wchłaniane bezpośrednio do krwi portalnej (bez drogi limfatycznej), ponieważ są wystarczająco hydrofilne.\nC. Cholesterol pokarmowy jest wchłaniany przez transporter NPC1L1 (inhibowany przez ezetymib) na powierzchni enterocytów — ezetymib jest lekiem obniżającym cholesterol przez hamowanie jego syntezy w wątrobie.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: długie KT (C>12): w enterocycie → resynteza TAG → pakowanie z apoB-48, cholesterolem, fosfolipidami → chylomikrony (80–1000 nm) → exocytoza do śródbłonka → wchłonięcie do mleczaka (centralnego naczynia chłonnego kosmka) → cysterna chłonna → przewód piersiowy → żyła podobojczykowa lewa → krew. Omijają wątrobę! (first-pass hepatic omitted). B — PRAWDA: SCFA i MCFA (C<12, octanowy C8, dekanowy C10): wystarczająco rozpuszczalne → wchłaniają się bezpośrednio do kapilar krwionośnych kosmka → żyła wrotna → wątroba. Dlatego olej MCT (triglicerydy średniołańcuchowe) = łatwiej wchłanialny u pacjentów z chorobami limfatycznymi. C — FAŁSZ: ezetymib rzeczywiście hamuje NPC1L1 (transporter cholesterolu pokarmowego i żółciowego na rąbku szczoteczkowym enterocytów) → zmniejsza wchłanianie cholesterolu pokarmowego. ALE ezetymib NIE hamuje syntezy cholesterolu w wątrobie (to robi statyna). Lek łączony: ezetymib + statyna = podwójne obniżenie cholesterolu.',
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
  console.log(`Seeding ${questions.length} mock questions for Fizjologia czlowieka — pokarmowy i wydalniczy...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
