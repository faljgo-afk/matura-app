// Seed batch 3/6 — Różnorodność roślin — tkanki i organy
// Budowa korzenia (3) + Budowa łodygi (7)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d'

const S = {
  korzen: '7412b8c7-d272-4d2e-b7fd-2c476174fa8b',
  lodyga: '127bb517-9e07-44a3-821c-1c811ffe356e',
}

const questions = [

  // ── BUDOWA KORZENIA (3) ───────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.korzen, question_type: 'single',
    question_text: 'Czepek (kalyptra) na wierzchołku korzenia pełni następującą funkcję:',
    options: [
      { id: 'A', text: 'Jest miejscem aktywnego podziału komórek — merystemem wierzchołkowym korzenia odpowiadającym za wzrost na długość', is_correct: false },
      { id: 'B', text: 'Ochrania merystem wierzchołkowy korzenia przed ścieraniem podczas wzrostu przez glebę; komórki czepka wydzielają śluz (mucilagines) ułatwiający ślizganie się korzenia', is_correct: true },
      { id: 'C', text: 'Magazynuje chlorofil do fotosyntezy w strefie korzenia wystawionej na słońce; jest odpowiednikiem blaszki liściowej', is_correct: false },
      { id: 'D', text: 'Wytwarza hormony cytokininowe transportowane do liści, sygnalizując dostępność azotu w glebie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Kalyptra (czepek korzeniowy, root cap): (1) mechaniczna ochrona merystemu wierzchołkowego podczas penetracji gleby — komórki kalyptry są regularnie ścierane i zastępowane przez merystem; (2) wydzielanie mucylagines (polisacharydy) tworzących śluz ułatwiający wzrost w glebie + tworzenie biofilmu sprzyjającego symbiotycznym mikroorganizmom; (3) odbiera bodźce grawitropizmu (statocyty z amyloplastami sedymentującymi pod wpływem grawitacji → sygnał → kalyptra → auksyna → korzenie rosną w dół). Brak chlorofilu — korzenie bez fotosyntezy.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.korzen, question_type: 'multiple',
    question_text: 'Korzeń przechodzi przez kolejne strefy wzrostu wzdłuż osi. Które stwierdzenia POPRAWNIE opisują te strefy? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Strefa podziału komórek (merystematyczna) zawiera aktywnie dzielące się komórki merystemu wierzchołkowego chronione przez kalyptrę', is_correct: true },
      { id: 'B', text: 'Strefa elongacji (wydłużania) to miejsce, gdzie komórki gwałtownie rosną na długość przez absorpcję wody do wakuoli — tu odbywa się główny wzrost korzenia na długość', is_correct: true },
      { id: 'C', text: 'Strefa dojrzewania (różnicowania) to obszar, w którym komórki różnicują się w tkanki stałe; widoczne włośniki — wyrostki komórek epidermy zwiększające powierzchnię absorpcji', is_correct: true },
      { id: 'D', text: 'Strefa podziału komórek jest najdłuższą ze stref korzenia — obejmuje kilka centymetrów, podczas gdy strefa elongacji jest mikroskopijnie krótka', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Strefy korzenia (od wierzchołka): (1) kalyptra → (2) strefa podziałów (merystematyczna): mała, kilkanaście do kilkudziesięciu μm, intensywna mitoza; (3) strefa elongacji: najdłuższa i kluczowa dla wzrostu na długość — komórki absorbują wodę → wakuola centralnie powiększa → elongacja 10–100× długości; (4) strefa różnicowania (dojrzewania): komórki różnicują się w tkanki stałe (xylem, phloem, kora) + wykształcają się włośniki. (D) fałsz: strefa elongacji jest relatywnie długa (kilka mm do kilku cm) i odpowiada za większość wzrostu; strefa merystematyczna jest mała.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.korzen, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących pobierania wody i jonów przez korzeń:',
    options: [
      { id: 'A', text: 'Transport wody z gleby do walca osiowego korzenia może odbywać się dwiema drogami: apoplastyczną (przez ściany komórkowe i przestwory, z pominięciem cytozolu) i symplastyczną (przez cytoplazmy połączone plasmodesmatami).', is_correct: true },
      { id: 'B', text: 'Jony mineralne (np. NO₃⁻, K⁺, PO₄³⁻) są pobierane przez korzeń wyłącznie biernie (zgodnie z gradientem stężeń) — nie wymaga to nakładu energii w postaci ATP.', is_correct: false },
      { id: 'C', text: 'Mikoryzowe grzyby (zarówno ektomikoryza jak i endomikoryza arbuskularna) dramatycznie zwiększają efektywność pobierania fosforanów przez korzeń dzięki rozległej sieci strzępek wnikających w glebę.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: szlak apoplastyczny (ściany komórkowe + przestwory = apoplast) i symplastyczny (przez plasmodesmy łączące cytoplazmy komórek = symplast) + szlak przezbłonowy (transkomparthmentalny). Pasemko Casparyego wymusza szlak symplastyczny w endodermie. B — Fałsz: większość jonów (K⁺, NO₃⁻, NH₄⁺, PO₄³⁻) pobierana AKTYWNIE (wbrew gradientowi stężeń) przy użyciu ATP → symporty (H⁺/jon), ATPazy protonowe, kanały jonowe z pompami. Tylko Cl⁻ i niektóre inne jony mogą wnikać biernie. C — Prawda: strzępki grzybów mikoryzowych sięgają kilkaset μm do kilku cm od powierzchni korzenia → dostęp do fosforanów z dala poza strefą deplecji.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── BUDOWA ŁODYGI (7) ─────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.lodyga, question_type: 'single',
    question_text: 'Przekrój poprzeczny łodygi zielnej roślin dwuliściennych różni się od łodygi jednoliściennych (np. trawy) budową wiązek przewodzących. Na czym polega główna różnica?',
    options: [
      { id: 'A', text: 'Łodyga dwuliściennych: wiązki otwarte (z kambium) w pierścieniu; łodyga jednoliściennych: wiązki zamknięte (bez kambium), rozmieszczone rozproszenie w miękiszu, bez wyraźnego pierścienia', is_correct: true },
      { id: 'B', text: 'Łodyga dwuliściennych: wiązki zamknięte (bez kambium) rozmieszczone chaotycznie; jednoliściennych — wiązki otwarte w regularnym pierścieniu', is_correct: false },
      { id: 'C', text: 'Łodygi dwuliściennych w ogóle nie posiadają wiązek przewodzących — transport odbywa się przez miękisz i aerenchymę', is_correct: false },
      { id: 'D', text: 'Obie grupy mają identyczne wiązki przewodzące — różnią się jedynie obecnością lub brakiem kory pierwotnej na przekroju', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Łodyga dwuliściennych (dicot): wiązki kolateralne OTWARTE (kambium między ksylemem a floemem) → wzrost wtórny; wiązki ułożone w pierścień oddzielający korę od rdzenia; między wiązkami promienie rdzeniowe (miękisz). Łodyga jednoliściennych (monocot, np. trawa, kukurydza, palma): wiązki ZAMKNIĘTE (bez kambium → brak wzrostu wtórnego), rozmieszczone rozproszenie w miękiszu fundamentalnym; brak wyraźnych kory i rdzenia; wiązki otoczone pochwą (bundle sheath). Stąd palmy nie grubieją (brak kambium), a dęby tak.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lodyga, question_type: 'single',
    question_text: 'Pąk wierzchołkowy pędu otoczony jest łuskami pąkowymi (katafylami) i zawiera zawinięte zawiązki liści (primordii liściowe). Jaką rolę pełni dominacja wierzchołkowa?',
    options: [
      { id: 'A', text: 'Dominacja wierzchołkowa to zjawisko, w którym auksyna produkowana przez wierzchołek pędu hamuje rozwój pąków pachwinowych (bocznych) — roślina rośnie głównie w górę, nie rozgałęzia się', is_correct: true },
      { id: 'B', text: 'Dominacja wierzchołkowa to wyłącznie zjawisko korzeniowe — pąk wierzchołkowy korzenia hamuje tworzenie korzeni bocznych przez wydzielanie giberelin', is_correct: false },
      { id: 'C', text: 'Dominacja wierzchołkowa oznacza że pąk wierzchołkowy intensywnie fotosyntetyzuje i pobiera wszystkie cukry, pozbawiając pąki boczne substratu do wzrostu', is_correct: false },
      { id: 'D', text: 'Usunięcie wierzchołka wzrostu (szczytowanie, pinching) nie wpływa na wzrost pędów bocznych — pąki boczne rosną niezależnie od obecności wierzchołka', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Dominacja wierzchołkowa: wierzchołek pędu produkuje auksyny (IAA) → transport polarny w dół łodygi → wysokie stężenie IAA w pąkach bocznych hamuje ich wzrost (mechanizm: IAA stymuluje produkcję ABA hamującego pąki + IAA hamuje cytokinin docieranie do pąków). Usunięcie wierzchołka (destyminacja, pinching, cięcie) → spadek IAA → pąki boczne "uwalniają się" → gęste krzewienie. Stosowane w ogrodnictwie (bonsai, krzewy ozdobne, pomidory). Cytokinin stymulują pąki boczne → antagonizm IAA/CK reguluje architekturę rośliny.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lodyga, question_type: 'multiple',
    question_text: 'Łodygi mogą pełnić dodatkowe funkcje poza transportem i podparciem. Które z poniższych POPRAWNIE opisują modyfikacje łodygi? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Bulwy łodygowe (np. ziemniak) są podziemnymi spichrzowymi częściami łodygi — mają oczka (pąki boczne) i zawierają skrobię; nie są korzeniami', is_correct: true },
      { id: 'B', text: 'Cebula (np. cebula jadalna) jest zmodyfikowanym pędem: mięsiste łuski to zmodyfikowane liście, a "cebulka" to skrócona łodyga z licznymi pąkami otoczonymi liśćmi zapasowymi', is_correct: true },
      { id: 'C', text: 'Rozłogi (np. u truskawki, rozchodnika) są poziomymi nadziemnymi lub podziemnymi pędami tworzącymi nowe rośliny w węzłach — służą do wegetatywnego rozmnażania', is_correct: true },
      { id: 'D', text: 'Wąsy pędowe (np. u winorośli, dyni) to zmodyfikowane korzenie przybyszowe służące do wspinaczki; wytwarzają one plazmidy korkotwórcze do przyczepiania', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) bulwy łodygowe: ziemniak, skrzyp bulwiasty — "oczka" to pąki pachwinowe → nowe rośliny; skrobia w miękiszu parenchymatycznym. Odróżnienie od korzeni: brak kalyptry, mają węzły/internodium. (B) cebula = zmodyfikowany pąk na skróconej łodydze (tarczka) z łuskami-liśćmi zapasowymi (mięsiste i suche); łuski zapasowe = zmodyfikowane liście z cukrami i fruktanami. (C) rozłogi nadziemne (stolony) — truskawki, pikulnik; podziemne = kłącza (np. perz, trawnik) — inaczej niż rozłogi. (D) fałsz: wąsy pędowe (cirri) to zmodyfikowane pędy lub liście (nie korzenie); np. u winorośli = zmodyfikowane grona kwiatowe; chwytne przez owijanie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lodyga, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wzrostu wtórnego łodygi drzewiastej:',
    options: [
      { id: 'A', text: 'Kambium naczyniowe (cambium vascularum) jest merystemem bocznym leżącym między drewnem a łykiem; jego podziały wytwarzają ksylem wtórny (drewno) do wewnątrz i floem wtórny (łyko) na zewnątrz w proporcji ok. 9:1.', is_correct: true },
      { id: 'B', text: 'Kora wtórna (rhytidoma) drzew zawiera wszystkie tkanki zewnętrzne od kambium naczyniowego na zewnątrz: floem wtórny, kolenchymę, parenchymę korową, fellogen, fellem i felloderm.', is_correct: true },
      { id: 'C', text: 'Promienie rdzeniowe (medullary rays) są strukturami składającymi się z komórek miękiszowych ułożonych prostopadle do osi pnia; transportują substancje promieniście między centrum a korą i mogą magazynować skrobię.', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: kambium wytwarza ~9 razy więcej drewna niż łyka (stąd grubość pnia rośnie); inicjały wrzecionowate → elementy trachearne i włókna; inicjały promieniowe → promienie rdzeniowe. B — Prawda: "kora" potocznie = wszystko na zewnątrz kambium; dokładniej: kora wtórna zawiera floem wtórny (starzejący się) + korę pierwotną (u młodych) + peryderma (fellogen+fellem+felloderm). Rhytidoma = martwa kora zewnętrzna (korek + stary floem) — odpada w łuszczące korze drzew. C — Prawda: promienie rdzeniowe (rayas medulares) = parenchyma ksylemu/floemu ułożona radialnie; widoczne na przekroju promieniowym drewna jako "blask drewna"; magazynują skrobię i tłuszcze, transportują poziomo.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lodyga, question_type: 'single',
    question_text: 'Badacz przeciął łodygę rośliny dwuliściennej i obserwuje przekrój. Stwierdza, że wiązki przewodzące ułożone są w pierścień, a między nimi widoczne są "promienie" miękiszu. Co z tego wynika?',
    options: [
      { id: 'A', text: 'Jest to przekrój jednoliściennej rośliny — wiązki rozporoszone w miękiszu potwierdzają brak kambium', is_correct: false },
      { id: 'B', text: 'Jest to przekrój pierwotnej łodygi rośliny dwuliściennej — pierścień wiązek z kambium oddziela korę zewnętrzną od rdzenia wewnętrznego; promienie = miękisz rdzeniowy między wiązkami', is_correct: true },
      { id: 'C', text: 'Pierścień wiązek bez żadnego rdzenia ani kory wskazuje na starą łodygę drzewiastą po całkowitym zastąpieniu tkanek pierwotnych przez wtórne', is_correct: false },
      { id: 'D', text: 'Takie ułożenie wiązek jest charakterystyczne wyłącznie dla korzenia, nie łodygi; w łodydze wiązki zawsze są rozproszone', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Łodyga pierwotna rośliny dwuliściennej (zielna lub młoda drzewiasta): epiderma → kora pierwotna (kolenchyma podnaskórkowa + miękisz kory) → pierścień wiązek kolateralnych otwartych (ksylem wewnętrznie, floem zewnętrznie, kambium między nimi) → miękisz rdzenia (parenchyma rdzeniowa). "Promienie rdzeniowe pierwotne" = pasma miękiszu między wiązkami. W starszej łodydze drzewiastej: kambium aktywuje się → wiązki łączą się → powstaje ciągły walec ksylemu i floemu (wzrost wtórny); rdzeń zachowany wewnętrznie ale otoczony drewnem wtórnym.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lodyga, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują budowę i funkcje kory pierwotnej łodygi? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Kora pierwotna łodygi może zawierać kolenchymę (tkankę mechaniczną z nierówno zgrubiałymi ścianami) tuż pod epidermy — zapewnia wsparcie mechaniczne rosnącym pędom zielnym', is_correct: true },
      { id: 'B', text: 'Sklerenchyma korowa (włókna i sklereidy) może być obecna w korze wewnętrznej jako dodatkowe wsparcie mechaniczne — jej komórki są martwe z lignifikowanymi ścianami', is_correct: true },
      { id: 'C', text: 'Endoderma łodygi (jeśli obecna) pełni taką samą funkcję jak endoderma korzenia — tworzy pasmo Casparyego blokujące transport apoplastyczny soli i wody do walca osiowego łodygi', is_correct: false },
      { id: 'D', text: 'Kora pierwotna łodygi może gromadzić skrobię (stąd czasem nazywana "korteksem skrobiowym") lub barwniki; miękisz kory może też uczestniczyć w fotosyntezie (zielona łodyga)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) kolenchyma u podstawy tkanek — zielna łodyga np. selera, pokrzywy; jest pierwszą zróżnicowaną tkanką mechaniczną, żywa, elastyczna, pozwala na wzrost. (B) sklerenchyma kory: włókna lniane (Linum usitatissimum) — przemysłowe włókna naturalne; komórki martwe, silna lignifikacja. (C) częściowo fałsz: endoderma łodygi jest rzadziej obecna, a jeśli jest (np. u roślin wodnych), nie zawsze z pasmem Casparyego; w łodydze brak odpowiednika pasma Casparyego korzeniowego z identyczną funkcją selekcji jonów. (D) prawda: korteks skrobiowy — parenchyma kory gromadzi ziarna skrobi jako materiał zapasowy; zielona łodyga (np. kaktus, ogórek) — miękisz z chloroplastami = fotosynteza.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lodyga, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących węzłów i międzywęźli łodygi:',
    options: [
      { id: 'A', text: 'Węzeł (nodus) to miejsce przyczepu liścia do łodygi; liść łączy się z łodygą przez ogon liściowy (petiole) lub bezpośrednio siedzącym nasadą; w węźle wchodzi do łodygi wiązka liściowa (trace) z wiązki łodygowej.', is_correct: true },
      { id: 'B', text: 'Międzywęźle (internodium) to odcinek łodygi między dwoma węzłami; u traw wydłuża się w wyniku aktywności merystemu wstawowego (intercalarnego), a nie wierzchołkowego.', is_correct: true },
      { id: 'C', text: 'Kąt między liściem a łodygą (pachwin/axilla) nie zawiera żadnych struktur — pąki pachwinowe tworzą się wyłącznie na wierzchołku pędu, nie w kątach liści.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: węzeł = miejsce przyczepu liścia; ślad liściowy (leaf trace) = wiązka przewodząca wchodząca z łodygi do ogonka liściowego; "przerwa liściowa" (leaf gap) = obszar miękiszu nad śluzem liściowym w cylindrze przewodzącym łodygi. B — Prawda: merystem intercalarny traw: u nasady każdego internodium → szybki wzrost po koszeniu lub zgryzaniu (adaptacja trawników i pastwisk do herbiworu). C — Fałsz: pachwin (axilla) = kąt między liściem a łodygą zawiera pąk pachwinowy (axillary bud = pąk boczny) → może rozwinąć się w pęd boczny (gałąź) lub kwiat; dominacja wierzchołkowa hamuje jego wzrost, ale pąk jest zawsze obecny.',
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
