// Seed: mock_questions — Fizjologia człowieka — układ krążenia i oddechowy (18 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  serce:   'd42a351b-b29f-4d32-95ac-d51058726080',
  naczyn:  'e55fdbd3-f99d-4832-8514-5c088fe8bb0e',
  krew:    '71faabd8-5948-411f-95a1-1917b2fea837',
  limfa:   '3c0d3a02-b541-4606-8275-35bb047dbb5b',
  mech:    'b0ec2c4f-0199-4d4d-892a-be6b23195762',
  wymiana: '1e82cd06-799e-4e80-a26e-dc8eeda58196',
  transp:  'd367b143-3d4c-4c34-80f1-f023ce5d6a68',
  regul:   '83072c48-eb1e-460e-bcf1-4f7ae46a7936',
  homeo:   'f79c7a2c-c03e-4ed5-89ca-b01dd0047399',
  hemo:    '708467bb-f048-4c9a-9369-0190e91c0b0c',
}

const questions = [
  // ─── Budowa i praca serca ───
  {
    subtopic: 'Fizjologia człowieka — Budowa i praca serca',
    subtopic_id: S.serce,
    question_type: 'single',
    question_text: 'Cykl serca (cykl sercowy) trwa ok. 0,8 s przy częstości 75 ud/min. Wskaż prawidłową kolejność faz cyklu sercowego.',
    options: [
      { id: 'A', text: 'Skurcz przedsionków → skurcz komór (systole komór) → rozkurcz całego serca (diastole) → wypełnianie komór krwią', is_correct: true },
      { id: 'B', text: 'Rozkurcz komór → skurcz komór → rozkurcz przedsionków → skurcz przedsionków', is_correct: false },
      { id: 'C', text: 'Skurcz komór → skurcz przedsionków → rozkurcz komór → rozkurcz przedsionków (wszystkie fazy niezależne)', is_correct: false },
      { id: 'D', text: 'Skurcz przedsionków i komór jednocześnie → wspólny rozkurcz → ponowny skurcz', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cykl sercowy (0,8 s przy HR 75): (1) Skurcz przedsionków (0,1 s): dodatkowe 20–30% wypełnienia komór po biernym napływie; zastawki przedsionkowo-komorowe (mitralna, trójdzielna) otwarte. (2) Systole komór (0,3 s): izowolumetryczny skurcz → wzrost ciśnienia → otwarcie zastawek półksiężycowatych (aortalna, płucna) → wyrzut krwi (SV ~70 ml). Zastawki AV zamknięte. (3) Diastole (rozkurcz, 0,4 s): komory rozkurczają się → zastawki półksiężycowate zamknięte (zapobiegają cofaniu) → bierne wypełnianie komór z przedsionków. Ton serca S1 = zamknięcie zastawek AV (MiTralnej i Tricuspidalnej); S2 = zamknięcie zastawek półksiężycowatych (Aortycznej i Pulmonalnej).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Budowa i praca serca',
    subtopic_id: S.serce,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących układu przewodzącego serca:\nA. Węzeł zatokowo-przedsionkowy (SA node) generuje impuls elektryczny z częstością ~70 ud/min i jest naturalnym rozrusznikiem serca (pacemaker); po przecięciu nerwów autonomicznych serce bije z tą częstością.\nB. Węzeł przedsionkowo-komorowy (AV node) opóźnia przewodzenie impulsu o ~0,1 s — umożliwia to skurcz przedsionków przed skurczem komór i dodatkowe wypełnienie komór.\nC. Włókna Purkinjego przewodzą impuls szybko (4 m/s) od węzła AV do mięśniówki komór — zapewniają jednoczesny skurcz całej masy komory.',
    options: [
      { id: 'A', text: 'P, P, P', is_correct: true },
      { id: 'B', text: 'P, F, P', is_correct: false },
      { id: 'C', text: 'P, P, F', is_correct: false },
      { id: 'D', text: 'F, P, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: SA node (w prawym przedsionku): automatyzm ~70 ud/min (bez unerwienia). Układ nerwowy modyfikuje: n. błędny (X, przywspółczulny) → bradykardia (wolniej); nerwy współczulne → tachykardia (szybciej). B — PRAWDA: AV node (granica przedsionków i komór): przewodnictwo wolne (~0,05 m/s) → opóźnienie 0,1–0,2 s → komory kurczą się po przedsionkach → efektywne pompowanie. C — PRAWDA: pęczek Hisa (His bundle) → odnogi prawej i lewej → włókna Purkinjego; przewodzenie szybkie (4 m/s) → impuls dociera jednocześnie do całej mięśniówki komór → skoordynowany skurcz od koniuszka do podstawy → efektywny wyrzut krwi.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Naczynia krwionośne i krążenie ───
  {
    subtopic: 'Fizjologia człowieka — Naczynia krwionośne i krążenie',
    subtopic_id: S.naczyn,
    question_type: 'single',
    question_text: 'Tętnice, żyły i naczynia włosowate (kapilary) różnią się budową ściany i funkcją. Które zestawienie POPRAWNIE opisuje te różnice?',
    options: [
      { id: 'A', text: 'Tętnice: gruba ściana z dużą ilością mięśni gładkich i elastyny (wytrzymują wysokie ciśnienie); kapilary: jedna warstwa śródbłonka (endotelium) — wymiana substancji; żyły: cienka ściana, zastawki żylne zapobiegające cofaniu krwi, niskie ciśnienie', is_correct: true },
      { id: 'B', text: 'Żyły mają grubszą ścianę niż tętnice — przenoszą krew pod wyższym ciśnieniem; tętnice mają zastawki', is_correct: false },
      { id: 'C', text: 'Kapilary mają grubą ścianę mięśniową do regulacji przepływu; tętnice i żyły mają cienką ścianę bez mięśni gładkich', is_correct: false },
      { id: 'D', text: 'Tętnice i żyły są identycznej budowy — różni je wyłącznie kierunek przepływu krwi (od serca/do serca)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Budowa naczyń: Tętnice (arterie): 3 warstwy — intima (śródbłonek + błona wewnętrzna), media (mięśnie gładkie + elastyna, gruba) → elastyczność buforuje pulsacyjny wyrzut → „windkessel effect"; adventitia (tkanka łączna). Ciśnienie: 120/80 mmHg. Tętniczki (arteriole): główna regulacja oporu naczyniowego (VMR). Kapilary (naczynia włosowate): tylko intima (1 warstwa endotelium + błona podstawna) → wymiana O₂, CO₂, glukozy, wody (sił Starlinga) między krwią a tkankami; szczelne (BBB, krew-mózg), okienkowe (nerki, jelita), zatokowe (wątroba, śledziona). Żyły (veny): cieńsza media, mniej mięśni; ciśnienie niskie; zastawki żylne (co 3–5 cm w kończynach) + pompa mięśniowa + ssanie klatki piersiowej → powrót żylny.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Naczynia krwionośne i krążenie',
    subtopic_id: S.naczyn,
    question_type: 'single',
    question_text: 'Krążenie płucne (małe) i systemowe (duże) różnią się ciśnieniem i składem krwi. Wskaż prawidłowy opis krążenia płucnego.',
    options: [
      { id: 'A', text: 'Krew odtlenowana (żylna) z prawej komory → tętnica płucna → płuca (utlenowanie) → żyły płucne → lewy przedsionek; ciśnienie niskie (~25/8 mmHg)', is_correct: true },
      { id: 'B', text: 'Krew utlenowana z lewej komory → tętnica płucna → płuca → prawy przedsionek; ciśnienie wysokie (~120/80 mmHg)', is_correct: false },
      { id: 'C', text: 'Krążenie płucne dostarcza krew do mięśnia sercowego — tętnice wieńcowe to część małego krążenia', is_correct: false },
      { id: 'D', text: 'W krążeniu płucnym tętnice przenoszą krew utlenowaną, a żyły — odtlenowaną, analogicznie do krążenia systemowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Krążenie płucne (małe, Harveya): Prawa komora → tętnica płucna (JEDYNA tętnica przenosząca krew OD-tlenowaną!) → płuca (wymiana gazów w pęcherzykach: O₂ wchodzi, CO₂ wychodzi) → żyły płucne (JEDYNE żyły z krwią UTlenowaną!) → lewy przedsionek. Ciśnienie niskie: skurczowe ~25 mmHg (vs 120 mmHg systemowe) — dzięki małemu oporowi naczyń płucnych. Krążenie systemowe (duże): lewa komora → aorta → tętnice systemowe → kapilary tkankowe (wymiana) → żyły systemowe → prawa komora. Ciśnienie: 120/80 mmHg. Uwaga na wyjątki od zasady „tętnica = utlenowana, żyła = odtlenowana".',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Krew — skład i funkcje ───
  {
    subtopic: 'Fizjologia człowieka — Krew — skład i funkcje',
    subtopic_id: S.krew,
    question_type: 'single',
    question_text: 'Erytrocyty (czerwone krwinki) człowieka są wysoce wyspecjalizowane. Które cechy budowy erytrocytów BEZPOŚREDNIO zwiększają ich zdolność do transportu tlenu?',
    options: [
      { id: 'A', text: 'Brak jądra i organelli (więcej miejsca na hemoglobinę), kształt dwuwklęsłego dysku (duże pole powierzchni do objętości → szybka dyfuzja O₂), plastyczność (deformują się w wąskich kapilarach)', is_correct: true },
      { id: 'B', text: 'Obecność jądra komórkowego (produkcja RNA dla ciągłej syntezy hemoglobiny) i mitochondriów (energia do aktywnego transportu O₂)', is_correct: false },
      { id: 'C', text: 'Kulisty kształt erytrocytów minimalizuje opór podczas przepływu przez kapilary — to główna cecha zwiększająca transport O₂', is_correct: false },
      { id: 'D', text: 'Erytrocyty nie transportują tlenu — O₂ jest rozpuszczony w osoczu; hemoglobina służy wyłącznie do transportu CO₂', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Erytrocyty (RBC): dojrzałe = anuklearne (bez jądra, bez ER, rybosomów, mitochondriów) → ~33% objętości to hemoglobina (~280 mln cząsteczek/RBC). Kształt bikoncawny (dwuwklęsły dysk, d ≈ 8 µm, gr. 2 µm): stosunek powierzchni do objętości o 20–30% wyższy niż sfera → szybsza dyfuzja O₂. Elastyczność: cytoszkielet (spektryna + aktyna + ankryna) → deformują się przechodząc przez kapilary (d < 8 µm). Czas życia: ~120 dni → niszczone w śledzionie i wątrobie (bilirubina z hemu). Hemoglobina: 4 podjednostki (2α + 2β, dorosły HbA); hem (pierścień porfirynowy + Fe²⁺) wiąże O₂ odwracalnie; kooperatywność (krzywa sigmoidalna). Retikulocyty: niedojrzałe RBC z resztkami RNA, ~1% we krwi obwodowej.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Krew — skład i funkcje',
    subtopic_id: S.krew,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących grup krwi i transfuzji:\nA. Układ AB0: osoby z grupą AB (biorcy uniwersalni) mają na erytrocytach antygeny A i B oraz w osoczu przeciwciała anty-A i anty-B.\nB. Niezgodność Rh (Rh− matka, Rh+ płód) może w drugiej i kolejnych ciążach prowadzić do choroby hemolitycznej noworodka — przeciwciała anty-D matki (IgG) przechodzą przez łożysko i niszczą erytrocyty płodu.\nC. Osoby z grupą 0 Rh− są dawcami uniwersalnymi — ich krew można przetaczać każdemu biorcy bez ryzyka reakcji hemolitycznej.',
    options: [
      { id: 'A', text: 'F, P, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, P, F', is_correct: false },
      { id: 'D', text: 'P, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — FAŁSZ: grupa AB: antygeny A i B na erytrocytach + BRAK przeciwciał w osoczu (bo miałyby atakować własne RBC). Biorca uniwersalny = AB (toleruje A, B, AB, 0). Dawca: 0 (brak antygenów A/B na RBC). Tabela: A → anty-B; B → anty-A; AB → brak; 0 → anty-A i anty-B. B — PRAWDA: choroba hemolityczna (erythroblastosis fetalis): 1. ciąża Rh+: krew płodowa przy porodzie → uczulenie matki → anty-D IgM (nie przechodzą przez łożysko). 2. ciąża Rh+: anty-D IgG → przechodzą przez łożysko → hemoliza RBC płodu → niedokrwistość, żółtaczka, obrzęki. Profilaktyka: immunoglobulina anty-D (Rh-immunoglobulina) po 28. tyg. i po porodzie. C — PRAWDA (z zastrzeżeniem): 0 Rh− = dawca uniwersalny dla pełnej krwi (brak antygenów A, B, Rh); w praktyce zawsze dąży się do zgodności grupy ze względu na inne antygeny (Kell, Duffy), ale 0 Rh− jest bezpieczne w nagłości.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Układ limfatyczny i odporność ───
  {
    subtopic: 'Fizjologia człowieka — Układ limfatyczny i odporność',
    subtopic_id: S.limfa,
    question_type: 'single',
    question_text: 'Odpowiedź immunologiczna dzieli się na nieswoistą (wrodzoną) i swoistą (nabytą). Które stwierdzenie POPRAWNIE opisuje kluczową różnicę między nimi?',
    options: [
      { id: 'A', text: 'Odporność nieswoista (wrodzona): natychmiastowa, niespecyficzna — rozpoznaje wzorce (PAMP przez TLR); odporność swoista (nabyta): wolniejsza, specyficzna — limfocyty B i T rozpoznają konkretny antygen i tworzą pamięć immunologiczną', is_correct: true },
      { id: 'B', text: 'Odporność nieswoista = odporność bierna (nabyta przez matki mleko); swoista = odporność czynna (szczepienia)', is_correct: false },
      { id: 'C', text: 'Odporność nieswoista zależy od limfocytów T; swoista — od neutrofilów i makrofagów; obie rozwijają się w ciągu kilku godzin', is_correct: false },
      { id: 'D', text: 'Odporność swoista nie tworzy pamięci immunologicznej — każdorazowe zakażenie wywołuje tę samą odpowiedź od początku', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Odporność nieswoista (wrodzona, innate): szybka (minuty-godziny); brak specyficzności antygenowej; komórki: neutrofile, monocyty/makrofagi, NK, komórki tuczne, bazofile, eozonofile; bariery: skóra, śluz, lizozym; receptory wzorców (PRR): TLR (toll-like receptors) → PAMP (wzorce molekularne patogenów: LPS, flagelina, dsRNA). Odporność swoista (nabyta, adaptive): wolna (dni-tygodnie przy 1. kontakcie); specyficzna — receptory TCR (T) i BCR (B) → rozpoznają konkretny epitop antygenu; klony: selekcja klonalna → ekspansja; pamięć immunologiczna: komórki pamięci B i T → szybsza i silniejsza odpowiedź przy ponownym kontakcie (podstawa szczepień). Humoralna: limfocyty B → plazmocyty → przeciwciała (IgG, IgM, IgA, IgE, IgD). Komórkowa: limfocyty T cytotoksyczne (CD8⁺) → zabijają zakażone komórki.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mechanika oddychania ───
  {
    subtopic: 'Fizjologia człowieka — Mechanika oddychania',
    subtopic_id: S.mech,
    question_type: 'single',
    question_text: 'Wdech i wydech są napędzane zmianami ciśnienia w klatce piersiowej. Który mechanizm opisuje SPOKOJNY WDECH?',
    options: [
      { id: 'A', text: 'Skurcz przepony (spłaszcza się) i zewnętrznych mięśni międzyżebrowych → klatka piersiowa poszerza się → ciśnienie w płucach spada poniżej atmosferycznego → powietrze wpływa biernie', is_correct: true },
      { id: 'B', text: 'Rozkurcz przepony → klatka piersiowa kurczy się → wzrost ciśnienia → powietrze wpływa do płuc', is_correct: false },
      { id: 'C', text: 'Skurcz mięśni brzucha i wewnętrznych mięśni międzyżebrowych → ciśnienie wzrasta → powietrze wchodzi przez podciśnienie', is_correct: false },
      { id: 'D', text: 'Wdech jest bierny — płuca rozszerzają się samoistnie dzięki sprężystości; mięśnie oddechowe działają wyłącznie podczas wydechu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mechanika oddychania (Boyle\'s law: P×V = const): Spokojny wdech (aktywny): (1) Przepona (n. phrenicus, C3-C5): skurcz → kopuła opuszcza się ~1,5 cm → wzrost objętości klatki piersiowej. (2) Zewnętrzne mięśnie międzyżebrowe (nn. międzyżebrowe): unoszą żebra (ruch "pompy") → objętość klatki pier. wzrasta. (3) Efekt: ciśnienie śródpłucne spada ~2 mmHg poniżej atmosferycznego → powietrze napływa zgodnie z gradientem. Spokojny wydech (bierny): mięśnie oddechowe rozkurczają się → sprężystość płuc i klatki pier. zmniejsza objętość → ciśnienie wzrasta → powietrze uchodzi. Wydech forsowny: mięśnie brzucha + wewnętrzne mm. międzyżebrowe. Opłucna: blaszka ścienna (klatka) + trzewna (płuco) + jama opłucnej (ciśnienie ujemne ok. –5 mmHg) utrzymuje płuca przylegające do ściany klatki.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Mechanika oddychania',
    subtopic_id: S.mech,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących objętości płuc:\nA. Objętość oddechowa (TV, tidal volume) to objętość powietrza wdychanego w spokojnym oddechu — wynosi ok. 500 ml u dorosłego.\nB. Pojemność życiowa (VC) to maksymalna objętość powietrza, którą można wdychać po maksymalnym wydechu — wynosi ok. 4–5 l i jest sumą: TV + IRV + ERV.\nC. Powietrze zalegające (RV, residual volume) nie może być usunięte z płuc nawet po maksymalnym wydechu — wynosi ok. 1,2 l i zapobiega zapadaniu się pęcherzyków.',
    options: [
      { id: 'A', text: 'P, P, P', is_correct: true },
      { id: 'B', text: 'P, F, P', is_correct: false },
      { id: 'C', text: 'F, P, P', is_correct: false },
      { id: 'D', text: 'P, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: TV (tidal volume) ≈ 500 ml; minutowa wentylacja = TV × częstość (12–16/min) ≈ 6–8 L/min. B — PRAWDA: VC = IRV (inspiratory reserve volume, ~3000 ml) + TV (500 ml) + ERV (expiratory reserve volume, ~1200 ml) ≈ 4700 ml. VC mierzy spirometrem; FVC (forced vital capacity) = VC przy maksymalnym wysiłku. FEV₁ (w 1 sek) / FVC > 0,7 = zdrowe; < 0,7 = obturacja (astma, POChP). C — PRAWDA: RV ≈ 1200 ml; nie można go usunąć spirometrem — powietrze zostaje w pęcherzykach i drogach oddechowych; zapobiega atelektazie (zapadnięciu pęcherzyków); surfaktant (lecytyna, DPPC) produkowany przez pneumocyty II → obniża napięcie powierzchniowe → zapobiega zapadaniu przy wydechu. TLC (total lung capacity) = VC + RV ≈ 6 L.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Wymiana gazowa ───
  {
    subtopic: 'Fizjologia człowieka — Wymiana gazowa',
    subtopic_id: S.wymiana,
    question_type: 'single',
    question_text: 'Wymiana gazowa w płucach (hematoza) zachodzi między powietrzem pęcherzykowym a krwią kapilar płucnych. Na jakiej zasadzie dyfundują O₂ i CO₂?',
    options: [
      { id: 'A', text: 'O₂ i CO₂ dyfundują zgodnie z gradientem ciśnień parcjalnych przez barierę krew-powietrze (pneumocyty I + błona podstawna + śródbłonek kapilary, łącznie ~0,5 µm); O₂ z pęcherzyka (pO₂ ~104 mmHg) do krwi (pO₂ ~40 mmHg); CO₂ z krwi (pCO₂ ~45 mmHg) do pęcherzyka (pCO₂ ~40 mmHg)', is_correct: true },
      { id: 'B', text: 'Wymiana gazowa jest aktywna — pneumocyty I pompują O₂ do krwi za pomocą ATP; CO₂ dyfunduje biernie', is_correct: false },
      { id: 'C', text: 'O₂ dyfunduje z krwi do pęcherzyków (krew ma wyższe pO₂ niż powietrze pęcherzykowe), CO₂ odwrotnie', is_correct: false },
      { id: 'D', text: 'Bariery krew-powietrze nie istnieją — pęcherzyki bezpośrednio stykają się z erytrocytami przez otwarte kapilary', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hematoza (wymiana płucna): prawo Ficka (przepływ ∝ pole × ΔP / grubość): (1) Pole powierzchni pęcherzyków: ~70–140 m² (jak kort tenisowy!) — 300 mln pęcherzyków. (2) Bariera krew-powietrze: pneumocyt I (płaska komórka) + zlewające się błony podstawne + śródbłonek kapilary ≈ 0,2–0,5 µm. (3) Gradient pO₂: pęcherzyk ~104 mmHg → krew żylna ~40 mmHg → dyfuzja O₂ do erytrocytów → nasycenie Hb w ~0,25 s (krew płynie ~0,75 s przez kapilarę). (4) CO₂: krew żylna pCO₂ ~45 mmHg → pęcherzyk ~40 mmHg → dyfuzja CO₂ na zewnątrz (CO₂ dyfunduje 20× szybciej niż O₂ przez ciecz). Choroba: edema płucna, zwłóknienie → pogrubienie bariery → hipoksemia.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Transport gazów we krwi ───
  {
    subtopic: 'Fizjologia człowieka — Transport gazów we krwi',
    subtopic_id: S.transp,
    question_type: 'single',
    question_text: 'Dwutlenek węgla jest transportowany z tkanek do płuc na trzy sposoby. Który z nich jest DOMINUJĄCY (70%) i jak przebiega?',
    options: [
      { id: 'A', text: 'Transport jako jony wodorowęglanowe (HCO₃⁻): CO₂ + H₂O → H₂CO₃ (anhydraza węglanowa, wewnątrz RBC) → H⁺ + HCO₃⁻; HCO₃⁻ wychodzi z erytrocytu przez wymiennik Cl⁻/HCO₃⁻ (przesunięcie chlorkowe) do osocza', is_correct: true },
      { id: 'B', text: 'Transport jako CO₂ fizycznie rozpuszczone w osoczu (70%) — CO₂ dobrze rozpuszcza się w wodzie', is_correct: false },
      { id: 'C', text: 'Transport jako karbaminohemoglobina (CO₂ wiąże się z resztami aminowymi Hb) stanowi 70%; wodorowęglany — tylko 5%', is_correct: false },
      { id: 'D', text: 'CO₂ transportowany jest głównie przez białka osocza (albuminy) jako karbaminoalbumin — hemoglobina transportuje wyłącznie O₂', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Transport CO₂ we krwi: (1) Jako HCO₃⁻ (~70%): CO₂ dyfunduje do RBC → anhydraza węglanowa (carbonic anhydrase, CA) katalizuje CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻. HCO₃⁻ wymieniany z Cl⁻ na zewnątrz RBC (efekt Hamburgera = przesunięcie chlorkowe). H⁺ buforowany przez Hb (deoksyHb lepsza bufor = efekt Haldane\'a). (2) Jako karbaminohemoglobina (~23%): CO₂ + –NH₂ (końce aminowe łańcuchów Hb) → –NH–COOH (karbaminiat); deoksyHb wiąże CO₂ lepiej niż oksyHb. (3) Fizycznie rozpuszczone w osoczu (~7%): CO₂ dobrze rozpuszczalny (20× lepiej niż O₂). W płucach: odwrócenie wszystkich reakcji → CO₂ uwolniony do pęcherzyków.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Transport gazów we krwi',
    subtopic_id: S.transp,
    question_type: 'single',
    question_text: 'Krzywa dysocjacji oksyhemoglobiny (krzywa HbO₂) ma kształt sigmoidalny. Co oznacza przesunięcie krzywej w PRAWO (efekt Bohra)?',
    options: [
      { id: 'A', text: 'Przesunięcie w prawo: obniżone pH (wzrost H⁺/CO₂), wyższa temperatura lub wzrost 2,3-BPG → Hb ma mniejsze powinowactwo do O₂ → oddaje więcej O₂ tkankom aktywnym metabolicznie', is_correct: true },
      { id: 'B', text: 'Przesunięcie w prawo oznacza wyższe powinowactwo Hb do O₂ — Hb chętniej wiąże O₂ w płucach i gorzej oddaje tkankom', is_correct: false },
      { id: 'C', text: 'Przesunięcie w prawo zachodzi przy zasadowicy (wysokim pH) i niskim CO₂ — Hb uwalnia więcej O₂ w warunkach alkalicznych', is_correct: false },
      { id: 'D', text: 'Efekt Bohra dotyczy wyłącznie CO₂: wzrost CO₂ przesuwa krzywą w lewo i zwiększa powinowactwo Hb do tlenu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Krzywa HbO₂: sigmoidalna (kooperatywność — wiązanie pierwszego O₂ ułatwia kolejne); P₅₀ (pO₂ przy 50% nasyceniu Hb) ≈ 26 mmHg. Efekt Bohra (Christiansen, Douglas, Haldane, 1914): wzrost [H⁺] (↓pH) lub wzrost pCO₂ → przesuwa krzywą W PRAWO → spada powinowactwo Hb do O₂ → łatwiejsze oddawanie O₂ tkankom. Fizjologicznie: aktywne mięśnie produkują CO₂ i kwas mlekowy → kwaśne środowisko → Hb uwalnia O₂ tam, gdzie jest potrzebny. Czynniki przesuwające w prawo (↓ powinowactwo): ↑T, ↓pH, ↑CO₂, ↑2,3-BPG (bifosfoglicerynian = allostery). W lewo (↑ powinowactwo): HbF (płodowa Hb), karboksyhemoglobina (CO — blokuje Hb i przesuwa w lewo!), alkaloza.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Regulacja oddychania ───
  {
    subtopic: 'Fizjologia człowieka — Regulacja oddychania',
    subtopic_id: S.regul,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących regulacji oddychania:\nA. Głównym bodźcem chemicznym do wentylacji jest stężenie CO₂ (pCO₂) i pH krwi/płynu mózgowo-rdzeniowego — wzrost pCO₂ o 1 mmHg podwaja wentylację minutową.\nB. Ośrodek oddechowy w rdzeniu przedłużonym generuje rytmiczny wzorzec oddechu — neurony preBotzingera (preBötC) są jego kluczowym elementem dla wdechu.\nC. Hipoksja (niskie pO₂ < 60 mmHg) jest silniejszym bodźcem do wentylacji niż hiperkapnia (wysokie pCO₂) — obwodowe chemoreceptory (ciałka szyjne) reagują głównie na pO₂.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: CO₂/pH = główny chemiczny regulator wentylacji; centralne chemoreceptory (rdzeń przedłużony) reagują na pH PMR (CO₂ dyfunduje przez BBB → H₂CO₃ → H⁺ → pH ↓ → wzrost wentylacji). Siła: +1 mmHg pCO₂ → +2–3 L/min wentylacji. B — PRAWDA: preBötzinger complex (preBötC, Smith 1991): oscylatory rytmiczne w rdzeniu przedłużonym → generują rytm wdechu; kompleks Botzingera → wydech; more slowly adapting receptors (SAR) w płucach → odruch Heringa-Breuera (hamuje wdech po nadmiernym rozciągnięciu). C — FAŁSZ: CO₂ jest SILNIEJSZYM bodźcem niż hipoksja: norma pO₂ ~95 mmHg; wentylacja wzrasta wyraźnie tylko gdy pO₂ < 60 mmHg (plateau krzywej HbO₂ → szybki spadek nasycenia); hipoksja = bodziec obwodowy (ciałka szyjne/aortalne), silniejszy przy dużej wysokości, ale mniej wrażliwy niż CO₂ w warunkach normobarii.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Homeostaza układu krążenia ───
  {
    subtopic: 'Fizjologia człowieka — Homeostaza układu krążenia',
    subtopic_id: S.homeo,
    question_type: 'single',
    question_text: 'Ciśnienie tętnicze krwi jest regulowane przez wiele mechanizmów. Który z nich działa NAJSZYBCIEJ (w ciągu sekund) przy nagłym spadku ciśnienia?',
    options: [
      { id: 'A', text: 'Baroreceptory w zatoce szyjnej i łuku aorty wykrywają spadek ciśnienia → odruchowo: wzrost HR (chronotropizm+) i skurcz naczyń (zwiększenie TPR) przez układ współczulny → szybkie przywrócenie ciśnienia', is_correct: true },
      { id: 'B', text: 'Układ renina-angiotensyna-aldosteron (RAA): nerki wydzielają reninę → angiotensyna II → skurcz naczyń — działa w ciągu sekund', is_correct: false },
      { id: 'C', text: 'Erytropoetyna (EPO): nerki wydzielają EPO → synteza RBC → wzrost ciśnienia — działa w ciągu sekund', is_correct: false },
      { id: 'D', text: 'Spływ płynów tkankowych do naczyń (refill osmotyczny) jest najszybszym mechanizmem — zachodzi w ułamkach sekundy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Regulacja ciśnienia — szybkość: (1) Natychmiastowa (sekundy): odruch z baroreceptorów tętniczych (sinus caroticus, łuk aorty): baroreceptory = mechanoreceptory; spadek ciśnienia → mniej impulsów do ośrodka krążenia (NTS) → wzrost tonu współczulnego + zahamowanie przywspółczulnego → tachykardia (HR↑) + skurcz naczyń (TPR↑) → ciśnienie wzrasta. (2) Minuty: unieruchomienie przesunięcia płynów (Starlinga), adrenalina/noradrenalina z nadnerczy. (3) Godziny–dni: RAA (renina-angiotensyna-aldosteron) → retencja Na⁺ i wody → wzrost objętości krwi → ciśnienie. (4) Dni–tygodnie: nerkowa regulacja długoterminowa (diureza ciśnieniowa). Hipotensjne niebezpieczeństwo: omdlenie ortostatyczne = chwilowe nieskompensowanie przez baroreceptory.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Hemostaza i krzepnięcie krwi ───
  {
    subtopic: 'Fizjologia człowieka — Hemostaza i krzepnięcie krwi',
    subtopic_id: S.hemo,
    question_type: 'single',
    question_text: 'Hemostaza (zatrzymanie krwawienia) zachodzi w kilku etapach. Wskaż prawidłową kolejność etapów hemostazy po uszkodzeniu naczynia.',
    options: [
      { id: 'A', text: 'Skurcz naczynia → adhezja i agregacja płytek (czop pierwotny) → kaskada krzepnięcia → tworzenie skrzepu fibrynowego (czop wtórny) → fibrynoliza', is_correct: true },
      { id: 'B', text: 'Kaskada krzepnięcia → skurcz naczynia → adhezja płytek → fibrynoliza → tworzenie płytek', is_correct: false },
      { id: 'C', text: 'Fibrynoliza → skurcz naczynia → agregacja płytek → kaskada krzepnięcia (kolejność odwrotna do klasycznej)', is_correct: false },
      { id: 'D', text: 'Adhezja płytek jest ostatnim etapem hemostazy — skrzep fibrynowy tworzy się przed przylgnięciem płytek', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hemostaza: (1) Skurcz naczynia: endotelina, tromboxan A₂, serotonin z płytek → zmniejszenie przepływu. (2) Hemostaza pierwotna — czop płytkowy: uszkodzenie śródbłonka → odsłonięcie kolagenu i czynnika von Willebranda (vWF) → adhezja płytek (GP Ib-vWF) → aktywacja płytek → uwalnianie ADP, TXA₂, serotoniny → agregacja (GP IIb/IIIa — fibrynogen) → luźny czop pierwotny. (3) Hemostaza wtórna — kaskada krzepnięcia: droga zewnętrzna (TF → czynnik VIIa) i wewnętrzna (XII → XI → IX → VIII) → punkt zbieżny: X → Xa → trombina (IIa) → fibrynogen → fibryna → skrzep; czynnik XIII stabilizuje kowalencyjnie. (4) Fibrynoliza: plazminogen → plazmina (tPA) → degradacja fibryny = rekanalizacja naczynia. Antykoagulanty naturalne: antytrombina III, białko C i S.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Hemostaza i krzepnięcie krwi',
    subtopic_id: S.hemo,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zaburzeń krzepnięcia:\nA. Hemofilia A (najczęstsza, XR) wynika z niedoboru czynnika VIII krzepnięcia — chorują prawie wyłącznie mężczyźni (XY), kobiety są nosicielkami.\nB. Choroba von Willebranda (vWD) jest najczęstszą wrodzoną skazą krwotoczną — wynika z niedoboru lub dysfunkcji czynnika vWF, który stabilizuje czynnik VIII i umożliwia adhezję płytek.\nC. Warfaryna (acenokumarol) hamuje krzepnięcie przez blokowanie agregacji płytek krwi — jest stosowana w profilaktyce zakrzepicy żylnej i zatorowości płucnej.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: hemofilia A: gen F8 na chromosomie X → dziedziczenie XR; niedobór czynnika VIII → zaburzenie drogi wewnętrznej → przedłużony aPTT; objawy: krwawienia do stawów (hemartrozy), mięśni, po urazach. Hemofilia B: niedobór IX (też XR). B — PRAWDA: choroba von Willebranda (vWD): najczęstsza wrodzona skaza (1% populacji); vWF: glikoproteina z endotelium i płytek → adhezja płytek do kolagenu (przez GP Ib) + carrier dla VIII (chroni przed proteolizą). Objawy: wybroczyny, krwawienia ze śluzówek. C — FAŁSZ: warfaryna / acenokumarol = antagoniści witaminy K → hamuje γ-karboksylację czynników II, VII, IX, X (i białka C, S) → zaburzenie drogi krzepnięcia (NIE agregacji płytek!). Leki hamujące płytki: kwas acetylosalicylowy (ASA, hamuje COX → ↓TXA₂), klopidogrel (blok ADP-receptora P2Y12).',
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
  console.log(`Seeding ${questions.length} mock questions for Fizjologia czlowieka — krazenie i oddechowy...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
