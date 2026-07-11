// Seed batch 1/4 — Różnorodność organizmów
// Systemy klasyfikacji (6) + Protisty (4)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf'

const S = {
  sys:  '93f55825-0ec2-45fe-ad8e-ca3dce7bd98a',
  wir:  'ade8a64a-1b78-47c6-a317-a90c15dcf367',
  prok: '34a5f416-a22e-438b-b4ff-7d56dd7279a4',
  prot: '22562e1a-ecfb-4b00-99c1-7f66be359a7b',
  grz:  '44e9a9be-d038-4287-a1fb-819e129d63f9',
  bezk: '2e08b827-45a1-4f25-a87f-01ca8bdcffda',
  rosl: '331cb215-d830-49f5-b3dd-19c5d51b1374',
}

const questions = [

  // ── SYSTEMY KLASYFIKACJI (6) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.sys, question_type: 'single',
    question_text: 'Zgodnie z systemem trzech domen zaproponowanym przez Woeseego (1990) na podstawie analizy rybosomalnego RNA, wszystkie organizmy żywe dzielone są na:',
    options: [
      { id: 'A', text: 'Animalia, Plantae, Fungi, Protista, Monera — pięć królestw Whittakera', is_correct: false },
      { id: 'B', text: 'Bacteria, Archaea i Eukarya', is_correct: true },
      { id: 'C', text: 'Prokaryota, Eucaryota i Wirusy', is_correct: false },
      { id: 'D', text: 'Archaea, Bacteria, Protista, Fungi, Metazoa — pięć linii ewolucyjnych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Carl Woese i George Fox (1977) zaproponowali podział organizmów na 3 domeny na podstawie sekwencji rybosomalnego RNA (18S/16S rRNA): Bacteria (bakterie), Archaea (archeony) i Eukarya (eukarionty). System ten zastąpił dawny podział na prokaryoty i eukaryoty, wykazując, że Archaea są bliżej spokrewnione z Eukarya niż z Bacteria.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sys, question_type: 'single',
    question_text: 'Wskaż prawidłowe dokończenie zdania:\nNomenklatura dwuczłonowa (binominalna) Linneusza polega na tym, że pełna nazwa gatunkowa składa się z:',
    options: [
      { id: 'A', text: 'nazwy klasy i rzędu, obu zapisanych wielką literą po łacinie', is_correct: false },
      { id: 'B', text: 'nazwy rodzaju (pierwsza litera wielka) i epitetu gatunkowego (mała litera), zapisanych kursywą', is_correct: true },
      { id: 'C', text: 'nazwy rodziny i gatunku, obu pisanych wielką literą i prostą czcionką', is_correct: false },
      { id: 'D', text: 'trzech członów: rodzaju, gatunku i podgatunku — wszystkie trzy zawsze obowiązkowe', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Nomenclatura binominalna (Systema Naturae, Linneusz 1758): nazwa składa się z rodzaju (Genus, wielka litera, np. Homo) + epitetu gatunkowego (mała litera, np. sapiens) → Homo sapiens. Zapisuje się kursywą lub podkreśleniem. Autor i rok dodawane opcjonalnie. Trójczłonowa nazwa (trinomen) stosowana jest tylko dla podgatunków.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sys, question_type: 'multiple',
    question_text: 'Które cechy stanowią podstawę WSPÓŁCZESNEJ systematyki filogenetycznej (kladystyki) przy grupowaniu organizmów? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Synapomorfie — wspólne cechy wywiedzione (pochodne) wskazujące na wspólnego przodka', is_correct: true },
      { id: 'B', text: 'Sekwencje DNA, RNA i białek jako molekularne markery pokrewieństwa ewolucyjnego', is_correct: true },
      { id: 'C', text: 'Ogólne podobieństwo morfologiczne bez rozróżniania, czy cecha jest homologią czy analogią (systematyka fenetyczna)', is_correct: false },
      { id: 'D', text: 'Analiza drzew filogenetycznych metodami parsymonii lub bayesowskimi opartymi na danych molekularnych i morfologicznych', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Kladystyka (Hennig, 1950): opiera się na synapomorfiach (wspólnych cechach pochodnych od ostatniego wspólnego przodka), nie na ogólnym podobieństwie. Metody molekularne (sekwencje DNA) stały się głównym narzędziem. Drzewa filogenetyczne (kladogramy) tworzone metodami parsymonii, ML lub Bayes. Fenetyka (systematyka oparta na ogólnym podobieństwie) nie jest metodą filogenetyczną.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sys, question_type: 'multiple',
    question_text: 'Które z poniższych organizmów należą do domeny EUKARYA? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Drożdże Saccharomyces cerevisiae', is_correct: true },
      { id: 'B', text: 'Termofilne Archaea (np. Sulfolobus acidocaldarius) żyjące w gorących źródłach', is_correct: false },
      { id: 'C', text: 'Glony zielenice (Chlorophyta)', is_correct: true },
      { id: 'D', text: 'Pierwotniaki (np. Paramecium caudatum, pantofelek)', is_correct: true },
    ],
    correct_answer: ['A', 'C', 'D'],
    explanation: 'Do domeny Eukarya należą wszystkie organizmy z jądrem komórkowym otoczonym otoczką jądrową: rośliny, zwierzęta, grzyby, protisty (w tym glony i pierwotniaki). Sulfolobus to Archaea (domena Archaea), nie Eukarya — mimo że Archaea są filogenetycznie bliższe Eukarya niż Bacteria.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sys, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących systematyki organizmów:',
    options: [
      { id: 'A', text: 'Archaea różnią się od Bacteria m.in. brakiem peptydoglikanu w ścianie komórkowej oraz obecnością lipidów błonowych opartych na eterowych wiązaniach z rozgałęzionymi łańcuchami izoprenoidowymi.', is_correct: true },
      { id: 'B', text: 'W hierarchii taksonomicznej Linneusza klasa i rząd są rangami wyższymi niż gromada (phylum/divisio).', is_correct: false },
      { id: 'C', text: 'Wirusy nie są klasyfikowane w żadnej z trzech domen, ponieważ nie posiadają własnego aparatu metabolicznego i nie spełniają klasycznych kryteriów organizmu żywego.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: ściany Archaea nie mają peptydoglikanu (charakterystycznego dla Bacteria); błony zbudowane z izoprenoidów połączonych wiązaniami eterowymi zamiast estrowych. B — Fałsz: hierarchia (od wyższych): domena → królestwo → gromada (typ/phylum) → klasa → rząd → rodzina → rodzaj → gatunek; gromada jest wyższą rangą niż klasa. C — Prawda: wirusy nie są klasyfikowane w żadnej domenie; prowadzona jest odrębna klasyfikacja wirusów (ICTV).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sys, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących koncepcji gatunku i pokrewieństwa ewolucyjnego:',
    options: [
      { id: 'A', text: 'Biologiczna koncepcja gatunku (Mayr, 1942) definiuje gatunek jako grupę rzeczywiście lub potencjalnie krzyżujących się osobników, izolowaną rozrodczo od innych grup i wydającą płodne potomstwo.', is_correct: true },
      { id: 'B', text: 'Homologia i analogia są synonimami — oba pojęcia opisują struktury o podobnej funkcji wywodzące się ze wspólnego przodka.', is_correct: false },
      { id: 'C', text: 'Monofiletyzm (monofiletyczność) oznacza, że takson obejmuje wspólnego przodka i wszystkich jego potomków — i tylko takie grupy uznawane są za naturalne w kladystyce.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: biologiczna definicja Mayra (biological species concept) jest szeroko stosowana, choć ma ograniczenia (nie działa dla organizmów bezpłciowych). B — Fałsz: HOMOLOGIA = struktury o wspólnym ewolucyjnym pochodzeniu (np. skrzydło ptaka i ręka człowieka — kość ramienna); ANALOGIA = podobna funkcja, różne pochodzenie (np. skrzydło ptaka i skrzydło owada — konwergencja). C — Prawda: parafiletyczne i polifiletyczne grupy są odrzucane w kladystyce jako nienaturalne.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── PROTISTY (4) ─────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.prot, question_type: 'single',
    question_text: 'Które stwierdzenie NAJLEPIEJ opisuje grupę zwaną protistami?',
    options: [
      { id: 'A', text: 'Protisty to jednokomórkowe eukarionty zdolne do poruszania się za pomocą wici lub nibynóżek', is_correct: false },
      { id: 'B', text: 'Protisty to eukarionty (jedno- lub wielokomórkowe) niezaliczane ani do roślin, ani do grzybów, ani do zwierząt — sztuczna, parafiletyczna grupa', is_correct: true },
      { id: 'C', text: 'Protisty to prokaryoty zasiedlające skrajne środowiska, wyodrębnione na podstawie braku jądra komórkowego', is_correct: false },
      { id: 'D', text: 'Protisty to wyłącznie autotroficzne organizmy morskie posiadające chloroplasty wtórne', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Protisty (Protista) to nieformalna, parafiletyczna (lub polifiletyczna) kategoria eukariontów — nie tworzą naturalnej, monofiletycznej grupy. Obejmują organizmy bardzo różnorodne: jednokomórkowe (pantofelek, euglena, pełzaki) i wielokomórkowe (glony brunatne), autotroficzne i heterotroficzne, ruchliwe i nie. W nowoczesnej taksonomii są zastępowane przez naturalne grupy (SAR, Excavata itp.).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prot, question_type: 'single',
    question_text: 'Plasmodium falciparum, wywołujące złośliwą malarię, należy do grupy protistów zwanej:',
    options: [
      { id: 'A', text: 'Wiciowcami (Flagellata) — przemieszczającymi się za pomocą jednej lub dwóch wici', is_correct: false },
      { id: 'B', text: 'Zarodźcami (Apicomplexa) — posiadającymi kompleks apikalny służący do wnikania do komórek gospodarza', is_correct: true },
      { id: 'C', text: 'Okrzemkami (Bacillariophyta) — posiadającymi krzemionkową ścianę komórkową (frustulę)', is_correct: false },
      { id: 'D', text: 'Euglenozoa — zawierającymi chloroplasty wtórne i charakterystyczny pellicle', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Plasmodium (rodzaj obejmujący ok. 200 gatunków, z czego 5 pasożytuje u człowieka) należy do Apicomplexa — grupy wyróżnianej m.in. przez kompleks apikalny ułatwiający wnikanie do komórek erytrocytów i hepatocytów. Cykl życiowy wymaga dwóch gospodarzy: komar Anopheles (faza płciowa) i człowiek/ssak (faza bezpłciowa). Malaria zabija ok. 600 000 osób rocznie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prot, question_type: 'multiple',
    question_text: 'Które z poniższych organizmów są protistami? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Paramecium caudatum (pantofelek) — orzęsek jednokomórkowy', is_correct: true },
      { id: 'B', text: 'Euglena viridis (euglena zielona) — miksotroficzny wiciowiec', is_correct: true },
      { id: 'C', text: 'Penicillium notatum (pleśniak zielony) — producent penicyliny', is_correct: false },
      { id: 'D', text: 'Trypanosoma brucei — kinetoplastyd wywołujący śpiączkę afrykańską', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Pantofelek i euglena to klasyczne przykłady protistów. Trypanosoma brucei należy do kinetoplastydów (Euglenozoa — ta sama gromada co Euglena). Penicillium notatum to GRZYB (Ascomycota) — nie protist. Pamiętaj: protisty to eukarionty niezaliczane do roślin, grzybów i zwierząt.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prot, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących protistów:',
    options: [
      { id: 'A', text: 'Okrzemki (Bacillariophyta/Diatomeae) posiadają krzemionkową (SiO₂) ścianę komórkową zwaną frustulą i odpowiadają za ok. 20% globalnej produkcji pierwotnej (fotosyntezy).', is_correct: true },
      { id: 'B', text: 'Euglena viridis jest organizmem wyłącznie autotroficznym i w warunkach całkowitego braku światła ginie, ponieważ traci chloroplasty i zdolność do fotosyntezy.', is_correct: false },
      { id: 'C', text: 'Orzęski (Ciliophora), w tym pantofelek (Paramecium), posiadają dwa typy jąder: makronukleus (steruje metabolizmem) i mikronukleus (bierze udział w rozmnażaniu płciowym przez koniugację).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: okrzemki (Diatomeae) produkują ok. 20% tlenu na Ziemi; skamieniałe frustule tworzą ziemię okrzemkową. B — Fałsz: Euglena jest miksotrofem — w ciemności przestawia się na heterotrofię (osmotrofia, fagotrofia), może tracić chloroplasty ale przeżywa; gdy wróci światło, odbudowuje chloroplasty. C — Prawda: makronukleus (poliploidalny, aktywny transkrypcyjnie) + mikronukleus (diploidalny, rekombinacja podczas koniugacji).',
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
