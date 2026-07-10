// Seed: Zmienność i mutacje — batch 2 (16 questions)
const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const T = 'dbd40510-9cc5-4a56-8733-2455c18e5c76'
const S = {
  genomowe:   '815d85a0-7af8-4e53-8afe-d0262f58a693',
  mutageny:   'f7594d3c-f046-492b-a6d7-b8c2fbcf2907',
  kombinat:   '344119b8-5be6-4265-9cff-afe41db719ad',
}

const questions = [
  // ─── Mutacje genomowe (6) ───
  {
    topic_id: T, subtopic_id: S.genomowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPoliploidia allopoliploidalna (allopoliploidia) różni się od autopoliploidii tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'autopoliploidia powstaje przez powielenie genomów RÓŻNYCH gatunków (hybryda), allopoliploidia — przez powielenie genomu JEDNEGO gatunku', is_correct: false },
      { id: 'B', text: 'allopoliploidia powstaje przez połączenie genomów RÓŻNYCH gatunków (krzyżowanie + poliploidyzacja) — hybryda jest płodna; autopoliploidia to powielenie genomu JEDNEGO gatunku', is_correct: true },
      { id: 'C', text: 'allopoliploidia jest zawsze szkodliwa — hybrydy allopoliploidalne są niepłodne i niezdolne do rozmnażania', is_correct: false },
      { id: 'D', text: 'autopoliploidia dotyczy tylko roślin — u zwierząt jedynie allopoliploidia jest możliwa i prowadzi do specjacji', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Autopoliploidia: powielenie własnego genomu; np. 2n → 4n (tetraploid); chromosomy homologiczne w grupach po 4 → problemy z mejozą → częste bezpłodność; przykład: banany uprawne (3n = 27, triploid beznasienny). Allopoliploidia: hybryda dwóch różnych gatunków + poliploidyzacja; każdy gatunek wnosi swój diploidalny genom → allotetraploid ma pełne zestawy obu genomów → mejoza prawidłowa (homologi z tego samego gatunku parują się) → płodność; przykłady: pszenica heksaploidalna (AABBDD, 6n=42: Triticum monococcum × Ae. speltoides × Ae. tauschii); rzepak (AACC, 4n=38: Brassica rapa × B. oleracea). C — Fałsz: allopoliploidy często płodne.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genomowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących aneuploidii autosomalnej.\nA. Trisomia 13 (zespół Patau) i trisomia 18 (zespół Edwardsa) są ciężkimi aneuploidami autosomalnych — większość dzieci umiera w ciągu pierwszego roku życia; obydwa stanowią trisomie chromosomów o mniejszej liczbie genów wśród trisomii autosomalnych żyworodnych.\nB. Monosomia autosomalna (2n-1) u człowieka jest niemal zawsze letalna i nie prowadzi do żywych urodzin — w odróżnieniu od monosomii chromosomu X (45,X = Turner), która jest zgodna z życiem.\nC. Trisomia autosomalna może powstawać wyłącznie z błędów w mejozie matczynej — u ojców nie dochodzi do nondysjunkcji chromosomów autosomalnych.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Trisomia 13 i 18: ciężkie, letalne w pierwszym roku; chromosomy o mało genach.', is_correct: true },
      { id: 'B', text: 'Monosomia autosomalna u ludzi: niemal zawsze letalna; monosomia X (Turner) — zgodna z życiem.', is_correct: true },
      { id: 'C', text: 'Trisomia autosomalna powstaje wyłącznie z błędów mejozy matczynej.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: trisomia 13 (Patau): wady wielonarządowe (rozszczep wargi/podniebienia, polidaktylia, wady serca), mediana przeżycia ~7-10 dni; 90% umiera do 1. roku. Trisomia 18 (Edwards): mediana ~15 dni; 90% do 1. roku; wady serca, nerki, zaciśnięte pięści. Chromosomy 13 i 18 są akrocentryczne z mniejszą gęstością genów krytycznych. B — Prawda: monosomia każdego autosomu = śmiertelna (zbyt wiele genów z jedną kopią → haploinsuficjencja na szeroką skalę) → poronienia; monosomia X (45,X): żyworodna (~1:2500 dziewcząt), choć 99% zygot 45,X poroniło. C — Fałsz: nondysjunkcja MOŻE nastąpić zarówno w mejozie matczynej (~80% trisomii 21) jak i ojcowskiej (~20%); w mejozie I lub II; badania SNP pozwalają rozróżnić.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genomowe,
    question_text: 'Które z poniższych stwierdzeń dotyczących poliploidii u roślin są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Poliploidia jest ważnym mechanizmem specjacji u roślin — szacuje się, że >70% gatunków roślin okrytonasiennych ma poliploidalne pochodzenie w historii ewolucji', is_correct: true },
      { id: 'B', text: 'Kolchicyna (alkaloid z krokusa jesiennego) hamuje tworzenie nici wrzeciona podziałowego poprzez wiązanie z tubulina — stosowana jest do sztucznego wywoływania poliploidii w hodowli roślin', is_correct: true },
      { id: 'C', text: 'Triploidalne rośliny (3n) są zazwyczaj płodne i produkują nasiona — triploidia ułatwia rozmnażanie generatywne', is_correct: false },
      { id: 'D', text: 'Poliploidalne rośliny uprawne często mają pożądane cechy agronomiczne: większe owoce/nasiona, wyższe plony, większa biomasa', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: analiza genomów roślin wskazuje na starożytne zdarzenia poliploidyzacji (paleopoliploidia) u wszystkich okrytonasiennych; pszenica, truskawka, kawa, bawełna — poliploidalne. B — Prawda: kolchicyna blokuje polimeryzację tubuliny → brak wrzeciona → chromosomy nie rozchodzą się → komórka staje się poliploidalna; stosowana w hodowli do utrwalania poliploidii. D — Prawda: komórki poliploidalne większe (efekt poliploidalny) → owoce/nasiona większe; truskawka ogrodowa (8n=56) znacznie większa niż dzika (2n=14). C — Fałsz: triploidy (3n) są NIEPŁODNE (3 zestawy chromosomów nie mogą prawidłowo parować się podczas mejozy) → brak nasion; celowo hodowane bezowocowce (banan 3n, seedless watermelon 3n = trójploidalny arbuz).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genomowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nZespół Turnera (45,X) różni się klinicznie od trisomii X (47,XXX) tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Turner (45,X): brak jednego chromosomu X, kobieta z niskorosłością, dysgenezją gonad, brakiem drugorzędowych cech płciowych; 47,XXX: dodatkowy X, zazwyczaj prawidłowa płodność, często minimalne objawy kliniczne lub subtelne problemy z uczeniem', is_correct: true },
      { id: 'B', text: 'Turner (45,X) dotyczy mężczyzn (brak Y = brak chromosomu płci), a 47,XXX dotyczy kobiet z nadmiarową liczbą X', is_correct: false },
      { id: 'C', text: 'obydwa zespoły mają identyczny fenotyp — dodatkowy lub brakujący chromosom X nie wpływa na fenotyp ze względu na inaktywację X', is_correct: false },
      { id: 'D', text: 'Turner ma 47 chromosomów (trisomia X), a 47,XXX ma 45 chromosomów (monosomia X)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Turner (45,X): brak jednego chromosomu X; KOBIETA (brak Y → brak SRY → rozwój żeński); fenotyp: niskorosłość (utrata kopii genu SHOX), szyja skrzydlata, dysgenezja gonad (zamiast jajników pasma włókniste → brak estrogenów → brak miesiączki, wtórnych cech płciowych), wady serca (koarktacja aorty). Ciałka Barra: 0 (brak). 47,XXX (trisomia X): KOBIETA z 3 chromosomami X; jedno ciałko Barra; zazwyczaj prawidłowa płodność; łagodne problemy z uczeniem/mową u części; często diagnozy brak (łagodny fenotyp). Kluczowe: inaktywacja X (lyonizacja) chroni przed skutkami nadmiarowych X u 47,XXX, ale nie chroni przed skutkami BRAKU X u Turner (geny pseudoautosomalne PAR1 i PAR2 uciekają inaktywacji → dawkozależne).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genomowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących diagnostyki aneuploidii prenatalnej.\nA. Badanie FISH (fluorescencyjna hybrydyzacja in situ) na komórkach z amniopunkcji lub CVS pozwala szybko (24-48h) wykryć aneuploidie chromosomów 13, 18, 21, X i Y — szybciej niż klasyczne kariotypowanie (2-3 tygodnie).\nB. Array CGH (porównawcza hybrydyzacja genomowa na mikromacierzach) wykrywa submikroskopowe delecje i duplikacje (CNV, copy number variants), które są niewidoczne w standardowym kariotypie.\nC. Klasyczne kariotypowanie (prążki G) ma rozdzielczość wystarczającą do wykrycia delecji 1 pary nukleotydów — jest więc nadrzędne wobec sekwencjonowania NGS w diagnostyce prenatalnej.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'FISH: szybka diagnostyka aneuploidii 13, 18, 21, X, Y w 24-48h.', is_correct: true },
      { id: 'B', text: 'Array CGH: wykrywa submikroskopowe CNV niewidoczne w standardowym kariotypie.', is_correct: true },
      { id: 'C', text: 'Kariotyp (prążki G): wykrywa delecje 1 pary nukleotydów; nadrzędny wobec NGS.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: FISH z sondami specyficznymi dla chr. 13, 18, 21, X, Y: fluorescencyjne sygnały liczone w interfazowych jądrach → wynik w 24-48h; stosowany do szybkiego wykluczenia najczęstszych aneuploidii podczas oczekiwania na pełny kariotyp. B — Prawda: array CGH / SNP array: rozdzielczość do ~50-100 kb (vs. ~10 Mb dla kariotypu G); wykrywa mikroduplekacje/mikrodelecje (np. 22q11 DiGeorge, 15q11 PWS/AS, 7q11 Williams). C — Fałsz: kariotyp G-prążkowy: rozdzielczość ~5-10 Mb — wykrywa zmiany widoczne w mikroskopie świetlnym; NOT pojedyncze pary nukleotydów. Do wykrycia mutacji punktowych: sekwencjonowanie Sangera lub NGS. NGS jest bardziej czuły i szczegółowy niż kariotyp dla małych zmian.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genomowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nWpływ wieku matki na ryzyko trisomii autosomalnych (np. trisomii 21) wynika przede wszystkim z tego, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'starsze matki produkują więcej jajeczek, co zwiększa szanse na nondysjunkcję statystycznie', is_correct: false },
      { id: 'B', text: 'oocyty u kobiet są zatrzymane w profazie I mejozy od życia płodowego — im starsza kobieta, tym dłużej oocyt pozostaje w tym stanie, co prowadzi do degradacji białek wrzeciona i zwiększonej częstości nondysjunkcji', is_correct: true },
      { id: 'C', text: 'starsze matki mają więcej mutacji punktowych w DNA oocytów, które wywołują nondysjunkcję', is_correct: false },
      { id: 'D', text: 'ryzyko trisomii zależy wyłącznie od wieku ojca — oocyty matki nie starzą się i nondysjunkcja nie jest związana z wiekiem matki', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Oogeneza: oocyty I rzędu zatrzymane w diktyotenie (profaza I) od ok. 5. miesiąca życia płodowego matki do owulacji — może trwać 12-50 lat! Białka wrzeciona meiotycznego (kohezyny łączące chromatydy) ulegają degradacji z wiekiem → osłabione trzymanie chromosomów homologicznych → nondysjunkcja. Ryzyko trisomii 21: 20 lat ~1:2000; 35 lat ~1:350; 40 lat ~1:100; 45 lat ~1:30. 80% trisomii 21 pochodzi z błędów mejozy matczynej (głównie mejoza I). Wiek ojca (spermatogeneza ciągła od pokwitania): mniejszy wpływ na aneuploidię (nowe mutacje punktowe rosną z wiekiem ojca).',
    difficulty: 2, verified: true,
  },

  // ─── Mutageny i naprawa DNA (6) ───
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących naprawy DNA przez wycinanie zasad (BER, Base Excision Repair).\nA. BER naprawia małe uszkodzenia zasad (utlenianie, deaminacja, alkilacja) — specyficzne glikozylazy DNA rozpoznają i wycinają uszkodzoną zasadę, pozostawiając miejsce apurynowe/apirymidynowe (AP site).\nB. Po wycięciu uszkodzonej zasady przez glikozylazę, AP endonukleaza nacina nić DNA przy AP site, a polimeraza DNA i ligaza wypełniają i łączą lukę.\nC. BER naprawia dwuniciowe pęknięcia DNA (DSB) — jest główną ścieżką naprawy po napromieniowaniu jonizującym.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'BER: glikozylazy wycinają uszkodzone zasady → AP site.', is_correct: true },
      { id: 'B', text: 'Po BER: AP endonukleaza → polimeraza → ligaza wypełniają lukę.', is_correct: true },
      { id: 'C', text: 'BER naprawia dwuniciowe pęknięcia DNA (DSB) po promieniowaniu jonizującym.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: BER: etap 1 — glikozylaza DNA (np. OGG1 dla 8-oxoG, UNG dla uracylu) rozrywa wiązanie glikozydowe → AP site (brak zasady). B — Prawda: etap 2 — APE1 (AP endonukleaza) nacina backbone 5\' do AP site; etap 3 — polimeraza beta wstawia prawidłowy nukleotyd (short-patch BER: 1 nt) lub polimeraz delta/epsilon (long-patch: 2-10 nt); etap 4 — XRCC1-ligaza III (short) lub ligaza I (long) zamyka lukę. C — Fałsz: BER naprawia jednoniówkowe uszkodzenia zasad (SSB, AP sites, mała modyfikacja). DSB (pęknięcia dwuniciowe) naprawiane przez: NHEJ (Non-Homologous End Joining, szybki, nieporawny) lub HR (Homologous Recombination, dokładny, wymaga siostrzanej chromatydy).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nNaprawa przez wycinanie nukleotydów (NER, Nucleotide Excision Repair) jest ważna, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'NER naprawia wyłącznie błędy replikacji (mismatch) — eliminuje nieprawidłowo wstawione nukleotydy przez polimerazy DNA podczas syntezy', is_correct: false },
      { id: 'B', text: 'NER naprawia duże, zniekształcające strukturę helisy uszkodzenia DNA (np. dimery pirymidynowe po UV, adukty chemiczne) — wycina odcinek ~25-30 nukleotydów zawierający uszkodzenie i resyntezuje go', is_correct: true },
      { id: 'C', text: 'NER naprawia dwuniciowe pęknięcia DNA poprzez łączenie swobodnych końców chromosomów (NHEJ)', is_correct: false },
      { id: 'D', text: 'NER działa wyłącznie w mitotycznie dzielących się komórkach — w komórkach postmitotycznych (neurony) uszkodzenia DNA nie są naprawiane', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'NER: naprawia uszkodzenia "bulky" (zniekształcające heliksę). Substraty: dimery pirymidynowe (CPD i 6-4PP) po UV; adukty chemiczne (benzopiren-G, cisplatyna-GG). Mechanizm: ~30 białek (w tym XPA, XPC, RPA, TFIIH, XPD, XPF-ERCC1, XPG): rozpoznanie uszkodzenia → otwarcie helisy → wycięcie oligonukleotydu 24-32 nt → synteza przez pol. delta/epsilon + PCNA → ligacja. Typy: GGR (global genome repair) i TCR (transcription-coupled repair, szybszy, przy aktywnych genach). Defekty NER: Xeroderma Pigmentosum (XP) — mutacje w genach XPA-XPG → nadwrażliwość na UV → nowotwory skóry; Cockayne syndrome (CS): defekt TCR. A — błędna odpowiedź NER: to MMR (Mismatch Repair). C — NHEJ.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_text: 'Które z poniższych mutagenów chemicznych działają jako ANALOGI ZASAD (base analogs)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: '5-bromodeurydul (5-BrdU) — analog tyminy, który jest wbudowywany w DNA i może parować zarówno z adenina (jak T), jak i z cytozyną (jak C) → tranzycje AT→GC', is_correct: true },
      { id: 'B', text: '2-aminopuryna (2-AP) — analog adeniny, wbudowywana zamiast A, paruje z cytozyną zamiast tyminy → tranzycje AT→GC', is_correct: true },
      { id: 'C', text: 'Promieniowanie UV (254 nm) — pochłaniane przez zasady pirymidynowe, powoduje tworzenie dimerów CT i TT przez wiązania kowalencyjne', is_correct: false },
      { id: 'D', text: 'Akrydyny (np. oranż akrydynowy) — płaskie cząsteczki interkalujące między zasady DNA, powodujące insercje i delecje przy replikacji (frameshift mutations)', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'Mutageny chemiczne — kategorie: Analogi zasad: strukturalnie podobne do normalnych zasad → wbudowywane przez polimerazę DNA → błędne parowanie. 5-BrdU (Br zamiast CH₃ w tyminie): normalnie paruje jak T (z A), ale może parować z G → AT→GC lub GC→AT (w zależności od cyklu). 2-AP (analog A): paruje z T (normalnie) lub C (mutagennie) → AT→GC. Inne kategorie: Czynniki alkilujące (EMS, MMS): alkilacja zasad (np. O6-metyloG→błędne parowanie z T); Interkalujące (akrydyny, EtBr): insertują między zasady → frameshift; Uszkodzenia UV (dimery): mutageny fizyczne, NIE chemiczne analogi. C i D — inne kategorie mutagenów.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących uszkodzeń oksydacyjnych DNA.\nA. Reaktywne formy tlenu (ROS: anion ponadtlenkowy O2•-, H2O2, rodnik hydroksylowy OH•) powodują utlenianie zasad DNA — najczęstsze uszkodzenie: 8-oxo-7,8-dihydroguanina (8-oxoG), która paruje z adenina zamiast cytozyny → tranzycja GC→TA (transwersja).\nB. Enzymy antyoksydacyjne (SOD, katalaza, peroksydaza) chronią komórkę przed ROS, zmniejszając ryzyko uszkodzeń DNA, ale nie eliminują go całkowicie — stąd mutacje somatyczne kumulują się z wiekiem.\nC. Mitochondrialne DNA (mtDNA) jest szczególnie narażone na uszkodzenia oksydacyjne, ponieważ mitochondria są głównym źródłem ROS, a mtDNA pozbawione jest histonów i ma ograniczone mechanizmy naprawy.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: '8-oxoG: utleniona G, paruje z A → GC→TA transwersja.', is_correct: true },
      { id: 'B', text: 'SOD/katalaza chroni przed ROS; uszkodzenia kumulują się z wiekiem.', is_correct: true },
      { id: 'C', text: 'mtDNA: szczególnie narażone na ROS; brak histonów, ograniczona naprawa.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: 8-oxoG (guanina utleniona na C8): może parować komplementarnie z C (prawidłowo) lub z A (błędnie, mutagennie) → GC→TA transwersja (typ mutacji częsty w nowotworach: sygnatura SBS7 lub SBS18). Naprawa 8-oxoG: OGG1 (glikozylaza BER). B — Prawda: SOD (dysmutaza ponadtlenkowa): O2•- → H2O2; katalaza/GPx: H2O2 → H2O; pero reszta ROS uszkadza DNA; teoria starzenia mitochondrialnego (Harman). C — Prawda: mtDNA: ~1,1 kb od kompleksów oddechowych (I, III) → bliski kontakt z ROS; brak histonów (ochrona DNA przez nukleosomy); ograniczone systemy naprawy BER (brak NER w mitochondriach); mtDNA akumuluje mutacje 10-20× szybciej niż jądrowe DNA. Wszystkie prawdziwe.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nNaprawa przez MMR (Mismatch Repair, naprawa błędów replikacji) jest ważna, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'MMR naprawia uszkodzenia oksydacyjne zasad (8-oxoG) poprzez wycięcie całego eksonu zawierającego uszkodzenie', is_correct: false },
      { id: 'B', text: 'MMR rozpoznaje i naprawia błędnie sparowane nukleotydy (mismatche) i małe insercje/delecje pętlowe (IDL) powstałe podczas replikacji — znacznie zmniejsza częstość mutacji spontanicznych', is_correct: true },
      { id: 'C', text: 'MMR działa wyłącznie na jednoniciowym DNA (ssDNA) — nie może naprawiać błędów w dwuniciowym DNA', is_correct: false },
      { id: 'D', text: 'Defekty MMR nie mają znaczenia klinicznego — mutacje w genach MMR nie prowadzą do chorób u ludzi', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'MMR: naprawia błędy replikacyjne (polimeraza DNA wstawia zły nukleotyd ~1 na 10⁷ bp, 3\'→5\' korektaż poprawia do ~1 na 10⁹ bp, MMR dalej poprawia do ~1 na 10¹⁰ bp). Białka: MutS (MSH2/MSH6 lub MSH2/MSH3): rozpoznaje mismatch lub IDL; MutL (MLH1/PMS2): koordynuje; exonukleaza EXO1: wycina odcinek nowej nici; pol. delta + PCNA: resynteza. Defekty MMR → mikrosatelitarna niestabilność (MSI) → HNPCC (Lynch syndrome): rak jelita grubego, endometrium, jajnika. Sporadic CRC: ~15% ma MSI-H (high) przez metylację MLH1. A — to nie MMR. C — Fałsz: MMR działa na dsDNA. D — Fałsz: Lynch syndrome to najczęstszy dziedziczny rak jelita grubego.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących SOS-odpowiedzi u bakterii i jej analogów u eukariontów.\nA. Odpowiedź SOS u E. coli to skoordynowana indukcja ok. 40 genów naprawy DNA po masywnym uszkodzeniu DNA — aktywator: białko RecA, które inaktywuje represor LexA (autoproteoliza LexA).\nB. Translezowa synteza DNA (TLS, translesion synthesis) — element SOS — pozwala polimerazom specjalnym (np. Pol IV, Pol V u E. coli; pol. eta, pol. iota u ludzi) kopiować uszkodzony DNA omijając blokadę, ale kosztem wprowadzenia błędów.\nC. U ludzi nie istnieje żaden odpowiednik SOS-odpowiedzi — eukarioty nie mają skoordynowanej odpowiedzi na uszkodzenia DNA i każda komórka naprawia DNA całkowicie niezależnie bez sygnalizacji.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'SOS u E. coli: RecA aktywuje, LexA represja → indukcja ~40 genów naprawy.', is_correct: true },
      { id: 'B', text: 'TLS (SOS): specjalne polimerazy omijają uszkodzenia kosztem błędów.', is_correct: true },
      { id: 'C', text: 'Eukarionty nie mają odpowiednika SOS — brak skoordynowanej odpowiedzi na uszkodzenia DNA.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: SOS regulon: uszkodzenie DNA → ssDNA → RecA tworzy filament na ssDNA → stymuluje autoproteolizę LexA → derepresja SOS genów (recA, lexA, uvrAB, umuCD itd.). B — Prawda: TLS polimerazy (Y-family): E. coli: Pol IV (dinB) → bezbłędna synteza przez 8-oxoG; Pol V (umuC) → błędna, mutagenna. Ludzie: pol. eta (XPV) naprawia dimery TT bezbłędnie; pol. iota, kappa, REV1: niskie wierności → mutagenność. C — Fałsz: odpowiednik SOS u eukariontów: odpowiedź DDR (DNA Damage Response); kluczowe kinazy: ATM (aktywowana przez DSB), ATR (aktywowana przez ssDNA/stalled fork) → fosforylacja setek substratów → zatrzymanie cyklu komórkowego (checkpoints), aktywacja naprawy, apoptoza; czynniki transkrypcyjne p53 jako analogiczny "master regulator".',
    difficulty: 2, verified: true,
  },

  // ─── Zmienność kombinatoryczna (4) ───
  {
    topic_id: T, subtopic_id: S.kombinat,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPodczas mejozy do zmienności genetycznej potomstwa przyczyniają się trzy niezależne procesy. W prawidłowej kolejności od etapu wewnątrzkomórkowego do zewnętrznego są to:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'zapłodnienie losowe → niezależna segregacja chromosomów → crossing-over', is_correct: false },
      { id: 'B', text: 'crossing-over (profaza I mejozy) → niezależna segregacja (metafaza I) → losowe zapłodnienie', is_correct: true },
      { id: 'C', text: 'niezależna segregacja (profaza I) → crossing-over (metafaza I) → losowe zapłodnienie', is_correct: false },
      { id: 'D', text: 'crossing-over → losowe zapłodnienie → niezależna segregacja chromosomów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Trzy etapy zmienności genetycznej w porządku chronologicznym (wnętrze komórki → poziom organizmu): 1) Crossing-over: profaza I mejozy (pachyten) → rekombinacja homologiczna → nowe kombinacje alleli na chromatydach; 2) Niezależna segregacja chromosomów homologicznych: metafaza I / anafaza I → losowe ustawianie par → 2²³ ≈ 8,4 mln kombinacji chromosomowych u człowieka; 3) Losowe zapłodnienie: (~8,4 mln)² ≈ 70 bln możliwych kombinacji genetycznych. Kolejność B jest prawidłowa.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.kombinat,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zmienności rekombinacyjnej.\nA. Crossing-over (rekombinacja homologiczna) podczas mejozy I tworzy nowe kombinacje alleli na chromosomach — geny sprzężone mogą zostać rozdzielone z częstością proporcjonalną do odległości między nimi (w cM).\nB. Niezależna segregacja chromosomów (II prawo Mendla) dotyczy tylko genów na RÓŻNYCH chromosomach — geny na tym samym chromosomie zawsze dziedziczą się razem, niezależnie od odległości.\nC. Zmienność kombinatoryczna jest możliwa nawet bez mutacji — sama rekombinacja i segregacja tworzą ogromną różnorodność kombinacji alleli w gametach.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Crossing-over: nowe kombinacje alleli; sprzężone geny rozdzielane proporcjonalnie do odległości.', is_correct: true },
      { id: 'B', text: 'Niezależna segregacja dotyczy tylko genów na różnych chromosomach; sprzężone zawsze razem.', is_correct: false },
      { id: 'C', text: 'Zmienność kombinatoryczna bez mutacji: rekombinacja + segregacja = ogromna różnorodność.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: im dalej geny na chromosomie, tym więcej crossing-over między nimi → wyższa RF (max 50% dla genów bardzo odległych lub na różnych chromosomach). B — Fałsz: geny sprzężone MOGĄ być rozdzielone przez crossing-over; im dalej od siebie, tym częściej (do 50 cM → segregują jak niezależne). Tylko geny bardzo blisko (0 cM) dziedziczą się razem w ~100%. C — Prawda: same 2²³ × 2²³ ≈ 70 bln kombinacji chromosomowych bez żadnych mutacji, plus crossing-over → praktycznie nieskończona zmienność genetyczna.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.kombinat,
    question_text: 'Które z poniższych procesów ZWIĘKSZAJĄ zmienność genetyczną populacji?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Mutacje spontaniczne w komórkach linii zarodkowej — nowe allele w puli genowej', is_correct: true },
      { id: 'B', text: 'Rekombinacja homologiczna (crossing-over) podczas mejozy — nowe kombinacje alleli', is_correct: true },
      { id: 'C', text: 'Dobór oczyszczający (purifying selection) — usuwa szkodliwe allele z populacji', is_correct: false },
      { id: 'D', text: 'Przepływ genów (migracja) między populacjami — wprowadza nowe allele do populacji przyjmującej', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Czynniki ZWIĘKSZAJĄCE zmienność genetyczną: A — mutacje: jedyne źródło nowych alleli; ~100-200 de novo SNV na pokolenie u człowieka. B — rekombinacja: nowe kombinacje istniejących alleli; nie tworzy nowych alleli, ale generuje nowe haplotypy. D — gene flow: allele z innej populacji → nowa zmienność w populacji przyjmującej. Czynniki ZMNIEJSZAJĄCE zmienność: dobór naturalny (oczyszczający → usuwa allele, directional → utrwala jeden allel); dryf genetyczny (w małych populacjach → losowa fiksacja lub utrata alleli); inbreeding (nie zmienia alleli w populacji, ale zwiększa homozygotyczność). C — dobór oczyszczający: zmniejsza zmienność (usuwa szkodliwe allele).',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.kombinat,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nResekcja V(D)J (rekombinacja V(D)J) w układzie odpornościowym jest przykładem zmienności somatycznej, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'rekombinacja V(D)J zmienia sekwencję DNA w komórkach B i T (somatycznych) — łączy losowo segmenty V, D i J genów immunoglobulin/TCR, tworząc unikalne receptory; ta zmiana DNA nie jest dziedziczona przez potomstwo organizmu', is_correct: true },
      { id: 'B', text: 'rekombinacja V(D)J zachodzi podczas mejozy — geny immunoglobulin rekombinują razem z genami chromosomów, tworząc nowe allele immunoglobulinowe przekazywane potomstwu', is_correct: false },
      { id: 'C', text: 'rekombinacja V(D)J zwiększa zmienność DNA linii zarodkowej — każde nowe pokolenie ma inny zestaw genów immunoglobulinowych', is_correct: false },
      { id: 'D', text: 'zmienność V(D)J dotyczy wyłącznie łańcuchów ciężkich immunoglobulin — łańcuchy lekkie (kappa i lambda) nie ulegają rekombinacji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Rekombinacja V(D)J: somatyczny mechanizm różnicowania limfocytów B i T; w rozwijających się limfocytach: rearanżacja segmentów V (variable), D (diversity), J (joining) genów immunoglobulin (łańcuchy H i L) i TCR (alfa, beta, gamma, delta). Enzymy RAG1/RAG2 (V(D)J recombinase) losowo łączą segmenty + ligerazy NHEJ dodają losowe nukleotydy przy złączach (junctional diversity, N-additions) → olbrzymia różnorodność receptorów (~10¹¹ różnych immunoglobulin). Somatyczna: tylko w danym limfocycie i jego klonie; nie wchodzi do linii zarodkowej → nie dziedziczona przez potomstwo; każdy człowiek ma unikalny repertuar limfocytów.',
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
  console.log(`Seeding ${questions.length} questions...`)
  for (const q of questions) {
    const s = await post(q)
    console.log((s===201||s===204?'OK':'ERR '+s), q.question_type, q.question_text.slice(0,60).replace(/\n/g,' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
