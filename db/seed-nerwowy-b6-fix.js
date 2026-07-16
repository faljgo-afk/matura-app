// Fix: re-insert the 5 failed "Oś podwzgórze-przysadka" questions from batch 6
// (5 glikemia questions already inserted successfully)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'a4962fbb-433e-47f2-a241-1562fc6ecae4'
const OS = 'c2486387-820e-478f-8142-de6c5bd8bafd'

const questions = [
  {
    topic_id: TOPIC, subtopic_id: OS, question_type: 'single',
    question_text: 'Przysadka mózgowa (hypophysis) dzieli się na część przednią i tylną, każda produkuje odmienne hormony. Który opis POPRAWNIE wymienia hormony przysadki przedniej (adenohypophysis) i ich funkcje?',
    options: [
      { id: 'A', text: 'ADENOHYPOPHYSIS (przysadka przednia, pars distalis): hormony i komórki: (1) TSH (tyreotropina): tyrotropy → ↑tarczyca; (2) ACTH (kortykotropina): korykotropy; (3) FSH + LH (gonadotropiny): gonakotropy; (4) GH (somatotropina): somatotropy (50%); (5) PRL (prolaktyna): laktotropy; (6) MSH (melanotropina): melanotropy (pars intermedia, u człowieka szczątkowa); NEUROHYPOPHYSIS (przysadka tylna): oksytocyna + ADH (wazopresyna) — syntezowane w podwzgórzu (jądra: PVN → OT; SON → ADH), transportowane aksonami do tylnej przysadki → wydzielanie', is_correct: true },
      { id: 'B', text: 'Przysadka przednia produkuje ADH (wazopresynę) i oksytocynę; przysadka tylna produkuje TSH, ACTH, FSH, LH, GH i prolaktynę; GH jest wydzielany przez korykotropy; ACTH pochodzi z melanotropów; TSH stymuluje nadnercza a nie tarczycę; FSH i LH są wydzielane przez przysadkę tylną; adenohypophysis jest unerwiona przez aksony podwzgórza', is_correct: false },
      { id: 'C', text: 'Somatotropy stanowią 5% komórek przysadki przedniej; laktotropy wydzielają ACTH; podwzgórze produkuje GH bezpośrednio bez pośrednictwa przysadki; POMC (proopiomelanocortyna) jest prekursorem wyłącznie MSH; jądro nadwzrokowe (SON) produkuje oksytocynę i wydziela ją do układu wrotnego; TSH i FSH nie mają wspólnej podjednostki α', is_correct: false },
      { id: 'D', text: 'Przysadka tylna (neurohypophysis) jest połączona z podwzgórzem wyłącznie przez krew (układ wrotny podwzgórze-przysadka); GH jest produkowany przez gonakotropy; FSH i LH stymulują gruczoł tarczowy; TSH, FSH, LH i hCG nie mają wspólnej podjednostki α (wszystkie są monomerami); jądro przykomorowe (PVN) nie jest zaangażowane w wydzielanie hormonów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PRZYSADKA — ANATOMIA I KLINIKA: UKŁAD WROTNY PODWZGÓRZE-PRZYSADKA: aksony podwzgórza → tuber cinereum → eminentia mediana → kapilary II rzędu → przysadka przednia → hormony tropowe; neurohypophysis: unerwiona aksony (SON, PVN) → NO wrotny; POMC PROCESSING: POMC gen: proopiomelanocortyna → CRH stymuluje → proopiomelanocortyna → cięcie: ACTH (1-39) + β-LPH; w korykotropy: dominuje ACTH; w pars intermedia (gryzonie, u człowieka min): ACTH → α-MSH + CLIP; β-LPH → β-endorfina + β-MSH; GLIKOPROTEINY: TSH, FSH, LH, hCG: heterodimery: wspólna podjednostka α (α-CGA, coded by CGA gene) + unikalna β (TSHβ, FSHβ, LHβ, hCGβ) → swoistość; wolne α-CGA w surowicy: marker guzów przysadki (zwł. nieczynnych); INCIDENTALOMA PRZYSADKI: guzy przysadki: prolaktynoma (najczęstszy, 30-40%): ↑PRL; SOMATOTROPY (GH-secreting): akromegalia; korykotrpy: choroba Cushinga; nieczynne (gonadotropy): duże → efekty masy; CRANIOPHARYNGIOMA: guz Rathke\'s pouch → ucisk na przysadkę + podwzgórze → moczówka prosta (DI) + hipopituitaryzm + hemianopsia dwubitowa (ucisk na chiazma).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: OS, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących hormonu antydyuretycznego (ADH, wazopresyna) i oksytocyny:',
    options: [
      { id: 'A', text: 'ADH (wazopresyna, AVP): nonapeptyd; synteza: jądro nadwzrokowe (SON, główne) + jądro przykomorowe (PVN); transport aksonalny do neurohypophysis; wydzielanie: ↑osmolalność osocza (>280 mOsm/kg, osmoreceptory w OVLT, SFO) + ↓objętość krwi/ciśnienie (baroreceptory: AB, karotydowe, łuk aorty → vagus/glossopharyngeus → NTS → PVN/SON) + angiotensyna II + stres + ból + nikotyna + opiaty + leki (karbamazepina, klofibrat, cyklofosfamid, winkrystyna, SSRIs = SIADH!); HAMOWANIE: ↓osmolalność + ↑objętość + etanol + α-adrenergiczne + atrialne ANP/BNP', is_correct: true },
      { id: 'B', text: 'ADH MECHANIZM: V2R (wasopresin receptor 2, AVPR2, Gs → cAMP → PKA → AQP2 fosforylacja → translokacja AQP2 na luminalna błona komórek głównych DCT/CD) → ↑permeabilność wody → ↑resorpcja wody → ↑osmolalność moczu (max 1200 mOsm/kg) + ↓diureza; V1aR (naczynia: Gq → PLC → IP₃ → ↑Ca²⁺ → skurcz naczyń = pressorowy efekt); V1bR (przysadka: ↑ACTH); AQP2: regulowany przez ADH; AQP3/AQP4: konstitutywne (błona basolateralna); DDAVP (desmopresyna): selektywny V2 agonista → leczenie moczówki prostej (DI) + von Willebrand (uwalnia vWF z śródbłonka) + enureza nocna', is_correct: true },
      { id: 'C', text: 'Oksytocyna jest wydzielana przez przysadkę przednią a nie przez tylną; ADH jest syntetyzowany przez korę nadnerczy; V2R jest sprzężony z białkiem Gi i zmniejsza cAMP; SIADH (syndrom nieodpowiedniego wydzielania ADH) powoduje hypernatremię; moczówka prosta centralna to stan niedoboru AQP2; ADH jest pochodną cholesterolu (steroidsem)', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: OSMOSTAT: punkt nastawczy osmolalności = 280–295 mOsm/kg; próg wydzielania ADH: ~285 mOsm/kg; każdy 1 mOsm/kg ↑ → ADH ↑ liniowo; RESET OSMOSTAT: SIADH — niższy punkt nastawczy; ciąża: obniżenie progu (↓10 mOsm/kg normalnie); WOLUMORECEPTORY: baroreceptory niskociśnieniowe (atria, żyły płucne) > wysokociśnieniowe (karotydowe); hipovolemia (-8% wolumin) → ADH ↑ eksponencjalnie; SIADH PRZYCZYNY: (1) OUN: zapalenie opon, udar, TBI; (2) płucne: zapalenie płuc, IPPV; (3) leki: SSRIs, karbamazepina, cyklofosfamid, MDMA (Ecstasy); (4) guzy ektopowe (small cell lung cancer): ektopowe ADH; (5) niedoczynność tarczycy, nadnerczy; B — Prawda: MOCZÓWKA PROSTA (DI) RÓŻNICOWANIE: CENTRALNA (CDI): ↓ADH (niedobór SON/PVN/stalk); NERKOWA (NDI): ↓V2R lub ↓AQP2 (oporność na ADH); TEST: deprywacja wody + DDAVP: CDI: ↑Uosm po DDAVP (nerki odpowiadają); NDI: brak odpowiedzi; LECZENIE: CDI: DDAVP (desmopresyna, V2R agonista); NDI: niskosodowa dieta + tiazydy (paradoksalnie ↓diureza przez ↓ECV) + indometacyna (↓PGE2 które antagonizuje ADH w CD); oksytocyna: (1) laktacja: suckling → odruch Fergusona → ↑OT → mioepitelialne komórki gruczołu piersiowego → milk ejection; (2) poród: szyjka macicy → ↑OT → skurcze → więcej rozszerzenie → pozytywne sprzężenie; (3) OUN: społeczne zachowanie, przywiązanie, emocje; C — Fałsz: oksytocyna: tylna przysadka (synteza: PVN, SON); ADH: podwzgórze (nie nadnercza); V2R: Gs (nie Gi); SIADH: HIPONATREMIA (nie hypernatremia); CDI: niedobór ADH (nie AQP2; niedobór AQP2 → nerkowy NDI — AR); ADH: nonapeptyd aminokwasowy (nie steroid).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: OS, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują hormony tropowe przysadki i ich osie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'OŚ GONADALNA: GnRH (podwzgórze, pulsacyjny!) → FSH + LH (przysadka) → gonady; FSH: ↑folikulogeneza (jajnik: komórki granulosa → ↑aromataza → ↑E2 + ↑inhibina B) + ↑spermatogeneza (Sertoli + tubularne); LH: ↑owulacja (LH surge → peak LH 24-36h → owulacja) + ↑progesteron (ciałko żółte) + ↑testosteron (komórki Leydiga, LHR → ↑StAR → ↑testosteron); ujemne sprzężenie: E2 + P4 + inhibina B → ↓GnRH/LH/FSH; środkowy cykl: E2 wzrasta bez P4 → POZYTYWNE sprzężenie → LH surge → owulacja', is_correct: true },
      { id: 'B', text: 'OŚ NADNERCZOWA: CRH (PVN) → ACTH (korykotropy) → kortyzol (zona fasciculata); ACTH pulsacyjny z rytmem dobowym (peak: rano); ujemne sprzężenie: kortyzol → przysadka (↓ACTH) + podwzgórze (↓CRH); STRES: przełamuje ujemne sprzężenie → ↑CRH → ↑ACTH → ↑kortyzol; NIEDOBÓR ACTH (WTÓRNy hipokortyzolizm): ↓CRH lub ↓ACTH → ↓kortyzol ale ZACHOWANA mineralokortykoidalna oś (bo aldosteron regulowany RAAS + K⁺, nie ACTH) → brak hiperkalemii + brak hiperpigmentacji (odróżnia od Addisona)', is_correct: true },
      { id: 'C', text: 'ANALOGI GnRH: leuprolid, goserelinorelina (GnRH agonists, długodziałające): ciągłe podanie → down-regulation GnRH receptorów → ↓FSH + ↓LH → ↓E2/T = KASTRACJA FARMAKOLOGICZNA; wskazania: rak prostaty (kastracja), endometrioza, mięśniaki, pubertas praecox; DEGARELIX (GnRH antagonista): natychmiastowy ↓T bez początkowego flare (flare: agonista → 1-2 tyg. ↑T przed suppression); wskazanie: zaawansowany rak prostaty; PULSACYJNY GnRH (gonadorelina): leczenie hypogonadyzmu hipogonadotropowego (Kallmann syndrome)', is_correct: true },
      { id: 'D', text: 'GnRH jest wydzielany ciągle bez pulsacji; FSH stymuluje komórki Leydiga do produkcji testosteronu a LH stymuluje spermatogenezę; ujemne sprzężenie: ↑GnRH powoduje ↑FSH i ↑LH; inhibina B zwiększa wydzielanie FSH; ciągłe podanie GnRH agonistów zwiększa wydzielanie LH i FSH; ACTH reguluje wydzielanie aldosteronu (główny regulator mineralokortykoidów)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) KALLMANN SYNDROME: niedobór GnRH (anosmia + hipogonadyzm hipogonadotropowy); KAL1 (X-linked, anosmia) + FGFR1 + PROKR2 + GNRHR; GnRH neurony migrują z węchu do podwzgórza w ciąży; PCSK1 → przetwarza GnRH; CYKL MIESIĄCZKOWY: faza folikularna (dni 1-14): FSH → ↑folikuł dominujący → ↑E2; LH surge (dzień 13-14): E2 > 200 pg/ml > 48-50h → pozytywne sprzężenie → LH surge → owulacja (36h po peak LH); faza lutealna (dni 15-28): ciałko żółte → ↑P4 + ↑E2 (mniejszy) → ↑ujemne sprzężenie → ↓FSH/LH → atrezja CL → ↓P4 → miesiączka; (B) SEKUNDARNY vs PIERWOTNY HIPOKORTYZOLIZM: Addison (pierwotny): kora nadnerczy → ↓kortyzol + ↓aldosteron + ↑ACTH → hiperpigmentacja + hiperkalemia + hiponatremia; wtórny (przysadkowy): ↓ACTH → ↓kortyzol ale RAAS intakt → ↓aldosteron NORMALNY → BRAK hiperpigmentacji i hiperkaliemii; trzeciorzędowy (podwzgórzowy): ↓CRH → ↓ACTH → ↓kortyzol; odstawienie GKS: trzeciorzędowy HPA suppressja; DEXA SUPPRESSION: 1 mg dexametazon nocny → kortyzol rano: normalny < 1,8 μg/dL; Cushing: brak suppresji; (C) FLARE REAKCJA: agonista GnRH (leuprolid) → pierwsze 1-2 tyg. ↑LH → ↑T ("flare") → może nasilić ból kostny (meta); zapobieganie: antagonista (degarelix) → natychmiastowy ↓T bez flare; lub: anty-androgen (bikalutamid) przez pierwsze 4 tyg. przy agonistach; D — Fałsz: GnRH: PULSACYJNY (kluczowe! ciągły → downreg); LH: Leydiga (testosteron); FSH: Sertoli (spermatogeneza); inhibina B: HAMUJE FSH; GnRH agoniści ciągłe: ↓LH/FSH (po flare); ACTH: NIE jest głównym regulatorem aldosteronu (RAAS + K⁺ regulują).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: OS, question_type: 'single',
    question_text: 'Hiperprolaktynemia to stan podwyższonego stężenia prolaktyny w surowicy. Który opis POPRAWNIE wyjaśnia przyczyny, objawy i leczenie hiperprolaktynemii?',
    options: [
      { id: 'A', text: 'HIPERPROLAKTYNEMIA — PRZYCZYNY: (1) fizjologiczne: ciąża (E2 → ↑laktotropy), laktacja, stres, wysiłek, sen; (2) farmakologiczne: leki anty-D2 (↓dopaminy hamowania): neuroleptyki (haloperydol, risperidon, kwetiapina/olanzapina [mniej]), metoklopramid, domperidon, α-metylodopa, werapamil, rezerpina; (3) patologiczne: prolaktynoma (>200 ng/ml = makroadenoma prawie pewny), ucisk szypuły (stalk compression: ↓dopaminowy transport → ↑PRL, zwykle < 100 ng/ml), niedoczynność tarczycy (↑TRH → ↑PRL), CKD (↓klirens), makroprolaktynemia (IgG-PRL aggregate, nieaktywny); LECZENIE: kabergolina (D2R agonista, t₁/₂ 65h, 2×/tydz, skuteczna w 90%); bromokryptyna (1. generacja, 2-3×/dz); guzy oporne: chirurgia (transsfenoidal) + ewentualnie temozolomid', is_correct: true },
      { id: 'B', text: 'Hiperprolaktynemia jest spowodowana wyłącznie przez guzy przysadki; prolaktyna jest hamowana przez TRH; dopamina stymuluje wydzielanie prolaktyny; kabergolina jest antagonistą D2R stosowanym w leczeniu hiperprolaktynemii; galaktorrhea jest specyficzna wyłącznie dla kobiet i nie występuje u mężczyzn; PRL > 20 ng/ml zawsze wskazuje na prolaktynoma', is_correct: false },
      { id: 'C', text: 'Podwyższona prolaktyna nie wpływa na oś GnRH-FSH-LH; prolactinoma jest złośliwym guzem przysadki; leczenie hiperprolaktynemii polega na podaniu rekombinowanej prolaktyny; makroprolaktynoma (> 10 mm) objawia się wyłącznie galaktorrheą bez objawów kompresji; stalk compression powoduje niższe PRL niż prolaktynoma; metoklopramid (antagonista D2) obniża stężenie prolaktyny', is_correct: false },
      { id: 'D', text: 'Hiperprolaktynemia powoduje wzrost stężenia FSH i LH (hiperstymulację gonad); bromokryptyna jest agonistą D1R (nie D2R); SIADH i hiperprolaktynemia mają identyczne mechanizmy patofizjologiczne; galaktorrhea u mężczyzn jest spowodowana niedoborem prolaktyny; kabergolina jest stosowana w niedoczynności przysadki; laktotropy stanowią 80% komórek przysadki', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PROLAKTYNA — KLINIKA: OBJAWY HIPERPROLAKTYNEMII: kobiety: galaktorrhea + amenorrhea + infertility + ↓libido + ↓gęstość kości (hipogonadyzm); mężczyźni: ↓libido + impotencja + ginekomastia + (rzadko) galaktorrhea + infertility; MAKROPROLAKTYNOMA (> 10 mm): + efekty masy: bóle głowy, hemianopsia (ucisk chiazmy), porażenie nerwów gałkoruchowych (III, IV, VI); STALK COMPRESSION EFFECT: każdy guz przysadki > 1 cm może uciskać szypułę → ↓dopaminy do laktotropy → ↑PRL umiarkowana (< 150 ng/ml); ROZNICOWANIE: PRL > 250 ng/ml → prolaktynoma (prawie pewny); PRL 25–150 = stalk compression lub leki; MAKROPROLAKTYNEMIA: PRL związana z IgG → duże cząsteczki → ↓klirens → ↑total PRL ale mała "bioaktywna" frakcja; wykrycie: PEG precipitation (PEG strąca IgG); często asymptomatyczna; LAKTACJA: TRZY ETAPY: (1) mammogeneza: E2 + P4 + PRL + placental somatomammotropin → ↑gruczoł piersiowy; (2) laktogeneza: po porodzie ↓E2 + ↓P4 (łożysko wychodzi) → PRL działa bez blokady → mleko; (3) galactopoiesis: ssanie → odruch Fergusona (wzgórze → ↑PRL + ↑OT) → milk ejection; PRL: wiąże się z receptorami JAK2/STAT5 na acinarnych komórkach piersi → synteza kazeiny, laktalbumine, laktoferyn.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: OS, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących osi podwzgórze-przysadka i jej zaburzeń:',
    options: [
      { id: 'A', text: 'HYPOPITUITARISM (niedoczynność przysadki): utrata hormonów tropowych w kolejności: GH (pierwsza, najwrażliwsza) → gonadotropiny (FSH/LH) → TSH → ACTH (ostatnia, niedobór ACTH zagraża życiu); przyczyny: gruczolak przysadki (ucisk), chirurgia, napromieniowanie, Sheehan syndrome (martwica przysadki po poporodowym krwotoku → ↓przysadka → ↓laktacja zamiast ↑, pierwszy objaw), craniopharyngioma, sarcoidosis, hemochromatoza; PANHYPOPITUITARISM: utrata wszystkich hormonów → polihormonalny niedobór', is_correct: true },
      { id: 'B', text: 'MEN1 (multiple endocrine neoplasia type 1, Wermer): mutacja MEN1 (menin, guz supresor, ch. 11q13) → guzy: (1) przysadka (prolaktynoma/GH/nieczynne, 30–40%); (2) przytarczyca (hiperprolaktynemia HPT1, >90%); (3) trzustka/dwunastnica (gastrinoma/insulinoma/VIPoma/glucagonoma); "3 P": Pituitary + Parathyroid + Pancreas; MEN2A (Sipple): RET (proto-onkogen, ch. 10q11) → (1) MTC (rdzeniasty rak tarczycy, u prawie wszystkich); (2) pheochromocytoma (50%); (3) pierwotny HPT (20%); MEN2B: MTC + pheo + marfanoidalna budowa + neurofibromatoza błon śluzowych', is_correct: true },
      { id: 'C', text: 'Sheehan syndrome jest powikłaniem nadczynności tarczycy w ciąży; w hypopituitary kolejność utraty hormonów: ACTH (pierwsza) → GH (ostatnia); MEN1 jest związany z mutacją RET; MEN2A jest związany z mutacją MEN1; craniopharyngioma jest guzem nadnercza; ACTH jest wydzielany jako pierwszy hormon przy stresie i jest najodporniejszy na uszkodzenie przysadki', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: SHEEHAN SYNDROME MECHANIZM: przysadka ciążowa: 2× większa (↑laktotropy przez E2) → ↑zapotrzebowanie perfuzji; poporodowy krwotok → ↓ciśnienie → ↓perfuzja przysadki → martwica; jądro SON/PVN: lepiej chronione (niezależne unaczynienie) → ADH zwykle zachowany (DI rzadko w Sheehan); typowy obraz: ↓laktacja po porodzie + brak menstruacji (↓FSH/LH) + osłabienie (↓ACTH) + niedoczynność tarczycy (↓TSH); LECZENIE HYPOPITUITARY: substitucja hormonalna: hydrokortyzol (kortyzol) NAJPIERW (ratunkowość) → lewotyroksyna (po kortyzolu, bo T4 bez kortyzolu → kryzys addisoniański) → E2/T → GH; DYNAMIC TESTING: oś GH: ITT (insulin tolerance test, hipoglikemia → GH peak normalny > 5 μg/L) + GHRH+arginin test; oś ACTH: ITT + kosyntropina (ACTH1-24, 250 μg IM, kortyzol peak > 18-20 μg/dL); B — Prawda: MEN GENETYKA: MEN1: menin = co-activator p27, RB tumor suppressor → "second hit" (LOH); MEN2 RET: gain-of-function mutacja; punkt mutacji: M918T (MEN2B) + C634R/Y (MEN2A/FMTC); presymptomatyczne badanie DNA rodziny; profilaktyczna tyreoidektomia przy RET+ (MTC ryzyko > 95%); GASTRINOMA (Zollinger-Ellison, ZES): ↑gastryna → ↑HCl → wrzody oporne + biegunka; lokalizacja: "gastrinoma triangle" (duodenum > trzustka); MEN1 w 20–30%; diagnostyka: ↑gastryna > 1000 pg/ml + sekretynowy test (paradoksalne ↑gastryna po sekretynie); leczenie: PPI (wysoka dawka) + chirurgia; C — Fałsz: Sheehan: poporodowy KRWOTOK (nie nadczynność); kolejność: GH (PIERWSZA utrata) → gonady → TSH → ACTH (OSTATNIA); MEN1 mutacja: MEN1 (menin); MEN2: RET; craniopharyngioma: guz PRZYSADKI/podwzgórze (Rathke\'s pouch remnant); ACTH: OSTATNI hormon utracony (najodporniejszy).',
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
  console.log(`Re-inserting 5 failed Oś podwzgórze-przysadka questions...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
