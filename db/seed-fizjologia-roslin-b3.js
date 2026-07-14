// Seed batch 3/7 — Fizjologia roślin
// Transpiracja i gospodarka wodna (4) + Transport wody i soli mineralnych (6)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'

const S = {
  trans:    '0587c00d-b47e-4264-8a86-cebd8544ae22',
  transport: 'f69fab83-0563-4d75-92a0-6e49afd505d0',
}

const questions = [

  // ── TRANSPIRACJA (4) ──────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.trans, question_type: 'single',
    question_text: 'Kwas abscysynowy (ABA) jest kluczowym hormonem regulującym zamykanie aparatów szparkowych w warunkach suszy. Który mechanizm jest POPRAWNY?',
    options: [
      { id: 'A', text: 'ABA wiąże się z receptorami PYR/PYL w komórkach szparkowych → inhibicja fosfatazy PP2C → aktywacja kinazy SnRK2 → fosforylacja kanałów anionowych SLAC1 (otwierają) i kanałów K⁺-out (KAT1 — zamknięte) → utrata K⁺, Cl⁻, malatu → utrata turgoru → zamknięcie', is_correct: true },
      { id: 'B', text: 'ABA bezpośrednio blokuje fotosyntezę w komórkach szparkowych przez wiązanie z centrum reakcji PSI; brak energii fotosyntetycznej → H⁺-ATPaza nieaktywna → szparka zamknięta', is_correct: false },
      { id: 'C', text: 'ABA jest syntetyzowany w aparatach szparkowych i wydzielany do apoplastu liścia; nie ma receptorów wewnątrzkomórkowych; działa wyłącznie zewnętrzniereceptorowo', is_correct: false },
      { id: 'D', text: 'ABA powoduje otwieranie szparek w nocy, gdy roślina nie traci wody przez transpirację szparkową; w dzień brak ABA → zamknięcie przez cytokininy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Sygnalizacja ABA w komórkach szparkowych: (1) susza → wzrost [ABA] w ksylemie i apoplaście; (2) receptor PYR/PYL/RCAR wiąże ABA → kompleks PYR-ABA-PP2C inhibituje fosfatazę PP2C; (3) SnRK2 (kinaza) niezahamowana → aktywna → fosforyluje: SLAC1 (kanały anionowe S-type, powolne) → otwierają się → wypływ Cl⁻, malat²⁻; GORK (K⁺-out) → otwiera → wypływ K⁺; (4) osmolit wychodzą → Ψπ wzrasta → woda wypływa → utrata turgoru → zamknięcie. Ca²⁺ i ROS (H₂O₂) jako wtórni posłańcy. Jednocześnie ABA hamuje H⁺-ATPazę → brak napędu dla K⁺-in.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.trans, question_type: 'single',
    question_text: 'Badacz zbadał transpirację dwóch gatunków roślin: kserofita (roślina pustynna) i mezofita (roślina łąkowa). Które zestawienie cech POPRAWNIE opisuje adaptacje kserofita do redukcji transpiracji?',
    options: [
      { id: 'A', text: 'Gruba kutikula, aparaty szparkowe zagłębione w kryptach lub pokryte włoskami (zmniejszenie przepływu powietrza → wzrost granicy warstwy przygranicznej), zredukowana powierzchnia liści lub liście przekształcone w ciernie, sukulentyzm (magazynowanie wody)', is_correct: true },
      { id: 'B', text: 'Cienka kutikula z dużą liczbą szparek na górnej stronie liścia, liście duże i płaskie, całkowity brak wosku epikutylarnego, szparka nigdy nie zamykają się przez cały dzień', is_correct: false },
      { id: 'C', text: 'Kserofity rosną wyłącznie w pobliżu wód gruntowych; zamiast redukcji transpiracji stosują strategię hiperkumulacji — absorbują i transpirują ogromne ilości wody pobieranej z głębokich warstw gleby', is_correct: false },
      { id: 'D', text: 'Kserofity całkowicie eliminują transpirację przez szczelne zamknięcie szparek przez 24h/dobę; pozbawione transpiracji, pobierają wodę wyłącznie przez liście z rosy nocnej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Adaptacje kserofitów do redukcji transpiracji: (1) morfologiczne: zredukowane liście (np. aster, wilczomlecz pustynny), liście-ciernie (kaktus), liście walcowate (minimalna S/V), rolowanie liścia (Festuca); (2) kutykularne: gruba warstwa kutyny + wosk epikutylarny → zmniejszona transpiracja kutykularna; (3) szparkowe: stomata zagłębione w kryptach/rowkach (np. sosna, oleander), pokryte włoskami → zwiększona warstwa graniczna → wolniejsza dyfuzja pary; liczba szparek często mniejsza; (4) metaboliczne: CAM; (5) sukulentyzm: komórki miękiszowe liści/łodyg wypełnione wodą (kaktusy, agawy, rozchodniki).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.trans, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują sposoby pobierania wody przez roślinę i jej ruch przez korzeń? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Woda z gleby wchodzi do korzenia drogą apoplastyczną (przez ściany komórkowe bez przekraczania błon) i symplastyczną (przez cytoplazmy i plazmodesmy); oba szlaki istnieją równocześnie', is_correct: true },
      { id: 'B', text: 'Pasmo Casparyego (belt of Caspary) w komórkach endodermy blokuje apoplastyczny transport wody i jonów; substancje muszą przejść przez błonę plazmatyczną komórek endodermy (szlak symplastyczny), co umożliwia selekcję jonów', is_correct: true },
      { id: 'C', text: 'Ciśnienie korzeniowe (root pressure) powstaje w wyniku aktywnego transportu jonów do ksylemu przez komórki obwodowe perycyklu; gradient osmotyczny napędza wchodzenie wody → nadciśnienie w ksylemie (gutacja)', is_correct: true },
      { id: 'D', text: 'Pobieranie wody przez korzeń jest procesem wyłącznie aktywnym (zależnym od ATP); w warunkach braku tlenu (anoksja) rośliny pobierają wodę szybciej, ponieważ fermentacja dostarcza ATP dla pomp wody', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) trzy drogi: apoplastyczna (ściany komórkowe, przestrzenie międzykomórkowe; ok. 90% wody ale zatrzymana przez pasmem Casparyego) + symplastyczna (cytoplazma + plazmodesmy) + transbłonowa (akwaporyny przez każdą błonę). (B) pasmo Casparyego = suberin (substancja tłuszczopodobna) impregnująca ściany promieniowe i poprzeczne endodermy → blokada apoplastyczna → kontrola selektywna. (C) gutacja: ciśnienie korzeniowe wyrzuca wodę przez hydatody (hydropoteny) na krawędziach liści; aktywny transport jonów przez komórki perycyklu → gradient osmotyczny → woda napływa → nadciśnienie. (D) fałsz: pobieranie wody = PASYWNY osmotyczny (gradient Ψw); nie wymaga ATP bezpośrednio; anoksja → zaburzenie transportu jonów (brak ATP dla pomp) → zmniejszone ciśnienie osmotyczne → zmniejszone pobieranie wody.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.trans, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących bilansu wodnego roślin:',
    options: [
      { id: 'A', text: 'Więdnięcie (plazmoliza zewnętrzna lub wiotczenie) następuje gdy utrata wody transpiracyjnej przekracza pobieranie wody przez korzeń; trwałe więdnięcie oznacza utratę turgoru, która nie ustępuje nawet przy dostarczeniu wody nocą.', is_correct: true },
      { id: 'B', text: 'Akwaporyny (kanały wodne, białka TIP i PIP) są obecne w błonach komórek roślinnych i umożliwiają szybki, selektywny transport wody przez osmozę; ich ekspresja regulowana jest przez ABA i warunki stresowe.', is_correct: true },
      { id: 'C', text: 'Rośliny halofilne (np. mangrowe) żyjące w silnie zasolonym środowisku mają wyższy potencjał osmotyczny (Ψπ bliższy zeru) niż rośliny słodkowodne, co ułatwia pobieranie wody z zasolonej gleby.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: więdnięcie przejściowe = turgescencja przywracana nocą (stomata zamknięte + nadal pobieranie z gleby); więdnięcie trwałe (permanent wilting point) = Ψgleba tak ujemny (≈-1,5 MPa), że korzeń nie może pobrać wody mimo braku transpiracji; dalsze obniżenie = śmierć rośliny. B — Prawda: TIP (tonoplast intrinsic proteins) = akwaporyny tonoplastowe; PIP (plasma membrane intrinsic proteins) = błony plazmitycznej; przepuszczalność × 10–100 bez akwaporyn; ABA indukuje PIP2.1 (otwieranie → lepsze pobieranie wody przy umiarkowanym stresie) lub zamykanie. C — Fałsz: halofilne mają NIŻSZY Ψπ (bardziej ujemny: akumulacja osmolitów — prolina, glicyna-betaina, sorbitol, jonowe NaCl) → Ψw komórki < Ψw zasolonej gleby → możliwy pobór wody; rośliny słodkowodne mają Ψπ ≈ -0,5 do -1 MPa.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TRANSPORT WODY I SOLI MINERALNYCH (6) ────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'single',
    question_text: 'Teoria kohezyjno-napięciowa (Dixon i Joly, 1894) wyjaśnia transport wody na duże odległości w ksylemie. Na czym polega ten mechanizm?',
    options: [
      { id: 'A', text: 'Transpiracja w liściach wytwarza ujemne ciśnienie (napięcie) w ksylemie; silne siły kohezji między cząsteczkami wody (wiązania wodorowe) utrzymują ciągłość kolumny wodnej od liści do korzenia; adhezja do ścian naczyń wzmacnia kolumnę', is_correct: true },
      { id: 'B', text: 'Woda jest aktywnie pompowana przez komórki ksylemu (żywe komórki pompujące) od korzenia do liści przy użyciu pomp Na⁺/K⁺-ATPazowych; ciśnienie osmotyczne w korzeniu wypycha wodę ku górze', is_correct: false },
      { id: 'C', text: 'Kapilarność naczyń ksylemu jest jedynym mechanizmem: małe średnice rurek włoskowatych powodują wznoszenie wody do 100 m wysokości bez pomocy transpiracji', is_correct: false },
      { id: 'D', text: 'Woda przepływa przez ksylem pod ciśnieniem korzennym (nadciśnienie); liście aktywnie wciągają wodę przy użyciu specjalnych komórek ssących (hydropoteny) z nadmierną ekspresją akwaporyn', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Teoria kohezyjno-napięciowa (Cohesion-Tension Theory): (1) TRANSPIRACJA: parowanie wody z apoplastyliścia → obniżenie Ψw w symplaście mezofilii → woda z ksylemu → napięcie (negatywne ciśnienie = tensja) w naczyniach; (2) KOHEZJA: H₂O–H₂O wiązania wodorowe utrzymują kolumnę wodną jako ciągłość (woda pod napięciem nawet -1 MPa); (3) ADHEZJA: H₂O-ściana celulozowa ksenylemu; (4) KAPILARNOŚĆ: pomocnicza, max ~1 m (za mała); (5) CIŚNIENIE KORZENNIE: pomocnicze (zwłaszcza wiosną i nocą), max ~0,2 MPa; główny silnik: transpiracja.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'single',
    question_text: 'Transport asymilatów (cukrów) w łyku (floem) odbywa się inaczej niż transport wody w ksylemie. Który mechanizm jest POPRAWNY?',
    options: [
      { id: 'A', text: 'Hipoteza przepływu ciśnieniowego Müncha: aktywne załadowanie sacharozy do rurek sitowych w liściu (Source) → wzrost ciśnienia osmotycznego → napływ wody → wysokie ciśnienie turgorowe; wyładowanie w organie spichrzowym (Sink) → ciśnienie spada → gradient ciśnienia napędza przepływ od Source do Sink', is_correct: true },
      { id: 'B', text: 'Asymilaty przepływają przez floem siłą grawitacji: zawsze z góry (liście) w dół (korzenie); rośliny nie mogą transportować cukrów ku górze, np. do owoców na drzewie', is_correct: false },
      { id: 'C', text: 'Transport w floemie zachodzi wyłącznie przez dyfuzję — sacharoza dyfunduje z liści do korzeni wzdłuż gradientu stężenia bez energii metabolicznej; jest procesem całkowicie pasywnym', is_correct: false },
      { id: 'D', text: 'Rurki sitowe floemliczne nie są żywymi komórkami — są bez cytoplazmy i jądra, podobnie jak naczynia ksylemu; transport asymilatów odbywa się przez apoplast bez udziału komórek towarzyszących', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Model Müncha (pressure-flow hypothesis, 1930): (1) ZAŁADOWANIE (loading) w Source (liść): symporter H⁺/Suc (sacharoza) w błonie rurek sitowych aktywnie ładuje Suc; H⁺-ATPaza napędza gradient; Ψπ spada → woda napływa → ciśnienie P↑; (2) PRZEPŁYW masowy: gradient P (liść > organ spichrzowy) napędza przepływ soku floemowego; (3) WYŁADOWANIE (unloading) w Sink (korzeń, owoc, nasienie, pęd wzrostowy): Suc usuwana → Ψπ rośnie → woda wraca do ksylemu → P↓. Kierunek: Source → Sink (może być w górę lub w dół zależnie od Source/Sink). Rurki sitowe = żywe (brak jądra, mało organelli), asystowane przez komórki towarzyszące (companion cells) przez plazmodesmy.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transportu w ksylemie i floemie:',
    options: [
      { id: 'A', text: 'Ksylem transportuje wodę i sole mineralne wyłącznie od korzenia do liści (kierunek akrypetalny); floem transportuje asymilaty od miejsc produkcji (Source) do miejsc zapotrzebowania (Sink), mogąc transportować zarówno ku górze jak i ku dołowi.', is_correct: true },
      { id: 'B', text: 'Naczynia ksylemu (vessels) i cewki (tracheidy) to martwe komórki bez cytoplazmy w dojrzałej postaci; ich ściany są zdrewniałe (lignina) i mogą wytrzymać duże ujemne ciśnienia podczas transportu wody pod napięciem.', is_correct: true },
      { id: 'C', text: 'Kaweacje (kawitacje) w naczyniach ksylemu są szkodliwe dla rośliny i nieodwracalne — raz zablokowane naczynie nigdy nie jest naprawione; rośliny drzewiaste co roku muszą wytwarzać nowy pierścień drewna wyłącznie z powodu kawitacji.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: ksylem = jednostronny transport akrypetalny (korzeń → pąd); wyjątek: redistribucja jonów w ksylemie między łodygą a liśćmi. Floem = bidirectional: sacharoza do korzeni (lato), skrobia z korzeni do liści (wiosna u drzew); owoce na drzewie = Sink powyżej liści → przepływ ku górze. B — Prawda: dojrzałe naczynia i cewki = martwe (apoptoza: degradacja proto plastu) → puste lumen + zdrewniałe ściany; lignina = polimer fenylopropenoidowy → wytrzymałość na napięcie (-2 do -10 MPa). C — Fałsz: kawitacje (pęcherzyki powietrza w naczyniach) są CZĘŚCIOWO odwracalne: (1) nocą ciśnienie korzeniowe może wypchnąć pęcherzyki; (2) kambium wytwarza nowe naczynia każdego roku (drewno wtórne) — ale nie wyłącznie z powodu kawitacji; (3) refilling obserwowany u wielu gatunków, mechanizm z udziałem cukrów i akwaporyn.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują pobieranie i transport soli mineralnych przez korzenie? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Jony mineralne (NO₃⁻, K⁺, Ca²⁺, H₂PO₄⁻) są pobierane z gleby przez aktywny transport (pompy jonowe, symportery napędzane H⁺-ATPazą) — stężenie jonów w glebie jest zazwyczaj niższe niż w komórkach korzenia', is_correct: true },
      { id: 'B', text: 'Mykoryza (symbioza korzeni z grzybami) znacząco zwiększa pobieranie fosforanów i wody przez rozszerzoną powierzchnię absorpcyjną strzępek grzybowych; rośliny dostarczają grzybom asymilatów (cukrów)', is_correct: true },
      { id: 'C', text: 'Transport jonów w ksylemie od korzenia do liści jest aktywny energetycznie na całej drodze; komórki miękiszu drzewnego (xylem parenchyma) regularnie ładują i rozładowują jony do/z naczyń', is_correct: true },
      { id: 'D', text: 'Wszystkie makroelementy (N, P, K, Ca, Mg, S) i mikroelementy (Fe, Mn, Zn, Cu) są pobierane w identycznych proporcjach i z jednakową szybkością; roślina nie reguluje selektywnie pobierania składników mineralnych', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) aktywny transport: stężenie K⁺ w glebie ≈ 0,1 mM, w komórkach ≈ 100 mM → transport pod górę gradientu; H⁺-ATPaza tworzy gradient H⁺ → napędza symportery (H⁺/NO₃⁻, H⁺/H₂PO₄⁻) i antyportery. (B) arbuskularna mykoryza (AMF): Glomus spp.; strzępki zewnętrzne × 100 powierzchni korzenia → pobieranie P (szczególnie nierozpuszczalny HPO₄²⁻); ektomykoryza u dębów/sosen. (C) redistribucja: miękisz łykowo-drzewny reguluje skład jonowy ksylemu; np. usuwa Na⁺ z transpiracyjnego strumienia przed dotarciem do liścia. (D) fałsz: rośliny mają selektywne transportery (np. KT/HAK dla K⁺ przy niskim stężeniu; NRT dla NO₃⁻; PT dla Pi); składniki pobierane w miarę potrzeb; nadmiar niektórych jonów (Na⁺) aktywnie wykluczany.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'single',
    question_text: 'W doświadczeniu zmierzono potencjał wodny liścia rośliny o godzinie 14:00 (silne nasłonecznienie) i o 3:00 w nocy (brak transpiracji). Który wynik jest ZGODNY z oczekiwaniami?',
    options: [
      { id: 'A', text: 'O 14:00: Ψw liścia = -1,8 MPa (silna transpiracja, deficyt wodny); o 3:00: Ψw = -0,6 MPa (brak transpiracji, regeneracja turgoru przez ciągły pobór wody z korzeni)', is_correct: true },
      { id: 'B', text: 'O 14:00: Ψw liścia = +0,5 MPa (transpiracja napędza wchodzenie wody → nadmiar turgoru); o 3:00: Ψw = -2,5 MPa (nocna aktywność pompuje jony z liścia, obniżając Ψw)', is_correct: false },
      { id: 'C', text: 'O 14:00 i 3:00 Ψw liścia jest identyczny i równy Ψw gleby, ponieważ przepływ wody SPAC jest zawsze w równowadze termodynamicznej', is_correct: false },
      { id: 'D', text: 'O 14:00: Ψw = -0,3 MPa (niska transpiracja w południe gdy aparaty szparkowe zamknięte przez ciepło); o 3:00: Ψw = -1,5 MPa (szparka otwarte nocą jak u C3)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Dobowy rytm Ψw liścia: (1) w dzień: transpiracja intensywna → wypływ wody > pobieranie → Ψw liścia spada (bardziej ujemny, np. -2 MPa u słonecznika); (2) o świcie/południe: częściowe zamknięcie szparek (ABA, deficyt wodny) → chwilowe wyrównanie; (3) nocą: stomata zamknięte (w C3) → transpiracja ≈ 0; ciągły pobór wody z gleby → Ψw liścia wraca do wartości bliskich Ψw gleby (np. -0,5 MPa przy dobrze nawodnionej glebie). Zjawisko to mierzone przez psychrometry lub komory ciśnieniowe (pressure chamber Scholander). Nocna regeneracja turgoru = istotna dla przywracania funkcji liścia następnego dnia.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.transport, question_type: 'multiple',
    question_text: 'Które stwierdzenia POPRAWNIE opisują budowę i funkcję ksylemu? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Pierwotny ksylem u roślin zielnych składa się z protoksylemu (różnicuje się jako pierwszy, cewki z pierścieniowymi zgrubieniami, zdolne do rozciągania przy wzroście pędu) i metaksylemu (różnicuje się później, naczynia ze zgrubieniami siateczkowanymi lub jamkami)', is_correct: true },
      { id: 'B', text: 'Drewno wtórne (ksylem wtórny) wytwarzane jest przez kambium waskularny u roślin dwuliściennych i okrytonasiennych; składa się z naczyń (vessels), cewek (tracheids), miękiszu drzewnego i włókien drzewnych (libriform fibers)', is_correct: true },
      { id: 'C', text: 'Jamki (pits) w ścianach naczyń ksylemu umożliwiają przepływ wody między sąsiednimi elementami; jamki lejkowate (bordered pits) z torusem (u nagonasiennych) mogą zablokować przepływ przy kawitacji, izolując uszkodzone naczynie', is_correct: true },
      { id: 'D', text: 'Ksylem transportuje wyłącznie wodę H₂O; sole mineralne i aminokwasy są transportowane wyłącznie przez floem — między ksylemem a floemem nie ma żadnej wymiany substancji', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) protoksylem: cewki z pierścieniowymi lub spiralnymi zgrubieniami ściany → mogą się rozciągać gdy pęd rośnie w długość; metaksylem: zgrubienia siateczkowate, skalarne lub z jamkami → sztywne, nie rozciągają się. (B) ksylem wtórny (drewno): produkowany przez inicjały kambium wewnątrz (ksylem) i na zewnątrz (floem); u dwuliściennych słoje roczne (wiosenne drewno = większe naczynia, letnie = mniejsze, gęstsze). (C) jamki lejkowate (conifers): torus (zagrubiona środkowa błona) może być dociskany do aperture → uszczelnienie przy kawitacji w sąsiednim naczyniu. (D) fałsz: ksylem transportuje wodę + jony + niektóre aminokwasy i hormony (cytokininy syntetyzowane w korzeniu transportowane ksylemem do pędów); wymiana ksylem-floem przez miękisz graniczny (transfer cells).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
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
  console.log(`Seeding batch 3 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
