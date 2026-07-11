// Seed: 20 closed questions — Komórka i biochemia

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC = 'c4346b31-355b-4817-9e66-22cf36d4c993'

const S = {
  blona:   '02bdc9fd-fcc9-4a74-bb86-477bfaa7dba3',
  org:     '5f7aaca5-c24d-41de-a023-a4fd1edd909d',
  sklad:   'baa3174e-705a-4720-be31-86a859a652e1',
  bialka:  'a42f1d2e-1608-446b-a4b8-4740027f1112',
  kwasy:   '257cec56-c729-474f-8387-eef06eb32e09',
  glikol:  '04e96c80-bd1d-4d99-95b7-c88d4f0ef598',
  lancuch: 'ce23ad40-6d27-4b15-b49f-0e714db0e20e',
  mitoza:  'a21c7985-cdf3-4451-840e-617a993b145e',
  endo:    'b3c2f29e-c078-4af4-9c0e-ea903c659986',
}

const questions = [

  // ── SKŁAD CHEMICZNY (4) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.sklad, question_type: 'single',
    question_text: 'Wskaż prawidłowe dokończenie zdania:\nWysoka temperatura wrzenia wody oraz jej zdolność do pochłaniania dużych ilości ciepła bez znacznej zmiany temperatury wynikają przede wszystkim z:',
    options: [
      { id: 'A', text: 'obecności wiązań jonowych między sąsiednimi cząsteczkami wody', is_correct: false },
      { id: 'B', text: 'małej masy cząsteczkowej H₂O umożliwiającej łatwe parowanie', is_correct: false },
      { id: 'C', text: 'silnych wiązań wodorowych tworzących się między cząsteczkami wody', is_correct: true },
      { id: 'D', text: 'właściwości hydrofobowych wody utrudniających jej mieszanie z innymi substancjami', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Woda tworzy sieć wiązań wodorowych (O···H) między cząsteczkami — każda cząsteczka może tworzyć do 4 wiązań wodorowych. Wiązania te są stosunkowo mocne i liczne, stąd wysoka temperatura wrzenia (100°C) i duże ciepło właściwe — właściwości kluczowe dla termoregulacji i reakcji biologicznych.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sklad, question_type: 'single',
    question_text: 'Która z poniższych cech ODRÓŻNIA fosfolipidy od triacylogliceroli (tłuszczów)?',
    options: [
      { id: 'A', text: 'Fosfolipidy zawierają cholesterol zamiast glicerolu jako rdzeń cząsteczki', is_correct: false },
      { id: 'B', text: 'Fosfolipidy mają dwa łańcuchy kwasów tłuszczowych i polarną głowę fosforanową, podczas gdy triacyloglicerole mają trzy łańcuchy i brak głowy polarnej', is_correct: true },
      { id: 'C', text: 'Triacyloglicerole są głównym składnikiem błon biologicznych, fosfolipidy pełnią wyłącznie funkcję energetyczną', is_correct: false },
      { id: 'D', text: 'Fosfolipidy są całkowicie rozpuszczalne w wodzie, a triacyloglicerole są całkowicie hydrofilowe', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Triacyloglicerole (tłuszcze): glicerol zestryfikowany trzema kwasami tłuszczowymi — całkowicie hydrofobowe, funkcja zapasowa. Fosfolipidy: glicerol z dwoma kwasami tłuszczowymi i grupą fosforanową (+ cholina/seryna itp.) — głowa hydrofilowa + ogony hydrofobowe → amfipatyczna budowa umożliwia tworzenie dwuwarstwy błonowej.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sklad, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnicę między skrobią a celulozą? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Skrobia i celuloza są zbudowane z tych samych monomerów (glukozy), ale różnią się rodzajem wiązań glikozydowych (α-1,4 w skrobi wobec β-1,4 w celulozie)', is_correct: true },
      { id: 'B', text: 'Skrobia pełni funkcję zapasową w komórkach roślinnych, a celuloza — funkcję strukturalną (budulec ściany komórkowej)', is_correct: true },
      { id: 'C', text: 'Skrobia jest trawiona przez amylazy człowieka, celuloza natomiast nie jest trawiona przez enzymy układu pokarmowego człowieka', is_correct: true },
      { id: 'D', text: 'Celuloza zbudowana jest z galaktozy, a skrobia — z glukozy', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Skrobia i celuloza są obie polisacharydami glukozy. Kluczowa różnica: wiązania α-1,4 (skrobia) vs β-1,4 (celuloza) → inny kształt przestrzenny → tylko α-glikozydy trawione przez amylazy człowieka. Skrobia = zapas energii; celuloza = mechaniczne wsparcie ściany komórkowej. Galaktoza nie buduje żadnego z tych polisacharydów.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sklad, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących składu chemicznego komórki:',
    options: [
      { id: 'A', text: 'Aminokwasy łączone są ze sobą wiązaniami peptydowymi powstającymi w reakcji kondensacji (odwodnienia).', is_correct: true },
      { id: 'B', text: 'Tłuszcze nasycone zawierają jedno lub więcej wiązań podwójnych C=C w łańcuchach kwasów tłuszczowych.', is_correct: false },
      { id: 'C', text: 'Glikogen pełni u zwierząt rolę materiału zapasowego analogiczną do roli skrobi u roślin — oba są polisacharydami zbudowanymi z glukozy.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: wiązanie peptydowe (-CO-NH-) powstaje między grupą karboksylową jednego aminokwasu a grupą aminową drugiego z wydzieleniem H₂O. B — Fałsz: wiązania podwójne C=C cechują tłuszcze NIENASYCONE; tłuszcze nasycone mają wyłącznie wiązania pojedyncze i są stałe w temperaturze pokojowej. C — Prawda: glikogen i skrobia to magazynowe polisacharydy glukozy (glikogen silniej rozgałęziony, wiązania α-1,6 co 8–12 reszt).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── KWASY NUKLEINOWE (4) ────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.kwasy, question_type: 'single',
    question_text: 'W której z poniższych cech RNA RÓŻNI się od DNA?',
    options: [
      { id: 'A', text: 'RNA zawiera zasadę azotową cytozynę, której brak w cząsteczce DNA', is_correct: false },
      { id: 'B', text: 'RNA zawiera rybozę zamiast deoksyrybozy oraz uracyl zamiast tyminy', is_correct: true },
      { id: 'C', text: 'RNA tworzy trwałą strukturę podwójnej helisy, a DNA jest z reguły jednoniciowe', is_correct: false },
      { id: 'D', text: 'RNA jest znacznie dłuższą cząsteczką niż DNA i zawiera więcej nukleotydów na komórkę', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'RNA różni się od DNA dwiema cechami chemicznymi: (1) cukier — ryboza (z grupą -OH w pozycji 2) zamiast deoksyrybozy; (2) zasada azotowa — uracyl (U) zamiast tyminy (T). DNA zazwyczaj jest dwuniciowe, RNA — jednoniciowe. Cytozyna i guanina występują w obu typach kwasów nukleinowych.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwasy, question_type: 'single',
    question_text: 'Nukleotyd wchodzący w skład cząsteczki DNA jest zbudowany z:',
    options: [
      { id: 'A', text: 'zasady azotowej, rybozy i reszty fosforanowej', is_correct: false },
      { id: 'B', text: 'zasady azotowej, deoksyrybozy i reszty fosforanowej', is_correct: true },
      { id: 'C', text: 'zasady azotowej, deoksyrybozy i reszty acetylowej', is_correct: false },
      { id: 'D', text: 'aminokwasu, deoksyrybozy i reszty fosforanowej', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Nukleotyd DNA = zasada azotowa (A, T, G lub C) + deoksyryboza (cukier pięciowęglowy bez grupy -OH w pozycji 2) + reszta fosforanowa. Nukleotyd RNA różni się obecnością rybozy (z -OH). Aminokwasy to składniki białek, nie kwasów nukleinowych.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwasy, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują strukturę podwójnej helisy DNA? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Adenina łączy się z tyminą dwoma wiązaniami wodorowymi, a guanina z cytozyną — trzema wiązaniami wodorowymi', is_correct: true },
      { id: 'B', text: 'Dwie nici DNA biegną antyrównolegle — jedna w kierunku 5\'-3\', druga 3\'-5\'', is_correct: true },
      { id: 'C', text: 'Dwie nici DNA połączone są kowalencyjnymi wiązaniami fosfodiesteowymi, a nie wiązaniami wodorowymi', is_correct: false },
      { id: 'D', text: 'Szkielet cukrowo-fosforanowy tworzy zewnętrzną część helisy, a zasady azotowe skierowane są do wnętrza i uczestniczą w parowaniu', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Dwie nici DNA połączone są wiązaniami WODOROWYMI między zasadami (A=T: 2 wiązania; G≡C: 3 wiązania). Wiązania fosfodiesterowe łączą nukleotydy wewnątrz jednej nici. Nici są antyrównoległe (antyparallel). Szkielet cukrowo-fosforanowy jest na zewnątrz, zasady — wewnątrz helisy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kwasy, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy kwasów nukleinowych:',
    options: [
      { id: 'A', text: 'W DNA zawartość procentowa adeniny jest zawsze równa zawartości tyminy, a guaniny — zawartości cytozyny (reguła Chargaffa).', is_correct: true },
      { id: 'B', text: 'Cząsteczki RNA są zawsze jednoniciowe i nigdy nie tworzą struktur drugorzędowych z wiązaniami wodorowymi.', is_correct: false },
      { id: 'C', text: 'Wiązanie fosfodiesterowe w nici DNA łączy resztę fosforanową jednego nukleotydu z cukrem nukleotydu sąsiedniego.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: reguła Chargaffa wynika z komplementarnego parowania nici ([A]=[T], [G]=[C]). B — Fałsz: tRNA i rRNA tworzą złożone struktury drugorzędowe (pętle, trzony, pseudowęzły) dzięki lokalnym wiązaniom wodorowym między komplementarnymi fragmentami tej samej nici. C — Prawda: wiązanie fosfodiesterowe łączy grupę 3\'-OH jednego nukleotydu z grupą 5\'-fosforanową kolejnego.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── GLIKOLIZA I FERMENTACJA (3) ─────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.glikol, question_type: 'single',
    question_text: 'W której części komórki eukariotycznej przebiega glikoliza?',
    options: [
      { id: 'A', text: 'W macierzy mitochondrialnej', is_correct: false },
      { id: 'B', text: 'Na wewnętrznej błonie mitochondrialnej', is_correct: false },
      { id: 'C', text: 'W cytozolu (hyaloplazmie)', is_correct: true },
      { id: 'D', text: 'W przestrzeni między błonami mitochondrialnymi', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Glikoliza — 10-etapowy szlak enzymatyczny rozkładu glukozy do pirogronianu — przebiega w cytozolu. Jest jedynym etapem oddychania komórkowego niezwiązanym z mitochondriami, dzięki czemu zachodzi zarówno w komórkach prokariotycznych, jak i eukariotycznych, niezależnie od dostępności tlenu.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.glikol, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują fermentację alkoholową? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Fermentacja alkoholowa zachodzi w warunkach beztlenowych', is_correct: true },
      { id: 'B', text: 'Produktami końcowymi fermentacji alkoholowej są etanol i dwutlenek węgla (CO₂)', is_correct: true },
      { id: 'C', text: 'Fermentacja alkoholowa prowadzi do syntezy ATP w łańcuchu transportu elektronów', is_correct: false },
      { id: 'D', text: 'Fermentacja alkoholowa jest przeprowadzana m.in. przez drożdże (Saccharomyces cerevisiae) i ma zastosowanie w piwowarstwie oraz piekarnictwie', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Fermentacja alkoholowa przebiega beztlenowo: glukoza → 2 pirogroniany (glikoliza) → 2 acetaldehydy + 2 CO₂ → 2 etanole (redukcja przez NADH). Nie ma łańcucha transportu elektronów — zysk ATP wynosi tylko 2 ATP/glukozę. Drożdże Saccharomyces cerevisiae są organizmami modelowymi tej fermentacji.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.glikol, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących glikolizy i fermentacji:',
    options: [
      { id: 'A', text: 'W wyniku glikolizy z jednej cząsteczki glukozy (6C) powstają dwie cząsteczki pirogronianu (3C), 2 ATP (netto) i 2 NADH.', is_correct: true },
      { id: 'B', text: 'Fermentacja mlekowa zachodzi wyłącznie u bakterii mlekowych i nie może zachodzić w komórkach mięśniowych człowieka.', is_correct: false },
      { id: 'C', text: 'Glikoliza zachodzi zarówno w warunkach tlenowych, jak i beztlenowych — jest procesem niezależnym od dostępności O₂.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: bilans glikolizy: glukoza → 2 pirogroniany + 2 ATP netto + 2 NADH. B — Fałsz: fermentacja mlekowa zachodzi RÓWNIEŻ w mięśniach człowieka podczas intensywnego wysiłku przy niedoborze O₂ — pirogronian redukowany jest do mleczanu przez dehydrogenazę mleczanową z utlenieniem NADH. C — Prawda: glikoliza jako szlak cytozolowy nie wymaga O₂.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── ŁAŃCUCH ODDECHOWY (3) ────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.lancuch, question_type: 'single',
    question_text: 'W której strukturze komórki eukariotycznej zlokalizowany jest łańcuch transportu elektronów (łańcuch oddechowy)?',
    options: [
      { id: 'A', text: 'W cytozolu', is_correct: false },
      { id: 'B', text: 'Na zewnętrznej błonie mitochondrialnej', is_correct: false },
      { id: 'C', text: 'Na wewnętrznej błonie mitochondrialnej', is_correct: true },
      { id: 'D', text: 'W macierzy mitochondrialnej', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Kompleksy łańcucha oddechowego (I–IV) i syntaza ATP (kompleks V) są zakotwiczone w wewnętrznej błonie mitochondrialnej (cristae). Pompy protonowe przetłaczają H⁺ z macierzy do przestrzeni między błonami, tworząc gradient elektrochemiczny (siłę protonomotoryczną) napędzający syntazę ATP. Cykl Krebsa przebiega w macierzy.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lancuch, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują przebieg łańcucha transportu elektronów i syntezę ATP w mitochondriach? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Elektrony są przekazywane od NADH i FADH₂ przez kolejne kompleksy białkowe do O₂ — końcowego akceptora elektronów', is_correct: true },
      { id: 'B', text: 'Przepływ elektronów przez kompleksy I, III i IV napędza pompowanie protonów z macierzy do przestrzeni między błonami', is_correct: true },
      { id: 'C', text: 'Syntaza ATP syntetyzuje ATP, gdy protony przepływają z przestrzeni między błonami z powrotem do macierzy przez kanał syntazy (chemiosmoza)', is_correct: true },
      { id: 'D', text: 'Bez obecności O₂ łańcuch transportu elektronów przebiega sprawnie, a produktem jest H₂O₂ zamiast H₂O', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Łańcuch oddechowy: elektrony z NADH/FADH₂ → kompleksy I–IV → O₂ (redukcja do H₂O). Przepływ elektronów napędza pompy protonowe → gradient H⁺ → syntaza ATP (teoria chemiosmotyczna Mitchella, Nobel 1978). Bez O₂ łańcuch się blokuje (O₂ jest niezbędny jako końcowy akceptor elektronów w kompleksie IV).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.lancuch, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chemiosmotycznej syntezy ATP w mitochondriach:',
    options: [
      { id: 'A', text: 'Protony (H⁺) są pompowane z macierzy mitochondrialnej do przestrzeni między błonami przez kompleksy I, III i IV łańcucha oddechowego.', is_correct: true },
      { id: 'B', text: 'Syntaza ATP wytwarza ATP, gdy protony przepływają zgodnie z gradientem — z przestrzeni między błonami z powrotem do macierzy przez kanał syntazy.', is_correct: true },
      { id: 'C', text: 'Jedna cząsteczka NADH i jedna cząsteczka FADH₂ dostarczają do łańcucha oddechowego tę samą ilość energii i prowadzą do syntezy takiej samej liczby cząsteczek ATP.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: kompleksy I, III, IV pompują H⁺ (kompleks II nie pompuje protonów). B — Prawda: jest to istota teorii chemiosmotycznej Mitchella (Nobel 1978). C — Fałsz: NADH daje ok. 2,5 ATP; FADH₂ — ok. 1,5 ATP. FADH₂ wchodzi do łańcucha przy kompleksie II (pomijając kompleks I, który pompuje 4H⁺), więc wytwarza mniejszy gradient protonowy i mniej ATP.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TEORIA ENDOSYMBIOZY (2) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.endo, question_type: 'single',
    question_text: 'Wskaż cechę mitochondriów, która NAJSILNIEJ przemawia za ich pochodzeniem od wolnożyjących prokariotów (teoria endosymbiozy Lynn Margulis):',
    options: [
      { id: 'A', text: 'Mitochondria mają dwie błony — zewnętrzną i wewnętrzną', is_correct: false },
      { id: 'B', text: 'Mitochondria posiadają własne koliste DNA (bez histonów) oraz rybosomy 70S wrażliwe na antybiotyki bakteryjne', is_correct: true },
      { id: 'C', text: 'Mitochondria wytwarzają ATP za pomocą syntazy ATP', is_correct: false },
      { id: 'D', text: 'Wszystkie białka mitochondrialne są kodowane przez DNA jądra komórkowego', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Najsilniejszym dowodem endosymbiozy jest obecność własnego kolistego DNA (bez histonów) i rybosomów 70S — obie cechy typowe dla bakterii, a nie dla eukariontów (DNA liniowe z histonami; rybosomy 80S). Podwójna błona i syntaza ATP nie są cechami specyficznymi. Część białek jest kodowana przez mtDNA, nie wyłącznie przez jądrowe DNA.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.endo, question_type: 'multiple',
    question_text: 'Które z poniższych cech są WSPÓLNE dla mitochondriów i chloroplastów, potwierdzając ich endosymbiotyczne pochodzenie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Posiadają kolistą cząsteczkę DNA pozbawioną histonów', is_correct: true },
      { id: 'B', text: 'Mają rybosomy 70S wrażliwe na antybiotyki bakteryjne (np. chloramfenikol, streptomycynę)', is_correct: true },
      { id: 'C', text: 'Mogą być syntetyzowane de novo przez komórkę eukariotyczną bez udziału istniejących organelli', is_correct: false },
      { id: 'D', text: 'Otoczone są podwójną błoną — zewnętrzna pochodzi ewolucyjnie od błony komórki gospodarza, wewnętrzna od błony bakterii-przodka', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Mitochondria i chloroplasty: (A) koliste DNA bez histonów — jak u prokariotów; (B) rybosomy 70S wrażliwe na antybiotyki bakteryjne — dowód pokrewieństwa z bakteriami; (D) podwójna błona = ślad fagocytozy (błona zewnętrzna: komórka gospodarza; wewnętrzna: bakteria-endosymbiont). (C) jest fałszywe — oba organella mnożą się wyłącznie przez podział preistniejących organelli, nie powstają de novo.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── CYKL KOMÓRKOWY I MITOZA (2) ─────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.mitoza, question_type: 'single',
    question_text: 'W której fazie mitozy chromatydy siostrzane rozdzielają się i wędrują do przeciwnych biegunów wrzeciona podziałowego?',
    options: [
      { id: 'A', text: 'Profaza', is_correct: false },
      { id: 'B', text: 'Metafaza', is_correct: false },
      { id: 'C', text: 'Anafaza', is_correct: true },
      { id: 'D', text: 'Telofaza', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'W anafazie: kohezyny (białka łączące chromatydy siostrzane) ulegają proteolitycznemu rozcięciu przez separazę → chromatydy siostrzane rozdzielają się i wędrują do przeciwnych biegunów, ciągnięte przez skracające się włókna wrzeciona kinetohorowe. W metafazie chromosomy ustawiają się w płytce metafazowej; w profazie kondensują się; w telofazie formują się nowe jądra.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mitoza, question_type: 'multiple',
    question_text: 'Które z poniższych zdarzeń zachodzą podczas INTERFAZY cyklu komórkowego? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Replikacja DNA — podwojenie materiału genetycznego (faza S)', is_correct: true },
      { id: 'B', text: 'Kondensacja chromosomów widoczna pod mikroskopem świetlnym', is_correct: false },
      { id: 'C', text: 'Synteza histonów i innych białek niezbędnych do podziału komórki (fazy G₁ i G₂)', is_correct: true },
      { id: 'D', text: 'Zanik otoczki jądrowej', is_correct: false },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'Interfaza (G₁ → S → G₂): faza S = replikacja DNA + synteza histonów; fazy G₁ i G₂ = wzrost komórki i synteza białek przygotowujących do podziału. Kondensacja chromosomów i zanik otoczki jądrowej zachodzą w PROFAZIE mitozy (nie w interfazie). W interfazie chromatyna jest luźno upakowana i niewidoczna jako dyskretne chromosomy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── BIAŁKA I ENZYMY (2) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.bialka, question_type: 'single',
    question_text: 'Inhibitor kompetycyjny enzymu różni się od inhibitora niekompetycyjnego tym, że:',
    options: [
      { id: 'A', text: 'inhibitor kompetycyjny wiąże się do centrum aktywnego enzymu i współzawodniczy z substratem — jego działanie można osłabić, zwiększając stężenie substratu', is_correct: true },
      { id: 'B', text: 'inhibitor kompetycyjny wiąże się do centrum allosterycznego enzymu i zmienia konformację centrum aktywnego', is_correct: false },
      { id: 'C', text: 'inhibitor kompetycyjny trwale i nieodwracalnie niszczy centrum aktywne enzymu', is_correct: false },
      { id: 'D', text: 'inhibitor kompetycyjny obniża wartość Vmax, nie zmieniając Km enzymu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Inhibitor kompetycyjny ma budowę podobną do substratu, wiąże się do centrum aktywnego i blokuje dostęp substratu. Przy wysokim [S] inhibitor jest wypierany → działanie odwracalne; ↑Km (pozorna), Vmax bez zmian. Inhibitor niekompetycyjny wiąże się do centrum allosterycznego → zmienia konformację → ↓Vmax, Km bez zmian. Nieodwracalne inhibitory (np. tabun, sarin) tworzą trwałe wiązania kowalencyjne.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bialka, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących enzymów:',
    options: [
      { id: 'A', text: 'Enzymy obniżają energię aktywacji reakcji chemicznej, nie zmieniając równowagi reakcji ani nie zużywając się w trakcie katalizy.', is_correct: true },
      { id: 'B', text: 'Temperatura powyżej optimum zawsze przyspiesza reakcję enzymatyczną, ponieważ zwiększa energię kinetyczną substratów.', is_correct: false },
      { id: 'C', text: 'Centrum aktywne enzymu to trójwymiarowa kieszeń komplementarna do substratu, w której zachodzi reakcja katalityczna i która determinuje specyficzność enzymu.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: enzymy obniżają Ea (energię aktywacji) przez stabilizację stanu przejściowego; nie zużywają się i nie przesuwają równowagi termodynamicznej. B — Fałsz: powyżej optymalnej temperatury następuje denaturacja enzymu (utrata struktury trzeciorzędowej) → gwałtowny spadek aktywności do zera. C — Prawda: centrum aktywne to specyficzna kieszeń determinująca specyficzność substratową (model "induced fit" lub "lock and key").',
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
  console.log(`Seeding ${questions.length} closed questions for Komórka i biochemia...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
