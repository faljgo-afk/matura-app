// Seed batch 2/6 — Różnorodność roślin — tkanki i organy
// Tkanki roślinne (3) + Tkanki przewodzące (3) + Budowa korzenia (4)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d'

const S = {
  tkanki:      '9ec87867-e7fd-445f-9df4-dd309c78f156',
  przewodzace: 'af3b084b-a1ed-492e-abed-ed136e095415',
  korzen:      '7412b8c7-d272-4d2e-b7fd-2c476174fa8b',
}

const questions = [

  // ── TKANKI ROŚLINNE (3) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.tkanki, question_type: 'single',
    question_text: 'Korek (fellem) zastępuje epidermy w starszych częściach łodygi i korzenia. Kto go wytwarza i dlaczego jest nieprzepuszczalny dla wody?',
    options: [
      { id: 'A', text: 'Korek wytwarza kambium naczyniowe; jest nieprzepuszczalny dzięki ligninizacji ścian komórkowych i zamknięciu jam przez drewno wtórne', is_correct: false },
      { id: 'B', text: 'Korek wytwarza fellogen (kambium korkotwórcze); komórki korka są martwe i mają ściany nasycone subertyną (polimer tłuszczowy), co czyni je nieprzepuszczalnymi dla wody i gazów', is_correct: true },
      { id: 'C', text: 'Korek wytwarza się samoczynnie z martwych komórek epidermy bez udziału aktywnego merystemu; jego nieprzepuszczalność wynika z obecności wosków egzogennych', is_correct: false },
      { id: 'D', text: 'Korek jest zbudowany z żywych komórek parenchymatycznych bogatych w chloroplasty, które przeprowadzają fotosyntezę kompensującą utratę liści w jesieni', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Peryderma (korek wtórny) = fellem (korek) + fellogen (kambium korkotwórcze) + felloderm (żywa tkanka wewnętrzna). Fellogen (merystem boczny) produkuje na zewnątrz komórki korka (fellem) — martwe po dojrzeniu, ściany impregnowane suberyną (polimer hydroksykwasów tłuszczowych); nieprzepuszczalne dla wody i gazów → ochrona przed wyschnięciem i patogenami. Przetchlinki (lenticele) — przerwy w korku umożliwiające wymianę gazową. Korek dębowy (Quercus suber) przemysłowo pozyskiwany jako korek do butelek.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.tkanki, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących tkanek wydzielniczych roślin:',
    options: [
      { id: 'A', text: 'Hydatody (żywice wodne) to wyspecjalizowane struktury na brzegach i koniuszkach liści umożliwiające gutację — wydalanie wody w postaci kropelek gdy transpiracja jest niemożliwa (np. w nocy przy wysokiej wilgotności).', is_correct: true },
      { id: 'B', text: 'Mleczniki (laticifers) to żywe komórki lub naczynia zawierające lateks — emulsja zawierająca terpeny, alkaloidy, białka i polimery (np. kauczuk); obecne np. u euforbiowatych, mleczowatych i papai.', is_correct: true },
      { id: 'C', text: 'Nektarniki (nectaria) wydzielają nektar złożony wyłącznie z wody i aminokwasów (brak cukrów), aby wabiić zapylacze zainteresowane jedynie białkiem, nie energią.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: gutacja zachodzi przez hydatody (wodne szparki w pobliżu żyłek) gdy ciśnienie korzeniowe przewyższa siłę ssącą → wypychanie wody; widoczne jako krople na krawędziach liści traw, truskawek rano. B — Prawda: lateks mlecznika = emulsja wieloskładnikowa; kauczuk naturalny (poliizopreniluczuk) — źródło hevea brasiliensis; lateks euforbia może być silnie drażniący. C — Fałsz: nektar to roztwór cukrów (sacharoza, glukoza, fruktoza 20–80%) + aminokwasy + kwasy organiczne + olejki; cukry = główne źródło energii dla owadów, ptaków (kolibrów), nietoperzy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.tkanki, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują komórki merystematyczne i ich cechy? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Komórki merystematyczne są niewielkie, mają duże jądra w stosunku do objętości cytoplazmy, cienkie ściany celulozowe i intensywnie dzielą się mitotycznie', is_correct: true },
      { id: 'B', text: 'Komórki merystematyczne z reguły nie mają wakuoli lub mają bardzo małe wakuole — w odróżnieniu od dojrzałych komórek parenchymy z centralną wakuolą', is_correct: true },
      { id: 'C', text: 'Merystem intercalarny (wstawowy) u traw zlokalizowany jest u podstawy każdego międzywęźla (internode) i umożliwia szybki wzrost źdźbła po skoszeniu', is_correct: true },
      { id: 'D', text: 'Komórki merystematyczne są wysoce zróżnicowane i wyspecjalizowane, posiadając liczne chloroplasty, tonoplasty i zdrewniałe ściany typowe dla tkanek dojrzałych', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) cechy merystematyczne: małe, izodiamet., bogate cytoplazma, duże jądro (dużo DNA do replikacji), brak lub małe wakuole, cienkie ściany, intensywna mitoza. (B) wakuola centralna to cecha dojrzałej komórki parenchymatycznej (zajmuje 90% objętości) — merystematyczne: brak lub mała. (C) merystem wstawowy traw: zlok. u podstawy rosnącego internacional — dlatego trawa odradza się po koszeniu; źdźbło bambusa może rosnąć 90 cm/dobę. (D) fałsz: komórki merystematyczne są NIEZRÓŻNICOWANE (totipotentne) — mogą różnicować się w każdy typ tkanki. Chloroplasty, drewnienie ścian, duże wakuole to cechy komórek DOJRZAŁYCH.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TKANKI PRZEWODZĄCE (3) ────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.przewodzace, question_type: 'single',
    question_text: 'Obrączkowanie łodygi (usunięcie pierścienia kory i łyka) prowadzi do obumierania korzeni rośliny. Wyjaśnia to, że:',
    options: [
      { id: 'A', text: 'Usunięcie łyka przerywa transport sacharozy i innych asymilatów z liści do korzeni — korzenie tracą źródło substancji organicznych i obumierają z głodu', is_correct: true },
      { id: 'B', text: 'Usunięcie kory i łyka przerywa transport wody w ksylemie — korzenie wysychają bez dostępu do wody z liści', is_correct: false },
      { id: 'C', text: 'Obrączkowanie niszczy kambium i blokuje wytwarzanie nowych naczyń ksylemu, uniemożliwiając dalszy wzrost korzeni', is_correct: false },
      { id: 'D', text: 'Usunięcie kory niszczy komórki endodermy korzenia, które bez sygnałów z liści nie mogą absorbować wody z gleby', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Klasyczny eksperyment obrączkowania (girdling) demonstruje funkcję floemu: usunięcie kory + łyka (floem) przerywa transport symplastu (symplastyczny przepływ sacharozy i innych asymilatów z "source" w liściach do "sink" w korzeniach) → korzenie głodują, obumierają. Powyżej cięcia gromadzi się nadmiar cukrów (widoczny obrzęk kory) → pęcznienie → sygnał dla produkcji owoców (technika stosowana w sadownictwie do zwiększania plonów). Transport wody (ksylem) → drewno jest wewnątrz kory → nie jest uszkodzone przy obrączkowaniu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przewodzace, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących drewna wtórnego (ksylemu wtórnego):',
    options: [
      { id: 'A', text: 'Drewno wczesnowiosenne (wiosenne) w słojach rocznych charakteryzuje się większymi i cieńkościennymi naczyniami niż drewno późne (letnie) ze względu na szybszy wzrost kambium wiosną przy dużej dostępności wody.', is_correct: true },
      { id: 'B', text: 'Twardziel (drewno trzonowe, heartwood) to martwa wewnętrzna część pnia z deponowanymi substancjami fenolowymi i żywicami, a biel (sapwood) to żywa część zewnętrzna czynna w transporcie wody.', is_correct: true },
      { id: 'C', text: 'Słoje roczne (pierścienie wzrostu) tworzą się u wszystkich gatunków drzew, w tym tropikalnych gatunków strefy równikowej, gdzie sezonowość klimatu powoduje wyraźne przerwy w aktywności kambium.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: drewno wczesne (wiosna): szerokie, cieńkościenne naczynia — szybki transport wody po zimowym spoczynku; drewno późne (lato): wąskie, grubościenne — mniej wody, wolniejszy wzrost, więcej włókien mechanicznych. Granica wczesne/późne = granica słoja rocznego. B — Prawda: biel (sapwood, kilka cm zewnętrznych) czynny transportowo; twardziel (heartwood) z impregnacją ligniną, taninami, żywicami → twardszy, odporny na gnicie, ciemniejszy. C — Fałsz: drzewa tropikalne z równomiernym klimatem (np. amazońskie) NIE tworzą wyraźnych słojów rocznych (brak wyraźnej sezonowości) lub tworzą niewyraźne słoje nieodpowiadające latom.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przewodzace, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują budowę i skład ksylemu pierwotnego? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Ksylem pierwotny zawiera cewki lub naczynia (elementy trachearne), włókna ksylemowe (fibers) i miękisz ksylemowy (komórki żywe do magazynowania)', is_correct: true },
      { id: 'B', text: 'Protoksylem (pierwszy wytworzony ksylem pierwotny) ma pierścieniowate lub spiralne zgrubienia ścian, co pozwala na rozciąganie przy dalszym wzroście elongacyjnym organu', is_correct: true },
      { id: 'C', text: 'Metaksylem (późniejszy ksylem pierwotny) ma siateczkowate lub skalariformiczne zgrubienia ścian i dojrzewa, gdy organ zakończył już wzrost na długość', is_correct: true },
      { id: 'D', text: 'Ksylem pierwotny jest wytwarzany przez kambium naczyniowe podczas wzrostu wtórnego — identyczny mechanizm jak drewno wtórne starszych pędów', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) ksylem = elementy trachearne (naczynia/cewki) + włókna ksylemowe (wzmocnienie mechaniczne) + miękisz ksylemowy (magazynowanie skrobi, kontakt promieni rdzeniowych). (B) protoksylem dojrzewa w strefie elongacji — pierścieniowate/spiralne zgrubienia pozostawiają niezgrubione obszary → komórka może się rozciągać razem z rosnącym organem, potem ulega destrukcji przy intensywnym wzroście. (C) metaksylem dojrzewa po zakończeniu wzrostu elongacyjnego — pełne zgrubienia siatkowate/skalariformiczne. (D) fałsz: ksylem pierwotny pochodzi z prokambium (pierwotnego merystemu), nie z kambium naczyniowego (merystem wtórny); kambium wytwarza ksylem wtórny (drewno wtórne).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── BUDOWA KORZENIA (4) ───────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.korzen, question_type: 'single',
    question_text: 'Na przekroju poprzecznym korzenia pierwotnego roślin dwuliściennych wyróżnia się kilka stref. Wskaż prawidłową kolejność od zewnątrz do wewnątrz:',
    options: [
      { id: 'A', text: 'Epiderma → kora pierwotna (miękisz kory) → endoderma → perycykl → walec osiowy (ksylem i floem)', is_correct: true },
      { id: 'B', text: 'Kambium → epiderma → kora → endoderma → floem → ksylem', is_correct: false },
      { id: 'C', text: 'Perycykl → kora → endoderma → epiderma → ksylem centralny', is_correct: false },
      { id: 'D', text: 'Epiderma → endoderma → kora → perycykl → floem → ksylem', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Przekrój korzenia pierwotnego (od zewnątrz): (1) epiderma ryzoderma z włośnikami — absorpcja wody i jonów; (2) kora pierwotna — miękisz kory (parenchyma), gromadzenie substancji; (3) endoderma — jedna warstwa komórek z pasemkiem Casparyego (suberyna) blokującym szlak apoplastyczny; (4) perycykl — zewnętrzna warstwa walca osiowego, inicjuje korzenie boczne; (5) walec osiowy (stela) — ksylem (gwiazdowaty, centralny) i floem (między ramionami gwiazdy) ułożone naprzemiennie (wiązka radialna). U jednoliściennych: często rdzeń parenchymatyczny w centrum.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.korzen, question_type: 'single',
    question_text: 'Korzenie boczne (korzenie przybyszowe) u roślin dwuliściennych powstają endogenicznie. Skąd dokładnie pochodzą?',
    options: [
      { id: 'A', text: 'Z komórek epidermy korzenia głównego, które ulegają dedyferencjacji i tworzą merystem korzenia bocznego na powierzchni', is_correct: false },
      { id: 'B', text: 'Z komórek perycyklu — warstwy komórek tuż na zewnątrz walca osiowego; dzielą się i formują zawiązek korzenia bocznego przebijający korę i epidermy', is_correct: true },
      { id: 'C', text: 'Z kambium naczyniowego — dlatego korzenie boczne zawsze towarzyszą wtórnemu wzrostowi i nie tworzą się u jednoliściennych', is_correct: false },
      { id: 'D', text: 'Z merystemu wierzchołkowego korzenia głównego — odgałęziają się bezpośrednio ze strefy podziału korzenia matecznego', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Korzenie boczne (lateralne) mają ENDOGENICZNE pochodzenie: inicjowane z perycyklu (pericycle) — warstwy parenchymy tuż na zewnątrz walca osiowego korzenia. Komórki perycyklu dzielą się mitotycznie → zawiązek korzenia bocznego (lateral root primordium) → przebija mechanicznie korę i epidermy → wychodzi na zewnątrz. W korzeniu bocznym wykształca się własna kalyptra i merystem wierzchołkowy. Hormony: auksyny stymulują tworzenie korzeni bocznych (stąd stymulatory ukorzeniania z IAA/IBA). Różni od pędów bocznych — te z pąków pachwinowych (egzogenicznie).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.korzen, question_type: 'multiple',
    question_text: 'Które funkcje POPRAWNIE przypisano korzeniowi? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Kotwiczenie rośliny w podłożu i absorpcja wody oraz soli mineralnych z gleby przez włośniki strefy włośnikowej', is_correct: true },
      { id: 'B', text: 'Magazynowanie substancji zapasowych (skrobi, inuliny, cukrów) — np. burak cukrowy, marchew, rzepa, słodki ziemniak', is_correct: true },
      { id: 'C', text: 'Symbioza z grzybami (mikoryza) i bakteriami wiążącymi azot (brodawki korzeniowe u Fabaceae) — zwiększająca dostęp do składników odżywczych', is_correct: true },
      { id: 'D', text: 'Fotosynteza jako dodatkowe źródło węglowodanów — korzenie posiadają chloroplasty i zielony chlorofil widoczny na słońcu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) strefa włośnikowa — miliony włośników zwiększają powierzchnię chłonną kilkadziesiąt razy; absorpcja H₂O i jonów mineralnych. (B) korzenie spichrzowe: burak cukrowy (sacharoza 15–20%), marchew (karoteny + cukry), rzodkiew, rzepa, maniok (skrobia), słodki ziemniak (Ipomoea batatas; bataty). (C) mikoryza (80–90% roślin) + brodawki korzeniowe (Rhizobium/Bradyrhizobium u bobowatych: Fabaceae) — biologiczne wiązanie N₂ → amoniak → aminokwasy; fascynujący przykład mutualizmu. (D) fałsz: korzenie rosną w ciemności gleby, brak chloroplastów (wyjątek: korzenie powietrzne epifitów, np. Taeniophyllum).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.korzen, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących specjalizacji korzeni:',
    options: [
      { id: 'A', text: 'Korzenie oddechowe (pneumatofory) u roślin mangrowych (np. Avicennia) to pionowe wyrostki korzeni wyrastające ponad powierzchnię błota, umożliwiające wymianę gazową z atmosferą (pobieranie O₂) w beztlenowym podłożu.', is_correct: true },
      { id: 'B', text: 'Korzenie czepne bluszczu (Hedera helix) przyczepiają roślinę do podpór; wydzielają substancje klejące i wnikają w szczeliny mechanicznie — nie pobierają wody ani soli mineralnych.', is_correct: true },
      { id: 'C', text: 'Korzenie pasożytnicze (haustoria) roślin pasożytniczych, np. kanianka (Cuscuta) i zarazy (Orobanche), przenikają do ksylemu i floemu rośliny żywicielskiej, czerpiąc z niej zarówno wodę jak i substancje organiczne.', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: pneumatofory (korzenie oddechowe) u mangrów (Avicennia, Sonneratia) rosną pionowo w górę z poziomych korzeni zatopionych w beztlenowym mule; pokryte lenticelami (przetchlinkami) → wymiana gazowa z powietrzem. B — Prawda: korzenie czepne bluszczu = korzenie przybyszowe zmodyfikowane; wydzielają lepki polimer (nanostrukturalne kule klejące z polisacharydem) + mechaniczne zaczepianie w szczelinach; nie mają funkcji absorpcji. C — Prawda: Cuscuta (kanianka) = brak chlorofilu, nie przeprowadza fotosyntezy; haustoria wnikają do ksylemu i floemu żywiciela (pełny pasożyt; holoparasyt). Orobanche (zaraza) podobnie — pasożytuje na korzeniach traw, marchewki, konopii.',
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
