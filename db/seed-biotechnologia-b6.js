// Seed batch 6/6 — Biotechnologia
// Sekwencjonowanie genomu (1) + Bioetyka (4)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '8abfb5fe-655a-44b2-910c-7ffe3ce744a1'

const S = {
  sekw: '9f59fca4-ceb3-4483-a3a8-0afcdfa601ee',
  bioet: '306a13c3-097a-448a-beb8-bf8d17534678',
}

const questions = [

  // ── SEKWENCJONOWANIE GENOMU (1) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.sekw, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących metody Sangera i jej znaczenia:',
    options: [
      { id: 'A', text: 'Metoda Sangera (dideoxy chain termination, 1977): synteza DNA z udziałem ddNTP (dideoksynukleotydów) pozbawionych grupy OH przy C3\' → terminacja łańcucha; rozdział elektroforetyczny fragmentów → czytanie sekwencji; metoda ta pozwoliła zsekwencjonować pierwszy kompletny ludzki chromosom.', is_correct: false },
      { id: 'B', text: 'Automatyzacja metody Sangera (ABI 3730xl): kapilarne sekwencjonowanie z fluorescencyjnymi ddNTP i detekcją laserową; podstawa HGP (Human Genome Project); stosowana do dziś w "złotym standardzie" walidacji wariantów (ok. 700–900 bp/reakcja, dokładność >99,9%).', is_correct: true },
      { id: 'C', text: 'Metoda Sangera pozwala sekwencjonować RNA bezpośrednio bez uprzedniej konwersji do cDNA; retrotranskrypcja nie jest konieczna ponieważ polimeraza DNA stosowana w metodzie Sangera odczytuje zarówno DNA jak i RNA z taką samą wydajnością.', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'A — Fałsz: Sanger zsekwencjonował: bakteriofag phi-X174 (1977, 5 386 bp — pierwszy kompletny genom organizmu); bakteriofag lambda (1982); mitochondrialny DNA człowieka (Anderson et al., 1981, 16 569 bp); chromosom ludzki (chromosom 22 — Dunham et al., Nature 1999) był sekwencjonowany automatycznym Sangerem, ale Sanger 1977 nie zsekwencjonował chromosomów — to ABI 3730xl w HGP 1990–2003. B — Prawda: ABI (Applied Biosystems) 3730xl: 96 kapilar równolegle; Big Dye terminators (fluorescencja 4 kolorów: ddA=czerwony, ddC=niebieski, ddG=żółty, ddT=zielony); HPGE (high performance polymer) → rozdzielczość 1 bp; nadal złoty standard: walidacja SNP, kliniczne Sanger po NGS. C — Fałsz: Sanger wymaga DNA; RNA → cDNA przez odwrotną transkryptazę (RT-PCR → Sanger = RT-Sanger); polimeaza Klenow lub Taq nie odczytuje RNA. Sekwencjonowanie RNA bezpośrednio: ONT direct RNA sequencing (2017, Oxford Nanopore) — ale to nie Sanger.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── BIOETYKA (4) ──────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.bioet, question_type: 'single',
    question_text: 'W 2018 roku badacz He Jiankui ogłosił narodziny dzieci z edytowanym genomem (CRISPR-Cas9, gen CCR5). Jakie były główne zastrzeżenia etyczne wobec tego eksperymentu?',
    options: [
      { id: 'A', text: 'Edycja linii zarodkowej (germline editing) jest dziedziczona przez wszystkie potomne pokolenia; dzieci nie mogły wyrazić zgody; metoda nie była wystarczająco bezpieczna (mozaicyzm, off-target); brak pilnej potrzeby medycznej (HIV nie jest wskazaniem dla germline editing); naruszenie deklaracji międzynarodowych', is_correct: true },
      { id: 'B', text: 'Jedynym problemem etycznym była kwestia praw autorskich do technologii CRISPR; Jennifer Doudna i Emmanuelle Charpentier wniosły pozew o naruszenie patentu; poza kwestiami własności intelektualnej eksperyment był całkowicie akceptowalny etycznie', is_correct: false },
      { id: 'C', text: 'Badacze nie mieli zastrzeżeń do metody CRISPR ani do edycji zarodkowej; jedynym problemem była nieodpowiednia dokumentacja laboratoryjna; He Jiankui otrzymał nagrodę i finansowanie za pionierskie badania', is_correct: false },
      { id: 'D', text: 'Edycja genów u dzieci jest dopuszczalna w każdym kraju, gdy rodzice wyrażają pisemną zgodę; nie istnieje żadna regulacja międzynarodowa ograniczająca germline editing; He Jiankui działał zgodnie z chińskim i międzynarodowym prawem', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'He Jiankui (Shenzhen, 2018): edycja CCR5 (koreceptor HIV) w zarodkach → Lulu i Nana (imiona nadane przez He); cel: oporność na HIV. Zastrzeżenia: (1) GERMLINE EDITING: zmiany dziedziczone przez wszystkich potomków — bez zgody przyszłych pokoleń; (2) BRAK ZGODY: niemowlęta nie mogły wyrazić zgody na eksperyment (Deklaracja Helsińska); (3) BEZPIECZEŃSTWO: mozaicyzm (nie wszystkie komórki edytowane); off-target (niezamierzone cięcia); heterozygotyczna delecja CCR5 ≠ pełna ochrona; (4) ALTERNATYWY: PrEP (profilaktyka HIV) bezpieczniejsza i skuteczna; IVF + diagnoza preimplantacyjna wystarczyłyby; (5) REGULACJE: He naruszył chińskie prawo; skazany na 3 lata więzienia 2019; WHO i NAS wezwały do moratorium; 2023 International Commission: tylko w wyjątkowych okolicznościach z rygorystycznym nadzorem.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bioet, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują dylematy etyczne w biotechnologii? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Prywatność genomowa: komercyjne bazy danych (23andMe, AncestryDNA) gromadzą dane genetyczne milionów osób; dane mogą być udostępniane ubezpieczycielom lub pracodawcom (w USA GINA chroni przed dyskryminacją genetyczną, ale ma ograniczenia); ryzyko re-identyfikacji anonimowych danych', is_correct: true },
      { id: 'B', text: 'Biobezpieczeństwo i dual-use research: wiedza biotechnologiczna może być użyta do celów destrukcyjnych (bioterroryzm); synteza patogenów (np. rekonstrukcja wirusa 1918 influenza, polio synteza de novo przez Eckard Wimmer 2002); NSABB (National Science Advisory Board for Biosecurity) nadzoruje badania dual-use', is_correct: true },
      { id: 'C', text: 'Patentowanie organizmów modyfikowanych genetycznie: decyzja US Supreme Court Diamond v. Chakrabarty (1980) dopuściła patentowanie żywych organizmów (bakteria Pseudomonas rozkładająca ropę); od tego czasu patentuje się mikroorganizmy, rośliny GMO, sekwencje DNA; izolowane geny ludzkie (BRCA) pierwotnie patentowane, a Supreme Court Myriad (2013) unieważniła patenty na naturalne sekwencje DNA', is_correct: true },
      { id: 'D', text: 'Bioetyka nie ma praktycznego znaczenia — decyzje biotechnologiczne podejmuje wyłącznie rząd bez konsultacji z etykami, pacjentami ani społeczeństwem; komisje bioetyczne w żadnym kraju nie mają wpływu na regulacje prawne dotyczące GMO, klonowania ani edycji genomu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) genomowa prywatność: GINA (Genetic Information Nondiscrimination Act, USA 2008) chroni przed dyskryminacją w zatrudnieniu i ubezpieczeniach zdrowotnych ALE nie ubezpieczeń na życie ani długoterminowej opieki; 23andMe 2023: sprzedaż danych 23 mln użytkowników po bankructwie (kontrowersje); identyfikacja sprawcy z partial DNA match (Golden State Killer 2018, GEDmatch). (B) dual-use: Baric lab (UNC) 2015: chimaeryczny bat-coronavirus infekujący ludzkie komórki → kontrowersje; CRISPR: obniżenie progu syntezy patogenów; konwencja o broni biologicznej BWC 1972 (nie ma mechanizmu weryfikacji); NSABB 2011-2012: kontrola publikacji H5N1 (ferret transmission badania Ron Fouchier i Yoshihiro Kawaoka). (C) Diamond v. Chakrabarty: Ananda Chakrabarty (GE) → Pseudomonas capacia zdolna do rozkładu ropy (4 plazmidy); 5-4 US SC: "anything under the sun made by man" patentowalne; od 2013 Myriad: sekwencje DNA naturalne nie patentowalne; ale cDNA (syntetyczny) patentowalna → diagnostyka BRCA1/2 (Myriad Genetics). (D) fałsz: EGE (European Group on Ethics in Science and New Technologies), Bioethics Committee UNESCO, nuffield Council on Bioethics: wpływają na regulacje EU GMO, moratoria na klonowanie, politykę CRISPR; Polska: Komitet Bioetyki PAN.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bioet, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących klonowania organizmów i komórek macierzystych:',
    options: [
      { id: 'A', text: 'Klonowanie reprodukcyjne ssaków (SCNT — somatic cell nuclear transfer): metoda użyta do klonowania owcy Dolly (1996, Ian Wilmut, Roslin Institute); jądro komórki somatycznej dawcy wprowadza się do enukleowanego oocytu → stymulacja elektryczna → embrion → transfer do macicy zastępczej; klonowanie reprodukcyjne człowieka jest zabronione na mocy regulacji w Polsce i większości krajów świata.', is_correct: true },
      { id: 'B', text: 'Terapeutyczne klonowanie (SCNT dla celów medycznych): tworzy się blastocystę (5–6 dni) → izolacja wewnętrznej masy komórkowej (ICM) → embrioidalne komórki macierzyste ES dopasowane do pacjenta; zniszczenie blastocysty jest kontrowersyjne etycznie; zastąpione częściowo przez iPSC (indukowane pluripotencjalne komórki macierzyste, Yamanaka 2006), które nie wymagają zarodka.', is_correct: true },
      { id: 'C', text: 'Komórki macierzyste embrionalne (hESC) są identyczne z komórkami macierzystymi dorosłego (adult stem cells, ASC) pod względem pluripotencji; hESC mogą różnicować się jedynie w trzy typy komórek, podczas gdy ASC różnicują się we wszystkie typy tkankowe ciała dorosłego człowieka.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Dolly (1996, zaanonsowana 1997): 277 prób → 1 żywy klon; SCNT: cumulus cell Ian Wilmuta → enukleowany oocyt Blackface owcy; kopia od Finn Dorset owcy; żyła 6,5 roku (skrócone telomery?); po Dolly: Polly (z transgenem), CC (copycat kot, 2001), Idaho Gem (muł, 2003), Prometea (koń, 2003), Snuppy (pies, 2005, Hwang Woo-suk); klonowanie człowieka: zakazane (Polska: ustawa o działalności leczniczej; Oviedo Convention 1997). B — Prawda: SCNT terapeutyczne: Hwang Woo-suk 2004/2005 (fałszerstwo → cofa postęp); Mitalipov (OHSU, 2013): pierwsze prawdziwe hSCNT-ESC; Yamanaka 2006 (Nobel 2012): Oct4+Sox2+Klf4+c-Myc → fibroblasty → iPSC (pluripotent); obejście problemu etycznego (brak zarodka); wyzwanie: aberracje epigenetyczne i onkogenność (c-Myc). C — Fałsz: hESC = PLURIPOTENTNE (3 listki zarodkowe: ektoderm, mezoderm, endoderm) = ~200 typów komórek; ASC = MULTIPOTENTNE (ograniczone do tkanek swojej linii): HSC (hematopoetyczne, BM) → linie krwi; MSC (mezenchymalne) → kości, chrząstka, tłuszcz; NSC (nerwowe) → neurony, astrocyty; ODWROTNIE niż stwierdzenie C: pluripotencja = ESC > ASC (multipotent lub unipotent).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bioet, question_type: 'single',
    question_text: 'Organizmy modyfikowane genetycznie (GMO) budzą kontrowersje społeczne i etyczne. Które stwierdzenie POPRAWNIE podsumowuje naukowy konsensus i etyczne ramy dyskusji o GMO?',
    options: [
      { id: 'A', text: 'Naukowy konsensus (WHO, NAS, EFSA, PAN): dopuszczone na rynek GMO nie wykazują ryzyka dla zdrowia ludzkiego wyższego niż konwencjonalne odmiany; etyczne dylematy dotyczą: własności intelektualnej (patenty nasion, firma Monsanto/Bayer), bioróżnorodności, niezamierzonego krzyżowania z dzikimi krewnymi i "terminator genes" (GURT)', is_correct: true },
      { id: 'B', text: 'Wszystkie organizacje naukowe na świecie (WHO, NAS, EFSA) zakazały GMO jako niebezpiecznych dla zdrowia; badania wykazały 100% związek między spożyciem GMO a nowotworami; zakaz GMO jest obligatoryjny we wszystkich krajach Unii Europejskiej', is_correct: false },
      { id: 'C', text: 'Etyczne zastrzeżenia wobec GMO dotyczą wyłącznie smaku i wyglądu produktów; aspekty środowiskowe, społeczne ani ekonomiczne nie są przedmiotem debaty bioetycznej; komitet ONZ ds. GMO ogłosił, że wszystkie GMO są identyczne ze swoimi konwencjonalnymi odpowiednikami', is_correct: false },
      { id: 'D', text: 'GMO są bez wyjątku zabronione w rolnictwie ekologicznym we wszystkich krajach; żadne badanie naukowe nie wykazało korzyści z upraw GMO dla producentów ani środowiska; złoty ryż (Golden Rice) nie zawiera beta-karotenu mimo 30 lat badań', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Naukowy konsensus: American Medical Association (AMA), National Academy of Sciences (NAS 2016 raport: 900 badań), WHO, EFSA, Royal Society: brak dowodów na zagrożenie zdrowia obecnych GMO zatwierdzone przez organy regulacyjne. Etyczne i społeczne aspekty: (1) WŁASNOŚĆ INTELEKTUALNA: patenty na nasiona (Monsanto/Bayer: herbicydoodporny soja Roundup Ready); zakaz "oszczędzania nasion" przez rolników → uzależnienie ekonomiczne krajów rozwijających się; (2) BIORÓŻNORODNOŚĆ: monokultura → podatność na patogeny; geny herbicydoodporności mogą przechodzić do chwastów (superchwasty); GMO vs. konwencjonalna różnorodność; (3) GURT (Genetic Use Restriction Technology = "terminator genes"): nasiona sterylne po pierwszym pokoleniu → rolnicy muszą kupować rocznie; moratoria CBD (Convention on Biological Diversity); (4) GOLDEN RICE: ryż z genem psy (phytoene synthase) i CrtI → beta-karoten w endospermie (prowitamina A); kontroversy: Greenpeace vs. IRRI; zatwierdzony: Bangladesh 2021, Filipiny 2021 (GroGolden Rice IR); uzasadnienie humanitarne (VAD= vitamin A deficiency: 250 000 dzieci/rok traci wzrok).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: {
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => {
      let r = ''; res.on('data', c => r += c)
      res.on('end', () => resolve({ status: res.statusCode, body: r }))
    })
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
