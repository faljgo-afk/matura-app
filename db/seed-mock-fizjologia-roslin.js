// Seed: mock_questions — Fizjologia roślin (19 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  foto:    '0f762f3b-45ca-422b-ab30-8cc5e2dfc530',
  c3c4:    '469e8529-d140-498f-bed7-5790c9e2d55d',
  transp:  '0587c00d-b47e-4264-8a86-cebd8544ae22',
  trans:   'f69fab83-0563-4d75-92a0-6e49afd505d0',
  miner:   '57d2864b-dd3e-42de-8a9f-0b7b2c533894',
  horm:    'c3f1012e-cde4-47d7-adcb-9887d090322a',
  ruchy:   '550d7c0b-6b30-4527-93d7-aab33d62dfb1',
  kielk:   '203f922f-00e6-458f-8239-5614e0777ff1',
  fotop:   'c426d845-182c-48d9-b420-bdda8dc95c2a',
}

const questions = [
  // ─── Fotosynteza ───
  {
    subtopic: 'Fizjologia roślin — Fotosynteza — fazy jasna i ciemna',
    subtopic_id: S.foto,
    question_type: 'single',
    question_text: 'Faza jasna fotosyntezy przebiega w błonach tylakoidu. Które produkty fazy jasnej są bezpośrednio wykorzystywane w fazie ciemnej (cyklu Calvina)?',
    options: [
      { id: 'A', text: 'ATP i NADPH — dostarczają energię i siłę redukcyjną do cyklu Calvina; tlen (O₂) jest produktem ubocznym fotolizy wody uwalnianym do atmosfery', is_correct: true },
      { id: 'B', text: 'Glukoza i CO₂ — glukoza z fazy jasnej zasila cykl Calvina bezpośrednio', is_correct: false },
      { id: 'C', text: 'NADPH i CO₂ — NADPH pochodzi z fazy jasnej, CO₂ jest produktem ubocznym rozkładu ATP', is_correct: false },
      { id: 'D', text: 'ADP i NADP⁺ — regenerowane w fazie jasnej i przekazywane do cyklu Calvina', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Faza jasna (reakcje świetlne) w tylakoidach: (1) Fotosystem II (PSII, P680): absorpcja fotonów → fotoliza wody (2H₂O → 4H⁺ + 4e⁻ + O₂) → elektrony zastępują "wystrzelone" z P680; O₂ uwalniany. (2) Łańcuch transportu elektronów (plastochinon → cytochrom b6f → plastocyjanina): pompowanie H⁺ przez błonę → gradient protonowy → ATP-syntaza (chemiosmoza) → ATP. (3) PSI (P700): elektrony pobudzane ponownie → przez ferredoksynę → reduktaza NADP⁺ → NADPH. Produkty do cyklu Calvina: ATP (energia) + NADPH (siła redukcyjna). Cykl Calvina (faza ciemna, w stromie): CO₂ + ATP + NADPH → G3P → glukoza.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia roślin — Fotosynteza — fazy jasna i ciemna',
    subtopic_id: S.foto,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących fotosyntezy:\nA. Rubisco (RuBisCO) jest enzymem wiążącym CO₂ do rybulozo-1,5-bifosforanu (RuBP) w cyklu Calvina — jest to najobficiej występujące białko na Ziemi.\nB. Fotosystem I (PSI) pochłania światło o długości fali 680 nm, a fotosystem II (PSII) — 700 nm; PSII dostarcza elektrony do PSI przez łańcuch transportu elektronów.\nC. W cyklu Calvina na każde 3 cząsteczki CO₂ zużywane jest 9 ATP i 6 NADPH, a produktem netto jest jedna cząsteczka G3P (aldehydu 3-fosfoglicerynowego).',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase): katalizuje karboksylację RuBP (C5) + CO₂ → 2× 3-fosfoglicerynian (3-PGA, C3); ~50% białka liści; najobfitsze białko na Ziemi (~0,7 mld ton). B — FAŁSZ: odwrotnie — PSI pochłania 700 nm (P700), PSII pochłania 680 nm (P680); PSII dostarcza elektrony do PSI (niespont. Z PSII → plastochinon → Cyt b6f → plastocyjanina → PSI). C — PRAWDA: cykl Calvina (3 obroty na 1 G3P netto): 3 CO₂ + 3 RuBP → 6× 3-PGA → (6 ATP + 6 NADPH) → 6× G3P; 5 G3P (3 ATP) → regeneracja 3 RuBP; 1 G3P do syntezy glukozy. Łącznie: 9 ATP + 6 NADPH na 1 G3P.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Rośliny C3, C4, CAM ───
  {
    subtopic: 'Fizjologia roślin — Rośliny C3, C4 i CAM',
    subtopic_id: S.c3c4,
    question_type: 'single',
    question_text: 'Rośliny C4 (np. kukurydza, trzcina cukrowa) są bardziej wydajne od C3 w gorącym i suchym klimacie. Jaki mechanizm to zapewnia?',
    options: [
      { id: 'A', text: 'Rośliny C4 zagęszczają CO₂ w komórkach pochwy wiązkowej: mezofil wstępnie wiąże CO₂ przez PEP-karboksylazę (C4) → transportuje do pochwy wiązkowej → dekarboxylacja → wysokie lokalne [CO₂] przy RuBisCO → zahamowanie fotooddychania', is_correct: true },
      { id: 'B', text: 'Rośliny C4 nie przeprowadzają cyklu Calvina — wytwarzają ATP bezpośrednio z CO₂ bez pośrednictwa RuBisCO', is_correct: false },
      { id: 'C', text: 'Rośliny C4 mają więcej chlorofilu od C3, dzięki czemu absorbują więcej fotonów i kompensują straty wody przez większą produkcję O₂', is_correct: false },
      { id: 'D', text: 'Rośliny C4 zamykają szparki w dzień i otwierają w nocy — identyczna strategia jak u roślin CAM', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fotooddychanie (photorespiration) u C3: przy wysokiej T i niskim CO₂ RuBisCO wiąże O₂ zamiast CO₂ → oksygenacja RuBP → glicolan-2-fosforan → cykl fotooddychania → CO₂ uwolniony, zużyte ATP i NADPH → straty wydajności do 25%. Rośliny C4 (anatomia Kranza): mezofil (MCC): PEP-karboksylaza (nie wiąże O₂!) + CO₂ → OAA (C4) → jabłczan/asparaginian → transport do komórek pochwy wiązkowej (BSC). BSC: dekarboxylacja → wysokie [CO₂] ≈ 10× wyższe niż w atmosferze → RuBisCO wiąże niemal wyłącznie CO₂ → brak fotooddychania. Korzyść w ciepłym klimacie: mniej strat, wyższa wydajność WUE (water use efficiency). C3: pszenica, ryż, drzewa. C4: kukurydza, sorgo, trzcina cukrowa, proso.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia roślin — Rośliny C3, C4 i CAM',
    subtopic_id: S.c3c4,
    question_type: 'single',
    question_text: 'Metabolizm kwasów tłuszczowych (CAM) to trzecia strategia fotosyntezy. Które stwierdzenie POPRAWNIE opisuje jej mechanizm?',
    options: [
      { id: 'A', text: 'Rośliny CAM otwierają szparki w NOCY (pobierają CO₂) → magazynują go jako jabłczan w wakuoli → w DZIEŃ zamykają szparki, uwalniają CO₂ z jabłczanu i przeprowadzają cykl Calvina — minimalna transpiracja', is_correct: true },
      { id: 'B', text: 'Rośliny CAM prowadzą fotosyntezę wyłącznie w nocy korzystając z księżycowego światła — w dzień są uśpione', is_correct: false },
      { id: 'C', text: 'CAM oznacza, że te rośliny przetwarzają kwasy tłuszczowe (lipidy) zamiast CO₂ — są chemoheterotrofami', is_correct: false },
      { id: 'D', text: 'Rośliny CAM mają szparki otwarte stale — w dzień pobierają CO₂, w nocy wydalają O₂ nagromadzony w ciągu dnia', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'CAM (Crassulacean Acid Metabolism = metabolizm kwasów gruboszowatych): adaptacja sukulentów (kaktusy, agawy, ananasy, gruboszowate) do ekstremalnej suszy. Mechanizm: Noc: szparki OTWARTE → CO₂ wchodzi → PEP-karboksylaza → OAA → jabłczan (malate) magazynowany w wakuoli (stąd kwaśność liści rano). Dzień: szparki ZAMKNIĘTE → jabłczan z wakuoli → dekarboxylacja → CO₂ uwolniony w cytozolu → RuBisCO → cykl Calvina normalnie. Efekt: WUE (water use efficiency) do 6× wyższy niż C3, do 3× wyższy niż C4; cena = wolniejszy wzrost (zamknięte szparki w dzień = mniej CO₂ ogółem). Typy: C3 (pszenica), C4 (kukurydza), CAM (kaktus) — trzy ekologiczne strategie fotosyntezy.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Transpiracja i gospodarka wodna ───
  {
    subtopic: 'Fizjologia roślin — Transpiracja i gospodarka wodna',
    subtopic_id: S.transp,
    question_type: 'single',
    question_text: 'Transpiracja szparkowa stanowi ok. 90% utraty wody przez roślinę. Który czynnik środowiskowy NAJBARDZIEJ przyspiesza transpirację przy stałej temperaturze i otwartych szparkach?',
    options: [
      { id: 'A', text: 'Niska wilgotność względna powietrza (niskie VPD — vapor pressure deficit) — gradient stężenia pary wodnej między liściem a powietrzem jest mały → transpiracja maleje', is_correct: false },
      { id: 'B', text: 'Wysoka wilgotność względna powietrza — para wodna dyfunduje szybciej przez mokre powietrze', is_correct: false },
      { id: 'C', text: 'Niska wilgotność względna powietrza (wysokie VPD) — duży gradient stężenia pary wodnej między nasyconą przestrzenią podszparkową a suchym powietrzem → szybka dyfuzja pary wodnej na zewnątrz', is_correct: true },
      { id: 'D', text: 'Brak wiatru — w bezwietrznych warunkach powietrze przy liściu jest nasycone parą wodną, co przyspiesza transpirację przez efekt "komina"', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Transpiracja: dyfuzja pary wodnej z nasyconej przestrzeni podszparkowej (RH ≈ 100%) do powietrza zewnętrznego. Siłą napędową jest gradient potencjału wodnego (lub VPD = różnica prężności pary wodnej). Czynniki przyspieszające: (1) Niska RH powietrza (wysokie VPD) → duży gradient → szybka dyfuzja. (2) Wysoka temperatura → większe VPD (ciepłe powietrze "wchłania" więcej pary) + szerzej otwarte szparki. (3) Wiatr (ruch powietrza) → usuwa nasyconą warstwę graniczną przy liściu → odnawia gradient. (4) Duże natężenie światła → otwarte szparki. (5) Niska dostępność wody glebowej → zamknięcie szparek (ABA). Paradoks: wiatr przyspiesza transpirację, nie zwalnia. Niska RH (sucho) = więcej transpiracji, nie mniej.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Transport wody i soli mineralnych ───
  {
    subtopic: 'Fizjologia roślin — Transport wody i soli mineralnych',
    subtopic_id: S.trans,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transportu wody i minerałów w roślinie:\nA. Endoderma korzenia z pasem Casparyego (suberyną) blokuje apoplastyczny transport wody — wymusza przejście przez symplast, umożliwiając selektywny dobór jonów do ksylemu.\nB. Przepływ wody przez ksylem jest bierny i nie wymaga energii metabolicznej — napędzany jest siłą ssącą transpiracji (kohezja-tensja) i jest zgodny z gradientem potencjału wodnego.\nC. Transport floemowy asymilatów zachodzi wyłącznie w kierunku od liści do korzeni — produkty fotosyntezy nigdy nie przemieszczają się w górę przez floem.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: pas Casparyego = hydrofobowy pierścień suberyny w ścianach radialnych komórek endodermy → blokuje apoplast → woda i jony przechodzą przez symplast (przez błony z akwaporynami i transporterami) → roślina kontroluje, co trafia do ksylemu. B — PRAWDA: transport ksylemowy jest BIERNY — energetycznie napędzany przez transpirację (siłę ssącą z liści) + parcie korzeniowe (osmoza, czynne); sama woda płynie zgodnie ze spadkiem potencjału wodnego bez bezpośredniego wkładu ATP (ATP używane przy ładowaniu jonów do ksylemu, nie do ruchu wody). C — FAŁSZ: floem transportuje w OBIE strony (source→sink): rośliny owocujące: liście → owoce (w górę lub w dół, zależnie od położenia); wiosną: pączki (sink) pobierają cukry z korzeni (source) przez floem w GÓRĘ; kierunek = zawsze source→sink, niezależnie od orientacji geograficznej.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Odżywianie mineralne roślin ───
  {
    subtopic: 'Fizjologia roślin — Odżywianie mineralne roślin',
    subtopic_id: S.miner,
    question_type: 'single',
    question_text: 'Azot jest makroelementem niezbędnym roślinom do syntezy białek i kwasów nukleinowych. Rośliny pobierają azot ze środowiska głównie w formie:',
    options: [
      { id: 'A', text: 'N₂ (azotu cząsteczkowego) bezpośrednio z powietrza przez szparki — wszystkie rośliny mają zdolność wiązania N₂', is_correct: false },
      { id: 'B', text: 'Jonów azotanowych (NO₃⁻) i amonowych (NH₄⁺) z roztworu glebowego przez aktywny transport w korzeniach; redukcja azotanów do NH₄⁺ zachodzi w korzeniach i liściach', is_correct: true },
      { id: 'C', text: 'Aminokwasów gotowych z gleby — rośliny wchłaniają całe aminokwasy przez włośniki, nie wymagając redukcji azotanów', is_correct: false },
      { id: 'D', text: 'Azotu gazowego wyłącznie przez symbiozę z grzybami mikoryzowymi — bez mikoryzy rośliny są pozbawione azotu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Pobieranie azotu przez rośliny: (1) NO₃⁻ (azotany): przez transportery NRT1/NRT2 (cotransport z H⁺, aktywny) → redukcja: NO₃⁻ → NO₂⁻ (reduktaza azotanowa, cytoplazma, wymaga NADH) → NH₄⁺ (reduktaza azotynowa, plastydy, wymaga Fd). (2) NH₄⁺ (amoniowe): przez transportery AMT; włączane do aminokwasów przez GS/GOGAT (glutamina syntetaza/oksoglutaran aminotransferaza). (3) Wiązanie N₂: NIE bezpośrednio przez rośliny — tylko przez prokarioty: Rhizobium (brodawki korzeniowe u bobowatych = symbioza) lub wolno żyjące: Azotobacter, Anabaena. Nitrogenaza (wymaga ATP i Fd) wiąże N₂ → NH₃. Bobowate (fasola, groch, koniczyna, soja) nie potrzebują nawożenia azotowego dzięki symbiozie.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia roślin — Odżywianie mineralne roślin',
    subtopic_id: S.miner,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących składników mineralnych roślin:\nA. Fosfor (P) wchodzi w skład ATP, NADPH, fosfolipidów błon komórkowych i kwasów nukleinowych — jego niedobór hamuje wzrost i powoduje ciemnopurpurowe zabarwienie liści (akumulacja antocyjanów).\nB. Żelazo (Fe) jest makroelementem — roślina potrzebuje go w dużych ilościach, gdyż wchodzi w skład chlorofilu jako centralny jon metaliczny.\nC. Wapń (Ca²⁺) pełni funkcję strukturalną (blaszka środkowa, ściany komórkowe jako pektynian wapnia) i sygnalizacyjną (wtórny przekaźnik w odpowiedzi na hormony i stres).',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: fosfor = makroelement; niedobór P → purpurowe liście (antocyjany) + zahamowanie wzrostu korzeni; P wchodzi do ATP, NADP(H), DNA, RNA, fosfolipidów, fosforanu cukrów (G3P, RuBP). B — FAŁSZ: żelazo = MIKROELEMENT (potrzebne w śladowych ilościach, ale kluczowe); NIE wchodzi w skład chlorofilu — w centrum chlorofilu jest Mg²⁺ (magnez). Fe wchodzi w skład: ferrredoksyny (Fd) w łańcuchu fot., hem białek cytochromów, nitrogenazy; niedobór Fe → chloroza (żółknięcie liści młodych). C — PRAWDA: Ca²⁺: pektynian Ca = blaszka środkowa między komórkami (spójność tkanki); wolny Ca²⁺ w cytozolu (normalne 100 nM) wzrasta po sygnałach → aktywacja kinaz, kalmodzuliny → odpowiedź na ABA, dotyk, patogeny.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Hormony roślinne ───
  {
    subtopic: 'Fizjologia roślin — Hormony roślinne',
    subtopic_id: S.horm,
    question_type: 'single',
    question_text: 'Auksyny (IAA) są odpowiedzialne za fototropizm pędu. Który mechanizm wyjaśnia zginanie pędu ku światłu?',
    options: [
      { id: 'A', text: 'Światło niszczy auksynę po stronie naświetlonej → mniej IAA po obu stronach → pęd rośnie wolniej i zgina się ku ciemności', is_correct: false },
      { id: 'B', text: 'Fototropiny (receptory niebieskiego światła) inicjują boczne przemieszczenie auksyny na stronę zaciemnioną → wyższe [IAA] po ciemnej stronie → większy wzrost komórek po ciemnej stronie → pęd wygina się ku światłu', is_correct: true },
      { id: 'C', text: 'Światło bezpośrednio pobudza podział komórek po stronie naświetlonej → więcej komórek po jasnej stronie → pęd rośnie ku ciemności', is_correct: false },
      { id: 'D', text: 'Gradient temperatury (cieplej po stronie naświetlonej) powoduje ekspansję komórek po jasnej stronie → pęd wygina się od ciepła', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Fototropizm (Cholodny-Went, 1926): (1) Światło niebieskie (360–480 nm) absorbowane przez fototropiny (PHOT1, PHOT2) w wierzchołku pędu. (2) Inicjuje boczny transport IAA przez PIN-białka (transportery auksyny) na stronę ciemną. (3) Strona ciemna: [IAA] wyższe → aktywacja H⁺-ATPaz → zakwaszenie ściany komórkowej → aktywacja ekspanssyn → elongacja komórek. (4) Strona jasna: mniej IAA → wolniejszy wzrost. (5) Efekt: pęd ugina się ku światłu (fototropizm dodatni). Uwaga: korzenie mają odwrotną wrażliwość na IAA — umiarkowane [IAA] pobudzają, wysokie hamują → korzenie fototropizm ujemny / geotropizm dodatni.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia roślin — Hormony roślinne',
    subtopic_id: S.horm,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE prawdziwe stwierdzenia dotyczące hormonów roślinnych.',
    options: [
      { id: 'A', text: 'Gibereliny (GA) stymulują wydłużanie łodygi (aktywują ekspansyny), indukują kiełkowanie nasion (aktywują α-amylazę w bielmie) i mogą indukować kwitnienie u niektórych roślin długiego dnia', is_correct: true },
      { id: 'B', text: 'Cytokininy (np. zeatyna) promują podział komórek (cyfokinezy), opóźniają starzenie liści (senescencję) i działają antagonistycznie do auksyn przy determinacji korzenia vs pędu (wzajemny stosunek CK:IAA)', is_correct: true },
      { id: 'C', text: 'Kwas abscysynowy (ABA) jest hormonem wzrostu roślin — wysoce stężony ABA powoduje intensywny wzrost i kwitnienie wszystkich gatunków roślin', is_correct: false },
      { id: 'D', text: 'Etylen (C₂H₄) jest gazowym hormonem roślinnym — przyspiesza dojrzewanie owoców, inicjuje opadanie liści (abscyzję) i jest produkowany w odpowiedzi na stres mechaniczny (np. wiatr)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — PRAWDA: gibereliny: wydłużanie między węźlami (aktywacja ekspanssyn i ksynoglukanaz); kiełkowanie (aktywacja α-amylazy w warstwie aleuronowej → trawienie skrobi bielma); kwitnienie (niektóre rośliny długiego dnia). Aplikacja GA₃ → wzrost karłowatych mutantów. B — PRAWDA: cytokininy (adeninowe pochodne): synteza w wierzchołkach korzeni; promują cytokinez (podziały komórkowe); opóźniają chlorofilazy → "zielone wyspy" na starzejących liściach; stosunek CK:IAA determinuje morfogenezę in vitro (wysoki CK/IAA → pędy; niski → korzenie). C — FAŁSZ: ABA = hormon STRESU i INHIBITOR: zamykanie szparek (susza), indukcja dormancji nasion, hamowanie wzrostu, starzenie. D — PRAWDA: etylen: jedyny gazowy hormon; potrójna odpowiedź siewki (zahamowanie wzrostu na długość, pogrubienie, horyzontalizacja); dojrzewanie klimakteryczne owoców (wzrost CO₂ + etylen → autocatalytic); abscyzja liści i owoców.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Ruchy roślin ───
  {
    subtopic: 'Fizjologia roślin — Ruchy roślin',
    subtopic_id: S.ruchy,
    question_type: 'single',
    question_text: 'Ruchy roślin dzielą się na tropizmy (kierunkowe) i nastie (niekierunkowe). Które zestawienie POPRAWNIE przyporządkowuje rodzaje ruchów?',
    options: [
      { id: 'A', text: 'Fototropizm — wzrost ku światłu (kierunkowy, trwały); tygmotropizm — owijanie wąsów wokół podpórki (kierunkowy); termonastia — otwieranie kwiatów tulipana w cieple (niekierunkowa, odwracalna)', is_correct: true },
      { id: 'B', text: 'Geotropizm — ruch zginania liści mimozy (Mimosa pudica) po dotknięciu; fototropizm — ruch korzeni ku wodzie', is_correct: false },
      { id: 'C', text: 'Nastie są ruchami kierunkowymi zależnymi od bodźca; tropizmy — niekierunkowe (odpowiedź jednakowa we wszystkich kierunkach)', is_correct: false },
      { id: 'D', text: 'Wszystkie ruchy roślin są nastiami — rośliny nie mają tropizmów, gdyż nie posiadają systemu nerwowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ruchy roślin: Tropizmy (kierunkowe, trwałe zmiany wzrostu): (1) Fototropizm: ku światłu (pęd +, korzeń −). (2) Geotropizm (gravitropizm): ku grawitacji (korzeń +, pęd −); mechanizm: statocysty z amyloplastami (skrobioplastami) osiadają na dół → sygnał → redystrybucja IAA → niesymetryczny wzrost. (3) Tygmotropizm: wąsy → kontakt z podpórką → asymetryczny wzrost → owijanie. (4) Hydrotropizm: korzenie ku wodzie. Nastie (niekierunkowe, odpowiedź niezależna od kierunku bodźca): (1) Termonastia: tulipan otwiera się w cieple (różny wzrost płatków). (2) Sejsmonastia (tygmonastia): mimoza zamyka liście po dotknięciu (utrata turgoru przez komórki motoryczne poduszeczki — pulvinus). (3) Nyktynastia: rytm dobowy otwarcia/zamknięcia kwiatów.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Kiełkowanie i wzrost ───
  {
    subtopic: 'Fizjologia roślin — Kiełkowanie i wzrost',
    subtopic_id: S.kielk,
    question_type: 'single',
    question_text: 'Kiełkowanie nasion jest inicjowane przez szereg czynników zewnętrznych i wewnętrznych. Które warunki są NIEZBĘDNE do kiełkowania większości nasion?',
    options: [
      { id: 'A', text: 'Woda (uwodnienie nasiona → aktywacja enzymów), odpowiednia temperatura (optymalna enzymatycznie), dostęp tlenu (oddychanie tlenowe → energia na wzrost zarodka) — światło jest wymagane tylko u niektórych gatunków (np. sałata)', is_correct: true },
      { id: 'B', text: 'Wyłącznie światło i ciepło — woda nie jest potrzebna, nasiona kiełkują w suchych warunkach przy silnym naświetleniu', is_correct: false },
      { id: 'C', text: 'Nasiona wymagają: gleby, dwutlenku węgla i ciemności — na świetle kiełkowanie jest zahamowane u wszystkich gatunków', is_correct: false },
      { id: 'D', text: 'Nasiona kiełkują automatycznie po upływie czasu dormancji — żadne czynniki zewnętrzne nie są potrzebne', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Kiełkowanie — wymagania: (1) Woda: nasiono nasiąka (imbibycja) → ekspansja → aktywacja enzymów hydrolitycznych (amylazy, proteazy, lipazy) → mobilizacja rezerw (skrobia → glukoza, białka → aminokwasy, tłuszcze → kwasy tłuszczowe) → energia + budulec dla siewki. (2) Temperatura: enzymy mają optimum temperaturowe; zbyt niska (hamuje enzymy) lub zbyt wysoka (denaturacja); wiele nasion wymaga stratyfikacji (chłodzenie 0–5°C przez kilka tygodni = przełamanie dormancji zimowej). (3) Tlen: zarodek oddycha tlenowo (brak chloroplastów) → ATP do elongacji komórek i transportu. Światło: fotoblastyzm dodatni (sałata, tytoń) — wymagają światła; fotoblastyzm ujemny (pomidor, cebula) — hamuje; większość = afotoneutralnie.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia roślin — Kiełkowanie i wzrost',
    subtopic_id: S.kielk,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wzrostu roślin:\nA. Elongacja komórek roślinnych jest napędzana przez wzrost turgoru i rozluźnienie ściany komórkowej — auksyny aktywują H⁺-ATPazy → zakwaszenie → aktywacja ekspanssyn → rozciąganie ściany.\nB. Dominacja wierzchołkowa polega na tym, że wierzchołek pędu hamuje wzrost pąków bocznych przez wydzielanie cytokinin — usunięcie wierzchołka (przycinanie) eliminuje dominację i pobudza pąki boczne.\nC. Striktolakatony (strigolaktony) to hormony roślinne hamujące rozgałęzianie pędu — działają synergistycznie z auksynami w utrzymaniu dominacji wierzchołkowej.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: wzrost kwasowy (acid growth hypothesis, Hager): IAA → aktywacja H⁺-ATPazy → wyrzut H⁺ do ściany → pH ↓ (do ~4,5) → aktywacja ekspanssyn (białka rozluźniające wiązania między mikrofibrilami celulozowymi i hemicelulozą) → ściana bardziej elastyczna → turgor (napór osmotyczny wody) rozciąga komórkę → elongacja. B — FAŁSZ: dominacja wierzchołkowa: wierzchołek produkuje AUKSYNĘ (IAA), nie cytokininę → IAA transportowany bazypetalnie → hamuje rozgałęzianie (przez mechanizm striktolaktorowy i bezpośredni); cytokininy (korzenie) → promują pąki boczne. Usunięcie wierzchołka → brak IAA → pąki boczne rosną (ogrodnictwo: przycinanie = krzewienie). C — PRAWDA: strigolaktony (SL) produkowane w korzeniach → transportowane do pędów → hamują wzrost pąków bocznych (receptor D14 → degradacja represora BRC1); działają z IAA synergistycznie. Odkryte jako regulatory mikoryzowej symbiozy i kiełkowania pasożytniczych roślin (Striga).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Fotoperiodyzm i kwitnienie ───
  {
    subtopic: 'Fizjologia roślin — Fotoperiodyzm i kwitnienie',
    subtopic_id: S.fotop,
    question_type: 'single',
    question_text: 'Fotoperiodyzm roślin to reakcja na długość dnia i nocy. Które stwierdzenie POPRAWNIE opisuje różnicę między roślinami długiego dnia (LDP) a krótkiego dnia (SDP)?',
    options: [
      { id: 'A', text: 'Rośliny długiego dnia kwitną gdy długość dnia przekracza krytyczną wartość (krótka noc); rośliny krótkiego dnia kwitną gdy długość nocy przekracza wartość krytyczną (długa noc) — obie grupy reagują faktycznie na długość NOCY, a nie dnia', is_correct: true },
      { id: 'B', text: 'LDP kwitną wyłącznie latem, SDP wyłącznie zimą — różnicą jest temperatura, nie długość dnia', is_correct: false },
      { id: 'C', text: 'LDP potrzebują > 16h światła; SDP potrzebują < 8h światła — długość dnia jest jedynym sygnałem kwitnienia bez roli nocy', is_correct: false },
      { id: 'D', text: 'LDP i SDP reagują identycznie na długość dnia — różni je wyłącznie wymaganie temperaturowe (wernalizacja)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fotoperiodyzm (Garner i Allard, 1920): LDP (Long Day Plants): kwitną gdy długość nocy < krytycznej (nocna przerwa ciemności za krótka); przykłady: szpinak, pszenica ozima, dzwonek, malina. SDP (Short Day Plants): kwitną gdy długość nocy > krytycznej (długa noc); przykłady: chryzantema, tytoń, soja, ryż, poinsecja. Kluczowy dowód — noc decyduje, nie dzień: przerwanie długiej nocy błyskiem światła u SDP → nie kwitną (chronometr nocny zresetowany). DNP (Day Neutral Plants): kwitną niezależnie od fotoperiodu (pomidor, groszek, kukurydza). Fitochrom (Pfr/Pr) jest fotoreceptorem; florigen (FLOWERING LOCUS T protein, FT) = sygnał kwitnienia z liści do merystemu.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia roślin — Fotoperiodyzm i kwitnienie',
    subtopic_id: S.fotop,
    question_type: 'single',
    question_text: 'Fitochrom jest fotoreceptorem regulującym wiele procesów w roślinie. Które stwierdzenie POPRAWNIE opisuje jego działanie?',
    options: [
      { id: 'A', text: 'Fitochrom istnieje w dwóch formach: Pr (absorpcja 660 nm = czerwone) i Pfr (absorpcja 730 nm = dalekie czerwone); światło czerwone konwertuje Pr→Pfr (aktywna forma biologicznie); światło dalekie czerwone Pfr→Pr; Pfr w ciemności powoli wraca do Pr', is_correct: true },
      { id: 'B', text: 'Fitochrom absorbuje wyłącznie światło niebieskie (400–500 nm) i reguluje wyłącznie otwieranie szparek — identyczny jak fototropiny', is_correct: false },
      { id: 'C', text: 'Fitochrom Pr (aktywna forma) przekształca się w Pfr pod wpływem ciemności — dlatego rośliny w ciemności szybko inicjują kwitnienie', is_correct: false },
      { id: 'D', text: 'Fitochrom jest obecny wyłącznie w liściach i nie ma wpływu na kiełkowanie nasion ani wzrost siewek', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fitochrom: dimerfotoprotein; apoprotein (fitochrombililinowy chromofor); 2 formy fotoodwracalne: Pr (red-absorbing, max 660 nm, "nieaktywna biologicznie" u większości odpowiedzi) ⇌ Pfr (far-red-absorbing, max 730 nm, "aktywna biologicznie"). Reakcje: czerwone (660 nm) = dzienne → Pr → Pfr; dalekie czerwone (730 nm) = zmierzchowe → Pfr → Pr; ciemność = Pfr → Pr (powolne, "zmierzch biologiczny"). Procesy regulowane przez Pfr: (1) Kiełkowanie nasion fotoblastycznych (sałata: Pfr pobudza); (2) De-etiolation siewek (rozwijanie liścieni, zahamowanie elongacji hipokotyla); (3) Fotoperiodyzm (timer nocny u SDP); (4) Ekspresja genów fotosyntetycznych. Kryptochromy i fototropiny: receptory niebieskiego światła (≠ fitochrom).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia roślin — Transpiracja i gospodarka wodna',
    subtopic_id: S.transp,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących suszy i odpowiedzi rośliny:\nA. Przy niedoborze wody korzenie syntetyzują ABA (kwas abscysynowy), który jest transportowany do liści, gdzie wywołuje zamknięcie szparek przez odpływ K⁺ i wody z komórek szparkowych.\nB. Osmotyczne dostosowanie (akumulacja osmolitów: proliny, sorbitolu, cukrów prostych) to mechanizm, który pozwala roślinie utrzymać turgor przy niższym potencjale wodnym gleby.\nC. Kserofity (rośliny sucholubne) nie mają szparek — zamiast nich mają szczelną kutykułę woskową jako jedyną barierę przed utratą wody.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: sygnał ABA przy suszy: korzenie w suchej glebie → synteza ABA → transport przez ksylem do liści → komórki szparkowe: ABA wiąże receptor PYL/RCAR → hamuje PP2C fosfatazy → aktywacja SnRK2 kinaz → kanały anionowe (SLAC1) otwarte → odpływ Cl⁻/NO₃⁻ → kanały K⁺ outward otwarte → odpływ K⁺ → osmotyczny odpływ wody → utrata turgoru → szparki zamknięte. B — PRAWDA: osmoadjustacja: niski Ψw gleby → roślina syntetyzuje kompatybilne osmolity (nie zaburzają metabolizmu): prolinę (aminokwas), sorbitol, mannitol, cukry, betainy → Ψs spada → wciąż wchłania wodę z suchej gleby. C — FAŁSZ: kserofity MAją szparki — są one głęboko osadzone w zagłębieniach (krypty) z woskiem i włoskami (ograniczenie dyfuzji pary); mają też grubą kutykułę i woskowy naskórek. Brak szparek = brak CO₂ = brak fotosyntezy = niemożliwe.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Fizjologia roślin — Ruchy roślin',
    subtopic_id: S.ruchy,
    question_type: 'single',
    question_text: 'Geotropizm (gravitropizm) korzeni i pędów jest przeciwny w kierunku. Który mechanizm molekularny odpowiada za percepcję grawitacji w roślinie?',
    options: [
      { id: 'A', text: 'Grawitacja jest wykrywana przez komórki kolumelli (czapeczki korzenia) i komórki endodermy łodygi zawierające amyloplasty (statocysty) — te "ciążące" plastydy opadają zgodnie z grawitacją i inicjują asymetryczną redystrybucję IAA', is_correct: true },
      { id: 'B', text: 'Grawitacja jest wykrywana przez chloroplasty, które przesuwają się ku dolnej stronie → asymetryczna fotosynteza → różna elongacja po obu stronach', is_correct: false },
      { id: 'C', text: 'Rośliny nie mają receptorów grawitacji — geotropizm wynika z pasywnego opadania ciężkiego ksylemu ku dołowi przez siłę ciążenia', is_correct: false },
      { id: 'D', text: 'Grawitacja wykrywana jest przez mitochondria, które opadają na dno komórki i blokują oddychanie po dolnej stronie → nierówne ATP → asymetryczny wzrost', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Gravitropizm: (1) Percepcja grawitacji: statocysty = komórki ze statolitami (amyloplasty nasycone skrobią → gęstość ~1,5× cytoplazmy) opadają ku dołowi; w korzeniu: kolumella (wewnętrzna czapeczka); w pędzie: komórki endodermy (z "sedymentującymi" amyloplastami). (2) Transdukcja sygnału: amyloplasty stymulują IP₃/Ca²⁺ lub bezpośredni kontakt z ER → aktywacja PIN-transporterów IAA. (3) Asymetryczna redystrybucja IAA: korzeń: IAA gromadzi się na dolnej stronie → dolna strona: [IAA] wysoka → HAMUJE elongację korzenia (korzenie wrażliwe na IAA!) → górna strona rośnie szybciej → korzeń zgina się w DÓŁ (geotropizm dodatni). Pęd: dolna strona IAA → elongacja → zgina się w GÓRĘ (geotropizm ujemny). Mutanty pin-resistant: brak reakcji na grawitację.',
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
  console.log(`Seeding ${questions.length} mock questions for Fizjologia roslin...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
