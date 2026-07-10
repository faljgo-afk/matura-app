// Seed: mock_questions — Różnorodność organizmów (19 questions)
// These appear in the /mock-exam "Sprawdzian z całego materiału"

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  klasyfikacja: '93f55825-0ec2-45fe-ad8e-ca3dce7bd98a',
  wirusy:       'ade8a64a-1b78-47c6-a317-a90c15dcf367',
  bakterie:     '34a5f416-a22e-438b-b4ff-7d56dd7279a4',
  protisty:     '22562e1a-ecfb-4b00-99c1-7f66be359a7b',
  grzyby:       '44e9a9be-d038-4287-a1fb-819e129d63f9',
  bezkregowce:  '2e08b827-45a1-4f25-a87f-01ca8bdcffda',
  rosliny:      '331cb215-d830-49f5-b3dd-19c5d51b1374',
}

const questions = [
  // ─── Klasyfikacja ───
  {
    subtopic: 'Różnorodność organizmów — Klasyfikacja',
    subtopic_id: S.klasyfikacja,
    question_type: 'single',
    question_text: 'Hierarchiczna klasyfikacja biologiczna (taksonomia) posługuje się rangami systematycznymi. Ułóż poniższe rangi od NAJSZERSZEJ (obejmującej najwięcej organizmów) do NAJWĘŻSZEJ:\nDomena, Gatunek, Gromada, Klasa, Królestwo, Rząd, Rodzaj, Typ',
    options: [
      { id: 'A', text: 'Domena → Królestwo → Typ → Gromada → Klasa → Rząd → Rodzaj → Gatunek', is_correct: false },
      { id: 'B', text: 'Domena → Królestwo → Typ → Klasa → Rząd → Gromada → Rodzaj → Gatunek', is_correct: false },
      { id: 'C', text: 'Domena → Królestwo → Typ → Klasa → Rząd → Rodzina → Rodzaj → Gatunek', is_correct: true },
      { id: 'D', text: 'Królestwo → Domena → Typ → Klasa → Rząd → Rodzina → Rodzaj → Gatunek', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Hierarchia rang (od najwyższej): Domena → Królestwo → Typ (Gromada u zwierząt to niższy poziom) → Klasa → Rząd → Rodzina → Rodzaj → Gatunek. Mnemotechnika: "Dobry Król Typu Klasy Rząd Rodziny Rodzaju Gatunku". Uwaga: "Gromada" w polskiej terminologii to odpowiednik "Klasy" lub "Typu" w zależności od grupy organizmów — najczęściej jest równoważna randze Klasy u bezkręgowców. Domena (Bacteria, Archaea, Eukarya) to najwyższa ranga wprowadzona przez Woese\'a w 1990.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Klasyfikacja',
    subtopic_id: S.klasyfikacja,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących klasyfikacji organizmów:\nA. System trzech domen (Bacteria, Archaea, Eukarya) opiera się głównie na analizie sekwencji rybosomalnego RNA 16S/18S.\nB. Prokarionty tworzą jedną domenę — Bacteria — ponieważ wszystkie organizmy bez jądra komórkowego są do siebie bardzo podobne.\nC. Nazwa gatunkowa w nomenklaturze binominalnej Linneusza składa się z nazwy rodzaju (pisanej wielką literą) i epitetu gatunkowego (pisanego małą literą), obie kursywą.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: Carl Woese (1977–1990) porównał sekwencje 16S rRNA (prokarioty) i 18S rRNA (eukarionty) → odkrył, że archeony są bliżej spokrewnione z eukariontami niż z bakteriami → trzy domeny. B — FAŁSZ: prokarionty to DWIE domeny — Bacteria i Archaea. Archeony mają unikalne błony lipidowe (eterowe wiązania, izoprenoidowe łańcuchy), inne RNA-polimerazy, histony — ewolucyjnie odrębne od bakterii. C — PRAWDA: np. Homo sapiens (rodzaj Homo, epitet sapiens); Escherichia coli; nazwy zawsze kursywą w druku.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Wirusy ───
  {
    subtopic: 'Różnorodność organizmów — Wirusy',
    subtopic_id: S.wirusy,
    question_type: 'single',
    question_text: 'Wirus HIV jest retrowirusem. Co to oznacza dla jego cyklu replikacyjnego?',
    options: [
      { id: 'A', text: 'HIV replikuje się bezpośrednio przez podział binarny wewnątrz komórki T', is_correct: false },
      { id: 'B', text: 'Materiał genetyczny HIV to RNA, które jest odwrotnie transkrybowane do DNA przez odwrotną transkryptazę — DNA integruje się z genomem gospodarza jako prowirus', is_correct: true },
      { id: 'C', text: 'HIV zawiera DNA, które jest transkrybowane do RNA tylko wtedy, gdy komórka T jest aktywna immunologicznie', is_correct: false },
      { id: 'D', text: 'HIV natychmiast niszczy komórkę T przez lizę — nie integruje się z genomem', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Retrowirusy (Retroviridae): materiał genetyczny = ssRNA(+). Cykl: (1) wirus wnika do CD4+ limfocytu T; (2) odwrotna transkryptaza (RT) przepisuje RNA → cDNA (DNA komplementarne); (3) integrazja integruje dsDNA do chromosomu gospodarza → prowirus; (4) transkrypcja z prowirusa → nowe RNA wirusowe i mRNA dla białek; (5) proteaza tnie poliproteiny → montaż nowych wirionów → pączkowanie. HIV atakuje CD4+ limfocyty T, makrofagi i komórki dendrytyczne → AIDS (niedobór odporności). Leki ARV: inhibitory RT (np. zydowudyna), integazy (raltegrawir), proteazy (rytonawir).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Wirusy',
    subtopic_id: S.wirusy,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wirusów:\nA. Wirusy są organizmami, ponieważ są zdolne do samodzielnego rozmnażania się w odpowiednich warunkach.\nB. Bakteriofagi to wirusy infekujące bakterie — mogą niszczyć je przez cykl lityczny lub wbudować się do genomu jako profag (cykl lizogeniczny).\nC. Kapsyd wirusa jest zbudowany z białek kapsomery, które chronią materiał genetyczny wirusa przed degradacją.',
    options: [
      { id: 'A', text: 'F, P, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, P, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — FAŁSZ: wirusy NIE są organizmami — nie mają własnego metabolizmu, nie mogą się replikować bez komórki gospodarza (są obligatoryjnymi pasożytami wewnątrzkomórkowymi). Są acellular (bez komórek). B — PRAWDA: bakteriofagi (fagi): cykl lityczny = replikacja + liza komórki; cykl lizogeniczny = integracja DNA faga z chromosomem bakterii jako profag → przenoszony przy podziale bakterii; stres (np. UV) może indukcję profaga → cykl lityczny. C — PRAWDA: kapsyd = płaszcz białkowy zbudowany z podjednostek (kapsomerów); chroni kwas nukleinowy (DNA lub RNA), pełni funkcję rozpoznawania komórki gospodarza (przy braku osłonki lipidowej).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Bakterie ───
  {
    subtopic: 'Różnorodność organizmów — Bakterie',
    subtopic_id: S.bakterie,
    question_type: 'single',
    question_text: 'Barwienie metodą Grama dzieli bakterie na Gram-dodatnie i Gram-ujemne. Które stwierdzenie POPRAWNIE wyjaśnia różnicę strukturalną odpowiedzialną za wynik barwienia?',
    options: [
      { id: 'A', text: 'Bakterie Gram-dodatnie mają grubą warstwę peptydoglikanu i jedną błonę lipidową — fiolet krystaliczny jest zatrzymywany; Gram-ujemne mają cienki peptydoglikan i dodatkową błonę zewnętrzną (LPS) — fiolet jest wymywany', is_correct: true },
      { id: 'B', text: 'Bakterie Gram-ujemne mają grubszą warstwę peptydoglikanu i dlatego barwią się na fioletowo', is_correct: false },
      { id: 'C', text: 'Gram-dodatnie mają błonę zewnętrzną z lipopolisacharydem (LPS), co powoduje silniejsze barwienie', is_correct: false },
      { id: 'D', text: 'Wynik barwienia Grama zależy od zawartości DNA, a nie od struktury ściany komórkowej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Barwienie Grama (1884): (1) Fiolet krystaliczny + płyn Lugola → kompleks nierozpuszczalny. (2) Odbarwianie acetonem/alkoholem: Gram+ (gruba warstwa PG, 20–80 nm, jedna błona) → PG kurczy się i zatrzymuje kompleks → kolor fioletowy. Gram− (cienki PG, 2–7 nm, + błona zewnętrzna z LPS) → alkohol rozpuszcza błonę zewnętrzną i cienki PG nie zatrzymuje kompleksu → odbarwienie → barwienie fuksyną → kolor różowy. Kliniczne znaczenie: LPS Gram− = endotoksyna → wstrząs septyczny; Gram+ są zazwyczaj bardziej wrażliwe na penicylinę (atakuje syntezę PG).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Bakterie',
    subtopic_id: S.bakterie,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE cechy typowe dla PROKARIONTÓW (Bacteria i Archaea), które odróżniają je od eukariontów.',
    options: [
      { id: 'A', text: 'Brak błonowego jądra komórkowego — DNA (kolisty chromosom) leży w obszarze nukleoidowym w cytoplazmie', is_correct: true },
      { id: 'B', text: 'Rybosomy 70S (podjednostki 30S i 50S) — mniejsze niż rybosomy eukariotyczne (80S)', is_correct: true },
      { id: 'C', text: 'Obecność mitochondriów do produkcji ATP przez fosforylację oksydacyjną', is_correct: false },
      { id: 'D', text: 'Rozmnażanie bezpłciowe przez podział binarny — brak mitozy i mejozy', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — PRAWDA: brak otoczki jądrowej → DNA w nukloidzie; plazmidy (małe koliste DNA) są dodatkowe. B — PRAWDA: rybosomy 70S (30S+50S) u prokariontów; 80S (40S+60S) u eukariontów — różnica wykorzystywana przez antybiotyki (erytromycyna, tetracyklina, streptomycyna atakują 70S, nie wpływają na 80S człowieka). C — FAŁSZ: mitochondria są u eukariontów; prokarioty nie mają błonowych organelli — oddychanie tlenowe zachodzi na błonie komórkowej (mezosom). D — PRAWDA: podział binarny — komórka rośnie, replikuje DNA, dzieli się na dwie komórki córki. Brak wrzeciona podziałowego.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Protisty ───
  {
    subtopic: 'Różnorodność organizmów — Protisty',
    subtopic_id: S.protisty,
    question_type: 'single',
    question_text: 'Plasmodium falciparum (zarodźce malarii) jest protistem pasożytniczym. W organizmie człowieka pasożyt infekuje erytrocyty. Który etap cyklu życiowego Plasmodium zachodzi w erytrocytach człowieka?',
    options: [
      { id: 'A', text: 'Sporozoity: stadium inwazyjne wstrzykiwane przez komara, które docierają do hepatocytów', is_correct: false },
      { id: 'B', text: 'Merozoity: stadium inwazyjne erytrocytów; wewnątrz erytrocytu przechodzą schizogonię (podział bezpłciowy) → nowe merozoity → liza erytrocytu → gorączka', is_correct: true },
      { id: 'C', text: 'Oocysta: stadium odpornościowe rozwijające się w ścianie jelita komara', is_correct: false },
      { id: 'D', text: 'Gametocyty są jedynym stadium obecnym w erytrocytach — nie dochodzi tam do podziałów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Cykl Plasmodium: (1) Komar Anopheles wstrzykuje sporozoity → wątroba (hepatocyty) → schizogonia wątrobowa → merozoity. (2) Merozoity inwadują erytrocyty → trofozoit → schizonty (schizogonia erytrocytarna) → 16–32 nowych merozoitów → liza erytrocytu → uwolnienie merozoitów (→ gorączka co 48 h dla P. falciparum, P. vivax; 72 h dla P. malariae) → nowe erytrocyty. (3) Część merozoitów → gametocyty (makro- i mikrogametocyty) → wciągane przez komara → gamety → zygota → ookieta → oocysta → sporozoity → gruczoły ślinowe komara. Leki: chlorochina (zaburza trawienie hemoglobiny), artemizyna.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Protisty',
    subtopic_id: S.protisty,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących protistów:\nA. Protisty to sztuczna (parafiletyczna) grupa eukariotów — obejmuje organizmy niebędące roślinami, grzybami ani zwierzętami.\nB. Glony (np. Chlamydomonas, Spirogyra) są protistami roślinnopodobnymi — przeprowadzają fotosyntezę i mają chloroplasty.\nC. Pierwotniaki (np. Amoeba, Paramecium) są protistami zwierzęcymi — są wielokomórkowe i mają tkanki.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, P, F', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: protisty = eukarionty inne niż rośliny, grzyby, zwierzęta → grupa sztuczna (parafiletyczna) — łączy ewolucyjnie odległe linie. B — PRAWDA: glony (eukariotyczne) mają chloroplasty (wtórna endosymbioza) → fotosynteza; zalicza się je do protistów autotroficznych. C — FAŁSZ: pierwotniaki (np. ameba, orzęski) są JEDNOKOMÓRKOWE — to jednotkowe eukarionty, brak tkanek i organów; nie są wielokomórkowe (to cecha zwierząt). Nazewnictwo "zwierzęce" oznacza heterotroficzny tryb życia, nie przynależność do zwierząt.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Grzyby ───
  {
    subtopic: 'Różnorodność organizmów — Grzyby',
    subtopic_id: S.grzyby,
    question_type: 'single',
    question_text: 'Grzyby różnią się od roślin pod względem odżywiania. Które stwierdzenie POPRAWNIE opisuje sposób odżywiania się grzybów?',
    options: [
      { id: 'A', text: 'Grzyby są autotrofami — syntetyzują materię organiczną z CO₂ i wody przy pomocy chlorofilu', is_correct: false },
      { id: 'B', text: 'Grzyby są heterotrofami chemosyntetyzującymi — pozyskują energię z utleniania nieorganicznych związków chemicznych', is_correct: false },
      { id: 'C', text: 'Grzyby są heterotrofami trawią zewnątrzkomórkowo (osmotrofami) — wydzielają enzymy hydrolityczne do środowiska i wchłaniają strawione substancje przez strzępki', is_correct: true },
      { id: 'D', text: 'Grzyby pobierają pokarm przez fagocytozę — otaczają cząsteczki pokarmu i trawią je wewnątrz lizosomów', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Grzyby: heterotrofy saprotroficzne (rozkładają martwą materię organiczną), pasożytnicze (np. Candida, Aspergillus) lub tworzą mikoryzę (mutualizm z korzeniami roślin). Mechanizm: strzępki grzyba (hifa) wydzielają enzymy trawienne (celulazy, proteazy, lipazy, amylazy) bezpośrednio do substratu → trawienie zewnątrzkomórkowe → wchłanianie produktów (glukozy, aminokwasów) przez całą powierzchnię strzępek (osmotrofia). Ściana komórkowa z chityny (nie celulozy jak u roślin). Brak chloroplastów. Glikogen jako materiał zapasowy (nie skrobia).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Grzyby',
    subtopic_id: S.grzyby,
    question_type: 'single',
    question_text: 'Porosty (licheny) to organizmy symbiotyczne. Z jakich komponentów się składają i jaka jest korzyść każdego partnera?',
    options: [
      { id: 'A', text: 'Grzyb + roślina naczyniowa; grzyb dostarcza wodę, roślina — cukry z fotosyntezy', is_correct: false },
      { id: 'B', text: 'Grzyb (mykobiont, głównie workowce) + sinica lub zielony glon (fotobiont); grzyb zapewnia schronienie i wodę, fotobiont produkuje cukry przez fotosyntezę', is_correct: true },
      { id: 'C', text: 'Dwa rodzaje grzybów — jeden autotroficzny (z chlorofilem), drugi heterotroficzny; razem tworzą ciało porostu', is_correct: false },
      { id: 'D', text: 'Bakteria azotowa + grzyb; bakteria wiąże azot, grzyb dostarcza węglowodany', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Porost (liszaj): obligatoryjny mutualizm grzyba (mykobiont, ~90% objętości, zwykle workowce — Ascomycota) z fotosyntetyzującym partnerem (fotobiont) — sinicami (Cyanobacteria, prokarioty) lub zielonymi glonami (Chlorophyta, eukarionty). Podział korzyści: fotobiont → fotosynteza → produkuje cukry (glukoza, poliole: rybitol, sorbitol) → dostarcza grzybu; mykobiont → ochrona przed wyschnięciem i UV, woda i minerały z podłoża. Porosty są bioindykatorami czystości powietrza (wrażliwe na SO₂, NO₂) i pionierami ekologicznymi (zasiedlają skały, inicjują sukcesję).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Bezkręgowce ───
  {
    subtopic: 'Różnorodność organizmów — Bezkręgowce',
    subtopic_id: S.bezkregowce,
    question_type: 'single',
    question_text: 'Które z wymienionych grup bezkręgowców posiada PRAWDZIWY celom (wtórna jama ciała wyścielona mezodermalnym nabłonkiem)?',
    options: [
      { id: 'A', text: 'Płazińce (Platyhelminthes) — acoelomates (bez jamy ciała)', is_correct: false },
      { id: 'B', text: 'Nicienie (Nematoda) — pseudocoelomates (pierwotna jama ciała bez nabłonka)', is_correct: false },
      { id: 'C', text: 'Pierścienice (Annelida) — prawdziwy celom (metacelom) wyścielony otrzewną', is_correct: true },
      { id: 'D', text: 'Gąbki (Porifera) — brak tkanek, brak jamy ciała', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Celom (wtórna jama ciała): przestrzeń w mezodermie wyścielona nabłonkiem mezodermalnym (otrzewna). Trzy typy budowy ciała: (1) Acoelomata (np. Platyhelminthes — płazińce, Cnidaria) — brak jamy ciała; (2) Pseudocoelomates (np. Nematoda — nicienie, Rotifera) — pierwotna jama ciała (blastocel) bez nabłonka mezodermalnego; (3) Coelomates — prawdziwy celom: Annelida (pierścienice), Mollusca (mięczaki), Echinodermata (szkarłupnie), Chordata. Pierścienice: celom podzielony przegrodami = metameria (segmentacja) → możliwa niezależna kontrola ruchów poszczególnych segmentów.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Bezkręgowce',
    subtopic_id: S.bezkregowce,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących stawonogów (Arthropoda):\nA. Stawonogi mają zewnętrzny szkielet (egzoszkielet) zbudowany z chityny, który musi być linieony (zrzucany), aby zwierzę mogło rosnąć.\nB. Owady mają trzy pary odnóży i dwie pary skrzydeł — zawsze są skrzydlate.\nC. Pajęczaki (Arachnida) mają cztery pary odnóży i brak czułków — odróżnia je to od owadów (Insecta) i skorupiaków (Crustacea).',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: egzoszkielet z chityny (polimer N-acetyloglukosaminy) → liniowanie (ecdysis) u skorupiaków, owadów, pająków = wzrost możliwy tylko po zrzuceniu starego oskórka. B — FAŁSZ: owady mają 3 pary odnóży (6 nóg), ale NIE zawsze 2 pary skrzydeł — wiele owadów jest bezskrzydłych pierwotnie (Apterygota: skoczogonki, rybiki) lub wtórnie (wszy, pchły). Chrząszcze: 1 para skrzydeł błoniastych + 1 para pokryw (elytra = zmodyfikowane skrzydła). C — PRAWDA: pajęczaki (pająki, roztocze, skorpiony) = 4 pary odnóży, brak czułków, 2 tagmaty (prosoma + opistosoma). Owady = 3 pary nóg, 1 para czułek, 3 tagmaty. Skorupiaki = 5+ par nóg, 2 pary czułek.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Bezkręgowce',
    subtopic_id: S.bezkregowce,
    question_type: 'single',
    question_text: 'Tasiemiec uzbrojony (Taenia solium) jest pasożytem jelitowym człowieka. Wskaż prawidłowy opis jego przystosowania do pasożytniczego trybu życia.',
    options: [
      { id: 'A', text: 'Posiada dobrze rozwinięty układ pokarmowy z jelitem, wątrobą i żołądkiem — trawi pokarm niezależnie od gospodarza', is_correct: false },
      { id: 'B', text: 'Brak układu pokarmowego — wchłania strawione składniki pokarmowe bezpośrednio przez tegument (syncytialny nabłonek okrywający ciało)', is_correct: true },
      { id: 'C', text: 'Posiada układ krążenia i narządy wymiany gazowej — pasożyt tlenowy aktywnie pobierający tlen', is_correct: false },
      { id: 'D', text: 'Każdy proglotyd (człon) tasiemca jest niezależnym organizmem zdolnym do samodzielnego życia', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Tasiemce (Cestoda, płazińce): przystosowania do endopasożytnictwa jelitowego: (1) brak układu pokarmowego — pokarm wchłaniany przez tegument (syncytialny naskórek z mikrokosmkami zwiększającymi powierzchnię wchłaniania); (2) skoleks (głowa) z haczykami i przyssawkami do przyczepu do śluzówki; (3) strobilizacja — ciało = skoleks + szyja + proglottydy (człony) z pełnymi zestawami narządów rozrodczych (obojnaki); (4) jaja produkowane w tysiącach → oonkosfera → wągry (cysticercus) w mięśniach żywiciela pośredniego (świni); (5) brak układu krążenia, anaerob (środowisko jelita beztlenowe).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Rośliny ───
  {
    subtopic: 'Różnorodność organizmów — Rośliny',
    subtopic_id: S.rosliny,
    question_type: 'single',
    question_text: 'W cyklu życiowym paproci (Pterophyta) dominuje:\n(wskaż poprawną odpowiedź z uzasadnieniem)',
    options: [
      { id: 'A', text: 'Gametofit (n) — duży, wieloletni, zielony i samodzielny; sporofit (2n) jest mały i zależny od gametofitu', is_correct: false },
      { id: 'B', text: 'Sporofit (2n) — roślina, którą zwykle widzimy; gametofit (n) to małe, sercowate przedrośle (protalium) żyjące samodzielnie w glebie', is_correct: true },
      { id: 'C', text: 'Oba pokolenia (gametofit i sporofit) są identycznej wielkości i nie można ich odróżnić wizualnie', is_correct: false },
      { id: 'D', text: 'Paprocie nie mają przemiany pokoleń — rozmnażają się wyłącznie wegetatywnie przez kłącza', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Przemiana pokoleń u roślin: u paproci DOMINUJE sporofit (2n) — to roślina z liśćmi (liście = frondy), kłączem, korzeniami. Na spodzie liści: zarodni (sporangia) → mejoza → zarodniki (n). Zarodnik kiełkuje → gametofit (n) = protalium (1–2 cm, sercowate, zielone, samożywne, żyje kilka tygodni w wilgotnym miejscu). Na protalium: rodni (archegonia) z komórką jajową i wiciowce (anteridiów) → zapłodnienie wodą (plemniki są wiciowcami → wymaga wilgoci) → zygota (2n) → nowy sporofit. Tendencja ewolucyjna roślin: dominacja sporofitu rośnie (mszaki: dominuje gametofit → paprocie → nagonasienne → okrytonasienne: gametofit zredukowany do kilku komórek).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Rośliny',
    subtopic_id: S.rosliny,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących roślin nasiennych:\nA. Nagonasienne (Gymnospermae, np. sosna) mają nasiona nieosłonięte — zalążki leżą na łuskach szyszek, nie są zamknięte w owocni.\nB. Okrytonasienne (Angiospermae) mają nasiona otoczone owocnią — owoc jest dojrzałą zalążnią (lub jej częścią) zawierającą nasiona.\nC. U nagonasiennych gametofit żeński to woreczek zalążkowy złożony z siedmiu komórek (8 jąder) — tak samo jak u okrytonasiennych.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, P, F', is_correct: false },
      { id: 'D', text: 'P, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: nagonasienne = "nagie nasiona" (gr. gymnos = nagi); zalążki siedzą na łuskach szyszek (np. sosna, świerk, jodła). Szyszka żeńska = sporofit; po zapyleniu i zapłodnieniu → nasienie bez owocni. B — PRAWDA: okrytonasienne (Angiospermae = "nasiona w naczyniu") → owocnia (z zalążni) otacza nasiona; owoce (jagoda, pestkowiec, torebka) chronią nasiona i służą ich rozprzestrzenianiu. C — FAŁSZ: gametofit żeński okrytonasiennych = woreczek zalążkowy (7 komórek, 8 jąder: 3 antypody, 2 synergidy, 1 oosfera, 1 komórka centralna z 2 jądrami polarnymi). U nagonasiennych gametofit żeński jest większy i wielokomórkowy (np. u sosny kilkaset komórek, bielmo pierwotne) — zupełnie inna budowa.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Rośliny',
    subtopic_id: S.rosliny,
    question_type: 'single',
    question_text: 'Rośliny jednoliścienne (Monocotyledones) różnią się od dwuliściennych (Dicotyledones) pod kilkoma względami. Które zestawienie cech jest POPRAWNE?',
    options: [
      { id: 'A', text: 'Jednoliścienne: 1 liścień, liście z żyłkowaniem równoległym, wiązki przewodzące rozrzucone w łodydze, korzeń wiązkowy (pęczkowy)', is_correct: true },
      { id: 'B', text: 'Jednoliścienne: 2 liścienie, liście z żyłkowaniem siatkowatym, wiązki w okręgu, korzeń palowy (główny)', is_correct: false },
      { id: 'C', text: 'Dwuliścienne: 1 liścień, kwiaty czterocząstkowe, wiązki przewodzące rozrzucone w całej łodydze', is_correct: false },
      { id: 'D', text: 'Jednoliścienne: 2 liścienie, kwiaty trójcząstkowe, brak kambium w łodydze', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Jednoliścienne (Monocotyledoneae): 1 liścień; liście wąskie z żyłkowaniem równoległym (np. trawy, lilie, tulipany, palmy, kukurydza); wiązki przewodzące kolateralnie zamknięte, rozproszone w łodydze (brak kambium warstw pęczkowego → brak wzrostu na grubość drewnem wtórnym); korzeń wiązkowy (pęczkowy, brak korzenia głównego); kwiaty 3-krotne (3 lub 6 płatków). Dwuliścienne (Dicotyledoneae): 2 liścienie; żyłkowanie siatkowate; wiązki w jednym okręgu + kambium → wzrost wtórny (drewno); korzeń palowy (główny z odgałęzieniami); kwiaty 4- lub 5-krotne.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność organizmów — Rośliny',
    subtopic_id: S.rosliny,
    question_type: 'single',
    question_text: 'Mchy (Bryophyta) są roślinami lądowymi, ale silnie zależnymi od wody. Która cecha budowy NAJBARDZIEJ ogranicza mchy do wilgotnych siedlisk?',
    options: [
      { id: 'A', text: 'Brak chlorofilu — mchy nie mogą przeprowadzać fotosyntezy bez wody jako substratu', is_correct: false },
      { id: 'B', text: 'Wiciowe plemniki wymagają warstwy wody do dotarcia do komórki jajowej — zapłodnienie jest możliwe tylko przy obecności wody', is_correct: true },
      { id: 'C', text: 'Mchy mają bardzo grube ściany komórkowe pochłaniające wodę, co utrudnia życie w suchych miejscach', is_correct: false },
      { id: 'D', text: 'Brak wakuoli centralnej powoduje, że mchy więdną w ciągu minut bez wody', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mchy: pierwsze rośliny lądowe, ale "nie w pełni" przystosowane do lądu. Kluczowe ograniczenie: gamety męskie (anterozoid = wiciowiec, 2 wici) muszą przepłynąć przez warstewkę wody (rosa, deszcz) do archegonum z komórką jajową (rodnia). Brak możliwości transferu pyłku przez wiatr (jak u nagonasiennych). Inne ograniczenia: brak tkanek przewodzących (brak ksylemu i floemu — transportują wodę przez osmozę i kapilarność); dominujący gametofit (n) jest mały i delikatny. Sporofit wyrasta na gametoficie i jest od niego zależny pokarmowo. Zamiana "wiciowców" na "pyłek" (= mikrospory) była kluczowym krokiem przystosowania nasiennych do życia na suchym lądzie.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body))
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
  console.log(`Seeding ${questions.length} mock questions for Roznorodnosc organizmow...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
