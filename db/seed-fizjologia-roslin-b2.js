// Seed batch 2/7 — Fizjologia roślin
// Rośliny C3, C4 i CAM (7) + Transpiracja i gospodarka wodna (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'

const S = {
  c3c4cam: '469e8529-d140-498f-bed7-5790c9e2d55d',
  trans:   '0587c00d-b47e-4264-8a86-cebd8544ae22',
}

const questions = [

  // ── ROŚLINY C3, C4 i CAM (7) ─────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.c3c4cam, question_type: 'single',
    question_text: 'Czym różni się pierwszym produktem asymilacji CO₂ u roślin C3 i C4?',
    options: [
      { id: 'A', text: 'C3: pierwszym produktem jest PGA (3-fosfoglicerynian, C3), syntezowany przez RuBisCO; C4: pierwszym produktem jest OAA (szczawiooctan, C4), syntezowany przez PEP-karboksylazę w komórkach mezofilu', is_correct: true },
      { id: 'B', text: 'C3: pierwszym produktem jest glukoza (C6), syntezowana bezpośrednio przez RuBisCO; C4: pierwszym produktem jest RuBP (C5), regenerowany szybciej niż u C3', is_correct: false },
      { id: 'C', text: 'Nie ma różnicy w pierwszym produkcie — u obu typów jest nim PGA (C3); rośliny C4 różnią się tylko szybkością cyklu Calvina, nie pierwszym produktem', is_correct: false },
      { id: 'D', text: 'C3: OAA (C4) syntezowany przez PEP-karboksylazę; C4: PGA (C3) syntezowany przez RuBisCO — nazwy są odwrócone w stosunku do popularnego przekonania', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Rośliny C3 (pszenica, ryż, burak): CO₂ wiązany bezpośrednio przez RuBisCO + RuBP → 2×PGA (C3); dlatego nazwa C3. Rośliny C4 (kukurydza, trzcina cukrowa, sorgo, proso): dwuetapowe wiązanie CO₂: (1) mezofil: CO₂ + PEP → OAA (C4, szczawiooctan) — katalizuje PEP-karboksylaza; OAA → malat lub asparaginian; (2) komórki pochwy wiązki: malat → pirogronian + CO₂; uwolniony CO₂ → cykl Calvina z RuBisCO przy wysokim [CO₂] → brak fotooddychania. PEP-karboksylaza ma 60× wyższe powinowactwo do CO₂ niż RuBisCO i nie reaguje z O₂.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.c3c4cam, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują cechy i adaptacje roślin C4? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Rośliny C4 mają anatomię Kranza: dwa typy komórek fotosyntetycznych — komórki mezofilu (wiązanie CO₂ przez PEP-karboksylazę) otaczające komórki pochwy wiązki (cykl Calvina z RuBisCO przy skoncentrowanym CO₂)', is_correct: true },
      { id: 'B', text: 'Rośliny C4 są bardziej efektywne niż C3 w warunkach wysokiej temperatury, silnego nasłonecznienia i ograniczonego dostępu do wody, ponieważ mogą utrzymać wyższą wydajność fotosyntezy przy mniejszym otwarciu aparatów szparkowych', is_correct: true },
      { id: 'C', text: 'Rośliny C4 prowadzą fotosyntezę wyłącznie nocą; w ciągu dnia stomata są zamknięte, a CO₂ jest magazynowany w postaci malatu w wakuolach i uwalniany nocą do cyklu Calvina', is_correct: false },
      { id: 'D', text: 'Rośliny C4 mają wyższy stosunek fotosyntezy do transpiracji (WUE — water use efficiency) niż C3, co oznacza, że asymilują więcej węgla przy mniejszej utracie wody', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) anatomia Kranza (niem. Kranz = wieniec): komórki pochwy wiązki (bundle sheath cells, BSC) tworzą wieniec wokół wiązki; mezofil (M) otacza BSC; PEP-karb. w M, RuBisCO w BSC. (B) przewaga C4 w tropikach/subtropikach: przy otwartej stomie C3 traci H₂O i zyska CO₂; C4 może utrzymać [CO₂] w BSC przy węższej stomie → wyższy WUE. C — fałsz: to opis CAM (Crassulacean Acid Metabolism), nie C4. (D) WUE = g CO₂ / g H₂O; C4: ≈8–12 μmol CO₂/mmol H₂O; C3: ≈3–6 μmol CO₂/mmol H₂O; C4 są o ~50–70% wydajniejsze.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.c3c4cam, question_type: 'single',
    question_text: 'Metabolizm kwasowy roślin gruboszowatych (CAM) jest unikalną adaptacją do suszy. Na czym polega ta strategia?',
    options: [
      { id: 'A', text: 'Stomata CAM otwierają się NOCĄ (chłód, mała utrata wody): CO₂ jest wiązany przez PEP-karboksylazę do malatu, magazynowanego w wakuolach; w dzień stomata zamknięte (redukcja transpiracji), malat dekarboxylowany → CO₂ wchodzi do cyklu Calvina', is_correct: true },
      { id: 'B', text: 'Stomata CAM są zawsze otwarte: w dzień wiążą CO₂ do malatu, nocą malat jest przekazywany do sąsiednich roślin przez plazmodesmy i tam wchodzi do cyklu Calvina', is_correct: false },
      { id: 'C', text: 'Rośliny CAM nie mają cyklu Calvina; produkują energię wyłącznie ze spalania malatu w mitochondriach poprzez cykl Krebsa; fotosynteza nie produkuje u nich glukozy', is_correct: false },
      { id: 'D', text: 'CAM jest stosowany wyłącznie przez mchy i paprocie żyjące na pustyni; rośliny nasienne nie ewoluowały w kierunku CAM ponieważ mają skuteczniejsze mechanizmy osmoregulacji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'CAM (Crassulacean Acid Metabolism): adaptacja do silnej suszy (kaktusy, agawy, ananasy, orchidee epifityczne): (1) NOC (stomata otwarte): PEP-karboksylaza wiąże CO₂ + PEP → OAA → malat; malat gromadzi się w wakuolach (pH spada — "kwasowość ranna"); (2) DZIEŃ (stomata zamknięte): malat wychodzi z wakuoli → dekarboxylacja (malatdehydrogenaza lub fosfoenolopirogronian karboksykinaza) → CO₂ + pirogronian; CO₂ wchodzi do cyklu Calvina przy RuBisCO w obecności światła; pirogronian → PEP (gluconeogeneza). WUE CAM: nawet 50× wyższe niż C3; koszt: wolny wzrost.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.c3c4cam, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń porównujących rośliny C3, C4 i CAM:',
    options: [
      { id: 'A', text: 'PEP-karboksylaza (PEPC) obecna u roślin C4 i CAM wykazuje dużo wyższe powinowactwo do CO₂ (niższe Km) niż RuBisCO i nie wykazuje aktywności oksygenazy — dlatego nie powoduje fotooddychania.', is_correct: true },
      { id: 'B', text: 'Rośliny C3 rosną lepiej niż C4 w chłodnym i wilgotnym klimacie, ponieważ przy niskiej temperaturze aktywność PEP-karboksylazy jest wyższa niż RuBisCO, co daje C4 przewagę wyłącznie w tropikach.', is_correct: false },
      { id: 'C', text: 'Ananas (Ananas comosus), agawa i kaktusy z rodzaju Opuntia to przykłady roślin CAM; ich produktem dziennej asymilacji jest skrobia syntezowana w chloroplastach podczas cyklu Calvina.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: PEPC: Km(CO₂) ≈ 5–10 μM (bardzo niskie → wysokie powinowactwo); RuBisCO: Km(CO₂) ≈ 10–30 μM; PEPC reaguje z HCO₃⁻ (nie z O₂) → bez fotooddychania. B — Fałsz: C4 mają PRZEWAGĘ w tropikach; C3 wygrywają w chłodnym wilgotnym klimacie bo przy niskiej T: (1) fotooddychanie C3 jest mniejsze (enzymatyka zwalnia, ale RuBisCO bardziej specyficzne w chłodzie); (2) C4 wymagają dodatkowego ATP do kroku pompowania CO₂ → koszt nie opłaca się przy niskim fotooddychaniu; (3) PEP-karboksylaza C4 jest hamowana przez chłód. C — Prawda: ananas (A. comosus) = typowy CAM; agawy (Agave) = CAM; Opuntia = CAM; skrobia = produkt cyklu Calvina w dzień.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.c3c4cam, question_type: 'single',
    question_text: 'W doświadczeniu porównano przyrost biomasy kukurydzy (C4) i pszenicy (C3) uprawianych w identycznych warunkach: wysoka temperatura (35°C), silne nasłonecznienie, umiarkowane nawodnienie. Który wynik jest ZGODNY z oczekiwaniami?',
    options: [
      { id: 'A', text: 'Kukurydza (C4) osiągnęła wyższy przyrost biomasy niż pszenica (C3), ponieważ w tych warunkach fotooddychanie pszenicy jest nasilone, a kukurydza ma mechanizm koncentracji CO₂ eliminujący fotooddychanie', is_correct: true },
      { id: 'B', text: 'Pszenica (C3) osiągnęła wyższy przyrost, ponieważ C3 jest zawsze wydajniejsze od C4; dodatkowy etap wiązania CO₂ u C4 jest kosztowny energetycznie i zawsze obniża wydajność', is_correct: false },
      { id: 'C', text: 'Oba gatunki osiągnęły identyczny przyrost, ponieważ przy silnym nasłonecznieniu oba są nasycone światłem i różnice w mechanizmie asymilacji CO₂ nie mają znaczenia', is_correct: false },
      { id: 'D', text: 'Pszenica (C3) osiągnęła wyższy przyrost, ponieważ przy 35°C C4 przechodzi w tryb CAM i zamyka stomata w dzień, drastycznie ograniczając fotosyntezę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'W warunkach wysokiej temperatury, silnego światła: (1) C3 (pszenica): stomata otwarte → utrata H₂O; przy 35°C fotooddychanie nasilone (wzrost stosunku O₂/CO₂ w komórce + wyższe Km RuBisCO dla CO₂) → strata 25–50% asymilowanego C; (2) C4 (kukurydza): PEP-karboksylaza działa efektywnie w upale; O₂ nie hamuje PEPC; mechanizm Kranza utrzymuje [CO₂] przy RuBisCO → minimalne fotooddychanie; wyższy WUE → więcej biomasy przy tej samej utracie wody. Przełomowy eksperyment: Hatch & Slack 1966 odkryli szlak C4 u kukurydzy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.c3c4cam, question_type: 'multiple',
    question_text: 'Które z poniższych cech POPRAWNIE identyfikują roślinę jako CAM? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Kwasowość liści jest wyraźnie wyższa o świcie niż o zachodzie słońca — nocna akumulacja malatu w wakuolach obniża pH', is_correct: true },
      { id: 'B', text: 'Stomata wykazują odwrócony rytm dobowy: otwierają się w ciemności (noc) i zamykają w świetle (dzień)', is_correct: true },
      { id: 'C', text: 'Rośliny CAM rosną wyłącznie na pustyniach i nigdy nie można ich znaleźć w wilgotnych lasach tropikalnych lub jako epifity', is_correct: false },
      { id: 'D', text: 'Zawartość izotopu ¹³C w tkankach roślin CAM jest pośrednia między C3 (bardziej negatywna δ¹³C ≈ -27‰) a C4 (mniej negatywna δ¹³C ≈ -13‰), ponieważ obie karboksylazy (PEPC i RuBisCO) dyskryminują ¹³C w różnym stopniu', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) titracja kwasowości: rano pH soku wakuolarnego ≈ 3–4 (dużo malatu); wieczorem pH ≈ 6 (mało malatu); prosta metoda identyfikacji CAM. (B) odwrócony rytm: CAM stomata sterowane przez ABA i rytm dobowy (circadian clock) + malat/cytrynian hamuje otwieranie w dzień (bo [CO₂] wysoki z dekarboxylacji malatu). (C) fałsz: CAM powszechne w epifitach tropikalnych (Orchidaceae, Bromeliaceae, Cactaceae w lesie deszczowym); ≈7% gatunków roślin naczyniowych to CAM; spotykane w wilgotnych środowiskach jako adaptacja do epifitycznego stylu życia (brak gleby → ograniczony dostęp do wody). (D) dyskryminacja izotopowa: PEPC dyskryminuje ¹³C mniej (frakc. = 5,7‰) niż RuBisCO (frakc. = 30‰); C3: δ¹³C ≈ -27‰; C4: ≈-13‰; CAM: ≈-15 do -22‰ (pośrednie, zależnie od proporcji nocne/dzienne wiązanie).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.c3c4cam, question_type: 'single',
    question_text: 'Punkt kompensacji CO₂ (CCP) to stężenie CO₂, przy którym fotosynteza brutto = oddychanie (wymiana netto = 0). Jak różnią się rośliny C3 i C4 pod względem CCP?',
    options: [
      { id: 'A', text: 'C3 mają wyższy CCP (≈50–100 ppm CO₂) niż C4 (≈0–10 ppm CO₂), ponieważ C4 dzięki pompie CO₂ mogą asymilować węgiel nawet przy bardzo niskim zewnętrznym stężeniu CO₂', is_correct: true },
      { id: 'B', text: 'C3 i C4 mają identyczny CCP ≈ 400 ppm (równy aktualnemu stężeniu CO₂ w atmosferze); różnica między nimi dotyczy wyłącznie maksymalnej szybkości fotosyntezy, nie progu CO₂', is_correct: false },
      { id: 'C', text: 'C4 mają wyższy CCP niż C3, ponieważ dodatkowy etap PEP-karboksylazy zużywa ATP, co podnosi koszty oddychania i wymaga wyższego stężenia CO₂ do kompensacji', is_correct: false },
      { id: 'D', text: 'CCP nie ma znaczenia praktycznego ponieważ rośliny na zewnątrz zawsze otrzymują nadmiar CO₂ z oddychania gleby; punkt kompensacji jest aktualny tylko w zamkniętych pojemnikach laboratoryjnych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'CCP (CO₂ compensation point): C3: ≈40–100 ppm CO₂ (zależy od T; przy 25°C ≈50 ppm); C4: ≈0–10 ppm (prawie zero). Wyjaśnienie: C4 PEP-karboksylaza pompuje CO₂ do BSC nawet gdy zewnętrzne [CO₂] = niskie → RuBisCO pracuje przy wysokim [CO₂] → bez fotooddychania. Implikacje praktyczne: (1) rośliny mogą rosnąć w zamkniętych przestrzeniach gdzie C3 nie mogą; (2) w przyszłości przy wzroście [CO₂] atmosferycznego przewaga C4 może maleć; (3) w szklarniach: dodawanie CO₂ (do 1000 ppm) zwiększa plony C3, mniej C4.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TRANSPIRACJA I GOSPODARKA WODNA (3) ──────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.trans, question_type: 'single',
    question_text: 'Transpiracja szparkowa jest główną drogą utraty wody przez roślinę. Który mechanizm leży u podstaw otwierania aparatów szparkowych?',
    options: [
      { id: 'A', text: 'Akumulacja jonów K⁺ w komórkach szparkowych (guard cells) obniża ich potencjał osmotyczny → napływ wody osmozą → wzrost turgoru → asymetryczna budowa ściany komórkowej powoduje zakrzywienie komórek i otwarcie szpary', is_correct: true },
      { id: 'B', text: 'Komórki szparkowe aktywnie pompują wodę na zewnątrz, tworząc próżnię wewnątrz szpary; ciśnienie atmosferyczne rozdyma komórki od zewnątrz i mechanicznie otwiera szparę', is_correct: false },
      { id: 'C', text: 'Aparaty szparkowe otwierają się wyłącznie pod wpływem wiatru — przepływ powietrza nad liściem tworzy siłę aerodynamiczną, która mechanicznie rozsuwa komórki szparkowe', is_correct: false },
      { id: 'D', text: 'Otwarcie szparek odbywa się przez elongację krawędziowych komórek epidermy (nie szparkowych); komórki szparkowe są pasywnym przegrodą regulowaną przez ciśnienie epidermy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mechanizm otwierania szparek: (1) bodziec (światło, CO₂, rytm dobowy) → aktywacja H⁺-ATPazy błonowej w komórkach szparkowych → wypompowanie H⁺ → hiperpolaryzacja błony; (2) hiperpolaryzacja aktywuje kanały K⁺-in → napływ K⁺ z komórek pomocniczych/epidermy; (3) osmoregulacja: K⁺ + aniony (Cl⁻, malat²⁻) → obniżenie Ψπ (potencjału osmotycznego); (4) osmoza: Ψw zewnątrz > Ψw wewnątrz → napływ H₂O → wzrost P (turgoru); (5) asymetryczna grubość ścian (ściana brzuszna gruba, grzbietowa cienka) → komórki giną i otwiera się szpara. ABA (kwas abscysynowy) → zamykanie: depolaryzacja błony → wypływ K⁺ → utrata turgoru.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.trans, question_type: 'multiple',
    question_text: 'Które z poniższych czynników ZWIĘKSZAJĄ intensywność transpiracji? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Wyższa temperatura powietrza — zwiększa gradient stężenia pary wodnej między przestworami międzykomórkowymi liścia a atmosferą oraz obniża względną wilgotność powietrza', is_correct: true },
      { id: 'B', text: 'Ruch powietrza (wiatr) — usuwa nasyconą parę wodną z otoczenia liścia, odnawiając gradient stężenia pary wodnej i przyspieszając dyfuzję', is_correct: true },
      { id: 'C', text: 'Wysoka wilgotność względna powietrza (>90%) — nasycone powietrze nie może przyjąć więcej pary wodnej, co zwiększa gradient stężenia i przyspiesza transpirację', is_correct: false },
      { id: 'D', text: 'Silne oświetlenie — powoduje otwieranie aparatów szparkowych (przez aktywację H⁺-ATPazy) i podgrzewanie blaszki liściowej, zwiększając gradient pary wodnej', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) temperatura: wzrost T → wzrost ciśnienia nasyconej pary wodnej w przestworach liścia; jeśli Tatm < Tliść → duży gradient; Relative humidity (RH) spada przy wyższej T przy stałej bezwzględnej wilgotności. (B) wiatr: boundary layer effect — warstwa przygraniczna nasyconej pary wodnej nad powierzchnią liścia jest usuwana → gradient odnawiany. (C) fałsz: wysoka wilgotność (90%) = małe nasycenie atmosfery → mały gradient [H₂O] pomiędzy liściem a atmosferą → mała transpiracja. (D) światło: niebieskie (450 nm) aktywuje H⁺-ATPazę → otwieranie szparek; czerwone → fotosynteza → obniżenie [CO₂] w mezofilu → dodatkowy sygnał do otwierania; też podgrzewanie liścia → wzrost ciśnienia nasycenia.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.trans, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących potencjału wodnego i transpiracji:',
    options: [
      { id: 'A', text: 'Potencjał wodny (Ψw) wyraża się w jednostkach ciśnienia (Pa lub MPa); woda przepływa spontanicznie z obszaru wyższego Ψw (mniej ujemny) do niższego Ψw (bardziej ujemny); w roślinach Ψw spada od gleby (≈0) przez korzenie i łodygę do liści.', is_correct: true },
      { id: 'B', text: 'Potencjał osmotyczny (Ψπ) komórki ma zawsze wartość ujemną (obecność substancji rozpuszczonych obniża Ψw); potencjał turgorowy (Ψp) ma wartość dodatnią (ciśnienie turgoru wywołuje przepływ wody na zewnątrz komórki).', is_correct: true },
      { id: 'C', text: 'Transpiracja kutykularna zachodzi przez kutynową warstwę epidermy i jest główną drogą utraty wody u roślin; aparaty szparkowe pełnią rolę drugoplanową i odpowiadają za mniej niż 10% utraty wody.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Ψw = Ψπ + Ψp + Ψg (grawitacyjny); gleba: Ψw ≈ -0,03 MPa; korzeń: ≈-0,3 MPa; liść: ≈-1 do -2 MPa; atmosfera: ≈-100 MPa (przy RH 50%); gradient napędza kohezyjno-napięciowy przepływ wody (SPAC). B — Prawda: czysta woda: Ψπ = 0; solucja: Ψπ < 0; turgor: Ψp > 0 (nacisk wody na ścianę komórkową → ściana odpycha wodę na zewnątrz, czyli Ψp jest składnikiem podnoszącym Ψw komórki). C — Fałsz: szparkowa transpiracja = 90–95% utraty wody liścia; kutykularna = 5–10% (kutyna = bariera hydrofobowa, ale przepuszcza trochę wody; grubość kutykuli różna: rośliny kserofityczne mają grubą kutynę).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
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
