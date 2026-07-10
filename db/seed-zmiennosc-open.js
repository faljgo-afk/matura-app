// Seed: Zmienność i mutacje — 10 open questions
// Topic: dbd40510-9cc5-4a56-8733-2455c18e5c76

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const T = 'dbd40510-9cc5-4a56-8733-2455c18e5c76'
const S = {
  rodzaje:     '5f6cbed8-a87b-4021-89fa-9cb36c97512d',
  genowe:      '88be4b09-5208-4c92-b8cb-9d8b39a5d92b',
  chromosom:   '642a17ec-fb42-4e0b-b787-a036e08f405b',
  genomowe:    '815d85a0-7af8-4e53-8afe-d0262f58a693',
  mutageny:    'f7594d3c-f046-492b-a6d7-b8c2fbcf2907',
  kombinat:    '344119b8-5be6-4265-9cff-afe41db719ad',
  jednogenowe: '6853283a-4c8b-4117-ab70-432aa25e4a58',
  chromosom_c: '2020184b-368b-4365-a9ad-708db9f1030f',
  ewolucja:    '3f1ac27d-827e-4715-932d-a815516d8396',
}

const questions = [
  {
    topic_id: T, subtopic_id: S.rodzaje,
    question_type: 'open',
    question_text: 'Wyjaśnij różnicę między zmiennością dziedziczną a niedziedziczną. Podaj po jednym przykładzie każdego rodzaju zmienności u człowieka i określ, która z nich podlega działaniu doboru naturalnego. Uzasadnij.',
    max_points: 2,
    key_points: [
      'Zmienność dziedziczna (genetyczna) wynika ze zmian w sekwencji DNA (mutacje, rekombinacja) i jest przekazywana potomstwu; zmienność niedziedziczna (modyfikacyjna) wynika z wpływu środowiska na ekspresję genotypu i NIE zmienia DNA — nie jest dziedziczona. Przykłady: dziedziczna — kolor oczu, grupa krwi; niedziedziczna — opalenizna, masa mięśniowa po treningu.',
      'Dobór naturalny działa WYŁĄCZNIE na zmienność dziedziczną (genetyczną), ponieważ tylko zmiany zakodowane w DNA mogą być przekazane potomstwu i podlegać selekcji; zmienność modyfikacyjna nie zmienia puli genowej populacji i zanika wraz ze zmianą środowiska.',
    ],
    model_answer: 'Zmienność dziedziczna (genetyczna): wynika z trwałych zmian w sekwencji DNA — mutacji lub rekombinacji genetycznej. Jest przekazywana potomstwu. Przykład u człowieka: kolor tęczówki oka (określony przez allele genu OCA2/HERC2). Zmienność niedziedziczna (modyfikacyjna): ta sama sekwencja DNA ulega różnej ekspresji w zależności od czynników środowiskowych. Nie zmienia DNA, zanika gdy zmienia się środowisko. Przykład: opalenizna skóry pod wpływem UV (melanocyty produkują więcej melaniny, ale sekwencja DNA pozostaje niezmieniona). Dobór naturalny działa wyłącznie na zmienność dziedziczną — tylko cechy zapisane w DNA mogą być przekazane potomstwu i wyselekcjonowane. Organizm o korzystnej modyfikacji (np. opalona skóra) nie przekazuje tej "nabytej cechy" dzieciom — dziedziczą tylko genotyp.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genowe,
    question_type: 'open',
    question_text: 'Porównaj skutki mutacji missense i mutacji nonsense na poziomie białka. Wyjaśnij, która z nich jest na ogół bardziej szkodliwa i dlaczego.',
    max_points: 2,
    key_points: [
      'Mutacja missense: zmiana jednego nukleotydu powoduje podstawienie innego aminokwasu w łańcuchu polipeptydowym — białko powstaje, ale ma zmienioną sekwencję; skutek zależy od lokalizacji zmiany: może być obojętna (jeśli aminokwas podobny chemicznie) lub powodować chorobę (np. sierpowatokrwinkowa — Glu→Val w hemoglobinie).',
      'Mutacja nonsense: zmiana nukleotydu tworzy przedwczesny kodon stop (UAA, UAG, UGA) — translacja kończy się zbyt wcześnie, powstaje skrócone (obcięte) białko, które zazwyczaj jest nieaktywne i szybko ulega degradacji; mutacja nonsense jest na ogół bardziej szkodliwa, bo całkowicie eliminuje lub drastycznie skraca białko.',
    ],
    model_answer: 'Mutacja missense: substytucja jednego nukleotydu powoduje zamianę kodonu na kodon kodujący inny aminokwas. Białko powstaje w pełnej długości, ale z jedną zmienioną resztą aminokwasową. Skutek zależny od lokalizacji: jeśli w centrum aktywnym enzymu lub w miejscu strukturalnym — poważne konsekwencje (np. anemia sierpowata: kwas glutaminowy → walina w pozycji 6 łańcucha beta-hemoglobiny); jeśli na powierzchni, gdzie chemicznie podobny aminokwas — może być mutacja synonimiczna fenotypowo. Mutacja nonsense: substytucja tworzy przedwczesny kodon stop → rybosomy kończą translację za wcześnie → białko skrócone (truncated), zazwyczaj niefunkcjonalne, podlegające degradacji przez NMD (nonsense-mediated mRNA decay) lub proteazomy. Nonsense jest na ogół bardziej szkodliwa: całkowita utrata funkcji białka jest groźniejsza niż częściowa zmiana. Przykład: niektóre formy dystrofii mięśniowej Duchenne\'a spowodowane mutacjami nonsense w genie DMD.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genowe,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego delecja jednego nukleotydu w sekwencji kodującej genu jest na ogół znacznie bardziej szkodliwa niż substytucja jednego nukleotydu w tym samym miejscu.',
    max_points: 2,
    key_points: [
      'Substytucja (zamiana jednego nukleotydu na inny) zmienia co najwyżej jeden tryplet (kodon) → co najwyżej jeden aminokwas ulega zmianie (mutacja missense) lub powstaje przedwczesny stop (nonsense); cała reszta białka pozostaje niezmieniona.',
      'Delecja jednego nukleotydu powoduje przesunięcie ramki odczytu (frameshift) — wszystkie kodony PONIŻEJ miejsca delecji ulegają zmianie, bo trójki są "odczytywane" od nowa; prawie całe białko poniżej mutacji ma inną sekwencję aminokwasową + zazwyczaj pojawia się przedwczesny stop → białko całkowicie niefunkcjonalne.',
    ],
    model_answer: 'Substytucja (zamiana nukleotyd→nukleotyd): zmiana dotyczy jednego kodonu. Jeśli nowy kodon koduje ten sam aminokwas → mutacja synonimiczna (cicha) — brak skutku. Jeśli koduje inny aminokwas → mutacja missense (max. 1 zmieniony aminokwas). Delecja 1 nukleotydu: usuwa jeden nukleotyd z sekwencji → przesunięcie ramki odczytu (frameshift). mRNA jest odczytywany w trójkach od startu — po delecji wszystkie trójki poniżej miejsca mutacji są "przesunięte o 1" → całkowicie inna sekwencja aminokwasów. Dodatkowo w nowej ramce odczytu szybko pojawia się kodon stop → białko skrócone i niefunkcjonalne. Porównanie: substytucja psuje co najwyżej 1 aminokwas, delecja 1 nt psuje całą resztę sekwencji białka — różnica między poprawieniem jednej litery w tekście a usunięciem jej i przeczytaniem reszty na nowo (bełkot).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom,
    question_type: 'open',
    question_text: 'Opisz, czym jest mutacja chromosomowa strukturalna typu delecja i translokacja. Wyjaśnij, dlaczego translokacja zrównoważona zazwyczaj nie powoduje objawów u nosiciela, ale może prowadzić do poważnych skutków u jego potomstwa.',
    max_points: 2,
    key_points: [
      'Delecja chromosomowa: utrata fragmentu chromosomu → utrata genów zawartych w tym fragmencie → niedobór produktów tych genów; translokacja: przeniesienie fragmentu chromosomu na niehomologiczny chromosom; translokacja zrównoważona = cały materiał genetyczny obecny, tylko w innym układzie → nosiciel zazwyczaj fenotypowo normalny.',
      'Nosiciel translokacji zrównoważonej produkuje gamety: podczas mejozy chromosomy translokowane segregują nieprawidłowo → część gamet ma nadmiar lub niedobór fragmentów chromosomów (translokacja niezrównoważona) → po zapłodnieniu zygota z monosomią lub trisomią danego fragmentu → wady wrodzone, poronienia, lub dziecko z niepełnosprawnością (np. trisomia Downa u dzieci nosiciela translokacji 14;21).',
    ],
    model_answer: 'Delecja chromosomowa: utrata odcinka chromosomu wraz z zawartymi w nim genami. Skutek: monosomia częściowa → brak produktów utraconych genów → np. zespół kociego krzyku (del 5p). Translokacja: fragment jednego chromosomu zostaje przeniesiony na niehomologiczny chromosom. Translokacja ZRÓWNOWAŻONA: cały materiał genetyczny obecny — zmienił się tylko układ, nie ilość genów → nosiciel fenotypowo normalny (wyjątek: jeśli punkt złamania przecina ważny gen). Dlaczego potomstwo zagrożone: podczas mejozy u nosiciela chromosomy translokowane muszą sparować się z homologami → trójwalentny lub czterościenny układ chromosomów. Segregacja może być: prawidłowa (30%), zrównoważona (30%), lub niezrównoważona (40%) → gamety z nadmiarem/niedoborem. Po zapłodnieniu: trisomia lub monosomia częściowa → wady wrodzone, poronienia samoistne, lub np. trisomia 21 poprzez translokację Rob(14;21).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.genomowe,
    question_type: 'open',
    question_text: 'Porównaj aneuploidię i poliploidię jako dwa rodzaje mutacji genomowych. Wyjaśnij, dlaczego poliploidia jest stosunkowo dobrze tolerowana przez rośliny, ale rzadko spotykana u zwierząt.',
    max_points: 2,
    key_points: [
      'Aneuploidia: zmiana liczby pojedynczych chromosomów (trisomia 2n+1, monosomia 2n−1) — zaburzenie dawki genowej dla konkretnych chromosomów; poliploidia: zwielokrotnienie całego zestawu genomu (3n, 4n, 6n itd.) — wszystkie geny obecne w zwiększonej liczbie kopii.',
      'Rośliny tolerują poliploidię: wiele roślin rozmnaża się wegetatywnie (nie wymagają mejozy do reprodukcji), mają płynny układ rozrodczy, brak determinacji płci zależnej od dokładnego balansu chromosomowego — poliploidalne mitozy działają prawidłowo; u zwierząt: precyzyjna determinacja płci (XY/XX), złożone mechanizmy dawki genowej, obowiązkowe rozmnażanie płciowe wymagają prawidłowej mejozy — poliploidia prowadzi do niezdolności reprodukcyjnej i letalności.',
    ],
    model_answer: 'Aneuploidia: nieprawidłowa liczba jednego lub kilku konkretnych chromosomów wskutek nondysjunkcji; np. trisomia 21 (47 chr.) w zespole Downa. Zachwianie proporcji genów na danym chromosomie względem reszty genomu → efekty dawki genowej → wady. Poliploidia: zwielokrotnienie CAŁEGO genomu (3n=triploid, 4n=tetraploid); np. pszenica jest alloheksaploidem (6n=42). Ponieważ wszystkie geny są zwielokrotnione proporcjonalnie, wiele szlaków metabolicznych funkcjonuje normalnie. Tolerancja u roślin: (1) rośliny mogą rozmnażać się wegetatywnie — nie potrzebują mejozy do przetrwania; (2) brak złożonego systemu determinacji płci zależnego od liczby chromosomów; (3) komórki roślinne są totipotentne — poliploidalne komórki mogą tworzyć pełne organizmy. U zwierząt: (1) obowiązkowe rozmnażanie płciowe — poliploid ma zaburzoną mejozę (triploid nie może wytworzyć prawidłowych gamet haploidalnych); (2) precyzyjna regulacja dawki genowej na chromosomach płci (kompensacja dawki X) jest zaburzona; (3) letalność zarodkowa. Dlatego naturalna poliploidia u zwierząt jest niezwykle rzadka (wyjątek: niektóre ryby i płazy).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.mutageny,
    question_type: 'open',
    question_text: 'Wymień trzy rodzaje mutagenów (po jednym przykładzie każdego rodzaju) i wyjaśnij mechanizm działania JEDNEGO z nich na poziomie molekularnym — w jaki sposób prowadzi do zmiany sekwencji DNA.',
    max_points: 2,
    key_points: [
      'Trzy rodzaje mutagenów: (1) fizyczne — np. promieniowanie UV (długość fali ~260 nm), promieniowanie jonizujące (gamma, RTG), promieniowanie alfa/beta; (2) chemiczne — np. analogi zasad (5-bromouracyl), środki alkilujące (iperyty azotowe, EMS), środki interkalujące (bromek etydyny, akrydyny); (3) biologiczne — np. retrowirusy, transpozony, wirusy DNA onkogenne (HPV).',
      'Mechanizm przykładowy UV: promieniowanie UV powoduje powstawanie dimerów pirymidynowych (najczęściej tymina-tymina) — sąsiednie tyminy na tej samej nici DNA łączą się kowalencyjnie wiązaniem cyklobutanowym; dimer zaburza strukturę helisy i blokuje replikację — polimeraza albo zatrzymuje się, albo wstawia błędny nukleotyd naprzeciwko dimeru (przejście T→C po błędnej naprawie SOS) → mutacja punktowa lub przerwa w nici.',
    ],
    model_answer: 'Trzy rodzaje mutagenów z przykładami: (1) Fizyczne: promieniowanie UV (fotony 260–320 nm absorbowane przez zasady DNA). (2) Chemiczne: EMS (etylometanosulfonian) — środek alkilujący. (3) Biologiczne: retrowirusy (np. HIV, HTLV) — integrują się z genomem gospodarza, mogą przerywać geny lub wnosić onkogeny. Mechanizm działania UV (szczegółowo): UV absorbowane przez pierścienie pirymidynowe energizuje sąsiednie tyminy (TT) na tej samej nici DNA → tworzą cyklobutanowy dimer tyminowy [T=T] (wiązanie kowalencyjne między C5 i C6 obu tymin). Dimer zniekształca oś helisy (odkształcenie kąta wiązania) → blokuje prawidłowe działanie polimerazy DNA podczas replikacji. Jeśli aktywuje się naprawa TLS (translesion synthesis) z polimerazą eta/zeta, często wstawia się A naprzeciwko [T=T] zamiast prawidłowego A (tzw. reguła A), co wygląda poprawnie → ale po kolejnej replikacji daje mutację C→T lub CC→TT (sygnatura mutacji UV). Zaburzenia naprawy tej zmiany (NER) prowadzą do czerniaka skóry (melanoma).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.kombinat,
    question_type: 'open',
    question_text: 'Wyjaśnij, w jaki sposób dwa procesy zachodzące podczas mejozy zwiększają zmienność genetyczną potomstwa w rozmnażaniu płciowym. Podaj nazwy tych procesów i opisz mechanizm każdego z nich.',
    max_points: 2,
    key_points: [
      'Crossing-over (rekombinacja): w profazie I mejozy chromosomy homologiczne (pary biwaalentów) wymieniają odcinki chromatyd między sobą w miejscach chiazm → nowe kombinacje alleli na jednym chromosomie, których nie było u żadnego z rodziców; zwiększa liczbę możliwych kombinacji alleli ponad to, co daje sama segregacja niezależna.',
      'Niezależna segregacja chromosomów (prawo niezależnej segregacji Mendla): w metafazie I każda para homologów ustawia się na płytce podziałowej niezależnie od pozostałych par → przypadkowy wybór chromosomu matczynego lub ojcowskiego do każdej gamety; przy n=23 parach (człowiek) możliwe 2^23 = ~8,4 miliona kombinacji chromosomów tylko z tej segregacji.',
    ],
    model_answer: 'Proces 1: Crossing-over (rekombinacja homologiczna). Podczas profazy I mejozy chromosomy homologiczne (każdy złożony z 2 siostrzanych chromatyd) tworzą biwalenty i ścisłe synapsy. W miejscach zwanych chiazmatami dochodzi do enzymatycznego przecięcia i wymiany odcinków nieidentycznych chromatyd między chromosomem ojcowskim a matczynym. Każda wymiana tworzy chromatyd z nową, rekombinantową kombinacją alleli (nieobecną u rodziców). Jeden biwaalent może mieć kilka chiazmat → wiele rekombinacji na jeden chromosom. Proces 2: Niezależna segregacja chromosomów (prawo Mendla II). W metafazie I każda para homologów (biwalent) ustawia się na wrzecionie kariokinetycznym niezależnie od innych par — orientacja matczyny/ojczysty→ biegun A jest przypadkowa dla każdej pary. W anafazie I homologi rozchodzą się do biegunów. Przy 23 parach u człowieka: 2^23 ≈ 8,4 × 10^6 różnych kombinacji chromosomów w gametach — bez uwzględnienia crossing-over. Oba procesy razem generują praktycznie nieograniczoną zmienność genetyczną potomstwa.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_type: 'open',
    question_text: 'Fenyloketonuria (PKU) jest chorobą autosomalną recesywną spowodowaną brakiem aktywności hydroksylazy fenyloalaniny (PAH). Wyjaśnij:\na) Dlaczego u chorych na PKU dochodzi do akumulacji fenyloalaniny?\nb) W jaki sposób leczenie dietetyczne (dieta ubogofenyloalaninowa) zapobiega uszkodzeniu mózgu?\nc) Dlaczego PKU dobrze ilustruje zasadę "jeden gen — jedno białko — jedna funkcja metaboliczna"?',
    max_points: 3,
    key_points: [
      'Mutacja genu PAH → brak lub dysfunkcja enzymu PAH → fenyloalanina nie ulega hydroksylacji do tyrozyny → akumuluje się w tkankach i krwi (hiperfenyloalaninemia); nadmiar fenyloalaniny i jej pochodnych (fenylipirogronian) jest neurotoksyczny — zaburza mielinizację i transport innych aminokwasów przez barierę krew-mózg.',
      'Dieta uboga w fenyloalaninę ogranicza substrat dla niedziałającego enzymu → stężenie Phe w krwi utrzymywane w normie → mózg (szczególnie u dzieci w fazie intensywnego wzrostu) nie jest narażony na toksyczne stężenia → normalny rozwój poznawczy; efektywna tylko jeśli wdrożona bardzo wcześnie (przesiew noworodkowy, pierwsze doby życia).',
      'PKU: jeden gen (PAH) → jedno białko (hydroksylaza fenyloalaniny) → jeden szlak metaboliczny (Phe→Tyr) → jeden fenotyp chorobowy; ilustruje hipotezę "jeden gen — jeden enzym" Beadle\'a i Tatuma (1941); mutacja jednego genu blokuje jeden enzymowy krok metaboliczny z kaskadowymi konsekwencjami.',
    ],
    model_answer: 'a) Gen PAH koduje enzym hydroksylazę fenyloalaniny, który katalizuje reakcję Phe + O2 + BH4 → Tyr. Mutacja recesywna w obu kopiach PAH → brak aktywnego enzymu → fenyloalanina (Phe) nie jest konwertowana do tyrozyny → akumuluje się w krwi i tkankach. Pochodne Phe (fenylpirogronian, fenylomleczan) przenikają przez barierę krew-mózg, zaburzają syntezę neuroprzekaźników (kompetycja z innymi aminokwasami) i mielinizację → upośledzenie intelektualne bez leczenia. b) Dieta PKU eliminuje większość źródeł Phe z pożywienia (naturalne białka) i dostarcza bezpieczną mieszaninę aminokwasów bez Phe → stężenie Phe utrzymuje się < 360 µmol/L (zakres terapeutyczny) → mózg nie jest narażony na toksyczne stężenia → prawidłowy rozwój. Newborn screening (test Guthriego w 3. dobie) umożliwia wdrożenie diety zanim pojawią się nieodwracalne zmiany. c) PKU to podręcznikowy przykład hipotezy "jeden gen — jeden enzym" (Beadle i Tatum, 1941): gen PAH → enzym PAH → krok metaboliczny Phe→Tyr → fenotyp. Jeden zepsuty gen powoduje blok jednego szlaku i kumulację jednego substratu.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom_c,
    question_type: 'open',
    question_text: 'Zespół Turnera (45,X) i zespół Klinefeltera (47,XXY) są chorobami spowodowanymi aneuploidią chromosomów płci.\n\na) Wyjaśnij, w wyniku jakiego błędu w mejozie może dojść do powstania gamet prowadzących do każdego z tych zespołów.\nb) Porównaj fenotyp kobiety z zespołem Turnera i mężczyzny z zespołem Klinefeltera — podaj po dwie charakterystyczne cechy każdego zespołu.',
    max_points: 2,
    key_points: [
      'Nondysjunkcja chromosomów płci w mejozie I lub II: jeśli obydwa chromosomy X (lub X i Y) nie rozejdą się → gameta z XX lub YY lub gameta pozbawiona chromosomu płci (0). Gameta X0 od matki lub gameta bez chromosomu płci + komórka jajowa X = Turner 45,X; gameta XX od matki + Y od ojca LUB X od matki + XY od ojca = Klinefelter 47,XXY.',
      'Turner (45,X): niski wzrost, brak dojrzewania płciowego (dysgenezja gonad), pierwotny brak miesiączki, szeroka szyja (pterygium colli), niepłodność, prawidłowy lub nieznacznie obniżony iloraz inteligencji. Klinefelter (47,XXY): wysoki wzrost, hipogonadyzm (małe jądra), ginekomastia, niepłodność (azoospermia), długie kończyny, zaburzenia uczenia się języka.',
    ],
    model_answer: 'a) Oba zespoły wynikają z nondysjunkcji (braku rozejścia się chromosomów homologicznych lub siostrzanych chromatyd) podczas mejozy. Turner 45,X: jeśli chromosomy X nie rozejdą się u matki w mejozie I → jedna komórka jajowa zawiera XX, druga — brak chromosomu płci (nulli-X, 0). Zapłodnienie gamety (0) przez plemnik X → 45,X (Turner). Klinefelter 47,XXY: (1) nondysjunkcja XX u matki w mejozie II → gameta XX + Y od ojca = XXY; (2) nondysjunkcja XY u ojca w mejozie I → gameta XY + X od matki = XXY. Częściej błąd pochodzi od matki (szczególnie starsze matki). b) Fenotypy: Turner (45,X — kobieta): niski wzrost (<150 cm); pierwotny brak miesiączki i dysgenezja gonad (zamiast jajników — pasma łącznotkankowe); pterygium colli (skrzydłowata szyja) i niska tylna granica owłosienia; niepłodność. Klinefelter (47,XXY — mężczyzna): wysoki wzrost (długie kończyny); hipogonadyzm — małe, twarde jądra i azoospermia (niepłodność); ginekomastia (powiększenie gruczołów sutkowych); niedobór testosteronu → skąpe owłosienie ciała.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.ewolucja,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego mutacje somatyczne NIE mają znaczenia dla ewolucji gatunku, natomiast mutacje germinalne (w komórkach linii płciowej) mogą prowadzić do zmian ewolucyjnych. Odnieś swoją odpowiedź do pojęcia "puli genowej populacji".',
    max_points: 2,
    key_points: [
      'Mutacje somatyczne: zachodzą w komórkach ciała (niebędących komórkami rozrodczymi) — zmiana DNA w komórce somatycznej może prowadzić do nowotworów lub śmierci tej komórki, ale NIE jest przekazywana potomstwu; pula genowa populacji (suma alleli w gametach) nie zmienia się → brak wpływu na ewolucję gatunku.',
      'Mutacje germinalne: zachodzą w komórkach linii płciowej (gametocytach, gametach) → mutacja wbudowana w gamety → przekazana potomstwu → zmiana częstości alleli w puli genowej populacji → materiał dla doboru naturalnego, dryfu genetycznego i innych czynników ewolucyjnych → ewolucja gatunku.',
    ],
    model_answer: 'Ewolucja biologiczna zachodzi przez zmianę częstości alleli w puli genowej populacji z pokolenia na pokolenie. Mutacje somatyczne: dotyczą komórek ciała (skóry, wątroby, mięśni — wszystkich poza linią płciową). Zmutowana komórka somatyczna może dzielić się mitotycznie (klon nowotworowy) lub zginąć, ale przy śmierci organizmu ta mutacja ginie razem z nim — nie trafia do gamet. Pula genowa populacji (zbiór alleli we wszystkich gametach wszystkich osobników) nie ulega zmianie → mutacja somatyczna nie ma znaczenia ewolucyjnego. Mutacje germinalne: zachodzą w komórkach linii płciowej — pierwotniak płciowych (gonocytach), oogoniach, spermatogoniach, lub bezpośrednio podczas mejozy/gametogenezy. Zmutowany allel trafia do gamety → po zapłodnieniu: obecny w każdej komórce nowego organizmu → może być przekazany jego potomstwu → zmienia częstość alleli w puli genowej. Na nowy allel mogą działać: dobór naturalny (jeśli allel zmienia fitness), dryf genetyczny (zmiana losowa), migracja. W ten sposób mutacje germinalne są źródłem zmienności genetycznej dla ewolucji.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
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
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} open questions for Zmiennosc i mutacje...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 120))
    else console.log('OK', q.max_points + 'pkt', q.question_text.slice(0, 70).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
