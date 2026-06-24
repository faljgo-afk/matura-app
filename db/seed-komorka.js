// Seed: Komórka i biochemia — 30 questions
// Topic: c4346b31-355b-4817-9e66-22cf36d4c993

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = 'c4346b31-355b-4817-9e66-22cf36d4c993'

const S = {
  blona:       '02bdc9fd-fcc9-4a74-bb86-477bfaa7dba3',
  organelle:   '5f7aaca5-c24d-41de-a023-a4fd1edd909d',
  sklad:       'baa3174e-705a-4720-be31-86a859a652e1',
  bialka:      'a42f1d2e-1608-446b-a4b8-4740027f1112',
  kwasy:       '257cec56-c729-474f-8387-eef06eb32e09',
  glikoliza:   '04e96c80-bd1d-4d99-95b7-c88d4f0ef598',
  lancuch:     'ce23ad40-6d27-4b15-b49f-0e714db0e20e',
  cykl:        'a21c7985-cdf3-4451-840e-617a993b145e',
  endosymbioza:'b3c2f29e-c078-4af4-9c0e-ea903c659986',
}

const questions = [
  // ─── Budowa błony komórkowej i transport (4) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.blona,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nModel mozaiki płynnej błony komórkowej (Singer i Nicolson, 1972) zakłada, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'błona zbudowana jest z pojedynczej warstwy lipidów, w której białka leżą wyłącznie na powierzchni zewnętrznej', is_correct: false },
      { id: 'B', text: 'dwuwarstwa fosfolipidowa stanowi płynne środowisko, w którym białka integralne i peryferyczne mogą się przemieszczać bocznie', is_correct: true },
      { id: 'C', text: 'błona jest strukturą sztywną — białka i lipidy są nieruchome i ściśle upakowane', is_correct: false },
      { id: 'D', text: 'cholesterol destabilizuje dwuwarstwę fosfolipidową, dlatego u ssaków jest nieobecny w błonach komórkowych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Model mozaiki płynnej: dwuwarstwa fosfolipidowa (głowy hydrofilowe na zewnątrz, ogony hydrofobowe do środka) tworzy płynne środowisko 2D. Białka integralne (transbłonowe, np. kanały jonowe, pompy) są zanurzone w lipidach; białka peryferyczne — związane z powierzchnią. Płynność umożliwia ruch boczny (dyfuzja lateralna). Cholesterol u zwierząt reguluje płynność: w niskich temperaturach zapobiega zestalaniu, w wysokich — ogranicza płynność. A — błąd: model dwuwarstwowy. C — błąd: dynamiczny, nie sztywny. D — błąd: cholesterol stabilizuje błonę i reguluje jej płynność.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.blona,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transportu przez błonę komórkową.\nA. Dyfuzja prosta nie wymaga białek nośnikowych ani nakładu energii — substancja przemieszcza się zgodnie z gradientem stężeń (np. O₂, CO₂ przez fosfolipidy).\nB. Pompa sodowo-potasowa (Na⁺/K⁺-ATPaza) transportuje 3 jony Na⁺ na zewnątrz i 2 jony K⁺ do wnętrza komórki na każdy hydrolizowany ATP — jest to transport aktywny pierwotny.\nC. Osmoza to dyfuzja wody przez błonę półprzepuszczalną z roztworu o wyższym stężeniu substancji osmotycznie czynnych (hipertoniczny) do roztworu o niższym stężeniu (hipoosmotyczny).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Dyfuzja prosta: zgodnie z gradientem, bez białek i energii (O₂, CO₂).', is_correct: true },
      { id: 'B', text: 'Pompa Na⁺/K⁺: 3 Na⁺ na zewnątrz, 2 K⁺ do środka, 1 ATP — transport aktywny.', is_correct: true },
      { id: 'C', text: 'Osmoza: woda przemieszcza się z roztworu hipertonicznego do hipotonicznego.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: małe, niepolarne cząsteczki (O₂, CO₂, N₂, etanol) przenikają bezpośrednio przez rdzeń lipidowy. Dyfuzja ułatwiona (np. glukoza przez GLUT) wymaga białka, ale nie energii. B — Prawda: Na⁺/K⁺-ATPaza: transport aktywny pierwotny (bezpośrednio z ATP); utrzymuje gradient elektrochemiczny niezbędny dla potencjału spoczynkowego neuronów i innych komórek. C — Fałsz: woda przemieszcza się z roztworu o NIŻSZYM stężeniu substancji (hipotonicznego, wyższy potencjał wody) do roztworu o WYŻSZYM stężeniu (hipertonicznego, niższy potencjał wody). Woda "ucieka" od środowiska rozcieńczonego do stężonego.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.blona,
    question_text: 'Badacz umieścił erytrocyty w trzech roztworach: A — 0,9% NaCl (fizjologiczny), B — 0,3% NaCl (hipoosmotyczny), C — 3% NaCl (hiperosmotyczny). Oceń, co zaobserwuje pod mikroskopem.',
    question_type: 'single',
    options: [
      { id: 'A', text: 'W roztworze B komórki ulegną plazmolize — błona odklei się od ściany komórkowej', is_correct: false },
      { id: 'B', text: 'W roztworze A erytrocyty zachowają normalny kształt, w B ulegną hemolizie (pęknięciu), w C — krenacji (pomarszczeniu)', is_correct: true },
      { id: 'C', text: 'W roztworze C komórki pęcznieją wskutek napływu wody osmotycznie do hipertonicznego środowiska', is_correct: false },
      { id: 'D', text: 'Erytrocyty nie są wrażliwe na osmozę, bo nie mają jądra komórkowego', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Efekty osmozy na erytrocyty (komórki bez ściany komórkowej): A (izotoniczny, 0,9% NaCl): brak netto przepływu wody → komórki zachowują dwuwklęsły kształt. B (hipoosmotyczny, 0,3% NaCl): zewnątrz mniej substancji → woda napływa do erytrocytów → pęcznieją → hemoliza (pęknięcie błony) → hemoglobina uwalnia się. C (hiperosmotyczny, 3% NaCl): zewnątrz więcej substancji → woda wypływa z erytrocytów → krenacja (erytrocyty marszczą się, "jeżykowate"). A (plazmoliза) dotyczy komórek roślinnych z ścianą komórkową — oddzielenie błony od ściany. Erytrocyty nie mają ściany, więc plazmoliza ich nie dotyczy.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.blona,
    question_text: 'Które z poniższych procesów wymagają nakładu energii (ATP)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Transport aktywny glukozy w jelicie cienkim (kotransport Na⁺/glukoza — SGLT)', is_correct: true },
      { id: 'B', text: 'Endocytoza z udziałem receptorów (receptor-mediated endocytosis)', is_correct: true },
      { id: 'C', text: 'Dyfuzja CO₂ z krwi do pęcherzyków płucnych', is_correct: false },
      { id: 'D', text: 'Egzocytoza pęcherzyków synaptycznych z acetylocholiną', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Tak: kotransport SGLT1 (Na⁺ + glukoza) to transport aktywny wtórny — energia pochodzi z gradientu Na⁺ wytworzonego przez Na⁺/K⁺-ATPazę (która bezpośrednio zużywa ATP). B — Tak: endocytoza wymaga polimeryzacji aktyny, dynaminy i innych białek GTPaz — zużywa energię. D — Tak: egzocytoza wymaga polimer. cytoszkieletu i GTPaz; fuzja pęcherzyków z błoną to aktywny proces. C — Nie: CO₂ jest małą, niepolarsą cząsteczką → dyfuzja prosta przez dwuwarstwę lipidową zgodnie z gradientem stężeń; nie wymaga białek ani energii.',
    difficulty: 2, verified: true,
  },

  // ─── Organelle komórkowe (4) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.organelle,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mitochondriów.\nA. Mitochondria mają dwie błony: zewnętrzną (gładką) i wewnętrzną (tworząca grzebienie — cristae), która zawiera kompleksy łańcucha oddechowego i ATP-syntazę.\nB. Mitochondria posiadają własny DNA (mtDNA), rybosomy 70S i rozmnażają się przez podział — dowody na endosymbiotyczne pochodzenie z α-proteobakterii.\nC. Mitochondria są obecne we wszystkich komórkach eukariotycznych, w tym w dojrzałych erytrocytach ssaków.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mitochondria: dwie błony, grzebienie z łańcuchem oddechowym i ATP-syntazą.', is_correct: true },
      { id: 'B', text: 'Mitochondria: własne DNA (mtDNA), rybosomy 70S, podział — dowód endosymbiozy.', is_correct: true },
      { id: 'C', text: 'Mitochondria obecne we wszystkich komórkach eukariotycznych, w tym w erytrocytach.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: przestrzeń międzybłonowa (między błonami) jest miejscem pompowania H⁺; macierz (matrix) — miejsce cyklu Krebsa. Grzebienie (cristae) zwiększają powierzchnię błony wewnętrznej. B — Prawda: mtDNA (kolisty, bez histonów), rybosomy 70S (jak prokarioty), czułość na antybiotyki podobna do bakterii — dowody teorii endosymbiozy. C — Fałsz: dojrzałe erytrocyty ssaków NIE mają mitochondriów (ani jądra) — energia pochodzi wyłącznie z glikolizy. Jest to przystosowanie do transportu O₂ (więcej miejsca na hemoglobinę, brak własnego zużycia O₂).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.organelle,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nBiałka wydzielnicze (np. insulina, przeciwciała) produkowane w komórkach eukariotycznych podążają następującą drogą sekrecji:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'rybosomy wolne → mitochondria → aparat Golgiego → egzocytoza', is_correct: false },
      { id: 'B', text: 'rybosomy związane z sER → jądro komórkowe → lizosomy → egzocytoza', is_correct: false },
      { id: 'C', text: 'rybosomy na szorstkim ER (rER) → siateczka endoplazmatyczna → aparat Golgiego (modyfikacje) → pęcherzyki wydzielnicze → egzocytoza', is_correct: true },
      { id: 'D', text: 'rybosomy wolne w cytozolu → peroksysomy → aparat Golgiego → egzocytoza', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Droga sekrecyjna (szlak wydzielniczy): Rybosomy na rER: synteza białka z sygnalnym peptydem → wprowadzenie do światła rER → odcięcie peptydu sygnałowego. rER: glikozylacja N-powiązana, fałdowanie (BiP, kalneksyna). Transport pęcherzykami COP II do aparatu Golgiego (cis → medial → trans). Aparat Golgiego: dalsza glikozylacja (O-powiązana), fosforylacja, sortowanie. Trans-Golgiego: pakowanie do pęcherzyków wydzielniczych (secretory vesicles). Egzocytoza: fuzja z błoną plazmatyczną → sekrecja. Wolne rybosomy produkują białka do cytozolu, mitochondriów, peroksysomów, chloroplastów — nie dla szlaku sekrecyjnego.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.organelle,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chloroplastów i ich budowy.\nA. Chloroplasty zbudowane są z: zewnętrznej i wewnętrznej błony otoczki, stromę (odpowiednik macierzy mitochondrialnej) oraz systemu błon tylakoidów zorganizowanych w grany.\nB. Fotosystemy I i II (PSI, PSII) są zlokalizowane w błonach tylakoidów — tam przebiega faza świetlna fotosyntezy (fotofosforylacja).\nC. Chloroplasty są obecne we wszystkich komórkach roślinnych, w tym w korzeniach i miękiszu kory łodygi.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Chloroplast: dwie błony otoczki, stroma, tylakoidy w granach.', is_correct: true },
      { id: 'B', text: 'PSI i PSII w błonach tylakoidów — miejsce fazy świetlnej fotosyntezy.', is_correct: true },
      { id: 'C', text: 'Chloroplasty w każdej komórce rośliny, w tym w korzeniu.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: otoczka (2 błony, gładkie) oddziela chloroplast od cytoplazmy; stroma (odpowiednik matrix) — miejsce cyklu Calvina (faza ciemna); tylakoidy (błony wewnętrzne) zorganizowane w grany — miejsce reakcji świetlnych. B — Prawda: PSII (P680) i PSI (P700) wbudowane w błony tylakoidów; tu fotoliza wody, transport elektronów, powstawanie NADPH i gradient H⁺ → ATP-syntaza CF₁. C — Fałsz: chloroplasty występują głównie w tkankach zielonych (liście, zielone łodygi, niedojrzałe owoce). Korzenie (bez dostępu światła) NIE mają chloroplastów — zawierają leukoplasty (magazyn skrobi) lub chromoplasty.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.organelle,
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnicę między komórką prokariotyczną a eukariotyczną?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Komórki eukariotyczne mają jądro komórkowe otoczone podwójną błoną z porami jądrowymi — komórki prokariotyczne mają nukleoid bez błony', is_correct: true },
      { id: 'B', text: 'Rybosomy 80S (podjednostki 40S + 60S) charakteryzują komórki eukariotyczne; prokarioty mają rybosomy 70S (30S + 50S)', is_correct: true },
      { id: 'C', text: 'Komórki prokariotyczne mają mitochondria, ale ich grzebienie są mniej rozwinięte niż u eukariontów', is_correct: false },
      { id: 'D', text: 'Ściana komórkowa bakterii zbudowana jest z peptydoglikanu (mureiny), a ściana komórkowa roślin — z celulozy', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: kluczowa różnica strukturalna; eukarioty mają kompartmentalizację (membranous organelles); pory jądrowe regulują transport RNA i białek. B — Prawda: antybiotyki (streptomycyna, tetracyklina, erytromycyna) celują w rybosomy 70S prokariontów, nie zaburzając rybosomów 80S eukariontów — stąd selektywna toksyczność. D — Prawda: peptydoglikan (murein) u bakterii gram+ tworzy grubą warstwę, u gram- — cienką (między dwiema błonami); celuloza u roślin tworzy ścianę komórkową przez połączenia β-1,4-glikozydowe. C — Fałsz: prokarioty NIE mają mitochondriów — oddychanie tlenowe przebiega na błonie komórkowej (mezosom).',
    difficulty: 2, verified: true,
  },

  // ─── Skład chemiczny komórki (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.sklad,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących składu chemicznego komórki.\nA. Woda stanowi 70–80% masy komórki i pełni wiele funkcji: rozpuszczalnik, substrat reakcji (hydroliza, fotosynteza), termoregulator, środowisko transportu.\nB. Białka są polianionami — w komórkach mają zawsze ujemny ładunek elektryczny i nigdy nie mogą służyć jako bufory pH.\nC. Węglowodany w komórkach pełnią głównie funkcję energetyczną (skrobia u roślin, glikogen u zwierząt) i strukturalną (celuloza, chityna).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Woda: 70–80% masy, rozpuszczalnik, substrat, termoregulator.', is_correct: true },
      { id: 'B', text: 'Białka mają zawsze ujemny ładunek i nigdy nie działają jako bufory.', is_correct: false },
      { id: 'C', text: 'Węglowodany: energia (skrobia, glikogen) i struktura (celuloza, chityna).', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: woda to substrat fotolizy w fotosyntezie (→ O₂), hydrolizy peptydów, estrów, glikozydów; duże ciepło właściwe stabilizuje temperaturę. C — Prawda: skrobia (α-1,4 i α-1,6 glukoza) — zapasowa u roślin; glikogen — zapasowy u zwierząt i grzybów; celuloza (β-1,4 glukoza) — ściana komórkowa roślin; chityna (β-1,4 N-acetyloglukozamina) — ściana grzybów i pancerz stawonogów. B — Fałsz: aminokwasy i białka są amfoteryczne — mogą oddawać lub przyjmować protony zależnie od pH (grupy -COOH, -NH₂, łańcuchy boczne His, Asp, Glu). Hemoglobina jest ważnym buforem krwi (bufor hemoglobinianowy). Ładunek białka zależy od pH środowiska i pI (punktu izoelektrycznego).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.sklad,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nLipidy są grupą związków chemicznych pełniących wiele funkcji w organizmach żywych. Fosfolipidy błon komórkowych mają charakter amfipatyczny, co oznacza że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'są całkowicie nierozpuszczalne w wodzie i tworzą krople tłuszczu w cytozolu', is_correct: false },
      { id: 'B', text: 'posiadają zarówno hydrofilową "głowę" (glicerol + fosforan + reszta alkoholu) jak i hydrofobowe "ogony" (dwa łańcuchy kwasów tłuszczowych)', is_correct: true },
      { id: 'C', text: 'rozpuszczają się zarówno w wodzie, jak i w tłuszczach z jednakową wydajnością', is_correct: false },
      { id: 'D', text: 'posiadają wyłącznie nasycone kwasy tłuszczowe, co zwiększa płynność błony', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Amfipatyczność (gr. amfis = obustronny): fosfolipidy mają część hydrofilową (polarną) i hydrofobową (niepolarną). Głowa hydrofilowa: fosforan + alkohol (cholina, etanoloamina, seryna, inozytol) + glicerol — skierowana ku wodzie. Ogony hydrofobowe: dwa łańcuchy acylowe kwasów tłuszczowych (nasycony = prosty, nienasycony = z przegięciem). W środowisku wodnym spontanicznie tworzą dwuwarstwy (błony) lub micele. Właściwość amfipatyczna wyjaśnia samorzutne tworzenie się błon biologicznych. D — błąd: nienasycone kwasy tłuszczowe (z podwójnymi wiązaniami = "kink") zwiększają płynność błony, nasycone — zmniejszają.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.sklad,
    question_text: 'Które z poniższych par: [cząsteczka → wiązanie chemiczne łączące monomery] są POPRAWNE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Białko → wiązanie peptydowe (między grupą -COOH a -NH₂ sąsiednich aminokwasów)', is_correct: true },
      { id: 'B', text: 'DNA → wiązanie 3′,5′-fosfodiestrowe (między cukrem jednego nukleotydu a fosforanem następnego)', is_correct: true },
      { id: 'C', text: 'Skrobia → wiązanie β-1,4-glikozydowe (między jednostkami glukozy)', is_correct: false },
      { id: 'D', text: 'Trigliceryd (tłuszcz) → wiązanie estrowe (między glicerolem a kwasami tłuszczowymi)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: wiązanie peptydowe powstaje w kondensacji (odłączenie H₂O): -CO-NH-; rybosomy katalizują jego tworzenie; hydroliza przez proteazy. B — Prawda: szkielet DNA (i RNA) to łańcuch cukrowo-fosforanowy; fosforan tworzy mostek między węglem 3′ jednego nukleotydu a węglem 5′ następnego → wiązanie 3′,5′-fosfodiestrowe. D — Prawda: glicerol (3 grupy -OH) + 3 kwasy tłuszczowe (grupy -COOH) → 3 wiązania estrowe (-COO-) + 3 H₂O; hydroliza przez lipazy. C — Fałsz: skrobia ma wiązania α-1,4-glikozydowe (amyloza) i α-1,6-glikozydowe (amylopektyna, punkty rozgałęzień). Wiązania β-1,4-glikozydowe łączą monomery CELULOZY — ludzie nie mają celulazy.',
    difficulty: 2, verified: true,
  },

  // ─── Białka i enzymy (4) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.bialka,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących struktury białek.\nA. Struktura pierwszorzędowa białka to sekwencja aminokwasów połączonych wiązaniami peptydowymi — jest bezpośrednio zdeterminowana przez sekwencję nukleotydów mRNA.\nB. Struktura drugo rzędowa (α-helisa, β-harmonijka) jest stabilizowana wiązaniami kowalencyjnymi między łańcuchami bocznymi aminokwasów.\nC. Denaturacja białka polega na zniszczeniu jego struktury przestrzennej (trzeciorzędowej i wyższych) bez zrywania wiązań peptydowych — białko traci aktywność biologiczną.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Struktura I-rzędowa = sekwencja aa, zdeterminowana przez mRNA.', is_correct: true },
      { id: 'B', text: 'Struktura II-rzędowa stabilizowana wiązaniami kowalencyjnymi między łańcuchami bocznymi.', is_correct: false },
      { id: 'C', text: 'Denaturacja: zniszczenie struktury przestrzennej bez zrywania wiązań peptydowych.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: kolejność kodonów na mRNA (odczytywana przez rybosomy) determinuje kolejność aminokwasów → struktura pierwszorzędowa. C — Prawda: denaturacja (wysoka temperatura, ekstremalny pH, detergenty, mocznik) zrywa wiązania: wodorowe, jonowe, hydrofobowe, mostki dwusiarczkowe (-S-S-) → białko się "rozkłada"; wiązania peptydowe (-CO-NH-) są kowalencyjne i wytrzymują. Białko traci aktywność (np. gotowane jajko). B — Fałsz: struktura drugorzędowa (α-helisa, arkusze β) jest stabilizowana przez WIĄZANIA WODOROWE między atomami NH i CO szkieletu peptydowego (nie łańcuchów bocznych). Wiązania kowalencyjne między łańcuchami bocznymi (mostki -S-S- cysteiny) stabilizują strukturę TRZECIORZĘDOWĄ.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.bialka,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nEnzym jest katalizatorem biologicznym, który obniża energię aktywacji reakcji poprzez:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'dostarczanie energii cieplnej, która inicjuje reakcję i przesuwa równowagę termodynamiczną w stronę produktów', is_correct: false },
      { id: 'B', text: 'zmianę energii swobodnej Gibbsa (ΔG) reakcji — enzym czyni reakcje egzoergiczne z reakcji endoergicznych', is_correct: false },
      { id: 'C', text: 'tworzenie kompleksu enzym-substrat w centrum aktywnym i stabilizację stanu przejściowego, obniżając energię aktywacji bez zmiany ΔG', is_correct: true },
      { id: 'D', text: 'nieodwracalne przyłączenie substratu do centrum aktywnego, co wyklucza ponowne użycie enzymu', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'Enzym → katalizator biologiczny (zwykle białkowy, czasem RNA = rybozym). Mechanizm: substrat wiąże się z centrum aktywnym (active site) → tworzenie kompleksu ES (enzym-substrat). Enzym stabilizuje stan przejściowy: obniża energię aktywacji Ea (szybsza reakcja), ale NIE zmienia ΔG reakcji (kierunek i równowaga są niezmienione). Po reakcji enzym uwalnia produkt i jest gotowy do ponownego użycia (nie jest zużywany). A — błąd: enzymy nie dostarczają energii cieplnej; działają w temperaturze fizjologicznej. B — błąd: enzym nie zmienia ΔG; egzoergiczność/endoergiczność to właściwość reakcji, nie enzymu. D — błąd: wiązanie w centrum aktywnym jest odwracalne (kompleks ES); nieodwracalne zahamowanie → inhibitory nieodwracalne (trucizny).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.bialka,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących regulacji aktywności enzymów.\nA. Inhibitor kompetycyjny wiąże się z centrum aktywnym enzymu i współzawodniczy z substratem — jego działanie można przezwyciężyć przez zwiększenie stężenia substratu.\nB. Inhibitor niekompetycyjny (allosteryczny) wiąże się z centrum allosterycznym (poza centrum aktywnym) i zmienia konformację enzymu — jego działanie NIE zależy od stężenia substratu.\nC. Fosforylacja białek enzymatycznych przez kinazy białkowe jest nieodwracalna — raz ufosforylowany enzym nie może być już aktywowany ani dezaktywowany.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Inhibitor kompetycyjny: wiąże centrum aktywne, pokonywany nadmiarem substratu.', is_correct: true },
      { id: 'B', text: 'Inhibitor niekompetycyjny: wiąże centrum allosteryczne, niezależny od stężenia substratu.', is_correct: true },
      { id: 'C', text: 'Fosforylacja enzymu jest nieodwracalna.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: inhibitor kompetycyjny (np. metotreksat dla DHFR, CO dla cytochromu) wiąże centrum aktywne odwracalnie; wysoki [S] wypiera inhibitor → kinetyka: Vmax niezmieniona, Km rośnie. B — Prawda: inhibitor niekompetycyjny wiąże centrum allosteryczne; obniża Vmax (mniej aktywnych centrów), Km niezmieniona; np. produkt końcowy szlaku hamuje enzym pierwszy (hamowanie produktem końcowym). C — Fałsz: fosforylacja/defosforylacja to kluczowy ODWRACALNY mechanizm regulacji: kinazy białkowe dodają grupę fosforanową (-PO₄), fosfatazy ją odejmują → szybkie przełączanie aktywności enzymatycznej (np. glikogen fosforylaza: fosforylacja → aktywna; defosforylacja → nieaktywna).',
    difficulty: 3, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.bialka,
    question_text: 'Które z poniższych czynników mogą ZMNIEJSZAĆ aktywność enzymatyczną?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Temperatura powyżej optimum (denaturacja termiczna centrum aktywnego)', is_correct: true },
      { id: 'B', text: 'pH znacznie odbiegające od wartości optymalnej dla danego enzymu', is_correct: true },
      { id: 'C', text: 'Obecność kofaktorów (np. jonów Mg²⁺, Zn²⁺, hemu) niezbędnych dla aktywności', is_correct: false },
      { id: 'D', text: 'Metale ciężkie (Hg²⁺, Pb²⁺) wiążące grupy -SH cysteiny w centrum aktywnym', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Tak: optimum temperatury (zwykle 37°C dla enzymów człowieka); powyżej → denaturacja; poniżej → spowolnienie kinetyki (Q₁₀ ≈ 2). B — Tak: optimum pH (pepsyna ~2, trypsyna ~8, amylaza ślinowa ~7); zmiana ładunku reszt aa centrum aktywnego → zaburzona kataliza. D — Tak: metale ciężkie (trucizny enzymatyczne): Hg²⁺, Pb²⁺, Cd²⁺ wiążą grupy tiolowe (-SH) cysteyny trwale → inhibitory nieodwracalne; wypierają kofaktory metali. C — Błąd: kofaktory ZWIĘKSZAJĄ lub UMOŻLIWIAJĄ aktywność; apoenzym (bez kofaktora) często nieaktywny; holoenzym (z kofaktorem) = aktywna forma. Nieobecność kofaktora redukuje aktywność, ale sama OBECNOŚĆ kofaktora ją zwiększa.',
    difficulty: 2, verified: true,
  },

  // ─── Kwasy nukleinowe — budowa (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.kwasy,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy DNA.\nA. Nukleotyd DNA składa się z: zasady azotowej (puryna lub pirymidyna) + deoksyrybozy (pentoza bez grupy -OH przy C-2′) + reszty fosforanowej.\nB. W cząsteczce DNA zasady parują się zgodnie z regułą Chargaffa: A=T (dwa wiązania wodorowe) i G≡C (trzy wiązania wodorowe) — zawsze puryna z pirymidyną.\nC. Nici DNA w podwójnej helisie są równoległe (biegną w tym samym kierunku 5′→3′), co umożliwia komplementarne parowanie zasad.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Nukleotyd DNA: zasada azotowa + deoksyryboza + fosforan.', is_correct: true },
      { id: 'B', text: 'Reguła Chargaffa: A=T (2 wiązania H), G≡C (3 wiązania H).', is_correct: true },
      { id: 'C', text: 'Nici DNA biegną równolegle (obydwie 5′→3′).', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: w RNA zamiast deoksyrybozy → ryboza (z -OH przy C-2′); zamiast tyminy (T) → uracyl (U). B — Prawda: reguła Chargaffa (1950): [A]=[T], [G]=[C] → %A+%G = %T+%C = 50%. Trzy wiązania H między G≡C tłumaczą wyższą temperaturę topnienia DNA bogatego w G+C (denaturacja wymaga wyższej energii). C — Fałsz: nici DNA są ANTYRÓWNOLEGŁE (antiparallel): jedna biegnie 5′→3′, druga 3′→5′. Jest to konieczne do komplementarnego parowania zasad; wszystkie polimerazy DNA i RNA syntetyzują nowe nici wyłącznie w kierunku 5′→3′.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.kwasy,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nRNA różni się od DNA pod kilkoma względami. Które z poniższych stwierdzeń POPRAWNIE opisuje te różnice?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'RNA jest zawsze jednoniciowy, nigdy nie tworzy struktury dwuniciowej, natomiast DNA zawsze tworzy podwójną helisę', is_correct: false },
      { id: 'B', text: 'W RNA zamiast tyminy (T) występuje uracyl (U), cukrem jest ryboza (nie deoksyryboza), a cząsteczka jest zazwyczaj jednoniciowa', is_correct: true },
      { id: 'C', text: 'RNA jest bardziej stabilny chemicznie niż DNA, dlatego używany jest do długoterminowego przechowywania informacji genetycznej', is_correct: false },
      { id: 'D', text: 'W skład RNA wchodzi tymina zamiast uracylu — jedyna różnica to brak grupy metylowej przy C-5 pierścienia pirymidynowego', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Różnice RNA vs DNA: Cukier: ryboza (RNA, -OH przy C-2′) vs deoksyryboza (DNA, -H przy C-2′). Zasady: U (uracyl) zamiast T (tyminy) w RNA; pozostałe: A, G, C — identyczne. Liczba nici: RNA zazwyczaj jednoniciowy, ale może tworzyć struktury drugorzędowe (spinki, pętle, struktury tRNA); DNA — podwójna helisa. A — błąd: wirusowe RNA (rotawirus, dsRNA) i tRNA mają struktury dwuniciowe lub zbliżone. C — błąd: RNA jest MNIEJ stabilny (grupa -OH przy C-2′ uczestniczy w hydrolizie zasadowej) → DNA lepszy do długoterminowego przechowywania informacji. D — odwrócone: to RNA ma uracyl (bez grupy metylowej przy C-5), DNA ma tyminę (z grupą metylową).',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.kwasy,
    question_text: 'Które z poniższych stwierdzeń dotyczących rodzajów RNA są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'mRNA (informacyjny) przenosi informację genetyczną z jądra do rybosomu i służy jako matryca translacji', is_correct: true },
      { id: 'B', text: 'tRNA (transportujący) ma strukturę koniczyny liściowej, antykodony komplementarne do kodonów mRNA i transportuje aminokwasy do rybosomu', is_correct: true },
      { id: 'C', text: 'rRNA (rybosomalny) jest składnikiem rybosomu i katalizuje tworzenie wiązania peptydowego — jest przykładem rybozymu', is_correct: true },
      { id: 'D', text: 'siRNA i miRNA to małe cząsteczki RNA wyłącznie u prokariontów — eukarioty nie posiadają mechanizmu interferencji RNA', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: mRNA (messenger RNA): transkrypt genów kodujących białka; zawiera 5′ cap, kodon start (AUG), sekwencję kodującą, kodony stop (UAA, UAG, UGA), 3′ ogon poly-A. B — Prawda: tRNA (~75 nt): struktura trójlistnej koniczyny (3D: L-kształt); antykodon (3 nukleotydy) paruje z kodonem mRNA; aminokwas przyłączony kowalencyjnie do 3′ końca (-CCA). C — Prawda: rRNA to główny składnik strukturalny rybosomów; 23S rRNA (u prokariontów) lub 28S rRNA (eukarioty) katalyzuje tworzenie wiązania peptydowego → rybozym (RNA o aktywności enzymatycznej). D — Fałsz: siRNA i miRNA są u EUKARIONTÓW; miRNA reguluje ekspresję genów u roślin i zwierząt; siRNA (small interfering RNA) — mechanizm RNAi (interferencja RNA) — używany w biotechnologii do wyciszania genów.',
    difficulty: 3, verified: true,
  },

  // ─── Oddychanie komórkowe — glikoliza i fermentacja (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.glikoliza,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nGlikoliza to ciąg reakcji przekształcający glukozę (6C) w dwie cząsteczki pirogronianu (3C). Bilans energetyczny netto glikolizy to:',
    question_type: 'single',
    options: [
      { id: 'A', text: '4 ATP brutto, 2 ATP netto (2 ATP zużyte na etapie inwestycji), 2 NADH — w cytozolu', is_correct: true },
      { id: 'B', text: '2 ATP netto, 2 FADH₂, bez produkcji NADH — w mitochondriach', is_correct: false },
      { id: 'C', text: '36–38 ATP netto, 10 NADH, 2 FADH₂ — całkowity bilans oddychania tlenowego', is_correct: false },
      { id: 'D', text: 'brak produkcji ATP — energia z glikolizy magazynowana wyłącznie w NADH', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Glikoliza (cytozol, beztlenowa/tlenowa): 10 reakcji enzymatycznych. Faza inwestycji (1–5): zużycie 2 ATP (fosforylacja glukozy → G6P i F6P → F1,6BP). Faza zysku (6–10): produkcja 4 ATP (substratowa fosforylacja, przez kinazę 3-fosfoglicerynianową i kinazę pirogronianową) i 2 NADH. Bilans netto: 2 ATP, 2 NADH, 2 pirogronian. Miejsce: cytozol (nie mitochondria). C — błąd: 36–38 ATP to bilans całkowitego oddychania tlenowego (glikoliza + dekarboksylacja oksydacyjna + cykl Krebsa + łańcuch oddechowy). B — błąd: glikoliza produkuje NADH, nie FADH₂.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.glikoliza,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących fermentacji.\nA. Fermentacja alkoholowa (drożdże): pirogronian → acetaldehyd (przez dekarboksylazę pirogronianową, odłączenie CO₂) → etanol (przez dehydrogenazę alkoholową, utlenianie NADH → NAD⁺).\nB. Fermentacja mlekowa (bakterie mlekowe, mięśnie w beztlenowych warunkach): pirogronian → mleczan; reakcja katalizowana przez dehydrogenazę mleczanową; regeneruje NAD⁺ bez produkcji CO₂.\nC. Głównym celem fermentacji jest produkcja ATP — fermentacja dostarcza więcej ATP niż oddychanie tlenowe.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Fermentacja alkoholowa: pirogronian → CO₂ + acetaldehyd → etanol, regeneracja NAD⁺.', is_correct: true },
      { id: 'B', text: 'Fermentacja mlekowa: pirogronian → mleczan, regeneracja NAD⁺, bez CO₂.', is_correct: true },
      { id: 'C', text: 'Główny cel fermentacji to produkcja ATP — więcej niż oddychanie tlenowe.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: dwa etapy: (1) PDC: pirogronian → acetaldehyd + CO₂ (stąd bąbelki CO₂ przy pieczeniu chleba); (2) ADH: acetaldehyd + NADH → etanol + NAD⁺. Kluczowe: regeneracja NAD⁺ umożliwia kontynuację glikolizy. B — Prawda: LDH: pirogronian + NADH → L-mleczan + NAD⁺; brak CO₂; mleczan zakwasza środowisko (ból mięśni w intensywnym wysiłku). C — Fałsz: główny cel fermentacji to REGENERACJA NAD⁺ (nie produkcja ATP) — NAD⁺ jest niezbędny jako akceptor elektronów w glikolizie (reakcja G3P-dehydrogenazy). ATP w fermentacji = tylko 2 ATP z glikolizy. Oddychanie tlenowe: ~30–38 ATP. Fermentacja jest 15–19× mniej wydajna energetycznie.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.glikoliza,
    question_text: 'Na podstawie poniższego opisu oceń, który rodzaj metabolizmu energetycznego przebiega u tego organizmu.\nDrożdże hodowane w anaerobic conditions produkują etanol i dwutlenek węgla z glukozy. Stężenie glukozy w pożywce spada, stężenie etanolu rośnie, a produkowany CO₂ jest mierzony spirometrem. Badacz dodaje azydek sodu (inhibitor cytochromu oksydazy, kompleks IV łańcucha oddechowego). Co zaobserwuje?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Produkcja etanolu i CO₂ zatrzymuje się — azydek blokuje glikolizę', is_correct: false },
      { id: 'B', text: 'Azydek nie wpływa na wyniki — drożdże i tak przeprowadzają fermentację alkoholową (beztlenowo), a nie używają łańcucha oddechowego', is_correct: true },
      { id: 'C', text: 'Produkcja CO₂ rośnie trzykrotnie — azydek stymuluje fermentację', is_correct: false },
      { id: 'D', text: 'Drożdże przełączają się na fotosyntezę jako alternatywne źródło energii', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Azydek sodu (NaN₃) to inhibitor kompleksu IV (cytochrom oksydaza) łańcucha oddechowego → blokuje tlenowe oddychanie komórkowe. Jednak w warunkach beztlenowych (anaerobic conditions) drożdże już przeprowadzają fermentację alkoholową, która NIE korzysta z łańcucha oddechowego (przebiega w cytozolu, nie w mitochondriach). Dlatego azydek nie wpłynie na: glikolizę (cytozol), dekarboksylację pirogroniananu, redukcję acetaldehydu do etanolu. Fermentacja alkoholowa jest całkowicie niezależna od mitochondrialnego łańcucha oddechowego. A — błąd: glikoliza i fermentacja nie wymagają kompleksu IV. C i D — błędy biologiczne.',
    difficulty: 3, verified: true,
  },

  // ─── Oddychanie komórkowe — łańcuch oddechowy (4) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.lancuch,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cyklu Krebsa (cyklu kwasów trikarboksylowych — TCA).\nA. Cykl Krebsa przebiega w macierzy mitochondrialnej i jest zapoczątkowywany przez acetylo-CoA (2C) łączący się ze szczawiooctanem (4C) → cytrynian (6C).\nB. W jednym obrocie cyklu Krebsa (z jednej cząsteczki acetylo-CoA) powstają: 3 NADH, 1 FADH₂, 1 GTP (lub ATP) i 2 CO₂.\nC. Cykl Krebsa jest szlakiem wyłącznie dla metabolizmu węglowodanów — kwasy tłuszczowe i aminokwasy nie mogą być utleniane w tym cyklu.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Cykl Krebsa w macierzy mitochondrialnej: acetylo-CoA (2C) + OAA (4C) → cytrynian (6C).', is_correct: true },
      { id: 'B', text: '1 obrót Krebsa: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂.', is_correct: true },
      { id: 'C', text: 'Cykl Krebsa tylko dla węglowodanów — tłuszcze i aminokwasy nie wchodzą do cyklu.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: pirogronian z glikolizy → dekarboksylacja oksydacyjna (kompleks PDH) → acetylo-CoA + CO₂ + NADH; acetylo-CoA wchodzi do cyklu. B — Prawda: z jednego obrotu (2 C acetylu wchodzą, 2 CO₂ wychodzą): 3 NADH (izo-cytrynian-DH, α-ketoglutaran-DH, malat-DH), 1 FADH₂ (bursztynian-DH), 1 GTP (kinaza bursztynyloCo-A). Pełny bilans z glukozy (2 acetyloCo-A): ×2. C — Fałsz: cykl Krebsa jest centralnym węzłem metabolizmu: β-oksydacja kwasów tłuszczowych → acetylo-CoA → Krebsa; aminokwasy glukogenne → pirogronian lub intermediaty Krebsa (np. Asp → OAA, Glu → α-ketoglutaran); cykl TCA integruje metabolizm węglowodanów, tłuszczów i białek.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.lancuch,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nLańcuch oddechowy (łańcuch transportu elektronów) w mitochondriach działa na zasadzie:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'bezpośredniego przekazywania ATP z cytozolu do przestrzeni międzybłonowej mitochondriów', is_correct: false },
      { id: 'B', text: 'przekazywania elektronów z NADH i FADH₂ przez kompleksy I–IV do O₂ (ostatecznego akceptora); przy okazji H⁺ są pompowane do przestrzeni międzybłonowej, tworząc gradient protonowy', is_correct: true },
      { id: 'C', text: 'bezpośredniej syntezy ATP z ADP i Pi bez gradientu protonowego — ATP-syntaza działa jako kinaza białkowa', is_correct: false },
      { id: 'D', text: 'przekazywania elektronów od O₂ do NADH — reakcja odwrotna do oddychania, zachodząca w chloroplastach', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Łańcuch oddechowy (błona wewnętrzna mitochondriów): Kompleks I (NADH-DH): NADH → FMN → FeS → ubichinon (Q); pompuje 4 H⁺. Kompleks II (bursztynian-DH): FADH₂ → FeS → Q; NIE pompuje H⁺. Kompleks III (bc₁): QH₂ → cytochrom b → c → c₁ → cytochrom c; pompuje 4 H⁺. Cytochrom c: nośnik elektronów między III a IV. Kompleks IV (cytochrom oksydaza): 4 e⁻ + 4 H⁺ + O₂ → 2 H₂O; pompuje 2 H⁺. Gradient elektrochemiczny H⁺ (siła protonomotoryczna) napędza ATP-syntazę (kompleks V): synteza ATP zgodnie z chemiosmozą Mitchella. O₂ to końcowy akceptor elektronów; bez O₂ → zahamowanie łańcucha.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.lancuch,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chemiosmozy i ATP-syntazy.\nA. ATP-syntaza (kompleks V) jest zlokalizowana w wewnętrznej błonie mitochondrialnej — jej podjednostka F₀ jest zanurzona w błonie, a F₁ (subunit katalityczny) wystaje do macierzy.\nB. Przepływ protonów (H⁺) przez ATP-syntazę z przestrzeni międzybłonowej (wyższe pH, niższe [H⁺]) do macierzy (niższe pH, wyższe [H⁺]) napędza obrót podjednostki γ i syntezę ATP z ADP + Pi.\nC. Dinitrofenol (DNP) to substancja rozsprzęgająca — przenosi H⁺ przez błonę wewnętrzną z pominięciem ATP-syntazy, co powoduje wydzielanie ciepła i brak syntezy ATP.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'ATP-syntaza: F₀ w błonie, F₁ w macierzy — kompleks V.', is_correct: true },
      { id: 'B', text: 'Gradient H⁺ (z przestrzeni międzybłonowej do macierzy) napędza syntezę ATP.', is_correct: true },
      { id: 'C', text: 'DNP to substancja rozsprzęgająca — przenosi H⁺ poza ATP-syntazą → ciepło, brak ATP.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: F₁F₀-ATP-syntaza: F₀ (rotorowy kanał protonowy, zakotwiczony w błonie), F₁ (katalityczna "głowica" w macierzy, subjednostki α₃β₃γδε). B — Prawda: chemiosmoza Mitchella (Nobel 1978): gradient elektrochemiczny H⁺ (ΔΨ + ΔpH = siła protonomotoryczna, PMF); H⁺ spływa z przestrzeni międzybłonowej (zakwaszona, wyższe [H⁺]) do macierzy → obrót podjednostki c pierścienia rotatora → konformacja β-subjednostek → synteza ATP. C — Prawda: DNP (dinitrofenol) jest lipofilowym słabym kwasem; przenosi H⁺ przez błonę wewnętrzną → "skrót" omijający ATP-syntazę → gradient H⁺ rozładowany jako ciepło. Stosowany historycznie jako środek odchudzający (śmiertelnie toksyczny). Fizjologiczny odpowiednik: termogenina (UCP1) w brunatnej tkance tłuszczowej → termogeneza.',
    difficulty: 3, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.lancuch,
    question_text: 'Porównując bilans energetyczny glikolizy z łańcuchem oddechowym, która z poniższych odpowiedzi NAJLEPIEJ opisuje efektywność całkowitego oddychania tlenowego glukozy?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Całkowite oddychanie tlenowe dostarcza 2 ATP (tylko z glikolizy) — łańcuch oddechowy nie produkuje ATP bezpośrednio', is_correct: false },
      { id: 'B', text: 'Oddychanie tlenowe glukozy daje ok. 30–32 ATP (współczesne szacunki), przy czym większość pochodzi z fosforylacji oksydacyjnej (łańcuch + ATP-syntaza), nie z substratowej', is_correct: true },
      { id: 'C', text: 'Fermentacja mlekowa produkuje 38 ATP, a oddychanie tlenowe tylko 2 ATP — fermentacja jest efektywniejsza', is_correct: false },
      { id: 'D', text: 'Bilans ATP jest identyczny niezależnie od warunków (tlenowe/beztlenowe): zawsze 36–38 ATP', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Nowsze szacunki bilansu ATP z jednej cząsteczki glukozy w oddychaniu tlenowym: Substratowa fosforylacja: 2 ATP (glikoliza) + 2 GTP (Krebsa) = 4 ATP. Fosforylacja oksydacyjna: 10 NADH × ~2,5 ATP/NADH = 25 ATP; 2 FADH₂ × ~1,5 ATP/FADH₂ = 3 ATP = 28 ATP. Łącznie: ~30–32 ATP (stare podręczniki: 36–38, oparte na P/O = 3 i 2). Aktualne wartości P/O (chemiosmotyczne stoichiometrie): NADH → 2,5 ATP, FADH₂ → 1,5 ATP. Zdecydowana większość ATP pochodzi z fosforylacji oksydacyjnej (~90%). Fermentacja: tylko 2 ATP/glukoza (glikoliza) → ~15–19× mniej efektywna.',
    difficulty: 2, verified: true,
  },

  // ─── Cykl komórkowy i mitoza (3) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.cykl,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cyklu komórkowego.\nA. Interfaza składa się z trzech faz: G₁ (wzrost komórki, synteza białek), S (replikacja DNA), G₂ (dalszy wzrost, przygotowanie do podziału).\nB. Punkt kontrolny G₁/S (punkt restrykcyjny) sprawdza, czy warunki są właściwe do replikacji DNA — jeśli DNA jest uszkodzone, kinaza CDK2/cyklina E jest hamowana i komórka nie wchodzi w fazę S.\nC. Faza M (mitotyczna) trwa zwykle dłużej niż interfaza — komórka spędza większość czasu na podziale.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Interfaza: G₁ (wzrost), S (replikacja DNA), G₂ (przygotowanie do mitozy).', is_correct: true },
      { id: 'B', text: 'Punkt kontrolny G₁/S: sprawdza warunki przed replikacją, CDK2/cyklina E.', is_correct: true },
      { id: 'C', text: 'Faza M trwa dłużej niż interfaza.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: interfaza zajmuje ~90% czasu cyklu komórkowego; G₁ (1. przerwa): wzrost i synteza białek, decyzja o podziale; S: replikacja DNA (każda chromatyda zduplikowana → para chromatyd siostrzanych); G₂ (2. przerwa): synteza białek wrzeciona, kontrola replikacji. B — Prawda: punkt restrykcyjny (R) u ssaków; białko Rb (retinoblastoma) hamuje E2F (czynnik transkrypcyjny) → w G₁ CDK4/6-cyklina D fosforyluje Rb → uwalnia E2F → ekspresja genów S-fazy; p53 i p21 zatrzymują cykl przy uszkodzeniu DNA. C — Fałsz: faza M (mitoza + cytokineza) jest najkrótsza — trwa ok. 1 godzinę; interfaza zajmuje ok. 23 godzin (w typowej 24-godzinnej komórce). Komórka dzieli się rzadko w porównaniu z czasem wzrostu.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.cykl,
    question_text: 'Wskaż prawidłowe kolejność faz mitozy oraz kluczowe zdarzenia charakterystyczne dla każdej z nich.',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Profaza (kondensacja chromatyny) → Metafaza (chromosomy na płytce metafazowej) → Anafaza (rozejście chromatyd siostrzanych) → Telofaza (dekondensacja, odtworzenie otoczek jądrowych)', is_correct: true },
      { id: 'B', text: 'Anafaza → Profaza → Metafaza → Telofaza', is_correct: false },
      { id: 'C', text: 'Metafaza (kondensacja) → Profaza (płytka) → Telofaza (rozejście) → Anafaza (dekondensacja)', is_correct: false },
      { id: 'D', text: 'Profaza → Anafaza → Metafaza → Telofaza', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fazy mitozy (PMAT): Profaza: kondensacja chromosomów (widoczne jako pary chromatyd siostrzanych), zanik jąderka, tworzenie wrzeciona podziałowego (tubulinowe), zanik otoczki jądrowej (prometafaza u zwierząt). Metafaza: chromosomy ustawiają się na płytce metafazowej (ekwatorze komórki); kinetochory (białkowe struktury na centromery) przyłączone do mikrotubul wrzeciona. Anafaza: rozejście chromatyd siostrzanych do przeciwnych biegunów komórki (po cięciu kohezyny przez separazę); komórka się wydłuża. Telofaza: chromosomy na biegunach → dekondensacja; odtworzenie otoczek jądrowych; pojawia się jąderko; cytokineza (podział cytoplazmy): pierścień aktomiozynowy u zwierząt, fragmoplast i płytka komórkowa u roślin.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.cykl,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących nowotworów i zaburzeń cyklu komórkowego.\nA. Onkogeny to zmutowane proonkogeny — geny kodujące białka regulujące wzrost; mutacja powoduje ich nadmierną lub stałą aktywację (np. zmutowany RAS w wielu nowotworach).\nB. Geny supresorowe nowotworów (np. TP53, RB1) normalnie hamują niekontrolowany podział; utrata ich funkcji (mutacja obu alleli, LOH) umożliwia rozwój nowotworu.\nC. Apoptoza (programowana śmierć komórki) jest procesem patologicznym — jej aktywacja zawsze prowadzi do choroby nowotworowej.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Onkogeny = zmutowane proonkogeny, nadaktywne białka wzrostu (np. RAS).', is_correct: true },
      { id: 'B', text: 'Geny supresorowe (p53, Rb): utrata funkcji obu alleli → nowotwór.', is_correct: true },
      { id: 'C', text: 'Apoptoza jest procesem patologicznym prowadzącym do nowotworu.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: proonkogeny to normalne geny regulacji wzrostu; mutacja/amplifikacja/translokacja → onkogen (dominujący, wystarczy jeden zmutowany allel, np. RAS-G12V stale aktywny). B — Prawda: model Knudsona "dwóch trafień" (two-hit hypothesis): obie kopie genu supresorowego muszą być inaktywowane (mutacja recesywna); p53 — "strażnik genomu" → apoptoza lub zatrzymanie cyklu przy uszkodzeniu DNA; brak p53 (~50% nowotworów ludzkich). C — Fałsz: apoptoza to FIZJOLOGICZNY, ochronny proces eliminujący uszkodzone, mutujące lub zbędne komórki; zapobiega nowotworom (komórki z uszkodzonym DNA są eliminowane). Brak apoptozy (np. przez nadekspresję Bcl-2, blokadę kaspaz) sprzyja przeżyciu komórek nowotworowych.',
    difficulty: 2, verified: true,
  },

  // ─── Teoria endosymbiozy (2) ───
  {
    topic_id: TOPIC_ID, subtopic_id: S.endosymbioza,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących teorii endosymbiozy (Lynn Margulis, 1967).\nA. Mitochondria i chloroplasty powstały z wolno żyjących prokariontów, które zostały pochłonięte przez prymitywną komórkę eukariotyczną i zamiast być strawione — weszły w symbiozę.\nB. Dowodem na endosymbiotyczne pochodzenie chloroplastów jest ich podobieństwo do sinic (Cyanobacteria): własne DNA (kolisty), rybosomy 70S, podwójna błona i podobna biochemia fotosyntezy.\nC. Według teorii endosymbiozy, jądro komórkowe eukariotów również powstało z endosymbionta — pochłoniętej bakterii archealnej.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mitochondria i chloroplasty: z pochłoniętych prokariontów → endosymbioza.', is_correct: true },
      { id: 'B', text: 'Chloroplasty podobne do sinic: kolisty DNA, rybosomy 70S, podwójna błona.', is_correct: true },
      { id: 'C', text: 'Jądro komórkowe też pochodzi z endosymbionta — pochłoniętej bakterii archealnej.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: teoria endosymbiozy (Mereschkowski 1905, Margulis 1967): protoeukariont (archealna komórka gospodarz) pochłonął α-proteobakteri ę → mitochondrium; później sinicę → chloroplast. Symbioza wzajemnie korzystna: gospodarz daje schronienie i substraty, symbiont dostarcza ATP/produkty fotosyntezy. B — Prawda: dowody na endosymbiozę: podobny do prokariontów własny DNA (mtDNA kolisty bez histonów), rybosomy 70S (czułe na antybiotyki bakteryjne), podwójna błona (zewnętrzna = dawna błona fagosomowa, wewnętrzna = oryginalna błona bakterii), podział przez pączkowanie (jak bakterie), podobna biochemia. C — Fałsz: JĄDRO KOMÓRKOWE nie pochodzi z endosymbionta (to główna różnica od organelli). Przyjmuje się, że jądro wyewoluowało przez uwewnętrznienie (infolding) błony komórkowej prokuariota-gospodarz lub przez fuzję genomów.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: TOPIC_ID, subtopic_id: S.endosymbioza,
    question_text: 'Które z poniższych obserwacji stanowią dowody na endosymbiotyczne pochodzenie mitochondriów?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Mitochondria mają własny kolisty DNA bez histonów, przypominający bakteryjny chromosom', is_correct: true },
      { id: 'B', text: 'Mitochondria rozmnażają się przez podział binarny, niezależnie od podziału komórki gospodarza', is_correct: true },
      { id: 'C', text: 'Rybosomy mitochondrialne (70S) są wrażliwe na antybiotyki bakteryjne (chloramfenikol, tetracyklina), a nie na cykloheximid (inhibitor rybosomów 80S)', is_correct: true },
      { id: 'D', text: 'Mitochondria są otoczone pojedynczą błoną — taką samą jak inne organelle eukariotyczne (ER, aparat Golgiego)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: mtDNA jest kolisty, bez histonów (jak u bakterii), bez intronów (u większości gatunków); mitochondrialny kod genetyczny nieznacznie różni się od standardowego (np. UGA koduje tryptofan). B — Prawda: mitochondria powstają wyłącznie z istniejących mitochondriów przez podział — komórka nie może "wytworzyć" nowego mitochondrium od zera; niezależny cykl podziału (nie musi synchronizować z mitozą). C — Prawda: chloramfenikol, tetracyklina, erytromycyna hamują rybosomy 70S (mitochondrialne i bakteryjne), ale nie cytoplazmatyczne 80S; cykloheximid odwrotnie → selektywność antybiotyków wynika z ewolucyjnego pokrewieństwa. D — Fałsz: mitochondria otoczone są PODWÓJNĄ błoną (zewnętrzną i wewnętrzną) — kluczowy dowód: zewnętrzna = pozostałość błony fagosomowej, wewnętrzna = oryginalna błona prokariontycznego symbionta.',
    difficulty: 2, verified: true,
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body))
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions',
      method: 'POST',
      headers: {
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve(res.statusCode)) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} questions for Komórka i biochemia...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
