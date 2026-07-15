// Seed batch 5/7 — Fizjologia człowieka: układ krążenia i oddechowy
// Wymiana gazowa (2) + Transport gazów we krwi (7) + Regulacja oddychania (1)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175'

const S = {
  wymiana:   '1e82cd06-799e-4e80-a26e-dc8eeda58196',
  transport: 'd367b143-3d4c-4c34-80f1-f023ce5d6a68',
  regulacja: '83072c48-eb1e-460e-bcf1-4f7ae46a7936',
}

const questions = [

  // ── WYMIANA GAZOWA (2) ────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.wymiana, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują ARDS (acute respiratory distress syndrome — zespół ostrej niewydolności oddechowej)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'ARDS jest definiowany przez: ostre pojawienie się (<1 tyg.) obustronne nacieki w RTG/CT; PaO₂/FiO₂ < 300 mmHg (łagodny), < 200 (umiarkowany), < 100 (ciężki); nie spowodowany niewydolnością serca (PCWP < 18 mmHg); przyczyny: sepsa, zapalenie płuc, aspiracja, uraz, transfuzja (TRALI)', is_correct: true },
      { id: 'B', text: 'Patofizjologia ARDS: uszkodzenie bariery pęcherzykowo-włośniczkowej → przesiąkanie białek i płynu do pęcherzyków → inaktywacja surfaktantu → zapaść pęcherzyków → masywny shunt + V/Q mismatch → ciężka hipoksemia oporna na tlenoterapię; leczenie: wentylacja ochronna (Vt 6 ml/kg, PEEP ≥ 5 cmH₂O) + prone positioning', is_correct: true },
      { id: 'C', text: 'Terapia pronacyjna (ułożenie na brzuchu, prone positioning) w ciężkim ARDS poprawia oksygenację dzięki: lepszemu drenażowi wydzieliny z tylnych (zależnych) obszarów płuc + wyrównaniu V/Q (obszary pleców, dotąd zalewane ciężkim wysiękiem, teraz mogą wentylować) + zmniejszeniu ucisku serca na płuca', is_correct: true },
      { id: 'D', text: 'ARDS dotknął wyłącznie dorosłych; u dzieci nie może wystąpić; jest zawsze spowodowany ciężkim wysiłkiem fizycznym i nie ma związku z sepsą; jedynym leczeniem jest podanie dużych dawek antybiotyków dożylnych; tlenoterapia 100% O₂ przez maskę całkowicie koryguje hipoksemię', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) DEFINICJA ARDS (Berlin Definition 2012): czas: ostre (<1 tyg. od przyczyny lub nasilenia duszności); RTG: obustronne nacieki (nie tłumaczone przez płyn/masę/niedodmę); pochodzenie obrzęku: nie w pełni tłumaczone przez NS (echokardiografia wyklucza obrzęk kardiogenny); P/F ratio (Berlin): łagodny: 200–300 mmHg (PEEP ≥ 5); umiarkowany: 100–200; ciężki: < 100; śmiertelność: umiarkowany ~35%, ciężki ~45%. (B) PATOFIZJOLOGIA: DAD (diffuse alveolar damage) = histo; wzrost przepuszczalności (VEGF, TNF, IL-1) → exudat białkowy → membrany szkliste (hyaline membranes) → inaktywacja surfaktantu (proteazy, PLA₂) → atelektazy → shunt >> 50% → refractory hypoxemia; WENTYLACJA OCHRONNA (ARDSnet trial 2000): Vt 6 vs 12 ml/kg → redukcja śmiertelności z 40% do 31%; plateau pressure ≤ 30 cmH₂O; PEEP: otwiera atelektazy (recruitment) → ↓shunt. (C) PRONE POSITIONING: Guérin 2013 (PROSEVA trial): >16 h/dobę prone → 28-dniowa śmiertelność: 16 vs 32,8% (kontrola supine); mechanizm: (1) redystrybucja V/Q: tylne obszary (w pozycji supine — zależne, zalewane) → po obróceniu na brzuch stają się niezależne → otwierają się; (2) ↓ciśnienia przezpłucnego; (3) drenaż wydzieliny; (4) mniejszy ucisk serca na LL lobe. (D) fałsz: ARDS u dzieci: pARDS (pediatric ARDS, Montreux Definition 2015); sepsa to najczęstsza przyczyna ARDS; hipoksemia w ARDS OPORNA na O₂ przez shunt; antybiotyki lecz sepsę (przyczynę), nie ARDS bezpośrednio.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wymiana, question_type: 'single',
    question_text: 'Spirometryczna krzywa przepływ-objętość (flow-volume loop) jest diagnostycznym narzędziem oceny funkcji płuc. Która interpretacja jest POPRAWNA?',
    options: [
      { id: 'A', text: 'Obturacja (astma, POChP): szczyt przepływu wydechowego (PEF) jest obniżony + krzywą wydechu jest "wklęsła" (concave) — przepływ spada szybciej niż normalnie przez dynamiczną kompresję dróg oddechowych; w restrykcji (zwłóknienie): krzywa jest proporcjonalnie zmniejszona (mniejsza FVC i TLC), ale kształt jest normalny (nie wklęsły)', is_correct: true },
      { id: 'B', text: 'W obturacji krzywa wydechowa jest convex (wypukła, łukowata ku górze) — przepływ jest wyższy niż normalnie; PEF jest znacznie wyższy od normy; FEV₁ i FVC są obie zwiększone proporcjonalnie; test bronchodilatacyjny jest nieistotny dla diagnostyki', is_correct: false },
      { id: 'C', text: 'Krzywa przepływ-objętość i spirometria to synonimy oznaczające to samo badanie; FEV₁ mierzy szczytowy przepływ wydechowy (PEF); PEF mierzy objętość w 1. sekundzie; obie wartości mierzy się podczas spokojnego oddychania bez forsownego wydechu', is_correct: false },
      { id: 'D', text: 'Niedrożność górnych dróg oddechowych (np. guz krtani, obrzęk, ciało obce) na krzywej przepływ-objętość: obniżenie krzywej WYDECHOWEJ przy zachowanej wdechowej; stan odwrotny do astmy; badanie spirometryczne nie może rozróżnić niedrożności stałej od zmiennej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'KRZYWA PRZEPŁYW-OBJĘTOŚĆ: (1) NORMALNY: szybki wzrost do PEF → liniowy spadek do FVC; wdech: okrąg pod osią; (2) OBTURACJA (astma, POChP): PEF obniżony; wyrywana, WKLĘSŁA krzywa wydechu (FEF50, FEF75 → przepływ przy 50/75% wydechu obniżone; "wydrążona" krzywa) = dynamiczna kompresja; FEV₁/FVC < 0,70; test odwracalności: salbutamol 400 μg → FEV₁ ↑ ≥ 12% i ≥ 200 ml → astma; (3) RESTRYKCJA (zwłóknienie, osłabienie mięśni): krzywa PROPORCJONALNIE mała (VC ↓) ale kształt normalny (FEV₁/FVC normalne lub ↑); TLC ↓; (4) NIEDROŻNOŚĆ GÓRNYCH DRÓG ODDECHOWYCH: stała (np. guz krtani, zrosty): plateau wdechu I wydechu = "tabletop" → ograniczenie obu faz; zmienna zewnętrzna (np. porażenie strun głosowych → faza wdechowa płaska); zmienna wewnętrzna: faza wydechowa płaska; PEF (peak expiratory flow): mierzy szczytowy PRZEPŁYW (l/s lub l/min); FEV₁ = OBJĘTOŚĆ w 1. sekundzie = inne parametry.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TRANSPORT GAZÓW WE KRWI (7) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'single',
    question_text: 'Transport CO₂ we krwi odbywa się trzema różnymi drogami. Które zestawienie POPRAWNIE opisuje proporcje i mechanizmy transportu CO₂?',
    options: [
      { id: 'A', text: 'Transport CO₂ z tkanek do płuc: ~70% jako wodorowęglany HCO₃⁻ (po reakcji z H₂O w erytrocytach: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, katalizowanej przez anhydrazę węglanową); ~23% jako karbaminohemoglobina (CO₂ + NH₂-Hb → Hb-NHCOO⁻ + H⁺); ~7% fizycznie rozpuszczony w osoczu', is_correct: true },
      { id: 'B', text: 'CO₂ jest transportowany wyłącznie w formie fizycznie rozpuszczonej w osoczu (100%); anhydraza węglanowa nie uczestniczy w transporcie CO₂; karbaminohemoglobina nie istnieje; CO₂ nie przechodzi przez błonę erytrocytu i nie tworzy HCO₃⁻ we krwi', is_correct: false },
      { id: 'C', text: 'CO₂ jest transportowany głównie (~80%) jako karbaminohemoglobina; wodorowęglany stanowią tylko 5% transportu; anhydraza węglanowa jest enzymem wyłącznie wątroby i nerek, nieobecnym w erytrocytach; H⁺ powstały z CO₂ nie ma wpływu na pH krwi', is_correct: false },
      { id: 'D', text: 'Efekt Haldane\'a: oksyhemoglobina (HbO₂) wiąże więcej CO₂ jako karbaminohemoglobinę niż deoksyhemoglobina; HbO₂ ma wyższe powinowactwo do CO₂ niż Hb; w tkankach oddanie O₂ zmniejsza wiązanie CO₂, co utrudnia jego transport do płuc', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'TRANSPORT CO₂ — proporcje: WODOROWĘGLANY (70%): w erytrocycie: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻; katalizowane przez ANHYDRAZĘ WĘGLANOWĄ II (CAII — najszybszy znany enzym biologiczny, k_cat ~ 10⁶/s); H⁺ buforowane przez Hb (histydyny, imidazol); HCO₃⁻ transportowany do osocza przez ANTIPORTER HCO₃⁻/Cl⁻ (banda 3, AE1) = "chloride shift" (przesunięcie chlorkowe, Hamburger exchange); w płucach: odwrotnie; KARBAMINOHEMOGLOBINA (23%): CO₂ + R-NH₂ (N-końce globiny) → R-NHCOO⁻ + H⁺; NIE przyłącza się do hemu (jak CO); EFEKT HALDANE\'a (odwrotny do tego w opcji D): DeoksyHb wiąże WIĘCEJ CO₂ niż OksyHb; w tkankach: Hb oddaje O₂ → staje się deoksyHb → chętniej wiąże CO₂ jako karbaminian + H⁺ (efekt Bohra działa w obie strony!) → "pulling" CO₂ z tkanek; w płucach: Hb wiąże O₂ → OksyHb → wypycha CO₂ → CO₂ uwalniany → wentylacja usuwa; FIZYCZNIE ROZPUSZCZONY (7%): pCO₂ × 0,03 mmol/l/mmHg; 45 mmHg × 0,03 = 1,35 mmol/l; AZ WE KRWI TĘTNICZEJ: 1,2 mmol/l; mały, ale bezpośrednio mierzalny (pCO₂ elektroda).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących anhydrazy węglanowej i jej roli:',
    options: [
      { id: 'A', text: 'Anhydraza węglanowa (CA, carbonic anhydrase) katalizuje reakcję: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻; izoforma CAII w erytrocytach jest kluczowa dla transportu CO₂; izoforma CAIX: marker hipoksji i nowotworów (overekspresja przy niskim pO₂); izoforma CAI (ślina, oko) i CAIV (naczynia, nerki)', is_correct: true },
      { id: 'B', text: 'Acetazolamid (Diamox) jest inhibitorem anhydrazy węglanowej; hamuje CAII w erytrocytach i CAIV w nerkach; stosowany: (1) jaskra (↓wytwarzania cieczy wodnistej przez CA w ciele rzęskowym); (2) profilaktyka choroby wysokogórskiej (AMS — przez zakwaszenie krwi i stymulację oddychania); (3) lek moczopędny', is_correct: true },
      { id: 'C', text: 'Anhydraza węglanowa nie odgrywa żadnej roli w regulacji pH krwi; wyłącznym buforem krwi jest hemoglobina; wodorowęglany nie uczestniczą w buforowaniu; niedobór CA w erytrocytach nie wpłynąłby na szybkość transportu CO₂ — reakcja zachodzi równie szybko bez enzymu', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: ANHYDRAZA WĘGLANOWA (CA): metalloenzym cynkowy; centrum aktywne: Zn²⁺ + 3 His; reakcja: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻; CAII (erytrocyty): k_cat = 10⁶/s — najszybszy enzym; bez CA: spontaniczna reakcja taka sama, ale 10 000× wolniej → za wolno dla potrzeb metabolicznych; IZOFORMY (≥16 u człowieka): CAI (erytrocyty, ślina), CAII (erytrocyty, nerki, mózg — "power house"), CAIII (mięśnie), CAIV (śródbłonek naczyniowy), CAVI (ślina), CAIX, CAXII: markery hipoksji (HIF-1α → ekspresja); CAV: mitochondria (synteza mocznika, glukoneogeneza); CAVII: mózg; niedobory: CA II deficiency → osteopetrosis + kwasica cewkowa nerkowa + wapnienie mózgu. B — Prawda: ACETAZOLAMID (inhibitor CA, sulfonamidowy): hamuje CAIV w ciele rzęskowym → ↓ATPazy H⁺ → ↓produkcji cieczy wodnistej → ↓ciśnienia wewnątrzgałkowego (IOP); hamuje CA w nerkach: ↓reabsorpcji HCO₃⁻ w proksymalnym → utrata HCO₃⁻ z moczem → kwasica metaboliczna (↓pH krwi); PROFILAKTYKA AMS (acute mountain sickness): zakwaszenie krwi → hiperwentylacja → ↑pO₂ (przełamuje hamowanie oddechu przez hipokapnię hiperwentylacji); dawka: 125–250 mg 2× dziennie od doby przed wyjazdem. C — Fałsz: CA jest KRYTYCZNA dla transportu CO₂; UKŁADY BUFOROWE KRWI: (1) HCO₃⁻/CO₂ (70% mocy buforowej osocza) = "otwarty" układ (CO₂ usuwany przez płuca) → Henderson-Hasselbalch; (2) białka osocza (albuminy, histydyny) ~ 10%; (3) Hb (hemoglobina) ~ 20% — najważniejszy bufor śródkomórkowy; (4) fosforany organiczne + nieorganiczne; bez CA → CO₂ gromadzi się → kwasica oddechowa.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują równowagę kwasowo-zasadową krwi i jej zaburzenia? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'pH prawidłowe krwi tętniczej: 7,35–7,45 (norma); kwasica: pH < 7,35; zasadowica: pH > 7,45; równanie Hendersona-Hasselbalcha: pH = 6,1 + log([HCO₃⁻] / (0,0307 × pCO₂)); prawidłowe wartości: pCO₂ = 35–45 mmHg; HCO₃⁻ = 22–26 mmol/l', is_correct: true },
      { id: 'B', text: 'Kwasica oddechowa: ↑pCO₂ (hipoventylacja → retencja CO₂ → ↑H₂CO₃ → ↓pH); kompensacja metaboliczna: nerki ↑ reabsorpcję HCO₃⁻ + wydalanie H⁺ → ↑HCO₃⁻ → ograniczony wzrost pH; zasadowica oddechowa: ↓pCO₂ (hiperwentylacja → ↑pH); kompensacja: nerki ↓HCO₃⁻ → ↓pH', is_correct: true },
      { id: 'C', text: 'Kwasica metaboliczna: ↓HCO₃⁻ + ↓pH; luka anionowa (AG = Na⁺ − (Cl⁻ + HCO₃⁻)); prawidłowe AG = 8–12 mEq/l; AG > 16 mEq/l = kwasica z luką anionową: kwasica mleczanowa (wstrząs, sepsa), ketoacidoza (DKA), azotemia (mocznica), salicylany/metanol; AG normalne = hiperchloremica: biegunki, kwasica cewkowa nerkowa', is_correct: true },
      { id: 'D', text: 'Zasadowica metaboliczna: ↑HCO₃⁻; przyczyny: wymioty (utrata H⁺/HCl), nadmiar alkaliów (soda), hipokaliemia (K⁺ wypływa z komórki w zamian za H⁺ wchodzący); leczenie: chlorek potasu (KCl) i nawodnienie; kompensacja oddechowa: hipowentylacja → ↑pCO₂ → obniżenie pH', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C', 'D'],
    explanation: '(A) pH KRWI: H-H: pH = pKa + log(zasada/kwas) = 6,1 + log([HCO₃⁻]/[H₂CO₃]); [H₂CO₃] ≈ 0,0307 × pCO₂; pH 7,4: [HCO₃⁻]/[H₂CO₃] = 10^(7,4-6,1) = 10^1,3 ≈ 20 = 24 mmol/l / 1,2 mmol/l; krytyczne: pH < 6,8 lub > 7,8 → zagrożenie życia; "kwestia kompensacji: kompensacja NIE normalizuje pH całkowicie — zawsze "po tej samej stronie normy". (B) ODDECHOWE ZABURZENIA: KWASICA ODDECHOWA (np. POChP z retencją CO₂, opioidowa depresja oddychania, kyphoscoliosis): ↑pCO₂ → ↑H⁺ → ↓pH; kompensacja nerkowa: 2–5 dni → ↑HCO₃⁻ (1 mEq/l na każde 10 mmHg ↑pCO₂ w ostrym → 3,5 mEq/l w przewlekłym); ZASADOWICA ODDECHOWA (hiperwentylacja: ból, lęk, ciąża, salicylany, sepsa wczesna, hipoksja): ↓pCO₂ → ↑pH; kompensacja nerkowa: ↓HCO₃⁻. (C) KWASICA METABOLICZNA z luką anionową: MUDPILES: Methanol, Uremia, DKA/Ketoacidosis, Propylene glycol/Paraldehyde, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates; mleczanowa: typ A (hipoperfuzja: wstrząs, sepsa) vs B (mitochondrialna, metformina); AG korekta na albuminy: AG_korygowane = AG + 2,5 × (4,0 − albuminy g/dl). (D) ZASADOWICA METABOLICZNA: wymioty → utrata HCl → ↑HCO₃⁻; pierwotny aldosteronizm (Conn) → ↑K⁺ wydalanie → hipokaliemia → ↑H⁺ do komórki → ↑HCO₃⁻; Bartter/Gitelman: kanałopatia nerki; leczenie: NaCl + KCl; jeśli chloro-responsive (U_Cl < 20 mEq/l).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'single',
    question_text: 'Zatrucie tlenkiem węgla (CO) jest stanem zagrożenia życia. Który mechanizm POPRAWNIE wyjaśnia toksyczność CO i obserwowane objawy?',
    options: [
      { id: 'A', text: 'CO wiąże się z hemem Hb z powinowactwem ~240× wyższym niż O₂ → tworzy karboksyhemoglobinę (COHb) → blokuje transport O₂; przesuwa krzywą dysocjacji Hb W LEWO (↑powinowactwo pozostałych hemo do O₂) → utrudnia oddawanie O₂ do tkanek; CO wiąże też cytochrom c oksydazę → hamuje oddychanie mitochondrialne; SpO₂ fałszywie prawidłowa (pulsoksymetr nie rozróżnia COHb od OxyHb)', is_correct: true },
      { id: 'B', text: 'CO jest nieszkodliwym gazem stosowanym jako lek kardioprotektywny; wiąże się wyłącznie z enzymami trawiennymi; nie ma wpływu na hemoglobinę ani mitochondria; cjanoza (niebieska skóra) jest charakterystycznym objawem zatrucia CO; SpO₂ fałszywie niska', is_correct: false },
      { id: 'C', text: 'CO wiąże się z hemem z powinowactwem 240× NIŻSZYM niż O₂ → łatwo wypierany przez O₂ w powietrzu atmosferycznym → leczenie polega na podaniu pacjentowi azotu; wiśniowoczerwony kolor skóry (cherry red) jest wynikiem sinic skórnych w kończynach; COHb nie jest mierzalna standardowymi metodami', is_correct: false },
      { id: 'D', text: 'Pulsoksymetria standardowa (2 długości fali: 660 + 940 nm) jest doskonałym narzędziem do wykrywania zatrucia CO — wynik SpO₂ obniżony = wskaźnik COHb; w zatruciu CO paCO₂ jest zawsze obniżone; leczenie polega na podaniu hipotonicznego NaCl dożylnie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ZATRUCIE CO (carbon monoxide poisoning): MECHANIZM: CO wiąże hem w Hb i innych hemoproteich; POWINOWACTWO: CO:O₂ = 210–250:1; COHb = karboksyhemoglobina → nie transportuje O₂; EFEKT ALLOSTERYCZNY: resztkowe hem-oksyhemoglobiny mają ↑powinowactwo do O₂ (przesunięcie krzywej W LEWO) → mniej O₂ oddawane do tkanek; "double whammy": mniej O₂ transportowane + to co transportowane, gorzej oddawane; CO + Cytochrom c oksydaza (kompleks IV): bezpośrednie hamowanie mitochondrialnego łańcucha oddechowego; OBJAWY: lekkie: bóle głowy (COHb 10–20%), zawroty, nudności; ciężkie: dezorientacja, śpiączka, drgawki (COHb 30–50%); śmiertelne: > 60% COHb; SKÓRA: wiśniowoczerwona (cherry-red skin): rzadko widoczna in vivo (częściej pośmiertnie); SpO₂: fałszywie WYSOKA! (pulsoksymetr 2-falowy: 660 nm = oxy i COHb absorbują podobnie); pomiar prawdziwy: ko-oksymetr gazometrii (4–8 fal). LECZENIE: (1) 100% O₂ przez maskę z rezerwuarem → t₁/₂ COHb: przy 21% O₂ = 5h; przy 100% O₂ = 60–90 min; (2) hiperbaryczna tlenoterapia (HBO): pO₂ 2,4–3 atm → t₁/₂ = 20–30 min; wskazania: COHb > 25%, utrata przytomności, ciąża, dzieci; CO endogenny: hemolib → hem-oksygenaza → CO + bilirubina + Fe → CO jest przekaźnikiem sygnałowym w fizjologicznych dawkach.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących saturacji krwi tętniczej i żylnej:',
    options: [
      { id: 'A', text: 'Saturacja krwi tętniczej (SaO₂/SpO₂) u zdrowego człowieka wynosi 95–100% (pO₂ ~95–100 mmHg); saturacja krwi żylnej mieszanej (SvO₂, z tętnicy płucnej) wynosi ~75% w spoczynku (pO₂ ~40 mmHg); różnica SaO₂ − SvO₂ = dostarczanie O₂ do tkanek; ↓SvO₂ (<65%) = ↑ekstrakcja tlenowa = zagrożenie hipoksją tkanek', is_correct: true },
      { id: 'B', text: 'ScvO₂ (saturacja centralnej krwi żylnej, z żyły głównej górnej) jest stosowana klinicznie jako przybliżenie SvO₂; w leczeniu sepsy wg wytycznych Surviving Sepsis Campaign: ScvO₂ ≥ 70% jako cel resuscytacji (EGDT); ScvO₂ < 65% może wskazywać na nieadekwatny rzut serca lub anemię', is_correct: true },
      { id: 'C', text: 'Zawartość tlenu we krwi (CaO₂) wylicza się jako: CaO₂ = (Hb × 1,34 × SaO₂) + (pO₂ × 0,003); przy Hb = 15 g/dl, SaO₂ = 98%, pO₂ = 100 mmHg: CaO₂ = (15 × 1,34 × 0,98) + (100 × 0,003) = ~19,7 + 0,3 = ~20 ml O₂/dl krwi; przy anemii Hb = 7 g/dl: CaO₂ ≈ 9,5 ml/dl — połowa normy, mimo normalnej SpO₂ = 98%', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: KRZYWA DYSOCJACJI HbO₂ — punkty referencyjne: pO₂ = 100 mmHg: SaO₂ = 97–98% (krew tętnicza, płuca); pO₂ = 75 mmHg: SaO₂ = 95% (dolna granica normy); pO₂ = 60 mmHg: SaO₂ = 90% (kryterium hipoksemii, O₂ terapia wskazana); pO₂ = 40 mmHg: SvO₂ = 75% (krew żylna mieszana, tętnica płucna); P₅₀ ≈ 26 mmHg (50% saturacji); EKSTRAKCJA O₂: ER = (SaO₂ − SvO₂) / SaO₂ ≈ 25% w spoczynku; przy wysiłku: ER → 75%; DEMAND: ↑VO₂ → kompensacja przez ↑CO (Starling) i ↑ekstrakcję. B — Prawda: ScvO₂ vs SvO₂: ScvO₂ z SVC (żyła główna górna, cewnik CVC/PICCO) ≈ SvO₂ ± 2–5%; EGDT (Rivers 2001, ProCESS 2014): cel: ScvO₂ ≥ 70% w wczesnościelnym leczeniu sepsy; jeśli ScvO₂ < 70% pomimo nawodnienia i MAP ≥ 65: → przetocz erytrocyty (Hb < 10) lub dobutamina (↑CO); SEPSIS-3 (2016): uproszczono EGDT, ale ScvO₂ nadal stosowany. C — Prawda: ZAWARTOŚĆ O₂ (Fick principle): CaO₂ = (1,34 × Hb × SaO₂) + (0,003 × pO₂); 1,34 ml O₂/g Hb (Hüfner constant); 0,003 ml O₂/dl/mmHg pO₂ (rozpuszczone); PRAKTYCZNIE: >97% transportu O₂ przez Hb; anemia: Hb 7 g/dl, SpO₂ 98% → CaO₂ ≈ 9,5 ml/dl (POŁOWA) → hipoksja tkankowa mimo "normalnej" saturacji; DO₂ (oxygen delivery): DO₂ = CO × CaO₂ × 10; norma: ~1 000 ml/min.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń dotyczących talasemii i hemoglobinopatii są POPRAWNE? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Talasemia β (β-thalassemia): zmniejszona (β⁺) lub brak (β⁰) syntezy łańcuchów β-globiny → nadmiar wolnych łańcuchów α → wytrącają się w erytroblastach → ineffective erythropoiesis (niszczenie w szpiku) + hemoliza; talasemia major (β⁰/β⁰, Cooley\'s anemia): ciężka anemia od niemowlęctwa, wymagająca regularnych transfuzji', is_correct: true },
      { id: 'B', text: 'Talasemia α: delecja genów HBA1/HBA2 (chr. 16, 4 kopie genu α-globiny); 1 gen del (α-thalassemia minima): bezobjawowe; 2 geny del (cis lub trans): anemia łagodna; 3 geny del: HbH disease (HbH = β₄ tetramer — nieefektywny, hemoliza); 4 geny del: wodogłowie płodowe (hydrops fetalis) z Hb Barts (γ₄) — niezgodna z życiem', is_correct: true },
      { id: 'C', text: 'Hemoglobina C (HbC, Glu6Lys w łańcuchu β): łagodniejsza hemoglobinopatia niż HbS; HbSC (heterozygota złożona HbS + HbC) ma umiarkowane objawy; HbCC: łagodna anemia hemolityczna z leptocytami; endemiczna w Afryce Zachodniej; HbC nie polimery zuje, więc kryształki tworzą się jedynie w homozygotach', is_correct: true },
      { id: 'D', text: 'Hydroksymocznik (hydroxyurea) stosowany w leczeniu niedokrwistości sierpowatokrwinkowej działa przez: ↑syntezy HbF (γ-globina, 2α+2γ) → HbF "rozcieńcza" HbS → mniej polimeryzacji → mniej sierpowatych erytrocytów; mechanizm: aktywacja genów γ-globiny przez ↑cGMP (NO) i ↑HU-DNA-damage response', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C', 'D'],
    explanation: '(A) β-TALASEMIA: geny HBB (chr. 11); ponad 300 mutacji punktowych (nie delecje jak w α); promotory, splicingi, nonsense; β⁰ = zero syntezy; β⁺ = zmniejszona; HOMOZYGOTA (β⁰/β⁰) = TALASEMIA MAJOR (Cooley 1925): Hb F dominuje; leczenie: transfuzje co 2–4 tyg. (od 6–12 mies.) + chelacja Fe (deferoksamina, deferasiroks) lub transplantacja szpiku / terapia genowa (Zynteglo 2019); HETEROZYGOTA = talasemia minor: łagodna anemia mikrocytarna z ↑HbA₂ > 3,5%; TALASEMIA POŚREDNIA (β⁺/β⁰): bez transfuzji przeżywa. (B) α-TALASEMIA: chr. 16, locus HBA1 i HBA2 (4 allele); 1 del (α−/αα): nosiciel cichy; 2 del cis (−−/αα, Azjaci) lub trans (−α/−α, Afryka): trait, MCV ↓; 3 del (−−/−α): HbH (β₄): niestabilna, hemoliza, splenomegalia; 4 del (−−/−−): Hb Barts (γ₄ = brak α): hydrops fetalis, martwy płód / śmierć po urodzeniu. (C) HbC: β6 Glu→Lys (przewaga cytyny); mikrocytoza, leptocyty, hemoliza; endemiczna: Ghana, Nigeria, Mali; HbSC: ~25% tak ciężkie jak HbSS (retinopathy, aseptic necrosis); HbC kryształy: hexagonal rod crystals w homozygotach CC widoczne w rozmazie. (D) HYDROKSYMOCZNIK (HU) w SCD: FDA zatwierdzone 1998 (dorosłe), 2017 (dzieci ≥2 lat), 2022 (noworodki); mechanizm: (1) ↑HbF (mechanizm: ROS → inhibicja erytroidalnej kinazy → reaktywacja γ-genów? cGMP?); (2) ↓leukocytów (myelosupresja) → ↓adhezji; (3) ↑NO → wazodylatacja → ↑perfuzji; wynik: HbF ↑ od <1% do 15–30% → ↓kryzysy o 50%; nowe leki: crizanlizumab (anty-P-selectin), voxelotor (anty-polimeryzacja HbS).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'single',
    question_text: 'Buforowanie pH krwi jest kluczowe dla homeostazy. Które zestawienie POPRAWNIE opisuje układy buforowe krwi i ich działanie?',
    options: [
      { id: 'A', text: 'Układy buforowe krwi (w kolejności znaczenia): (1) układ HCO₃⁻/CO₂ (pKa 6,1) — główny bufor osocza, "otwarty" (CO₂ usuwany przez płuca i HCO₃⁻ przez nerki); (2) hemoglobina (pKa ~6,8) — główny bufor śródkomórkowy RBC (imidazol histydyn); (3) białka osocza (albuminy); (4) fosforany (HPO₄²⁻/H₂PO₄⁻, pKa 6,8) — ważne w moczu', is_correct: true },
      { id: 'B', text: 'Układ fosforanowy (pKa 6,8) jest NAJWAŻNIEJSZYM buforem krwi tętniczej — odpowiada za 80% pojemności buforowej osocza; HCO₃⁻/CO₂ ma marginalne znaczenie; hemoglobina nie buforuje, bo jest białkiem śródkomórkowym nieobecnym w osoczu', is_correct: false },
      { id: 'C', text: 'Pojemność buforowa krwi jest stała i nie zależy od stężenia hemoglobiny ani albumin; przy ciężkiej anemii zdolność krwi do buforowania zmian pH jest niezmieniona; hemoglobina działa jako bufor wyłącznie w płucach, nie w tkankach', is_correct: false },
      { id: 'D', text: 'Układ HCO₃⁻/CO₂ jest "zamkniętym" układem buforowym — pH regulowane wyłącznie przez nerki; płuca nie biorą udziału w regulacji pCO₂ i pH; pKa układu HCO₃⁻/CO₂ wynosi 7,4 (identyczne z normalnym pH krwi) — to sprawia, że jest idealnym buforem krwi', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'UKŁADY BUFOROWE KRWI: (1) BIKARBONATOWY (HCO₃⁻/CO₂): pKa = 6,1; choć pH=7,4 jest daleko od pKa (efektywność mniejsza niż przy pH=6,1), jest NAJWAŻNIEJSZY ze względu na "otwarty" charakter — jedyny układ kontrolowany fizjologicznie w 2 narządach: CO₂ przez PŁUCA (szybko, minuty), HCO₃⁻ przez NERKI (powoli, 2–5 dni); stężenie: 24 mmol/l → duże rezerwy; (2) HEMOGLOBINOWY: pKa imidazolu His-β146 ≈ 6,8 (zmienia się z utlenowaniem); deoksy-Hb jest lepszym buforem niż oxy-Hb ("izohydryczny przełącznik" — H⁺ z CO₂ w tkankach buforowane przez deoksy-Hb, w płucach oddawane gdy Hb wiąże O₂); hemoglobina stanowi ~80% pojemności buforowej erytrocytu; (3) BIAŁKA OSOCZA: albuminy, globuliny; imidazol i N-końce; (4) FOSFORANOWY: HPO₄²⁻/H₂PO₄⁻, pKa 6,8 — ważny w moczu, w nerce; we krwi stężenie zbyt małe (1 mmol/l) → mały wpływ; DLACZEGO HCO₃⁻/CO₂ SKUTECZNY MIMO pKa 6,1: "kliniczny paradoks buforowy" — działanie opisuje równanie Davenporta; "otwartość" → CO₂ zawsze na poziomie ~1,2 mmol/l (regulowany przez oddech) → przesunięcia pH silnie kompensowane; bez płuc/nerek → zamknięty i słaby.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących adaptacji do dużych wysokości:',
    options: [
      { id: 'A', text: 'Na dużych wysokościach (>3 000 m n.p.m.): ↓ciśnienia atmosferycznego → ↓pO₂ inspirowanego → hipoksemia → stymulacja chemoreceptorów obwodowych (kłębek szyjny) → hiperwentylacja → ↓pCO₂ → zasadowica oddechowa (pH ↑); kompensacja nerkowa: ↑wydalania HCO₃⁻ → normalizacja pH (ale pCO₂ nadal niskie)', is_correct: true },
      { id: 'B', text: 'Aklimatyzacja długoterminowa (tygodnie-miesiące na dużej wysokości): ↑EPO (z nerek, stymulowanej przez HIF-1α w warunkach hipoksji) → ↑erytropoeza → ↑hematokryt + ↑stężenie Hb → ↑pojemności tlenowej krwi; ↑2,3-BPG w erytrocytach → przesuwa krzywą ODC W PRAWO → łatwiejsze oddawanie O₂ do tkanek', is_correct: true },
      { id: 'C', text: 'Choroba wysokogórska ostra (AMS, acute mountain sickness): ból głowy + nudności + zawroty przy SpO₂ prawidłowej (98%); leczenie: natychmiastowy wjazd wyciągiem na jeszcze większą wysokość + podanie adrenaliny + ścisły zakaz schodzenia; acetazolamid jest przeciwwskazany w AMS', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: FIZJOLOGIA WYSOKOŚCI: pO₂ inspirowane = FiO₂ × (Pb − PH₂O); Pb = ciśnienie barometryczne; na 3 000 m: Pb ≈ 526 mmHg → pO₂ inspirowane = 0,21 × (526 − 47) ≈ 100 mmHg (vs 150 mmHg na poziomie morza); na 5 500 m (Everest Base Camp): pO₂ ≈ 80 mmHg → pO₂ pęcherzykowe ≈ 50 mmHg; VENTILATORY RESPONSE TO HYPOXIA (HVR): obwodowe chemoreceptory (kłębek szyjny = carotid body) → hiperwentylacja → ↓pCO₂ → zasadowica oddechowa; HAMOWANIE: zasadowica hamuje centralny napęd oddechowy → hiperwentylacja "przytłumiona"; nerkowa kompensacja: ↓HCO₃⁻ → pH normalizuje → hamowanie ustaje → więcej wentylacji. B — Prawda: AKLIMATYZACJA: HIF-1α (hypoxia-inducible factor): subunit α stabilizowany przy hipoksji (normalnie PHD hydroxylazy → ubikwityna → proteasom); HIF-1α + HIF-1β → EPO gen, VEGF, glikolityczne enzymy; EPO → BFU-E/CFU-E → retikulocyty → erytrocyty; t₁/₂ wzrostu Ht: ~3 tygodnie; Tybetańczycy: ewolucyjne przystosowanie EPAS1/HIF-2α → wysoka SaO₂ bez nadmiernej policitemii; 2,3-BPG: ↑przy zasadowicy (!) → krzywą W PRAWO → P₅₀ ↑ → Hb oddaje O₂ przy wyższym pO₂; UWAGA: ↑2,3-BPG → TRUDNIEJSZE ŁADOWANIE O₂ w płucach (krzywa też w prawo!); efekt netto korzystny w tkankach, częściowo niekorzystny w płucach. C — Fałsz: AMS (headache rule: bóle głowy + jeden z: nudności, zmęczenie, zawroty, zaburzenia snu na wys. >2 500 m); leczenie: (1) zejście (descent) lub pozostanie na tej samej wysokości; (2) acetazolamid (125–250 mg 2×) → WSKAZANY; (3) deksametazon 4 mg i.m./doustnie; (4) O₂ suplementacja; (5) komorA hiperbaryczna (portable: Gamow bag); HAPE (high altitude pulmonary edema) i HACE (cerebral edema): stany nagłe → NATYCHMIASTOWE ZEJŚCIE.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── REGULACJA ODDYCHANIA (1) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.regulacja, question_type: 'single',
    question_text: 'Ośrodek oddechowy w rdzeniu przedłużonym generuje rytmiczny wzorzec oddychania. Który opis POPRAWNIE przedstawia organizację ośrodków oddechowych?',
    options: [
      { id: 'A', text: 'Ośrodki oddechowe w pniu mózgu: DRG (dorsal respiratory group, rdzeń przedłużony): neurony wdechowe (inspiratory), aktywują przeponę przez n. phrenicus; VRG (ventral respiratory group): neurony wdechowe i wydechowe, aktywne przy głębokim/wymuszonym oddychaniu; Pre-Bötzinger complex (preBötC): pace-maker rytmu oddechowego; pneumotaksyczny (pont): moduluje długość wdechu; apneustyczny (pont): przedłuża wdech', is_correct: true },
      { id: 'B', text: 'Rytm oddychania jest generowany wyłącznie przez kora mózgową (płat czołowy) bez udziału rdzenia przedłużonego; rdzeń przedłużony nie zawiera żadnych neuronów oddechowych; n. phrenicus pochodzi z korzeni C8–T2 i unerwia mięśnie brzucha; apnea podczas snu jest fizjologiczna i bezpieczna', is_correct: false },
      { id: 'C', text: 'Chemoreceptory ośrodkowe (centralne) są zlokalizowane w rdzeniu kręgowym (C3–C5); reagują na zmiany pH krwi tętniczej bezpośrednio przez barierę krew-mózg; obwodowe chemoreceptory (kłębek szyjny, kłębek aortalny) reagują wyłącznie na pCO₂ i nie reagują na pO₂', is_correct: false },
      { id: 'D', text: 'Bodźcami najsilniej stymulującymi oddychanie u zdrowego człowieka jest hipoksja (↓pO₂); wzrost pCO₂ ma marginalne znaczenie; ośrodkowe chemoreceptory reagują bezpośrednio na pO₂ we krwi, a nie na pH płynu mózgowo-rdzeniowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'OŚRODKI ODDECHOWE: RDZEŃ PRZEDŁUŻONY (medulla oblongata): DRG (dorsal respiratory group): jądro pasma samotnego (NTS); neurony Iα (pacemaker) + pump cells; wysyłają impulsy do n. phrenicus (C3-C5) → przepona; VRG (ventral respiratory group): kompleks Bötzingera (ekspiracyjny) + pre-Bötzinger (pacemaker rytmu) + Bötzinger complex; Pre-Bötzinger Complex: odkryty przez Smith (1991); neuronalna "centralna siatka rytmiczna" (CPG, central pattern generator); rytm autonomiczny przez persystentne kanały Na⁺ (I_NaP) + wzajemne hamowanie; uszkodzenie → apnea; MOST (pons): pneumotaksyczny (pontine respiratory group, PRG, parabrachial jądra): hamuje wdech → skraca jego czas → ↑RR; lezja → apneusis (długi wdech z przerwami); apneustyczny ośrodek (dolny most): przedłuża wdech; CHEMORECEPTORY: CENTRALNE: ventral medullary surface (Leschke, M1-M3 obszary); reagują na pH PMR (płyn mózgowo-rdzeniowy); CO₂ łatwo przekracza BBB → hydratacja → H⁺ w PMR; OBWODOWE: (1) kłębki szyjne (carotid bodies, glomus caroticum): największe, 80% oddechowej odpowiedzi obwodowej; reagują na: ↓pO₂ (głównie!), ↑pCO₂, ↓pH, adenozynę, nikotyną; n. Heringa (CN IX) → NTS; (2) kłębki aortalne (aortic bodies): mniejsze; n. depresyjny (CN X); WAŻNOŚĆ BODŹCÓW: u ZDROWEGO: pCO₂ = główny bodziec (przez centralne); hipoksja = słabszy (centralnie tolerowana bo ↓pCO₂ przy hiperwentylacji); u POChP z retencją CO₂: chemoreceptory centralne desensytyzowane na CO₂ → HIPOKSJA staje się dominującym bodźcem (UWAGA: O₂ ostrożnie!).',
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
  console.log(`Seeding batch 5 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
