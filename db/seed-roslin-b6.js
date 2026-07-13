// Seed batch 6/6 — Różnorodność roślin — tkanki i organy
// Nasiona i owoce (3) + Grupy systematyczne roślin (7)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d'

const S = {
  nasiona: '78b9339f-9ce4-4e22-9842-584ab100daf9',
  grupy:   'd9f251fc-9b3b-4922-af0d-e4aa4356871c',
}

const questions = [

  // ── NASIONA I OWOCE (3) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.nasiona, question_type: 'single',
    question_text: 'Zarodek roślin nasiennych zbudowany jest z kilku elementów. Wskaż, która część zarodka jako pierwsza wyrasta z nasiona przy kiełkowania nadkiełkowego (epigealnego)?',
    options: [
      { id: 'A', text: 'Epikotyl (część łodygi ponad liścieniami) — wysuwa się nad ziemię, ciągnąc liścienie ku górze (kiełkowanie nadziemne)', is_correct: false },
      { id: 'B', text: 'Radikula (kiełek korzeniowy, zaczątek korzenia głównego) — jako pierwsza przebija łupinę nasienną i wnika w glebę, zapewniając zakotwiczenie i pobieranie wody', is_correct: true },
      { id: 'C', text: 'Plumula (kiełek łodygowy z pierwszymi liśćmi) — wysuwa się nad grunt jako pierwsza, zanim korzenie uformują się', is_correct: false },
      { id: 'D', text: 'Liścień — pęcznieje i jako pierwszy przebija łupinę nasienną, by dotrzeć do źródła światła i rozpocząć fotosyntezę', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Kiełkowanie: zawsze najpierw radikula (radicle = zaczątek korzenia głównego) — przenika łupinę nasienną i wnika w glebę → anchoring + absorpcja wody. Następnie: hipokotyl (część między liścieniami a korzeniem) i epikotyl. Kiełkowanie epigealowe (nadziemne, np. fasola, rzodkiewka): hipokotyl silnie elonguje → liścienie wyciągane ponad powierzchnię gleby → zielenią się i fotosyntetyzują. Kiełkowanie hypogealowe (podziemne, np. groch, żołędź, kukurydza): epikotyl elonguje → liścienie zostają pod ziemią; plumula wyrasta nad ziemię.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.nasiona, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących dormancji nasion:',
    options: [
      { id: 'A', text: 'Dormancja fizyczna (twarda łupina nasienna nieprzepuszczalna dla wody) może być przełamana przez scaryfikację — mechaniczne lub chemiczne uszkodzenie łupiny; np. u akacji, koniczyny, robinii.', is_correct: true },
      { id: 'B', text: 'Dormancja fizjologiczna związana jest z hamującymi substancjami (ABA) w bielmie lub liścieniach; można ją przełamać przez stratyfikację (chłód i wilgoć) lub wymywanie inhibitorów wodą.', is_correct: true },
      { id: 'C', text: 'Nasiona roślin jednoliściennych (np. traw, zbóż) nigdy nie mają dormancji — kiełkują natychmiast po dojrzeniu, co jest ewolucyjną cechą wyróżniającą je od dwuliściennych.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: dormancja fizyczna (testa impermeabilis) — łupina nasienna z warstwą palisadową z makrosklereidów (bobowate, malwowate); scaryfikacja: ścieranie papierem ściernym, kwas siarkowy, wrzątek (gorąca woda przez kilka sekund). B — Prawda: dormancja fizjologiczna: ABA (w bielmie lub zarodku) hamuje kiełkowanie; stratyfikacja (vernalizacja nasion) → degradacja ABA, biosynteza GA → kiełkowanie. Wymywanie: długie moczenie wypłukuje fenole i inne inhibitory. C — Fałsz: trawy i zboża MOGĄ mieć dormancję (np. Avena fatua = owies głuchy — dormancja opóźnia kiełkowanie; dormancja zbóż ważna agrotechnicznie); nie jest to cecha wyłącznie dwuliściennych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.nasiona, question_type: 'multiple',
    question_text: 'Które z poniższych par "owoc — typ owocu" są POPRAWNE? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Żołądź dębu — orzech (nux): suchy, niepękający owoc z twardą owocnią i jednym nasieniem; jest prawdziwym owocem, otoczonym częściowo przez miseczkę (cupula) z liści okrywowych', is_correct: true },
      { id: 'B', text: 'Ziarniak pszenicy (Triticum) — kariopsja: suchy, niepękający owoc z owocnią zrośniętą z łupiną nasienną; typowy dla traw (Poaceae)', is_correct: true },
      { id: 'C', text: 'Malina (Rubus idaeus) — owoc zbiorowy złożony z wielu małych pestkowców (drupelki) wyrastających z jednego dna kwiatowego; każda "kulka" to odrębny małe pestkowiec', is_correct: true },
      { id: 'D', text: 'Szyszka sosny — wielonasienny owoc suchy pękający: po dojrzeniu otworzone łuski uwalniają nasiona z skrzydełkami — botanicznie jest klasyfikowana jako owoc', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) żołądź = orzech (nux): twarda, zdrewniała owocnia (egzo+mezo+endokarp), 1 nasiono; miseczka = cupula z przysadek. Podobnie: orzech laskowy, kasztan. (B) kariopsja (caryopsis): owocnia (perikarp) całkowicie zrośnięta z łupiną nasienną → technicznie nasiono = owoc; białko = bielmo (mąka) + zarodek (kiełek). Pszenica, kukurydza, ryż, proso. (C) malina = owoc wielopestkowcowy (etek/etaerio drupetek); każda "kuleczka" = pestkowiec z pestkowym nasieniem; nie mylić z poziomką/truskawką (etaerio orzeszków na mięsistym dnie kwiatowym). (D) fałsz: szyszka sosny (i innych nagonasiennych) NIE jest owocem botanicznym — nagonasienne nie mają owocni (nasiona nagie); szyszka = strobile = modyfikowany pęd z łuskami nasieniowymi; nasiona mają jedynie łupinę nasienną, bez owocni.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── GRUPY SYSTEMATYCZNE ROŚLIN (7) ───────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.grupy, question_type: 'single',
    question_text: 'Mszaki (Bryophyta sensu lato) różnią się od roślin naczyniowych (Tracheophyta) przede wszystkim tym, że:',
    options: [
      { id: 'A', text: 'W cyklu życiowym mszaków dominuje gametofit (haploidalny), który pełni funkcje fotosyntetyczne; sporofit (diploidalny) jest od niego zależny i nie przeprowadza samodzielnej fotosyntezy', is_correct: true },
      { id: 'B', text: 'Mszaki są diploidalnymi roślinami naczyniowymi z rozbudowanym systemem korzeni, łodyg i liści, natomiast paprotniki — wyłącznie haploidalnymi plechowcami', is_correct: false },
      { id: 'C', text: 'Mszaki produkują nasiona podobnie jak nagonasienne, ale ich nasiona nie mają łupiny nasiennej — "nagie nasiona" mszaków', is_correct: false },
      { id: 'D', text: 'Mszaki mają dobrze rozwinięty ksylem i floem z ligniną umożliwiający pobieranie wody z głębszych warstw gleby przez rozbudowany system korzeniowy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mszaki (wątrobowce Marchantiophyta, mchy Bryophyta, glewiki Anthocerotophyta): dominuje gametofit (n) — "roślinka" mchu z chwytnikami; sporofit (2n) wyrasta z gametofitu i jest od niego troficznie zależny (brak niezależnego życia). Brak korzeni (chwytniki), brak ksylemu z ligniną, brak nasion, brak kwiatów. Rośliny naczyniowe (paprotniki + nasienne): dominuje sporofit; gametofit silnie zredukowany. U paprotników: niezależny gametofit (przedrośle, n) z chloroplastami. U nasiennych: gametofit zredukowany do kilku komórek.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grupy, question_type: 'single',
    question_text: 'Skrzypy (Equisetum) to paprotnikopodobne rośliny naczyniowe. Która cecha je wyróżnia wśród innych paprotników?',
    options: [
      { id: 'A', text: 'Skrzypy mają liście (sprofyle) zredukowane do łusek w okółkach (nie blaszkowate), łodyga jest głównym organem fotosyntetyzującym, zbudowana z żebrowanymi internodami z krzemionką w ścianach', is_correct: true },
      { id: 'B', text: 'Skrzypy produkują nasiona podobne do nagonasiennych — są jedyną grupą paprotników nasiennych', is_correct: false },
      { id: 'C', text: 'Skrzypy mają wyłącznie liście blaszkowate bez łodyg, w odróżnieniu od widłaków i paproci z łodygami rozgałęzionymi', is_correct: false },
      { id: 'D', text: 'Skrzypy są jedynymi paprotnikami bez sporofitów — rozmnażają się wyłącznie wegetatywnie przez kłącza', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Skrzypy (Equisetaceae, jedyny żyjący rodzaj Equisetum, ok. 30 gatunków): liście = mikrofylle zredukowane do okółkowych łusek połączonych pochwą; internodium = wydrążona łodyga z żebrami (krzemionka w ścianach → historycznie do szorowania = "skrzyp"); fotosyntetyzuje łodyga. Zarodnikowe: strobili na wierzchołku pędu → zarodniki izospory → przedrośle. Karbońskie gigantyczne skrzypy (Calamites) do 30 m. Widłaki (Lycopodiophyta): mikrofylle spiralne, brak pochewek. Paprocie (Polypodiopsida): liście = makrofylle (fronds) złożone, solenia w sorach.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grupy, question_type: 'multiple',
    question_text: 'Które cechy ODRÓŻNIAJĄ nagonasienne (Gymnospermae) od okrytonasiennych (Angiospermae)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Nagonasienne nie mają kwiatów ani owoców — ich nasiona są nagie (na łuskach szyszki), u okrytonasiennych nasiona otoczone są owocnią tworząc owoc', is_correct: true },
      { id: 'B', text: 'Nagonasienne nie mają podwójnego zapłodnienia — jeden gamet łączy się z komórką jajową tworząc zygotę; bielmo tworzy się z gametofitu żeńskiego (n), nie z 3n endospermu', is_correct: true },
      { id: 'C', text: 'Ksylem nagonasiennych zbudowany jest głównie z cewek (tracheid) bez naczyń właściwych (vessels); okrytonasienne mają zarówno cewki, jak i naczynia (vessels są dominujące)', is_correct: true },
      { id: 'D', text: 'Nagonasienne nie mają kambium naczyniowego i nie wytwarzają drewna wtórnego — stąd sosny i świerki są zawsze drobnymi krzewami bez wyraźnego pnia', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) nagonasienne (sosna, świerk, modrzew, cis, miłorząb, sagowce): szyszki z łuskami nasieniowymi; brak owocni → nasiona nagie; brak prawdziwych kwiatów (pseudokwiaty nagonasiennych = strobili). (B) brak podwójnego zapłodnienia: jeden gamet → zygota; bielmo = haploidal gametofit żeński (tkanka odżywcza) zrasta się ze zarodkiem. (C) ksylem nagonasiennych: wyłącznie lub głównie cewki (evolutionarily ancestral) → mniejsza efektywność transportu wody; okrytonasienne: naczynia (vessels) dominują → szybszy, efektywniejszy transport. (D) fałsz: nagonasienne MAJĄ kambium naczyniowe → obfite drewno wtórne (sosna, świerk to drzewa 20–50 m; modrzewiowe lasy syberyjskie); to właśnie ich drewno (iglaste) jest głównym surowcem drzewnym.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grupy, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących roślin jednoliściennych (Monocotyledonae) i dwuliściennych (Eudicotyledonae):',
    options: [
      { id: 'A', text: 'Rośliny jednoliścienne mają jeden liścień w nasieniu, żyłkowanie liścia równoległe lub łukowate, wiązki przewodzące rozmieszczone rozproszenie w łodydze i korzenie przybyszowe (brak korzenia głównego).', is_correct: true },
      { id: 'B', text: 'Rośliny dwuliścienne mają dwa liścienie, żyłkowanie liścia siatkowate, wiązki przewodzące ułożone w pierścień w łodydze i korzeń palowy jako korzeń pierwotny.', is_correct: true },
      { id: 'C', text: 'Kwiaty jednoliściennych zbudowane są zazwyczaj z elementów w okółkach po 3 (trójdzielne), a kwiaty dwuliściennych — w okółkach po 4 lub 5 (cztero- lub pięciodzielne).', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: monocots: 1 liścień, żyłkowanie równoległe (np. trawa, lilia, tulipan), wiązki zamknięte rozporoszone (brak kambium → brak wzrostu wtórnego), korzenie przybyszowe (system wiązkowy). B — Prawda: dicots (Eudicots): 2 liścienie, żyłkowanie siatkowate (pinnate/palmate), wiązki otwarte w pierścieniu (kambium → wzrost wtórny), korzeń palowy (taproot). C — Prawda: monocots: trycykliczne kwiaty (3+3 okwiat, 3+3 pręciki, 3 słupki) np. lilia, tulipan, orchidea. Dicots: tetracykliczne lub pentacykliczne (4–5) np. róża (5), jabłoń (5). Wyjątki istnieją (np. Ranunculus ma 5-częściowe kwiaty).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grupy, question_type: 'single',
    question_text: 'Paprocie (Polypodiopsida) posiadają charakterystyczne struktury rozrodcze. Gdzie i jak wytwarzane są zarodniki (spory)?',
    options: [
      { id: 'A', text: 'Zarodniki wytwarzane są w sporangiach skupionych w sori na dolnej powierzchni (lub brzegach) liści sporofitu; każdy sporangium zawiera komórki macierzyste zarodników ulegające mejozie', is_correct: true },
      { id: 'B', text: 'Zarodniki wytwarzane są wyłącznie w szyszkach (strobili) na wyspecjalizowanych łodygach oddzielnych od liści fotosyntetyzujących', is_correct: false },
      { id: 'C', text: 'Zarodniki dojrzewają na górnej powierzchni liścia w strukturach podobnych do worków sitowych floemu', is_correct: false },
      { id: 'D', text: 'Zarodniki nie są wytwarzane przez sporofit paproci — paprocie rozmnażają się wyłącznie wegetatywnie przez kłącza podziemne', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Paprocie (Polypodiopsida, ok. 12 000 gatunków): sporofit (2n) = dominuje; duże liście (frendy/liście złożone) z sorusami na abaksjalnej (dolnej) stronie. Sorus = skupisko sporangiów chronionych indusium (osłonka). Sporangium: długa nóżka + puszka z annulus (pierścień z pogrubiałych komórek) → po wysychaniu annulus wygina się → eksplozja zarodników katapultą. Zarodniki (n) kiełkują → przedrośle (prothallium, n) = sercowata, zielona, niezależna roślinka → anterydia (? gamety) + archegonia (? gamety) → zapłodnienie → zygota → nowy sporofit.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grupy, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują grupy systematyczne roślin i ich cechy? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Widłaki (Lycopodiophyta, np. widłak goździsty) są najstarszą linią roślin naczyniowych z zachowanymi do dziś; mają mikrofylle (małe liście z jedną żyłką) i sporangia wyrastające z kątów liści lub w strobilach', is_correct: true },
      { id: 'B', text: 'Sagowce (Cycadophyta, np. Cycas) to nagonasienne o wyglądzie palm — mają pierzaste liście i produkują duże szyszki; są reliktami mezozoiku i uważane za "żywe skamieniałości"', is_correct: true },
      { id: 'C', text: 'Miłorząb dwuklapowy (Ginkgo biloba) to jedyny żyjący przedstawiciel Ginkgophyta; jest rozdzielnopłciowy, liście wachlarzowate, nasiona otoczone mięsistą zewnętrzną osłonką (sarkotesta) wydającą cuchnący zapach masłem zjełczałym przy dojrzewaniu', is_correct: true },
      { id: 'D', text: 'Welwitschia mirabilis, przedstawiciel Gnetophyta, jest jednoliścienną rośliną tropikalną rosnącą szybko do 20 m wysokości w wilgotnych lasach równikowych Afryki Centralnej', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) widłaki (Lycopodiopsida): najstarsza linia naczyniowych; karbońskie drzewiaste lepidodendrony 30–50 m; dziś: małe rośliny z niepodzielonymi mikrofylami; sporangia w kątach liści lub strobilach. (B) sagowce: karbon–jura szczyt różnorodności; dziś ok. 300 gatunków (Cycas, Zamia); zapłodnienie przez wiciowe gamety (unikatowe wśród nagonasiennych). (C) Ginkgo biloba — jedyny gatunek Ginkgophyta; żywy relikt; liść wachlarzowaty; drzewo kultywowane w Chinach; mięsista sarkotesta = kukino (nasiona jadalne po obróbce; surowa toksyczna). (D) fałsz: Welwitschia = reliktowa pustynna roślina namibu (pustynia Namib, S Afryka); wyrasta jedynie 2 liście przez całe życie (do 1000 lat!); pień skrócony, leży przy ziemi; NIE jest jednoliścienną ani leśną.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grupy, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących roślin okrytonasiennych i ich ewolucji:',
    options: [
      { id: 'A', text: 'Okrytonasienne (Angiospermae) pojawiły się w zapisie kopalnym w kredzie wczesnej (ok. 130 mln lat temu) i w ciągu kilkudziesięciu milionów lat zdominowały lądową roślinność, zastępując nagonasienne — zjawisko to Charles Darwin nazywał "ohydną tajemnicą" (abominable mystery).', is_correct: true },
      { id: 'B', text: 'Klade APG (Angiosperm Phylogeny Group) klasyfikuje okrytonasienne w oparciu o dane molekularne (sekwencje DNA) i morfologiczne; według APG IV Amborella trichopoda, endemit Nowej Kaledonii, jest najwcześniej odgałęziającym się kladem okrytonasiennych.', is_correct: true },
      { id: 'C', text: 'Koewolucja roślin kwiatowych z owadami zapylającymi (kwiaty → nektar, pyłek; owady → pyłek + nektar) doprowadziła do specjacji obu grup i jest przykładem mutualizmu, który przyspieszył dywersyfikację okrytonasiennych.', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: najstarsze skamieniałości okrytonasiennych: wczesna Kreda (~130 mln lat); "wybuch" kredowy (Cretaceous radiation) → w ciągu 30–40 mln lat zastąpiły nagonasienne; Darwin w liście do Hooker (1879): "abominable mystery" — szybkość dywersyfikacji. B — Prawda: APG (1998, aktualizacje 2003, 2009, 2016/IV): klasyfikacja filogenetyczna; Amborella trichopoda (Amborellaceae) = klad siostrzany wszystkich pozostałych okrytonasiennych; jedyne drewno bez naczyń (cewki) wśród żywych okrytonasiennych → ewolucyjnie pierwotna. C — Prawda: koewolucja kwiat-owad: kwiaty z wydzielinami, barwami, zapachami → specjalizacja zapylaczy; orchidee-muchy, figowce-osy (fig wasps), Yucca-ćmy — ścisłe mutualizmy z kospecjacją.',
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
  console.log(`Seeding batch 6 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
