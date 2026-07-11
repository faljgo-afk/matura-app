// Seed: open questions — Fizjologia człowieka — układ krążenia i oddechowy (10 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175'

const S = {
  serce: 'd42a351b-b29f-4d32-95ac-d51058726080',
  hemo:  '708467bb-f048-4c9a-9369-0190e91c0b0c',
  homeo: 'f79c7a2c-c03e-4ed5-89ca-b01dd0047399',
  krew:  '71faabd8-5948-411f-95a1-1917b2fea837',
  mech:  'b0ec2c4f-0199-4d4d-892a-be6b23195762',
  nacz:  'e55fdbd3-f99d-4832-8514-5c088fe8bb0e',
  regod: '83072c48-eb1e-460e-bcf1-4f7ae46a7936',
  trgaz: 'd367b143-3d4c-4c34-80f1-f023ce5d6a68',
  limf:  '3c0d3a02-b541-4606-8275-35bb047dbb5b',
  wymgaz:'1e82cd06-799e-4e80-a26e-dc8eeda58196',
}

const questions = [
  // ─── Budowa i praca serca ───
  {
    topic_id: TOPIC, subtopic_id: S.serce,
    question_type: 'open',
    question_text: 'Wyjaśnij, w jaki sposób układ bodźcoprzewodzący serca (węzeł SA, węzeł AV, pęczek Hisa, włókna Purkinjego) koordynuje skurcz mięśnia sercowego. Dlaczego uszkodzenie węzła AV powoduje blok serca?',
    options: [], correct_answer: [],
    explanation: 'SA → impuls rozchodzi się przez przedsionki → węzeł AV (opóźnienie 0,1 s) → pęczek Hisa → gałęzie → włókna Purkinjego → komory od podstawy ku wierzchołkowi. Uszkodzenie AV: impuls z SA nie dociera do komór → komory biją własnym rytmem zastępczym (~40/min) lub w ogóle nie reagują (blok III°).',
    max_points: 2,
    key_points: [
      'Układ bodźcoprzewodzący — kolejność i rola: węzeł SA (zatokowo-przedsionkowy, prawy przedsionek) = rozrusznik serca (pacemaker), generuje spontaniczne potencjały czynnościowe ~70/min → impuls rozchodzi się przez kardiomiocyty przedsionków → jednoczesny skurcz obu przedsionków; węzeł AV (przedsionkowo-komorowy, przegroda między przedsionkami a komorami): jedyna droga przewodzenia przez nieprzewodzącą chrząstkę włóknistą → opóźnienie ~0,1 s (umożliwia pełne napełnienie komór krwią z przedsionków) → pęczek Hisa → prawa i lewa gałąź → włókna Purkinjego (szybkie przewodzenie 4 m/s) → wzbudzenie komór od podstawy ku wierzchołkowi → efektywne wypchnięcie krwi ku tętnicy płucnej i aorcie',
      'Blok serca (blok AV): uszkodzenie węzła AV lub pęczka Hisa → impulsy z węzła SA nie docierają do komór; stopień III (całkowity blok): komory biją własnym rytmem zastępczym (rytm idiokomorowy, ~30–40/min, inicjowany przez ośrodek zastępczy w pęczku Hisa/włóknach Purkinjego) → rozkojarzenie rytmu: przedsionki 70/min, komory 40/min → niskie CO (rzut serca) → omdlenia, zastoinowa niewydolność serca; leczenie: implantacja stymulatora serca (pacemaker) zastępuje węzeł AV'
    ],
    model_answer: 'Układ bodźcoprzewodzący serca: (1) Węzeł SA (sinoatrialny): zlokalizowany w prawym przedsionku przy ujściu żyły głównej górnej; komórki rozrusznikowe (pacemaker cells) spontanicznie depolaryzują się ~70×/min (wynikające z powolnego napływu Na⁺/Ca²⁺ przez kanały If i ICaL); potencjał czynnościowy rozchodzi się przez oba przedsionki → skurcz przedsionków (wyczerpanie krwi do komór). (2) Węzeł AV: jedyna elektrycznie przewodząca droga między przedsionkami a komorami (pozostałe granice: pierścień włóknisty — tkanka niepobudliwa); przewodnictwo wolne (~0,05 m/s) → opóźnienie 0,08–0,12 s → czas na napełnienie komór; (3) Pęczek Hisa + gałęzie + włókna Purkinjego: szybkie przewodzenie (4 m/s) przez przegrodę i ściany komór od wierzchołka ku podstawie → skoordynowany, jednoczesny skurcz komór = efektywne wypchnięcie krwi. Blok AV (stopień III): żaden impuls z SA nie przechodzi przez AV → komory nie reagują na SA; ośrodek zastępczy (escape pacemaker) w pęczku Hisa lub włóknach Purkinjego przejmuje funkcję → rytm idiokomorowy 30–40/min (zbyt wolny → niedobór rzutu serca → omdlenia, zawroty głowy, Stokes-Adams); leczenie: wszczepienie sztucznego stymulatora (PM).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Naczynia krwionośne i krążenie ───
  {
    topic_id: TOPIC, subtopic_id: S.nacz,
    question_type: 'open',
    question_text: 'Porównaj budowę tętnic, żył i naczyń włosowatych (kapilar). Wyjaśnij, dlaczego każdy z tych typów naczyń jest przystosowany do pełnionej funkcji.',
    options: [], correct_answer: [],
    explanation: 'Tętnice: gruba ściana (błona mięśniowa + sprężysta) → wytrzymuje wysokie ciśnienie skurczowe (120 mmHg). Żyły: cienka ściana + zastawki → przepływ przy niskim ciśnieniu, zapobiegają cofaniu. Kapilary: pojedyncza warstwa śródbłonka → wymiana gazów, substancji odżywczych i produktów przemiany materii przez dyfuzję.',
    max_points: 2,
    key_points: [
      'Tętnice: gruba ściana trójwarstwowa — tunica intima (śródbłonek), tunica media (gruba, z dużą ilością mięśni gładkich i włókien sprężystych elastyny), tunica adventitia (kolagen); elastyczność tętnic dużych (aorta, tętnice płucne) buforuje pulsacyjny przepływ krwi → wytrzymują ciśnienie skurczowe 120 mmHg; tętnice mięśniowe regulują opór naczyniowy (kurczenie/rozkurczanie = regulacja przepływu do narządów). Żyły: cienka ściana (tunica media słabo rozwinięta, mało elastyny) → niskie ciśnienie (~10 mmHg); zastawki żylne (fałdy śródbłonka) zapobiegają cofaniu krwi przy powrocie żylnym pokonującym grawitację (kończyny dolne); żyły = pojemnościowe (70% objętości krwi)',
      'Kapilary (naczynia włosowate): ściana = JEDNA warstwa komórek śródbłonka na błonie podstawnej (brak tunica media i adventitia); średnica ~5–10 µm (erytrocyty muszą się odkształcać); cienka ściana = minimalna odległość dyfuzji dla O₂, CO₂, glukozy, aminokwasów, mocznika; typ ciągły (mózg, mięśnie), okienkowy (jelita, nerki, gruczoły) i zatokowy/nieciągły (wątroba, śledziona, szpik); wymieniają substancje z płynem tkankowym przez dyfuzję, osmozę i filtrację (prawo Starlinga: ciśnienie hydrostatyczne kapilary vs ciśnienie onkotyczne białek osocza)'
    ],
    model_answer: 'Budowa i przystosowanie naczyń krwionośnych: Tętnice: ściana trójwarstwowa; tunica intima (jednowarstwo­wy śródbłonek na błonie podstawnej + podśródbłonkowa tkanka łączna); tunica media (dominująca: liczne mięśnie gładkie + włókna elastyny u tętnic dużych / elastycznych, więcej mięśni gładkich u tętnic mięśniowych); tunica adventitia (kolagen, fibroblasty, vasa vasorum). Przystosowanie: tętnice elastyczne (aorta) rozciągają się przy skurczu → gromadzą energię → kurczą się w rozkurczu (efekt Windkessela → wygładzenie pulsu = ciągły przepływ); tętnice mięśniowe (arteriole) regulują opór naczyniowy (VMC — vasoconstriction / vasodilation) → ciśnienie i rozkład przepływu. Żyły: cienka tunica media (mało mięśni i elastyny) → podatne (reservoir krwi = 65–70% obj. krwi); zastawki bikomp. żylne (co 2–4 cm w kończynach) + "pompa mięśniowo-żylna" (skurcze mięśni łydek + zastawki) → transport krwi ku sercu; żyły wrotne (hepatica): bez zastawek (krew z jelit → wątroba). Kapilary: jednokomórkowa ściana śródbłonka (~0,2–0,5 µm grubości) = ekstremalnie krótka droga dyfuzji; sieć kapilarna = ogromna powierzchnia (ok. 500–700 m² u człowieka); wymiana: O₂/CO₂ przez dyfuzję prostą; glukoza/aminokwasy przez transportery; H₂O przez filtrację/reabsorpcję (równanie Starlinga: Jv = Lp[(Pc – Pi) – σ(πc – πi)]).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Krew — skład i funkcje ───
  {
    topic_id: TOPIC, subtopic_id: S.krew,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego erytrocyty (czerwone krwinki) człowieka są pozbawione jądra komórkowego i mitochondriów. Jakie korzyści płyną z tych cech dla funkcji transportu tlenu?',
    options: [], correct_answer: [],
    explanation: 'Brak jądra → więcej miejsca na hemoglobinę (HbA; każdy erytrocyt ~270 mln cząsteczek Hb). Brak mitochondriów → erytrocyt nie zużywa O₂ do własnego metabolizmu (fermentacja mleczanowa zamiast OXPHOS) → cały transportowany O₂ dostępny dla tkanek. Obie cechy ↑ wydajność transportu.',
    max_points: 2,
    key_points: [
      'Brak jądra komórkowego: usuwa dużą organellę zajmującą ok. 1/3 objętości komórki → zwolnione miejsce zajęte przez hemoglobinę; każdy dojrzały erytrocyt zawiera ok. 270 milionów cząsteczek hemoglobiny = maksymalna pojemność transportu O₂ na jednostkę objętości komórki; brak jądra = brak możliwości syntezy białek, replikacji DNA i podziałów → dojrzały erytrocyt jest "jednorazowy" (żyje ~120 dni, potem niszczony przez makrofagi śledziony)',
      'Brak mitochondriów: erytrocyt nie oddycha tlenowo (brak OXPHOS) → nie zużywa żadnego przenoszonego O₂ na własne potrzeby energetyczne; energię uzyskuje wyłącznie z glikolizy beztlenowej (→ mleczan) przy użyciu glukozy z osocza; efekt: 100% transportowanego O₂ dostarczone tkankom; bez mitochondriów erytrocyt jest też cieńszy i bardziej elastyczny (biconcave disc) → łatwiej odkształca się w wąskich kapilarach (średnica kapilary ~5 µm < erytrocyt ~7–8 µm)'
    ],
    model_answer: 'Erytrocyty dojrzałe (normocyty) człowieka: dwuwklęsłe dyski (~7,5 µm średnicy, ~2 µm grubości), bez jądra, bez mitochondriów, bez rybosomów. Brak jądra — korzyści: (1) Więcej miejsca dla hemoglobiny: jądro zajmuje ok. 30% objętości komórki w komórkach jądrzastych; usunięcie (enukleacja zachodzi w szpiku podczas różnicowania — retikulocyt → normocyt) → pojemność Hb: ~270 × 10⁶ cząsteczek Hb/erytrocyt × 4 grupy hemowe = 10⁹ atomów Fe/erytrocyt = ogromna pojemność O₂; (2) Kształt elastyczny: brak twardej otoczki jądrowej → erytrocyt może się znacznie odkształcać przechodząc przez kapilary <6 µm. Brak mitochondriów — korzyści: (1) Zero własnego zużycia O₂: erytrocyt całkowicie uzależniony od glikolizy (Embden-Meyerhof) → do ATP nie zużywa O₂ → 100% transportowanego O₂ dostępne dla tkanek; metabolizm: glukoza → 2 mleczan + 2 ATP (szlak HMP → NADPH dla ochrony przed utlenieniem Hb); (2) Mniejsza grubość komórki → ↑elastyczność. Wadą jest ograniczony czas życia (120 dni; brak naprawy białek → akumulacja uszkodzeń → hemoliza/fagocytoza w śledzionie).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Transport gazów we krwi ───
  {
    topic_id: TOPIC, subtopic_id: S.trgaz,
    question_type: 'open',
    question_text: 'Wyjaśnij efekt Bohra i jego znaczenie fizjologiczne. W jaki sposób zmiany pH i stężenia CO₂ w tkankach wpływają na powinowactwo hemoglobiny do tlenu i co to oznacza dla dostarczania O₂ do pracujących mięśni?',
    options: [], correct_answer: [],
    explanation: 'Efekt Bohra: ↓pH (↑CO₂, kwas węglowy) → hemoglobina zmniejsza powinowactwo do O₂ (krzywa dysocjacji przesuwa się w prawo) → łatwiej oddaje O₂. W mięśniach: ↑CO₂ + mleczan → ↓pH → Hb uwalnia więcej O₂ dokładnie tam, gdzie go potrzeba. W płucach: ↑O₂, ↓CO₂ → ↑pH → Hb ładuje O₂.',
    max_points: 2,
    key_points: [
      'Efekt Bohra (Bohr, Hasselbalch, Krogh 1904): wzrost [CO₂] i/lub spadek pH we krwi → allosteryczne zmniejszenie powinowactwa hemoglobiny do O₂ (przesunięcie krzywej dysocjacji HbO₂ w prawo i w dół) → przy tym samym ciśnieniu cząstkowym O₂ (pO₂) hemoglobina oddaje więcej O₂ tkankom; mechanizm: CO₂ wchodzi do erytrocytu → anhydraza węglanowa → H₂CO₃ → H⁺ + HCO₃⁻; H⁺ wiąże się z grupami aminowymi Hb → zmiana konformacji → ↓powinowactwo; jon Cl⁻ wymienia się z HCO₃⁻ (chloride shift) → HCO₃⁻ do osocza → transport CO₂',
      'Znaczenie w pracujących mięśniach: intensywny wysiłek → ↑produkcja CO₂ (oddychanie komórkowe) + mleczanu (fermentacja mleczanowa przy niedoborze O₂) → lokalne ↓pH kapilary mięśniowej → efekt Bohra → Hb uwalnia więcej O₂ (saturation spada np. z 97% do 40% zamiast 75%) → więcej O₂ dla mitochondriów = samoregulacja dopasowująca dostawę O₂ do bieżącego zapotrzebowania metabolicznego; w płucach: ↑O₂, ↓CO₂ → ↑pH → krzywa przesuwa się w lewo (efekt odwrotny) → Hb ładuje O₂ efektywnie (efekt Haldane\'a dla CO₂)'
    ],
    model_answer: 'Efekt Bohra (Christian Bohr, 1904): allosteryczna regulacja powinowactwa hemoglobiny (Hb) do O₂ przez H⁺ i CO₂. Mechanizm biochemiczny: CO₂ z tkanek → do erytrocytu (dyfuzja) → anhydraza węglanowa (CA): CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻; ↑[H⁺] (↓pH) → H⁺ protonują historydynowe reszty Hb (His β146 i His α122) → stabilizacja dezoksyHb (T-state = tense) → ↓powinowactwo do O₂ (P₅₀ rośnie: przesuwa się w prawo → więcej O₂ uwalniane przy danym pO₂). Efekt Bohra in vivo: Tkanki (mięśnie skurczone): pO₂ ↓, pCO₂ ↑, pH ↓ (H⁺ z CO₂ + mleczan) → krzywa dysocjacji HbO₂ przesuwa się w prawo → Hb oddaje O₂ bardziej kompletnie (SaO₂ spada z 97% → 20–40%) = dostarczenie dużej ilości O₂ do pracujących mięśni. Płuca (pęcherzyki): pO₂ ↑, CO₂ usuwanego → ↑pH → krzywa wraca w lewo → Hb ładuje O₂ efektywnie. Efekt Haldane\'a (odwrotny): O₂ "wypędza" CO₂ z Hb; w płucach CO₂ uwalniane jest łatwiej gdy Hb wiąże O₂ (DeOxy-Hb wiąże CO₂ jako karbaminian słabiej). Dodatkowy allosteryczny regulator: 2,3-BPG (bisfosfoglicerynian) — produkowany w erytrocytach → obniża powinowactwo Hb (Hb płodowa HbF ma niższe powinowactwo do 2,3-BPG → wyższe do O₂ → pobieranie O₂ od matki).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Homeostaza układu krążenia ───
  {
    topic_id: TOPIC, subtopic_id: S.homeo,
    question_type: 'open',
    question_text: 'Wyjaśnij mechanizm odruchu z baroreceptorów tętniczych (łuk aorty, zatoka szyjna) w regulacji ciśnienia tętniczego. Opisz, co się dzieje gdy ciśnienie gwałtownie wzrośnie — jakie efektory są aktywowane i jaki jest wynik.',
    options: [], correct_answer: [],
    explanation: 'Baroreceptory (mechanoreceptory w łuku aorty i zatoce szyjnej) → przy ↑ciśnienia: ↑częstość impulsów w n. błędnym i n. językowo-gardłowym → centrum sercowo-naczyniowe rdzenia przedłużonego → ↑aktywność przywspółczulna (↓HR) + ↓aktywność współczulna (↓HR, ↓SV, wazodylatacja) → ↓CO → ↓ciśnienie. Pętla ujemnego sprzężenia zwrotnego.',
    max_points: 2,
    key_points: [
      'Baroreceptory: mechanoreceptory (receptory rozciągania) w ścianie łuku aorty (nn. aortalne → n. błędny X) i zatoce szyjnej (nn. Heringa → n. językowo-gardłowy IX); przy wzroście ciśnienia tętniczego → rozciąganie ściany naczynia → ↑częstość wyładowań → sygnał dośrodkowy do centrum sercowo-naczyniowego (CVS) w rdzeniu przedłużonym (NTS — nucleus tractus solitarius)',
      'Odpowiedź odruchowa na ↑ciśnienia: CVS → (1) ↑aktywność przywspółczulna (n. błędny X → węzeł SA → ↓HR — bradykardia) + ↓aktywność współczulna (↓HR, ↓kurczliwość = ↓SV = ↓stroke volume) → ↓rzut serca (CO = HR × SV); (2) wazodylatacja naczyń obwodowych (↓napięcia mięśni gładkich arterioli → ↓opór obwodowy TPR); wynik: ↓CO + ↓TPR → ↓ciśnienie tętnicze (powrót do wartości prawidłowej ~120/80 mmHg); pętla ujemnego sprzężenia zwrotnego (negative feedback) — szybka regulacja (sekundy-minuty); działanie długoterminowe: nerki (układ RAA, ADH) → regulacja objętości krwi'
    ],
    model_answer: 'Odruch baroreceptorowy (odruch z presoreceptorów): Receptory: mechanoreceptory (receptory rozciągania/napięcia ściany) w łuku aorty (ciałka aortalne) i w zatoce szyjnej (sinus caroticus) — pęczek nerwy Heringa (IX) i gałęzie n. błędnego (X); próg pobudzenia: ciśnienie >60 mmHg (stały ton); ↑ciśnienia → ↑deformacja ściany → ↑częstość impulsów. Drogi dośrodkowe: n. błędny + n. językowo-gardłowy → jądro pasma samotnego (NTS, rdzeń przedłużony) → centrum sercowo-naczyniowe. Odpowiedź na nagły wzrost ciśnienia (np. zmiana pozycji, wysiłek): (1) ↑aktywność przywspółczulna (jądro grzbietowe n. X → węzeł SA): ↓HR (bradykardia), ↓szybkość przewodzenia AV; (2) ↓aktywność współczulna (jądro RVLM → serce + naczynia): ↓HR, ↓kurczliwość (inotropy–), ↓SV → ↓CO; + relaksacja mięśni gładkich arterioli (wazodylatacja) → ↓TPR. Wynik: ↓MAP (mean arterial pressure = CO × TPR) → przywrócenie ciśnienia do normy. Czas odpowiedzi: sekundy–minuty (krótkoterminowa regulacja); adaptacja baroreceptorów (reset): przy przewlekłym nadciśnieniu baroreceptory resetują swój próg → nie korygują nadciśnienia długotrwałego (stąd ważne leki obniżające ciśnienie).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Hemostaza i krzepnięcie krwi ───
  {
    topic_id: TOPIC, subtopic_id: S.hemo,
    question_type: 'open',
    question_text: 'Opisz kolejne etapy hemostazy (pierwotnej i wtórnej) po uszkodzeniu naczynia krwionośnego. Wyjaśnij rolę płytek krwi (trombocytów) i fibryny w tworzeniu czopu hemostatycznego.',
    options: [], correct_answer: [],
    explanation: 'Hemostaza pierwotna: skurcz naczynia → adhezja płytek do kolagenu (VWF) → aktywacja płytek → agregacja (czynnik Xa, tromboksan A₂) → czop płytkowy (niestabilny). Hemostaza wtórna (kaskada krzepnięcia): szlak zewnętrzny (TF+VIIa) + wewnętrzny (XIIa) → wspólny → trombina → fibrynogen → fibryna → sieć + czynnik XIII (poprzeczne wiązania) → stabilny skrzep.',
    max_points: 3,
    key_points: [
      'Hemostaza pierwotna: (1) Skurcz naczyniowy (wazospazm): uszkodzenie śródbłonka → odruchowy skurcz mięśni gładkich naczynia + endoteliny i tromboksan A₂ → ↓przepływu przez uszkodzone miejsce; (2) Adhezja płytek: kolagen podśródbłonkowy odsłonięty → wiąże czynnik von Willebranda (vWF, wydzielany przez śródbłonek) → vWF wiąże się z glikoproteiną Ib (GPIb) na powierzchni trombocytu → adhezja pierwszej warstwy płytek; (3) Aktywacja i agregacja płytek: aktywowane płytki zmieniają kształt (pseudopodia) + wydzielają granulki (ADP, tromboksan A₂, serotonina) → rekrutacja kolejnych płytek → GPIIb/IIIa wiąże fibrynogen → poprzeczne łączenie płytek → niestabilny czop płytkowy (wystarczający przy małych urazach)',
      'Hemostaza wtórna (kaskada krzepnięcia) i rola fibryny: szlak zewnętrzny: TF (czynnik tkankowy, tissue factor, odsłonięty po urazie) + VIIa → kompleks TF-VIIa → aktywacja X → Xa; szlak wewnętrzny: XII → XIIa → XI → IX → IXa + VIIIa → X → Xa; wspólny: Xa + Va (protrombinaza) + Ca²⁺ + fosfolipidy → protrombina (II) → trombina (IIa); trombina: (1) fibrynogen (I) → fibryna (Ia) — monomery → polimer sieciowy z udziałem czynnika XIIIa (poprzeczne wiązania kowalencyjne Gln-Lys między łańcuchami) → stabilna sieć fibrynowa; (2) trombina aktywuje V, VIII, XI, XIII — pętle wzmacniające; (3) hamowanie: antytrombina III, białko C/S, TFPI; stabilny skrzep = czop płytkowy + sieć fibrynowa'
    ],
    model_answer: 'Hemostaza — etapy: (I) Faza naczyniowa: uszkodzenie śródbłonka → odruchowy skurcz ściany (wazospazm) wywołany bólem + uwolnienie endoteliny-1 + tromboksanu A₂ (TXA₂) → zmniejszenie przepływu i promowania adhezji płytek. (II) Hemostaza pierwotna (czop płytkowy): (a) Adhezja: odsłonięty kolagen I i III podśródbłonkowy + czynnik von Willebranda (vWF) wiązanie GPIb/IX na trombocytach → "przyklejenie" płytek do ściany naczynia; (b) Aktywacja: zmiana kształtu (dysk → pseudopodia) + uwolnienie z ziarnistości: α-granulki (fibrynogen, vWF, P-selektyna, czynniki V, XI) + ziarnistości gęste (ADP, ATP, serotonina, Ca²⁺) → TXA₂ (z arachidonowego szlaku COX) → sygnał autoparakrynowy; (c) Agregacja: ADP → receptor P2Y12 → aktywacja GPIIb/IIIa (integryna αIIbβ3) → wiązanie fibrynogenu → mostki między trombocytami → niestabilny czop płytkowy. (III) Hemostaza wtórna (kaskada): szlak zewnętrzny (TF) + szlak wewnętrzny (kontaktowy) → wspólny szlak: protrombinaza → trombina (IIa) → fibrynogen → fibryna (monomery) → czynnik XIIIa → poprzeczne wiązania Gln-Lys (kowalencyjne) → stabilna sieć fibrynowa obejmująca czop → stabilny skrzep (trombus). (IV) Fibrynoliza (kontrolowane rozpuszczanie skrzepu): t-PA (tkankowy aktywator plazminogenu) → plazmina → trawienie fibryny → D-dimery (marker zakrzepicy).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Mechanika oddychania ───
  {
    topic_id: TOPIC, subtopic_id: S.mech,
    question_type: 'open',
    question_text: 'Wyjaśnij mechanizm wdechu i wydechu u człowieka. Jaką rolę odgrywają przepona i mięśnie międzyżebrowe? Dlaczego płuca nie zapadają się między oddechami?',
    options: [], correct_answer: [],
    explanation: 'Wdech: przepona się obniża + mięśnie zewnętrzne międzyżebrowe unoszą żebra → ↑obj. klatki piersiowej → ↓ciśnienia w jamie opłucnowej i pęcherzykach → powietrze wpływa. Wydech spoczynkowy: pasywny (mięśnie rozkurczają się + elastyczność płuc). Płuca: ciśnienie opłucnowe < ciśnienie atmosferyczne (podciśnienie −5 cmH₂O) → płuca "przyssane" do ściany klatki piersiowej.',
    max_points: 2,
    key_points: [
      'Mechanizm wdechu (aktywny): (1) Przepona (główny mięsień wdechowy): skurcz → obniżenie kopuły przepony o ~1,5–7 cm → ↑obj. klatki piersiowej w płaszczyźnie pionowej; (2) zewnętrzne mięśnie międzyżebrowe: skurcz → uniesienie i odchylenie żeber na zewnątrz (ruch "uchwyt od wiadra") → ↑obj. w wymiarze poprzecznym i przednio-tylnym; ↑ objętość → ↓ciśnienie pęcherzykowe poniżej atmosferycznego (Pₐₜₘ = 760 mmHg, wdech: ~758 mmHg) → gradient ciśnień → powietrze napływa do pęcherzyków (prawo Boyle\'a: V↑ → P↓)',
      'Wydech spoczynkowy (pasywny): mięśnie wdechowe rozkurczają się → elastyczność tkanki płucnej i klatki piersiowej przywraca rozmiary → ↑ciśnienie pęcherzykowe > Pₐₜₘ → powietrze wydychane; brak zapadania płuc: ujemne ciśnienie w jamie opłucnowej (−5 cmH₂O w spoczynku, −8 cmH₂O podczas wdechu) — płyn opłucnowy tworzy "uszczelnienie"; siły kohezji płynu opłucnowego "przyklejają" płuca do ściany klatki piersiowej; surfaktant (dipalmitoilofosfatydylocholina, DPPC) wydzielany przez pneumocyty II-rzędu → ↓napięcie powierzchniowe pęcherzyków → zapobiega zapadaniu małych pęcherzyków (prawo Laplace\'a: P = 2T/r)'
    ],
    model_answer: 'Mechanika oddychania — wdech i wydech: Wdech (inspiracja) — aktywny: (1) Przepona (diaphragma): jedyny mięsień oddzielający jamę piersiową od brzusznej; w spoczynku kopuła uniesiona ~35 cm nad poziomem mostka; skurcz → obniżenie o 1,5 cm (spokojny oddech) do 7 cm (głęboki oddech) → ↑obj. klatki w osi pionowej → ↓P_alveolar do ~758 mmHg → gradient ΔP = 2 mmHg → powietrze wpływa; (2) mm. intercostales externi: unoszą żebra i mostek ku przodowi i bokowi (ruch "wiaderkowy") → ↑wymiar poprzeczny i A-P. Wydech (ekspiracja) spoczynkowy — pasywny: rozkurcz przepony i mm. zewnętrznych → elastyczny odrzut płuc (płuca mają tendencję do kurczenia się = compliance odwrotność sztywności) + restytucja sprężysta klatki → ↑P_alveolar → powietrze wydychane; aktywny wydech (wysiłek, kaszel): mm. intercostales interni + mm. brzucha → dodatkowe ↑P_alveolar. Dlaczego płuca się nie zapadają: (1) Ujemne ciśnienie opłucnowe (P_pl ≈ −5 cmH₂O = −0,5 kPa): wytwarza siłę "wciągającą" płuca do ściany klatki; (2) Surfaktant pęcherzykowy: DPPC (dipalmitoilofosfatydylocholina) + białka SP-A/B/C/D → ↓napięcie powierzchniowe (γ) z 70 mN/m → <5 mN/m przy wydechu → Prawo Laplace\'a (P = 2γ/r): ↓γ zapobiega kolapsowi małych pęcherzyków; brak surfaktantu → RDS (respiratory distress syndrome) wcześniaków.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Wymiana gazowa ───
  {
    topic_id: TOPIC, subtopic_id: S.wymgaz,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega wymiana gazowa w pęcherzykach płucnych (hematoza). Jakie czynniki decydują o efektywności dyfuzji gazów przez barierę krew-powietrze? Odnieś się do prawa Ficka.',
    options: [], correct_answer: [],
    explanation: 'Hematoza: O₂ z powietrza pęcherzykowego dyfunduje przez barierę (śródbłonek kapilary + błona podstawna + pneumocyt I) do krwi; CO₂ — odwrotnie. Prawo Ficka: V̇ gas = A × D × (ΔP / d) — A=powierzchnia, D=dyfuzyjność gazu, ΔP=różnica ciśnień parcjalnych, d=grubość bariery. O₂: 13,3 kPa (pęcherzyk) vs 5,3 kPa (krew żylna) → gradient → dyfuzja.',
    max_points: 2,
    key_points: [
      'Hematoza (wymiana gazowa w płucach): O₂ dyfunduje z pęcherzyków (pO₂ ≈ 13,3 kPa = 100 mmHg) do krwi kapilarnej (pO₂ żylne ≈ 5,3 kPa = 40 mmHg) → gradient ΔpO₂ ≈ 8 kPa → O₂ wiąże się z hemoglobiną → krew tętnicza pO₂ ≈ 13,3 kPa; CO₂ dyfunduje z krwi (pCO₂ ≈ 6 kPa = 46 mmHg) do pęcherzyków (pCO₂ ≈ 5,3 kPa = 40 mmHg) → gradient ΔpCO₂ ≈ 0,7 kPa (mały, ale CO₂ ~20× bardziej dyfuzyjny niż O₂ przez wodę → ekwiwalentna efektywność)',
      'Prawo Ficka i czynniki dyfuzji: V̇ = A × D × ΔP / d, gdzie: A = łączna powierzchnia dyfuzyjna (pęcherzyki + kapilary: ~70–100 m² u człowieka w spoczynku, ↑2× przy wysiłku przez rekrutację naczyń); D = współczynnik dyfuzji gazu (zależy od MW i rozpuszczalności: CO₂ 20× bardziej dyfuzyjny przez wodę niż O₂, bo dużo lepiej rozpuszczalny); ΔP = różnica ciśnień parcjalnych (gradient); d = grubość bariery krew-powietrze (~0,2–0,5 µm: pneumocyt I + fused błona podstawna + śródbłonek kapilary); przy obrzęku płuc / śródmiąższowym zapaleniu: ↑d → ↓dyfuzji O₂ → hipoksemia'
    ],
    model_answer: 'Hematoza (wymiana gazowa płucna): Bariera krew-powietrze: pneumocyt I (squamous alveolar cell, ~0,1–0,2 µm) + zlana błona podstawna (pneumocyty + śródbłonek) + śródbłonek kapilary → łączna grubość: ~0,2–0,6 µm = ultracienka bariera dyfuzyjna. Gradienty ciśnień parcjalnych (wartości spoczynkowe): O₂: pęcherzyk: 13,3 kPa (100 mmHg); krew żylna wchodząca: 5,3 kPa (40 mmHg) → ΔpO₂ = 8 kPa → dyfuzja O₂ do krwi → HbO₂ → krew tętnicza pO₂ = 13,3 kPa; CO₂: krew żylna: 6,1 kPa (46 mmHg); pęcherzyk: 5,3 kPa (40 mmHg) → ΔpCO₂ = 0,8 kPa → dyfuzja CO₂ do pęcherzyka → krew tętnicza pCO₂ = 5,3 kPa. Prawo Ficka (Fick\'s law of diffusion): V̇gas = (A / d) × D × ΔP; A = powierzchnia dyfuzyjna: ~70 m² (spoczynek) → ~140 m² (wysiłek, rekrutacja kapilar + otwarcie dodatkowych pęcherzyków); d = grubość bariery: ↑ w obrzęku płuc / śródmiąższowym zwłóknieniu → hipoksemia; D = dyfuzyjność: D ∝ rozpuszczalność / √MW; CO₂: α = 0,59 mL/dL/mmHg vs O₂: α = 0,023 → CO₂ ok. 20× bardziej dyfuzyjny → wyrównanie pCO₂ przebiega szybciej niż pO₂ (O₂ wrażliwszy na zgrubienie bariery — dlatego obrzęk płuc objawia się najpierw hipoksemią); czas kontaktu krwi z pęcherzykiem: ~0,75 s (spoczynek) → wystarczający; ~0,25 s (wysiłek) → zazwyczaj wystarczający, ale przy chorobach może być za krótki.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Regulacja oddychania ───
  {
    topic_id: TOPIC, subtopic_id: S.regod,
    question_type: 'open',
    question_text: 'Wyjaśnij, w jaki sposób stężenie CO₂ (a nie O₂) jest głównym czynnikiem regulującym częstość i głębokość oddychania w warunkach spoczynkowych. Jaką rolę odgrywają chemoreceptory centralne i obwodowe?',
    options: [], correct_answer: [],
    explanation: 'Chemoreceptory centralne (rdzeń przedłużony): reagują na pH płynu mózgowo-rdzeniowego (PCR) — ↑CO₂ → CO₂ przenika BBB → kwas węglowy → ↓pH PMR → pobudzenie → ↑wentylacja. Obwodowe (ciałka szyjne i aortalne): reagują szybko na ↑CO₂, ↓O₂ i ↓pH krwi tętniczej. Spoczynkowy trigger: CO₂ (O₂ = główny tylko w skrajnej hipoksji).',
    max_points: 2,
    key_points: [
      'Chemoreceptory centralne (rdzeń przedłużony, okolica przykrytki i powierzchni brzusznej): nie reagują bezpośrednio na CO₂ we krwi — reagują na zmiany pH płynu mózgowo-rdzeniowego (PMR/CSF); CO₂ łatwo przenika barierę krew-mózg (BBB) → CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ (w PMR mało buforów białkowych!) → nawet mały wzrost pCO₂ krwi silnie ↓pH PMR → pobudzenie chemoreceptorów → sygnały do centrum oddechowego (DRG/VRG w rdzeniu przedłużonym) → ↑częstości i głębokości oddechów (hiperwentylacja) → ↓pCO₂ krwi → homeostaza; czuły i dokładny regulator przy fizjologicznych wahaniach CO₂',
      'Chemoreceptory obwodowe (ciałka szyjne — glomus caroticum, na rozwidleniu t. szyjnej wspólnej; ciałka aortalne — glomus aorticum): reagują na: (1) ↑pCO₂, (2) ↓pH, (3) ↓pO₂ krwi tętniczej (ale próg pobudzenia dla O₂ wysoki: reagują dopiero gdy pO₂ < 60 mmHg = SpO₂ < 90%); sygnalizacja przez n. IX (Heringa) i n. X → NTS → centrum oddechowe; odpowiedź szybsza niż centralna (sekundy); rola dominująca O₂: tylko przy ciężkiej hipoksji (>3000 m n.p.m., choroby płuc, HIF-2α); dlaczego nie O₂ w normoksji: pO₂ normalnie 100 mmHg (duży margines); CO₂/pH = czulszy barometr metabolizmu tlenowego'
    ],
    model_answer: 'Regulacja oddychania — dominująca rola CO₂: Centrum oddechowe: DRG (dorsal respiratory group) — rytm wdechowy; VRG (ventral respiratory group) — wdech i wydech; Pre-Bötzinger complex — pacemaker rytmu oddechowego; PRG (pontine respiratory group) — modulacja (Apneustic/Pneumotaxic centers). Chemoreceptory centralne: zlokalizowane na brzusznej powierzchni rdzenia przedłużonego (okolica VRC, Pre-Bötzingera); nie reagują na pO₂ ani pH krwi bezpośrednio — reagują na pH PMR; CO₂ (mała, niepolarna cząsteczka) swobodnie przenika BBB → w PMR (ubogie w białka buforowe!) H₂CO₃ → H⁺ → ↓pH PMR → pobudzenie → ↑wentylacja minutowa; czułość: wzrost paCO₂ o 1 mmHg → ↑wentylacja o ~2–3 L/min; główny regulator spoczynkowy. Chemoreceptory obwodowe: glomus caroticum (komórki glomus I = komórki typu I / chiefcells = chemosensory) + glomus aorticum; reagują na: ↑paCO₂, ↓pHa, ↓paO₂ (próg ~60 mmHg); sygnał via IX/X → NTS; odpowiedź natychmiastowa (sekundy) ale mniejszy udział w normie; kluczowe przy: hipoksji (np. pobyt na dużej wysokości), przewlekłych chorobach płuc (POChP — "hypoxic drive": u chorych z przewlekłą hiperkapnią chemoreceptory centralne są "przyzwyczajone" do ↑CO₂ → głównym sterownikiem staje się O₂ → nieostrożne podanie O₂ może zahamować oddychanie).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Układ limfatyczny i odporność ───
  {
    topic_id: TOPIC, subtopic_id: S.limf,
    question_type: 'open',
    question_text: 'Wyjaśnij rolę układu limfatycznego w utrzymaniu homeostazy płynów ustrojowych. Co się dzieje z płynem tkankowym i białkami, które wyciekają z naczyń włosowatych — dlaczego ich zwrot do krwi jest niezbędny?',
    options: [], correct_answer: [],
    explanation: 'Kapilary: filtracja hydrostatyczna > reabsorpcja onkotyczna → netto ~2–4 L/dobę płynu przechodzi do przestrzeni tkankowej. Naczynia limfatyczne zbierają ten płyn + białka (zbyt duże dla naczyń kapilarnych) → limfa → węzły chłonne → przewód piersiowy / prawy przewód limfatyczny → żyły szyjne → powrót do krwiobiegu. Brak zwrotu → obrzęk (limfedema).',
    max_points: 2,
    key_points: [
      'Filtracja kapilarna i powstawanie płynu tkankowego: na tętniczym końcu kapilar ciśnienie hydrostatyczne krwi (Pc ≈ 35 mmHg) > ciśnienie onkotyczne białek osocza (πc ≈ 25 mmHg) → netto filtracja płynu z kapilary do przestrzeni śródmiąższowej; na żylnym końcu: Pc ≈ 15 mmHg < πc ≈ 25 mmHg → netto reabsorpcja; bilans: ok. 20 L/dobę filtrowane, ~18 L/dobę reabsorbowane → netto ~2 L/dobę w przestrzeni tkankowej (+ duże białka osocza, które przeciekają przez kapilary = nie mogą wrócić bezpośrednio do krwi)',
      'Rola układu limfatycznego: kapilary limfatyczne (ślepo zakończone, o dużych szparach między komórkami śródbłonka) pochłaniają naddatek płynu tkankowego + białka → limfa (podobna do osocza, ale uboga w białka i komórki → stopniowo wzbogaca się); transport przez: naczynia limfatyczne → węzły chłonne (filtracja immunologiczna) → pnie limfatyczne → przewód piersiowy (ductus thoracicus, zbiera limfę z 3/4 ciała) + prawy przewód limfatyczny → żyła podobojczykowa/żyła główna górna → powrót do krwioobiegu; bez zwrotu: białka w przestrzeni tkankowej → ↑ciśnienie onkotyczne tkankowe → zatrzymanie wody → obrzęk (lymphedema); ~120 g białek/dobę wraca przez układ limfatyczny'
    ],
    model_answer: 'Układ limfatyczny — homeostaza płynów: Filtracja kapilarna (prawo Starlinga): Jv = Lp × [(Pc − Pi) − σ(πc − πi)]; na końcu tętniczym: Pc ≈ 35 mmHg, πc ≈ 25 mmHg, Pi ≈ 1 mmHg, πi ≈ 5 mmHg → Jv = (+) = filtracja; na końcu żylnym: Pc ≈ 15 mmHg → Jv = (−) = reabsorpcja; bilans: ~20 L filtrowane/dobę, ~18 L reabsorbowane → ~2 L netto do przestrzeni śródmiąższowej (+ białka osoczowe które stopniowo "przeciekają" — albuminy, transferyna — za duże by samorzutnie wrócić przez ścianę kapilary). Układ limfatyczny — zbieranie i zwrot: kapilary limfatyczne: ślepo zakończone, ściana z nakładających się komórek śródbłonka (zawory jednokierunkowe dla płynu i białek) + mikrozastawki; pochłaniają płyn tkankowy + białka; transport: skurcze ściany naczyń limfatycznych (mięśni gładkich) + ruchy mięśni szkieletowych + "pompa oddechowa" (ssanie klatki piersiowej podczas wdechu) → limfa przepływa przez węzły chłonne (filtracja: makrofagi, limfocyty T i B) → pnie → przewód piersiowy → żyła podobojczykowa lewa (75–200 mL/h). Niezbędność zwrotu: akumulacja białek w tkankach → ↑πi → ↑ciśnienie onkotyczne tkankowe → zaburzenie równania Starlinga → stały odpływ wody → obrzęk (lymphedema); blokada limfatyczna (filarioza, wyłuszczenie węzłów przy mastektomii) → nieodwracalna lymphedema kończyny.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions',
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
  console.log(`Seeding ${questions.length} open questions for Fizjologia człowieka — układ krążenia i oddechowy...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.max_points}pkt]`, q.question_text.slice(0, 68).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
