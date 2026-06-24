// Seed: Narządy zmysłów — 10 questions
// Topic: 3e133173-98dd-4ca6-a35a-fbc388646354

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '3e133173-98dd-4ca6-a35a-fbc388646354'

const S = {
  oko:          '8bb948ee-7e73-4026-8ffd-054c2ff1f1d3',
  fotoreceptory:'f1eb0693-7da6-4a9c-bb53-70b0eb85273b',
  wady:         'f744279d-4057-4678-a9e1-bcd1913f0449',
  ucho:         'cb00ccb8-621f-4056-862a-fa8993480298',
  slyszenie:    '03a20c72-b897-4f94-a81e-7b2bd3cafd69',
  chemoreceptory:'9782fe2a-7012-4165-b23f-545fe0c7b0e1',
  skorne:       '78ffad1b-12bd-46d1-a419-626401847a47',
}

const questions = [
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.oko,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy oka człowieka.\nA. Tęczówka reguluje ilość światła wpadającego do oka poprzez zmianę średnicy źrenicy.\nB. Ciało szkliste (humor vitreus) wypełnia komorę przednią oka między rogówką a soczewką.\nC. Siatkówka zawiera fotoreceptory i jest połączona z mózgiem przez nerw wzrokowy wychodzący w miejscu zwanym plamką ślepą.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Tęczówka reguluje ilość światła przez zmianę średnicy źrenicy.', is_correct: true },
      { id: 'B', text: 'Ciało szkliste wypełnia komorę przednią między rogówką a soczewką.', is_correct: false },
      { id: 'C', text: 'Siatkówka połączona jest z mózgiem przez nerw wzrokowy wychodzący w plamce ślepej.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: tęczówka (iris) to mięśniowa przesłona z otworem zwanym źrenicą — mięsień zwieracz źrenicy (parasympatyczny) zwęża ją w jasnym świetle, a mięsień rozszerzacz (sympatyczny) rozszerza w ciemności. B — Fałsz: ciało szkliste (przezroczysta galareta) wypełnia komorę tylną oka — między soczewką a siatkówką. Komorę przednią (między rogówką a tęczówką) wypełnia ciecz wodnista (humor aquosus). C — Prawda: plamka ślepa (discus nervi optici) to miejsce wyjścia nerwu wzrokowego z gałki ocznej — brak tu fotoreceptorów, więc brak widzenia w tym punkcie.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.oko,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nAkomodacja oka polega na:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'zmianie średnicy źrenicy w zależności od natężenia światła', is_correct: false },
      { id: 'B', text: 'zmianie krzywizny soczewki przez mięsień rzęskowy, co umożliwia ostre widzenie na różnych odległościach', is_correct: true },
      { id: 'C', text: 'przesuwaniu gałki ocznej przez mięśnie zewnętrzne oka w kierunku obserwowanego obiektu', is_correct: false },
      { id: 'D', text: 'zmianie ilości barwnika w komórkach siatkówki w zależności od oświetlenia', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Akomodacja to proces dostosowania ogniskowej soczewki do odległości obserwowanego obiektu. Przy patrzeniu z bliska: mięsień rzęskowy kurczy się → naprężenie obwódki rzęskowej maleje → soczewka staje się bardziej wypukła (krótsza ogniskowa). Przy patrzeniu w dal: mięsień rzęskowy rozkurcza się → obwódka naciąga soczewkę → soczewka staje się bardziej płaska. A — opisuje reakcję źrenicy na światło (nie akomodację). C — opisuje ruch gałki ocznej (mięśnie zewnętrzne). D — nie istnieje taki mechanizm.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.fotoreceptory,
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisuje różnice między czopkami a pręcikami siatkówki?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Pręciki są odpowiedzialne za widzenie barwne i skupione w dołeczku środkowym (fovea centralis), a czopki — za widzenie w półmroku', is_correct: false },
      { id: 'B', text: 'Czopki zawierają rodopsynę i są wrażliwe na słabe światło; pręciki zawierają jodopsynę i odpowiadają za widzenie barw', is_correct: false },
      { id: 'C', text: 'Czopki są skupione w plamce żółtej, odpowiadają za widzenie barwne i ostre; pręciki dominują na obwodzie siatkówki i działają w słabym świetle', is_correct: true },
      { id: 'D', text: 'Czopki i pręciki zawierają ten sam barwnik wzrokowy — rodopsynę — lecz różnią się kształtem', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Czopki (ok. 6 mln): skupione w plamce żółtej (fovea centralis), trzy typy zawierające różne odmiany jodopsyny (wrażliwe na czerwień, zieleń, niebieskość) → widzenie barwne i ostre; wymagają dobrego oświetlenia. Pręciki (ok. 120 mln): rozmieszczone na obwodzie siatkówki, zawierają rodopsynę (scotopsin + retinal) → widzenie czarno-białe w słabym świetle, wykrywanie ruchu. A — błąd: odwrócone role. B — błąd: odwrócone barwniki. D — błąd: czopki i pręciki mają różne barwniki wzrokowe.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.fotoreceptory,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transdukcji sygnału wzrokowego.\nA. Pod wpływem światła cis-retinal ulega izomeryzacji do trans-retinalu, co powoduje zmianę konformacji opsyny i wyzwolenie sygnału nerwowego.\nB. Rodopsyna jest barwnikiem wzrokowym czopków odpowiedzialnym za widzenie barwne w jasnym świetle.\nC. Po silnym oświetleniu (np. wyjściu z ciemnego pomieszczenia) pręciki potrzebują czasu na regenerację rodopsyny — jest to podstawa adaptacji do ciemności.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Światło powoduje izomeryzację cis-retinalu do trans-retinalu, wyzwalając sygnał nerwowy.', is_correct: true },
      { id: 'B', text: 'Rodopsyna jest barwnikiem wzrokowym czopków odpowiedzialnym za widzenie barwne.', is_correct: false },
      { id: 'C', text: 'Adaptacja do ciemności wymaga regeneracji rodopsyny w pręcikach.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: fotony absorbowane przez retinal (aldehyd witaminy A) powodują jego izomeryzację 11-cis → all-trans → zmiana kształtu rodopsyny → kaskada transdukcji przez transducynę → zmiana stężenia cGMP → zamknięcie kanałów jonowych → hiperpolaryzacja fotoreceptora → sygnał do neuronu. B — Fałsz: rodopsyna to barwnik PRĘCIKÓW (nie czopków). Czopki zawierają jodopsynę (fotopsyny — trzy typy dla różnych długości fal). C — Prawda: w jasnym świetle rodopsyna jest "wybielona" (rozłożona); w ciemności stopniowo się regeneruje (synteza trwa ok. 20–30 min) — stąd stopniowe widzenie w ciemności.',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.wady,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nU osoby z krótkowzrocznością (myopią) obraz odległych przedmiotów pada:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'za siatkówką, bo soczewka jest zbyt płaska — wadę koryguje soczewka skupiająca (wypukła)', is_correct: false },
      { id: 'B', text: 'przed siatkówką, bo gałka oczna jest zbyt długa lub soczewka zbyt wypukła — wadę koryguje soczewka rozpraszająca (wklęsła)', is_correct: true },
      { id: 'C', text: 'dokładnie na siatkówce, ale w obrębie plamki ślepej, dlatego obraz jest nieostry', is_correct: false },
      { id: 'D', text: 'za siatkówką z powodu zbyt małej krzywizny rogówki — wadę koryguje soczewka rozpraszająca', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Krótkowzroczność (myopia): gałka oczna zbyt długa lub układ optyczny zbyt silnie skupiający → ognisko pada PRZED siatkówką → nieostre widzenie daleko, ostre z bliska. Korekcja: soczewka wklęsła (dywergująca, ujemna dioptria) rozbija wiązki, odsuwając ognisko na siatkówkę. A — opisuje dalekowzroczność (hyperopia): ognisko za siatkówką, korekcja soczewką wypukłą (konwergującą). D — błąd: krótkowzroczność zwykle wynika z wydłużenia gałki, nie spłaszczenia rogówki; korekcja to soczewka wklęsła (nie rozpraszająca rogówki).',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ucho,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy ucha człowieka.\nA. Ucho środkowe zawiera trzy kosteczki słuchowe (młoteczek, kowadełko, strzemiączko), które przenoszą drgania z błony bębenkowej na okienko owalne.\nB. Trąbka słuchowa (Eustachiusza) łączy ucho środkowe z gardłem i wyrównuje ciśnienie po obu stronach błony bębenkowej.\nC. Ślimak (cochlea) jest strukturą ucha zewnętrznego i zawiera receptory słuchowe — komórki rzęsate.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Trzy kosteczki słuchowe przenoszą drgania z błony bębenkowej na okienko owalne.', is_correct: true },
      { id: 'B', text: 'Trąbka Eustachiusza łączy ucho środkowe z gardłem i wyrównuje ciśnienie.', is_correct: true },
      { id: 'C', text: 'Ślimak jest strukturą ucha zewnętrznego zawierającą komórki rzęsate.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: łańcuch kosteczek (malleus → incus → stapes) mechanicznie wzmacnia i przekazuje drgania z błony bębenkowej na płyn perylimfatyczny ślimaka przez okienko owalne. B — Prawda: trąbka słuchowa (tuba auditiva) otwiera się przy połykaniu i ziewaniu, wyrównując ciśnienie — dlatego przy zmianie wysokości "trzeszczą" uszy. C — Fałsz: ślimak jest częścią UCHA WEWNĘTRZNEGO (nie zewnętrznego); zawiera narząd Cortiego z komórkami rzęsatymi (właściwe receptory słuchu).',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.slyszenie,
    question_text: 'Które struktury ucha wewnętrznego są odpowiedzialne za wykrywanie równowagi i przyspieszenia?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Kanały półkoliste — wykrywają przyspieszenie obrotowe (kątowe) głowy', is_correct: true },
      { id: 'B', text: 'Woreczek i łagiewka (utriculus i sacculus) — wykrywają przyspieszenie liniowe i położenie głowy względem grawitacji', is_correct: true },
      { id: 'C', text: 'Narząd Cortiego — główna struktura odpowiadająca za percepcję równowagi', is_correct: false },
      { id: 'D', text: 'Okienko owalne — przetwarza fale ciśnienia na impulsy nerwowe związane z równowagą', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'Narząd przedsionkowy (błędnik błoniasty) odpowiada za równowagę: Kanały półkoliste (3 wzajemnie prostopadłe) — wypełnione endolimfą; ruch głowy powoduje przepływ endolimfy i ugięcie grzebienia (cupula) z komórkami rzęsatymi → wykrywanie przyspieszenia kątowego. Woreczek i łagiewka — zawierają plamki (maculae) z komórkami rzęsatymi i otolitami (kryształkami węglanu wapnia) → wykrywanie przyspieszenia liniowego i statycznego położenia głowy. C — błąd: narząd Cortiego to receptor SŁUCHU w ślimaku. D — błąd: okienko owalne to membrana między uchem środkowym a ślimakiem.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.chemoreceptory,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nReceptory smaku (kubki smakowe) człowieka rozmieszczone są głównie na brodawkach języka i zdolne są do wykrywania pięciu podstawowych smaków. Smak umami jest wywoływany przez:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'jony wodorowe (H⁺) — podobnie jak smak kwaśny, ale z wyższą progową koncentracją', is_correct: false },
      { id: 'B', text: 'glutaminian sodu i inne aminokwasy, sygnalizując obecność białek w pożywieniu', is_correct: true },
      { id: 'C', text: 'wolne kwasy tłuszczowe, informując o zawartości tłuszczu w pokarmie', is_correct: false },
      { id: 'D', text: 'jony potasu (K⁺) aktywujące receptory inne niż te odpowiedzialne za smak słony', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Pięć podstawowych smaków: słodki (cukry), kwaśny (H⁺), słony (Na⁺), gorzki (alkaloidy, toksyny), umami. Umami (z japońskiego "smaczny") to smak glutaminianu (Glu) i nukleotydów (IMP, GMP) — sygnalizuje obecność białek i aminokwasów. Receptor umami to metabotropowy receptor glutaminianu (mGluR4/T1R1+T1R3). A — jony H⁺ wywołują smak kwaśny. C — receptory tłuszczu (CD36) nie są zaliczane do pięciu klasycznych smaków. D — K⁺ może wywołać smak słony/gorzki, ale nie jest specyficznym stymulem dla odrębnej kategorii.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.chemoreceptory,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących węchu człowieka.\nA. Receptory węchowe (komórki węchowe) zlokalizowane są w nabłonku węchowym w górnej części jamy nosowej i są neuronami dwubiegunowymi.\nB. Aksony komórek węchowych tworzą nerw węchowy (I nerw czaszkowy) i przekazują impulsy bezpośrednio do kory węchowej bez przekaźnika w wzgórzu.\nC. Człowiek posiada tylko jeden rodzaj receptora węchowego, który reaguje na wszystkie zapachy z różną czułością.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Receptory węchowe to neurony dwubiegunowe w nabłonku węchowym jamy nosowej.', is_correct: true },
      { id: 'B', text: 'Nerw węchowy przekazuje impulsy bezpośrednio do kory węchowej bez przekaźnika we wzgórzu.', is_correct: true },
      { id: 'C', text: 'Człowiek posiada tylko jeden rodzaj receptora węchowego.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: komórki węchowe to pierwotne neurony czuciowe (dwubiegunowe) — ich dendryty z rzęskami (z receptorami) skierowane są do jamy nosowej, a aksony tworzą nerw węchowy. B — Prawda: układ węchowy to jedyny system sensoryczny, który omija wzgórze — aksony biegną przez blaszkę sitową do opuszki węchowej, a stamtąd bezpośrednio do kory węchowej (hipokamp, ciało migdałowate) — stąd silny związek zapachów z emocjami i pamięcią. C — Fałsz: człowiek ma ok. 350–400 funkcjonalnych typów receptorów węchowych (rodzina receptorów sprzężonych z białkiem G) — ich kombinatoryczna aktywacja pozwala rozróżnić tysiące zapachów.',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.skorne,
    question_text: 'Które z poniższych receptorów skórnych są odpowiedzialne za wykrywanie dotyku i ucisku (mechanoreceptory)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Ciałka Meissnera — reagują na lekki dotyk i szybkie zmiany nacisku; liczne w opuszkach palców', is_correct: true },
      { id: 'B', text: 'Ciałka Paciniego — wykrywają silny ucisk i wibracje o wysokiej częstotliwości', is_correct: true },
      { id: 'C', text: 'Ciałka Ruffiniego — wolno adaptujące się receptory reagujące na rozciąganie skóry i stały ucisk', is_correct: true },
      { id: 'D', text: 'Wolne zakończenia nerwowe — wyspecjalizowane wyłącznie w wykrywaniu mechanoreceptorycznym, nieodpowiadające na temperaturę', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Mechanoreceptory skóry: Ciałka Meissnera (szybko adaptujące) — lekki dotyk, tekstura, w skórze bezwłosej (opuszki palców, wargi); ciałka Paciniego (szybko adaptujące) — wibracje, silny ucisk; ciałka Ruffiniego (wolno adaptujące) — stały ucisk, rozciąganie skóry, termorecepcja ciepła; krążki Merkela (wolno adaptujące) — kształt i tekstura; kolbki Krausego — zimno. D — błąd: wolne zakończenia nerwowe (nieosłonięte) to polimodalne receptory — odpowiadają zarówno na ból (nocycepcja), jak i na temperaturę, a częściowo też na dotyk — nie są wyspecjalizowane wyłącznie mechanoreceptoryczniE.',
    difficulty: 3,
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
  console.log(`Seeding ${questions.length} questions for Narządy zmysłów...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
