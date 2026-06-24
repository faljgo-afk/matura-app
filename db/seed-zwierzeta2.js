// Seed: Różnorodność zwierząt — 10 questions (batch 2)
// Topic: 5c9748bd-7732-4cf5-b855-a0d380d2d2f2

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2'

const S = {
  parzydelkowce: '9bf9e59b-8bdc-46d2-b6ab-916dad2a8028',
  pierscenice:   '9a5979f6-3df4-4eda-a3ed-b685fd68671d',
  stawonogi:     '825907dd-fee6-47ab-9b83-87fbab18941b',
  ryby_plazy:    'e4f2e4c8-e23e-4e5c-9109-021d3af3c648',
  gady_ptaki:    'f74eae00-3b0d-43b3-8d4b-9c1926bfca14',
  ssaki:         '64f6fdff-c569-414d-a414-739fd02dca2e',
  kregowce:      '4f0309a9-4d03-411f-b8d6-e8754b440294',
  przystosowania:'ce14c990-8cbe-4d71-8946-f3c362cf9d96',
  rozmnazanie:   '84cf9348-1042-491d-b895-4ab150164c94',
}

const questions = [
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.parzydelkowce,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących parzydełkowców (Cnidaria).\nA. Parzydełkowce są zwierzętami dwuwarstwowymi (diploblastycznymi) — ich ciało zbudowane jest z ektodermy i endodermy, bez mezodermy.\nB. Meduzy i polipy to dwie formy morfologiczne parzydełkowców — obie zdolne do rozmnażania płciowego.\nC. Jamochłony (Coelenterata) posiadają układ nerwowy rozproszony (dyfuzyjny), bez wyraźnie wyodrębnionego zwoju mózgowego.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Parzydełkowce są diploblastyczne — mają ektodermę i endodermę, bez mezodermy.', is_correct: true },
      { id: 'B', text: 'Meduzy i polipy są zdolne do rozmnażania płciowego.', is_correct: false },
      { id: 'C', text: 'Parzydełkowce mają układ nerwowy rozproszony bez zwoju mózgowego.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: parzydełkowce to jedne z nielicznych zwierząt dwuwarstwowych (diploblastycznych) — brakuje im mezodermy (warstwy środkowej). B — Fałsz: w cyklu życiowym parzydełkowców polipy rozmnażają się zazwyczaj bezpłciowo (pączkowanie), a meduzy — płciowo (gamety). Wyjątki istnieją, ale ogólna zasada jest taka. C — Prawda: sieć nerwowa (nervous net) parzydełkowców to rozproszony układ bez centrum — impuls rozchodzi się we wszystkich kierunkach od miejsca drażnienia.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.parzydelkowce,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nTasiemiec uzbrojony (Taenia solium) jest przykładem płazińca pasożytniczego, u którego:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'żywicielem pośrednim jest człowiek, a ostatecznym — świnia', is_correct: false },
      { id: 'B', text: 'żywicielem ostatecznym jest człowiek, a pośrednim — świnia; larwy (wągry) rozwijają się w mięśniach świni', is_correct: true },
      { id: 'C', text: 'cykl życiowy przebiega bez żywiciela pośredniego — jaja połknięte przez człowieka rozwijają się bezpośrednio w dorosłe osobniki', is_correct: false },
      { id: 'D', text: 'dorosły tasiemiec pasożytuje w wątrobie człowieka, wchłaniając krew przez wyspecjalizowany układ pokarmowy', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Tasiemiec uzbrojony ma złożony cykl: człowiek (żywiciel ostateczny) zaraża się jedząc niedogotowane mięso świni zawierające wągry (Cysticercus cellulosae) → w jelicie człowieka wągier rozwija się w dorosłego tasiemca (kilka metrów) → jaja wydalane z kałem połyka świnia (żywiciel pośredni) → w mięśniach świni rozwijają się wągry. A — błąd: żywiciel ostateczny to człowiek (nie świnia). C — błąd: cykl wymaga żywiciela pośredniego. D — błąd: tasiemce pasożytują w jelicie cienkim i nie mają układu pokarmowego — wchłaniają substancje odżywcze całą powierzchnią ciała (tegumentem).',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.pierscenice,
    question_text: 'Które z poniższych cech ODRÓŻNIAJĄ pierścienice (Annelida) od innych bezkręgowców?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Metameryczna (segmentowana) budowa ciała z powtarzającymi się elementami wewnętrznymi', is_correct: true },
      { id: 'B', text: 'Obecność wtórnej jamy ciała (celomy) wypełnionej płynem celomatycznym', is_correct: true },
      { id: 'C', text: 'Oddychanie przez skrzela zbudowane z chityny, podobnie jak u owadów', is_correct: false },
      { id: 'D', text: 'Zamknięty układ krwionośny z "sercem" w postaci pulsujących naczyń grzbietowych', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: metameryzm (segmentacja) pierścienic przejawia się powtarzaniem narządów w każdym segmencie (zwoje nerwowe, nefrydydia, worki koelomiczne) — jest to cecha konstytutywna Annelida. B — Prawda: celoma (wtórna jama ciała) wyścielona mezodermalnym nabłonkiem oddziela jelito od ściany ciała i pełni funkcje hydrostatyczne. D — Prawda: pierścienice mają zamknięty układ krwionośny — krew płynie naczyniami, a u dżdżownicy główne naczynie grzbietowe i pierścienie aortalne pulsują jak serce. C — Fałsz: pierścienice oddychają przez wilgotną skórę (dżdżownica) lub skrzela (wieloszczety) — nie mają chitynowych skrzeli (chityna to cecha stawonogów).',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.stawonogi,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nOwady (Insecta) różnią się od pajęczaków (Arachnida) tym, że owady:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'mają ciało podzielone na głowę, tułów i odwłok oraz 3 pary odnóży, podczas gdy pajęczaki mają głowotułów i odwłok oraz 4 pary odnóży', is_correct: true },
      { id: 'B', text: 'posiadają egzoszkielet z chityny, a pajęczaki — endoszkielet z wapnia', is_correct: false },
      { id: 'C', text: 'mają układ oddechowy zbudowany z płucotchawek, a nie tchawek jak pajęczaki', is_correct: false },
      { id: 'D', text: 'są wyłącznie lądowe, podczas gdy pajęczaki żyją zarówno na lądzie, jak i w wodzie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Owady (Insecta): ciało 3-tagmowe (głowa + tułów + odwłok), 3 pary odnóży, zazwyczaj 2 pary skrzydeł, 1 para czułków, tchawki. Pajęczaki (Arachnida): ciało 2-tagmowe (głowotułów/prosoma + odwłok/opisthosoma), 4 pary odnóży, brak skrzydeł i czułków, płucotchawki lub tchawki lub obie. B — błąd: obie grupy mają egzoszkielet chitynowy. C — błąd: to odwrotnie — pajęczaki mają płucotchawki (u pająków) lub tchawki, owady mają tchawki. D — błąd: wiele stawonogów żyje w wodzie (np. wodopójki — pajęczaki wodne).',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ryby_plazy,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących płazów (Amphibia).\nA. Płazy są zmiennocieplne (poikilotermiczne) — temperatura ich ciała zależy od temperatury otoczenia.\nB. Skóra płazów jest sucha i pokryta łuskami, co chroni je przed utratą wody — przystosowanie do życia na lądzie.\nC. Serce płaza dorosłego składa się z trzech jam: dwóch przedsionków i jednej komory, w której krew utlenowana i nieutlenowana częściowo się mieszają.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Płazy są zmiennocieplne (poikilotermiczne).', is_correct: true },
      { id: 'B', text: 'Skóra płazów jest sucha i pokryta łuskami.', is_correct: false },
      { id: 'C', text: 'Serce płaza ma dwa przedsionki i jedną komorę z częściowym mieszaniem krwi.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: płazy, jak wszystkie gadzi, ryby i bezkręgowce, są zmiennocieplne — brakuje im endotermicznego mechanizmu regulacji temperatury. B — Fałsz: skóra płazów jest gładka, wilgotna i pozbawiona łusek — pełni ważną rolę w wymianie gazowej (oddychanie skórne) i jest przepuszczalna dla wody, co jest wadą na lądzie. Łuski mają ryby i gady. C — Prawda: serce dorosłego płaza (żaby) ma 2 przedsionki (lewy odbiera krew utlenowaną z płuc, prawy — nieutlenowaną z ciała) i 1 komorę, gdzie krew częściowo się miesza, choć beleczkowanie komory ogranicza mieszanie.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ryby_plazy,
    question_text: 'Które z poniższych cech są wspólne dla ryb chrzęstnoszkieletowych (Chondrichthyes, np. rekiny) i ryb kostnoszkieletowych (Osteichthyes, np. karp)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Obecność szkieletu chrzęstnego przez całe życie', is_correct: false },
      { id: 'B', text: 'Zmiennocieplność i życie w środowisku wodnym', is_correct: true },
      { id: 'C', text: 'Oddychanie za pomocą skrzeli', is_correct: true },
      { id: 'D', text: 'Zapłodnienie zewnętrzne i składanie jaj', is_correct: false },
    ],
    correct_answer: ['B', 'C'],
    explanation: 'B i C — poprawne: obie grupy ryb są zmiennocieplne i żyją w wodzie; obie oddychają skrzelami pobierając tlen rozpuszczony w wodzie. A — błąd: tylko chrzęstnoszkieletowe mają przez całe życie szkielet chrzęstny; kostnoszkieletowe mają szkielet kostny. D — błąd: wśród obu grup istnieje duże zróżnicowanie: rekiny mają często zapłodnienie wewnętrzne i są jajożyworodne lub żyworodne; ryby kostnoszkieletowe najczęściej mają zapłodnienie zewnętrzne, ale nie jest to cecha wspólna obu klas.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.gady_ptaki,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPtaki (Aves) są stałocieplne (homeotermiczne), co oznacza, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'ich temperatura ciała zmienia się wraz z temperaturą otoczenia, ale wolniej niż u gadów', is_correct: false },
      { id: 'B', text: 'utrzymują stałą temperaturę ciała niezależnie od temperatury otoczenia dzięki endotermicznym mechanizmom termogenezy', is_correct: true },
      { id: 'C', text: 'mogą regulować temperaturę ciała wyłącznie przez zachowanie — szukanie cienia lub nasłonecznionych miejsc', is_correct: false },
      { id: 'D', text: 'temperatura ich ciała jest stała wyłącznie w nocy, gdy zwalniają metabolizm podczas snu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Stałocieplność (homeotermia) ptaków i ssaków to zdolność do utrzymywania stałej temperatury ciała (u ptaków ~40–42°C) niezależnie od warunków zewnętrznych, dzięki: wysokiemu metabolizmowi, izolacji (pióra/futro), dreszczom i termogenezie bezdrżeniowej. A i C — opisują zmiennocieplność (ektotermię) — strategię gadów i płazów. D — błąd: podczas torporu (np. kolibry w nocy) temperatura może czasowo spadać, ale nie jest to norma dla całej gromady; homeotermia to cecha ogólna, nie nocna.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.gady_ptaki,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących gadów (Reptilia).\nA. Gady posiadają serce trójkomorowe (2 przedsionki + 1 komora), z wyjątkiem krokodyli, które mają serce czterokomorowe.\nB. Jaja gadów są otoczone błonami płodowymi (owodnią, kosmówką, omoczną), co uniezależnia rozwój zarodka od środowiska wodnego.\nC. Gady są stałocieplne i regulują temperaturę ciała przez intensywny metabolizm, podobnie jak ptaki.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Gady mają serce trójkomorowe, z wyjątkiem krokodyli (czterokomorowe).', is_correct: true },
      { id: 'B', text: 'Jaja gadów są otoczone błonami płodowymi (owodnią, kosmówką, omoczną).', is_correct: true },
      { id: 'C', text: 'Gady są stałocieplne i regulują temperaturę metabolicznie.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: większość gadów ma serce z niecałkowicie podzieloną komorą (3 jamy, częściowe mieszanie krwi), natomiast krokodyle ewolucyjnie wykształciły pełną przegrodę komorową — serce 4-komorowe. B — Prawda: jajo owodniowe (amniotyczne) to kluczowe przystosowanie gadów do środowiska lądowego — owodnia chroni zarodek w płynie, omocznia magazynuje odpady azotowe, kosmówka wymiana gazowa. C — Fałsz: gady są ZMIENNOCIEPLNE (ektotermiczne) — regulują temperaturę behawioralnie (heliotermia: wygrzewanie się na słońcu), nie metabolicznie.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ssaki,
    question_text: 'Które z poniższych cech są charakterystyczne WYŁĄCZNIE dla ssaków (Mammalia), a nie dla innych kręgowców?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Karmienie młodych mlekiem wytwarzanym przez gruczoły mleczne', is_correct: true },
      { id: 'B', text: 'Obecność owłosienia (futra) jako izolacji termicznej', is_correct: true },
      { id: 'C', text: 'Stałocieplność (homeotermia)', is_correct: false },
      { id: 'D', text: 'Serce czterokomorowe z całkowitym oddzieleniem krążenia płucnego od dużego', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A i B — poprawne: gruczoły mleczne (modyfikowane gruczoły potowe) i pokrywające ciało włosy/futro to cechy definiujące ssaki, nieobecne u żadnej innej gromady kręgowców. C — błąd: stałocieplność pojawiła się niezależnie u ssaków i ptaków — obie grupy są homeotermiczne, więc nie jest to cecha wyłącznie ssaków. D — błąd: serce czterokomorowe mają zarówno ssaki, jak i ptaki (i krokodyle) — nie jest to cecha ekskluzywna ssaków.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.rozmnazanie,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nJednymi z kluczowych przystosowań do lądowego trybu życia u gadów i ssaków, które odróżniają je od płazów, jest:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'zapłodnienie zewnętrzne i składanie jaj bez błon płodowych w wilgotnym środowisku', is_correct: false },
      { id: 'B', text: 'zapłodnienie wewnętrzne i wytwarzanie jaj owodniowych (lub żyworodność), co uniezależnia rozród od wody', is_correct: true },
      { id: 'C', text: 'oddychanie wyłącznie przez skórę, co eliminuje konieczność obecności wody do wymiany gazowej', is_correct: false },
      { id: 'D', text: 'larwy wodne (np. kijanki) zdolne do przeobrażenia zarówno u gadów, jak i u ssaków', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Kluczową ewolucyjną innowacją amniotów (gadów, ptaków, ssaków) jest jajo owodniowe lub żyworodność z błonami płodowymi — umożliwia to rozród bez dostępu do wody. Płazy muszą składać jaja w wodzie (lub bardzo wilgotnym miejscu), bo jaja nie mają błon ochronnych i są podatne na wysychanie, a larwy (kijanki) prowadzą wodny tryb życia. A — opisuje strategię płazów. C — błąd: gady i ssaki oddychają wyłącznie płucami, nie skórą. D — błąd: gady i ssaki nie mają stadium larwalnego.',
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
  console.log(`Seeding ${questions.length} questions for Różnorodność zwierząt...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
