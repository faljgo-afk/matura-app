// Seed: Różnorodność organizmów — 10 new questions (batch 2)
// Topic: cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf'

const SUBTOPICS = {
  klasyfikacja: '93f55825-0ec2-45fe-ad8e-ca3dce7bd98a',
  wirusy:       'ade8a64a-1b78-47c6-a317-a90c15dcf367',
  bakterie:     '34a5f416-a22e-438b-b4ff-7d56dd7279a4',
  protisty:     '22562e1a-ecfb-4b00-99c1-7f66be359a7b',
  grzyby:       '44e9a9be-d038-4287-a1fb-819e129d63f9',
  bezkregowce:  '2e08b827-45a1-4f25-a87f-01ca8bdcffda',
  rosliny:      '331cb215-d830-49f5-b3dd-19c5d51b1374',
}

const questions = [
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.klasyfikacja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących współczesnej klasyfikacji organizmów.\nA. Systematyka filogenetyczna (kladystyczna) grupuje organizmy na podstawie wspólnego pochodzenia ewolucyjnego.\nB. Królestwo Protista jest grupą monofiletyczną, obejmującą wyłącznie jednokomórkowe organizmy eukariotyczne.\nC. W nomenklaturze binominalnej Linneusza nazwa gatunkowa składa się z nazwy rodzajowej i epitetu gatunkowego.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Systematyka filogenetyczna grupuje organizmy na podstawie wspólnego pochodzenia ewolucyjnego.', is_correct: true },
      { id: 'B', text: 'Królestwo Protista jest grupą monofiletyczną obejmującą wyłącznie jednokomórkowe eukarionty.', is_correct: false },
      { id: 'C', text: 'W nomenklaturze binominalnej nazwa gatunkowa składa się z nazwy rodzajowej i epitetu gatunkowego.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: kladystyka opiera klasyfikację na wspólnym pochodzeniu (monofiletyczne grupy). B — Fałsz: Protista to grupa parafiletyczna (sztuczna), obejmuje organizmy o różnym pochodzeniu, w tym przodków roślin, grzybów i zwierząt — nie jest to grupa monofiletyczna. C — Prawda: nomenklatura binominalna Linneusza to system dwuczłonowych nazw, złożonych z nazwy rodzajowej (pisanej wielką literą) i epitetu gatunkowego (małą literą).',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.wirusy,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nWirusy różnią się od organizmów komórkowych tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'nie posiadają własnego metabolizmu i namnażają się wyłącznie wewnątrz komórek gospodarza', is_correct: true },
      { id: 'B', text: 'zbudowane są wyłącznie z białek i nie zawierają kwasów nukleinowych', is_correct: false },
      { id: 'C', text: 'nie są zdolne do ewolucji i nie podlegają mutacjom', is_correct: false },
      { id: 'D', text: 'posiadają błonę komórkową zbudowaną z dwuwarstwy fosfolipidowej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Wirusy są acellularne — nie mają struktury komórkowej, nie prowadzą własnego metabolizmu i nie mogą się namnażać poza komórką gospodarza. Korzystają z aparatu biosyntetycznego komórki. B — błąd: wirusy zawierają kwas nukleinowy (DNA lub RNA) otoczony kapsydem białkowym. C — błąd: wirusy podlegają mutacjom i ewolucji (np. zmienność wirusa grypy). D — błąd: wirusy nie mają własnej błony komórkowej (niektóre mają otoczkę lipidową, ale pochodzi ona z komórki gospodarza).',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.wirusy,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wirusów.\nA. Bakteriofagi to wirusy infekujące wyłącznie komórki bakteryjne.\nB. Wirusy RNA mogą replikować swój materiał genetyczny bez udziału komórki gospodarza.\nC. Cykl lityczny wirusa kończy się lizą komórki gospodarza i uwolnieniem nowych wirionów.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Bakteriofagi to wirusy infekujące wyłącznie komórki bakteryjne.', is_correct: true },
      { id: 'B', text: 'Wirusy RNA mogą replikować swój materiał genetyczny bez udziału komórki gospodarza.', is_correct: false },
      { id: 'C', text: 'Cykl lityczny wirusa kończy się lizą komórki gospodarza i uwolnieniem nowych wirionów.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: bakteriofagi (fagi) to wirusy atakujące wyłącznie bakterie. B — Fałsz: wszystkie wirusy, w tym RNA-wirusy, wymagają aparatu komórkowego do replikacji — same nie mają rybosomów ani enzymów niezbędnych do syntezy białek kapsydu. C — Prawda: w cyklu litycznym wirus replikuje się wewnątrz komórki, a następnie enzymy wirusowe powodują lizę (rozpad) komórki i uwolnienie potomnych wirionów.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.bakterie,
    question_text: 'Które z poniższych cech są charakterystyczne WYŁĄCZNIE dla bakterii (Bacteria), a nie dla archeonów (Archaea)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Obecność peptydoglikanu (mureiny) w ścianie komórkowej', is_correct: true },
      { id: 'B', text: 'Brak błony jądrowej i organelli membranowych', is_correct: false },
      { id: 'C', text: 'Wrażliwość na antybiotyki hamujące syntezę mureiny (np. penicylina)', is_correct: true },
      { id: 'D', text: 'Obecność rybosomów 70S', is_correct: false },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A i C — poprawne: ściana komórkowa bakterii zawiera peptydoglikan (mureinę), który jest celem działania penicyliny i cefalosporyn. Archeony nie mają mureiny — ich ściana zbudowana jest z pseudomureiny lub innych polisacharydów, dlatego są naturalnie oporne na te antybiotyki. B — błąd: zarówno bakterie, jak i archeony są prokaryontami — obie domeny pozbawione są błony jądrowej. D — błąd: obie domeny posiadają rybosomy 70S (chociaż sekwencja rRNA różni się między nimi).',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.protisty,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących protistów.\nA. Glony brunatne (Phaeophyta), takie jak morszczyn i kelp, zaliczane są do królestwa Protista, a nie do roślin.\nB. Plasmodium falciparum — pasożyt wywołujący malarię — należy do grupy sporowców (Apicomplexa).\nC. Pantofelek (Paramecium caudatum) odżywia się autotroficznie dzięki obecności chloroplastów.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Glony brunatne zaliczane są do królestwa Protista, a nie do roślin.', is_correct: true },
      { id: 'B', text: 'Plasmodium falciparum należy do grupy sporowców (Apicomplexa).', is_correct: true },
      { id: 'C', text: 'Pantofelek odżywia się autotroficznie dzięki chloroplastom.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: glony brunatne (Ochrophyta/Phaeophyta) to wielokomórkowe protisty — mimo złożonej budowy nie są zaliczane do roślin, bo wywodzą się z innych przodków (wtórna endosymbioza). B — Prawda: Plasmodium to sporowce (Apicomplexa) — pierwotniaki obligatoryjnie pasożytnicze, przenoszące malarię przez komara widliszka (Anopheles). C — Fałsz: Paramecium jest organizmem heterotroficznym — odżywia się fagocytozą, pochłaniając bakterie i inne mikroorganizmy przez cytostom.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.grzyby,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPorosty (lichenes) to organizmy powstałe w wyniku symbiozy, w której:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'grzyb dostarcza wodę i sole mineralne, a glon lub sinica wytwarza związki organiczne w procesie fotosyntezy', is_correct: true },
      { id: 'B', text: 'grzyb dostarcza związki organiczne, a glon lub sinica dostarcza wodę i sole mineralne z podłoża', is_correct: false },
      { id: 'C', text: 'obie strony dostarczają sobie nawzajem wyłącznie wodę i gazy oddechowe', is_correct: false },
      { id: 'D', text: 'grzyb i roślina wymieniają się cukrami i aminokwasami przez połączenia mikoryzowe', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Porosty są przykładem mutualistycznej symbiozy grzybów (głównie workowców) z glonami (zielonymi) lub sinicami. Grzyb tworzy plechę, która chroni fotobionta, dostarcza mu wodę i sole mineralne oraz CO₂. Fotobiont (glon lub sinica) przeprowadza fotosyntezę i dostarcza grzybowi związki organiczne (głównie cukry). B — błąd: to grzyb, a nie glon, pobiera wodę i sole mineralne. D — to opis mikoryzy, nie porostów.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.grzyby,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących grzybów.\nA. Ściana komórkowa grzybów zbudowana jest z chityny, podobnie jak pancerz stawonogów.\nB. Grzyby workowe (Ascomycota) wytwarzają zarodniki płciowe zwane askosporami, powstające w workach (askusach).\nC. Grzyby podstawkowe (Basidiomycota) odżywiają się wyłącznie przez pasożytnictwo na roślinach.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Ściana komórkowa grzybów zbudowana jest z chityny.', is_correct: true },
      { id: 'B', text: 'Grzyby workowe wytwarzają askospory powstające w askusach.', is_correct: true },
      { id: 'C', text: 'Grzyby podstawkowe odżywiają się wyłącznie przez pasożytnictwo.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: ściana komórkowa grzybów zawiera chitynę (β-1,4-polimer N-acetyloglukozaminy), podobnie jak egzoszkielet stawonogów — różni je od roślin, których ściana zbudowana jest z celulozy. B — Prawda: w Ascomycota zarodniki płciowe (askospory, zwykle 8) powstają przez mejozę wewnątrz worka (askusa). C — Fałsz: grzyby podstawkowe obejmują organizmy o różnych strategiach odżywiania — saprotrofy (rozkładające martwe drewno), mutualiści (mikoryza) i pasożyty — zdecydowanie nie wyłącznie pasożyty.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.bezkregowce,
    question_text: 'Wskaż zwierzę należące do pierwoustomych (Protostomia).',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Rozgwiazda (Asterias rubens)', is_correct: false },
      { id: 'B', text: 'Dżdżownica (Lumbricus terrestris)', is_correct: true },
      { id: 'C', text: 'Lancetnik (Branchiostoma lanceolatum)', is_correct: false },
      { id: 'D', text: 'Jeżowiec (Echinus esculentus)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Dżdżownica (Lumbricus) należy do pierścienic (Annelida), które są pierwoustomymi — otwór gębowy powstaje z pragęby (blastoporu). A, D — rozgwiazda i jeżowiec to szkarłupnie (Echinodermata) — wtórouste, spokrewnione ewolucyjnie z kręgowcami. C — lancetnik (Branchiostoma) to strunowiec (Chordata), czyli wtórouste. Podział Protostomia–Deuterostomia oparty jest na losie blastoporu podczas rozwoju zarodkowego.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.bezkregowce,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących stawonogów (Arthropoda).\nA. Posiadają szkielet zewnętrzny (egzoszkielet) zbudowany z chityny, który muszą wyliniwać w trakcie wzrostu.\nB. Wszystkie owady przechodzą przeobrażenie zupełne (holometabolię), przechodząc przez stadia: jajo → larwa → poczwarka → imago.\nC. Układ krwionośny stawonogów jest otwarty — hemolimfa przepływa przez zatoki hemolimfatyczne, a nie zamknięte naczynia.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Stawonogi mają egzoszkielet chitynowy, który wylinują w trakcie wzrostu.', is_correct: true },
      { id: 'B', text: 'Wszystkie owady przechodzą holometabolię (przeobrażenie zupełne).', is_correct: false },
      { id: 'C', text: 'Układ krwionośny stawonogów jest otwarty.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: egzoszkielet chitynowy stawonogów ogranicza wzrost, dlatego zwierzęta te linieją (ekdyzja) — zrzucają stary oskórek i wytwarzają nowy, większy. B — Fałsz: owady dzielą się na hemimetabole (przeobrażenie niezupełne: jajo → nimfa → imago, np. szarańcza, modliszka) i holometabole (zupełne: jajo → larwa → poczwarka → imago, np. motyle, chrząszcze). C — Prawda: stawonogi mają otwarty układ krwionośny — serce tłoczy hemolimfę do zatok ciała (hemocelu), skąd powraca ona do serca przez ostia.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: SUBTOPICS.rosliny,
    question_text: 'Które z poniższych cech odróżniają rośliny nasienne (Spermatophyta) od paprotników (Pteridophyta)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Uniezależnienie rozmnażania płciowego od obecności wody w środowisku', is_correct: true },
      { id: 'B', text: 'Obecność tkanek przewodzących — ksylemu i floemu', is_correct: false },
      { id: 'C', text: 'Wytwarzanie nasion jako struktury chroniącej i odżywiającej zarodek', is_correct: true },
      { id: 'D', text: 'Dominacja sporofitu w cyklu życiowym', is_correct: false },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — poprawne: rośliny nasienne wykształciły pyłek (gametofit męski) przenoszony przez wiatr lub owady, co uniezależniło zapłodnienie od wody. U paprotników plemniki muszą dopłynąć do komórek jajowych, co wymaga wilgotnego środowiska. C — poprawne: nasienie (zarodek + bielmo + okrywa nasienna) to cecha wyłącznie Spermatophyta — chroni zarodek i zapewnia mu substancje zapasowe. B — błąd: tkanki przewodzące (ksylem i floem) posiadają również paprotniki. D — błąd: u obu grup dominuje sporofit (diploidalne pokolenie).',
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
        apikey: KEY,
        Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => {
      let r = ''; res.on('data', c => r += c)
      res.on('end', () => resolve(res.statusCode))
    })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} questions for Różnorodność organizmów (batch 2)...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.subtopic_id.slice(0, 8), q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
