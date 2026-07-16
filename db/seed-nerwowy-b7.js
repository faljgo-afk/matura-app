// Seed batch 7/7 — Fizjologia człowieka: układ nerwowy i hormonalny
// Oś podwzgórze-przysadka (2) + Homeostaza hormonalna (6) = 8 questions

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'a4962fbb-433e-47f2-a241-1562fc6ecae4'

const S = {
  os:        'c2486387-820e-478f-8142-de6c5bd8bafd',
  homeo:     'f87eddfa-5288-4e00-a08a-c980645f560f',
}

const questions = [

  // ── OŚ PODWZGÓRZE-PRZYSADKA (2) ──────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.os, question_type: 'single',
    question_text: 'Podwzgórze pełni funkcję nadrzędnego centrum integracji hormonalnej. Który opis POPRAWNIE charakteryzuje jądra podwzgórza i ich role neuroendokrynne?',
    options: [
      { id: 'A', text: 'PODWZGÓRZE — JĄDRA I FUNKCJE: (1) PVN (nucleus paraventricularis): CRH (do przysadki) + OT (do neurohypophysis) + ADH (mniejsza ilość); (2) SON (nucleus supraopticus): ADH (główne) + OT; (3) ARC (nucleus arcuatus): GHRH + somatostatyna + NPY/AgRP (↑apetyt) + POMC/CART (↓apetyt) + kisspeptyna (KNDy neurony → GnRH); (4) VMH (ventromedial): centrum sytości; (5) LH (lateral hypothalamic area): centrum głodu; (6) SCN (suprachiasmatic nucleus): zegar dobowy (otrzymuje sygnał z siatkówki przez RHT); (7) PMH (posterior): termoregulacja (ciepło)', is_correct: true },
      { id: 'B', text: 'Jądro nadwzrokowe (SON) produkuje CRH i wysyła je do przysadki tylnej; jądro przykomorowe (PVN) produkuje wyłącznie ADH; SCN (suprachiasmatyczne) reguluje głód i sytość; kisspeptyna hamuje wydzielanie GnRH; VMH jest centrum głodu a LH jest centrum sytości; ARC nie uczestniczy w regulacji apetytu; somatostatyna jest produkowana wyłącznie przez trzustkę', is_correct: false },
      { id: 'C', text: 'Podwzgórze wydziela hormony bezpośrednio do krążenia ogólnego (nie do układu wrotnego); CRH jest produkowane przez przysadkę a nie podwzgórze; GHRH hamuje wydzielanie hormonu wzrostu; NPY/AgRP neurony zmniejszają apetyt; SCN reguluje temperatura ciała a PMH reguluje rytm dobowy; kisspeptyna jest wydzielana wyłącznie przez jajniki', is_correct: false },
      { id: 'D', text: 'Podwzgórze nie ma bezpośredniego połączenia z przysadką; CRH i TRH są produkowane przez przysadkę przednią; ARC (nucleus arcuatus) reguluje wyłącznie równowagę kwasowo-zasadową; somatostatyna stymuluje wydzielanie GH i insuliny; kisspeptyna hamuje oś gonadalną; POMC/CART neurony zwiększają apetyt', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PODWZGÓRZE — SZCZEGÓŁY REGULACJI APETYTU: ANOREKSYGENNE (↓apetyt): POMC/CART → α-MSH (MC4R + MC3R) + β-endorfina; leptyna (adipocyty) → ↑POMC + ↓NPY/AgRP; insulina → ↑POMC; GLP-1 → NTS → ↑POMC; PYY (L-komórki jelita) → ↓NPY/AgRP; OREKSYGENNE (↑apetyt): NPY/AgRP → MC4R/MC3R antagonizm + ↓α-MSH efektu; grelina (żołądek) → GHSR → ↑NPY/AgRP + ↑GHRH; LEPTYNOPORNOŚĆ: otyłość → ↑leptyna ale ↓leptynowe sygnalizowanie (↓lepR, ↓STAT3 w ARC) → nieprzełamany apetyt mimo ↑leptyny; FTO gen (fat mass and obesity associated): polimorfizmy → ↓postprandialna odpowiedź PYY → ↑apetyt; KISSPEPTYNA (KISS1): KNDy neurony (ARC): Kisspeptyna + NKB (neurokinin B) + dynorfina → pulsacyjne GnRH; KISS1R (GPR54) na GnRH neuronach → ↑GnRH; leptyna + E2 → ↑kisspeptyna (pozytywne dla LH surge); SCN RYTM DOBOWY: światło → retina → retinohypothalamic tract (RHT) → SCN → szyszynka (↓melatonina w dzień); CLOCK/BMAL1 (transkrypcja) + PER/CRY (represja) → pętla ~24h; melatonin receptory (MT1, MT2) → faza synchronizacja.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.os, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują układ wrotny podwzgórze-przysadka i regulację hormonów tropowych? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'UKŁAD WROTNY (PORTAL SYSTEM): arteria hypophysialis superior → pierwotna sieć kapilarna (eminentia mediana) → żyły wrotne → wtórna sieć kapilarna (pars distalis) → żyły hypophysiales → sinus cavernosus; neurony peptydergiczne (CRH, TRH, GnRH, GHRH, somatostatyna, dopamina) wydzielają hormony do naczyń wrotnych → szybki transport do adenohypophysis → pulsacyjne wydzielanie hormonów tropowych; eminentia mediana: "otwarta" bariera krew-mózg (BBB permeable) = circumventricular organ → hormony i cytokiny mogą wnikać', is_correct: true },
      { id: 'B', text: 'HORMONY PODWZGÓRZA I ICH RECEPTORY: TRH (3 aa tripeptyd) → TRH-R (Gq) → ↑PLC → ↑IP₃ → ↑Ca²⁺ → ↑TSH + ↑PRL; CRH (41 aa) → CRH-R1 (Gs) → ↑cAMP → ↑ACTH; GHRH (44 aa) → GHRH-R (Gs) → ↑cAMP → ↑GH; somatostatyna (SRIF, 14/28 aa) → SSTR1-5 (Gi) → ↓cAMP → ↓GH i ↓TSH i ↓glukagon/insulina; dopamina → D2R (Gi) → ↓cAMP → ↓PRL; GnRH (10 aa) → GnRH-R (Gq) → ↑Ca²⁺ → ↑FSH + ↑LH (pulsacyjne!)', is_correct: true },
      { id: 'C', text: 'UJEMNE SPRZĘŻENIE ZWROTNE (NEGATIVE FEEDBACK): kortyzol → GR (glucocorticoid receptor) w PVN + przysadka → ↓CRH + ↓ACTH (szybkie: membrany; wolne: transkrypcja); T3/T4 → TRβ2 w podwzgórzu + TR w przysadce → ↓TRH + ↓TSH; E2/T/P4 → ER/PR/AR w ARC + przysadka → ↓GnRH + ↓LH/FSH (poza pozytywnym LH surge); IGF-1 → ↓GHRH + ↑somatostatyna + ↓GH (krótkie pętle); ULTRAKRÓTKIE PĘTLE: GnRH → ↓własne neurony GnRH; ACTH → ↓korykotropy (autokrynne)', is_correct: true },
      { id: 'D', text: 'Układ wrotny podwzgórze-przysadka przewodzi impulsy elektryczne a nie hormony; TRH stymuluje wydzielanie GH i gonadotropin (FSH/LH) a nie TSH i PRL; CRH-R1 jest sprzężony z białkiem Gi → ↓cAMP; somatostatyna stymuluje wydzielanie GH i insuliny; dopamina stymuluje wydzielanie PRL przez D2R; BBB jest nieprzepuszczalna w eminentia mediana (brak CVOs)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) CVOs (circumventricular organs): obszary bez typowej BBB → permeable dla dużych cząsteczek; w podwzgórzu: OVLT (organum vasculosum laminae terminalis) — osmoreceptory dla ADH; SFO (subfornical organ) — receptor angiotensyny II; area postrema (medulla): trigger zone dla wymiotów; (B) SOMATOSTATYNA RECEPTORY (SSTR1-5): SST2A/SST5 w przysadce (hamuje GH + TSH); SST2/5 w trzustce (hamuje insulinę + glukagon); OKTREOTID: selektywny SSTR2/5 → leczenie akromegalii + VIPoma + karcinoid + Zollinger-Ellison; PASIREOTID: pan-SSTR (1-5) → choroba Cushinga; LANREOTID: SST2 — ↓GH w akromegalii; GHRELIN vs GHRH: GHRLIN (28 aa, ghrelin-O-acyl transferaza modyfikuje Ser3 n-oktanoil): GHS-R1a (Gs + Gq) → ↑GH + ↑apetyt + ↑motilność żołądka; GHRH: tylko GH; (C) PULSATILITY IS KEY: GnRH pulsacyjny (każde 60-90 min) → FSH + LH; ciągły GnRH → desensytyzacja GnRH-R → ↓FSH + ↓LH → KASTRACJA farmakologiczna; CRH pulsacyjny (80-120 min) → ACTH; GHRH pulsacyjny (nocny) → GH; D — Fałsz: układ wrotny: hormony (nie elektryczne); TRH: ↑TSH + ↑PRL; CRH-R1: Gs (nie Gi); somatostatyna: HAMUJE GH i insulinę; dopamina: HAMUJE PRL (D2R-Gi); eminentia mediana: CVO (przepuszczalna BBB).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── HOMEOSTAZA HORMONALNA (6) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.homeo, question_type: 'single',
    question_text: 'Homeostaza hormonalna jest utrzymywana przez sprzężenia zwrotne. Które stwierdzenie POPRAWNIE opisuje mechanizmy ujemnego i dodatniego sprzężenia zwrotnego w układzie hormonalnym?',
    options: [
      { id: 'A', text: 'UJEMNE SPRZĘŻENIE ZWROTNE (dominujące): hormon efektorowy (kortyzol, T3/T4, testosteron, E2, IGF-1) → hamuje własną oś na poziomie: (1) podwzgórze: ↓hormonu uwalniającego; (2) przysadka: ↓hormonu tropowego; mechanizm: szybkie (GR/TR/ER na błonie → szybkie zmiany konformacji → ↓wydzielania) + wolne (jądrowe → ↓transkrypcja hormonu/receptorów); POZYTYWNE SPRZĘŻENIE ZWROTNE (wyjątki): (1) LH surge: ↑E2 bez P4 → pozytywne → ↑GnRH → ↑LH surge; (2) oksytocyna/poród: rozciągnięcie szyjki → ↑OT → ↑skurcze → ↑OT; (3) laktacja: ssanie → ↑PRL + ↑OT; (4) ADH i hipovolemia: ↓BP → ↑ADH → ↑reabsorpcja', is_correct: true },
      { id: 'B', text: 'Ujemne sprzężenie zwrotne polega na tym, że ↑hormonu efektorowego stymuluje wydzielanie hormonu tropowego; LH surge jest przykładem ujemnego sprzężenia zwrotnego; oksytocyna podczas porodu jest przykładem ujemnego sprzężenia zwrotnego; GR (receptor glikokortykoidów) jest receptorem błonowym sprzężonym z Gs; T3/T4 nie hamują wydzielania TSH przez przysadkę', is_correct: false },
      { id: 'C', text: 'Sprzężenie zwrotne działa wyłącznie między przysadką a gruczołami obwodowymi (nie obejmuje podwzgórza); kortyzol stymuluje wydzielanie ACTH przez dodatnie sprzężenie; estradiol zawsze hamuje wydzielanie LH (brak pozytywnego sprzężenia); ADH nie uczestniczy w sprzężeniu zwrotnym; ujemne sprzężenie jest stosowane wyłącznie w osi tarczycowej', is_correct: false },
      { id: 'D', text: 'Pozytywne sprzężenie zwrotne jest dominującym mechanizmem homeostazy hormonalnej; kortyzol stymuluje CRH i ACTH przez pozytywne sprzężenie; T4 stymuluje wydzielanie TSH przez przysadkę; ADH jest hamowany przez hipovolemię; ujemne sprzężenie powoduje niestabilność systemu hormonalnego i jest mechanizmem chorobowym', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'KLINIKA SPRZĘŻEŃ ZWROTNYCH: OŚ PODWZGÓRZE-PRZYSADKA-TARCZYCA: T3 (bardziej niż T4) → TRβ2 na tyrotropy → ↓TSHβ transkrypcja + ↓TRH-R ekspresja; HIPOTYREOZA (Hashimoto): ↓T3/T4 → ↑TRH → ↑TSH (wskaźnik wrażliwości: nawet subkliniczne → ↑TSH); HYPERTYREOZA: ↓TSH (suppressed); T4 TERAPIA: celem jest euthyroid TSH (0.5–4.0 mU/L); w raku tarczycy: TSH suppressed (< 0.1) → ↓residual thyroid tissue/metastasis; OŚ HPA I DEXAMETAZON: overnight 1-mg DEXA test: normalnie ↓cortisol (< 1.8 μg/dL rano); w Cushingu: brak hamowania (guz autonomiczny lub ektopowy); 8-mg test: różnicowanie przysadka (hamuje) vs ektopowy/nadnercza (nie hamuje); CRH STYMULACYJNY TEST: ↑ACTH po CRH przy chorobie Cushinga (przysadka wrażliwa); brak odpowiedzi przy ektopowym ACTH lub nadnerczu; EXOGENOUS GKS: egzogenny prednizon → ↓CRH + ↓ACTH → atrofia ZF → po odstawieniu: wtórna niedoczynność nadnerczy (powolna regeneracja, może trwać 6-18 m); tapering GKS: stopniowe odstawienie; METYRAPONE TEST: blokada CYP11B1 → ↓kortyzol → ↑ACTH (brak negative feedback) → ↑11-deoksykortyzol; normalny wynik = zachowana oś HPA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeo, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących homeostazy wodno-elektrolitowej i hormonów regulujących gospodarkę sodową:',
    options: [
      { id: 'A', text: 'UKŁAD RENINA-ANGIOTENSYNA-ALDOSTERON (RAAS): (1) ↓perfuzja nerki (macula densa: ↓NaCl dostawczy; JGA: ↓stretch) + sympatykomimetyka (β1) → ↑renina (z komórek ziarnistych JGA) → angiotensynogen (wątroba) → Ang I (10 aa) → ACE (płuca) → Ang II (8 aa); (2) Ang II → AT1R (Gq → ↑IP₃ → ↑Ca²⁺): ↑aldosteron (ZG nadnerczy) + ↑ADH + ↑pragnienie (SFO) + bezpośredni skurcz naczyń + ↑reabsorpcja Na⁺ (PCT) + ↑SNS; (3) aldosteron → MR → ↑ENaC + ↑Na⁺/K⁺-ATPaza → ↑Na⁺ reabsorpcja DCT/CD + ↑K⁺ sekrecja', is_correct: true },
      { id: 'B', text: 'ANP (atrial natriuretic peptide, 28 aa) i BNP (brain/B-type NP, 32 aa): produkowane przez kardiomiocyty (ANP: atria; BNP: komory) w odpowiedzi na ↑rozciągnięcie/↑ciśnienie; receptor GC-A (NPR-A) → ↑cGMP → PKG: (1) ↑GFR (↑filtration fraction) → ↑filtracjia Na⁺; (2) ↓reabsorpcja Na⁺ (CD, blokada ENaC); (3) ↓renina → ↓Ang II → ↓aldosteron; (4) ↓ADH wydzielanie; (5) ↓SNS; efekt netto: natriureza + diureza + ↓BP; KLINICZNE: BNP i NT-proBNP: biomarker niewydolności serca (↑ przy przeciążeniu komory); sakubitryl (neprilizyna inhibitor): ↓degradacja NP → ↑NP → ↑natriureza (w HFrEF)', is_correct: true },
      { id: 'C', text: 'Renina jest wydzielana przez wątrobę a nie przez nerki; aldosteron działa na kanaliki proksymalne (PCT) jako główne miejsce; ANP stymuluje wydzielanie reniny i aldosteronu; BNP jest produkowany przez nerki i mierzy filtrację kłębuszkową; ACE (konwertaza angiotensyny) przekształca Ang II w Ang I; aldosteron jest glikokortykoidem a nie mineralokortykoidem', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: INHIBITORY RAAS: ACEi (kaptopril, enalapryl, ramipryl): ↓Ang II → ↓wazokonstrikcja + ↓aldosteron; efekt uboczny: kaszel (bradykinina akumulacja → substancja P → drogi oddechowe → kaszel 10-15%); angioedema (bradykinina → skóra/śluzówka); p-wskazania: ciąża (teratogenne w II/III); ARB (antagonista AT1R, losartan, walsartan): brak kaszlu; sacubitril + walsartan (ARNI): ↓neprilizyna + ↓AT1R → ↑ANP/BNP + ↓Ang II → HFrEF leczenie (PARADIGM-HF); FINERENON (selektywny MR antagonista): DM + CKD → ↓progresja CKD (FIDELIO-DKD); spironolakton/eplerenon: MR antagoniści (antyaldosteronowe diuretyki oszczędzające K⁺); HIPERALDOSTERONIZM (CONN): autonomiczny guz ZG → ↑aldosteron + ↑Na⁺ + ↓K⁺ + ↑BP; diagnoza: aldosteron/renin ratio (ARR > 30); TK nadnerczy + próba kaptoprylu; B — Prawda: BNP DIAGNOSTIC: HF (acute dyspnea): BNP < 100 pg/mL → mało prawdopodobne HF; BNP > 400 → wysoce prawdopodobne; GRAY ZONE 100-400; NT-proBNP: nieaktywny fragment; t₁/₂ długi (60-120 min vs BNP 20 min) → stable; falsy elevated: CKD (↓klirens), AF, sepsa, stres; C — Fałsz: renina: nerki (JGA); aldosteron: DCT/CD (nie PCT; PCT: Ang II bezpośrednio, aldosteron: DCT/CD); ANP: HAMUJE reninę i aldosteron; BNP: serce (komory); ACE: Ang I → Ang II (nie odwrotnie); aldosteron: MINERALOKORTYKOID.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeo, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują hormonalną regulację homeostazy kalcium i fosforu? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'INTEGRACJA: Ca²⁺ homeostaza: PTH + witamina D (1,25-OH₂D₃) + kalcytonina; NORMA Ca²⁺ surowicy: 8.5–10.5 mg/dl (2.1–2.6 mmol/L); ionized Ca²⁺: 4.6–5.3 mg/dl; Ca²⁺ frakcje: (1) wolny (ionized, 50%, biologicznie aktywny); (2) albumino-związany (40%, niezjonizowany; hipoalbuminemia → ↓total Ca⁺ ale ↑ionized-Ca jako %); (3) anionami związany (10%); KOREKCJA: corrected Ca²⁺ = zmierzone + 0.8 × (4 - albumina [g/dl]); (koryguje hipoalbuminemię)', is_correct: true },
      { id: 'B', text: 'FGF-23 (fibroblast growth factor 23): produkowany przez osteocyty/osteoblasty → KLOTHO (koreceptor FGF-23) na kanalikach nerkowych → ↓NaPi-IIa/IIc (fosfaturia) + ↓CYP27B1 (↓aktywacja vit D → ↓jelitowe wchłanianie Ca²⁺ + PO₄³⁻) + ↓PTH; HIPERFOSFATEMIA (CKD): ↑PO₄³⁻ → ↑FGF-23 + ↓1,25D + ↓Ca²⁺ → ↑PTH (wtórny HPT); ↑PTH → resorpcja kości → osteodystrofia nerkowa; CINACALCET: kalcymimetyk → ↑CaSR sensytywność → ↓PTH (leczenie wtórnego HPT przy CKD)', is_correct: true },
      { id: 'C', text: 'WITAMINA D METABOLIZM: cholekalcyferol (D3) ze skóry (UV-B + 7-dehydrocholesterol → previt D3 → ciepło → D3) + ergocalciferol (D2) z diety (grzyby) → wątroba (CYP27A1/CYP2R1): 25-OH-D3 (kalcydiol, t₁/₂ 3 tyg., mierzy zasoby) → nerka (CYP27B1, 1α-hydroxylaza): 1,25-(OH)₂D3 (kalcytriol, aktywny, t₁/₂ 4-6h); ↑PTH + ↓PO₄³⁻ + ↓Ca²⁺ → ↑CYP27B1; ↑FGF-23 + ↑Ca²⁺ + ↑1,25D → ↓CYP27B1 (sprzężenie); efekty 1,25D: ↑TRPV6 + calbindin (jelito → ↑Ca²⁺ wchłanianie) + ↑RANKL (kość → ↑resorpcja → ↑Ca²⁺ + PO₄³⁻) + ↑reabsorpcja Ca²⁺ nerka', is_correct: true },
      { id: 'D', text: 'PTH hamuje resorpcję kości przez osteoklasty; FGF-23 stymuluje 1α-hydroksylazę i zwiększa aktywną witaminę D; CaSR (calcium-sensing receptor) pobudza wydzielanie PTH przy wyższym stężeniu Ca²⁺; witamina D jest aktywna w formie cholekalcyferolu bez żadnej hydroksylacji; kalcytonina silnie reguluje Ca²⁺ u dorosłych i jest głównym antagonistą PTH; niedobór witaminy D u dzieci powoduje osteoporozę (nie krzywicę)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) HIPOKALCEMIA: objawy: Chvostek (stuk w n. twarzowy → drżenie mięśni twarzy), Trousseau (mankiet uciskowy → karpopedal spasm), parestezje perioralne, tężyczka, laryngospasm, drgawki; PRZYCZYNY: hypoparathyreoidism (post-operacyjny thyreoidektomia! + autoimmunologiczny), pseudohypoparathyreoidism (resistance to PTH → PTH ↑ ale ↓Ca²⁺ — Albright hereditary osteodystrophy, GNAS mutacja → ↓Gs subunit → ↓cAMP na PTH1R); HIPERKALCEMIA: "bones, stones, groans, psychic moans": HPT (primary) + hiperkalcemia nowotworowa (PTHrP: parathyroid hormone related protein — od guza → wiąże PTH1R; osteolityczne metastazy; granulomatoza: ↑CYP27B1 → ↑1,25D); leczenie: nawodnienie + furosemid + bisfosfoniany (iv, pamidronian, zoledroniat) + kalcytonina; (B) FGF-23/KLOTHO AGING: ↓klotho z wiekiem → ↓FGF23R → ↑fosfor + ↑ryzyko CVD; FGF-23 jako marker CKD: ↑FGF-23 wyprzedza ↑PTH i ↑PO₄³⁻; burosumab (anty-FGF-23 Ab): leczenie XLH (X-linked hypophosphatemia, PHEX mutacja → ↑FGF-23 → fosfaturia → krzywica hipofosfatemiczna); (C) KRITICA WITAMINY D: deficyt (< 20 ng/ml): krzywica (dzieci: ↓mineralizacja rosnących kości) + osteomalacja (dorośli: ↓mineralizacja) + miopatia + ↑ryzyko infekcji (witamina D → β-defensyny + katelicydyna) + ↓autoimmunologia ochrona; leczenie: cholekalcyferol D3 (1000–4000 IU/d) + kalcydiol (forma depotowa) + kalcytriol (nefrologia); D — Fałsz: PTH STYMULUJE resorpcję (pośrednio przez RANKL); FGF-23: HAMUJE 1α-hydroksylazę; CaSR: ↑Ca²⁺ → HAMUJE PTH (ujemne sprzężenie); witamina D: wymaga 2 hydroksylacji; kalcytonina: słaby efekt u dorosłych (głównie przy dużej dawce farmakologicznej); niedobór u dzieci → KRZYWICA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeo, question_type: 'single',
    question_text: 'Homeostaza termiczna jest regulowana przez mechanizmy hormonalne i nerwowe. Który opis POPRAWNIE wyjaśnia termoregulację i rolę hormonów w odpowiedzi na zimno?',
    options: [
      { id: 'A', text: 'TERMOREGULACJA: thermosensory neurons w POA/AH (preoptic area, anterior hypothalamus): warmth-sensitive (↑temp → ↑firing → ↓produkowanie ciepła) + cold-sensitive; termostat: punkt nastawczy ~37°C; ZIMNO: (1) termoreceptory skórne (TRPM8, TRPA1 zimno-wrażliwe kanały) → DRG → rdzeń → podwzgórze; (2) POA/AH → DMH + VMH → efektory: drżenie mięśni (skurcze szybkie, ↑termogeneza bez pracy mechanicznej); drżenie bezdrżeniowe (NST = non-shivering thermogenesis): NE → β3-AR na brązowej tkance tłuszczowej → ↑UCP1 (termogenina) → rozsprzężenie mitochondriów → ciepło; (3) ↑OŚ HPA + ↑SNS + ↑TH (tarczyca: ↑BMR)', is_correct: true },
      { id: 'B', text: 'Termoregulacja jest regulowana wyłącznie przez rdzeń kręgowy bez udziału podwzgórza; TRPM8 jest receptorem ciepłym wrażliwym; drżenie mięśni nie produkuje ciepła; brązowa tkanka tłuszczowa nie uczestniczy w termoregulacji u dorosłych; UCP1 (termogenina) stymuluje ATP syntezę; adrenalina nie wpływa na termogenezę; zimno nie aktywuje osi tarczycowej', is_correct: false },
      { id: 'C', text: 'Punkt nastawczy temperatury ciała jest regulowany wyłącznie przez kortyzol; drżenie bezdrżeniowe (NST) zależy od białych komórek tłuszczowych (WAT); UCP1 jest białkiem syntezującym ATP; TRPA1 (transient receptor potential ankyrin 1) jest receptorem ciepłym; OŚ HPA nie jest aktywowana przez zimno; gorączka to podwyższenie aktywności UCP1 bez zmiany punktu nastawczego', is_correct: false },
      { id: 'D', text: 'Podwzgórze nie posiada neuronów termosensorycznych; TRPM8 jest aktywowany przez ciepło powyżej 37°C; hormon wzrostu (GH) jest głównym regulatorem termoregulacji; drżenie mięśni jest procesem beztlenowym i nie wytwarza ciepła; brązowa tkanka tłuszczowa jest obecna wyłącznie u noworodków; OŚ HPA jest hamowana przez zimno (nie stymulowana)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'GORĄCZKA (FEVER) MECHANIZM: pirogeny egzogenne (LPS, muramilodipeptyd, TSST-1) → makrofagi/monocyty → pirogeny endogenne: IL-1β + IL-6 + TNF-α + PGE2 (prostaglandyna E2) → PGE2 przez COX-2 → OVLT/AH receptory EP3 (PGE2 receptor, Gi/Gs) → ↑cAMP w POA → ↑punkt nastawczy; efektory: skurcz naczyń skórnych (dreszcze) + drżenie (↑ciepło) + ↑metabolizm; NSAID/paracetamol: ↓COX → ↓PGE2 → ↓gorączka; ASPIRYNA: nieodwracalny COX inhibitor (acetylacja Ser530/Ser516); hipotermia terapeutyczna (TTM): 32-36°C po CA/NZK → ↓metabolizm mózgowy → ↓ekscytotoksyczność → neuroprotecja; BRĄZOWY TŁUSZCZ (BAT): noworodki: BAT = 5% masy ciała (między łopatkami, wokół nerek, w śródpiersiu); dorośli: mniej ale nadal aktywny (18-FDG PET po zimnie → BAT widoczny); UCP1 (thermogenin): Inner mitochondrial membrane → "proton leak" → zamiast ATP: ciepło; BEIGE ADIPOCYTES: WAT może "brązowieć" (browning): irisin (z mięśni ćwiczących, FNDC5) + FGF-21 → ↑PGC1α → ↑UCP1 w WAT → ↑termogeneza; THERAPEUTIC TARGET: otyłość → aktywacja BAT/beige fat → ↑energy expenditure.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeo, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących hormonalnej regulacji metabolizmu energetycznego podczas głodzenia i po posiłku:',
    options: [
      { id: 'A', text: 'STAN POPOSIŁKOWY (ABSORPTIVE): ↑glukoza → ↑insulina (↓glukagon); efekty: wątroba: ↑glikogenogeneza + ↑lipogeneza (↑FFA → VLDL) + ↓GNG + ↓ketogeneza; mięśnie: ↑GLUT4 (↑wychwyt glukozy) + ↑glikogenogeneza + ↑synteza białek; tłuszcz: ↑lipogeneza (LPL + glukoza → TG) + ↓lipoliza (↓HSL); mózg: niezależy (GLUT1/3, insulinoniezależny); KLUCZOWE: insulina jako "hormon obfitości" → anabolizm; insulina via ↑PI3K/AKT → ↑ChREBP (carbohydrate response element binding) → ↑enzymy glikolityczne i lipogeniczne (FAS, ACCα)', is_correct: true },
      { id: 'B', text: 'GŁODZENIE: kolejność: (1) 0-4h: glikogen wątrobowy (70-100g) → glukoza; ↑glukagon + ↓insulina; (2) 4-24h: ↓glikogen → ↑GNG (alanina z mięśni via ALA-GLU cykl; glicerol z lipolizy; mleczan z erytrocytów i mięśni) + ↑lipoliza → ↑FFA (mięśnie, serce) + ↑ciałka ketonowe (AcAc, β-HB) → alternatywne paliwo dla mózgu po 3-5 dniach; (3) 5-40 dzień: ↑ketony zastępują glu dla mózgu (↓60% popytu) → oszczędzanie białka mięśniowego; (4) > 40 dni: ↑proteoliza (wyczerp. tłuszczu) → ↑NH₃ → śmierć', is_correct: true },
      { id: 'C', text: 'Insulina aktywuje HSL (lipazę wrażliwą na hormony) i stymuluje lipolizę; w stanie głodzenia dominuje insulina a glukagon jest hamowany; wątroba nie może syntetyzować ciałek ketonowych; mózg nie może metabolizować ciałek ketonowych; LPL (lipaza lipoproteinowa) hydrolizuje TG z VLDL w krążeniu, ale jest aktywowana przez glukagon; glikogen wątrobowy wystarcza na 5-7 dni głodzenia', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: LIPOGENEZA DE NOVO (DNL): acetyloCoA (glikoliza mitochondrialna → cytozol via citrynian) → ACCα (acetyl-CoA carboxylase, biotin, ↑insulina → defosforylacja → aktywacja) → malonylCoA (↓CPT1 → ↓fatty acid oxidation) → FAS (fatty acid synthase) → palmitynian (C16:0) → TG; SREBP-1c (sterol regulatory element binding protein): ↑insulina → ↑SREBP-1c → ↑geny lipogenezy (FAS, ACCα, SCD1); REFEEDING SYNDROME: po długim głodzeniu → ↑insulina po jedzeniu → ↑uptake K⁺ + Mg²⁺ + PO₄³⁻ do komórek → ↓surowicze elektrolity → arytmia, rabdomioliza, encefalopatia; B — Prawda: CYKL ALANINY (CAHILL): mięśnie: BCAA (leucyna, izoleucyna, walina) → transaminaza → pirogronian + NH₃ → alanina; wątroba: alanina + α-ketoglutaran → pyruvat + glutaminian → mocznik (urea cykl) + GNG; CYKL GLUKOZA-MLECZAN (CORI): erytrocyty (bezmitochondrialne) + anaerob mięśnie → mleczan → wątroba → GNG → glukoza; KETONOGENEZA: acetyloCoA (β-oksydacja FFA) → β-hydroxy-β-methylglutaryl-CoA (HMGCoA synthase mitochond.) → AcAc (acetooctan) → β-HB (redukcja, NADH) + aceton (spontaniczne dekarboksylacja); C — Fałsz: insulina HAMUJE HSL (przez PKB → PDE3B → ↓cAMP → ↓PKA); głodzenie: GLUKAGON dominuje; ketogeneza: WĄTROBA (głównie); mózg: po adaptacji metabolizuje ketony; LPL aktywowana przez insulinę (nie glukagon); glikogen wątrobowy: 12-24h (nie 5-7 dni).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeo, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują biologię stresu i adaptację organizmu do stresorów? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'STRES FIZJOLOGICZNY (HANS SELYE — GAS): (1) reakcja alarmowa: ↑SNS (walcz/uciekaj: ↑HR, ↑BP, ↑glikemia, ↑przepływ do mięśni, ↓GI) + ↑rdzeń nadnerczy (adrenalina) + ↑HPA (↑CRH → ↑ACTH → ↑kortyzol); (2) faza oporu: adaptacja → podwyższone hormony stresu chronicznego; (3) faza wyczerpania: depletion → choroba; CRH → ACTH: szybka (min); kortyzol: szczyt 15-30 min po stresie; ↑kortyzol → ↑glikemia + ↑FFA + ↑proteoliza + ↑immunosupresja + ↑procesy poznawcze (alert)', is_correct: true },
      { id: 'B', text: 'CHRONICZNY STRES I ALLOSTASIS: ↑kortyzol chroniczny → (1) ↓hippocampus (MR/GR receptory, CA1/CA3 strefa najwrażliwsza: ↓dendryty, ↓neurogeneza) → ↓pamięć deklaratywna + ↓kontrola osi HPA (hipokamp hamuje PVN) → błędne koło; (2) ↑amygdala (ciała migdałowate) aktywność → ↑lęk + ↑PTSD; (3) ↑IL-6, CRP (zapalenie low-grade) → ↑ryzyko CVD; (4) METABOLICZNY SYNDROM: ↑kortyzol → ↑centralna otyłość (↑11β-HSD1 w adipocytach trzewnych → ↑aktywny kortyzol lokalnie) + ↑IR + ↑ciśnienie', is_correct: true },
      { id: 'C', text: 'ALLO/HORMESIS: HORMEZA: niskie dawki stresora → stymulacja adaptacji (heat shock proteins HSP, antioxidanty, mitofagia); ↑HSP70/HSP90: refold zdenaturowane białka; SIRT1 (sirtuina 1): deacetylaza NAD⁺-zależna → aktywuje FOXO3a, PGC1α, p53 deacetylacja → ↓starzenie + ↑metabolizm; CR (caloric restriction) → ↑SIRT1 + ↑AMPK → ↑autofagia → ↑longevity (w modelach zwierzęcych); METFORMINA + RAPAMYCYNA (mTOR inhibitor): badane jako geroprotectors; SENESCENCE: starzejące komórki → SASP (senescence-associated secretory phenotype) → ↑IL-1, IL-6, MMP → "inflammaging"', is_correct: true },
      { id: 'D', text: 'Kortyzol jest wydzielany wyłącznie w odpowiedzi na infekcję (nie na stres psychologiczny); hipokamp stymuluje oś HPA (pozytywne sprzężenie) przez swoje receptory GR; chroniczny stres chroni przed chorobami sercowo-naczyniowymi przez ↓zapalenie; CRH jest szybkim (sekundy) efektorem walki i ucieczki, nie adrenalina; SIRT1 jest proteinową kinazą aktywowaną przez ATP; mTOR inhibitory nie mają potencjalnego działania antystarczeniowego', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) ADRENALINA vs NORADRENALINA W STRESIE: adrenalina (rdzeń nadnerczy, głównie): metaboliczne efekty (↑glikemia, ↑lipoliza, ↑HR, β1+β2); NA (rdzeń nadnerczy + neurony postganglionic SNS): naczynia (α1 → skurcz naczyń → ↑TPR); W OSTREJ HIPOWOLEMII: NA > adrenalina; w hipoglikemii: adrenalina > NA; ANA STRESS AXIS: LC (locus coeruleus): NE → mózg → vigilance + fear; CRH: LC → ↑arousal; PVN-CRH → przysadka (ACTH) + LC (NE) + autonomiczny pień mózgu (SNS); (B) PLASTYCZNOŚĆ HIPOKAMPA: neurogeneza w DG (dentate gyrus): nieadult stem cells → granular cells; wymagana dla uczenia przestrzennego; kortyzol: ↓BDNF (brain-derived neurotrophic factor) → ↓neurogeneza; antydepresanty: ↑BDNF + ↑neurogeneza DG; PTSD: ↑CRH + ↓kortyzol (paradoks: HPA osłabiona po chronicznym stresie) + ↓volumetryczny hipokampus; DEXAMETHASONE SUPPRESSION TEST (DST): ↓kortyzol po dexa → normalny; brak suppresji w depresji (↑HPA dysregulation); (C) INFLAMMAGING: SASP = ↑IL-6, IL-8, TNF, MMP z senescent komórek; senolytics (dasatynib + kwercetyna) → eliminacja senescent komórek → ↓SASP w modelach; MTOR: mTORC1 (nutrient sensor) → ↑protein synthesis + ↓autophagia; rapamycyna (mTORC1 inhibitor) → ↑autofagia → ↑longevity; ↑mTOR: otyłość + insulinoporność → ↑starzenie; D — Fałsz: kortyzol: stres psychologiczny, fizyczny, metaboliczny (nie tylko infekcja); hipokamp: HAMUJE oś HPA (ujemne sprzężenie przez GR w CA1); chroniczny stres: ↑CVD (nie chroni); WALCZ/UCIEKAJ: ADRENALINA (szybko, rdzeń nadnerczy) + NA (SNS); CRH: minuty (nie sekundy); SIRT1: deacetylaza NAD⁺ (nie kinaza); mTOR inhibitory: badane jako geroprotectors.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeo, question_type: 'single',
    question_text: 'Hormony pełnią kluczową rolę w regulacji układu odpornościowego. Który opis POPRAWNIE wyjaśnia interakcje neuroendokrynno-immunologiczne?',
    options: [
      { id: 'A', text: 'NEUROIMMUNOLOGIA (PNI = psychoneuroimmunology): (1) KORTYZOL → GR jądrowy → (a) transrepresja: ↓NF-κB → ↓IL-1β, IL-6, TNF-α, IL-12, IFN-γ; ↓COX-2 → ↓PGE2; ↓iNOS → ↓NO; (b) translokacja ANNEXIN-1 → ↓fosfolipaza A2 → ↓AA → ↓prostaglandyny; (c) ↑IL-10 (przeciwzapalna); efekty komórkowe: ↓neutrofilowa migracja (↑adherencja) + ↓eozynofile/monocyty (apoptoza) + ↑neutrofile (mobilizacja z szpiku: "stresowy szmer krwi"); (2) KATECHOLAMINY → β2-AR na limfocytach → ↑cAMP → ↓IL-2 + ↑Th2 (shift Th1→Th2 przy chronicznym stresie → ↑atopia, ↓wirusowa odporność)', is_correct: true },
      { id: 'B', text: 'Kortyzol stymuluje produkcję IL-1β, IL-6 i TNF-α przez makrofagi; GR (receptor glikokortykoidów) jest receptorem błonowym a nie jądrowym; katecholaminy nie mają receptorów na limfocytach; chroniczny stres powoduje shift Th1 → ↑odporność wirusowa; NF-κB jest aktywowany przez kortyzol; eozynofile i monocyty są stymulowane przez kortyzol do proliferacji', is_correct: false },
      { id: 'C', text: 'Prolaktyna nie wpływa na układ odpornościowy; melatonina jest immunosupresyjna (nie immunostymulująca); DHEA nie ma działania na limfocyty; TNF-α jest produkowany wyłącznie przez komórki nerwowe; β2-adrenergiczny receptor jest nieobecny na komórkach T; kortyzol aktywuje NF-κB i zwiększa zapalenie', is_correct: false },
      { id: 'D', text: 'Kortyzol actywuje fosfolipazę A2 i ↑syntezę prostaglandyn; GR działa wyłącznie w cytoplazmie bez wchodzenia do jądra; IL-10 jest cytokiną prozapalną; shift Th1→Th2 pod wpływem katecholamin powoduje ↑odporność przeciwwirusową; DHEA jest antagonistą kortyzolu pod względem metabolicznym (nie immunologicznym); melatonina hamuje wydzielanie IL-2', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PNI — KLINICZNE IMPLIKACJE: TH1 vs TH2: Th1 (IFN-γ, IL-2, IL-12): odporność komórkowa → wirusy, wewnątrzkomórkowe bakterie, nowotwory; Th2 (IL-4, IL-5, IL-13): odporność humoralna → pasożyty + atopia (astma, egzema, alergia, IgE); chroniczny stres (↑kortyzol + ↑NA/adrenalina) → shift Th1→Th2 → ↓wirusowa odporność + ↑atopia; COVID-19 "cytokine storm": ↑IL-6 + ↑TNF + ↑IL-1 → deksametazon skuteczny (↓cytokiny → ↓mortality); KORTYZOL vs DHEA: DHEA (dehydroepiandrosteron) z ZR: słaby androgen; → konwertowany do testosteronu/E2 obwodowo; immunologicznie: DHEA: ↑Th1 (antagonizuje kortyzol!) → ↑odporność; stosunek DHEA:kortyzol → ↓z wiekiem (↑kortyzol, ↓DHEA) → immunosenescence; MELATONINA (szyszynka): noc → ↑melatonin → ↑NK-komórki + ↑IL-2 + ↑IFN-γ (immunostymulująca nocna); MT1/MT2 receptory na tymocytach; SLEEP I ODPORNOŚĆ: głęboki sen (NREM 3): ↑GH + ↑prolaktyna (immunostymulujące) + ↓kortyzol → naprawa + pamięć immunologiczna; ↓snu → ↓odporność; SOCIAL ISOLATION: ↑NF-κB + ↑CTRA (conserved transcriptional response to adversity): ↑prozapalne geny (IL-6, IL-8, IL-1β) + ↓antywiralne (IFN).',
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
  console.log(`Seeding batch 7 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
