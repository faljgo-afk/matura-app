// Seed batch 5/6 — Ekologia
// Sukcesja ekologiczna (2) + Biomy (6) + Ochrona przyrody (2)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '27daaa5f-30d8-4519-a525-4b136cad02f2'

const S = {
  sukcesja:  '63b1ca74-4c2d-4c15-95d6-3b322d07d1b9',
  biomy:     '0ede378a-6be2-442c-a02b-b8c70b3630c7',
  ochrona:   '1ec41dca-9d4b-4d3f-9bb0-7890b8d6354a',
}

const questions = [

  // ── SUKCESJA EKOLOGICZNA (2) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.sukcesja, question_type: 'single',
    question_text: 'Badacz obserwował, że po pożarze lasu sosnowego na piaszczystych glebach w Polsce po 2 latach pojawiła się wierzbówka kiprzyca (Epilobium angustifolium), po 10 latach dominowała brzoza i sosna, po 40 latach zaczął dominować las sosnowy. Który termin NAJLEPIEJ opisuje to zjawisko i dlaczego jest to sukcesja wtórna, a nie pierwotna?',
    options: [
      { id: 'A', text: 'To sukcesja wtórna, ponieważ: gleba i bank nasion przetrwały pożar; wierzbówka kiprzyca kolonizuje pole dzięki nasionom przeżywającym pożar w glebie lub napływającym z pobliskich terenów; Epilobium jest typowym gatunkiem pionierskim sukcesji wtórnej po pożarach', is_correct: true },
      { id: 'B', text: 'To sukcesja pierwotna, ponieważ: ogień całkowicie niszczy glebę i zamienia ją w mineralne podłoże identyczne ze skałą macierzystą; bank nasion jest bezpowrotnie zniszczony w temperaturze 300°C; wierzbówka kiprzyca to gatunek typowy dla skał wulkanicznych i gołych skał', is_correct: false },
      { id: 'C', text: 'To regresja sukcesji, a nie progresja; po pożarze ekosystem cofa się do stanu wody stojącej (jezior), z których pochodzi każdy ekosystem lądowy; wierzbówka kiprzyca żyje wyłącznie w zbiornikach wodnych a nie na otwartym terenie', is_correct: false },
      { id: 'D', text: 'To fluktuacja klimatyczna, a nie sukcesja; zmiana składu gatunkowego w ciągu 40 lat jest zbyt krótka by być sukcesją; sukcesja wymaga minimum 500 lat; pożar lasu sosnowego nie prowadzi do zmiany dominujących gatunków', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'SUKCESJA WTÓRNA PO POŻARZE (las sosnowy, Polska): kryterium rozróżnienia: gleba zachowana (nawet jeśli częściowo zmieniona przez ogień) + bank nasion = WTÓRNA; brak gleby i banku nasion = PIERWOTNA. Epilobium angustifolium (wierzbówka kiprzyca): gatunek ruderalny, fotochory (nasiona z puchem przelatują na km); nasiona kiełkują na odkrytym minerale, pełne słońce; geofity przeżywają pożar dzięki kłączom (rejony skandynawskie: ogień wyzwala kiełkowanie). Stadiony sukcesji po pożarze w borze suchym (Vaccinio-Pinetum): (0) tuż po pożarze: popioły → Corynephorus (szczotlicha siwa), Polytrichum piliferum (mech), Cladonia (porosty); (1) 1–5 lat: Epilobium + Agrostis + Solidago; (2) 5–15 lat: Betula pendula + Pinus sylvestris — sosna świetlolubna jest r-strategiem w borach; (3) 15–40+: Vaccinio-Pinetum (klimaks); UWAGA: klimaks boru suchego = SOSNA (nie buk), bo bór suchy = piasek, ubogie podłoże → buk nie konkuruje z sosną tutaj.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sukcesja, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują rolę gatunków pionierskich i inżynierów ekosystemu w sukcesji? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Porosty (Lichenes) są typowymi pionierami sukcesji pierwotnej na gołych skałach: wydzielają kwasy (np. kwas węglikowy, kwas szczawiowy) powodujące wietrzenie chemiczne skały; gromadzą martwą materię organiczną tworząc inicjalne podłoże dla mchów i roślin naczyniowych', is_correct: true },
      { id: 'B', text: 'Bóbr europejski (Castor fiber) jest klasycznym ekosystem-inżynierem: budując tamy zmienia reżim hydrologiczny rzeki → tworzy rozlewisko → zmienia roślinność (łąka → turzycowisko / ols) → zmienia skład gatunkowy zwierząt; modyfikuje sukcesję lokalnie przez wieki', is_correct: true },
      { id: 'C', text: 'Gatunki pionierskie eliminują się same (autogeniczna sukcesja, "facilitation model" Connell & Slatyer 1977): pionierzy modyfikują siedlisko tak, że staje się ono bardziej odpowiednie dla późniejszych gatunków, a mniej dla siebie samych (np. zacienienie gleby przez drzewa pionierskie eliminuje ich własne odnowienie)', is_correct: true },
      { id: 'D', text: 'W modelu inhibicji (Connell & Slatyer 1977): późne gatunki sukcesji mogą zasiedlić obszar bez pomocy pionierów; pionierzy NIE ułatwiają wejścia gatunków klimaksowych, lecz aktywnie hamują ich zasiedlenie; gatunki klimaksowe zasiedlają wyłącznie po śmierci lub zaburzeniu gatunków pionierskich', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C', 'D'],
    explanation: '(A) Porosty jako pionierzy: Parmelia, Rhizocarpon, Umbilicaria na skałach; kwas szczawiowy → oksalany wapnia (na marmurze); kwas węglikowy + H₂O → wietrzenie; porosty gromadzą pył, martwe thalli → humus inicjalny → Andreaea (mchy naskalne). (B) Castor fiber (bóbr europejski): "ecosystem engineer" (Jones, Lawton, Shachak 1994); tamy → podniesienie wód gruntowych; rozlewiska bobrowe → moczary, szuwary; zmiana biotopu owadów, ptaków (np. Alcedo atthis), rybostanu; po ponownym zasiedleniu Polski (reintrodukcja od lat 80.) → zwiększenie różnorodności biologicznej mokradeł. (C) MODEL FACYLITACJI (facilitation model): klasyczny model Clemensa; pionier A modyfikuje siedlisko → faworyzuje gatunek B → A wypierany przez B → B modyfikuje → C wchodzi; przykład: brzoza → cień → nasionka buka kiełkują w cieniu → buk rośnie → eliminuje brzozę (zbyt zacieniała). (D) MODEL INHIBICJI (inhibition model): Connell & Slatyer 1977 (trzeci model: "tolerance"); w inhibicji: pioneer BLOKUJE późniejsze gatunki; klimaksowe wchodzą dopiero po śmierci/zaburzeniu pionierów (np. chwasty jednoletnie blokują krzewy przez konkurencję o wodę na suchym stanowisku); dowody: stare pola uprawne — zarośnięte przez Hieracium, Poa, które blokują wejście drzew przez dekady.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── BIOMY (6) ─────────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.biomy, question_type: 'single',
    question_text: 'Tajga (borealna strefa leśna) jest największym biomem lądowym Ziemi. Które cechy POPRAWNIE opisują ten biom?',
    options: [
      { id: 'A', text: 'Dominacja iglastych drzew wiecznie zielonych (Picea — świerki, Pinus — sosny, Abies — jodły, Larix — modrzewie = liściaste!); długie mroźne zimy (do −60°C na Syberii), krótkie lato; ubogie, kwaśne gleby (bielicowe/podsolic); skąpa fauna duże ssaki (łoś, niedźwiedź brunatny, ryś, wilk)', is_correct: true },
      { id: 'B', text: 'Tajga zajmuje równikowy pas klimatu tropikalnego między zwrotnikami Raka i Koziorożca; charakteryzuje się całoroczną ciepłą temperaturą (min. 25°C) i opadami powyżej 2000 mm/rok; dominują wysokie, wiecznie zielone drzewa liściaste o szerokiej koronie', is_correct: false },
      { id: 'C', text: 'W tajdze przeważają gleby żyzne, o wysokiej zawartości próchnicy (czarnoziemy); pH gleby wynosi 7–8; rozkład materii organicznej jest bardzo szybki dzięki wysokim temperaturom i bakteriom; brak wiecznej zmarzliny; drzewa iglaste są wyjątkowo rzadkie', is_correct: false },
      { id: 'D', text: 'Tajga jest biomem półsuchym z opadami poniżej 200 mm/rok; dominują sukulenty i rośliny kserofityczne; drzewa iglaste są przystosowane do suszy przez igły (zmniejszenie transpiracji), ale nie do mrozu; tajga zajmuje obszary Sahary i Australii', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'TAJGA (boreal forest): rozmieszczenie: 50–70°N; Kanada (60% = Canadian Shield), Rosja (Zachodnia Syberia, Wschodnia Syberia), Skandynawia; KLIMAT: temperatura roczna: −5 do +5°C; zima: −20 do −60°C (Wierchojańsk: rekord −67,8°C); lato: +15 do +30°C (krótkie); opady: 300–900 mm/rok, głównie śnieg; permafrost (wieczna zmarzlina): w Syberii i Kanadzie — utrudnia rozkład → akumulacja materii organicznej → gleby torfowe; DRZEWA: Picea abies (Europejska), P. glauca (Kanada), Pinus sylvestris (Eurazja), Abies sibirica, Larix sibirica, L. gmelinii (modrzewie = LIŚCIASTE iglaki, liście opadają zimą — zredukowane do igieł; unikalne przystosowanie do skrajnie mroźnych zim Syberii); GLEBY: bielice (podzole): kwaśne (pH 3,5–5), wypłukane (leaching), ubogie w N i Ca; FAUNA: łoś (Alces alces), niedźwiedź brunatny (Ursus arctos), ryś (Lynx lynx), wilk szary, bóbr kanadyjski; w Kanadzie: karibu (Rangifer tarandus), skunks, borsuk; OCHRONA: największe obszary dziewicze na Ziemi (intact forest landscapes).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.biomy, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują tropikalny las deszczowy (tropical rainforest)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Tropikalny las deszczowy charakteryzuje się wielowarstwową strukturą pionową: warstwa koron (30–50 m) z emergentami (drzewa powyżej 50 m), warstwa pośrednia (15–30 m), podszyt (krzaki, młode drzewa), piętro trawiaste i runo z roślinami cieniolubymi', is_correct: true },
      { id: 'B', text: 'Gleby lasów tropikalnych (lateryty, oxisole) są paradoksalnie ubogie w substancje odżywcze pomimo ogromnej bioróżnorodności; większość składników mineralnych jest zmagazynowana w biomasie żywych organizmów a nie w glebie; szybki obieg materii zapobiega akumulacji próchnicy', is_correct: true },
      { id: 'C', text: 'Bioróżnorodność tropikalnych lasów deszczowych jest najwyższa ze wszystkich biomów: lasy tropikalne zajmują ~7% powierzchni lądu, ale zawierają >50% wszystkich gatunków roślin i zwierząt Ziemi; bogactwo epifitów, pnączy, hemi-epifitów jest cechą charakterystyczną', is_correct: true },
      { id: 'D', text: 'W tropikalnym lesie deszczowym opady roczne wynoszą poniżej 500 mm/rok; długa pora sucha (7–9 miesięcy) determinuje skład gatunkowy; drzewa zrzucają liście w porze suchej; wilgotność względna powietrza rzadko przekracza 40%; brak epifitów z powodu suchości', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) STRATYFIKACJA PIONOWA: emergenty (emergent layer): >50 m np. Dipterocarpy (Azja), Bertholletia excelsa (Amazonia), Cedrela; korony (canopy): 30–50 m; podkorona (understory): 15–30 m; krzewy (shrub): 1–5 m; runo (forest floor): <1 m; każda warstwa ma odmienną florę i faunę; światło: canopy pochłania >90% światła → runo <1% pełnego słońca. (B) GLEBY TROPIKALNE (lateryty/oxisole): ferralityzacja: intensywne wietrzenie chemiczne w wysokiej T i wilgotności → Al₂O₃ + Fe₂O₃ (lateryty) → czerwone/pomarańczowe; SiO₂ wypłukany; brak próchnicy (szybki rozkład przez grzyby i bezkręgowce); składniki: >90% w biomasie → wylesianie → trwała utrata żyzności (Amazonia: 2 lata upraw → jałowizna). (C) BIORÓŻNORODNOŚĆ: hotspoty: Amazonia (>40 000 gat. roślin, >1 300 gat. ptaków, >3 000 gat. ryb słodkowodnych w Amazonce); Borneo+Sumatra: orangutan, tapir malajski, nosacze; Kongo: goryl wschodni, okapi; epifity: bromelidy, storczyki, paprocie na korach; hemi-epifity: Ficus (zaczynają jako epifity, potem korzenią się w glebie, duszą gospodarcze drzewo). (D) fałsz: tropical rainforest: opady 2000–4000+ mm/rok, brak pory suchej (lub max 1–2 miesiące); temperatura +25 do +30°C całorocznie; wilgotność 80–95%; KONTRAST: seasonal/dry tropical forest (sawanna) = 500–1500 mm, pora sucha 5–8 mies.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.biomy, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących biomu tundry i pustyni:',
    options: [
      { id: 'A', text: 'Tundra arktyczna: biom bezleśny w strefie subpolarnej i polarnej (pow. 60°N i Antarktyda); dominują mchy, porosty, turzyce, karłowate wierzby i brzozy; wieczna zmarzlina (permafrost) uniemożliwia głębokie ukorzenienie drzew i ogranicza odpływ wody → powstawanie mokradeł i jeziorek tundry.', is_correct: true },
      { id: 'B', text: 'Pustynie gorące (np. Sahara, Gobi, Atacama) i zimne (Antarktyka) charakteryzują się opadami <250 mm/rok; roślinność jest gęsta i zróżnicowana na pustyniach zimnych, gdzie śnieg dostarcza duże ilości wody; pustynie gorące są całkowicie pozbawione roślinności — nie rosną tam żadne organizmy.', is_correct: false },
      { id: 'C', text: 'Biom sawanny (tropical savanna) jest zlokalizowany w strefie tropikalnej i subtropikalnej z wyraźną porą suchą (5–8 miesięcy); typowa roślinność to trawy i rzadko rozmieszczone drzewa (Acacia, Baobab, Parkia); bogata megafauna (słonie, lwy, zebry, antylopy, żyrafy w Afryce subsaharyjskiej).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: tundra: alfa: 60–75°N (arktyczna), powyżej górnej granicy lasu (alpejska); temperatura: −20 do +10°C; opady: 100–300 mm; permafrost: Arktyka: do 400–600 m głębokości; aktywna warstwa (active layer) taje latem na 30–100 cm → rośliny muszą się ukorzenić w cienkiej warstwie → mech, turzyca, wełnianka, Dryas octopetala, Salix herbacea; megafauna: karibu/renifer (Rangifer), piżmowół (Ovibos moschatus), zając bielik, lemming; ptaki migrujące: Calidris, Pluvialis; morsy, foki na wybrzeżu. B — Fałsz: BŁĘDY: (1) Gobi to pustynnia ZIMNA (zimne zimy, −40°C), NIE gorąca; (2) na pustyniach zimnych roślinność NIE jest gęsta — jest równie skąpa; śnieg na pustyniach zimnych jest suchy i nie dostarcza dużo wody do gleby (paruje zanim stopi); (3) pustynie gorące NIE są całkowicie bez roślin: Sahara: Acacia tortilis, Tamarix, sukulenty (Euphorbia canariensis), kserofity (Stipagrostis); Atacama: lomasy (mgłowe oazy); nawet Rub al-Khali ma Calligonum. C — Prawda: sawanny: Afryka: Serengeti, Kalahari; Australia: Mitchell Grass Downs, Kimberley; Ameryka Płd: Cerrado (Brazylia); drzewa: Acacia, Adansonia digitata (baobab), Parkia biglobosa, Terminalia; megafauna: słoń afrykański (Loxodonta africana), hipopotam, lwica, gepard, gnu, zebra, żyrafa, bawół; pożary sezonowe: podtrzymują otwartość sawanny (pyrofity jak sawannowe Brachiaria).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.biomy, question_type: 'single',
    question_text: 'Środziemnomorski biom (klimat śródziemnomorski / chaparral / maquis) wyróżnia się unikalnym reżimem opadów. Które stwierdzenie POPRAWNIE opisuje tę specyfikę i przystosowania roślin?',
    options: [
      { id: 'A', text: 'Klimat śródziemnomorski: opady głównie ZIMĄ (500–900 mm/rok), suche gorące lato (4–6 miesięcy); rośliny (makia, garig) przystosowane do letniej suszy: sklerofity (twarde, woskowane liście — np. oliwka, oleander), geofity (bulwy i cebule — np. narcyz, tulipan — przeżywają lato pod ziemią), rośliny jednoroczne kończące cykl przed latem', is_correct: true },
      { id: 'B', text: 'Klimat śródziemnomorski: opady głównie LATEM, suche mroźne zimy (−30°C); rośliny przystosowane do mrozu i suchego lata: sukulenty (kaktusy, agawy) dominują w makii; klimat śródziemnomorski odpowiada klimatowi sawanny afrykańskiej', is_correct: false },
      { id: 'C', text: 'Makia i chaparral to identyczne zbiorowiska tego samego gatunku; "makia" to termin angielski na europejskie zarośla śródziemnomorskie, a "chaparral" to termin łaciński; oba zbiorowiska rosną wyłącznie wokół Morza Śródziemnego', is_correct: false },
      { id: 'D', text: 'Klimat śródziemnomorski jest biomem zimnym; rośliny mają liście liściaste (tracą je zimą, nie latem); lato jest mokre i umiarkowane (jak w Polsce); charakterystyczne gatunki to buk pospolity i świerk; pożary latem są niemożliwe ze względu na wilgoć', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'KLIMAT ŚRÓDZIEMNOMORSKI (Mediterranean climate / cs w systemie Köppena): 5 regionów świata: (1) Baseny Morza Śródziemnego (Europa Pd., Afryka Pn., Bliski Wschód); (2) California (chaparral, manzanita, chamise); (3) Chile Centralne (matorral); (4) Południowa Australia (mallee); (5) RPA, Prowincja Przylądkowa (fynbos — najwyższa endemiczność; 8 700 gatunków roślin w obszarze <90 000 km²). CECHY: opady: 250–900 mm, ZIMOWE (cyclonic precipitation); lato: SUCHE + gorące (>30°C); zima: łagodna (+5 do +15°C); ROŚLINNOŚĆ: sklerofity (twarde liście = zmniejszona transpiracja latem): Olea europaea (oliwka), Quercus ilex (dąb ostrokrzewowy, zimozielony), Laurus nobilis (wawrzyn); geofity: Narcissus, Tulipa, Cyclamen (cebule zimowe i wiosenno-letnie); terofity (jednorocznki): kiełkują po deszczach jesiennych, kwitną wiosną, nasiona przeżywają lato; MAKIA (garigue/phrygana): Cistus, Pistacia lentiscus, Arbutus unedo, Myrtus communis; POŻARY: sierpień-wrzesień → ekosystem podatny; wiele roślin ma nasiona otwierające się po ogniu (serotiny).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.biomy, question_type: 'multiple',
    question_text: 'Które z poniższych par biom–charakterystyczne przystosowanie organizmów POPRAWNIE dobrano? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Pustynia gorąca → wielbłąd dwugarbny (Camelus bactrianus): garby zawierają TŁUSZCZ (nie wodę) jako rezerwę energetyczną; metabolizm tłuszczu dostarcza H₂O metaboliczną; nerki zagęszczają mocz (do 8× stężenie osocza); jelito grube reabsorbuje wodę; nozdrza ze specjalnymi błonami kondensującymi parę wodną z wydychanego powietrza', is_correct: true },
      { id: 'B', text: 'Tundra → leming (Lemmus lemmus): cykl 3–4-letni populacyjny (boom-bust cycle); w roku szczytu liczebności: migracje lemingów; biała sierść zimą (kamuflaż); hibernacja trwa całą zimę podobnie jak u niedźwiedzia polarnego', is_correct: false },
      { id: 'C', text: 'Tropikalny las deszczowy → żaba drzewna z rodzaju Phyllomedusa: wytwarza woski lipidowe z gruczołów skórnych i pokrywa nimi całe ciało (unikalne wśród płazów) w celu ograniczenia utraty wody — przystosowanie do zaskakująco suchej pory suchej w koronach drzew', is_correct: true },
      { id: 'D', text: 'Sawanna → akacja Acacia tortilis: płaska parasola korona = zminimalizowanie bezpośredniego naświetlania liści przez słońce w zenicie (zniesienie przegrzania liści); głęboki system korzeniowy (do 40 m u niektórych Acacia) dochodzący do wód gruntowych w porze suchej', is_correct: true },
    ],
    correct_answer: ['A', 'C', 'D'],
    explanation: '(A) Wielbłąd: garby = ~80 kg tłuszczu (nie wody!); 1 g tłuszczu + O₂ → ~1,07 g H₂O metabolicznej; mogą pić 130 L wody w 15 min; czerwone krwinki eliptyczne (jak u wielbłądowatych) = stabilność w odwodnieniu (do 40% utraty wody ciała, człowiek: >15% = śmiertelne); nozdrza: labiryntowa błona śluzowa kondensuje parę z wydychanego powietrza → oszczędność ~70% wody oddechowej; Camelus bactrianus (dwugarbny, C. Azja), C. dromedarius (jednogarbny, Półwysep Arabski). (B) Fałsz: leming NIE hibernuje! Żyje pod śniegiem cały rok w tunelach w warstwie subnivealnej (temp. ~0°C stabilna); zimą: biała sierść u L. lemmus (prawda), ale NOT hibernacja; populacja: 3–4-letnie wahania (Elton 1924, "vole plague"): związane z wilkami, gronostajem, sową śnieżną (Bubo scandiacus); UWAGA: niedźwiedź polarny (Ursus maritimus) nie hibernuje klasycznie — ciąża + torpor u samic w gawrze, ale NOT prawdziwa hibernacja. (C) Phyllomedusa sauvagii (Boiga, drzewna żaba): jedyny płaz wytwarzający woskowy kutykuloidalny płaszcz lipidowy; L. caerulea i inne drzewne żaby: parują dużo; P. sauvagii na kaktusach i krzewach Gran Chaco (sucha Argentyna): taz: Rate of water loss = 1/100 innych żab. (D) Akacja płaskokoronna (Acacia tortilis, tortilis = skręcona strąk): parasol-shaped crown: minimalizacja kąta padania promieni słonecznych w zenicie; CIEKAWE: niektóre Acacia w głębokich piaskach Kalahari: korzenie do 68 m (rekord Robinia/Acacia); symbiotyczne mrówki (myrmekochoria) chronią akacje przed Baobab-chewing słoniami.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.biomy, question_type: 'single',
    question_text: 'Klimatogram (diagram Waltera) prezentuje dane klimatyczne dla pewnego stanowiska: temperatura roczna: +27°C; opady roczne: 2 400 mm; brak miesiąca z T < 18°C; brak miesiąca z opadami < 60 mm. Który biom NAJLEPIEJ odpowiada tym danym i na jakim kontynencie jest najlepiej reprezentowany?',
    options: [
      { id: 'A', text: 'Tropikalny las deszczowy (tropical rainforest); najlepiej reprezentowany w Ameryce Południowej (dorzecze Amazonki — Amazonia), Afryce Środkowej (Kotlina Konga) i Azji Południowo-Wschodniej (Borneo, Sumatra, Filipiny)', is_correct: true },
      { id: 'B', text: 'Tundra arktyczna; te dane odpowiadają klimatowi subpolarnemu strefy za kołem podbiegunowym; biom ten jest najlepiej reprezentowany na Grenlandii i Antarktyktydzie', is_correct: false },
      { id: 'C', text: 'Sawanna afrykańska; dane te są typowe dla sawanny z wyraźną porą suchą i temperaturą 27°C; jest to zbiorowisko z Acacia, Baobab i trawami; reprezentowany w Afryce Wschodniej (Kenia, Tanzania)', is_correct: false },
      { id: 'D', text: 'Tajga syberyjska; temperatura +27°C i opady 2 400 mm odpowiadają klimatowi kontynentalnemu Syberii; są to typowe dane dla lasów iglastych między 60 a 70°N', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'INTERPRETACJA KLIMATOGRAMU (Walter-Lieth): kluczowe parametry: T_roczna > 20°C → tropiki lub subtropiki; T_min > 18°C (żaden miesiąc chłodniejszy) → tropiki; opady > 2000 mm/rok i bez miesiąca < 60 mm (brak pory suchej) = TROPIKALNY LAS DESZCZOWY (tropical rainforest, Af w klasyfikacji Köppena). Porównanie: Sawanna (Aw): T_roczna: ~25°C, ale wyraźna pora sucha (3–8 mies. < 50 mm); tundra: T_roczna: −10 do +2°C; tajga: T_roczna: −5 do +5°C; tropical rainforest: Af: T > 18°C w każdym miesiącu, brak pory suchej; ROZMIESZCZENIE: Amazonia (Brazylia, Peru, Kolumbia, Wenezuela) = największy las deszczowy świata (~5,5 mln km²); Kotlina Konga (Kongo, Kamerun, Gabon) = drugi co do wielkości (~2 mln km²); Azja Pd-Wsch. (Borneo 800 tys. km², Sumatra, Malezja, Papua NG, Filipiny) = Sundaland biodiversity hotspot; małe płaty: Atlanycki las tropikalny Brazylii (Mata Atlântica) — 93% zniszczony; Ghats Zachodnie (Indie); Afryka Zachodnia (Wybrzeże Kości Słoniowej → Sierra Leone).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── OCHRONA PRZYRODY (2) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.ochrona, question_type: 'single',
    question_text: 'Które z poniższych działań człowieka są NAJWIĘKSZYMI bezpośrednimi przyczynami utraty bioróżnorodności na poziomie globalnym według IPBES (Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services) 2019?',
    options: [
      { id: 'A', text: 'Zmiana użytkowania terenu (niszczenie siedlisk — wylesianie, osuszanie mokradeł, urbanizacja) → największa przyczyna; potem: bezpośrednia eksploatacja organizmów (polowania, rybołówstwo), zmiany klimatu, zanieczyszczenie, inwazje gatunków obcych', is_correct: true },
      { id: 'B', text: 'Zmiany klimatu są jedyną i największą przyczyną utraty bioróżnorodności; niszczenie siedlisk, polowania i rybołówstwo mają pomijalny wpływ na bioróżnorodność; inwazje gatunków obcych wzmacniają bioróżnorodność przez dodanie nowych gatunków', is_correct: false },
      { id: 'C', text: 'Turystyka przyrodnicza (ekoturystyka) i parki narodowe są największą przyczyną utraty bioróżnorodności przez płoszenie zwierząt; bez parków narodowych bioróżnorodność byłaby wyższa; inwazje gatunków obcych są jedyną naturalną przyczyną wymierania', is_correct: false },
      { id: 'D', text: 'Utrata bioróżnorodności to mit — żaden gatunek nie wyginął po roku 1900; IUCN Red List i IPBES publikują niepotwierdzone dane; tempo wymierania jest identyczne z prehistorycznym (tłem ewolucyjnym) i wynosi 1 gatunek na milion gatunko-lat', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'IPBES Global Assessment 2019 (Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services): 5 GŁÓWNYCH PRZYCZYN UTRATY BIORÓŻNORODNOŚCI (w kolejności wpływu): 1. ZMIANA UŻYTKOWANIA TERENU (land-use change): 75% powierzchni lądów "znacząco zmodyfikowane przez człowieka"; wylesianie tropikalne: 10 mln ha/rok (2015–2020 FAO): Amazonia: 1,3 mln km² wylesionych 1985–2020; Borneo: ~50% lasów pierwotnych zniszczonych; osuszanie mokradeł: 35% mokradeł stracone od 1970; 2. BEZPOŚREDNIA EKSPLOATACJA: rybołówstwo: 34% zasobów rybnych przełowionych (FAO 2020); polowania: bushmeat w Afryce; tropikalny handel dzikimi zwierzętami; 3. ZMIANY KLIMATU: rosnący udział, ale jeszcze 3. pozycja; 4. ZANIECZYSZCZENIE: pestycydy (pszczoły), eutrofizacja, tworzywa sztuczne (ocean); 5. INWAZJE GATUNKÓW OBCYCH: 60% wymierań zwierząt od 1900 związanych z gatunkami inwazyjnymi (Bellard 2016). STAN: ~1 mln gatunków zagrożonych wymarciem (IPBES 2019); 68% redukcja populacji kręgowców 1970–2016 (WWF Living Planet 2020); obecne tempo wymierania: 100–1 000× wyższe od tła ewolucyjnego.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ochrona, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących form ochrony przyrody w Polsce:',
    options: [
      { id: 'A', text: 'W Polsce wyróżniamy następujące formy ochrony przyrody (od najsilniejszej): parki narodowe → rezerwaty przyrody → parki krajobrazowe → obszary chronionego krajobrazu → użytki ekologiczne → stanowiska dokumentacyjne → zespoły przyrodniczo-krajobrazowe → pomniki przyrody → ochrona gatunkowa.', is_correct: true },
      { id: 'B', text: 'Sieć Natura 2000 to polskie (krajowe) prawo ochrony przyrody, opracowane wyłącznie przez Polskę i obowiązujące tylko na terenie Polski; jest to niezależna od UE inicjatywa; obszary Natura 2000 to te same obszary co polskie parki narodowe, tylko pod inną nazwą.', is_correct: false },
      { id: 'C', text: 'Ochrona czynna (active conservation) polega na aktywnym zarządzaniu ekosystemem: koszenie łąk, wycinanie drzew w celu utrzymania mozaiki siedlisk, wsiedlanie zagrożonych gatunków (reintrodukcja), usuwanie gatunków inwazyjnych; jest stosowana gdy bierna ochrona jest niewystarczająca.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: POLSKIE FORMY OCHRONY PRZYRODY (Ustawa o ochronie przyrody 2004, Dz.U. 2004 Nr 92 poz. 880): (1) parki narodowe (23 w Polsce: Białowieski, Tatrzański, Biebrzański itd.); (2) rezerwaty przyrody (~1500 rezerwatów); (3) parki krajobrazowe (122); (4) obszary chronionego krajobrazu; (5) obszary Natura 2000 (nakładają się z innymi formami); (6) pomniki przyrody (>36 000 drzew, skał, głazów narzutowych); (7) stanowiska dokumentacyjne (odsłonięcia skalne, jaskinie); (8) użytki ekologiczne (bagna, oczka wodne, zadrzewienia); (9) zespoły przyrodniczo-krajobrazowe (krajobrazy kulturowe); (10) ochrona gatunkowa roślin, zwierząt i grzybów. B — Fałsz: Natura 2000 = UNIJNA sieć obszarów chronionych (Dyrektywa Siedliskowa 92/43/EWG + Dyrektywa Ptasia 79/409/EWG → zastąpiona 2009/147/WE); obejmuje wszystkie 27 państw UE; w Polsce: ~950 Obszarów Specjalnej Ochrony Ptaków (OSO) + ~850 Specjalnych Obszarów Ochrony Siedlisk (SOO) = ~19% powierzchni Polski; NIE pokrywają się z parkami narodowymi (choć bywają zbieżne: Bieszczady: PN + Natura 2000 + Park krajobrazowy). C — Prawda: OCHRONA CZYNNA: wymagana gdy presja ludzka historycznie zmieniła ekosystem; przykłady: łąki świeże (Arrhenatheretum): bez koszenia → sukcesja w kierunku zarośli → koszenie = ochrona czynna; stepy i murawy kserotermiczne: bez wypasu/koszenia → sukcesja; reintrodukcja: żubr (Bison bonasus) — gatunek wyginął 1925, reintrodukowany 1952–1958 w Białowieży; żuraw w Polsce; batalion (Philomachus pugnax); ryś i wilk (Polska).',
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
  console.log(`Seeding batch 5 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
