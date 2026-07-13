// Seed batch 6/6 — Różnorodność zwierząt
// Przystosowania kręgowców (3) + Rozmnażanie zwierząt (7)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2'

const S = {
  przyst: 'ce14c990-8cbe-4d71-8946-f3c362cf9d96',
  rozm:   '84cf9348-1042-491d-b895-4ab150164c94',
}

const questions = [

  // ── PRZYSTOSOWANIA KRĘGOWCÓW (3) ──────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.przyst, question_type: 'single',
    question_text: 'Hibernacja (sen zimowy) u ssaków jest przykładem sezonowej torporu. Które zestawienie POPRAWNIE opisuje zmiany fizjologiczne podczas hibernacji prawdziwej (np. u świstaka Marmota)?',
    options: [
      { id: 'A', text: 'Temperatura ciała spada z ~37°C do 3–10°C; tętno z ~100/min do 3–10/min; oddychanie z ~20/min do 2–4/min; metabolizm (BMR) obniżony o 80–95%; zapas tłuszczu zbrązowiałego (BAT) uruchamiany przy wybudzaniu do generowania ciepła', is_correct: true },
      { id: 'B', text: 'Temperatura ciała pozostaje na normalnym poziomie (36–37°C); jedyną zmianą jest zatrzymanie oddychania płucnego i przejście na oddychanie skórne przez całą zimę', is_correct: false },
      { id: 'C', text: 'Wszystkie ssaki, w tym psy, koty i człowiek, wchodzą w stan hibernacji gdy temperatura zewnętrzna spada poniżej 5°C; różnią się jedynie głębokością odrętwienia', is_correct: false },
      { id: 'D', text: 'Podczas hibernacji ssaki tracą sierść i łuski, a skóra staje się przepuszczalna dla wody jak u płazów, umożliwiając oddychanie skórne przez całą zimę', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hibernacja prawdziwa (torpor zimowy): świstaki, jeże, niektóre nietoperze, popielice. Zmiany: (1) T ciała: 37°C → 3–10°C (zbliża się do temp. otoczenia); (2) HR: ~300/min (myszy) → 3–5/min; (3) RR: ~20/min → 1–3/min; (4) BMR: obniżony 80–95%; (5) gruczoły, trawienie, układ moczowy: prawie zatrzymane. Wybudzenie: brązowa tkanka tłuszczowa (BAT, UCP1) + drżenie mm. → szybka regeneracja T ciała w kilka godzin; ssaki budzą się kilkakrotnie w zimie (rewarming bouts). Niedźwiedź: letarg (T do ~30°C) — nie hibernacja prawdziwa; mama niedźwiedzica rodzi młode w zimie. Człowiek: brak hibernacji.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przyst, question_type: 'multiple',
    question_text: 'Mimikra i maskowanie (kamuflaż) to strategie obronne kręgowców. Które przykłady POPRAWNIE ilustrują te mechanizmy? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Mimikra Batesa: niejadowita jaszczurka koralowa (Lampropeltis) naśladuje ubarwienie jadowitego węża koralowego (Micrurus) — paski czerwony-żółty-czarny; drapieżniki uczą się unikać tego wzoru', is_correct: true },
      { id: 'B', text: 'Mimikra Mullera: dwie lub więcej niesmacznych/jadowitych species ewoluują ku podobnemu ubarwieniu ostrzegawczemu (aposematycznemu); obie korzystają z tego, że drapieżniki uczą się unikać wzoru kosztem mniejszej liczby ofiar z każdego gatunku', is_correct: true },
      { id: 'C', text: 'Mimetyzm kryptyczny (kamuflaż): płaszczki (Rajidae) i inne ryby denna są praktycznie niewidoczne na piasku lub wśród kamieni dzięki zdolności do szybkiej zmiany pigmentacji poprzez chromatofory i iridofory skóry', is_correct: true },
      { id: 'D', text: 'Aposematyzm (ubarwienie ostrzegawcze) jest wyłącznie strategią bezkręgowców (owady, pająki); żadne kręgowce nie używają jaskrawych kolorów jako sygnału o jadowitości lub niesmaczności', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) mimikra Batesa: model jadowity (np. Micrurus fulvius) + naśladowca niejadowity (Lampropeltis elapsoides); ewolucja ubarwienia pod presją selekcyjną drapieżników. (B) mimikra Mullera: np. Heliconius (motyle) — wiele gatunków jadowitych ewoluuje ku jednemu wzorowi; drapieżnik uczy się raz i oszczędza wszystkie gatunki. (C) ryby denne: płaszczki (Rajidae), skarpie (Scorpaenidae), flądry (Pleuronectidae): chromatofory (melanofor, ksantofor, erytrofor, iridofor, leucofor) sterowane przez hormony i układ nerwowy; szybka zmiana barwy. (D) fałsz: kręgowce szeroko używają aposematyzmu: żaby trujące (Dendrobatidae — jaskrawe czerwone, niebieskie), salamandry (Salamandra salamandra — czarno-żółte), węże koralowe (jadowite), skunk (Mephitis — czarno-biały); ubarwienie ostrzegawcze = sygnał chemicznych/jadowych właściwości.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.przyst, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących adaptacji termoregulacyjnych kręgowców:',
    options: [
      { id: 'A', text: 'Wymiennik ciepła o przeciwprądzie (countercurrent heat exchange) u ryb polarnych (np. tuńczyk, marlina) i płetwonogich (foki) utrzymuje ciepłe narządy wewnętrzne przez oddawanie ciepła z tętnic do sąsiednich żył przed dotarciem krwi do zimnych kończyn.', is_correct: true },
      { id: 'B', text: 'Gruczoły potowe ssaków są kluczowym mechanizmem termoregulacyjnym; jednak psy nie mają gruczołów potowych na skórze ciała i chłodzą się wyłącznie przez ziajanie (panting) — przyspieszony oddech paruje wodę z błony śluzowej jamy ustnej i języka.', is_correct: true },
      { id: 'C', text: 'Ryby antarktyczne (Notothenioidei) zamarzają w temperaturach poniżej 0°C (ocean: -1,9°C), ponieważ punkty zamarzania ich płynów ciała są wyższe niż temperatura wody morskiej.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: rete mirabile (sieć cudowna) — splot naczyniowy tętnicy i żyły w pobliżu kończyn: krew tętnicza (ciepła, z rdzenia) oddaje ciepło chłodnej krwi żylnej (wraca z kończyn) → retencja ciepła w rdzeniu; u tuńczyka: mięśnie czerwone centralne utrzymywane do 30°C przy oceanie 20°C. B — Prawda: psy mają gruczoły potowe tylko na łapach (poduszkach); pot u psów nie jest efektywnym chłodzeniem; panting: oddech 300-400/min → parowanie ze śluzówki nosa i jamy ustnej; niski koszt energetyczny (rezonans oddechowy 300/min). C — Fałsz: Notothenioidei (np. Trematomus, Pagothenia) NIE zamarzają dzięki ANTYFREEZOM: białka przeciw zamarzające (antifreeze glycoproteins, AFGP) adsorbują do kryształków lodu i hamują ich wzrost (inhibicja rekrystalizacji); punkt zamarzania płynów ciała obniżony do -2,0–-2,2°C, nieznacznie niższy niż ocean (-1,9°C).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── ROZMNAŻANIE ZWIERZĄT (7) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.rozm, question_type: 'single',
    question_text: 'Wskaż prawidłowe dokończenie zdania: Kręgowce jajorodnę (oviparyczne) różnią się od żyworodnych (viviparycznych) tym, że...',
    options: [
      { id: 'A', text: '...składają jaja z zapasem żółtka (yolk) poza ciałem matki; zarodek rozwija się w jaju korzystając z zapasów żółtka i nie jest fizjologicznie połączony z matką przez łożysko', is_correct: true },
      { id: 'B', text: '...zawsze rodzą martwe (nieżywotne) młode i muszą je ożywić przez zewnętrzne ogrzewanie; żyworodne rodzą zawsze żywe i w pełni samodzielne potomstwo', is_correct: false },
      { id: 'C', text: '...wyłącznie rozmnażają się płciowo przez gamety, podczas gdy żyworodne mogą rozmnażać się zarówno płciowo jak i bezpłciowo (przez partenogenezę wewnątrzmaciczną)', is_correct: false },
      { id: 'D', text: '...ich jaja zawierają dwa razy więcej materiału genetycznego niż komórki żyworodnych, ponieważ zapas żółtka wymaga dodatkowych chromosomów do syntezy tłuszczów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Jajorodność (oviparity): składanie jaj (z lub bez skorupki) z żółtkiem; rozwój POZA ciałem matki: ryby, płazy (brak skorupki), gady (pergaminowa lub wapienna), ptaki (twarda wapienna), stekowce. Żyworodność (viviparity): zarodek w ciele matki przez całą ciążę; łożysko lub mleko w ciele matki; ssaki łożyskowe + torbacze (krótka ciąża + torba). Ovoviviparity (jajożyworodność): jaja w ciele matki bez łożyska; żółtko = pokarm; np. niektóre węże (żmija zygzakowata Vipera berus), rekiny (młot, żarłacz biały). Ważna różnica: łożysko = fizjologiczne połączenie matka-płód dla wymiany substancji.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rozm, question_type: 'single',
    question_text: 'Zapłodnienie zewnętrzne i wewnętrzne mają różne konsekwencje biologiczne. Które stwierdzenie POPRAWNIE opisuje te strategie?',
    options: [
      { id: 'A', text: 'Zapłodnienie zewnętrzne (np. u ryb i płazów) wymaga środowiska wodnego do połączenia gamet; w związku z tym produkowane są miliony jaj i plemników, by zrekompensować niską efektywność spotkania gamet i wysoką śmiertelność larw', is_correct: true },
      { id: 'B', text: 'Zapłodnienie wewnętrzne zawsze prowadzi do żyworodności; żadne zwierzę z zapłodnieniem wewnętrznym nie składa jaj — składanie jaj jest możliwe wyłącznie po zapłodnieniu zewnętrznym', is_correct: false },
      { id: 'C', text: 'Płazy mają wyłącznie zapłodnienie wewnętrzne ponieważ ich skóra jest sucha i nieprzepuszczalna; gamety łączą się wewnątrz samicy przed złożeniem jaj do wody', is_correct: false },
      { id: 'D', text: 'Zapłodnienie zewnętrzne jest bardziej efektywne energetycznie niż wewnętrzne, ponieważ nie wymaga produkcji gruczołów dodatkowych u samca ani zachowań zalotnych — gamety łączą się spontanicznie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Zapłodnienie zewnętrzne: gamety uwolnione do wody → przypadkowe zetknięcie → niska efektywność; kompensacja: ogromna liczba jaj (dorsz: 9 milionów jaj/rok); środowisko wodne konieczne (gamety nagie, żyją kilkanaście minut-godzin); synchronizacja przez bodźce zewnętrzne (luna, temperatura, feromony). Zapłodnienie wewnętrzne: gamety łączą się w organizmie samicy; efektywność wysoka → mniej jaj; NIE wyklucza jajorodności: gady, ptaki, stekowce — wewnętrzne zapłodnienie + jaja z skorupką; wymagane: narządy kopulacyjne, zachowania godowe, feromony. Zapłodnienie zewnętrzne: większość ryb kostnych, większość płazów (żaby: ampleksus — samiec wydziela spermę na jaja samicy w wodzie).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rozm, question_type: 'multiple',
    question_text: 'Przeobrażenie (metamorfoza) owadów może być zupełne (holometabolia) lub niezupełne (hemimetabolia). Które stwierdzenia POPRAWNIE opisują te typy? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Holometabolia (przeobrażenie zupełne): jajo → larwa → poczwarka → imago (dorosły); larwa i imago zajmują inne nisze ekologiczne i mają różną dietę; poczwarka jest formą przebudowy (histoliza i histogeneza tkanek)', is_correct: true },
      { id: 'B', text: 'Hemimetabolia (przeobrażenie niezupełne): jajo → nimfa → imago; nimfa przypomina dorosłego, ale jest mniejsza, bez skrzydeł i nierozrodcza; brak stadium poczwarki; przykłady: szarańcza, pluskwy, modliszki, ważki (w wodzie: nimfa = najadat)', is_correct: true },
      { id: 'C', text: 'Podczas poczwarki owada holometabolicznego wszystkie tkanki larwy są całkowicie rozkładane (histoliza) na "zupę komórkową", z której dyski wyobrażeniowe (imaginal discs) odbudowują ciało dorosłego (histogeneza)', is_correct: true },
      { id: 'D', text: 'Ametabolia (brak przeobrażenia) dotyczy wyłącznie owadów pasożytniczych (wszy, pchły); owady wolnożyjące zawsze przechodzą metamorfozę zupełną lub niezupełną', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) holometabolia: ok. 85% wszystkich owadów; Coleoptera (chrząszcze), Lepidoptera (motyle), Diptera (muchówki), Hymenoptera (błonkówki); larwa max. żeruje → poczwarka (chrysalis u motyli, pupa u innych) → imago zdolne do rozrodu. (B) hemimetabolia: Orthoptera (szarańcza, świerszcze), Hemiptera (pluskwiaki), Odonata (ważki — larwa wodna = najadat; dorosły lądowy/powietrzny), Blattodea (karaluchy). (C) w poczwarce: histoliza: enzymy lizosomalnych rozkładają mięśnie, organy larwy → płyn; imaginal discs: skupiska niezróżnicowanych komórek ze stadium larwalnego zachowane przez apoptozę → histogeneza ciała dorosłego; hormony: ekdyzon + hormon juwenilny regulują transformację. (D) fałsz: ametabolia: Apterygota (pierwogonki, skoczogonki, rybiki — Lepisma) — wykluwają się jako miniaturowe kopie dorosłych; nie są pasożytami.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rozm, question_type: 'single',
    question_text: 'Metamorfoza żaby (Rana) obejmuje przejście od larwy wodnej (kijanki) do dorosłego płaza. Które zestawienie zmian anatomicznych podczas metamorfozy jest POPRAWNE?',
    options: [
      { id: 'A', text: 'Zanik ogona (apoptoza); zanik skrzeli i wykształcenie płuc (obecnych u kijanki jako zalążki); wydłużenie i wykształcenie kończyn (tylnych jako pierwszych, na końcu przednich); zmiana diety (roślinożerna kijanka → drapieżna żaba); zmiana układu pokarmowego', is_correct: true },
      { id: 'B', text: 'Wydłużenie ogona do pełnej długości dorosłej żaby; wykształcenie skrzeli zewnętrznych zamiast wewnętrznych; zanik kończyn (dorosła żaba nie ma kończyn — porusza się jak wąż)', is_correct: false },
      { id: 'C', text: 'Kijanka rodzi się z czterema kończynami i płucami od razu, a jej ogon jest wyłącznie strukturą ozdobną bez funkcji lokomotorycznej, zanikającą przed dojrzałością płciową', is_correct: false },
      { id: 'D', text: 'Żaba dorosła kontynuuje oddychanie wyłącznie skrzelami przez całe życie, a płuca wykształcone podczas metamorfozy służą wyłącznie do wydawania odgłosów (rezonatory)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Metamorfoza żaby (hemimetabolia wtórna / prometamorfoza): (1) Kijanka: skrzela zewnętrzne → skrzela wewnętrzne; ogon jako narząd ruchu; jelito długie (roślinożerność: spiralny jelito); brak kończyn. (2) Metamorfoza (hormon tarczycy T3/T4 steruje): kończyny tylne wykształcają się pierwsze (z pąków mezodermalnych), potem przednie (przebijają przez skórę); ogon: apoptoza komórek indukowana przez T3; skrzela zanikają; płuca rozwijają się (były jako pęcherzyki od wczesnych stadiów); jelito skraca się (drapieżność). (3) Dorosła żaba: oddychanie płucno-skórne; dieta: bezkręgowce (owady, dżdżownice); skóra wilgotna, naga. Hormon juwenilny: opóźnia metamorfozę; brak endogennego HJ → T3/T4 triggeruje metamorfozę.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rozm, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują opieki rodzicielskiej u kręgowców? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Opieka rodzicielska jest najsilniej rozwinięta u ptaków i ssaków (endotermy), które inwestują dużo energii w małą liczbę potomków — strategia K (wysoka inwestycja rodzicielska, niska płodność, długie życie)', is_correct: true },
      { id: 'B', text: 'Wśród ryb opieka rodzicielska jest rzadka, ale istnieje: pielęgnice (Cichlidae) broną jaj i młodych w pysku (mouthbrooding); samiec konika morskiego (Hippocampus) nosi jaja w torbie brzusznej', is_correct: true },
      { id: 'C', text: 'U ptaków wysiadywanie jaj jest wyłącznie zadaniem samicy; samce nigdy nie uczestniczą w inkubacji ani karmieniu piskląt — jest to jedna z kluczowych różnic między ptakami a ssakami', is_correct: false },
      { id: 'D', text: 'Gniazdowniki (nidifugous young) są bardziej zaawansowane w rozwoju w momencie wyklucia niż zagniezdniki (nidicolous young): gniazdowniki (kury, kaczki) są od razu samodzielne ruchowo, zagniezdniki (wróble, drapieżniki) są ślepe i bezradne przy wykluciu', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) K-strategia: duże ssaki, ptaki; mała liczba potomków, duże nakłady rodzicielskie, długa opieka, niska śmiertelność; r-strategia (ryby, owady): dużo potomków, brak opieki, wysoka śmiertelność. (B) Cichlidae: Oreochromis (tilapia) — mouthbrooding; pielęgnica anielska (Pterophyllum): jaja przyklejone do liścia, oboje rodzice pilnują; Hippocampus: torba brzuszna samca — jaja inkubowane 10–14 dni, samiec rodzi żywe koniki. (C) fałsz: wiele gatunków ptaków — oboje rodziców wysiadują: albatrosy (naprzemienne zmiany po tygodnie), pingwiny cesarskie (samiec 65 dni bez jedzenia), myszołowy, orły, papugi; u niektórych samce wyłącznie: emu, nandu, kazuar, zimorodek (niektóre gatunki). (D) prawda: nidifugous (gniazdowniki): kury, kaczki, łabędzie, kiwi → po kilku godzinach chodzą i żywią się; nidicolous (zagniezdniki): wróbel, gołąb, drapieżne ptaki → ślepe, bezpióre, karmione przez rodziców tygodniami.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rozm, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących alternacji pokoleń i partenogenezy u zwierząt:',
    options: [
      { id: 'A', text: 'Metageneza (alternacja pokoleń) polega na naprzemiennym pojawianiu się pokolenia płciowego (gamet) i bezpłciowego (sporofitu) — termin ten dotyczy wyłącznie roślin; u zwierząt analogicznym zjawiskiem jest metageneza polipów i meduz (np. u chełbi modrej Aurelia aurita): polip (bezpłciowe, rozmnażanie przez pączkowanie) naprzemiennie z meduzą (płciowe, gamety).', is_correct: true },
      { id: 'B', text: 'Partenogeneza (dzieworództwo) to rozwój niezapłodnionego jaja bez udziału plemnika; u bezkręgowców i kręgowców (np. Varanus komodoensis — warankomodo, niektóre węże) pozwala na rozmnażanie w izolacji od samców, ale produkuje wyłącznie samce (ponieważ jajo ma tylko jeden zestaw chromosomów płci matki).', is_correct: false },
      { id: 'C', text: 'Cykl pokoleniowy mszyc (Aphididae) obejmuje partenogenezę (wiosna-lato: bezkrzydle samice rodzą żywe larwy bez zapłodnienia) oraz rozmnażanie płciowe (jesień: pojawiają się samce i samice płciowe, zapłodnienie, jaja zimujące) — przykład cyklicznej partenogenezy sezonowej.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: metageneza Aurelia aurita: planula (larwa wolnopływająca) → scyfistoma (polip) → strobila (pączkowanie) → efyra → meduza (osobnik płciowy: gamety → zigota → planula). Termin "metageneza" u zwierząt = analogia do "alternacji pokoleń" roślin; u roślin: sporofit diploidalny → spory → gametofit haploidalny → gamety. B — Fałsz: partenogeneza produkuje różne płcie zależnie od mechanizmu: (1) thelytoky: wyłącznie samice (np. mszyce latem, Komodo: diploidalne jaja przez endomitosis → ZW → samice); (2) arrhenotoky: wyłącznie samce (pszczoły: niezapłodnione jaja = trutnie); u warana Komodo: ZZ (samce), ZW (samice): z jaja ZW przez dublikację chromosomów → ZZ lub WW; ZZ = samce (WW nieżywotne). C — Prawda: mszyce: wiosna — zapłodnione jajo zimujące → bezskrzydła samica-fundatrix → partenogeneza (viviparous, bez zapłodnienia) przez lato; jesień: termin skrócenia dnia → pojawienie się samców i samic płciowych → kopulacja → jaja zimujące.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.rozm, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących strategii reprodukcyjnych zwierząt (teoria K i r):',
    options: [
      { id: 'A', text: 'Strategia r (r-selection): organizmy inwestują w dużą liczbę potomków o małej masie ciała i krótkim czasie do dojrzałości; niska przeżywalność każdego potomka, brak opieki rodzicielskiej; środowiska niestabilne i nieprzewidywalne (opportunistic strategists).', is_correct: true },
      { id: 'B', text: 'Strategia K (K-selection): niska płodność, duże nakłady na każdego potomka, długa opieka rodzicielska, duże rozmiary ciała, długa żywotność, późna dojrzałość płciowa; środowiska stabilne bliskie pojemności środowiska (K = carrying capacity).', is_correct: true },
      { id: 'C', text: 'Strategia r i K to bezwzględne kategorie — każdy gatunek należy wyłącznie do jednej z nich; żaden gatunek nie może wykazywać cech pośrednich ani zmieniać strategii w zależności od warunków środowiskowych.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: r-strategia: owady, chwasty, myszy, szczury; szybkie zasiedlanie nowych nisz; duża zmienność środowisk; wysoka liczebność przy niskiej zasobach → selekcja na maksymalny przyrost (r = intrinsic rate of increase). B — Prawda: K-strategia: duże ssaki (słonie, wieloryby, naczelne), ptaki drapieżne, wielkie rekiny; długowieczność; niska śmiertelność dorosłych; populacja blisko K (pojemność środowiska); odporna na zaburzenia. C — Fałsz: r-K kontinuum, nie dychotomia; wiele gatunków wykazuje cechy pośrednie (seagull, drobne ssaki z długim życiem); gatunek może zmieniać strategię zależnie od zagęszczenia i jakości środowiska (phenotypic plasticity). Współczesna teoria: life history theory uwzględnia wiele wymiarów (np. iteroparia vs semelparia).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding batch 6 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
