// Seed batch 3/6 — Różnorodność zwierząt
// Ryby i płazy (6) + Gady i ptaki (4)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2'

const S = {
  ryby: 'e4f2e4c8-e23e-4e5c-9109-021d3af3c648',
  gady: 'f74eae00-3b0d-43b3-8d4b-9c1926bfca14',
}

const questions = [

  // ── RYBY I PŁAZY (6) ──────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.ryby, question_type: 'single',
    question_text: 'Ryby chrzęstnoszkieletowe (Chondrichthyes), np. rekiny i płaszczki, różnią się od ryb kostnoszkieletowych (Osteichthyes) budową. Wskaż POPRAWNĄ różnicę:',
    options: [
      { id: 'A', text: 'Chondrichthyes: szkielet z chrząstki (brak kości), brak pęcherza pławnego (regulacja głębokości przez tłuszczową wątrobę), nagie szczelinowate szczeliny skrzelowe bez wieczka skrzelowego', is_correct: true },
      { id: 'B', text: 'Chondrichthyes: szkielet kostny z hydroksyapatytem, pęcherz pławny wypełniony azotem, wieczko skrzelowe (operculum) okrywające cztery pary skrzeli', is_correct: false },
      { id: 'C', text: 'Osteichthyes: brak szczęk, zamiast nich posiadają filtratorową tarczkę gębową podobną do minogów — dlatego są filogenetycznie starsze od chrzęstnoszkieletowych', is_correct: false },
      { id: 'D', text: 'Chondrichthyes: ciepłokrwiste, utrzymują stałą temperaturę ciała niezależną od środowiska dzięki sieci przeciwprądowej u podstawy stawów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Chondrichthyes (Elasmobranchii + Holocephali): (1) szkielet z chrząstki (brak ossifikacji) → lżejszy, elastyczniejszy; (2) brak pęcherza pławnego → toną bez ruchu; wątroba pełna skwalenu (tłuszcz < wody) → pływalność; (3) 5–7 par skrzeli szczelinowych bez operculum (widoczne na boku głowy); (4) łuski plakoidalne (dermal denticles = "skóra rekina" → redukcja oporu). Osteichthyes: kości ossified, operculum, pęcherz pławny (homeostasis głębokości), łuski kostnoltozone (ctenoidalne/cykloidalne).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ryby, question_type: 'single',
    question_text: 'Pęcherz pławny u ryb kostnoszkieletowych pełni funkcję hydrostatyczną. Jak ryba zwiększa głębokość zanurzenia (opuszcza się niżej)?',
    options: [
      { id: 'A', text: 'Ryba wchłania gaz z pęcherza pławnego do krwi przez rete mirabile (sieć cudowną) → pęcherz kurczy się → gęstość ciała wzrasta → ryba opada', is_correct: true },
      { id: 'B', text: 'Ryba pompuje wodę morską do pęcherza pławnego przez gardziel → pęcherz wypełnia się wodą → ryba ciężka i opada', is_correct: false },
      { id: 'C', text: 'Ryba skręca płetwy piersiowe pionowo, co powoduje dodatkowy opór i ciągnie rybę w dół, bez zmiany objętości pęcherza pławnego', is_correct: false },
      { id: 'D', text: 'Ryba aktywnie zwęża pęcherz pławny przez skurcz mięśni gładkich otaczających pęcherz, wyrzucając gaz z oddechem przez skrzela', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Pęcherz pławny (swim bladder): wypełniony gazem (O₂, N₂, CO₂); prawa strona: gruczoł gazowy z rete mirabile (sieć naczyń włosowatych o przeciwprądzie) → pompowanie gazów z krwi do pęcherza (zwiększenie objętości → ryba unosi się). Zwiększenie głębokości: oval body (tylna część pęcherza) z bogatą siecią naczyń → resorpcja gazów z pęcherza do krwi → pęcherz mniejszy → gęstość ciała wzrasta → ryba opada. Ryby bez połączenia (Physoclysti): rete mirabile; ryby z połączeniem (Physostomi, np. karpiowate): połykają powietrze.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ryby, question_type: 'multiple',
    question_text: 'Płazy (Amphibia) są pierwszymi czworonogami lądowymi. Które stwierdzenia POPRAWNIE opisują ich przystosowania do życia na lądzie i w wodzie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Płazy mają wilgotną, nierogowaciejącą skórę bogato unaczynioną — uczestniczy w wymianie gazowej (skórna) szczególnie ważnej w czasie hibernacji pod wodą lub w glebie', is_correct: true },
      { id: 'B', text: 'Dorosłe płazy oddychają wyłącznie płucami; larwy (kijanki) oddychają wyłącznie skrzelami zewnętrznymi — brak wymiany gazowej przez skórę w żadnym stadium', is_correct: false },
      { id: 'C', text: 'Płazy mają trójkomorowe serce (2 przedsionki + 1 komora) i niekompletny podwójny obieg krwi — krew utlenowana i odtlenowana mieszają się w komorze, co zmniejsza efektywność transportu O₂', is_correct: true },
      { id: 'D', text: 'Płazy nie mogą rozmnażać się na lądzie — zapłodnienie jest zewnętrzne i odbywa się w wodzie; jaja pozbawione są osłony jajowej i wysychają poza wodą', is_correct: true },
    ],
    correct_answer: ['A', 'C', 'D'],
    explanation: '(A) skóra płazów: cienka, wilgotna, nierogowaciejąca (brak keratyny jak u gadów) → łatwy transport gazów i wody; śluzowe gruczoły skórne utrzymują wilgoć; oddychanie skórne (cutaneous gas exchange) kluczowe zimą (żaby pod lodem): do 70% wymiany gazowej przez skórę. (B) fałsz: dorosłe płazy oddychają: płucami + skórą + błoną śluzową jamy gębowej (buccopharyngeal); kijanki: początkowo skrzela zewnętrzne → wewnętrzne → płuca + skóra. (C) prawda: 3-komorowe serce (1 komora) → mieszanie krwi (zmniejszona efektywność) vs ptaki/ssaki (4 komory, brak mieszania). (D) prawda: jaja bez osłony amnioty (chorion, allantois, owodnia) → schnące poza wodą; zapłodnienie zewnętrzne u większości (wyjątek: niektóre salamandry).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ryby, question_type: 'single',
    question_text: 'Metamorfoza kijanki w dorosłą żabę (Rana) jest złożonym procesem. Które zmiany zachodzą podczas metamorfozy? Wskaż KOMPLETNY i POPRAWNY opis:',
    options: [
      { id: 'A', text: 'Zanik skrzeli i ogona, wykształcenie płuc i czterech kończyn, restrukturyzacja układu pokarmowego (przejście z roślinożerności na drapieżność), zmiany skóry i układu nerwowego — inicjowane przez tyroksynę (T₄/T₃)', is_correct: true },
      { id: 'B', text: 'Metamorfoza u żaby przebiega identycznie jak przeobrażenie zupełne owadów (stadium poczwarki) — kijanka zaszywa się w kokon i przebudowuje ciało w stanie spoczynkowym przez 2–3 tygodnie', is_correct: false },
      { id: 'C', text: 'Kijanka → dorosła żaba: wyłącznie wzrost wielkości bez zmian anatomicznych, poza wydłużeniem kończyn tylnych podczas ostatniego linienia chityny', is_correct: false },
      { id: 'D', text: 'Metamorfoza zainicjowana jest przez adrenalinę wydzielaną przez rdzeń nadnerczy w odpowiedzi na stres osmotyczny wilgotnego środowiska', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Metamorfoza płazów (hemimetabolia amfibii) inicjowana przez tyroksynę (T₃/T₄) z tarczycy (gdy wzrośnie wrażliwość receptorów na T₃): (1) zanik ogona i skrzeli (apoptoza); (2) wykształcenie kończyn (wcześniej zarysowane jako zawiązki); (3) przebudowa układu pokarmowego: jelito roślinożercy → krótsze jelito drapieżcy (owady, czerwie); (4) zmiany skóry (mucyny, gruczoły śluzowe); (5) zmiana hemoglobiny (larwalna → dorosła). Wszystko w ciągu kilku dni do tygodni bez stadium poczwarki (brak fazy bezruchowej).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ryby, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ryb dwudysznych (Dipnoi/Lungfishes) i ryb trzonopłetwych (Coelacanthimorpha):',
    options: [
      { id: 'A', text: 'Ryby dwudyszne (Dipnoi), np. Protopterus (afrykańska ryba dwudyszna), mogą oddychać powietrzem atmosferycznym przez prymitywne płuca (zmodyfikowany pęcherz pławny) i przeżywają suszę w mule w stanie estywacji (letargu letniego).', is_correct: true },
      { id: 'B', text: 'Ryby trzonopłetwe (Coelacanthimorpha), np. latimeria (Latimeria chalumnae), uważane były za wymarłe od 65 mln lat, aż do odkrycia żywego okazu w 1938 r. u wybrzeży Afryki Południowej; mają mięsiste płetwy z kośćmi odpowiadającymi homologom kończyn czworonogów.', is_correct: true },
      { id: 'C', text: 'Ryby dwudyszne są najbliższymi żyjącymi krewniakami czworonogów (Tetrapoda) wśród kręgowców — bliżej niż ryby trzonopłetwe; potwierdzają to analizy molekularne i budowa mięsistych płetw.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Protopterus (Afryka), Lepidosiren (Ameryka Pd.), Neoceratodus (Australia) = trzy rodzaje ryb dwudysznych; przetrwalnictwo (estivation): Protopterus zakopuje się w mule → kokon ze śluzu → przeżywa miesiące suszy oddychając powietrzem. B — Prawda: Latimeria chalumnae (1938 r., Komory) i L. menadoensis (1999, Sulawesi); "żywa skamieniałość"; mięsiste płetwy (podobne do kończyn) z odpowiednimi kościami; jajożyworodne. C — Fałsz: to właśnie ryby TRZONOPŁETWE (Coelacanthimorpha, ale głównie DIPNOI = ryby dwudyszne) są bliżej tetrapodów; analizy molekularne wskazują: Dipnoi > Coelacanthimorpha jako najbliżsi krewni czworonogów.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ryby, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują przystosowania płazów do rozmnażania? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Większość płazów składa jaja do wody (oviparous, zapłodnienie zewnętrzne); jaja otoczone są galaretem (glikoproteiny) chroniącym przed osuszeniem, patogenami i uszkodzeniami mechanicznymi', is_correct: true },
      { id: 'B', text: 'Niektóre płazy wykazują opiekę rodzicielską — żaba drzewna Dendrobates przenosi kijanki na grzbiet do oczek wodnych, żabia Darwin (Rhinoderma) wychowuje kijanki w worku głosowym samca', is_correct: true },
      { id: 'C', text: 'Salamandry ogniste (Salamandra salamandra) są jajożyworodne — samice rodzą żywe, w pełni ukształtowane larwy lub wyjątkowo nawet metamorfozujące małe salamandry', is_correct: true },
      { id: 'D', text: 'Wszystkie gatunki płazów muszą powracać do zbiorników wodnych do rozmnażania bez wyjątku — nie istnieją płazy rozmnażające się wyłącznie na lądzie', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) jaja amphibia: brak osłony wapiennej/rogowej jak u gadów; galareta = hyaluronian sodu; filtr UV i bariera dla grzybów (Batrachochytrium). (B) Dendrobates (trujące żabki): ojciec nosi kijanki na grzbiecie → osobne zbiorniczki w epifitach; Rhinoderma darwinii: kijanki w worku rezonatorowym samca → wykształcone żabki. (C) Salamandra salamandra: jajożyworodność (ovovivipary) + żyworodność (vivipary) w zależności od populacji: górskie populacje rodzą małe salamandry (neotenia larvae); S. atra (czarna salamandra alpejska): jedna lub dwie młode po 2-letniej ciąży. (D) fałsz: Eleutherodactylus (Puerto Rico, ok. 1000 sp.) składa jaja na lądzie → bezpośredni rozwój (brak larwy wodnej); wiele gatunków leśnych tropikalnych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── GADY I PTAKI (4) ──────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.gady, question_type: 'single',
    question_text: 'Jajo owodniowe (amniotic egg) gadów i ptaków jest kluczową innowacją ewolucyjną umożliwiającą pełne uniezależnienie od wody. Która błona płodowa pełni funkcję wymiany gazowej?',
    options: [
      { id: 'A', text: 'Omocznia (allantois) — bogato unaczyniona błona służąca jako płuco i pęcherz moczowy zarodka: odprowadza CO₂, pobiera O₂, magazynuje moczany (odpad azotem)', is_correct: true },
      { id: 'B', text: 'Owodnia (amnion) — wypełniona płynem owodniowym okrywająca zarodek; odpowiada bezpośrednio za wymianę gazową z zewnętrzem przez pory w skorupce', is_correct: false },
      { id: 'C', text: 'Kosmówka (chorion) — zewnętrzna błona bez naczyń krwionośnych, działająca jako fizyczna membrana do filtracji gazów i wody przez osmozę', is_correct: false },
      { id: 'D', text: 'Żółtko (yolk sac) — zawierające naczynia krwionośne struktury wchłaniające O₂ przez cienką skorupkę, jedyna błona uczestnicząca w wymianie gazowej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Błony płodowe jaja owodniowego: (1) owodnia (amnion): otacza zarodek → płyn owodniowy → ochrona mechaniczna; (2) kosmówka (chorion): zewnętrzna, okrywa wszystko + ściśle przylega do skorupki → wymiana gazów przez pory skorupki (kosmówka + omocznia razem tworzą chorioallantoic membrane); (3) omocznia (allantois): narząd wielofunkcyjny: bogato unaczyniony → wymiana gazowa O₂/CO₂ przez kosmówkę, magazyn odpadów azotowych (kwas moczowy, nierozpuszczalny, kryształy) u gadów/ptaków; (4) pęcherzyk żółtkowy (yolk sac): wchłanianie żółtka (składniki odżywcze). Kwas moczowy (uricotelic) = adaptacja do braku wody w jaju.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gady, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują przystosowania ptaków (Aves) do lotu? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Kości ptaków są pneumatyczne (część wypełniona powietrzem połączonym z workami powietrznymi) — zmniejsza to masę szkieletu przy zachowaniu wytrzymałości', is_correct: true },
      { id: 'B', text: 'Ptaki mają jednokierunkowy przepływ powietrza przez płuca dzięki systemowi worków powietrznych (9 worków) — tlen dostępny podczas wdechu I wydechu; bardziej efektywny niż ssaczy przepływ dwukierunkowy', is_correct: true },
      { id: 'C', text: 'Ptaki mają wysoki metabolizm i wysoką stałą temperaturę ciała (endotermia); serce czterokomorowe bez mieszania krwi zapewnia efektywny transport tlenu do intensywnie pracujących mięśni lotu', is_correct: true },
      { id: 'D', text: 'Pióra ptaków są zbudowane z kolagenu i są ewolucyjnymi odpowiednikami łusek płazów, które stopniowo wydłużyły się w procesie ewolucji do postaci użytecznej dla lotu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) kości pneumatyczne: połączone z workami powietrznymi (np. kości ramienne u albatrosów); mostek z grzebieniem (carina) — powierzchnia przyczepu mięśni piersiowych; lekkie kości = masa ciała minimalna. (B) system worków powietrznych (9): powietrze przepływa w jednym kierunku: worki tylne → płuca (parabronchi) → worki przednie → na zewnątrz; wymiana gazowa zarówno przy wdechu jak wydechu → 2× efektywniejsze niż ssacze (tylko przy wdechu). (C) endotermia + 4-komorowe serce (pełna separacja krwi utle/odtlenow.) → wysoki wysiłek mięśniowy. (D) fałsz: pióra zbudowane z β-keratyny (twarda, nie kolagen); homologiczne ze ŁUSKAMI GADÓW (gady → ptaki; łuski rogowe ze zmodyfikowanego naskórka); nie ze łuskami płazów.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gady, question_type: 'single',
    question_text: 'Gady (Reptilia sensu lato) są ekzotermami. Jakie zachowania termoregulacyjne umożliwiają im utrzymanie optymalnej temperatury ciała?',
    options: [
      { id: 'A', text: 'Gady regulują temperaturę behawioralnie: wygrzewanie się w słońcu (heliotermia) lub na ciepłym podłożu (tigmotermia) do osiągnięcia temp. aktywnej; ukrywanie się w cieniu lub norach gdy za gorąco', is_correct: true },
      { id: 'B', text: 'Gady wytwarzają dużo ciepła metabolicznego przez spalanie zapasów tłuszczu w brunatnej tkance tłuszczowej — identyczny mechanizm jak u ssaków hibernujących', is_correct: false },
      { id: 'C', text: 'Gady są stałocieplne, a pojęcie "zmiennocieplność" odnosi się jedynie do ryb; gady utrzymują stałą temperaturę ciała niezależną od otoczenia przez wyspecjalizowany termostat w podwzgórzu', is_correct: false },
      { id: 'D', text: 'Gady nie prowadzą żadnej aktywnej termoregulacji — ich temperatura ciała jest zawsze równa temperaturze powietrza otoczenia bez możliwości odchyłki', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Gady = ekzotermy (poikilothermy): temperatura ciała zależy od środowiska, ale aktywnie regulowana behawioralnie: (1) heliotermia: wygrzewanie ciałem ku słońcu (np. jaszczurki rano leżą płasko maksymalizując powierzchnię); (2) tigmotermia: ciepłe kamienie; (3) termoregulacja posturalna: zmiana kąta ciała do słońca; (4) ucieczka w cień gdy zbyt gorąco. Temperatura aktywna (preferred body temperature, TBP): 30–40°C u większości jaszczurek. Wyjątek: niektóre duże gady (skórzak morski) mają ciepłotę wyższą niż otoczenie przez gigantotermię (masa).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gady, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących gadów:',
    options: [
      { id: 'A', text: 'Krokodyle (Crocodylia) mają czterokomorowe serce z prawie kompletną przegrodą komorową — bardziej zaawansowane niż inne gady (z trójkomorowym sercem) i zbliżone do serca ptaków i ssaków.', is_correct: true },
      { id: 'B', text: 'Węże (Serpentes) utraciły kończyny wtórnie w ewolucji z jaszczurkopodobnych przodków; niektóre (np. pyton, boa) zachowały szczątkowe kości kończyn tylnych (vestigial pelvic spurs) jako dowód ewolucji.', is_correct: true },
      { id: 'C', text: 'Łuski gadów (reptile scales) zbudowane są z keratyny i są homologiczne ze łuskami ryb kostnoszkieletowych — obie grupy mają te same struktury przekształcone przez ewolucję konwergentną.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Crocodylia: serce 4-komorowe z otworem Panizzego między łukami aorty → umożliwia krótkotrwałe zmieszanie krwi podczas nurkowania; ptaki (Aves) = siostrzana kladystycznie gruppe Crocodylia → razem Archosauria; dlatego krokodyle bliżej ptaków niż innych gadów. B — Prawda: Serpentes (węże) ewoluowały z jaszczurek → redukcja kończyn; Boa, Python, Calabaria: rurki (vestigi) miednicy + spurs (kolce miedniczne widoczne zewnętrznie samców) = homologi tylnych kończyn. C — Fałsz: łuski gadów = strukt. epidermalnej β-keratyny (naskórkowe); łuski ryb kostnoszkieletowych = strukt. dermalne (kostne: ganoine, cosmin, elasmoid) — nie homologiczne; zbieżna (konwergentna) morfologia, różne pochodzenie.',
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
  console.log(`Seeding batch 3 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
