// Seed: mock_questions — Komórka i biochemia (17 questions)
// These appear in the /mock-exam "Sprawdzian z całego materiału"

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  blona:       '02bdc9fd-fcc9-4a74-bb86-477bfaa7dba3',
  organelle:   '5f7aaca5-c24d-41de-a023-a4fd1edd909d',
  sklad:       'baa3174e-705a-4720-be31-86a859a652e1',
  bialka:      'a42f1d2e-1608-446b-a4b8-4740027f1112',
  kwasy:       '257cec56-c729-474f-8387-eef06eb32e09',
  glikoliza:   '04e96c80-bd1d-4d99-95b7-c88d4f0ef598',
  lancuch:     'ce23ad40-6d27-4b15-b49f-0e714db0e20e',
  cykl:        'a21c7985-cdf3-4451-840e-617a993b145e',
  endosymbioza:'b3c2f29e-c078-4af4-9c0e-ea903c659986',
}

const questions = [
  // ─── Błona komórkowa i transport ───
  {
    subtopic: 'Komórka i biochemia — Błona komórkowa',
    subtopic_id: S.blona,
    question_type: 'single',
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nTransport aktywny różni się od dyfuzji ułatwionej tym, że:',
    options: [
      { id: 'A', text: 'wymaga białek transportowych, a dyfuzja ułatwiona nie', is_correct: false },
      { id: 'B', text: 'przebiega zgodnie z gradientem stężeń, a dyfuzja ułatwiona — przeciwnie', is_correct: false },
      { id: 'C', text: 'wymaga nakładu energii (ATP) i przebiega WBREW gradientowi stężeń', is_correct: true },
      { id: 'D', text: 'dotyczy wyłącznie jonów nieorganicznych, a dyfuzja ułatwiona — cząsteczek organicznych', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Dyfuzja ułatwiona: pasywna, zgodna z gradientem, wymaga permeaz/kanałów, nie zużywa ATP. Transport aktywny: pompy białkowe przenoszą substancje WBREW gradientowi, hydrolizując ATP (np. pompa Na⁺/K⁺-ATPaza: 3 Na⁺ na zewnątrz, 2 K⁺ do środka za cenę 1 ATP).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Komórka i biochemia — Błona komórkowa',
    subtopic_id: S.blona,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących błony komórkowej:\nA. Fosfolipidy w błonie mogą swobodnie przemieszczać się w płaszczyźnie błony (ruch boczny).\nB. Białka integralne błony komórkowej są rozmieszczone symetrycznie po obu stronach dwuwarstwy lipidowej.\nC. Cholesterol w błonie komórkowej zwierząt zwiększa jej płynność w niskich temperaturach.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, F', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: model płynnej mozaiki — lipidy przemieszczają się lateralnie (flip-flop jest rzadki). B — FAŁSZ: białka integralne są rozmieszczone asymetrycznie; glikokaliks (glikoproteiny, glikolipidy) tylko po zewnętrznej stronie. C — PRAWDA: cholesterol "buforuje" płynność — w niskich T zapobiega zestaleniu (rozdziela łańcuchy kwasów tłuszczowych), w wysokich T ogranicza nadmierne upłynnienie.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Organelle ───
  {
    subtopic: 'Komórka i biochemia — Organelle',
    subtopic_id: S.organelle,
    question_type: 'single',
    question_text: 'Mitochondria i chloroplasty mają wspólne cechy, które stanowią dowód na ich endosymbiotyczne pochodzenie. Które z poniższych stwierdzeń NIEPRAWIDŁOWO opisuje wspólną cechę obu organelli?',
    options: [
      { id: 'A', text: 'Posiadają własne kolisty DNA podobny do DNA bakterii', is_correct: false },
      { id: 'B', text: 'Posiadają rybosomy 70S, identyczne jak u prokariontów', is_correct: false },
      { id: 'C', text: 'Otoczone są pojedynczą błoną wewnętrzną tworzącą liczne wypustki', is_correct: true },
      { id: 'D', text: 'Namnażają się przez podział binarny, niezależnie od podziału komórki', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Zarówno mitochondria jak i chloroplasty są otoczone DWOMA błonami (zewnętrzną i wewnętrzną). Mitochondria: błona wewnętrzna tworzy grzebienie (cristae); chloroplasty: błona wewnętrzna tworzy tylakoid. Stwierdzenie C jest nieprawidłowe — opisuje strukturę mitochondrialną, ale sugeruje "pojedynczą błonę" co jest błędem dla obu organelli.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Komórka i biochemia — Organelle',
    subtopic_id: S.organelle,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE procesy, które zachodzą zarówno w mitochondriach, jak i w chloroplastach.',
    options: [
      { id: 'A', text: 'Synteza ATP przez ATP-azę w błonie wewnętrznej', is_correct: true },
      { id: 'B', text: 'Wytwarzanie gradientu protonowego (H⁺) przez błonę wewnętrzną', is_correct: true },
      { id: 'C', text: 'Fotoliza wody z wydzieleniem tlenu', is_correct: false },
      { id: 'D', text: 'Translacja białek na rybosomach 70S', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A, B, D — tak: obie organelle syntezują ATP przez chemiosmozę (gradient H⁺ przez błonę, ATP-syntetaza); obie mają rybosomy 70S do translacji własnych białek. C — tylko chloroplasty: fotoliza wody (2H₂O → 4H⁺ + 4e⁻ + O₂) zachodzi w reakcjach jasnych fotosyntezy (fotosystem II). Mitochondria nie fotolizują wody.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Skład chemiczny ───
  {
    subtopic: 'Komórka i biochemia — Skład chemiczny',
    subtopic_id: S.sklad,
    question_type: 'single',
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nWiązanie peptydowe w białkach tworzy się między:',
    options: [
      { id: 'A', text: 'grupą aminową (–NH₂) jednego aminokwasu a grupą karboksylową (–COOH) drugiego, z odłączeniem cząsteczki wody', is_correct: true },
      { id: 'B', text: 'dwiema grupami karboksylowymi sąsiednich aminokwasów', is_correct: false },
      { id: 'C', text: 'grupą R (boczną) jednego aminokwasu a grupą aminową drugiego', is_correct: false },
      { id: 'D', text: 'grupą aminową jednego aminokwasu a grupą aminową drugiego, z wydzieleniem NH₃', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Wiązanie peptydowe (–CO–NH–) powstaje w reakcji kondensacji (odwodnienia): grupa –COOH + H₂N– → –CO–NH– + H₂O. Łączy kolejne aminokwasy w łańcuchu polipeptydowym. Grupy R (boczne) decydują o właściwościach białka, ale nie tworzą wiązania peptydowego.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Komórka i biochemia — Skład chemiczny',
    subtopic_id: S.sklad,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących lipidów:\nA. Tłuszcze nasycone zawierają wyłącznie pojedyncze wiązania C–C w łańcuchach kwasów tłuszczowych i są w temperaturze pokojowej zazwyczaj ciekłe.\nB. Fosfolipidy są amfipatyczne — posiadają hydrofilową głowę i hydrofobowe ogony.\nC. Cholesterol jest steroidem obecnym w błonach komórkowych wyłącznie u zwierząt.',
    options: [
      { id: 'A', text: 'F, P, P', is_correct: true },
      { id: 'B', text: 'P, P, F', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, P, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — FAŁSZ: tłuszcze nasycone mają tylko wiązania pojedyncze, ale są STAŁE w temperaturze pokojowej (smalec, masło); ciekłe są oleje z nienasyconymi kwasami tłuszczowymi (podwójne wiązania C=C). B — PRAWDA: amfipatyczność fosfolipidów decyduje o samorzutnym tworzeniu dwuwarstwy. C — PRAWDA: cholesterol — u roślin jego rola pełnią fitosterole (np. sitosterol); grzyby mają ergosterol.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Białka i enzymy ───
  {
    subtopic: 'Komórka i biochemia — Białka i enzymy',
    subtopic_id: S.bialka,
    question_type: 'single',
    question_text: 'Enzym działa specyficznie na swój substrat. Które stwierdzenie NAJLEPIEJ wyjaśnia tę specyficzność?',
    options: [
      { id: 'A', text: 'Enzym i substrat mają tę samą masę cząsteczkową, co umożliwia ich dopasowanie', is_correct: false },
      { id: 'B', text: 'Centrum aktywne enzymu ma kształt i właściwości chemiczne komplementarne do substratu (model "klucza i zamka" lub "induced fit")', is_correct: true },
      { id: 'C', text: 'Substrat wiąże się kowalencyjnie trwale z centrum aktywnym enzymu, tworząc nierozłączny kompleks', is_correct: false },
      { id: 'D', text: 'Enzymy rozpoznają substraty za pomocą sekwencji DNA w jądrze komórkowym', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Specyficzność enzymu wynika z trójwymiarowego kształtu centrum aktywnego (część enzymu wiążąca substrat): dopasowanie przestrzenne i chemiczne (oddziaływania jonowe, wodorowe, hydrofobowe). Modele: "klucza i zamka" (sztywne dopasowanie — Fischer 1894) lub "induced fit" (elastyczne — Koshland 1958: substrat indukuje zmianę konformacji enzymu). Wiązanie jest niekowalencyjne (odwracalne) → produkt się uwalnia, enzym jest wielokrotnie używany.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Komórka i biochemia — Białka i enzymy',
    subtopic_id: S.bialka,
    question_type: 'single',
    question_text: 'Badacz zmierzył aktywność pewnego enzymu w zakresie pH 4–9. Aktywność była najwyższa przy pH 7,4 i gwałtownie spadała poniżej pH 6 i powyżej pH 8. Który wniosek jest UZASADNIONY na podstawie tych danych?',
    options: [
      { id: 'A', text: 'Enzym działa optymalnie w środowisku kwaśnym i prawdopodobnie pochodzi z lizosomów', is_correct: false },
      { id: 'B', text: 'Zbyt niskie lub zbyt wysokie pH powoduje denaturację enzymu przez zmianę ładunku grup jonizujących centrum aktywnego', is_correct: true },
      { id: 'C', text: 'Aktywność enzymu nie zależy od pH, jeśli temperatura jest stała', is_correct: false },
      { id: 'D', text: 'Enzym traci aktywność przy pH < 6 wyłącznie dlatego, że substrat ulega hydrolizie w środowisku kwaśnym', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'pH wpływa na jonizację grup bocznych aminokwasów centrum aktywnego (np. His, Asp, Glu, Lys). Optymalne pH = zakres utrzymujący właściwy ładunek i konformację centrum aktywnego. Zbyt niskie/wysokie pH zmienia ładunek grup → utrata kształtu centrum aktywnego (denaturacja odwracalna lub nieodwracalna) → brak wiązania substratu. pH 7,4 odpowiada cytoplazimie i krwi — typowe dla enzymów komórkowych. Enzymy lizosomalne działają w pH ~5.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Kwasy nukleinowe ───
  {
    subtopic: 'Komórka i biochemia — Kwasy nukleinowe',
    subtopic_id: S.kwasy,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE cechy, które są WSPÓLNE dla DNA i RNA.',
    options: [
      { id: 'A', text: 'Zbudowane z nukleotydów połączonych wiązaniami 3\'–5\' fosfodiestrycznymi', is_correct: true },
      { id: 'B', text: 'Zawierają cukier rybozę jako składnik nukleotydów', is_correct: false },
      { id: 'C', text: 'Mogą tworzyć struktury drugorzędowe przez parowanie zasad (A-U lub A-T)', is_correct: false },
      { id: 'D', text: 'Zawierają puryny (adeninę i guaninę) jako zasady azotowe', is_correct: true },
    ],
    correct_answer: ['A', 'D'],
    explanation: 'A — PRAWDA: oba polimery mają kręgosłup cukrowo-fosforanowy z wiązaniami 3\'–5\' fosfodiestrycznymi. B — FAŁSZ: RNA ma rybozę (OH w pozycji 2\'), DNA ma deoksyrybozę (H w pozycji 2\'). C — FAŁSZ: w DNA pary A-T, w RNA pary A-U; nie są więc "wspólne" — tyminę ma DNA, uracyl RNA. D — PRAWDA: puryny (adenina, guanina) są identyczne w DNA i RNA; różnią się pirymidyny (cytozyna wspólna, tymina tylko w DNA, uracyl tylko w RNA).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Glikoliza i fermentacja ───
  {
    subtopic: 'Komórka i biochemia — Glikoliza i fermentacja',
    subtopic_id: S.glikoliza,
    question_type: 'single',
    question_text: 'Glikoliza zachodzi w cytozolu komórki. W wyniku glikolizy jednej cząsteczki glukozy (C₆H₁₂O₆) powstają:\n(bilans netto, bez etapu inwestycyjnego)',
    options: [
      { id: 'A', text: '2 cząsteczki pirogronianu, 2 ATP netto, 2 NADH', is_correct: true },
      { id: 'B', text: '2 cząsteczki pirogronianu, 4 ATP netto, 2 FADH₂', is_correct: false },
      { id: 'C', text: '1 cząsteczka pirogronianu, 2 ATP, 1 NADH', is_correct: false },
      { id: 'D', text: '2 cząsteczki acetylo-CoA, 2 ATP, 2 NADH', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Glikoliza (10 reakcji, cytozol): faza inwestycyjna zużywa 2 ATP, faza zysku produkuje 4 ATP → bilans NETTO: 2 ATP. Produkowane są 2 cząsteczki pirogronianu (C₃) i 2 NADH (z 2 × NAD⁺ + 2H⁺ + 2e⁻). FADH₂ nie powstaje w glikolizie — to kofaktor kompleksu II łańcucha oddechowego (dehydrogenaza bursztynianowa). Acetylo-CoA: produkowane z pirogronianu w dekarboksylacji oksydacyjnej (mitochondria), nie w glikolizie.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Komórka i biochemia — Glikoliza i fermentacja',
    subtopic_id: S.glikoliza,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących fermentacji:\nA. Fermentacja mlekowa zachodzi u bakterii mlekowych i w intensywnie pracujących mięśniach człowieka przy niedoborze tlenu.\nB. W fermentacji etanolowej drożdże produkują etanol i CO₂, a NADH zostaje zregenerowany do NAD⁺.\nC. Fermentacja jest procesem tlenowym — wymaga obecności tlenu jako końcowego akceptora elektronów.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, F, F', is_correct: false },
      { id: 'C', text: 'F, P, P', is_correct: false },
      { id: 'D', text: 'P, P, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: przy beztlenowej pracy mięśni pirogronian → mleczan + NAD⁺ (regeneracja NAD⁺ dla ciągłej glikolizy). B — PRAWDA: w drożdżach pirogronian → acetoaldehyd (CO₂) → etanol; NADH oddaje H drożdżom regenerując NAD⁺. C — FAŁSZ: fermentacja jest procesem BEZTLENOWYM (anaerob) — brak tlenu jako akceptora elektronów; celem jest regeneracja NAD⁺ do podtrzymania glikolizy.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Łańcuch oddechowy ───
  {
    subtopic: 'Komórka i biochemia — Łańcuch oddechowy',
    subtopic_id: S.lancuch,
    question_type: 'single',
    question_text: 'W wyniku całkowitego utlenienia jednej cząsteczki glukozy w warunkach tlenowych (glikoliza + dekarboksylacja pirogronianu + cykl Krebsa + łańcuch oddechowy) bilans netto to około:\n(wartości przybliżone, model standardowy)',
    options: [
      { id: 'A', text: '2 ATP', is_correct: false },
      { id: 'B', text: '8 ATP', is_correct: false },
      { id: 'C', text: '30–32 ATP', is_correct: true },
      { id: 'D', text: '38 ATP (wartość dokładna)', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Współczesne szacunki uwzględniają stoichiometrię ATP-syntetazy i koszt transportu przez błonę mitochondrialną: ~2,5 ATP/NADH i ~1,5 ATP/FADH₂. Bilans: glikoliza 2 ATP + 2 NADH (cytoplazmatyczne; ~5 ATP); dekarboksylacja 2 NADH (~5 ATP); cykl Krebsa 2 ATP + 6 NADH + 2 FADH₂ (~22 ATP) ≈ łącznie 30–32 ATP. Stary podręcznikowy bilans "38 ATP" (D) pochodzi z uproszczonego modelu P/O=3 dla NADH.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Komórka i biochemia — Łańcuch oddechowy',
    subtopic_id: S.lancuch,
    question_type: 'single',
    question_text: 'Cyjanki są silnymi truciznami komórkowymi. Blokują kompleks IV (oksydazę cytochromową) łańcucha oddechowego, uniemożliwiając przekazanie elektronów na tlen. Który BEZPOŚREDNI skutek tego działania jest prawidłowy?',
    options: [
      { id: 'A', text: 'Stężenie NADH spada, bo nie ma akceptora elektronów', is_correct: false },
      { id: 'B', text: 'Gradient protonowy (H⁺) przez błonę wewnętrzną mitochondrium nie jest wytwarzany → ATP-syntetaza nie działa → brak syntezy ATP', is_correct: true },
      { id: 'C', text: 'Glikoliza zostaje zatrzymana, bo cyjanki blokują fosfofruktokinazę', is_correct: false },
      { id: 'D', text: 'Cykl Krebsa przyspiesza, aby zrekompensować brak ATP z łańcucha oddechowego', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Łańcuch oddechowy: elektrony z NADH i FADH₂ przepływają przez kompleksy I–IV, pompując H⁺ do przestrzeni międzybłonowej. Kompleks IV (cytochrom c oksydaza) przekazuje elektrony na O₂ → H₂O. Cyjanek blokuje kompleks IV → elektrony nie mogą być przekazane → łańcuch "zatyka się" → H⁺ nie są pompowane → gradient protonowy zanika → ATP-syntetaza (kompleks V) nie może syntetyzować ATP → śmierć komórki. NADH gromadzi się (rośnie), nie spada (A błędne). Glikoliza dalej działa, ale NADH się nagromadza i hamuje przez brak NAD⁺.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Cykl komórkowy i mitoza ───
  {
    subtopic: 'Komórka i biochemia — Cykl komórkowy',
    subtopic_id: S.cykl,
    question_type: 'single',
    question_text: 'Komórka diploidalna człowieka (2n=46) wchodzi w mitozę. Ile chromatyd siostrzanych zawiera jedna komórka w fazie G2 (po replikacji DNA, przed podziałem)?',
    options: [
      { id: 'A', text: '46 chromatyd (po jednej na chromosom)', is_correct: false },
      { id: 'B', text: '92 chromatydy (każdy z 46 chromosomów ma 2 siostrzane chromatydy)', is_correct: true },
      { id: 'C', text: '23 chromatydy (komórka jest po mejozie)', is_correct: false },
      { id: 'D', text: '184 chromatydy (podwójna diploidia)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'W fazie S cyklu komórkowego każdy chromosom ulega replikacji: 1 dwuniciowa cząsteczka DNA → 2 siostrzane chromatydy (chromatydy utrzymywane są przez kohezyny). Po fazie S: 46 chromosomów × 2 chromatydy = 92 chromatydy. Ilość DNA: 4C (4-krotna ilość DNA haploidalnego). Dopiero w anafazie mitotycznej kohezyny rozpadają się → chromatydy siostrzane rozchodzą się do biegunów jako osobne chromosomy (46 na każdy biegun).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Komórka i biochemia — Cykl komórkowy',
    subtopic_id: S.cykl,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE etapy mitozy (fazy podziału jądra), które zachodzą we właściwej kolejności (I → II → III → IV).',
    options: [
      { id: 'A', text: 'Profaza → Metafaza → Anafaza → Telofaza', is_correct: true },
      { id: 'B', text: 'W metafazie chromosomy ustawiają się w płytce metafazowej (równiku wrzeciona)', is_correct: true },
      { id: 'C', text: 'W anafazie homologiczne chromosomy rozchodzą się do biegunów (jak w mejozie I)', is_correct: false },
      { id: 'D', text: 'W telofazie tworzy się nowa otoczka jądrowa wokół zestawu chromosomów przy każdym biegunie', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — PRAWDA: Profaza (kondensacja chromatyny, zanik otoczki) → Metafaza (chromosomy na równiku) → Anafaza (rozejście chromatyd siostrzanych) → Telofaza (dekondensacja, nowa otoczka). B — PRAWDA: metafaza — wrzeciono kariokinetyczne przyłącza się do kinetochorów, chromosomy ustawiają się na płytce metafazowej. C — FAŁSZ: w mitotycznej anafazie rozchodzą się CHROMATYDY SIOSTRZANE (centromery pękają), a nie chromosomy homologiczne (to charakterystyczne dla anafazy I mejozy). D — PRAWDA: telofaza — przy każdym biegunie fragmenty ER otaczają chromosomy → tworzy się nowa otoczka jądrowa.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Endosymbioza ───
  {
    subtopic: 'Komórka i biochemia — Teoria endosymbiozy',
    subtopic_id: S.endosymbioza,
    question_type: 'single',
    question_text: 'Teoria endosymbiozy (Lynn Margulis, 1967) wyjaśnia pochodzenie mitochondriów i chloroplastów. Które z poniższych obserwacji stanowi NAJSILNIEJSZY dowód molekularny na poparcie tej teorii?',
    options: [
      { id: 'A', text: 'Mitochondria i chloroplasty mają zbliżoną wielkość do bakterii', is_correct: false },
      { id: 'B', text: 'Sekwencja rRNA mitochondriów i chloroplastów jest homologiczna do sekwencji rRNA Alphaproteobacteria (mitochondria) i Cyanobacteria (chloroplasty)', is_correct: true },
      { id: 'C', text: 'Mitochondria zużywają tlen, podobnie jak aerobowe bakterie', is_correct: false },
      { id: 'D', text: 'Błona zewnętrzna mitochondriów jest podobna do błony komórek eukariotycznych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Najsilniejszy dowód molekularny: sekwencja 16S rRNA (rybosomalnego RNA małej podjednostki) mitochondriów jest homologiczna z rRNA Alphaproteobacteria (np. Rickettsia); rRNA chloroplastów — z Cyanobacteria. Analiza filogenetyczna sekwencji wskazuje na jedno zdarzenie endosymbiotyczne dla każdego organellum. Inne dowody: własne DNA, rybosomy 70S, dwie błony (zewnętrzna pochodzi z błony komórki fagocytującej), podział binarny — ale dowód sekwencyjny rRNA jest filogenomicznie najbardziej precyzyjny.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Komórka i biochemia — Białka i enzymy',
    subtopic_id: S.bialka,
    question_type: 'single',
    question_text: 'Inhibitor kompetycyjny enzymu działa przez:\n(wybierz opis mechanizmu)',
    options: [
      { id: 'A', text: 'Trwałe wiązanie kowalencyjne z centrum aktywnym, blokujące dostęp substratu na stałe', is_correct: false },
      { id: 'B', text: 'Wiązanie odwracalne w centrum aktywnym w miejscu wiążącym substrat — konkuruje z substratem o to samo miejsce; efekt można znieść zwiększając stężenie substratu', is_correct: true },
      { id: 'C', text: 'Wiązanie z centrum allosterycznym, zmieniając konformację enzymu i blokując centrum aktywne; stężenie substratu nie wpływa na efekt inhibicji', is_correct: false },
      { id: 'D', text: 'Denaturację enzymu przez zmianę temperatury środowiska reakcji', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Inhibitor kompetycyjny: strukturalnie podobny do substratu → wiąże się odwracalnie w centrum aktywnym. Zwiększenie stężenia substratu "wypiera" inhibitor (konkurencja) → Vmax osiągalne, Km rośnie. Inhibitor niekompetycy (C): wiąże się w innym miejscu (allosterycznym), zmienia konformację centrum aktywnego → zmniejsza Vmax, Km niezmieniony; stężenie substratu nie pomaga. Inhibitor irreversybilny/kowalencyjny (A): np. organofosforany (sarin) trwale alkilują sery centrum aktywnego acetylcholinesterazy.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body))
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/mock_questions',
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
  console.log(`Seeding ${questions.length} mock questions for Komórka i biochemia...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
