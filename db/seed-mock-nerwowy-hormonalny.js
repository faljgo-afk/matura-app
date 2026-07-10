// Seed: mock_questions — Fizjologia człowieka — układ nerwowy i hormonalny (19 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  neuron:  'd7975ac2-1866-4a54-8763-e26e7a5c05c7',
  potcz:   '7b6eea4d-0085-4f28-9a8a-95345f5d33f6',
  synap:   '86146a38-c978-497d-b37b-2f30e1a8f180',
  podzial: '6fa0b262-2757-46e7-b1c2-5567045f657a',
  mozg:    '4b37bd4a-466f-408b-82f6-d0c9579f5fd1',
  luk:     '99cb3294-cdec-47a4-a6bd-bd9ca1e9ca4f',
  grucz:   '3896b2c0-3159-404b-8ee1-1741dc2aba11',
  glik:    'aeee95f6-97c3-498e-af9e-2d147a252099',
  os:      'c2486387-820e-478f-8142-de6c5bd8bafd',
  homeo:   'f87eddfa-5288-4e00-a08a-c980645f560f',
}

const questions = [
  // ─── Budowa neuronu ───
  {
    subtopic: 'Fizjologia człowieka — Budowa neuronu',
    subtopic_id: S.neuron,
    question_type: 'single',
    question_text: 'Neuron (komórka nerwowa) składa się z kilku charakterystycznych elementów. Które zestawienie POPRAWNIE opisuje funkcję dendrytów, ciała komórki i aksonu?',
    options: [
      { id: 'A', text: 'Dendryty: krótkie, rozgałęzione wypustki odbierające sygnały od innych neuronów lub receptorów; ciało komórki (perykaryon): centrum metaboliczne z jądrem; akson: długa wypustka przewodząca impuls do synapsy lub efektora', is_correct: true },
      { id: 'B', text: 'Akson: wiele krótkich wypustek odbierających sygnały; dendryty: jedna długa wypustka przewodząca impuls; ciało komórki: wyłącznie magazyn neuroprzekaźników', is_correct: false },
      { id: 'C', text: 'Dendryty i akson pełnią identyczną funkcję — oba przewodzą impulsy w obu kierunkach; ciało komórki pozbawione jest jądra komórkowego u dorosłych neuronów', is_correct: false },
      { id: 'D', text: 'Ciało komórki neuronu jest miejscem powstawania potencjału czynnościowego — aksony i dendryty jedynie mechanicznie łączą neurony ze sobą', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Budowa neuronu: (1) Dendryty: wypustki aferentne (dośrodkowe), liczne, krótkie, silnie rozgałęzione; kolce dendrytyczne = miejsca synaps; zwiększają powierzchnię odbierania sygnałów; neurony Purkinjego móżdżku mają >200 000 wejść synaptycznych. (2) Ciało komórki (perykaryon, soma): jądro + chromatyna + jąderko; rybosomy, ER szorstkie (ciałka Nissla = produkcja białek), aparat Golgiego, mitochondria; centrum metaboliczne. (3) Akson (neurytu): jedna wypustka eferentna (odśrodkowa); wzgórek aksonu (axon hillock) = strefa inicjacji potencjału czynnościowego; mielina (osłonka mielinowa ze Schwanna lub oligodendrocytów) + węzły Ranviera; telodendria → guzki synaptyczne. Aksony mogą mieć długość 1 m (np. motoneurony rdzenia do palców stóp).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Budowa neuronu',
    subtopic_id: S.neuron,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących osłonki mielinowej:\nA. Mielina tworzona przez komórki Schwanna (obwodowy układ nerwowy) i oligodendrocyty (centralny układ nerwowy) przyspiesza przewodzenie impulsów przez przewodzenie skokowe (saltatorne) między węzłami Ranviera.\nB. Stwardnienie rozsiane (SM, sclerosis multiplex) jest chorobą autoimmunologiczną polegającą na niszczeniu mieliny w OUN — prowadzi do spowolnienia lub bloku przewodzenia nerwowego i objawów neurologicznych.\nC. Komórki gleju (astrocyty, oligodendrocyty, mikroglej, komórki Schwanna) stanowią mniej niż 1% masy mózgu i pełnią wyłącznie funkcję strukturalną bez wpływu na przewodzenie nerwowe.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: mielina (~80% lipidy, ~20% białka: MBP, PLP) = wielokrotnie owinięta błona komórek Schwanna (PNS) lub oligodendrocytów (CNS); zwiększa oporność i zmniejsza pojemność błony aksonu → prąd jonowy "skacze" od węzła do węzła Ranviera (przewodzenie saltatorne) → prędkość 70–120 m/s (vs 0,5–2 m/s bez mieliny). B — PRAWDA: SM (sclerosis multiplex): autoreaktywne limfocyty T niszczą mielinę OUN → blaszki demielinizacyjne → spowolnienie/blok przewodzenia → objawy zależne od lokalizacji: zaburzenia wzroku (neuritis optica), niedowłady, parestezje, zaburzenia równowagi, zmęczenie; przebieg rzutowo-remisyjny (RRMS) lub pierwotnie postępujący. C — FAŁSZ: komórki glejowe (neuroglia): ~85–90 miliardów (podobna liczba co neurony); stanowią ~50% objętości mózgu; funkcje: astrocyty (bariera krew-mózg BBB, regulacja synaps, K⁺-buforowanie, glikogen jako substrat); oligodendrocyty (mielina); mikroglej (odpowiedź immunologiczna CNS); komórki Schwanna (mielina PNS).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Potencjał czynnościowy ───
  {
    subtopic: 'Fizjologia człowieka — Potencjał czynnościowy',
    subtopic_id: S.potcz,
    question_type: 'single',
    question_text: 'Potencjał czynnościowy (impuls nerwowy) przebiega w kilku fazach. Wskaż prawidłową kolejność zdarzeń jonowych.',
    options: [
      { id: 'A', text: 'Potencjał spoczynkowy (−70 mV) → depolaryzacja (napływ Na⁺ przez kanały napięciozależne) → potencjał szczytowy (+30 mV) → repolaryzacja (kanały Na⁺ inaktywują się, otwierają kanały K⁺) → hiperpolaryzacja → powrót do spoczynku', is_correct: true },
      { id: 'B', text: 'Potencjał spoczynkowy → napływ K⁺ (depolaryzacja) → szczyt (−30 mV) → odpływ Na⁺ (repolaryzacja) → powrót', is_correct: false },
      { id: 'C', text: 'Depolaryzacja przez odpływ Cl⁻; repolaryzacja przez napływ Ca²⁺; hiperpolaryzacja przez odpływ K⁺', is_correct: false },
      { id: 'D', text: 'Potencjał czynnościowy nie wymaga przepływu jonów — jest falą elektryczną przewodzoną przez ciągłość cytoplazmy aksonu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Potencjał czynnościowy (AP): (1) Spoczynek: −70 mV; Na⁺/K⁺-ATPaza utrzymuje gradient: wysoki Na⁺ na zewnątrz, K⁺ wewnątrz; błona przepuszczalna głównie dla K⁺ (kanały wyciekowe). (2) Depolaryzacja: bodziec > próg (−55 mV) → kanały Na⁺ napięciozależne (Nav) otwierają się → gwałtowny napływ Na⁺ → V rośnie do +30 mV (overshooting). (3) Repolaryzacja: kanały Nav inaktywują się (brama inaktywacyjna zamknięta = okres refrakcji bezwzględnej) → kanały K⁺ napięciozależne (Kv) otwierają się z opóźnieniem → odpływ K⁺ → V spada. (4) Hiperpolaryzacja (undershoot): Kv wolno zamykają się → chwilowy nadmiar odpływu K⁺ → V < −70 mV = refrakcja względna. (5) Przywrócenie gradientów: Na⁺/K⁺-ATPaza (3 Na⁺ na zewnątrz, 2 K⁺ do środka). Zasada "wszystko albo nic": AP jest zawsze maksymalny powyżej progu.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Potencjał czynnościowy',
    subtopic_id: S.potcz,
    question_type: 'single',
    question_text: 'Częstotliwość potencjałów czynnościowych koduje intensywność bodźca. Dlaczego jeden neuron nie może przekazać jednocześnie dwóch impulsów o różnej amplitudzie?',
    options: [
      { id: 'A', text: 'Zasada "wszystko albo nic": potencjał czynnościowy ma zawsze stałą amplitudę (~100 mV); intensywność bodźca kodowana jest przez CZĘSTOTLIWOŚĆ impulsów (Hz), nie przez ich amplitudę', is_correct: true },
      { id: 'B', text: 'Neuron może przekazywać impulsy o różnej amplitudzie — silniejszy bodziec daje wyższy potencjał czynnościowy; słabszy — niższy', is_correct: false },
      { id: 'C', text: 'Amplituda impulsu zależy od długości aksonu — krótsze aksony mają wyższe AP; dłuższe — niższe AP', is_correct: false },
      { id: 'D', text: 'Intensywność bodźca jest kodowana przez liczbę rekrutowanych neuronów w ogóle, a nie przez częstotliwość impulsów w jednym neuronie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Zasada "wszystko albo nic" (all-or-nothing law): jeśli bodziec przekroczy próg pobudzenia, AP osiąga zawsze tę samą wartość szczytową (~+30 mV, amplituda ~100 mV) niezależnie od siły bodźca; poniżej progu = brak AP. Kodowanie intensywności bodźca: (1) Rate coding (kodowanie częstotliwością): silniejszy bodziec → wyższa częstotliwość AP [Hz] w tym samym neuronie; (2) Population coding: silny bodziec = więcej neuronów rekrutowanych (spatial summation + recruitment); (3) Adaptation (adaptacja): ciągły bodziec → malejąca częstotliwość (fotorecep. vs nocycep.). Sumowanie na neuronie: sumowanie przestrzenne (wiele synaps równocześnie) i czasowe (szybkie kolejne EPSP) → przekroczenie progu. Ograniczenie szybkości: refrakcja bezwzględna (~1–2 ms) → maks. częstotliwość ~500–1000 Hz (fizjologicznie: 10–100 Hz).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Synapsy i neuroprzekaźniki ───
  {
    subtopic: 'Fizjologia człowieka — Synapsy i neuroprzekaźniki',
    subtopic_id: S.synap,
    question_type: 'single',
    question_text: 'Przekazywanie sygnału w synapsie chemicznej przebiega przez kilka etapów. Wskaż prawidłową kolejność zdarzeń.',
    options: [
      { id: 'A', text: 'AP dociera do guzka presynaptycznego → napływ Ca²⁺ (kanały Cav) → fuzja pęcherzyków synaptycznych z błoną → exocytoza neuroprzekaźnika → dyfuzja przez szczelinę → wiązanie z receptorami postsynaptycznymi → EPSP lub IPSP → usunięcie neuroprzekaźnika (reuptake, enzymy)', is_correct: true },
      { id: 'B', text: 'Receptor postsynaptyczny generuje AP → neuroprzekaźnik cofany do pęcherzyka → Ca²⁺ wypychany przez Na⁺ → sygnał przekazany wstecz', is_correct: false },
      { id: 'C', text: 'Neuroprzekaźnik dyfunduje spontanicznie przez szczelinę stale (bez AP); Ca²⁺ kontroluje amplitudę sygnału postsynaptycznego', is_correct: false },
      { id: 'D', text: 'W synapsach chemicznych jony Na⁺ bezpośrednio przepływają z komórki pre- do postsynaptycznej przez białka tworzące ciągły kanał przez szczelinę synaptyczną', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Synapsa chemiczna: (1) AP w aksonie → dotarcie do guzka presynaptycznego → depolaryzacja błony presynaptycznej. (2) Otwarcie kanałów Ca²⁺ napięciozależnych (Cav2.1/2.2) → napływ Ca²⁺ do cytoplazmy guzka. (3) Ca²⁺ wiąże synaptotagminę → SNARE-kompleks (VAMP/synaptobrevin + SNAP25 + syntaksyna) → fuzja pęcherzyków z błoną presynaptyczną → exocytoza neurotransmitera do szczeliny synaptycznej (~20 nm). (4) Neuroprzekaźnik dyfunduje → wiąże receptory jonotropowe (kanały, szybkie: AMPA, NMDA, GABA-A) lub metabotropowe (GPCR, wolne) na błonie postsynaptycznej. (5) EPSP (excitatory: glutaminian → napływ Na⁺/K⁺) lub IPSP (inhibitory: GABA → napływ Cl⁻ lub odpływ K⁺). (6) Zakończenie: reuptake (wychwyt zwrotny do presynaptycznej: transportery DAT, SERT, NET), hydroliza (acetylocholinesteraza), dyfuzja. Synapsy elektryczne (gap junctions): bezpośredni przepływ jonów → ultraszybkie, niemodulowalne.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Synapsy i neuroprzekaźniki',
    subtopic_id: S.synap,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących neuroprzekaźników:\nA. Acetylocholina (ACh) jest neuroprzekaźnikiem synaps nerwowo-mięśniowych (płytki motorycznej) oraz synaps przywspółczulnych; inaktywowana przez acetylocholinesterazę w szczelinie synaptycznej.\nB. Dopamina jest neuroprzekaźnikiem dróg nagrody (układ mezokortykolimbiczny) — jej niedobór w istocie czarnej jest związany z chorobą Parkinsona; nadmiar lub nadwrażliwość receptorów D2 — z schizofrenią.\nC. GABA (kwas gamma-aminomasłowy) jest głównym neuroprzekaźnikiem pobudzającym w OUN — otwiera kanały Na⁺ i powoduje depolaryzację neuronu postsynaptycznego.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: ACh: synaps nerwowo-mięśniowych (receptor nAChR = nikotynowy, jonotropowy Na⁺/K⁺ → EPSP → AP mięśniowy → skurcz); synaps przywspółczulnych (receptor mAChR = muskarynowy, metabotropowy). Acetylocholinesteraza (AChE) w szczelinie: ACh → cholina + octan → wychwyt choliny do presynaptycznej → resynteza ACh. Inhibitory AChE: neostygmina (miastenia gravis), organofosforany (nerwy bojowe/pestycydy) → nadmiar ACh → paraliza. B — PRAWDA: dopamina: drogi: nigrostiatalna (ruch, Parkinson = utrata neuronów SNc), mezokortykolimbiczna (nagroda, motywacja, uzależnienia), tuberoinfundibularna (prolaktyna), mezokortykalna (funkcje poznawcze, schizofrenia). C — FAŁSZ: GABA = główny neuroprzekaźnik HAMUJĄCY w OUN (nie pobudzający!); receptor GABA-A: kanał Cl⁻ → napływ Cl⁻ → hiperpolaryzacja → IPSP. Modulator GABA-A: benzodiazepiny (alprazolam, diazepam) → potencjalizacja GABA → sedacja/anksjoliza. Glutaminian = główny neuroprzekaźnik POBUDZAJĄCY (receptory AMPA, NMDA, kainian).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Podział układu nerwowego ───
  {
    subtopic: 'Fizjologia człowieka — Podział układu nerwowego',
    subtopic_id: S.podzial,
    question_type: 'single',
    question_text: 'Autonomiczny układ nerwowy (AUN) dzieli się na część współczulną i przywspółczulną. Które zestawienie POPRAWNIE opisuje ich antagonistyczne działanie na wybrane narządy?',
    options: [
      { id: 'A', text: 'Serce: współczulny → tachykardia (HR↑, siła skurczu↑); przywspółczulny (n. X) → bradykardia (HR↓). Oskrzela: współ. → rozszerzenie (bronchodilatacja); przywspół. → zwężenie. Źrenica: współ. → rozszerzenie (mydriasis); przywspół. → zwężenie (miosis)', is_correct: true },
      { id: 'B', text: 'Serce: przywspółczulny → tachykardia; współczulny → bradykardia. Źrenica: przywspółczulny → rozszerzenie; współczulny → zwężenie', is_correct: false },
      { id: 'C', text: 'Oba układy zawsze działają synergistycznie — nie ma antagonizmu między nimi; różni je wyłącznie szybkość działania', is_correct: false },
      { id: 'D', text: 'Układ współczulny kontroluje wyłącznie mięśnie szkieletowe; przywspółczulny — wyłącznie narządy wewnętrzne; nie ma nakładania się funkcji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Autonomiczny układ nerwowy — antagonizm: Współczulny (sympatyczny, "fight or flight"): pregangl. = rdzeniowe T1-L2 + zwoje przykręgosłupowe; postgangl. → noradrenalina (NA) na receptory α/β. Serce: β1 → HR↑, siła↑. Naczynia: α1 → skurcz → wzrost ciśnienia. Oskrzela: β2 → rozszerzenie. Źrenica: α1 (m. rozszerzający) → mydriasis. Jelita: ↓perystaltyki. Gruczoły potowe: ACh (wyjątek). Nadnercze: ACh → rdzeń → adrenalina. Przywspółczulny (parasympatyczny, "rest and digest"): pregangl. = pień mózgu (III, VII, IX, X) + S2-S4; postgangl. krótkie → ACh na receptory mAChR. Serce: M2 → HR↓ (AV delay↑). Oskrzela: M3 → zwężenie (bronchokonstrikcja + wydzielanie śluzu). Źrenica: M3 (m. zwieracz) → miosis. Jelita: ↑perystaltyki, wydzielanie soków. Pęcherz: kontrakcja wypieracza → mikcja.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mózgowie — budowa i funkcje ───
  {
    subtopic: 'Fizjologia człowieka — Mózgowie — budowa i funkcje',
    subtopic_id: S.mozg,
    question_type: 'single',
    question_text: 'Kora mózgowa jest podzielona na płaty o różnych funkcjach. Które zestawienie POPRAWNIE przypisuje płaty do ich głównych funkcji?',
    options: [
      { id: 'A', text: 'Płat czołowy: planowanie ruchów, osobowość, mowa (Broca po lewej), funkcje wykonawcze; płat ciemieniowy: czucie somatyczne, integracja przestrzenna; płat skroniowy: słuch, pamięć (hipokamp), mowa (Wernicke); płat potyliczny: wzrok', is_correct: true },
      { id: 'B', text: 'Płat potyliczny: mowa i planowanie ruchów; płat czołowy: wzrok; płat skroniowy: czucie somatyczne; płat ciemieniowy: słuch', is_correct: false },
      { id: 'C', text: 'Wszystkie płaty mają identyczne funkcje — lokalizacja funkcji w korze mózgowej jest mitem; każda funkcja jest równomiernie rozłożona', is_correct: false },
      { id: 'D', text: 'Płat czołowy odpowiada wyłącznie za zmysł węchu; płat ciemieniowy — za wzrok; korowe obszary ruchowe leżą w płacie potylicznym', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Płaty kory mózgowej (lobi cerebri): (1) Płat czołowy (frontal): pierwotna kora ruchowa (zakręt przedśrodkowy = homunkulus motoryczny, somatotopia); pole Broca (44, 45 = produkcja mowy, lewa półkula u 95% osób); płat czołowy → planowanie, podejmowanie decyzji, kontrola impulsów, pamięć robocza. (2) Płat ciemieniowy (parietal): pierwotna kora somatosensoryczna (zakręt zaśrodkowy = homunkulus czuciowy); integracja wielomodalna, orientacja przestrzenna; uszkodzenie prawego → zaniedbanie przestrzenne (hemispatial neglect). (3) Płat skroniowy (temporal): pierwotna kora słuchowa (zakręt Heschla, pole 41, 42); pole Wernickego (22 = rozumienie mowy); hipokamp (formowanie pamięci deklaratywnej) + ciało migdałowate (emocje). (4) Płat potyliczny (occipital): pierwotna kora wzrokowa (V1, pole 17, przy bruzdzie ostrogowej); obszary wzrokowe V2–V5 (ruch, kolor, głębia).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Mózgowie — budowa i funkcje',
    subtopic_id: S.mozg,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mózgowia:\nA. Móżdżek (cerebellum) koordynuje ruchy, utrzymuje równowagę i uczy się sekwencji motorycznych — jego uszkodzenie powoduje ataksję (niezborność ruchów), nie paraliż.\nB. Hipokamp (część układu limbicznego w płacie skroniowym) jest niezbędny do formowania nowych wspomnień deklaratywnych — pacjent H.M. po obustronnym usunięciu hipokampów nie mógł tworzyć nowych wspomnień (amnezja anterogradna).\nC. Pień mózgu (rdzeń przedłużony, most, śródmózgowie) kontroluje wyłącznie oddychanie — wszystkie inne funkcje życiowe (krążenie, sen, świadomość) są kontrolowane wyłącznie przez korę mózgową.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: móżdżek: 3 płaty (klapek, robak, półkule móżdżku); funkcje: koordynacja (porównuje zamierzony a wykonany ruch), równowaga (sygnały z przedsionka), uczenie motoryczne (adaptacja odruchu migania, prowadzenie piłki). Uszkodzenie: ataksja móżdżkowa (dysmetria, dysdiadochokineza, drżenie zamiarowe, oczopląs, dysartria) — nie niedowład (niedowład = droga korowo-rdzeniowa). B — PRAWDA: hipokamp: amnezja anterogradna (niemożność tworzenia nowych wspomnień) po obustronnych uszkodzeniach. Henry Molaison (H.M., 1953): obustronny hipokamp usunięty z powodu padaczki → nie mógł zapamiętać nowych faktów/zdarzeń, lecz zachował pamięć proceduralną (uczył się nowych umiejętności motorycznych). Dowód dysocjacji pamięci deklaratywnej i proceduralnej. C — FAŁSZ: pień mózgu kontroluje wiele funkcji życiowych: rdzeń przedłużony → ośrodki oddechowy, krążenia, wymiotny, połykania; most → ośrodek pneumotaksyczny, sen REM, jądra nerwów V, VI, VII, VIII; śródmózgowie → odruchy wzrokowe i słuchowe (blaszka pokrywy), układ siatkowaty (ARAS → świadomość/sen/czuwanie).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Łuk odruchowy ───
  {
    subtopic: 'Fizjologia człowieka — Łuk odruchowy',
    subtopic_id: S.luk,
    question_type: 'single',
    question_text: 'Odruch kolanowy (rzepkowy) jest przykładem odruchu monosynaptycznego. Które elementy tworzą łuk odruchowy tego odruchu?',
    options: [
      { id: 'A', text: 'Receptor (wrzeciono mięśniowe m. czworogłowego) → neuron aferentny Ia (do rdzenia) → synapsa z motoneuronami α w rogu przednim rdzenia → neuron eferentny → efektor (m. czworogłowy skurczy się = wyprost)', is_correct: true },
      { id: 'B', text: 'Receptor skórny → rdzeń kręgowy → mózgowie → kora ruchowa → motoneuron → mięsień — każdy odruch wymaga udziału kory', is_correct: false },
      { id: 'C', text: 'Odruch kolanowy jest polisynaptyczny: receptor → rdzeń → 5 neuronów pośredniczących → mięsień; czas reakcji wynosi ponad 1 sekundę', is_correct: false },
      { id: 'D', text: 'Łuk odruchowy odruchu kolanowego przebiega przez móżdżek — bez móżdżku odruch jest niemożliwy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Odruch kolanowy (rzepkowy, myotatyczny): najprostszy monosynaptyczny łuk odruchowy: (1) Receptor: wrzeciono mięśniowe (muscle spindle) m. czworogłowego uda = mechanorechoreceptor rozciągania; przy uderzeniu w ścięgno → nagłe rozciągnięcie mięśnia → aktywacja wrzeciona. (2) Neuron aferentny: Ia (grube, mielinowane, 70–120 m/s) → do tylnych rogów rdzenia (L3-L4). (3) Synapsa bezpośrednio z motoneuronami α w rogu przednim (monosynaptyczna!). (4) Neuron eferentny (motoneuron α) → nerw kulszowy/udowy. (5) Efektor: m. czworogłowy kurczy się → wyprost w kolanie. Jednocześnie przez interneurony hamujące (Ia inhibitory) hamowane są mięśnie zginacze (antagoniści). Odruch kolanowy: prosty klinicznie, ocenia łuk L3-L4 i integralność rdzenia. Odruch rdzeniowy: bez udziału mózgu (ale mózg może go modulować).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Gruczoły dokrewne i hormony ───
  {
    subtopic: 'Fizjologia człowieka — Gruczoły dokrewne i hormony',
    subtopic_id: S.grucz,
    question_type: 'single',
    question_text: 'Hormony można podzielić ze względu na budowę chemiczną i mechanizm działania. Które zestawienie POPRAWNIE opisuje różnicę między hormonami białkowymi (peptydowymi) a steroidowymi?',
    options: [
      { id: 'A', text: 'Hormony peptydowe (np. insulina, ADH, GH): hydrofilowe, receptor na powierzchni komórki (GPCR lub kinazy), działają przez wtórnych przekaźników (cAMP, IP3/Ca²⁺), szybkie. Hormony steroidowe (np. kortyzol, estradiol, testosteron): lipofilowe, dyfundują przez błonę, receptor wewnątrzkomórkowy → regulacja transkrypcji, wolne', is_correct: true },
      { id: 'B', text: 'Hormony steroidowe są hydrofilowe i działają przez receptory błonowe; peptydowe są lipofilowe i dyfundują do jądra', is_correct: false },
      { id: 'C', text: 'Oba typy hormonów działają identycznie — różni je wyłącznie szybkość syntezy w gruczole dokrewnym', is_correct: false },
      { id: 'D', text: 'Hormony peptydowe regulują wyłącznie metabolizm; steroidowe — wyłącznie reprodukcję; nie ma nakładania się funkcji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Klasyfikacja hormonów wg budowy: (1) Peptydowe/białkowe: insulina, glukagon, PTH, GH, prolaktyna, TSH, FSH, LH, ADH, oksytocyna, kalcytonina, ACTH, GnRH, TRH. Hydrofilowe → nie mogą dyfundować przez błonę lipidową → receptor błonowy (GPCR → cAMP → PKA; lub receptor z kinazą tyrozynową RTK → Ras → MAPK; lub receptory cytokin → JAK-STAT). Szybkie (sekundy-minuty). Krótki T½ (insulina ~5 min). (2) Steroidowe: kortyzol, aldosteron, testosteron, estradiol, progesteron, kalcitriol (1,25(OH)₂D₃), ekdyzon (owady). Pochodne cholesterolu → lipofilowe → dyfuzja przez błonę → receptor wewnątrzkomórkowy (cytoplazma lub jądro) → kompleks hormon-receptor → element odpowiedzi hormonalnej (HRE) w DNA → zmiana transkrypcji. Wolne (godziny-dni), T½ dłuższy (kortyzol ~1,5 h, estradiol ~2–3 h). (3) Aminowe: adrenalina, noradrenalina (hydrofilowe, receptory α/β), hormony tarczycy T3/T4 (wyjątek: hydrofilowe, ALE receptor jądrowy!).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Gruczoły dokrewne i hormony',
    subtopic_id: S.grucz,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wybranych gruczołów dokrewnych:\nA. Tarczyca produkuje T3 (trijodotyroninę) i T4 (tyroksynę) z tyrozyny i jodu — T3 jest biologicznie bardziej aktywna; niedoczynność tarczycy (hipotaryczne) prowadzi do spowolnienia metabolizmu, bradykardii, obrzęków śluzakowatych.\nB. Kora nadnerczy produkuje trzy grupy hormonów: glikokortykosteroidy (kortyzol, strefa pasmowata), mineralokortykosteroidy (aldosteron, strefa kłębkowata) i androgeny nadnerczowe (DHEA, strefa siatkowata).\nC. Rdzeń nadnerczy produkuje kortyzol i aldosteron — wchodzi w skład osi podwzgórzowo-przysadkowo-nadnerczowej (HPA) regulowanej przez ACTH.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: tarczyca: pęcherzyki z koloidem (tyreoglobulina) → pod wpływem TSH: jodowanie tyrozyny → MIT, DIT → T3 (3 jody) i T4 (4 jody) → uwolnienie do krwi (T4 → T3 przez dejodynazy w tkankach). T3 aktywniejsza (4× silniejsza, szybsza). Niedobór jodu → wole (hipertrofia). Hipotaryczne: zmęczenie, bradykardia, hipotermia, przyrost masy ciała, obrzęk śluzakowaty (myxoedema), bradylalia, sucha skóra; leczenie: lewotyroksyna (T4). B — PRAWDA: kora nadnerczy — 3 strefy (GFR = Glomerulosa-Fasciculata-Reticularis od zewnątrz): strefa kłębkowata (zona glomerulosa) → aldosteron (regulowany przez angiotensynę II i K⁺, nie ACTH); strefa pasmowata (zona fasciculata) → kortyzol (regulowany przez ACTH); strefa siatkowata (zona reticularis) → DHEA, androstendion. C — FAŁSZ: rdzeń nadnerczy (chromafinowe komórki = zmodyfikowane neurony postganglionarne) → adrenalina (80%) + noradrenalina (20%) = katecholaminy; regulowany przez nerwy współczulne (ACh → nAChR). Kortyzol i aldosteron = KORA (nie rdzeń).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Regulacja glikemii ───
  {
    subtopic: 'Fizjologia człowieka — Regulacja glikemii',
    subtopic_id: S.glik,
    question_type: 'single',
    question_text: 'Insulina i glukagon są antagonistycznymi hormonami regulującymi poziom glukozy we krwi. Które zestawienie POPRAWNIE opisuje ich działanie?',
    options: [
      { id: 'A', text: 'Insulina (komórki β, po posiłku): obniża glikemię — pobudza wchłanianie glukozy (GLUT4 w mięśniach/tk. tłuszczowej), glikogenezę, lipogenezę, syntezę białek. Glukagon (komórki α, na czczo/hipoglikemia): podnosi glikemię — aktywuje glikogenolizę i glukoneogenezę w wątrobie', is_correct: true },
      { id: 'B', text: 'Glukagon obniża glikemię (działanie identyczne z insuliną); insulina podnosi glikemię przez pobudzanie glukoneogenezy', is_correct: false },
      { id: 'C', text: 'Insulina działa na mózg, a glukagon — na mięśnie; oba hormony mają identyczny efekt metaboliczny na wątrobę', is_correct: false },
      { id: 'D', text: 'Insulina produkowana jest w komórkach α wysp Langerhansa; glukagon — w komórkach β; oba hormony obniżają glikemię po posiłku', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Wyspy Langerhansa trzustki: komórki α (~25%): glukagon; β (~65%): insulina; δ (~10%): somatostatyna; PP: polipeptyd trzustkowy. Insulina: peptyd (A + B łańcuch, 51 aa), receptor RTK (IR) → IRS → PI3K → Akt → GLUT4 translokacja do błony (mięśnie i tk. tłuszczowa); wątroby → glikogeneza (glukokinaza, GS), glikoliza, lipogeneza (SREBP-1c); hamuje: glikogenolizę, glukoneogenezę, lipolizę, ketogenezę. Wydzielanie: hiperglikemia → depolaryzacja komórki β (zamknięcie KATP) → Ca²⁺ → exocytoza. Efekt inkretynowy: GLP-1 (jelito) potęguje wydzielanie insuliny. Glukagon: peptyd (29 aa), receptor GPCR (Gs) → cAMP → PKA → aktywacja fosforylazy glikogenowej → glikogenoliza; aktywacja PEPCK/G6Pazy → glukoneogeneza. Wydzielanie: hipoglikemia, aminokwasy (po białkowym posiłku), stres.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Regulacja glikemii',
    subtopic_id: S.glik,
    question_type: 'single',
    question_text: 'Cukrzyca typu 1 i cukrzyca typu 2 mają różne mechanizmy patogenetyczne. Które zestawienie POPRAWNIE je opisuje?',
    options: [
      { id: 'A', text: 'T1DM: autoimmunologiczne zniszczenie komórek β (insulinozależna, wymagana insulinoterapia od początku, głównie u dzieci/młodych); T2DM: insulinooporność tkanek + względny niedobór insuliny (nieleczona: otyłość, styl życia, leczona lekami doustnymi + ewentualnie insuliną)', is_correct: true },
      { id: 'B', text: 'T1DM: insulinooporność (receptor insuliny uszkodzony); T2DM: autoimmunologiczne zniszczenie komórek β — brak insuliny od urodzenia', is_correct: false },
      { id: 'C', text: 'Obie formy cukrzycy mają identyczny mechanizm (brak insuliny) i wymagają identycznego leczenia (insulina); różni je wyłącznie wiek zachorowania', is_correct: false },
      { id: 'D', text: 'T2DM jest chorobą autoimmunologiczną jak T1DM, lecz przebiega łagodniej; T1DM jest wyłącznie chorobą cywilizacyjną związaną z otyłością', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Cukrzyca (DM): choroba metaboliczna charakteryzująca się hiperglikemią. T1DM (typ 1, 10%): autoimmunologiczne (limfocyty T, autoprzeciwciała: anty-GAD, anty-IA-2, anty-insulina) → destrukcja komórek β wysp → bezwzględny niedobór insuliny → hiperglikemia + kwasica ketonowa (DKA: brak insuliny → lipoliza → ketogeneza = acetoacetat + β-hydroksymaślan → kwasica). Leczenie: insulina (i.v. lub pompa). Szczyt zachorowania: 10–14 lat. T2DM (typ 2, 90%): (1) Insulinooporność (zmniejszona odpowiedź tkanek: mięśnie, tk. tłuszczowa, wątroba na insulinę — zmniejszona liczba/aktywność GLUT4, defekty w szlaku PI3K); (2) Stopniowe wyczerpanie komórek β (nie destrukcja immunol.). Przyczyny: otyłość brzuszna (adipokiny), siedzący tryb życia, genetyka. Powikłania: makronaczyniowe (CVD, udar) + mikronaczyniowe (retinopatia, neuropatia, nefropatia). HbA1c > 6,5% = kryterium. Leczenie: metformina, SGLT2i, GLP-1-RA, insulina.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Oś podwzgórze-przysadka ───
  {
    subtopic: 'Fizjologia człowieka — Oś podwzgórze-przysadka',
    subtopic_id: S.os,
    question_type: 'single',
    question_text: 'Oś podwzgórze-przysadka-gruczoł docelowy działa na zasadzie ujemnego sprzężenia zwrotnego. Jak działa oś podwzgórze-przysadka-tarczyca (HPT)?',
    options: [
      { id: 'A', text: 'Podwzgórze wydziela TRH → przysadka przednia wydziela TSH → tarczyca produkuje T3/T4 → T3/T4 hamują zarówno podwzgórze (↓TRH) jak i przysadkę (↓TSH) — ujemne sprzężenie zwrotne utrzymuje stałe stężenie hormonów', is_correct: true },
      { id: 'B', text: 'Tarczyca wydziela TSH → przysadka wytwarza T3/T4 → podwzgórze produkuje TRH; sprzężenie jest dodatnie (wzrost T4 pobudza kolejne wydzielanie)', is_correct: false },
      { id: 'C', text: 'Oś HPT działa bez sprzężenia zwrotnego — poziom T3/T4 jest stały i nie wpływa na wydzielanie TRH ani TSH', is_correct: false },
      { id: 'D', text: 'Przysadka tylna wydziela TSH; podwzgórze wydziela T3/T4 bezpośrednio; tarczyca pełni tylko funkcję magazynową', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Oś HPT (Hypothalamus-Pituitary-Thyroid): (1) Podwzgórze → TRH (thyrotropin-releasing hormone, tripeptyd: pGlu-His-ProNH₂) → por wrotny przysadki → komórki tyreotropowe przysadki przedniej. (2) Przysadka przednia → TSH (thyroid-stimulating hormone, glikoproteina, podjednostki α+β) → tarczyca. (3) Tarczyca → T3 + T4 → tkanki. Sprzężenie zwrotne ujemne: (a) Długa pętla: T3/T4 hamują przysadkę (receptor jądrowy TR → ↓transkrypcja TSHα i TSHβ) i podwzgórze (↓TRH). (b) Ultrakrótka: TSH hamuje własne wydzielanie. Kliniczne: TSH ↑ + T4 ↓ = hipotaryczne (tarczyca niedoczynna); TSH ↓ + T4 ↑ = hipertaryczne (nadczynność). TSH jest najlepszym wskaźnikiem klinicznym — zmienia się zanim T4 wyjdzie poza normę. Przerost tarczycy (wole): przy niedoborze T4 → brak hamowania TSH → chroniczny TSH ↑ → hipertrofia tarczycy.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Homeostaza hormonalna ───
  {
    subtopic: 'Fizjologia człowieka — Homeostaza hormonalna',
    subtopic_id: S.homeo,
    question_type: 'single',
    question_text: 'Stres aktywuje oś HPA (podwzgórze-przysadka-nadnercza). Jakie są fizjologiczne skutki kortyzolu uwolnionego w odpowiedzi na stres?',
    options: [
      { id: 'A', text: 'Kortyzol: ↑glukoneogeneza i glikogenoliza w wątrobie (↑glikemia), ↑lipoliza, ↑katabolizm białek (AK → glukoza), ↓odpowiedź immunologiczna (↓stan zapalny, ↓T-komórki), ↑ciśnienie krwi (↑wrażliwość na katecholaminy) — mobilizacja energii do reakcji na stres', is_correct: true },
      { id: 'B', text: 'Kortyzol obniża glikemię przez pobudzanie wychwytu glukozy w mięśniach i pobudza układ odpornościowy — ma identyczne działanie jak insulina', is_correct: false },
      { id: 'C', text: 'Kortyzol działa wyłącznie na mięśnie szkieletowe (skurcz) — nie ma wpływu na metabolizm, układ odpornościowy ani ciśnienie krwi', is_correct: false },
      { id: 'D', text: 'Kortyzol jest hormonem anabolicznym — buduje mięśnie i magazynuje glukogen; wydzielany po posiłku jako odpowiednik insuliny', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Kortyzol (główny glikokortykosteroid, kora nadnerczy): receptor GR (glucocorticoid receptor, cytoplazma) → translokacja do jądra → GRE → zmiana transkrypcji setek genów. Metaboliczne: ↑glukoneogeneza (↑PEPCK, G6Paza) → hiperglikemia; ↑proteoliza mięśni → aminokwasy → substraty glukoneogenezy; ↑lipoliza tk. tłuszczowej trzewnej (paradoks: kortyzol powoduje otyłość centralną przez inne mechanizmy). Immunologiczne: ↓produkcja IL-1, IL-6, TNF; ↓proliferacja limfocytów T; ↓fosfolipaza A2 (mniej prostaglandyn) → silny efekt przeciwzapalny. Zastosowanie: prednizon, metyloprednizolon w chorobach autoimmunologicznych, alergii, po transplantacjach. Sercowo-naczyniowe: ↑ekspresja receptorów adrenergicznych → większa wrażliwość na NA i adrenalina → wzrost BP. Przewlekły nadmiar (choroba Cushinga): otyłość centralna, twarz księżycowata, cukrzyca steroidowa, osteoporoza, immunosupresja.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia człowieka — Homeostaza hormonalna',
    subtopic_id: S.homeo,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących homeostazy hormonalnej:\nA. Regulacja ujemnym sprzężeniem zwrotnym (negative feedback) jest głównym mechanizmem utrzymującym stałe stężenia hormonów — wzrost stężenia hormonu docelowego hamuje wydzielanie hormonu nadrzędnego.\nB. Przysadka mózgowa (hypophysis) składa się z dwóch płatów o różnym pochodzeniu: adenohipofiza (gruczoł, origine ektodermalne z kieszonki Rathkego) i neurohipofiza (tkanka nerwowa, wypustka podwzgórza).\nC. Prolaktyna wydzielana przez adenohipofizę jest regulowana przez dopaminę z podwzgórza w sposób POBUDZAJĄCY — niedobór dopaminy hamuje wydzielanie prolaktyny.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: ujemne sprzężenie zwrotne = fundament homeostazy hormonalnej. Przykłady: T3/T4 → ↓TRH + ↓TSH; kortyzol → ↓CRH + ↓ACTH; estradiol (faza folikularna) → ↓FSH; testosteron → ↓GnRH + ↓LH/FSH. Rzadki dodatni feedback: LH surge w połowie cyklu (estradiol wysoki → ↑LH → owulacja). B — PRAWDA: adenohipofiza (płat przedni + pośredni): komórki wydzielające GH, TSH, ACTH, FSH, LH, prolaktynę, MSH. Regulowana przez neuropeptydy podwzgórza dostarczane układem wrotnym przysadki. Neurohipofiza (płat tylny): aksonowe zakończenia neuronów z jąder nadwzrokowych i przykomorowych podwzgórza → uwalnianie ADH i oksytocyny (syntetyzowanych w podwzgórzu!). C — FAŁSZ: dopamina (PIF = prolactin-inhibiting factor) HAMUJE wydzielanie prolaktyny toniczne → niedobór dopaminy (np. blokada D2 przez neuroleptyki jak haloperidol) → ↑prolaktyna (hyperprolaktynemia → mlekotok, zaburzenia cyklu u kobiet, ginekomastia u mężczyzn). Prolaktyna jest wyjątkowo regulowana HAMUJĄCO przez podwzgórze (inne hormony przysadki są pobudzane przez podwzgórze).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
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
  console.log(`Seeding ${questions.length} mock questions for Fizjologia czlowieka — nerwowy i hormonalny...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
