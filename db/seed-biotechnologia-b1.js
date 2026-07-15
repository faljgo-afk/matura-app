// Seed batch 1/6 — Biotechnologia
// Inżynieria genetyczna (8) + PCR i elektroforeza (2)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '8abfb5fe-655a-44b2-910c-7ffe3ce744a1'

const S = {
  inz: '31834ef0-8ae2-4ced-806f-014e54b7dd1d',
  pcr: 'e2a9978b-d943-439a-abc7-f411778757c1',
}

const questions = [

  // ── INŻYNIERIA GENETYCZNA (8) ─────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.inz, question_type: 'single',
    question_text: 'Enzymy restrykcyjne (restryktazy) są kluczowym narzędziem inżynierii genetycznej. Które stwierdzenie POPRAWNIE opisuje ich działanie?',
    options: [
      { id: 'A', text: 'Restryktazy rozpoznają krótkie palindromowe sekwencje DNA (4–8 par zasad) i przecinają obie nici w określonym miejscu; cięcie może dawać lepkie końce (kohezywne, z 5\' lub 3\' nawisem) lub tępe końce (blunt ends)', is_correct: true },
      { id: 'B', text: 'Restryktazy to enzymy wyizolowane wyłącznie z ludzkich komórek odpornościowych; przecinają DNA w losowych miejscach i nie rozpoznają specyficznych sekwencji', is_correct: false },
      { id: 'C', text: 'Restryktazy rozcinają wyłącznie RNA; nie działają na DNA i są stosowane do cięcia matrycy RNA przy syntezie cDNA', is_correct: false },
      { id: 'D', text: 'Enzymy restrykcyjne tworzą nowe wiązania fosfodiestrowe między fragmentami DNA różnych organizmów; zastępują funkcję ligazy DNA w łączeniu fragmentów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Enzymy restrykcyjne (restryktazy, nukleazy restrykcyjne): izolowane z bakterii jako element systemu restrykcja-modyfikacja (ochrona przed obcym DNA). Typy: II — najczęściej stosowane w biotechnologii; rozpoznają palindromowe sekwencje (np. EcoRI: GAATTC, BamHI: GGATCC); cięcie daje: (1) lepkie końce 5\' (EcoRI, HindIII) — kilka nukleotydów jednoniciowego nawisu; (2) lepkie końce 3\' (KpnI, SacI); (3) tępe końce (SmaI, EcoRV). Lepkie końce ułatwiają ligację komplementarnych fragmentów. Litera w nazwie = gatunek (Eco = E. coli, Bam = Bacillus amyloliquefaciens, Hind = Haemophilus influenzae Rd).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.inz, question_type: 'single',
    question_text: 'Wektory plazmidowe są narzędziami do transferu genów w inżynierii genetycznej. Które elementy są NIEZBĘDNE w plazmidzie stosowanym jako wektor klonujący?',
    options: [
      { id: 'A', text: 'Miejsce początku replikacji (ori) zapewniające niezależną replikację w komórce gospodarza, gen selekcyjny (np. oporność na antybiotyk) do selekcji transformantów oraz miejsce wielokrotnego klonowania (MCS) z sekwencjami rozpoznawanymi przez restryktazy', is_correct: true },
      { id: 'B', text: 'Gen kodujący histony do pakowania obcego DNA w chromatynę wewnątrz plazmidu, sekwencja sygnałowa kierująca plazmid do jądra komórkowego oraz gen fotosyntezy jako marker selekcyjny', is_correct: false },
      { id: 'C', text: 'Wyłącznie miejsce początku replikacji; gen selekcyjny i MCS są opcjonalne i stosowane tylko w badaniach naukowych, nie w komercyjnej biotechnologii', is_correct: false },
      { id: 'D', text: 'Telomery na obu końcach plazmidu (liniowego), centromer dla prawidłowego podziału podczas mitozy i sekwencja LTR do integracji z chromosomem gospodarza', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Plazmid jako wektor klonujący (kloning molekularny): (1) ori (origin of replication): sekwencja zapewniająca replikację plazmidu autonomicznie od chromosomu; określa liczbę kopii; (2) gen selekcyjny: opornościowy (ampicylina, kanamycyna, tetracyklina) lub reporter (GFP, lacZ); pozwala odróżnić komórki które przyjęły plazmid; (3) MCS (multiple cloning site, polylinker): skupisko różnych miejsc restrykcyjnych → możliwość cięcia wieloma restryktazami. Popularne wektory: pUC19 (niebieski/biały screening z lacZ), pBR322 (historyczny), pGEX (ekspresyjny z GST-tag). Transformacja: wstrzyknięcie plazmidu do bakterii E. coli przez elektroporację lub CaCl₂/heat shock.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.inz, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują proces tworzenia rekombinowanego DNA (rDNA)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Gen docelowy i wektor plazmidowy są cięte tą samą restryktazą (lub kompatybilnymi) → powstają komplementarne lepkie końce → ligaza DNA (DNA ligase) łączy fragmenty kowalencyjnymi wiązaniami fosfodiestrowymi', is_correct: true },
      { id: 'B', text: 'DNA ligaza T4 (z faga T4) łączy fragmenty DNA przez tworzenie wiązań 3\'OH-5\'P (fosfodiestrowych) między komplementarnymi końcami; wymaga ATP jako kofaktora energetycznego', is_correct: true },
      { id: 'C', text: 'Przy tworzeniu rDNA można stosować adaptory (krótkie oligonukleotydy z miejscami restrykcyjnymi) do łączenia tępych końców z lepkimi; pozwala to na klonowanie dowolnych fragmentów DNA', is_correct: true },
      { id: 'D', text: 'Ligaza DNA łączy fragmenty RNA z DNA bezpośrednio bez żadnego trawienia restryktazami; jest to podstawowy mechanizm stosowany we wszystkich technikach klonowania molekularnego', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) klasyczne klonowanie: restryktaza → lepkie końce → ligacja; albo: blunt-end ligation (mniej efektywna); (B) ligaza T4: 3\'OH + 5\'P → wiązanie fosfodiesterowe + NAD⁺ lub ATP zależnie od organizmu źródłowego; (C) adaptory/linkerzy: pozwalają łączyć fragmenty niezgodne końcami; np. dTailing (poly-dT) + dATailing do klonowania PCR-produktów tępych końców (T/A cloning); (D) fałsz: ligazy działają na DNA-DNA lub RNA-RNA (RNA-ligaza T4); do klonowania zwykle cięcie restryktazami jest wymagane dla efektywnych końców, choć można klonować tępe końce.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.inz, question_type: 'single',
    question_text: 'CRISPR-Cas9 to nowoczesna technologia edycji genomu. Na czym polega mechanizm działania tego systemu?',
    options: [
      { id: 'A', text: 'Białko Cas9 (nukleaza) jest kierowane do specyficznej sekwencji DNA przez gRNA (guide RNA, ~20 nt komplementarnych do docelowego DNA); Cas9 tnie obie nici DNA w miejscu komplementarnym do gRNA (wymagane sekwencja PAM: NGG u S. pyogenes); naprawa przez NHEJ (insercje/delecje) lub HDR (naprawa przez matrycę)', is_correct: true },
      { id: 'B', text: 'Cas9 to enzym transkryptazy odwrotnej który przepisuje gRNA na DNA; wstawia gen do chromosomu w losowych miejscach bez żadnej specyficzności sekwencji; stosowany wyłącznie do insercji, nie cięcia DNA', is_correct: false },
      { id: 'C', text: 'System CRISPR działa wyłącznie w komórkach prokariotycznych; nie może być zastosowany do edycji genomów eukariotycznych (zwierząt, roślin, grzybów) z powodu odmiennej struktury chromatyny', is_correct: false },
      { id: 'D', text: 'gRNA rozpoznaje białka histonowe i kieruje Cas9 do acetylowanych nukleosomów; cięcie następuje losowo w aktywnych chromatynowo regionach; specyficzność sekwencji DNA nie jest wymagana', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'CRISPR-Cas9 (Clustered Regularly Interspaced Short Palindromic Repeats): (1) gRNA = crRNA (spacer 20 nt) + tracrRNA; forma skrócona: sgRNA (single guide RNA); (2) sgRNA:Cas9 → skanowanie DNA → PAM (Protospacer Adjacent Motif, NGG) → hybridyzacja 20 nt → otwarcie nici → cięcie obu nici przez dwa domeny nukleazowe: RuvC (nic niekomplem.) i HNH (nic komplem.) → DSB (Double-Strand Break); (3) naprawa: NHEJ (Non-Homologous End Joining): niedokładna → insercje/delecje → knockout; HDR (Homology-Directed Repair): dokładna z matrycą → knock-in; (4) zastosowania: leczenie anemii sierpowatej, genetyczne uprawy, badania podstawowe. Nagroda Nobla 2020: Doudna & Charpentier.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.inz, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transferu genów do komórek:',
    options: [
      { id: 'A', text: 'Transformacja bakterii (np. E. coli) polega na wchłanianiu obcego DNA (plazmidu lub chromosomu) przez komórkę bakteryjną; można ją wywołać przez traktowanie CaCl₂ i szok termiczny (42°C) lub przez elektroporację (krótki impuls elektryczny).', is_correct: true },
      { id: 'B', text: 'Transfekcja to przenoszenie obcego DNA do komórek eukariotycznych; metody: tranfekcja liposomalna (liposomy otaczają DNA i łączą się z błoną), elektroporacja, biolistyka (gene gun — kuleczki złota powleczone DNA), wektory wirusowe (retrowirusy, adenowirusy, AAV).', is_correct: true },
      { id: 'C', text: 'Plazmid Ti z bakterii Agrobacterium tumefaciens jest naturalnym wektorem transferu DNA do komórek roślinnych; fragment T-DNA z plazmidu Ti jest wbudowywany losowo do chromosomu rośliny; stanowi podstawę większości metod transformacji roślin.', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: naturalna kompetencja (niektóre bakterie jak Bacillus, Streptococcus); indukowana: CaCl₂ tworzy kompleksy z DNA i błoną → heat shock 42°C przez 30-90s → wejście DNA; elektroporacja: 1–2,5 kV/cm przez ms → pory w błonie → wejście DNA. B — Prawda: transfekcja = proces u eukaryotów; liposomy kationowe (np. Lipofectamine): DNA-liposom fusuje z błoną → endocytoza; gene gun: Helium-napędzane złote kuleczki (0,6-1 µm) powleczone DNA → przebijają ścianę komórkową; wektory: retrowiriry (stała integracja), AAV (adeno-associated virus: bezpieczne, kliniczne). C — Prawda: A. tumefaciens: naturalny pathogen powodujący galasówki (crown gall); Ti plasmid: T-DNA (transferred DNA, ~20 kb) → integracja do chromosomu rośliny; Vir geny wykonują transfer; w biotechnologii: T-DNA pozbawione onkogenów + wprowadzony gen docelowy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.inz, question_type: 'single',
    question_text: 'cDNA (complementary DNA) jest często stosowane w inżynierii genetycznej zamiast genomowego DNA. Dlaczego?',
    options: [
      { id: 'A', text: 'cDNA syntezowane jest przez odwrotną transkryptazę z mRNA → nie zawiera intronów; komórki prokariotyczne (bakterie) nie mają aparatu splicingowego i nie mogą usuwać intronów z pre-mRNA — dlatego cDNA jest wymagane do ekspresji genów eukariotycznych w bakteriach', is_correct: true },
      { id: 'B', text: 'cDNA jest stabilniejsze niż genomowe DNA ponieważ jest jednoniciowe i odporne na dnaze; genomowe DNA jest zbyt niestabilne w temperaturze pokojowej do zastosowania w klonowaniu', is_correct: false },
      { id: 'C', text: 'cDNA zawiera wszystkie introny i eksony w postaci jednoniciowej; jest identyczne z genomowym DNA oprócz braku nukleotydów modyfikowanych (metylocytozyna)', is_correct: false },
      { id: 'D', text: 'cDNA stosuje się wyłącznie w diagnostyce wirusów RNA (HIV, SARS-CoV-2); nie ma zastosowania przy klonowaniu białek terapeutycznych w systemach ekspresji prokariotycznej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'cDNA (complementary DNA): synteza: mRNA (dojrzały, po splicingu) + odwrotna transkryptaza (RT, RNA-dependent DNA polymerase) + primer (oligo-dT lub losowy) → jednoniciowy cDNA; następnie: RNaza H usuwa mRNA + polimeraza DNA syntetyzuje drugą nić → dwuniciowy cDNA. Dlaczego cDNA ≠ gen genomowy: (1) brak intronów (splicing eukariotyczny; bakterie nie mają spliceosomów → nie mogą usunąć intronów); (2) brak długich niekodujących regionów międzygenowych; (3) kopia mRNA = sekwencja kodująca białko. Zastosowania: biblioteka cDNA (cDNA library) = kolekcja cDNA z danego tkanki/warunki; ekspresja białek eukariotycznych w E. coli (insulina, hormon wzrostu, erytropoetyna); RT-PCR: mRNA → cDNA → amplifikacja PCR.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.inz, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują techniki ekspresji rekombinowanych białek? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Systemy ekspresji prokariotycznej (E. coli): szybkie i tanie; wady — brak obróbki potranslacyjnej (N-glikozylacja, GPI-kotwice); białka eukariotyczne mogą tworzyć ciałka wtrętowe (inclusion bodies) wymagające renaturacji', is_correct: true },
      { id: 'B', text: 'Systemy ekspresji eukariotycznej (drożdże Saccharomyces, Pichia; komórki owadzie CHO; komórki ssacze CHO, HEK293) zachowują obróbkę potranslacyjną i wydzielanie; stosowane dla białek terapeutycznych (przeciwciała, czynniki krzepnięcia)', is_correct: true },
      { id: 'C', text: 'Tagi oczyszczania (His-tag 6×His, GST-tag, FLAG-tag) dodawane do N- lub C-końca białka umożliwiają jego oczyszczanie przez chromatografię powinowactwa (Ni²⁺-NTA dla His-tag, kolumna glutationowa dla GST)', is_correct: true },
      { id: 'D', text: 'Każde białko eukariotyczne może być produkowane w E. coli bez żadnych modyfikacji sekwencji; E. coli zawiera wszystkie enzymy potrzebne do prawidłowego fałdowania, glikozylacji i wydzielania białek eukariotycznych', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) E. coli: ekspresja łatwa, tania, szybka; problem: wiele białek eukariotycznych wymaga glikozylacji (IgG, EPO), formowania mostków siarczkowych w ER; białka hydrofobowe → inclusion bodies → solubilizacja mocznikiem + renaturacja; rozwiązania: periplazma, chaperoniny. (B) CHO (Chinese Hamster Ovary): standard przemysłowy dla MAbs (monoclonal antibodies): >60% biofarmaceutyków produkowanych w CHO; Pichia pastoris: wydzielanie białek + N-glikozylacja (inne wzorce niż ssacze). (C) chromatografia powinowactwa: Ni²⁺-NTA resin wiąże His-tag (imidazol eluuje); kolumna GST-Glutathion Sepharose; tag może być odcinany przez specyficzną proteinazę (TEV, thrombin, factor Xa). (D) fałsz: E. coli nie ma ER, Golgiego, glikozylotransferaz N-glikozylacji; brak dyulfid izomerazy ER; nie wydziela białek do medium (wymagana sekcja sygnałowa do peryplazmy).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.inz, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących inżynierii genetycznej:',
    options: [
      { id: 'A', text: 'RNA interference (RNAi): krótkie dwuniciowe RNA (siRNA, ~21 nt) wbudowuje się w kompleks RISC (RNA-induced silencing complex) → komplementarny mRNA jest cięty lub jego translacja blokowana → wyciszenie ekspresji genu (gene silencing).', is_correct: true },
      { id: 'B', text: 'Knockout genu (KO) to usunięcie lub inaktywacja określonego genu w organizmie; techniki: CRISPR-Cas9, TALENy, ZFN; myszy KO są standardowym modelem badań funkcji genów in vivo.', is_correct: true },
      { id: 'C', text: 'Wektory retrowirusowe do terapii genowej integrują się losowo w dowolnym miejscu genomu bez żadnych preferencji sekwencji; integracja do onkogenów jest niemożliwa i nie stanowi ryzyka dla pacjenta.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: odkrycie RNAi: Fire & Mello 1998 (Nobel 2006); mechanizm: dsRNA → Dicer (nukleaza) → siRNA 21-23 nt → RISC (Argonaute-2 jako białko efektorowe) → cięcie mRNA (slicer activity) lub translacyjna represja; zastosowania: badania funkcji genów (biblioteki siRNA), leki (patisiran = siRNA przeciw TTR dla amyloidozy). B — Prawda: myszy KO: Capecchi, Evans, Smithies 1989 (Nobel 2007); homologiczna rekombinacja w ES cells → chimeryczne myszy → breeding → homozygotyczny KO; CRISPR: szybsze, stosowane u różnych organizmów. C — Fałsz: retrowirusy (γ-retrowirusy jak MLV) preferują aktywnie transkrybowane regiony i okolice TSS → ryzyko insercji do onkogenów (insertional mutagenesis); incydent SCID-X1 (2002): 3 z 20 pacjentów rozwinęło białaczkę po terapii retrowirusowej; lentiwirusy (HIV-pochodne): integracja w genach, ale z innymi preferencjami; AAV: episomalna, bez integracji (bezpieczniejsza).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── PCR I ELEKTROFOREZA (2) ───────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.pcr, question_type: 'single',
    question_text: 'Reakcja PCR (Polymerase Chain Reaction) amplifikuje określony fragment DNA. Wskaż prawidłową kolejność etapów jednego cyklu PCR:',
    options: [
      { id: 'A', text: 'Denaturacja (~95°C: rozdzielenie nici DNA) → przyłączanie primerów (annealing, ~50–65°C: startery hybrydyzują do komplementarnych nici) → elongacja (~72°C: Taq polimeraza syntetyzuje nową nić od 3\' do 5\' primeru)', is_correct: true },
      { id: 'B', text: 'Elongacja (~72°C) → annealing (~55°C) → denaturacja (~95°C); każdy cykl zaczyna się syntezą DNA, potem przyłączaniem primerów, a kończy rozdziałem nici', is_correct: false },
      { id: 'C', text: 'Annealing (~55°C) → denaturacja (~95°C) → elongacja (~72°C); startery przyłączają się do dwuniciowego DNA, potem termiczne rozdzielenie, potem synteza', is_correct: false },
      { id: 'D', text: 'Denaturacja (~95°C) → elongacja (~72°C) → annealing (~55°C); po rozdzieleniu nici następuje synteza bez primerów, a dopiero po syntezie przyłączają się startery', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PCR (Mullis 1983, Nobel 1993): cykl: (1) DENATURACJA: 94–98°C, 15–30 s → zerwanie wiązań wodorowych między zasadami → jednoniciowe matryce; (2) ANNEALING (przyłączanie primerów): 50–65°C, 20–60 s → startery (2 oligonukleotydy ~18–25 nt) hybrydyzują do komplementarnych miejsc na matrycy; Tm (temperatura topnienia) primerów ≈ Ta + 5°C; (3) ELONGACJA: 72°C (optimum Taq polimerazy, z Thermus aquaticus), ~1 min/kb → synteza od 3\'OH primeru w kierunku 5\' → 3\'; po n cyklach: 2ⁿ kopii; standardowo 25–35 cykli → miliardy kopii z pojedynczej kopii matrycy.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.pcr, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują zastosowania i warianty PCR? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'RT-PCR (Reverse Transcription PCR): odwrotna transkryptaza przepisuje mRNA → cDNA → amplifikacja przez PCR; stosowana do wykrywania i kwantyfikacji mRNA (np. diagnoza wirusów RNA: SARS-CoV-2, HIV)', is_correct: true },
      { id: 'B', text: 'Real-time PCR (qPCR): fluorescencja (SYBR Green wiążący dsDNA lub sonda TaqMan z fluoroforem i wygaszaczem) mierzona po każdym cyklu; ilość amplifikatu proporcjonalna do fluorescencji; umożliwia kwantyfikację DNA/RNA', is_correct: true },
      { id: 'C', text: 'Nested PCR: dwie serie PCR z zewnętrzną parą primerów (pierwsza amplifikacja), następnie wewnętrzną parą (druga amplifikacja wewnątrz produktu pierwszej); zwiększa specyficzność i czułość diagnostyczną', is_correct: true },
      { id: 'D', text: 'PCR może amplifikować wyłącznie fragmenty RNA; DNA jest zbyt stabilne chemicznie aby ulec denaturacji przy 95°C; dlatego odwrotna transkryptaza musi przekonwertować genomowe DNA do RNA przed PCR', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) RT-PCR: rt = reverse transcription; kluczowa w diagnostyce wirusów RNA (COVID-19: wymaz nosowo-gardłowy → ekstrakcja RNA → RT-qPCR). (B) qPCR: SYBR Green I: interkaluje w dsDNA → fluorescencja; niespecyficzny (amplifikuje wszystkie produkty); TaqMan: sonda 5\'→3\' przyłączona do matryce między primerami z fluoroforem (FAM) + wygaszaczem (TAMRA) → Taq polimeraza degraduje sondę 5\'→3\' egzonukleazą → fluorofor uwolniony → sygnał; specyficzny. Ct (threshold cycle) koreluje z ilością matrycy. (C) nested PCR: diagnostyka TB (Mycobacterium tuberculosis), leiszmanioza; produkt ~500 bp → 2. PCR wewnątrz → ~200 bp; redukcja tła niespecyficznego. (D) fałsz: PCR amplifikuje DNA; odwrotna transkryptaza konwertuje RNA → DNA (RT-PCR), nie odwrotnie; DNA denaturuje doskonale przy 95°C (zerwanie wiązań wodorowych).',
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
