// Seed batch 4/7 — Fizjologia człowieka: układ krążenia i oddechowy
// Mechanika oddychania (5) + Wymiana gazowa (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175'

const S = {
  mechanika: 'b0ec2c4f-0199-4d4d-892a-be6b23195762',
  wymiana:   '1e82cd06-799e-4e80-a26e-dc8eeda58196',
}

const questions = [

  // ── MECHANIKA ODDYCHANIA (5) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.mechanika, question_type: 'single',
    question_text: 'Surfaktant płucny jest kluczowy dla prawidłowej czynności płuc. Które stwierdzenie POPRAWNIE opisuje jego rolę i skład?',
    options: [
      { id: 'A', text: 'Surfaktant (surfactant pulmonary): mieszanina fosfolipidów (głównie DPPC, dipalmitoylophosphatidylcholine ~40%) + białka SP-A, SP-B, SP-C, SP-D; syntetyzowany przez pneumocyty II rzędu; zmniejsza napięcie powierzchniowe w pęcherzykach płucnych → zapobiega ich zapadaniu się przy wydechu; zapobiegając zlepieniu małych pęcherzyków z dużymi (prawo Laplace\'a)', is_correct: true },
      { id: 'B', text: 'Surfaktant jest produkowany przez komórki śródbłonka kapilar płucnych; nie zawiera fosfolipidów; zwiększa napięcie powierzchniowe w pęcherzykach → sprzyja ich otwieraniu podczas wdechu; niedobór surfaktantu powoduje nadmierną rozciągliwość płuc (rozedmę)', is_correct: false },
      { id: 'C', text: 'Surfaktant jest produkowany od 16. tygodnia życia płodowego; niedobór surfaktantu u wcześniaków nie powoduje żadnych objawów; RDS (respiratory distress syndrome of newborn) jest spowodowany nadmiarem surfaktantu; leczenie RDS polega na podaniu kortykosteroidów po urodzeniu', is_correct: false },
      { id: 'D', text: 'Prawo Laplace\'a dla pęcherzyka: P = 4T/r; mniejszy pęcherzyk (mniejszy r) ma NIŻSZE ciśnienie wewnętrzne niż duży → powietrze przepływa z dużego do małego; surfaktant obniża T bardziej w małych pęcherzykach (bo cząsteczki są bardziej zagęszczone) → wyrównuje ciśnienia → zapobiega zapadaniu się', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'SURFAKTANT PŁUCNY: SKŁAD: DPPC (dipalmitoylophosphatidylcholine): 40%; inne PC, PG, PE, SM; białka: SP-A (collectin, odporność wrodzona, regulacja surfaktantu), SP-B i SP-C (amfifilowe, wbudowują DPPC w monowarstwie), SP-D (collectin, odporność wrodzona); PNEUMOCYTY II: kuboidalne komórki narożne pęcherzyków (~5% komórek pęcherzykowych, ale produkują surfaktant); ciałka blaszkowate (lamellar bodies) → wydzielanie przez egzocytozę; ROLA: ↓napięcia powierzchniowego (T): od ~70 mN/m (woda) do ~2–5 mN/m (przy małej powierzchni pęcherzyka); PRAWO LAPLACE\'a (dla pęcherzyka płucnego z 2 warstwami): P = 4T/r; bez surfaktantu: mały pęcherzyk (r) → wyższe P → wypychanie powietrza do dużego → zapaść! (atelektaza); z surfaktantem: przy małym r → ↓T (cząsteczki bardziej zagęszczone) → P ≈ const. dla różnych r → stabilizacja; RDS (Respiratory Distress Syndrome of Newborn, IRDS, hyaline membrane disease): wcześniaki < 32 tyg.: dojrzewanie surfaktantu od 24–28 tyg. (pełna dojrzałość ~ 34–35 tyg.); leczenie: (1) steroidy MATCE przed porodem (betametazon → dojrzewanie płuc płodu); (2) egzogeniczny surfaktant dotchawiczo noworodkowi (beractant, poractant alfa); L/S ratio (lecytyna/sfingomielina) w płynie owodniowym ≥ 2 = płuca dojrzałe.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mechanika, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących podatności płuc i oporu dróg oddechowych:',
    options: [
      { id: 'A', text: 'Podatność płuc (compliance, C = ΔV/ΔP): miara rozciągliwości płuc; prawidłowa ~200 ml/cmH₂O; w rozedmie (emphysema): ↑C (destrukcja elastyny → płuca zbyt rozciągliwe, ale utrata recoil → hiperinflacja + air trapping); w zwłóknieniu (fibrosis): ↓C (sztywne płuca, duży wysiłek wdechu, ↓TLC)', is_correct: true },
      { id: 'B', text: 'Opór dróg oddechowych (Raw, airway resistance): zależy głównie od drożności tętniczek płucnych; w astmie oskrzelowej dochodzi do skurczu tętniczek (nie oskrzeli), co zwiększa Raw; β₂-agoniści (salbutamol) leczą astmę przez rozszerzenie tętniczek, nie oskrzeli; kortykosteroidy wziewne zmniejszają Raw przez zwężenie kapilar', is_correct: false },
      { id: 'C', text: 'Ujemne ciśnienie śródopłucnowe (Pip < Patm) ma kluczowe znaczenie dla utrzymania płuc w stanie rozprężenia: pneumothorax (odma opłucnowa) przerywa ten gradient → płuca zapadają się (atelektaza); napięciowa odma (tension pneumothorax) → Pip może wzrosnąć powyżej Patm → ucisk na serce i przesunięcie śródpiersia → zagrożenie życia', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: COMPLIANCE (C): statyczna podatność: C = ΔV/ΔP; zależy od elastyny i kolagenu w tk. płucnej + surfaktant; krzywa P-V: w środkowym zakresie stroma (zwykłe oddychanie); wartości: zdrowy człowiek: ~200 ml/cmH₂O; ROZEDMA (emphysema): destrukcja przegród pęcherzykowych przez neutrofilową elastazę (alfa₁-antytrypsyna ↓ → elastaza ↑) → ↑C, ↓recoil → air trapping (RV ↑) → beczkowata klatka piersiowa; ZWŁÓKNIENIE (IPF, UIP): odkładanie kolagenu → ↓C → małe, twarde płuca → ↓TLC, ↓DLCO, ↓FVC; "velcro crackles". B — Fałsz: Raw zależy od drożności OSKRZELI i oskrzelików (nie tętniczek!); Hagen-Poiseuille: Raw = 8ηL/πr⁴ → mała zmiana r → ogromna zmiana Raw; w ASTMIE: (1) skurcz mięśniówki oskrzelowej (bronchospasm → R↑); (2) obrzęk błony śluzowej; (3) śluz (mucus plugging); β₂-agoniści (salbutamol, formoterol) → bronchodilatacja (rozkurcz mięśni gładkich oskrzelowych przez ↑cAMP); kortykosteroidy wziewne (ICS: budesonid, flutykazon) → ↓zapalenia → ↓obrzęku śluzówki → ↓mucus. C — Prawda: Pip (intrapleural pressure): ZAWSZE <Patm: spoczynek: −5 cmH₂O; wdech: −8 do −12 cmH₂O; wynikowi "pull" dwóch sił: płuca dążą do recoil (się kurczyć), klatka dąży do rozprężenia → skok ciśnienia ujemnego; odma napięciowa (tension pneumothorax): zawór jednokierunkowy → powietrze wchodzi do opłucnej przy każdym wdechu, nie wychodzi → Pip wzrasta → ucisk serca, wielkich naczyń → ↓CO → wstrząs; igłowa dekompresja (2. żebro, linii środkowoobojczykowej) → ratowanie życia.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mechanika, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują astmę oskrzelową i przewlekłą obturacyjną chorobę płuc (POChP)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Astma oskrzelowa: choroba zapalna dróg oddechowych z udziałem eozynofilów i Th2 (IL-4, IL-5, IL-13); nadreaktywność oskrzeli → skurcz w odpowiedzi na alergeny, wysiłek, zimne powietrze, infekcje; obturacja ODWRACALNA (po β₂-agoniście lub samoistnie); badanie: FEV₁/FVC < 0,70 + odwracalność po salbutamolu ≥ 12% i 200 ml', is_correct: true },
      { id: 'B', text: 'POChP (przewlekła obturacyjna choroba płuc): dominującą rolę odgrywa dym tytoniowy (>80% przypadków) → przewlekłe zapalenie neutrofilowe + makrofagi → destrukcja elastyny (rozedma) + metaplazja śluzówki (przewlekłe zapalenie oskrzeli); obturacja NIEODWRACALNA (lub częściowo odwracalna); po zaprzestaniu palenia choroba postępuje wolniej, ale nie cofa się', is_correct: true },
      { id: 'C', text: 'Spirometria w POChP: FEV₁/FVC < 0,70 (post-bronchodilatator); ciężkość: GOLD I (łagodna): FEV₁ ≥ 80% norm; GOLD II (umiarkowana): 50–79%; GOLD III (ciężka): 30–49%; GOLD IV (bardzo ciężka): < 30%; leczenie: LAMA + LABA (długodziałające leki rozkurczające) + ICS (w ciężkich); tlenoterapia domowa (LTOT) gdy PaO₂ < 55 mmHg lub SpO₂ < 88%', is_correct: true },
      { id: 'D', text: 'Zarówno astma jak i POChP charakteryzują się pełną odwracalnością obturacji po podaniu β₂-agonisty; w obu chorobach FEV₁/FVC powraca do normy po leczeniu; oba schorzenia dotyczą wyłącznie dzieci; palenie tytoniu chroni przed rozwojem obu chorób przez działanie antyoksydacyjne', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) ASTMA: prevalencja: ~300 mln chorych na świecie; patofizjologia: alergeny → IgE (atopowa) lub inne czynniki (nieatopowa) → mastocyty/eozynofile/Th2 → mediatory (histamina, leukotrieny, IL-5) → triad: skurcz, obrzęk, mucus; faza wczesna (<1h): bronchospasm; faza późna (4–12h): napływ eozynofilów → uszkodzenie nabłonka; ODWRACALNOŚĆ: kryterium → FEV₁ po salbutamolu wzrasta ≥ 12% i ≥ 200 ml; test metacholinowy (wyzwala skurcz → potwierdza nadreaktywność); leczenie: ICS (podstawa, budesonid) + SABA (reliever, salbutamol) + LABA (formoterol, salmeterol) + LAMA (tiotropium w ciężkiej) + biologiki (mepolizumab anty-IL5). (B) POChP: definicja: powolna, postępująca, trwała obturacja; bronchitis chronicus: kaszel + plwocina ≥ 3 mies./rok przez ≥ 2 lata; rozedma: destrukcja przegród pęcherzykowych → ↑RV + ↑TLC + ↓DLCO; "blue bloaters" (bronchitis dominuje) vs "pink puffers" (emphysema dominuje); po zaprzestaniu palenia: FEV₁ spada wolniej → ale zmiany nie cofają się. (C) GOLD (Global initiative for COPD): kryteria: post-bronchodilator FEV₁/FVC < 0,70; LAMA (tiotropium, umeclidinium, glycopyrronium): ↓duszność + ↓zaostrzenia; LABA (salmeterol, indacaterol, formoterol); LTOT: > 15 h/dobę → ↑przeżycia przy PaO₂ < 55 mmHg. (D) fałsz: POChP = nieodwracalna (definicja!); astma = odwracalna; POChP dotyczy głównie dorosłych >40 r.ż.; palenie = główna przyczyna POChP (nie ochrona!).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mechanika, question_type: 'single',
    question_text: 'Badacz mierzy ciśnienia podczas spokojnego oddychania u zdrowego dorosłego. Które zestawienie wartości POPRAWNIE opisuje ciśnienia w poszczególnych fazach cyklu oddechowego?',
    options: [
      { id: 'A', text: 'Spoczynek (między wdechem a wydechem): Palv = 0 cmH₂O (= Patm), Pip = −5 cmH₂O; szczyt wdechu: Palv = −1 cmH₂O (poniżej Patm → napływ powietrza), Pip = −8 cmH₂O; szczyt wydechu: Palv = +1 cmH₂O (powyżej Patm → wypływ powietrza), Pip = −4 cmH₂O', is_correct: true },
      { id: 'B', text: 'Podczas wdechu: Palv wzrasta do +20 cmH₂O (powyżej atmosferycznego) → powietrze wpływa do płuc zgodnie z gradientem; Pip wzrasta do +10 cmH₂O; podczas wydechu: Palv spada do −20 cmH₂O → zasysanie powietrza', is_correct: false },
      { id: 'C', text: 'Ciśnienie pęcherzykowe (Palv) jest zawsze równe ciśnieniu śródopłucnowemu (Pip); nie ma różnicy między Palv a Pip; oba ciśnienia są zawsze równe Patm = 760 mmHg = 1033 cmH₂O', is_correct: false },
      { id: 'D', text: 'Pip jest zawsze ujemne (poniżej atmosferycznego) wyłącznie przy maksymalnym forsowanym wydechu; przy spokojnym oddychaniu Pip oscyluje między +5 a +20 cmH₂O; Palv jest zawsze wyższe od Pip o dokładnie 100 cmH₂O', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'CIŚNIENIA PODCZAS ODDYCHANIA (wartości podane względem Patm = 0 cmH₂O): SPOCZYNEK (FRC): Palv = 0 (bez przepływu); Pip = −5 cmH₂O (podciśnienie utrzymuje płuca rozprężone); transpulmonarne (Ptp = Palv − Pip) = 0 − (−5) = +5 cmH₂O; WDECH (peak): Palv = −1 cmH₂O → gradient od zewnątrz (0) do pęcherzyków (−1) → napływ 500 ml w ~2 sekundy; Pip = −8 cmH₂O (przepona opuściła się); Ptp = −1 − (−8) = +7 cmH₂O (rozciągnie płuca); KONIEC WDECHU: Palv = 0 (przepływ ustaje, wyrównanie); Pip = −8 (plateau); WYDECH (szczyt): Palv = +1 cmH₂O → wypływ; Pip wraca do −4 do −5; FORSOWANY WYDECH: Palv > +80 cmH₂O; Pip może przekroczyć 0 (ucisk zewnętrzny na drogi oddechowe → dynamiczna kompresja → "flow limitation" w POChP = charakterystyczny klaps spirometrii); KLINICZNE: ciśnienie dodatnie (PEEP, positive end-expiratory pressure) w respiratorach → utrzymuje FRC → zapobiega zapaści pęcherzyków.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mechanika, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy układu oddechowego:',
    options: [
      { id: 'A', text: 'Tchawica (trachea) dzieli się na poziomie kąta mostka (kąt Ludwiga, Th4–Th5) na dwa główne oskrzela: prawe (szersze, bardziej pionowe → częstsza aspiracja ciał obcych do prawego płuca) i lewe (węższe, bardziej poziome); każde płuco dzieli się na płaty (prawe: 3, lewe: 2) i segmenty oskrzelowo-płucne', is_correct: true },
      { id: 'B', text: 'Nabłonek dróg oddechowych od nosa do oskrzelików końcowych to nabłonek jednorodny płaski bez mikrokosmków; nie ma rzęsek; śluz jest produkowany przez komórki kubkowe w samych pęcherzykach płucnych; "eskalator śluzowo-rzęskowy" (mucociliary escalator) jest mitem naukowym', is_correct: false },
      { id: 'C', text: 'Pęcherzyki płucne (alveoli): ~300–500 mln u dorosłego; łączna powierzchnia wymiany ~70–100 m²; wyścielone pneumocytami I rzędu (squamous, ~95% powierzchni — wymiana gazów) i II rzędu (kuboidalne, ~5% — surfaktant + progenitor przy uszkodzeniu); między pęcherzykami: pory Kohna (ułatwiają krążenie powietrza, kompensują częściową obturację)', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: DROGI ODDECHOWE: nozdrza → jama nosowa (nawilżanie, ogrzewanie, oczyszczanie) → gardło → krtań (nagłośnia, struny głosowe, chrząstka tarczowata, pierścieniowata) → tchawica (18–22 chrząstki C-kształtne, 10–12 cm) → bifurcatio (Th4–Th5, kąt Ludwiga = mostek + 2. żebro) → oskrzela główne → płatowe → segmentowe → subsegmentowe → oskrzeliki (brak chrząstek) → oskrzeliki końcowe (terminal bronchioles) → oskrzeliki oddechowe (respiratory bronchioles) → przewody pęcherzykowe → woreczki pęcherzykowe → pęcherzyki; PRAWE OSKRZELE: kąt < 25° od pionu → aspiracja; PODZIAŁ PŁUC: prawe: płat górny (3 segm.), środkowy (2), dolny (5) = 10 segm.; lewe: górny (4+1 języczek), dolny (4–5) = 8–10 segm. B — Fałsz: NABŁONEK DRÓG ODDECHOWYCH: pseudostratified ciliated columnar epithelium (nabłonek walcowaty rzęskowy wielorzędowy) z tchawicy do oskrzelików; KOMÓRKI: rzęskowe (z 200 rzęskami, bijące ku gardłu ~12 Hz → transport śluzu 5–20 mm/min); kubkowe (goblet cells): śluz; Clara (club cells): surfaktant oskrzelowy + enzymy; MUCOCILIARY ESCALATOR: 10–30 g śluzu/dobę → wychwyt drobnoustrojów i cząstek → gardziel → połknięcie; uszkodzenie: palenie → ↓rzęsek → kaszel jako kompensacja; w oskrzelikach oddechowych i pęcherzykach: nabłonek → PŁASKI (pneumocyty I); brak rzęsek. C — Prawda: PĘCHERZYKI: ciało Kohna (pores of Kohn): otwory 3–13 μm w przegrodach → wyrównanie ciśnień + oboczna wentylacja; pneumocyty I: typ I: bardzo płaskie (~0,1 μm), zlewają się z kapilarnym śródbłonkiem → cienka bariera O₂/CO₂ (0,2–0,5 μm); typ II: surfaktant + pęcherzy klamonocytic → po urazie różnicuje w typ I; makrofagi pęcherzykowe (AM): fagocytoza cząstek i drobnoustrojów; krążące od strony kapilarnej: śródbłonek (0,1 μm).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── WYMIANA GAZOWA (5) ────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.wymiana, question_type: 'single',
    question_text: 'Wymiana gazowa w płucach (hematoza) opiera się na dyfuzji. Które stwierdzenie POPRAWNIE opisuje siły napędowe i czynniki wpływające na dyfuzję O₂ i CO₂?',
    options: [
      { id: 'A', text: 'Dyfuzja gazów opisana prawem Ficka: J = D × A × (P₁ − P₂) / d; D zależy od rozpuszczalności gazu (s) i masy cząsteczkowej (M): D ∝ s/√M; CO₂: D ≈ 20× wyższe niż O₂ (wyższa rozpuszczalność) → CO₂ dyfunduje szybciej mimo mniejszego gradientu (45→40 mmHg) niż O₂ (100→40 mmHg = wyższy gradient)', is_correct: true },
      { id: 'B', text: 'O₂ dyfunduje szybciej niż CO₂ przez błonę pęcherzykowo-włośniczkową, bo O₂ jest lżejszy; gradient ciśnień parcjalnych jest dla obu gazów identyczny (60 mmHg); DLCO (pojemność dyfuzyjna CO) mierzy sprawność wymiany dla tlenu, nie tlenku węgla; w zwłóknieniu płuc DLCO wzrasta', is_correct: false },
      { id: 'C', text: 'Bariera pęcherzykowo-włośniczkowa składa się z 7 warstw o łącznej grubości 50 μm; czas przejścia erytrocytu przez kapilarę płucną wynosi 10 sekund; w spoczynku O₂ nasyca erytrocyt w ciągu 5 sekund; przy wysiłku czas jest wystarczający i wymiana jest taka sama jak w spoczynku', is_correct: false },
      { id: 'D', text: 'Prawidłowe prężności: pęcherzyki: pO₂ = 20 mmHg, pCO₂ = 80 mmHg; krew tętnicza: pO₂ = 20 mmHg, pCO₂ = 80 mmHg; krew żylna mieszana: pO₂ = 100 mmHg, pCO₂ = 40 mmHg; O₂ dyfunduje z krwi do pęcherzyków a CO₂ z pęcherzyków do krwi', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PRAWO FICKA I dla dyfuzji gazów: J = D × A × ΔP / d; J = strumień dyfuzji (ml/min); D = stała dyfuzji; A = powierzchnia wymiany (~70 m² w płucach); ΔP = gradient ciśnień parcjalnych; d = grubość bariery (~0,2–0,5 μm); D ∝ s/√M (Krogh): s = rozpuszczalność w tkance; M = masa cząsteczkowa; O₂: s=0,024 ml/ml·atm, M=32 → D_O₂; CO₂: s=0,57 ml/ml·atm (~24× wyższa!), M=44 → D_CO₂ ≈ 20× D_O₂; GRADIENTY: O₂: pęcherzyki 100 mmHg → krew żylna 40 mmHg → gradient 60 mmHg; CO₂: krew żylna 45 mmHg → pęcherzyki 40 mmHg → gradient tylko 5 mmHg; mimo MAŁEGO gradientu CO₂ dyfunduje TAK SAMO SPRAWNIE jak O₂ (bo D_CO₂ ≈ 20× D_O₂); POJEMNOŚĆ DYFUZYJNA DLCO: test z CO (tlenek węgla) → CO ma podobne własności do O₂, ale wiąże się z Hb 240× silniej → całe CO pochłonięte przez Hb → ciśnienie CO przy Hb ≈ 0 → cały ΔP = P_alveolar → mierzymy A/d; DLCO↓: zwłóknienie (↓A, ↑d), rozedma (↓A), anemia (↓Hb); DLCO↑: poliglobulia, lewy przeciek sercowy; BARIERA: surfaktant (ciekły film) + pneumocyt I (0,1 μm) + błona podstawna + śródbłonek (0,1 μm) = łącznie 0,2 μm; czas przejścia RBC przez kapilarę: ~0,75 s; nasycenie O₂: ~0,25 s → rezerwa 0,5 s na wysiłek.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wymiana, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących stosunku wentylacji do perfuzji (V/Q):',
    options: [
      { id: 'A', text: 'Idealny stosunek V/Q = 1 oznacza, że każda część płuca, która jest wentylowana, jest proporcjonalnie perfundowana; w praktyce V/Q nie jest jednorodne: w dolnych partiach płuc stojącego człowieka V/Q ≈ 0,6 (nadmiar perfuzji), w górnych ≈ 3 (nadmiar wentylacji); średnia V/Q całego płuca ≈ 0,8', is_correct: true },
      { id: 'B', text: 'V/Q = 0 (przestrzeń martwa) oznacza obszar dobrze wentylowany, ale bez perfuzji (np. zakrzep tętnicy płucnej — zator); V/Q = ∞ (shunt, przeciek) oznacza obszar perfundowany, ale niewentylowany (np. niedodma, wypełnienie płynem); oba zaburzenia prowadzą do hipoksemii, ale shunt nie odpowiada na tlenoterapię 100% O₂ tak jak V/Q mismatch', is_correct: true },
      { id: 'C', text: 'Hipoksyczna wazokonstrykcja płucna (HPV, Euler-Liljestrand reflex): niska prężność O₂ w pęcherzyku (hipoksja lokalna) → ROZKURCZ tętniczek płucnych → wzrost przepływu do źle wentylowanego obszaru → pogłębienie zaburzeń V/Q; HPV jest odpowiedzią ODWROTNĄ do tej w naczyniach systemowych', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: V/Q (ventilation-perfusion ratio): V̇A = 4,2 l/min (wentylacja pęcherzykowa); Q̇ = 5 l/min (CO); V/Q = 4,2/5 = ~0,84; GRAWITACYJNE NIERÓWNOMIERNOŚCI: apeks (góra): słaba perfuzja (grawitacja → mało krwi), dobra wentylacja → V/Q ≈ 3; baza (dół): duża perfuzja (zbiera krew grawitacyjnie), dobra wentylacja → V/Q ≈ 0,6; KLINICZNE: w POChP, zwłóknieniu, zatorowości płucnej V/Q rozkłada się bardzo nierównomiernie → hipoksemia; gradient A-a (alveolar-arterial O₂ gradient): norma < 15 mmHg; ↑ przy V/Q mismatch, shunt, ↓dyfuzji. B — Prawda: V/Q = 0 (SHUNT, intrapulmonary): perfuzja bez wentylacji (atelektaza, zapalenie płuc, ARDS, płyn w pęcherzykach); krew żylna → bez wymiany → krąży systemowo → hipoksemia OPORNA na O₂ (czyste shunty nie odpowiadają na O₂, bo "zdrowe" pęcherzyki już nasycone); V/Q = ∞ (DEAD SPACE): wentylacja bez perfuzji (zatorowość płucna, pneumothorax, mała CO); → ↑ETCO₂ (end-tidal CO₂) rośnie mniej niż PaCO₂ (space gap); LECZENIE: V/Q mismatch → O₂ tlenoterapia poprawia; shunt → leczenie przyczynowe, PEEP. C — Fałsz: HPV (hypoxic pulmonary vasoconstriction) = EULER-LILJESTRAND reflex (1946): lokalna hipoksja pęcherzykowa → SKURCZ tętniczek płucnych (nie rozkurcz!) → przekierowanie krwi od źle wentylowanych obszarów do lepiej wentylowanych → POPRAWA V/Q (adaptacja!); odwrotnie niż w naczyniach systemowych (tam hipoksja → wazodylatacja w celu dostarczenia O₂); niebezpieczeństwo HPV: globalna hipoksja (wysokość, POChP) → uogólniony skurcz → PAH (nadciśnienie płucne) → cor pulmonale (przerost prawej komory).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wymiana, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują wymianę gazową w tkankach (hematoza tkankowa)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'W tkankach aktywnych metabolicznie (np. mięsień szkieletowy podczas wysiłku): pO₂ tkanek spada do 20–30 mmHg, pCO₂ wzrasta do 50–60 mmHg; gradient pO₂ między kapilarą (95 mmHg) a tkanką (20 mmHg) = 75 mmHg → dyfuzja O₂ z krwi do tkanki; gradient pCO₂ (50→45 mmHg) → dyfuzja CO₂ z tkanki do krwi', is_correct: true },
      { id: 'B', text: 'Efekt Bohra w tkankach: wzrost pCO₂ + spadek pH w tkankach → przesuwa krzywą dysocjacji Hb W PRAWO → P₅₀ rośnie → Hb oddaje O₂ przy wyższym pO₂ → więcej O₂ dostarczanego do metabolicznie aktywnych tkanek; wzrost temperatury (wysiłek) + 2,3-BPG → wzmacniają efekt Bohra', is_correct: true },
      { id: 'C', text: 'Mioglobina (Mb): białko przechowujące O₂ w mięśniach; krzywa dysocjacji Mb jest hiperboliczna (nie sigmoidalna jak Hb — brak kooperatywności, monomer); Mb ma WYŻSZE powinowactwo do O₂ niż Hb → przy niskim pO₂ tkanek (<20 mmHg) Mb oddaje O₂ do mitochondriów, gdy Hb jest już prawie całkowicie oddensaturowana', is_correct: true },
      { id: 'D', text: 'Wymiana gazowa w tkankach odbywa się głównie przez aktywny transport; błony komórkowe mają specyficzne kanały białkowe (aquaporiny dla O₂) bez których dyfuzja O₂ jest niemożliwa; CO₂ nie jest wydalany przez płuca lecz wyłącznie przez nerki w postaci HCO₃⁻', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) WYMIANA TKANKOWA: prężności gazów: krew tętnicza: pO₂ = 95 mmHg, pCO₂ = 40 mmHg; SpO₂ = 97–98%; tkanki w spoczynku: pO₂ ≈ 40 mmHg, pCO₂ ≈ 45 mmHg; krew żylna mieszana (pulmonary artery): pO₂ = 40, pCO₂ = 45, SpO₂ = 75%; tkanki podczas wysiłku max: pO₂ może spaść do ~10 mmHg! → SpO₂ krwi żylnej do ~30%; mięsień wyciąga niemal 100% O₂. (B) EFEKT BOHRA: Hill 1910, Bohr 1904; mechanizm: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻; H⁺ wiąże His residues Hb (His β146, His α122) → stabilizuje T-form → ↓powinowactwa do O₂ → krzywa przesuwa się W PRAWO; P₅₀ (pO₂ przy 50% saturacji): spoczynek: ~26 mmHg; ↑przy: ↓pH (kwasica), ↑pCO₂, ↑T, ↑2,3-BPG; 2,3-BPG: wiąże się do deoksy-Hb (kieszeń między łańcuchami β) → stabilizuje T-form; ↑przy: hipoksji, anemia, wysokość, transfuzja starej krwi (↓2,3-BPG → lewa krzywa). (C) MIOGLOBINA: Mb vs Hb: Mb: monomer (1 hem), krzywa HIPERBOLICZNA (P₅₀ ≈ 2–3 mmHg), zawsze w R-form; Hb: tetramer, SIGMOIDALNA (P₅₀ ≈ 26 mmHg), allosteryczna; przy pO₂ = 40 mmHg (kapilara): Hb: ~75% (oddaje 22% O₂); Mb: ~95% (magazynuje); przy pO₂ = 5–10 mmHg (mitochondria): Hb: ~10% (Hb praktycznie pusta); Mb: ~60–80% (Mb oddaje O₂ do cytochromu c oxidase); dlatego Mb jest "buforem" O₂ i ładuje przy kapilary (Hb → Mb) i rozładowuje przy mitochondrium. (D) fałsz: O₂ i CO₂ przechodzą przez błony biologiczne wyłącznie przez PROSTĄ DYFUZJĘ (gazy lipofilne → bez kanałów; aquaporiny transportują wodę, nie O₂); CO₂ jest wydalany przez PŁUCA (80% jako CO₂ gazowy, 20% jako HCO₃⁻ dostarczony do płuc); przez nerki wydalany jest H⁺ i HCO₃⁻ w ramach regulacji kwasowo-zasadowej, ale nie gazowy CO₂.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wymiana, question_type: 'single',
    question_text: 'Pacjent z zapaleniem płuc (pneumonia) ma obszar płuca wypełniony wysiękiem. Który mechanizm NAJLEPIEJ wyjaśnia, dlaczego tlenoterapia (wdychanie 100% O₂) tylko częściowo poprawia SpO₂ u tego pacjenta?',
    options: [
      { id: 'A', text: 'Obszar wypełniony wysiękiem: V/Q = 0 (shunt wewnątrzpłucny) — krew przepływa przez nieventylowany obszar bez wymiany gazowej → domieszka odtlenowanej krwi do krwi tętniczej; nawet 100% O₂ nie pomaga — "zdrowe" pęcherzyki są już w pełni nasycone O₂, a krew przez zapalny obszar nie ma kontaktu z pęcherzykami', is_correct: true },
      { id: 'B', text: 'Zapalenie płuc powoduje całkowite zatrzymanie pracy serca, co uniemożliwia transport krwi do płuc; tlenoterapia jest nieskuteczna, bo płuca są zdolne do wymiany gazowej tylko przy normalnej perfuzji; 100% O₂ jest toksyczne i pogorszy stan pacjenta', is_correct: false },
      { id: 'C', text: 'Obszar zapalny ma V/Q = ∞ (przestrzeń martwa): doskonała wentylacja bez perfuzji; dodanie 100% O₂ wentyluje obszar bez perfuzji → jeszcze bardziej pogłębia przestrzeń martwą; hipoksemia wynika z zatrucia CO₂ produkowanego przez bakterie', is_correct: false },
      { id: 'D', text: 'Tlenoterapia 100% O₂ zawsze w 100% koryguje hipoksemię, niezależnie od przyczyny; shunty śródpłucne odpowiadają tak dobrze na tlenoterapię jak V/Q mismatch; pacjent z zapaleniem płuc nie potrzebuje tlenoterapii, bo hipoksja stymuluje głębszy oddech', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'SHUNT WEWNĄTRZPŁUCNY (intrapulmonary shunt, V/Q = 0): mechanizm: obszar płuca perfundowany, ale NIEWENTYLOWANY (atelektaza, zapalenie, ARDS, płyn w pęcherzykach) → krew przepływa bez wymiany gasowej → opuszcza płuca z pO₂ żylnym (~40 mmHg) → miesza się z krwią utlenowaną → HIPOKSEMIA OPORNA NA O₂; DLACZEGO 100% O₂ NIE POMAGA: "zdrowe" pęcherzyki przy FiO₂ 1.0: pO₂ ≈ 700 mmHg → Hb jest 100% nasycona; O₂ fizycznie rozpuszczony w osoczu rośnie (0,003 ml/mmHg/dl → przy 700 mmHg: ~2 ml/dl); ale krew przez shunt (~30% CO w ciężkim zapaleniu) NADAL wychodzi z pO₂ = 40 → mieszając: SpO₂ = (70% × 100%) + (30% × 75%) ≈ 92,5% mimo FiO₂ = 1; LECZENIE: PEEP (positive end-expiratory pressure) → otwiera zamknięte pęcherzyki → ↓shunt; fizjoterapia (oklepywanie) → drenaż wydzieliny; antybiotyki; KONTRAST z V/Q MISMATCH (nie shunt): obszary z V/Q 0,1–0,5 (zamiast 0) odpowiadają na O₂, bo mają jeszcze trochę wentylacji → podwyższone FiO₂ podnosi pO₂ pęcherzyków w tych obszarach → lepsza wymiana.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wymiana, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zaburzeń wymiany gazowej:',
    options: [
      { id: 'A', text: 'Hipoksemia (↓pO₂ we krwi tętniczej < 60 mmHg = SpO₂ < 90%) i hipoksja (↓dostarczania O₂ do tkanek) to różne stany: hipoksemia może prowadzić do hipoksji, ale hipoksja może też wystąpić przy normalnej SpO₂ (np. ciężka anemia, zatrucie CO — Hb nasycona CO zamiast O₂, wstrząs kardiogenny — ↓CO)', is_correct: true },
      { id: 'B', text: 'Hiperkapnia (↑pCO₂ > 45 mmHg) i hipokapnia (↓pCO₂ < 35 mmHg) mają odwrotne efekty na pH krwi: hiperkapnia → kwasica oddechowa (↑CO₂ + H₂O → ↑H⁺ → ↓pH); hipokapnia (hiperwentylacja) → zasadowica oddechowa (↓CO₂ → ↓H⁺ → ↑pH); kompensacja metaboliczna przez nerki zajmuje 2–5 dni', is_correct: true },
      { id: 'C', text: 'Cyjanoza (sinica) obwodowa i centralna różnią się przede wszystkim kolorem: sinica obwodowa jest niebieska, centralna jest zielona; sinica pojawia się gdy stężenie methemoglobiny we krwi spada poniżej 5 g/dl; sinica centralna (wrodzone wady serca z przeciekiem prawo-lewym) ustępuje po podgrzaniu kończyny', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: HIPOKSEMIA vs HIPOKSJA: hipoksemia: deficyt O₂ we krwi (↓paO₂, ↓SpO₂); 4 mechanizmy: (1) hipoventylacja (↓VA); (2) V/Q mismatch; (3) shunt; (4) ↓dyfuzji; hipoksja: deficyt O₂ w tkankach; 4 typy: (1) hipoksyczna (z hipoksemii); (2) anemiczna (anemia, CO — SpO₂ 97% ale CO-Hb nie oddaje O₂); (3) stagnatywna/ischemiczna (↓CO, wstrząs); (4) histotoksyczna (cyjanek blokuje cytochrom c oksydazę → tkanka nie może użyć O₂); SpO₂ PULSOKSYMETRIA: mierzy absorbancję 660 nm (oksyHb) vs 940 nm (deoksyHb); NIE rozróżnia CO-Hb od OxyHb (oba absorbują przy 660 nm) → fałszywa wysoka SpO₂ przy zatruciu CO! B — Prawda: ZABURZENIA WENTYLACJI: HIPERKAPNIA (paCO₂ > 45 mmHg): PaCO₂ = (VCO₂ × 0,863) / VA; hipoventylacja → CO₂ zatrzymanie; pH = 6,1 + log([HCO₃⁻] / 0,03 × pCO₂); przy ↑pCO₂ → ↓pH (kwasica oddechowa); KOMPENSACJA NERKOWA: ↑reabsorpcja HCO₃⁻ (przez 2–5 dni); hipokapnia (hiperwentylacja): ↓pCO₂ → ↑pH (zasadowica oddechowa) → tężyczka (hipokalcemia funkcjonalna: Ca²⁺ wiąże się z albumin przy ↑pH); leczenie: oddychanie do torebki. C — Fałsz: SINICA (cyjanoza): pojawia się gdy deoksy-Hb > 5 g/dl we włośniczkach (NIE methemoglobina < 5 g/dl!); centralna: pO₂↓ → cała Hb niedotlenowana → niebieskawe zabarwienie błon śluzowych (język, dziąsła) + kończyn; NIE ustępuje po podgrzaniu; przyczyna: wady serca z przeciekiem P→L, hipowentylacja; obwodowa: pO₂ prawidłowe, ale wolny przepływ obwodowy (wazokonstrikcja, wstrząs, choroba Raynauda) → tkanka wyciąga więcej O₂ → ↑deoksyHb lokalnie; USTĘPUJE po podgrzaniu (wazodylatacja → ↑przepływ → mniej deoksyHb); sinica + prawidłowa SpO₂ = methemoglobinemia (chocolate brown blood).',
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
  console.log(`Seeding batch 4 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
