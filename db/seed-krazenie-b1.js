// Seed batch 1/7 — Fizjologia człowieka: układ krążenia i oddechowy
// Budowa i praca serca (7) + Naczynia krwionośne (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175'

const S = {
  serce:    'd42a351b-b29f-4d32-95ac-d51058726080',
  naczynia: 'e55fdbd3-f99d-4832-8514-5c088fe8bb0e',
}

const questions = [

  // ── BUDOWA I PRACA SERCA (7) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.serce, question_type: 'single',
    question_text: 'Na schemacie przedstawiono przekrój serca człowieka z oznaczonymi jamami (I–IV) i zastawkami (A–D). Która sekwencja POPRAWNIE opisuje przepływ krwi odtlenowanej od żyły głównej do tętnicy płucnej?',
    options: [
      { id: 'A', text: 'Żyły główne (górna i dolna) → prawy przedsionek (I) → zastawka trójdzielna (A) → prawa komora (III) → zastawka pnia płucnego (C) → pień płucny → tętnice płucne', is_correct: true },
      { id: 'B', text: 'Żyły główne → lewy przedsionek (II) → zastawka mitralna (B) → lewa komora (IV) → zastawka aorty (D) → aorta → tętnice płucne', is_correct: false },
      { id: 'C', text: 'Żyły główne → prawa komora (III) → zastawka trójdzielna (A) → prawy przedsionek (I) → zastawka pnia płucnego (C) → tętnice płucne; przepływ w sercu następuje od komór do przedsionków', is_correct: false },
      { id: 'D', text: 'Żyły główne → lewy przedsionek → zastawka trójdzielna → prawa komora → aorta → tętnice płucne; obie zastawki przedsionkowo-komorowe mają po dwie płatki', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ANATOMIA SERCA i DROGA KRWI ODTLENOWANEJ (krążenie płucne, małe): Żyły główne (VCS + VCI) + żyła wieńcowa → PRAWY PRZEDSIONEK → ZASTAWKA TRÓJDZIELNA (3 płatki, valva tricuspidalis) → PRAWA KOMORA → ZASTAWKA PNIA PŁUCNEGO (półksiężycowata, 3 płatki) → PIEŃ PŁUCNY (truncus pulmonalis) → tętnice płucne prawa i lewa → płuca. KREW UTLENOWANA (krążenie systemowe, duże): żyły płucne (4 szt.) → LEWY PRZEDSIONEK → ZASTAWKA MITRALNA/DWUDZIELNA (2 płatki, valva bicuspidalis/mitralis) → LEWA KOMORA → ZASTAWKA AORTY (półksiężycowata, 3 płatki) → AORTA → ciało. WAŻNE: tętnice PŁUCNE niosą krew OD tlenowaną; żyły PŁUCNE niosą krew UTlenowaną — odwrotnie niż reguła "tętnica = utlenowana". Ścianka lewej komory jest ~3× grubsza niż prawej (większa praca pokonania oporu systemowego).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.serce, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cyklu pracy serca (cyklu sercowego):',
    options: [
      { id: 'A', text: 'Cykl sercowy (przy tętnie 75/min, czas trwania ~0,8 s) składa się z: skurczu przedsionków (0,1 s) → skurczu komór (0,3 s — systola) → rozkurczu ogólnego (0,4 s — diastola); w fazie rozkurczu komory wypełniają się krwią biernie i aktywnie (skurcz przedsionków na końcu).', is_correct: true },
      { id: 'B', text: 'Podczas skurczu komór (systoly) otwierają się zastawki przedsionkowo-komorowe (trójdzielna i mitralna), aby umożliwić przepływ krwi do aorty i pnia płucnego; zastawki półksiężycowate (aorty i pnia płucnego) pozostają zamknięte przez cały czas skurczu komór.', is_correct: false },
      { id: 'C', text: 'Objętość wyrzutowa serca (stroke volume, SV) to ilość krwi wyrzucanej przez jedną komorę w jednym skurczu; przy spoczynku wynosi ~70 ml; pojemność minutowa serca (cardiac output, CO = HR × SV) przy spoczynku wynosi ok. 5 l/min, a podczas maksymalnego wysiłku może wzrosnąć do 20–25 l/min.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: CYKL SERCOWY (Wiggers diagram): 1. SKURCZ PRZEDSIONKÓW (0,1 s): dopełnienie komór (~20–30% końcowej objętości rozkurczowej); 2. SKURCZ IZOWOLUMETRYCZNY (0,05 s): ciśnienie w komorach rośnie, wszystkie zastawki zamknięte; 3. WYRZUT (0,25 s): zastawki półksiężycowate otwarte, krew do aorty/pnia płucnego; 4. ROZKURCZ IZOWOLUMETRYCZNY (0,05 s): ciśnienie spada, wszystkie zamknięte; 5. NAPEŁNIANIE BIERNE (0,4 s): zastawki AV otwarte. B — Fałsz: podczas SYSTOLY (skurczu komór): zastawki AV (trójdzielna, mitralna) są ZAMKNIĘTE (ciśnienie w komorach > ciśnienie w przedsionkach); zastawki półksiężycowate (aorty, pnia płucnego) są OTWARTE (ciśnienie w komorach > ciśnienie w aorcie/pniu); odwrotnie niż podano. C — Prawda: CO = HR × SV; spoczynek: 75 bpm × 70 ml = 5 250 ml ≈ 5 l/min; wysiłek max: HR do 200 bpm, SV do 130 ml → CO do 26 l/min; prawo Franka-Starlinga: większe napełnienie → silniejszy skurcz → większy SV.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.serce, question_type: 'single',
    question_text: 'Układ bodźcoprzewodzący serca zapewnia automatyzm i koordynację skurczów. Która odpowiedź POPRAWNIE opisuje kolejność przewodzenia impulsu elektrycznego?',
    options: [
      { id: 'A', text: 'Węzeł zatokowo-przedsionkowy (SA, rozrusznik serca, 70–80 imp/min) → mięśniówka przedsionków → węzeł przedsionkowo-komorowy (AV, opóźnienie ~0,1 s) → pęczek Hisa → odnogi pęczka (prawa i lewa) → włókna Purkiniego → mięśniówka komór', is_correct: true },
      { id: 'B', text: 'Węzeł AV (rozrusznik główny, 100 imp/min) → węzeł SA → pęczek Hisa → mięśniówka przedsionków → włókna Purkiniego → mięśniówka komór; impuls biegnie od komór ku przedsionkom', is_correct: false },
      { id: 'C', text: 'Włókna Purkiniego → pęczek Hisa → węzeł AV → węzeł SA → mięśniówka przedsionków → mięśniówka komór; automatyzm serca zależy wyłącznie od unerwienia autonomicznego (bez własnego układu bodźcoprzewodzącego)', is_correct: false },
      { id: 'D', text: 'Węzeł SA → mięśniówka komór → węzeł AV → pęczek Hisa → mięśniówka przedsionków; komory kurczą się przed przedsionkami; węzeł SA jest zlokalizowany w lewym przedsionku', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'UKŁAD BODŹCOPRZEWODZĄCY SERCA: 1. WĘZEŁ SA (sino-atrial node, Keith i Flack 1907): zlokalizowany w prawym przedsionku, przy ujściu żyły głównej górnej; ROZRUSZNIK GŁÓWNY (pace-maker): samoistna depolaryzacja 70–80×/min; 2. MIĘŚNIÓWKA PRZEDSIONKÓW: skurcz obu przedsionków; 3. WĘZEŁ AV (atrio-ventricular node, Aschoff i Tawara 1906): granica przedsionkowo-komorowa; OPÓŹNIENIE ~0,08–0,12 s (umożliwia pełne napełnienie komór zanim się skurczą); własny rytm: 40–60 imp/min (zastępczy gdy SA zawiedzie); 4. PĘCZEK HISA (His bundle): jedyne połączenie elektryczne między przedsionkami a komorami (przegroda izoluje je elektrycznie); 5. ODNOGI: prawa → prawa komora; lewa → lewa komora; 6. WŁÓKNA PURKINIEGO: szybkie przewodzenie (4 m/s!) do wierzchołka komór → skurcz od dołu ku górze (wyrzut ku zastawkom). EKG: P (skurcz przedsionków), QRS (skurcz komór), T (repolaryzacja komór).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.serce, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują ciśnienie tętnicze i jego regulację? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Ciśnienie tętnicze mierzone metodą Korotkowa (sfigmomanometr): wartości prawidłowe u dorosłego: ciśnienie skurczowe (systoliczne) 90–119 mmHg, rozkurczowe (diastoliczne) 60–79 mmHg; nadciśnienie 1. stopnia wg ESH/ESC 2018: ≥140/90 mmHg', is_correct: true },
      { id: 'B', text: 'Ciśnienie tętnicze (BP) = pojemność minutowa serca (CO) × całkowity opór obwodowy (TPR); wzrost TPR przy stałym CO → wzrost BP; wazokonstrikcja (skurcz tętniczek) zwiększa TPR; wazodylatacja (rozkurcz) zmniejsza TPR', is_correct: true },
      { id: 'C', text: 'Prawo Laplace\'a dla naczyń: napięcie ściany (T) = ciśnienie (P) × promień (r) / grubość ściany (h); aorta ma większy promień niż tętniczki, ale grubszą ścianę → napięcie ściany aorty jest zbliżone do napięcia ściany włośniczki; włośniczki mają niskie ciśnienie i mały promień → niskie napięcie ściany mimo cienkiej ścianki', is_correct: true },
      { id: 'D', text: 'Ciśnienie skurczowe jest zawsze niższe niż rozkurczowe; faza skurczu serca (systola) powoduje spadek ciśnienia w tętnicach; faza rozkurczu (diastola) powoduje wzrost ciśnienia; "ciśnienie 120/80" oznacza: 120 mmHg rozkurczowe i 80 mmHg skurczowe', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) Klasyfikacja BP (ESH/ESC 2018): optymalne: <120/<80; normalne: 120–129/80–84; wysokie normalne: 130–139/85–89; nadciśnienie I°: 140–159/90–99; II°: 160–179/100–109; III°: ≥180/≥110; izolowane nadciśnienie skurczowe: ≥140/<90. (B) BP = CO × TPR (Ohm\'s law for circulation); CO = HR × SV; TPR zależy głównie od tętniczek (arterioles) — główny "kran" regulacji; wazokonstrykcja: noradrenalina (α₁-adrenoceptor), angiotensyna II, endotelina; wazodylatacja: NO, prostacyklina, bradykinina, histamina, tlenek węgla (CO). (C) Prawo Laplace\'a: T = P × r / (2h) dla sfery lub T = P × r / h dla cylindra; aorta: P = 100 mmHg, r = 1,25 cm, h = 2 mm → T duże; włośniczka: P = 25 mmHg, r = 4 μm, h = 1 μm → T = 25 × 4/1 = 100 (niskie mimo cienkiej ściany!); gdyby tętniczka miała r jak aorta przy tej samej grubości → pękłaby; ale mała r chroni. (D) fałsz: skurczowe (systoliczne) > rozkurczowe (diastoliczne); "120/80" = 120 mmHg systoliczne / 80 mmHg diastoliczne; systola → pompowanie → wzrost ciśnienia; diastola → rozluźnienie → ciśnienie spada (do wartości rozkurczowej dzięki sprężystości aorty — efekt Windkessel).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.serce, question_type: 'single',
    question_text: 'Elektrokardiogram (EKG) odzwierciedla aktywność elektryczną serca. Który opis POPRAWNIE wyjaśnia znaczenie poszczególnych załamków i odcinków EKG?',
    options: [
      { id: 'A', text: 'Załamek P: depolaryzacja przedsionków (skurcz przedsionków); odcinek PQ: czas przewodzenia przez węzeł AV i pęczek Hisa; zespół QRS: depolaryzacja komór (skurcz komór); odcinek ST: faza plateau (plateau phase) potencjału czynnościowego komór — uniesienie/obniżenie ST wskazuje na niedokrwienie; załamek T: repolaryzacja komór', is_correct: true },
      { id: 'B', text: 'Załamek P: repolaryzacja komór; zespół QRS: skurcz przedsionków; załamek T: depolaryzacja przedsionków; repolaryzacja przedsionków jest widoczna jako duży ujemny załamek między QRS a T; EKG mierzy ciśnienie tętnicze, nie aktywność elektryczną', is_correct: false },
      { id: 'C', text: 'Zespół QRS trwa normalnie 1,5–2,0 s; wydłużony QRS oznacza tachykardię; brak załamka P oznacza normalny rytm zatokowy; uniesienie ST jest zawsze fizjologiczne i wskazuje na prawidłową pracę serca', is_correct: false },
      { id: 'D', text: 'EKG jest wykonywane wyłącznie na sali operacyjnej; mierzy przepływ krwi przez naczynia wieńcowe metodą optyczną; załamek P odpowiada otwarciu zastawki aorty; zespół QRS — zamknięciu zastawki mitralnej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'EKG — interpretacja: ZAŁAMEK P (0,08–0,1 s): depolaryzacja PRZEDSIONKÓW; jeśli brak P → migotanie przedsionków (AF); jeśli P bez QRS → blok AV; ODCINEK PQ (0,12–0,20 s): przewodzenie przez węzeł AV + pęczek Hisa; wydłużony > 0,2 s → blok AV I° (np. z werapamilu, digoksyny); ZESPÓŁ QRS (0,06–0,1 s): depolaryzacja KOMÓR; poszerzony > 0,12 s → blok odnogi pęczka Hisa; ODCINEK ST: między końcem QRS a T; izoelektryczny normalnie; uniesienie ST (STEMI) → ostre niedokrwienie/zawał; obniżenie ST → niedokrwienie podnasierdziowe; ZAŁAMEK T: repolaryzacja KOMÓR; odpowiada zamknięciu kanałów K⁺ (faza 3 AP); ujemny T → niedokrwienie, przerost; UWAGA: repolaryzacja przedsionków ukryta w QRS (nałożenie); częstość rytmu z EKG: 300 / (liczba dużych kratek między QRS).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.serce, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących unaczynienia serca i chorób układu krążenia:',
    options: [
      { id: 'A', text: 'Serce jest unaczynione przez tętnice wieńcowe: prawą (RCA) i lewą (LCA, dzieląca się na gałąź okalającą i przednią zstępującą, LAD = "widow maker"); tętnice wieńcowe odchodzą od aorty tuż nad zastawką aortalną; serce jest perfundowane głównie w FAZIE ROZKURCZU (gdy zastawka aorty jest zamknięta i ciśnienie w aorcie utrzymuje przepływ)', is_correct: true },
      { id: 'B', text: 'Miażdżyca (atherosclerosis) jest chorobą wyłącznie żył; polega na odkładaniu się blaszek miażdżycowych (złogów białkowych bez tłuszczu) w żyłach kończyn dolnych; nie dotyczy tętnic wieńcowych; LDL ("złego" cholesterolu) nie ma związku z miażdżycą', is_correct: false },
      { id: 'C', text: 'Zawał mięśnia sercowego (MI, STEMI) jest spowodowany nagłym zamknięciem tętnicy wieńcowej (najczęściej przez pęknięcie blaszki miażdżycowej z zakrzepem); mięsień sercowy jest wysoce aerobowy i pozbawiony rezerw glikogenu → bez tlenu ulega martwicy w ciągu 20–40 min (tzw. "golden hour")', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: UNACZYNIENIE SERCA: LCA: pień lewej tętnicy wieńcowej → LAD (left anterior descending, "widow maker"): przysłanianie → zawał przedniej ściany i przegrody; LCX (left circumflex): tylna ściana lewej komory; RCA: prawa komora, tylna ściana, węzeł SA i AV (dlatego zamknięcie RCA → brady/blok AV); perfuzja wieńcowa w DIASTOLE: w systole mięsień serca ściska naczynia wieńcowe (szczególnie wewnątrzmięśniowe) → przepływ spada; PARADOKS: podczas wysiłku: tachykardia skraca diastolę, ale wazodylatacja adenozyną i NO kompensuje → wzrost przepływu ×4–5. B — Fałsz: miażdżyca = choroba TĘTNIC (nie żył); blaszka miażdżycowa = rdzeń lipidowy (cholesteryl esters, LDL oxydized) + foam cells (makrofagi wypełnione lipidami) + cap fibrous; w żyłach: żylaki (varicose veins) — inna choroba; LDL > 130 mg/dl → ryzyko; HDL chroniące; statyny (inhibitory HMG-CoA reduktazy) obniżają LDL. C — Prawda: CASCADE ZAWAŁU: pęknięcie niestabilnej blaszki → agregacja płytek → zakrzep (thrombus) → okluzja → niedokrwienie → martwica; mięsień sercowy: wysoka gęstość mitochondriów (~35% objętości kardiomiocytu), prawie wyłącznie metabolizm tlenowy; kwasy tłuszczowe = 60–70% energii; glukoza 30%; bez tlenu → ATP spada w 10 min → martwica w 20–40 min; "door to balloon time" < 90 min → ratuje miokardium; troponina T/I → marker biochemiczny zawału (pojawia się po 3–6 h).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.serce, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują wpływ układu autonomicznego na pracę serca? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Układ współczulny (sympatyczny): pobudza serce przez włókna do węzła SA, AV i mięśniówki komór; neuroprzekaźnik: noradrenalina; receptory: β₁-adrenergiczne → zwiększa HR (chronotropia+), siłę skurczu (inotropia+), szybkość przewodzenia (dromotropia+); działa podczas wysiłku, stresu (fight-or-flight)', is_correct: true },
      { id: 'B', text: 'Układ przywspółczulny (parasympatyczny): nerw błędny (n. vagus, CN X) → węzeł SA i AV; neuroprzekaźnik: acetylocholina; receptory: M₂ (muskarynowe) → otwiera kanały K⁺ (GIRK) → hiperpolaryzacja → zwalnia rytm SA (bradykardia) i przewodzenie AV; dominuje w spoczynku (rytm spoczynkowy ~70/min < własny rytm SA ~100/min)', is_correct: true },
      { id: 'C', text: 'Prawo Franka-Starlinga: im większe rozciągnięcie mięśnia sercowego (większy powrót żylny, preload), tym większa siła skurczu i objętość wyrzutowa; mechanizm: rozciągnięcie sarkomeru → optymalne nakładanie aktyny i miozyny + wzrost wrażliwości troponiny C na Ca²⁺ → większa siła bez wzrostu HR', is_correct: true },
      { id: 'D', text: 'Atropina (antagonista receptorów muskarynowych) zwalnia akcję serca przez blokowanie receptorów β₁ w węźle SA; adrenalina działa na receptory M₂ i powoduje bradykardię; propranolol (β-bloker) zwiększa HR przez stymulację β₁', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) SYMPATYCZNA kontrola serca: neurony preganglionarne (C8–T5) → zwoje przykręgosłupowe (gwiezdny) → neurony postganglionarne → NA → β₁ (Gs → cAMP → PKA → fosforylacja kanałów Ca²⁺ L-type, RyR → ↑Ca²⁺ → ↑HR, ↑kontraktylność); adrenalin z rdzenia nadnerczy działa tak samo; metoprolol, bisoprolol (selektywne β₁-blokery) = leki anty-HR. (B) PARASYMPATYCZNA kontrola: n. błędny (X) → zwoje śródścienne → ACh → M₂ (Gi → ↓cAMP + ↑IK,ACh/GIRK) → hiperpolaryzacja → wolniejsza depolaryzacja spontaniczna węzła SA → bradykardia; digoksyna (glikozyd naparstnicy) naśladuje efekt wagalny (↑napięcia nerwu błędnego); atropina blokuje M₂ → tachykardia (używane przy bradykardii, reanimacji). (C) Frank-Starling (1914, 1918): preload = EDV (end-diastolic volume); sarkomery optymalne: 2,0–2,4 μm; titin (sprężyna) → siła restorująca; klinicznie: wzrost powrotu żylnego (Trendelenburg, płyny dożylne) → ↑SV; w niewydolności serca prawo jest zaburzone (niska odpowiedź na preload). (D) fałsz: atropina = antagonista muskarynowy → BLOKUJE M₂ → znosi hamowanie błędne → TACHYKARDIA (używana przy bradykardii); adrenalin → β₁+β₂+α₁ → tachykardia, wzrost siły; propranolol = β-bloker (nieselektywny) → BRADYKARDIA, ↓CO.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── NACZYNIA KRWIONOŚNE I KRĄŻENIE (3) ────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.naczynia, question_type: 'single',
    question_text: 'Tabela przedstawia parametry różnych typów naczyń krwionośnych. Które naczynie ma NAJNIŻSZE ciśnienie i NAJWIĘKSZĄ łączną powierzchnię przekroju poprzecznego — i dlaczego te dwie cechy idą w parze?',
    options: [
      { id: 'A', text: 'Włośniczki (kapilary): ciśnienie ~10–25 mmHg (po stronie tętniczej 35, żylnej 15 mmHg), łączna powierzchnia przekroju ~2 500–5 000 cm²; mała prędkość przepływu (0,03–0,07 cm/s) = czas na wymianę gazów, substancji odżywczych i produktów przemiany; prawo ciągłości (Q = v × A = const.): duże A → mała v', is_correct: true },
      { id: 'B', text: 'Aorta: ciśnienie ~0 mmHg, powierzchnia przekroju 5 000 cm²; największe ciśnienie i największa powierzchnia przekroju — prędkość przepływu w aorcie jest najniższa ze wszystkich naczyń (~0,01 cm/s) dzięki dużej średnicy', is_correct: false },
      { id: 'C', text: 'Żyły główne: ciśnienie ~150 mmHg, najmniejsza łączna powierzchnia przekroju; krew w żyłach głównych jest najszybsza ze wszystkich naczyń; ciśnienie w żyłach jest zawsze wyższe niż w tętnicach', is_correct: false },
      { id: 'D', text: 'Tętniczki (arteriole): ciśnienie ~0 mmHg, łączna powierzchnia 100 000 cm²; tętniczki są największym rezerwuarem krwi w organizmie; ich śródbłonek produkuje insulinę regulującą ciśnienie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PARAMETRY HEMODYNAMICZNE (prawo ciągłości przepływu): Q (przepływ, l/min) = v (prędkość, cm/s) × A (powierzchnia przekroju, cm²) = STAŁE w danym segmencie; PORÓWNANIE NACZYŃ (od aorty do żył głównych): AORTA: v ~40 cm/s, A ~5 cm², P ~100 mmHg; TĘTNICE: v ~20–30 cm/s; TĘTNICZKI: v ~0,5–1 cm/s, A ~400 cm², P ~60→35 mmHg; WŁOŚNICZKI: v ~0,03–0,07 cm/s, A ~2500–5000 cm², P ~35→15 mmHg; ŻYŁKI: v ~0,1 cm/s; ŻYŁY: v ~5–20 cm/s; ŻYŁY GŁÓWNE: v ~15–20 cm/s, A ~3–4 cm²; DLACZEGO WŁOŚNICZKI: mają ~10 miliardów kapilar → olbrzymia łączna A → mała v → długi czas kontaktu (~1 s) → wymiana gazów, glukozy, aminokwasów, odpadów. REZERWUAR KRWI: żyły (pojemnościowe naczynia) zawierają ~64% całkowitej objętości krwi; tętniczki = naczynia oporowe (główna regulacja TPR).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.naczynia, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy naczyń krwionośnych:',
    options: [
      { id: 'A', text: 'Ściana tętnicy zbudowana jest z trzech warstw: tunica intima (śródbłonek + błona podstawna + tkanka łączna podśródbłonkowa), tunica media (mięśniówka gładka + włókna sprężyste — u tętnic sprężystych: aorta, u tętnic mięśniowych: obwodowe), tunica adventitia (tkanka łączna włóknista, vasa vasorum dla dużych naczyń).', is_correct: true },
      { id: 'B', text: 'Włośniczki mają taką samą budowę jak tętnice — trzy warstwy (intima, media, adventitia) z grubą mięśniówką gładką i warstwą sprężystą; wymiana substancji przez ścianę włośniczki jest niemożliwa; błona półprzepuszczalna włośniczek zatrzymuje wszystkie cząsteczki.', is_correct: false },
      { id: 'C', text: 'Żyły mają zastawki (valvulae venosarum) zapobiegające cofaniu krwi w naczyniach kończyn dolnych; pompowanie żylne wspomagają skurcze mięśni szkieletowych (pompa mięśniowa) i oddychanie (pompa oddechowa — ujemne ciśnienie w klatce piersiowej zasysa krew ku sercu).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: ŚCIANA NACZYNIA: tunica INTIMA: endotelium (pojedyncza warstwa komórek śródbłonka) → bariera, synteza NO (eNOS), prostacykliny (PGI₂), endoteliny; subintima: tk. łączna luźna; IEL (internal elastic lamina — u tętnic); tunica MEDIA: mięśniówka gładka (SMC); tętnice sprężyste (elastyczne): aorta, pień płucny → dużo elastyny → efekt Windkessel (sprężynuje podczas systoly, pcha krew podczas diastoly); tętnice mięśniowe (dystrybucyjne): SMC reguluje TPR; tunica ADVENTITIA: tkanka łączna luźna; vasa vasorum (naczynia naczyń) u naczyń > 1–2 mm; nerwowe zakończenia autonomiczne. B — Fałsz: włośniczki = tylko TUNICA INTIMA (endotelium + błona podstawna), bez media i adventitia; ściana: 0,2–0,5 μm grubości; pory (fenestrations, clefts) umożliwiają wymianę; typy włośniczek: (1) ciągłe (continuous capillaries): mózg (bariera krew-mózg), mięśnie; (2) okienkowane (fenestrated): jelita, nerki, gruczoły wydzielania wewnętrznego; (3) zatokowe (sinusoids): wątroba, śledziona, szpik — szczeliny między komórkami. C — Prawda: zastawki żylne: półksiężycowate; brak w żyłach < 1 mm, w żyłach trzewnych i kończyn górnych (mniejsza grawitacja); POMPA MIĘŚNIOWA: skurcz mięśni łydki → ściskanie żył → krew w górę (zastawki blokują powrót); POMPA ODDECHOWA: wdech → ↓ciśnienia w klatce → ↑gradientu → krew z jamy brzusznej do klatki; omdlenia ortostatyczne: przy wstawaniu pompy niewystarczające → ↓BP → ↓perfuzji mózgu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.naczynia, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń dotyczących wymiany przez ścianę włośniczek (prawa Starlinga) są POPRAWNE? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Filtracja z włośniczki do tkanki jest napędzana przez: ciśnienie hydrostatyczne włośniczki (Pc, 35 mmHg po stronie tętniczej → 15 mmHg po żylnej) minus ciśnienie hydrostatyczne tkanki (Pt, ~0 mmHg); reabsorpcja do włośniczki jest napędzana przez: ciśnienie onkotyczne osocza (πc, ~28 mmHg, głównie albuminy) minus ciśnienie onkotyczne tkanki (πt, ~5 mmHg)', is_correct: true },
      { id: 'B', text: 'Na końcu tętniczym włośniczki: Pc (35) − Pt (0) − πc (28) + πt (5) = +12 mmHg → netto filtracja (płyn idzie z włośniczki do tkanki); na końcu żylnym: Pc (15) − 0 − πc (28) + πt (5) = −8 mmHg → netto reabsorpcja (płyn wraca do włośniczki)', is_correct: true },
      { id: 'C', text: 'Obrzęk (edema) może być spowodowany: (1) wzrostem Pc (niewydolność serca prawokomorowa → wzrost ciśnienia żylnego); (2) spadkiem πc (hipoalbuminemia — np. marskość wątroby, zespół nerczycowy → mniej albumin w osoczu); (3) niedrożnością naczyń limfatycznych (filimphadema); (4) wzrostem przepuszczalności włośniczek (stany zapalne)', is_correct: true },
      { id: 'D', text: 'Układ limfatyczny usuwa nadmiar płynu śródmiąższowego; jednak limfa wraca do żył obwodowych (tętniczych) przez pień piersiowy, a nie do żylnej części układu krążenia; żyły szyjne nie mają połączenia z układem chłonnym', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A+B) PRAWA STARLINGA (Starling\'s law of capillary exchange, 1896): Q_net = Kf × [(Pc - Pt) - σ(πc - πt)]; Kf = współczynnik filtracji (Lp × A); σ = współczynnik odbicia (reflection coefficient, 0=swobodny przepływ, 1=brak przejścia); wartości typowe: Pc tętnicze: 35 mmHg; Pc żylne: 15 mmHg; πc (onkotyczne osocza): 25–28 mmHg; πt (tkanki): 3–8 mmHg; Pt (hydrostatyczne tkanki): 0 do −3 mmHg; koniec tętniczy: +12 mmHg → filtracja; koniec żylny: −8 mmHg → reabsorpcja; 85–90% przefiltrowanego płynu wraca do kapilary, ~10–15% → limfa. (C) PRZYCZYNY OBRZĘKU: (1) ↑Pc: NS prawa (↑CVP → ↑Pc żylne), zakrzepica żył głębokich; (2) ↓πc: hipoalbuminemia → ↓π osmotyczne → obrzęki "głodowe" (kwashiorkor), marskość wątroby (↓synteza albumin), nerczyca (utrata albumin z moczem); (3) limfatyczny: rak piersi + usunięcie węzłów chłonnych → lymphedema; filaria (Wuchereria bancrofti) → elephantiasis; (4) zapalny: histamina, bradykinina → ↑przepuszczalności → ↑πt. (D) fałsz: limfa WRACA DO ŻYŁ: pień piersiowy (ductus thoracicus) → kąt żylny lewy (połączenie żyły szyjnej wewnętrznej lewej i podobojczykowej lewej); prawy przewód limfatyczny → kąt żylny prawy.',
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
