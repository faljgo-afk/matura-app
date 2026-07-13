// Seed batch 4/6 — Różnorodność zwierząt
// Gady i ptaki (3) + Ssaki (7)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2'

const S = {
  gady:  'f74eae00-3b0d-43b3-8d4b-9c1926bfca14',
  ssaki: '64f6fdff-c569-414d-a414-739fd02dca2e',
}

const questions = [

  // ── GADY I PTAKI (3) ──────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.gady, question_type: 'single',
    question_text: 'Ptaki należą zgodnie z systematyką filogenetyczną (kladystyczną) do gromady gadów. Które odkrycie naukowe NAJBARDZIEJ przyczyniło się do tej klasyfikacji?',
    options: [
      { id: 'A', text: 'Odkrycie Archaeopteryx lithographica (1861) z cechami przejściowymi: zębami, pazurami na skrzydłach i długim kopcowym ogonem — cechy gadów + pióra i kości widelcowe (furcula) ptaków', is_correct: true },
      { id: 'B', text: 'Odkrycie, że ptaki mają czterokomorowe serce identyczne z ssakami, co wskazuje na wspólne pochodzenie od ssakopodobnych gadów, a nie od dinozaurów', is_correct: false },
      { id: 'C', text: 'Obserwacja, że ptaki składają jaja podobne do płazich, bez skorupki, co wskazuje na prymitywne cechy sprzed gadów', is_correct: false },
      { id: 'D', text: 'Sekwencjonowanie mitochondrialnego DNA, które wykazało, że ptaki są bliżej spokrewnione z ssakami niż z krokodylami', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Archaeopteryx lithographica (późna jura, ~150 mln lat): "Urvogel" (prajptak) — kluczowy skamieniały organizm przejściowy: (1) cechy gadów: zęby, długi kostny ogon, pazury na palcach skrzydeł; (2) cechy ptaków: pióra asymetryczne (aerodynamiczne), furcula (kość widelcowa, fuzja obojczyków), zmodyfikowane kończyny przednie. Współczesna filogenetyka (kladystyka, analiza DNA): Aves = klada Dinosauria (Theropoda → Maniraptora → Aves); krokodyle (Crocodylia) = siostrzana grupa ptaków (razem Archosauria). Stąd "Reptilia" w sensie kladystycznym obejmuje ptaki.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gady, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnorodność gadów? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Tuatara (Sphenodon punctatus), endemit Nowej Zelandii, jest jedynym żyjącym przedstawicielem rzędu Rhynchocephalia — "żywa skamieniałość" o anatomii niezmienionej od 200 mln lat', is_correct: true },
      { id: 'B', text: 'Żółwie (Testudines) mają skorupę zbudowaną z kostnych płytek zrośniętych z kręgosłupem i żebrami (grzbietowa tarcza = karapaks) + plastron (brzuszna); jest to adaptacja ochronna unikatowa wśród kręgowców', is_correct: true },
      { id: 'C', text: 'Wszystkie żmije (Viperidae, np. żmija zygzakowata Vipera berus) są roślinożercami używającymi jadowitych kłów wyłącznie do obrony przed drapieżnikami, a nie do polowania', is_correct: false },
      { id: 'D', text: 'Gekony (Gekkonidae) mogą wspinać się po pionowych gładkich powierzchniach dzięki sile van der Waalsa między milionami mikroskopijnych szczecinек (setae) na poduszeczkach nóg a podłożem', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) Sphenodon punctatus: Nowa Zelandia, relikt Rhynchocephalia; czynna nocna aktywność, zęby akrodontyczne (zrośnięte z kością), trzecie oko ciemieniowe (funkcjonalne). (B) żółwie: karapaks = 60 płytek zrośniętych z kręgosłupem piersiowym i żebrami + plastron (brzuszna); mięśnie ramion przyczepiają się inaczej niż u innych kręgowców (wewnątrz obręczy barkowej). (C) fałsz: żmije są MIĘSOŻERCAMI polującymi na gryzonie, jaszczurki, płazy; jad (hemotoksyna = enzymy trawią krew i tkanki) używany do unieruchomienia ofiary i trawienia. (D) prawda: van der Waals (siły dyspersyjne) między beta-keratin setae (~100 nm) a powierzchnią; suche przyleganie; Tokay gecko: ciężar 150 g, przyciąganie ~20 N.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.gady, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ptaków:',
    options: [
      { id: 'A', text: 'Bezlotne ptaki (Ratitae), np. struś (Struthio), kiwi (Apteryx), nandu (Rhea), mają atrofowany grzebień mostka (carinae) i słabo rozwinięte mięśnie piersiowe — nie latają, ale dostosowane do biegu lub pływania.', is_correct: true },
      { id: 'B', text: 'Ptaki śpiewające (Passeriformes) stanowią ponad połowę wszystkich gatunków ptaków (~6000 z ~10 000); mają wyspecjalizowane syrinx (narząd głosu) produkujące złożone melodie uczonych przez rodziców.', is_correct: true },
      { id: 'C', text: 'Ptaki migrujące nawigują wyłącznie za pomocą wzroku (zapamiętane punkty orientacyjne) i nie mają zdolności magnetorecepcji ani orientacji według gwiazd.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Palaeognathae (w tym Ratitae): mostek płaski (bez carinae) → brak przyczepu dużych mięśni pecto → nielotne; struś: 2 palce, szybki bieg (70 km/h); kiwi: nocne, węch rozwinięty, jaje ogromne; pingwiny (Sphenisciformes): latają w wodzie. B — Prawda: Passeriformes (~60% gatunków ptaków): syrinx (liczne pary mięśni) → złożone pieśni; śpiew uczony (cultural transmission) od rodziców; kluczowy dla terytorium i zalotów; dialekty regionalne. C — Fałsz: ptaki migrujące używają WIELU systemów nawigacji: kompas magnetyczny (kryptochromy w siatkówce, magnetyt w dziobie), gwiazdy (nocne migracje), słońce + wewnętrzny zegar, punkty orientacyjne, węch (gołębie).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── SSAKI (7) ────────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.ssaki, question_type: 'single',
    question_text: 'Ssaki (Mammalia) są endotermami z szeregiem cech wyróżniających. Które zestawienie cech NAJLEPIEJ definiuje ssaki jako grupę?',
    options: [
      { id: 'A', text: 'Gruczoły mlekowe (mammary glands) wydzielające mleko do karmienia młodych, sierść/futro (włosy), żyworodność lub jajożyworodność (stekowce), trzy kosteczki ucha środkowego (malleus, incus, stapes) i podniebienie wtórne', is_correct: true },
      { id: 'B', text: 'Cztery kończyny z kopytami, stałocieplność, rozmnażanie przez jaja z twardą skorupą i brak zębów (dziobopodobny aparat gębowy)', is_correct: false },
      { id: 'C', text: 'Oddychanie skrzelami przez całe życie, bezpośredni rozwój bez metamorfozy i utrata sierści w trakcie dorastania na rzecz łusek rogowych', is_correct: false },
      { id: 'D', text: 'Serce trójkomorowe z niekompletną przegrodą komorową, zmiennocieplność i karmienie jaj przez wydzieliny gruczołów skórnych (bez gruczołów mlekowych jako takich)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cechy definiujące Mammalia: (1) gruczoły mlekowe (modifikowane gruczoły skórne apokrynowe) → mleko dla młodych (białka, tłuszcze, laktoza, przeciwciała); (2) sierść/włosy (β-keratyna, izolacja termiczna); (3) trzy kosteczki ucha środkowego: malleus + incus (homologie kości szczękowej i articular gadów) + stapes → amplifikacja dźwięku; (4) podniebienie wtórne → oddzielenie jamy nosowej od jamy gębowej → ssanie i oddychanie równocześnie; (5) serce 4-komorowe; (6) przepona; (7) endoterma przez termogenezę (brązowa tkanka tłuszczowa, drżenie mięśniowe).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ssaki, question_type: 'single',
    question_text: 'Stekowce (Monotremata), np. dziobak (Ornithorhynchus anatinus) i kolczatka (Tachyglossus aculeatus), różnią się od pozostałych ssaków sposobem rozmnażania. Na czym polega ta różnica?',
    options: [
      { id: 'A', text: 'Stekowce składają jaja z pergaminową skorupką (jajorodni), a po wykluciu karmią młode mlekiem wydzielanym przez brodawki mleczne lub gruczoły skórne — nie mają sutków', is_correct: true },
      { id: 'B', text: 'Stekowce są żyworodnymi ssakami z dobrze wykształconym łożyskiem, ale rodzą jedno jajo co rok jako strategia K-selekcji', is_correct: false },
      { id: 'C', text: 'Stekowce rodzą bardzo niedojrzałe młode, które dalej rozwijają się w torbie (marsupium) przez kilka miesięcy, podobnie jak torbacze', is_correct: false },
      { id: 'D', text: 'Stekowce rozmnażają się przez podział ciała (pączkowanie) — unikatowy dla ssaków sposób rozmnażania bezpłciowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Monotremata (stekowce): Ornithorhynchus anatinus (dziobak, wodny, dziób gumowy z elektroreceptorami), Tachyglossus aculeatus i Zaglossus (kolczatki). Jajorodność: jaja małe, pergaminowe, inkubowane przez 10 dni (dziobak: w norze, owija jajko ogonem); wyklucie → larwy liżą/ssą mleko z kałużyn na skórze brzucha matki (brak sutków, mleko wycieka przez pory gruczołów); dorosłe mają kloakę (jeden otwór: jelito + drogi rodne + moczowe = monotremata). Inne ssaki: torbacze (Marsupialia) rodząc niedojrzałe młode → torba; łożyskowce (Placentalia) z łożyskiem.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ssaki, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnice między torbaczyami (Marsupialia) a łożyskowcami (Placentalia)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Torbacze rodzą bardzo niedojrzałe młode (np. kangur: ~1 g przy urodzeniu) które pełzają do torby i przyczepiają się do sutka; zamiast łożyska mają choriovitelline placenta lub krótkotrwałe chorioallantoic', is_correct: true },
      { id: 'B', text: 'Łożyskowce mają trwałe łożysko chorioallantoiczne umożliwiające długą ciążę i urodzenie dojrzałego potomka; wymiana składników i gazów odbywa się bez mieszania krwi matki i płodu', is_correct: true },
      { id: 'C', text: 'Torbacze i łożyskowce wyewoluowały niezależnie od stekowców na różnych kontynentach, co jest przykładem ewolucji równoległej a nie wspólnego przodka', is_correct: false },
      { id: 'D', text: 'Torbacze są zdominowane przez gatunki australijskie, gdzie w izolacji kontynentu wyewoluowały formy konwergentne do łożyskowców: wilk workowaty (Thylacinus = konwergentny wilk), królik workowaty, mrówkojad workowaty (Myrmecobius)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) torbacze: ciąża 12–40 dni (kangur rudawy: 33 dni), joey (noworodek): 1 g, ślepe, bez tylnych kończyn → 8 miesięcy w torbie ssąc sutek. (B) łożysko chorioallantoiczne: kosmki trofoblastu + naczynia matki → wymiana przez dyfuzję/transport aktywny bez mieszania krwi (inna grupa krwi u płodu możliwa). (C) fałsz: Marsupialia + Placentalia = Theria — klade siostrzane z WSPÓLNYM przodkiem; Monotremata = outgroup; dywergencja Theria ok. 160 mln lat. (D) prawda: Australia → izolacja → promieniowanie torbaczów w nisze zaoiowane przez łożyskowce gdzie indziej: Thylacinus (wilk workowaty, wymarły 1936) ≈ wilk; Notoryctes (kret workowaty) ≈ kret; Myrmecobius (numbat) ≈ mrówkojad.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ssaki, question_type: 'single',
    question_text: 'Delfiny i wieloryby (Cetacea) są ssakami w pełni przystosowanymi do życia wodnego. Które cechy POTWIERDZAJĄ, że są to ssaki, a nie ryby?',
    options: [
      { id: 'A', text: 'Karmienie mlekiem przez gruczoły mlekowe, oddychanie powietrzem przez płuca (nozdrza = tchawica na szczycie głowy), pozioma płetwa ogonowa (flukes) poruszana górę-dół (nie wertykalna jak u ryb), szczątkowe tylne kończyny (u niektórych)', is_correct: true },
      { id: 'B', text: 'Oddychanie skrzelami przez szczelinowate otwory za głową, pionowa płetwa ogonowa i temperatura ciała równa temperaturze wody oceanu', is_correct: false },
      { id: 'C', text: 'Obecność łusek pokrywających ciało, zmiennocieplność i brak opieki nad potomstwem — cechy ryb obecne u waleni jako wynik konwergencji', is_correct: false },
      { id: 'D', text: 'Rozmnażanie przez tarło (składanie ikry) do wody i zewnętrzne zapłodnienie przez samca wydzielającego spermę nad jajami', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cetacea (wieloryby, delfiny, morświny) = ssaki wtórnie wodne (ok. 55 mln lat temu, przodek: Pakicetus na lądzie). Dowody ssaczości: (1) oddychanie płucami przez tchawicę (otwór na szczycie — tuba nosowa); muszą wynurzać się; (2) gruczoły mlekowe + ssanie mleka (bardzo tłuste mleko, >40% tłuszczu); (3) pozioma flukes (górę-dół) — wał muskulatury grzbietowej, jak u biegnących ssaków lądowych → vs ryby: pionowa płetwa + ruch boczny; (4) kości miednicy szczątkowe + zalążki tylnych kończyn; (5) sierść u noworodków; (6) endotermia (blubber = warstwa tłuszczu).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ssaki, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ssaków:',
    options: [
      { id: 'A', text: 'Naczelne (Primates), w tym człowiek (Homo sapiens), charakteryzują się chwytną dłonią z kciukiem przeciwstawnym, dużą pojemnością mózgowia w stosunku do masy ciała i skróceniem czaszki trzewiowej.', is_correct: true },
      { id: 'B', text: 'Ssaki z rzędu Chiroptera (nietoperze) są jedynymi ssakami zdolnymi do aktywnego lotu; orientują się echolokacją — emitują ultradźwięki i analizują echa odbite od obiektów.', is_correct: true },
      { id: 'C', text: 'Ssaki łożyskowe (Placentalia) nie posiadają brunatnej tkanki tłuszczowej (brown adipose tissue) i nie są zdolne do termogenezy drżeniowej — jedyna metoda utrzymania ciepłoty ciała to skurcze mięśni szkieletowych.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: naczelne: kciuk przeciwstawny (precyzyjny chwyt), orbity oczodołów skierowane do przodu (stereoskopia), paznokcie zamiast pazurów u większości, duży neocortex. B — Prawda: Chiroptera: jedyne ssaki z aktywnym lotem (latające wiewiórki = ślizganie, nie lot); echolokacja: ultradźwięki (>20 kHz) z krtani lub nosa → echo analizowane przez wyspecjalizowaną korę słuchową; laryngeal echolocation u większości, nasal u koni podkownych. C — Fałsz: ssaki (szczególnie noworodki, hibernujące gryzonie, torbacze) mają brunatną tkankę tłuszczową (BAT) z termogeniną (UCP1) w mitochondriach → uncoupled oxidative phosphorylation → ciepło zamiast ATP; BAT u noworodka człowieka między łopatkami.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ssaki, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują uzębienie ssaków jako cechę diagnostyczną? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Ssaki mają zęby heterodontyczne (różnokształtne): siekacze (dentes incisivi) do cięcia, kły (canini) do chwytania i rozrywania, przedtrzonowce (premolari) i trzonowce (molari) do rozcierania', is_correct: true },
      { id: 'B', text: 'U ssaków difiodontycznych (np. człowiek) wyróżnia się dwie generacje zębów: mleczne (decidui) zastępowane przez stałe; u monifiodontycznych (np. szczury) wyrastają tylko zęby stałe', is_correct: true },
      { id: 'C', text: 'Wzór zębowy (dental formula) jest cechą gatunkową: np. człowiek ma formułę 2·1·2·3 / 2·1·2·3 (2 siekacze, 1 kieł, 2 przedtrzonowce, 3 trzonowce w każdej połowie żuchwy i szczęki), łącznie 32 zęby stałe', is_correct: true },
      { id: 'D', text: 'Wieloryby (Cetacea) są wyjątkiem wśród ssaków — mają zęby homodontyczne (jednakowo kształtne) lub całkowicie bezzębne (fiszbiny zamiast zębów u waleni fiszbinowych)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C', 'D'],
    explanation: '(A) heterodoncja = cecha ssaków; każdy typ zębów ma odrębny kształt i funkcję. (B) difiodoncja: 2 generacje (mleczne + stałe); monifiodoncja: 1 generacja (np. gryzonie, lagomorfa); polifiodoncja: >2 generacje (ryby, płazy, gady → wielokrotna wymiana). (C) wzór zębowy człowieka: I2/2, C1/1, P2/2, M3/3 = 32 zęby stałe; ząb mądrości (M3) często niewyrzyna się lub jest usuwany. (D) zęby homodontyczne: delfiny, morświny, kaszalot (stożkowate zęby do chwytania ryb); bezzębne: Mysticeti (fiszbinowce) — keratynowe fiszbiny (baleens) do filtrowania plankton; Mystacodon selenensis = wymarły wieloryb zębaty przejściowy do fiszbinowców.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ssaki, question_type: 'single',
    question_text: 'Gryzonie (Rodentia) to najliczniejsza grupa łożyskowców (~40% gatunków ssaków). Która cecha budowy zębów jest charakterystyczna dla gryzoni?',
    options: [
      { id: 'A', text: 'Stale rosnące siekacze z twardą emalią z przodu i miękką zębiną z tyłu — ścieranie twardszych pokarmów powoduje samoostrzenie (przód ściera się wolniej → krawędź dłutowata)', is_correct: true },
      { id: 'B', text: 'Gryzonie mają największe kły wśród ssaków proporcjonalnie do rozmiarów ciała — używane do obrony i rozrywania mięsa ofiar', is_correct: false },
      { id: 'C', text: 'Gryzonie posiadają trzy generacje zębów (polifiodoncja): mleczne, stałe i trzecia generacja regeneracyjna wyrastająca po utrazie stałych', is_correct: false },
      { id: 'D', text: 'Brak jakichkolwiek siekaczy u gryzoni — odżywiają się wyłącznie filtrując wodę lub ssąc sok roślinny przez bezzębny aparat gębowy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Rodentia (gryzonie): 2 siekacze górne + 2 dolne (brak kłów; diastema = przerwa między siekaczami a trzonowcami). Siekacze: (1) stale rosnące (hypselodontyczne, aradiculares) przez całe życie (do 5 mm/tydzień); (2) asymetryczne: przód = gruba warstwa szkliwa (twarda, pomarańczowa od żelaza); tył = zębina (mniej twarda); (3) użycie: twardsze pokarmy → zębina ściera się szybciej → ostrze jak dłuto. Bez gryzienia → siekacze rosną w spiralę przez brak ścierania → śmierć. Bobry: ścinają drzewa; myszy: żują kable i drewno.',
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
  console.log(`Seeding batch 4 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
