// Seed batch 4/4 — Różnorodność organizmów
// Bezkręgowce (5) + Rośliny (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf'

const S = {
  bezk: '2e08b827-45a1-4f25-a87f-01ca8bdcffda',
  rosl: '331cb215-d830-49f5-b3dd-19c5d51b1374',
}

const questions = [

  // ── BEZKRĘGOWCE (5) ──────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.bezk, question_type: 'single',
    question_text: 'Które cechy są wspólne dla wszystkich stawonogów (Arthropoda) i odróżniają je od innych bezkręgowców?',
    options: [
      { id: 'A', text: 'Miękkie ciało bez segmentacji, zewnętrzne muszle wapienne i oddychanie wyłącznie skrzelami', is_correct: false },
      { id: 'B', text: 'Chitynowy egzoszkielet, segmentacja ciała (tagmoza) i członowane odnóża', is_correct: true },
      { id: 'C', text: 'Układ nerwowy drabinkowy, 3 pary nóg i odwłok bez odnóży u wszystkich grup', is_correct: false },
      { id: 'D', text: 'Rozmnażanie wyłącznie płciowe z przeobrażeniem zupełnym i jaja otoczone owodnią', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Stawonogi (ok. 1,2 mln gatunków) łączy: (1) egzoszkielet z chityny (ochrona + podporowo + przyczep mięśni); linienie (ekdyzja) umożliwia wzrost; (2) metameryzm + tagmoza (zlewanie się segmentów w tagmy: głowotułów, odwłok itd.); (3) członowane (stawowe) odnóża — stąd nazwa. Różne podgrupy mają odmienne układy oddechowe (skrzela, tchawki, płucotchawki), różną liczbę odnóży (3 pary — owady; 4 pary — pajęczaki; wiele — wije, skorupiaki). Opcja C opisuje wyłącznie owady.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bezk, question_type: 'single',
    question_text: 'Badacz porównuje owada (Insecta) z pajęczakiem (Arachnida). Wskaż stwierdzenie, które POPRAWNIE opisuje różnicę:',
    options: [
      { id: 'A', text: 'Owad ma 4 pary nóg i ciało podzielone na dwie tagmy (głowotułów + odwłok); pajęczak ma 3 pary nóg i trzy tagmy (głowa, tułów, odwłok)', is_correct: false },
      { id: 'B', text: 'Owad ma 3 pary nóg, 2 pary skrzydeł (u form uskrzydlonych) i trzy tagmy (głowa, tułów, odwłok); pajęczak ma 4 pary nóg i dwie tagmy (głowotułów i odwłok) oraz chelicery zamiast żuchw', is_correct: true },
      { id: 'C', text: 'Owady i pajęczaki mają identyczną liczbę par nóg (4), różnią się wyłącznie budową aparatu gębowego', is_correct: false },
      { id: 'D', text: 'Pajęczaki to jedyne stawonogi zdolne do wytwarzania jedwabiu; owady nie posiadają tej zdolności', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Owady: 3 tagmy (głowa/tułów/odwłok), 3 pary nóg, 2 pary skrzydeł (u Pterygota), aparat gębowy z żuchwami (mandibulata), oddychanie tchawkami. Pajęczaki: 2 tagmy (prosoma=głowotułów / opisthosoma=odwłok), 4 pary nóg chodzących + 1 para chelicerów + 1 para nóżkoszczęk (pedipalpi), bez skrzydeł, oddychanie płucotchawkami lub tchawkami. (D) fałsz: jedwab wytwarzają m.in. owady (jedwabnik morwowy = Bombyx mori, larwy mrówek i pszczół w kokonie) i pająki.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bezk, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują pierścienice (Annelida)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Pierścienice posiadają prawdziwy celom (jamę wtórną ciała) wypełniony płynem, który pełni funkcję szkieletu hydrostatycznego', is_correct: true },
      { id: 'B', text: 'Do pierścienic zalicza się dżdżownice (Oligochaeta), pijawki (Hirudinea) i wieloszczety (Polychaeta) — wszystkie grupy posiadają wyraźną segmentację ciała', is_correct: true },
      { id: 'C', text: 'Pierścienice są wtórnoustymi (Deuterostomia) — ich otwór gębowy powstaje z wtórnego otworu zarodkowego, co łączy je ewolucyjnie ze szkarłupniami i strunowcami', is_correct: false },
      { id: 'D', text: 'Układ krwionośny pierścienic jest zamknięty — krew przepływa przez naczynia krwionośne i nie kontaktuje się bezpośrednio z komórkami ciała', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Pierścienice (Annelida): (A) celom (jama wtórna) pełni rolę szkieletu hydrostatycznego — ciśnienie płynu umożliwia ruch robaczkowy dżdżownicy. (B) trzy gromady: Polychaeta (wieloszczety, np. Nereis; morskie; liczne szczeciny), Oligochaeta (dżdżownice; mała liczba szczecin), Hirudinea (pijawki; brak szczecin; sucker). (C) fałsz: pierścienice to PIERWOUSTNE (Protostomia) — razem z mięczakami i stawonogami; szkarłupnie i strunowce = wtórnoustnymi. (D) prawda: układ krwionośny zamknięty (jak u kręgowców) — hemoglobina w osoczu (nie w erytrocytach).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bezk, question_type: 'multiple',
    question_text: 'Które z grup bezkręgowców posiadają ZAMKNIĘTY układ krwionośny? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Pierścienice (Annelida), np. dżdżownica', is_correct: true },
      { id: 'B', text: 'Głowonogi (Cephalopoda), np. ośmiornica, kałamarnica', is_correct: true },
      { id: 'C', text: 'Owady (Insecta), np. pszczoła, mucha', is_correct: false },
      { id: 'D', text: 'Szkarłupnie (Echinodermata), np. jeżowiec, rozgwiazda', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'Układ krwionośny zamknięty (krew w naczyniach): pierścienice, głowonogi (jedyne mięczaki z zamkniętym — stąd wysoka aktywność i inteligencja ośmiornic). Owady mają układ otwarty: hemolimfa obmywa narządy w hemocelu (jamie); transport O₂ przez tchawki (nie krew). Szkarłupnie mają układy: wodnonaczynkowy (ambulakralny, hydrostatyczny) + słabo rozwinięty układ krwionośny — dla uproszczenia: otwarty/szczątkowy. Układ zamknięty → wyższe ciśnienie → efektywniejszy transport → wyższa aktywność metaboliczna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bezk, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących bezkręgowców:',
    options: [
      { id: 'A', text: 'Gąbki (Porifera) są beztkankowcami (Parazoa) — nie posiadają prawdziwych tkanek ani narządów, a ich ciało budują wolne komórki specjalizowane (choanocyty, amebocyty, pinacocyty).', is_correct: true },
      { id: 'B', text: 'Parzydełkowce (Cnidaria), takie jak meduzy i koralowce, posiadają trzy listki zarodkowe (ekto-, mezo- i endoderma) i układ krwionośny z sercem pompującym hemolimfę.', is_correct: false },
      { id: 'C', text: 'Owady przechodzące przeobrażenie zupełne (holometabolia) mają cztery stadia: jajo → larwa → poczwarka → imago; przykładem jest motyl, mucha i chrząszcz.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: gąbki nie mają tkanek — Parazoa; choanocyty (komórki kołnierzykowe) filtrują wodę i trawią cząstki pokarmowe. B — Fałsz: parzydełkowce są diploblastyczne (2 listki: ektoderma + endoderma; mezoderma to mezoglea — bezkomórkowa galareta); brak układu krwionośnego. C — Prawda: holometabolia (przeobrażenie zupełne): larwa → inaczej niż imago (odmienne nisze) → poczwarka (histoliza + histogeneza) → imago. Vs hemimetabolia (przeobrażenie niezupełne): nimfa → imago (bez stadium poczwarki, np. koniki polne, ważki).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── ROŚLINY (5) ──────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.rosl, question_type: 'single',
    question_text: 'Mszaki (Bryophyta sensu lato) i paprotniki (Pteridophyta) to grupy roślin zarodnikowych. Która cecha NAJLEPIEJ odróżnia paprotniki od mszaków?',
    options: [
      { id: 'A', text: 'Paprotniki mają rozwinięte tkanki przewodzące (ksylem i floem) tworzące układ naczyniowy (wiązki przewodzące), mszaki tych tkanek nie posiadają', is_correct: true },
      { id: 'B', text: 'Paprotniki rozmnażają się wyłącznie wegetatywnie przez rozłogi, mszaki — wyłącznie przez zarodniki płciowe', is_correct: false },
      { id: 'C', text: 'W cyklu życiowym mszaków dominuje sporofit (forma diploidalna), u paprotników — gametofit (forma haploidalna)', is_correct: false },
      { id: 'D', text: 'Paprotniki posiadają ochronę komórek jajowych w archegoniach, mszaki nie mają takich struktur', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Kluczowa cecha paprotników (widłaki, skrzypy, paprocie): prawdziwe tkanki przewodzące — ksylem (woda + sole mineralne: góra) i floem (asymilaty: dół) → mogą rosnąć wysoko, kolonizować tereny suche. Mszaki (wątrobowce, mchy, glewiki): brak ligniny, brak prawdziwego ksylemu/floemu → przywiązane do wilgotnych środowisk, niskie. (C) odwrotnie: u mszaków dominuje gametofit (n); u paprotników dominuje sporofit (2n). (D) fałsz: archegonia mają zarówno mszaki jak i paprotniki.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rosl, question_type: 'single',
    question_text: 'Nasiona pojawiły się u roślin nasiennych (Spermatophyta) jako kluczowa adaptacja do środowiska lądowego. W porównaniu do zarodników paprotników nasiono zawiera DODATKOWE struktury:',
    options: [
      { id: 'A', text: 'Wyłącznie haploidalne komórki gamety żeńskiej zdolne do samodzielnego kiełkowania bez zapłodnienia', is_correct: false },
      { id: 'B', text: 'Zarodek (sporofit w fazie spoczynku) + bielmo (tkanka zapasowa) + łupina nasienna (osłonka ochronna) — trzy warstwy łącznie stanowią nasiono', is_correct: true },
      { id: 'C', text: 'Jedynie otoczkę lipidową chroniącą komórkę jajową przed wyschnięciem, bez zarodka ani tkanek zapasowych', is_correct: false },
      { id: 'D', text: 'Chlorofil i chloroplasty umożliwiające fotosyntetyczne odżywianie zarodka w czasie kiełkowania', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Nasiono = innowacja ewolucyjna roślin nasiennych: (1) zarodek (2n, uśpiony sporofit po zapłodnieniu komórki jajowej); (2) bielmo — tkanka zapasowa (u nagonasiennych: gametofit żeński, n; u okrytonasiennych: bielmo triploidalne 3n, po podwójnym zapłodnieniu); (3) łupina nasienna z integumentów — ochrona przed wyschnięciem i uszkodzeniami mechanicznymi. Nasiono może czekać na kiełkowanie latami — zarodnik paprotnika musi kiełkować natychmiast lub ginie. Niezależność od wody przy zapłodnieniu (łagiewka pyłkowa = kluczowa adaptacja).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rosl, question_type: 'multiple',
    question_text: 'Okrytonasienne (Angiospermae) różnią się od nagonasiennych (Gymnospermae) szeregiem cech. Które stwierdzenia są POPRAWNE? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'U okrytonasiennych nasiona są otoczone owocem (zalążnia dojrzewa w owoc), u nagonasiennych nasiona są nagie — brak owocni', is_correct: true },
      { id: 'B', text: 'Okrytonasienne posiadają kwiaty z okwiatem (płatki, działki); nagonasienne kwitną kolorowymi kwiatami wabionymi przez owady, ale nie wytwarzają owoców', is_correct: false },
      { id: 'C', text: 'U okrytonasiennych zachodzi podwójne zapłodnienie: jeden plemnik łączy się z komórką jajową (zarodek 2n), drugi z komórką centralną (bielmo 3n)', is_correct: true },
      { id: 'D', text: 'Okrytonasienne obejmują zarówno rośliny jednoliścienne (Monocotyledonae), jak i dwuliścienne (Eudicotyledonae), różniące się m.in. liczbą liścieni w nasieniu', is_correct: true },
    ],
    correct_answer: ['A', 'C', 'D'],
    explanation: 'Okrytonasienne (Angiospermae): (A) zalążek w słupku → po zapłodnieniu zalążnia → owoc, zalążek → nasiono; nagonasienne: szyszki, nasiona nagie na łuszkach (brak owocu). (B) fałsz: nagonasienne nie mają kwiatów — mają szyszki; owady zapylają głównie okrytonasienne (zwłaszcza owadopylne). (C) podwójne zapłodnienie (Gnetophyta + okrytonasienne): 1 plemnik + komórka jajowa → zygota (2n) → zarodek; 2 plemnik + komórka centralna (2n) → bielmo (3n). (D) prawda: jednoliścienne (1 liścień, wiązki rozproszone, korzenie przybyszowe) vs dwuliścienne (2 liścienie, wiązki kołowe, korzeń palowy).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rosl, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują ewolucję roślin lądowych i kluczowe adaptacje kolejnych grup? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Przejście roślin na ląd wymagało adaptacji chroniących przed wyschnięciem: kutykula woskowa i aparaty szparkowe pojawiły się już u roślin naczyniowych', is_correct: true },
      { id: 'B', text: 'Nagonasienne (np. sosna, świerk) jako pierwsze uniezależniły zapłodnienie od wody przez wytworzenie łagiewki pyłkowej transportującej gamety męskie do komórki jajowej', is_correct: true },
      { id: 'C', text: 'Mszaki są najstarszą grupą roślin lądowych i posiadają rozwinięte drewno (ligninę i drewno wtórne), co umożliwiło im zasiedlenie suchych siedlisk', is_correct: false },
      { id: 'D', text: 'Pojawienie się kwiatu i podwójnego zapłodnienia u okrytonasiennych zwiększyło efektywność rozmnażania i doprowadziło do dominacji tej grupy we współczesnej florze', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Oś ewolucji roślin: zielenice → mszaki → paprotniki → nagonasienne → okrytonasienne. (A) kutykula i aparaty szparkowe: już u pierwszych roślin naczyniowych (Rhyniophyta, silur) — ograniczenie transpiracji. (B) łagiewka pyłkowa u nagonasiennych = uniezależnienie od wody (wcześniej plemniki pływały); zwiększyło kolonizację terenów suchych. (C) fałsz: mszaki NIE mają ligniny ani drewna wtórnego — są niesilnym ograniczonym liściastym dywanem; lignina pojawia się u paprotników. (D) prawda: ok. 300 000 gatunków okrytonasiennych vs ok. 1000 nagonasiennych — dominacja ekologiczna od Kredy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rosl, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cykli życiowych roślin:',
    options: [
      { id: 'A', text: 'U mszaków dominującym pokoleniem jest gametofit (n), z którego wyrasta sporofit (2n) pozostający z nim w trwałej symbiozie i zależny od niego odżywczo.', is_correct: true },
      { id: 'B', text: 'U paprotników (np. paproć) dominującym pokoleniem jest sporofit (2n); niewielki, niezależny gametofit (przedrośle, n) żyje krótko i jest zdolny do samożywności dzięki chloroplastom.', is_correct: true },
      { id: 'C', text: 'U nagonasiennych i okrytonasiennych gametofit żeński (workek zalążkowy u okrytonasiennych) i gametofit męski (ziarna pyłku) są samodzielnie żyjącymi organizmami zdolnymi do niezależnego funkcjonowania bez sporofitu.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: mszaki: gametofit (n, "roślinka") produkuje gamety; zapłodnienie → zygota → sporofit (2n) wyrasta na gametofit, pobierając od niego wodę i substancje organiczne (haustoria). B — Prawda: paprocie: dominuje sporofit (roślina liściasta 2n); zarodniki kiełkują w gametofit (przedrośle, n, kilkumilimetrowy, autotroficzny z chloroplastami) → płciowe → zygota → nowy sporofit. C — Fałsz: u nasiennych gametofit jest silnie zredukowany i CAŁKOWICIE zależny od sporofitu: ziarna pyłku (gametofit męski, kilka komórek) przenoszone do słupka; workek zalążkowy (gametofit żeński, 7 komórek / 8 jąder) osadzony w zalążku w słupku sporofitu.',
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
