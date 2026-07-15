// Seed batch 4/6 — Ekologia
// Zależności międzygatunkowe (6) + Sukcesja ekologiczna (4)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '27daaa5f-30d8-4519-a525-4b136cad02f2'

const S = {
  zaleznosci: '2fbd2cbd-e4a3-428c-af6d-38c4a2e71080',
  sukcesja:   '63b1ca74-4c2d-4c15-95d6-3b322d07d1b9',
}

const questions = [

  // ── ZALEŻNOŚCI MIĘDZYGATUNKOWE (6) ───────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.zaleznosci, question_type: 'single',
    question_text: 'W tabeli zestawiono różne typy zależności między gatunkami A i B. Który wiersz POPRAWNIE opisuje mutualizm obligatoryjny?',
    options: [
      { id: 'A', text: 'Gatunek A: +, Gatunek B: +; obydwa gatunki odnoszą korzyść i żaden nie może przeżyć bez drugiego — przykład: termity i ich jelitowe protisty rozkładające celulozę; kaktus i mucha opylająca go wyłącznie', is_correct: true },
      { id: 'B', text: 'Gatunek A: +, Gatunek B: 0; gatunek A korzysta, B jest obojętny — jest to komensalizm; przykład: mutualizm obligatoryjny to synonim komensalizmu w terminologii polskiej', is_correct: false },
      { id: 'C', text: 'Gatunek A: +, Gatunek B: −; gatunek A jest drapieżnikiem, B ofiarą — drapieżnictwo jest najważniejszym typem mutualizmu obligatoryjnego; bez ofiar drapieżniki giną, więc zależność jest obustronna i obligatoryjna', is_correct: false },
      { id: 'D', text: 'Gatunek A: 0, Gatunek B: 0; żaden gatunek nie korzysta ani nie traci — jest to mutualizm neutralny; obligatoryjność oznacza brak jakichkolwiek konsekwencji dla obu stron', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Typy zależności międzygatunkowych (tabela +/0/−): MUTUALIZM (+/+): obydwa zyskują; KOMENSALIZM (+/0): jeden zyskuje, drugi obojętny; PROTOKOOPERACJA (+/+): oba zyskują, ale nieobligatoryjnie; AMENSALIZM (−/0): jeden traci, drugi obojętny; KONKURENCJA (−/−): obydwa tracą; DRAPIEŻNICTWO/PASOŻYTNICTWO (+/−): jeden zyskuje, drugi traci. MUTUALIZM OBLIGATORYJNY: bez partnera oba gatunki nie mogą przeżyć; przykłady: (1) termity + Trichonympha (protist): termity nie mają celulazy → protisty w jelicie rozkładają drewno → mutualizm obligatoryjny; (2) yucca + mól yucca (Tegeticula yuccasella): roślina zapylana wyłącznie przez mola, mol składa jaja wyłącznie w yucca; (3) mrówki-akacjowe Pseudomyrmex ferrugineus + akacja Acacia cornigera: mrówki chronią akację przed roślinożercami, akacja daje nektar i schronienie; (4) korzenie leguminoz + Rhizobium. MUTUALIZM FAKULTATYWNY: korzyść, ale możliwe przeżycie bez partnera.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.zaleznosci, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących pasożytnictwa i drapieżnictwa:',
    options: [
      { id: 'A', text: 'Pasożyty wewnętrzne (endopasożyty, np. tasiemce, glista ludzka, Plasmodium malariae) i zewnętrzne (ektoparasyta, np. kleszcze, wszy, pchły) różnią się miejscem życia na/w żywicielu, ale obydwa typy pobierają zasoby od żywiciela i zazwyczaj nie zabijają go natychmiast.', is_correct: true },
      { id: 'B', text: 'Drapieżnictwo i pasożytnictwo są tym samym zjawiskiem biologicznym — jedyna różnica polega na rozmiarze: drapieżnik jest mniejszy od ofiary (jak pasożyt), natomiast pasożyt jest większy i zabija ofiarę natychmiast.', is_correct: false },
      { id: 'C', text: 'Hiperpasożytnictwo (hiperparazytoizm): pasożyt może mieć własnych pasożytów (np. Cotesia glomerata — błonkówka pasożytująca na gąsienicach Pieris brassicae, pasożytowana z kolei przez Lysibia nana); zjawisko to może tworzyć wielopoziomowe łańcuchy pasożytnictwa.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: pasożytnictwo: +/− jak drapieżnictwo, ale pasożyt zazwyczaj nie zabija żywiciela natychmiast (długotrwałe wykorzystanie); endopasożyty: tasiemiec bąblowcowy (Echinococcus granulosus) w wątrobie; Toxoplasma gondii (koty→gryzonie→człowiek); Dicrocoelium dendriticum (mrówka→kret→owca); ektoparasyta: Ixodes ricinus (kleszcz): przenosi Borrelia (borelioza), Anaplasma; Cimex lectularius (pluskwa domowa). B — Fałsz: drapieżnictwo ≠ pasożytnictwo; kluczowe różnice: (1) drapieżnik zazwyczaj ZABIJA ofiarę natychmiast; pasożyt utrzymuje żywiciela żywego; (2) drapieżnik jest zazwyczaj WIĘKSZY od ofiary (choć nie zawsze: myrmecophila); pasożyt jest MNIEJSZY; (3) drapieżnik pobiera jedno lub kilka ofiar; pasożyt żyje na/w jednym lub kilku żywicielach przez dłuższy czas. C — Prawda: hiperparazytyzm (1°, 2°, 3°...): Cotesia glomerata → gąsienice Pieris brassicae; Lysibia nana (hyperparasitoid) → Cotesia; nawet 4. rzędu hiperparazytoizm udokumentowany; biologiczna kontrola szkodników: parasitoids (Trichogramma, Aphidius, Encarsia) używane w uprawach szklarniowych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.zaleznosci, question_type: 'multiple',
    question_text: 'Które z poniższych przykładów POPRAWNIE ilustrują konkurencję międzygatunkową i jej konsekwencje? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Zasada kompetytywnego wykluczenia (Gausego): dwa gatunki zajmujące identyczną niszę ekologiczną nie mogą współistnieć na tym samym obszarze — jeden gatunek wyeliminuje drugi; doświadczenie Gausego z Paramecium aurelia i P. caudatum w tej samej hodowli potwierdza to', is_correct: true },
      { id: 'B', text: 'Inwazja szczura wędrownego (Rattus norvegicus) do Europy w XVIII w. doprowadziła do wypierania rodzimego szczura czarnego (Rattus rattus) z większości siedlisk; oba gatunki konkurują o te same zasoby, a R. norvegicus jest lepszym konkurentem w wilgotnych środowiskach', is_correct: true },
      { id: 'C', text: 'Rozróżnienie nisz ekologicznych (niche partitioning / character displacement) pozwala pokrewnym gatunkom współistnieć przez unikanie bezpośredniej konkurencji; przykład: srokosz i dzierzba gąsiorek zasiedlają różne piętra krzewów gdy żyją sympatrycznie', is_correct: true },
      { id: 'D', text: 'Konkurencja międzygatunkowa zawsze prowadzi do szybkiego wyginięcia jednego z gatunków w ciągu jednego sezonu; żaden przypadek długotrwałego współistnienia gatunków konkurujących nie jest znany w ekologii; zasada wykluczenia jest prawem bez wyjątków', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) Gauze (1932): Paramecium aurelia i P. caudatum w hodowli razem → P. aurelia wygrywa; osobno oba rosną do K; razem: P. caudatum wypierane; "competitive exclusion principle" lub "Gauze\'s law". (B) Rattus norvegicus (szczur wędrowny, brązowy): dotarł do Europy ~1700–1750; większy, agresywny, doskonały pływak → wyparcie R. rattus (szczur czarny, dachowy) z nizin; R. rattus pozostał na wyspach i terenach suchych, górnych piętrach budynków; paralela: wiewiórka szara vs. ruda (UK: Sciurus carolinensis vs. S. vulgaris). (C) character displacement (Brown & Wilson 1956): ziemianki Darwin\'s finches (Geospiza fortis i G. fuliginosa): na wyspach gdzie żyją razem → rozmiary dziobów się rozszerzają (allopatria vs. sympatria); jaskółki: bank swallow (Riparia riparia) i barn swallow (Hirundo rustica): sympatrycznie żerują na różnych wysokościach. (D) fałsz: liczne przykłady stabilnej koegzystencji gatunków pozornie identycznych nisz: paradoks planktonu (Hutchinson 1961: dziesiątki gatunków fitoplanktonu w jednorodnej wodzie → mechanizmy podtrzymywania: niejednorodność przestrzenna, warunki niestabilne, predacja selektywna); Park 1954: Tribolium castaneum vs. T. confusum: wynik zależy od temperatury i wilgotności; coexistence mechanisms: tymczasowa heterogenność, enemy-mediated coexistence, storage effect.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.zaleznosci, question_type: 'single',
    question_text: 'Symbioza między Rhizobium leguminosarum a roślinami strączkowymi (Fabaceae) jest przykładem mutualizmu obligatoryjnego. Który opis POPRAWNIE wyjaśnia mechanizm tej zależności?',
    options: [
      { id: 'A', text: 'Bakterie Rhizobium wnikają do komórek korzenia przez włośniki → tworzą brodawki korzeniowe → różnicują się w bakteroidy wyposażone w nitrogenazę → redukują N₂ do NH₄⁺ dostępnego dla rośliny; roślina dostarcza cukrów (malat) i chroni nitrogenazę przed O₂ dzięki leghemoglobinie', is_correct: true },
      { id: 'B', text: 'Rhizobium jest pasożytem korzeni — pobiera z rośliny cukry i wodę bez żadnej korzyści dla rośliny; brodawki korzeniowe to galasowate narośla będące reakcją obronną rośliny na infekcję; azot jest uwalniany do gleby, nie do rośliny', is_correct: false },
      { id: 'C', text: 'Rhizobium samodzielnie wiąże N₂ w glebie bez kontaktu z rośliną; brodawki korzeniowe służą wyłącznie jako schronienie i nie mają funkcji związanej z azotowaniem; rośliny strączkowe pobierają azot wyłącznie z gleby w formie NO₃⁻', is_correct: false },
      { id: 'D', text: 'Leghemoglobina (białko zawierające żelazo obecne w brodawkach) dostarcza O₂ do nitrogenazy, bo nitrogenaza wymaga wysokich stężeń tlenu; bez leghemoglobiny bakteroidy nie mogłyby wiązać azotu; rośliny bez brodawek wiążą azot przez liście', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Symbioza Rhizobium-Fabaceae (biologiczne wiązanie N₂, BNF): (1) Sygnalizacja: roślina wydziela flawonoidy → Rhizobium wykrywa → produkcja czynników Nod (lipochitooligosacharydy) → włośniki zakrzywiają się (shepherd\'s crook); (2) Infekcja: Rhizobium wnika przez nić infekcyjną → korteks korzenia → endocytoza → symbiosomy (bakteroidy w pęcherzykach peribakteroidal membrane); (3) NITROGENAZA: kompleks Fe-białko + Mo-Fe-białko; N₂ + 16ATP + 8H⁺ → 2NH₃ + H₂ + 16ADP; wrażliwa na O₂! (4) LEGHEMOGLOBINA: różowa barwa brodawek; hemoglobina roślinno-bakteryjna; globina (kodowana przez roślinę) + hem (Rhizobium); powinowactwo do O₂ ~ 10× wyższe niż hemoglobina ludzka → utrzymuje [O₂] bardzo niskie w brodawce → chroni nitrogenazę, jednocześnie dostarcza O₂ na potrzeby oddychania bakteroidów; (5) produkty: NH₄⁺ → transport do rośliny jako asparagina/glutamina; korzyść dla Rhizobium: malat (C₄ kwas) + aminokwasy jako pokarm.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.zaleznosci, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących komensalizmu i protokooperacji:',
    options: [
      { id: 'A', text: 'Rybka komensalna błazenek (Amphiprioninae) żyje wśród ramion ukwiałów (Actiniaria); ukwiał chroni błazenka przed drapieżnikami (parzące komórki nie szkodzą mu dzięki śluzowi), a ukwiałowi jest obojętna obecność błazenka — jest to przykład komensalizmu.', is_correct: false },
      { id: 'B', text: 'Epifity (rośliny nadrośla, np. storczyki, bromelidy na drzewach tropikalnych lasów deszczowych) korzystają z podłoża drzewa do dostępu do światła, nie pobierają wody ani składników mineralnych z drzewa (nie są pasożytami), natomiast drzewo nie odnosi żadnej korzyści — jest to komensalizm.', is_correct: true },
      { id: 'C', text: 'Protokooperacja (nieobligatoryjny mutualizm) to związek, w którym obydwa gatunki odnoszą korzyści, ale mogą przeżyć bez siebie; przykład: rak pustelnik i ukwiał Calliactis parasitica — rak przenosi ukwiał (który zdobywa więcej pokarmu), ukwiał chroni raka żądlącymi komórkami; oba mogą przeżyć oddzielnie.', is_correct: true },
    ],
    correct_answer: ['B', 'C'],
    explanation: 'A — Fałsz: błazenek-ukwiał to MUTUALIZM (+/+), nie komensalizm (+/0); błazenek oczyszcza ukwiał z pasożytów i martwych tkanek, dostarcza odchodów (nawóz dla ukwiału), odpędza ryby żywiące się ukwiałem (np. Chelmon rostratus); badania Fautin i Allen 1992 potwierdziły wzajemne korzyści; w systemie Nemo: Clownfish (Amphiprion ocellaris) + Heteractis magnifica. B — Prawda: epifity (epiphytes): nie pasożytują; storczyki (Orchidaceae: Cattleya, Dendrobium) mają powietrzne korzenie z welamem (tkanka gąbczasta) absorbująca deszcz i rosy; bromelidy (Tillandsia, Bromeliaceae): pochłaniają wodę przez włoski (trichomy) liści, nie korzenie; drzewo-phorophyte nie odnosi korzyści (może być minimalnie obciążone ciężarem → ale to pomijalne); UWAGA: niektóre "epifity" stają się pasożytami półpasożytującymi (jemioła, Viscum album = hemiepifityczny hemiparazyt). C — Prawda: protokooperacja = mutualizm fakultatywny; rak pustelnik + Calliactis parasitica (ukwiał bez muszli przeżyje, rak bez ukwiału też); kleczenica i mrówki na roślinach (nie obligatoryjne); Pogonomyrmex (mrówki żniwiarki) i rośliny zoochoryczne (dyspersja nasion z elaiosomami) — obie strony nie są całkowicie uzależnione.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.zaleznosci, question_type: 'multiple',
    question_text: 'Które z poniższych przykładów POPRAWNIE ilustrują koewolucję (coevolution) dwóch gatunków? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Wyścig zbrojeń (evolutionary arms race) między ofiarą a drapieżnikiem: ślimaki morskie Littorina rozwinęły grubsze muszle w odpowiedzi na ewolucję krabów Carcinus z silniejszymi szczypcami; kraby z kolei ewoluowały silniejsze szczypce w odpowiedzi na grubsze muszle', is_correct: true },
      { id: 'B', text: 'Koewolucja rośliny i zapylacza: orchidee Angraecum sesquipedale z Madagaskaru mają ostrogi nektarnikowe długości 30 cm; Darwin w 1862 przewidział istnienie ćmy z równie długą ssawką; odkryto ją w 1903 (Xanthopan morganii praedicta) — ssawka 30 cm', is_correct: true },
      { id: 'C', text: 'Koewolucja gościa i żywiciela (host-parasite coevolution): Myxoma virus i króliki (Oryctolagus cuniculus) w Australii — po introdukcji wirusa (1950) początkowo 99% królików ginęło; po kilku latach wirulencja wirusa zmalała, a odporność królików wzrosła — ewolucja w obydwu kierunkach', is_correct: true },
      { id: 'D', text: 'Koewolucja to zjawisko zachodzące tylko między gatunkami w relacji drapieżnik-ofiara; mutualizmy (np. roślina-zapylacz) nie mogą ewoluować wspólnie, gdyż brak presji negatywnej po jednej stronie eliminuje napęd ewolucyjny', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) geograficzna mozaika koewolucji (Thompson 2005): wyścig zbrojeń (Red Queen hypothesis — Van Valen 1973): populacje lokalnie wyprzedzają siebie nawzajem; Littorina obtusata + Carcinus maenas: populacje na wybrzeżach z dużą gęstością krabów mają 2× grubszą muszlę. (B) Darwin\'s "predicted" moth: Angraecum sesquipedale (nektarnik 30 cm głębokości) → Darwin 1862 "An observer with powerful magnifier might expect to see a moth with a proboscis of 30 cm" → Xanthopan morganii praedicta (Rothschild & Jordan 1903); filmowane wprost w 1992 przez BBC. (C) myxomatosis (Myxoma virus, poxvirus): introdukowany w Australii 1950 (garbato: François Fenner); początkowo: virulence grade I (śmiertelność >99%); ewolucja ku wirulencji niższej (grade III, ~70–80%) gdyż zbyt zjadliwe szczepy nie są transmisowane z martwych królików; równoległe: odporność genetyczna (allel MHC, Mx1-like gene); klasyczny przykład antagonistycznej koewolucji. (D) fałsz: mutualizmy koewoluują intensywnie — figowce (Ficus) i osy figowe (Agaonidae): każdy gatunek figowca ma własny gatunek osy; 800 gatunków Ficus + 800 gatunków os; koewolucja roślin kwitnących i zapylaczy przez 100 Ma; Daphnia i jej algi pasożytnicze (Aulacoseira) koewoluowały wzajemnie.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── SUKCESJA EKOLOGICZNA (4) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.sukcesja, question_type: 'single',
    question_text: 'Sukcesja pierwotna i wtórna to dwa główne typy sukcesji ekologicznej. Czym się różnią?',
    options: [
      { id: 'A', text: 'Sukcesja pierwotna: zasiedlanie obszarów pozbawionych gleby i organizmów żywych (goła skała po zlodowaceniu, lawa wulkaniczna, lotne piaski); sukcesja wtórna: obszar z zachowaną (lub częściowo zachowaną) glebą i bankiem nasion, skąd poprzedni ekosystem został usunięty (po pożarze, wycięciu lasu, opuszczeniu pola uprawnego)', is_correct: true },
      { id: 'B', text: 'Sukcesja pierwotna zachodzi wyłącznie w środowiskach wodnych (jeziora, rzeki), wtórna tylko na lądzie; nie istnieje sukcesja pierwotna na lądzie ani wtórna w wodzie; oba typy zawsze prowadzą do identycznego klimaksu', is_correct: false },
      { id: 'C', text: 'Sukcesja pierwotna i wtórna to synonimy — oznaczają ten sam proces regeneracji ekosystemu po zaburzeniu; różnią się wyłącznie stroną języka: pierwotna to termin botaniczny, wtórna zoologiczny', is_correct: false },
      { id: 'D', text: 'W sukcesji pierwotnej klimaks jest osiągany w ciągu 10–20 lat; w sukcesji wtórnej klimaks wymaga tysięcy lat; sukcesja pierwotna jest szybsza ponieważ gatunki pionierskie są bardziej efektywne niż gatunki późnych stadiów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'SUKCESJA PIERWOTNA (primary succession): brak gleby i banku nasion; pionierzy: porosty (Cladonia, Parmelia) + mchy → wietrzenie skały + gromadzenie materii organicznej → gleba inicjalna → rośliny naczyniowe; czas trwania: setki–tysiące lat; przykłady: (1) skały po cofnięciu się lodowca Glacier Bay (Alaska) — badane od 1916; (2) wyspa wulkaniczna Krakatau (erupcja 1883) — zasiedlona po 50 latach; (3) lawa Kilauea (Hawaje). SUKCESJA WTÓRNA (secondary succession): gleba zachowana, bank nasion, rhizosfery; szybsza (dziesięciolecia–200 lat); przykłady: (1) stare pola uprawne (old-field succession — badane przez Clemensa, Gleasona); (2) po pożarze lasu (Yellowstone 1988 → badania 30-letnie); (3) po wyrębie lasu (European beech study). Obydwie zmierzają do klimaksu — stanu równowagi z klimatem regionalnym (Clements 1916 — klimaks monoklimaks); lub mozaiki zależnej od mikrosiedlisk (Gleason — indywidualistyczna hipoteza).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sukcesja, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują zmiany zachodzące podczas sukcesji ekologicznej? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Wraz z postępem sukcesji wzrasta: biomasa ekosystemu, liczba gatunków (bioróżnorodność α), złożoność sieci pokarmowych, liczba nisz ekologicznych oraz głębokość i żyzność gleby', is_correct: true },
      { id: 'B', text: 'Stosunek GPP do respiracji całego ekosystemu (P/R ratio): w stadium pionierskim P > R (ekosystem jest "autotroficzny netto" — magazynuje biomasę); w klimaksie P ≈ R (ekosystem "heterotroficzny" — całkowita asymilacja ≈ całkowitej respiracji)', is_correct: true },
      { id: 'C', text: 'Gatunki pionierskie (np. wierzba, brzoza, osika, chwasty jednoletnie) są r-strategami: szybko kolonizują otwarte przestrzenie, rosną szybko, produkują wiele nasion; gatunki klimaksowe (np. dąb, buk, lipa) są K-strategami: rosną wolniej, żyją długo, dominują w cieniu', is_correct: true },
      { id: 'D', text: 'Sukcesja zawsze przebiega według ściśle określonej, identycznej sekwencji stadiów niezależnie od klimatu, gleby i gatunków dostępnych w regionie; klimaks jest zawsze lasem liściastym w każdej strefie klimatycznej', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) trendy sukcesji (Odum 1969 "The strategy of ecosystem development"): biomasa ↑, NPP ↑ (do klimaksu), bioróżnorodność ↑ (szczyt w stadium pośrednim lub klimaksie), złożoność troficzna ↑, gleba ↑ (próchnica, pH, woda). (B) P/R ratio: inicjalne stadia: P > R → akumulacja materii organicznej → "autotroficzny netto" (negatywny bilans CO₂); klimaks: P ≈ R → biomasa stabilna → 0 netto → ekosystem w stanie stacjonarnym; lasy tropikalne są bliskie równowadze (P ≈ R); wikliny, łąki, uprawy: P >> R. (C) r/K w sukcesji: pionierzy: Betula pendula (brzoza), Salix caprea (wierzba iwa), Tussilago farfara, Epilobium angustifolium (wierzbówka kiprzyca: kwitnie po pożarach); klimaks: Fagus sylvatica (buk) — dominuje w cieniu gdy wysokość > 40 m; Quercus robur — nieznaczna tolerancja cienia. (D) fałsz: KLIMAKS ZALEŻY OD KLIMATU: (1) lasy deszczowe tropikalne (wilgotne tropiki); (2) lasy liściaste umiarkowane (Europa, Ameryka Wsch.); (3) tajga (borealne, Kanada, Syberia); (4) sawanna (tropikalne z suchą porą); (5) tundra (arktyczna) — klimaks bez drzew; (6) pustynia — klimaks krzewów lub sukulent; sekwencja stadiów różni się regionalnie i zależy od "regional species pool"; Gleason (1926) vs Clements (1916): rzeczywistość = pośrednie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sukcesja, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zaburzeń ekologicznych i sukcesji:',
    options: [
      { id: 'A', text: 'Hipoteza pośrednich zaburzeń (Intermediate Disturbance Hypothesis, Connell 1978): bioróżnorodność jest najwyższa przy pośredniej częstotliwości i intensywności zaburzeń — zbyt rzadkie zaburzenia faworyzują gatunek dominujący (wyklucza inne), zbyt częste eliminują K-strategów; pośrednie stwarzają mozaikę stadiów sukcesji.', is_correct: true },
      { id: 'B', text: 'Pożary w ekosystemach wyspecjalizowanych (np. sawanna, las sosnowy Pinus ponderosa) są wyłącznie szkodliwe i nie mają żadnej roli w cyklu sukcesji tych ekosystemów; drzewa pyrofilne (przystosowane do ognia) nie istnieją.', is_correct: false },
      { id: 'C', text: 'Po sukcesji na opuszczonym polu uprawnym w Polsce typowa sekwencja stadiów przebiega: roślinność ruderalna jednoletnia → łąka z bylinami → zarośla krzewów (z wierzbą iwą, dziką różą) → las brzozowo-sosnowy lub osikowo-sosnowy → las liściasty mieszany (dąbrowa, grąd) jako klimaks.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: IDH (Connell 1978 z badań na rafach koralowych i lasach tropikalnych): niskie zaburzenia → dominacja 1–2 silnych konkurentów (np. Climax dominants: buk, Sphagnum); wysokie → tylko r-strategi przeżywają; pośrednie → mozaika stadiów → wiele gatunków różnych wymagań; dowody: rafy koralowe: umiarkowane sztormy → max różnorodność; empiryczne potwierdzenie kontrowersyjne (metaanaliza Fox 2013: hipoteza prawdziwa tylko w ~20% badań). B — Fałsz: PIROFITY (fire-adapted plants): Pinus ponderosa (sosna graniastołupka): gruba kora chroni przed ogniem; szyszki serotinalne (otwierają się dopiero po ogniu: Pinus contorta, Pinus banksiana) → nasiona opadają na otwarte podłoże; Eucalyptus (Australia): pąki epicormiczne w korze → regeneracja po pożarze; Pyrenees: Cistus (posłonek) → nasiona kiełkują po ogniu; Sequoia sempervirens: szyszki otwierane przez ciepło; rola ognia: mineralizacja ściółki, eliminacja pasożytów, recykling P → wzrost produktywności. C — Prawda: sukcesja wtórna w Polsce (klimat umiarkowany kontynentalny): (1) 0–3 lata: Capsella, Polygonum, jednolatki; (2) 3–10 lat: Agropyron, Dactylis, Artemisia, Urtica; (3) 10–20: krzewy (Rosa canina, Crataegus, Prunus spinosa); (4) 20–50: las pionierski Betula pendula + Populus tremula + Pinus sylvestris; (5) 50–200: Quercus-Carpinus (grąd), Quercus-Pinus, zależnie od wilgotności.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sukcesja, question_type: 'single',
    question_text: 'Sukcesja w jeziorze (hydrosera) przebiega od otwartej wody do lądowego zbiorowiska. Która sekwencja POPRAWNIE opisuje typowe stadia tej sukcesji?',
    options: [
      { id: 'A', text: 'Otwarta woda z fitoplanktonem → roślinność zanurzana (Myriophyllum, Ceratophyllum) → roślinność o liściach pływających (Nuphar, Nymphaea) → szuwar (Phragmites australis, Typha) → turzycowisko → łąka wilgotna → zarośla wierzbowe → las łęgowy (olsza, jesion)', is_correct: true },
      { id: 'B', text: 'Las łęgowy → zarośla → łąka → szuwar → roślinność zanurzona → otwarta woda; sukcesja w jeziorze przebiega od stadiums lądowych do wodnych (renaturalizacja); każde jezioro zaczyna od lasu i zmierza do stanu otwartej wody', is_correct: false },
      { id: 'C', text: 'Hydrosera przebiega wyłącznie przez jeden etap — gdy szuwar się pojawi, jezioro natychmiast i trwale przekształca się w las iglasty; roślinność pływająca i zanurzona nie jest etapem sukcesji lecz zbiorowiskiem klimaksowym jezior', is_correct: false },
      { id: 'D', text: 'Sukcesja jeziorna zaczyna się od koralowców (rafa koralowa), następnie pojawia się algi brunatne, szuwar i finalnie las sosnowy; sekwencja jest identyczna we wszystkich jeziorach na świecie niezależnie od klimatu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hydrosera — sukcesja od jeziora do lądu: (1) STREFA PELAGICZNA: fitoplankton + zooplankton; akumulacja mułu organicznego na dnie → płycizna; (2) ROŚLINNOŚĆ ZANURZONA (strefa sublitoralna, 2–4 m): Myriophyllum spicatum, Ceratophyllum demersum, Potamogeton; (3) LIŚCIE PŁYWAJĄCE (strefa litoralna, 1–2 m): Nuphar lutea (grążel żółty), Nymphaea alba (grzybień biały), Polygonum amphibium; (4) SZUWAR (strefa brzegowa): Phragmites australis (trzcina) — dominująca; Typha latifolia (pałka), Scirpus (sitowie), Sparganium; (5) TURZYCOWISKO: Carex (turzyca), Juncus (sitowiec); (6) ŁĄKA WILGOTNA: Molinia caerulea, Deschampsia; (7) ZAROŚLA: Salix cinerea, S. aurita, Alnus glutinosa (olsza) → (8) LAS ŁĘGOWY / OLSZYNKA: Alnus glutinosa (olsza czarna) + Fraxinus excelsior (jesion); torfy i bagienne → w sukcesji wtórnej mogą stać się torfowiskami wysokimi (Sphagnum → bór bagienny Vaccinium).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: {
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => {
      let r = ''; res.on('data', c => r += c)
      res.on('end', () => resolve({ status: res.statusCode, body: r }))
    })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding batch 4 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
