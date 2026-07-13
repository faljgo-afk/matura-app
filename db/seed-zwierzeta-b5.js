// Seed batch 5/6 — Różnorodność zwierząt
// Porównanie budowy kręgowców (7) + Przystosowania kręgowców (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2'

const S = {
  porown: '4f0309a9-4d03-411f-b8d6-e8754b440294',
  przyst: 'ce14c990-8cbe-4d71-8946-f3c362cf9d96',
}

const questions = [

  // ── PORÓWNANIE BUDOWY KRĘGOWCÓW (7) ──────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.porown, question_type: 'single',
    question_text: 'Wskaż prawidłowe zestawienie opisujące budowę serca u poszczególnych gromad kręgowców:',
    options: [
      { id: 'A', text: 'Ryby — 2 komory (1 przedsionek + 1 komora); Płazy i gady — 3 komory (2 przedsionki + 1 komora, u gadów z przegrodą); Ptaki i ssaki — 4 komory (2 przedsionki + 2 komory)', is_correct: true },
      { id: 'B', text: 'Ryby — 4 komory; Płazy — 2 komory; Gady — 3 komory; Ptaki i ssaki — 5 komór z dodatkową zastawkową', is_correct: false },
      { id: 'C', text: 'Wszystkie kręgowce mają serce 4-komorowe; różnią się jedynie grubością ścian komór i ciśnieniem generowanym przez serce', is_correct: false },
      { id: 'D', text: 'Ryby — 3 komory (1 przedsionek + 2 komory); Płazy — 2 komory; Gady, ptaki i ssaki — 4 komory z identyczną strukturą przegrody', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ewolucja serca kręgowców: (1) Ryby (Pisces): serce 2-komorowe — 1 przedsionek (atrium) + 1 komora (ventriculus); krew żylna → skrzela → natleniona krew → ciało → serce; jeden obieg krwi (systemy: ryby — pojedynczy). (2) Płazy (Amphibia): 3 komory — 2 przedsionki + 1 komora; mieszanie oksygenowanej i deoksygenowanej krwi w komorze; 2 obiegi (płucno-skórny + ogólny). (3) Gady (Reptilia): 3 komory + niekompletna przegroda komorowa (u większości); krokodyle (Crocodylia): 4 komory prawdziwe (przegroda kompletna). (4) Ptaki i ssaki: 4 komory kompletne — pełne rozdzielenie krążenia płucnego i ogólnego; wysoka efektywność dostarczania O2.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.porown, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują układ krążenia kręgowców? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'U ryb krew przepływa przez serce tylko raz na jeden pełny obieg ciała (krążenie jednokierunkowe, jeden krąg); u wszystkich pozostałych kręgowców krew przepływa przez serce dwukrotnie (dwa kręgi)', is_correct: true },
      { id: 'B', text: 'U płazów wymiana gazowa odbywa się zarówno przez płuca, jak i przez skórę (cutaneous respiration); dlatego skóra płazów musi być stale wilgotna', is_correct: true },
      { id: 'C', text: 'U ptaków aorta główna łuczy się w lewo (od lewej komory), natomiast u ssaków łuczy się w prawo — jest to różnica anatomiczna między gromadami', is_correct: false },
      { id: 'D', text: 'Erytrocyty (krwinki czerwone) bezjądrzaste są cechą charakterystyczną ssaków (wyjątek: wielbłądy też bezjądrzaste); u wszystkich innych kręgowców erytrocyty są jądrzaste', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) ryby: serce żylne → śluzówka skrzeli → krew tętnicza → ciało → serce (1 pełny okrąg); ląd: 2 kręgi: małe (płucne: prawa komora → płuca → lewy przedsionek) + duże (ogólne: lewa komora → ciało → prawy przedsionek). (B) cutaneous respiration płazów: O2/CO2 wymieniane przez wilgotną skórę bogatą w naczynia; niezbędna wilgotność → płazy tracą wodę przez skórę i muszą wracać do wody. (C) fałsz: ptaki — łuk aorty w prawo; ssaki — łuk aorty w lewo; obie na tej samej zasadzie funkcjonalnej. (D) erytrocyty ssaków: bezjądrzaste, dwuwklęsłe (biconcave disc) → większa elastyczność i powierzchnia wymiany gazów; wyjątek: wielbłądy mają owalne erytrocyty. Ryby, płazy, gady, ptaki: erytrocyty jądrzaste, owalne.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.porown, question_type: 'single',
    question_text: 'Produkty przemiany azotowej różnią się u kręgowców i są powiązane z dostępem do wody. Wskaż prawidłowe zestawienie:',
    options: [
      { id: 'A', text: 'Ryby (słodkowodne) i płazy — amoniak (NH3) wydalany bezpośrednio do wody (ammonotelizm); gady i ptaki — kwas moczowy (urikotelizm, mało wody potrzebne); ssaki — mocznik (ureotelizm, kompromis)', is_correct: true },
      { id: 'B', text: 'Wszystkie kręgowce wydalają wyłącznie mocznik przez nerki; różnią się jedynie stężeniem moczu', is_correct: false },
      { id: 'C', text: 'Ptaki wydalają mocznik jak ssaki; gady wydalają kwas moczowy jak owady; ryby wydalają kwas moczowy przez skrzela', is_correct: false },
      { id: 'D', text: 'Kwas moczowy jest produktem wydalniczym ssaków morskich (wieloryby, foki), ponieważ dostęp do słodkiej wody jest ograniczony; ssaki lądowe wydalają amoniak', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Produkty azotowe: (1) Amoniak (NH3) — ammonotelizm: toksyczny, wymaga dużo wody do rozcieńczenia; ryby kostne i chrzęstne, larwy płazów, wodne bezkręgowce; wydalany bezpośrednio do wody przez skrzela lub nerki. (2) Mocznik (CO(NH2)2) — ureotelizm: mniej toksyczny, rozpuszczalny; ssaki, dorosłe płazy, ryby chrzęstne słonowodne; synteza w cyklu mocznikowym (wątroba); nerki koncentrują mocz. (3) Kwas moczowy — urikotelizm: bardzo nisko toksyczny, słabo rozpuszczalny → wydalany jako pasta bez utraty wody; gady lądowe, ptaki, owady; adaptacja do suszy; jaja gadów i ptaków mają kwas moczowy (nie truje zarodka).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.porown, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących termoregulacji kręgowców:',
    options: [
      { id: 'A', text: 'Endotermy (ptaki i ssaki) wytwarzają ciepło metabolicznie i utrzymują stałą temperaturę ciała niezależnie od temperatury otoczenia, co umożliwia aktywność w szerokim zakresie temperatur.', is_correct: true },
      { id: 'B', text: 'Ektotermy (ryby, płazy, gady) są zawsze nieaktywne w niskich temperaturach, ponieważ nie mają żadnych mechanizmów behawioralnych ani fizjologicznych pozwalających na regulację temperatury ciała.', is_correct: false },
      { id: 'C', text: 'Torpor (odrętwienie) u ssaków to stan głębokiego obniżenia metabolizmu, temperatury ciała i tętna; hibernacja jest formą przedłużonego torporu i różni się od snu zimowego (letargu) głębokością i długością epizodów.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: endotermy: termogeneza = oksydacja substratów (mitochondria), brązowa tkanka tłuszczowa (uncoupling), drżenie mięśniowe; temperatura ciała: ssaki 36–39°C, ptaki 40–44°C; homeotermia → aktywność całoroczna. B — Fałsz: ektotermy mają mechanizmy behawioralne (poikilotermia): heliothermia (jaszczurki basking w słońcu), thigmothermia (przewodnictwo z gorącej skały), unikanie ekstremalnych temperatur; enzymy dostosowane do zakresu temp. gatunki; gady pustyni aktywne wczesnym rankiem i pod wieczór. C — Prawda: torpor dobowy (kolibrzy, mysz leniwa); hibernacja: niedźwiedź — nie hibernacja właściwa (temp. do ok. 30°C), vs prawdziwa hibernacja (świstak, jeż): temp. ciała do 5°C, 95% obniżenia BMR, tętno 10/min.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.porown, question_type: 'single',
    question_text: 'Skóra kręgowców pełni różne funkcje i ma odmienną budowę w różnych gromadach. Które zestawienie jest POPRAWNE?',
    options: [
      { id: 'A', text: 'Ryby: łuski z kolagenu (ganoidowe, cykloidalne, ktenoidalne) pokryte śluzem z gruczołów skórnych; płazy: naga wilgotna skóra bogata w gruczoły (śluzowe + jadowe); gady: łuski rogowe (keratynowe, suche); ptaki: pióra + łuski rogowe na nogach; ssaki: włosy + gruczoły (potowe, łojowe, mlekowe, zapachowe)', is_correct: true },
      { id: 'B', text: 'Płazy mają suchą, zrogowaciałą skórę jak gady — jest to adaptacja do lądowego trybu życia; skóra płazów pozbawiona jest gruczołów i naczyń krwionośnych', is_correct: false },
      { id: 'C', text: 'Gady i ptaki mają taką samą budowę skóry — pokrytą identycznymi piórami wyrastającymi z łusek rogowych; ptaki różnią się jedynie większą ilością gruczołów potowych', is_correct: false },
      { id: 'D', text: 'Ssaki są jedyną grupą kręgowców z prawdziwą dermą (skórą właściwą) i naskórkiem; ryby, płazy, gady i ptaki mają jednowarstowowy naskórek bez diastemy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Skóra kręgowców — ewolucja: (1) Ryby: łuski kostne (ganoidowe — szczupak, cykloidalne — karp, ktenoidalne — okoń) lub placoidowe (chrzęstne — rekin); gruczoły śluzowe → śluz redukuje tarcie. (2) Płazy: naga skóra z wielu gruczołów śluzowych (wilgotność → oddychanie skórne) + gruczoły jadowe (bufonidy, dendrobatidy); unaczynienie; przepuszczalna dla wody. (3) Gady: łuski rogowe (β-keratyna) → ochrona przed wysychaniem; brak gruczołów potowych; linienie (wężyk całą skórą, jaszczurki częściowo). (4) Ptaki: pióra (modyfikowane łuski) + łuski rogowe na nogach + gruczoł kuprowy (olejowanie piór). (5) Ssaki: włosy (α-keratyna), gruczoły potowe (ekrynowe, apokrynowe), łojowe, mlekowe (zmodyfikowane apokrynowe), zapachowe.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.porown, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują ewolucję oddychania u kręgowców? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Pęcherz pławny ryb i płuca lądowych kręgowców mają wspólne ewolucyjne pochodzenie — oba wywodzą się z uchyłka brzusznego jelita przodków ryb; u ryb dwudysznych (Dipnoi) pęcherz pławny pełni funkcję płuc', is_correct: true },
      { id: 'B', text: 'Ptaki mają najefektywniejszy układ oddechowy wśród kręgowców dzięki przepływowi jednostronnemu powietrza przez parę brachów powietrznych przez płuca (air sacs → parabronchs → gas exchange → air sacs) — umożliwia to wymianę gazów zarówno przy wdechu jak i wydechu', is_correct: true },
      { id: 'C', text: 'Ryby chrzęstne (Chondrichthyes), w tym rekiny, mają zamknięty pęcherz pławny jako główny narząd regulacji hydrostatyki; utrata pęcherza pławnego u chondrichthyes jest cechą pierwotną', is_correct: false },
      { id: 'D', text: 'Płazy dorosłe oddychają za pomocą prostych, workowatych płuc (bez pęcherzyków płucnych jak u ssaków) i dlatego polegają na oddychaniu skórnym jako istotnym uzupełnieniu; płuca płazów mają znacznie mniejszą powierzchnię wymiany gazów niż płuca ssaków', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) pęcherz pławny → płuca: homologia; ryby dwudyszne (Lungfish: Protopterus, Lepidosiren, Neoceratodus) używają pęcherza do oddychania powietrzem atmosferycznym przy niskim O2 w wodzie; przodkowie kręgowców lądowych mieli pęcherz pławny po stronie brzusznej → ewolucja w płuca. (B) ptaki: 9 workow powietrznych (sacci pneumatici) + parabronchy w płucach; powietrze płynie jednostronnie przez parabronchy we WZORZE PRZECIWPRĄDOWYM z krwią → ekstrakcja O2 do 90% (ssaki: ~25%); ważne przy dużej wysokości (ptaki wędrowne przekraczają Himalaje 8000 m). (C) fałsz: rekiny i inne chondrichthyes NIE mają pęcherza pławnego — cecha dla nich wtórnie utracona lub pierwotnie nieobecna; hydrostatykę regulują lipidem (skwalen) w ogromnej wątrobie + dynamicznie przez ruch. (D) płuca płazów: prosta struktura workowata z fałdami (septami); powierzchnia ~1/40 płuc ssaków → oddychanie skórne kluczowe (u salamandry bezpłucnej Plethodon: wyłącznie skórne).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.porown, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących układu nerwowego kręgowców:',
    options: [
      { id: 'A', text: 'U kręgowców mózg składa się z pięciu podstawowych pęcherzyków: kresomózgowie (telencephalon), międzymózgowie (diencephalon), śródmózgowie (mesencephalon), tyłomózgowie wtórne (metencephalon) i rdzeniomózgowie (myelencephalon); ich proporcje różnią się między gromadami.', is_correct: true },
      { id: 'B', text: 'U ryb największą i najlepiej rozwiniętą częścią mózgu jest kresomózgowie (odpowiedzialne za złożone zachowania i uczenie się), podobnie jak u ssaków — ewolucja mózgu nie wykazuje trendu w kierunku wzrostu kresomózgowia.', is_correct: false },
      { id: 'C', text: 'Rdzeń kręgowy kręgowców jest chroniony przez kręgosłup (kręgi z trzonami i łukami) i zawiera istotę szarą (neurony) w środku otoczoną istotą białą (aksony zmielinizowane) — odwrotnie niż w mózgu.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: ontogeneza mózgu: trzy pierwotne pęcherzyki → prosencephalon (kresomózgowie + międzymózgowie), mesencephalon, rhombencephalon (metencephalon: móżdżek + most, myelencephalon: rdzeń przedłużony). B — Fałsz: u ryb dominuje śródmózgowie (mesencephalon = płaty wzrokowe) lub opuszki węchowe; u gadów kresomózgowie rośnie; u ssaków kresomózgowie (neocortex) dominuje i zakrywa inne części; ewolucja wykazuje wyraźny trend encephalizacji (wzrost EQ). C — Prawda: rdzeń kręgowy: centralna istota szara (neurony, ciała komórkowe, synapsy) w kształcie litery H → otoczona istotą białą (drogi wstępujące sensoryczne + zstępujące motoryczne); odwrotnie do kory mózgowej (szara na zewnątrz, biała wewnątrz).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── PRZYSTOSOWANIA KRĘGOWCÓW (3) ──────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.przyst, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują adaptacje kręgowców do środowiska wodnego? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Kształt torpedowaty (fusiform) niezależnie wyewoluował u ryb, delfinów i pingwinów — przykład konwergencji; redukuje opór wody i umożliwia szybkie pływanie', is_correct: true },
      { id: 'B', text: 'Echolokacja delfinów i wielorybów (cetacea): ultradźwięki generowane w worku nosowym (melon, tłuszczowy soczewkowany organ) → odbite echa odbierane przez kość żuchwową → ucho wewnętrzne; umożliwia nawigację i polowanie w ciemności', is_correct: true },
      { id: 'C', text: 'Ryby słonowodne tracą wodę osmotylem do hipertonicznego morza i kompensują to pijąc wodę morską, aktywnie wydalając sól przez skrzela (komórki chlorkowe) i wytwarzając bardzo mało moczu', is_correct: true },
      { id: 'D', text: 'Pingwiny nie mają warstwy tłuszczu izolacyjnego — ciepłota ciała utrzymywana jest wyłącznie przez gęsto upakowane, zrogowaciałe pióra które uszczelniają powietrze przy nurkowaniu jak suche pianka', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) konwergencja fusiform: ryby (wrzecienowaty kręgosłup + opływowy profil), delfiny (Cetacea: wtórnie nabyta sylwetka torpedowata), pingwiny (Sphenisciformes: ciało torpedowate). Niezależna ewolucja tej samej formy = konwergencja wymuszona przez to samo środowisko hydrodynamiczne. (B) Cetacea echolokacja: narząd melonu (warstwy tłuszczu o różnej prędkości dźwięku) skupia wiązki ultradźwięków; echo wraca przez dolną żuchwę (tłuszcz w kanale żuchwowym) → kosteczki → ucho wewnętrzne wyspecjalizowane. (C) ryby morskie (teleosty słonowodne): osmoza → utrata wody przez skrzela; kompensacja: piją wodę morską, resorpcja wody, aktywny transport Cl- przez mitochondrialne komórki chlorkowe skrzeli + wydalanie przez nerki mało moczu stężonego. (D) fałsz: pingwiny mają grubą warstwę tłuszczu (blubber) pod skórą + pióra typu ochronnego (nie latające) = podwójna izolacja termiczna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przyst, question_type: 'single',
    question_text: 'Ptaki przystosowane do lotu mają wiele modyfikacji anatomicznych. Która cecha BEZPOŚREDNIO zmniejsza masę ciała ptaka bez obniżenia wytrzymałości mechanicznej szkieletu?',
    options: [
      { id: 'A', text: 'Pneumatyzacja kości (kości pneumatyczne) — trzonowe kości długie są puste z wewnętrznymi beleczkami z tkanki gąbczastej (trabekule), a połączone są z workami powietrznymi, co redukuje masę przy zachowaniu wytrzymałości', is_correct: true },
      { id: 'B', text: 'Kości ptaków zawierają dwa razy więcej wapnia niż u gadów, przez co są gęstsze i cięższe, ale mają wbudowane kanały odprowadzające ciepło podczas intensywnego lotu', is_correct: false },
      { id: 'C', text: 'Brak kości udowej u ptaków — ptaki latają wyłącznie kończynami przednimi, a nogi (miednica + kości śródstopia) są przerośnięte by pełnić funkcję ogona podczas lotu', is_correct: false },
      { id: 'D', text: 'Ptaki mają szkielet w pełni chrzęstny (jak rekiny), ponieważ chrząstka jest lżejsza niż kość; jest to regresja ewolucyjna z pełnego szkieletu kostnego przodków dinozaurów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Adaptacje szkieletowe ptaków do lotu: (1) pneumatyzacja kości: wiele kości (humerus, sternum, kości czaszki) połączone z układem worków powietrznych → wypełnione powietrzem uchyłki → redukcja masy o ok. 30%; wewnętrzne trabekule (beleczki) = wytrzymałość na rozciąganie i ściskanie. (2) zrost kości: pygostyl (zrośnięte kręgi ogonowe), carpometacarpus (zrośnięte nadgarstek + śródręcze), tibiotarsus, tarsometatarsus → redukcja stawów → stabilność podczas lotu. (3) asymetryczne lotki: silne pióra z asymetryczną chorągiewką → aerodynamika. (4) kiel mostka (carina sterni) = miejsce przyczepu potężnych mm. piersiowych. (5) brak zębów → dziób z keratyny (lżejszy).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przyst, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących przystosowań kręgowców do życia na lądzie:',
    options: [
      { id: 'A', text: 'Jajo owodniowe (amniote egg) gadów i ptaków jest kluczową adaptacją do lądowego rozmnażania: omocznia (allantois) składuje odpady azotowe, owodnia (amnion) tworzy środowisko wodne dla zarodka, a łożysko u ssaków zastępuje większość błon płodowych.', is_correct: true },
      { id: 'B', text: 'Kończyny kręgowców lądowych wywodzą się z płetw ryb trzonopłetwych (Sarcopterygii); homologię potwierdzają identyczne kości: humerus, radius, ulna (kończyna przednia) i femur, tibia, fibula (tylna) — obecne u płazów, gadów, ptaków, ssaków.', is_correct: true },
      { id: 'C', text: 'Lądowe kręgowce nie potrzebują zwilżania oczu, ponieważ rogówka oka ewoluowała u ryb do ogniskowania światła w powietrzu; gruczoły łzowe są jedynie adaptacją ssaków, nieobecną u gadów i ptaków.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: jajo owodniowe (Amniota): (1) owodnia — błona wodna chroniąca zarodek przed wysychaniem i urazami; (2) omocznia — repozytorium odpadów azotowych (kwas moczowy); (3) kosmówka — wymiana gazów; (4) woreczek żółtkowy — pokarm; u ssaków łożyskowych: kosmówka → trofoblast łączy się z endometrium matki = łożysko. B — Prawda: Sarcopterygii (ryby mięśniaste: Latimeria, ryby dwudyszne) → tetrapody; Tiktaalik roseae (~375 mln lat): pierwsze kończyny pięciopalczaste z wyróżnionymi kośćmi; plan ramienia: humerus-radius/ulna-carpus-metacarpus-paliczki, zachowany u wszystkich tetrapodów. C — Fałsz: oczy lądowych kręgowców (i gadów, ptaków) wymagają zwilżania; gady i ptaki mają nictitatującą membranę (trzecia powieka) + gruczoły łzowe (Harderiana); rogówka musiała ewoluować niezależnie do ogniskowania w powietrzu (ryby używają soczewki głównie).',
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
  console.log(`Seeding batch 5 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
