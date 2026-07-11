// Seed: 20 closed questions — Genetyka molekularna — ekspresja genów

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC = '87346a24-dd63-4896-85f9-1124188982a7'

const S = {
  dna:    'be147aae-d7b6-4dde-9126-f5ea06635e74', // Budowa DNA i RNA
  replik: '509e44e6-44f6-41bf-8f2c-e6d28ec2ac66', // Replikacja DNA
  transkr:'080488a3-c287-46ec-b337-d87e1736d7da', // Transkrypcja
  obrobka:'7e58aed3-066f-410e-a5c4-19fe84a3821e', // Obróbka potranskrypcyjna
  kod:    'd3f5edfd-647b-4850-8dcd-3168a5805c61', // Kod genetyczny
  transl: 'd6c4adf0-caa3-46f3-b24a-d4d662a7a9cc', // Translacja
  prok:   'a5dee6c1-8f72-4f35-9d6a-0b694089ddaf', // Regulacja u prokaryotów
  eukar:  'c0f6a1a7-b95b-468f-be90-6430736c2ec5', // Regulacja u eukaryotów
  epigen: '56b9ee49-9719-42a5-baac-e106038c1ba5', // Epigenetyka
}

const questions = [

  // ── BUDOWA DNA I RNA (2) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.dna, question_type: 'single',
    question_text: 'Wskaż prawidłowe dokończenie zdania:\nDwie nici DNA w cząsteczce podwójnej helisy są zorientowane:',
    options: [
      { id: 'A', text: 'równolegle — obie biegną w kierunku 5\'→3\', co umożliwia jednoczesną replikację obu nici', is_correct: false },
      { id: 'B', text: 'antyrównolegle — jedna nić biegnie w kierunku 5\'→3\', druga w kierunku 3\'→5\'', is_correct: true },
      { id: 'C', text: 'antyrównolegle — jedna nić jest purynowa, druga pirymidynowa, biegną naprzeciwko siebie', is_correct: false },
      { id: 'D', text: 'dowolnie — orientacja nici zmienia się zależnie od aktywności transkrypcyjnej genu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Dwie nici DNA są antyrównoległe (antiparallel): jedna biegnie od 5\' do 3\' (z góry na dół), a druga od 3\' do 5\' (z dołu do góry). Jest to wymagane przez komplementarne parowanie zasad (A=T, G≡C) i ma kluczowe znaczenie dla replikacji (nić wiodąca vs opóźniona) i transkrypcji (odczyt matrycy 3\'→5\').',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.dna, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnice między RNA a DNA? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'RNA zawiera rybozę (z grupą -OH w pozycji 2\'), a DNA — deoksyrybozę (bez grupy -OH w pozycji 2\')', is_correct: true },
      { id: 'B', text: 'RNA zawiera uracyl zamiast tyminy jako jedną z zasad pirymidynowych', is_correct: true },
      { id: 'C', text: 'RNA jest zazwyczaj jednoniciowe, natomiast DNA zazwyczaj tworzy dwuniciową podwójną helisę', is_correct: true },
      { id: 'D', text: 'RNA zawiera wyłącznie zasady pirymidynowe (uracyl i cytozynę), a DNA — wyłącznie zasady purynowe (adeninę i guaninę)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'RNA różni się od DNA trzema kluczowymi cechami: (1) ryboza vs deoksyryboza, (2) uracyl vs tymina, (3) zazwyczaj jednoniciowe vs dwuniciowe. Obie cząsteczki zawierają puryny (adeninę i guaninę) oraz pirymidyny (cytozynę) — błędne jest twierdzenie, że jeden kwas zawiera wyłącznie jeden typ zasad.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── REPLIKACJA DNA (2) ────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.replik, question_type: 'single',
    question_text: 'Synteza nowej nici DNA przez polimerazę DNA przebiega wyłącznie w kierunku 5\'→3\'. Jakie jest biologiczne znaczenie tej właściwości dla syntezy nici opóźnionej?',
    options: [
      { id: 'A', text: 'Nić opóźniona jest syntetyzowana w sposób ciągły, tak samo jak nić wiodąca, ponieważ polimeraza zmienia kierunek', is_correct: false },
      { id: 'B', text: 'Nić opóźniona jest syntetyzowana nieciągle — w postaci krótkich fragmentów Okazaki, każdy zaczynający się od startera RNA i syntetyzowany w kierunku 5\'→3\', przeciwnym do ruchu widełek replikacyjnych', is_correct: true },
      { id: 'C', text: 'Nić opóźniona nie jest replikowana — zamiast tego kopiowana jest wyłącznie nić wiodąca', is_correct: false },
      { id: 'D', text: 'Polimeraza DNA na nici opóźnionej działa w kierunku 3\'→5\', co jest wyjątkiem od ogólnej reguły', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Polimeraza DNA może syntetyzować nić tylko w kierunku 5\'→3\', dołączając nukleotydy do wolnej grupy 3\'-OH. Na nici opóźnionej matryca biegnie 5\'→3\' (w stronę odchodzącą od widełek), więc synteza musi być nieciągła: powstają fragmenty Okazaki (~100–200 nt u eukariontów, ~1000–2000 nt u prokariotów), każdy poprzedzony starterem RNA (primaza). Potem startery są usuwane (polimeraza I/RNaza H), luki zapełniane, a fragmenty łączone przez ligazę DNA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.replik, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują replikację DNA u eukaryotów? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Replikacja jest semikonserwatywna — każda cząsteczka potomna zawiera jedną nić macierzystą i jedną nowo zsyntetyzowaną', is_correct: true },
      { id: 'B', text: 'Replikacja przebiega jednocześnie z wielu miejsc inicjacji (ori) na każdym chromosomie, co umożliwia szybkie kopiowanie dużych genomów', is_correct: true },
      { id: 'C', text: 'Polimeraza DNA może samodzielnie inicjować syntezę nowej nici bez startera, bezpośrednio na matrycy jednoniciowej', is_correct: false },
      { id: 'D', text: 'Primaza syntetyzuje krótki starter RNA, do którego dołączana jest nowa nić DNA przez polimerazę DNA', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Replikacja DNA: (A) semikonserwatywa — udowodniona doświadczeniem Meselson-Stahl (1958); (B) wiele ori na chromosomach eukariontów (~30 000–50 000 ori w genomie człowieka) → szybka replikacja; (C) fałsz — polimeraza DNA wymaga startera z wolną grupą 3\'-OH (dostarcza go primaza, syntezując krótki RNA 3–10 nt); (D) prawda — primaza jest wyspecjalizowaną polimerazą RNA syntetyzującą startowe RNA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TRANSKRYPCJA (2) ──────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.transkr, question_type: 'single',
    question_text: 'W którym kierunku przebiega synteza RNA przez polimerazę RNA, i w jakim kierunku odczytywana jest matryca DNA?',
    options: [
      { id: 'A', text: 'RNA syntetyzowany jest w kierunku 3\'→5\'; matryca DNA odczytywana jest w kierunku 5\'→3\'', is_correct: false },
      { id: 'B', text: 'RNA syntetyzowany jest w kierunku 5\'→3\'; matryca DNA (nić matrycowa) odczytywana jest w kierunku 3\'→5\'', is_correct: true },
      { id: 'C', text: 'RNA syntetyzowany jest w kierunku 5\'→3\'; matryca DNA odczytywana jest w kierunku 5\'→3\' (w tym samym kierunku)', is_correct: false },
      { id: 'D', text: 'Kierunek syntezy RNA jest dowolny i zależy od rodzaju genu oraz pozycji promotora', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Polimeraza RNA syntezuje nić RNA w kierunku 5\'→3\', odczytując nić matrycową DNA w kierunku 3\'→5\'. Sekwencja RNA jest komplementarna do nici matrycowej i identyczna (z zamianą T→U) z nicią kodującą (niekodującą, sense strand), która biegnie 5\'→3\'. Promotor DNA wskazuje polimerazie punkt startu i kierunek transkrypcji.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transkr, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnice między transkrypcją u PROKARYOTÓW a u EUKARYOTÓW? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'U prokaryotów transkrypcja i translacja mogą zachodzić jednocześnie w tej samej kompartmentacji (sprzężenie transkrypcji-translacji), co jest niemożliwe u eukaryotów', is_correct: true },
      { id: 'B', text: 'U eukaryotów transkrypcja zachodzi w jądrze komórkowym, a u prokaryotów — w cytozolu (brak jądra)', is_correct: true },
      { id: 'C', text: 'U prokaryotów pierwotny transkrypt (pre-mRNA) przechodzi przez rozbudowaną obróbkę potranskrypcyjną identyczną jak u eukaryotów', is_correct: false },
      { id: 'D', text: 'U prokaryotów jeden mRNA może kodować wiele białek (mRNA policistronowy), natomiast u eukaryotów mRNA jest zazwyczaj monocistronowy', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'U prokaryotów: brak jądra → transkrypcja i translacja w cytozolu → mogą zachodzić jednocześnie (polisom na transkrybowanym mRNA). mRNA jest policistronowy (jeden mRNA → kilka białek, np. operon laktozowy). Obróbka potranskrypcyjna u prokaryotów jest minimalna (brak czapeczki, brak ogona poli-A, brak splicingu). U eukaryotów: transkrypcja w jądrze, translacja w cytozolu; rozbudowana obróbka pre-mRNA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── OBRÓBKA POTRANSKRYPCYJNA (2) ─────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.obrobka, question_type: 'single',
    question_text: 'Splicing pre-mRNA u eukaryotów jest procesem, w którym:',
    options: [
      { id: 'A', text: 'eksony (sekwencje niekodujące) wycinane są z pre-mRNA, a introny (sekwencje kodujące) łączone są ze sobą', is_correct: false },
      { id: 'B', text: 'introny (sekwencje niekodujące) wycinane są z pre-mRNA, a eksony (sekwencje kodujące) łączone są ze sobą przez spliceosomy', is_correct: true },
      { id: 'C', text: 'całe pre-mRNA ulega degradacji przez nukleazy, a z pozostałości nukleotydów de novo syntetyzowane jest dojrzałe mRNA', is_correct: false },
      { id: 'D', text: 'kodon stop jest usuwany z pre-mRNA, aby umożliwić syntezę dłuższego białka', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Splicing: spliceosomy (kompleksy snRNP) rozpoznają sekwencje na granicach intronów (sekwencja GU na 5\'-końcu intronu, AG na 3\'-końcu oraz punkt rozgałęzienia) → intron wycinany jest jako lariat (pętla) → eksony łączone ze sobą. Alternatywny splicing umożliwia powstanie różnych mRNA (i białek) z jednego genu przez różne kombinacje eksonów.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.obrobka, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących obróbki potranskrypcyjnej pre-mRNA u eukaryotów:',
    options: [
      { id: 'A', text: 'Do końca 5\' pre-mRNA dodawana jest czapeczka (cap) w postaci 7-metyloguanozyny, która chroni mRNA przed degradacją i ułatwia inicjację translacji przez rybosom.', is_correct: true },
      { id: 'B', text: 'Ogon poli-A na końcu 3\' mRNA jest syntetyzowany bezpośrednio przez polimerazę RNA III jako integralny element transkryptu.', is_correct: false },
      { id: 'C', text: 'Alternatywny splicing umożliwia powstanie różnych białek z tego samego genu poprzez różne kombinacje eksonów w dojrzałym mRNA.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: czapeczka 7mG dodawana jest przez specyficzną guanylotransferazę już podczas transkrypcji (ko-transkrypcyjnie) do końca 5\'. B — Fałsz: ogon poli-A (ok. 200 adenozyn) jest dodawany przez poliadenylanylazę poli-A po cięciu pre-mRNA przez specyficzną endonukleazę — nie jest on syntetyzowany przez polimerazę RNA, ani przez polimerazę RNA III. C — Prawda: np. gen troponiny T ma 11 eksonów zmiennych → ponad 64 izoformy białka.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── KOD GENETYCZNY (2) ───────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.kod, question_type: 'single',
    question_text: 'Kod genetyczny jest zdegenerowany (zduplikowany). Wskaż prawidłowe wyjaśnienie tego pojęcia:',
    options: [
      { id: 'A', text: 'Każdy aminokwas kodowany jest przez dokładnie jeden, unikatowy kodon', is_correct: false },
      { id: 'B', text: 'Jeden kodon może kodować więcej niż jeden aminokwas jednocześnie', is_correct: false },
      { id: 'C', text: 'Większość aminokwasów może być kodowana przez kilka różnych kodonów (synonimicznych), różniących się zwykle trzecim nukleotydem', is_correct: true },
      { id: 'D', text: 'Kodony w mRNA nakładają się na siebie — jeden nukleotyd należy do dwóch sąsiednich kodonów', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Degeneracja kodu genetycznego oznacza, że jeden aminokwas może być kodowany przez kilka kodonów synonimicznych (np. leucyna: 6 kodonów; arginina: 6 kodonów; metionina: tylko 1 kodon). Różnice synonimy zazwyczaj dotyczą trzeciej pozycji kodonu (reguła chybotania / wobble hypothesis Cricka). Dzięki temu mutacje w 3. pozycji często nie zmieniają aminokwasu (mutacje milczące).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kod, question_type: 'multiple',
    question_text: 'Które z poniższych właściwości posiada kod genetyczny? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Jest trójkowy — każdy kodon składa się z dokładnie trzech kolejnych nukleotydów mRNA', is_correct: true },
      { id: 'B', text: 'Jest zdegenerowany — jeden aminokwas może być kodowany przez kilka różnych kodonów synonimicznych', is_correct: true },
      { id: 'C', text: 'Jest niemal uniwersalny — ten sam słownik kodonów stosowany jest przez zdecydowaną większość organizmów (z drobnymi wyjątkami np. w mitochondriach)', is_correct: true },
      { id: 'D', text: 'Jest nakładający się (overlapping) — nukleotydy jednego kodonu są jednocześnie częścią sąsiedniego kodonu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Kod genetyczny: trójkowy (3 nukleotydy = 1 kodon; 4³=64 możliwych kodonów dla 20 aminokwasów + 3 stop + 1 start), zdegenerowany (synonimiczne kodony), niemal uniwersalny (odkrycie Nirenberga i Korany, Nobel 1968; wyjątki: mitochondrialne, u orzęsków). NIE jest nakładający się — kodony czytane są kolejno, bez zachodzenia; udowodniono to analizą mutacji przesunięcia ramki odczytu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TRANSLACJA (2) ────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.transl, question_type: 'single',
    question_text: 'W którym miejscu rybosomu podczas elongacji translacji wiąże się nowy aminoacylo-tRNA (tRNA niosący kolejny aminokwas)?',
    options: [
      { id: 'A', text: 'W miejscu E (exit site) — miejscu wyjścia wolnego tRNA po odłączeniu aminokwasu', is_correct: false },
      { id: 'B', text: 'W miejscu P (peptidyl site) — miejscu, gdzie zlokalizowany jest tRNA z rosnącym łańcuchem polipeptydowym', is_correct: false },
      { id: 'C', text: 'W miejscu A (aminoacyl site) — miejscu wejścia nowego aminoacylo-tRNA', is_correct: true },
      { id: 'D', text: 'Poza rybosomem, na błonie retikulum endoplazmatycznego, skąd jest transportowany do centrum peptydylotransferazowego', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Rybosom ma trzy miejsca wiązania tRNA: A (aminoacyl) — wchodzi nowy aminoacylo-tRNA; P (peptidyl) — zlokalizowany tRNA z rosnącym polipeptydem; E (exit) — opuszcza wolny tRNA po translokacji. Podczas elongacji: nowy aminoacylo-tRNA wchodzi do miejsca A → peptydylotransferaza przenosi łańcuch z P→A (tworzy wiązanie peptydowe) → translokacja: A→P, P→E → wolny tRNA wychodzi z E.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transl, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących translacji:',
    options: [
      { id: 'A', text: 'Inicjacja translacji u eukaryotów rozpoczyna się od rozpoznania kodonu AUG (metionina) jako kodonu START przez inicjatorowy met-tRNA.', is_correct: true },
      { id: 'B', text: 'Kodony stop (UAA, UAG, UGA) kodują aminokwasy, które jako ostatnie wbudowywane są do łańcucha polipeptydowego.', is_correct: false },
      { id: 'C', text: 'Rybosom podczas translacji przesuwa się wzdłuż mRNA w kierunku 5\'→3\', czytając kolejne kodony od końca 5\' do końca 3\'.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: AUG = kodon START; inicjatorowy met-tRNA rozpoznaje AUG i inicjuje syntezę; białko zaczyna się od metioniny (często odszczepiany po translacji). B — Fałsz: kodony stop (UAA, UAG, UGA) nie kodują żadnych aminokwasów; są rozpoznawane przez czynniki uwalniające (eRF1, eRF3) → hydroliza polipeptydu, dysocjacja rybosomu. C — Prawda: translacja przebiega 5\'→3\' mRNA; łańcuch polipeptydowy rośnie od końca aminowego (N) do karboksylowego (C).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── REGULACJA EKSPRESJI U PROKARYOTÓW (2) ────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.prok, question_type: 'single',
    question_text: 'Operon laktozowy (lac operon) u E. coli w warunkach BRAKU laktozy jest wyciszony, ponieważ:',
    options: [
      { id: 'A', text: 'brak laktozy powoduje metylację DNA promotora operonu, co blokuje przyłączenie polimerazy RNA', is_correct: false },
      { id: 'B', text: 'represor (białko lacI), pozbawiony induktora (allolaktozy), wiąże się do operatora i fizycznie blokuje elongację lub inicjację transkrypcji przez polimerazę RNA', is_correct: true },
      { id: 'C', text: 'brak laktozy aktywuje transkrypcję genu represora, który niszczy mRNA genów metabolizmu laktozy', is_correct: false },
      { id: 'D', text: 'polimeraza RNA rozpoznaje brak laktozy za pomocą specyficznego sensora allosterycznego i sama zaprzestaje transkrypcji', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Operon laktozowy (Jacob-Monod, Nobel 1965): gen lacI koduje represor. Bez laktozy (bez allolaktozy = induktora) represor ma konformację aktywną → wiąże operator (sekwencja zachodzącą na promotor) → blokada transkrypcji genów lacZ (β-galaktozydaza), lacY (permeaza), lacA (transacetylaza). Gdy pojawia się laktoza → przekształcana do allolaktozy → allolaktoza wiąże represor → zmiana konformacji → represor odpada od operatora → transkrypcja włączona.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prok, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących regulacji ekspresji genów u prokaryotów:',
    options: [
      { id: 'A', text: 'W operonie laktozowym allolaktoza pełni rolę induktora — wiąże się do represora i zmienia jego konformację tak, że nie może on przyłączyć się do operatora.', is_correct: true },
      { id: 'B', text: 'Białko CAP (catabolite activator protein) aktywuje transkrypcję operonu laktozowego przy NISKIM stężeniu cAMP, co odpowiada sytuacji wysokiego stężenia glukozy.', is_correct: false },
      { id: 'C', text: 'Organizacja genów w operony umożliwia koordynowaną regulację ekspresji wielu genów uczestniczących w tym samym szlaku metabolicznym za pomocą jednego promotora.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: allolaktoza (izomer laktozy) = induktor operonu lac; wiąże się do represora → zmiana konformacji → represor odpada od operatora → transkrypcja. B — Fałsz: CAP aktywuje transkrypcję przy WYSOKIM stężeniu cAMP, co oznacza NISKIE stężenie glukozy (katabolizm glukozowy hamuje cyklazę adenylową → ↓cAMP; bez glukozy → ↑cAMP → aktywny CAP). C — Prawda: istota koncepcji operonu — jeden promotor + operator → jeden mRNA policistronowy → wiele białek jednego szlaku.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── REGULACJA EKSPRESJI U EUKARYOTÓW (3) ─────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.eukar, question_type: 'single',
    question_text: 'Wzmacniacze (enhancers) to elementy regulatorowe ekspresji genów u eukaryotów. Która z cech NAJLEPIEJ je charakteryzuje?',
    options: [
      { id: 'A', text: 'Wzmacniacze muszą znajdować się bezpośrednio przed (upstream) promotorem genu, aby działać', is_correct: false },
      { id: 'B', text: 'Wzmacniacze działają tylko w kierunku 5\'→3\' (zgodnie z transkrypcją), nie w odwrotnym', is_correct: false },
      { id: 'C', text: 'Wzmacniacze mogą zwiększać transkrypcję genu z dowolnej odległości (nawet ponad 1 Mb) i w obu orientacjach względem promotora', is_correct: true },
      { id: 'D', text: 'Wzmacniacze kodują czynniki transkrypcyjne, które następnie działają na promotory innych genów', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Wzmacniacze (enhancers): sekwencje DNA wiążące aktywatory transkrypcji (czynniki transkrypcyjne). Kluczowe właściwości: działają niezależnie od pozycji (upstream, downstream, wewnątrz intronu), orientacji (+ lub −) i odległości (do 1 Mb lub więcej) od promotora. Mechanizm: pętla chromosomalna zbliża enhancer do promotora → aktywatory oddziałują z mediatorami i ogólnymi czynnikami transkrypcyjnymi → aktywacja polimerazy RNA II.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.eukar, question_type: 'single',
    question_text: 'Mechanizm interferencji RNA (RNAi) oparty na miRNA polega na:',
    options: [
      { id: 'A', text: 'wycinaniu intronów z pre-mRNA za pomocą krótkich RNA interferujących z splicingiem', is_correct: false },
      { id: 'B', text: 'blokowaniu translacji lub degradacji docelowego mRNA przez krótkie (~22 nt) jednoniciowe miRNA wchodzące w skład kompleksu RISC', is_correct: true },
      { id: 'C', text: 'aktywacji transkrypcji wybranych genów przez krótkie RNA wiążące się do ich promotorów', is_correct: false },
      { id: 'D', text: 'naprawie błędów sekwencji mRNA przez komplementarne cząsteczki miRNA', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'miRNA (microRNA): ~22 nt jednoniciowe RNA (po obróbce z pre-miRNA przez Dicer/Drosha) wchodzą w skład kompleksu RISC (RNA-induced silencing complex). Jeśli komplementarność z docelowym mRNA jest pełna → degradacja mRNA (jak siRNA); jeśli niecałkowita → blokada translacji. miRNA regulują ekspresję setek genów u ssaków; odgrywają rolę w różnicowaniu, apoptozie i nowotworach.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.eukar, question_type: 'multiple',
    question_text: 'Na których poziomach może być regulowana ekspresja genów u eukaryotów? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Na poziomie chromatyny i transkrypcji (modyfikacje histonów, metylacja DNA, czynniki transkrypcyjne, enhancery)', is_correct: true },
      { id: 'B', text: 'Na poziomie obróbki potranskrypcyjnej (alternatywny splicing, stabilność mRNA, edycja RNA)', is_correct: true },
      { id: 'C', text: 'Na poziomie translacji i potranslacyjnym (miRNA/siRNA, modyfikacje potranslacyjne, degradacja białka przez proteasom)', is_correct: true },
      { id: 'D', text: 'Wyłącznie na poziomie transkrypcji — zmiany po transkrypcji nie wpływają na ilość funkcjonalnego białka w komórce', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Ekspresja genów u eukaryotów może być regulowana na wielu poziomach: (A) chromatyna (euchromatyna/heterochromatyna, acetylacja/metylacja histonów) + transkrypcja (czynniki transkrypcyjne, enhancery, promotory); (B) splicing (alternatywny: jeden gen → wiele białek), stabilność mRNA (ogon poli-A, UTR), edycja RNA (ADAR); (C) translacja (miRNA, ryboprzełączniki), modyfikacje białek (fosforylacja, ubikwitynacja) + proteasomalny rozkład. Wielopoziomowa regulacja umożliwia precyzyjną kontrolę ekspresji w różnych tkankach i warunkach.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── EPIGENETYKA (3) ───────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.epigen, question_type: 'single',
    question_text: 'Metylacja DNA u ssaków polega na enzymatycznym przyłączeniu grupy metylowej (-CH₃) do:',
    options: [
      { id: 'A', text: 'guaniny w sekwencjach GpC, głównie w regionach kodujących', is_correct: false },
      { id: 'B', text: 'cytozyny w kontekście dinukleotydu CpG, z powstaniem 5-metylocytozyny (5mC)', is_correct: true },
      { id: 'C', text: 'adeniny w sekwencjach GATC, analogicznie jak w systemie Dam u E. coli', is_correct: false },
      { id: 'D', text: 'tyminy w sekwencjach CpG, co zmienia właściwości parowania zasad', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Metylacja DNA u ssaków: metylotransferazy DNA (DNMT1, DNMT3A, DNMT3B) przyłączają -CH₃ do cytozyny w dinukleotydzie CpG → powstaje 5-metylocytozyna (5mC). Metylacja wysp CpG w promotorach genów → kondensacja chromatyny → wyciszenie transkrypcji. DNMT1 = metylotransferaza utrzymująca (kopiuje wzorzec metylacji po replikacji); DNMT3A/3B = de novo metylotransferazy. U prokaryotów (E. coli) metylowana jest adenina (GATC, metylaza Dam), nie cytozyna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.epigen, question_type: 'single',
    question_text: 'Acetylacja ogonów histonów przez acetylotransferazy histonów (HAT) prowadzi do:',
    options: [
      { id: 'A', text: 'kondensacji chromatyny do stanu heterochromatyny i wyciszenia ekspresji genów', is_correct: false },
      { id: 'B', text: 'rozluźnienia chromatyny (tworzenia euchromatyny) i aktywacji ekspresji genów', is_correct: true },
      { id: 'C', text: 'metylacji DNA w sąsiedztwie nukleosomów i trwałego wyciszenia genów', is_correct: false },
      { id: 'D', text: 'rozłączenia nukleosomu i całkowitego usunięcia histonów z DNA', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Acetylacja lizyn na N-terminalnych ogonach histonów przez HAT → neutralizacja dodatniego ładunku lizyny → osłabienie oddziaływania elektrostatycznego z ujemnie naładowaną nicią DNA → luźniejsza chromatyna (euchromatyna) → dostęp czynników transkrypcyjnych i polimerazy RNA → aktywacja genów. Deacetylacja przez HDAC (deacetylazy histonów) → przywrócenie ładunku → kondensacja chromatyny → wyciszenie. HAT i HDAC to cele terapeutyczne w onkologii (inhibitory HDAC w terapii nowotworów).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.epigen, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących epigenetyki:',
    options: [
      { id: 'A', text: 'Zmiany epigenetyczne (metylacja DNA, modyfikacje histonów) mogą być dziedziczone przez komórki potomne podczas podziałów mitotycznych, bez zmiany sekwencji DNA.', is_correct: true },
      { id: 'B', text: 'Metylacja wysp CpG w rejonie promotora genu zazwyczaj prowadzi do aktywacji transkrypcji tego genu poprzez przyciąganie czynników transkrypcyjnych.', is_correct: false },
      { id: 'C', text: 'Modyfikacje epigenetyczne mogą wpływać na ekspresję genów bez zmiany sekwencji nukleotydowej DNA i mogą być odwracalne.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: DNMT1 utrzymuje wzorzec metylacji po replikacji DNA; modyfikacje histonów mogą być kopiowane przez specyficzne enzymy — to podstawa epigenetycznej ciągłości komórkowej. B — Fałsz: metylacja wysp CpG w promotorach jest związana z WYCISZENIEM genów (kondensacja chromatyny, rekrutacja białek MeCP2 i kompleksów HDAC → heterochromatyna). C — Prawda: epigenetyczne zmiany są odwracalne (leki demetylujące jak 5-azacytydyna, inhibitory HDAC) — inaczej niż mutacje genetyczne.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
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
  console.log(`Seeding ${questions.length} closed questions for Genetyka molekularna — ekspresja genów...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
