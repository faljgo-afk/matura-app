// Seed: mock_questions — Różnorodność zwierząt (20 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  parzy:    '9bf9e59b-8bdc-46d2-b6ab-916dad2a8028',
  piersc:   '9a5979f6-3df4-4eda-a3ed-b685fd68671d',
  staw:     '825907dd-fee6-47ab-9b83-87fbab18941b',
  ryby:     'e4f2e4c8-e23e-4e5c-9109-021d3af3c648',
  gady:     'f74eae00-3b0d-43b3-8d4b-9c1926bfca14',
  ssaki:    '64f6fdff-c569-414d-a414-739fd02dca2e',
  porwkrg:  '4f0309a9-4d03-411f-b8d6-e8754b440294',
  przyst:   'ce14c990-8cbe-4d71-8946-f3c362cf9d96',
  rozm:     '84cf9348-1042-491d-b895-4ab150164c94',
}

const questions = [
  // ─── Parzydełkowce i płazińce ───
  {
    subtopic: 'Różnorodność zwierząt — Parzydełkowce i płazińce',
    subtopic_id: S.parzy,
    question_type: 'single',
    question_text: 'Parzydełkowce (Cnidaria) to jedyne zwierzęta posiadające knidocyty. Które stwierdzenie POPRAWNIE opisuje tę cechę i jej znaczenie?',
    options: [
      { id: 'A', text: 'Knidocyty to komórki fotoreceptorowe — parzydełkowce mają najbardziej zaawansowany wzrok w świecie bezkręgowców', is_correct: false },
      { id: 'B', text: 'Knidocyty to specjalne komórki parzące zawierające nematocystę (kapsułę z nawiniętą nitką) — po mechanicznym lub chemicznym pobudzeniu wystrzelają i wstrzykują toksynę; służą do polowania i obrony', is_correct: true },
      { id: 'C', text: 'Knidocyty to komórki tworzące szkielet koralowców — wydzielają CaCO₃ budując rafę koralową', is_correct: false },
      { id: 'D', text: 'Knidocyty są charakterystyczne dla wszystkich bezkręgowców — nazwa pochodzi od greckiego "knido" = skóra', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Parzydełkowce (Cnidaria): symetria promieniowa, diploblastyczne (2 listki: ektoderma + endoderma + mezoglea), jama gastrovaskularna, sieć nerwowa (bez centrum). Knidocyt (nematocyst cell): wyspecjalizowana komórka ektodermy z nematocystą (kapsułą pod ciśnieniem ~150 atm!); na powierzchni cnidocil (mechanoczuły) lub receptory chemiczne; wyzwolenie: nieodwracalne, jednorazowe; nić penetruje ofiarę i wstrzykuje toksynę (neurotoksyna lub białka cytotoksyczne). Podwójny plan budowy: polip (osiadły: np. hydra, koral) i meduza (planktonowa: np. meduza, krążkopław). Przykłady: koralowce (Anthozoa), meduzy (Scyphozoa), hydra (Hydrozoa), ukwiały (Actiniaria).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność zwierząt — Parzydełkowce i płazińce',
    subtopic_id: S.parzy,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących płazińców (Platyhelminthes):\nA. Tasiemce (Cestoda) są endopasożytami — dorosłe formy żyją w jelitach kręgowców, pozbawione są układu pokarmowego i wchłaniają składniki odżywcze całą powierzchnią ciała przez mikrokosmki (mikrotrychy).\nB. Przywry (Trematoda) mają prosty cykl życiowy z jednym żywicielem — człowiek lub ssak jest jedynym gospodarzem.\nC. Wirki (Turbellaria) są wolno żyjące, mają rzęski na powierzchni ciała i prymitywny układ nerwowy w postaci drabinkowego układu zwojów.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: tasiemce (Taenia solium, T. saginata, Diphyllobothrium) — brak układu pokarmowego (ewolucyjna redukcja w środowisku bogatym w pokarm); wchłanianie przez tegument (mikrotrychy zwiększają powierzchnię); skolex (główka z haczykami/przyssawkami) + proglotty (członki z narządami płciowymi). B — FAŁSZ: przywry mają złożone cykle z WIELOMA żywicielami pośrednimi: Fasciola hepatica (przywra wątrobowa): jajo → miracidium → ślimak (Lymnaea) → cerkariu → enkystacja na trawie → ssak (owca, człowiek). Schistosoma: żywiciel pośredni = ślimak wodny; ostateczny = człowiek. C — PRAWDA: Turbellaria (np. Planaria) wolno żyjące w wodzie; rzęski (cilia) na nabłonku do ruchu; układ nerwowy drabinkowy (2 zwoje mózgowe + podłużne pnie nerwowe); zdolność regeneracji.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Pierścienice i mięczaki ───
  {
    subtopic: 'Różnorodność zwierząt — Pierścienice i mięczaki',
    subtopic_id: S.piersc,
    question_type: 'single',
    question_text: 'Pierścienice (Annelida) posiadają szereg cech anatomicznych nieobecnych u płazińców. Które zestawienie POPRAWNIE opisuje plan budowy pierścienic?',
    options: [
      { id: 'A', text: 'Segmentacja (metameryzm), celoma (wtórna jama ciała), zamknięty układ krwionośny, układ wydalniczy z nefrydiami — triploblastyczne (3 listki zarodkowe)', is_correct: true },
      { id: 'B', text: 'Brak segmentacji, otwarta jama ciała (pseudoceloma), otwarta hemolimfa, wydalanie przez protonefrydia — diploblastyczne', is_correct: false },
      { id: 'C', text: 'Pierścienice mają szkielet wewnętrzny (endoszkielet) zbudowany z chityny — identyczny jak u stawonogów', is_correct: false },
      { id: 'D', text: 'Segmentacja u pierścienic jest wyłącznie zewnętrzna — wewnętrznie są niesegmentowane, bez podziałów celomu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Pierścienice (Annelida) = triploblastyczne zwierzęta wtórnojamiste: (1) Metameryzm (segmentacja): ciało podzielone na powtarzające się segmenty (somity) z podobnymi narządami — każdy segment może mieć parę nefrydiów, zwoje nerwowe, mięśnie, naczynia. (2) Celoma (jama wtórna): przestrzeń wypełniona płynem między ektodermą a endodermą (odzielona mezodermalnym nabłonkiem = peritoneum) → hydrostatyczny szkielet, lokomocja. (3) Zamknięty układ krwionośny: krew w naczyniach (aorta grzbietowa pompuje krew). (4) Metanefrydia: wydalanie. (5) Tkanka nerwowa: drabinkowy ośrodkowy układ nerwowy (zwój nadgardłowy + parzyste pnie brzuszne). Przykłady: skąposzczety (dżdżownica), wieloszczety (morskie), pijawki.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność zwierząt — Pierścienice i mięczaki',
    subtopic_id: S.piersc,
    question_type: 'single',
    question_text: 'Mięczaki (Mollusca) to jeden z największych typów zwierząt. Które stwierdzenie POPRAWNIE opisuje różnicę między ośmiornicą (głowonogiem) a ślimakiem (brzuchonogiem)?',
    options: [
      { id: 'A', text: 'Głowonogi (np. ośmiornica, kałamarnica) mają zamknięty układ krwionośny, bardzo rozwinięty mózg i oczy zbliżone złożonością do kręgowców; ślimaki mają otwarty układ krwionośny, hemolimfę i prostszy układ nerwowy', is_correct: true },
      { id: 'B', text: 'Ośmiornica oddycha skrzelami chemicznymi, ślimak — tlenowymi; oba mają identyczny układ nerwowy', is_correct: false },
      { id: 'C', text: 'Głowonogi i brzuchonogi mają identyczny układ krwionośny (otwarty) — różni je wyłącznie liczba ramion', is_correct: false },
      { id: 'D', text: 'Ślimaki mają zamknięty układ krwionośny z hemoglobiną; głowonogi — otwarty z hemocyjaniną', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mięczaki (Mollusca): plan budowy = głowa, noga, trzewioworek + płaszcz (mantle) + muszla (często). Podtypy: Gastropoda (ślimaki, brzuchonogi): asymetryczne, skręcone (torsja); układ krwionośny OTWARTY (hemolimfa w lakunach); radula (tarkowy aparat gębowy). Cephalopoda (głowonogi): ośmiornica, kałamarnica, mątwy, łódkonogi; układ krwionośny ZAMKNIĘTY (wyjątek wśród mięczaków!); 3 serca; hemocyjanina (miedź, niebieskawa krew); bardzo rozwinięty mózg (zwój mózgowy otacza przełyk) i oczy ze źrenicą (zbieżna ewolucja z kręgowcami); kałamarnica — najszybszy bezkręgowiec wodny; ośmiornica — narzędzia, kamuflaż, inteligencja. Bivalvia (małże): bez głowy, bez raduli, filtratory; 2 muszle.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Stawonogi ───
  {
    subtopic: 'Różnorodność zwierząt — Stawonogi',
    subtopic_id: S.staw,
    question_type: 'single',
    question_text: 'Stawonogi (Arthropoda) są największym typem zwierząt pod względem liczby gatunków. Które cechy są WSPÓLNE dla wszystkich stawonogów?',
    options: [
      { id: 'A', text: 'Chitynowy egzoszkielet, segmentowane ciało, jointed appendages (stawowe odnóża), otwarta hemolimfa — brak celomu funkcjonalnego (mixocel)', is_correct: true },
      { id: 'B', text: 'Endoszkielet kostny, segmentacja tylko zewnętrzna, zamknięty układ krwionośny z hemoglobiną', is_correct: false },
      { id: 'C', text: 'Oddychanie wyłącznie przez skrzela wodne — stawonogi lądowe wtórnie powróciły do środowiska wodnego', is_correct: false },
      { id: 'D', text: 'Stawonogi mają 6 odnóży i 3 segmenty ciała — te cechy odróżniają je od innych bezkręgowców', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Stawonogi (Arthropoda) — cechy wspólne: (1) Chitynowy egzoszkielet (pancerz): ochrona + lokomocja + zapobieganie wysychaniu; linienie (ekdysis) umożliwia wzrost. (2) Segmentowane ciało z stawowymi kończynami (arthropoda = "stawowa noga"). (3) Otwarty układ krwionośny: hemolimfa krąży w hemocelu (mixocel = zredukowana celoma). (4) Różne układy oddechowe: skrzela (skorupiaki), tchawki (owady), płucotchawki (pająki). Gromady: Insecta (owady): 6 odnóży, 3 tagi (głowa-tułów-odwłok); Arachnida (pajęczaki): 8 odnóży, 2 tagi (głowotułów-odwłok); Crustacea (skorupiaki): 10+ odnóży; Myriapoda (wij-stonogi). Owady = 75% wszystkich gatunków zwierząt.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność zwierząt — Stawonogi',
    subtopic_id: S.staw,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących owadów:\nA. Metamorfoza zupełna (holometabolia) obejmuje stadia: jajo → larwa → poczwarka → imago; w stadium poczwarki histoliza (rozpad tkanek larwy) i histogeneza (budowa tkanek imago) zachodzą jednocześnie.\nB. Owady oddychają przez płuca — system tchawkowy (tracheae) jest wtórnym przystosowaniem owadów wodnych do życia lądowego.\nC. Pszczoła miodna (Apis mellifera) komunikuje położenie i odległość do źródła pokarmu za pomocą tańca: taniec okrągły (źródło blisko) i taniec ósemkowy (waggle dance, źródło dalej — kąt osi ósemki odpowiada kątowi do Słońca).',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: holometabolia (metamorfoza zupełna) u chrząszczy, motyli, much, pszczół: jajo → larwa (aktywnie żeruje) → poczwarka (kapsula, brak żerowania; wnętrze to "zupa komórkowa" z dyskramiami wyobrażeniowymi = imaginal discs → budują nowe narządy) → imago (osobnik dorosły, rozrodczy). Hemimetabolia (niepełna): jajo → nimfa (miniatura imago) → imago (szarańcza, karaluchy). B — FAŁSZ: system tchawkowy (tracheae + tracheole) to PIERWOTNY układ oddechowy owadów lądowych — powietrze przez przetchlinki (spiracle) → sieć tchawek → bezpośrednio do komórek (bez pośrednictwa krwi dla O₂). C — PRAWDA: von Frisch (Nobel 1973) odkrył tańce pszczół. Taniec okrągły: pokarm < 50 m. Waggle dance: pokarm > 50 m; oś biegu po ósemce = kąt do Słońca; czas wibracji odwłoka ~ odległość.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Ryby i płazy ───
  {
    subtopic: 'Różnorodność zwierząt — Ryby i płazy',
    subtopic_id: S.ryby,
    question_type: 'single',
    question_text: 'Wyjście kręgowców z wody na ląd wiązało się z szeregiem przystosowań. Które cechy płazów (Amphibia) świadczą o tym, że są tylko CZĘŚCIOWO przystosowane do życia lądowego?',
    options: [
      { id: 'A', text: 'Płazy mają 4 kończyny, płuca i serce 3-komorowe — wszystkie te cechy są wyłącznie lądowe i nie wymagają wody', is_correct: false },
      { id: 'B', text: 'Płazy oddychają przez wilgotną skórę (oddychanie skórne) i muszą składać jaja w wodzie (jaja bez błon płodowych, bez muszli) — larwy (kijanki) są wodne i oddychają skrzelami', is_correct: true },
      { id: 'C', text: 'Płazy są w pełni przystosowane do lądu — ich związek z wodą jest wyłącznie ewolucyjny (historyczny), a nie fizjologiczny', is_correct: false },
      { id: 'D', text: 'Płazy mają wodoszczelną, rogową skórę i jaja owodniowe — dlatego są niezależne od wody', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Płazy (Amphibia) = pierwsze czworonogi lądowe (dewon ~375 mln lat), lecz NIEPEŁNE przystosowanie: (1) Skóra naga, wilgotna, bogata w gruczoły śluzowe → transpiracja wodna; oddychanie skórne (30–70% O₂ przez skórę) → muszą pozostawać blisko wody / wilgotnych środowisk. (2) Jaja "amniotyczne" — brak: błon płodowych (amnion, chorion, allantois), twardej skorupy → jaja wysychają na lądzie → muszą być składane w wodzie lub wilgotnym środowisku; larwy (kijanki) są w pełni wodne ze skrzelami. (3) Serce 3-komorowe: 2 przedsionki + 1 komora → częściowe mieszanie krwi utlenowanej i odtlenowanej. Przystosowania lądowe: kończyny (humerus, radius, ulna), płuca (choć słabe), błony bębenkowe, powieki.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność zwierząt — Ryby i płazy',
    subtopic_id: S.ryby,
    question_type: 'single',
    question_text: 'Ryby chrzęstnoszkieletowe (Chondrichthyes, np. rekiny) i ryby kostnoszkieletowe (Osteichthyes, np. karp, dorsz) różnią się budową. Które zestawienie POPRAWNIE opisuje najważniejsze różnice?',
    options: [
      { id: 'A', text: 'Chondrichthyes: szkielet z chrząstki, brak pęcherza pławnego, zapładnianie wewnętrzne (u większości), brak wieczka skrzelowego (operculum); Osteichthyes: szkielet kostny, pęcherz pławny (hydrostatyczny), zapładnianie zewnętrzne (u większości), operculum przykrywa skrzela', is_correct: true },
      { id: 'B', text: 'Osteichthyes mają szkielet chrząstkowy; Chondrichthyes — kostny; oba mają pęcherz pławny', is_correct: false },
      { id: 'C', text: 'Rekiny mają pęcherz pławny i operculum; ryby kostne — brak obu; oba typy mają wyłącznie zapładnianie zewnętrzne', is_correct: false },
      { id: 'D', text: 'Ryby chrzęstno- i kostnoszkieletowe są identyczne budową — różni je wyłącznie środowisko: morskie vs słodkowodne', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Chondrichthyes (rekiny, płaszczki, chimery): szkielet chrząstkowy (lekki, elastyczny); brak pęcherza pławnego → pławność regulowana przez olbrzymią wątrobę z olejami (skwalen); szczeliny skrzelowe odkryte (brak operculum); skóra z zębinowymi łuskami plakoidalnymi; zapładnianie wewnętrzne (pterygopody = zmodyfikowane płetwy miedniczne); jajożywe lub żyworodne. Osteichthyes (ryby kostnoszkieletowe) — 96% ryb: szkielet kostny; pęcherz pławny = hydrostatyczny narząd wypełniony gazem (regulacja głębokości); operculum (wieczko skrzelowe = chroni i pompuje wodę); zapładnianie zewnętrzne (ikra + mlecz) u większości; łuski cykloidalne lub ktenoidalne.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Gady i ptaki ───
  {
    subtopic: 'Różnorodność zwierząt — Gady i ptaki',
    subtopic_id: S.gady,
    question_type: 'single',
    question_text: 'Gady (Reptilia) posiadają jajo owodniowe (amniotic egg) — kluczowe przystosowanie do życia na lądzie. Na czym polega jego przewaga nad jajem płazów?',
    options: [
      { id: 'A', text: 'Jajo owodniowe ma błony płodowe (amnion, chorion, allantois, worek żółtkowy) i skórzastą lub wapienną skorupę — chroni zarodek przed wysychaniem, umożliwia wymianę gazów i gromadzenie odpadów azotowych → niezależność od wody do rozrodu', is_correct: true },
      { id: 'B', text: 'Jajo owodniowe jest mniejsze od jaja płazów, co pozwala gadowi złożyć więcej jaj — przewaga ilościowa, nie jakościowa', is_correct: false },
      { id: 'C', text: 'Jajo owodniowe zawiera mleko matki zamiast żółtka — podobnie jak ssaki, gady karmią zarodki wewnętrznie', is_correct: false },
      { id: 'D', text: 'Jajo owodniowe różni się od jaja płazów wyłącznie większą ilością żółtka; błony płodowe nie istnieją u gadów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Jajo owodniowe (amniotic egg) = rewolucja ewolucyjna: 4 błony płodowe: (1) Amnion: otacza zarodek płynem owodniowym → "przenośny staw"; chroni mechanicznie i przed wysychaniem. (2) Chorion: zewnętrzna błona + wymiana gazów (O₂/CO₂). (3) Allantois: magazyn odpadów azotowych (kwas moczowy u gadów/ptaków, nie toksyczna mocznik/amoniak) + wymiana gazów. (4) Worek żółtkowy: odżywianie zarodka lipidami i białkami. Skorupa (skórzasta u jaszczurek i węży; wapienna u krokodyli i ptaków): bariera przeciwko wysychaniu + wymiana gazów przez pory. Efekt: gady mogły się rozmnażać z dala od wody → kolonizacja suchego lądu. Amnion posiadają: gady, ptaki, ssaki = Amniota.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność zwierząt — Gady i ptaki',
    subtopic_id: S.gady,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ptaków (Aves):\nA. Ptaki są stałocieplne (homeotermiczne) i mają 4-komorowe serce — cechy te łączą je z ssakami i odróżniają od gadów (zmiennocieplnych z niepełnym przegrodą komorową).\nB. Worki powietrzne ptaków (9 worków) służą jako zbiorniki tlenu używane bezpośrednio do oddychania podczas lotu — zastępują płuca w czasie intensywnego wysiłku.\nC. Ptaki są ewolucyjnie najbliżej spokrewnione z teropodami (dinozaurami dwunożnymi) — mają bowiem takie cechy jak pióra (u niektórych dinozaurów znalezione w zapisie kopalnym), kości pneumatyczne i łapę ze szponami.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, F, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: ptaki homeotermiczne (temp. ciała ~40–42°C); 4-komorowe serce (całkowite oddzielenie krążenia płucnego i systemowego) → efektywne zaopatrzenie mięśni w O₂. Gady: 3-komorowe (2 przedsionki + 1 komora z niecałkowitą przegrodą), poza krokodylami (4-komorowe). B — FAŁSZ: worki powietrzne (pneumatyczne) NIE wykonują wymiany gazów (brak naczyń krwionośnych). Funkcja: przepłukiwanie płuc (parabronchii) w sposób jednokierunkowy przy wdechu i wydechu → ciągły przepływ powietrza przez płuca = bardzo wydajna wymiana gazów (lepsza niż u ssaków). C — PRAWDA: ptaki = Avialae w obrębie Theropoda (dinozaury z kłapciorokształtnym zadem). Dowody: Archeopteryx (jurajski "łącznik"); pióra u Microraptor, Anchiornis, Velociraptor; furcula (widełki = zrośnięte obojczyki) u ptaków i teropodów; kości pneumatyczne; digitigrade stance.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Ssaki ───
  {
    subtopic: 'Różnorodność zwierząt — Ssaki',
    subtopic_id: S.ssaki,
    question_type: 'single',
    question_text: 'Ssaki (Mammalia) dzielimy na trzy grupy ze względu na sposób rozrodu. Wskaż prawidłowe zestawienie grup i przykładów.',
    options: [
      { id: 'A', text: 'Stekowce (Monotremata, jajorodne: dziobak, kolczatka) — Torbacze (Marsupialia, żyworodne z torbą: kangur, opos) — Łożyskowce (Eutheria, żyworodne z łożyskiem: psy, człowiek)', is_correct: true },
      { id: 'B', text: 'Stekowce (żyworodne, brak łożyska) — Torbacze (jajorodne) — Łożyskowce (jajorodne z twardą skorupą)', is_correct: false },
      { id: 'C', text: 'Wszystkie ssaki są żyworodne — grupy różnią się wyłącznie budową łożyska (proste, złożone, brak)', is_correct: false },
      { id: 'D', text: 'Stekowce i Torbacze to synonim tej samej grupy — obie nazwy opisują ssaki australijskie; Łożyskowce = ssaki eurazjatyckie i afrykańskie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ssaki (Mammalia): stałocieplne, włosy, gruczoły mleczne (laktacja). 3 podklasy: (1) Stekowce (Monotremata): jajorodne (jedyne ssaki składające jaja z wapienną skorupą!); kloaka; mleko wydziela się przez skórę (brak sutków); 5 gatunków: dziobak + 4 gatunki kolczatek; Australia, Nowa Gwinea; elektrorecepcja u dziobaka. (2) Torbacze (Marsupialia): żyworodne ale z bardzo krótką ciążą (10–40 dni); noworodek niedorozwinięty → torba (marsupium) matki → ssie sutek miesiącami; kangur, koala, wombat, opos (Ameryki = jedyne niezaustrali.); brak lub szczątkowe łożysko. (3) Łożyskowce (Eutheria): długa ciąża, rozwinięte łożysko (chorion+endometrium) → zarodek rozwinięty; 94% ssaków.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Porównanie budowy kręgowców ───
  {
    subtopic: 'Różnorodność zwierząt — Porównanie budowy kręgowców',
    subtopic_id: S.porwkrg,
    question_type: 'single',
    question_text: 'Serce kręgowców ewoluowało od 2-komorowego do 4-komorowego. Wskaż prawidłową kolejność ewolucyjną i odpowiadające jej gromady kręgowców.',
    options: [
      { id: 'A', text: 'Ryby: 2 komory (1 przedsionek + 1 komora); płazy/większość gadów: 3 komory (2P + 1K, niepełna przegroda); krokodyle + ptaki + ssaki: 4 komory (2P + 2K, pełne oddzielenie) — ewolucja ku coraz efektywniejszemu dostarczaniu O₂', is_correct: true },
      { id: 'B', text: 'Ssaki: 2 komory; płazy: 3 komory; ryby: 4 komory — ewolucja od złożonego do prostego', is_correct: false },
      { id: 'C', text: 'Wszystkie kręgowce mają 4-komorowe serce — różni je tylko liczba naczyń wychodzących z serca', is_correct: false },
      { id: 'D', text: 'Ryby: 4 komory; gady: 3 komory; ssaki i ptaki: 2 komory — ewolucja upraszczała budowę serca', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ewolucja serca kręgowców: Ryby (2 komory: sinus venosus → przedsionek → komora → stożek tętniczy): krew żylna przez serce → do skrzeli (utlenowanie) → ciało; pojedyncze krążenie. Płazy (3 komory: 2 przedsionki + 1 komora): 2 obiegi, ale krew miesza się w komorze → mniejsza efektywność. Większość gadów: 3-komorowe z niecałkowitą przegrodą komory (prawie 4-komorowe u waranów). Krokodyle, ptaki, ssaki: 4 komory → całkowite oddzielenie krążenia płucnego od systemowego → utlenowana i odtlenowana krew nie mieszają się → możliwa homeotermia (stałocieplność) bo wysokie zapotrzebowanie na O₂ mięśni. Ciśnienie w krążeniu systemowym wyższe niż płucnym (dlatego lewa komora ma grubsze ściany).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność zwierząt — Porównanie budowy kręgowców',
    subtopic_id: S.porwkrg,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących układu wydalniczego kręgowców:\nA. Ryby słodkowodne aktywnie wydalają ogromne ilości rozcieńczonego moczu — tracą sole przez osmozę i muszą je uzupełniać aktywnie przez skrzela (transportem aktywnym).\nB. Ryby morskie kostnoszkieletowe piją dużo wody morskiej i wydalają mało stężonego moczu — tracą wodę osmotycznie do hipertonicznego środowiska i uzupełniają ją pijąc.\nC. Płazy wydalają głównie kwas moczowy (jak ptaki i gady) — jest nierozpuszczalny w wodzie i umożliwia wydalanie azotu bez utraty wody.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: ryby słodkowodne są hiperosmotyczne (wnętrze stężone) względem słodkiej wody → woda napływa przez osmoze → konieczność wydalania dużych ilości rozcieńczonego moczu przez nerki + aktywne pobieranie Na⁺/Cl⁻ przez skrzela (ATPazy). B — PRAWDA: ryby morskie kostnoszkieletowe są hipoosmotyczne względem wody morskiej → tracą wodę osmotycznie → piją aktywnie wodę morską + wydalają sól przez skrzela (specjalne komórki chlorkowe) + wydalają skąpy, stężony mocz. Wyjątek: rekiny hipertoniczne (retencja mocznika i TMAO = trimetyloaminotlenek). C — FAŁSZ: płazy wydalają głównie MOCZNIK (ureotele), jak ssaki. Amoniak (ammoniotele): ryby, bezkręgowce wodne — toksyczny, wymaga dużo wody. Kwas moczowy (uricotele): ptaki, gady, owady — nierozpuszczalny; suche środowisko; jaja owodniowe.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Przystosowania kręgowców ───
  {
    subtopic: 'Różnorodność zwierząt — Przystosowania kręgowców',
    subtopic_id: S.przyst,
    question_type: 'single',
    question_text: 'Hibernacja (sen zimowy) i estywacja (sen letni) to przykłady torporu — stanu obniżonej aktywności metabolicznej. Które stwierdzenie POPRAWNIE opisuje fizjologię hibernacji?',
    options: [
      { id: 'A', text: 'Podczas hibernacji temperatura ciała może spaść do 1–5°C, tętno do kilku uderzeń/min, oddech do 1–2 razy/min; metabolizm spada o 95–99% — zwierzę żyje z zapasów tłuszczu brunatnego', is_correct: true },
      { id: 'B', text: 'Hibernacja to stan identyczny ze zwykłym snem — różni je wyłącznie czas trwania (zimowy sen trwa dłużej)', is_correct: false },
      { id: 'C', text: 'Podczas hibernacji temperatura ciała pozostaje stała (homeotermiczna) — metabolizm nie spada, lecz energia pochodzi z trawienia kości', is_correct: false },
      { id: 'D', text: 'Hibernują wyłącznie gadzi zmiennocieplni — ssaki i ptaki nie mogą obniżyć temperatury ciała', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Hibernacja (sen zimowy) u ssaków (np. borsuk, świstak, niedźwiedź, jeż, popielica): głęboka hibernacja: T ciała ≈ 1–5°C (bliskie temp. otoczenia); HR < 10 ud/min (normalne 100–200); oddech 1–2/min; metabolizm spada o ~95%. Mniej głęboka (niedźwiedź): T ≈ 31°C, HR 8–40. Energia: gromadzony latem tłuszcz biały (zapasy kaloryczne) + tłuszcz brunatny (BAT, bogaty w mitochondria z termogeniną UCP1 → wytwarzanie ciepła zamiast ATP → "budzenie"). Estywacja: odpowiednik letni w warunkach suszy (np. ślimaki, ośmiornica, krokodyle). Torpor dzienny (dzienny torpor): kolibry, jeże, myszy — krótkotrwały (kilka godzin) torpor nocny/dzienny. Zimozwier (zimujące aktywne) vs hibernanty.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność zwierząt — Przystosowania kręgowców',
    subtopic_id: S.przyst,
    question_type: 'single',
    question_text: 'Echolokacja u nietoperzy i delfinów to przykład konwergencji ewolucyjnej. Które stwierdzenie POPRAWNIE opisuje zasadę działania echolokacji u nietoperzy?',
    options: [
      { id: 'A', text: 'Nietoperz emituje ultradźwięki (20–200 kHz) krtanią lub nosem → fale odbitą od obiektów wracają do ucha → analizy różnicy czasu, częstotliwości (efekt Dopplera) i natężenia → 3D "mapa" otoczenia w korze słuchowej', is_correct: true },
      { id: 'B', text: 'Echolokacja u nietoperzy działa na zasadzie widzenia w podczerwieni (IR) — emitują promieniowanie cieplne i rejestrują echo termiczne ciepłych ofiar', is_correct: false },
      { id: 'C', text: 'Nietoperze emitują dźwięki słyszalne dla człowieka (4–20 kHz) przez skrzydła — wibracje membranowe tworzą echo', is_correct: false },
      { id: 'D', text: 'Echolokacja polega na wydzielaniu elektrycznych impulsów, identycznie jak u ryb elektrycznych (Electrophorus) — delfiny i nietoperze mają elektryczne narządy Lorenziniego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Echolokacja (biosonar) u Chiroptera: krtaniowe (Laryngeal echolocation): mięśnie krtani emitują ultradźwięki (najczęściej 40–80 kHz, zakres: 14–200 kHz) → wychodzą przez usta lub nozdrza; duże małżowiny uszne wychwytują odbicia. Przetwarzanie: AVCN, ICN, kora słuchowa; analizowane: czas opóźnienia (= odległość); efekt Dopplera (= prędkość i kierunek ruchu ofiary); natężenie i spektrum (= kształt). Constant frequency (CF) emitters: utrzymują stałą częstotliwość emisji i odczytują Doppler precyzyjnie. Frequency modulated (FM) sweeps: do oceny odległości i tekstury. Delfiny (Odontoceti): echolokacja przez melon (organ tłuszczowy w głowie) → kliknięcia; analogiczna zasada, niezależna ewolucja (konwergencja).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Rozmnażanie zwierząt ───
  {
    subtopic: 'Różnorodność zwierząt — Rozmnażanie zwierząt',
    subtopic_id: S.rozm,
    question_type: 'single',
    question_text: 'Rozmnażanie bezpłciowe i płciowe mają różne konsekwencje ewolucyjne. Które stwierdzenie POPRAWNIE opisuje przewagę rozmnażania płciowego?',
    options: [
      { id: 'A', text: 'Rozmnażanie płciowe zwiększa zmienność genetyczną potomstwa (rekombinacja + losowe połączenie gamet) → szybsza adaptacja do zmiennych warunków środowiska (koewolucja z patogenami: hipoteza Czerwonej Królowej)', is_correct: true },
      { id: 'B', text: 'Rozmnażanie płciowe jest szybsze niż bezpłciowe — organizm płciowy produkuje potomstwo dwukrotnie szybciej', is_correct: false },
      { id: 'C', text: 'Rozmnażanie bezpłciowe zawsze prowadzi do wymierania gatunku po kilku pokoleniach, ponieważ nie generuje żadnej zmienności', is_correct: false },
      { id: 'D', text: 'Rozmnażanie płciowe jest tańsze energetycznie — samce wspomagają samice w produkcji jaj, co podwaja efektywność reprodukcji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Rozmnażanie bezpłciowe: klony (potomstwo genetycznie identyczne z rodzicem); szybkie (1 osobnik → wiele potomków); brak kosztów szukania partnera; przykłady: pączkowanie (hydra, drożdże), fragmentacja (rozgwiazdy, dżdżownice), partenogeneza (pszczoły — trutnie). Rozmnażanie płciowe: zmienność genetyczna przez (1) crossing over w mejozie, (2) niezależna segregacja chromosomów, (3) losowe łączenie gamet, (4) mutacje. Hipoteza Czerwonej Królowej (Van Valen, 1973): koewolucja z patogenami → patogen dostosowuje się do genetycznie jednorodnych klonów efektywnie; osobniki płciowe → zmienność → patogen "przegrywa" → utrzymuje się równowaga. Koszt płciowości: "2-krotny koszt samców" (samce nie produkują bezpośrednio potomków).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Różnorodność zwierząt — Rozmnażanie zwierząt',
    subtopic_id: S.rozm,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących strategii rozrodczych zwierząt:\nA. Strategia r-selekcji (r-strategists) charakteryzuje się: liczne potomstwo, mały rozmiar ciała, krótki czas życia, mała opieka rodzicielska — typowa dla owadów, drobnych gryzoni, chwastów w niestabilnych środowiskach.\nB. Strategia K-selekcji (K-strategists) charakteryzuje się: nieliczne potomstwo, duży rozmiar ciała, długi czas życia, intensywna opieka rodzicielska — typowa dla słoni, wielorybów, człowieka w środowiskach zbliżonych do pojemności środowiska K.\nC. Partenogeneza obligatoryjna (obowiązkowe rozmnażanie bez zapłodnienia) jest możliwa wyłącznie u owadów — żaden kręgowiec nie może się rozmnażać partenogenetycznie.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, P, F', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: r-selekcja (r = tempo wzrostu populacji): maksymalizacja liczby potomków w nieprzewidywalnych środowiskach; owady, drobne gryzonie, jednoroczne rośliny, bakterie. B — PRAWDA: K-selekcja (K = pojemność środowiska): jakość potomka ważniejsza niż ilość; słonie (1 cielę co 4–5 lat, ciąża 22 mies.), wieloryby, człowiek, albatrosy, dęby. Opieka rodzicielska = inwestycja w przeżywalność każdego osobnika. C — FAŁSZ: partenogeneza kręgowców istnieje! Obligatoryjna: niektóre jaszczurki (Cnemidophorus, Lacerta) — populacje wyłącznie samic; komodo (Varanus komodoensis) — fakultatywna; kilka gatunków węży. Przypadkowa: rekiny, raje w niewoli.',
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
  console.log(`Seeding ${questions.length} mock questions for Roznorodnosc zwierzat...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
