// Seed batch 1/6 — Różnorodność zwierząt
// Parzydełkowce i płazińce (6) + Pierścienice i mięczaki (4)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2'

const S = {
  parz:   '9bf9e59b-8bdc-46d2-b6ab-916dad2a8028',
  piersc: '9a5979f6-3df4-4eda-a3ed-b685fd68671d',
}

const questions = [

  // ── PARZYDEŁKOWCE I PŁAZIŃCE (6) ─────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.parz, question_type: 'single',
    question_text: 'Parzydełkowce (Cnidaria) są diploblastyczne. Co to oznacza w kontekście ich organizacji tkankowej?',
    options: [
      { id: 'A', text: 'Zbudowane są z dwóch listków zarodkowych: ektodermy i endodermy; między nimi leży bezkomórkowa mezoglea — brak prawdziwej mezodermy', is_correct: true },
      { id: 'B', text: 'Posiadają trzy listki zarodkowe: ektodermę, mezodermę i endodermę, co umożliwia wykształcenie układów narządowych', is_correct: false },
      { id: 'C', text: 'Mają dwa rodzaje komórek mięśniowych — ekto- i endodermalne — odpowiadające za poruszanie się w wodzie', is_correct: false },
      { id: 'D', text: 'Diploblastia oznacza obecność dwóch jąder w każdej komórce ciała parzydełkowców', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Parzydełkowce (Cnidaria) są diploblastyczne — posiadają tylko dwa listki zarodkowe: ektodermę (zewnętrzna warstwa, m.in. komórki parzydełkowe — knidocyty) i endodermę (wewnętrzna, gastroderma — trawienie). Między nimi znajduje się mezoglea — galaretowata, bezkomórkowa lub skąpokomórkowa substancja wypełniająca ciało (u meduzy stanowi główną masę). Brak prawdziwej mezodermy odróżnia je od triploblastycznych (wszystkie wyższe bezkręgowce). To ogranicza złożoność organizacji — brak krwi, nerek, serca.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.parz, question_type: 'single',
    question_text: 'Knidocyty (komórki parzydełkowe) są unikatową cechą parzydełkowców. Jaka jest ich budowa i funkcja?',
    options: [
      { id: 'A', text: 'Knidocyty zawierają nematocystę — kapsułę z owiniętą nitką parzydełkową; kontakt z ofiarą wyzwala ekspulsję nitki, która wbija się w ciało ofiary i wstrzykuje neurotoksynę lub paraliżuje', is_correct: true },
      { id: 'B', text: 'Knidocyty są komórkami fotosyntetyzującymi zawierającymi symbiontyczne zielenice — umożliwiają koralom pobieranie energii z fotosyntezy', is_correct: false },
      { id: 'C', text: 'Knidocyty to komórki nabłonkowo-mięśniowe tworzące ruch ciała przez skurcz — odpowiednik włókien mięśniowych kręgowców', is_correct: false },
      { id: 'D', text: 'Knidocyty wydzielają substancje śluzowe ułatwiające ruch meduzy przez wodę, nie mają funkcji obronnej ani zdobywania pokarmu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Knidocyt (nematocyte/cnidocyte) = wyspecjalizowana komórka zawierająca nematocystę (nematocyst) — beczkowatą kapsułę z naviniętą rurkowatą nitką. Cnidocil (czuły włosek) na powierzchni knidocytu → kontakt mechaniczny lub chemiczny → uwolnienie (~3 ms, jedno z najszybszych zdarzeń biologicznych) → nitka wyrzucona z prędkością > 50 000 g → wbija się w ofiarę → wstrzyknięcie toksyny (neurotoksyny, lizyny). Nitka może być: penetrująca (hypnotoxin), opasująca (glutinant) lub sklejająca. Po użyciu knidocyt ginie (jednorazowy).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.parz, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują cykl życiowy parzydełkowców (na przykładzie chełbi modrej Aurelia aurita)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Meduza (stadion płciowe, diploidalne) produkuje gamety, które po zapłodnieniu tworzą planktoniczną larwę — planulę pokrytą rzęskami', is_correct: true },
      { id: 'B', text: 'Planula osiada na podłożu i przekształca się w polipa (scyphistoma) — bezpłciowe stadium haploidalne rozmnażające się przez pączkowanie', is_correct: false },
      { id: 'C', text: 'Polip (scyphistoma) przez strobulację (poprzeczne podziały) produkuje kolejne pokolenia meduzelek (efirydy), które dojrzewają w meduzy', is_correct: true },
      { id: 'D', text: 'Meduza i polip są diploidalnymi (2n) fazami cyklu — przemiana pokoleń u parzydełkowców nie obejmuje fazy haploidalnej (mejozy)', is_correct: true },
    ],
    correct_answer: ['A', 'C', 'D'],
    explanation: '(A) meduza (2n) → gamety (n) → zapłodnienie → zygota (2n) → planula (2n, larwa orzęsiona pływająca). (B) fałsz: polip (scyphistoma) jest DIPLOIDALNY (2n), nie haploidalny; cykl parzydełkowców nie ma haploidalnych faz odpowiadających gametofitom roślin — mejoza wyłącznie do produkcji gamet. (C) strobulacja (strobilacja): polip dzieli się poprzecznie produkując ephyrae (efirydy) → dojrzałe meduzy. (D) prawda: brak alternacji generacji haploidalnych; zarówno meduza jak i polip są 2n; mejoza tylko przy gametogenezie meduzy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.parz, question_type: 'single',
    question_text: 'Tasiemce (Cestoda) są endopasożytami przewodu pokarmowego kręgowców. Która cecha budowy tasiemca jest BEZPOŚREDNIĄ adaptacją do pasożytniczego trybu życia w jelicie?',
    options: [
      { id: 'A', text: 'Brak układu pokarmowego — tasiemce nie mają jamy ciała (acelomaty) i wchłaniają substancje odżywcze całą powierzchnią ciała (tegumentem) z treści jelita żywiciela', is_correct: true },
      { id: 'B', text: 'Posiadanie silnie rozbudowanego układu nerwowego z ganglionami czuciowymi do wykrywania sygnałów chemicznych jelita żywiciela', is_correct: false },
      { id: 'C', text: 'Obecność aparatu lotniczego (skrzydła) umożliwiającego aktywne poszukiwanie nowych żywicieli w środowisku zewnętrznym', is_correct: false },
      { id: 'D', text: 'Fotosynteza przez symbiotyczne sinice w skórce tasiemca, kompensująca brak dostępu do składników pokarmowych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Tasiemce (Cestoda): brak układu pokarmowego (wtórna utrata w ewolucji) — żyją w jelicie żywiciela bezpośrednio w "środowisku odżywczym". Tegument (syncytium okrywające = zmodyfikowana skóra z mikrotrychami = mikrokosmkami) → ogromna powierzchnia absorpcji glukozy, aminokwasów przez transport aktywny. Dodatkowe adaptacje: skoleks (główka) z haczykami i przyssawkami do zaczepiania o ścianę jelita; proglotyd z niezliczonymi jajami (Taenia solium → do 50 000 jaj/proglottyd); anaerobowe oddychanie (jelito = beztlenowe).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.parz, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących płazińców (Platyhelminthes):',
    options: [
      { id: 'A', text: 'Płazińce są acelomatami — nie posiadają jamy ciała (coelom); przestrzeń między ektodermą a endodermą wypełnia mezenchyma (parenchyma) zbudowana z komórek o charakterze mezodermalnym.', is_correct: true },
      { id: 'B', text: 'Wirki (Turbellaria), np. planaria, są wolno żyjącymi płazińcami drapieżnymi z rzęskami na pokrywie ciała (epidermis) umożliwiającymi ślizganie się po podłożu; posiadają aparat pokarmowy z jelitem ślepym.', is_correct: true },
      { id: 'C', text: 'Motylica wątrobowa (Fasciola hepatica) ma prosty cykl życiowy z jednym żywicielem (owca) — jaja składane przez dorosłego pasożyta bezpośrednio zakażają następną owcę bez żywiciela pośredniego.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: płazińce (wirki, tasiemce, przywry) = acelomaty (Acoelomata); parenchyma mezodermalna wypełnia przestrzeń wewnętrzną — brak otrzewnowej jamy ciała. B — Prawda: wirki (Turbellaria) — wolno żyjące, drapieżne lub padlinożerne; epidermis z rzęskami + wydzielina śluzowa → ruch; gardziel wysuwalny; jelito ślepe (gastrowaskularne bez odbytu). C — Fałsz: Fasciola hepatica ma cykl z DWOMA żywicielami: żywiciel ostateczny (owca, bydło, człowiek) + żywiciel pośredni (ślimak błotniarka — Galba truncatula). Jaja → stadium wodne → sporocysty/redie/cercariae w ślimaku → adolescaria → połknięcie przez owcę → migracja do wątroby.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.parz, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują koralowce (Anthozoa) i ich znaczenie ekologiczne? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Koralowce tworzą jedynie stadium polipa (brak stadium meduzy); kolonie korali budują rafy koralowe przez wydzielanie szkieletów wapiennych (CaCO₃)', is_correct: true },
      { id: 'B', text: 'Korale tworzą mutualistyczną symbiozę z bruzdnicami (Symbiodinium/zooxanthellae) — fotosyntetyzującymi pierwotniakami żyjącymi w tkankach korali; dostarczają koralom do 90% zapotrzebowania energetycznego', is_correct: true },
      { id: 'C', text: 'Bielenie koralowców (coral bleaching) to zjawisko wydalania zooxanthellae z tkanek korali w wyniku stresu termicznego (podwyższona temperatura wody), prowadzące do śmierci korali bez źródła energii', is_correct: true },
      { id: 'D', text: 'Rafy koralowe zajmują ponad 30% powierzchni oceanów świata i są głównym środowiskiem dla większości gatunków ryb morskich na świecie', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) Anthozoa (koralowce, ukwiały) — tylko polip, brak meduzy; kolonie Scleractinia (koralowce twarde) → CaCO₃ szkielet → budowa raf. (B) zooxanthellae (Symbiodinium spp.) = endosymbiotyczne dinoflagellaty w endodermie korali; fotosynteza → glukoza, glicerol, aminokwasy → do korala; koral → CO₂, H₂O, N do zooxanthellae. (C) bielenie: temperatura > 30–31°C → stres oksydacyjny → koral wyrzuca zooxanthellae → biały szkielet widoczny przez przezroczysty tegument → śmierć jeśli bielenie trwa >2 tygodnie. (D) fałsz: rafy koralowe zajmują < 1% powierzchni oceanów (ok. 284 000 km²), ale zasiedlane przez 25–35% gatunków morskich (hot spot różnorodności).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── PIERŚCIENICE I MIĘCZAKI (4) ──────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.piersc, question_type: 'single',
    question_text: 'Mięczaki (Mollusca) pomimo dużej różnorodności posiadają plan budowy ciała z kilkoma wspólnymi elementami. Który zestaw struktur jest charakterystyczny dla większości mięczaków?',
    options: [
      { id: 'A', text: 'Głowa z radulą (tarka do tarcia pokarmu) + noga mięśniowa (lokomocja) + wisceropalium (woreczek trzewiowy okryty płaszczem wydzielającym muszlę)', is_correct: true },
      { id: 'B', text: 'Segmentowane ciało z chitynowym egzoszkieletem, członowane odnóża i spirakula do oddychania powietrzem', is_correct: false },
      { id: 'C', text: 'Trzy tagmy (głowa, tułów, odwłok) z wicią jako organem zmysłowym i gąbczastym układem krwionośnym', is_correct: false },
      { id: 'D', text: 'Szkielet wewnętrzny z kości wapiennych, układ krwionośny zamknięty i cztery kończyny jako u kręgowców', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Plan budowy mięczaka: (1) głowa (cephalum) — u większości z oczami i radulą (tarka z rogowych zębów do skrobania pokarmu; brak u małży); (2) noga (pes) — mięśniowy narząd lokomocji (u ślimaków — pełzanie, u małży — kopanie, u głowonogów — macki); (3) woreczek trzewiowy (visceral mass) — narządy wewnętrzne; (4) płaszcz (mantle/pallium) — skałofałd okrywający trzewia, wydziela muszlę (konchiolinę i CaCO₃), tworzy jamę płaszczową z ctenidia (skrzela). Muszla: egzoszkielet z węglanu wapnia (kalcyt lub aragonit).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.piersc, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują głowonogi (Cephalopoda)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Głowonogi mają zamknięty układ krwionośny (jedyne mięczaki z tym cechą), co umożliwia im dużą aktywność ruchową i wysoki metabolizm', is_correct: true },
      { id: 'B', text: 'Noga głowonogów przekształciła się w wieniec ramion (macek) otaczających usta z dziobem rogowym; lokomocja przez reaktywne wyrzucanie wody z jamy płaszczowej (jet propulsion)', is_correct: true },
      { id: 'C', text: 'Wszystkie głowonogi posiadają wewnętrzną lub zewnętrzną muszlę wapienną — np. ośmiornice mają dużą zewnętrzną muszlę spiralną jak ślimaki', is_correct: false },
      { id: 'D', text: 'Głowonogi mają dobrze rozwinięty mózg (największy wśród bezkręgowców) i zdolność do uczenia się, zapamiętywania i rozwiązywania problemów — szczególnie ośmiornice', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) głowonogi = jedyne mięczaki z zamkniętym ukł. krwionośnym; hemocyanina (miedź) transportuje O₂ zamiast hemoglobiny. (B) noga zmodyfikowana w macki + lejek (syfon) do wyrzucania wody → szybki ruch wsteczny (jet propulsion); dziób rogowy (beak) do rozcinania ofiar. (C) fałsz: ośmiornica (Octopoda) NIE ma muszli zewnętrznej (zanikła całkowicie); kałamarnice mają muszlę wewnętrzną (gladius/pióro); łódkonogi (Nautilus) zachowały spiralną muszlę zewnętrzną. (D) ośmiornica: ~500 mln neuronów; ukrywanie/maskowanie mimikrą; otwieranie słoików; gry zręcznościowe w laboratorium.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.piersc, question_type: 'single',
    question_text: 'Pijawki (Hirudinea) różnią się od dżdżownic (Oligochaeta) budową i trybem życia. Wskaż cechę ODRÓŻNIAJĄCĄ pijawki od dżdżownic:',
    options: [
      { id: 'A', text: 'Pijawki mają przyssawki przednie i tylne, zredukowane szczeciny lub ich brak, brak prawdziwego celomu (wypełniony mezenchymą) i wiele gatunków pasożytuje na kręgowcach', is_correct: true },
      { id: 'B', text: 'Pijawki mają chitynowy egzoszkielet i złożone oczy fasecjonowane, dżdżownice — miękkie ciało bez ochronnej okrywy', is_correct: false },
      { id: 'C', text: 'Pijawki są autotrofami fotosyntezującymi dzięki symbiontycznym algom, dżdżownice — obligatoryjnymi drapieżnikami', is_correct: false },
      { id: 'D', text: 'Dżdżownice mają układ krwionośny otwarty, pijawki — zamknięty z hemolimfą jako medium transportowym', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hirudinea (pijawki) vs Oligochaeta (dżdżownice): (1) pijawki: przednia przyssawka (usta+hak) + tylna przyssawka (przyczepienie); dżdżownice: brak przyssawek. (2) Pijawki: brak lub szczątkowe szczeciny (chaetae); dżdżownice: 4 pary szczecin/segment (lokomocja). (3) Pijawki: celom silnie zredukowany → wypełniony botryoidalną tkanką; dżdżownice: duży celom. (4) Pijawki ekto- i endopasożytnicze (krew, hemolimfa) + drapieżne (zjadają bezkręgowce); dżdżownice: saprotroficzne. Hirudo medicinalis: hirudyna (antykoagulant), stosowana w medycynie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.piersc, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących pierścienic (Annelida):',
    options: [
      { id: 'A', text: 'Wieloszczety (Polychaeta), np. Nereis, są morskimi pierścienicami z licznymi szczecinami (chaetami) na parapodach (bocznych wyrostkach) każdego segmentu; rozmnażają się płciowo, a ich larwy (trochofory) są planktoniczne.', is_correct: true },
      { id: 'B', text: 'Dżdżownice są hermafrodytami, ale rozmnażają się przez krzyżowe zapłodnienie (allogamia) — dwie dżdżownice wymieniają się spermą podczas koniugacji, przy czym każda następnie składa jaja w kokonie wydzielanym przez siodełko (clitellum).', is_correct: true },
      { id: 'C', text: 'Pierścienice (Annelida) są ewolucyjnie bliżej spokrewnione ze stawonogami (Arthropoda) niż z mięczakami (Mollusca), co potwierdza wyłącznie zbieżna budowa segmentowanego ciała.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Polychaeta (wieloszczety): ~17 000 gatunków; każdy segment z parapodami (lokomocja, oddychanie); trocho­fora (larwa wolno pływająca z rzęskami w wianku) = kluczowy dowód pokrewieństwa Annelida–Mollusca. B — Prawda: dżdżownica (Lumbricus terrestris) = hermafrodyta z krzyżowym zapłodnieniem → dwie dżdżownice układają się głowami naprzeciwko i wymieniają spermę → kokon (clitellum) → kokony ochronne z jajami. C — Fałsz: Annelida jest bliżej spokrewniona z Mollusca niż Arthropoda (dane molekularne); dawna hipoteza "Articulata" (Annelida+Arthropoda) jest odrzucona — Arthropoda to Ecdysozoa (razem z nicieniami), Annelida+Mollusca to Lophotrochozoa.',
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
