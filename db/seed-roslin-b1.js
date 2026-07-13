// Seed batch 1/6 — Różnorodność roślin — tkanki i organy
// Tkanki roślinne (5) + Tkanki przewodzące (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d'

const S = {
  tkanki:      '9ec87867-e7fd-445f-9df4-dd309c78f156',
  przewodzace: 'af3b084b-a1ed-492e-abed-ed136e095415',
}

const questions = [

  // ── TKANKI ROŚLINNE (5) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.tkanki, question_type: 'single',
    question_text: 'Merystem wierzchołkowy (apikalny) pędu i korzenia różni się od merystemu bocznego (lateralnego) tym, że:',
    options: [
      { id: 'A', text: 'Merystem wierzchołkowy odpowiada za wzrost na długość (wzrost pierwotny), merystem boczny — za wzrost na grubość (wzrost wtórny)', is_correct: true },
      { id: 'B', text: 'Merystem wierzchołkowy odpowiada wyłącznie za wytwarzanie kwiatów; merystem boczny — za liście i łodygę', is_correct: false },
      { id: 'C', text: 'Merystem boczny jest obecny u mszaków i paprotników, ale nie u roślin nasiennych', is_correct: false },
      { id: 'D', text: 'Oba typy merystemów działają identycznie — różnią się jedynie lokalizacją, nie funkcją', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Merystemy dzielimy ze względu na lokalizację i typ wzrostu: (1) wierzchołkowe (apikalne) — na wierzchołkach pędu i korzenia → wzrost pierwotny (elongacja), tworzą tkanki pierwotne; (2) boczne (lateralne) — kambium (między drewnem a łykiem) i fellogen (wytwarza korek) → wzrost wtórny (na grubość), tworzą tkanki wtórne (drewno wtórne i łyko wtórne). Merystem wstawowy (intercalarne) obecny u traw — u podstawy rosnących części. Wzrost wtórny charakteryzuje nagonasienne i dwuliścienne, brak u jednoliściennych (stąd palmy nie grubieją).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.tkanki, question_type: 'single',
    question_text: 'Aparat szparkowy (stomate) zbudowany jest z dwóch komórek szparkowych otaczających szparę. W jaki sposób komórki szparkowe regulują szerokość szpary?',
    options: [
      { id: 'A', text: 'Komórki szparkowe kurczą się mechanicznie jak mięśnie — skurcz otwiera szparę, rozkurcz ją zamyka', is_correct: false },
      { id: 'B', text: 'Wzrost turgoru w komórkach szparkowych (napływ K⁺ → wody osmotycznie) powoduje ich pęcznienie i otwarcie szpary; spadek turgoru → zamknięcie', is_correct: true },
      { id: 'C', text: 'Grubsza ściana wewnętrzna komórek szparkowych nie ma znaczenia dla otwierania szpary — ważna jest jedynie temperatura otoczenia', is_correct: false },
      { id: 'D', text: 'Szpary otwierają się wyłącznie w nocy, gdy stężenie CO₂ wewnątrz liścia wzrasta powyżej progu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mechanizm otwierania szpary: światło → aktywacja H⁺-ATPazy (białko pompy protonowej) w błonie komórek szparkowych → wypompowanie H⁺ → hiperpolaryzacja błony → napływ K⁺ przez kanały jonowe → wzrost stężenia K⁺ wewnątrz → napływ wody osmotycznie → wzrost turgoru → pęcznienie komórek. Nierówna grubość ścian (ściana wewnętrzna/brzuszna grubsza) sprawia, że pęcznienie powoduje wyginanie komórek na zewnątrz → szpara się otwiera. Ciemność/susza/CO₂ → odwrócenie procesu → zamknięcie. Rośliny CAM zamykają szpary w dzień.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.tkanki, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różne rodzaje miękiszu (parenchymy) i ich funkcje? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Miękisz asymilacyjny (chlorenchyma) zawiera liczne chloroplasty i jest głównym miejscem fotosyntezy w liściu', is_correct: true },
      { id: 'B', text: 'Miękisz powietrzny (aerenchyma) tworzy system przestworów międzykomórkowych umożliwiający transport gazów w tkankach zanurzonych w wodzie lub błotnych', is_correct: true },
      { id: 'C', text: 'Miękisz magazynujący gromadzi materiały zapasowe (skrobię, tłuszcze, inulinę) — np. w korzeniach marchwi, bulwach ziemniaka i liściach sukulentów', is_correct: true },
      { id: 'D', text: 'Miękisz wodny (hydrenchyma) u sukulentów zawiera chloroplasty i jest głównym miejscem fotosyntezy; nie pełni funkcji magazynowania wody', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) chlorenchyma — miękisz gąbczasty i palisadowy liścia (komórki palisadowe: 1–3 warstwy, liczne chloroplasty, główna fotosynteza; miękisz gąbczasty: przestwory ułatwiają wymianę gazową). (B) aerenchyma — u roślin wodnych i bagiennych (np. trzcina, pałka, mangrowe); przestwory ułatwiają dyfuzję O₂ do korzeni beztlenowych. (C) miękisz spichrzowy: węglowodany (skrobia — ziemniak, glikogen; inulina — cykoria), tłuszcze (pestkowe), białka (nasiona). (D) fałsz: hydrenchyma sukulentów (np. aloes, kaktusy) magazynuje wodę w dużych wodniczkach, chloroplastów brak lub mało.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.tkanki, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących tkanek mechanicznych roślin:',
    options: [
      { id: 'A', text: 'Zwarcica (kolenchyma) zbudowana jest z żywych komórek o nierównomiernie zgrubiałych ścianach celulozowych (bez ligniny) i zapewnia elastyczne wsparcie mechaniczne rosnącym organom.', is_correct: true },
      { id: 'B', text: 'Twardzica (sklerenchyma) zbudowana jest z martwych komórek o ścianach silnie zgrubiałych i zdrewniałych (z ligniną); obejmuje włókna (fibroblasty roślinne) i sklereidy (komórki kamienne).', is_correct: true },
      { id: 'C', text: 'Lignina jest polisacharydem (cukrem złożonym) odkładanym w ścianach komórkowych twardzicy, co czyni ją chemicznie identyczną z celulozą tkanki przewodzącej.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: kolenchyma (zwarcica) — komórki żywe, ściany z celulozy + pektyn, nierównomiernie zgrubiałe (narożnikowa, blaszkowata, lakunarna); elastyczna i zdolna do wzrostu — obecna w rosnących organach (ogonki liściowe, łodygi zielniste). B — Prawda: sklerenchyma (twardzica) — komórki martwe, ściany zdrewniałe (lignina+celuloza); włókna sklerenchymatyczne (długie, pryzmatyczne) i sklereidy (np. w łupinach orzechów, pulpie gruszki — "chrobotające" komórki). C — Fałsz: lignina to polimer fenylpropanoidowy (aromatyczny), chemicznie całkowicie różny od celulozy (polisacharydu). Lignina nadaje drewnu twardość i sztywność.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.tkanki, question_type: 'multiple',
    question_text: 'Które cechy POPRAWNIE opisują epidermy (skórkę) roślin? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Epiderma okrywa zewnętrzną powierzchnię wszystkich organów roślinnych (liści, łodyg, korzeni) i chroni je przed utratą wody, patogenami i uszkodzeniami mechanicznymi', is_correct: true },
      { id: 'B', text: 'Komórki epidermy liści zazwyczaj nie zawierają chloroplastów (wyjątek: komórki szparkowe), co sprawia, że jest ona przezroczysta i przepuszcza światło do głębszych tkanek', is_correct: true },
      { id: 'C', text: 'Kutykula (powłoczka woskowa) pokrywająca epidermy nadziemnych organów złożona jest z kutyny (estry kwasów tłuszczowych) i wosków, ograniczając transpirację kutykularną', is_correct: true },
      { id: 'D', text: 'Włośniki korzenia (trichomy korzeniowe) to wyrostki komórek epidermy korzenia wchodzące w strefę włośnikową; są martwymi strukturami nie pobierającymi wody', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) epiderma = tkanka okrywająca (pierwotna); w starszych pędach zastępuje ją korek (peryderma). (B) brak chloroplastów w komórkach epidermalnych liścia (wyjątek: komórki szparkowe mają chloroplasty do syntezy ATP napędzającej pompy H⁺). Przezroczystość → światło dociera do chlorenchymy. (C) kutyna (polimer hydroksykwasów tłuszczowych) + woski naziemne → kutykularna bariera → transpiracja kutykuLarna <<< stomatyczna. (D) fałsz: włośniki korzenia to żywe komórki epidermy czynnie pobierające wodę i jony (symport H⁺/jon, kanały akworynowe); ich obecność dramatycznie zwiększa powierzchnię chłonną korzenia.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TKANKI PRZEWODZĄCE (5) ────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.przewodzace, question_type: 'single',
    question_text: 'Cewki (tracheidy) i naczynia (naczynia właściwe/tracheje) to elementy ksylemu. Która cecha NAJLEPIEJ odróżnia naczynia od cewek?',
    options: [
      { id: 'A', text: 'Naczynia to martwe komórki z perforowanymi płytami łączącymi kolejne człony w długą rurę; cewki to martwe komórki z ząbkowanymi przetchlinkami, bez perforacji — woda przepływa przez jamki', is_correct: true },
      { id: 'B', text: 'Cewki są martwymi elementami ksylemu, naczynia — żywymi komórkami transportującymi wodę aktywnie za pomocą ATP', is_correct: false },
      { id: 'C', text: 'Naczynia są charakterystyczne wyłącznie dla paprotników, cewki — wyłącznie dla nagonasiennych', is_correct: false },
      { id: 'D', text: 'Obie struktury transportują wodę w kierunku dół→góra, ale cewki przewodzą tylko sole mineralne, naczynia — tylko wodę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ksylem zawiera dwa typy elementów tracheowych: cewki (tracheidy) — pojedyncze komórki z zgrubiałymi ścianami i jamkami pólzamkniętymi, brak perforacji → woda przepływa przez jamki; obecne u wszystkich roślin naczyniowych (w tym nagonasiennych). Naczynia (tracheje) — szeregi komórek ze zmodyfikowanymi lub rozpuszczonymi ścianami poprzecznymi tworząc ciągłą rurę → efektywniejszy przepływ wody; obecne głównie u okrytonasiennych. Obie struktury są MARTWE po dojrzeniu. Transport wody: kohezja + transpiracja (siła ssąca) + ciśnienie korzeniowe.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przewodzace, question_type: 'single',
    question_text: 'Rurki sitowe (komórki sitowe) floemu transportują asymilaty. Dlaczego są one zależne od komórek towarzyszących (companion cells)?',
    options: [
      { id: 'A', text: 'Komórki towarzyszące dostarczają ATP i białka rurkach sitowym, które utraciły jądro i większość organelli podczas dojrzewania — nie mogą samodzielnie przeprowadzać transkrypcji i translacji', is_correct: true },
      { id: 'B', text: 'Komórki towarzyszące zawierają chloroplasty i bezpośrednio przeprowadzają fotosyntezę zasilającą energetycznie transport w rurkach sitowych', is_correct: false },
      { id: 'C', text: 'Komórki towarzyszące tworzą ścianę rurek sitowych — bez nich rurki rozpadałyby się mechanicznie pod ciśnieniem przepływającego soku', is_correct: false },
      { id: 'D', text: 'Komórki towarzyszące blokują przepływ sacharozy przez płytki sitowe, regulując kierunek transportu w zależności od pory doby', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Podczas dojrzewania element rurki sitowej traci jądro komórkowe, wakuolę i większość organelli (mitochondria szczątkowe, brak rybosomów) → nie może sam syntetyzować białek ani regenerować enzymów. Komórki towarzyszące (z jądrem, licznymi mitochondriami, rybosomami) połączone z rurką plasmodesmatami (licznymi) → dostarczają ATP, białka sitka, enzymy. Transport floemu: załadowanie sacharozy do rurki (aktywny: proton-sucrose symporter) → ↑ciśnienie → przepływ z "source" (liść) do "sink" (korzeń, owoc, łodyga) wg modelu Müncha ciśnieniowo-przepływowego.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przewodzace, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują właściwości ksylemu i floemu? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Ksylem transportuje wodę i sole mineralne wyłącznie w kierunku od korzenia do liści (akropetalnie); transport jest bierny — napędzany siłą ssącą transpiracji i kohezją wody', is_correct: true },
      { id: 'B', text: 'Floem transportuje asymilaty (głównie sacharozę) w obu kierunkach: od liści do korzeni i od liści do rozwijających się organów (owoców, nasion, wierzchołków wzrostu)', is_correct: true },
      { id: 'C', text: 'W ksylemie i floemie funkcjonalne elementy przewodzące (naczynia i rurki sitowe) są żywymi komórkami aktywnie pompującymi transport przy użyciu ATP', is_correct: false },
      { id: 'D', text: 'Kambium naczyniowe (kambium) to merystem boczny produkujący ksylem wtórny (drewno) do wewnątrz i floem wtórny (łyko) na zewnątrz', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) ksylem: transport wody jednokierunkowy (↑) — siłą ssącą transpiracji (kohezja-napięcie) + ciśnienie korzeniowe (aktywne pompowanie jonów → napływ wody osmotycznie). (B) floem: transport dwukierunkowy (symplastyczny) — "source to sink": z liści do korzeni ORAZ do rosnących owoców, wierzchołków etc. (C) fałsz: elementy ksylemu (naczynia, cewki) są MARTWE; transport bierny. Rurki sitowe są żywe, ale transport floemu też nie jest aktywny w sensie pomp jonowych — działa na zasadzie gradientu ciśnienia (Münch). (D) prawda: kambium boczne → drewno wtórne (wewnątrz) i łyko wtórne (zewnątrz).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przewodzace, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transportu w roślinach:',
    options: [
      { id: 'A', text: 'Teoria kohezji i napięcia (Dixona i Jolly\'ego) zakłada, że woda w ksylemie tworzy ciągłą kolumnę utrzymywaną kohezją (siły przyciągania między cząsteczkami wody) i adhezją do ścian naczyń — transpiracja "ciągnie" wodę z korzenia do liści.', is_correct: true },
      { id: 'B', text: 'Wstępowanie wody przez łodygę drzewa zależy przede wszystkim od ciśnienia korzeniowego — jest ono wystarczające, by unieść wodę do koron drzew o wysokości 50–100 m.', is_correct: false },
      { id: 'C', text: 'Pasmo Casparyego w endodermie korzenia zbudowane jest z suberyny i zmusza wodę oraz jony do przejścia przez błony cytoplazmatyczne komórek endodermy (szlak apoplastyczny jest zablokowany), co umożliwia selekcję jonów.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: teoria kohezji-napięcia (1894): transpiracja → ↓ciśnienie w mezofillu → "ssanie" kolumny wody przez kohezję (wiązania wodorowe H₂O-H₂O) i adhezję do ścian kapilar → ciągłość kolumny; ciśnienie może być ujemne (–2 do –10 MPa). B — Fałsz: ciśnienie korzeniowe (max ~0,1–0,2 MPa) może unieść wodę tylko na kilka metrów; nie wyjaśnia wznoszenia na wysokości 50–100 m (dęby, sekwoje). Dla drzew kluczowa teoria kohezji-napięcia. C — Prawda: pasmo Casparyego (endoderma korzenia) = pierścień z suberyny blokujący szlak apoplastyczny → wszystko przez symplast → selektywna kontrola jonów wchodzących do walca osiowego.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przewodzace, question_type: 'single',
    question_text: 'W wiązce przewodzącej kolateralnej otwartej (charakterystycznej dla dwuliściennych) układ tkanek jest następujący:',
    options: [
      { id: 'A', text: 'Ksylem po stronie zewnętrznej (abaksjalnej), floem po stronie wewnętrznej (adaksjalnej), kambium — brak (wiązka zamknięta)', is_correct: false },
      { id: 'B', text: 'Ksylem po stronie wewnętrznej (adaksjalnej/od rdzenia), floem po stronie zewnętrznej (abaksjalnej/od kory), między nimi — kambium umożliwiające wzrost wtórny', is_correct: true },
      { id: 'C', text: 'Floem otaczający ksylem ze wszystkich stron (wiązka koncentryczna amfikrybralna) — typowa dla dwuliściennych', is_correct: false },
      { id: 'D', text: 'Ksylem i floem ułożone naprzeciwlegle w oddzielnych wiązkach bez kontaktu ze sobą (wiązka radialna) — charakterystyczna dla łodyg dwuliściennych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Wiązka kolateralna otwarta (łodygi dwuliściennych): ksylem adaksjalnie (od środka/rdzenia) + floem abaksjalnie (od zewnątrz/kory) + kambium naczyniowe między nimi → możliwy wzrost wtórny (produkcja drewna i łyka wtórnego). Wiązka kolateralna zamknięta (jednoliścienne: traw, palm): ksylem + floem, brak kambium → brak wzrostu wtórnego. Wiązka bikolateralna: floem po obydwóch stronach ksylemu (dynia). Wiązka radialna: ksylem i floem w oddzielnych wiązkach, naprzeciwlegle — charakterystyczna dla korzenia pierwotnego.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
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
  console.log(`Seeding batch 1 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
