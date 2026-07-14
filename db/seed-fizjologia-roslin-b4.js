// Seed batch 4/7 — Fizjologia roślin
// Transport wody (1) + Odżywianie mineralne (6) + Hormony roślinne (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'

const S = {
  transport: 'f69fab83-0563-4d75-92a0-6e49afd505d0',
  mineral:   '57d2864b-dd3e-42de-8a9f-0b7b2c533894',
  hormon:    'c3f1012e-cde4-47d7-adcb-9887d090322a',
}

const questions = [

  // ── TRANSPORT WODY — ostatnie pytanie (1) ────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących gutacji i ciśnienia korzeniowego:',
    options: [
      { id: 'A', text: 'Gutacja zachodzi gdy transpiracja jest hamowana (wysoka wilgotność powietrza, noc) a ciśnienie korzeniowe wciąż pompuje wodę ku górze; krople wody pojawiają się na hydatodach na brzegach i wierzchołkach liści.', is_correct: true },
      { id: 'B', text: 'Woda wydzielana podczas gutacji jest czystą wodą destylowaną bez jakichkolwiek substancji mineralnych; ewentualne sole widoczne na wysuszonych liściach pochodzą wyłącznie z rosy lub deszczu.', is_correct: false },
      { id: 'C', text: 'Ciśnienie korzeniowe jest zjawiskiem obserwowanym głównie wiosną u roślin drzewiastych strefy umiarkowanej, gdy gleba jest dobrze nawodniona a transpiracja liści jeszcze nie jest intensywna (liście się nie rozwinęły).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: hydatody (hydropoteny) = wyspecjalizowane struktury na krawędziach i wierzchołkach liści z epitemą (miękiszem gruczołowym) połączoną z ksylemem → woda pod ciśnieniem korzeniowym wycieka; obserwowane rano na liściach truskawki, trawy, kapusty. B — Fałsz: woda z gutacji zawiera sole mineralne, cukry, aminokwasy, enzymy w niskich stężeniach (bo wychodzi z ksylemu); po wysycheniu pozostają białe osady soli (widoczne np. na truskawkach). C — Prawda: ciśnienie korzeniowe u drzew wiosną: korzenie aktywnie ładują cukry (hydroliza skrobi korzeniowej) do ksylemu → osmotyczny napływ wody → ciśnienie; używane w przemyśle cukierniczym (klon cukrowy: sok klonowy zbierany wiosną, ~2–3% sacharozy).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── ODŻYWIANIE MINERALNE ROŚLIN (6) ──────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.mineral, question_type: 'single',
    question_text: 'Azot jest makroelementem niezbędnym dla roślin. Która forma azotu jest BEZPOŚREDNIO przyswajana przez większość roślin z gleby?',
    options: [
      { id: 'A', text: 'Jony azotanowe (NO₃⁻) i amonowe (NH₄⁺); NO₃⁻ pobierany aktywnie przez symportery H⁺/NO₃⁻, redukowany do NH₄⁺ w komórkach korzenia i liścia; NH₄⁺ włączany do aminokwasów przez syntazę glutaminową (GS) i GOGAT', is_correct: true },
      { id: 'B', text: 'Wyłącznie gaz N₂ z atmosfery przez specjalne pory w liściach; wszystkie rośliny mogą bezpośrednio wiązać azot cząsteczkowy w plastydach', is_correct: false },
      { id: 'C', text: 'Wyłącznie aminokwasy gotowe pochłaniane przez korzenie z próchnicy glebowej; rośliny nie potrafią asymilować nieorganicznych form azotu', is_correct: false },
      { id: 'D', text: 'Wyłącznie jon azotynowy (NO₂⁻); NO₃⁻ i NH₄⁺ są dla roślin toksyczne i aktywnie wykluczane przez błonę korzeniową', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Pobieranie N przez rośliny: (1) NO₃⁻: transportowane przez NRT1 (niskopoteinownikowe) i NRT2 (wysokopoteinownikowe) — symportery H⁺/NO₃⁻; redukowane: NO₃⁻ → NO₂⁻ (reduktaza azotanowa, NR, w cytozolu) → NH₄⁺ (reduktaza azotynowa, NiR, w plastydach); (2) NH₄⁺: transportowane przez AMT (ammonium transporters); GS (syntaza glutaminowa) + GOGAT (oksoglutaranu aminotransferaza glutaminanu) → glutamina → inne aminokwasy. Wiązanie N₂: wyłącznie prokaryoty z nitrogenazą (Rhizobium w brodawkach korzeniowych roślin strączkowych, Azotobacter wolno żyjący).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mineral, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują objawy niedoboru składników mineralnych u roślin? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Niedobór azotu (N): chloroza zaczynająca się od starszych liści (N jest mobilny — przesuwany do młodszych organów); całe rośliny jasnozielone lub żółte; zahamowanie wzrostu; antocyjany mogą się gromadzić (liście czerwonawe)', is_correct: true },
      { id: 'B', text: 'Niedobór żelaza (Fe): chloroza między żyłkami liści (interveinal chlorosis) zaczynająca się od MŁODSZYCH liści (Fe jest niemobilny — nie przekazywany ze starszych); żyłki pozostają zielone przy żółtym mezofilu', is_correct: true },
      { id: 'C', text: 'Niedobór fosforu (P): purpurowe/brązowe zabarwienie liści (gromadzenie antocyjanów); brązowienie starszych liści; zahamowanie tworzenia kwiatów i nasion; liście małe', is_correct: true },
      { id: 'D', text: 'Niedobór wapnia (Ca): objawy pojawiają się zawsze najpierw na najstarszych liściach ponieważ Ca jest wysoce mobilny w floemie i szybko przesuwany od starszych do młodszych organów', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) N-niedobór: N mobilny (przesuwany przez floem ze starszych do młodszych organów) → objawy na dolnych/starszych liściach; chlorofil degradowany → chloroza; antocyjany (purpura) u kukurydzy, ziemniaka. (B) Fe-niedobór: Fe słabo mobilny w floemie → nie przemieszczany ze starszych liści → młode liście chlorotyczne z zielonymi żyłkami (żyłki = żywy transport, mezofil = chlorofil). Podobnie: Mn, Cu (niemobilne). (C) P-niedobór: P mobilny → objawy na starszych liściach; antocyjany → fioletowoczerwone zabarwienie (szczególnie pod spodem liścia ziemniaka, pomidora). (D) fałsz: Ca jest BARDZO NIEMOBILNY w floemie (wiąże się z pektyną ściany komórkowej) → deficyt widoczny na NAJMŁODSZYCH organach: martwica wierzchołka wzrostu pędu, gnicie kwiatów (blossom end rot u pomidora).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mineral, question_type: 'single',
    question_text: 'Brodawki korzeniowe roślin strączkowych (bobik, fasola, koniczyna) są siedliskiem bakterii Rhizobium. Jaki jest mechanizm biologicznego wiązania azotu cząsteczkowego w tych brodawkach?',
    options: [
      { id: 'A', text: 'Nitrogenaza bakteryjna katalizuje: N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP+Pi; leghemoglobina (syntetyzowana przez roślinę) utrzymuje bardzo niskie [O₂] w brodawce (chroni nitrogenazę przed O₂), ale zapewnia dostateczny przepływ O₂ do oddychania bakterii', is_correct: true },
      { id: 'B', text: 'Nitrogenaza jest enzymem roślinnym syntetyzowanym w plastydalch korzenia; bakterie Rhizobium dostarczają jedynie substratu energetycznego (ATP z fermentacji glukozy); NH₃ jest produkowany przez roślinę', is_correct: false },
      { id: 'C', text: 'Wiązanie N₂ zachodzi w liściach rośliny strączkowej przy udziale chlorofilu; nitrogenaza jest aktywna tylko w świetle; brodawki korzeniowe pełnią wyłącznie funkcję magazynowania azotu', is_correct: false },
      { id: 'D', text: 'Leghemoglobina blokuje N₂ przed ucieczkzą z brodawki; gazy N₂ są rozpuszczane w hemoglobinoidu i bezpośrednio przekazywane do syntazy glutaminowej bez enzymatycznej aktywacji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Symbioza Rhizobium–roślina strączkowa: (1) Rhizobium infekuje włośniki korzeniowe → indukcja tworzenia brodawki (organogeneza brodawki roślinnej); (2) bakterie różnicują się w bakteroidy z aktywną nitrogenazą; (3) nitrogenaza (kompleks białek Fe i FeMo): N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂; bardzo energochłonne; bakteroidy dostają cukry (malat) z rośliny; (4) leghemoglobina (globina = roślina, hem = Rhizobium): Km(O₂) podobne do mioglobiny; utrzymuje [O₂] ≈ 10 nM (ochrania nitrogenazę przed utlenianiem) + dostarcza O₂ do oddychania bakteroidów (ATP); (5) NH₃ → asparagina i glutamina → transport do roślin ksylemem.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mineral, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących roli makro- i mikroelementów u roślin:',
    options: [
      { id: 'A', text: 'Magnez (Mg) jest centralnym atomem cząsteczki chlorofilu (porfirynoym pierścieniu) i kofaktorem wielu enzymów (np. kinaz); jego niedobór powoduje chlorozę między żyłkami liści zaczynającą się od starszych liści (Mg jest mobilny).', is_correct: true },
      { id: 'B', text: 'Potas (K) jest głównym jonem osmotycznym w komórkach roślinnych; reguluje ciśnienie turgorowe, otwieranie aparatów szparkowych, aktywuje ponad 60 enzymów; jego niedobór powoduje nekrozę krawędzi liści (brązowienie brzegów).', is_correct: true },
      { id: 'C', text: 'Bor (B) jest makroelementem niezbędnym w dużych ilościach do budowy ścian komórkowych; rośliny, którym brakuje boru, tworzą gigantyczne komórki z pogrubiałymi ścianami.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: Mg²⁺ w centrum porfiryny chlorofilu (pierścień tetrapirylowy): bez Mg chlorofil nie syntetyzowany; Mg mobilny → deficyt na starszych liściach. Mg kofaktor: RuBisCO (aktywacja karbamylacji Lys), ATP (kompleks Mg-ATP to prawdziwy substrat kinaz). B — Prawda: K⁺ = główny kation osmotyczny (komórki roślinne: do 200 mM K⁺); szparki: H⁺-ATPaza → napływ K⁺ → otwarcie; enzymom: pyruvate kinaza, syntaza skrobi; nekroza krawędzi liści = tipburn (u sałaty, kapusty). C — Fałsz: Bor = MIKROELEMENT (potrzebny w śladowych ilościach: ~20–50 mg/kg suchej masy); bierze udział w: (1) syntezie pektyn ściany (kompleks B-ramnogalakturonan II); (2) transporcie cukrów w floemie (kompleks B-cis-diol); (3) rozwoju pyłku; deficyt → deformacja wierzchołków wzrostu, puste owoce.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mineral, question_type: 'single',
    question_text: 'Rośliny owadożerne (rosiczka, muchotrap, dzbanecznik) żyją na glebach ubogich w azot. Jaka jest biologiczna korzyść z odżywiania się owadami?',
    options: [
      { id: 'A', text: 'Trawienie owadów dostarcza roślinie związków azotowych (aminokwasów, jonów NH₄⁺) uzyskanych z białek ofiary; rośliny owadożerne rosną w borach, bagnach i terenach torfowiskowych gdzie gleba jest bardzo uboga w N i P', is_correct: true },
      { id: 'B', text: 'Owady dostarczają roślinom węgla organicznego (glukozy) z tkanek owada; rośliny owadożerne nie prowadzą fotosyntezy i są całkowicie heterotrofami zależnymi od ofiar', is_correct: false },
      { id: 'C', text: 'Rośliny owadożerne pochłaniają owady wyłącznie dla wody zawartej w hemolimfie; aminokwasy z tkanek owada są dla rośliny toksyczne i muszą być wydalane przez korzenie', is_correct: false },
      { id: 'D', text: 'Owady dostarczają roślinom magnezu i wapnia potrzebnych do budowy chlorofilu; rośliny owadożerne są karłowate bo brakuje im fosforu, który nie jest dostępny z tkanek owada', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Rośliny owadożerne (carnivorous plants): Drosera (rosiczka), Dionaea (muchotrap), Nepenthes (dzbanecznik), Sarracenia, Utricularia (pływacz). Środowisko: bagna, torfowiska, mchy torfowe (Sphagnum) — bardzo niskie pH (3–5), niski poziom N i P w substracie; CO₂ pobierany przez fotosyntezę (autotrofy!). Korzyść: trawienie owadów enzymami (proteazy, fosfatazy, esterazy): uwolnienie aminokwasów, NH₄⁺, fosforanów → uzupełnienie N i P; rośliny wyróżniają szybszy wzrost gdy mają dostęp do owadów. Muchotrap: reakacja na 2 dotknięcia włosków czuciowych w <20s → zamknięcie pułapki (nyctinastia elektryczna).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mineral, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują formy azotu w glebie i ich przemiany? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Nitryfikacja: NH₄⁺ → NO₂⁻ (Nitrosomonas) → NO₃⁻ (Nitrobacter) — proces tlenowy, prowadzony przez chemoautotroficzne bakterie glebowe; dostarcza roślinom NO₃⁻ jako głównej formy mineralnego N', is_correct: true },
      { id: 'B', text: 'Denitryfikacja: NO₃⁻ → NO₂⁻ → NO → N₂O → N₂; prowadzona przez beztlenowe heterotrofy (Pseudomonas, Thiobacillus) w beztlenowych warunkach gleby; prowadzi do straty azotu z ekosystemu', is_correct: true },
      { id: 'C', text: 'Amonifikacja: rozkład białek i nukleinowych kwasów przez bakterie i grzyby saprotroficzne → NH₄⁺; jest pierwszym etapem mineralicji azotu organicznego w glebie', is_correct: true },
      { id: 'D', text: 'Rośliny strączkowe (Fabaceae) mogą wiązać N₂ samodzielnie dzięki własnej nitrogenazce plastydowej; symbioza z Rhizobium jest jedynie fakultatywna i nie jest niezbędna do wiązania azotu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) nitryfikacja: Nitrosomonas: NH₄⁺ + O₂ → NO₂⁻ + H₂O (energetyczna — chemoautotrofia); Nitrobacter/Nitrospira: NO₂⁻ + O₂ → NO₃⁻; tlenowa — w glebach napowietrzonych. (B) denitryfikacja: beztlenowe warunki (flooding) → heterotroficzne bakterie używają NO₃⁻ jako akceptora elektronów; N₂ ucieka do atmosfery → strata N z gleby; problematyczne w polach ryżowych i powodziach. (C) amonifikacja: aminokwasy/mocznik/kwasy nukleinowe → NH₄⁺ przez: deaminazy aminokwasów, ureazy, nukleazy + dalsze enzymy; NH₄⁺ → nitryfikacja lub pobierany przez roślinę. (D) fałsz: żadna roślina nie ma własnej nitrogenazy; nitrogenaza zawiera kluster FeMo-co, unikalny dla prokaryotów; symbioza z Rhizobium = obligatoryjna dla biologicznego wiązania N₂ u roślin strączkowych (mogą rosnąć bez niej, ale muszą mieć dostępny N w glebie).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── HORMONY ROŚLINNE (3) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'single',
    question_text: 'Auksyny (IAA — kwas indolooctowy) są hormonami roślinnymi odpowiadającymi za tropizmy. Wskaż prawidłowe zestawienie efektów działania auksyn:',
    options: [
      { id: 'A', text: 'Auksyny stymulują elongację komórek korzenia i pędu, ale w różnych stężeniach: optymalne stężenie dla elongacji korzenia jest ok. 100× niższe niż dla pędu; fototropizm pędu: więcej auksyn po stronie zaciemnionej → silniejszy wzrost → zginanie ku światłu', is_correct: true },
      { id: 'B', text: 'Auksyny hamują wzrost pędu głównego i stymulują wzrost pędów bocznych; aplikacja auksyny na pąk boczny aktywuje go i znosi dominację wierzchołkową', is_correct: false },
      { id: 'C', text: 'Auksyny działają wyłącznie na korzenie i nie mają wpływu na wzrost pędu; fototropizm jest regulowany wyłącznie przez cytokininy produkowane w strefie apikalnej pędu', is_correct: false },
      { id: 'D', text: 'Auksyny są transportowane biernie (dyfuzja) w obu kierunkach przez roślinę; ich rozkład jest jednakowy w całej roślinie niezależnie od warunków oświetlenia i grawitacji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Auksyny (IAA): (1) mechanizm elongacji: IAA → receptory TIR1 (F-box) → degradacja Aux/IAA represorów → aktywacja genów ARF → ekspansyna (rozluźnia ścianę) + H⁺-ATPaza (zakwaszenie apoplastu → "hypothesis acid growth") → elongacja; (2) różnicowa wrażliwość: korzeń nasycony przy 10⁻¹⁰ M (inhibicja powyżej 10⁻⁸ M), pęd przy 10⁻⁸–10⁻⁶ M; (3) fototropizm (Cholodny-Went): fototropiny (phot1, phot2) wykrywają niebieskie → redistribucja auksyn przez transportery PIN do strony zaciemnionej → asymetryczny wzrost → giecie pędu ku światłu; (4) transport polarny (PAT): zawsze biegunowy bazipetalnie (od wierzchołka w dół) przez transportery AUX1 (influks) i PIN (efluks).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują działanie giberelin i cytokinín? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Gibereliny (GA) stymulują kiełkowanie nasion poprzez indukcję syntezy amylazy (rozkładającej skrobię bielma) i innych hydrolaz w aleuronowej warstwie nasienia; kluczowy mechanizm u zbóż (pszenica, jęczmień)', is_correct: true },
      { id: 'B', text: 'Gibereliny powodują elongację pędu przez stymulację podziału komórkowego w strefie subapikalnej i elongację komórek; u roślin karłowatych (np. mutanty dwarf u groszku) brak syntezy GA powoduje kompaktowy pokrój', is_correct: true },
      { id: 'C', text: 'Cytokininy (np. zeatyna, kinetyyna) promują podziały komórkowe i opóźniają starzenie liści (senescencję) przez hamowanie degradacji chlorofilu; syntetyzowane głównie w merystemach korzenia i transportowane ksylemem do pędów', is_correct: true },
      { id: 'D', text: 'Cytokininy i auksyny działają zawsze antagonistycznie; wysoki stosunek cytokinin do auksyn zawsze hamuje organogenezę; nie można indukować tworzenia pąków przez manipulację stosunkiem tych hormonów w kulturach tkankowych', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) GA w kiełkowaniu: GA z zarodka → aleuron → synteza α-amylazy + proteaz + lipaz → hydroliza skrobi/białek/tłuszczów bielma → glukoza + aminokwasy dla rosnącego zarodka; podstawa przemysłu browarniczego (słodowanie: indukowanie GA w ziarnie). (B) GA elongacja: GA → DELLA proteiny (represory wzrostu) ulegają degradacji przez GID1-GA-GID2 → uwolnienie transkrypcji genów wzrostu → podziały + elongacja; mutanty gid1 (brak receptora GA) = kompaktowe. (C) cytokininy: zeatyna (cis/trans), izopentyloadenina; receptory AHK (histidynowe kinazy) → fosforelay → ARR; opóźnianie senescencji = klasyczny efekt; syntetyzowane w korzeniach, przenoszone ksylemem. (D) fałsz: auksyny + cytokininy działają synergistycznie w kulturach tkankowych; klasyczny eksperyment Skoog & Miller (1957): wysoki stosunek IAA/CK → korzenie; niski IAA/CK (wysoki CK) → pąki przybyszowe; pełna organogeneza tylko przy odpowiednim balansie.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hormon, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących etylenu i ABA:',
    options: [
      { id: 'A', text: 'Etylen (C₂H₄) jest gazowym hormonem roślinnym stymulującym dojrzewanie owoców klimakterycznych (jabłko, banan, pomidor); jeden dojrzewający owoc może przyspieszyć dojrzewanie innych owoców w pobliżu.', is_correct: true },
      { id: 'B', text: 'ABA (kwas abscysynowy) jest nazywany "hormonem stresu": syntetyzowany w odpowiedzi na suszę, zasolenie, chłód, zranienia; indukuje syntezę białek ochronnych (dehydryny), zamykanie szparek, spoczynek nasion i pąków.', is_correct: true },
      { id: 'C', text: 'Etylen jest aktywny wyłącznie w owocach podczas dojrzewania; żadna inna część rośliny (łodyga, korzeń, liść) nie produkuje etylenu i nie reaguje na ten hormon.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: owoce klimakteryczne = wykazują wzrost oddychania (klimakterium) i produkcji etylenu przy dojrzewaniu; C₂H₄ → receptor ETR1 → CTR1 (off) → EIN3/EIL1 → geny dojrzewania (poligalakturonaza: rozpuszcza pektyny; karboksylazy antocyjanów: barwa); efekt autokatalityczny: etylen → więcej etylenu. Zastosowanie: zbieranie niedojrzałych bananów i gazowanie etylenem; hamowanie dojrzewania: 1-MCP (bloker ETR1) lub chłodnia + N₂. B — Prawda: ABA = "hormon stresu abiotycznego"; receptor PYR/PYL; SnRK2 → wiele odpowiedzi; dehydryny (LEA proteins) = ochrona białek komórkowych przy odwodnieniu; ABA → spoczynek nasion (dormancja) i pąków zimowych. C — Fałsz: etylen produkowany w wielu tkankach: starzejące liście (senescencja → żółknięcie przez degradację chlorofilu), mechanicznie uszkodzone tkanki (zranienie → etylen → lignifikacja), korzenie poddane stresowi powodzi (ACC syntetaza w korzeniu → ACC transportowany do pędu → konwertowany do etylenu).',
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
