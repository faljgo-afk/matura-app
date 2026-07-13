// Seed batch 2/6 — Różnorodność zwierząt
// Pierścienice i mięczaki (3) + Stawonogi (7)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2'

const S = {
  piersc: '9a5979f6-3df4-4eda-a3ed-b685fd68671d',
  stawon: '825907dd-fee6-47ab-9b83-87fbab18941b',
}

const questions = [

  // ── PIERŚCIENICE I MIĘCZAKI (3) ──────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.piersc, question_type: 'single',
    question_text: 'Ślimaki (Gastropoda) przechodzą w trakcie rozwoju embrionalnego skręt (torsję). Na czym polega to zjawisko i jaki jest jego skutek?',
    options: [
      { id: 'A', text: 'Torsja to obrót woreczka trzewiowego o 180° względem głowy i nogi w czasie larwalnym (larwa veliger) — jama płaszczowa z odbytem i skrzelami przemieszcza się do przodu nad głowę', is_correct: true },
      { id: 'B', text: 'Torsja to skręcenie muszli spiralnej, niezwiązane z obrotem tkanek mięciaka — muszla skręca się w jednym kierunku ze względów mechanicznych', is_correct: false },
      { id: 'C', text: 'Torsja zachodzi u wszystkich mięczaków, a nie tylko ślimaków; polega na odwróceniu prawa–lewo całego ciała w czasie metamorfozy', is_correct: false },
      { id: 'D', text: 'Torsja to ewolucyjny powrót ślimaków do symetrii radialnej, utraconej przez przodków Mollusca', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Torsja (torsion) u Gastropoda: w czasie larwy veliger woreczek trzewiowy obraca się o 180° zgodnie z ruchem wskazówek zegara (względem głowy) → konsekwencje: (1) jama płaszczowa z odbytem i skrzelami przemieszcza się nad głowę → anus wydalający blisko ust ("sanitation problem"); (2) narządy parzyste: lewe zanikają (asymetria); (3) splątanie nerwów wisceralnych (chiastoneuria). Spiralizacja muszli to odrębne, późniejsze zjawisko. Detorsja (u nagoskrzelców) = częściowe odwrócenie torsji.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.piersc, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują małże (Bivalvia)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Małże nie mają głowy ani raduli — są filtratorami: pobierają wodę przez syfon wlotowy, zatrzymują cząstki pokarmowe na skrzelach (ctenidia pełnią równocześnie funkcję oddechową i żerowania)', is_correct: true },
      { id: 'B', text: 'Muszla małży składa się z dwóch zastawek połączonych sprężystym więzadłem (ligament); mięśnie zamykacze (adduktory) zamykają muszlę; otwarcie następuje przez sprężystość więzadła po relaksacji mięśni', is_correct: true },
      { id: 'C', text: 'Wszystkie małże są słodkowodnymi organizmami i nie żyją w środowiskach morskich — są wyspecjalizowane do życia w rzekach i jeziorach', is_correct: false },
      { id: 'D', text: 'Małże wytwarzają perły w odpowiedzi na wprowadzenie obcego ciała między płaszcz a muszlę — komórki płaszcza wydzielają koncentryczne warstwy masy perłowej (konchiolina + aragonit)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) Bivalvia bez głowy i raduli (redukcja w ewolucji) → filtracja: woda przez syfon wlotowy → skrzela (filtry + wymiana gazowa) → cząstki w mucusie → palpy wargowe → usta. (B) muszla: dwie zastawki połączone ligamentem (spychone do siebie) + adduktory (przywodziciele, 1 lub 2) zaciskają; śmierć → relaksacja mięśni → otwarcie przez ligament. (C) fałsz: małże to głównie organizmy MORSKIE (omułek, ostryga, przegrzebki, sercówki, małże olbrzymie Tridacna); słodkowodne: szczeżuje, skójki — stosunkowo nieliczne. (D) perły naturalne: Pinctada (perłopłaz); masa perłowa = conchiolin + aragonit.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.piersc, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących różnorodności mięczaków:',
    options: [
      { id: 'A', text: 'Łódkonogi (Scaphopoda), np. Dentalium, to morskie mięczaki z rurkowatą muszlą otwartą z obu stron i otwartym końcem sterczącym ponad podłożem; żywią się małymi organizmami przez otwór dolny.', is_correct: true },
      { id: 'B', text: 'Chiton (Polyplacophora) jest mięczakiem z ośmioma wapiennymi płytkami pancerza na grzbiecie; żyje przyklejony do skał przy brzegu morza i skrobie glony radulą.', is_correct: true },
      { id: 'C', text: 'Wszystkie ślimaki lądowe (np. winniczek) oddychają skrzelami umieszczonymi w jamie płaszczowej i muszą być stale zanurzone w wilgotnym środowisku, aby pobierać tlen.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Scaphopoda (łódkonogi/kłówki): rurkowata, lekko zakrzywiona muszla otwarta na obu końcach; zakopane w mule; kaptura (captacula) wychwytują otwornicze i mikrofaunę przez szerszy otwór dolny. B — Prawda: Polyplacophora (chitony): 8 zachodzących na siebie płytek CaCO₃ połączonych girdle (girlandą); silna noga przyssawkowa do skał; radula skrobi glony. C — Fałsz: ślimaki lądowe (Stylommatophora, np. Helix pomatia) straciły skrzela → wykształciły płuco lądowe (palmonary lung) w jamie płaszczowej (bogato unaczynione ściany jamy płaszczowej) → oddychają powietrzem przez otwór oddechowy (pneumostom).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── STAWONOGI (7) ─────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.stawon, question_type: 'single',
    question_text: 'Chitozowy egzoszkielet stawonogów pełni wiele funkcji, ale wymaga regularnego linienia (ekdyzy). Która substancja buduje egzoszkielet i co dzieje się podczas linienia?',
    options: [
      { id: 'A', text: 'Egzoszkielet zbudowany jest z chityny (polimer N-acetyloglukosaminy) + białek (artropodin, sklerotyna) ± mineralny CaCO₃ u skorupiaków; podczas linienia stary egzoszkielet pęka i jest zjadany (odzysk chityny), nowy miękki twardnieje w ciągu godzin–dni', is_correct: true },
      { id: 'B', text: 'Egzoszkielet zbudowany jest z keratyny (białka S-S), identycznie jak rogi ssaków i pióra ptaków; linienie polega wyłącznie na stopniowym ścieraniu się powierzchni zewnętrznej bez zrzucania całości', is_correct: false },
      { id: 'C', text: 'Egzoszkielet nie ogranicza wzrostu stawonogów — rośnie proporcjonalnie do ciała przez apozycję warstw na wewnętrznej powierzchni przez cały czas życia', is_correct: false },
      { id: 'D', text: 'Linienie (ecdysis) u owadów i pajęczaków inicjowane jest przez hormon ekdysteroid produkowany przez gonady, niezależnie od środowiska zewnętrznego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Egzoszkielet stawonogów: epikutikula (cienka, woskowa) + prokutikula (egzo- i endokutikula z chityny + białek). Sklerotyzacja (utwardzenie): chinony wiążą białka przez garbowanie. U skorupiaków: mineralizacja CaCO₃ utwardza jeszcze bardziej (pancerz raka). Ekdyzjon (ecdysone) = hormon steroidowy z gruczołu Y → linienie. Etapy: wycofanie epidermy → nowa kutikula pod starą → ekdyzys (pęknięcie starej) → animal miękki, podatny na drapieżniki → ekspansja przez połknięcie wody/powietrza → sklerotyzacja nowej. Wzrost tylko w tym krótkim oknie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.stawon, question_type: 'single',
    question_text: 'Owady (Insecta) stanowią ok. 1 miliona opisanych gatunków. Które cechy budowy owadów umożliwiły ich tak ogromny sukces ewolucyjny?',
    options: [
      { id: 'A', text: 'Trzy tagmy (głowa-tułów-odwłok), 3 pary nóg, skrzydła u Pterygota, tchawki (system rur do wymiany gazowej), rozrodczość z przeobrażeniem i szybki cykl życiowy', is_correct: true },
      { id: 'B', text: 'Cztery tagmy, 4 pary nóg, brak skrzydeł, oddychanie płucotchawkami i wyłącznie pełne przeobrażenie z dwoma generacjami rocznie', is_correct: false },
      { id: 'C', text: 'Dwa segmenty ciała, 5 par nóg, układ krwionośny zamknięty i silnie rozwinięty mózg korowy zdolny do abstrakcyjnego myślenia', is_correct: false },
      { id: 'D', text: 'Rozmieszczenie narządów zmysłów wyłącznie na odwłoku i brak zdolności do fermentacji jelitowej, co ogranicza zasiedlanie środowisk beztlenowych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Sukces owadów (Insecta, >1 mln sp.) = suma adaptacji: (1) trzy tagmy (głowa+tułów+odwłok) → specjalizacja funkcji; (2) 3 pary nóg (definicja owadów); (3) skrzydła (Pterygota) → kolonizacja powietrza i rozpraszanie; (4) tchawki (tracheal system) → bezpośrednia dostawa O₂ do komórek bez pośrednictwa krwi; (5) przeobrażenie (holometabolia) → larwa i imago w różnych niszach (brak konkurencji wewnątrzgatunkowej); (6) krótki cykl + duża liczba jaj → szybka adaptacja. Wszystkie lądowe środowiska; 10¹⁸ osobników na Ziemi.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.stawon, question_type: 'multiple',
    question_text: 'Które z poniższych par "Rząd owadów — typ przeobrażenia" są POPRAWNE? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Błonkówki (Hymenoptera: pszczoły, mrówki, osy) — holometabolia (przeobrażenie zupełne): jajo → larwa → poczwarka → imago', is_correct: true },
      { id: 'B', text: 'Prostoskrzydłe (Orthoptera: szarańcza, świerszcze, koniki polne) — hemimetabolia (przeobrażenie niezupełne): jajo → nimfa → imago (brak stadium poczwarki)', is_correct: true },
      { id: 'C', text: 'Ważki (Odonata) — hemimetabolia: larwa wodna (naiad) → brak poczwarki → imago; larwa i imago żyją w różnych środowiskach (woda vs powietrze)', is_correct: true },
      { id: 'D', text: 'Chrząszcze (Coleoptera) — hemimetabolia (przeobrażenie niezupełne) z trzema stadiami nymfalnymi; poczwarka nie istnieje u chrząszczy bo jest zbędna ze względu na pancerz skrzydeł', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) Hymenoptera: holometabolia — larwa beznoga, wyglądem różna od imago; poczwarka otwarta lub w kokonie; u eusocjalnych (mrówki, pszczoły): larwy karmione przez robotnice. (B) Orthoptera: hemimetabolia — nimfy podobne do imago, ale bez skrzydeł (wingpads stopniowo rosną); 5–7 linień nimfalnych. (C) Odonata (ważki): hemimetabolia; larwa (naiad) wodna z maską do chwytania ofiar → wychodząca z wody imago; brak poczwarki, ale stadium "semiowadze" przy zmianie środowiska. (D) fałsz: Coleoptera = HOLOMETABOLIA (przeobrażenie zupełne), z poczwarką; chrząszcze to największy rząd owadów (~400 000 sp.) z charakterystyczną poczwarką często w komorze glebowej.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.stawon, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących pajęczaków (Arachnida):',
    options: [
      { id: 'A', text: 'Pajęczaki mają dwie tagmy: prosoma (głowotułów) z 4 parami nóg chodzących, chelicerami i nóżkoszczękiami (pedipalpi) oraz opisthosoma (odwłok) bez odnóży chodzących.', is_correct: true },
      { id: 'B', text: 'Pająki (Araneae) oddychają za pomocą płucotchawek (book lungs, układ blaszkowaty) lub tchawek; produkują jedwab w gruczołach odwłokowych wytwarzając nim sieci, kokony i opakowania jaj.', is_correct: true },
      { id: 'C', text: 'Roztocza (Acari) są wyłącznie pasożytami zewnętrznymi kręgowców (jak kleszcze Ixodes) i nie żyją w glebie, na roślinach ani w produktach spożywczych.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: arachnida = chelicerata; dwie tagmy: prosoma (głowotułów) z 4 parami nóg, chelicery (do jadowych lub chwytnych), pedipalpi (czuciowe lub rozrodcze u samców pająków); opisthosoma (odwłok) — narządy wewnętrzne. B — Prawda: płucotchawki (u pająków, skorpionów, whip scorpions) = uwewnętrznione skrzela; tchawki (u małych pajęczaków, roztoczy) = cieńsze rury powietrzne; jedwab: 7 rodzajów gruczołów u pająków → różne właściwości jedwabiu (do sieci, kokonów, linii asekuracyjnej). C — Fałsz: Acari (roztocze + kleszcze) = ogromnie zróżnicowane: pasożyty (kleszcze Ixodes, świerzbowce), drapieżne (drapieżce glebowe), roślinożerne (przędziorki), glebowe saprofagi, roztocze mąki, kurzu domowego (Dermatophagoides) etc.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.stawon, question_type: 'single',
    question_text: 'Skorupiaki (Crustacea) różnią się od owadów i pajęczaków m.in. środowiskiem życia i układem oddechowym. Wskaż POPRAWNY opis cech skorupiaków:',
    options: [
      { id: 'A', text: 'Przeważnie wodne (morskie i słodkowodne), oddychają skrzelami, mają dwie pary czułków (antennae I + II), wiele par odnóży (zarówno tułowiowych jak i odwłokowych), a pancerz często wzmocniony CaCO₃', is_correct: true },
      { id: 'B', text: 'Wyłącznie lądowe, oddychają przez skórkę jak dżdżownice, mają jedną parę czułków jak owady i trzy pary nóg, bez pancerza wapiennego', is_correct: false },
      { id: 'C', text: 'Mają cztery tagmy (głowa, tułów, odwłok, telson) z jedną parą chelicerów i ośmioma parami odnóży chodzących jak u pajęczaków', is_correct: false },
      { id: 'D', text: 'Wszystkie skorupiaki są mikroskopijnymi planktonowymi organizmami (zooplankton) i nie ma wśród nich form z widocznym pancerzem ani dużych form dennych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Crustacea (skorupiaki): cechy wyróżniające: 2 pary czułków (antennula + antennae) — owady 1 para, pajęczaki 0 par; bifid (dwugałązkowe) odnóża; skrzela (gill) — u większości; pancerz wzmocniony CaCO₃ (karapaks). Różnorodność: od Daphnia (1 mm) przez kraby pustelnicy, krewetki, homary do kraba japonijskiego (Macrocheira, rozpięcie 4 m). Lądowe: stonogi (Isopoda: prosionki, zmienniki) — jedyne lądowe skorupiaki oddychające "pseudopłucami". Larwa nauplius (3 pary przydatków) = cecha wspólna większości.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.stawon, question_type: 'multiple',
    question_text: 'Pszczoła miodna (Apis mellifera) należy do owadów eusocjalnych. Które z poniższych stwierdzeń POPRAWNIE opisują tę organizację społeczną? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Kolonię pszczół tworzą: królowa (jedyna samnica rozrodcza, składa tysiące jaj dziennie), robotnice (sterylne samice pełniące wszystkie funkcje pracy) i trutnie (samce wyłącznie do zapłodnienia nowej królowej)', is_correct: true },
      { id: 'B', text: 'Komunikacja pszczół obejmuje "taniec pszczół" (waggle dance): kąt tańca wskazuje kierunek pożytku względem słońca, długość tańca kołyszącego — odległość od ula; odkryte przez Karla von Frischa', is_correct: true },
      { id: 'C', text: 'Kasty pszczół są zdeterminowane genetycznie — larwy przyszłych królowych mają inny genotyp niż larwy robotnic i rodzą się z jaj płciowych składanych w specjalnych komórkach królewskich', is_correct: false },
      { id: 'D', text: 'Trutnie rozwijają się z niezapłodnionych jaj (partenogeneza arrenotonowa) — są haploidalne (n); robotnice i królowe z zapłodnionych jaj — diploidalne (2n)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) eusocjalność (Eusociality): podział kastowy na rozrodcze i nierozrodcze + nakładające się pokolenia + kooperatywna opieka nad potomstwem. (B) taniec von Frischa (Nobel 1973): taniec okrężny (<100 m) + waggle dance (>100 m) z kątem względem pionowej plastra = kąt względem słońca; czas trwania ∝ odległości. (C) fałsz: kasty zdeterminowane EPIGENETYCZNIE, nie genetycznie — każda larwa ma identyczny genotyp; karmienie mleczkiem pszczelim (royalactin + białka MRJP) → królowa; pyłek + miód → robotnica; methylacja DNA jest kluczowym mechanizmem. (D) arrenotokia: trutnie z niezapłodnionych jaj = haploidalne; po zapłodnieniu wszystkie diploidalne.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.stawon, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wijek (Myriapoda):',
    options: [
      { id: 'A', text: 'Pareczniki (Chilopoda), np. stonoga (Scolopendra), są drapieżnikami z jedną parą nóg na każdym segmencie tułowia i jadowymi szczękonóżami (forcipules) na pierwszym segmencie tułowiowym.', is_correct: true },
      { id: 'B', text: 'Krocionogi (Diplopoda), np. krocionóg (Julidae), są saprofagami z dwiema parami nóg na każdym pozornym segmencie (diplosegment = fuzja dwóch), powolnymi, kulącymi się w obronną spiralę przy zagrożeniu.', is_correct: true },
      { id: 'C', text: 'Wije (Myriapoda) są najliczniejszą grupą stawonogów na lądzie, liczącą ponad 800 000 opisanych gatunków, przewyższając liczbę owadów i pajęczaków łącznie.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Chilopoda (pareczniki): liczne segmenty (15–191) z 1 parą nóg każdy; forcipule (zmodyfikowane nogi 1. segmentu) z jadogruczołami; szybkie, nocne drapieżniki (owady, dżdżownice, małe kręgowce). B — Prawda: Diplopoda (krocionogi): diplosegmenty (każdy z 2 par nóg) ze szczelin dwóch pierwotnych segmentów; saprofagi rozkładające roślinne szczątki; obrona: rulowanie się + wydzielanie toksycznych chinony/HCN. C — Fałsz: wije to ok. 16 000 opisanych gatunków Chilopoda + 12 000 Diplopoda = ~28 000 łącznie; zdecydowanie mniej niż owady (~1 mln) czy roztocze (~50 000).',
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
