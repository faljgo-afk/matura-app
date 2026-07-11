// Seed batch 3/4 — Różnorodność organizmów
// Wirusy (5) + Prokaryoty (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf'

const S = {
  wir:  'ade8a64a-1b78-47c6-a317-a90c15dcf367',
  prok: '34a5f416-a22e-438b-b4ff-7d56dd7279a4',
}

const questions = [

  // ── WIRUSY (5) ────────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.wir, question_type: 'single',
    question_text: 'Które stwierdzenie POPRAWNIE opisuje cechy wirusa jako niekomórkowej formy życia?',
    options: [
      { id: 'A', text: 'Wirus jest prokariotem pozbawionym jądra, ale posiadającym rybosomy i własny metabolizm', is_correct: false },
      { id: 'B', text: 'Wirus zbudowany jest z kwasu nukleinowego (DNA lub RNA) otoczonego kapsydem białkowym; nie ma organelli, własnego metabolizmu ani rybosomów — jest obligatoryjnym pasożytem wewnątrzkomórkowym', is_correct: true },
      { id: 'C', text: 'Wirusy posiadają błonę komórkową z fosfolipidów i są zdolne do samodzielnej syntezy ATP poza komórką gospodarza', is_correct: false },
      { id: 'D', text: 'Wirusy zawierają zarówno DNA jak i RNA jednocześnie we wszystkich znanych grupach wirusów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Wirus (virion) = kwas nukleinowy (DNA lub RNA — nie obydwa jednocześnie; wyjątek: hepatitis D ma tylko RNA) + kapsyd białkowy ± otoczka lipidowa od gospodarza. Brak własnych rybosomów → brak syntezy białek bez komórki; brak mitochondriów → brak syntezy ATP; brak enzymów metabolizmu własnego. Wirus jest obligatoryjnym pasożytem wewnątrzkomórkowym — może replikować się TYLKO w żywej komórce gospodarza używając jej maszynerii. Nie jest uważany za organizm żywy według klasycznej definicji.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wir, question_type: 'single',
    question_text: 'W cyklu litycznym bakteriofaga wyróżnia się kilka etapów. Wskaż PRAWIDŁOWĄ kolejność etapów po adsorpcji (przyczepienie faga do komórki):',
    options: [
      { id: 'A', text: 'Wstrzyknięcie DNA → synteza białek kapsydu → replikacja DNA faga → montaż wirionów → liza komórki i uwolnienie fagów', is_correct: true },
      { id: 'B', text: 'Integracja DNA faga z chromosomem → długotrwała latencja → indukcja → liza', is_correct: false },
      { id: 'C', text: 'Wnikanie całego wirionu do komórki → przeprogramowanie → pączkowanie nowych fagów przez błonę', is_correct: false },
      { id: 'D', text: 'Wstrzyknięcie DNA → integracja z chromosomem → replikacja z genomem bakterii przez wiele pokoleń → spontaniczna liza', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cykl lityczny bakteriofaga: (1) adsorpcja — fag przyczepia się do receptorów ściany; (2) iniekcja DNA — kapsyd zostaje na zewnątrz, do wnętrza wpompowywane jest DNA; (3) przejęcie metabolizmu — mRNA faga "wycisza" geny bakterii; (4) replikacja DNA faga + synteza białek strukturalnych; (5) montaż nowych wirionów; (6) liza — enzymy (lizyny) trawią ścianę → uwolnienie 100–200 fagów. Opcja B opisuje cykl lizogenny.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wir, question_type: 'multiple',
    question_text: 'Które z poniższych cech ODRÓŻNIAJĄ retrowirusy (np. HIV) od typowych wirusów DNA? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Retrowirusy zawierają jednoniciowy RNA jako materiał genetyczny, podczas gdy typowe wirusy DNA mają dwuniciowe DNA', is_correct: true },
      { id: 'B', text: 'Retrowirusy posiadają enzym odwrotną transkryptazę (reverse transcriptase), która przepisuje RNA wirusowe na DNA integrowane z chromosomem komórki gospodarza', is_correct: true },
      { id: 'C', text: 'Retrowirusy replikują się wyłącznie w komórkach prokariotycznych; nie mogą infekować komórek eukariotycznych', is_correct: false },
      { id: 'D', text: 'Po integracji z chromosomem jako prowirus, retrowirus może być replikowany razem z genomem komórki przez wiele pokoleń bez lizy komórki', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Retrowirusy (Retroviridae): (A) materialem genetycznym jest jednoniciowe RNA (+). (B) kluczowy enzym: odwrotna transkryptaza (RNA→DNA) — cel leków antyretrowirusowych (NRTI, NNRTI). (C) fałsz: HIV infekuje komórki eukariotyczne (limfocyty T CD4+), nie prokariotyczne. (D) prowirus = zintegrowane DNA wirusowe w chromosomie → dziedziczone przy podziale komórki; może latentnie trwać latami; aktywacja → produkcja wirionów → śmierć komórki lub przewlekła infekcja.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wir, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują różnice między cyklem litycznym a lizogennym bakteriofaga? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'W cyklu litycznym fag niszczy komórkę w ciągu minut do godzin; w lizogennym DNA faga pozostaje w komórce jako profag przez wiele pokoleń bez lizy', is_correct: true },
      { id: 'B', text: 'Profag w cyklu lizogennym replikuje się razem z chromosomem bakteryjnym i jest przekazywany do komórek potomnych', is_correct: true },
      { id: 'C', text: 'Cykl lizogenny może zostać zakończony przez indukcję (np. promieniowaniem UV), która prowadzi do wycięcia profaga i przejścia w cykl lityczny', is_correct: true },
      { id: 'D', text: 'W cyklu lizogennym komórka bakteryjna ginie natychmiast, a nowe fagi infekują sąsiednie bakterie — jest to szybsza forma rozprzestrzeniania faga', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Cykl lityczny: adsorpcja → replikacja → montaż → liza (kilkadziesiąt minut). Cykl lizogenny: DNA faga integruje się jako profag → replikuje z chromosomem bakterii przez wiele pokoleń → indukcja (UV, mutageny) → wycięcie profaga → cykl lityczny. (D) błąd: w lizogennym liza NIE następuje natychmiast — komórka przeżywa jako lizogen. Fagi lizogenne mogą wnosić nowe geny do bakterii (konwersja lizogenna) — np. toksynę cholery koduje profag CTXφ.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.wir, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wirusów i ich zastosowania:',
    options: [
      { id: 'A', text: 'Fagoterapia (phage therapy) polega na stosowaniu bakteriofagów do zwalczania infekcji bakteryjnych u ludzi — jest alternatywą dla antybiotyków, szczególnie w przypadku bakterii wielolekoopornych.', is_correct: true },
      { id: 'B', text: 'Wirusy RNA, takie jak wirus grypy czy SARS-CoV-2, mają niższy wskaźnik mutacji niż wirusy DNA, ponieważ polimeraza RNA ma mechanizmy korekcji błędów (proofreading) analogiczne do polimeraz DNA.', is_correct: false },
      { id: 'C', text: 'Szczepionki oparte na mRNA (np. przeciwko SARS-CoV-2) dostarczają do komórek instrukcje do syntezy białka antygenowego, nie integrując się z DNA jądrowym komórki.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: fagoterapia to realna metoda — fagi lityczne niszczą bakterie swoiście; stosowana w Gruzji/Polsce od lat 80.; kluczowa przy Klebsiella, Pseudomonas, MRSA opornych na antybiotyki. B — Fałsz: wirusy RNA (grypa, SARS-CoV-2) MAJĄ wyższy wskaźnik mutacji niż DNA — ich polimerazy RNA (RdRp) nie mają proofreading (wyjątek: koronawirusy mają nsp14 z aktywnością korekcyjną). Wysoka zmienność = szybka ewolucja antygenowa = konieczność sezonowych szczepionek. C — Prawda: mRNA szczepionki trafia do cytoplazmy → rybosomy syntetyzują białko kolca S → odpowiedź immunologiczna; mRNA ulega degradacji w ciągu dni, nie wnika do jądra ani nie zmienia DNA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── PROKARYOTY (5) ────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.prok, question_type: 'single',
    question_text: 'Barwienie metodą Grama pozwala podzielić bakterie na Gram-dodatnie i Gram-ujemne. Podstawą tego podziału jest:',
    options: [
      { id: 'A', text: 'Obecność lub brak chloroplastów i zdolność do fotosyntezy u danej bakterii', is_correct: false },
      { id: 'B', text: 'Budowa ściany komórkowej: Gram+ mają grubą warstwę peptydoglikanu bez zewnętrznej błony lipidowej; Gram- mają cienką warstwę peptydoglikanu i dodatkową zewnętrzną błonę lipidową z LPS', is_correct: true },
      { id: 'C', text: 'Obecność lub brak wici i zdolność do aktywnego ruchu w środowisku płynnym', is_correct: false },
      { id: 'D', text: 'Zawartość par zasad G-C w DNA — bakterie z >50% G-C barwią się Gram-dodatnio', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Gram+ (np. Staphylococcus, Streptococcus): gruba warstwa peptydoglikanu (20–80 nm) → zatrzymuje fioletkowy barwnik po odbarwianiu alkoholem → fioletowe. Gram− (np. E. coli, Salmonella): cienka warstwa peptydoglikanu + zewnętrzna błona lipidowa z lipopolisacharydem (LPS = endotoksyna) → alkohol usuwa barwnik → czerwone po barwieniu safraninem. LPS jest odpowiedzialny za wstrząs septyczny. Różnica ma znaczenie kliniczne: antybiotyki beta-laktamowe działają inaczej na obie grupy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prok, question_type: 'single',
    question_text: 'Plazmidy bakteryjne to:',
    options: [
      { id: 'A', text: 'Małe, koliste, zazwyczaj dwuniciowe cząsteczki DNA zdolne do autonomicznej replikacji, niezależnie od chromosomu; często kodują geny odporności na antybiotyki lub toksyny', is_correct: true },
      { id: 'B', text: 'Fragmenty RNA pełniące funkcję regulatorów ekspresji genów, wbudowane trwale w chromosom bakterii', is_correct: false },
      { id: 'C', text: 'Struktury błonowe będące odpowiednikami mitochondriów u bakterii, miejscem fosforylacji oksydacyjnej', is_correct: false },
      { id: 'D', text: 'Rybosomy 80S obecne wyłącznie u bakterii Gram-dodatnich, niezbędne do syntezy białek', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Plazmidy: małe (1–200 kb) koliste (rzadko liniowe) dsDNA; replikują się autonomicznie. Typy: R-plazmidy (geny oporności na antybiotyki — przenoszone przez koniugację = główna droga horyzontalnego transferu oporności), plazmidy wirulencji, F-plazmidy (fertylizacyjne — kodują pilusa F, pośredniczą w koniugacji), Col-plazmidy (kodują kolicyny). Rybosomy bakterii to 70S (nie 80S). Mezosom ≈ wgłobienie błony komórkowej, pełniło rolę przypisywaną mitochondriom.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prok, question_type: 'multiple',
    question_text: 'Horyzontalny transfer genów (HGT) u prokaryotów zachodzi trzema głównymi drogami. Które stwierdzenia POPRAWNIE opisują te mechanizmy? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Transformacja — pobieranie nagiego DNA ze środowiska przez kompetentną komórkę bakteryjną i jego integracja z chromosomem lub utrzymanie jako plazmid', is_correct: true },
      { id: 'B', text: 'Transdukcja — przenoszenie DNA bakteryjnego przez bakteriofaga; fag przypadkowo pakuje DNA bakterii zamiast własnego i przenosi je do innej komórki', is_correct: true },
      { id: 'C', text: 'Koniugacja — bezpośredni kontakt komórek i transfer DNA przez pilus płciowy (F-pilus); mechanizm wymaga udziału wirusów RNA jako wektorów', is_correct: false },
      { id: 'D', text: 'HGT odgrywa kluczową rolę w rozprzestrzenianiu oporności na antybiotyki — geny oporności mogą przeskakiwać między niespokrewnionymi gatunkami bakterii', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Trzy drogi HGT: (1) transformacja — uptake nagiego DNA (Griffith 1928: odkrycie zasady transformacji); (2) transdukcja — fag jako wektor DNA; specyficzna (określony region) lub uogólniona (losowy fragment) transdukcja; (3) koniugacja — transfer plazmidu przez pilus F (mostek cytoplazmatyczny) — NIE wymaga wirusów, to bezpośredni kontakt. (C) fałsz: koniugacja nie angażuje wirusów RNA. (D) prawda: R-plazmidy z genami oporności przenoszone przez koniugację = kryzys oporności wielolekowej szpitalnych patogenów (E. coli, Klebsiella, Enterococcus).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prok, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących prokaryotów:',
    options: [
      { id: 'A', text: 'Podział binarny (binary fission) u bakterii przebiega bez wrzeciona podziałowego i bez kondensacji chromosomów w postaci typowej dla mitozy; rolę centromerów pełnią sekwencje oriC przytwierdzające DNA do błony.', is_correct: true },
      { id: 'B', text: 'Endospory bakteryjne (np. Bacillus, Clostridium) są uważane za formę rozmnażania bezpłciowego — jedna bakteria tworzy wiele endospor w celu zwiększenia liczebności populacji.', is_correct: false },
      { id: 'C', text: 'Sinice (Cyanobacteria) są prokariotami zdolnymi do oksygenicznej fotosyntezy; to właśnie ich aktywność fotosyntetyczna ok. 2,4 mld lat temu spowodowała Wielką Katastrofę Tlenową (Great Oxidation Event).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: podział binarny: replikacja DNA → segregacja chromosomów przez białka Par (MreB) wiążące DNA do błony → przewężenie błony przez białko FtsZ (tubulinopodobne) → dwie komórki potomne. Brak wrzeciona mitotycznego. B — Fałsz: endospory to forma PRZEŻYCIA (przetrwalniki), nie rozmnażania — jedna bakteria tworzy JEDNĄ endosporę; ultraodporne na ciepło, suszę, promieniowanie, detergenty. Po ustaniu stresora kiełkują z powrotem w aktywną komórkę wegetatywną. C — Prawda: sinice 2,4 mld lat temu zaczęły produkować O₂ jako produkt uboczny fotolizy wody → Great Oxidation Event → wyginięcie beztlenowców → ewolucja organizmów tlenowych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prok, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących Archaea:',
    options: [
      { id: 'A', text: 'Archaea i Bacteria to dwa domeny prokariotów, ale Archaea są filogenetycznie bliższe Eukarya niż Bacteria — dzielą z nimi podobny aparat transkrypcyjny i histony.', is_correct: true },
      { id: 'B', text: 'Błona komórkowa Archaea zbudowana jest z fosfolipidów z eterowym wiązaniem między glicerolem a węglowodorami izoprenoidowymi (nie estrowym jak u Bacteria i Eukarya).', is_correct: true },
      { id: 'C', text: 'Wszystkie Archaea to ekstremofile żyjące wyłącznie w skrajnych środowiskach: gorących źródłach, solankach lub rejonach bez tlenu — nie stwierdzono ich w typowych środowiskach życia.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: na drzewie filogenetycznym Archaea i Eukarya tworzą grupę siostrzaną; wspólne cechy: rybosomy z podobnymi białkami, czynniki transkrypcyjne TBP/TFIIB, histony (u Euryarchaeota), intron podobne sekwencje. B — Prawda: lipidy archealna — wiązania eterowe (–O–) zamiast estrowych (–COO–) + węglowodory izoprenoidowe zamiast kwasów tłuszczowych; błona bardziej stabilna termicznie; u termofilów — monolayer (tetraeterowa) zamiast bilayera. C — Fałsz: archeony znaleziono w glebie, oceanie (do 20% pikoplankton oceaniczny), jelitach zwierząt (w tym człowieka, Methanobrevibacter smithii w jelicie grubym). Nie są wyłącznie ekstremofilami.',
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
