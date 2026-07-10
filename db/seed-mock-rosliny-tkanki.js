// Seed: mock_questions — Różnorodność roślin — tkanki i organy (20 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  tkanki:      '9ec87867-e7fd-445f-9df4-dd309c78f156',
  przewodzace: 'af3b084b-a1ed-492e-abed-ed136e095415',
  korzen:      '7412b8c7-d272-4d2e-b7fd-2c476174fa8b',
  lodyga:      '127bb517-9e07-44a3-821c-1c811ffe356e',
  lisc:        '9a12bb4f-29e7-4946-a454-3ddd83af0cd0',
  kwiat:       '2f534143-8c2e-493a-8040-f4f5008765b4',
  nasiona:     '78b9339f-9ce4-4e22-9842-584ab100daf9',
  grupy:       'd9f251fc-9b3b-4922-af0d-e4aa4356871c',
}

const questions = [
  // ─── Tkanki roślinne ───
  {
    subtopic: 'Tkanki roślinne — meristemy i tkanki okrywające',
    subtopic_id: S.tkanki,
    question_type: 'single',
    question_text: 'Miękisz asymilacyjny (chlorenchyma) różni się od miękiszu spichrzowego (parenchymy spichrzowej). Które stwierdzenie POPRAWNIE opisuje tę różnicę?',
    options: [
      { id: 'A', text: 'Miękisz asymilacyjny zawiera chloroplasty i przeprowadza fotosyntezę; miękisz spichrzowy gromadzi substancje zapasowe (skrobia, tłuszcze, białka) — ma nieliczne lub brak chloroplastów', is_correct: true },
      { id: 'B', text: 'Miękisz asymilacyjny jest tkanką martwą, miękisz spichrzowy — żywą', is_correct: false },
      { id: 'C', text: 'Oba rodzaje miękiszu pełnią identyczną funkcję — różni je tylko lokalizacja w roślinie', is_correct: false },
      { id: 'D', text: 'Miękisz spichrzowy przeprowadza fotosyntezę intensywniej niż asymilacyjny — ma gęściej upakowane chloroplasty', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Miękisz (parenchyma) to tkanka żywa z cienkimi ścianami. Rodzaje: (1) Asymilacyjny (chlorenchyma): bogaty w chloroplasty, głównie w mezofilu liści i zielonych łodygach — centrum fotosyntezy. (2) Spichrzowy: gromadzi skrobię (bulwy ziemniaka), tłuszcze (nasiona), białka zapasowe — np. w bielmie nasion, owocach, korzeniach spichrzowych (marchew). (3) Wodny: magazynuje wodę (sukkulenty — kaktusy, agawy). (4) Powietrzny (aerenchyma): duże przestrzenie między komórkami z powietrzem — u roślin wodnych i bagiennych.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Tkanki roślinne — meristemy i tkanki okrywające',
    subtopic_id: S.tkanki,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących tkanek roślinnych:\nA. Sklerenchyma (włókna i sklereidy) jest tkanką mechaniczną złożoną z komórek martwych z grubymi, zdrewniałymi ścianami wtórnymi — pełni funkcję wzmacniającą.\nB. Kolenchyma to tkanka mechaniczna zbudowana z martwych komórek z równomiernie zgrubiałymi ścianami impregnowanymi ligniną.\nC. Epiderma (skórka) okrywa organy pierwotne rośliny i jest zazwyczaj jednowarstwowa, pokryta kutykulą ograniczającą transpirację.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: sklerenchyma = komórki martwe z grubymi ścianami wtórnymi nasączonymi ligniną (drewnienie); włókna (długie, w wiązkach — np. len, konopie) i sklereidy (izodiametryczne, np. w łupinach orzechów, miąższu gruszek). B — FAŁSZ: kolenchyma to tkanka ŻYWA (komórki zachowują zdolność podziału) ze ścianami nierównomiernie zgrubiałymi celulozą i pektyną (NIE ligniną) — zgrubienia narożnikowe lub blaszkowate; wspiera młode organy i rośliny zielne bez drewnienia. C — PRAWDA: epiderma = 1 warstwa żywych komórek bez chloroplastów (lub z nielicznymi), pokryta woskową kutykulą — bariera przed parowaniem i patogenami.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Tkanki roślinne — meristemy i tkanki okrywające',
    subtopic_id: S.tkanki,
    question_type: 'single',
    question_text: 'Merystem wierzchołkowy pędu (SAM) i merystem wierzchołkowy korzenia (RAM) różnią się od kambium. Która cecha NAJLEPIEJ opisuje merystemy wierzchołkowe?',
    options: [
      { id: 'A', text: 'Merystemy wierzchołkowe to tkanki wtórne — odpowiadają za wzrost na grubość (drewno wtórne i łyko wtórne)', is_correct: false },
      { id: 'B', text: 'Merystemy wierzchołkowe to tkanki pierwotne — zlokalizowane na szczytach pędów i korzeni, odpowiadają za wzrost na długość rośliny', is_correct: true },
      { id: 'C', text: 'Merystemy wierzchołkowe są obecne wyłącznie u jednoliściennych — dwuliścienne nie mają wzrostu wierzchołkowego', is_correct: false },
      { id: 'D', text: 'Merystemy wierzchołkowe tworzą wyłącznie komórki okrywające — nie produkują komórek przewodzących', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Merystemy pierwotne (wierzchołkowe): SAM (shoot apical meristem) — na szczycie pędu, tworzy liście, pędy boczne, kwiaty i pierwotne tkanki łodygi; RAM (root apical meristem) — na szczycie korzenia, chroniony czapeczką (kolumelą), tworzy komórki korzenia i strefę podziałów. Odpowiadają za WZROST NA DŁUGOŚĆ. Merystemy wtórne (lateralne): kambium naczyniowe — między ksylemem a floemem, odpowiada za WZROST NA GRUBOŚĆ (drewno wtórne i łyko wtórne); peryderm (korek) — u roślin zdrewniałych zastępuje epidermę.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Tkanki przewodzące ───
  {
    subtopic: 'Tkanki przewodzące — ksylem i floem',
    subtopic_id: S.przewodzace,
    question_type: 'single',
    question_text: 'Ksylem (drewno) i floem (łyko) to tkanki przewodzące roślin naczyniowych. Które zestawienie POPRAWNIE opisuje kierunek i transportowane substancje?',
    options: [
      { id: 'A', text: 'Ksylem: woda i sole mineralne — w górę (od korzeni do liści); floem: produkty fotosyntezy (sacharoza, aminokwasy) — w obu kierunkach (source→sink)', is_correct: true },
      { id: 'B', text: 'Ksylem: sacharoza i hormony — w dół (od liści do korzeni); floem: woda i sole mineralne — w górę', is_correct: false },
      { id: 'C', text: 'Ksylem i floem transportują te same substancje (wodę i cukry) — różnią się tylko kierunkiem przepływu', is_correct: false },
      { id: 'D', text: 'Ksylem transportuje produkty fotosyntezy wyłącznie w nocy, floem — wodę wyłącznie w dzień', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ksylem (drewno): komórki martwe (naczynia i cewki) z grubymi zdrewniałymi ścianami → transport wody i soli mineralnych w górę (transpiracyjny strumień — ciągłość słupa wody przez kohezję i adhezję + siła ssąca transpiracji). Floem (łyko): komórki żywe (rurki sitowe + komórki towarzyszące), brak jądra w dojrzałych rurkach → transport asymilatów (sacharoza, sorbitol, aminokwasy, hormony, mRNA) od źródeł ("source": liście fotosyntetyzujące) do ujść ("sink": korzenie, owoce, nasiona, wzrostowe wierzchołki) w obu kierunkach jednocześnie (różne elementy floemu).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Tkanki przewodzące — ksylem i floem',
    subtopic_id: S.przewodzace,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transportu wody w roślinie:\nA. Teoria kohezyjno-tensyjna (Dixon, 1914) wyjaśnia wznoszenie wody w ksylemie przez ciągły słup wodny utrzymywany kohezją cząsteczek wody i siłą ssącą transpiracji liści.\nB. Parcie korzeniowe (ciśnienie korzeniowe) jest głównym mechanizmem wznoszenia wody na wysokość 30 m u drzew liściastych.\nC. Apoplast to droga transportu wody przez przestrzenie między komórkami i przez ściany komórkowe — bez przechodzenia przez błony komórkowe.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, P', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: teoria kohezyjno-tensyjna: transpiracja → podciśnienie w ksylemie liści → kohezja (wiązania wodorowe między H₂O) → ciągły słup wody "wciągany" z korzeni; adhezja do ścian ksylemu zapobiega zerwaniu słupa. B — FAŁSZ: parcie korzeniowe (osmoza — aktywny transport jonów do ksylemu korzenia → napływ wody) może unieść wodę maks. kilka metrów i jest słabe; u drzew do 30 m+ kluczowa jest siła ssąca transpiracji. Parcie korzeniowe odpowiada za gutację (wydzielanie wody przez hydatody). C — PRAWDA: drogi transportu: symplast (przez cytoplazmy i plasmodesmy), apoplast (przez ściany i przestworniki), transbłonowa (przez błony − aquaporyny). Bariera Caspary\'ego w komórkach endodermy blokuje apoplastową drogę → wymusza przejście przez symplast.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Budowa korzenia ───
  {
    subtopic: 'Budowa korzenia',
    subtopic_id: S.korzen,
    question_type: 'single',
    question_text: 'Pasmo Caspary\'ego (pasek Caspary\'ego) w komórkach endodermy korzenia pełni kluczową funkcję. Na czym ona polega?',
    options: [
      { id: 'A', text: 'Pasmo Caspary\'ego jest źródłem energii dla aktywnego transportu jonów do ksylemu', is_correct: false },
      { id: 'B', text: 'Pasmo Caspary\'ego to hydrofobowy pierścień suberyny (korka) w ścianach komórek endodermy — blokuje apoplastowy przepływ wody i jonów, wymuszając przejście przez symplast i umożliwiając selektywny transport', is_correct: true },
      { id: 'C', text: 'Pasmo Caspary\'ego przewodzi impulsy elektryczne od korzeni do pędów, informując roślinę o niedoborach wody', is_correct: false },
      { id: 'D', text: 'Pasmo Caspary\'ego tworzy mechaniczną barierę przeciwko patogenom glebowym, uniemożliwiając ich wnikanie do tkanek wewnętrznych korzenia', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Endoderma: warstwa komórek otaczająca walec osiowy (ksylem + floem) korzenia. Pasmo Caspary\'ego: hydrofobowe impregnacje suberyną (i ligniną) w ścianach radialnych i poprzecznych komórek endodermy → bariera wodoszczelna. Wymusza, by woda i jony (drogą apoplastyczną z kory) musiały wejść do symplastu przez błonę komórkową endodermy → roślina kontroluje (selektywnie filtruje) jakie jony wchodzą do ksylemu. Komórki przepustowe (bez pasma Caspary\'ego) naprzeciwko protoflemu umożliwiają przepływ w miejscach aktywnego ładowania ksylemu.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Budowa korzenia',
    subtopic_id: S.korzen,
    question_type: 'single',
    question_text: 'Mikoryza to mutualistyczna symbioza korzeni roślin z grzybami. Które stwierdzenie POPRAWNIE opisuje korzyści dla obu partnerów?',
    options: [
      { id: 'A', text: 'Grzyb dostarcza roślinie związki azotu zsyntetyzowane przez chemosyntezę; roślina dostarcza grzybu wodę i sole mineralne', is_correct: false },
      { id: 'B', text: 'Grzyb rozszerza powierzchnię wchłaniania korzenia (strzępki = dodatkowe "włośniki"), dostarcza roślinie wodę i fosfor (P); roślina dostarcza grzybu produkty fotosyntezy (glukozę, sacharozę)', is_correct: true },
      { id: 'C', text: 'Grzyb pasożytuje na korzeniu, pobierając cukry bez żadnej korzyści dla rośliny', is_correct: false },
      { id: 'D', text: 'Roślina i grzyb konkurują o azot glebowy — współżycie jest komensalizmem, nie mutualistycznym', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mikoryza (grzyb+korzeń): mutualizm — obaj partnerzy odnoszą korzyści. Korzyści rośliny: ogromne zwiększenie powierzchni absorpcji (strzępki sięgają do kilkunastu cm od korzenia = dostęp do P, Zn, Cu, wody w porach gleby niedostępnych dla korzenia), szczególnie kluczowe dla fosforu (słabo ruchliwy w glebie). Korzyści grzyba: 10–30% asymilatów rośliny (glukoza, sacharoza z fotosyntezy) — grzyb mikoryzowy jest heterotrofem niesamożywnym. Typy: ektomikoryza (strzępki oplatają korzeń z zewnątrz, sieć Hartiga — drzewa leśne: dąb, buk, sosna) i arbuskularna (strzępki wnikają do komórek korzenia, tworzą arbuskule — 80% roślin lądowych).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Budowa łodygi ───
  {
    subtopic: 'Budowa łodygi',
    subtopic_id: S.lodyga,
    question_type: 'single',
    question_text: 'Kambium naczyniowe (kambium) to merystem boczny odpowiedzialny za wzrost wtórny łodygi. Jakie tkanki produkuje kambium i w jakim kierunku?',
    options: [
      { id: 'A', text: 'Kambium produkuje wyłącznie drewno wtórne (ksylem wtórny) — łyko wtórne powstaje z peridermy', is_correct: false },
      { id: 'B', text: 'Kambium produkuje ksylem wtórny (drewno) do środka i floem wtórny (łyko) na zewnątrz — odpowiada za coroczny wzrost grubości (słoje roczne)', is_correct: true },
      { id: 'C', text: 'Kambium produkuje wyłącznie komórki miękiszowe wypełniające przestrzenie między istniejącymi tkankami', is_correct: false },
      { id: 'D', text: 'Kambium działa wyłącznie w pierwszym roku życia rośliny — potem zostaje zastąpione przez fellogen', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Kambium naczyniowe (między pierwotnym ksylemem a floemem): komórki inicjalne dzielą się antyklinalne → periferialnie (na zewnątrz) = komórki-matki floemu wtórnego; do środka = komórki-matki ksylemu wtórnego. Drewno wtórne (ksylem): naczynia, cewki, włókna, promienie drzewne. Corocznie odkłada nową warstwę (słój roczny): wiosna = jasne drewno wiosenne (duże naczynia), lato = ciemne drewno późne (małe, grube ściany). Słoje widoczne na przekroju pnia. Floem wtórny (łyko): rurki sitowe, komórki towarzyszące, parenchyma. Fellogen (korek) = peryderm: zastępuje epidermę w wzroście wtórnym, produkuje korek na zewnątrz i felodermę do środka.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Budowa łodygi',
    subtopic_id: S.lodyga,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy łodygi:\nA. U roślin dwuliściennych drewno wtórne naczynia i wiązki przewodzące są ułożone w regularny okrąg, podczas gdy u jednoliściennych wiązki są rozproszone w miękiszu i brak kambium.\nB. Słoje roczne drzew w klimacie umiarkowanym odzwierciedlają rytm sezonowy — jedno drewno wiosenne + jedno późne = jeden rok wzrostu.\nC. Korek (felloderm) produkowany przez fellogen jest tkanką żywą, bogatą w chloroplasty, pełniącą funkcje fotosyntetyczne w łodydze.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, P, F', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: dwuliścienne: wiązki w okręgu + kambium → wzrost wtórny na grubość; jednoliścienne (trawy, palmy, lilie): wiązki kolateralne zamknięte (bez kambium) rozproszone w miękiszu → brak drewna wtórnego → brak pierścieni rocznych. B — PRAWDA: drewno wiosenne (early wood, jasne, większe naczynia) + drewno późne (late wood, ciemne, gęstsze ściany) = 1 rok; liczba słojów = wiek drzewa (dendrochonologia). C — FAŁSZ: korek (phellem) produkowany przez fellogen to komórki MARTWE zaimpregnowane suberyną (hydrofobową) — nieprzepuszczalne dla wody i gazów; brak chloroplastów; funkcja ochronna. Feloderm (do środka od fellogenu) jest żywy i może mieć chloroplasty.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Budowa liścia ───
  {
    subtopic: 'Budowa liścia',
    subtopic_id: S.lisc,
    question_type: 'single',
    question_text: 'Mezofil palisadowy i mezofil gąbczasty to dwie warstwy tkanki asymilacyjnej liścia. Które zestawienie POPRAWNIE przypisuje im lokalizację i funkcję?',
    options: [
      { id: 'A', text: 'Palisadowy: po stronie górnej (adaksjalnej), komórki cylindryczne ściśle upakowane z licznymi chloroplastami — główne centrum fotosyntezy; gąbczasty: po stronie dolnej, komórki luźno ułożone z dużymi przestworami — wymiana gazów i transpiracja', is_correct: true },
      { id: 'B', text: 'Gąbczasty: po stronie górnej, intensywna fotosynteza; palisadowy: po stronie dolnej, głównie wymiana gazów', is_correct: false },
      { id: 'C', text: 'Palisadowy i gąbczasty przeplatają się losowo — nie ma stałej lokalizacji żadnej z warstw', is_correct: false },
      { id: 'D', text: 'Mezofil palisadowy nie ma chloroplastów — jego funkcją jest wyłącznie mechaniczne wzmocnienie blaszki liściowej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Przekrój liścia (od góry): (1) Epiderma górna (kutykularna, brak lub mało aparatów szparkowych). (2) Mezofil palisadowy: 1–3 warstwy komórek cylindrycznych, pionowo ustawionych, tłocznie upakowanych; 50–80 chloroplastów na komórkę — główne centrum pochłaniania światła i fotosyntezy. (3) Mezofil gąbczasty: komórki nieregularne, liczne przestwory między komórkowe (≈ 40% objętości) — sieć kanałów gazowych umożliwiających wymianę CO₂/O₂; mniej chloroplastów. (4) Epiderma dolna: liczne aparaty szparkowe (u roślin lądowych).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Budowa liścia',
    subtopic_id: S.lisc,
    question_type: 'single',
    question_text: 'Aparat szparkowy (stomat) składa się z dwóch komórek szparkowych (guard cells) otaczających por szparkowy. Który mechanizm odpowiada za OTWIERANIE aparatu szparkowego przy naświetleniu?',
    options: [
      { id: 'A', text: 'Światło → fotosynteza w komórkach szparkowych → wzrost stężenia O₂ → pęcznienie komórek → otwarcie', is_correct: false },
      { id: 'B', text: 'Światło aktywuje pompy protonowe (H⁺-ATPazy) w błonie komórek szparkowych → napływ K⁺ (i Cl⁻) do komórek szparkowych → wzrost potencjału osmotycznego → napływ wody osmotycznie → turgor → otwarcie', is_correct: true },
      { id: 'C', text: 'Światło powoduje denaturację białek ściany komórkowej → ściana staje się bardziej elastyczna → komórki szparkowe otwierają się mechanicznie', is_correct: false },
      { id: 'D', text: 'W ciemności hormony ABA powodują napływ K⁺ → pęcznienie → otwarcie; światło hamuje ABA → zamknięcie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mechanizm otwierania szparek (uproszczony): (1) Światło (niebieskie 400–500 nm) → fototropiny aktywują H⁺-ATPazy w błonie komórek szparkowych → pompa protonowa wypycha H⁺ na zewnątrz → hiperpolaryzacja błony. (2) Kanały K⁺ (inward rectifiers) otwierają się → K⁺ wpływa do komórek szparkowych (+ aniony: Cl⁻, jabłczan²⁻ syntetyzowany ze skrobi) → wzrost potencjału osmotycznego. (3) Osmotyczny napływ wody → wzrost turgoru → komórki szparkowe pęcznieją → asymetrycznie zgrubiałe ściany (ściana wewnętrzna grubsza) → wyginają się na zewnątrz → por się otwiera. Zamknięcie: ABA (przy suszy) → wzrost Ca²⁺ → kanały K⁺ zamknięte → utrata K⁺ i wody → szparka zamknięta.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Budowa kwiatu i zapylanie ───
  {
    subtopic: 'Budowa kwiatu i zapylanie',
    subtopic_id: S.kwiat,
    question_type: 'single',
    question_text: 'Kwiat jest organem rozrodczym roślin okrytonasiennych. Wskaż prawidłową kolejność elementów kwiatu od zewnątrz do wewnątrz (od okwiatu do słupka).',
    options: [
      { id: 'A', text: 'Słupek → pręciki → płatki korony → działki kielicha', is_correct: false },
      { id: 'B', text: 'Działki kielicha → płatki korony → pręciki → słupek', is_correct: true },
      { id: 'C', text: 'Płatki korony → działki kielicha → słupek → pręciki', is_correct: false },
      { id: 'D', text: 'Działki kielicha → pręciki → płatki korony → słupek', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Budowa kwiatu (od zewnątrz do środka): (1) Kielich (calyx) = działki kielicha (sepala) — zazwyczaj zielone, chronią pąk; (2) Korona (corolla) = płatki korony (petala) — zazwyczaj barwne, wabią zapylacze; (3) Pręciki (stamina) = nitka + główka pręcika z woreczkami pyłkowymi (microsporangia); (4) Słupek (pistillum) = znamię + szyjka + zalążnia z zalążkami (ovules). Kielich + korona = okwiat (periant). Kwiat zupełny: ma wszystkie 4 okółki; niezupełny: brak któregoś. Kwiat obupłciowy (hermafrodyta): pręciki i słupek w tym samym kwiecie.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Budowa kwiatu i zapylanie',
    subtopic_id: S.kwiat,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zapylania i zapłodnienia u roślin okrytonasiennych:\nA. Podwójne zapłodnienie jest cechą charakterystyczną okrytonasiennych: jeden plemnik zapładnia oosferę (→ zygota = zarodek), drugi łączy się z komórką centralną (→ bielmo triploidalne 3n).\nB. Rośliny wiatropylne mają zazwyczaj duże, barwne kwiaty z nektarnikami, aby przyciągać owady — wiatr jest tylko rezerwowym wektorem.\nC. Samopylność jest mechanicznie niemożliwa u roślin — zawsze wymagają pyłku z innego osobnika.',
    options: [
      { id: 'A', text: 'P, F, F', is_correct: true },
      { id: 'B', text: 'P, P, F', is_correct: false },
      { id: 'C', text: 'P, F, P', is_correct: false },
      { id: 'D', text: 'F, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: podwójne zapłodnienie (Nawaszchin, 1898): dwa plemniki z łagiewki pyłkowej: 1. + oosfera (n) → zygota (2n) → zarodek; 2. + komórka centralna (2n, z 2 jądrami polarnymi) → bielmo (3n, triploidalne) — tkanka odżywcza dla zarodka. Unikalna cecha okrytonasiennych! B — FAŁSZ: rośliny wiatropylne (anemogamiczne) mają DROBNE, niepozorne kwiaty bez barwnych płatków i nektarników (= brak potrzeby wabiącego owadów); produkują ogromne ilości lekkiego, suchego pyłku (np. trawy, dęby, brzozy). Owadopylne = entomogamiczne: duże barwne kwiaty, nektar, pyłek lepki. C — FAŁSZ: samopylność (autogamia) jest możliwa i powszechna u wielu roślin (groch, pomidor, pszenica). Mechanizmy zapobiegające samopylności: heterostylia, protandria, protoginia, samoniepłodność (S-allele).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Nasiona i owoce ───
  {
    subtopic: 'Nasiona i owoce',
    subtopic_id: S.nasiona,
    question_type: 'single',
    question_text: 'Nasiono roślin okrytonasiennych składa się z trzech głównych elementów. Które zestawienie jest POPRAWNE?',
    options: [
      { id: 'A', text: 'Łupina nasienna (z ściany zalążka) + bielmo (3n, z podwójnego zapłodnienia) + zarodek (2n, z zapłodnienia oosferę)', is_correct: true },
      { id: 'B', text: 'Owocnia (z zalążni) + liścienie (gamety) + bielmo (n)', is_correct: false },
      { id: 'C', text: 'Kielich + łupina + zarodek — bielmo tworzy się dopiero po skiełkowaniu nasienia', is_correct: false },
      { id: 'D', text: 'Łupina nasienna + tylko zarodek — bielmo jest obecne wyłącznie u nagonasiennych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Nasiono okrytonasiennych = (1) Łupina nasienna (testa) — z osłonek zalążka (integumentów), chroni nasiono; (2) Bielmo (endosperm, 3n) — z podwójnego zapłodnienia: plemnik 2 + komórka centralna (2n) → 3n; substancja odżywcza dla zarodka (skrobia, tłuszcze, białka); u niektórych gatunków zużyte w trakcie dojrzewania → nasiona bez bielma (dycoty: fasola, groch — odżywkę gromadzą liścienie). (3) Zarodek (2n): z zygoty; składa się z korzonka zarodkowego, łodyżki, liścieni (1 lub 2) i pączku wierzchołkowego (plumula). Owocnia (owoc) = z zalążni słupka — NIE wchodzi w skład nasienia.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Nasiona i owoce',
    subtopic_id: S.nasiona,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE prawdziwe stwierdzenia dotyczące rozsiewania owoców i nasion (zoochoria, anemochoria, hydrochoria).',
    options: [
      { id: 'A', text: 'Owoce mięsiste (jagody, pestkowce) są przystosowane do rozsiewania przez zwierzęta — zwierzę zjada miąższ, nasiona przechodzą niestrawione przez układ pokarmowy (endozoochoria)', is_correct: true },
      { id: 'B', text: 'Owoce skrzydlate (klon, jesion) i puchate (dmuchawce mniszka) są przystosowane do rozsiewania przez wiatr (anemochoria) — duże powierzchnie i mała masa umożliwiają unoszenie', is_correct: true },
      { id: 'C', text: 'Nasiona z haczykami (łopian, rzep) przyczepiają się do sierści zwierząt lub odzieży i są rozsiewane przez ruch zwierząt (epizoochoria)', is_correct: true },
      { id: 'D', text: 'Rośliny wodne (np. lilia wodna, kokos) rozsiewają nasiona przez wiatr — woda jest zbyt gęsta, by unosić owoc', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — PRAWDA: endozoochoria: zwierzę (ptak, ssak) zjada owoc mięsisty → nasiona są zabezpieczone twardą łupiną lub chemicznie → niestrawnione wydalane wraz z kałem w innym miejscu; np. jabłko (dzik), wiśnia (kos), jagoda (niedźwiedź). B — PRAWDA: anemochoria: klon — skrzydlaki (samary) wirują w powietrzu; mniszek — koszyczek + pappus (puch) unosi się na wietrze. C — PRAWDA: epizoochoria: haczykowate wyrostki lub lepka powierzchnia przyczepiają się do futra lub piór; np. łopian (buffy), przywrotnik, rzep. D — FAŁSZ: hydrochoria = rozsiewanie przez wodę; owoce roślin wodnych lub nadbrzeżnych unoszą się i kiełkują w nowych miejscach; kokosy (Cocos nucifera) perfekcyjnie pływają przez oceany (łupina z powietrzem i tłuszczem jako balastem).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Grupy systematyczne roślin ───
  {
    subtopic: 'Grupy systematyczne roślin',
    subtopic_id: S.grupy,
    question_type: 'single',
    question_text: 'Ewolucja roślin lądowych wiązała się z szeregiem przystosowań do życia poza wodą. Uszereguj poniższe grupy od NAJPRYMITYWNIEJSZEJ do NAJBARDZIEJ ZAAWANSOWANEJ ewolucyjnie pod względem przystosowań do lądu:\nMszaki (Bryophyta) — Paprocie (Pterophyta) — Nagonasienne (Gymnospermae) — Okrytonasienne (Angiospermae)',
    options: [
      { id: 'A', text: 'Mszaki → Paprocie → Nagonasienne → Okrytonasienne', is_correct: true },
      { id: 'B', text: 'Paprocie → Mszaki → Okrytonasienne → Nagonasienne', is_correct: false },
      { id: 'C', text: 'Mszaki → Nagonasienne → Paprocie → Okrytonasienne', is_correct: false },
      { id: 'D', text: 'Okrytonasienne → Nagonasienne → Paprocie → Mszaki (od najbardziej do najmniej)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Ewolucja roślin lądowych: Mszaki (brak tkanek przewodzących, dominuje gametofit, wiciowe plemniki wymagają wody) → Paprocie (tkanki przewodzące: ksylem i floem, dominuje sporofit, ale wciąż wiciowe plemniki) → Nagonasienne (nasiona bez okrywcy, pyłek = uniezależnienie od wody do zapłodnienia, dominuje sporofit, bez owoców) → Okrytonasienne (nasiona otoczone owocnią, kwiat, podwójne zapłodnienie, bielmo 3n, pełna dominacja sporofitu, gametofit zredukowany do kilku komórek). Kolejne "sukcesy" lądowe: kutykula, aparaty szparkowe, tkanki przewodzące, nasiona, pyłek, owoce.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Grupy systematyczne roślin',
    subtopic_id: S.grupy,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących systematyki i budowy roślin:\nA. Skrzypy (Equisetum) są roślinami naczyniowymi zarodnikowymi — mają tkanki przewodzące, ale rozmnażają się przez zarodniki (brak nasion).\nB. Widłaki (Lycopodiophyta) były dominującymi drzewami karbońskich lasów — ich skamieniałości tworzą pokłady węgla kamiennego.\nC. Sosna jest rośliną nagonasienną — jej zalążki (nasiona) są zamknięte w owocni tworzonej przez zalążnię słupka.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: skrzypy (Equisetophyta) = rośliny naczyniowe (mają ksylem i floem) + beznasienny (rozmnażają się przez zarodniki wytwarzane w strobili); wciąż wymagają wody do zapłodnienia (wiciowe gamety). B — PRAWDA: w karbonie (359–299 mln lat temu) drzewiste widłaki (Lepidodendron, Sigillaria — do 30 m) i skrzypowe (Calamites) tworzyły rozległe tropikalne lasy bagienne → szczątki tworzyły torf → węgiel kamienny. Dzisiejsze widłaki to zielne relikty. C — FAŁSZ: sosna jest NAGONASIENNĄ — jej zalążki (na łuskach szyszki żeńskiej) NIE są zamknięte w owocni (brak owocni = definicja nagozalążkowych). Owocnia → tylko u okrytonasiennych (Angiospermae).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Grupy systematyczne roślin',
    subtopic_id: S.grupy,
    question_type: 'single',
    question_text: 'Rośliny owadożerne (np. rosiczka Drosera, dzbanecznik Nepenthes, muchołówka Dionaea) wykształciły mechanizmy chwytania owadów. Jakie jest główne EWOLUCYJNE wytłumaczenie tego przystosowania?',
    options: [
      { id: 'A', text: 'Brak chlorofilu u roślin owadożernych — muszą pozyskiwać energię przez trawienie zwierząt zamiast fotosyntezy', is_correct: false },
      { id: 'B', text: 'Rośliny owadożerne żyją na glebach ubogich w azot i fosfor (np. torfowiska, podmokłe skały) — owady dostarczają N i P niedoborowe w środowisku', is_correct: true },
      { id: 'C', text: 'Polowanie na owady jest adaptacją do obrony przed roślinożercami — owady zjadane, zanim zdążą uszkodzić liście', is_correct: false },
      { id: 'D', text: 'Rośliny owadożerne nie przeprowadzają fotosyntezy (są pasożytami słonecznego światła) — owady są jedynym źródłem energii', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Rośliny owadożerne (karniwory): PROWADZĄ fotosyntezę (mają chlorofil, chloroplasty) — nie brakuje im energii. Problem: azot (N) i fosfor (P) niezbędne do syntezy białek, kwasów nukleinowych i ATP są ekstremalnie rzadkie w ich biotopach (torfowiska, kwaśne podmokłe gleby, nagie skały), gdzie pH ≈ 4–5 ogranicza biodostępność N i P. Rozwiązanie ewolucyjne: chwytanie i trawienie owadów (bogatych w N i P) = suplementacja mineralnych niedoborów. Pułapki: lepkie gruczoły (rosiczka), dzbankowe (dzbaneczniki), zatrzaskowe (muchołówka), ssące (pływacze). Enzymy trawienne: proteazy, esterazy wydzielane do pułapki.',
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
  console.log(`Seeding ${questions.length} mock questions for Roznorodnosc roslin — tkanki i organy...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
