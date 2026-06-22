const https = require('https');

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w';
const TOPIC_ID = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2';

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const opts = new URL(url);
    opts.headers = { 'User-Agent': 'matura-app/1.0 (biology question seeder; faljgo@gmail.com)' };
    https.get(opts, (res) => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

async function getWikiThumb(filename, width = 700) {
  const encoded = encodeURIComponent(filename);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encoded}&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=${width}&format=json`;
  const data = await httpsGet(url);
  const pages = data.query.pages;
  const page = pages[Object.keys(pages)[0]];
  const thumb = page.imageinfo[0].thumburl;
  console.log('Wikimedia thumb: ' + thumb);
  return thumb;
}

function postQuestion(q) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify([q]);
    const opts = {
      hostname: URL_HOST,
      path: '/rest/v1/questions',
      method: 'POST',
      headers: {
        'apikey': KEY, 'Authorization': 'Bearer ' + KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'Prefer': 'return=representation',
        'Content-Length': Buffer.byteLength(body, 'utf-8')
      }
    };
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => {
        if (res.statusCode === 201) resolve(JSON.parse(data)[0].id);
        else reject(new Error('HTTP ' + res.statusCode + ': ' + data.substring(0, 200)));
      });
    });
    req.on('error', reject);
    req.write(body); req.end();
  });
}

async function run() {
  // Get Wikimedia thumb for homologous limbs diagram (Q7)
  const homologyThumb = await getWikiThumb('File:Homology vertebrates-en.svg', 700);

  const questions = [
    // Q1 — Parzydełkowce i płazińce
    {
      topic_id: TOPIC_ID,
      subtopic_id: '9bf9e59b-8bdc-46d2-b6ab-916dad2a8028',
      image_url: null,
      question_text: 'Tasiemiec uzbrojony (Taenia solium) jest pasożytem jelitowym człowieka. Wskaż, w jakiej formie tasiemiec bytuje w mięśniach świni (żywiciela pośredniego):',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Jako dojrzały tasiemiec z odcinkami (proglotydami) produkującymi jaja', is_correct: false },
        { id: 'B', text: 'Jako wągier (cysticercus) — larwa otoczona torbielą (cystą)', is_correct: true },
        { id: 'C', text: 'Jako skoleks z haczykami i przyssawkami przyczepiony do ściany jelita', is_correct: false },
        { id: 'D', text: 'Jako mikroskopijne jaja z onkosferą gotowe do zarażenia człowieka', is_correct: false }
      ],
      correct_answer: ['B'],
      explanation: 'Cykl życiowy tasiemca uzbrojonego obejmuje dwóch żywicieli. Żywiciel ostateczny (człowiek): połknięty wągier uwalnia skoleks, który przyssawkami i haczykami przyczepia się do ściany jelita cienkiego; tasiemiec dorasta, a proglottydy produkują jaja wydalane z kałem. Żywiciel pośredni (świnia): zjada jaja z zanieczyszczonej paszy lub wody; z jaj wylęgają się onkosfery (larwy sześciohaczykowe), które przez ścianę jelita przedostają się do krwi i zagrzebują w mięśniach — tam rozwijają się w wągry (cysticerci), czyli larwy otoczone torbielą. Człowiek zaraża się jedząc niedogotowaną wieprzowinę z wągrami. Uwaga: człowiek może również pełnić rolę żywiciela pośredniego (wągrzycą), jeśli połknie jaja tasiemca.',
      difficulty: 2, verified: true, ai_confidence: 0.97
    },
    // Q2 — Pierścienice i mięczaki
    {
      topic_id: TOPIC_ID,
      subtopic_id: '9a5979f6-3df4-4eda-a3ed-b685fd68671d',
      image_url: null,
      question_text: 'Wskaż cechę, która ODRÓŻNIA mięczaki (Mollusca) od pierścienic (Annelida):',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Mięczaki mają segmentowane ciało (metameryzm), natomiast pierścienice są nieczłonowane', is_correct: false },
        { id: 'B', text: 'Mięczaki posiadają płaszcz (mantle) wydzielający muszlę (u większości gatunków), czego brak u pierścienic', is_correct: true },
        { id: 'C', text: 'Pierścienice mają otwarty układ krwionośny, a mięczaki — zamknięty', is_correct: false },
        { id: 'D', text: 'Mięczaki są organizmami wyłącznie morskimi — nie mają form lądowych ani słodkowodnych', is_correct: false }
      ],
      correct_answer: ['B'],
      explanation: 'Płaszcz (mantle) to fałd skórny charakterystyczny wyłącznie dla mięczaków — wydziela muszlę (zbudowaną z węglanu wapnia) i tworzy jamę płaszczową, w której mieszczą się skrzela lub płuca. U nagoskrzelców i głowonogów muszla może być zredukowana lub wewnętrzna, ale płaszcz zawsze jest obecny. Pierścienice NIE mają płaszcza ani muszli. Metameryzm (segmentacja ciała) jest cechą PIERŚCIENIC, nie mięczaków (mięczaki są nieczłonowane). Pierścienice mają ZAMKNIĘTY układ krwionośny (krew krąży w naczyniach); większość mięczaków ma OTWARTY układ krwionośny (wyjątek: głowonogi — zamknięty). Mięczaki obejmują formy morskie, słodkowodne i lądowe (ślimaki lądowe, takie jak winniczek).',
      difficulty: 2, verified: true, ai_confidence: 0.97
    },
    // Q3 — Stawonogi
    {
      topic_id: TOPIC_ID,
      subtopic_id: '825907dd-fee6-47ab-9b83-87fbab18941b',
      image_url: null,
      question_text: 'Stawonogi (Arthropoda) to najliczniejsza gromada zwierząt na Ziemi. Wskaż zestaw cech, które ŁĄCZNIE charakteryzują WSZYSTKICH przedstawicieli tego typu:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Chitynowy egzoszkielet, stawy łączące segmenty odnóży, linienie (ecdysis) podczas wzrostu', is_correct: true },
        { id: 'B', text: 'Chitynowy egzoszkielet, cztery pary odnóży, oddychanie płucami książkowymi', is_correct: false },
        { id: 'C', text: 'Segmentowane ciało, brak szkieletu zewnętrznego, zamknięty układ krwionośny', is_correct: false },
        { id: 'D', text: 'Szkielet zewnętrzny z wapienia, trzy pary odnóży, złożone oczy', is_correct: false }
      ],
      correct_answer: ['A'],
      explanation: 'Cechy wspólne WSZYSTKICH stawonogów: (1) Egzoszkielet z chityny — pełni funkcję ochronną i podporową, umożliwia przyczep mięśni; (2) Stawowe kończyny (chitynowe, człony połączone stawami) — stąd nazwa Arthropoda (gr. arthron = staw, poda = nogi); (3) Linienie (ecdysis) — ponieważ chitynowy egzoszkielet nie rośnie, stawonogi rosną przez cykliczne zrzucanie starego i odbudowę nowego pancerza. Liczba odnóży różni się między gromadami: owady (Insecta) — 3 pary, pajęczaki (Arachnida) — 4 pary, skorupiaki (Crustacea) i wije (Myriapoda) — więcej. Płuca książkowe mają tylko pajęczaki. Szkielet z wapienia to cecha szkarłupni lub mięczaków, nie stawonogów.',
      difficulty: 2, verified: true, ai_confidence: 0.98
    },
    // Q4 — Ryby i płazy
    {
      topic_id: TOPIC_ID,
      subtopic_id: 'e4f2e4c8-e23e-4e5c-9109-021d3af3c648',
      image_url: null,
      question_text: 'Płazy (Amphibia) jako pierwsze kręgowce wyszły na ląd, jednak są nadal silnie związane ze środowiskiem wodnym. Wskaż, które cech płazów stanowią OGRANICZENIE ich niezależności od wody:',
      question_type: 'multiple',
      options: [
        { id: 'A', text: 'Zapłodnienie zewnętrzne i jaja pozbawione błon płodowych — konieczność środowiska wodnego do rozrodu', is_correct: true },
        { id: 'B', text: 'Oddychanie skórne wymagające stale wilgotnej skóry', is_correct: true },
        { id: 'C', text: 'Obecność trzech komór serca, co ogranicza efektywność krążenia', is_correct: false },
        { id: 'D', text: 'Larwy (kijanki) oddychające skrzelami — rozwój w wodzie', is_correct: true }
      ],
      correct_answer: ['A', 'B', 'D'],
      explanation: 'Płazy są silnie uzależnione od wody z trzech powodów: (1) Rozród — zapłodnienie zewnętrzne, jaja otoczone galaretowatą osłoną (bez błon płodowych i skorupki), składane w wodzie; brak ochrony przed wysychaniem; (2) Oddychanie skórne — nawet gatunki z płucami uzupełniają wymianę gazową przez skórę, która musi być stale wilgotna; wysychanie skóry prowadzi do uduszenia; (3) Larwy (kijanki) — żyją w wodzie, oddychają skrzelami zewnętrznymi, dopiero podczas metamorfozy wykształcają płuca i kończyny. Trójkomorowe serce (opcja C) jest u płazów wadą ewolucyjną ograniczającą efektywność krążenia, ale NIE jest bezpośrednim ograniczeniem niezależności od wody — jest obecne niezależnie od środowiska.',
      difficulty: 2, verified: true, ai_confidence: 0.96
    },
    // Q5 — Gady i ptaki
    {
      topic_id: TOPIC_ID,
      subtopic_id: 'f74eae00-3b0d-43b3-8d4b-9c1926bfca14',
      image_url: null,
      question_text: 'Ptaki (Aves) wykazują szereg adaptacji do lotu. Wskaż, które cechy anatomiczne ptaków SĄ bezpośrednio związane z redukcją masy ciała i umożliwiają lot:',
      question_type: 'multiple',
      options: [
        { id: 'A', text: 'Pneumatyczne (wypełnione powietrzem) kości długie', is_correct: true },
        { id: 'B', text: 'Zrośnięte obojczyki tworzące widełki (furcula)', is_correct: false },
        { id: 'C', text: 'Brak zębów — szczęki zastąpione lekkim dziobem rogowym', is_correct: true },
        { id: 'D', text: 'Zredukowany i skrócony odcinek ogonowy kręgosłupa (pygostyl)', is_correct: true }
      ],
      correct_answer: ['A', 'C', 'D'],
      explanation: 'Adaptacje ptaków zmniejszające masę ciała: (1) Kości pneumatyczne — długie kości kończyn (np. kość ramieniowa) mają wewnętrzne przestrzenie powietrzne połączone z workami powietrznymi; zmniejsza to masę szkieletu bez utraty wytrzymałości; (2) Brak zębów — ciężkie zęby zastąpiono lekkim dziobem rogowym; funkcję rozdrabniania pokarmu przejmuje mięsisty żołądek (żołądek mięśniowy) i/lub połykanie kamyczków (gastrolity); (3) Pygostyl — zrośnięte kręgi ogonowe tworzą krótki wyrostek, do którego przymocowane są sterówki ogona; skrócenie ogona redukuje masę tylnej części ciała. Furcula (opcja B) to zrośnięte obojczyki — pełni funkcję sprężyny akumulującej energię przy machaniu skrzydłami, co ZWIĘKSZA efektywność lotu, ale nie redukuje masy ciała.',
      difficulty: 3, verified: true, ai_confidence: 0.95
    },
    // Q6 — Ssaki
    {
      topic_id: TOPIC_ID,
      subtopic_id: '64f6fdff-c569-414d-a414-739fd02dca2e',
      image_url: null,
      question_text: 'Ssaki (Mammalia) dzielą się na trzy podgromady różniące się sposobem rozrodu. Wskaż POPRAWNE przyporządkowanie cech do podgromad:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Stekowce: składają jaja / Torbakowce: rodzą żywe, niedojrzałe młode rozwijające się w torbie / Łożyskowce: długa ciąża, dobrze rozwinięte młode przy urodzeniu', is_correct: true },
        { id: 'B', text: 'Stekowce: rodzą żywe młode bez łożyska / Torbakowce: składają jaja / Łożyskowce: rodzą młode z torbą', is_correct: false },
        { id: 'C', text: 'Stekowce: składają jaja i nie karmią mlekiem / Torbakowce: rodzą żywe niedojrzałe młode / Łożyskowce: posiadają łożysko', is_correct: false },
        { id: 'D', text: 'Wszystkie ssaki rodzą żywe młode — różnią się wyłącznie długością okresu ciąży', is_correct: false }
      ],
      correct_answer: ['A'],
      explanation: 'Trzy podgromady ssaków różnią się sposobem rozrodu: (1) Stekowce (Monotremata, np. dziobak, kolczatka) — jedyne ssaki składające jaja z miękkiej skorupy, ale karmiące młode mlekiem (wydzielanym przez gruczoły skórne, bez sutek); (2) Torbakowce (Marsupialia, np. kangur, koala) — rodzą żywe, ale bardzo niedojrzałe młode (np. kangur przy urodzeniu ma 2 cm); młode samodzielnie docierają do torby (marsupium) i przyczepiają się do sutka, gdzie kończą rozwój; (3) Łożyskowce (Eutheria/Placentalia, np. człowiek, pies) — długa ciąża z odżywianiem płodu przez łożysko; młode stosunkowo dobrze rozwinięte przy urodzeniu. Opcja C jest błędna — stekowce KARMIĄ mlekiem (to właśnie czyni je ssakami).',
      difficulty: 2, verified: true, ai_confidence: 0.98
    },
    // Q7 — Porównanie budowy kręgowców — Z OBRAZKIEM
    {
      topic_id: TOPIC_ID,
      subtopic_id: '4f0309a9-4d03-411f-b8d6-e8754b440294',
      image_url: homologyThumb,
      question_text: 'Na schemacie przedstawiono kończyny przednie różnych kręgowców. Wskaż stwierdzenie, które POPRAWNIE wyjaśnia podobieństwo budowy kości tych kończyn:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Kończyny pełnią tę samą funkcję u wszystkich pokazanych zwierząt — jest to przykład analogii ewolucyjnej', is_correct: false },
        { id: 'B', text: 'Kończyny zbudowane są z tych samych kości (ramię-przedramię-nadgarstek-palce), bo wszystkie kręgowce mają wspólnego przodka — jest to przykład homologii', is_correct: true },
        { id: 'C', text: 'Podobieństwo wynika z niezależnego przystosowania różnych grup do podobnego środowiska — jest to konwergencja ewolucyjna', is_correct: false },
        { id: 'D', text: 'Identyczna budowa kości jest efektem poziomego transferu genów między gatunkami kręgowców', is_correct: false }
      ],
      correct_answer: ['B'],
      explanation: 'Schemat ilustruje homologię — zjawisko polegające na podobieństwie budowy narządów wynikającym ze wspólnego pochodzenia ewolucyjnego, niezależnie od pełnionej funkcji. Kończyna przednia człowieka (chwytanie), kota (chód), konia (bieg), wieloryba (płetwa), nietoperza (skrzydło) i ptaka (skrzydło) zbudowana jest z tych samych kości: kości ramiennej (humerus), kości przedramienia (radius i ulna), nadgarstka i paliczków — choć proporcje i liczba kości mogą się różnić. Narządy homologiczne dowodzą wspólnego przodka wszystkich kręgowców lądowych (tetrapodów). Analogia (opcja A) to podobna FUNKCJA przy odmiennym pochodzeniu i budowie (np. skrzydło ptaka i owada). Konwergencja (opcja C) dotyczy niezależnego ewoluowania podobnych cech — może prowadzić do analogii, ale nie tłumaczy identycznej budowy kości. Poziomy transfer genów (opcja D) nie dotyczy kręgowców.',
      difficulty: 2, verified: true, ai_confidence: 0.98
    }
  ];

  let ok = 0;
  for (let i = 0; i < questions.length; i++) {
    try {
      const id = await postQuestion(questions[i]);
      const img = questions[i].image_url ? ' [+IMG]' : '';
      console.log('[' + (i + 1) + '/7] OK: ' + id.substring(0, 8) + '...' + img + ' — ' + questions[i].question_text.substring(0, 50));
      ok++;
    } catch (e) {
      console.log('[' + (i + 1) + '/7] FAIL: ' + e.message);
    }
  }
  console.log('\nDone: ' + ok + '/7 inserted');
}

run();
