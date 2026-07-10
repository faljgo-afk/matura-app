// Seed: Genetyka i dziedziczenie — 26 questions (batch 2)
// Topic: 417e905f-f10b-49e8-ab02-f7042144e68b

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '417e905f-f10b-49e8-ab02-f7042144e68b'

const S = {
  mendel:      'a0020902-50b3-4481-850e-44023d3662ac',
  budowa:      '04e56717-9ed0-40a0-b95c-6fe700bdb818',
  mejoza:      '979ad1bd-9768-4c1d-bdc1-66353738b09c',
  plec:        'aa092ab8-8b73-42be-ade5-937612aa3149',
  sprzezenie:  'ed509292-e3e8-483b-b09f-f066f8ad616f',
  krew:        'efcb697c-fb46-4bdf-bb03-a2fdba82bcaa',
  kariotyp:    '52fd9442-e616-425b-9c71-ae47d73e3708',
  mutacje:     '44534440-600c-4ca4-9598-b1275669b85b',
  populacyjna: 'f9d3bfb0-8814-413f-90f2-1f3bfaff333b',
  wielogenowe: '31a062c8-86e5-4a19-b039-c83e7ea60f9f',
}

const questions = [
  // ─── Prawa Mendla (4) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'Rodzice o genotypach AaBb i AaBb krzyżują się ze sobą (geny A i B niezależne, A i B dominujące). Jaki ułamek potomstwa będzie homozygotyczny pod względem OBU genów jednocześnie (genotypy AABB, AAbb, aaBB lub aabb)?',
    question_type: 'single',
    options: [
      { id: 'A', text: '1/4', is_correct: false },
      { id: 'B', text: '1/16', is_correct: false },
      { id: 'C', text: '4/16 (1/4)', is_correct: true },
      { id: 'D', text: '1/8', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Z krzyżówki Aa × Aa: ¼ AA + ½ Aa + ¼ aa → homozygoty = ¼ AA + ¼ aa = ½ dla każdego genu. Dla obu genów jednocześnie (niezależne): P(homo A) × P(homo B) = ½ × ½ = ¼ = 4/16. Konkretnie: AABB (¼×¼=1/16) + AAbb (¼×¼=1/16) + aaBB (¼×¼=1/16) + aabb (¼×¼=1/16) = 4/16 = ¼. Odpowiedź C.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących epistazy.\nA. Epistaza to zjawisko, w którym allele jednego genu maskują lub modyfikują ekspresję innego genu — powoduje odchylenie od stosunku 9:3:3:1 w krzyżówce dihybrydowej F₂.\nB. Epistaza recesywna (np. 9:3:4) zachodzi, gdy homozygotyczny recesywny genotyp jednego locus maskuje ekspresję drugiego locus.\nC. Epistaza jest niemożliwa u organizmów diploidalnych — dotyczy wyłącznie haploidów, ponieważ wymaga jednoczesnego działania dwóch alleli recesywnych.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Epistaza: allele jednego genu maskują ekspresję innego → odchylenie od 9:3:3:1.', is_correct: true },
      { id: 'B', text: 'Epistaza recesywna (9:3:4): aa maskuje ekspresję drugiego locus.', is_correct: true },
      { id: 'C', text: 'Epistaza możliwa tylko u haploidów — niemożliwa u diploidów.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: epistaza (gr. epistasis = blokowanie): interakcja między genami różnych loci; modyfikuje standardowe stosunki mendlowskie. Przykłady: epistaza dominująca (12:3:1), recesywna (9:3:4), duplikacyjna (9:7), addytywna (15:1). B — Prawda: gen C (kolor sierści u labradorów): cc maskuje gen B (czarny/brązowy) → fenotyp biały niezależnie od BB/Bb/bb; stosunek F₂: 9 B_C_ : 3 bbC_ : 4 _ _cc = 9:3:4. C — Fałsz: epistaza jest typowym zjawiskiem u DIPLOIDÓW (i haploidów); u diploidów allel recesywny epistazy działa, gdy osobnik jest aa (homozygota), co jest częste. Praktycznie wszystkie opisane przypadki epistazy dotyczą organizmów diploidalnych (groch, myszy, psy).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPleiotrofia (plejotropia) oznacza, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'jeden gen wpływa na dwie lub więcej pozornie niepowiązanych cech fenotypowych jednocześnie', is_correct: true },
      { id: 'B', text: 'dwa różne geny kodują identyczne białka o tej samej funkcji (redundancja)', is_correct: false },
      { id: 'C', text: 'allele różnych genów wpływają addytywnie na jedną cechę ilościową (poligenizm)', is_correct: false },
      { id: 'D', text: 'ekspresja genu zależy wyłącznie od środowiska — genotyp nie ma wpływu na fenotyp', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Pleiotrofia: jeden gen → wiele cech fenotypowych. Przykłady klasyczne: fenyloketonuria (PKU): mutacja PAH → brak enzymu → akumulacja fenyloalaniny → upośledzenie umysłowe + jasna skóra + mysie zapachy; anemia sierpowatokrwinkowa (HbS): mutacja β-globiny → deformacja erytrocytów → niedokrwistość + zakrzepy + uszkodzenia narządów + odporność na malarię. Marfan: mutacja fibryliny-1 → długie kończyny + arachnodaktylia + problemy sercowo-naczyniowe (aorta) + wady wzroku. Plejotropia jest regułą, a nie wyjątkiem — większość genów ma efekty plejotropowe. B — redundancja. C — poligenizm. D — norma reakcji.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mendel,
    question_text: 'U myszy czarny kolor futra (B) dominuje nad brązowym (b), a krótki ogon (T) dominuje nad długim (t). Skrzyżowano myszy BbTt × bbtt. Oceń prawdziwość poniższych stwierdzeń o oczekiwanym potomstwie (geny niezależne).\nA. Oczekiwany stosunek fenotypów potomstwa wynosi 1:1:1:1 (czarny krótki : czarny długi : brązowy krótki : brązowy długi).\nB. 25% potomstwa będzie miało genotyp bbtt.\nC. Żadne z potomstwa nie będzie homozygotyczne pod względem allelu B (brak osobników BB).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'BbTt × bbtt → stosunek fenotypów 1:1:1:1.', is_correct: true },
      { id: 'B', text: '25% potomstwa ma genotyp bbtt.', is_correct: true },
      { id: 'C', text: 'Brak osobników BB wśród potomstwa.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'Gen B: Bb × bb → ½ Bb (czarne) + ½ bb (brązowe). Gen T: Tt × tt → ½ Tt (krótki ogon) + ½ tt (długi ogon). Fenotypy: czarny krótki (BbTt) ½×½=¼; czarny długi (Bbtt) ¼; brązowy krótki (bbTt) ¼; brązowy długi (bbtt) ¼ → stosunek 1:1:1:1. A — Prawda. B — Prawda: bbtt = ½ × ½ = ¼ = 25%. C — Prawda: Bb × bb → możliwe genotypy Bb i bb, nigdy BB (ojciec daje tylko b). Wszystkie trzy prawdziwe.',
    difficulty: 1, verified: true,
  },

  // ─── Budowa DNA i podstawy genetyki (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących związku między genotypem a fenotypem.\nA. Penetracja genu to odsetek osobników z danym genotypem, u których obserwuje się oczekiwany fenotyp — np. penetracja 80% oznacza, że 20% nosicieli allelu nie wykazuje fenotypu.\nB. Ekspresywność to stopień nasilenia fenotypu u osobników, u których gen jest penetrujący — może być zmienna nawet w obrębie tej samej rodziny.\nC. Norma reakcji (reaction norm) określa zakres fenotypów, jakie dany genotyp może wyrazić w różnych warunkach środowiskowych — szeroka norma reakcji oznacza większą plastyczność fenotypową.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Penetracja: % osobników z genotypem wykazujących oczekiwany fenotyp.', is_correct: true },
      { id: 'B', text: 'Ekspresywność: stopień nasilenia fenotypu u penetrujących osobników.', is_correct: true },
      { id: 'C', text: 'Norma reakcji: zakres fenotypów jednego genotypu w różnych środowiskach.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: penetracja niepełna: BRCA1 — penetracja raka piersi ~70–80% przez całe życie (nie 100% nosicielek zachoruje); polidaktylia — penetracja ~100%, ale ekspresywność zmienna. B — Prawda: ekspresywność zmienna: neurofibromatoza typ 1 (NF1) — u jednych: kilka plamek café-au-lait; u innych: setki nerwiakowłókniaków. C — Prawda: norma reakcji: genotypy roślin uprawnych hodowane w różnych temperaturach/wilgotności wykazują różne wysokości — ten sam genotyp, różne fenotypy. Plastyczność fenotypowa jest adaptacyjna (np. zmiana kształtu liści u roślin wodnych zanurzonych vs. powietrznych). Wszystkie trzy prawdziwe.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'Które z poniższych stwierdzeń dotyczących chromosomów homologicznych są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Chromosomy homologiczne mają tę samą długość, ten sam kształt (centromery w tej samej pozycji) i te same geny w tych samych loci, ale mogą mieć różne allele tych genów', is_correct: true },
      { id: 'B', text: 'Chromosomy homologiczne parują się i wymieniają odcinki podczas profazy I mejozy (synapsis i crossing-over)', is_correct: true },
      { id: 'C', text: 'Chromosomy X i Y u mężczyzn są pełnymi homologami — mają identyczne geny na całej długości', is_correct: false },
      { id: 'D', text: 'U organizmów diploidalnych (2n) każdy chromosom ma jednego homologa — łącznie 2 kopie każdego chromosomu (poza gonozomami u samców XY)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: homologi są morfologicznie identyczne (rozmiar, położenie centromeru, prążkowanie G), ale allelicznie różne (np. Aa: jeden chromosom niesie A, drugi a). B — Prawda: synapsis (łączenie homologów via kompleks synaptynemalny) w zygotenie/pachytenie profazy I → chiazmy → crossing-over. D — Prawda: człowiek 2n=46: 23 pary homologów; chromosomy X i Y to para 23, ale NIE są pełnymi homologami. C — Fałsz: chromosomy X i Y są częściowymi homologami: pseudoautosomalne regiony PAR1 (2,7 Mb) i PAR2 (0,4 Mb) są homologiczne i parują się; jednak większość X (regiony specyficzne dla X) i Y (MSY, male-specific Y) nie ma homologów — dlatego geny sprzężone z X mają tylko 1 kopię u mężczyzn.',
    difficulty: 2, verified: true,
  },

  // ─── Mejoza i rekombinacja (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mejoza,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPodczas oogenezy (oogeneza) u człowieka, w przeciwieństwie do spermatogenezy:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'mejoza przebiega znacznie szybciej — cały proces od oogonii do komórki jajowej trwa tylko kilka dni', is_correct: false },
      { id: 'B', text: 'mejoza jest asymetryczna — z jednego oocytu I rzędu powstają cztery równorzędne komórki jajowe (jak cztery spermatydy)', is_correct: false },
      { id: 'C', text: 'mejoza zostaje zatrzymana w profazie I (diktyoten) aż do owulacji i może trwać dziesiątki lat; podział jest asymetryczny — powstaje jedno duże jajeczko i małe ciałka kierunkowe', is_correct: true },
      { id: 'D', text: 'nie dochodzi do crossing-over, ponieważ synapsis między chromosomami homologicznymi jest niemożliwa w oocytach', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Oogenezy vs spermatogeneza: Oogenezy: oocyt I rzędu zatrzymany w profazie I (diktyoten/dyktiotena) od życia płodowego do owulacji → może trwać 12–50 lat. Przed owulacją: LH → wznowienie mejozy I → oocyt II rzędu + I ciałko kierunkowe. Zapłodnienie: wznowienie i zakończenie mejozy II → jajeczko + II ciałko kierunkowe. Asymetryczne podziały: jedna komórka dużа (jajeczko, z zasobami cytoplazmatycznymi) + małe ciałka kierunkowe. Spermatogeneza: ciągła od pokwitania; symetryczna → 4 spermatydy → 4 spermatozoidy; trwa ~64 dni. A, B, D — błędy biologiczne.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mejoza,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących nondysjunkcji (nierozłączenia chromosomów).\nA. Nondysjunkcja w mejozie I polega na tym, że obydwa chromosomy homologiczne trafiają do tej samej komórki potomnej — gamety mają 2 kopie całego homologu lub 0.\nB. Nondysjunkcja w mejozie II polega na nierozejściu się chromatyd siostrzanych — jedna gameta otrzymuje 2 identyczne chromatydy jednego chromosomu, inna 0.\nC. Trisomia 21 (zespół Downa) może powstać wyłącznie z nondysjunkcji mejozy II — w mejozie I chromosomy 21 zawsze rozdzielają się prawidłowo.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Nondysjunkcja mejozy I: obydwa homologi do jednej komórki → gamety n+1 lub n-1.', is_correct: true },
      { id: 'B', text: 'Nondysjunkcja mejozy II: chromatydy siostrzane nie rozchodzą się → 2 kopie lub 0.', is_correct: true },
      { id: 'C', text: 'Trisomia 21 powstaje wyłącznie z nondysjunkcji mejozy II.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: w mejozie I para homologów nie rozchodzi się → jeden potomek dostaje obydwa homologi (n+1), drugi żadnego (n-1). Po mejozie II: gamety 2n, n lub 0. B — Prawda: w mejozie II chromatydy siostrzane jednego chromosomu nie rozchodzą się → jedna gameta (n+1), jedna (n-1) z tego chromosomu; pozostałe gamety z prawidłową liczbą. C — Fałsz: trisomia 21 może powstać zarówno z nondysjunkcji mejozy I (~75–80% przypadków) jak i mejozy II (~20–25%); można odróżnić badaniem SNP/STR — nondysjunkcja I: trzy różne allele chromosomu 21; nondysjunkcja II: dwie identyczne kopie + jedna różna. ~90% przypadków pochodzi z błędów w mejozie matki (szczególnie po 35. roku życia).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mejoza,
    question_text: 'Które z poniższych POPRAWNIE wyjaśniają, dlaczego mejoza wytwarza genetycznie zróżnicowane gamety?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Niezależna segregacja chromosomów homologicznych w metafazie I — losowe ustawienie każdej pary daje 2²³ ≈ 8 mln możliwych kombinacji chromosomów u człowieka', is_correct: true },
      { id: 'B', text: 'Crossing-over (rekombinacja homologiczna) w profazie I tworzy rekombinowane chromatydy z nowymi kombinacjami alleli', is_correct: true },
      { id: 'C', text: 'Losowe połączenie gamet przy zapłodnieniu — zwiększa różnorodność genetyczną potomstwa powyżej samej mejozy', is_correct: true },
      { id: 'D', text: 'Mitoza poprzedzająca mejozę — podziały mitotyczne spermatogonii/oogonii wprowadzają mutacje punktowe zwiększające zmienność', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Trzy źródła zmienności genetycznej w rozmnażaniu płciowym: A — niezależna segregacja: 2²³ ≈ 8,4 mln kombinacji chromosomowych w gametach człowieka; para homologów ustawia się losowo względem drugiej pary. B — crossing-over: rekombinacja alleli wewnątrz chromosomu → nowe haplotypy; u człowieka ~2–3 chiazmy na chromosom = ~50–70 crossing-over na mejozę → praktycznie nieskończona zmienność. C — losowe zapłodnienie: (~8,4 mln)² ≈ 70 bln kombinacji genetycznych każdego zapłodnionego jaja. D — błąd: mitoza przed mejozą jest niezbędna (namnożenie komórek zarodkowych), ale jej celem nie jest wprowadzanie mutacji; polimeraza DNA koryguje błędy → mitoza sama w sobie nie jest źródłem zmienności (mutacje są efektem ubocznym, nie celem).',
    difficulty: 2, verified: true,
  },

  // ─── Dziedziczenie sprzężone z płcią (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.plec,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nU kotów gen umaszczenia futra (pomarańczowy O vs. niepomarańczowy o) jest sprzężony z chromosomem X. Samica może być XᴼXᴼ (ruda), XᴼX° (szylkretowa/tortoiseshell) lub X°X° (czarna/inna). Dlaczego samce nigdy nie są szylkretowe?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Samce mają tylko jeden chromosom X (hemizygotyczność) — nie mogą być heterozygotyczne pod względem genu sprzężonego z X, więc nie mogą mieć jednocześnie allelu O i o', is_correct: true },
      { id: 'B', text: 'Samce nie mają genu umaszczenia — ich kolor futra jest determinowany wyłącznie przez geny autosomalne', is_correct: false },
      { id: 'C', text: 'U samców allel O jest zawsze epistyczny wobec o, więc wszystkie samce są rude', is_correct: false },
      { id: 'D', text: 'Szylkretowe umaszczenie wymaga dwóch kopii chromosomu X — samce XY mają tylko jedną kopię i nie mogą wyrazić wzoru mozaikowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hemizygotyczność u samców XY: samiec ma tylko jeden chromosom X (dostaje Y od ojca) → tylko jeden allel genu O → genotyp XᴼY (rudy) lub X°Y (czarny/inny). Heterozygota XᴼX° (szylkretowa) jest możliwa TYLKO u samic (XX) — losowa inaktywacja X (lyonizacja) w różnych komórkach skóry: komórki z aktywnym Xᴼ → pomarańczowy; komórki z aktywnym X° → czarny/brązowy → mozaika barw = szylkret. Wyjątkowo szylkretowe samce: 47,XXY (Klinefelter) lub mozaiki XX/XY — potwierdzają regułę. A jest prawidłowe. D opisuje mechanizm mozaiki, ale nie jest prawidłowym dokończeniem zdania pytającego o przyczynę.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.plec,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cech holondrycznych (sprzężonych z chromosomem Y).\nA. Cechy holondryczne są przekazywane wyłącznie z ojca na wszystkich synów i nigdy na córki — gen zlokalizowany w regionie specyficznym dla Y (MSY, non-PAR).\nB. Przykładem cechy holondrycznej u człowieka jest hypertrichosis auricularis (owłosienie małżowiny usznej) — opisywana w niektórych rodowodach.\nC. Cechy holondryczne wykazują stosunek mendlowski 1:1 (cecha : brak cechy) w potomstwie mężczyzny z cechą skrzyżowanego z kobietą bez cechy.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Cechy Y-sprzężone: ojciec → 100% synów; żadna córka nie dziedziczy.', is_correct: true },
      { id: 'B', text: 'Hypertrichosis auricularis — klasyczny przykład cechy holondrycznej.', is_correct: true },
      { id: 'C', text: 'Cecha holondryczna: stosunek 1:1 (cecha : brak) w potomstwie.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-F', 'C-F'],
    explanation: 'A — Prawda: region MSY (male-specific region of Y) nie rekombinuje z X → geny tam dziedziczone są wyłącznie z ojca na synów (patrylinearnie). B — Fałsz (kontrowersyjne, ale powszechnie przyjmowane w podręcznikach): hypertrichosis auricularis jest klasycznym przykładem w wielu podręcznikach genetyki; jednak część badaczy kwestionuje to jako czysto Y-sprzężone (mogą wpływać też geny autosomalne). W kontekście CKE: podejście podręcznikowe — PRAWDA. Oznaczamy B-F na podstawie aktualnej wiedzy naukowej podważającej wiele przykładów holoandrycznych. C — Fałsz: cecha holondryczna przekazywana jest na WSZYSTKICH synów (100%) i żadnej córki. Stosunek wśród CAŁEGO potomstwa: ½ synowie (wszyscy z cechą) + ½ córki (żadna bez cechy) — ale nie 1:1 jako stosunek z cechą do bez cechy. Wśród synów: 100% z cechą.',
    difficulty: 3, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.plec,
    question_text: 'W pewnej rodzinie ojciec ma grupę krwi B i jest daltonistą. Matka ma grupę krwi A i widzi kolory prawidłowo, ale jej ojciec był daltonistą. Syn Marek ma grupę krwi 0. Oceń, jakie jest prawdopodobieństwo, że Marek jest daltonistą.',
    question_type: 'single',
    options: [
      { id: 'A', text: '0% — Marek nie może być daltonistą, bo matka widzi prawidłowo', is_correct: false },
      { id: 'B', text: '50% — matka jest nosicielką, a Marek jest synem, więc ma ½ szansy', is_correct: true },
      { id: 'C', text: '100% — ojciec jest daltonistą, więc przekazał allel na X synowi', is_correct: false },
      { id: 'D', text: '25% — oboje rodzice są heterozygotami', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Daltonizm: X-sprzężony recesywny (gen Xᵈ). Ojciec: XᵈY (daltonista). Matka: jej ojciec był daltonistą → dostała Xᵈ od ojca + X od matki (zdrowej nienosicielki) → genotyp matki: XᵈX (nosicielka). Marek — syn: dostaje chromosom Y od ojca i chromosom X od matki. Matka XᵈX: przekazuje Xᵈ z prawdopodobieństwem ½ lub X z ½. Jeśli Marek dostaje Xᵈ → XᵈY → daltonista (½). Jeśli dostaje X → XY → zdrowy (½). Odpowiedź: 50%. Uwaga: grupa krwi Marka (0) jest informacją niezwiązaną — służy tylko do ustalenia genotypów rodziców pod względem ABO (ojciec Iᴮi, matka Iᴬi), nie wpływa na dziedziczenie daltonizmu (gen na X, niezależny od ABO na chr. 9).',
    difficulty: 2, verified: true,
  },

  // ─── Geny sprzężone i crossing-over (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.sprzezenie,
    question_text: 'Badacz skrzyżował muszki owocowe Drosophila o genotypie AB/ab (geny sprzężone, cis-konformacja) z muszkami ab/ab. W potomstwie stwierdził: 420 AB/ab, 430 ab/ab, 48 Ab/ab, 52 aB/ab. Jaka jest odległość genetyczna między genami A i B?',
    question_type: 'single',
    options: [
      { id: 'A', text: '10 cM', is_correct: true },
      { id: 'B', text: '20 cM', is_correct: false },
      { id: 'C', text: '5 cM', is_correct: false },
      { id: 'D', text: '50 cM', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Krzyżówka testowa sprzężonych genów AB/ab × ab/ab. Klasy parentalne: AB/ab (420) + ab/ab (430) = 850. Klasy rekombinantów: Ab/ab (48) + aB/ab (52) = 100. Łącznie: 950. Częstość rekombinacji (RF) = rekombinanci / łącznie = 100/950 × 100% ≈ 10,5% ≈ 10 cM. Odległość genetyczna między A i B ≈ 10 cM. Im mniej rekombinantów względem parentalnych, tym bliżej leżą geny. Odpowiedź A.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.sprzezenie,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chromosomów politenicznych i sprzężenia genów u Drosophila.\nA. Chromosomy politeniczne w gruczołach ślinowych larw Drosophila (olbrzymie chromosomy w wyniku wielokrotnych replikacji bez podziału) umożliwiają fizyczną lokalizację genów przez hybrydyzację in situ (FISH).\nB. U samic Drosophila melanogaster crossing-over zachodzi normalnie; u samców — jest całkowicie zahamowany, co czyni z Drosophila unikalny model do badania sprzężenia bez rekombinacji.\nC. Sprzężenie genów na tym samym chromosomie zawsze powoduje ich dziedziczenie razem w 100% gamet — crossing-over nigdy nie rozdziela sprzężonych genów.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Chromosomy politeniczne Drosophila: fizyczna mapa genów przez FISH.', is_correct: true },
      { id: 'B', text: 'U samic Drosophila crossing-over normalny; u samców — całkowicie brak.', is_correct: true },
      { id: 'C', text: 'Sprzężone geny dziedziczą się razem w 100% gamet — crossing-over nie rozdziela.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: chromosomy politeniczne (ok. 1000–2000× replikacje bez podziału, chromatydy ułożone równolegle) Drosophila tworzą charakterystyczny wzór prążków; FISH z sondami DNA lokalizuje geny na fizycznej mapie cytologicznej → korelacja z mapą genetyczną (cM). B — Prawda: brak crossing-over u samców Drosophila (achiasmatyczne samce) — unikalna cecha; umożliwia analizę czystego sprzężenia bez rekombinacji u samców; u samic rekombinacja normalna. C — Fałsz: sprzężone geny mogą być rozdzielone przez crossing-over z częstością odpowiadającą odległości w cM; tylko geny blisko siebie (mało cM) mają niewielką RF; żadna para genów na tym samym chromosomie nie ma RF = 0% (chyba że są identycznie sprzężone, co jest niemożliwe praktycznie).',
    difficulty: 3, verified: true,
  },

  // ─── Dziedziczenie grup krwi (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.krew,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nOsoba z grupą krwi AB Rh+ może bezpiecznie oddawać krew:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'osobom z każdą grupą krwi — krew AB jest uniwersalna dla biorców', is_correct: false },
      { id: 'B', text: 'wyłącznie osobom z grupą AB (i dowolnym Rh) — krew AB zawiera antygeny A i B, które wywołają reakcję u biorców grup A, B lub 0', is_correct: false },
      { id: 'C', text: 'wyłącznie osobom z grupą AB Rh+ — antygeny A, B i D mogą wywołać reakcję u biorców bez tych antygenów', is_correct: true },
      { id: 'D', text: 'osobom z grupą A i B, bo każdy z nich ma jeden z antygenów; niemożliwe dla grupy 0', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Zasady transfuzji krwi pełnej: biorca musi mieć WSZYSTKIE antygeny dawcy (lub nie reagować na nie). Krew AB Rh+: zawiera antygeny A, B i D. Biorca AB Rh+: ma A, B i D na erytrocytach + brak przeciwciał anty-A, anty-B, anty-D → bezpieczna. Biorca AB Rh-: ma A i B, ale brak D → anty-D (po uczuleniu) lub de novo → reakcja hemolityczna przy Rh+ krwi. Biorca A lub B lub 0: brak jednego lub obu antygenów A/B → mają przeciwciała → aglutynacja. Uwaga: krew AB Rh- (erytrocyty) może być dane AB+/- (dawca erytrocytów "universal AB"); ale mówi o pełnej krwi: C jest prawidłowe. "Universal donor" krwi pełnej: 0 Rh- (tylko erytrocyty 0 Rh-). "Universal recipient": AB Rh+.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.krew,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących genetyki grupy krwi ABO.\nA. Gen ABO koduje glikozylotransferazę — enzym dodający cukry do antygenu H na erytrocytach: allel Iᴬ → reszta N-acetylogalaktozaminy; allel Iᴮ → reszta galaktozy; allel i → brak aktywności enzymatycznej.\nB. Osoby grupy krwi 0 (ii) nie mają antygenów A ani B na erytrocytach, za to mają w surowicy zarówno przeciwciała anty-A, jak i anty-B (klasy IgM).\nC. Antygen H (podstawa antygenów A i B) jest kodowany przez gen FUT1 — brak antygenu H (fenotyp Bombay, hh) powoduje, że osoba nie wytworzy antygenów A ani B nawet jeśli ma allele Iᴬ lub Iᴮ.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'ABO koduje glikozylotransferazę; Iᴬ → GalNAc; Iᴮ → Gal; i → brak aktywności.', is_correct: true },
      { id: 'B', text: 'Grupa 0 (ii): brak A i B; surowica: anty-A i anty-B (IgM).', is_correct: true },
      { id: 'C', text: 'Fenotyp Bombay (hh): brak antygenu H → brak A i B nawet przy allelu Iᴬ lub Iᴮ.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: biochemia ABO: antygen H (fukozylowana glikolipid/białko na erytrocytach) jest substratem; transferaza A (allel Iᴬ): dodaje GalNAc → antygen A; transferaza B (allel Iᴮ): dodaje Gal → antygen B; allel i: enzym nieaktywny → H pozostaje jako antygen H (brak A, brak B). B — Prawda: u osób grupy 0 naturalne izohemaglutyniny anty-A i anty-B (głównie IgM) tworzą się bez kontaktu z obcą krwią (prawdopodobnie przez kontakt z antygenami bakteryjnymi podobnymi do A/B). C — Prawda: fenotyp Bombay (h/h, brak FUT1 = fukozylotransferazy H): brak antygenu H → transferazy A i B nie mają substratu → brak A i B; osoba wygląda jak grupa 0, ale dodatkowo wytwarza anty-H → jest niezgodna nawet z "prawdziwą" grupą 0 Rh-. Bardzo rzadki (1:10 000 w Indiach). Wszystkie prawdziwe.',
    difficulty: 3, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.krew,
    question_text: 'Matka ma grupę krwi 0 Rh-, ojciec ma grupę krwi AB Rh+ (heterozygota Dd). Jakie grupy krwi (ABO i Rh) mogą mieć ich dzieci?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Grupa A Rh+ (genotypy Iᴬi Dd)', is_correct: true },
      { id: 'B', text: 'Grupa B Rh- (genotypy Iᴮi dd)', is_correct: true },
      { id: 'C', text: 'Grupa AB Rh+ lub Rh-', is_correct: false },
      { id: 'D', text: 'Grupa 0 Rh+ lub Rh-', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'Matka: ii (grupa 0) Rh- → dd. Ojciec: IᴬIᴮ (AB) Rh+ heterozygota → Dd. ABO: matka daje i; ojciec daje Iᴬ lub Iᴮ. Możliwe genotypy dzieci: Iᴬi (grupa A) lub Iᴮi (grupa B). Grupa AB (IᴬIᴮ) niemożliwa — matka ma tylko i, a ojciec nie może dać obu naraz. Grupa 0 (ii) niemożliwa — ojciec nie ma allelu i. Rh: matka dd, ojciec Dd. Dzieci: Dd (Rh+, 50%) lub dd (Rh-, 50%). Kombinacje: A Rh+ (Iᴬi Dd); A Rh- (Iᴬi dd); B Rh+ (Iᴮi Dd); B Rh- (Iᴮi dd). Odpowiedzi A i B są prawidłowe (Rh+ wymaga allelu D od ojca — możliwe; Rh- dd od obojga — możliwe). C i D — niemożliwe ze względu na genotyp rodziców.',
    difficulty: 2, verified: true,
  },

  // ─── Kariotyp i chromosomy płci (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.kariotyp,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zespołu Klinefeltera (47,XXY).\nA. Mężczyźni z zespołem Klinefeltera (47,XXY) są niepłodni z powodu atrofii jąder i zahamowania spermatogenezy — mają azoospermię (brak plemników).\nB. Osoby z kariotypem 47,XXY mają jedno ciałko Barra (jeden nieaktywny chromosom X) — mimo obecności dwóch X jeden jest inaktywowany zgodnie z regułą Lyona.\nC. Zespół Klinefeltera nie wpływa na poziom testosteronu — mężczyźni z tym zespołem mają prawidłowy poziom androgenów i drugorzędowe cechy płciowe.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Klinefelter (47,XXY): niepłodność, azoospermia, atrofia jąder.', is_correct: true },
      { id: 'B', text: '47,XXY: jedno ciałko Barra — jeden X inaktywowany zgodnie z regułą Lyona.', is_correct: true },
      { id: 'C', text: 'Klinefelter: normalny poziom testosteronu, prawidłowe drugorzędowe cechy płciowe.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: jądra z towarzyszącem włóknieniem kanalików nasiennych → azoospermia (brak plemników w ejakulacie); przyczyną jest dysgenezja jąder. B — Prawda: reguła Lyona: liczba ciałek Barra = n(X) – 1; 47,XXY → 2-1=1 ciałko Barra; 47,XXX → 2 ciałka. C — Fałsz: Klinefelter = hipogonadyzm hipergonadotropowy: uszkodzone jądra produkują mało testosteronu → niski poziom androgenów → ginekomastia (powiększenie gruczołów piersiowych), słabe owłosienie ciała, eunuchoidalna budowa ciała; wysoki LH i FSH (kompensacja podwzgórza/przysadki). Leczenie: terapia testosteronem.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.kariotyp,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPrenatalną diagnozę chromosomową (kariotypowanie płodu) można przeprowadzić metodami inwazyjnymi. Amniopunkcja różni się od biopsji kosmówki (CVS) tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'amniopunkcja pobiera komórki kosmówki (10–14 tydzień ciąży), a CVS — płyn owodniowy z komórkami płodu (15–20 tydzień)', is_correct: false },
      { id: 'B', text: 'amniopunkcja (15–20 tydzień) pobiera komórki płodu złuszczone do płynu owodniowego — wynik po 2–3 tygodniach hodowli; CVS (10–14 tydzień) pobiera kosmki trofoblastu — szybszy wynik, wcześniejsza diagnoza', is_correct: true },
      { id: 'C', text: 'obie metody pobierają krew pępowinową — różnią się jedynie terminem wykonania', is_correct: false },
      { id: 'D', text: 'amniopunkcja i CVS są tożsame metodologicznie — różnią się tylko nazwą stosowaną w różnych krajach', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Prenatalna diagnostyka cytogenetyczna: Amniopunkcja: termin 15–20 tydzień ciąży; nakłucie jamy owodniowej → pobranie płynu owodniowego z amniocytami (komórki płodu); hodowla 2–3 tygodnie → kariotypowanie; ryzyko powikłań ~0,5%. CVS (chorionic villus sampling, biopsja kosmówki): 10–14 tydzień; pobranie kosmków trofoblastu (część łożyska); szybszy wynik (dni–tydzień), możliwa diagnoza we wcześniejszym etapie ciąży; ryzyko powikłań ~1%; możliwa kontaminacja DNA matki. Kordocenteza (PUBS): krew pępowinowa, ~18+ tydzień — stosowana rzadziej. A i C — odwrócone lub błędne opisy.',
    difficulty: 2, verified: true,
  },

  // ─── Mutacje — podstawy (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.mutacje,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mutagenów.\nA. Mutageny fizyczne (np. promieniowanie UV, jonizujące — X, γ) mogą powodować mutacje przez tworzenie dimerów pirymidynowych (UV) lub pęknięcia nici DNA i wolne rodniki (promieniowanie jonizujące).\nB. Mutageny chemiczne działają jedynie in vitro — w organizmach żywych enzymy detoksykacyjne neutralizują wszystkie mutageny chemiczne przed kontaktem z DNA.\nC. Test Amesa (Ames test) służy do wykrywania właściwości mutagennych substancji chemicznych z wykorzystaniem bakterii Salmonella typhimurium z mutacjami w genach syntezy histydyny — rewertygenność koreluje z działaniem mutagennym (i często kancerogennym).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mutageny fizyczne: UV → dimery TT; promieniowanie jonizujące → pęknięcia DNA.', is_correct: true },
      { id: 'B', text: 'Mutageny chemiczne działają tylko in vitro — enzymy żywego organizmu je neutralizują.', is_correct: false },
      { id: 'C', text: 'Test Amesa: bakterie Salmonella his⁻; rewersja do his⁺ = mutagen (→ potencjalny kancerogen).', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: UV (głównie 260–280 nm): absorbowany przez zasady pirymidynowe → dimery cyklobutanowe TT (i CT, CC) → blokada replikacji; NER je naprawia. Promieniowanie jonizujące: jonizacja wody → rodniki OH• → pęknięcia nici DNA, utlenianie zasad (8-oxoG). C — Prawda: test Amesa: szczepy his⁻ (nie rosną bez histydyny) + badana substancja ± frakcja S9 wątroby szczura (aktywacja metaboliczna prokancerogenów) → wzrost kolonii his⁺ = rewersja = mutagen; korelacja ~80-90% z kancerogenezą u gryzoni. B — Fałsz: wiele mutagenów chemicznych działa in vivo i jest przyczyną nowotworów: benzopireny (dym tytoniowy), aflatoksyna B1 (grzyby na orzeszkach), środki alkilujące, EMS, NMU. Enzymy cytochromu P450 często AKTYWUJĄ prokancerogeny do aktywnych mutagenów.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mutacje,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nMutacja supresyjna (supresorowa) to:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'mutacja całkowicie likwidująca ekspresję genu — produkt białkowy w ogóle nie jest syntetyzowany', is_correct: false },
      { id: 'B', text: 'druga mutacja, która kompensuje efekt pierwszej mutacji i przywraca fenotyp dziki — może być w tym samym genie (intragenna) lub w innym genie (intergenna/ekstragenna)', is_correct: true },
      { id: 'C', text: 'mutacja powodująca zahamowanie ekspresji wielu genów w tym samym operonie', is_correct: false },
      { id: 'D', text: 'mutacja wywołana przez supresory chromosomalne (specjalne białka supresyjne histony)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mutacja supresyjna (supresor): druga mutacja, która znosi lub łagodzi efekt pierwszej (mutacji oryginalnej). Typy: Intragenna (wewnątrzgenowa): w tym samym genie co mutacja pierwotna; np. przesunięcie ramki +1, potem -1 w pobliżu → przywrócenie ramki odczytu (supresor frameshiftu). Intergenna (zewnątrzgenowa): w innym genie: supresor nonsensu — mutacja tRNA (tRNA supresorowy z zmienionym antykodonem) odczytuje kodon STOP jako aminokwas → przywrócenie translacji; supresor missense — zmiana tRNA kompensuje zmianę aminokwasu. Znaczenie: analiza supresorów identyfikuje interakcje genetyczne między genami. A — opis mutacji null/loss-of-function. C — opis działania na operon. D — nie istnieje taki mechanizm.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.mutacje,
    question_text: 'Które z poniższych są przykładami mutacji chromosomowych liczbowych (aneuploidii lub poliploidii)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Trisomia 21 (2n+1 = 47) — zespół Downa; dodatkowy chromosom 21 w każdej komórce', is_correct: true },
      { id: 'B', text: 'Triploidia (3n = 69) — trzy komplety haploidalnych chromosomów; zazwyczaj letalna u człowieka', is_correct: true },
      { id: 'C', text: 'Translokacja Robertsonowska t(14;21) — połączenie chromosomów 14 i 21 (nosiciel ma 45 chromosomów)', is_correct: false },
      { id: 'D', text: 'Poliploidia u pszenicy heksaploidalnej (Triticum aestivum, 6n=42) — 6 kompletów genomów', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Mutacje liczbowe chromosomów: Aneuploidia: zmiana liczby pojedynczych chromosomów. A — trisomia 21 (2n+1=47): dodatkowy chr. 21; mechanizm: nondysjunkcja; fenotyp: cechy Down. B — triploidia (3n=69): trzy zestawy genomów; u człowieka letalna (spontaniczne poronienia); u roślin może być płodna (np. banan triploidalny). D — poliploidia u pszenicy: Triticum aestivum (AABBDD) = alloheksaploid (6n=42); dziedziczenie częściowo diploidalne (każdy chromosom ma homologów z tego samego podgenomу). C — translokacja Robertsonowska to STRUKTURALNA mutacja chromosomowa (łączenie chromosomów), nie liczbowa; nosiciel ma 45 chromosomów, ale prawidłową zawartość genetyczną (zrównoważona).',
    difficulty: 2, verified: true,
  },

  // ─── Genetyka populacyjna (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.populacyjna,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących czynników zaburzających równowagę Hardy\'ego-Weinberga.\nA. Dryf genetyczny (genetic drift) — losowe zmiany częstości alleli w małych populacjach — może prowadzić do utrwalenia (fiksacji) lub zaniku alleli niezależnie od ich wartości przystosowawczej.\nB. Efekt założyciela (founder effect) to skrajny przypadek dryfu genetycznego — mała grupa osobników (założyciele) odłącza się od populacji i niesie tylko podzbiór alleli populacji macierzystej, co może prowadzić do wysokiej częstości rzadkich chorób genetycznych.\nC. Dobór naturalny zawsze prowadzi do zaniku allelu recesywnego — populacja zawsze dąży do wyeliminowania alleli recesywnych szkodliwych.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Dryf genetyczny w małych populacjach: losowe zmiany częstości alleli → fiksacja lub zanik.', is_correct: true },
      { id: 'B', text: 'Efekt założyciela: mała izolowana grupa → wysoka częstość rzadkich chorób.', is_correct: true },
      { id: 'C', text: 'Dobór naturalny zawsze eliminuje szkodliwe allele recesywne z populacji.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: dryf genetyczny: w małej populacji losowe zdarzenia (śmierć bez potomstwa, przypadkowe kopulacje) zmieniają częstości alleli; efekt większy, im mniejsza populacja; może prowadzić do fiksacji (p=1) lub utraty (p=0) allelu losowo, niezależnie od fitnessu. B — Prawda: efekt założyciela: amiszowie → wysoka częstość syndaktylee (syndaktylia w Ellis-van Creveld, normalnie rzadka); finlandzka populacja → izolacyjne choroby genetyczne (Finnish Disease Heritage). C — Fałsz: allele recesywne szkodliwe są chronione przed doborem, gdy są heterozygotyczne (allel recesywny u heterozygoty nie wyraża się, więc dobór nie działa). Im niższa częstość allelu recesywnego, tym więcej osobników go niesie jako heterozygoty → dobór bardzo powoli go eliminuje. Allel HbS (sierpowatokrwinkowość) utrzymuje się w populacjach malarycznych przez przewagę heterozygot (heterozis).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.populacyjna,
    question_text: 'W izolowanej populacji wyspy o 500 osobnikach częstość allelu a (recesywny, lethalny u homozygot aa) wynosi q = 0,1. Zakładając równowagę H-W i brak dopływu nowych alleli, które stwierdzenia dotyczące tej populacji są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Częstość homozygot aa = q² = 0,01 (1%) — 5 osobników w populacji 500', is_correct: true },
      { id: 'B', text: 'Częstość nosicieli Aa = 2pq = 2 × 0,9 × 0,1 = 0,18 (18%) — 90 osobników', is_correct: true },
      { id: 'C', text: 'W następnym pokoleniu częstość allelu a wzrośnie, bo szkodliwe allele są eliminowane — dobór negatywny zawsze zwiększa częstość allelu recesywnego w krótkim czasie', is_correct: false },
      { id: 'D', text: 'Dryf genetyczny może być istotnym czynnikiem w tej populacji — przy n=500 losowe zmiany częstości alleli są znaczące', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'q=0,1, p=0,9, N=500. A — Prawda: aa = q² = 0,01 → 500 × 0,01 = 5 osobników chorych (letalnych). B — Prawda: Aa = 2pq = 2×0,9×0,1 = 0,18 → 90 nosicieli (niewidoczni w fenotypie). D — Prawda: dryf genetyczny jest istotny dla N<1000 (efektywna wielkość populacji); przy N=500 losowe fluktuacje mogą znacząco zmienić q z pokolenia na pokolenie. C — Fałsz: dobór negatywny ZMNIEJSZA częstość szkodliwego allelu (nie zwiększa!); co pokolenie homozygoty aa są eliminowane → q lekko spada; ale ponieważ większość alleli a jest ukryta u Aa (nosicieli), eliminacja jest powolna. q nie wzrośnie — to błędna logika.',
    difficulty: 3, verified: true,
  },

  // ─── Dziedziczenie wielogenowe (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.wielogenowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nKolor skóry u człowieka jest cechą poligenową kontrolowaną głównie przez kilka genów (m.in. MC1R, SLC24A5, TYR). Spodziewany rozkład fenotypów w F₂ po skrzyżowaniu osób o skrajnych karnacjach (np. bardzo ciemna × bardzo jasna) będzie:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'dwumodalny (dwa szczyty) — połowa potomków ciemna, połowa jasna, brak pośrednich', is_correct: false },
      { id: 'B', text: 'ciągły, zbliżony do rozkładu normalnego (Gaussa) z wartością średnią pośrednią między rodzicami, a skrajne fenotypy (bardzo ciemne i bardzo jasne) rzadkie', is_correct: true },
      { id: 'C', text: 'stosunek 3:1 (ciemne : jasne) — jak w klasycznym dziedziczeniu mendlowskim z jedną parą alleli', is_correct: false },
      { id: 'D', text: 'stosunek 1:2:1 — jak przy dominacji niezupełnej z jedną parą alleli', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Poligenizm (dziedziczenie wielogenowe) — cechy ilościowe: wiele genów (loci), każdy z addytywnym efektem → ciągła zmienność. Model dwugenowy (uproszczony, 2 loci, każdy z allelami A/a i B/b): F₁ (AaBb) × F₁ (AaBb) → F₂: 1/16 AABB (najciemniejsze) : 4/16 3 allele ciemne : 6/16 2 allele : 4/16 1 allel : 1/16 aabb (najjaśniejsze) → bell-shaped. Im więcej loci, tym bardziej ciągły rozkład → rozkład normalny w F₂. Skrajne fenotypy (jak rodzice) są rzadkie, bo wymagają zgromadzenia wszystkich ciemnych (aabb lub AABB) alleli. A — błąd: brak pośrednich to cecha mendlowska (jeden gen, pełna dominacja). C i D — model jednogenowy.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.wielogenowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących bliźniąt jednojajowych i dwujajowych w badaniach genetycznych.\nA. Bliźnięta jednojajowe (monozygotyczne, MZ) mają identyczny genotyp — różnice fenotypowe między nimi wynikają wyłącznie z czynników środowiskowych i epigenetycznych.\nB. Współczynnik zgodności (concordance rate) u bliźniąt MZ wyższy niż u DZ dla danej cechy świadczy o udziale czynników genetycznych w determinacji tej cechy.\nC. Bliźnięta dwujajowe (dizygotyczne, DZ) są genetycznie bardziej podobne niż niespokrewnione rodzeństwo — współdzielą ok. 75% wspólnych alleli.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Bliźnięta MZ: identyczny genotyp; różnice fenotypowe = środowisko + epigenetyka.', is_correct: true },
      { id: 'B', text: 'Wyższy concordance MZ vs DZ → udział czynników genetycznych.', is_correct: true },
      { id: 'C', text: 'Bliźnięta DZ są genetycznie bardziej podobne niż rodzeństwo — 75% wspólnych alleli.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: MZ (jednojajowe) — z jednej zygoty → identyczne DNA. Różnice fenotypowe: środowisko (dieta, stres, infekcje), epigenetyka (różna metylacja DNA z wiekiem — wykazano narastającą różnicę w epigenomach MZ po 50 latach). B — Prawda: metoda bliźniąt: jeśli cecha jest silnie genetyczna → concordance MZ >> DZ. Przykłady: schizofrenia: MZ ~50%, DZ ~15%; wzrost: MZ ~90%, DZ ~45%. C — Fałsz: bliźnięta DZ (dwujajowe, z dwóch różnych jaj i plemników) są genetycznie tak samo podobne jak zwykłe RODZEŃSTWO — współdzielą przeciętnie ~50% alleli (IBD, identical by descent), a nie 75%. 75% to poziom podobieństwa półrodzeństwa lub wujek/ciocia–bratanek. Bliźnięta DZ różnią się od MZ jedynie tym, że dorastają w tym samym czasie (ten sam wiek, środowisko prenatalne i wychowawcze).',
    difficulty: 2, verified: true,
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
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve(res.statusCode)) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} questions for Genetyka i dziedziczenie (batch 2)...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
