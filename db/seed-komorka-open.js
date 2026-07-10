// Seed: Komórka i biochemia — 10 open questions
// Topic: c4346b31-355b-4817-9e66-22cf36d4c993

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const T = 'c4346b31-355b-4817-9e66-22cf36d4c993'
const S = {
  blona:     '02bdc9fd-fcc9-4a74-bb86-477bfaa7dba3',
  organelle: '5f7aaca5-c24d-41de-a023-a4fd1edd909d',
  sklad:     'baa3174e-705a-4720-be31-86a859a652e1',
  bialka:    'a42f1d2e-1608-446b-a4b8-4740027f1112',
  kwasy:     '257cec56-c729-474f-8387-eef06eb32e09',
  glikoliza: '04e96c80-bd1d-4d99-95b7-c88d4f0ef598',
  lancuch:   'ce23ad40-6d27-4b15-b49f-0e714db0e20e',
  cykl:      'a21c7985-cdf3-4451-840e-617a993b145e',
  endosymb:  'b3c2f29e-c078-4af4-9c0e-ea903c659986',
}

const questions = [
  {
    topic_id: T, subtopic_id: S.blona,
    question_type: 'open',
    question_text: 'Erytrocyty (czerwone krwinki) człowieka są pozbawione jądra komórkowego i mitochondriów. Wyjaśnij, w jaki sposób erytrocyt pozyskuje ATP niezbędny do utrzymania gradientu jonowego przez błonę komórkową. Podaj nazwę procesu i określ jego lokalizację w komórce.',
    max_points: 2,
    key_points: [
      'Erytrocyt pozyskuje ATP wyłącznie w procesie glikolizy (beztlenowego rozkładu glukozy) — brak mitochondriów uniemożliwia fosforylację oksydacyjną.',
      'Glikoliza zachodzi w cytozolu (cytoplazmie); produktem końcowym jest mleczan (kwas mlekowy) wydzielany do krwi lub pirogronian poddawany fermentacji mlekowej — erytrocyt nie może utlenić pirogronianu w cyklu Krebsa.'
    ],
    options: [], correct_answer: [],
    model_answer: 'Erytrocyty pozyskują ATP jedynie w procesie glikolizy (beztle­nowego rozkładu glukozy do mleczanu), która przebiega w cytozolu. Brak mitochondriów wyklucza fosforylację oksydacyjną. Netto glikoliza daje 2 ATP z 1 cząsteczki glukozy. Dzięki temu ATP pompa sodowo-potasowa (Na⁺/K⁺-ATPaza) utrzymuje odpowiedni gradient jonowy błony, zapewniając elastyczność i kształt dwuwklęsłego dysku.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.blona,
    question_type: 'open',
    question_text: 'Komórkę roślinną umieszczono w roztworze silnie hipertonicznym. Opisz kolejno dwie zmiany, które zajdą w tej komórce, i wyjaśnij mechanizm każdej z nich.',
    max_points: 2,
    key_points: [
      'Plazmoliza: woda osmotycznie wypływa z wakuoli i cytoplazmy przez błonę półprzepuszczalną (na zewnątrz, do roztworu o wyższym stężeniu) → protoplast kurczy się i odrywa od ściany komórkowej.',
      'Ściana komórkowa pozostaje nienaruszona (jest przepuszczalna i sztywna), podczas gdy protoplast (błona komórkowa + cytoplazma) oddziela się od ściany — widoczna szczelina między ścianą a plazmą (plazmoliza właściwa).'
    ],
    model_answer: 'W roztworze hipertonicznym stężenie substancji rozpuszczonych jest wyższe na zewnątrz niż wewnątrz komórki. Woda przemieszcza się osmotycznie z wnętrza (wakuola, cytoplazma) na zewnątrz komórki przez selektywnie przepuszczalną błonę komórkową. Skutkiem jest plazmoliza: protoplast kurczy się i odrywa od ściany komórkowej. Ściana komórkowa zbudowana z celulozy nie skurczy się — pozostaje na miejscu. Widoczna staje się szczelina wypełniona roztworem zewnętrznym między ścianą a skurczoną błoną komórkową.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.organelle,
    question_type: 'open',
    question_text: 'Komórki gruczołu trzustkowego produkują i wydzielają zewnątrzwydzielniczo enzymy trawienne (np. lipazy, proteazy). Wyjaśnij, dlaczego te komórki mają wyjątkowo rozbudowaną szorstką siateczkę śródplazmatyczną (SER) i aparat Golgiego. Opisz rolę każdego z tych organelli w procesie wydzielania białka.',
    max_points: 2,
    key_points: [
      'Szorstka siateczka śródplazmatyczna (RER): rybosomy związane z RER syntezują białka przeznaczone do sekrecji; białko jest równocześnie przetransportowane do światła RER, gdzie ulega wstępnemu fałdowaniu i glikozylacji.',
      'Aparat Golgiego: sortuje, modyfikuje (dojrzewa glikozylacja, dodawane są znaczniki) i pakuje białka do pęcherzyków wydzielniczych (zymogenowych), które transportują enzymy do błony komórkowej i wydzielają je egzocytozą do przewodów trzustkowych.'
    ],
    model_answer: 'Enzymy trawienne są białkami sekrecyjnymi. Ich synteza odbywa się na rybosomach przytwierdzonych do szorstkiej SER (stąd jej rozbudowanie w komórkach wydzielniczych). Nowo zsyntetyzowane polipeptydy przechodzą przez błonę do światła SER, gdzie są fałdowane i wstępnie glikozylowane. Następnie w pęcherzykach transportowych trafiają do aparatu Golgiego (cis → medial → trans), który dokonuje końcowej modyfikacji, sortowania i pakowania do pęcherzyków wydzielniczych. Pęcherzyki te (granuła zymogenowa) zlewają się z błoną komórki i wydzielają zawartość egzocytozą. Im więcej białka produkuje komórka, tym bardziej rozbudowane musi być RER i Golgi.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.organelle,
    question_type: 'open',
    question_text: 'Porównaj mitochondrium i chloroplast, podając: a) jedną wspólną cechę budowy oraz b) zasadniczą różnicę w pełnionej funkcji.',
    max_points: 2,
    key_points: [
      'Wspólna cecha budowy: obydwa organelle są otoczone podwójną błoną (dwie membrany: zewnętrzna i wewnętrzna) ORAZ posiadają własne kolistе DNA i rybosomy (70S) — dowód na endosymbiozę.',
      'Różnica w funkcji: mitochondrium przeprowadza oddychanie komórkowe (utlenianie substratów organicznych → ATP); chloroplast przeprowadza fotosyntezę (pochłanianie energii świetlnej → synteza związków organicznych z CO₂ i H₂O).'
    ],
    model_answer: 'Wspólna cecha: mitochondrium i chloroplast mają podwójną błonę (zewnętrzną i wewnętrzną) oraz zawierają własne koliste DNA i rybosomy (70S) — co potwierdza ich prokariontyczne pochodzenie (teoria endosymbiozy). Różnica funkcji: mitochondrium to "elektrownia" komórki — przeprowadza oddychanie komórkowe (cykl Krebsa + łańcuch oddechowy → ATP); chloroplast to "fabryka cukrów" — przeprowadza fotosyntezę (faza jasna: pochłanianie światła, ATP i NADPH; faza ciemna: cykl Calvina, asymilacja CO₂ → glukoza).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.bialka,
    question_type: 'open',
    question_text: 'Na wykresie przedstawiono zależność szybkości reakcji enzymatycznej od temperatury. Szybkość rośnie do ok. 37°C, po czym gwałtownie spada. Wyjaśnij, co dzieje się z cząsteczką enzymu po przekroczeniu temperatury optymalnej i dlaczego powoduje to spadek aktywności katalitycznej.',
    max_points: 2,
    key_points: [
      'Po przekroczeniu temperatury optymalnej dochodzi do denaturacji enzymu: wysokie temperatury zrywają niekowalencyjne wiązania (wodorowe, jonowe, hydrofobowe) utrzymujące trzeciorzędową i czwartorzędową strukturę białka.',
      'Zmiana konformacji niszczy centrum aktywne enzymu (jego kształt przestrzenny) — substrat nie może już właściwie przyłączyć się do centrum aktywnego (zaburzone dopasowanie substrat–enzym) → szybkość reakcji spada do zera.'
    ],
    model_answer: 'Powyżej temperatury optymalnej (~37°C dla enzymów ludzkich) cząsteczka enzymu ulega denaturacji. Wysoka temperatura dostarcza energii wystarczającej do zerwania słabych wiązań niekowalencyjnych (wodorowych, jonowych, van der Waalsa, oddziaływań hydrofobowych) stabilizujących strukturę trzeciorzędową białka. Łańcuch polipeptydowy rozfałdowuje się — zmienia się przestrzenny kształt centrum aktywnego. Substrat nie może już wiązać się specyficznie z enzymem, reakcja nie zachodzi. Denaturacja jest zazwyczaj procesem nieodwracalnym (w odróżnieniu od odwracalnej inhibicji).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.bialka,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega hamowanie zwrotne (feedback inhibition) enzymu. Podaj przykład biologiczny i wyjaśnij, dlaczego ten mechanizm regulacji jest korzystny dla komórki.',
    max_points: 2,
    key_points: [
      'Hamowanie zwrotne (product inhibition / end-product inhibition): końcowy produkt szlaku metabolicznego wiąże się allosterycznie z enzymem katalizującym pierwszy etap szlaku → zmienia jego konformację → hamuje aktywność enzymu, gdy produkt jest w nadmiarze.',
      'Znaczenie dla komórki: mechanizm samoregulujący — komórka nie produkuje nadmiaru produktu (oszczędność substratów i energii); gdy poziom produktu spada, hamowanie ustępuje i synteza wznawia się — homeostaza metaboliczna.'
    ],
    model_answer: 'Hamowanie zwrotne (sprzężenie zwrotne ujemne): końcowy produkt szlaku enzymatycznego działa jako inhibitor allosteryczny enzymu regulatorowego (zazwyczaj pierwszego enzymu szlaku). Gdy stężenie produktu wzrasta powyżej potrzeb komórki, produkt wiąże się z miejscem allosterycznym enzymu → zmiana konformacji centrum aktywnego → hamowanie katalityczne → zmniejszenie produkcji. Przykład: synteza izoleucyny — nadmiar izoleucyny hamuje treoninę deaminazę (pierwszy enzym szlaku). Korzyść: ekonomia metaboliczna — komórka nie produkuje związków których nie potrzebuje, oszczędzając energię i substraty; umożliwia precyzyjne dopasowanie syntezy do bieżącego zapotrzebowania.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.glikoliza,
    question_type: 'open',
    question_text: 'Porównaj fermentację alkoholową i fermentację mlekową pod względem: a) organizmy przeprowadzające, b) produktów końcowych, c) roli NAD⁺ w obu procesach.',
    max_points: 3,
    key_points: [
      'Organizmy: fermentacja alkoholowa — drożdże i niektóre bakterie; fermentacja mlekowa — bakterie mlekowe (Lactobacillus) ORAZ komórki mięśni szkieletowych człowieka przy intensywnym wysiłku (niedobór tlenu).',
      'Produkty końcowe: fermentacja alkoholowa → etanol + CO₂ (z pirogronianu, via acetaldehydu); fermentacja mlekowa → kwas mlekowy (mleczan) — pirogronian jest bezpośrednio redukowany do mleczanu.',
      'Rola NAD⁺: w obu procesach NADH powstały w glikolizie jest utleniany z powrotem do NAD⁺ podczas fermentacji — to kluczowe, bo bez regeneracji NAD⁺ glikoliza nie mogłaby trwać (NAD⁺ jest niezbędnym akceptorem elektronów na etapie oksydacji aldehydu 3-fosfoglicerynowego).'
    ],
    model_answer: 'a) Organizmy: fermentacja alkoholowa — drożdże, niektóre bakterie; fermentacja mlekowa — bakterie mlekowe oraz mięśnie człowieka przy intensywnym wysiłku fizycznym. b) Produkty: alkoholowa → etanol + CO₂ (pirogronian → acetalaldehyd → etanol; dekarboxylaza pirogronianowa + dehydrogenaza alkoholowa); mlekowa → mleczan (pirogronian bezpośrednio redukowany przez dehydrogenazę mleczanową). c) NAD⁺: w obu procesach NADH (z glikolizy) oddaje H do końcowego akceptora (acetalaldehyd → etanol lub pirogronian → mleczan), regenerując NAD⁺. Bez regeneracji NAD⁺ glikoliza zostałaby zablokowana (brak akceptora elektronów na etapie oksydacji GAPDH) i produkcja ATP ustałaby.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.lancuch,
    question_type: 'open',
    question_text: 'Cyjanek potasowy (KCN) jest silną trucizną — blokuje kompleks IV (cytochrom c oksydaza) łańcucha oddechowego. Wyjaśnij, jakie konsekwencje ma zablokowanie kompleksu IV dla: a) gradientu protonowego, b) syntezy ATP, c) stężenia NADH w mitochondrium.',
    max_points: 3,
    key_points: [
      'Gradient protonowy: zablokowanie kompleksu IV uniemożliwia przekazywanie elektronów na O₂ → elektrony nie płyną przez łańcuch → kompleksy I, III nie pompują protonów → gradient H⁺ (siła protonomotoryczna) między przestrzenią międzybłonową a macierzą zanika lub nie jest uzupełniany.',
      'Synteza ATP: ATP syntaza (kompleks V) działa dzięki przepływowi protonów przez kanał F₀ wzdłuż gradientu → bez gradientu protonowego synteza ATP (fosforylacja oksydacyjna) ustaje.',
      'Stężenie NADH: NADH utleniany przez kompleks I (NADH→NAD⁺) — ale kompleks I może przekazywać elektrony dalej tylko gdy łańcuch jest drożny; zablokowanie kompleksu IV zatrzymuje przepływ elektronów → NADH nie jest utleniany → stężenie NADH rośnie, NAD⁺ maleje → cykl Krebsa i glikoliza hamują (brak NAD⁺ jako akceptora).'
    ],
    model_answer: 'Kompleks IV (cytochrom c oksydaza) katalizuje końcowy krok: przekazanie elektronów z cytochromu c na O₂ z jednoczesnym pompowaniem protonów. KCN wiąże się z jonem Fe³⁺ hem a₃ → blokada. a) Gradient: bez działania kompleksu IV elektrony nie płyną przez cały łańcuch → kompleksy I i III nie pompują H⁺ → gradient protonowy zanika. b) ATP: syntaza ATP korzysta z gradientu (siła protonomotoryczna) do syntezy ATP → bez gradientu fosforylacja oksydacyjna ustaje → komórka może produkować ATP tylko z glikolizy (2 ATP/glukoza, niewystarczające). c) NADH: bez przepływu elektronów przez łańcuch, kompleks I nie może utleniać NADH → akumulacja NADH → niedobór NAD⁺ → zahamowanie cyklu Krebsa i glikolizy → kryzys energetyczny.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 3, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.cykl,
    question_type: 'open',
    question_text: 'Białko p53 nazywane jest "strażnikiem genomu". Wyjaśnij, jaką rolę odgrywa p53 w momencie wykrycia uszkodzenia DNA w komórce somatycznej. Uzasadnij, dlaczego utrata funkcji p53 (mutacja genu TP53) sprzyja rozwojowi nowotworu.',
    max_points: 2,
    key_points: [
      'Po wykryciu uszkodzenia DNA p53 (aktywowany przez ATM/ATR) zatrzymuje cykl komórkowy w punkcie kontrolnym G1/S (indukuje transkrypcję genu CDKN1A kodującego inhibitor CDK — białko p21) → zapobiega replikacji uszkodzonego DNA; jeśli uszkodzenie jest nienaprawialne → p53 indukuje apoptozę (programowaną śmierć komórki).',
      'Utrata p53: komórka z uszkodzonym DNA kontynuuje podziały → mutacje kumulują się → niestabilność genomu → akumulacja mutacji w onkogenach i genach supresorowych → transformacja nowotworowa; TP53 mutowany w >50% ludzkich nowotworów (najczęściej mutowany gen w raku).'
    ],
    model_answer: 'P53 (kodowany przez TP53) to białko supresorowe — jego poziom wzrasta gdy ATM/ATR wykryją DSB lub inne uszkodzenia DNA. P53 działa jako czynnik transkrypcyjny: aktywuje CDKN1A (→ p21, inhibitor kompleksów cyklina-CDK) → zatrzymanie cyklu w G1 → czas na naprawę DNA. Jeśli naprawa jest niemożliwa — p53 aktywuje geny proapoptotyczne (Bax, PUMA) → apoptoza zamiast proliferacji wadliwej komórki. Mutacja TP53: brak "hamulca" → komórka z uszkodzonym DNA nie zatrzymuje się i nie ulega apoptozie → replikuje uszkodzony DNA → kolejne mutacje w ważnych genach → nowotwór. Dlatego TP53 mutowany w ok. 50% wszystkich nowotworów ludzkich.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.endosymb,
    question_type: 'open',
    question_text: 'Podaj i krótko wyjaśnij dwa argumenty przemawiające za endosymbiontycznym pochodzeniem mitochondriów od wolnożyjących prokariontów (teoria endosymbiozy Lynn Margulis).',
    max_points: 2,
    key_points: [
      'Własne DNA i rybosomy (70S): mitochondria posiadają koliste DNA (jak bakterie, nie chromosom liniowy) oraz rybosomy 70S (prokariontyczne, wrażliwe na te same antybiotyki co bakteryjne — chloramfenikol, erytromycyna); rybosomy eukariontyczne (cytoplazmatyczne) mają 80S.',
      'Podwójna błona i podobieństwo do bakterii: błona wewnętrzna mitochondrium (z grzebieniami) jest analogiczna do błony komórkowej alfa-proteobakterii (np. Rickettsia); skład lipidów (kardiolipina w błonie wewnętrznej) charakterystyczny dla bakterii; mitochondria mnożą się przez podział binarny jak bakterie (nie de novo).'
    ],
    model_answer: 'Argument 1 — własne DNA i rybosomy 70S: mitochondria zawierają koliste mtDNA (jak bakteryjny chromosom) i rybosomy 70S, podatne na antybiotyki bakteriobójcze (chloramfenikol). Rybosomy cytoplazmatyczne eukariontów mają 80S — są inne. Argument 2 — podwójna błona i podział binarny: obecność dwóch błon (zewnętrzna — dawna błona komórki-gospodarza; wewnętrzna — dawna błona bakterii) oraz namnażanie przez podział binarny (nie syntezowane de novo) wskazują, że mitochondrium było kiedyś niezależną bakterią pochłoniętą przez proeukariontyczną komórkę i zamiast zostać strawione — weszło w symbiozę.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
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
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} open questions for Komórka i biochemia...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 120))
    else console.log('OK', q.max_points + 'pkt', q.question_text.slice(0, 70).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
