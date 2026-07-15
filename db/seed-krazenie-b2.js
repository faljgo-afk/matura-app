// Seed batch 2/7 — Fizjologia człowieka: układ krążenia i oddechowy
// Naczynia krwionośne i krążenie (4) + Krew — skład i funkcje (6)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175'

const S = {
  naczynia: 'e55fdbd3-f99d-4832-8514-5c088fe8bb0e',
  krew:     '71faabd8-5948-411f-95a1-1917b2fea837',
}

const questions = [

  // ── NACZYNIA KRWIONOŚNE I KRĄŻENIE (4) ────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.naczynia, question_type: 'single',
    question_text: 'Krążenie wieńcowe, płucne i systemowe to trzy obiegi naczyniowe serca. Które zestawienie POPRAWNIE opisuje ciśnienia w tych obiegach i ich funkcje?',
    options: [
      { id: 'A', text: 'Krążenie płucne (małe): prawa komora pompuje krew do tętnic płucnych pod ciśnieniem ~25/8 mmHg (skurczowe/rozkurczowe); niskie ciśnienie chroni delikatne pęcherzyki płucne przed obrzękiem; krążenie systemowe (duże): lewa komora → aorta pod ~120/80 mmHg; wyższe ciśnienie zapewnia perfuzję wszystkich narządów ciała', is_correct: true },
      { id: 'B', text: 'Krążenie płucne ma wyższe ciśnienie niż systemowe (300/150 mmHg) ze względu na dużą oporność naczyń płucnych; krążenie systemowe ma ciśnienie ~5/2 mmHg; prawa komora jest grubsza i silniejsza niż lewa, bo pokonuje większy opór', is_correct: false },
      { id: 'C', text: 'Krążenie wrotne (porta): jest częścią krążenia płucnego; krew z płuc wpływa do żyły wrotnej → wątroba → serce; produkty trawienia z jelit NIE trafiają do wątroby przez krążenie wrotne, lecz bezpośrednio do lewego przedsionka', is_correct: false },
      { id: 'D', text: 'W krążeniu płucnym tętnice zawierają krew utlenowaną a żyły — odtlenowaną; to jedyny obieg, w którym żyły mają krew bogatszą w CO₂ niż tętnice; ciśnienie w tętnicach płucnych jest równe ciśnieniu w aorcie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'KRĄŻENIE PŁUCNE (małe, pulmonalne): prawa komora → pień płucny → tt. płucne (prawa/lewa) → kapilary płucne (otaczają pęcherzyki) → żyły płucne → lewy przedsionek; ciśnienia: tętnica płucna: 25/8 mmHg (śr. ~15 mmHg); NISKIE by: (1) chronić pęcherzyki przed obrzękiem płucnym (wystarczy ciśnienie onkotyczne albumin); (2) optymalizować wymianę gazową; nadciśnienie płucne (PAH) > 25 mmHg → obrzęk, duszność. KRĄŻENIE SYSTEMOWE (duże): lewa komora → aorta → tętnice → kapilary → żyły → VC → prawy przedsionek; ~120/80 mmHg; opór: głównie w tętniczkach (80% spadku ciśnienia). KRĄŻENIE WROTNE (porta hepatis): żyła wrotna zbiera krew z: żołądka, jelita cienkiego, grubego, trzustki, śledziony → wątroba (kontrola składników odżywczych, metabolizm leków, detoks); po wątrobie → żyły wątrobowe → żyła główna dolna; KLUCZ: tętnice PŁUCNE = odtlenowana, żyły PŁUCNE = utlenowana (odwrotnie!).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.naczynia, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących regulacji przepływu krwi przez tkanki:',
    options: [
      { id: 'A', text: 'Autoregulacja przepływu: tkanki regulują własne ukrwienie poprzez miejscowe czynniki metaboliczne — wzrost stężenia CO₂, spadek pH, wzrost stężenia adenozyny, K⁺, brak O₂ → wazodylatacja tętniczek danego obszaru → wzrost przepływu (aktywna hyperemia); działa niezależnie od układu nerwowego.', is_correct: true },
      { id: 'B', text: 'Śródbłonek naczyniowy jest bierną wyściółką bez funkcji regulacyjnych; nie syntetyzuje żadnych czynników vazoaktywnych; tlenek azotu (NO) jest syntetyzowany wyłącznie przez neurony i nie ma związku z regulacją napięcia naczyniowego.', is_correct: false },
      { id: 'C', text: 'Odruchy z baroreceptorów: baroreceptory w łuku aorty i zatoce szyjnej wykrywają rozciągnięcie ściany naczyniowej (wzrost BP) → impulsy do jądra pasma samotnego (NTS) w rdzeniu → aktywacja nerwu błędnego (↓HR) + hamowanie ośrodka współczulnego (↓TPR) → spadek BP (odruch z baroreceptorów, odruch depresyjny).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: AUTOREGULACJA METABOLICZNA: mechanizm: aktywność tkanki → zużycie O₂ + produkcja CO₂, H⁺, adenozyny, K⁺, mleczanu → lokalna wazodylatacja tętniczek (rozkurcz mięśniówki gładkiej przez kanały K⁺-ATP-zależne i KATP) → ↑przepływ bez potrzeby unerwienia; hiperemia aktywna: podczas wysiłku mięśnie → przepływ wzrasta ×20; hiperemia reaktywna (after-flow): po uwolnieniu ucisku → nagły ↑przepływu; autoregulacja miogenna: wzrost ciśnienia rozciąga mięśniówkę → aktywacja kanałów mechanosensytywnych → skurcz → ochrona kapilar. B — Fałsz: śródbłonek = AKTYWNY narząd endokrynno-parakrynny: (1) NO (eNOS, endothelial NO synthase): L-arginina → NO → guanylat cyklaza → cGMP → ↓Ca²⁺ SMC → relaksacja; sildenafil (Viagra) → ↓degradacji cGMP → wydłuża wazodylatację; (2) PGI₂ (prostacyklina): ↓agregacji płytek + wazodylatacja; (3) endotelina-1 (ET-1): wazokonstryktor (silny); (4) EDHF (endothelium-derived hyperpolarizing factor). C — Prawda: baroreceptory (mechanoreceptory): łuk aorty (n. depresyjny → n. X) + zatoka szyjna (n. Heringa → n. IX → NTS); ↑BP → ↑firing baroreceptorów → NTS → DVAS (dorsal vagal nucleus) → ↑para → bradykardia + RVLM (rostral VLM) → hamowanie sympatyczne → ↓TPR; odruch działa w sekundach; działanie: przy zmianie pozycji ciała (ortostatyzm) — niewystarczający odruch → omdlenie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.naczynia, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują szczególne krążenia narządowe? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Krążenie mózgowe: mózg otrzymuje ~15% CO (750 ml/min); autoregulacja utrzymuje CBF (cerebral blood flow) stały przy MAP 60–150 mmHg; bariera krew-mózg (tight junctions między komórkami śródbłonka + astrocyty) chroni CNS; gwałtowny spadek MAP < 50 mmHg → omdlenie', is_correct: true },
      { id: 'B', text: 'Krążenie nerkowe: nerki otrzymują ~20–25% CO (~1 000–1 200 ml/min), choć stanowią <0,5% masy ciała; układ tętniczek doprowadzającej (afferent arteriole) i odprowadzającej (efferent arteriole) otaczający kłębuszek nerkowy umożliwia precyzyjną regulację ciśnienia filtracji (GFR)', is_correct: true },
      { id: 'C', text: 'Krążenie skórne pełni głównie funkcję termoregulacyjną: w gorącu → wazodylatacja (naczynia podskórne) → utrata ciepła przez promieniowanie i konwekcję + pot (parowanie); w zimnie → wazokonstrykcja → ograniczenie strat ciepła; przepływ przez skórę waha się od 50 ml/min (zimno) do 2 000 ml/min (gorąco)', is_correct: true },
      { id: 'D', text: 'Naczynia wątrobowe: wątroba jest zaopatrywana wyłącznie przez żyłę wrotną (100% krwi); tętnica wątrobowa właściwa nie istnieje; wątroba nie potrzebuje utlenowanej krwi, bo metabolizuje wyłącznie beztlenowo; żyła wrotna niesie krew o wysokim O₂ (jak tętnica)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) CEREBRAL BLOOD FLOW (CBF): CBF = CPP / CVR; CPP (cerebral perfusion pressure) = MAP − ICP; autoregulacja: przy MAP 60–150 mmHg → CBF ≈ 750 ml/min = const; poniżej 50 mmHg → omdlenie (syncope); CO₂ = silny wazodylator w mózgu (↑PaCO₂ → ↑CBF → ból głowy po spożyciu CO₂-bogatych napojów?); BBB: claudin-5, occludin (tight junctions); pericyty + end-feet astrocytów; przerywa ją zapalenie, guz, uraz. (B) RENAL BLOOD FLOW: 1 100 ml/min = 20–25% CO; autoregulacja: 80–180 mmHg; GFR = 125 ml/min u zdrowego dorosłego; afferent arteriole: adenozyna → skurcz (hamuje GFR); angiotensyna II → efferent skurcz (utrzymuje GFR); ACE inhibitory → dilatacja efferent → ↓GFR (ważne u chorych z jedną nerką!). (C) SKIN BLOOD FLOW: AVA (arteriovenous anastomoses) w opuszkach palców, uszach, nosie → zwarcie kapilary → termoregulacja; termoreceptory w podwzgórzu; warzone: zimno → noradrenalina → skurcz → ↓strat; gorąco → aktywacja cholinergiczna (VIP?) → rozkurcz + pot. (D) fałsz: wątroba = podwójne zaopatrzenie: (1) żyła wrotna (~75%): krew odtlenowana (SpO₂ ~70%), bogata w substancje odżywcze z jelit; (2) tętnica wątrobowa właściwa (hepatic artery proper, gałąź pnia trzewnego) (~25%): krew utlenowana; razem tworzą zatoki wątrobowe (sinusoids); wątroba: tlenowy metabolizm do 70% (β-oksydacja FA, synteza białek).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.naczynia, question_type: 'single',
    question_text: 'Wstrząs (shock) jest stanem zagrożenia życia wynikającym z niedostatecznej perfuzji tkanek. Który opis POPRAWNIE różnicuje typy wstrząsu i ich przyczyny?',
    options: [
      { id: 'A', text: 'Wstrząs hipowolemiczny: utrata objętości krwi/płynów (krwotok, oparzenia, odwodnienie) → ↓CO → ↑HR, ↑TPR (kompensacja współczulna), ↓BP, chłodna blada skóra; wstrząs anafilaktyczny: masywna wazodylatacja (histamina, leukotrieny) → ↓TPR → ↓BP → ciepła czerwona skóra mimo hipotensji; wstrząs kardiogenny: ↓CO z przyczyn sercowych (zawał) → objawy jak hipowolemiczny + obrzęk płuc', is_correct: true },
      { id: 'B', text: 'Wszystkie typy wstrząsu mają identyczny mechanizm: skurcz naczyń obwodowych i wzrost TPR; nie ma różnicy między wstrząsem hipowolemicznym a anafilaktycznym pod względem temperatury skóry i koloru skóry; leczenie wszystkich typów wstrząsu jest identyczne', is_correct: false },
      { id: 'C', text: 'Wstrząs septyczny wynika z nadmiernej wazokonstrykcji wywołanej endotoksynami bakterii; charakteryzuje się bardzo wysokim BP i niskim HR; skóra jest zawsze zimna i blada; antybiotyki są przeciwwskazane w leczeniu wstrząsu septycznego', is_correct: false },
      { id: 'D', text: 'Wstrząs hipowolemiczny: objawia się wzrostem CO, spadkiem HR i wzrostem BP; jest spowodowany nadmiarem płynów w naczyniach; typowym objawem jest obrzęk i nadciśnienie; leczenie polega na podaniu leków moczopędnych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'TYPY WSTRZĄSU — porównanie: HIPOWOLEMICZNY: przyczyna: utrata ≥30–40% objętości krwi; hemodynamika: ↓preload → ↓SV → ↓CO; kompensacja: ↑HR (tachykardia), ↑TPR (wazokonstrykcja: blednica, zimna skóra), ↓diureza; leczenie: płyny (NaCl 0,9%, krystaloidy, krew); KARDIOGENNY: przyczyna: zawał, tamponada serca, arytmia; ↓CO z przyczyn sercowych; ↑CVP (ciśnienie żylne) + obrzęk płuc (lewa strona) + zimna skóra; leczenie: dobutamina, diuretyki, rewaskularyzacja; DYSTRYBUCYJNY (anafilaktyczny, septyczny, neurogenny): przyczyna: masywna wazodylatacja; anafilaktyczny: IgE → mastocyty → histamina + leukotrieny → ↓TPR; ciepła skóra (ROZGRZANA, bo krew w skórze), ↓BP, obrzęk Quinckego, bronchospasm; leczenie: adrenalina i.m.; SEPTYCZNY: endotoksyny (LPS) → TNF-α, IL-1, IL-6 → NO ↑↑↑ → masywna wazodylatacja; wczesny septic shock: ciepła skóra (jak anafilaktyczny — "warm shock"); leczenie: płyny, noradrenalina, antybiotyki; NEUROGENNY: uszkodzenie rdzenia → utrata tonu sympatycznego → wazodylatacja + bradykardia (paradoks!).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── KREW — SKŁAD I FUNKCJE (6) ────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.krew, question_type: 'single',
    question_text: 'Erytrocyty (czerwone krwinki) mają unikalną budowę dostosowaną do transportu gazów. Które stwierdzenie POPRAWNIE opisuje ich strukturę i właściwości?',
    options: [
      { id: 'A', text: 'Dojrzały erytrocyt człowieka: brak jądra komórkowego i organelli (w tym mitochondriów) → metabolizm wyłącznie glikolityczny (glikoliza beztlenowa + szlak pentozofosforanowy); kształt: dwuwklęsły dysk (biconcave disc) — zwiększa stosunek powierzchni do objętości → szybsza dyfuzja O₂; średnica ~7–8 μm; życie ~120 dni', is_correct: true },
      { id: 'B', text: 'Dojrzały erytrocyt człowieka posiada jądro komórkowe i liczne mitochondria; metabolizuje kwasy tłuszczowe jako główne źródło energii; kształt kulisty (spherocyte) jest typowy dla zdrowego erytrocytu; erytrocyty żyją ~3–5 dni', is_correct: false },
      { id: 'C', text: 'Erytrocyty ptaków i płazów pozbawione są jądra komórkowego, podobnie jak u człowieka; u ssaków morskich (wieloryby) erytrocyty mają dodatkowe jądro pomagające w przechowywaniu O₂; kształt dwuwklęsły jest cechą wyłącznie krwi ludzkiej', is_correct: false },
      { id: 'D', text: 'Stężenie hemoglobiny w erytrocycie wynosi ~1–5 g/dl; erytrocyty produkowane są przez wątrobę u dorosłego człowieka; erytropoeza jest regulowana przez insulinę wydzielaną przez trzustkę; erytrocyty rozpadają się wyłącznie w nerkach', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ERYTROCYT (RBC, red blood cell): LICZBA: 4,5–5,5 mln/μl (mężczyźni), 3,9–4,9 mln/μl (kobiety); WIELKOŚĆ: 7–8 μm średnicy, 2 μm grubość; KSZTAŁT: dwuwklęsły dysk (biconcave disc): stosunek S/V = 1,5× wyższy niż kula → szybsza dyfuzja O₂; deformuje się w kapilarach (4 μm średnicy) → spektryna i aktyna cytoszkieletu; BRAK ORGANELLI: brak jądra, mitochondriów, ER, aparatu Golgiego → nie może się dzielić ani naprawiać DNA; METABOLIZM: glikoliza beztlenowa → ATP (Na⁺/K⁺-ATPaza utrzymuje objętość + kształt); szlak pentozofosforanowy (HMP shunt): NADPH → redukcja glutationu → ochrona przed stresem oksydacyjnym; niedobór G6PD → wrażliwość na hemolizę (favyzm); ERYTROPOEZA: szpik kostny → erytroblast → retikulocyt (wypycha jądro) → erytrocyt; regulacja: EPO (erytropoetyna) z nerek; DEGRADACJA: śledziona + wątroba (makrofagi); hem → bilirubina → urobilinogen; Fe → transferryna → recykling; PTAKI I PŁAZY: mają jądra w erytrocytach (wyjątek: ssaki = bez jądra, z wyjątkiem wielbłądowatych = eliptyczne JĄDRZASTE).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.krew, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących hemoglobiny i jej funkcji:',
    options: [
      { id: 'A', text: 'Hemoglobina (Hb) zbudowana jest z 4 podjednostek: 2α + 2β (HbA, hemoglobina dorosłego); każda podjednostka zawiera grupę hemową z atomem Fe²⁺ (żelazo dwuwartościowe) wiążącym O₂; utlenienie Fe²⁺ do Fe³⁺ (methemoglobina) blokuje wiązanie O₂; stężenie Hb w krwi: 14–18 g/dl (mężczyźni), 12–16 g/dl (kobiety)', is_correct: true },
      { id: 'B', text: 'Krzywa dysocjacji oksyhemoglobiny (ODC) ma kształt sigmoidalny (S-kształtny) dzięki kooperatywności — wiązanie O₂ przez jedną podjednostkę ułatwia wiązanie przez następne; efekt Bohra: wzrost pCO₂ lub spadek pH PRZESUWA krzywą W PRAWO (obniżenie powinowactwa do O₂) — ułatwia oddawanie O₂ do tkanek metabolicznie aktywnych', is_correct: true },
      { id: 'C', text: 'Hemoglobina płodowa (HbF, 2α + 2γ) ma NIŻSZE powinowactwo do O₂ niż HbA, dlatego płód musi oddychać szybciej niż dorosły; HbF jest niezbędna po urodzeniu i u dorosłych zastępuje HbA całkowicie po 6. miesiącu życia; różnica między HbF a HbA polega na innej liczbie podjednostek', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: HEMOGLOBINA: tetramer globiny (2α, 148 aa; 2β, 146 aa) + 4 hemy; hem = pierścień porfirynowy + Fe²⁺; 1 Hb wiąże 4 O₂ (pO₂=100 mmHg: 97% saturacja); methemoglobina (Fe³⁺): związana z azotynami, CO (karboksyhemoglobina), cyjankiem → nie oddaje O₂ → leczona błękitem metylenowym; Hb u dorosłego: 15 g/dl → pojemność tlenowa krwi: 15 × 1,34 ml O₂/g = ~20 ml O₂/100 ml krwi. B — Prawda: SIGMOIDALNA KRZYWA ODC: kooperatywność allosteryczna (model MWC: Monod-Wyman-Changeux); deoksyHb: struktura T (tense, niskie powinowactwo); oksy-Hb: struktura R (relaxed, wysokie); EFEKT BOHRA (Bohr, 1904): ↑CO₂ + ↑H⁺ (↓pH) → przesunięcie krzywej W PRAWO → P₅₀ wzrasta (O₂ oddawane przy wyższym pO₂) → łatwiejsze dostarczanie O₂ do tkanek; 2,3-BPG (bisfosfoglicerynian): stabilizuje T-form → przesuwa W PRAWO; ↑ przy hipoksji (aklimatyzacja górska). C — Fałsz: HbF (2α + 2γ): ma WYŻSZE powinowactwo do O₂ niż HbA (krzywa przesunięta W LEWO); dlaczego: γ-podjednostka słabiej wiąże 2,3-BPG → R-forma stabilna → wyższe powinowactwo → płód pobiera O₂ od matki przez łożysko (matka oddaje, płód przyjmuje); HbF stopniowo zastępowana przez HbA od urodzenia do 6. miesiąca życia (NIE odwrotnie!); u dorosłych HbF < 1% (resztkowa).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.krew, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują leukocyty i ich rolę w obronie organizmu? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Granulocyty obojętnochłonne (neutrofile): najliczniejsze leukocyty (55–70%); fagocyty "pierwszej linii"; żyją 6–12 h w krwi, kilka dni w tkankach; ziarnistości zawierają: laktoferynę, lizozym, MPO (mieloperoksydaza → HOCl → zabijanie bakterii), elastazę, kolagenazę; tworzą NETs (neutrophil extracellular traps) — sieci DNA łapiące bakterie', is_correct: true },
      { id: 'B', text: 'Limfocyty T i B to dwie populacje limfocytów różniące się miejscem dojrzewania: limfocyty T dojrzewają w grasicy (thymus) i odpowiadają za odporność komórkową; limfocyty B dojrzewają w szpiku kostnym i są prekursorami komórek plazmatycznych produkujących przeciwciała (odporność humoralna)', is_correct: true },
      { id: 'C', text: 'Monocyty (3–8% leukocytów) migrują do tkanek i różnicują się w makrofagi; makrofagi są wielofunkcyjnymi komórkami układu odpornościowego: fagocytoza, prezentacja antygenów (APC) przez MHC II → aktywacja limfocytów T pomocniczych (Th); wydzielają cytokiny (TNF-α, IL-1, IL-6, IL-12) regulujące odpowiedź zapalną', is_correct: true },
      { id: 'D', text: 'Eozynofile stanowią 40–70% leukocytów i są dominującą populacją we krwi zdrowego człowieka; ich główną funkcją jest produkcja hemoglobiny; bazofile fagocytują bakterie gram-ujemne i są niezbędne w walce z zakażeniami bakteryjnymi; eozynofile nie mają związku z alergią', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) NEUTROFILE (PMN, polymorphonuclear neutrophils): 55–70% leukocytów; 4 000–11 000/μl; jądro płatowe (2–5 płatów); ziarnistości: pierwotne (azurofilne, lizosomy): MPO, elastaza, katepsyna G; wtórne (swoiste): laktoferyna, B12-bp, kolagenaza; trzeciorzędowe: żelatynaza; mechanizmy zabijania: (1) ROI (reactive oxygen intermediates): NADPH oksydaza → O₂⁻ → H₂O₂ → HOCl (MPO); (2) elastaza rozkłada białka bakteryjne; (3) NETs (Brinkmann 2004): programowana śmierć NET-osis → sieci chromatyny + granul → unieruchomienie bakterii; niedobór MPO → podatność na Candida. (B) LIMFOCYTY: 20–40%; T: CD4⁺ (Th1, Th2, Th17, Treg), CD8⁺ (cytotoksyczne CTL); TCR rozpoznaje peptyd-MHC; NK (natural killers): brak TCR/BCR, zabijają bez sensytyzacji; B: BCR = powierzchniowe Ig; po aktywacji → plazmocyty (Ab) + B-pamięci; dojrzewanie T: w grasicy → selekcja (pozytywna → MHC, negatywna → tolerancja); dojrzewanie B: szpik → pozytywna/negatywna selekcja. (C) MONOCYT→MAKROFAG: monocyty w krwi: 3–8%; po migracji do tkanek (przez diapedezę) → makrofagi tkankospecyficzne: Kupffera (wątroba), mikroglej (mózg), osteoklasty (kości), alweolarne (płuca); PREZENTACJA ANTYGENU: fagocytoza → degradacja w lizosomie → peptydy + MHC II → TCR CD4⁺ Th → aktywacja odporności; cytokiny: TNF-α (gorączka, kacheksja), IL-1β (pirogen endogenny), IL-6 (CRP, ostrofaza). (D) fałsz: eozynofile = 1–4% (NIE 40–70%); funkcje: odporność przeciwpasożytnicza (helminty), reakcje alergiczne (astma, anafilaksja), zawierają MBP (major basic protein), ECP → toksyczne dla pasożytów i tk.; bazofile = 0,5–1%; degranulacja IgE-zależna → histamina + leukotrieny (alergia).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.krew, question_type: 'single',
    question_text: 'Grupy krwi układu ABO i Rh są kluczowe w transfuzjologii. Które zestawienie POPRAWNIE opisuje antygeny i przeciwciała w tym układzie?',
    options: [
      { id: 'A', text: 'Grupa A: antygen A na erytrocytach, przeciwciała anty-B w osoczu; grupa B: antygen B, przeciwciała anty-A; grupa AB: antygeny A i B, brak przeciwciał (uniwersalny biorca); grupa 0: brak antygenów, przeciwciała anty-A i anty-B (uniwersalny dawca); Rh+: antygen D na erytrocytach; Rh−: brak antygenu D', is_correct: true },
      { id: 'B', text: 'Grupa A: brak antygenów, przeciwciała anty-A; grupa B: brak antygenów, przeciwciała anty-B; grupa AB: brak antygenów i przeciwciał; niezgodność Rh jest niemożliwa u europejczyków, bo wszyscy mają grupę Rh+; nie ma potrzeby sprawdzania grupy krwi przed transfuzją', is_correct: false },
      { id: 'C', text: 'Antygeny ABO są białkami jądra komórkowego erytrocytów; przeciwciała anty-A i anty-B są wrodzone i obecne już w chwili urodzenia bez kontaktu z antygenami; przetoczenie niezgodnej grupy krwi nie powoduje żadnych objawów i jest bezpieczne', is_correct: false },
      { id: 'D', text: 'Konflikt serologiczny (choroba hemolityczna noworodka): Rh− matka + Rh+ ojciec → Rh+ płód; przy PIERWSZEJ ciąży matka zawsze produkuje dużą ilość przeciwciał anty-D niszczących erytrocyty płodu; dlatego pierwsza ciąża Rh− kobiety jest najgroźniejsza; immunoglobulina anty-D jest przeciwwskazana', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'UKŁAD ABO: antygeny = oligosacharydy na powierzchni erytrocytów (i śródbłonku, śródziewnie) kodowane przez geny A, B, H; ALELA I^A → transferaza A → dodaje GalNAc → antygen A; I^B → transferaza B → dodaje Gal → antygen B; i^0 → brak transferazy → antygen H (nie-A, nie-B); PRZECIWCIAŁA: naturalne (izohemaglutyniny): IgM, powstają po kontakcie z antygenami środowiskowymi (podobnymi do ABO); anty-A i anty-B = IgM (nie przechodzą przez łożysko); TRANSFUZJA: niezgodność → hemoliza wewnątrznaczyniowa → ostra transfuzyjne reakcja hemolityczna (AHTR): gorączka, dreszcze, hemoglobinuria, DIC → śmierć; UKŁAD Rh (Landsteiner-Wiener): antygen D na chromosomie 1; Rh+ = posiadają antygen D; Rh− = brak; w Polsce: ~85% Rh+; KONFLIKT SEROLOGICZNY (ChHPN): PIERWSZA ciąża Rh+ płodem: zazwyczaj BEZPIECZNA (matka nie ma anty-D, chyba że wcześniej transfuzja Rh+); przy porodzie/poronieniu: erytrocyty płodu przenikają do krwi matki → sensityzacja → produkcja anty-D (IgG!); DRUGA ciąża: anty-D (IgG) przechodzi przez łożysko → hemoliza płodowych RBC → żółtaczka, niedokrwistość, hydrops fetalis; PROFILAKTYKA: immunoglobulina anty-D (Rhogam) w 28 tyg. ciąży i po porodzie → wiąże Rh+ erytrocyty płodu → hamuje sensityzację.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.krew, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących osocza krwi i jego składników:',
    options: [
      { id: 'A', text: 'Osocze (plasma) stanowi ~55% objętości krwi (hematokryt = objętość erytrocytów / objętość krwi całkowitej = 40–50% u mężczyzn, 36–46% u kobiet); osocze = woda (~90%) + białka (7%: albuminy 60%, globuliny 35%, fibrynogen 4%) + elektrolity + substancje odżywcze + hormony + produkty przemiany materii', is_correct: true },
      { id: 'B', text: 'Surowica (serum) = osocze bez fibrynogenu (i innych czynników krzepnięcia); powstaje po wykrzepnięciu próbki krwi; surowica zawiera wszystkie składniki osocza poza fibrynogenem; w diagnostyce laboratoryjnej surowica jest często używana do oznaczania białek, enzymów, hormonów (np. TSH, kortyzol, albuminy)', is_correct: true },
      { id: 'C', text: 'Albuminy osocza (MW ~66 500 Da) syntetyzowane są przez nerki; ich główną funkcją jest transport hormonów tarczycy, bilirubin, jonów Ca²⁺, kwasów tłuszczowych, leków; pełnią też funkcję buforu białkowego (pKa ~5,5 = ważny bufor osocza); nie wpływają na ciśnienie onkotyczne (koloidoosmotyczne) krwi', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: SKŁAD KRWI: 45% erytrocyty, <1% leukocyty + płytki, 55% osocze; hematokryt (Ht, PCV): mężczyźni: 40–54%, kobiety: 36–47%; OSOCZE: 90–92% woda; BIAŁKA OSOCZA: (1) albuminy: 35–55 g/l; synteza: WĄTROBA; funkcje: ciśnienie onkotyczne (~28 mmHg = 75% całości), transport (bilirubina niezwiązana, FFA, hormony, leki np. warfaryna, penicylina); (2) globuliny: α₁ (α₁-antytrypsyna, orosomukoid), α₂ (haptoglobina, ceruloplazmina), β (transferryna, CRP, C3, C4), γ (immunoglobuliny IgA, IgG, IgM, IgD, IgE); (3) fibrynogen (czynnik I): 2–4 g/l; kluczowy w krzepnięciu. B — Prawda: SUROWICA vs OSOCZE: osocze = krew − elementy morfotyczne (+ antykoagulant EDTA/heparyna); surowica = krew − elementy morfotyczne − czynniki krzepnięcia (fibrynogen → fibryna → skrzep → surowica po odwirowaniu); surowica: wyższe stężenie K⁺ (z lizowanych płytek), wzrasta VEGF; diagnostyka: TSH, FT4, kortyzol, antygeny nowotworowe (PSA, AFP, CEA), troponina → SUROWICA lub OSOCZE heparynowe. C — Fałsz: albuminy syntetyzowane przez WĄTROBĘ (nie nerki!); 10–15 g/dobę; ciśnienie ONKOTYCZNE (koloidoosmotyczne): albuminy = 75–80% (ze względu na niski MW i wysokie stężenie molarne), pozostałe białka 20–25%; niedobór albumin (hipoalbuminemia): marskość wątroby, niedożywienie, nerczyca → obrzęki (↓π → ↑filtracja → płyn w tkankach); albuminy = WAŻNY BUFOR (pKa ~7,4 — strona histydyn, cysteiny).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.krew, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń dotyczących anemii (niedokrwistości) i jej typów są POPRAWNE? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Anemia z niedoboru żelaza (IDA, iron deficiency anemia): najczęstsza anemia na świecie; erytrocyty: mikrocytarne (MCV < 80 fl) + hipochromiczne (MCH < 27 pg, MCHC < 32 g/dl); przyczyny: niedobór Fe w diecie, przewlekła utrata krwi (miesiączka, wrzód trawienny), upośledzone wchłanianie (celiakia); leczenie: suplementacja żelaza', is_correct: true },
      { id: 'B', text: 'Anemia megaloblastyczna: erytrocyty makrocytarne (MCV > 100 fl); spowodowana niedoborem witaminy B₁₂ i/lub folianów → zaburzenie syntezy DNA (komórki rosną bez podziału = megaloblasty); niedobór B₁₂: weganie, niedokrwistość Addisona-Biermera (brak czynnika wewnętrznego Castle\'a → niemożność wchłaniania B₁₂ w jelicie krętym)', is_correct: true },
      { id: 'C', text: 'Anemia sierpowatokrwinkowa (sickle cell disease, SCD): mutacja punktowa w genie β-globiny (Glu6Val — glutaminian → walina); deoksygenacja HbS → polimeryzacja → sierpowate erytrocyty → hemoliza + zakrzepy (vaso-occlusion) → bóle, udary, kryzys aplastyczny; heterozygoty (HbAS) mają ochronę przed Plasmodium falciparum (malaria)', is_correct: true },
      { id: 'D', text: 'Policytemia (erytrocytoza) = nadmiar erytrocytów; zawsze jest patologiczna i grozi zawałem serca; u himalaistów i mieszkańców Andów nie obserwuje się nigdy policitemii fizjologicznej; zwiększone stężenie EPO zawsze wskazuje na nowotwór', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) IDA: globalna: ~1,6 mld chorych (WHO); laboratoryjnie: Hb < 12 g/dl kobiety, < 13 g/dl mężczyźni; ferrytyna ↓ (magazyn Fe), transferryna ↑, TIBC ↑, Fe ↓; smukłe erytrocyty, "pencil cells", anizocytoza; DIAGNOSTYKA RÓŻNICOWA mikrocytarnej: IDA vs talasemia vs anemia chorób przewlekłych vs zatrucie ołowiem. (B) MEGALOBLASTYCZNA: B₁₂ (kobalamina): wchłanianie w jelicie krętym przez IF (intrinsic factor, czynnik Castlea, synteza przez kom. okładzinowe żołądka); rezerwy: 3–5 lat (wątroba); niedobór: (1) weganie (brak B₁₂ w diecie roślinnej); (2) choroba Addisona-Biermera (autoimmunologiczna – Ab przeciwko IF lub kom. okładzinowym); (3) resekcja żołądka/krętego; (4) Giardia, tasiemiec rybi (D. latum); foliany (B₉): rezerwy 3–4 miesiące; niedobór: ciąża, alkohol, metotreksat; UWAGA: niedobór B₁₂ → neuropatia (subacute combined degeneration): demielinizacja tylnych i bocznych sznurów rdzenia; foliany nie chronią przed neuropatią. (C) SCD: mutacja HBB c.20A>T (rs334); trójlet GAG → GTG; Glu6Val; łańcuch β: pozycja 6; HbS w deoksyformie polimeryzuje → "sickle" (sierp); hemoliza pozanaczyniowa i wewnątrznaczyniowa; leczenie: hydroksymocznik (↑HbF → ↓HbS) → mniej kryzysów; transplantacja szpiku (cure); gerapia genowa (FDA 2023 — Casgevy, CRISPR-edycja). (D) fałsz: POLICYTEMIA: fizjologiczna: wysokość (↓pO₂ → ↑EPO → ↑RBC); aklimatyzacja: Tybetańczycy, Andyjczycy; patologiczna: Polycythemia vera (mutacja JAK2 V617F); EPO-producing tumors (rak nerkowokomórkowy, wątrobiaki); EPO doping (kolarstwo).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
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
