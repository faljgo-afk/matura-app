// Seed: open questions — Regulacja wydalania (2 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC = 'b876f606-00ef-4586-81c2-82d3fe69e97d'
const SUBTOPIC = '7bd4a3e4-c538-4ad2-9f34-600d3c99dcce' // Regulacja wydalania

const questions = [
  {
    topic_id: TOPIC, subtopic_id: SUBTOPIC,
    question_type: 'open',
    question_text: 'Wyjaśnij, w jaki sposób układ renina–angiotensyna–aldosteron (RAA) reguluje wydalanie sodu i wody przez nerki. Wskaż bodziec inicjujący kaskadę i efekt końcowy dla ciśnienia tętniczego.',
    options: [], correct_answer: [],
    explanation: '↓ciśnienia/↓Na⁺ → komórki przykłębkowe nerki → renina → angiotensynogen → angiotensyna I → ACE (płuca) → angiotensyna II → (1) aldosteron (kora nadnerczy) → ↑ENaC/Na⁺K⁺ATPaza w DCT/CD → reabsorpcja Na⁺ + H₂O → ↑objętość osocza → ↑ciśnienia; (2) bezpośredni skurcz arterioli → ↑oporu naczyniowego → ↑BP; (3) pragnienie + ↑ADH.',
    max_points: 2,
    key_points: [
      'Kaskada RAA — bodziec i etapy: bodziec: ↓ciśnienia perfuzji kłębuszka nerkowego (np. odwodnienie, krwotok, ↓sodu w DCT, ↑aktywności układu współczulnego β₁) → komórki przykłębkowe (juxtaglomerular cells, ziarniste komórki w ścianie tętniczki doprowadzającej) wydzielają reninę (proteazę aspartylową) do krwi; renina → angiotensynogen (białko osocza produkowane przez wątrobę) → angiotensyna I (dekapeptyd, biologicznie prawie nieaktywna) → enzym konwertujący angiotensynę (ACE, kininaza II, głównie w płucach, też nerkach, śródbłonku) odcina 2 aminokwasy → angiotensyna II (oktapeptyd, silnie aktywna)',
      'Efekty angiotensyny II i wynik końcowy: (1) kora nadnerczy (strefa kłębkowata) → ↑synteza i wydzielanie aldosteronu (mineralokortykoid); aldosteron → receptor MR w komórkach głównych DCT i cewki zbiorczej → genomowy efekt: ↑transkrypcja ENaC (apikalny kanał Na⁺) + podjednostek Na⁺/K⁺-ATPazy (basolateralnie) → ↑reabsorpcja Na⁺ z moczu → osmotycznie woda idzie za Na⁺ → ↑objętość osocza; wymiana Na⁺/K⁺: ↑wydalanie K⁺ i H⁺ (hipokalemia i zasadowica metaboliczna przy hiperaldosteronizmie); (2) angiotensyna II bezpośrednio: skurcz tętniczki odprowadzającej kłębuszka → ↑ciśnienia filtracji; skurcz arterioli systemowych → ↑TPR → ↑BP; pobudzenie pragnienia (centrum pragnienia w podwzgórzu) + ↑wydzielanie ADH → ↑reabsorpcja H₂O; wynik: ↑objętość osocza + ↑oporu naczyniowego → przywrócenie ciśnienia tętniczego'
    ],
    model_answer: 'Układ RAA (renina–angiotensyna–aldosteron): Bodziec inicjujący: ↓ciśnienia tętniczego (lub ↓[Na⁺] w cewce dalszej, lub ↑napięcia współczulnego β₁) → aparat przykłębkowy nerki (juxtaglomerular apparatus: komórki ziarniste JG w ścianie afferent arteriole + plamka gęsta DCT). Kaskada: (1) renina (proteaza) → angiotensynogen (hepatocyty) → angiotensyna I (10 aa, nieaktywna); (2) ACE (angiotensin-converting enzyme, Zn²⁺-metaloproteaza, śródbłonek płucny/nerkowy/naczyniowy) → angiotensyna II (8 aa, silny vasoconstrictor); (3) angiotensyna II → receptory AT₁: (a) kora nadnerczy (zona glomerulosa) → synteza aldosteronu (steroid, wchodzi do komórki → receptor MR → jądro → ↑transkrypcja ENaC, ROMK, Na⁺/K⁺-ATPazy → ↑reabsorpcja Na⁺ w DCT/CD → osmotyczny transport H₂O → ↑objętość krwi); (b) bezpośrednia wazokonstrykcja arterioli → ↑TPR → ↑BP; (c) ↑wydzielanie ADH (wazopresyny) + ↑pragnienie → ↑reabsorpcja H₂O; (d) ↑retencja Na⁺ w PCT (via NHE3). Efekt końcowy: ↑objętość osocza + ↑TPR → normalizacja MAP (mean arterial pressure). Hamowanie układu RAA: inhibitory ACE (kaptopril, enalapril — leki na nadciśnienie); antagoniści receptora AT₁ (sartany: losartan); antagoniści aldosteronu (spironolakton — oszczędzający K⁺ diuretyk).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: SUBTOPIC,
    question_type: 'open',
    question_text: 'Porównaj działanie aldosteronu i ADH (wazopresyny) na nerki. W jaki sposób każdy z tych hormonów wpływa na skład i objętość moczu? Wskaż różnice w bodźcach wyzwalających ich wydzielanie.',
    options: [], correct_answer: [],
    explanation: 'Aldosteron (mineralokortykoid, kora nadnerczy): bodziec = ↓Na⁺/↑K⁺/↑angiotensyna II → działa na DCT/CD → ↑reabsorpcja Na⁺ + ↑wydalanie K⁺ → ↑objętość moczu zmniejsza się (woda za Na⁺). ADH (wazopresyna, podwzgórze→neurohypofyza): bodziec = ↑osmolalność osocza / ↓ciśnienia → działa na CD przez AQP2 → ↑reabsorpcja H₂O → zagęszczony mocz, mała objętość. Aldosteron = regulacja składu elektrolitowego; ADH = regulacja osmolalności/objętości.',
    max_points: 2,
    key_points: [
      'Aldosteron — mechanizm i bodziec: kora nadnerczy (zona glomerulosa), mineralokortykoid steroidowy; bodźce: ↑angiotensyna II (RAA) + ↑[K⁺] osocza (hiperkaliemia) + ↓[Na⁺]; miejsce działania: DCT i cewka zbiorcza (komórki główne); mechanizm: receptor MR (cytoplazmatyczny) → kompleks receptor-hormon → jądro → ↑transkrypcja ENaC (kanał Na⁺ apikalny) + Na⁺/K⁺-ATPazy (basolateralnie) + ROMK (kanał K⁺ apikalny); efekt nerkowy: ↑reabsorpcja Na⁺ (i Cl⁻ za nim) → ↑osmolalność śródmiąższu → osmotyczny ciąg wody (pośredni efekt na objętość); ↑wydalanie K⁺ i H⁺; mocz: ↑[Na⁺] wewnątrz (mniej w moczu), ↑[K⁺] w moczu; główna rola: regulacja składu elektrolitowego i ciśnienia objętościowego',
      'ADH (wazopresyna) — mechanizm i bodziec: podwzgórze (synteza w SON/PVN) → neurohypofyza (wydzielanie); bodźce: ↑osmolalność osocza (próg ~285–295 mOsm/kg, wzrost o 1–2%) + ↓ciśnienia tętniczego/↓objętości (baroreceptory) + ból, nudności, stres; miejsce działania: cewka zbiorcza (komórki główne) + ramię wstępujące pętli Henlego; mechanizm: V2R → Gs → cAMP → PKA → fosforylacja AQP2 → fuzja pęcherzyków AQP2 z błoną apikalną → otwarte kanały wodne; efekt nerkowy: ↑reabsorpcja H₂O (bez elektrolitów!) → mocz zagęszczony (do 1200 mOsm/kg), mała objętość (0,5–1 L/dobę); NaCl ani K⁺ nie przepuszczane przez AQP2; główna rola: regulacja osmolalności osocza i objętości; kluczowa różnica: aldosteron reguluje [Na⁺]/[K⁺] i objętość przez elektrolity; ADH reguluje osmolalność przez samą wodę'
    ],
    model_answer: 'Porównanie aldosteronu i ADH: ALDOSTERON: Źródło: kora nadnerczy (zona glomerulosa); Klasa: mineralokortykoid (steroid, lipofilny → receptor wewnątrzkomórkowy MR); Bodźce wydzielania: (1) ↑angiotensyna II (oś RAA przy ↓BP/odwodnieniu), (2) hiperkaliemia (↑[K⁺] osocza >5,5 mmol/L bezpośrednio stymuluje komórki ZG), (3) hiponatremia; Miejsce działania w nerce: DCT (kanalik dalszy krętny) i CD (cewka zbiorcza) — komórki główne; Mechanizm: wchodzi do komórki → MR → dimer → jądro → ↑ekspresja ENaC, Na⁺/K⁺-ATPazy, ROMK; Efekt: ↑reabsorpcja Na⁺ (i Cl⁻) → woda idzie osmotycznie za Na⁺ (pośrednio ↑objętość); ↑wydalanie K⁺ i H⁺ do moczu; Mocz: ↓[Na⁺] w moczu, ↑[K⁺] w moczu, ↑objętość reabsorbowana (↓diureza). ADH (wazopresyna, AVP): Źródło: podwzgórze (SON/PVN) → neurohypofyza; Klasa: peptyd (9 aa) → receptor błonowy V2R; Bodźce wydzielania: (1) ↑osmolalność osocza >295 mOsm/kg (osmoreceptory podwzgórza, główny bodziec), (2) ↓objętości krwi/↓BP (baroreceptory zatoki szyjnej i aorty, wtórny bodziec), (3) angiotensyna II, ból, wymioty; Miejsce działania: cewka zbiorcza (CD) i rdzeniowa część pętli; Mechanizm: V2R → Gs-cAMP → PKA → fosforylacja AQP2 → wstawienie do błony apikalnej → przepuszczalność dla H₂O; Efekt: reabsorpcja czystej wody (bez elektrolitów!) wzdłuż gradientu osmotycznego rdzenia; Mocz: ↑osmolalność moczu (do 1200 mOsm/kg), ↓objętość (do 0,3 L/dobę). Kluczowa różnica: aldosteron = regulator elektrolitowy (Na⁺/K⁺) i ciśnienia objętościowego; ADH = regulator osmolalności (wody); działają synergistycznie przy odwodnieniu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions',
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
  console.log(`Seeding ${questions.length} open questions for Regulacja wydalania...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.max_points}pkt]`, q.question_text.slice(0, 68).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
