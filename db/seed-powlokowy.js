// Seed: Układ powłokowy i termoregulacja — 10 questions
// Topic: c5770794-1a0d-4d45-83b5-c9f9f01a17a4

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = 'c5770794-1a0d-4d45-83b5-c9f9f01a17a4'

const S = {
  budowa:        'b6b2553e-adaf-4f0f-9b53-dd7fa8787caa',
  funkcje:       'b8be0347-d12d-4297-ab44-c8ea5d35a96c',
  przydatki:     '3abdf886-b3eb-4d19-bf67-d76172f02d00',
  witaminaD:     'f8307955-ebcb-457d-855d-e5fac773c64e',
  termoregulacja:'76130dd3-3234-40f8-83f0-1f514f76a56d',
}

const questions = [
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.budowa,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy skóry człowieka.\nA. Naskórek (epidermis) jest zbudowany z nabłonka wielowarstwowego płaskiego rogowaciejącego i nie zawiera naczyń krwionośnych.\nB. Skóra właściwa (dermis) zawiera włókna kolagenowe i elastynowe, gruczoły potowe, mieszki włosowe oraz naczynia krwionośne.\nC. Tkanka podskórna (hypodermis) zbudowana jest głównie z tkanki tłuszczowej i stanowi część naskórka.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Naskórek to nabłonek wielowarstwowy płaski rogowaciejący bez naczyń krwionośnych.', is_correct: true },
      { id: 'B', text: 'Skóra właściwa zawiera kolagen, elastynę, gruczoły potowe, mieszki włosowe i naczynia.', is_correct: true },
      { id: 'C', text: 'Tkanka podskórna zbudowana z tkanki tłuszczowej stanowi część naskórka.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: naskórek jest beznaczyniowy — komórki głębszych warstw odżywiane są przez dyfuzję z naczyń skóry właściwej. Składa się z warstw: podstawnej, kolczystej, ziarnistej, jasnej (tylko na dłoniach/stopach) i rogowej. B — Prawda: skóra właściwa (dermis) to tkanka łączna zawierająca włókna kolagenowe i elastynowe, gruczoły (potowe, łojowe), mieszki włosowe, receptory czuciowe i naczynia. C — Fałsz: tkanka podskórna (hypodermis/podskórek) to ODRĘBNA warstwa pod skórą właściwą — nie jest częścią naskórka. Pełni funkcję izolacyjną i energetyczną.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.budowa,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nW naskórku człowieka komórki ulegają stałej wymianie — keratynocyty migrują od warstwy podstawnej ku powierzchni. W tym procesie:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'komórki warstwy podstawnej dzielą się mejotycznie, produkując nowe komórki, które zastępują złuszczające się keratynocyty warstwy rogowej', is_correct: false },
      { id: 'B', text: 'keratynocyty wędrując ku powierzchni tracą jądro komórkowe i wypełniają się keratyną, tworząc martwe łuski warstwy rogowej', is_correct: true },
      { id: 'C', text: 'melanocyty warstwy podstawnej produkują keratynę odpowiedzialną za rogowacenie naskórka', is_correct: false },
      { id: 'D', text: 'keratynocyty warstwy rogowej aktywnie produkują kolagen, który wzmacnia barierę naskórkową', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Cykl keratynocytu: podział mitotyczny w warstwie podstawnej → migracja przez warstwy kolczystą i ziarnistą (synteza keratyny, tworzenie ziarnistości keratohialiny) → warstwa rogowa: utrata jądra i organelli, komórka wypełniona keratyną (korneocyt) → złuszczanie się z powierzchni skóry. Całkowita wymiana naskórka zajmuje ok. 28 dni. A — błąd: podziały mitotyczne, nie mejotyczne. C — błąd: melanocyty produkują melaninę (pigment), nie keratynę. D — błąd: kolagen syntetyzowany jest przez fibroblasty skóry właściwej.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.funkcje,
    question_text: 'Które z poniższych funkcji pełni skóra człowieka?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Bariera ochronna przed drobnoustrojami, UV i utratą wody', is_correct: true },
      { id: 'B', text: 'Udział w termoregulacji przez pocenie się i zmianę przepływu krwi w naczyniach skórnych', is_correct: true },
      { id: 'C', text: 'Synteza witaminy D₃ pod wpływem promieniowania UVB', is_correct: true },
      { id: 'D', text: 'Główny narząd wydalniczy usuwający mocznik i CO₂ z organizmu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Skóra pełni wiele funkcji: A — bariera mechaniczna (keratyna), chemiczna (pH 4,5–5,5, kwas mlekowy) i biologiczna (mikrobiom skóry, komórki Langerhansa = makrofagi naskórka). B — termoregulacja: gruczoły potowe (chłodzenie przez parowanie) i wazodylatacja/wazokonstrykcja naczyń skórnych. C — synteza cholekalcyferolu (witamina D₃) z 7-dehydrocholesterolu pod wpływem UVB. D — błąd: głównym narządem wydalniczym jest nerka (usuwa mocznik z moczem); CO₂ usuwane jest przez płuca. Skóra wydala jedynie śladowe ilości soli i mocznika w pocie.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.funkcje,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących melaniny i ochrony przed promieniowaniem UV.\nA. Melanina jest syntetyzowana przez melanocyty zlokalizowane w warstwie podstawnej naskórka, a następnie transportowana do keratynocytów.\nB. Melanina pochłania promieniowanie UV, chroniąc DNA keratynocytów przed mutacjami mogącymi prowadzić do nowotworów skóry.\nC. Opalenizna (wzrost produkcji melaniny) jest natychmiastową reakcją obronną skóry — pojawia się już w ciągu minut od ekspozycji na słońce.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Melanocyty syntetyzują melaninę i przekazują ją do keratynocytów.', is_correct: true },
      { id: 'B', text: 'Melanina pochłania UV, chroniąc DNA przed mutacjami nowotworowymi.', is_correct: true },
      { id: 'C', text: 'Opalenizna pojawia się już w ciągu minut od ekspozycji na słońce.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: melanocyty (ok. 1 na 10 keratynocytów w warstwie podstawnej) syntetyzują melaninę w melanosomach i przekazują ją poprzez dendryty do keratynocytów — melanosomy tworzą "parasol" nad jądrem komórkowym, chroniąc DNA. B — Prawda: melanina (eumelanina ciemna i feomelanina żółto-czerwona) absorbuje fotony UV, przekształcając ich energię w ciepło — zmniejsza ryzyko mutacji i czerniaka. C — Fałsz: trwała opalenizna (wzrost syntezy melaniny przez melanocyty) pojawia się po 2–3 dniach od ekspozycji. Natychmiastowe pociemnienie skóry (IPD) to utlenianie już istniejącej melaniny, trwa tylko kilka godzin.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.przydatki,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nGruczoły łojowe skóry człowieka:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wydzielają pot (głównie wodę z solami mineralnymi) w celu chłodzenia powierzchni ciała', is_correct: false },
      { id: 'B', text: 'wydzielają łój (sebum) — mieszaninę lipidów, która natłuszcza skórę i włosy oraz działa antybakteryjnie', is_correct: true },
      { id: 'C', text: 'są gruczołami zewnątrzwydzielniczymi, których przewody uchodzą bezpośrednio na powierzchnię skóry, z dala od mieszków włosowych', is_correct: false },
      { id: 'D', text: 'produkują keratynę wzmacniającą strukturę włosa i paznokcia', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Gruczoły łojowe (glandulae sebaceae) to gruczoły holokrynowe — cała komórka ulega rozpadowi, uwalniając zawartość (sebum). Łój to mieszanina trójglicerydów, wosków, skwalenu i fosfolipidów. Uchodzi do mieszka włosowego (wyjątek: wargi, napletku). Funkcje: nawilżanie skóry i włosów, tworzenie bariery hydrofobowej, słabe działanie antybakteryjne i przeciwgrzybicze (kwasy tłuszczowe). A — opisuje gruczoły potowe (ekrynowe). C — błąd: gruczoły łojowe uchodzą do mieszka włosowego, nie bezpośrednio na skórę. D — keratyną zajmują się keratynocyty.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.przydatki,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących włosów i paznokci.\nA. Włosy i paznokcie są zbudowane z martwych komórek wypełnionych keratyną twardą, wytwarzanych przez żywe komórki macierzy (matrix).\nB. Mięsień przywłośny (arrector pili) to mięsień gładki, którego skurcz powoduje "gęsią skórkę" i pionowe ustawienie włosa.\nC. Wzrost paznokcia następuje od wolnego brzegu (dystalnego), gdzie keratynocyty dzielą się i przesuwają ku nasadzie (proximalnemu).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Włosy i paznokcie zbudowane są z martwych komórek z keratyną, tworzonych przez żywą macierz.', is_correct: true },
      { id: 'B', text: 'Mięsień przywłośny (gładki) powoduje gęsią skórkę i pionowe ustawienie włosa.', is_correct: true },
      { id: 'C', text: 'Wzrost paznokcia następuje od wolnego brzegu (dystalnego).', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: zarówno włosy jak i paznokcie tworzą się przez keratynizację komórek macierzy (germinativum) — żywe komórki mnożą się, wypełniają keratyną twardą i obumierają, tworząc struktury nieżywe. B — Prawda: mięsień przywłośny (mięsień gładki) łączy mieszko włosowe ze skórą właściwą; przy skurczu (zimno, stres — noradrenalina) włos prostuje się, a skóra wokół unosi — efekt "gęsiej skórki". C — Fałsz: wzrost paznokcia następuje od strony BLIŻSZEJ (proksymalnej) — z macierzy paznokcia pod wałem paznokciowym; wolny brzeg to koniec, gdzie paznokieć jest najstarszy i ulega obcięciu.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.witaminaD,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nWitamina D₃ (cholekalcyferol) jest syntetyzowana w skórze, a następnie aktywowana w dwóch etapach:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'w żołądku i jelicie cienkim, gdzie ulega wchłonięciu i przekształceniu w aktywną formę', is_correct: false },
      { id: 'B', text: 'najpierw w wątrobie (25-hydroksylacja → kalcydiol), następnie w nerkach (1α-hydroksylacja → kalcytriol — aktywna forma)', is_correct: true },
      { id: 'C', text: 'wyłącznie w nerkach, gdzie ulega jednoetapowej aktywacji do kalcytriolu pod wpływem parathormonu', is_correct: false },
      { id: 'D', text: 'w skórze pod wpływem UVA, a następnie bezpośrednio transportowana do kości jako aktywna forma', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Szlak aktywacji witaminy D: 7-dehydrocholesterol (skóra) + UVB → cholekalcyferol (D₃) → transport do wątroby → 25-hydroksylacja → kalcydiol (25-OH-D₃, forma magazynowana, oznaczana w badaniach) → transport do nerek → 1α-hydroksylaza (stymulowana PTH i hipofosfatemią) → kalcytriol (1,25-(OH)₂-D₃) — AKTYWNA HORMONALNA FORMA. Kalcytriol zwiększa wchłanianie Ca²⁺ i PO₄³⁻ w jelicie, reguluje gospodarkę kostną. A, C, D — błędne opisy szlaku.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.witaminaD,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących witaminy D i jej roli w organizmie.\nA. Niedobór witaminy D u dzieci prowadzi do krzywicy (rachityzmu) — zaburzenia mineralizacji kości objawiającego się deformacjami kostnymi.\nB. Witamina D działa jak hormon steroidowy — jej aktywna forma (kalcytriol) wiąże się z receptorem jądrowym i reguluje ekspresję genów.\nC. Witamina D wchłaniana z pożywienia nie wymaga aktywacji w wątrobie i nerkach — jest bezpośrednio wykorzystywana przez komórki.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Niedobór witaminy D u dzieci powoduje krzywicę z deformacjami kostnymi.', is_correct: true },
      { id: 'B', text: 'Kalcytriol działa jak hormon steroidowy, wiążąc się z receptorem jądrowym.', is_correct: true },
      { id: 'C', text: 'Witamina D z pożywienia nie wymaga aktywacji w wątrobie i nerkach.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: bez witaminy D upośledzone jest wchłanianie wapnia → niedostateczna mineralizacja rosnących kości → krzywica (rachitis): miękkie, gięte kości, koślawość kolan, opóźnienie zamknięcia ciemiączka. U dorosłych niedobór powoduje osteomalację. B — Prawda: kalcytriol (1,25-(OH)₂-D₃) to hormon steroidowy — lipofilny, przechodzi przez błonę komórkową, wiąże się z receptorem VDR (vitamin D receptor) w jądrze → kompleks VDR-kalcytriol reguluje transkrypcję genów (m.in. kalbindyny — białka transportującego Ca²⁺ w jelicie). C — Fałsz: witamina D₂ (ergokalcyferol) i D₃ z diety wymagają TAKIEJ SAMEJ dwuetapowej aktywacji (wątroba → nerki) jak forma syntetyzowana w skórze.',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.termoregulacja,
    question_text: 'Które z poniższych mechanizmów są stosowane przez organizm człowieka w celu ODDAWANIA ciepła przy przegrzaniu?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Rozszerzenie naczyń krwionośnych skóry (wazodylatacja) — zwiększa oddawanie ciepła przez promieniowanie i konwekcję', is_correct: true },
      { id: 'B', text: 'Wydzielanie potu — chłodzenie przez parowanie wody z powierzchni skóry', is_correct: true },
      { id: 'C', text: 'Dreszcze (mimowolne skurcze mięśni szkieletowych) — produkcja ciepła przez termogenezę drżeniową', is_correct: false },
      { id: 'D', text: 'Przyspieszenie oddechu — zwiększone parowanie z dróg oddechowych (hiperwentylacja termiczna)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Mechanizmy UTRATY ciepła (przy przegrzaniu): A — wazodylatacja skórna: centrum termoregulacji w podwzgórzu pobudza rozszerzenie naczyń skóry → więcej ciepłej krwi przy powierzchni → utrata przez promieniowanie, konwekcję i przewodzenie. B — pocenie: gruczoły potowe ekrynowe wydzielają pot (głównie wodę + NaCl) → parowanie pochłania energię (2,4 kJ/g) → chłodzenie. D — przyspieszony oddech: parowanie z dróg oddechowych oddaje ciepło (u ludzi ograniczone, dominujące u psów — ziajanie). C — błąd: dreszcze to mechanizm PRODUKCJI ciepła przy wychłodzeniu, nie oddawania ciepła.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.termoregulacja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących termoregulacji człowieka.\nA. Centrum termoregulacji znajduje się w podwzgórzu, które porównuje temperaturę krwi do wartości zadanej (ok. 37°C) i koordynuje odpowiedzi efektorów.\nB. Termogeneza bezdrżeniowa u człowieka dorosłego polega głównie na wzmożonej aktywności brunatnej tkanki tłuszczowej, która jest szczególnie aktywna u niemowląt.\nC. Gorączka jest wyłącznie patologiczna — nie pełni żadnej korzystnej roli w walce z infekcją.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Centrum termoregulacji w podwzgórzu porównuje temperaturę krwi do wartości zadanej ~37°C.', is_correct: true },
      { id: 'B', text: 'Termogeneza bezdrżeniowa u dorosłego polega głównie na aktywności brunatnej tkanki tłuszczowej, bardzo aktywnej u niemowląt.', is_correct: true },
      { id: 'C', text: 'Gorączka jest wyłącznie patologiczna i nie pełni żadnej korzystnej roli.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: podwzgórze (okolica przedwzrokowa) zawiera termoreceptory centralne i integruje sygnały z termoreceptorów obwodowych skóry — reguluje odpowiedzi: gruczoły potowe, naczynia skórne, dreszcze, metabolizm. B — Prawda: brunatna tkanka tłuszczowa (BAT) zawiera białko UCP1 (termogenina) — rozsprzęga łańcuch oddechowy, produkując ciepło zamiast ATP. U niemowląt BAT stanowi ok. 5% masy ciała (brak drżenia termicznego); u dorosłych jej rola jest mniejsza, ale nadal obecna (szczególnie w okolicach szyi i klatki). C — Fałsz: gorączka (pyrogeny → prostaglandyna E₂ → podwyższenie wartości zadanej w podwzgórzu) ma działanie obronne: przyspiesza reakcje immunologiczne, hamuje namnażanie drobnoustrojów i stymuluje syntezę białek ostrej fazy.',
    difficulty: 2,
    verified: true,
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body))
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions',
      method: 'POST',
      headers: {
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve(res.statusCode)) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} questions for Układ powłokowy i termoregulacja...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
