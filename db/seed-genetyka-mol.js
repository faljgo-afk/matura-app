// Seed: Genetyka molekularna — ekspresja genów — 30 questions
// Topic: 87346a24-dd63-4896-85f9-1124188982a7

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '87346a24-dd63-4896-85f9-1124188982a7'

const S = {
  budowa:     'be147aae-d7b6-4dde-9126-f5ea06635e74',
  replikacja: '509e44e6-44f6-41bf-8f2c-e6d28ec2ac66',
  transkryp:  '080488a3-c287-46ec-b337-d87e1736d7da',
  obrobka:    '7e58aed3-066f-410e-a5c4-19fe84a3821e',
  kod:        'd3f5edfd-647b-4850-8dcd-3168a5805c61',
  translacja: 'd6c4adf0-caa3-46f3-b24a-d4d662a7a9cc',
  regProk:    'a5dee6c1-8f72-4f35-9d6a-0b694089ddaf',
  regEuk:     'c0f6a1a7-b95b-468f-be90-6430736c2ec5',
  epigenet:   '56b9ee49-9719-42a5-baac-e106038c1ba5',
}

const questions = [
  // ─── Budowa DNA i RNA (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących struktury podwójnej helisy DNA.\nA. Podwójna helisa DNA jest prawoskrętna (B-DNA) — nici owijają się wokół osi w kierunku zgodnym z ruchem wskazówek zegara, tworząc bruzdę większą i mniejszą.\nB. Odległość między sąsiednimi parami zasad (skok helisy na parę zasad) wynosi 0,34 nm, a pełny obrót helisy obejmuje 10 par zasad (wysokość skoku = 3,4 nm).\nC. Nici DNA w podwójnej helisie są połączone wiązaniami kowalencyjnymi między zasadami purynowymi i pirymidynowymi.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'B-DNA: prawoskrętna, bruzda większa i mniejsza.', is_correct: true },
      { id: 'B', text: 'Skok na parę zasad: 0,34 nm; 10 par/obrót; wysokość skoku: 3,4 nm.', is_correct: true },
      { id: 'C', text: 'Nici DNA utrzymywane wiązaniami kowalencyjnymi między zasadami.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: forma B-DNA (dominująca in vivo): prawoskrętna helisa; bruzda większa (major groove, ~2,2 nm) wiąże większość białek regulujących ekspresję genów (czynniki transkrypcyjne, enzymy restrykcyjne); bruzda mniejsza (minor groove). B — Prawda: parametry B-DNA: skok na bp = 0,34 nm, 10,5 bp/obrót, średnica ~2 nm. C — Fałsz: nici DNA utrzymywane są WIĄZANIAMI WODOROWYMI między komplementarnymi zasadami (A=T: 2 wiązania H; G≡C: 3 wiązania H) — to umożliwia rozdzielenie nici podczas replikacji i transkrypcji przy stosunkowo niskiej energii. Wiązania kowalencyjne łączą nukleotydy w obrębie jednej nici (szkielet cukrowo-fosforanowy, 3′,5′-fosfodiestrowe).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nNukleosomy — podstawowe jednostki upakowania chromatyny u eukariontów — zbudowane są z:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'nici DNA owiniętej wokół kompleksu 8 cząsteczek białek histonowych (oktan histonowy: H2A, H2B, H3, H4 po dwie kopie każdego) — odcinek ~147 bp DNA na nukleosomie', is_correct: true },
      { id: 'B', text: 'białek niehistonowych (np. HMG) tworzących sztywny rdzeń, wokół którego nawija się DNA w odcinkach po ~400 bp', is_correct: false },
      { id: 'C', text: 'pojedynczej cząsteczki histonu H1 połączonej z 200 bp DNA bez tworzenia struktury oktamerowej', is_correct: false },
      { id: 'D', text: 'kolistego DNA bez białek — analogia do bakteryjnego chromosomu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Nukleosomy (Kornberg 1974): rdzeń = oktan histonowy (H2A×2 + H2B×2 + H3×2 + H4×2) + ~147 bp DNA nawiniętego 1,65 razy. Pomiędzy nukleosomami: łącznikowy DNA (~20–80 bp) + histon H1 (łącznikowy, spina DNA wchodzące i wychodzące z nukleosomów → chromatyna 30 nm). Histon H1 NIE jest częścią rdzenia oktameru. Histony mają ładunek dodatni (bogate w Lys i Arg) → przyciągają ujemnie naładowany DNA. Chromatyna: "koraliki na sznurku" (10 nm) → włókno 30 nm → domeny pętlowe → chromosomy metafazowe. Stan upakowania reguluje dostępność DNA dla polimerazy.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.budowa,
    question_text: 'Które z poniższych stwierdzeń dotyczących porównania genomu ludzkiego z bakteryjnym są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Genom człowieka (~3×10⁹ bp, diploidalny ~6×10⁹ bp) jest ok. 1000× większy niż genom E. coli (~4,6×10⁶ bp)', is_correct: true },
      { id: 'B', text: 'Tylko ~1,5–2% genomu człowieka koduje białka — reszta to sekwencje niekodujące (introny, retroelementy, sekwencje regulatorowe)', is_correct: true },
      { id: 'C', text: 'Gen eukariotyczny składa się wyłącznie z eksonów — nie zawiera intronów (inaczej niż u prokariontów, które mają introny)', is_correct: false },
      { id: 'D', text: 'Bakteryjny DNA jest kolisty, nieosłonięty błoną i zlokalizowany w nukleoïdzie; ludzki DNA jest liniowy, upakowany w nukleosomach i chroniony otoczką jądrową', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: paradoks C (wartości C): rozmiar genomu nie koreluje prosto ze złożonością organizmu; człowiek ~3,1 Gbp (haploidalny), E. coli ~4,6 Mbp → ok. 670× różnica. B — Prawda: większość genomu człowieka to: introny (~24%), sekwencje powtarzające się (transposony, SINE/LINE ~45%), pseudogeny, sekwencje regulatorowe; tylko ~1,5% to CDS (coding sequences). D — Prawda: kluczowe różnice prokariont vs eukariont na poziomie genomu. C — Fałsz: ODWROTNIE — geny eukariotyczne zawierają INTRONY (sekwencje niekodujące usuwane w splicingu); geny bakteryjne (prokarioty) zasadniczo NIE mają intronów (wyjątki: arche, bakteryjne introny grupy I/II).',
    difficulty: 2, verified: true,
  },

  // ─── Replikacja DNA (4) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.replikacja,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nReplikacja DNA u prokariontów jest półkonserwatywna, co oznacza, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'każda nowa cząsteczka DNA zawiera jedną starą nić i jedną nowo zsyntetyzowaną — potwierdzono eksperymentem Meselsona i Stahla (1958) z użyciem ¹⁵N/¹⁴N i wirowania w gradiencie gęstości CsCl', is_correct: true },
      { id: 'B', text: 'stara cząsteczka DNA jest zachowana w całości, a nowa cząsteczka jest w pełni zsyntetyzowana od zera (model konserwatywny)', is_correct: false },
      { id: 'C', text: 'obie nici starej cząsteczki DNA są rozcinane i rozdzielane między dwie komórki potomne bez kopiowania', is_correct: false },
      { id: 'D', text: 'fragmenty starej nici i nowej nici są wymieszane losowo w każdej nowej cząsteczce DNA (model rozproszony)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Trzy modele replikacji (przed eksperymentem Meselsona-Stahla): konserwatywny (stara helix zostaje, nowa syntetyzowana de novo), półkonserwatywny (każda nowa helix: 1 stara + 1 nowa nić), rozproszony (fragmenty stare i nowe wymieszane). Eksperyment M-S (1958): E. coli hodowane na ¹⁵N (ciężki azot) → przeniesienie do ¹⁴N → próbki po 1 i 2 podziałach → wirowanie w CsCl (gradient gęstości): po 1 podziale: 1 band (¹⁵N/¹⁴N, pośredni); po 2 podziałach: 2 bandy (½ ¹⁵N/¹⁴N + ½ ¹⁴N/¹⁴N) → TYLKO model półkonserwatywny to przewiduje. B i D — modele odrzucone przez eksperyment.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.replikacja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących enzymatyki replikacji DNA.\nA. Polimeraza DNA może syntetyzować nową nić wyłącznie w kierunku 5′→3′ i wymaga matrycy (nić DNA) oraz startera (primer RNA syntetyzowanego przez prymazę).\nB. Na nici wiodącej (leading strand) synteza jest ciągła w kierunku widełek replikacyjnych, natomiast na nici opóźnionej (lagging strand) synteza przebiega w odcinkach (fragmenty Okazaki), każdy zaczynający się od primeru RNA.\nC. Topoizomeraza II rozplata superspiralizację DNA przed widełkami replikacyjnymi przez jednoczesne cięcie i ponowne łączenie obydwu nici DNA.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Pol. DNA: kierunek 5′→3′, wymaga matrycy i primeru RNA (prymaza).', is_correct: true },
      { id: 'B', text: 'Nić wiodąca: synteza ciągła; nić opóźniona: fragmenty Okazaki z primerami.', is_correct: true },
      { id: 'C', text: 'Topoizomeraza II rozplata superspiralizację przez cięcie obu nici.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: polimeraza DNA III (E. coli) / Pol δ, ε (eukarionty): dodaje nukleotyd do końca 3′-OH → kierunek 5′→3′; prymaza (primaza) syntetyzuje krótki RNA (~10 nt) jako starter. B — Prawda: nić wiodąca (3′→5′ matryca) → synteza ciągła 5′→3′ w kierunku ruchu widełek; nić opóźniona (5′→3′ matryca) → synteza fragmentów Okazaki (1000–2000 nt u prokariontów, 100–200 nt u eukariontów) → primer zostaje usunięty przez RNazę H / Pol I → uzupełnienie DNA → ligaza łączy. C — Prawda: topoizomeraza II (gyrase u prokariontów): tymczasowo przecina obie nici → przechodzi przez nie inna część DNA → ponowne połączenie → relaksacja superspiralizacji przed widełkami. Topoizomeraza I: cięcie jednej nici.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.replikacja,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nTelomery — struktury na końcach chromosomów liniowych eukariontów — pełnią ważne funkcje. Które stwierdzenie NAJLEPIEJ je opisuje?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Telomery zbudowane są z sekwencji kodujących białka — ich skracanie powoduje utratę genów i natychmiastową śmierć komórki', is_correct: false },
      { id: 'B', text: 'Telomery to powtarzające się sekwencje (u człowieka: TTAGGG) chroniące końce chromosomów przed degradacją i fuzją; z każdym podziałem komórkowym ulegają skróceniu — mechanizm "licznika" starości komórkowej', is_correct: true },
      { id: 'C', text: 'Telomeraza jest obecna we wszystkich komórkach somatycznych człowieka i utrzymuje stałą długość telomerów przez całe życie', is_correct: false },
      { id: 'D', text: 'Skrócenie telomerów aktywuje onkogeny i przyspiesza podziały komórkowe — telomery krótsze = komórka "młodsza"', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Telomery (Blackburn, Greider, Szostak — Nobel 2009): sekwencja TTAGGG (u człowieka), powtórzona tysiące razy na końcach chromosomów liniowych. Funkcje: ochrona przed degradacją przez nukleazy, zapobieganie fuzji końców chromosomów, ochrona przed rozpoznaniem jako pęknięcie DNA (struktura T-loop). Problem replikacji końców: polimeraza DNA nie może skopiować samego końca 5′ → skrócenie po każdym podziale (~50–200 bp). Telomeraza (odwrotna transkryptaza z wbudowanym RNA jako matrycą): uzupełnia telomery; aktywna w komórkach macierzystych, komórkach płciowych i ~85–90% komórek nowotworowych (nieśmiertelność). Komórki somatyczne: brak/niska aktywność telomerazy → starzenie replikacyjne (senescencja) lub apoptoza po ~50–70 podziałach (limit Hayflicka).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.replikacja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wierności replikacji DNA i naprawy uszkodzeń.\nA. Polimeraza DNA ma aktywność korekcyjną (proofreading, egzonukleaza 3′→5′), która usuwa błędnie wbudowany nukleotyd — zmniejsza to częstość błędów z ~10⁻⁵ do ~10⁻⁷.\nB. Naprawa przez wycinanie nukleotydów (NER, Nucleotide Excision Repair) usuwa duże zniekształcenia helisy, np. dimery pirymidynowe (TT) wywołane promieniowaniem UV.\nC. Mutacje punktowe wywołane błędami replikacji są zawsze letalne dla komórki, ponieważ każda zmiana sekwencji DNA powoduje syntezę nieaktywnego białka.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Proofreading pol. DNA (egzonukleaza 3′→5′): redukcja błędów do ~10⁻⁷.', is_correct: true },
      { id: 'B', text: 'NER usuwa dimery pirymidynowe (TT) wywołane promieniowaniem UV.', is_correct: true },
      { id: 'C', text: 'Mutacje punktowe z replikacji są zawsze letalne i zawsze powodują nieaktywne białko.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: polimeraza DNA III (E. coli): wbudowuje błędny nukleotyd z częstością ~10⁻⁵; aktywność proofreading (egzonukleaza 3′→5′) usuwa go → 10⁻⁷; system naprawy niedopasowań (MMR, MutS/MutL/MutH) po replikacji → ~10⁻⁹–10⁻¹⁰. B — Prawda: NER (u człowieka XPA–XPG): rozpoznaje zniekształcenie helisy → wycina oligonukleotyd ~25–30 nt → uzupełnienie przez Pol δ → ligaza; naprawia dimery TT, addukty platyny (cisplatyna). Defekty NER → kseroderma barwnikowa (xeroderma pigmentosum). C — Fałsz: większość mutacji punktowych jest: cicha/synonimiczna (kodon zmieniony, ale ten sam aminokwas — degeneracja kodu), konserwatywna (podobny aminokwas, białko nadal aktywne), lub intronowa/niekodująca (bez efektu na białko). Tylko nieliczne są letalne lub patogenne.',
    difficulty: 2, verified: true,
  },

  // ─── Transkrypcja (4) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.transkryp,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nTranskrypcja u prokariontów jest katalizowana przez jedną polimerazę RNA (holo-enzym σ + rdzeń αα′ββ′ω). Rola czynnika sigma (σ) polega na:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'dostarczeniu energii do rozplecenia DNA w miejscu startu transkrypcji', is_correct: false },
      { id: 'B', text: 'rozpoznaniu sekwencji promotora (u E. coli: −10 TATAAT i −35 TTGACA) i inicjacji transkrypcji; po syntezie ~10 nt odpada od kompleksu', is_correct: true },
      { id: 'C', text: 'terminacji transkrypcji — czynnik σ rozpoznaje sygnał STOP i uwalnia polimeraze', is_correct: false },
      { id: 'D', text: 'tworzeniu wiązań fosfodiestrowych między rybonukleotydami — jest katalitycznym centrum polimerazy', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'RNA-polimeraza prokariontyczna: rdzeń (α₂ββ′ω) — aktywność katalityczna; czynnik σ (sigma) — specyficzność promotora. Czynnik σ70 (E. coli): rozpoznaje konsensusowe sekwencje −35 (TTGACA) i −10 (TATAAT) nukleotydów przed miejscem startu (+1); pełna polimeraza (holoenzym) wciąga DNA → pęcherzyk transkrypcyjny (~17 bp otwarte); synteza ~10 nt → σ odpada (działa katalitycznie — polimeraza elonguje bez σ). Bakterie mają różne czynniki σ (σ⁷⁰ stres cieplny, σ³² odpowiedź na stres) → zmiana repertuaru transkrybowanych genów. A — energię ATP dostarcza sam rybofosforan (PPi). C — terminacja przez czynnik ρ lub terminatory helisy. D — aktywność katalityczna: podjednostka β.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.transkryp,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transkrypcji u eukariontów.\nA. U eukariontów istnieją trzy różne polimerazy RNA: Pol I (transkrybuje geny rRNA 28S, 18S, 5,8S), Pol II (mRNA, snRNA, miRNA), Pol III (tRNA, 5S rRNA, inne małe RNA).\nB. Inicjacja transkrypcji przez Pol II wymaga asemblacji kompleksu inicjacji: Pol II + ogólne czynniki transkrypcyjne (TFIID, TFIIB, TFIIF, TFIIE, TFIIH) na promotorze zawierającym skrzynkę TATA (~−30).\nC. Transkrypcja u eukariontów i u prokariontów przebiega w tym samym przedziale komórkowym — zarówno w cytoplazmie.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Pol I (rRNA 28S/18S/5,8S), Pol II (mRNA, miRNA), Pol III (tRNA, 5S rRNA).', is_correct: true },
      { id: 'B', text: 'Inicjacja Pol II: TFIID/B/F/E/H + skrzynka TATA (~−30).', is_correct: true },
      { id: 'C', text: 'Transkrypcja u eukariontów i prokariontów: obie w cytoplazmie.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: trzy Pol RNA eukariontyczne różnią się wrażliwością na α-amanitynę: Pol II — bardzo wrażliwa (nanomolarne stężenia); Pol III — wrażliwa przy wyższych stężeniach; Pol I — oporna. B — Prawda: skrzynka TATA (TATAAA) rozpoznawana przez TBP (TATA-binding protein) podjednostka TFIID → rekrutacja TFIIB → Pol II+TFIIF → TFIIE → TFIIH (posiada helikazę i kinazę CTD) → fosforylacja CTD Pol II → elongacja. Promotory bez TATA używają innych elementów (Initiator, DPE). C — Fałsz: u eukariontów transkrypcja zachodzi w JĄDRZE KOMÓRKOWYM; pre-mRNA ulega tam obróbce → dojrzały mRNA eksportowany do cytoplazmy, gdzie translacja. U prokariontów brak jądra → transkrypcja i translacja są sprzężone (jednoczesne) w cytoplazmie.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.transkryp,
    question_text: 'Poniżej podano sekwencję nici matrycowej (3′→5′) fragmentu genu.\n3′–TACGCAATGCCG–5′\n\nJaka będzie sekwencja powstałego transkryptu (mRNA, zapis 5′→3′)?',
    question_type: 'single',
    options: [
      { id: 'A', text: '5′–AUGCGUUACGGC–3′', is_correct: true },
      { id: 'B', text: '5′–TACGCAAUGCCG–3′', is_correct: false },
      { id: 'C', text: '5′–GCGGCAUUGCGU–3′', is_correct: false },
      { id: 'D', text: '5′–CGCCGUAACGCA–3′', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Transkrypcja: polimeraza RNA odczytuje nić matrycową w kierunku 3′→5′ i syntetyzuje komplementarną nić mRNA w kierunku 5′→3′. Reguły komplementarności (DNA→RNA): A↔U, T↔A, G↔C, C↔G. Nić matrycowa (3′→5′): T-A-C-G-C-A-A-T-G-C-C-G. Komplementarny mRNA (5′→3′): A-U-G-C-G-U-U-A-C-G-G-C. Uwaga: T w DNA → U w RNA (uracyl, nie tymina). AUG to kodon startowy (metionina). Odpowiedź A: 5′–AUGCGUUACGGC–3′ ✓. B — błąd: pozostawiono T zamiast U. C i D — błędna komplementarność lub kierunek.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.transkryp,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących terminacji transkrypcji u prokariontów.\nA. Terminacja Rho-niezależna (wewnętrzna): sekwencja terminatora DNA koduje bogaty w G-C palindrom (tworzy spinki na mRNA) + stretch U, co powoduje destabilizację hybryd RNA-DNA i uwolnienie transkryptu.\nB. Terminacja Rho-zależna: czynnik białkowy Rho (helicaza RNA) podąża za polimerazą, chwyta transkrypt mRNA i rozkręca hybrydę RNA-DNA w miejscu pauzy polimerazy.\nC. U eukariontów terminacja transkrypcji mRNA (Pol II) wymaga sekwencji sygnałowej poliadenylacji (AAUAAA) — cięcie pre-mRNA ~10–30 nt za nią i dodanie ogona poly-A zastępuje klasyczny sygnał STOP.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Terminacja Rho-niezal.: palindrom G-C (spinka) + stretch U → uwolnienie RNA.', is_correct: true },
      { id: 'B', text: 'Terminacja Rho-zal.: Rho (helicaza RNA) rozkręca hybrydę RNA-DNA w miejscu pauzy.', is_correct: true },
      { id: 'C', text: 'U eukariontów terminacja Pol II: sygnał AAUAAA → cięcie + poly-A zastępuje sygnał STOP.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: terminator Rho-niezależny: sekwencja DNA zawiera palindrom (~GC-rich) → na mRNA tworzy stabilna spinka (stem-loop) + stretch U (~6–8U) → hybryda rU-dA słaba → mRNA samoistnie wysuwa się z polimerazy. B — Prawda: czynnik Rho (hexamer, helikaza i NTPaza): wiąże rut (Rho utilization) sekwencję pre-mRNA → przemieszcza się 5′→3′ → gdy polimeraza pauzuje na terminalnej sekwencji → Rho rozplata RNA-DNA → uwolnienie transkryptu. C — Prawda: u eukariontów: sygnał poliA (AAUAAA) na pre-mRNA → czynniki CPSF, CstF rozpoznają sygnał → endonukleoliza ~10–30 nt za AAUAAA → poli(A)-polimeraza dodaje ~200 adenozyn. Terminacja Pol II jest powiązana z tym cięciem (kooperacja).',
    difficulty: 3, verified: true,
  },

  // ─── Obróbka potranskrypcyjna (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.obrobka,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nDojrzały mRNA eukariontyczny (gotowy do translacji) różni się od pierwotnego transkryptu (pre-mRNA) przede wszystkim przez:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'dodanie na końcu 3′ czapeczki 7-metyloguanozynowej (m⁷G cap) stabilizującej mRNA', is_correct: false },
      { id: 'B', text: 'usunięcie intronów i połączenie eksonów (splicing), dodanie czapeczki m⁷G na 5′ i ogona poly-A na 3′', is_correct: true },
      { id: 'C', text: 'zastąpienie wszystkich uracyli tyminą — mRNA zawiera DNA zamiast RNA', is_correct: false },
      { id: 'D', text: 'usunięcie eksonów i zachowanie tylko intronów jako matrycy dla translacji', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Trzy modyfikacje pre-mRNA u eukariontów: (1) Kapowanie 5′: dodanie 7-metyloguanozyny (m⁷GpppN) na koniec 5′ → ochrona przed egzonukleazami 5′→3′, rozpoznanie przez rybosomy (eIF4E wiąże cap → inicjacja translacji). (2) Poliadenylacja 3′: poly-A (~200A) dodawana przez poly(A)-polimerazę → stabilizacja mRNA, ułatwia eksport z jądra, reguluje czas życia mRNA. (3) Splicing: spliceosom (kompleks snRNP: U1, U2, U4, U5, U6) rozpoznaje sekwencje splice donor (GT) i splice acceptor (AG) → usunięcie intronów w postaci lasso → połączenie eksonów. A — błąd: cap dodawany na 5′, nie 3′. D — błąd: introny usuwane, eksony zachowane.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.obrobka,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących splicingu i alternatywnego splicingu.\nA. Splicing pre-mRNA jest katalizowany przez spliceosom — kompleks zbudowany z pięciu snRNP (U1, U2, U4/U6, U5) zawierających snRNA i białka.\nB. Alternatywny splicing umożliwia uzyskanie różnych izoform białkowych z jednego genu — np. gen tropomiozyny u szczurów daje ponad 12 różnych mRNA w różnych tkankach.\nC. Sekwencje intronowe usunięte podczas splicingu są degradowane natychmiast i nie pełnią żadnej funkcji biologicznej.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Spliceosom: 5 snRNP (U1, U2, U4, U5, U6) + białka.', is_correct: true },
      { id: 'B', text: 'Alternatywny splicing: wiele izoform z jednego genu (np. tropomiozyna).', is_correct: true },
      { id: 'C', text: 'Sekwencje intronów: natychmiast degradowane, bez funkcji biologicznej.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: spliceosom = dynamiczny kompleks ~5 snRNP (small nuclear ribonucleoprotein) + liczne białka (~150); U1 rozpoznaje 5′ splice site (GU), U2 wiąże BP (branch point, A); U4/U6 i U5 tworzą katalytyczne centrum. B — Prawda: alternatywny splicing (AS): ~94% genów ludzkich produkuje ≥2 izoformy; mechanizmy: pominięcie eksonu, alternatywne miejsca splice, intron retencji; rozszerza proteom bez zwiększania liczby genów (~20 000 genów → >100 000 izoform białkowych). C — Fałsz: wiele intronów pełni funkcje regulatorowe: zawierają sekwencje enhancerów intronic, snoRNA (małe RNA jąderkowe), miRNA, lncRNA (długie niekodujące RNA) wbudowane w sekwencje intronowe. Usunięte introny (lasso) mogą być przetwarzane do małych RNA.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.obrobka,
    question_text: 'Które z poniższych stwierdzeń dotyczących edycji RNA (RNA editing) i obróbki tRNA są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Edycja RNA (editing) to proces zmiany sekwencji mRNA po transkrypcji — np. deaminacja C→U lub A→I (inozynę) zmienia kodon i kodowany aminokwas', is_correct: true },
      { id: 'B', text: 'Pre-tRNA ulega obróbce: wycięcie sekwencji liderowej przez RNazę P (rybozym!), dołączenie sekwencji CCA na końcu 3′ i modyfikacje zasad (pseudourydyna, dimetylguanozyna)', is_correct: true },
      { id: 'C', text: 'Ogon poly-A na końcu 3′ mRNA jest kodowany bezpośrednio w genie — sekwencja AAAAAA jest na matrycy DNA', is_correct: false },
      { id: 'D', text: 'Czapeczka m⁷G na 5′ mRNA chroni przed degradacją i jest rozpoznawana przez czynnik inicjacyjny eIF4E podczas translacji', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: editing RNA: APOBEC (deaminaza C→U) zmienia kodon CAA na UAA (stop) w mRNA apolipoproteiny B w jelicie (skróca białko); ADAR (deaminaza A→I) zmienia A na inozynę (odczytywana jak G) → zmiana kodonów; receptor glutaminianowy (GluR-B): edycja Q→R blokuje przepuszczalność Ca²⁺. B — Prawda: RNaza P (katalityczna podjednostka RNA = rybozym, Nobel Altman/Cech 1989) — obróbka 5′ pre-tRNA; nukleotydylotransferaza CCA-dodaje -CCA-3′ (miejsce przyłączenia aa); modyfikacje: Ψ (pseudourydyna), m²G (dimetylguanozyna), T (rybotymin). D — Prawda: eIF4E wiąże cap → rekrutacja rybosomu 43S → inicjacja translacji cap-zależna. C — Fałsz: ogon poly-A jest dodawany potranskrypcyjnie przez poly(A)-polimerazę, nie jest zakodowany w DNA (sygnał: AAUAAA na mRNA).',
    difficulty: 3, verified: true,
  },

  // ─── Kod genetyczny (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.kod,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących właściwości kodu genetycznego.\nA. Kod genetyczny jest trójkowy — każdy kodon składa się z trzech nukleotydów mRNA i koduje jeden aminokwas (lub sygnał STOP).\nB. Kod genetyczny jest zdegenerowany (zwyrodniały) — większość aminokwasów kodowana jest przez więcej niż jeden kodon; synonimy różnią się zwykle trzecią (3′) zasadą kodonu.\nC. Kod genetyczny jest nieuniwersalny — każdy gatunek posiada swój własny, unikalny zestaw kodonów nieprzekładalny między organizmami.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Kod trójkowy: kodon = 3 nukleotydy mRNA → 1 aa lub STOP.', is_correct: true },
      { id: 'B', text: 'Kod zdegenerowany: większość aa ma >1 kodon; synonimy różnią się głównie pozycją 3′.', is_correct: true },
      { id: 'C', text: 'Kod genetyczny jest nieuniwersalny — każdy gatunek ma własny unikalny kod.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: 4³ = 64 możliwe kodony: 61 koduje 20 aminokwasów + 3 kodony STOP (UAA, UAG, UGA). Kodon startowy: AUG (Met, formyl-Met u prokariontów). B — Prawda: degeneracja: Met i Trp — tylko 1 kodon; Leu, Ser, Arg — po 6 kodonów. Pozycja "chwiejna" (wobble, Crick 1966): 3′ zasada kodonu toleruje niektóre niedopasowania z antykodonem tRNA → jeden tRNA może dekodować kilka synonimicznych kodonów. C — Fałsz: kod genetyczny jest PRAWIE UNIWERSALNY — ten sam u bakterii, drożdży, roślin, człowieka. Nieliczne wyjątki: mitochondrialny kod (UGA koduje Trp, nie Stop; AUA koduje Met; AGA/AGG = Stop, nie Arg), rzęski (UAA i UAG kodują Gln zamiast Stop). Universalność dowodzi wspólnego pochodzenia życia.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.kod,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nMutacja punktowa zmieniająca w kodonie triplet GAA na GAG to przykład mutacji:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'missense — zmiana aminokwasu: GAA (Glu) → GAG (Val), co może zmienić funkcję białka', is_correct: false },
      { id: 'B', text: 'synonimicznej (silent) — GAA i GAG kodują ten sam aminokwas (Glu, kwas glutaminowy), zmiana nie wpływa na białko', is_correct: true },
      { id: 'C', text: 'nonsens — nowy kodon GAG jest kodonem STOP, co prowadzi do przedwczesnej terminacji', is_correct: false },
      { id: 'D', text: 'przesunięcia ramki odczytu (frameshift) — insercja/delecja nukleotydów zmienia wszystkie dalsze kodony', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Typy mutacji punktowych (zmiany jednego nukleotydu): Synonimiczne (silent): nowy kodon koduje ten sam aa → brak zmiany białka; GAA (Glu, E) i GAG (Glu, E) to synonimy (różnią się tylko 3. zasadą: A→G, degeneracja kodu). Missense: nowy kodon → inny aa; np. GAA (Glu) → GUA (Val) → anemia sierpowata (Glu→Val w β-globinie). Nonsens: nowy kodon → STOP; np. CAG (Gln) → UAG (Stop) → przedwczesna terminacja → obcięte białko. Frameshift: insercja/delecja (nie substytucja) n ≠ 3 nukleotydów → zmiana ramki odczytu → kompletnie inne aa od miejsca mutacji → zwykle nonsens dalej. A — błąd: GAA i GAG obydwa = Glu. C — błąd: GAG = Glu, nie STOP. D — błąd: to substytucja, nie indel.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.kod,
    question_text: 'Które z poniższych stwierdzeń dotyczących kodonu AUG są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'AUG jest jedynym kodonem startowym w standardowym kodzie genetycznym — inicjuje translację i koduje metioninę (Met, M)', is_correct: true },
      { id: 'B', text: 'U prokariontów AUG koduje N-formylometioninę (fMet), która jest usuwana po translacji — u eukariontów inicjuje Met', is_correct: true },
      { id: 'C', text: 'W mRNA może znajdować się wiele kodonów AUG — rybosom prokariontyczny rozpoznaje właściwy AUG start na podstawie sekwencji Shine-Dalgarno przed tym AUG', is_correct: true },
      { id: 'D', text: 'Kodon AUG wewnątrz sekwencji kodującej (nie startowy) koduje amino kwas inny niż metionina — każdy kodon AUG ma inne znaczenie zależnie od pozycji', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: AUG (adenozyna-uracyl-guanozyna) = jedyny kodon startowy; koduje Met; komplementarny antykodon: 3′-UAC-5′ (tRNA-Met, tRNA-fMet). B — Prawda: u prokariontów: tRNA-fMet wprowadza N-formylometioninę (fMet) → po syntezie łańcucha deformylaza i aminopeptydaza usuwają fMet (wiele białek bakt. nie ma Met na końcu N). U eukariontów: tRNA-Met-inicjatorowe → Met, zwykle usuwane przez Met-aminopeptydazy. C — Prawda: polistruktura mRNA prokariontycznego (operon) ma wiele miejsc startowych; sekwencja Shine-Dalgarno (GGAGG, ~10 nt przed AUG) komplementarna do 16S rRNA 30S podjednostki → prawidłowe ustawienie rybosomu. D — Fałsz: każdy kodon AUG wewnątrz sekwencji kodującej NADAL koduje metioninę (Met, M) — kod genetyczny jest konteksto-niezależny dla standardowych kodonów (wyjątkiem jest selenocysteina/pirrolizyna przy specjalnych elementach mRNA).',
    difficulty: 2, verified: true,
  },

  // ─── Translacja (4) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.translacja,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nTranslacja u prokariontów inicjowana jest w następujący sposób:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Rybosom 70S (30S + 50S) wiąże się bezpośrednio do czapeczki m⁷G na 5′ końcu mRNA i skanuje do pierwszego AUG', is_correct: false },
      { id: 'B', text: 'Podjednostka 30S (z IF1, IF2-GTP, IF3) wiąże tRNA-fMet do miejsca P; sekwencja Shine-Dalgarno mRNA paruje z 16S rRNA → ustawienie AUG; dołącza 50S → 70S kompleks inicjacyjny', is_correct: true },
      { id: 'C', text: 'Czynnik inicjacyjny eIF4E wiąże czapeczkę i rekrutuje rybosomy 40S do mRNA — jak u eukariontów', is_correct: false },
      { id: 'D', text: 'Rybosom 80S wiąże się bezpośrednio do kodonu STOP i cofa w kierunku 5′ do pierwszego AUG', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Inicjacja translacji u prokariontów (3 etapy): (1) IF3 blokuje asocjację 30S i 50S; IF1 zajmuje miejsce A; (2) Mały kompleks 30S-IF1-IF3 rozpoznaje Shine-Dalgarno (GGAGG, ~5–10 nt przed AUG) komplementarnie do sekwencji 3′ 16S rRNA (antySD: CCUCC) → ustawienie AUG w miejscu P; tRNA-fMet (ładowany IF2-GTP) wchodzi do miejsca P; (3) dołącza 50S → IF2-GTP hydrolizuje do IF2-GDP → uwolnienie czynników → 70S kompleks inicjacyjny gotowy do elongacji. U eukariontów: rybosom 43S (40S + czynniki eIF) wiąże czapeczkę przez eIF4E i skanuje do AUG (mechanizm skanowania). A i C — opis inicjacji eukariotycznej. D — rybosom 80S to eukariotyczny.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.translacja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących etapów elongacji translacji.\nA. W fazie elongacji rybosom ma trzy miejsca wiążące tRNA: A (aminoacyl-tRNA, akceptorowe), P (peptydyl-tRNA, donor peptydu), E (exit, wyjście — zdeacylowany tRNA).\nB. Transferaza peptydylowa (aktywność katalityczna 23S rRNA w 50S podjednostce) katalizuje tworzenie wiązania peptydowego między aminokwasem w miejscu A a peptydem w miejscu P — jest przykładem rybozymu.\nC. Translokacja (przesunięcie mRNA i tRNA przez rybosom o 1 kodon w kierunku 3′) nie wymaga energii i przebiega spontanicznie bez czynników białkowych.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Miejsca tRNA w rybosomie: A (aminoacyl), P (peptydyl), E (exit).', is_correct: true },
      { id: 'B', text: 'Transferaza peptydylowa: aktywność 23S rRNA → rybozym; tworzy wiązanie peptydowe.', is_correct: true },
      { id: 'C', text: 'Translokacja przebiega spontanicznie bez energii i czynników białkowych.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: trzy miejsca tRNA: A (Aminoacyl): nowy aminoacylo-tRNA z EF-Tu-GTP; P (Peptydyl): tRNA z rosnącym łańcuchem; E (Exit): zdeacylowany tRNA opuszczający rybosom. B — Prawda: Nobel 2009 (Ramakrishnan, Steitz, Yonath): centrum peptydylotransferazy (PTC) w 23S rRNA/50S (70S) lub 28S rRNA/60S (80S) — RNA, nie białko, katalizuje tworzenie wiązania peptydowego → rybozym; mechanizm: nukleofilowe atakowanie aminoacyl-tRNA-A przez NH₂ grupy aa w miejscu P. C — Fałsz: translokacja katalizowana przez czynnik elongacyjny: EF-G (prokariont) lub eEF2 (eukariont) z hydrolizą GTP → energia GTP napędza mechaniczny ruch mRNA-tRNA o 3 nt (1 kodon) w kierunku 5′→3′ względem rybosomu (mRNA przesuwa się o 1 kodon w kierunku 3′).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.translacja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących terminacji translacji i losu białka.\nA. Terminacja translacji zachodzi, gdy rybosom napotyka kodon STOP (UAA, UAG lub UGA) — czynniki uwalniające (RF1 lub RF2 u prokariontów, eRF1 u eukariontów) zajmują miejsce A i katalizują hydrolizę wiązania peptydyl-tRNA, uwalniając gotowy łańcuch polipeptydowy.\nB. Wiele rybosomów może jednocześnie translować ten sam mRNA — taka struktura nosi nazwę polirybosomów (polisomów) i zwiększa efektywność syntezy białek.\nC. Po translacji wszystkie białka są natychmiast funkcjonalne — żadne nie wymagają dodatkowych modyfikacji ani składania w struktury wyższego rzędu.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Terminacja: kodon STOP + czynniki RF → hydroliza peptydyl-tRNA → uwolnienie białka.', is_correct: true },
      { id: 'B', text: 'Polirybosomy (polisomy): wiele rybosomów na jednym mRNA jednocześnie.', is_correct: true },
      { id: 'C', text: 'Wszystkie białka są natychmiast funkcjonalne — żadne nie wymagają modyfikacji.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: RF1 rozpoznaje UAA, UAG; RF2 rozpoznaje UAA, UGA; eRF1 rozpoznaje wszystkie 3 STOP u eukariontów; RF3/eRF3 (GTPaza) stymuluje uwolnienie RF1/2 po hydrolizie. Po terminacji: RF + rybosomy disocjują (czynniki recyrkulacji RRF, EF-G). B — Prawda: polisomy = polirybosomy: wiele rybosomów nasuniętych na mRNA w odległości ~35 nt → kilka kopii białka syntetyzowane jednocześnie; widoczne w mikroskopie elektronowym; in vitro: preparaty polisomów używane do izolacji aktywnie translowanych mRNA. C — Fałsz: większość białek wymaga: fałdowania (chaperony: Hsp70, Hsp90, chaperoniny GroEL/GroES), modyfikacji potranslacyjnych (glikozylacja, fosforylacja, acetylacja, ubikwitynacja, proteolityczne cięcie propeptydów jak u insuliny/kolagenu), złożenia multimerów (hemoglobina: α₂β₂), transportu do właściwego przedziału.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.translacja,
    question_text: 'Które z poniższych substancji hamują translację i wskaż ich mechanizm działania?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Puromycyna: analog aminoacylo-tRNA, wbudowuje się w miejsce A rybosomu i powoduje przedwczesne odłączenie niedokończonego łańcucha — działa na rybosomy 70S i 80S', is_correct: true },
      { id: 'B', text: 'Cykloheximid: hamuje translokację na rybosomach 80S (eukarioty) — stosowany w badaniach, selektywny wobec eukariontów', is_correct: true },
      { id: 'C', text: 'Tetracyklina: blokuje wiązanie aminoacylo-tRNA do miejsca A rybosomów 70S (prokarioty) — antybiotyk bakteriostatyczny', is_correct: true },
      { id: 'D', text: 'Interferony (IFN-α/β): bezpośrednio blokują rybosomy 70S i są skuteczne jako antybiotyki przeciwbakteryjne', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: puromycyna: analog 3′ końca aminoacylo-tRNA (z p-metoksyfenyloalaniną) → wbudowanie do miejsca A → wiązanie peptydowe z rosnącym peptydem → produkt "peptydylo-puromycyna" odpada (bez dalszej elongacji); działa na 70S I 80S (brak selektywności → toksyczna, nieużywana terapeutycznie). B — Prawda: cykloheximid: hamuje peptydylotransferazę i translokację na rybosomach 80S; nie działa na 70S (prokarioty) → selektywny dla eukariontów; stosowany in vitro do zatrzymania syntezy białek w badaniach i do wzbogacania RNA w polisomach. C — Prawda: tetracykliny: chelatują Mg²⁺ i wiążą małą podjednostkę 30S, blokując wejście aa-tRNA do miejsca A → bakteriostatyczne; spektrum szerokie; oporność przez pompy (tet-efflux). D — Fałsz: interferony (IFN) to cytokiny inducing antiviral state w komórkach eukariotycznych: aktywują PKR (kinaza ds-RNA) → fosforylacja eIF2α → zatrzymanie translacji eukariontycznej; nie działają bezpośrednio na rybosomy 70S i nie są antybiotykami.',
    difficulty: 3, verified: true,
  },

  // ─── Regulacja ekspresji u prokaryotów (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.regProk,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nOperon laktozowy (lac operon) E. coli jest układem regulatorowym, w którym:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'białko represora lac (produkt genu lacI) w nieobecności laktozy wiąże operator lacO i blokuje transkrypcję genów lacZ, lacY, lacA — geny są wyłączone', is_correct: true },
      { id: 'B', text: 'glukoza jest induktorem operonu lac — jej obecność aktywuje transkrypcję genów metabolizmu laktozy', is_correct: false },
      { id: 'C', text: 'operon lac jest przykładem regulacji negatywnej przez atenuację transkrypcji — mechanizm stosowany wyłącznie przez operony aminokwasowe', is_correct: false },
      { id: 'D', text: 'w obecności laktozy białko CRP-cAMP wyłącza operon lac, a represor go aktywuje', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Operon lac (Jacob i Monod 1961, Nobel 1965) — model regulacji negatywnej i pozytywnej: Represja (regulacja negatywna): białko lac repressor (lacI) wiąże operator O1 (+ O2, O3) → blokuje Pol RNA → brak transkrypcji lacZYA. Indukcja: allolaktoza (izomer laktozy) wiąże represor → zmiana konformacji → odłączenie od operatora → transkrypcja. Aktywacja przez CAP (CRP): niski poziom glukozy → wysoki cAMP (adenylyl cyklaza) → cAMP + CAP → wiązanie do CAP-site (+40 nt przed +1) → stymulacja Pol RNA; wysoka glukoza → niskie cAMP → brak stymulacji (katabolit represja). B — błąd: glukoza HAMUJE operon lac (katabolit represja). Laktoza jest induktorem. D — błąd: CRP-cAMP aktywuje operon, represor go hamuje.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.regProk,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących operonu tryptofanowego (trp operon) E. coli.\nA. Operon trp jest przykładem operonu represyjnego (repressible): tryptofan (korepresor) wiąże aporepressor → aktywny represor blokuje operator → wyłączenie genów syntezy Trp.\nB. Atenuacja transkrypcji operonu trp polega na tworzeniu przez lidera mRNA (trpL) struktury spinkowej "terminator" lub "antyterminator" zależnie od poziomu tryptofanu i prędkości translacji rybosomu na sekwencji lidera.\nC. Wysoki poziom tryptofanu w komórce aktywuje operon trp — więcej Trp → więcej enzymów syntezy Trp (logika feedforward).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Operon trp: represyjny; Trp (korepresor) aktywuje represor → blokada transkrypcji.', is_correct: true },
      { id: 'B', text: 'Atenuacja: spinka terminatorowa vs antyterminator zależnie od [Trp] i tempa translacji.', is_correct: true },
      { id: 'C', text: 'Wysoki Trp → aktywacja operonu trp → więcej enzymów biosyntezy.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: operon trp działa na zasadzie ujemnego sprzężenia zwrotnego: nadmiar Trp → blokada własnej syntezy. Aporepressor (TrpR) sam nie wiąże operatora; Trp (korepresor) wiąże TrpR → kompleks represor-Trp wiąże operator trpO → hamowanie. B — Prawda: mechanizm atenuacji (alternatywny do represji, ok. 8× regulacja): lider mRNA (trpL, 141 nt) → poliribosom z rybosomem na kodującym Trp (UGGUGG w liderze); brak Trp → rybosom staje na UGGUGG → sekwencje 2+3 formują antyterminator → transkrypcja przez → kontynuacja; nadmiar Trp → szybka translacja → sekwencje 3+4 formują terminator (rho-niezależny) → zatrzymanie transkrypcji w liderze. C — Fałsz: ODWROTNIE — wysoki Trp wyłącza (hamuje) operon trp (represja + atenuacja). Logika: brak Trp → aktywuj geny syntezy Trp.',
    difficulty: 3, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.regProk,
    question_text: 'Które z poniższych mechanizmów regulacji ekspresji genów WYSTĘPUJĄ u prokariontów?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Regulacja na poziomie transkrypcji przez białka repressor/aktywator wiążące DNA', is_correct: true },
      { id: 'B', text: 'Atenuacja transkrypcji przez tworzenie alternatywnych struktur drugorzędowych mRNA lidera', is_correct: true },
      { id: 'C', text: 'Regulacja przez małe regulatory RNA (sRNA): sekwencje ~50–200 nt komplementarne do mRNA target, hamujące translację lub degradację', is_correct: true },
      { id: 'D', text: 'Metylacja histonów jako mechanizm epigenetycznej regulacji dostępu do DNA', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: represory (lac, trp) i aktywatory (CAP/CRP) to podstawowe białka regulatorowe prokariontyczne wiążące DNA w okolicach promotora. B — Prawda: atenuacja — mechanizm specyficzny dla prokariontów (gdzie transkrypcja i translacja są sprzężone); niemożliwy u eukariontów (transkrypcja w jądrze, translacja w cytoplazmie). C — Prawda: prokariontyczne sRNA (small regulatory RNA): np. RprA, DsrA, GcvB (E. coli); parują z komplementarnymi mRNA → blokowanie translacji lub ułatwianie degradacji przez RNazę E; regulują odpowiedź na stres, wirulencję. D — Fałsz: prokarioty NIE mają histonów (a zatem nie metylują histonów) — archea mają białka podobne do histonów, ale metylacja histonów jako mechanizm epigenetyczny jest charakterystyczna wyłącznie dla eukariontów.',
    difficulty: 2, verified: true,
  },

  // ─── Regulacja ekspresji u eukaryotów (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.regEuk,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nEnhancery są elementami cis-regulatorowymi ekspresji genów u eukariontów. Które stwierdzenie POPRAWNIE opisuje enhancery?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Enhancery to sekwencje DNA zlokalizowane zawsze dokładnie −35 bp przed miejscem startu transkrypcji i działają przez przyciąganie faktora σ', is_correct: false },
      { id: 'B', text: 'Enhancery mogą znajdować się w odległości tysięcy par zasad od genu, po obu jego stronach lub wewnątrz intronów; działają niezależnie od orientacji, wiążąc specyficzne czynniki transkrypcyjne (aktywatory)', is_correct: true },
      { id: 'C', text: 'Enhancery działają wyłącznie w próbówce (in vitro) — nie pełnią funkcji regulacyjnej in vivo', is_correct: false },
      { id: 'D', text: 'Enhancery to sekwencje kodujące białka regulatorowe — są translowane do aktywatorów transkrypcji', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Enhancery (wzmacniacze): sekwencje DNA 100–1000 bp → wiążą specyficzne TF (aktywatory), np. NF-κB, p53, HIF-1α. Właściwości: działają niezależnie od orientacji (5′→3′ lub 3′→5′), mogą być odległe o >1 Mb od genu (pętle chromatynowe zbliżają enhancer do promotora: model petli, kohesin+CTCF), mogą być w intronach, eksonach lub za genem, działają tylko w odpowiednich komórkach/warunkach (specyficzność tkankowa i czasowa). Mechanizm: aktywator na enhancerze → mediator complex → pętla DNA → kontakt z Pol II na promotorze → aktywacja transkrypcji. Silenсery: analogiczne, ale hamują transkrypcję. A — opis sekwencji −35 u prokariontów. D — błąd: enhancery to nicodujące sekwencje DNA.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.regEuk,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących regulacji ekspresji genów u eukariontów.\nA. Czynniki transkrypcyjne (TF) to białka wiążące specyficzne sekwencje DNA (motyw w DNA np. CACGTG) przez domeny: palce cynkowe (zinc fingers), leucynowe suwaki (leucine zippers), helisa-pętla-helisa (HLH).\nB. MikroRNA (miRNA) to małe (~22 nt) jednoniciowe RNA, które po połączeniu z RISC kompleksem wiążą się do 3′ UTR docelowego mRNA i hamują jego translację lub powodują degradację.\nC. Ubikwitynacja białek przez kompleks proteasomowy 26S degraduje wyłącznie białka wadliwe i błędnie złożone — nigdy białka regulatorowe.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'TF wiążą DNA przez motywy: palce cynkowe, suwaki leucynowe, HLH.', is_correct: true },
      { id: 'B', text: 'miRNA: ~22 nt, RISC, 3′UTR target mRNA → hamowanie translacji/degradacja mRNA.', is_correct: true },
      { id: 'C', text: 'Ubikwitynacja i proteasom: degraduje wyłącznie wadliwe białka, nigdy regulatorowe.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: domeny wiążące DNA TF: palce cynkowe (Zn²⁺ koordynuje Cys/His, np. Sp1, TFIIIA), suwaki leucynowe (leucine zipper, np. AP-1/Jun/Fos, CREB), HLH (helix-loop-helix, np. Myc, Max), HTH (helix-turn-helix u prokariontów). B — Prawda: biogeneza miRNA: pri-miRNA → pre-miRNA (Drosha/DGCR8) → miRNA duplex (Dicer/TRBP) → RISC (AGO2) + miRNA "guide" → parowanie z 3′ UTR mRNA → hamowanie translacji lub deadenylacja/degradacja mRNA. ~1000 miRNA u człowieka reguluje ~60% genów. C — Fałsz: szlak ubikwityna-proteasom (UPS) degraduje ZARÓWNO wadliwe białka JAK I krótko żyjące białka regulatorowe (np. cykliny — ich degradacja warunkuje przejście między fazami cyklu komórkowego; IκB → aktywacja NF-κB; p53 przez MDM2). Ubikwitynacja jest kluczowym regulatorem cyklu komórkowego, apoptozy i sygnalizacji.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.regEuk,
    question_text: 'Które z poniższych procesów mogą regulować ilość białka wytwarzanego w komórce eukariotycznej, na etapach poza transkrypcją?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Stabilność mRNA — różny czas półtrwania (od minut do godzin) regulowany przez sekwencje AU-rich w 3′ UTR, długość ogona poly-A i białka RBP', is_correct: true },
      { id: 'B', text: 'Alternatywny splicing pre-mRNA — różne izoformy białkowe z jednego genu', is_correct: true },
      { id: 'C', text: 'Fosforylacja eIF2α — blokowanie inicjacji translacji w odpowiedzi na stres (UPR, odpowiedź na wirusy)', is_correct: true },
      { id: 'D', text: 'Liczba genomów w komórce — komórki diploidalne wytwarzają zawsze dokładnie dwukrotnie więcej białka niż haploidalne, niezależnie od innych czynników', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: czas życia mRNA (half-life): β-globina t½ ~10 h, protoonkogen c-myc t½ ~30 min; AU-rich elements (ARE) w 3′ UTR → rekrutacja deadenylaz → degradacja; miRNA → destabilizacja; krótkie poly-A → szybsza degradacja. B — Prawda: alternatywny splicing → różne białka w różnych tkankach lub warunkach (np. BCL-X: izoforma XL = antyapoptotyczna, XS = proapoptotyczna). C — Prawda: kinazy zintegrowanego stresu (ISR): PKR (wirusy), HRI (hem), GCN2 (głód aa), PERK (stres ER) → fosforylacja eIF2α (Ser51) → zahamowanie inicjacji translacji (mniej trójkowych kompleksów Met-tRNA-GTP-eIF2) → globalne zmniejszenie syntezy białek, ale wybiórcze zwiększenie translacji mRNA z uORF (np. ATF4). D — Fałsz: ploidy wpływa na dawkę genów, ale nie jest prostą zależnością 2×; regulacja ekspresji niweluje efekt dawki; np. kompensacja dawki chromosomów płci (inaktywacja X).',
    difficulty: 3, verified: true,
  },

  // ─── Epigenetyka (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.epigenet,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nEpigenetyka to dziedzina badająca zmiany w ekspresji genów, które:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'zawsze wynikają z mutacji sekwencji DNA i są nieodwracalne przez całe życie organizmu', is_correct: false },
      { id: 'B', text: 'mogą być dziedziczone przez komórki potomne, a nawet między pokoleniami, bez zmian w sekwencji DNA — mechanizmy obejmują metylację DNA, modyfikacje histonów i ncRNA', is_correct: true },
      { id: 'C', text: 'dotyczą wyłącznie ekspresji genów w komórkach nowotworowych i nie odgrywają roli w normalnym rozwoju', is_correct: false },
      { id: 'D', text: 'są przypadkowymi zmianami konformacji białek histonowych bez wpływu na dostęp polimerazy do DNA', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Epigenetyka (gr. epi = ponad genetyką): zmiany ekspresji genów bez zmian sekwencji DNA. Główne mechanizmy: (1) Metylacja DNA: metylotransferazy (DNMT1, 3a, 3b) dodają grupy -CH₃ do cytozyny w dinukleotydach CpG (wysp CpG w promotorach); metylacja → wyciszenie genu; demetylacja → aktywacja; dziedziczona przez DNMT1 (metylacja utrzymująca) po replikacji. (2) Modyfikacje histonów: acetylacja (HAT → luźna chromatyna, aktywacja), deacetylacja (HDAC → gęsta, wyciszenie), metylacja H3K4me3 (aktywacja), H3K27me3 (wyciszenie), H3K9me3 (heterochromatyna). (3) ncRNA: miRNA, lncRNA (Xist, HOTAIR). Epigenetyczne dziedziczenie: imprintowanie genomowe, efekty środowiskowe (dieta, stres) mogą być przekazywane transpokoleniowo.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.epigenet,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących metylacji DNA i jej roli w regulacji genów.\nA. Metylacja cytozyny w wyspach CpG promotorów genów koreluje zazwyczaj z wyciszeniem genu — zmetylowana cytyna jest słabiej odczytywana przez czynniki transkrypcyjne, a białka MBD wiążą metylowane CpG i rekrutują deacetylazy histonów (HDAC).\nB. Imprintowanie genomowe to epigenetyczny mechanizm, w którym ekspresja niektórych genów (np. IGF2, H19) zależy od tego, czy allel pochodzi od matki czy od ojca — zróżnicowana metylacja alleli.\nC. Metylacja DNA jest jedynym mechanizmem wyciszania genów — bez metylacji DNA żaden gen nie może być wyłączony.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Metylacja CpG promotora → wyciszenie; MBD + HDAC → kondensacja chromatyny.', is_correct: true },
      { id: 'B', text: 'Imprintowanie genomowe: ekspresja zależy od rodzicielskiego pochodzenia allelu (IGF2, H19).', is_correct: true },
      { id: 'C', text: 'Metylacja DNA to jedyny mechanizm wyciszania genów.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: wyspy CpG (~1–2 kb, bogate w CpG) w promotorach genów housekeeping → niezmetylowane = geny aktywne; zmetylowane CpG → blokada wiązania TF + rekrutacja MBD1/2/3/MeCP2 → HDAC i HMT (H3K9me) → chromatyna skondensowana → wyciszenie; hipometylacja wysp CpG w nowotworach (reaktywacja onkogenów), hipermetylacja genów supresorowych (BRCA1, MLH1). B — Prawda: imprintowanie (~80 genów u człowieka): monoalleliczna ekspresja zależna od rodzica; np. IGF2 aktywny z allelu ojcowskiego (allel matczyny wyciszony przez metylację DMR); H19 odwrotnie; zaburzenia: zespół Pradery-Williego / Angelmana (delecja 15q11 → brak kopii ojcowskiej lub matczynej). C — Fałsz: inne mechanizmy wyciszania: modyfikacje histonów (deacetylacja, H3K9me, H3K27me3 przez PRC2), siRNA, lncRNA (Xist powoduje inaktywację chromosomu X przez metylację histonów H3K27me3 bez metylacji DNA), kondensacja heterochromatyny.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.epigenet,
    question_text: 'Które z poniższych są przykładami zjawisk epigenetycznych?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Inaktywacja chromosomu X (lyonizacja) u samic ssaków — jeden z dwóch chromosomów X ulega kondensacji do ciałka Barra', is_correct: true },
      { id: 'B', text: 'Mutacja w genie BRCA1 powodująca dziedziczny rak piersi — zmiana sekwencji nukleotydowej DNA', is_correct: false },
      { id: 'C', text: 'Różnicowanie komórek macierzystych w kierunku neuronu vs komórki mięśniowej — te same geny, różna ekspresja epigenetycznie regulowana', is_correct: true },
      { id: 'D', text: 'Wpływ diety (np. kwas foliowy) w czasie ciąży na metylację DNA potomstwa i ryzyko chorób w dorosłości', is_correct: true },
    ],
    correct_answer: ['A', 'C', 'D'],
    explanation: 'A — Prawda: inaktywacja X (Mary Lyon 1961): u samic XX jeden chromosom X jest inaktywowany w każdej komórce somatycznej (losowo lub nielosowo) przez lncRNA Xist + H3K27me3 (PRC2) + metylację DNA → ciałko Barra; mozaika = koty szylkretowe (dwa allele MC1R na X). C — Prawda: epigenomika różnicowania: komórki macierzyste (iPS, ESC) mają identyczny DNA jak neurony i miocyty, ale inny epigenom → inne geny aktywne; zmiana epigenomu programuje los komórki. D — Prawda: kwas foliowy (donor CH₃ w cyklu metioniny) → metylacja DNA; niedobór folianów w ciąży → hipometylacja → wady cewy nerwowej; dieta bogata w folian → prawidłowe imprintowanie; epigenetyczne programowanie płodowe wpływa na ryzyko chorób metabolicznych w dorosłości (hipoteza Barkera). B — Fałsz: mutacja BRCA1 to zmiana sekwencji DNA (mutacja genetyczna, nie epigenetyczna); dziedziczona jako klasyczna mutacja dominująca według prawa Mendla.',
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
  console.log(`Seeding ${questions.length} questions for Genetyka molekularna...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
