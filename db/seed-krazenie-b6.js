// Seed batch 6/7 — Fizjologia człowieka: układ krążenia i oddechowy
// Regulacja oddychania (5) + Homeostaza układu krążenia (4)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175'

const S = {
  regulacja:  '83072c48-eb1e-460e-bcf1-4f7ae46a7936',
  homeostaza: 'f79c7a2c-c03e-4ed5-89ca-b01dd0047399',
}

const questions = [

  // ── REGULACJA ODDYCHANIA (5) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.regulacja, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chemoreceptorów i ich roli w regulacji oddychania:',
    options: [
      { id: 'A', text: 'Chemoreceptory ośrodkowe (centralne) zlokalizowane na brzusznej powierzchni rdzenia przedłużonego reagują na wzrost stężenia H⁺ w płynie mózgowo-rdzeniowym (PMR); CO₂ łatwo przenika przez barierę krew-mózg (BBB) → CO₂ + H₂O → H⁺ + HCO₃⁻ → ↓pH PMR → stymulacja oddychania; są 20× bardziej wrażliwe na pCO₂ niż na pO₂', is_correct: true },
      { id: 'B', text: 'Kłębek szyjny (ciało szyjne, carotid body) jest zlokalizowany przy rozwidleniu tętnicy szyjnej (bifurcatio carotis); zawiera komórki glomus type I (komórki główne) z receptorami O₂ (TASK kanały K⁺ wrażliwe na O₂) + komórki podporowe (sustentacular); reaguje na: ↓pO₂, ↑pCO₂, ↓pH, ↑temperatura, ↑K⁺ — wszystkie bodźce aktywności metabolicznej', is_correct: true },
      { id: 'C', text: 'W warunkach spoczynku wentylacja jest regulowana prawie wyłącznie przez obwodowe chemoreceptory (kłębki szyjne); chemoreceptory centralne nie działają w spoczynku — aktywują się tylko podczas wysiłku fizycznego i hipoksji; PMR ma taki sam skład chemiczny jak osocze krwi', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: CENTRALNE CHEMORECEPTORY: Mitchell areas (M1, M2) + retrotrapezoidalne jądro (RTN) + parafacjalne jądro; MECHANIZM: CO₂ przechodzi przez BBB (lipofilny, bez transporterów) → anhydraza węglanowa → H⁺ + HCO₃⁻ → ↓pH PMR; PMR ma mniejszą pojemność buforową niż krew (mniej białek, mniej HCO₃⁻) → większy spadek pH przy tej samej ilości CO₂; ODPOWIEDŹ: 1 mmHg ↑pCO₂ → ~2 l/min ↑wentylacji; przy hiperkapni: centralna wrażliwość dominuje; na hipoksję: centralna wrażliwość słaba (bo N. odnotowuje że pO₂ spada → HAMUJE przez redukowany przepływ neuronalny); potem OBWODOWE dominują. B — Prawda: CAROTID BODY (kłębek szyjny): zaopatrywany przez tętnicę szyjną wewnętrzną; przepływ: ~2 000 ml/100g/min (najwyższy per masa ze wszystkich narządów!) → dlatego reaguje na pO₂ w tętnicy, nie żylne; komórki glomus I (chief cells): zawierają dopaminę, serotonin, ACh, substancję P; TASK1/TASK3 (K₂P kanały, wrażliwe na O₂): hipoksja → zamknięcie → depolaryzacja → ↑Ca²⁺ → uwolnienie neuroprzekaźnika → n. Heringa (CN IX) → NTS → ↑wentylacja; BODŹCE: ↓pO₂ (silny poniżej 60 mmHg!), ↑pCO₂ (synergizm z centralnym), ↓pH, ↑temp, ↑K⁺, hipoglikemia, nikotyna, cyjanki. C — Fałsz: W SPOCZYNKU: CENTRALNE chemoreceptory dominują (70–80% napędu oddechowego); obwodowe: 20–30%; PMR ≠ osocze: pH PMR ~7,32 (niższe niż krew 7,4 przez mniejszą pojemność buforową); HCO₃⁻ PMR: ~22 mmol/l (mniej niż krew 24); białka PMR: ~0,2–0,4 g/l (vs krew 70 g/l!) → mało białkowego buforu → bardziej wrażliwy na CO₂.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.regulacja, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują odruchy oddechowe i modulację oddychania? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Odruch Heringa-Breuera (lung inflation reflex): rozciągnięcie płuc aktywuje mechanoreceptory powolnie adaptujące się (SAR) w mięśniówce dróg oddechowych → n. błędny (X) → zahamowanie wdechu; ochrona przed nadmiernym rozdęciem; u dorosłych działa głównie przy głębokim oddechu (TV > 1,5 l), u noworodków — przy każdym oddechu', is_correct: true },
      { id: 'B', text: 'Receptory J (juxtacapillary receptors, pulmonary C-fibers): zakończenia nerwowe w tkance śródmiąższowej płuc → aktywowane przez: obrzęk płuc, zator tłuszczowy, substancje chemiczne (kapsaicyna, bradykinina, histamina) → duszność + tachypnea + bradykardia odruchowa; podejrzewa się ich rolę w uczuciu duszności w ARDS', is_correct: true },
      { id: 'C', text: 'Hiperwentylacja dobrowolna przed nurkowaniem: ↓pCO₂ → opóźnienie odruchu oddechowego (pCO₂ musi wzrosnąć by stymulować oddychanie) → nurek może dłużej przebywać pod wodą; NIEBEZPIECZEŃSTWO: pO₂ spada do wartości powodujących utratę przytomności zanim pCO₂ osiągnie próg pobudzający oddychanie → "shallow water blackout" (utrata przytomności z hipoksji bez ostrzeżenia)', is_correct: true },
      { id: 'D', text: 'Ćwiczenia fizyczne: wzrost wentylacji jest wyłącznie spowodowany wzrostem pCO₂ we krwi tętniczej; podczas wysiłku paCO₂ wzrasta do 80 mmHg a pO₂ spada do 30 mmHg w krwi tętniczej; neurogeniczne i proprioceptywne mechanizmy nie odgrywają żadnej roli w stymulacji wentylacji podczas wysiłku', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) ODRUCH HERINGA-BREUERA (1868): SAR (slowly adapting stretch receptors) w mięśniówce gładkiej tchawicy i oskrzeli; n. błędny → NTS → hamowanie DRG → skraca wdech; RAR (rapidly adapting receptors = receptory irytacji): reagują na pył, dym, gazy drażniące → kaszel, kichanie, skurcz oskrzeli; u noworodka: odruch H-B przy każdym oddechu (ważny regulaor), dorosły: dopiero przy > 1-1,5 l TV. (B) RECEPTORY J (Paintal 1955): unmyelinated C-fibers; interstitium alveolarne blisko kapilar; aktywacja: obrzęk, zatorowość, PLA₂, kapsaicyna; →szybki oddech + duszność + odruch sercowy (bradykardia, hipotensja); "diving reflex"? Nie; mechanizm duszności przy obrzęku płuc może obejmować J. (C) "SHALLOW WATER BLACKOUT" (hypoxia of ascent): hyperventylacja → ↓pCO₂ (np. 40→20 mmHg) → ↓impuls do oddychania; p O₂ spada do 50 mmHg zanim CO₂ wzrośnie do progu → mózg traci świadomość bez uprzedniej duszności; NIE mylić z "deep water blackout" (inny mechanizm: wyparcie O₂ przez N₂ przy nurkach na wstrzymanym oddechu głęboko). (D) fałsz: WENTYLACJA PODCZAS WYSIŁKU: faza I (<10 s od startu): NEUROLOGICZNA — sygnały z kory ruchowej (corollary discharge) + proprioceptory mięśni i stawów → natychmiastowa hiperwentylacja ZANIM pCO₂ się zmieni; paCO₂ i paO₂ pozostają prawie normalne podczas umiarkowanego wysiłku dzięki precyzyjnej regulacji; faza II: metaboliczne: lekkie ↑pCO₂ + ↓pH → chemoreceptory; przy maksymalnym: acidosis (mleczanowa) → hiperwentylacja (OBNIŻENIE paCO₂ < 40 mmHg!).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.regulacja, question_type: 'single',
    question_text: 'Bezdech senny (sleep apnea) jest zaburzeniem snu z powtarzającymi się epizodami bezdechu. Który opis POPRAWNIE różnicuje typy bezdechu i ich konsekwencje?',
    options: [
      { id: 'A', text: 'OSA (obstructive sleep apnea): niedrożność górnych dróg oddechowych (zwiotczenie mięśni gardła podczas snu) → zatrzymanie przepływu powietrza mimo ruchów oddechowych → ↓pO₂ + ↑pCO₂ → mikroprzebudzenia + hiperkapnia + hipoksja; CSA (central sleep apnea): brak napędu oddechowego z ośrodka → zatrzymanie przepływu ORAZ ruchów klatki; leczenie OSA: CPAP (continuous positive airway pressure)', is_correct: true },
      { id: 'B', text: 'OSA jest wywołana przez nadmiar napędu ośrodkowego oddychania; podczas bezdechu napęd oddychania jest zbyt silny; leczenie polega na podaniu leków uspokajających (benzodiazepin) które zmniejszają nadaktywność ośrodka; CPAP jest przeciwwskazany w OSA', is_correct: false },
      { id: 'C', text: 'CSA (centralny bezdech) jest spowodowany zatkaniem nosa lub migdałków; mięśnie klatki piersiowej aktywnie pracują, ale powietrze nie może przejść; jest identyczny z OSA pod względem mechanizmu; CPAP jest jedynym leczeniem OSA i CSA', is_correct: false },
      { id: 'D', text: 'Bezdech senny nie ma żadnych konsekwencji zdrowotnych; nie wpływa na ciśnienie tętnicze, ryzyko sercowo-naczyniowe ani jakość snu; SpO₂ podczas bezdechu zawsze pozostaje > 95%; epizody bezdechu trwające < 5 minut są uważane za bezpieczne', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'OSA (Obstructive Sleep Apnea): EPIDEMIOLOGIA: ~10–30% populacji dorosłych (mężczyźni > kobiety); ryzynnik: otyłość (↑tkanki tłuszczowej w gardle), retrognacja, przerost migdałków, alkohol; PATOFIZJOLOGIA: REM (faza snu) → maksymalne zwiotczenie mięśni → zapadanie gardła → okluzja → mimo ruchów klatki przepływ = 0; wzrost pCO₂ + ↓pO₂ → pobudzenie → przywrócenie tonu gardła → powrót oddechu → często głośne chrapanie; AHI (apnea-hypopnea index): liczba epizodów/godzinę; łagodne: 5–14; umiarkowane: 15–30; ciężkie: >30; KONSEKWENCJE: nadciśnienie tętnicze (nocne skoki BP), ↑ryzyko AF, udar, DM2, depresja, EDS (excessive daytime sleepiness); poligraphia snu (PSG) = złoty standard diagnozy; LECZENIE OSA: CPAP (1981, Sullivan): 6–10 cmH₂O ciągłe dodatnie ciśnienie utrzymuje drożność gardła; alternatywy: aparat wysuwający żuchwę (MAD), zabieg chirurgiczny (UPPP); CSA (Central Sleep Apnea): brak impulsu z Pre-Bötzingera; przyczyny: NS (↑pCO₂ → Cheyne-Stokes breathing), udar, opioidowe leki, wysokość; Cheyne-Stokes: narastanie-wygaszanie-pauza → cykl ~1 min; leczenie CSA: acetazolamid, CPAP/ASV (adaptive servo-ventilation).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.regulacja, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wpływu pCO₂ i pH na układ naczyniowy mózgu i płuc:',
    options: [
      { id: 'A', text: 'Mózg: wzrost pCO₂ (hiperkapnia) → wazodylatacja naczyń mózgowych → ↑CBF (cerebral blood flow); mechanizm: CO₂ → H⁺ → rozkurcz mięśniówki gładkiej tętniczek mózgowych; hipokapnia (hiperwentylacja) → wazokonstrykcja mózgowa → ↓CBF → zawroty głowy, omdlenia; stosowane klinicznie: kontrolowana hiperwentylacja przy ↑ICP (ciśnienie wewnątrzczaszkowe) → ↓CBF → ↓ICP przejściowo', is_correct: true },
      { id: 'B', text: 'Płuca: odwrotny efekt — wzrost CO₂ (lokal) → wazokonstrykcja tętniczek płucnych (HPV, hipoksyczna wazokonstrykcja płucna jest odpowiedzią na ↓pO₂, nie ↑pCO₂; hiperkapnia płucna ma marginalny efekt na układ płucny); O₂: ↓pO₂ lokalne → HPV → przekierowanie krwi od źle wentylowanych do dobrze wentylowanych obszarów', is_correct: true },
      { id: 'C', text: 'Hiperwentylacja podczas napadu paniki powoduje hiperkapnię (wzrost pCO₂) → skurcz naczyń obwodowych → mrowienie rąk i nóg (parestezje) → tężyczka z powodu wzrostu stężenia Ca²⁺ zjonizowanego; leczenie polega na podaniu suplementów wapnia dożylnie', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: NACZYNIA MÓZGOWE i CO₂: CBF jest bardzo wrażliwe na paCO₂: 1 mmHg ↑paCO₂ → ~4% ↑CBF (zakres: paCO₂ 20–80 mmHg); KLINIKA: ICP ↑ (uraz głowy, guz): kontrolowana hiperwentylacja paCO₂ 30–35 mmHg → ↓CBF → ↓objętości krwi mózgowej → ↓ICP; ale tylko przejściowo (mózg adaptuje pH PMR po 24–48 h); rutynowe hiperwentylacja do <30 mmHg → niedokrwienie mózgu → PRZECIWWSKAZANA; paCO₂ < 20 mmHg → silna wazokonstrykcja → zawał mózgu; w normokarbii (paCO₂ 35–45 mmHg) CBF ≈ 750 ml/min; RÓŻNICA mózg vs płuca: CO₂ → wazodylatacja MÓZGOWA (dostarcza O₂ + usuwa CO₂), wazokonstrykcja PŁUCNA NIE (płuca: HPV na ↓O₂); B — Prawda: HPV (hypoxic pulmonary vasoconstriction, Euler-Liljestrand reflex): pO₂ < 60 mmHg (lub pO₂ pęcherzyków < 70 mmHg) → zamknięcie K⁺-kanałów (TASK, Kv) w PASMC → depolaryzacja → ↑Ca²⁺ (L-type VGCC + RyR) → skurcz; mediatory: ET-1 (endotelina, wazokonstryktor), TXA₂; hamowane przez: NO, PGI₂ (prostacyklina) = wazodylatory; ROLA: regionalna → dystrybucja przepływu do lepiej wentylowanych obszarów (↑V/Q); globalna hipoksja (POChP, wysokość) → uogólniony HPV → PAH; C — Fałsz: hiperwentylacja podczas paniki: ↑RR → ↑CO₂ usuwanie → HIPO-kapnia (↓pCO₂) → zasadowica oddechowa (↑pH) → ↑wiązanie Ca²⁺ z albuminami (pH↑ → Alb bardziej ujemna → wiąże więcej Ca²⁺) → ↓Ca²⁺ zjonizowanego (hypocalcaemia) → ↑pobudliwość nerwów → parestezje (mrowienie) + tężyczka (skurcze); leczenie: oddychanie do torebki (↑pCO₂) lub kontrolowane spowolnienie oddechu; NIGDY Ca²⁺ dożylnie (Ca²⁺ jest prawidłowe w sensie całkowitego).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.regulacja, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują regulację oddychania podczas snu i wysiłku fizycznego? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Podczas snu NREM: wentylacja ↓ (~15% vs czuwanie) + paCO₂ wzrasta o 2–8 mmHg; ton mięśni gardła ↓ → ryzyko OSA; napęd oddechowy jest prawie wyłącznie chemiczny (CO₂); kontrola behawioralna (korowa) jest znoszona przez sen; dlatego apnea centralna = brak napędu → zatrzymanie oddechu', is_correct: true },
      { id: 'B', text: 'Wysiłek fizyczny: fazowy wzrost wentylacji jest proporcjonalny do obciążenia; podczas submaksymalnego wysiłku: paCO₂ i paO₂ pozostają prawie normalne (izokapsnia); dopiero przy intensywności ponad progiem mleczanowym (anaerobic threshold) → ↑CO₂ z buforowania kwasu mleczanowego + ↓pH → hiperwentylacja (V̇E wzrasta więcej niż VO₂)', is_correct: true },
      { id: 'C', text: 'Wysiłek a V̇E: V̇E/VO₂ ratio (wentylacyjny równoważnik dla O₂) i V̇E/VCO₂ ratio są parametrami CPET (cardiopulmonary exercise test); CPET wykrywa: niewydolność serca, POChP, PAH; V̇E/VCO₂ slope > 34 = wskaźnik złego rokowania w NS; AT (anaerobic threshold) przesuwa się do wyższych wartości VO₂ przy treningu aerobowym', is_correct: true },
      { id: 'D', text: 'Depresja oddechowa przez opioidy: morfina i inne opioidy działają na receptory μ (MOR) w ośrodku oddechowym (preBötzinger, VRG) → ↓automatyzm oddechowy → ↓RR + ↓TV + centralna apnea; nalokson (antagonista opioidów) odwraca depresję; nadal stymulacja CO₂ przez chemoreceptory działa, więc sedacja opioidowa nigdy nie prowadzi do śmierci przez bezdech', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) SEN i ODDYCHANIE: NREM (non-REM, fazy 1-3): ↓RR, ↑TV, regularny oddech; paCO₂ ↑2–3 mmHg (NREM) do ↑8 mmHg (SWS); REM: nieregularny (podobny do czuwania), atonia mm. szkieletowych (NIE przepony); kontrola BEHAWIORALNA (korowa) podtrzymuje wentylację podczas czuwania (możemy świadomie kontrolować oddech); w śnie ona gaśnie → tylko chemiczna; dlatego depresja oddechowa przez opioidy groźniejsza w śnie. (B) WYSIŁEK a paCO₂: przy submaximal: "isokapnic exercise" — proporcjonalny wzrost V̇E i VCO₂ → paCO₂ stały; powyżej AT (anaerobic threshold, "VT2"): mleczan → H⁺ + HCO₃⁻ → H₂CO₃ → CO₂↑↑ ("VCO₂ excess") → hiperwentylacja → paCO₂ spada poniżej 40 → "hyperventilatory excess CO₂ production". (C) CPET (cardiopulmonary exercise test): złoto standard oceny wydolności; VO₂ max (pVO₂) przy NS: < 12 ml/kg/min = wskazanie do transplantacji; V̇E/VCO₂ slope: przy NS i PAH > 34 (bad prognosis — Chua 1997); przy POChP: V̇E/VO₂ ↑↑ przez ↑Vd (przestrzeń martwa); treningi: AT wzrasta (Paffenbarger, Blair: "physical fitness" → mortality). (D) fałsz: OPIOIDOWA DEPRESJA ODDECHOWA: μ-receptory w preBötzingera → hiperpolaryzacja → ↓spontanicznych wyładowań → ↓RR → apnea; CO₂-stymulacja JEST CZĘŚCIOWO TŁUMIONA przez opioidy (↓wrażliwości chemoreceptorów); dlatego śmierć przez opioidy NIE jest niemożliwa i jest GŁÓWNĄ PRZYCZYNĄ przedawkowania (ponad 100 000 zgonów/rok w USA z fentanyl, oxycontin); nalokson (IV/IN): kompetycyjny antagonista μ → odwraca w ciągu minut; t₁/₂ krótki → może wymagać powtórzeń przy długich opioidach.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── HOMEOSTAZA UKŁADU KRĄŻENIA (4) ────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.homeostaza, question_type: 'single',
    question_text: 'Układ renina–angiotensyna–aldosteron (RAA) jest kluczowym mechanizmem regulacji ciśnienia tętniczego i objętości płynów ustrojowych. Który opis POPRAWNIE wyjaśnia kaskadę RAA?',
    options: [
      { id: 'A', text: 'Komórki przykłębuszkowe nerki (juxtaglomerular cells, JGC) wydzielają reninę przy: ↓ciśnienia tętniczego (stretch receptors), ↓NaCl w plamce gęstej (macula densa), aktywacji β₁-receptorów przez NA; renina → angiotensynogen (wątroba) → angiotensyna I → ACE (płuca) → angiotensyna II → AT₁R → aldosteron (nadnercza) + wazokonstrykcja + ↑pragnienia + ↑ADH + ↑reabsorpcji Na⁺', is_correct: true },
      { id: 'B', text: 'Renina jest wydzielana przez korę nadnerczy; angiotensynogen jest produkowany przez płuca; ACE (enzym konwertujący angiotensynę) działa wyłącznie w wątrobie; aldosteron jest produkowany przez przysadkę i powoduje wydalanie Na⁺ z moczem; leki ACE-I (np. lisinopril) zwiększają ciśnienie tętnicze', is_correct: false },
      { id: 'C', text: 'Angiotensyna II działa wyłącznie na nadnercza powodując wydzielanie adrenaliny; nie ma bezpośredniego działania wazokonstrykcyjnego; AT₁R blokery (ARB, np. losartan) powodują zwiększenie ciśnienia; aldosteron wydzielany przez serce reguluje rytm sercowy', is_correct: false },
      { id: 'D', text: 'RAA jest aktywowany przy wysokim ciśnieniu tętniczym i nadmiarze Na⁺; celem jest dalszy wzrost ciśnienia i retencja Na⁺; inhibitory ACE i ARB są stosowane do obniżania ciśnienia przez nasilenie działania RAA; renina jest produkowana przez wątrobę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'UKŁAD RAA (renina-angiotensyna-aldosteron): BODŹCE DO WYDZIELANIA RENINY: (1) ↓MAP → receptor nacisku (baroreceptor) w aferente arteriole; (2) ↓NaCl w macula densa (sensor cewki dystalnej); (3) β₁-sympatyczny (NA z nerwów współczulnych); KASKADA: renina (aspartyl protease z JGC) → cięcie angiotensynogenu (452 aa, z wątroby) → angiotensyna I (10 aa, obojętna) → ACE (angiotensin-converting enzyme, Zn²⁺-peptydaza, głównie w płucach/śródbłonku) → angiotensyna II (8 aa, Asp-Arg-Val-Tyr-Ile-His-Pro-Phe); DZIAŁANIE Ang II: AT₁R (Gq → ↑Ca²⁺, Gi → ↓cAMP): (1) wazokonstrykcja tętniczek (↑TPR → ↑BP); (2) kora nadnerczy → aldosteron (mineralokortykoid) → cewka distalna + zbiorcza → ↑reabsorpcja Na⁺ + H₂O, ↑wydalanie K⁺ → ↑wolemia; (3) podwzgórze → ↑pragnienie + ↑ADH; (4) serce → ↑HR, ↑kontraktylność; AT₂R: wazodylatacja, antyproliferacja, apoptoza; FARMAKOLOGIA: ACE-I (captopril, lisinopril, ramipril): blokuje → ↑bradykinina (kaszel!), ↓Ang II; ARB (losartan, valsartan, olmesartan): blokuje AT₁R; ARNI (sakubitril+valsartan): neprilysin + ARB; alikiren (inhibitor reniny bezpośredni).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeostaza, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ADH (wazopresyny) i peptydu natriuretycznego ANP/BNP w regulacji ciśnienia:',
    options: [
      { id: 'A', text: 'ADH (wazopresyna, AVP): produkowana przez neurony jądra nadwzrokowego i przykomorowego podwzgórza → magazynowana i wydzielana z tylnego płata przysadki; bodźce: ↑osmolalność osocza (osmoreceptory podwzgórza), ↓objętości krwi (baroreceptory); działa na: V2R w cewce zbiorczej (aquaporiny-2 → ↑reabsorpcja wody), V1R w naczyniach (wazokonstrykcja)', is_correct: true },
      { id: 'B', text: 'ANP (atrial natriuretic peptide): wydzielany przez przedsionki serca przy rozciągnięciu (↑objętości → ↑ciśnienia napełniania); efekty: wazodylatacja + ↑wydalania Na⁺ i wody przez nerki (natriureza) + ↓reniny, ↓aldosteronu + ↓ADH; BNP (brain natriuretic peptide) wydzielany głównie przez komory serca przy przeciążeniu ciśnieniowym/objętościowym; NT-proBNP jest biomarkerem niewydolności serca', is_correct: true },
      { id: 'C', text: 'Moczówka prosta (diabetes insipidus): centralny typ (↓ADH z przysadki) i nefrogenny (↓odpowiedź nerek na ADH); objawy: wielomocz (>3 l/dobę, hipotoniczny mocz izoosmotyczny z osoczem ~300 mOsm/kg) + polidypsja; leczenie centralne: desmopresyna (DDAVP, analog ADH); SIADH (zespół nieadekwatnego wydzielania ADH) = odwrotność: ↑ADH → retencja wody → hiponatremia + mocz hipertoniczny + normovolemia', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: ADH (9 aa peptyd: Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly-NH₂, disulfidek Cys1-Cys6): oś podwzgórzowo-przysadkowa; BODŹCE: osmolalność (główny): osmoreceptory OVLT + SFO + PVN → przy Posm > 285 mOsm/kg → ADH; objętość (wtórny): baroreceptory szyjne i aortalne → ↓objętości (+10–15% zmiany) → ADH (tu ważniejszy AT II); ból, nudności, stres, opioidy → ADH; alkohol → hamuje ADH; RECEPTORY: V2R (cewka zbiorcza, Gs → cAMP → PKA → fosforylacja AQP2 → exocytoza AQP2 do luminalnej błony → ↑przepuszczalność na wodę); V1aR (naczynia, Gq → ↑Ca²⁺ → wazokonstrykcja = "vasopressin"); V1bR (przysadka, ACTH). B — Prawda: ANP/BNP (natriuretic peptides): ANP: 28 aa, geny NPPA; BNP: 32 aa (plus NT-proBNP fragment N-końcowy), geny NPPB; receptor: NPR-A (GC) → cGMP → wazodylatacja; w nerkach: ↑GFR (rozszerzenie af., zwężenie ef. arteriole) + ↓reabsorpcji Na⁺ w cewce zbiorczej; NT-proBNP: dłuższy t₁/₂ (60–120 min vs BNP 20 min) → lepszy marker; NS (heart failure): ↑ciśnienie końcoworozkurczowe → ↑ BNP > 100 pg/ml = NS; > 400 = ciężka NS. C — Prawda: DI centralny: uraz głowy, guz (craniopharyngioma), operacja przysadki, zapalenie mózgu; desmopresyna: analog ADH, tylko V2R; DI nefrogenny: mutacje AVPR2 (V2R) lub AQP2; leczenie: tiazyd + amilorid lub indometacyna; TEST PRAGNIENIA (water deprivation): norma → mocz hipertoniczny; DI → mocz hipotoniczny; desmopresyna: centralny → mocz się zagęszcza; nefrogenny → brak odpowiedzi; SIADH (Schwartz-Bartter 1967): przyczyny: mała komórka płuc, CNS, leki (SSRI, karbamazepina, cyklofosfamid), niedoczynność tarczycy; objawy hiponatremii (<120 mEq/l): encefalopatia, drgawki; leczenie: restrykcja płynów, toliwaptan (V2R antagonista).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeostaza, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują mechanizmy długoterminowej regulacji ciśnienia tętniczego? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Nerka jako główny organ długoterminowej regulacji BP: pressure-natriuresis (Guyton): wzrost MAP → ↑GFR + ↓reabsorpcji Na⁺ → ↑wydalania Na⁺ i wody → ↓objętości krwi → ↓CO → ↓MAP (pętla ujemna); przy nadciśnieniu nerki "resetują" punkt nastawczy na wyższy MAP → wydalają Na⁺ dopiero przy wyższym ciśnieniu', is_correct: true },
      { id: 'B', text: 'Aldosteron: mineralokortykoid syntetyzowany w warstwie kłębkowatej kory nadnerczy; zwiększa transkrypcję α- i γ-podjednostek kanału ENaC (epithelial Na⁺ channel) + Na⁺/K⁺-ATPazy w cewce zbiorczej → ↑reabsorpcja Na⁺ → ↑wolemia → ↑BP; hiperkaliemia i Ang II są głównymi bodźcami do wydzielania aldosteronu', is_correct: true },
      { id: 'C', text: 'Układ sympatyczny i długoterminowa regulacja BP: chroniczna aktywacja sympatyczna (stres, otyłość, obturacyjny bezdech) → ↑reniny (β₁ na JGC) + bezpośrednia wazokonstrykcja + ↑tubularnej reabsorpcji Na⁺ → nadciśnienie neurogeniczne; denerwacja nerekalsympatyczna (renal denervation) = eksperymentalna metoda leczenia nadciśnienia opornego', is_correct: true },
      { id: 'D', text: 'Hiperkaliemia (↑K⁺) hamuje wydzielanie aldosteronu; spożycie diety bogatej w sól (Na⁺) hamuje wydzielanie reniny; leki moczopędne oszczędzające potas (spironolakton, eplerenon) zwiększają BP przez blokowanie aldosteronu; Conn syndrome (pierwotny hiperaldosteronizm) powoduje hiperkaliemię i zasadowicę metaboliczną', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) PRESSURE-NATRIURESIS (Guyton-Coleman model 1972): nerki jako "infinite feedback gain controller" dla ciśnienia; bez nerek → ostry wzrost BP bez kompensacji; z nerkami → każdy czynnik podnoszący BP musi przestawić nerki na wyższy poziom retencji (lub ↑GFR); PATOGENEZA NADCIŚNIENIA PIERWOTNEGO: kombinacja genetic factors (RAAS geny, kanały Jon.) + środowisko (sól, otyłość, stres) → przestawienie nerekowego setpointu; sól-wrażliwe nadciśnienie (salt-sensitive hypertension): 50% chorych z HTN; ↑spożycie soli → retencja → ↑BP; redukcja soli → ↓BP ~5/3 mmHg. (B) ALDOSTERON: synteza: cholesterol → pregnenolon → progesteron → DOC → kortykosteron → aldosteron (aldosteron synthase CYP11B2); zona glomerulosa; REGULACJA: (1) Ang II (przez AT₁R → ↑Ca²⁺ → StAR → ↑CYP11B2); (2) hiperkaliemia: K⁺ > 5 mEq/l → depolaryzacja → ↑Ca²⁺ → aldosteron; (3) ACTH: marginalne znaczenie; ENaC: luminal membrane; aldosteron → ↑mRNA ENaC α,β,γ + SGK1 (serine-threonine kinase) → ↑membrane expression + ↓ubikwitynacja ENaC (Nedd4-2). (C) NEUROGENICZNE NADCIŚNIENIE: obturacyjny bezdech senny → hipoksemia + hipersympatykotonia → ↑reniny + ↑renal Na⁺ retention → HTN; otyłość: ↑leptin → centralnie ↑sympatykotonia; renal denervation: catheter-based RF ablation of renal nerves → ↓BP ~5–10 mmHg (SYMPLICITY 1/2 → niezwiązane z placebo; SIMPLICITY-HTN-3: brak efektu; nowsze sham-controlled: mieszane). (D) fałsz: HIPERKALIEMIA STYMULUJE (nie hamuje) aldosteron → hyperK → ↑ aldosteron → ↑K⁺ wydalanie (ochrona); dieta bogata w NaCl hamuje renin (prawda!); spironolakton = antagonista aldosteronu (blokuje MR) → ↓reabsorpcji Na⁺ → ↑natriureza → ↓BP (nie ↑BP); pierwotny hiperaldosteronizm (Conn): ↑aldosteron → ↑Na⁺ retencja + ↑K⁺ wydalanie → HIPOKALIEMIA (nie hiperkaliemia!) + zasadowica metaboliczna (H⁺ wymieniane za K⁺).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeostaza, question_type: 'single',
    question_text: 'Krótkoterminowa regulacja ciśnienia tętniczego angażuje odruch z baroreceptorów. Który scenariusz POPRAWNIE ilustruje działanie tego odruchu?',
    options: [
      { id: 'A', text: 'Nagłe wstanie z pozycji leżącej (ortostatyzm): grawitacja → przesunięcie 500–700 ml krwi do kończyn dolnych → ↓powrotu żylnego → ↓CO → ↓MAP → baroreceptory w zatoce szyjnej i łuku aorty zmniejszają wyładowania → NTS → ↑tonu współczulnego (↑HR + ↑TPR) + ↓tonu nerwu błędnego → kompensacja MAP w ciągu 15–30 s; odruch ten zawodzi przy omdleniu ortostatycznym', is_correct: true },
      { id: 'B', text: 'Nagłe wstanie → ↑ciśnienia → baroreceptory ↑wyładowania → bradykardia + ↓TPR → MAP spada; ortostatyzm nie jest wyzwaniem dla baroreceptorów; nerw błędny jest odpowiedzialny za przyspieszenie akcji serca w odpowiedzi na ortostatyzm; omdlenia ortostatyczne są spowodowane nadczynnością baroreceptorów', is_correct: false },
      { id: 'C', text: 'Baroreceptory w zatoce szyjnej: wysokoczęstotliwościowe włókna A (szybkie) wyładowują się wyłącznie przy wzroście ciśnienia; gdy BP spada, nie mają żadnej aktywności i nie wysyłają żadnych sygnałów do NTS; odruch z baroreceptorów działa tylko przy ciśnieniu skurczowym > 200 mmHg', is_correct: false },
      { id: 'D', text: 'Adrenoreceptory: α₁ w mięśniówce gładkiej naczyń → wazodylatacja; β₁ w sercu → bradykardia; β₂ w oskrzelach → skurcz; fenylefryna (α₁-agonista) obniża BP; metoprolol (β₁-bloker) przyspiesza akcję serca; propranolol (β₁-bloker) rozszerza naczynia wieńcowe', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ODRUCH Z BARORECEPTORÓW — ortostatyzm: BARORECEPTORY: Mechanoreceptory (stretch receptors) w: zatoka szyjna (sinus caroticus) = największa wrażliwość; łuk aorty; n. Heringa (CN IX) → NTS; n. depresyjny aorty (CN X) → NTS; WŁAŚCIWOŚCI: aktywne przy MAP 50–200 mmHg (poza tym zakresem saturacja lub milczenie); adaptują się powoli (resetują w ciągu 1–2 dni przy nowym poziomie BP = "baroreceptor resetting" → dlatego nie korygują przewlekłego nadciśnienia); wyładowują w sposób ciągły: wyższe MAP → więcej wyładowań; niższe MAP → mniej; ORTOSTATYZM: 500–800 ml krwi → kończyny dolne + splanchnik; ↓CVP → ↓SV (Frank-Starling) → ↓CO → ↓MAP; ODRUCH: ↓baroreceptor firing → NTS (hamowanie CVLM) → ↑RVLM sympatyczne → ↑HR (przez SA node β₁) + ↑TPR (wazokonstrykcja α₁ tętniczek) + ↑RV (żylny tonus ↑ → ↑powrót) + ↑reniny (β₁ JGC); kompensacja w 15–30 s; OMDLENIE ORTOSTATYCZNE (postural hypotension): niewystarczająca kompensacja: u starszych, w odwodnieniu, przy autonomicznej neuropatii (Parkinsona, DM), po lekach (α₁ blokery, diuretyki, azotan); leczenie: elastyczne pończochy, sól, fludrokortyzon, midodrine (α₁-agonista); ADRENORECEPTORY (D — fałsz): α₁: wazokonstrykcja (NA > Adr); β₁: ↑HR + ↑inotropia (Adr ≈ NA); β₂: bronchodilatacja + wazodylatacja (Adr >> NA); fenylefryna = α₁ agonista → wazokonstrykcja → ↑BP (nie ↓BP!); metoprolol = β₁-bloker → ↓HR (nie tachykardia).',
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
  console.log(`Seeding batch 6 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
