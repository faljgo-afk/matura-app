// Seed: mock_questions — Ewolucja (18 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  hist:   'd0cddd5e-fe2d-45e8-8a83-d6ca226aa066',
  dobor:  '60c54d99-610e-4665-bd0f-a0a817bb3293',
  dowody: 'b6029a9b-b7f0-495c-9807-d4fa0aee7685',
  mech:   'c0180145-ab04-4095-a8cd-408266e67666',
  dryf:   '09ceba8f-05e2-4a51-93ac-9b5a2f63e297',
  spec:   '840e965f-efa5-4f77-9ee1-7e79f65062f8',
  czlow:  '1b3293cb-2932-4bc0-aea1-c946b80d238d',
  histz:  '34d9a424-7aae-420e-bcb9-4bf3e2ced5bc',
  koew:   '7afc4b79-1d7a-4e30-bb75-314cde619c7a',
}

const questions = [
  // ─── Historia ewolucjonizmu ───
  {
    subtopic: 'Ewolucja — Historia ewolucjonizmu',
    subtopic_id: S.hist,
    question_type: 'single',
    question_text: 'Darwin i Lamarck mieli różne koncepcje mechanizmu ewolucji. Które zestawienie POPRAWNIE opisuje różnice między ich teoriami?',
    options: [
      { id: 'A', text: 'Lamarck: nabyte cechy są dziedziczone (dziedziczenie cech nabytych); użycie → wzmocnienie narządu; przykład: żyrafa wydłuża szyję przez wysiłek i przekazuje ją potomkom. Darwin: zmienność losowa (mutacje) + dobór naturalny eliminuje mniej przystosowanych — cechy nabyte nie są dziedziczone', is_correct: true },
      { id: 'B', text: 'Darwin głosił dziedziczenie cech nabytych i celowość ewolucji (organizmy "chcą" się zmienić); Lamarck — losową zmienność i dobór naturalny; obaj nie znali mechanizmu dziedziczenia', is_correct: false },
      { id: 'C', text: 'Obie teorie są identyczne — Lamarck i Darwin niezależnie odkryli dobór naturalny i razem opublikowali "O powstawaniu gatunków"; różnią się jedynie terminologią', is_correct: false },
      { id: 'D', text: 'Teoria Darwina zakłada celowość ewolucji — gatunki ewoluują w kierunku doskonałości według z góry określonego planu; Lamarck odrzucał istnienie ewolucji i głosił stałość gatunków', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Jean-Baptiste Lamarck (1744–1829, "Philosophie Zoologique" 1809): (1) Zasada użycia i nieużywania: narząd intensywnie używany → powiększa się i wzmacnia; nieużywany → zanika. (2) Zasada dziedziczenia cech nabytych: cechy nabyte przez osobnika w ciągu życia są przekazywane potomstwu. Przykład: żyrafa wyciąga szyję po liście → szyja się wydłuża → córki mają dłuższą szyję. Problem: Weismann (1889) przeciął ogony myszy przez 22 pokolenia → ogony nadal normalne = obalenie lamarckizmu. Charles Darwin (1809–1882, "O powstawaniu gatunków" 1859, wspólnie z Wallacem): (1) Zmienność: w populacji istnieje naturalna zmienność (losowa, dziś wiemy że mutacje + rekombinacja). (2) Dziedziczność: cechy się dziedziczą. (3) Nadprodukcja: więcej potomstwa niż środowisko wyżywi → walka o byt. (4) Dobór naturalny: osobniki z korzystnymi cechami mają wyższe przeżycie i rozród → ich cechy są dziedziczone. Kluczowa różnica: Darwin — zmienność LOSOWA (nie celowa) + selekcja; Lamarck — zmiana KIERUNKOWA napędzana przez "potrzebę" + dziedziczenie nabytych. Neo-lamarckizm/epigenetyka: modyfikacje epigenetyczne mogą być częściowo dziedziczone (nie rehabilituje jednak lamarckizmu).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ewolucja — Historia ewolucjonizmu',
    subtopic_id: S.hist,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących neodarwinizmu (syntezy ewolucyjnej):\nA. Neodarwinizm (synteza ewolucyjna, lata 30.–50. XX w.) połączył teorię Darwina (dobór naturalny) z genetyką mendlowską i genetyką populacyjną — ustalił, że mutacje i rekombinacja dostarczają materiału genetycznego, na który działa dobór naturalny.\nB. Prawo Hardy\'ego-Weinberga opisuje częstości alleli w populacji idealnej (nieskończonej, bez mutacji, bez doboru, bez dryftu, panmiksja) — w rzeczywistości żadna populacja nie spełnia tych warunków, a odchylenia od równowagi wskazują na działanie ewolucji.\nC. Zgodnie z neodarwinizmem ewolucja jest zawsze kierunkowa i prowadzi ku coraz wyższemu "doskonaleniu" organizmów — celem ewolucji jest człowiek jako najdoskonalszy organizm na Ziemi.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: Synteza ewolucyjna (Modern Synthesis): Dobzhansky "Genetics and the Origin of Species" (1937), Mayr (specjacja), Simpson (paleontologia), Huxley (termin "Modern Synthesis"). Filarami: (1) Dobór naturalny Darwina; (2) Genetyka mendlowska (geny = dyskretne czynniki dziedziczności); (3) Genetyka populacyjna (Hardy-Weinberg, Wright, Fisher, Haldane): frekwencje alleli; (4) Mutacje = główne źródło nowej zmienności; (5) Ewolucja = zmiana frekwencji alleli w populacji w czasie. B — PRAWDA: H-W (Hardy 1908, Weinberg 1908): p² + 2pq + q² = 1 (dla alleli A i a); p + q = 1; w warunkach idealnych frekwencje nie zmieniają się przez pokolenia. Warunki: nieskończona populacja, brak mutacji, brak doboru, brak migracji, losowe krzyżowanie (panmiksja). Zastosowanie: test czy działają siły ewolucji; porównanie obserwowanych vs oczekiwanych genotypów (test chi²); medycyna sądowa (frekwencje alleli). C — FAŁSZ: ewolucja jest BEZKIERUNKOWA i nie ma "celu" — dobór naturalny działa na bieżące warunki środowiskowe; nie ma hierarchii "niższych" i "wyższych" form; człowiek nie jest "doskonalszy" niż bakteria (która przeżyła 3,5 mld lat). Ewolucja = descendance with modification (potomstwo z modyfikacją), nie "progress".',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Dobór naturalny ───
  {
    subtopic: 'Ewolucja — Dobór naturalny',
    subtopic_id: S.dobor,
    question_type: 'single',
    question_text: 'Dobór naturalny może działać w różnych kierunkach. Które zestawienie POPRAWNIE opisuje trzy typy doboru stabilizującego, kierunkowego i rozrywającego?',
    options: [
      { id: 'A', text: 'Stabilizujący: eliminuje fenotypy skrajne, faworyzuje średnią (np. masa urodzeniowa noworodka); kierunkowy: przesuwa rozkład w jednym kierunku (np. oporność na antybiotyki); rozrywający (dyrupcyjny): eliminuje średnią, faworyzuje oba skrajne → dwumodalny rozkład (np. dymorfizm wielkości)', is_correct: true },
      { id: 'B', text: 'Stabilizujący: faworyzuje skrajne fenotypy i eliminuje średnią; kierunkowy: utrzymuje polimorfizm; rozrywający: przesuwa rozkład ku jednej wartości i eliminuje resztę', is_correct: false },
      { id: 'C', text: 'Wszystkie trzy typy doboru prowadzą do identycznych efektów w populacji — różnią się jedynie czasem trwania; dobór kierunkowy jest najwolniejszy, rozrywający — najszybszy', is_correct: false },
      { id: 'D', text: 'Dobór rozrywający faworyzuje tylko jeden skrajny fenotyp i jest identyczny z kierunkowym; dobór stabilizujący powoduje wzrost zmienności genetycznej populacji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Typy doboru naturalnego (wg kształtu krzywej selekcji): (1) Dobór stabilizujący (normalizing selection): faworyzuje fenotyp optymalny (pośredni), eliminuje odchylenia od średniej → ↓zmienność, zachowanie dobrze przystosowanego fenotypu w stabilnym środowisku. Przykłady: masa urodzeniowa człowieka (zbyt małe i zbyt duże = wyższa śmiertelność; optimum ~3,5 kg); długość skrzydeł u ptaków po burzach (przeżyły z przeciętną rozpiętością). (2) Dobór kierunkowy (directional): faworyzuje jeden skrajny fenotyp → przesuwa rozkład cechy → zmiana populacji w czasie. Przykłady: oporność na antybiotyki (faworyzowane rzadkie allele oporności); selekcja naturalna i sztuczna; ciemna ćma Biston betularia w uprzemysłowionym Manchesterze (melanizm przemysłowy). (3) Dobór rozrywający/dyruptywny (disruptive): faworyzuje oba skrajne fenotypy, eliminuje pośredni → rozkład dwumodalny → może prowadzić do specjacji sympatrycznej. Przykłady: zięby Darwina z dziobami dużymi lub małymi (duże = twarde nasiona, małe = miękkie; pośrednie = brak niszy); rozmiar ciała muszli u ślimaków (małe prześlizgują się przez szczeliny, duże nie łapane; pośrednie zjadane).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ewolucja — Dobór naturalny',
    subtopic_id: S.dobor,
    question_type: 'single',
    question_text: 'Dobór płciowy (sexual selection) jest szczególną formą doboru naturalnego. Które stwierdzenie POPRAWNIE opisuje jego mechanizmy?',
    options: [
      { id: 'A', text: 'Dobór płciowy działa przez wybór partnera (interseksualny: samica wybiera samca wg sygnałów jakości — ogon pawia, pieśń ptaka) i rywalizację o dostęp do partnerów (intraseksualny: samce walczą między sobą — rogi jelenia); może prowadzić do cech zmniejszających przeżycie (ogon pawia = ↑ryzyko drapieżnictwa), ale ↑sukces reprodukcyjny', is_correct: true },
      { id: 'B', text: 'Dobór płciowy działa wyłącznie u owadów i nie dotyczy kręgowców; samica nigdy nie wybiera samca — to samiec zawsze wybiera samicę we wszystkich gatunkach; piękne upierzenie jest wyłącznie produktem doboru przeżycia (nie płciowego)', is_correct: false },
      { id: 'C', text: 'Dobór płciowy i dobór naturalny są wzajemnie wykluczające się — cecha faworyzowana przez dobór płciowy jest zawsze korzystna dla przeżycia; oba dobory zawsze działają w tym samym kierunku', is_correct: false },
      { id: 'D', text: 'Hipoteza "dobrego genu" (good genes hypothesis) zakłada, że ozdoby samca są przypadkowe i nie informują o jego genetycznej jakości; samica wybiera samca na podstawie jego terytorialności, a nie cech morfologicznych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Dobór płciowy (sexual selection, Darwin 1871): forma doboru naturalnego działająca przez sukces reprodukcyjny (nie przez przeżycie). Dwa mechanizmy: (1) Interseksualny (mate choice, zazwyczaj samica wybiera samca): dlaczego samice są wybredne? Inwestycja rodzicielska (Trivers): samica = większe gamety, ciąża, opieka → wyższy koszt błędnego wyboru → selektywna. Samica wybiera sygnały jakości: ogon pawia (Pavo cristatus) → hipoteza obciążenia (handicap principle, Zahavi): długi ogon = kosztowna cecha (↑drapieżnictwo) = "uczciwość sygnału"; tylko zdrowy samiec może ją utrzymać → informuje o genach odporności (hipoteza dobrego genu). Runaway selection (Fisher): samice preferujące ozdobę → synowie mają ozdobę + córki mają gen preferencji → sprzężone → eskalacja. (2) Intraseksualny (male-male competition): samce rywalizują fizycznie o dostęp do samic; selekcja na: rozmiar ciała, rogi (jeleń szlachetny), kły (słoń); wynik: dymorfizm płciowy. Paradoks pawia: ogon ↓aerodynamika ↑ryzyko → przeżycie niższe, ale reprodukcja wyższa → selekcja netto (+).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Dowody ewolucji ───
  {
    subtopic: 'Ewolucja — Dowody ewolucji',
    subtopic_id: S.dowody,
    question_type: 'single',
    question_text: 'Homologia i analogia to różne typy podobieństwa między organizmami. Które zestawienie POPRAWNIE je odróżnia i podaje przykłady?',
    options: [
      { id: 'A', text: 'Homologia: podobieństwo wynikające ze wspólnego pochodzenia (wspólny przodek), niezależnie od funkcji — kończyna pięciopalcowa (pentadaktylna) człowieka, wieloryba, kreta i ptaka (dowód ewolucji); analogia: podobieństwo funkcjonalne bez wspólnego pochodzenia — skrzydło ptaka i skrzydło owada (ewolucja konwergentna)', is_correct: true },
      { id: 'B', text: 'Homologia: identyczna funkcja + identyczne pochodzenie; analogia: identyczne pochodzenie + inna funkcja; oba typy są dowodem ewolucji konwergentnej', is_correct: false },
      { id: 'C', text: 'Skrzydło ptaka i skrzydło motyla to homologi — obydwa pochodzą od kończyny przodka; kończyna człowieka i kończyna wieloryba to analogi — ta sama funkcja (poruszanie)', is_correct: false },
      { id: 'D', text: 'Analogia jest silniejszym dowodem ewolucji niż homologia — im bardziej odmienne organizmy mają podobne struktury, tym pewniejsze ich wspólne pochodzenie; homologi nie mogą służyć jako dowód ewolucji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Homologia vs analogia: Homologia (homology): podobieństwo struktur wynikające ze wspólnego POCHODZENIA (synapomorfie); struktury homologiczne mogą pełnić różne funkcje! Kończyna pentadaktylna (5-palcowa) tetrapodów: (a) ręka człowieka (chwytanie), (b) skrzydło ptaka (latanie), (c) płetwa wieloryba (pływanie), (d) przednia łapa kreta (kopanie) → różne funkcje, ta sama podstawowa budowa (humerus + radius/ulna + carpalia + metakarpalia + paliczki) = wspólny przodek naziemny (ryba płetwonoga, ok. 375 mln lat). Narządy szczątkowe (vestigial): zredukowane homologi niefunkcjonalne: kości miednicy u waleni, wyrostek robaczkowy, trzecia powieka (mrugatka), zęby mądrości, mięsień długi dłoni (u 10% nieobecny). Analogia (analogy = homoplazja): podobieństwo FUNKCJONALNE bez wspólnego pochodzenia; zbieżność ewolucyjna (convergence): niezależne wykształcenie tej samej adaptacji. Przykłady: skrzydło ptaka (zmodyfikowana kończyna) vs skrzydło owada (wyrost pancerza) vs skrzydło nietoperza; oko soczewkowe kręgowca vs głowonoga; kształt ciała tuńczyka vs rekina vs ichtiozaura (torpedowaty = adaptacja do szybkiego pływania niezależnie w 3 liniach). Analogia = ewolucja konwergentna = dowód na działanie tych samych sił selekcji w podobnym środowisku.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ewolucja — Dowody ewolucji',
    subtopic_id: S.dowody,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących dowodów ewolucji:\nA. Skamieniałości (paleontologiczne dowody ewolucji) dokumentują historię życia na Ziemi — formy przejściowe (np. Archaeopteryx łączący cechy gadów i ptaków, Tiktaalik — ryba "pełzająca" z kończynopodobnymi płetwami) potwierdzają stopniowe przekształcenia między grupami.\nB. Biogeografia ewolucyjna dostarcza dowodów ewolucji: na izolowanych geograficznie obszarach (wyspy, kontynenty) ewoluowały podobne adaptacje u niespokrewnionych gatunków (konwergencja) lub endemity bliskie taksonom z kontynentu macierzystego (radiacja adaptacyjna).\nC. Molekularne dowody ewolucji (sekwencje DNA, białek) są sprzeczne z dowodem paleontologicznym i morfologicznym — im dwa gatunki są bliżej spokrewnione morfologicznie, tym bardziej różnią się sekwencjami DNA.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, P', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: skamieniałości: Archaeopteryx (Jurassic, 150 mln lat): cechy gadów (zęby, długi ogon kostny, wolne pazury na skrzydłach) + cechy ptaków (pióra, obojczyk, kość łódkowa) = "brakujące ogniwo" dinozaury → ptaki; Tiktaalik (Devon, 375 mln): ryba z płetwami z kośćmi humerus-radius-ulna i mobilną szyją, zdolna do "odpychania się" od dna → przejście woda → ląd; Pakicetus (Eocen, 52 mln): wczesny wal z 4 kończynami → seria skamieniałości do Ambulocetus → Rodhocetus → Basilosaurus → współczesne walenie. B — PRAWDA: biogeografia ewolucyjna: izolacja geograficzna → niezależna ewolucja; Galapagos: 13 gatunków zięb (Geospizinae) z 1 przodka z Ameryki Pd → radiacja adaptacyjna na różne nisze pokarmowe (Darwina finches); Australopithecja: torbacze w niszy ssaków łożyskowych (wilk workowaty ~ wilk, diabeł tasmański ~ wolverine, koala ~ leniwiec). C — FAŁSZ: dowody molekularne są SPÓJNE z morfologicznymi i paleontologicznymi = konwergencja dowodów. Bliżej spokrewnione gatunki mają BARDZIEJ PODOBNE sekwencje DNA (np. człowiek-szympans: 98,7% DNA identyczne; człowiek-mysz: ~85%); zegar molekularny (neutral mutations) = szacowanie czasu rozejścia linii; BLAST, filogenetyka molekularna potwierdzają drzewo życia.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mechanizmy ewolucji ───
  {
    subtopic: 'Ewolucja — Mechanizmy ewolucji',
    subtopic_id: S.mech,
    question_type: 'single',
    question_text: 'Mutacje są pierwotnym źródłem zmienności genetycznej. Które zestawienie POPRAWNIE opisuje typy mutacji i ich znaczenie ewolucyjne?',
    options: [
      { id: 'A', text: 'Mutacje punktowe (substytucje: synonimiczne/milczące → brak zmiany AA; missense → zmiana AA; nonsense → kodon stop); mutacje ramki odczytu (insercje/delecje) = najpoważniejsze. Większość mutacji jest neutralna lub szkodliwa; rzadkie mutacje korzystne = materiał dla doboru. Rekombinacja dostarcza dodatkowej zmienności', is_correct: true },
      { id: 'B', text: 'Wszystkie mutacje są letalne i eliminowane przez dobór naturalny w ciągu jednego pokolenia; neutralne i korzystne mutacje nie istnieją; rekombinacja nie wytwarza nowej zmienności genetycznej', is_correct: false },
      { id: 'C', text: 'Mutacje sinonimiczne (milczące) zawsze zmieniają sekwencję aminokwasową białka; mutacje missense nie wpływają na fenotyp; insercja pojedynczego nukleotydu nie zmienia ramki odczytu', is_correct: false },
      { id: 'D', text: 'Mutacje germinalne (w komórkach rozrodczych) nie są dziedziczone przez potomstwo — są naprawiane przed podziałem; tylko mutacje somatyczne są przekazywane następnym pokoleniom', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mutacje — klasyfikacja i znaczenie: (1) Mutacje punktowe (substytucje jednego nukleotydu, SNV): Synonimiczna (milcząca, silent): zmiana kodonu → ten sam aminokwas (degeneracja kodu) → brak zmiany białka → ewolucyjnie neutralna lub prawie; Missense: zmiana kodonu → inny aminokwas → zmiana białka (może być neutralna, korzystna lub szkodliwa); przykład: HbS (sierpowata: GAG → GTG, Glu → Val w β-globinie); Nonsense: zmiana → kodon stop → skrócone białko → zazwyczaj nieaktywne. (2) Indels (insercje/delecje): zmiana ramki odczytu (frameshift) → błędna translacja od miejsca mutacji → przedwczesny kodon stop; ewolucyjnie zazwyczaj bardzo szkodliwa. (3) Duplikacje genów: kluczowy mechanizm ewolucji nowych genów (neofunctionalization, subfunctionalization). Dystrybucja efektów: ~90% mutacji neutralne lub prawie neutralne (teoria neutralna Kimury 1968), ~9% szkodliwe, <1% korzystne. Dziedziczenie: mutacje germinalne (w komórkach rozrodczych = jaja i plemniki) → przekazywane potomstwu = materiał ewolucyjny; mutacje somatyczne → rак, starzenie = nie dziedziczone (wyjątek: u roślin z nasion z tkanki somatycznej). Rekombinacja: shuffling alleli w mejozie → nowe kombinacje (nie nowe allele, ale nowe genotypy); crossing-over + segregacja niezależna.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Dryf genetyczny ───
  {
    subtopic: 'Ewolucja — Dryf genetyczny',
    subtopic_id: S.dryf,
    question_type: 'single',
    question_text: 'Dryf genetyczny jest przypadkową zmianą częstości alleli. Które zestawienie POPRAWNIE opisuje dryf i jego szczególne przypadki?',
    options: [
      { id: 'A', text: 'Dryf genetyczny: losowe zmiany frekwencji alleli (nie wynikające z doboru) — silniejszy w małych populacjach; efekt założyciela: mała grupa kolonizuje nowe terytorium → mały wycinek puli genowej; efekt wąskiego gardła: drastyczne zmniejszenie populacji → utrata różnorodności genetycznej', is_correct: true },
      { id: 'B', text: 'Dryf genetyczny jest silniejszy w dużych populacjach; efekt wąskiego gardła zwiększa różnorodność genetyczną; efekt założyciela dotyczy wyłącznie roślin, nie zwierząt', is_correct: false },
      { id: 'C', text: 'Dryf i dobór naturalny są identyczne — oba działają losowo; efekt założyciela = forma doboru stabilizującego; dryf zawsze usuwa allele szkodliwe i faworyzuje korzystne', is_correct: false },
      { id: 'D', text: 'Dryf genetyczny może zmieniać frekwencje alleli tylko w jednym kierunku (w kierunku fiksacji alleli korzyst.); nie może nigdy utrwalić alleli szkodliwych ani usunąć korzystnych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Dryf genetyczny (genetic drift): losowe, przypadkowe zmiany frekwencji alleli z pokolenia na pokolenie, niezwiązane z przystosowawczością (fitness); wynika ze stochastycznej próby genotypów w skończonej populacji. Właściwości: siła dryftu ∝ 1/Ne (efektywna wielkość populacji); w dużych populacjach dryf mały i zmiany powolne; w małych populacjach dryf duży → allele losowo ulegają fiksacji (f=1) lub eliminacji (f=0); niezależny od wartości przystosowawczej allelu → może utrwalić allele szkodliwe i eliminować korzys. (2) Efekt wąskiego gardła (bottleneck effect): katastrofa → drastyczny ↓ liczby osobników → pula genowa kurczy się losowo → ↓różnorodność genetyczna; przykłady: gepard (niemal wymarł ~10 000 lat temu → wyjątkowa jednorodność genetyczna: przeszczepy skóry między gepardami bez odrzucenia!); foka słoniowa północna (Mirounga angustirostris): w XIX w. polowania → ~20 osobników → dziś 170 000 ale prawie brak polimorfizmu. (3) Efekt założyciela (founder effect): mała grupa odłącza się od macierzystej populacji i zakłada nową (emigracja, kolonizacja wysp); reprezentuje przypadkowy podzbiór puli genowej → wysokie ryzyko rzadkich alleli lub brak alleli; przykłady: porfyria wariegate w RPA (holenderski koloniści, 1688); choroba Huntingtona na wyspie Marajó (Brazylia). Teoria neutralna Kimury: większość zmian ewolucyjnych na poziomie molekularnym to fiksacja neutralnych mutacji przez dryf, nie dobór.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ewolucja — Dryf genetyczny',
    subtopic_id: S.dryf,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących skutków dryftu genetycznego i przepływu genów:\nA. Izolacja populacji (geograficzna lub reprodukcyjna) w połączeniu z dryftem genetycznym może prowadzić do utrwalenia różnych alleli w różnych populacjach — z czasem populacje zróżnicują się genetycznie i mogą stać się odrębnymi gatunkami.\nB. Przepływ genów (gene flow, migracja genotypów między populacjami) homogenizuje pule genowe różnych populacji — im wyższy przepływ genów, tym mniejsze różnicowanie między populacjami; przepływ genów przeciwdziała dryfowi i efektowi założyciela.\nC. Dryf genetyczny i dobór naturalny zawsze działają w tym samym kierunku — allel faworyzowany przez dobór jest zawsze allelem, który ulegnie fiksacji przez dryf; nie może dojść do sytuacji, gdzie dryf usuwa allel korzystny.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: izolacja + dryf = dywergencja genetyczna; model Wright\'a (Sewall Wright, 1931): "shifting balance theory" — małe izolowane populacje mogą eksplorować nowe kombinacje alleli przez dryf i dobór; Mayr: specjacja perypatryczna / allopatryczna (patrz specjacja). Populacje izolowane → akumulacja różnic przez dryf i dobór → izolacja reprodukcyjna (zygotyczna lub postzygotyczna) → gatunki. B — PRAWDA: gene flow (przepływ genów): migracja osobników między populacjami → przeniesienie alleli → wyrównanie frekwencji; mierzone jako Nm (N = rozmiar populacji, m = stopa migracji); Nm > 1 = migracja przeciwdziała dryfowi i dywergencji; Nm << 1 = dominuje dryf, populacje się różnicują. Zastosowania: populacje sąsiednich farm chronią allele od wymierania przez gene flow z dzikich populacji; "stepping stone" modele przepływu. C — FAŁSZ: dryf i dobór są NIEZALEŻNE i mogą działać PRZECIWNIE; dryf może: (a) usunąć korzystny allel (jeśli jest rzadki i populacja mała — prawdopodobieństwo fiksacji allelu neutralnego = p = f allelu; dla allelu rzadkiego nawet korzys., szansa fiksacji niska bez wsparcia doboru); (b) utrwalić szkodliwy allel (jeśli populacja mała); reguła: dla Ns >> 1 (N = efektywna pop, s = siła selekcji): dobór dominuje; dla Ns << 1: dryf dominuje (efektywna neutralność).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Specjacja ───
  {
    subtopic: 'Ewolucja — Specjacja',
    subtopic_id: S.spec,
    question_type: 'single',
    question_text: 'Pojęcie gatunku biologicznego (Biological Species Concept, BSC) i typy specjacji. Które zestawienie POPRAWNIE opisuje BSC i typy specjacji?',
    options: [
      { id: 'A', text: 'BSC (Mayr): gatunek = populacje mogące się swobodnie krzyżować i wydawać płodne potomstwo, izolowane rozrodczo od innych. Specjacja allopatryczna: izolacja geograficzna → niezależna ewolucja → izolacja reprodukcyjna; sympatryczna: bez izolacji geograficznej (poliploidalność, dobór rozrywający)', is_correct: true },
      { id: 'B', text: 'BSC: gatunek = populacja identyczna morfologicznie (morfologiczne kryterium gatunku); specjacja allopatryczna zachodzi bez żadnej izolacji geograficznej; sympatryczna wymaga bariery fizycznej między populacjami', is_correct: false },
      { id: 'C', text: 'Specjacja sympatryczna jest niemożliwa — nowe gatunki mogą powstawać wyłącznie przez fizyczną izolację geograficzną (allopatrię); poliploidalność nie prowadzi do specjacji', is_correct: false },
      { id: 'D', text: 'BSC (Mayr) zakłada, że gatunki są stałe i nie mogą ewoluować; specjacja allopatryczna i sympatryczna są identyczne i prowadzą do dokładnie tych samych efektów genetycznych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Pojęcie gatunku biologicznego (BSC, Mayr 1942): "gatunki = grupy naturalnie (lub potencjalnie) krzyżujących się populacji, rozrodczo izolowanych od innych takich grup." Ograniczenia BSC: nie dotyczy: organizmów bezpłciowych (bakterie), form kopalnych, gatunków alloploidalnych, pierścieni gatunkowych. Inne koncepcje: morfologiczne (Linnaeus), filogenetyczne (monofyl), ekologiczne (nisza). Mechanizmy izolacji reprodukcyjnej: prezygotyczne (temporalna, behawioralna, mechaniczna, gametyczna) i postzygotyczne (hybryd inviability, sterility: muł/liger). Typy specjacji: (1) Allopatryczna: fizyczna bariera → izolacja geograficzna → dryf + dobór → zróżnicowanie → izolacja reprodukcyjna → nowe gatunki. Przykłady: zięby Darwina (14 gatunków z 1 przodka na Galapagos); wiewiórki po obu stronach Wielkiego Kanionu. (2) Perypatryczna: mała populacja na peryferiach areału (efekt założyciela) → szybki dryf + specjacja. (3) Parapatryczna: gradient środowiskowy bez pełnej bariery → dobór przeciwny w różnych częściach areału → hybrydowa strefa. (4) Sympatryczna: bez izolacji geograficznej; poliploidalność u roślin (80% gatunków roślin to poliploidy: pszenica = heksaploid 6n=42; Spartina = allotetraploid); dobór rozrywający (ekomorfy); przykłady: jabłko vs głóg u Rhagoletis pomonella (roztocze zimowe).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Ewolucja człowieka ───
  {
    subtopic: 'Ewolucja — Ewolucja człowieka',
    subtopic_id: S.czlow,
    question_type: 'single',
    question_text: 'Ewolucja człowieka obejmuje kilka kluczowych etapów. Które zestawienie POPRAWNIE opisuje kolejność i cechy głównych gatunków w linii hominidów?',
    options: [
      { id: 'A', text: 'Australopithecus afarensis (~3,2 mln lat, "Lucy"): dwunożność, mały mózg (~450 cm³); Homo habilis (~2,4 mln): pierwsze narzędzia (olduwajskie), mózg ~600 cm³; Homo erectus (~1,8 mln): ogień, narzędzia aszelskie, migracja z Afryki; Homo sapiens (~300 tys.): duży mózg (~1400 cm³), mowa, sztuka, kultura', is_correct: true },
      { id: 'B', text: 'Homo sapiens pojawił się jako pierwszy (7 mln lat temu) i ewoluował w Australopithecus; Homo erectus nigdy nie opuścił Afryki; mózg człowieka ewoluował przez zmniejszanie się (od 2000 cm³ do 1400 cm³)', is_correct: false },
      { id: 'C', text: 'Dwunożność u hominidów pojawiła się wraz z powiększeniem mózgu — Australopithecus chodził na czterech kończynach; dopiero Homo habilis zaczął chodzić dwunożnie i jednocześnie powiększył mózg', is_correct: false },
      { id: 'D', text: 'Neanderthalczyk (Homo neanderthalensis) był bezpośrednim przodkiem Homo sapiens — sapiens ewoluował z neandertala w Europie; chromosom Y pochodzi wyłącznie od Homo erectus', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ewolucja człowieka (hominizacja): główna linia: (1) Sahelanthropus tchadensis (7 mln lat, Czad): najstarszy znany hominin, dwunożność, cecha diagnostyczna: mała kłykcie potyliczne = otwór wielki przesuniął się na dół. (2) Ardipithecus ramidus (4,4 mln): potrafi chodzić pionowo + wspinać się (duże kciuki stóp). (3) Australopithecus afarensis (3,2–3,9 mln): "Lucy" (40% szkieletu) + "Taung child"; mózg ~450 cm³ (jak szympans), dwunożny (ślady z Laetoli), brak narzędzi kulturowych. (4) Homo habilis (2,4–1,6 mln): Olduvai; narzędzia olduwajskie (otoczaki); mózg ~600 cm³; podział pracy? (5) Homo erectus (1,8 mln – 0,1 mln): Java, Pekin, Georgia (Dmanisi); ogień (Zhoukoudian, 500 tys.), narzędzia aszelskie (pięściak); mózg ~900 cm³; migracja z Afryki ("Out of Africa I"). (6) Homo heidelbergensis (0,7–0,2 mln): przodek Neandertala (Europa) i sapiens (Afryka). (7) Homo neanderthalensis (0,4–0,04 mln): Europa/Azja; mózg ~1500 cm³ (większy niż sapiens!); opieka nad rannymi, pochówki, mowa (?); krzyżowanie z sapiens (1–4% genomu nie-Afrykanów); wymarł ~40 tys. (8) Homo sapiens (~300 tys., Afryka): mózg ~1400 cm³; sztuka (35 tys. jaskinie Altamira), mowa, kultura; "Out of Africa II" ~70–60 tys.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ewolucja — Ewolucja człowieka',
    subtopic_id: S.czlow,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ewolucji człowieka:\nA. Analiza mitochondrialnego DNA (mtDNA) wszystkich współczesnych ludzi wskazuje na wspólną przodkinię żeńską ("Mitochondrial Eve") żyjącą w Afryce ok. 150–200 tys. lat temu — nie oznacza to, że była jedyną kobietą, lecz że jej mtDNA (dziedziczone wyłącznie po matce) przetrwało u wszystkich ludzi.\nB. Homo sapiens i Homo neanderthalensis krzyżowały się — sekwencjonowanie DNA z kości neandertalskich (Pääbo, Nagroda Nobla 2022) wykazało, że 1–4% genomu ludzi spoza Afryki pochodzi od neandertalczyków; niektóre geny neandertalskie wpływają na odporność i metabolizm.\nC. Dwunożność (bipedalizm) u hominidów ewoluowała jako adaptacja do biegania na długich dystansach i wykształciła się jednocześnie z powiększeniem mózgu — Australopithecus miał mózg wielkości ludzkiego i chodził pionowo, a następnie shrinkował mózg do rozmiarów szympansa.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: mtDNA Eve (Cann, Stoneking, Wilson 1987, Nature): mtDNA dziedziczone wyłącznie matrylinearnie (bez rekombinacji z ojcem) → filogeneza mtDNA wszystkich 7,8 mld ludzi prowadzi do 1 wspólnego węzła w Afryce ~150–200 tys. lat; "Eve" ≠ jedyna kobieta (żyły setki tysięcy kobiet) — tylko jej matrylineaż nie wymarł; analoga: "Chromosomal Adam" (wspólny przodek Y-chromosomu, ~200–340 tys. lat, Afryka). B — PRAWDA: Svante Pääbo (Max Planck) 2010: sekwencjonowanie jądrowego DNA Homo neanderthalensis z kości z Chorwacji; porównanie z genomami współczesnych ludzi → hybrydzacja (introgresja): 1–4% u Europejczyków i Azjatów, 0% u Afrykanów (dlatego do hybrydzacji doszło po wyjściu z Afryki ~60 tys. lat); geny neandertalskie: EPAS1 (adaptacja do wysokości u Tybetańczyków), allele MHC (odporność), BNC2 (pigmentacja). Nobel za fizykę? NIE — Pääbo dostał Nobla z FIZJOLOGII i MEDYCYNY (2022). C — FAŁSZ: bipedalizm POPRZEDZIŁ powiększenie mózgu w ewolucji! Australopithecus (3–4 mln lat) był dwunożny ale miał mózg ~450 cm³ (jak szympans). Powiększenie mózgu: Homo habilis (~600), Homo erectus (~900), sapiens (~1400 cm³ — zwiększył się w ciągu ~2 mln lat). Hipotezy o przyczynach bipedalizmu: (1) cooling (wyprostowana sylwetka = mniejsza powierzchnia pod słońcem, ↑radiacja ciepła, ↑pot = chłodzenie mózgu); (2) efektywność energetyczna (bieg dwunożny efektywniejszy od kłusowania na czterech); (3) uwolnienie rąk do noszenia i narzędzi.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Historia życia na Ziemi ───
  {
    subtopic: 'Ewolucja — Historia życia na Ziemi',
    subtopic_id: S.histz,
    question_type: 'single',
    question_text: 'Historia życia na Ziemi obejmuje kilka wielkich wymierań. Które zestawienie POPRAWNIE opisuje dwa największe masowe wymierania i ich przyczyny?',
    options: [
      { id: 'A', text: 'Wymieranie perm/trias (P-T, "The Great Dying", 252 mln lat): największe w historii, ~96% gatunków morskich i ~70% lądowych; przyczyny: superwulkanizm syberyjski (Siberian Traps) → CO₂/SO₂ → ocieplenie, zakwaszenie oceanów, hipoksja. Wymieranie kreda/paleogen (K-Pg, 66 mln lat): ~76% gatunków; meteoryt Chicxulub (~10 km) + superwulkanizm indyjski (Deccan Traps)', is_correct: true },
      { id: 'B', text: 'Wymieranie kredowe (K-Pg) jest największym w historii Ziemi (~99% gatunków); wymieranie permskie dotyczyło wyłącznie dinozaurów; meteoryt Chicxulub uderzył w permie, nie w kredzie', is_correct: false },
      { id: 'C', text: 'Masowe wymierania nie miały żadnego wpływu na ewolucję — gatunki, które wymarły, zostały zastąpione identycznymi formami z niespokrewnionych linii ewolucyjnych; różnorodność biologiczna po każdym wymieraniu wróciła do poprzedniego poziomu w ciągu kilku lat', is_correct: false },
      { id: 'D', text: 'W historii Ziemi było tylko jedno masowe wymieranie (wymieranie kredowe); wszystkie dinozaury wymarły całkowicie bez wyjątku i żaden z ich potomków nie przeżył do dziś', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: '"Wielka Piątka" masowych wymierań (>75% gatunków w krótkim czasie geolog.): (1) Ordowik/Sylur (O-S, ~445 mln lat): ~85% gatunków morskich; zlodowacenie + regresja morza. (2) Dewon/Karbon (D/C, późny Dewon, ~375 mln lat): ~75%; przyczyna wielodebatowana (hypoksja oceanów?). (3) Perm/Trias (P-T, "Wielkie Wymieranie", 252 mln lat): NAJWIĘKSZE: ~96% gatunków morskich, ~70% lądowych (w tym Parareptilia, Pelycosauria); przyczyny: Siberian Traps (trapsy syberyjskie) = 1–2 mln km² law + erozja węgla = CO₂↑↑ → T+10°C + zakwaszenie oceanów + hipoksja + H₂S z anoksycznych wód. Odbudowa: 10 mln lat. (4) Trias/Jura (T-J, 201 mln lat): ~80%; CAMP basalt + CO₂. (5) Kreda/Paleogen (K-Pg, "Koniec dinozaurów", 66 mln lat): ~76% gatunków; bolid Chicxulub (~10 km, ~Jukatan) → zimna "noc uderzeniowa" (pył/sadza → brak fotosyntezy → kolaps łańcuchów pokarmowych) + Deccan Traps (Indie); wymarli: nielatające dinozaury, morskie gady, amonity, 75% ptaków, wiele roślin; przeżyli: małe ssaki, ptaki (dinozaury latające), żółwie, krokodyle, ryby kostne. Ptaki = żyjące dinozaury teropodowe (Maniraptora → Aves).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Koewolucja ───
  {
    subtopic: 'Ewolucja — Koewolucja',
    subtopic_id: S.koew,
    question_type: 'single',
    question_text: 'Koewolucja to wzajemne oddziaływanie ewolucyjne między dwoma gatunkami. Które zestawienie POPRAWNIE opisuje rodzaje koewolucji i podaje przykłady?',
    options: [
      { id: 'A', text: 'Koewolucja antagonistyczna (wyścig zbrojeń): pasożyt doskonali mechanizmy wnikania, gospodarz — odpowiedź immunologiczną (Plasmodium falciparum vs hemoglobina HbS); mutualistyczna: wzajemna adaptacja rośliny i zapylacza (storczyk Angraecum vs ćma Xanthopan z długą trąbką)', is_correct: true },
      { id: 'B', text: 'Koewolucja dotyczy wyłącznie gatunków z tej samej rodziny taksonomicznej; nie może zachodzić między roślinami a zwierzętami; wyścig zbrojeń to termin militarny, nie biologiczny', is_correct: false },
      { id: 'C', text: 'Koewolucja antagonistyczna zawsze prowadzi do wymarcia jednego z gatunków w ciągu kilku pokoleń; koewolucja mutualistyczna nie istnieje — mutualizm jest zbyt rzadki, by wywierać presję selekcyjną', is_correct: false },
      { id: 'D', text: 'Koewolucja to termin opisujący ewolucję wewnątrz jednej linii ewolucyjnej bez interakcji z innymi gatunkami; przykładem koewolucji jest adaptacja organizmów do zmian klimatu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Koewolucja (coevolution): wzajemna presja selekcyjna między dwoma lub więcej gatunkami → każdy gatunek jest "środowiskiem selekcyjnym" dla drugiego. (1) Koewolucja antagonistyczna (wyścig zbrojeń / arms race): pasożyt–gospodarz; pasożyt doskonali mechanizmy inwazji → gospodarz doskonali obronę → każda strona "nadąża" za drugą; model Red Queen: "trzeba biec (ewoluować) żeby stać w miejscu (nie być wyprzedzonym)". Przykłady: Plasmodium falciparum (malaria) → presja selekcyjna na hemoglobinę S (HbS/HbS = anemia sierpowata, śmiertelna; ale HbS/HbA = heterozygota odporna na malarię → polimorfizm zbalansowany); myksomatoza → wirusy osłabione z czasem → króliki bardziej odporne; Toxoplasma vs myszy (myszy tracą awersję do kociego zapachu); węże Thamnophis vs płazy Taricha (tetrodotoksyna – ↑oporność węży w miejscach współwystępowania). (2) Koewolucja mutualistyczna: Darwin i storczyk: Angraecum sesquipedale (Madagaskar) ma ostrogi o długości 29 cm → Darwin przewidział (1862) motyla z 29 cm trąbką; odkryto w 1903: Xanthopan morganii praedicta. Figi vs osy figowe (Agaonidae): każdy gatunek figi ma swoją specyficzną osę. Kwiat euglossine (pszczoły orchidejne) + orchidee Catasetum: samce zbierają wonne substancje = parfum do wabienia samic. (3) Koewolucja dyfuzja (diffuse/guild): sieć mutualistycznych relacji (kwiaty + wiele zapylaczy); bardziej odporna na wymieranie jednego gatunku.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Ewolucja — Koewolucja',
    subtopic_id: S.koew,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących koewolucji i adaptacji:\nA. Mimikra Batesa (Batesian mimicry) polega na tym, że nieszkodliwy gatunek naśladuje wygląd szkodliwego lub jadowitego (modelu) — drapieżnik uczący się unikać modelu automatycznie unika mimika; przykład: motyl wicekról (Limenitis archippus) naśladuje trującą monarchę (Danaus plexippus).\nB. Mimikra Müllera (Müllerian mimicry) polega na wzajemnym upodobnieniu się kilku gatunków SZKODLIWYCH lub TRUJĄCYCH do siebie — drapieżnik uczący się unikać jednego gatunku unika wszystkich; wspólna sygnalizacja ostrze żawcza (aposematyzm) zmniejsza łączne koszty uczenia się przez drapieżniki.\nC. Mimikra aposematyczna (ostrzegawcze zabarwienie) u jadowitych żab dendrobatidów jest przykładem mimikry Batesa — żaby są nieszkodliwe i naśladują jadowite modele; ich jaskrawe kolory mają na celu wabienie partnerów, a nie ostrzeganie drapieżników.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: mimikra Batesa (Henry Walter Bates, 1862, Amazonka): mimiк nietrujący/nieszkodliwy naśladuje model trujący/szkodliwy; drapieżnik warunkuje unikanie na kolorach modelu → mimiк korzysta "za darmo"; warunki: (1) model częstszy niż mimiк (inaczej drapieżnik nie nauczy się), (2) w tym samym środowisku; przykłady: Limenitis archippus (wicekról, nietrujący) ~ Danaus plexippus (monarcha, trujący glikozydy sercowe z mleczu); muchy bzygowate (Syrphidae, bezbronni) ~ osy i pszczoły (żądło); węże mleczne (Lampropeltis, niejadowite) ~ koralowe (Micrurus, jadowite) w Ameryce Płn. B — PRAWDA: mimikra Müllera (Fritz Müller, 1879): wiele JADOWITYCH/szkodliwych gatunków upodabnia się do siebie wzajemnie; wspólna "ostrzegawcza marka" (aposematic brand) → drapieżnik uczy się jednego sygnału i unika wszystkich naraz; korzyść: kosztami uczenia (zjedzeni osobnicy) dzieli się kilka gatunków; przykłady: Heliconius (motyle, tropical America) − liczne gatunki jadowite o czerwono-żółto-czarnych skrzydłach w tym samym regionie; osy + pszczoły + trzmiele wzajemnie; żaby trujące (Dendrobatidae). C — FAŁSZ: żaby dendrobatidy (żaby trujące, Ameryka Środkowa i Płd.): jaskrawe kolory = PRAWDZIWY aposematyzm (ostrzegawcze zabarwienie prawdziwego jadowitego zwierzęcia) — to przykład selekcji na szczere sygnały "uczciwej reklamy", NIE mimikry Batesa. Trucizny: alkalloidy (pumiliotoksyny, batrachiotoksyna) z diety (mrowki, roztocza) → w niewoli hodowane żaby nie są trujące! Mimikra Batesa = nieszkodliwy udaje szkodliwego; aposematyzm = szkodliwy się reklAMuje.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Historia życia — druga pytanie ───
  {
    subtopic: 'Ewolucja — Historia życia na Ziemi',
    subtopic_id: S.histz,
    question_type: 'single',
    question_text: 'Powstanie organizmów eukariotycznych jest wyjaśniane teorią endosymbiozy. Które zestawienie POPRAWNIE opisuje tę teorię i dowody ją potwierdzające?',
    options: [
      { id: 'A', text: 'Teoria endosymbiozy (Margulis): mitochondria powstały z proeukarionta pochłaniającego alfa-proteobakterie; chloroplasty — z pochłoniętych sinic (cyjanobakterii); dowody: podwójna błona, własny kołowy DNA, rybosomy 70S, podział przez podział binarny, wrażliwość na antybiotyki bakteryjne', is_correct: true },
      { id: 'B', text: 'Mitochondria i chloroplasty powstały de novo z błony jądrowej komórki eukariotycznej — teoria endosymbiozy jest obalona; mitochondria mają rybosomy 80S identyczne z cytoplazmatycznymi; DNA mitochondrialne jest liniowe', is_correct: false },
      { id: 'C', text: 'Teoria endosymbiozy wyjaśnia wyłącznie powstanie chloroplastów — mitochondria powstały z jądra komórkowego przez podział; mitochondria nie mają własnego DNA ani rybosomów', is_correct: false },
      { id: 'D', text: 'Endosymbioza zachodzi jednorazowo w historii życia — po pierwotnym zdarzeniu nie dochodzi do kolejnych symbioz; chloroplasty i mitochondria nigdy nie mogą być przekazywane między gatunkami eukariotycznymi', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Teoria endosymbiozy (Lynn Margulis, 1967): proeukariont (archeowykształt) fagocytuje prokariota → zamiast trawić → utrzymuje jako endosymbiont → koewolucja → organellum. (1) Mitochondria: endosymbiont = alfa-proteobakteria (Rickettsiales; bliski krewny Rickettsia, Paracoccus); zdarzenie ~1,5–2 mld lat temu. Dowody: (a) 2 błony (zewnętrzna = fosfolipidy fagosomalne; wewnętrzna = bakteryjne + kardiolipina); (b) własny kołowy DNA (mtDNA, 37 genów u człowieka → 13 białek OXPHOS + rRNAs + tRNAs); (c) rybosomy 70S (typ prokariotyczny, wrażliwe na chloramfenikol, tetracykliny, streptomycynę = antybiotyki bakteryjne!); (d) podział przez podział binarny (nie przez podział komórki, rekrutują maszynerię FtsZ homolog); (e) wiele genów już przetransferowano do jądra (endosymbiotic gene transfer, EGT). (2) Chloroplasty: endosymbiont = sinica (Cyanobacteria); ~1 mld lat temu; cyjanobakterie fotosyntetyzujące. Dowody jak wyżej + posiadają własny kolor (chlorofil a+b jak w sinicach). (3) Wtórna endosymbioza: eukariot pochłania algę eukariotyczną → 3 lub 4 błony (Euglena, Plasmodium = apikoplast). Transfer genów mtDNA do jądra postępuje nadal (numt = nuclear copies of mitochondrial sequences).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
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
  console.log(`Seeding ${questions.length} mock questions for Ewolucja...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
