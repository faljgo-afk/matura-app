// Seed batch 4/6 — Różnorodność roślin — tkanki i organy
// Budowa liścia (7) + Budowa kwiatu i zapylanie (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d'

const S = {
  lisc:  '9a12bb4f-29e7-4946-a454-3ddd83af0cd0',
  kwiat: '2f534143-8c2e-493a-8040-f4f5008765b4',
}

const questions = [

  // ── BUDOWA LIŚCIA (7) ─────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.lisc, question_type: 'single',
    question_text: 'Miękisz palisadowy i miękisz gąbczasty liścia pełnią różne funkcje. Wskaż PRAWIDŁOWE przypisanie funkcji do tkanki:',
    options: [
      { id: 'A', text: 'Miękisz palisadowy (warstwy zewnętrzne, grzbiet liścia): głównie fotosynteza (gęste chloroplasty, perpendykularny układ do światła); miękisz gąbczasty (wewnętrzny): głównie wymiana gazowa (duże przestwory międzykomórkowe)', is_correct: true },
      { id: 'B', text: 'Miękisz gąbczasty pełni wyłącznie funkcję mechaniczną i nie uczestniczy w fotosyntezie; miękisz palisadowy przewodzi wodę jak ksylem', is_correct: false },
      { id: 'C', text: 'Obie warstwy miękiszu mają identyczne funkcje i proporcjonalnie równy udział w fotosyntezie — różnią się jedynie kształtem komórek bez znaczenia funkcjonalnego', is_correct: false },
      { id: 'D', text: 'Miękisz palisadowy jest tkanką martwą z lignifikowanymi ścianami; miękisz gąbczasty — żywą tkanką fotosyntetyzującą na dolnej powierzchni liścia', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Liść bifacjalny (amfistomatyczny): (1) epiderma górna (adaksjalny) → miękisz palisadowy (komórki prostopadłe do powierzchni, 1–3 warstwy, 30–80 chloroplastów/komórkę) → główne miejsce fotosyntezy; (2) miękisz gąbczasty (komórki nieregularne, duże przestwory międzykomórkowe połączone ze szparami) → dyfuzja CO₂ do fotosyntezy + O₂ i H₂O na zewnątrz; (3) epiderma dolna ze szparami (hypostomatyczny). Liście gleby/cienia: cieńszy palisadowy, więcej gąbczastego → zwiększona przechwytywanie światła. Miękisz gąbczasty TEŻ fotosyntetyzuje, ale mniej efektywnie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lisc, question_type: 'single',
    question_text: 'Transpiracja liści zachodzi głównie przez aparaty szparkowe (90%) i kutykulę (10%). Które czynniki ZWIĘKSZAJĄ tempo transpiracji? Wskaż zestaw prawidłowych czynników:',
    options: [
      { id: 'A', text: 'Wysoka wilgotność powietrza, niskie nasłonecznienie, niska temperatura — sprzyjające zachowaniu wody przez roślinę', is_correct: false },
      { id: 'B', text: 'Wysokie nasłonecznienie (→ otwieranie szpar), wysoka temperatura (↑ VPD), niska wilgotność powietrza (↑ gradient stężeń pary wodnej), wiatr (usuwanie warstwy granicznej)', is_correct: true },
      { id: 'C', text: 'Wysokie stężenie CO₂ w powietrzu (→ zamykanie szpar), niskie oświetlenie i brak wiatru — sytuacja, gdy transpiracja jest maksymalna', is_correct: false },
      { id: 'D', text: 'Obecność kutykuli woskowej jest czynnikiem zwiększającym transpirację, bo woski absorbują wodę z tkanek liścia i oddają ją do atmosfery', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Czynniki zwiększające transpirację: (1) ↑ temperatura → ↑ prężność pary wodnej wewnątrz liścia → ↑ gradient VPD (vapor pressure deficit); (2) ↓ wilgotność powietrza → ↑ VPD → szybsza dyfuzja H₂O przez szpary; (3) wiatr → usuwa warstwę graniczną (warstwę powietrza nasyconego parą wodną) przy liściu → ↑ gradient; (4) wysokie nasłonecznienie → otwieranie szpar (pompa K⁺) → ↑ powierzchnia do transpiracji. Odwrotnie: noc, susza (ABA zamyka szpary), ciemność, wysoka wilgotność → ↓ transpiracja. Kutykula ogranicza transpirację (hydrofobowe woski).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lisc, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują adaptacje liści w różnych środowiskach? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Liście kserofitów (roślin suchych siedlisk, np. kaktusów, eukaliptusa) często mają grubą kutykulę, włoski epidermy, zapadłe szpary lub zredukowane rozmiary — adaptacje ograniczające transpirację', is_correct: true },
      { id: 'B', text: 'Liście roślin wodnych (hydrofitów), np. lilia wodna (Nymphaea), mają szpary wyłącznie na górnej powierzchni (epiderma abaksyalna) — skierowanej ku wodzie, gdzie woda jest stale dostępna', is_correct: false },
      { id: 'C', text: 'Liście sciofitów (roślin cienistych) mają zazwyczaj większą powierzchnię, cieńszy miękisz palisadowy i więcej chlorofilu b na jednostkę powierzchni w porównaniu z heliofitami (roślinami pełnego słońca)', is_correct: true },
      { id: 'D', text: 'Liście sukulentów (np. aloe, agawa) są zgrubiałe i zawierają miękisz wodny (hydrenchymę) ze zbiorniki wody — ewolucyjna adaptacja do długich okresów bez opadów', is_correct: true },
    ],
    correct_answer: ['A', 'C', 'D'],
    explanation: '(A) kserofity: np. kutykularne woski (srebrzysty kolor eukaliptusa), tomentum (owłosienie odbijające światło), kryptostomaty (szpary w zagłębieniach), redukcja blaszki do łusek/kolców (kaktus). (B) fałsz: lilia wodna (Nymphaea) ma szpary wyłącznie na GÓRNEJ powierzchni (epiderma adaksyalna — skierowana ku powietrzu, nie wodzie — bo dolna powierzchnia jest w wodzie). (C) liście cieniste (shade leaves): duże, cienkie, więcej Chl b (absorbuje niebiesko-zielone), mniej Chl a, mniej warstw palisadowego → przechwytywanie słabego światła. (D) sukulenty łodygowe (kaktus) i liściowe (aloes, Haworthia) — hydrenchyma = duże komórki z dużymi wakuolami i roztworem śluzów.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lisc, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących unerwienia i żyłkowania liścia:',
    options: [
      { id: 'A', text: 'Żyłki liścia to wiązki przewodzące zawierające ksylem (doprowadza wodę i sole mineralne do mezofyllu) i floem (odprowadza produkty fotosyntezy), otoczone pochwą wiązki (bundle sheath).', is_correct: true },
      { id: 'B', text: 'Żyłkowanie siatkowate (reticulodromous) jest charakterystyczne dla roślin dwuliściennych; żyłkowanie równoległe (parallelodromous) — dla jednoliściennych (np. traw, lilii).', is_correct: true },
      { id: 'C', text: 'Komórki pochwy wiązki (bundle sheath) u roślin C4 (np. kukurydzy) nie biorą udziału w fotosyntezie — pełnią jedynie funkcję mechaniczną ochrony wiązki przewodzącej przed uszkodzeniem.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: żyłki = wiązki kolateralne (ksylem adaksjalnie, floem abaksjalnie) + pochwa wiązki (parenchyma lub komórki sklerenchymatyczne). B — Prawda: typowy schemat: dicots → żyłkowanie siatkowate (żyłka główna + siatkowe drugorzędowe); monocots → żyłkowanie łukowate lub równoległe (np. trawy, palmy). C — Fałsz: u roślin C4 (kukurydza, trzcina cukrowa, sorgo) komórki pochwy wiązki (bundle sheath cells, BSC) ZAWIERAJĄ liczne chloroplasty i są głównym miejscem cyklu Calvina (CO₂ wchodzi przez mezofyl jako jabłczan/asparaginian → uwolnienie CO₂ w BSC → fiksacja przez RuBisCO); anatomia "Kranz" (wieniec BSC wokół wiązki) = cecha definiująca C4.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lisc, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują modyfikacje liści? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Kolce liściowe (np. u kaktusa, berberysu) to zmodyfikowane liście lub ich części (np. przylistki) — zamieniły się w ostre struktury ochronne przed roślinożercami', is_correct: true },
      { id: 'B', text: 'Wąsy liściowe (np. u grochu, wyki) to zmodyfikowane listki złożonego liścia lub przylistki — wyspecjalizowane do owijania się wokół podpór i wspinaczki', is_correct: true },
      { id: 'C', text: 'Pułapki owadożernych roślin (np. dzbanek Nepenthes, pułapka muchołówki Dionaea) są zmodyfikowanymi liśćmi lub ich częściami, przystosowanymi do chwytania i trawienia owadów jako uzupełnienie azotowe w ubogich glebach', is_correct: true },
      { id: 'D', text: 'Łuski pąkowe (okrywające pąki zimowe drzew) są zmodyfikowanymi liśćmi (katafylami), ale liście spichrzowe cebuli są zmodyfikowanymi łodygami — nie liśćmi', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) kolce liściowe: kaktus = zmodyfikowane liście (łodyga pełni funkcję fotosyntezy); berberys = zmodyfikowane przylistki; odróżnić od kolców łodygowych (tarnina) — wyrostek epidermy. (B) wąsy grochu: listki końcowe liścia złożonego zamienione w czepne wąsy. (C) rośliny owadożerne: Nepenthes (dzbanek = zmodyfikowany liść), Dionaea (pułapka = liść z ząbkowanymi brzegami i triggerami), Drosera (insektywor rosiczkowy = lepkie gruczoły na liściu). Azot z owadów kompensuje niedobór N w torfowiskach. (D) fałsz: łuski pąkowe = zmodyfikowane liście (katafyle) — prawda; ale łuski cebuli (mięsiste) to TEŻ zmodyfikowane liście (nie łodyga) — są to liście okrywające rozety zmodyfikowane w struktury spichrzowe; tylko tarcza cebuli = łodyga.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lisc, question_type: 'single',
    question_text: 'Jesienią liście drzew liściastych żółkną i czerwienieją przed opadnięciem. Wskaż PRAWIDŁOWE wyjaśnienie tego zjawiska:',
    options: [
      { id: 'A', text: 'Rozkład chlorofilu (zielonego) ujawnia żółte karotenoidy obecne przez cały rok; antocyjany (czerwone/purpurowe) syntetyzowane są de novo z cukrów gromadzących się w liściu po zablokowaniu transportu do łodygi', is_correct: true },
      { id: 'B', text: 'Jesienią liście zaczynają produkować chlorofil b (żółty) zamiast chlorofilu a (zielonego) — zmiana syntezy barwników pod wpływem skróconego dnia', is_correct: false },
      { id: 'C', text: 'Żółknięcie liści to efekt chorób grzybowych powszechnych jesienią; zdrowe liście pozostają zielone aż do opadnięcia i nie żółkną samoistnie', is_correct: false },
      { id: 'D', text: 'Karotenoidy rozkładają się jesienią, odsłaniając przez to antocyjany, które były maskowane przez karotenoidy przez cały sezon wegetacyjny', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Przebarwienie jesienne: (1) skrócony dzień → sygnał do senescencji liści → rozkład chlorofilu (por. "zielona maska znika") → ujawnienie żółtych karotenoidów (karoteny, ksantofile) obecnych przez cały sezon wegetacyjny. (2) Transport floemu wyhamowuje (tworzenie strefy odcinającej) → cukry gromadzą się w liściu → de novo synteza antocyjanów (purpurowo-czerwone) z nadmiaru glukozy. Intensywność czerwieni zależy od ilości cukrów i temperatury (chłodne, słoneczne dni = więcej antocyjanów). Żółte drzewa: brzozy, lipy (karotenoidy). Czerwone: klony, winna latorośl (antocyjany).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lisc, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących strefy odcinającej (abscission zone) i opadania liści:',
    options: [
      { id: 'A', text: 'Strefa odcinająca powstaje u podstawy ogonka liściowego; komórki tej warstwy wytwarzają enzymy (cellulazy, pektynazy) rozkładające blaszki środkowe, co prowadzi do mechanicznego oddzielenia liścia od łodygi.', is_correct: true },
      { id: 'B', text: 'Etylen (C₂H₄) stymuluje senescencję liści i tworzenie strefy odcinającej, podczas gdy auksyny (IAA) hamują ten proces; rosnące stężenie etylenu przy niskim IAA jesienią inicjuje opadanie liści.', is_correct: true },
      { id: 'C', text: 'Po odpadnięciu liścia rana na łodydze nie jest chroniona — roślina traci substancje organiczne przez otwartą bliznę liściową przez całą zimę, co jest znacznym kosztem energetycznym.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: strefa odcinająca (2 warstwy): strefa separacji (rozkład blaszek środkowych) + warstwa ochronna (korek). Enzymy pektolityczne i celulazy degradują ściany → liść odpada po silniejszym wietrze. B — Prawda: etylen → senescencja (aktywuje geny rozkładu chlorofilu i tworzenia strefy odcinającej); IAA produkowane przez liść hamuje abscyzję; jesienią starzejące liście ↓ IAA + ↑ ABA + ↑ etylen → abscyzja. C — Fałsz: przed opadnięciem liścia tworzy się warstwa ochronna z korka (suberin) w strefie odcinającej po stronie łodygi → blizna liściowa jest uszczelniona; roślina nie traci substancji przez zimę.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── BUDOWA KWIATU I ZAPYLANIE (3) ─────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.kwiat, question_type: 'single',
    question_text: 'Kwiat okrytonasiennych zbudowany jest z kilku okółków organów. Wskaż prawidłową kolejność okółków kwiatu od zewnątrz do wewnątrz:',
    options: [
      { id: 'A', text: 'Okwiat (kielich + korona) → pręciki (andreceum) → słupek/słupki (gineceum)', is_correct: true },
      { id: 'B', text: 'Słupek → pręciki → kielich → korona', is_correct: false },
      { id: 'C', text: 'Korona → kielich → gineceum → andreceum', is_correct: false },
      { id: 'D', text: 'Pręciki → słupki → kielich → płatki koronowe', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Budowa kwiatu (od zewnątrz): (1) kielich (calyx) = działki kielicha (sepala) — zielone, ochrona pąka; (2) korona (corolla) = płatki koronowe (petala) — barwne, wabienie zapylaczy; (3) andreceum = pręciki: nitka pręcika + główka pręcika z pylnikami (woreczkis pyłkowe → pyłek = gametofit męski; (4) gineceum = słupki: zalążnia + szyjka + znamię (pełni znamię). Okwiat = kielich + korona łącznie (u roślin z trudnym rozróżnieniem: okwiat jednolistkowy = tulipan, lilia). Pozycja zalążni: górna (hypogyniczne), dolna (epigyniczne).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwiat, question_type: 'multiple',
    question_text: 'Które z poniższych adaptacji kwiatów POPRAWNIE odpowiadają wymienionym typom zapylania? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Kwiaty wiatropylne (anemogamiczne): drobne, niepozorne, często bez okwiatu lub z silnie zredukowanym okwiatem, produkujące duże ilości lekkiego pyłku, znamiona duże i pierzaste — np. trawy, leszczyna, dąb', is_correct: true },
      { id: 'B', text: 'Kwiaty owadopylne (entomogamiczne): barwne płatki wabiące wzrokownie, nektarniki wydzielające nektar, często pachnące, pyłek lepki/kolczasty (do przyczepienia do owada) — np. róża, rzepak, jabłoń', is_correct: true },
      { id: 'C', text: 'Kwiaty zapylane przez kolibry (ornithogamiczne): zazwyczaj czerwone/pomarańczowe (kolibry widzą czerwień), rurkowe, bogate w nektar; kolibry niezmysłowe na zapachy, więc bezzapachowe', is_correct: true },
      { id: 'D', text: 'Kwiaty samopylne (autogamiczne) posiadają wyspecjalizowane mechanizmy zapobiegające samozapyleniu, takie jak dichogamia lub hercerogamia, co czyni je bardziej efektywnymi w przekazywaniu genów', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) wiatropylne: trawy, brzozy, leszczyna, dąb; pyłek: lekki, suchy, gładki (brak rzeźby), produkowany w ogromnych ilościach (miliony/kwiat); znamiona: duże, pierzaste (zwiększona powierzchnia wyłapywania). (B) owadopylne: pszczoły widzą UV → kwiaty z wzorami UV-nektarowania; motyle → wąskie, głębokie kwiaty; muchy → kwiaty w kolorze mięsa i brudu + zapach rozkładu (Rafflesia). (C) kolibry: kwiaty czerwone (ptaki widzą czerwień, pszczoły nie), rurkowe, bogate w nektar (wysoka energia dla ptaka w locie wiszącym), bezzapachowe (ptaki słabo wąchają). (D) fałsz: kwiaty SAMOpylne są uproszczone (nie potrzebują specjalnych mechanizmów ochrony); dichogamia/hercegogamia to mechanizmy ZAPOBIEGAJĄCE samozapyleniu u roślin obcopylnych (allogamicznych).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwiat, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących powstawania pyłku i woreczka zalążkowego:',
    options: [
      { id: 'A', text: 'Pyłek (gametofit męski) powstaje przez mejozę w komórkach macierzystych pyłku (mikrospocytach) w woreczku pyłkowym pręcika; produkt mejozy = cztery mikrospory (n), z których każda dojrzewa w ziarno pyłku.', is_correct: true },
      { id: 'B', text: 'Dojrzałe ziarno pyłku okrytonasiennych zawiera dwie komórki: komórkę wegetatywną (rośnie w łagiewkę pyłkową) i komórkę generatywną (dzieli się na dwa gamety/komórki plemnikowe).', is_correct: true },
      { id: 'C', text: 'Woreczek zalążkowy (gametofit żeński) u okrytonasiennych zawiera 8 komórek (w tym komórkę jajową, 2 synergidy, 3 antypody i 1 komórkę centralną z 2 jądrami polarnymi) — łącznie 8 komórek / 7 komórek i 8 jąder.', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: mikrosporogeneza: komórka macierzysta pyłku (2n) → mejoza → tetrada mikrospor (n) → każda mikrospor → ziarno pyłku (mitoza: jądro wegetatywne + jądro generatywne). B — Prawda: dojrzałe ziarno pyłku 2-komórkowe lub 3-komórkowe (jeśli komórka generatywna podzieliła się jeszcze przed zapyleniem). Łagiewka pyłkowa rośnie przez tkanki słupka prowadząc gamety do zalążka. C — Prawda: woreczek zalążkowy Polygonum-typ (najczęstszy u okrytonasiennych): 8 jąder w 7 komórkach: komórka jajowa (1) + 2 synergidy (1+1) + 3 antypody + komórka centralna (1) z 2 jądrami polarnymi. Po podwójnym zapłodnieniu: 1 gamet + komórka jajowa → zygota (2n); 2 gamet + jądra polarne (1+1 = 2n) → endosperm pierwotny (3n).',
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
