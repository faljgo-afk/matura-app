// Seed batch 6/7 — Fizjologia roślin
// Ruchy roślin (2) + Kiełkowanie i spoczynek (5) + Fotoperiodyzm (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'

const S = {
  ruchy:       '550d7c0b-6b30-4527-93d7-aab33d62dfb1',
  kielkowanie: '203f922f-00e6-458f-8239-5614e0777ff1',
  fotop:       'c426d845-182c-48d9-b420-bdda8dc95c2a',
}

const questions = [

  // ── RUCHY ROŚLIN (2) ──────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.ruchy, question_type: 'single',
    question_text: 'Turgor to podstawowy mechanizm ruchów nastycznych. Które stwierdzenie POPRAWNIE opisuje mechanizm ruchów hydrostatycznych u roślin?',
    options: [
      { id: 'A', text: 'Wzrost turgoru w komórkach motorycznych (pulvinus) wywołany napływem jonów K⁺ (i wody za nimi) powoduje wydłużenie i rozrost; spadek turgoru po odpływie K⁺ powoduje skroczenie; ruch odwracalny dzięki elastycznej ścianie komórkowej; mechanizm niezależny od nowego wzrostu komórkowego', is_correct: true },
      { id: 'B', text: 'Ruchy turgorowe wymagają podziałów komórkowych w pulvinus; nowe komórki rosną asymetrycznie po jednej stronie → skrzywienie; proces trwa kilka dni i jest nieodwracalny; rośliny nie mogą szybko odwrócić ruchu bez syntezy DNA', is_correct: false },
      { id: 'C', text: 'Turgor zależy wyłącznie od temperatury: wysokie temperatury powodują maksymalny turgot i pełne otwarcie; niskie temperatury eliminują turgor i powodują zamknięcie; jony potasowe nie uczestniczą w regulacji turgoru', is_correct: false },
      { id: 'D', text: 'Ruchy turgorowe zachodzą wyłącznie w aparatach szparkowych; żadne inne komórki roślinne poza komórkami szparkowymi nie mogą zmieniać turgoru; mimoza, koniczyna i inne rośliny o ruchach nastycznych poruszają się przez inne mechanizmy (nie turgor)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ruchy turgorowe (hydrostatyczne): odwracalne, szybkie (sekundy–minuty); mechanizm: kanały K⁺ (KAT1, GORK) + H⁺-ATPazy w błonie komórek motorycznych; (1) OTWARCIE / wydłużenie: H⁺-ATPaza → pompuje H⁺ na zewnątrz → hiperpolaryzacja błony → kanały KAT1 → K⁺ napływa do komórki → potencjał osmotyczny spada → woda napływa (osmoza) → turgor wzrasta → komórka pęcznieje; (2) ZAMKNIĘCIE / skrócenie: kanały GORK (outward-rectifying K⁺) → K⁺ wypływa → woda odpływa → turgor maleje → komórka się kurczy. Pulvinus: wyspecjalizowany staw u podstawy ogonka liściowego lub ulotki (Mimosa, Robinia, Oxalis); amplituda ruchów: Mimosa pudica – mechanostymuacja → działanie potencjału czynnościowego → fala depolaryzacji przez symplast → masowe wypływanie K⁺ z komórek motorycznych → składanie ulotki.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ruchy, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują taksje (ruchy całego organizmu) u roślin niższych lub gamety? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Chemotaksja: ruchy ukierunkowane chemicznie; plemniki paproci (Dryopteris) i mchów przyciągane przez jabłczany wydzielane przez archegonie; u roślin nagonasiennych (Ginkgo biloba, Cycas) — ruchliwe plemniki z rzęskami odpowiadają na chemotaksję w osłonie pyłkowej', is_correct: true },
      { id: 'B', text: 'Fototaksja u glonów: Chlamydomonas (Chlorophyta) ma stigmę (plamkę oczną) z karotenoidami i rodopsyną; fototaksja dodatnia (ku światłu) przy słabym oświetleniu, ujemna (od światła) przy bardzo silnym; regulatory: fosfataza CrPP2A w stigmie', is_correct: true },
      { id: 'C', text: 'Taksje u roślin nasiennych: drzewo dębowe wykonuje taksję ku słońcu przemieszczając cały pień w ciągu doby; taksje u drzew są szybsze niż u glonów ze względu na większą masę ciała; taksje i tropizmy to synonimy opisujące ten sam rodzaj ruchu', is_correct: false },
      { id: 'D', text: 'Magnetotaksja: bakterie magnetotaktyczne (Magnetococcus, Magnetospirillum) zawierają magnetosomy (kryształy Fe₃O₄ lub FeS) tworzące biologiczny kompas; poruszają się wzdłuż linii pola magnetycznego Ziemi (ku biegunowi namagnesowania)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) chemotaksja spermy: mchy (Marchantia, Funaria): jabłczany (malate) → chemotaksja; paprocie (Pteridium, Dryopteris): D(-)-jabłczan + wielopierścieniowe aminokwasy; Ginkgo biloba, Cycas (nagonasienne): jedyne nagonasienne z ruchliwymi plemnymi (wielorzęskowe jak pierwotniaków) → ewolucja przejściowa; Ginkgo: historyczna "żywa skamieniałość". (B) Chlamydomonas: stigma = organizm organellum photoreceptora + rzęski; kanalripetaksja; channelrhodopsin (ChR1, ChR2) → kanał jonowy kontrolowany przez światło → kontrola ruchu rzęsek; pozytywna (słabe światło) → ekspozycja chloroplastów; negatywna (intensywne) → ucieczka od fotouszkodzeń; zastosowanie: optogenetyka (ChR2 w neuronach badaczy Deisserotha, Nagela). (C) fałsz: drzewa NASIENNE nie wykonują taksji (taksja = ruch całego organizmu z miejsca na miejsce); drzewa wykonują TROPIZMY (skrzywienia rosnące, wzrostowe, nieodwracalne) lub ruchy turgorowe; taksje ≠ tropizmy: taksja = lokomotoryczny ruch całego organizmu (= unicellular or motile organisms); tropizm = ukierunkowany wzrost osiadłych roślin. (D) Magnetococcus marinus RS-1: magnetosomy (łańcuch kryształów Fe₃O₄); utleniane glony z północnej półkuli: w kierunku dna (bieguny N-S pola → skierowanie ku osadowi bogatemu w H₂S); odkrycie: Salvatore Bellini 1963, Richard Blakemore 1975 (Science).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── KIEŁKOWANIE I SPOCZYNEK (5) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'single',
    question_text: 'Spoczynek nasion (dormancja) jest adaptacją ewolucyjną. Jakie mechanizmy utrzymują nasiona w stanie spoczynku i co je przełamuje?',
    options: [
      { id: 'A', text: 'Mechanizmy dormancji: (1) twarda łupina nasienna (fizyczna, np. Leguminosae) nieprzepuszczalna dla wody; (2) mechaniczna (korzeń zarodkowy nie może przebić osłon); (3) chemiczna (ABA hamuje kiełkowanie, absorbuje ga + gibereliny); (4) fotodormancja (nasiona wymagają konkretnego fotoperiodu / czerwonego światła przez fitochrom); przełamanie: stratyfikacja zimna, skaryfikacja, wymywanie ABA wodą', is_correct: true },
      { id: 'B', text: 'Dormancja nie istnieje u roślin okrytonasiennych; wszystkie nasiona Angiospermae kiełkują natychmiast po zbiorze bez żadnych wymagań dotyczących temperatury, wilgoci ani światła; nasiona nie zawierają inhibitorów kiełkowania', is_correct: false },
      { id: 'C', text: 'Spoczynek nasion jest utrzymywany wyłącznie przez wysoką temperaturę; gdy temperatura spada poniżej 30°C, nasiona automatycznie kiełkują; chłodne przechowywanie przedłuża kiełkowanie, a ciepłe hamuje', is_correct: false },
      { id: 'D', text: 'Jedynym czynnikiem przełamującym dormancję jest mechaniczne usunięcie łupiny; gibereliny, światło i woda nie mają wpływu na kiełkowanie; stratyfikacja zimna jest stosowana wyłącznie u zwierząt (hibernacja), nie u roślin', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Typy dormancji: (1) PIERWOTNA (primary): wbudowana przed rozproszeniem; (2) WTÓRNA (secondary): nabyta po rozproszeniu w złych warunkach. Mechanizmy: (a) egzogenna dormancja fizyczna: twarda, nieprzepuszczalna testa (rodzina Fabaceae, Malvaceae, Convolvulaceae) — kiełkowanie dopiero po skaryfikacji mechanicznej (żołądek ptaka, ogień, przemrożenie) lub chemicznej (H₂SO₄); (b) mechaniczna: perikarp zbyt wytrzymały; (c) chemiczna: inhibitory w owocni (tomaty, winogrono, owoce cytrusowe) — ABA, fenole, kumaryny; wymywane przez deszcz/stratyfikację mokrą; (d) morfologiczna: niedojrzały zarodek przy rozproszeniu — dojrzewa po zbiorze; (e) fotodormancja: FITOCHROM (fitochrom B) → nasiona latuccis, Arabidopsis wymagają czerwonego świata (660 nm) → Pfr aktywuje kiełkowanie; ciemność → Pr inhibitująca. PRZEŁAMANIE: stratyfikacja zimna (vernalizacja nasion) 2–5°C × 30–90 dni → usunięcie ABA + aktywacja GA; gibereliny → α-amylaza → mobilizacja skrobi; skaryfikacja (mechaniczna, kwasowa); wymywanie; płom (pyrophytes: Pinus, Ceanothus).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'multiple',
    question_text: 'Podczas kiełkowania nasienia zachodzą złożone procesy biochemiczne. Które z poniższych procesów POPRAWNIE opisują etapy kiełkowania? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Imbibing (nasiąkanie): nasienie absorpcja wody (do 200% masy) przez wodę przepływającą przez testa i mikropyle; reaktywacja oddychania; nasienie pęcznieje → wzrost wewnętrznego ciśnienia → pęknięcie łupiny; inicjacja transkrypcji genów kiełkowania', is_correct: true },
      { id: 'B', text: 'Mobilizacja rezerw: aleurony (w pszenicy: warstwa aleuronowa endospermu) pod wpływem giberelin (GA₃) wydzielają α-amylazy i proteazy → trawienie skrobi (endosperm) → maltoza → glukoza; u roślin oleistych: lipaza → kwasy tłuszczowe → glioksysom → cykl glioksylowy → glukoneogeneza', is_correct: true },
      { id: 'C', text: 'Elongacja korzenia zarodkowego (radikula): wydzielanie enzymu expansin (ekspansyny) rozluźniają sieć hemicelulozowo-pektynową ściany komórkowej; wzrost turgoru → elongacja komórek; radikula przebija łupinę jako pierwsza (geotropizm dodatni)', is_correct: true },
      { id: 'D', text: 'Fotosynteza jest głównym źródłem energii podczas kiełkowania nasienia; chlorofil jest aktywny w endospermie i liścieniach od chwili wchłonięcia pierwszej wody; rośliny nie posiadają żadnych rezerw energetycznych w nasieniu — są całkowicie zależne od światła od chwili kiełkowania', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) imbibicja: faza I (szybka, fizyczna — koloidalna absorpcja); faza II (plateau — spoczynek metaboliczny, aktywacja enzymów); faza III (ponowne nasiąkanie = wzrost zarodka); aktywacja mitochondriów, rybosomów, transkrypcja mRNA przechowywanych (stored mRNA = maternal mRNA transkrybowane w nasieniu). (B) mobilizacja u monocots: GA₃ (gibereliny zarodka) → aleurona → GA receptory (GID1) → usunięcie DELLA represora → HvGAMYB → α-amylaza HvAMY2; u dikots (rycinus, rzepak, słonecznik): glioksysomy (peroksysomy wyspecjalizowane u roślin kiełkujących) → lipaza → β-oksydacja → octan → cykl glioksylowy (izocytryniaza, lialaza malatu) → jabłczan → PEP → glukoza; cykl glioksylowy nie działa u zwierząt (brak izocytryniazy). (C) expansiny: odkryte przez Cosgrove (Penn State); zakwaszenie ściany (acid growth theory: H⁺-ATPazy + IAA) → ekspansyny aktywne pH 4,5 → rozerywanie wiązań H między mikrofibrilami celulozowymi a ksyloglukinem (hemiceluloza); brak hydrolazy (nie trawią polisacharydów) — tylko suwaki mechaniczne → pełzanie ściany. (D) fałsz: nasiona zawierają rezerwy energetyczne: skrobia (groch, pszenica), tłuszcze (rzepak, słonecznik, rycinus, kokos), białka (soja) + hemicelulozy ścian; fotosynteza zaczyna się dopiero gdy liścień zielenieje (chloroplasty rozwijają się); kiełkowanie heterotroficzne',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących epikotyla i hipokotyla w kiełkowaniu:',
    options: [
      { id: 'A', text: 'Kiełkowanie nadziemne (epigeialne): liścienie wyniesione ponad powierzchnię gleby (np. fasola, ogórek, rzodkiewka); hipokotyl wydłuża się i wynosi liścienie ku górze; liścienie fotosyntetyzują po zazielenieniu i są stopniowo zastępowane przez liście właściwe.', is_correct: true },
      { id: 'B', text: 'Kiełkowanie podziemne (hypogeialne): liścienie pozostają pod ziemią (np. groch, kukurydza, dąb); epikotyl (a nie hipokotyl) wydłuża się i wynosi łodyżkę z liśćmi ku górze; liścienie pełnią rolę organu magazynującego składniki odżywcze, nie fotosyntezy.', is_correct: true },
      { id: 'C', text: 'Hak szczytowy (coleoptyl hook) u jednoliściennych odpowiada haczykowatemu zagięciu hipokotyla u dwuliściennych; oba mechanizmy chronią wierzchołek wzrostu przed uszkodzeniami przy przebijaniu się przez glebę; u jednoliściennych coleoptyl otacza liść lancetowaty (plumula).', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: epigeal = epi (nad) + geo (ziemia); fasola (Phaseolus vulgaris): łuk hipokotylu → prostuje się → wynosi cotyledony; cotyledony → chloroplasty → fotosynteza 7–14 dni; ogórek, słonecznik, rzodkiew (Arabidopsis). B — Prawda: hypogeal = hypo (pod) + geo; groch (Pisum sativum): epikotyl wydłuża się w "hak" (plumular hook) → prostuje się nad glebą → cotyledony zostają pod ziemią jako magazyn skrobi + białek; kukurydza (monocot): coleoptyl + coleorrhiza; Quercus (dąb): masywne cotyledony pełne skrobi → pod ziemią. C — Prawda: apical hook u dicots: hipokotyl zakrzywiony → IAA asymetria (wyższa stężenie IAA na stronie wewnętrznej → hamowanie elongacji → zagięcie); prostowanie w świetle: fitochrom + kryptochrom → symetria IAA; COLEOPTYL u monocots (np. kukurydza, zboża): pierwsze organellum wyniesione z ziemi = cylinder chroniący liść i pąk pierwotny; odkrycie auksyn: Boysen-Jensen 1913, Went 1926 — doświadczenia z koleoptilem owsa (Avena sativa).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'single',
    question_text: 'Vernalizacja jest procesem niezbędnym do kwitnienia niektórych roślin. Na czym polega i jakie są jego molekularne podstawy u Arabidopsis thaliana?',
    options: [
      { id: 'A', text: 'Vernalizacja: ekspozycja rośliny na długotrwałe chłodzenie (2–10°C przez kilka tygodni) → epigenetyczna modyfikacja chromatyny (metylacja H3K27me3 przez PRC2) → wyciszenie genu FLC (Flowering Locus C) → usunięcie represora kwitnienia → możliwość kwitnienia na wiosnę po ciepłocie', is_correct: true },
      { id: 'B', text: 'Vernalizacja to odpowiedź rośliny na długie noce zimowe; polega na akumulacji białka FT (Flowering Locus T) w liściach podczas zimy; FT przemieszcza się floem do merystemu wierzchołkowego i inicjuje kwitnienie natychmiast zimą, a nie na wiosnę', is_correct: false },
      { id: 'C', text: 'Vernalizacja zachodzi wyłącznie w korzeniach; zimno rejestrowane jest wyłącznie przez komórki merystemu korzeniowego; informacja o zimniku nie jest przekazywana do pędów ani wierzchołka wzrostu; proces nie dotyczy ekspresji genów flory', is_correct: false },
      { id: 'D', text: 'Vernalizacja polega na syntezie nowych chromosomów przy niskiej temperaturze; każdy rok zimowania dodaje jeden dodatkowy chromosom; rośliny wernalizowane mają więcej DNA niż niewernalizowane; chromosomy po vernalizacji zawierają geny kwitnienia których wcześniej nie było', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Vernalizacja (Lysenko 1928; ciekawe: Lysenko użył błędnie w polityce radzieckiej): zbóż ozimych (żyto, pszenica ozima), buraków, Arabidopsis (ecotypy zimowe: Col-FRI, Ler). Molekularnie (Arabidopsis): (1) FLC (MADSbox TF) = represor kwitnienia: hamuje SOC1 + FT → brak kwitnienia bez wernalizacji; (2) chłód (6–8 tygodni 4°C) → indukcja ncRNA COLDAIR + COOLAIR (antysensowy) → rekrutacja PRC2 (Polycomb Repressive Complex 2: CLF, SWN, VRN2, FIE) → tri-metylacja histonu H3K27 na FLC locus → wyciszenie FLC; (3) ciepło wiosenne → FT (florigen) w liściach → flo transport (floemem) → pąk szczytowy → SOC1 + AP1 → inicjacja kwiatu; (4) pamięć epigenetyczna: H3K27me3 utrzymana przez podziały komórkowe do kwitnienia (nie odwraca się co sezon); resetting: zarodek = brak metylacji H3K27me3 na FLC → każde pokolenie musi wernalizować od nowa. Zastosowanie: pszenica ozima vs. jara; rytm roczny upraw.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują wpływ warunków środowiskowych na kiełkowanie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Temperatura kiełkowania: każdy gatunek ma optimum temperaturowe (Tmin, Topt, Tmax); pszenica kiełkuje w 4–35°C (opt. 20–25°C); kukurydza: min. 8–10°C (chłodniejszy → zamrożenie tkanek); ogórek i papryka tropikalne: min. 13–15°C; zbyt wysoka temperatura → inaktywacja enzymów nasion', is_correct: true },
      { id: 'B', text: 'Nasiona fotoblastyczne: nasiona wymagające światła do kiełkowania (np. Arabidopsis, sałata Lactuca sativa, tytoń Nicotiana tabacum, begonia) aktywowane przez czerwone światło (660 nm) → aktywacja fitochromu B → produkcja Pfr → inicjacja kiełkowania; hamowane przez dalekie czerwone (730 nm → Pr)', is_correct: true },
      { id: 'C', text: 'Nasiona ujemnie fotoblastyczne: kiełkują wyłącznie w ciemności (np. cebula Allium cepa, niecierpek, fasola szparagowa Phaseolus coccineus); światło hamuje ich kiełkowanie przez aktywację Pfr; sadzone za głęboko kiełkują lepiej niż w płytkiej warstwie gleby', is_correct: true },
      { id: 'D', text: 'Tlen jest zbędny podczas kiełkowania; nasiona kiełkują równie efektywnie w warunkach beztlenowych (azot, CO₂) jak w powietrzu; oddychanie beztlenowe zapewnia wystarczającą energię do elongacji korzenia i wzrostu siewki', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) temperatura: Cardinal temperatures (T_min, T_opt, T_max) — termoperiodyzm kiełkowania: pszenica ozima kiełkuje nawet w 1–2°C (adaptacja do wiosennego kiełkowania); kukurydza (Zea mays): chilling sensitive → poniżej 10°C: wolna elongacja, podatność na Pythium (grzyb); ogórek, arbuz, papryka: ciepłolubne C3/C4 → wymagają podgrzewania gleby (folia mulchowa). (B) nasiona fotoblastyczne dodatnie: sałata (Lactuca sativa Grand Rapids): klasyczny eksperyment Flinta i McAlister (1945) → 660 nm promuje, 730 nm hamuje → odkrycie fitochromu; Borthwick & Hendricks 1952 (USDA); Arabidopsis: PIL5 (PIF3-Like 5) = Pfr-regulowany represor → degradowany przez Pfr → kiełkowanie; tytoń: fotoblastyczny → sieje się płytko (1 mm gleby). (C) fotoblastyczne ujemne: cebula, cykoria, niecierpek (Impatiens), Phacelia tanacetifolia; sadzone głębiej (6–8 cm) kiełkują niezakłócone ciemnością; Allium: kiełkuje nocą lub głęboko w glebie. (D) fałsz: tlen NIEZBĘDNY: kiełkowanie oddycha głównie tlenowo (ATP z glikolizy to tylko 2 ATP/glu vs 36 ATP w aeobowym); ryż (Oryza sativa) tolertuje ograniczone beztlenienie (kolenchyma aerenchyma) ale preferuje powietrze; zamoczenie gleby > 48h → hypoxia → zahamowanie kiełkowania; nasiona (wyjątek: ryż kiełkujący pod wodą — anaerobic germination (AG) z etanolem).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── FOTOPERIODYZM (3) ─────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.fotop, question_type: 'single',
    question_text: 'Rośliny długiego dnia (RDD), rośliny krótkiego dnia (RKD) i rośliny dnia obojętnego (RDO) różnią się wymaganiami fotoperiodycznymi. Które stwierdzenie POPRAWNIE opisuje te różnice?',
    options: [
      { id: 'A', text: 'RDD: kwitną gdy długość dnia przekracza krytyczny minimum (>12–14 h światła); przykłady: szpinak (Spinacia oleracea), rzepak (Brassica napus), pszenica, cebula; RKD: kwitną gdy długość dnia jest krótsza od krytycznego maksimum (<12 h); przykłady: chryzantema, truskawka, soja, ryż, poinsecja (Euphorbia pulcherrima); kluczowe: mierzona jest długość NOCY, nie dnia', is_correct: true },
      { id: 'B', text: 'RDD kwitną wyłącznie zimą gdy dnie są krótkie; RKD kwitną latem gdy dnie są długie; rośliny obojętne (RDO) kwitną wyłącznie przy dokładnie 12 godzinach dnia i nocy; żadna roślina nie może kwictnąć o każdej porze roku niezależnie od fotoperiodu', is_correct: false },
      { id: 'C', text: 'Fotoperiodyzm jest regulowany wyłącznie przez chlorofil a; fitochrom nie uczestniczy w percepcji długości dnia; chloroplasty w liściach liczą godziny ciemności przez akumulację cAMP', is_correct: false },
      { id: 'D', text: 'Wszystkie rośliny uprawne są roślinami dnia obojętnego (RDO); żadna roślina uprawna nie wykazuje wrażliwości fotoperiodycznej; fotoperiodyzm opisano wyłącznie u roślin dziko żyjących bez żadnego znaczenia dla rolnictwa', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fotoperiodyzm (Garner & Allard 1920, USDA: Maryland Mammoth tobacco): krytyczna długość nocy (Critical Night Length, CNL), nie dnia. (1) RDD (Long-Day Plants): kwitną gdy noc < CNL (ok. 8–9 h ciemności); inaczej: dzień > minimum; szpinak (>14 h dnia → kwitnie latem); cebula (>13 h); rzodkiewka, pszenica jara, koniczyna; zastosowanie: uprawa szpinaku tylko wiosna/lato. (2) RKD (Short-Day Plants): kwitną gdy noc > CNL (≥10–11 h ciemności); inaczej: dzień < maksimum; chryzantema (CNL ≈ 14 h, kwitnie jesień gdy noc > 14 h); soja (CNL ≈ 14–16 h); ryż, konopie, truskawka; poinsecja: kwitnie/czerwieni liście przy 14 h ciemności (żłobki/Boże Narodzenie); PRZERYWANIE NOCY (night break): krótki impuls czerwonego światła (660 nm, Pfr) w środku nocy → zakłóca mierzenie ciemności → RKD nie kwitnie (stosowane w ogrodnictwie chryzantem do sterowania kwitnieniem). (3) RDO: pomidor, kukurydza (nowoczesne odmiany), ogórek, ryż indiański; kwitną niezależnie od fotoperiodu.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.fotop, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących roli fitochromu w fotoperiodyzmie:',
    options: [
      { id: 'A', text: 'Fitochrom istnieje w dwóch formach wzajemnie przekształcalnych: Pr (pochłania czerwone λ=660 nm → konwersja do Pfr) i Pfr (pochłania dalekie czerwone λ=730 nm → konwersja do Pr); Pfr jest formą biologicznie aktywną — stymuluje kwitnienie RDD i hamuje kwitnienie RKD.', is_correct: true },
      { id: 'B', text: 'Percepcja fotoperiodu zachodzi wyłącznie w korzeniu; liście są pozbawione fitochromu; sygnał fotoperiodyczny przekazywany jest z korzenia do merystemu wierzchołkowego przez drewno (ksylem) w postaci jonów mineralnych.', is_correct: false },
      { id: 'C', text: 'Florigen jest rzeczywistym sygnałem kwitnienia przemieszczającym się floem z liści do wierzchołka wzrostu; u Arabidopsis i większości roślin okrytonasiennych tym florigenom jest białko FT (Flowering Locus T) kodowane przez gen FT; FT aktywuje TF FD → kompleks FT-FD aktywuje geny kwitnienia (AP1, SOC1).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: fitochrom (Borthwick, Hendricks, Butler, USDA 1960) = chromoproteina (apo-fytochrom + chromofor: fitoklobilinina — tetrapyrol); phyA (ciemność/promieniowanie dalekie czerwone) + phyB (główny mediator odpowiedzi światłoczerwonym); phyB aktywowany 660 nm → Pfr → transport do jądra → degradacja PIFs (PHYTOCHROME INTERACTING FACTORs — TF bZIP) → de-represja genów kiełkowania i kwitnienia; ciemność/730 nm → Pfr → Pr (termalny powrót lub fotoreversja). B — Fałsz: percepcja LIŚCIE (zwłaszcza dojrzałe liście z siecią przewodzącą); doświadczenia: Hamner & Bonner 1938 — tylko liść naświetlony w innym fotoperiodzie niż reszta rośliny + rozszczepiona roślina → liść "wystarczy"; okulizacja liści → sygnał chemiczny przez floem; ODKRYCIE: Chailakhyan 1936 (odkrycie florigenu jako substancji chemicznej). C — Prawda: FT = florigen: Corbesier et al. 2007 (Science); Tamaki 2007 (Science, ryż: Hd3a = ryżowy FT); protein FT mRNA → protein FT syntetyzowany w komórkach towarzyszących floemu liścia → transport symplastem → floemem → pąk szczytowy; FT + FD (bZIP w pąku) → kompleks → aktywacja LFY, AP1, SOC1 → inicjacja kwiatu; temperatura (vernalizacja) + fotoperiod (FT) integracja przez SOC1.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.fotop, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują praktyczne zastosowania wiedzy o fotoperiodyzmie w ogrodnictwie i rolnictwie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Chryzantemy (RKD): hodowla pod sztucznym doświetlaniem latem (długie naturalne dnie → dorośnie wegetatywnie); zimą: zaciemnianie folią czarną (skrócenie dnia < CNL) → kwitnienie; produkcja kwiatów na każde święta przez manipulację fotoperiodycznie', is_correct: true },
      { id: 'B', text: 'Truskawka (Fragaria × ananassa): gatunki tradycyjne (np. Elsanta) = RKD → kwitnienie jesień/wiosna (krótki dzień); odmiany "remontantowe" = dnia obojętnego → kwitną przez całe lato; hodowla odmiany DNO umożliwia zbieranie truskawek od maja do przymrozków', is_correct: true },
      { id: 'C', text: 'Soja (Glycine max): bardzo wrażliwa fotoperiodycznie (RKD); odmiany przypisane do stref szerokości geograficznych (maturity groups 00–X); przeniesienie odmiany z południa na północ → za długie dnie → brak kwitnienia aż do jesieni lub brak kwitnienia w ogóle; globalne ocuplenie zmienia rozkład maturity groups', is_correct: true },
      { id: 'D', text: 'Doświetlanie sztuczne (LED grow lights, T5 fluorescent) nie wpływa na fotoperiodyzm roślin; fotoperiod może być regulowany wyłącznie przez ekspozycję na naturalne słońce; kwitnienie pod sztucznym oświetleniem wymaga specjalnego "fotoperiodowego promieniowania" niedostępnego w sztucznych źródłach światła', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) chryzantemy: Chrysanthemum morifolium = RKD (CNL ≈ 14 h); PRZERYWANIE NOCY: impuls czerwonego (czerwone LED 660 nm) 2–3 min w środku nocy → Pfr → hamuje kwitnienie → można utrzymywać w fazie wegetatywnej przez lato; ZACIEMNIANIE: czarna folia/farba od 16:00 do 8:00 (16 h noc) → inicjacja kwitnienia w dowolnym terminie; marszrutyzacja produkcji (Easter, Boże Narodzenie, Walentynki). (B) truskawki: popularne odmiany DNO: Evie-2, Albion, Seascape; kwitnienie w ~8-tygodniowych cyklach niezależnie od dnia; uprawa tunelowa → możliwa od marca; truskawki Dzień Neutralne = ważna innowacja ogrodnicza. (C) soja maturity groups (MG): MG 00 (Kanada, Skandynawia: późny wschód słońca) do MG X (Brazylia, Indonezja: krótki dzień rok-okrągły); przeniesienie MG X na 50°N → lato 16 h → za długo (CNL = ~14 h) → nie kwitnie; przeniesienie MG 00 na Brazylię → kwitnie natychmiast (za krótki dzień) → za wczesne; ważne: przy zmianach klimatu → zmiana MG dla każdego regionu. (D) fałsz: LED grow lights w odpowiednich widmach (czerwone 660 nm, niebieskie 450 nm) aktywują fitochrom i kryptochrom identycznie jak słońce; Pfr indukowane sztucznym czerwonym → pełna fotoperiodyczna odpowiedź; ogrodnictwo i fitotronaria rutynowo stosują sztuczne doświetlanie; sztuczny dzień/noc sterowany precyzyjnie (±15 min).',
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
