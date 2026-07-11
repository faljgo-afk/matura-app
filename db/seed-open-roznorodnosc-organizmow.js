// Seed: open questions — Różnorodność organizmów (10 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf'

const S = {
  bezk:  '2e08b827-45a1-4f25-a87f-01ca8bdcffda',
  grzy:  '44e9a9be-d038-4287-a1fb-819e129d63f9',
  bakt:  '34a5f416-a22e-438b-b4ff-7d56dd7279a4',
  prot:  '22562e1a-ecfb-4b00-99c1-7f66be359a7b',
  rosl:  '331cb215-d830-49f5-b3dd-19c5d51b1374',
  syst:  '93f55825-0ec2-45fe-ad8e-ca3dce7bd98a',
  wiru:  'ade8a64a-1b78-47c6-a317-a90c15dcf367',
}

const questions = [
  // ─── Prokaryoty — bakterie ───
  {
    topic_id: TOPIC,
    subtopic_id: S.bakt,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego antybiotyki beta-laktamowe (np. penicylina) są skuteczne wobec bakterii, lecz nie wpływają na komórki eukariotyczne człowieka. W odpowiedzi uwzględnij cel działania antybiotyku i różnicę w budowie komórek.',
    options: [],
    correct_answer: [],
    explanation: 'Penicylina hamuje transpeptydazę (PBP) uczestniczącą w syntezie peptydoglikanu ściany komórkowej bakterii. Komórki eukariotyczne (ludzkie) nie posiadają ściany komórkowej ani peptydoglikanu — brak celu działania antybiotyku.',
    max_points: 2,
    key_points: [
      'Penicylina blokuje syntezę peptydoglikanu (ściany komórkowej bakterii) — hamuje transpeptydazę/PBP uczestniczącą w sieciowaniu łańcuchów peptydoglikanu',
      'Komórki eukariotyczne (człowieka) nie mają ściany komórkowej ani peptydoglikanu → brak celu działania antybiotyku → brak toksyczności dla komórek człowieka'
    ],
    model_answer: 'Penicylina działa przez hamowanie transpeptydazy (białko PBP — penicillin-binding protein), enzymu kluczowego dla syntezy peptydoglikanu — składnika ściany komórkowej bakterii. Zablokowanie syntezy peptydoglikanu prowadzi do osłabienia i lizy ściany, a w konsekwencji do śmierci bakterii (szczególnie w fazie podziałów). Komórki eukariotyczne człowieka nie posiadają ściany komórkowej ani peptydoglikanu — penicylina nie ma na co działać, dlatego jest selektywnie toksyczna dla bakterii (szczególnie Gram-dodatnich z grubą warstwą peptydoglikanu).',
    difficulty: 2,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC,
    subtopic_id: S.bakt,
    question_type: 'open',
    question_text: 'Podaj dwie cechy budowy bakterii Gram-ujemnych, które odróżniają je od bakterii Gram-dodatnich i wyjaśnij, dlaczego bakterie Gram-ujemne są na ogół bardziej oporne na antybiotyki.',
    options: [],
    correct_answer: [],
    explanation: 'Gram-ujemne mają cienką warstwę peptydoglikanu i dodatkową zewnętrzną błonę lipopolisacharydową (LPS). Zewnętrzna błona stanowi barierę fizyczną ograniczającą wnikanie antybiotyków do komórki.',
    max_points: 2,
    key_points: [
      'Bakterie Gram-ujemne mają cienką warstwę peptydoglikanu (2–7 nm) ORAZ zewnętrzną błonę lipopolisacharydową (LPS) — Gram-dodatnie mają grubą warstwę peptydoglikanu (20–80 nm) bez zewnętrznej błony',
      'Zewnętrzna błona (LPS) stanowi dodatkową barierę przepuszczalności — ogranicza wnikanie wielu antybiotyków (np. penicylina, erytromycyna słabiej przenikają), co zwiększa oporność naturalną Gram-ujemnych'
    ],
    model_answer: 'Dwie cechy odróżniające Gram-ujemne od Gram-dodatnich: (1) cienka warstwa peptydoglikanu (2–7 nm vs 20–80 nm u Gram-dodatnich); (2) zewnętrzna błona biologiczna (outer membrane) zbudowana z lipopolisacharydu (LPS) — nieobecna u Gram-dodatnich. Większa oporność Gram-ujemnych: zewnętrzna błona LPS stanowi barierę hydrofobową i selektywnie przepuszczalną — większość antybiotyków (penicyliny, makrolidy, glikopeptydy jak wankomycyna) nie przenika przez nią w wystarczającym stężeniu. Dodatkowe pompy efluksowe i enzymy modyfikujące antybiotyki wzmacniają tę oporność.',
    difficulty: 2,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  // ─── Wirusy ───
  {
    topic_id: TOPIC,
    subtopic_id: S.wiru,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego wirusy nie są zaliczane do organizmów żywych. Podaj dwie cechy, które wirusy posiadają, oraz dwie cechy typowe dla organizmów żywych, których wirusy nie mają.',
    options: [],
    correct_answer: [],
    explanation: 'Wirusy mają kwas nukleinowy i białka, ale nie mają metabolizmu, komórkowej budowy, nie rosną ani nie rozmnażają się samodzielnie — są zależne od komórki gospodarza.',
    max_points: 2,
    key_points: [
      'Cechy wirusów: (1) posiadają materiał genetyczny (DNA lub RNA) — nośnik informacji dziedzicznej; (2) posiadają otoczkę białkową (kapsyd) chroniącą kwas nukleinowy; mogą też mieć osłonkę lipidową',
      'Brakujące cechy życia: (1) brak własnego metabolizmu (nie mają enzymów do syntezy ATP, pobierania substratów — całkowicie zależne od metabolizmu komórki gospodarza); (2) brak budowy komórkowej (nie są zbudowane z komórek, nie mają błony komórkowej własnej, cytoplazmy, rybosomów)'
    ],
    model_answer: 'Wirusy nie są organizmami żywymi, ponieważ nie spełniają wszystkich kryteriów życia. Co wirusy mają: (1) materiał genetyczny — DNA lub RNA (nigdy oba jednocześnie) — kodujący białka wirusa; (2) kapsyd — otoczkę białkową (kapsomery) chroniącą kwas nukleinowy; niektóre mają też osłonkę lipidową (np. HIV, koronawirusy). Czego wirusom brakuje: (1) własnego metabolizmu — wirusy nie pobierają substratów energetycznych, nie produkują ATP, nie mają enzymów metabolicznych; cały metabolizm "pożyczają" od komórki gospodarza; (2) budowy komórkowej — wirusy nie są zbudowane z komórek, nie mają błony komórkowej, cytoplazmy ani rybosomów; nie rosną ani nie odpowiadają na bodźce środowiskowe poza komórką.',
    difficulty: 1,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC,
    subtopic_id: S.wiru,
    question_type: 'open',
    question_text: 'Na podstawie cyklu życiowego bakteriofaga litycznego opisz kolejne etapy replikacji wirusa wewnątrz komórki bakteryjnej i wyjaśnij, czym różni się cykl lityczny od lizogenicznego.',
    options: [],
    correct_answer: [],
    explanation: 'Cykl lityczny: adsorpcja → iniekcja DNA → replikacja → synteza składników → składanie wirionów → liza komórki. Cykl lizogeniczny: DNA faga integruje z chromosomem bakterii jako profag → dziedziczony przy podziałach bez lizy.',
    max_points: 3,
    key_points: [
      'Cykl lityczny — kolejność etapów: (1) adsorpcja (przyłączenie faga do receptorów ściany bakterii); (2) wstrzyknięcie DNA faga do komórki (kapsyd pozostaje na zewnątrz); (3) replikacja DNA faga i transkrypcja genów wczesnych; (4) synteza białek kapsydu i enzymów (lizozym); (5) składanie nowych wirionów; (6) liza komórki bakteryjnej i uwolnienie fagów potomnych',
      'Cykl lizogeniczny: DNA faga (profag) integruje się z chromosomem bakterii za pomocą rekombinazy → profag replikowany razem z DNA bakterii przy każdym podziale komórki → brak lizy, bakteria żyje jako lizogen; profag może zostać wyindukowany (UV, stres) → cykl lityczny',
      'Kluczowa różnica: cykl lityczny = natychmiastowa replikacja i liza komórki; cykl lizogeniczny = utajona infekcja bez lizy, DNA wirusa wbudowane w chromosom, może trwać wiele pokoleń'
    ],
    model_answer: 'Cykl lityczny bakteriofaga T4: (1) Adsorpcja: włókna ogonowe faga rozpoznają i wiążą się ze specyficznymi receptorami na powierzchni E. coli; (2) Iniekcja DNA: lizozym ogona przebija ścianę komórkową → kurczenie pochewki ogona → wstrzyknięcie DNA do cytoplazmy (biały kapsyd pozostaje na zewnątrz); (3) Replikacja: polimeraza bakteryjna transkrybuje geny "wczesne" faga → enzymy faga (w tym nukleaza degradująca chromosom bakterii); nowe kopie DNA faga; (4) Synteza składników: transkrypcja genów "późnych" → białka kapsydu, ogona, ogonowe włókna; (5) Składanie: spontaniczne złożenie virionów (~100 w ciągu 25 min); (6) Liza: enzym T (holin) + lizozym T przebijają błonę i ścianę → uwolnienie ~100–200 fagów potomnych. Cykl lizogeniczny (fag lambda): DNA faga integruje do chromosomu bakterii za pomocą Int (integrazy) w miejscu attB → profag dziedziczony przez podziały; indukcja (SOS response po UV) → wycinanie profagu → cykl lityczny.',
    difficulty: 3,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  // ─── Protisty ───
  {
    topic_id: TOPIC,
    subtopic_id: S.prot,
    question_type: 'open',
    question_text: 'Uzasadnij, że Plasmodium falciparum (zarodźiec malarii) jest organizmem eukariotycznym, mimo że przez część cyklu życiowego żyje wewnątrz erytrocytów człowieka. Podaj dwie cechy eukariotyczne tego pierwotniaka.',
    options: [],
    correct_answer: [],
    explanation: 'Plasmodium jest eukariotem bo ma jądro komórkowe z otoczką jądrową (DNA w chromosomach liniowych), mitochondria i apikoplast (organellum endosymbiotyczne). Wewnątrzkomórkowy tryb życia to adaptacja pasożytnicza, nie cecha prokariotyczna.',
    max_points: 2,
    key_points: [
      'Plasmodium posiada jądro komórkowe otoczone podwójną błoną jądrową z DNA zorganizowanym w chromosomy liniowe (14 chromosomów) — cecha eukariotyczna nieobecna u prokariontów',
      'Plasmodium posiada mitochondria (oddychanie tlenowe) oraz apikoplast (zredukowany plastyd — pozostałość po endosymbiozie wtórnej, niezbędny do syntezy kwasów tłuszczowych i izoprenoidu) — organella błonowe charakterystyczne dla eukariontów'
    ],
    model_answer: 'Plasmodium falciparum jest eukariontem, co potwierdzają: (1) obecność jądra komórkowego z podwójną błoną jądrową — DNA zorganizowane w 14 liniowych chromosomów z histonami; (2) posiadanie organelli błonowych: mitochondrium (z cristae, własnym kołowym DNA) oraz apikoplast — zredukowany plastyd pochodzący z endosymbiozy wtórnej (pochłonięta alga czerwona), niezbędny do szlaków metabolicznych (synteza kwasów tłuszczowych, izoprenoidów). Ponadto Plasmodium ma siateczkę śródplazmatyczną, aparat Golgiego i rybosomy 80S (cytoplazmatyczne). Pasożytnictwo wewnątrzkomórkowe (w erytrocytach) to adaptacja ewolucyjna, nie wskaźnik przynależności do prokariontów.',
    difficulty: 2,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  // ─── Grzyby ───
  {
    topic_id: TOPIC,
    subtopic_id: S.grzy,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega mutualistyczna symbioza między grzybami a korzeniami roślin (mikoryzą). Podaj, jakie korzyści czerpie roślina, a jakie grzyb.',
    options: [],
    correct_answer: [],
    explanation: 'Mikoryza: grzyb rozszerza powierzchnię wchłaniania wody i soli mineralnych (fosforany) dla rośliny; roślina dostarcza grzybowi produkty fotosyntezy (glukozę, sacharozę). Obie strony zyskują — mutualizm.',
    max_points: 2,
    key_points: [
      'Roślina zyskuje: grzyb dramatically zwiększa powierzchnię absorpcji wody i jonów mineralnych (szczególnie fosforanów — PO₄³⁻) dzięki rozległej sieci strzępek; rośliny z mikoryzą lepiej rosną na ubogich glebach i w suszy',
      'Grzyb zyskuje: roślina dostarcza grzybowi organicznych związków węgla (głównie glukozy i sacharozy) będących produktami fotosyntezy; grzyby mikoryzowe są heterotrofami i nie mogą samodzielnie produkować węglowodanów'
    ],
    model_answer: 'Mikoryza (gr. mykes = grzyb + rhiza = korzeń) to mutualistyczna symbioza grzyba z korzeniami rośliny (ponad 80% roślin lądowych). Korzyści rośliny: strzępki grzybni penetrują glebę daleko poza strefą korzeni → kilkudziesięciokrotne zwiększenie powierzchni absorpcji wody i jonów mineralnych, szczególnie słabo ruchliwych fosforanów (PO₄³⁻); grzybnia wydziela też enzymy mobilizujące fosfor organiczny i azot z próchnicy; rośliny z mikoryzą lepiej przeżywają suszę i ubogą glebę. Korzyści grzyba: grzyb nie może samodzielnie fotosyntetyzować → otrzymuje od rośliny 10–20% produktów fotosyntezy (sacharozę, glukozę) jako główne źródło węgla i energii.',
    difficulty: 1,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC,
    subtopic_id: S.grzy,
    question_type: 'open',
    question_text: 'Porównaj grzyby workowe (Ascomycota) i grzyby podstawkowe (Basidiomycota), wskazując jedną cechę wspólną i dwie cechy różniące je pod względem rozmnażania płciowego.',
    options: [],
    correct_answer: [],
    explanation: 'Wspólne: oba tworzą sporangiofory z zarodnikami płciowymi. Różnice: workowe — zarodniki (askospory) powstają w workach (askusach) wewnątrz owocnika; podstawkowe — zarodniki (bazydiospory) powstają zewnętrznie na podstawkach (bazydiach).',
    max_points: 2,
    key_points: [
      'Cecha wspólna: oba typy tworzą zarodniki płciowe (mejospory) w wielokomórkowych owocnikach; oba mają stadium dikarionu (n+n) w cyklu życiowym — po połączeniu plazm dwóch grzybni (plazmogamia) przed kariogamią',
      'Cechy różniące: (1) Typ struktury produkującej zarodniki: Ascomycota — askus (worek) z 8 askosporami wewnątrz (endogeniczne); Basidiomycota — basidium (podstawka) z 4 bazydiosporami zewnętrznie (egzogeniczne, na sterygmach); (2) Czas trwania dikarionu: u Basidiomycota dikarion trwa bardzo długo (cała grzybnia wtórna, owocnik); u Ascomycota dikarion trwa krótko (tylko w askogennych strzępkach)'
    ],
    model_answer: 'Cecha wspólna Ascomycota i Basidiomycota: oba gromady mają stadium dikarionu (n+n) w cyklu płciowym — po połączeniu cytoplazm dwóch haploidalnych strzępek (plazmogamia) dwa jądra współistnieją bez fuzji przez pewien czas; kariogamia (zlewanie jąder) i mejoza prowadzą do haploidalnych zarodników. Oba tworzą wielokomórkowe owocniki (np. muflon, borowik). Cechy różniące: (1) Struktura wytwarzająca zarodniki: Ascomycota — askus (worek): zamknięta, cylindryczna struktura, zawierająca wewnątrz (endogenicznie) 8 askospor po mejozie + mitozie; przykłady: Saccharomyces (drożdże), Morchella (smardz), Aspergillus. Basidiomycota — basidium (podstawka): maczugowata struktura, na której 4 bazydiosporы wyrastają zewnętrznie (egzogenicznie) na sterygnach; przykłady: Agaricus (pieczarka), Boletus (borowik), Amanita (muchomor). (2) Długość dikarionu: u Basidiomycota dikarion dominuje (cała grzybnia wtórna i owocnik); u Ascomycota — krótko (tylko askogenne strzępki przed kariogamią).',
    difficulty: 2,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  // ─── Bezkręgowce ───
  {
    topic_id: TOPIC,
    subtopic_id: S.bezk,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega metamorfoza zupełna (holometabolia) u owadów i podaj, jakie korzyści ekologiczne daje podział cyklu życiowego na etapy jaja, larwy, poczwarki i imagines (postaci dorosłej).',
    options: [],
    correct_answer: [],
    explanation: 'Holometabolia: jajo → larwa (żerowanie, wzrost) → poczwarka (przebudowa ciała) → imago (rozmnażanie, dyspersja). Korzyść: larwa i imago zajmują różne nisze ekologiczne → brak konkurencji wewnątrzgatunkowej o pokarm i przestrzeń.',
    max_points: 2,
    key_points: [
      'Metamorfoza zupełna (holometabolia): larwa wylęga się z jaja i przechodzi przez kilka stadiów linki (intensywne żerowanie i wzrost) → stadium poczwarki (histoliza tkanek larwalnych i morfogeneza tkanek postaci dorosłej — głęboka przebudowa ciała) → imago (postać dorosła, zdolna do rozrodu)',
      'Korzyści ekologiczne: larwa i imago zajmują różne nisze troficzne i przestrzenne (np. larwa motyla je liście → imago pije nektar; larwa komara w wodzie → imago latające) → eliminuje wewnątrzgatunkową konkurencję o pokarm między pokoleniami; poczwarka umożliwia głęboką reorganizację ciała niepossible drogą stopniowej zmiany'
    ],
    model_answer: 'Metamorfoza zupełna (holometabolia, ok. 85% gatunków owadów: Lepidoptera, Coleoptera, Diptera, Hymenoptera): Etapy: (1) Jajo: stadium spoczynkowe, często odporne na niekorzystne warunki; (2) Larwa: aktywne stadium żerowania i wzrostu; przechodzi przez kilka stadiów z linkami (instar 1, 2, 3...); gąsienica, poczwarka robaczkowa, larwa muchówki (maggot); (3) Poczwarka (pupa): stadium spoczynkowe — histoliza tkanek larwalnych przez autofagię, imaginal discs różnicują się w tkanki dorosłego owada (skrzydła, nogi, oczy złożone, narządy rozrodcze); (4) Imago: postać dorosła zdolna do rozrodu i dyspersji. Korzyści ekologiczne: larwa i imago nie konkurują o te same zasoby — zajmują różne nisze troficzne i siedliskowe; redukuje presję wewnątrzgatunkową i umożliwia eksplorację różnych środowisk w jednym cyklu życiowym.',
    difficulty: 2,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  // ─── Systemy klasyfikacji ───
  {
    topic_id: TOPIC,
    subtopic_id: S.syst,
    question_type: 'open',
    question_text: 'Wyjaśnij różnicę między pojęciami filogenetyki kladystycznej: kladem, grupą monofiletyczną a grupą parafiletyczną. Podaj przykład grupy parafiletycznej stosowanej w tradycyjnej systematyce i uzasadnij, dlaczego kladystyka ją odrzuca.',
    options: [],
    correct_answer: [],
    explanation: 'Klad/monofilia: wspólny przodek + WSZYSCY jego potomkowie. Parafilia: wspólny przodek + CZĘŚĆ potomków (wyklucza niektóre grupy pochodne). Przykład: gady (Reptilia) bez ptaków = parafiletyczne, bo ptaki są dinozaurami teropodowymi. Kladystyka uznaje tylko grupy monofiletyczne.',
    max_points: 3,
    key_points: [
      'Klad (grupa monofiletyczna): zawiera JEDNEGO wspólnego przodka I WSZYSTKICH jego potomków — definiowany przez synapomorfie (wspólne cechy pochodne odziedziczone od tego przodka); w kladystyce tylko grupy monofiletyczne są akceptowalnymi jednostkami taksonomicznymi',
      'Grupa parafiletyczna: zawiera wspólnego przodka i CZĘŚĆ (nie wszystkich) jego potomków — wyklucza niektóre linie pochodne (zazwyczaj te, które znacznie się różnią morfologicznie); przykład: Reptilia (gady) bez Aves (ptaków) = parafiletyczna, bo ptaki (Aves) są dinozaurami teropodowymi (Maniraptora) — ich przodek jest wspólny z krokodylami i pozostałymi gadami',
      'Dlaczego kladystyka odrzuca grupy parafiletyczne: sztuczne wykluczenie potomków zaburza obraz relacji ewolucyjnych; Reptilia bez ptaków sugeruje, że krokodyl jest bliżej spokrewniony z jaszczurką niż z ptakiem — to fałsz (krokodyle i ptaki tworzą klad Archosauria, bliższy niż krokodyle i jaszczurki)'
    ],
    model_answer: 'Kladystyka (Hennig 1950): klasyfikacja oparta wyłącznie na relacjach filogenetycznych (wspólnym pochodzeniu). Klad (grupa monofiletyczna): obejmuje JEDNEGO wspólnego przodka i WSZYSTKICH jego potomków (bez wyjątku); definiowany przez synapomorfie — wspólne cechy pochodne. Przykład: Aves (ptaki) = klad; Mammalia = klad. Grupa parafiletyczna: zawiera wspólnego przodka i TYLKO CZĘŚĆ potomków — celowo wyklucza pewne grupy pochodne, zazwyczaj z powodów morfologicznych. Przykład: Reptilia (gady) w tradycyjnej systematyce: zawiera krokodyle, jaszczurki, węże, żółwie — ALE wyklucza ptaki (Aves), choć ptaki są dinozaurami teropodowymi ewolucyjnie bliżej spokrewnionymi z krokodylami niż np. z jaszczurkami (Crocodylia + Aves = Archosauria). Dlaczego kladystyka odrzuca parafilia: grupy parafiletyczne nie oddają prawdziwych relacji pokrewieństwa; sugerują błędną bliskość (krokodyl "bliżej" jaszczurki niż ptaka = fałsz); zaburzają przewidywalność cech wspólnych. Inne przykłady grup parafiletycznych: "ryby" (wyklucza czworonogi, choć trzonopłetwe są bliżej tetrapodów); "małpy" (wyklucza człowieka).',
    difficulty: 3,
    verified: true,
    source: 'własne, wzorowane na CKE',
  },
  // ─── Rosliny — systematyka ───
  {
    topic_id: TOPIC,
    subtopic_id: S.rosl,
    question_type: 'open',
    question_text: 'Wyjaśnij, jakie przystosowania umożliwiły roślinom nasiennym (Spermatophyta) uniezależnienie się od wody podczas rozmnażania płciowego. Porównaj z paprotnikami, u których woda jest niezbędna do zapłodnienia.',
    options: [],
    correct_answer: [],
    explanation: 'Rośliny nasienne: pyłek (gametofit męski przenoszony przez wiatr/owady) zastępuje wiciowate plemniki; zarodek osłonięty nasieniem z zapasem pokarmowym. Paprotniki: wiciowate plemniki do komórki jajowej muszą dopłynąć przez wodę (film wodny na gametoficie).',
    max_points: 2,
    key_points: [
      'Pyłek (ziarna pyłku) = silnie zredukowany gametofit męski przystosowany do przenoszenia przez wiatr (anemogamia) lub owady (entomogamia) bez potrzeby wody; zawiera komórki generatywne produkujące gamety (plemniki pozbawione wici u okrytonasiennych) — zapłodnienie nie wymaga wody jako medium transportu',
      'Nasienie = zarodek otoczony łupinami nasiennymi z tkanką odżywczą (bielmo) — chroni zarodek podczas dyspersji i zapewnia substancje pokarmowe na kiełkowanie; u paprotników (mszaki, paprocie) wiciowate plemniki (spermatozoidy) muszą przepłynąć przez wodę do archegonium na gametoficie — zapłodnienie ograniczone do wilgotnych środowisk'
    ],
    model_answer: 'Rośliny nasienne (nago- i okrytonasienne) uniezależniły się od wody w rozmnażaniu dzięki dwóm kluczowym innowacjom ewolucyjnym: (1) Pyłek (pollen grain) — silnie zredukowany gametofit męski zamknięty w trwałej sporoderminie; przenoszony przez wiatr lub owady do słupka/szyszki bez potrzeby wody; po kiełkowaniu wytwarza łagiewkę pyłkową prowadzącą gamety bezpośrednio do komórki jajowej (u okrytonasiennych gamety niespokojne, bez wici); (2) Nasienie — zarodek + zapas pokarmowy (bielmo) + łupina nasienna; chroni zarodek podczas dyspersji w suchym środowisku i dostarcza substancji na kiełkowanie. Paprotniki (mszaki, widłaki, skrzypy, paprocie): gametofit (protalium) produkuje anterydium ze spermatozoidy z wiciami → muszą przepłynąć cienką warstwą wody do archegonium z komórką jajową → zapłodnienie możliwe tylko przy obecności wody → ograniczone do wilgotnych siedlisk.',
    difficulty: 2,
    verified: true,
    source: 'własne, wzorowane na CKE',
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
  console.log(`Seeding ${questions.length} open questions for Różnorodność organizmów...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.max_points}pkt]`, q.question_text.slice(0, 70).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
