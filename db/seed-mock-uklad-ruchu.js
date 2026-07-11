// Seed: mock_questions — Układ ruchu człowieka (20 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  kost:   '81b1ff0e-35ce-4ab3-9442-cbe175a409e2',
  kosci:  '41d461d3-7688-475f-bd67-3c61d46b0127',
  staw:   '4b0f4c0b-7c18-48c4-9599-a7f7d619db94',
  miesn:  '5837158f-0ba4-47e2-8f59-4d8888b5feab',
  skurcz: '33ff4db4-4b68-4c16-846d-f6db534b5752',
  zmecz:  '957b8505-0f02-4284-900d-854311b0952a',
  chor:   '7552bf0c-5c0d-4f28-8549-8326ae76b95c',
}

const questions = [
  // ─── Tkanka kostna ───
  {
    subtopic: 'Układ ruchu człowieka — Tkanka kostna',
    subtopic_id: S.kost,
    question_type: 'single',
    question_text: 'Tkanka kostna jest żywą tkanką łączną stale przebudowywaną przez osteoblasty i osteoklasty. Które zestawienie POPRAWNIE opisuje role tych komórek?',
    options: [
      { id: 'A', text: 'Osteoblasty: syntetyzują macierz kostną (kolagen I + hydroksyapatyt), mineralizują i różnicują się w osteocyty; osteoklasty: wielojądrowe komórki pochodzenia monocytarnego, resorbują tkankę kostną przez wydzielanie H⁺ i proteaz (katepsyna K)', is_correct: true },
      { id: 'B', text: 'Osteoklasty syntetyzują i mineralizują macierz kostną; osteoblasty resorbują tkankę kostną przez produkcję kolagenazy', is_correct: false },
      { id: 'C', text: 'Osteoblasty i osteoklasty pełnią identyczną funkcję — oba typy komórek jednocześnie budują i niszczą tkankę kostną; różni je tylko lokalizacja w kości', is_correct: false },
      { id: 'D', text: 'Osteocyty (dojrzałe komórki kostne) są odpowiedzialne za resorpcję kości; osteoblasty i osteoklasty są komórkami prekursorowymi bez aktywności metabolicznej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Tkanka kostna — komórki: (1) Osteoblasty: jednojądrowe komórki mezenchymalne; syntetyzują macierz organiczną (osteoid): kolagen I (90%) + proteoglikany, osteonektyna, osteokalcyna; mineralizują przez wytrącanie hydroksyapatytu [Ca₁₀(PO₄)₆(OH)₂]; po "zamknięciu" w macierzy stają się osteocytami. (2) Osteocyty: dojrzałe komórki w lakunkach; połączone wypustkami przez kanaliki kostne → mechanosensoryka i komunikacja jonowa; regulują gospodarkę Ca²⁺; nie dzielą się. (3) Osteoklasty: wielojądrowe (10–100 jąder), pochodzenie z monocytów/makrofagów; aktywowane przez RANKL (produkowany przez osteoblasty i limfocyty T); tworzą "sealed zone" (podosomal belt) → wydzielają H⁺ (pompa H⁺-ATPaza) → demineralizacja + katepsyna K → trawienie kolagenu; hamowane przez osteoprotegerinę (OPG). Przebudowa (remodeling): sprzężona aktywność osteoblastów i osteoklastów → naprawa mikrouszkodzeń, adaptacja do obciążeń, gospodarka minerałami.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Tkanka kostna',
    subtopic_id: S.kost,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących tkanki kostnej:\nA. Tkanka kostna zbudowana jest z macierzy organicznej (kolagen I) nadającej jej elastyczność oraz nieorganicznej (hydroksyapatyt — kryształy fosforanu wapnia) nadającej twardość — połączenie tych dwóch składników decyduje o wyjątkowej wytrzymałości kości.\nB. Osteoporoza to choroba polegająca na zmniejszeniu gęstości mineralnej kości (BMD) — wynika z przewagi resorpcji nad syntezą tkanki kostnej; czynniki ryzyka to niedobór estrogenów, witaminy D i Ca²⁺, brak aktywności fizycznej.\nC. Witamina D (kalcytriol) produkowana jest wyłącznie w wątrobie i jej jedyna funkcja to wchłanianie wapnia z pokarmu w żołądku.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: macierz kostna: 35% organiczna (kolagen I = sprężystość, odporność na zginanie; proteoglikany; glikoproteiny: osteonektyna wiążąca Ca²⁺, osteokalcyna marker obrotu kostnego) + 65% nieorganiczna (hydroksyapatyt Ca₁₀(PO₄)₆(OH)₂ = twardość, odporność na kompresję). Odtłuszczona kość (bez minerałów) = elastyczna, giętka; odwapniona kość (bez kolagenu) = krucha. B — PRAWDA: osteoporoza: gęstość mineralna kości T-score < −2,5 SD; po menopauzie: brak estrogenów → ↑RANKL → ↑osteoklasty; ↑ryzyko złamań (kręgosłup, biodro, nadgarstek). Profilaktyka: Ca (1000–1200 mg/d), wit. D (800–2000 IU/d), ćwiczenia obciążeniowe, bisfosfoniany. C — FAŁSZ: witamina D: (1) skóra: UV-B → 7-dehydrocholesterol → cholekalcyferol (D3); (2) wątroba: 25-hydroksylaza → 25(OH)D₃ (kalcydiol, forma krążąca); (3) NERKA: 1α-hydroksylaza → 1,25(OH)₂D₃ (kalcytriol, forma aktywna). Funkcje: ↑wchłanianie Ca²⁺ i PO₄³⁻ w jelicie cienkim (kalbindyna); ↑reabsorpcja Ca²⁺ w nerce; modulacja układu odpornościowego; różnicowanie komórek. Niedobór: krzywica (dzieci), osteomalacja (dorośli).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Tkanka kostna',
    subtopic_id: S.kost,
    question_type: 'single',
    question_text: 'Kość długa (np. kość udowa) ma charakterystyczną budowę. Które zestawienie POPRAWNIE opisuje jej elementy?',
    options: [
      { id: 'A', text: 'Trzon (diafiza): kość zbitą (osteon = system Haversa: blaszki koncentryczne + kanał Haversa z naczyniem + osteocyty w lakunkach) + szpik żółty (tłuszcz); epifiza: kość gąbczasta (beleczki) + szpik czerwony (hematopoeza); chrząstka wzrostowa (nasadowa) między trzonem a epifizą', is_correct: true },
      { id: 'B', text: 'Epifiza: kość zbita z osteony; trzon: kość gąbczasta z szpikiem czerwonym; chrząstka nasadowa leży na powierzchni zewnętrznej trzonu', is_correct: false },
      { id: 'C', text: 'Kości długie nie mają szpiku — cały wewnętrzny kanał wypełnia chrząstka szklista jako materiał amortyzujący wstrząsy', is_correct: false },
      { id: 'D', text: 'Osteon (system Haversa) jest charakterystyczny wyłącznie dla kości gąbczastej epifiz; trzon kości długich zbudowany jest z nieuporządkowanej tkanki łącznej włóknistej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Budowa kości długiej: (1) Okostna (periosteum): zewnętrzna warstwa włóknista (kolagen, naczynia, nerwy) + wewnętrzna warstwa osteogenna (osteoblasty, osteoprogenitory) → wzrost na grubość, naprawa. (2) Trzon (diafiza): kość zbita (compacta) = osteony (systemy Haversa): blaszki koncentryczne otaczające kanał Haversa z tętniczką, żyłką i nerwem; kanały Volkmanna = poprzeczne połączenia Haversa; osteocyty w lakunkach połączone kanalikiami; kanał szpikowy = szpik żółty (tkanka tłuszczowa, rezerwuar energii, u dorosłych). (3) Epifiza: kość gąbczasta (spongiosa/trabecularna) = beleczki (trabekulae) ułożone wzdłuż linii sił → optymalizacja biomechaniczna; przestrzenie wypełnione szpikiem czerwonym (hematopoeza: erytrocyty, leukocyty, płytki krwi) u dzieci, u dorosłych głównie kręgi, mostowe, biodro. (4) Chrząstka nasadowa (płytka wzrostowa, epifizarna): chondrocyty dzielące się → wzrost kości na długość; kostnieje po zakończeniu wzrostu (~18–25 lat).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Kości i ich połączenia ───
  {
    subtopic: 'Układ ruchu człowieka — Kości i ich połączenia',
    subtopic_id: S.kosci,
    question_type: 'single',
    question_text: 'Połączenia kości można podzielić na stałe i ruchome. Które zestawienie POPRAWNIE przyporządkowuje typ połączenia do przykładu?',
    options: [
      { id: 'A', text: 'Szwy czaszki: synarthroza (ścisłe, włókniste, brak ruchomości) — u dorosłych kości czaszki ściśle zrośnięte; spojenie łonowe: amfiarthroza (chrząstkowe, nieznaczna ruchomość); staw kolanowy: diartroza (staw maziowy, szeroki zakres ruchu)', is_correct: true },
      { id: 'B', text: 'Szwy czaszki: diartroza z chrząstką stawową; spojenie łonowe: synarthroza włóknista; staw kolanowy: amfiarthroza bez jamy stawowej', is_correct: false },
      { id: 'C', text: 'Wszystkie połączenia kości u dorosłego człowieka są diartrozami — w toku ontogenezy wszystkie chrząstki i włókniste połączenia przekształcają się w stawy maziowe', is_correct: false },
      { id: 'D', text: 'Kości czaszki noworodka są połączone diartrozami (stawami maziowymi); po urodzeniu szwy kostne zastępują stawowe chrząstki — synartroza jest cechą wyłącznie dojrzałego układu kostnego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Klasyfikacja połączeń kości: (1) Synartroza (połączenia stałe): ścisłe, mało lub całkowicie nieruchiome; podtypy: szwy (suturae) — czaszka, tkankowłóknista, u noworodka ciemiączka → kosteją 18 m–2 r.ż.; syndesmoza — piszczel-strzałka (więzozrost); synchondroza — chrząstka między żebrami a mostkiem, chrząstka nasadowa; synostoza — zrost kostny (np. kości miednicy). (2) Amfiarthroza (połączenia półruchome): krążki międzykręgowe (dyski), spojenie łonowe (symphysis pubica: chrząstka włóknista); umiarkowana ruchomość, amortyzacja wstrząsów. (3) Diartroza (stawy maziowe, articulationes synoviales): jama stawowa + błona maziowa (mazi stawowa) + torebka stawowa + chrząstka stawowa (hialinowa); szerokie spektrum ruchów; podtypy: zawiasowy (łokieć, kolano), kulisto-panewkowy (biodro, bark), siodełkowy (kciuk), obrotowy (oś kręgosłupa), płaski (kości nadgarstka).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Kości i ich połączenia',
    subtopic_id: S.kosci,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących szkieletu człowieka:\nA. Szkielet człowieka dorosłego składa się z 206 kości i dzieli się na osiowy (czaszka, kręgosłup, żebra, mostek) oraz obwodowy (kończyny górne i dolne wraz z obręczami).\nB. Kręgosłup człowieka ma 4 krzywizny: lordoza szyjna i lędźwiowa (wygięcie ku przodowi) oraz kifoza piersiowa i krzyżowa (ku tyłowi) — krzywizny te zwiększają wytrzymałość na wstrząsy w pozycji pionowej.\nC. Kości płaskie (np. łopatka, kości sklepienia czaszki) zbudowane są wyłącznie z kości zbitej bez szpiku i nie uczestniczą w hematopoezie.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, P', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: 206 kości (noworodek ma ok. 270–300 – wiele zrasta się w toku rozwoju); szkielet osiowy (80 kości): czaszka (22), kręgosłup (26: 7C+12T+5L+kość krzyżowa+guziczna), żebra (24), mostek (1); szkielet obwodowy (126 kości): obręcz barkowa + kończyny górne, obręcz miednicza + kończyny dolne. B — PRAWDA: 4 krzywizny (widok z boku): lordoza szyjna (C) = wgłębienie ku przodowi; kifoza piersiowa (T) = wybrzuszenie ku tyłowi; lordoza lędźwiowa (L) = wgłębienie ku przodowi; kifoza krzyżowo-guziczna = ku tyłowi. Noworodek = tylko kifoza – lordozy kształtują się wraz z postawą pionową. Patologie: nadmierna kifoza (garb), boczne skrzywienie = skolioza. C — FAŁSZ: kości płaskie MAJĄ diplo (kość gąbczasta) między dwiema blaszkami kości zbitej; szpik czerwony w kościach płaskich (mostek, łopatka, kości czaszki) i krótkich czynnie uczestniczy w hematopoezie u dorosłych (stąd mostek i talerz kości biodrowej = miejsca pobrania szpiku do biopsji).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Budowa stawu ───
  {
    subtopic: 'Układ ruchu człowieka — Budowa stawu',
    subtopic_id: S.staw,
    question_type: 'single',
    question_text: 'Staw kolanowy jest największym stawem człowieka i zawiera dodatkowe struktury. Które zestawienie POPRAWNIE wymienia elementy tego stawu i ich funkcje?',
    options: [
      { id: 'A', text: 'Łąkotki (menisci): krążki chrząstki włóknistej — pogłębiają panewkę, amortyzują wstrząsy, rozkładają obciążenia; więzadła krzyżowe (ACL/PCL): zapobiegają przemieszczeniu piszczeli względem uda; więzadła poboczne (MCL/LCL): stabilizacja boczna', is_correct: true },
      { id: 'B', text: 'Łąkotki są zbudowane z tkanki kostnej i służą jako dodatkowe kości stawu; więzadła krzyżowe hamują rotację biodra, nie kolana', is_correct: false },
      { id: 'C', text: 'Staw kolanowy jest stawem kulistym o 3 osiach ruchu — może wykonywać zginanie, prostowanie, odwodzenie, przywodzenie i rotację we wszystkich płaszczyznach bez ograniczeń', is_correct: false },
      { id: 'D', text: 'Mazi stawowa produkowana przez chrząstkę stawową odżywia chrząstkę; więzadła stawowe są zbudowane z chrząstki hialinowej i mają zdolność regeneracji taką samą jak tkanka mięśniowa', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Staw kolanowy (genu): staw zawiasowy zmodyfikowany (główny ruch: zginanie/prostowanie + ograniczona rotacja przy zgięciu). Elementy: (1) Łąkotki (menisci medialis i lateralis): chrząstka włóknista w kształcie półksiężyców; pogłębiają niekongruentną powierzchnię; rozkładają obciążenie (bez łąkotek 3× większe naprężenie na chrząstkę); amortyzacja; stabilizacja dynamiczna. Uszkodzenie (skręt) → ból, blokowanie stawu, zabieg artroskopowy. (2) Więzadła krzyżowe: ACL (przednie krzyżowe, anteromedial bundle) = hamuje przednie przesunięcie piszczeli (Lachman test, pivot shift); PCL (tylne) = hamuje tylne przesunięcie piszczeli. (3) Więzadła poboczne: MCL (przyśrodkowe, kolateralne) – chronią przed valgus; LCL (boczne) – przed varus. (4) Torebka stawowa + kaletki maziowe (np. przedrzepkowa). (5) Chrząstka stawowa hialinowa (rzepka, kłykcie, plateau kości piszczelowej) – brak naczyń i nerwów → słaba regeneracja. (6) Mazi stawowa: dializ osocza + kwas hialuronowy (produkowany przez synowiocyty) → smarowanie + odżywianie chrząstki (dyfuzja).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Budowa stawu',
    subtopic_id: S.staw,
    question_type: 'single',
    question_text: 'Chrząstka stawowa (hialinowa) pokrywa powierzchnie stawowe. Które stwierdzenie POPRAWNIE opisuje jej właściwości i ograniczenia?',
    options: [
      { id: 'A', text: 'Chrząstka hialinowa nie ma naczyń krwionośnych ani nerwów — odżywiana dyfuzją z mazi stawowej i kości podchrzęstnej; z tego powodu jej zdolność do regeneracji po uszkodzeniu jest bardzo ograniczona', is_correct: true },
      { id: 'B', text: 'Chrząstka stawowa jest bogato unaczyniona przez naczynia wnikające z torebki stawowej — regeneruje się szybko jak skóra po skaleczeniu', is_correct: false },
      { id: 'C', text: 'Chrząstka hialinowa stawów zbudowana jest z kolagenu IV i lamininy (jak błona podstawna) — jej sztywność pochodzi z gęsto upakowanych włókien elastyny', is_correct: false },
      { id: 'D', text: 'Chrząstka stawowa zawiera gęstą sieć nerwów bólowych — ból przy chorobie zwyrodnieniowej pochodzi bezpośrednio z uszkodzonych chondrocytów w chrząstce', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Chrząstka stawowa hialinowa: (1) Skład: chondrocyty (5% objętości) + macierz: kolagen II (główny, 50–60% suchej masy) + agrekany (proteoglikany wiążące wodę przez domeny kwasu hialuronowego + siarczan chondroityny/keratanu) → wysoka zawartość wody 70–80% → sprężystość i odporność na kompresję. (2) Brak naczyń (avascular): odżywianie przez dyfuzję z mazi stawowej (przy ruchu) i ze szpiku przez kość podchrzęstną. (3) Brak nerwów (aneural): chrząstka nie boli! Ból w chorobie zwyrodnieniowej (OA) pochodzi z: torebki stawowej, więzadeł, kości podchrzęstnej, mięśni przykurczowych (mają unerwienie bólowe). (4) Regeneracja: bardzo słaba — chondrocyty mają niski potencjał proliferacyjny; głębokie defekty = nietrwałe włókniste blizny. Terapie: mikropęknięcia (mobilizacja komórek szpiku), autologiczne przeszczepy chrzęstno-kostne, terapia komórkami macierzystymi.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Tkanka mięśniowa ───
  {
    subtopic: 'Układ ruchu człowieka — Tkanka mięśniowa',
    subtopic_id: S.miesn,
    question_type: 'single',
    question_text: 'Tkanka mięśniowa dzieli się na trzy typy. Które zestawienie POPRAWNIE opisuje różnice między nimi?',
    options: [
      { id: 'A', text: 'Mięsień szkieletowy: poprzecznie prążkowany, wielojądrowy, kontrola dowolna, szybkie skurcze; mięsień gładki: nieprążkowany, jednojądrowy, kontrola mimowolna, powolne skurcze toniczne; mięsień sercowy: poprzecznie prążkowany, jednojądrowy, wstawki (dyski wstawkowe), automatyzm', is_correct: true },
      { id: 'B', text: 'Mięsień sercowy: nieprążkowany, wielojądrowy, kontrola dowolna; mięsień szkieletowy: jednojądrowy, automatyzm; mięsień gładki: prążkowany, wielojądrowy, szybkie skurcze', is_correct: false },
      { id: 'C', text: 'Wszystkie trzy typy tkanki mięśniowej są poprzecznie prążkowane — różni je wyłącznie szybkość skurczu; mięsień gładki i sercowy mają identyczną budowę', is_correct: false },
      { id: 'D', text: 'Mięsień gładki jest kontrolowany dowolnie przez korę ruchową; sercowy i szkieletowy są mimowolne i nie mogą być świadomie kontrolowane', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Trzy typy tkanki mięśniowej: (1) Szkieletowy (striatum): komórki (włókna mięśniowe): wielojądrowe (syncytium), jądra obwodowe; prążkowanie poprzeczne = sarkomery (naprzemienne A i I prążki); kontrola dowolna (motoneurony somatyczne); szybkie skurcze; typy włókien: I (wolne, tlenowe, odporne na zmęczenie), IIa (pośrednie), IIx/IIb (szybkie, beztlenowe, szybko się męczą). (2) Gładki (laevis): komórki wrzecionowate, jednojądrowe; brak widocznego prążkowania (aktyna + miozyna nieuporządkowane, ale te same białka co w szkieletowym); kontrola mimowolna (AUN, hormony, parakrynna); powolne, dlugotrwale skurcze toniczne (naczynia, jelita, macica, pęcherz). (3) Sercowy (cardiacum): poprzecznie prążkowany (sarkomer jak szkieletowy); komórki jednojądrowe (wyjątek: część komórek ma 2 jądra); wstawki (dyski intercalarne) z nexusami → elektryczne sprzężenie → serce kurczy się synchronicznie jako syncytium funkcjonalne; automatyzm (SA węzeł); kontrola mimowolna (AUN moduluje, nie inicjuje).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Tkanka mięśniowa',
    subtopic_id: S.miesn,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mięśni szkieletowych:\nA. Mięśnie antagonistyczne (np. biceps i triceps ramienia) działają przeciwstawnie — gdy jeden się kurczy, drugi rozluźnia; ta para umożliwia precyzyjną kontrolę ruchów kończyny.\nB. Mięśnie synergistyczne wspomagają się nawzajem w wykonywaniu tego samego ruchu — np. mięsień lędźwiowo-biodrowy i mięsień czworogłowy uda współdziałają przy zginaniu w biodrze.\nC. Hipertrofia mięśni szkieletowych pod wpływem treningu siłowego polega na zwiększeniu liczby włókien mięśniowych przez ich podziały mitotyczne — każde nowe włókno jest identyczne do oryginalnego.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: antagoniści: mięśnie działające przeciwnie w tym samym stawie; przy skurczu agonisty antagonista rozluźnia się (hamowanie reciprokalne przez interneurony Ia). Przykłady: biceps (zgięcie łokcia) vs triceps (prostowanie); m. czworogłowy (prostowanie kolana) vs m. dwugłowy uda (zginanie kolana). B — PRAWDA: synergiści: mięśnie współdziałające w jednym ruchu; mogą mieć różne przyczepy i działać na różnych stawach, ale efekt netto jest ten sam kierunek ruchu. Przykład: m. lędźwiowo-biodrowy (flexor biodra) + m. prosty uda (część m. czworogłowego = flexor biodra i extensor kolana) przy chodzeniu. C — FAŁSZ: hipertrofia mięśniowa (treningowa) = POWIĘKSZENIE istniejących włókien (nie ich namnażanie); mechanizm: ↑białek kurczliwych (aktyna, miozyna) + ↑sarkomerów równolegle; aktywacja komórek satelitarnych (mioblasty) → fuzja z włóknem → ↑jąder → ↑synteza białek. Hiperplazja (zwiększenie liczby włókien) nie jest udowodnionym mechanizmem fizjologicznym u człowieka (potwierdzono u ptaków przy ekstremalnych obciążeniach).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Mechanizm skurczu mięśnia ───
  {
    subtopic: 'Układ ruchu człowieka — Mechanizm skurczu mięśnia',
    subtopic_id: S.skurcz,
    question_type: 'single',
    question_text: 'Teoria ślizgowa (sliding filament theory) wyjaśnia mechanizm skurczu mięśnia. Wskaż prawidłowy opis molekularny skurczu.',
    options: [
      { id: 'A', text: 'AP płytki motorycznej → uwolnienie Ca²⁺ z siateczki sarkoplazmatycznej → Ca²⁺ wiąże troponinę → zmiana konformacji tropomiozyny → odsłonięcie miejsc wiążących miozynę na aktynie → cykl mostkowy (myosin cross-bridge cycle) z hydrolizą ATP → przesunięcie aktyny względem miozyny (filament nie skracają się — sarkomer skraca się)', is_correct: true },
      { id: 'B', text: 'Skurcz następuje przez skracanie filamentów miozyny — miozyna kurczy się jak gumka recepturka; aktyna pozostaje niezmieniona i służy jako szkielet', is_correct: false },
      { id: 'C', text: 'ATP jest potrzebne wyłącznie do rozkurczu mięśnia — skurcz jest procesem pasywnym (spontanicznym, bez nakładu energii); Ca²⁺ nie uczestniczy w skurczu mięśni szkieletowych', is_correct: false },
      { id: 'D', text: 'Troponina bezpośrednio hydrolizuje ATP i napędza cykl mostkowy; tropomiozyna jest kanałem jonowym w błonie siateczki sarkoplazmatycznej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mechanizm skurczu (sliding filament / cross-bridge cycling): (1) AP w motoneuronie → synapsa nerwowo-mięśniowa (ACh → nAChR → depolaryzacja błony mięśniowej → AP wzdłuż sarkolemy → kanaliki T (tubule T)). (2) Kanaliki T → sprzężenie ekscytacyjno-skurczowe (E-C coupling): receptor dihydropirydynowy (DHPR, sensor napięcia) sprzęga się z receptorem rianodynowym (RyR1) siateczki sarkoplazmatycznej (SR) → Ca²⁺ wyrzucany z SR (stężenie 10⁻⁷ → 10⁻⁵ M). (3) Ca²⁺ wiąże podjednostkę TnC kompleksu troponinowego (TnC-TnI-TnT) na filamencie aktynowym → troponina zmienia konformację → tropomiozyna przesuwa się w rowku aktyny → odsłonięcie miejsc wiążących S1 miozyny (cross-bridge sites). (4) Cykl mostkowy: miozyna-ATP → miozyna-ADP-Pi przyłącza się do aktyny (stan zawieszenia) → uwolnienie Pi → power stroke (obrót główki o ~10 nm) → wypchnięcie aktyny → ATP wiąże się do miozyny → detachment. Bez ATP: stan tężca pośmiertnego (rigor mortis). (5) Rozkurcz: Ca²⁺-ATPaza (SERCA) pompuje Ca²⁺ z powrotem do SR.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Mechanizm skurczu mięśnia',
    subtopic_id: S.skurcz,
    question_type: 'single',
    question_text: 'Skurcz mięśnia szkieletowego może być izotoniczny lub izometryczny. Które zestawienie POPRAWNIE je opisuje?',
    options: [
      { id: 'A', text: 'Izotoniczny: napięcie stałe, długość mięśnia zmienia się (ruch kończyny); izometryczny: długość stała, napięcie wzrasta (mięsień kurczy się ale nie porusza kończyny, np. przy utrzymywaniu ciężaru); tężec zupełny: suma skurczów przy wysokiej częstotliwości stymulacji', is_correct: true },
      { id: 'B', text: 'Izometryczny: napięcie stałe i długość zmienna; izotoniczny: długość stała i napięcie wzrasta; oba typy zużywają identyczną ilość ATP', is_correct: false },
      { id: 'C', text: 'Tężec zupełny (tetanus) to patologiczny stan nieodwracalnego przykurczu mięśni wywołany niedoborem Ca²⁺ — nie jest związany z częstotliwością impulsów nerwowych', is_correct: false },
      { id: 'D', text: 'Skurcz izotoniczny zachodzi wyłącznie w mięśniach gładkich; mięśnie szkieletowe pracują wyłącznie izometrycznie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Typy skurczu mięśniowego: (1) Izotoniczny (isotonic): napięcie = stałe (equal tension); długość mięśnia zmienia się → ruch; podtypy: koncentryczny (mięsień skraca się, np. uginanie łokcia z ciężarkiem) i ekscentryczny (mięsień wydłuża się pod obciążeniem, np. opuszczanie ciężarka – większe uszkodzenia mikrourazowe, ból mięśni opóźniony DOMS). (2) Izometryczny (isometric): długość = stała; napięcie wzrasta; brak ruchu w stawie, np. utrzymywanie pozycji (plank), noszenie torby bez ruchu. Praca zero (W = F × d = 0), ale ATP zużywane. (3) Jedno szarpnięcie (twitch): odpowiedź na jeden AP; silniejszy bodziec > próg = taki sam twitch (all-or-nothing na poziomie sarkomerów). (4) Sumowanie i tężec: wzrost częstotliwości stymulacji → sumowanie twitch → tężec niepełny (niezupełny) → tężec zupełny (tetanus fizjologiczny, ok. 80–100 Hz); tężec Clostridium tetani (bakteryjny) to INNY mechanizm: toksyna tetanospazmina blokuje hamowanie (brak GABA/Gly w Renshaw).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Mechanizm skurczu mięśnia',
    subtopic_id: S.skurcz,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cyklu mostkowego miozyny:\nA. Cząsteczka miozyny II (mięśniowa) składa się z dwóch łańcuchów ciężkich tworzących długi ogon (tworzą filament gruby) i dwóch par łańcuchów lekkich regulacyjnych; globularna główka S1 wiąże aktynę i ATP i wykonuje power stroke.\nB. Inhibitorem prążka I (cienkiego filamentu) jest tropomiozyna blokująca miejsca wiązania miozyny na aktynie — jej dyslokacja przez kompleks troponinowy po związaniu Ca²⁺ inicjuje skurcz.\nC. Po zakończeniu skurczu Ca²⁺ jest aktywnie transportowany z powrotem do siateczki sarkoplazmatycznej przez kanał pasywny (bez nakładu energii), co umożliwia ponowne zablokowanie miozyny przez tropomiozynę.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, P', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: miozyna II: 2 łańcuchy ciężkie (MHC) → 2 globularne główki (S1) + szyjka (S2, dźwignia) + ogon (LMM, tworzy filament gruby przez wiązania boczne). Główka S1: aktywność ATPazy (aktoMHC-ATPaza) + miejsce wiązania aktyny; łańcuchy lekkie regulacyjne (RLC, ELC) modulują siłę. B — PRAWDA: filament cienki = aktyna G (monomery) → aktyna F (helix) + tropomiozyna (dimery, każda blokuje 7 aktyn) + kompleks troponinowy (TnT kotwica, TnI inhibitor, TnC sensor Ca²⁺). W spoczynku: tropomiozyna blokuje rów aktyowy → brak wiązania S1. C — FAŁSZ: SERCA (Sarco/Endoplasmic Reticulum Ca²⁺-ATPase) to pompa AKTYWNA (P-typ ATPaza), zużywająca ATP: 1 ATP → 2 Ca²⁺ do SR; SERCA2a w mięśniu sercowym i szkieletowym. Fosfolamban (PLN) hamuje SERCA (w sercu); PKA (cAMP → adrenalina) fosforyluje PLN → odhamowanie SERCA → szybszy rozkurcz. Kanał pasywny Ca²⁺ nie istnieje w tym kontekście.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Zmęczenie mięśni ───
  {
    subtopic: 'Układ ruchu człowieka — Zmęczenie mięśni',
    subtopic_id: S.zmecz,
    question_type: 'single',
    question_text: 'Zmęczenie mięśni podczas wysiłku ma złożone przyczyny. Które zestawienie POPRAWNIE opisuje mechanizmy zmęczenia mięśniowego?',
    options: [
      { id: 'A', text: 'Wyczerpanie ATP i fosfokreatyny, gromadzenie Pi i H⁺ (kwasica) zakłócające sprzężenie Ca²⁺-troponina, akumulacja ADP, zaburzenia jonowe (K⁺ w przestrzeni T) — mechanizmy peryferyczne; zmęczenie ośrodkowe = ↓motywacja/sygnalizacja z OUN', is_correct: true },
      { id: 'B', text: 'Zmęczenie mięśni jest spowodowane wyłącznie akumulacją kwasu mlekowego, który trwale niszczy białka kurczliwe; po wysiłku uszkodzone miozyny muszą być zastąpione nowymi', is_correct: false },
      { id: 'C', text: 'Zmęczenie mięśniowe jest zjawiskiem wyłącznie ośrodkowym (psychicznym) — mięśnie same w sobie nie mają mechanizmów ograniczających skurcz; obiektywny pomiar pokazuje, że zmęczone mięśnie mają identyczną siłę jak wypoczęte', is_correct: false },
      { id: 'D', text: 'Kwas mlekowy produkowany przez glikolizę tlenową jest główną przyczyną zmęczenia — tlenu jest więcej niż potrzeba i nie ogranicza wysiłku', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Zmęczenie mięśni (muscle fatigue): wieloczynnikowe. (1) Peryferyczne (wewnątrzmięśniowe): a) Wyczerpanie substratów: ATP (gromadzenie ADP + Pi), fosfokreatyna (PCr, bufor szybki, wyczerpana w ~10 s sprintu), glikogen (długotrwały wysiłek). b) Gromadzenie metabolitów: Pi (fosforan nieorganiczny) bezpośrednio zaburza cykl mostkowy i uwalnianie Ca²⁺ z SR; H⁺ (kwasica mleczanowa) – kontrowersyjna rola (dawna teoria kwasu mlekowego to nadmierne uproszczenie); mleczan sam w sobie jest substratem energetycznym (wtórne uszkodzenie? raczej nie). c) Zaburzenia jonowe: nagromadzenie K⁺ w przestrzeniach T → blok depolaryzacyjny; utrata Na⁺/K⁺ gradientu. d) Dysfunkcja SR: pogorszenie uwalniania Ca²⁺ przez RyR1. e) Stres oksydacyjny: wolne rodniki uszkadzają białka. (2) Ośrodkowe (central fatigue): ↓aktywacja motoneuronów przez OUN (poczucie zmęczenia, subiektywna motywacja); serotonina, dopamina, amoniaku → zmiany w neuroprzekaźnikach. Tlenoterapia, kofeina, ochładzanie → redukują zmęczenie.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Zmęczenie mięśni',
    subtopic_id: S.zmecz,
    question_type: 'single',
    question_text: 'Mięsień może pozyskiwać energię z różnych źródeł w zależności od czasu i intensywności wysiłku. Wskaż prawidłową sekwencję uruchamiania szlaków energetycznych.',
    options: [
      { id: 'A', text: 'Natychmiastowe ATP (0–2 s) → fosfokreatyna/PCr (2–15 s) → glikoliza beztlenowa z mleczanem (15 s–2 min) → oddychanie tlenowe glukozy/glikogenu i kwasów tłuszczowych (>2 min, endurance)', is_correct: true },
      { id: 'B', text: 'Tlenowe utlenianie tłuszczów (0–10 s) → glikoliza beztlenowa (10–60 s) → fosfokreatyna (>1 min) → ATP z fosfolipadów błony', is_correct: false },
      { id: 'C', text: 'Oddychanie tlenowe działa od pierwszej sekundy wysiłku z pełną mocą; fosfokreatyna i glikoliza beztlenowa są używane wyłącznie przy patologicznym niedoborze tlenu', is_correct: false },
      { id: 'D', text: 'Glikoliza beztlenowa jest wydajniejsza energetycznie niż oddychanie tlenowe (więcej ATP na mol glukozy) — dlatego zawodnicy sprinterzy preferują glikolizę na każdym dystansie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Metabolizm energetyczny mięśni — kolejność (zależy od intensywności i czasu): (1) Wolne ATP (~5 mmol/kg; 0–2 s): natychmiastowe, bardzo mała pula. (2) Fosfokreatyna (PCr, układ fosfagenowy, 0–15 s): reakcja Lohrmanna: PCr + ADP → Cr + ATP (katalizuje kinaza kreatynowa CK); szybka, beztlenowa; PCr = 15–20 mmol/kg; suplementacja kreatyną ↑PCr o ~20%. (3) Glikoliza beztlenowa (~15 s – 2 min): glikogen → pirogronian → mleczan; zysk: 3 ATP/glukoza (z glikogenu); szybka moc, ale kwasica mleczanowa (H⁺ = problem, nie mleczan); wysiłki 200–800 m. (4) Utlenianie (tlenowe, aerobowe, >2 min): a) glukozy/glikogenu: pirogronian → AcCoA → cykl Krebsa + łańcuch oddechowy = 30–32 ATP/glukoza; b) kwasów tłuszczowych (wolnych FFA): β-oksydacja → AcCoA; dominuje przy długotrwałym wysiłku o umiarkowanej intensywności (>20 min, maraton); słona pula, wolna mobilizacja. Mleczan: przy intensywnym wysiłku → krew → wątroba (cykl Cori: mleczan → glukoza) lub inne mięśnie.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Choroby układu ruchu ───
  {
    subtopic: 'Układ ruchu człowieka — Choroby układu ruchu',
    subtopic_id: S.chor,
    question_type: 'single',
    question_text: 'Reumatoidalne zapalenie stawów (RZS) i choroba zwyrodnieniowa stawów (OA) są dwiema najczęstszymi chorobami stawów, ale mają odmienną patogenezę. Które zestawienie POPRAWNIE je odróżnia?',
    options: [
      { id: 'A', text: 'RZS: autoimmunologiczne zapalenie błony maziowej (synovitis), symetryczne, czynnik reumatoidalny (RF) i anty-CCP, niszczenie chrząstki przez pannus, leczenie lekami immunosupresyjnymi (MTX, biologiki anty-TNF); OA: zwyrodnienie chrząstki i przebudowa kości podchrzęstnej, asymetryczne, mechaniczne, leczenie objawowe', is_correct: true },
      { id: 'B', text: 'OA jest chorobą autoimmunologiczną z autoprzeciwciałami; RZS jest mechanicznym zużyciem chrząstki; obie dotyczą wyłącznie starszych osób powyżej 70 lat', is_correct: false },
      { id: 'C', text: 'RZS i OA mają identyczną patogenezę (zapalenie immunologiczne) i identyczne leczenie; różni je jedynie lokalizacja (RZS = biodro, OA = ręce)', is_correct: false },
      { id: 'D', text: 'Leczenie RZS polega wyłącznie na wymianie stawu na endoprotezę; OA leczy się wyłącznie immunosupresją — nie ma możliwości leczenia objawowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Reumatoidalne zapalenie stawów (RZS, Rheumatoid Arthritis): choroba autoimmunologiczna; autoprzeciwciała: czynnik reumatoidalny (RF = IgM anty-IgG), anty-CCP (anty-cykliczny cytrulinowany peptyd — bardziej specyficzny); patogeneza: limfocyty T → pobudzenie synowitów → zapalny pannus (invasive tissue) → niszczenie chrząstki i kości przez metaloproteinazy; objawy: symetryczne zapalenie stawów rąk/stóp, sztywność poranna >1 h, zmęczenie, gorączka; postęp → deformacje (ulnar drift, boutonniere, swan-neck); leczenie: NLPZ, GKS, DMARD (MTX, SSZ, HCQ), biologiki (anty-TNF: etanercept/adalimumab, anty-IL6: tocilizumab, anty-CD20: rituximab). Choroba zwyrodnieniowa (OA, Osteoarthritis): najczęstsza choroba stawów, mechaniczna; patogeneza: degradacja chrząstki przez MMP, ↑chondrocyty apoptotyczne, kość podchrzęstna ↑gęstość + osteofity; objawy: ból nasilający się przy ruchu, trzeszczenie (krepitacje), brak symetrii, zmiany RTG: zwężenie szpary, osteofity, stwardnienie podchrzęstne; leczenie: NLPZ, paracetamol, fizjoterapia, iniekcje HA/GKS, endoprotezoplastyka.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Choroby układu ruchu',
    subtopic_id: S.chor,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chorób układu ruchu:\nA. Miastenia gravis (myasthenia gravis) jest chorobą autoimmunologiczną polegającą na produkcji przeciwciał anty-AChR (receptor acetylocholiny nAChR) na płytce motorycznej — prowadzi do osłabienia i zmęczenia mięśni nasilającego się przy wysiłku.\nB. Dystrofia mięśniowa Duchenne (DMD) jest sprzężoną z chromosomem X chorobą genetyczną wynikającą z braku dystrofiny — białka kotwiczącego sarkolemmę do aktyny; bez dystrofiny włókna mięśniowe degenerują się podczas skurczu.\nC. Dna moczanowa (podagra) jest chorobą tkanki mięśniowej — kryształy kwasu moczowego odkładają się we włóknach mięśniowych powodując ich martwicę i jest leczona fizjoterapią bez leków.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: miastenia gravis: autoprzeciwciała anty-AChR (85%) lub anty-MuSK (15%); wiązanie z receptorem → blokada + komplementem zależna degradacja → ↓liczba AChR → każde AP motoneuronu wywołuje coraz słabszy EPSP na płytce → miopatia bez miotyzacji; objawy: opadanie powieki (ptosis), zaburzenia widzenia (diplopia), dysfagia, slabość mięśni nasilająca się przy wysiłku (zmęczliwość); leczenie: inhibitory AChE (pirydostygmina), immunosupresja (pred., azatiopryna), tymektomia (grasiczak w 15%). B — PRAWDA: DMD: mutacja (frameshift/deletion) w genie DMD (Xp21) → brak dystrofiny (427 kDa, największe białko ciała); dystrofina łączy cytoszkielet (aktyna) z kompleksem DGC (dystrophin-glycoprotein complex) i macierzą zewnątrzkomórkową; bez dystrofiny → sarkolema łatwo uszkadzana → napływ Ca²⁺ → proteazy → nekroza → zastąpienie tłuszczem i tkanką łączną; chłopcy: słabość ok. 3–5 r.ż., wózek ~12 r.ż., śmierć ~20–30 r.ż. (kardiomiopatie). C — FAŁSZ: dna moczanowa (artritis urica) = choroba STAWÓW (nie mięśni); hiperurykemia → kryształy moczanu sodu (MSU) odkładają się w stawach (klasycznie: MTP1 palucha = podagra) i tkankach → atak ostrego zapalenia (aktywacja NLRP3 inflammasomu przez kryształy → IL-1β); leczenie: kolchicyna/NLPZ (atak ostry), allopurynol/febuksostat (obniżanie urykemii przewlekle).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ ruchu człowieka — Choroby układu ruchu',
    subtopic_id: S.chor,
    question_type: 'single',
    question_text: 'Złamania kości goją się w kilku etapach. Wskaż prawidłową kolejność procesu gojenia złamania.',
    options: [
      { id: 'A', text: 'Krwiak → tkanka ziarninowa (fibroblasty, naczynia) → kostniną miękką (chondrocyty → chrząstka) → kostniną twardą (osteoblasty → kość splotowata) → przebudowa (osteon, kość blaszkowata) — trwa tygodnie-miesiące', is_correct: true },
      { id: 'B', text: 'Osteoblasty reagują natychmiast po złamaniu — od pierwszej sekundy produkują dojrzałą kość blaszkowatą; krwiak nie powstaje, ponieważ kości nie mają naczyń krwionośnych', is_correct: false },
      { id: 'C', text: 'Złamanie goi się wyłącznie przez regenerację chrząstki hialinowej → brak udziału tkanki kostnej w gojeniu; prawidłowo wyleczone złamanie jest zastąpione chrząstką', is_correct: false },
      { id: 'D', text: 'Kość po złamaniu nigdy się nie goi — jedyną metodą leczenia złamań jest chirurgiczne usunięcie obu fragmentów i zastąpienie endoprotezą tytanową', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Gojenie złamania kości (fazy): (1) Faza zapalna (0–7 dni): złamanie → uszkodzenie naczyń → krwiak śródustkowy → koagulacja → uwolnienie cytokin (IL-1, TNF, TGF-β, PDGF) → naciek neutrofilów/makrofagów → sprzątanie martwej tkanki. (2) Faza naprawcza (1–6 tyg.): a) Tkanka ziarninowa: fibroblasty + neoangiogeneza z okostnej; b) Kostniną miękka (soft callus): chondroprogenitory z okostnej → chrząstka szklista/włóknista (stabilizacja mechaniczna); c) Kostniną twardą (hard callus): kostnienie ośrodkowe (osteoblasty → kość splotowata, woven bone) przez kostnienie śródchrzęstne; wzmacnia most między fragmentami. (3) Faza przebudowy (miesiące-lata): osteony zastępują kość splotowatą blaszkowatą (lamellar bone); osteoklasty resorbują nadmiar kostniny → kształt kości wzdłuż linii sił. Czynniki przyspieszające: stabilizacja (gips/płytka/gwóźdź → mniej ruchu = szybszy callus), ukrwienie, wit. D, Ca, PTH, BMP-2/7. Zaburzenia: brak zrostu (non-union): zakażenie, niedokrwienie, niestabilność.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
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
  console.log(`Seeding ${questions.length} mock questions for Uklad ruchu czlowieka...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
