// Seed: mock_questions — Układ powłokowy i termoregulacja (20 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  bud:   'b6b2553e-adaf-4f0f-9b53-dd7fa8787caa',
  funk:  'b8be0347-d12d-4297-ab44-c8ea5d35a96c',
  przy:  '3abdf886-b3eb-4d19-bf67-d76172f02d00',
  termo: '76130dd3-3234-40f8-83f0-1f514f76a56d',
  witd:  'f8307955-ebcb-457d-855d-e5fac773c64e',
}

const questions = [
  // ─── Budowa skóry ───
  {
    subtopic: 'Układ powłokowy i termoregulacja — Budowa skóry',
    subtopic_id: S.bud,
    question_type: 'single',
    question_text: 'Skóra człowieka składa się z trzech warstw. Które zestawienie POPRAWNIE opisuje naskórek (epidermis), skórę właściwą (dermis) i tkankę podskórną (hypodermis)?',
    options: [
      { id: 'A', text: 'Naskórek: nabłonek wielowarstwowy płaski rogowaciejący bez naczyń, komórki — keratynocyty; skóra właściwa: tkanka łączna z naczyniami, nerwami, gruczołami i mieszkami włosowymi; tkanka podskórna: tkanka tłuszczowa + włókna kolagenowe — izolacja termiczna i amortyzacja', is_correct: true },
      { id: 'B', text: 'Skóra właściwa: nabłonek wielowarstwowy bez naczyń; naskórek: tkanka łączna bogata w naczynia i gruczoły; tkanka podskórna: tkanka chrzęstna', is_correct: false },
      { id: 'C', text: 'Naskórek jest bogato unaczyniony i zawiera nerwy czuciowe; skóra właściwa jest beznaczyniowa i odżywiana przez dyfuzję; tkanka podskórna to warstwa mięśniowa', is_correct: false },
      { id: 'D', text: 'Wszystkie trzy warstwy skóry są zbudowane z tkanki nabłonkowej; tkanka łączna i tłuszczowa nie wchodzą w skład skóry człowieka', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Budowa skóry (integumentum commune, ok. 1,5–2 m², 4–5 kg = największy narząd): (1) Naskórek (epidermis): nabłonek wielowarstwowy płaski rogowaciejący (BRAK naczyń — odżywiany dyfuzją z dermy); komórki: keratynocyty (90%, wytwarzają keratynę), melanocyty (8–10%, produkują melaninę), komórki Langerhansa (dendrytyczne komórki układu odpornościowego), komórki Merkela (mechanoreceptory). Warstwy od dołu: str. bazalna (germinativum) → str. kolczysta (spinosum) → str. ziarnista (granulosum, keratohyalina) → str. jasna (lucidum, tylko gruba skóra: dłonie/stopy) → str. rogowa (corneum, martwe komórki = korneocyty, 15–30 warstw). (2) Skóra właściwa (dermis): tkanka łączna zbita; kolagen I i III (65%), elastyna; naczynia krwionośne i limfatyczne, nerwy czuciowe, gruczoły, mieszki włosowe; podwarstwy: brodawkowa (papillaris — linie papilarne = linie papilarne palców) i siateczkowa (reticularis). (3) Tkanka podskórna (hypodermis, tela subcutanea): tkanka tłuszczowa (lipocyty) + luźna tk. łączna; izolacja termiczna, amortyzacja, magazyn energii (triglicerydy); przytwierdza skórę do powięzi i kości.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Budowa skóry',
    subtopic_id: S.bud,
    question_type: 'single',
    question_text: 'Melanina jest barwnikiem skóry produkowanym przez melanocyty. Które stwierdzenie POPRAWNIE opisuje jej syntezę i funkcję?',
    options: [
      { id: 'A', text: 'Melanocyty produkują melaninę z tyrozyny (przez tyrozynazę) w melanosomach i przekazują ją do sąsiednich keratynocytów przez dendryty; melanina pochłania promieniowanie UV i chroni DNA keratynocytów przed mutagennym działaniem UV', is_correct: true },
      { id: 'B', text: 'Melaninę produkują keratynocyty samodzielnie — melanocyty są jedynie komórkami strukturalnymi bez aktywności wydzielniczej; melanina pochłania promieniowanie podczerwone (IR)', is_correct: false },
      { id: 'C', text: 'Intensywność zabarwienia skóry zależy od LICZBY melanocytów — osoby jasne mają mniej melanocytów niż osoby ciemnoskóre; melanocyty u wszystkich produkują identyczną ilość melaniny', is_correct: false },
      { id: 'D', text: 'Melanina jest syntetyzowana z tryptofanu przez tyrozynazę; keratynocyty wydzielają melaninę do przestrzeni zewnątrzkomórkowej, skąd jest pobierana przez melanocyty', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Melanogeneza: melanocyty (z grzebienia nerwowego) → dendryty sięgają do keratynocytów; melanosomy (organella wyspecjalizowane) → synteza melaniny: L-tyrozyna → DOPA (tyrozynaza, Cu²⁺-zależna) → DOPAchinon → eumelanina (brązowo-czarna) lub feomelanina (żółto-czerwona, zawiera siarkę). Transfer: melanosomy translokowane wzdłuż dendrytów → eksocytoza lub bezpośredni transfer → keratynocyty fagocytują melanosomy → melanina tworzy parasol nad jądrem (ochrona DNA). Opalenizna: UV-B → ↑tyrozynaza + ↑transfer melanosomów (szybka reakcja, minuty) + ↑proliferacja melanocytów (tygodnie). Liczba melanocytów u człowieka jest podobna niezależnie od rasy (~1000–2000/mm²); różnica = aktywność melanocytów + rozmiar melanosomów + proporcja eu:feomelaniny. Bielactwo (vitiligo): autoimmunologiczna destrukcja melanocytów → białe plamy, ↑ryzyko raka skóry w tych miejscach. Czerniaki (melanoma): nowotwór melanocytów — bardzo agresywny.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Budowa skóry',
    subtopic_id: S.bud,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących keratynocytów i rogowacenia naskórka:\nA. Keratynocyty dzielą się wyłącznie w warstwie podstawnej (bazalnej) naskórka — nowo powstałe komórki wędrują ku powierzchni, stopniowo rogowaciejąc (gromadząc keratynę) i tracąc jądro; cały cykl odnowy naskórka trwa około 28–30 dni.\nB. Warstwa rogowa (stratum corneum) zbudowana jest z martwych, bezjądrowych keratynocytów (korneocytów) pełnych twardej keratyny — tworzą one barierę wodoszczelną dzięki ceramidom i innym lipidom między komórkami.\nC. Keratynizacja (rogowacenie) to proces patologiczny zachodzący wyłącznie w chorobach skóry — prawidłowy naskórek pozostaje przez całe życie w postaci żywych, jądrzastych keratynocytów bez keratyny.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: strefa proliferacyjna = str. bazalna (keratynocyty pnia z integrynami β1 = przyczepiają się do błony podstawnej przez hemidesmosomy); podział asymetryczny → 1 komórka pozostaje w bazalnej, 1 wędruje ku górze → zróżnicowanie (↓integryny, ↑keratyny K1/K10, ↑filagryna, ↑lorikryna) → str. kolczysta (desmosomy — kolce) → str. ziarnista (granule keratohyaliny z profilagryną, ciałka blaszkowate = lamellar bodies z ceramidami) → egzocytoza lipidów → str. rogowa (apoptoza-like, kaspaza-14, utrata organelli) → złuszczanie (desmosom-cleavage przez kalikreiny). Czas: 14 dni bazalna→ziarnista + 14 dni ziarnista→złuszczenie = 28 dni łącznie. Łuszczyca: proliferacja zbyt szybka (7 dni) → nieprawidłowe rogowacenie → srebrzyste łuski. B — PRAWDA: korneocyty (28×0,2 µm, flat "bricks") otoczone keratyną i gęstą CE (cornified envelope = białka: inwolukryna, lorikryna usieciowane przez transglutaminazę); między nimi "zaprawa" lipidowa: ceramidy (50%) + kw. tłuszczowe + cholesterol → bariera woda-out i woda-in (TEWL = transepidermal water loss). C — FAŁSZ: keratynizacja = normalny, fizjologiczny proces różnicowania keratynocytów; bez rogowacenia skóra nie byłaby wodoszczelna ani mechanicznie odporna.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Budowa skóry',
    subtopic_id: S.bud,
    question_type: 'single',
    question_text: 'Receptory czuciowe skóry wykrywają różne rodzaje bodźców. Które zestawienie POPRAWNIE przyporządkowuje receptory do bodźców, które wykrywają?',
    options: [
      { id: 'A', text: 'Ciałka Meissnera (brodawki skórne, szybko adaptujące): delikatny dotyk, tekstura. Ciałka Paciniego (skóra właściwa/podskórna): wibracja wysokiej częstotliwości. Krążki Merkela (str. bazalna): ucisk stały, kształt. Zakończenia wolne (C, A-δ): ból i temperatura', is_correct: true },
      { id: 'B', text: 'Ciałka Paciniego: ból ostry; ciałka Meissnera: wibracja; krążki Merkela: temperatura; wolne zakończenia: dotyk delikatny', is_correct: false },
      { id: 'C', text: 'Wszystkie receptory skórne reagują na wszystkie bodźce — podział na typy receptorów nie ma znaczenia funkcjonalnego; kodowanie modalności zależy wyłącznie od ośrodkowego układu nerwowego', is_correct: false },
      { id: 'D', text: 'Skóra posiada wyłącznie receptory bólowe (nocyceptory) — pozostałe odczucia (dotyk, temperatura, wibracja) są generowane przez mózg bez udziału receptorów obwodowych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mechanoreceptory skóry (teoria specyficzności modalności): (1) Ciałka Meissnera (corpuscula tactus): brodawki skórne, skóra owłosiona i gładka; RA-I (rapidly adapting type I); czułe na ruch, delikatny dotyk, tekstury; opuszki palców gęstość ~140/cm² → wysoka zdolność rozdzielcza (próg dwupunktowy 2–3 mm). (2) Ciałka Paciniego (corpuscula lamellosa): skóra właściwa/tk. podskórna + stawy, tkanka wnętrzności; RA-II (PC); wibracja 200–300 Hz, naprężenie; receptory pól dalekich. (3) Krążki Merkela (disci tactus): str. bazalna; SA-I (slowly adapting); stały ucisk, krawędzie, kształt; pola receptywne małe. (4) Ciałka Ruffiniego: SA-II; rozciąganie skóry, propriocepcja. (5) Wolne zakończenia nerwowe: włókna C (niemiel., <2 m/s) i Aδ (cienko miel., 5–30 m/s) → nocyceptory (ból mechaniczny, termiczny, chemiczny), termoreceptory (TRPV1 > 43°C = ból/gorąco; TRPM8 < 25°C = zimno), świąd (pruritoreceptory, histamina, IL-31). (6) Receptory mieszków włosowych (hair follicle afferents): RA; ruch włosa.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Funkcje i ochrona skóry ───
  {
    subtopic: 'Układ powłokowy i termoregulacja — Funkcje i ochrona skóry',
    subtopic_id: S.funk,
    question_type: 'single',
    question_text: 'Skóra pełni wiele funkcji ochronnych. Które zestawienie POPRAWNIE wymienia te funkcje?',
    options: [
      { id: 'A', text: 'Bariera mechaniczna (keratyna + ceramidy); ochrona przed UV (melanina); ochrona immunologiczna (komórki Langerhansa, IgA wydzielnicze); regulacja temperatury (naczynia, pot); synteza witaminy D₃; receptor narządu czucia (dotyk, ból, temperatura); bariera przed patogenami (kwaśne pH 4,5–5,5, lizozym, beta-defensyny)', is_correct: true },
      { id: 'B', text: 'Skóra pełni wyłącznie funkcję mechaniczną (ochrona przed urazami) — wszystkie pozostałe funkcje (termoregulacja, odporność, synteza witamin) są realizowane przez inne narządy wewnętrzne', is_correct: false },
      { id: 'C', text: 'Główną funkcją skóry jest hematopoeza — skóra produkuje erytrocyty, leukocyty i płytki krwi; ochrona przed UV nie jest funkcją skóry, ponieważ melanina nie absorbuje promieniowania UV', is_correct: false },
      { id: 'D', text: 'Skóra jest całkowicie przepuszczalna dla wody — jej rola to głównie oddychanie skórne (wymiana gazowa O₂/CO₂ przez naskórek zastępująca częściowo funkcję płuc)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Funkcje skóry (wielonarządowa): (1) Bariera fizykochemiczna: str. rogowa + lipidy (ceramidy/kw.tłuszczowe/cholesterol) → ↓TEWL (transepidermalna utrata wody, norma <10 g/m²/h); pH powierzchni 4,5–5,5 (kwasny płaszcz = hamuje patogeny, np. S.aureus nie rośnie przy niskim pH). (2) Ochrona immunologiczna: komórki Langerhansa (DC naskórka → prezentacja Ag do T-limfocytów); makrofagi dermy; IgA wydzielnicze; beta-defensyny (antimicrobial peptides: hBD-1,2,3 z keratynocytów). (3) Termoregulacja: naczynia krwionośne (wazodylatacja/wazokonstrykcja) + gruczoły potowe ekrynowe. (4) Synteza wit. D₃: UV-B → 7-dehydrocholesterol → cholekalcyferol. (5) Czucie: mechanoreceptory, nocyceptory, termoreceptory. (6) Wydzielanie: gruczoły łojowe (sebum: ceramidy, skwalen, kwasy tłuszczowe = natłuszczenie + działanie antybakteryjne), gruczoły potowe. (7) Wygląd i komunikacja (pigmentacja, ekspresja emocji przez zaczerwienienie/bladość). Bariera: zdrowa skóra traci 300–500 mL wody/dobę (TEWL); przy oparzeniach III° → wielolitrowe straty.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Funkcje i ochrona skóry',
    subtopic_id: S.funk,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących oparzeń i uszkodzeń skóry:\nA. Oparzenie I stopnia (rumień, np. słoneczne) dotyczy wyłącznie naskórka — goi się bez blizny przez naskórkową regenerację z komórek bazalnych.\nB. Oparzenie III stopnia (pełnej grubości) niszczy naskórek i skórę właściwą — brak bólu w środku oparzenia, ponieważ zostały zniszczone receptory bólowe; gojenie wymaga przeszczepu skóry.\nC. Reguła dziewiątek (rule of nines) służy do oceny pH skóry po oparzeniu — każde pole ciała ma pH 9, stąd nazwa.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: oparzenia I° (surface burns): naskórek; rumień, ból, bez pęcherzy; komórki bazalne nienaruszone → regeneracja bez blizny (7–10 dni). Oparzenie słoneczne = klasyczny przykład. B — PRAWDA: oparzenia III° (full-thickness): naskórek + cała skóra właściwa + często hypodermis; skóra biała/brązowa/czarna, twarda (eschar); BRAK BÓLU (receptor bólowe zniszczone) → niebezpieczne dla pacjenta (nie zgłasza bólu = późna diagnoza). Gojenie: brak progenitorów → wymagają autologicznego przeszczepu skóry (split-thickness graft) lub substytutów skórnych. Duże oparzenia → utrata białek, infekcja, hypothermia, sepsa → śmierć. Reguła Baxtona: nawodnienie 4 mL × kg × %TBSA w ciągu 24 h. C — FAŁSZ: reguła dziewiątek (Wallace Rule of Nines, 1951) = szybka ocena POWIERZCHNI TBSA (total body surface area) oparzenia: głowa+szyja = 9%, każde ramię = 9%, tułów przedni = 18% (9%+9%), tułów tylny = 18%, każda noga = 18%, krocze = 1%. Suma = 100%. Stosowana do obliczenia intensywności nawodnienia, nie pH.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Funkcje i ochrona skóry',
    subtopic_id: S.funk,
    question_type: 'single',
    question_text: 'Rak skóry jest najczęstszym nowotworem człowieka. Które zestawienie POPRAWNIE opisuje trzy główne typy raka skóry i ich cechy?',
    options: [
      { id: 'A', text: 'Rak podstawnokomórkowy (BCC): z keratynocytów bazalnych, najczęstszy, miejscowo złośliwy (rzadko przerzuty); rak kolczystokomórkowy (SCC): z keratynocytów str. kolczystej, może dawać przerzuty; czerniak (melanoma): z melanocytów, bardzo agresywny, wczesne przerzuty drogą limfatyczną i krwi', is_correct: true },
      { id: 'B', text: 'Czerniak jest najczęstszym rakiem skóry i nigdy nie daje przerzutów; BCC pochodzi z melanocytów; SCC z komórek Langerhansa', is_correct: false },
      { id: 'C', text: 'Wszystkie raki skóry mają identyczne rokowanie i leczenie; czynnik UV nie ma znaczenia w ich powstawaniu', is_correct: false },
      { id: 'D', text: 'Rak podstawnokomórkowy (BCC) jest najbardziej agresywnym nowotworem ze wczesnym rozsiewem do mózgu; czerniak jest zawsze łagodny i nie wymaga leczenia', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Nowotwory skóry: (1) BCC (Basal Cell Carcinoma): najczęstszy (80% raków skóry); z komórek bazalnych naskórka; głównie okolice głowy/szyi; perłowy guzek z teleangiektazjami; lokalna inwazja ale rzadko przerzuty (<0,1%); leczenie: wycięcie, Mohs micrographic surgery, krioterapia, imikwimod; prawie nigdy śmiertelny. (2) SCC (Squamous Cell Carcinoma): z keratynocytów str. kolczystej; czynniki ryzyka: UV, HPV, blizny, immunosupresja; może dawać przerzuty (5–10%) do węzłów chłonnych; rogowaciejący guz z centralną martwicą; leczenie: wycięcie, radioterapia. (3) Melanoma: z melanocytów; tylko 4–5% raków skóry, ale 75% zgonów z powodu raka skóry; UV (szczególnie oparzenia słoneczne w dzieciństwie), znamiona dysplastyczne, jasna karnacja; szybkie przerzuty (krew, limfa) → płuca, wątroba, mózg; reguła ABCDE (Asymmetry, Border, Color, Diameter>6mm, Evolving); leczenie: wycięcie z marginesem + immunoterapia (anty-PD-1: pembrolizumab) + inhibitory BRAF/MEK (przy mutacji BRAF V600E ~50%).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Przydatki skóry ───
  {
    subtopic: 'Układ powłokowy i termoregulacja — Przydatki skóry',
    subtopic_id: S.przy,
    question_type: 'single',
    question_text: 'Włosy, paznokcie i gruczoły skóry są przydatkami skóry. Które zestawienie POPRAWNIE opisuje budowę i funkcje wybranych przydatków?',
    options: [
      { id: 'A', text: 'Gruczoły łojowe: wydzielają sebum (trójglicerydy, skwalen, woski, kwasy tłuszczowe) → natłuszczenie skóry i włosów, działanie antybakteryjne (kwas linolowy); gruczoły potowe ekrynowe: wydzielają pot (H₂O, NaCl, mocznik) → termoregulacja (parowanie); włosy: ochrona termiczna głowy, filtracja (nos), czucie (receptory mieszków)', is_correct: true },
      { id: 'B', text: 'Gruczoły potowe apokrynowe są rozmieszczone równomiernie po całym ciele i wydzielają bezwonny pot do regulacji temperatury; gruczoły łojowe wydzielają mocznik', is_correct: false },
      { id: 'C', text: 'Paznokcie (płytki paznokciowe) są zbudowane z keratyny miękkiej i mają zdolność szybkiej regeneracji przez podział komórek w biegunach paznokcia (distal edge); macierz paznokcia leży przy końcu palca pod wolnym brzegiem', is_correct: false },
      { id: 'D', text: 'Gruczoły potowe ekrynowe są związane z mieszkami włosowymi i otwierają się do kanału mieszka; wydzielają łój (sebum) — stąd nazwa "ekrynowe" pochodzi od greckiego ek = tłuszcz', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Przydatki skóry (appendages): (1) Gruczoły łojowe (sebaceae): holokrynowe (komórka sebocyt = produkt wydzielniczy; cała komórka ulega lizie); połączone z mieszkiem włosowym lub otwierające się bezpośrednio (wargi, powieki, gruczoł Meiboma); sebum: triglicerydy → przez bakterie (C.acnes, Cutibacterium) → wolne kw. tłuszczowe (działanie antybakt.) + kw. linolowy (bariera). Trądzik (acne vulgaris): ↑sebum (androgeny) + nieprawidłowe rogowacenie mieszka + C. acnes. (2) Gruczoły potowe ekrynowe: 2–4 mln na ciele, gęstość max na dłoniach/stopach/czole; kanaliki proste do powierzchni naskórka; pot izotoniczny (0,1–0,4% NaCl) → termoregulacja; unerwienie cholinergiczne współczulne (wyjątek!). (3) Gruczoły potowe apokrynowe: pacha, krocze, otoczka sutkowa; łączą się z mieszkiem włosowym; zapach ciała (bakterie rozkładają bezwonny pot apokrynowy → lotne kw.tłuszczowe + merkaptany). (4) Włosy: keratyna twarda (obfita w Cys = mostki S-S); fazy: anagen (wzrost, 2–7 lat), katagen (zanik, 2 tyg.), telogen (spoczynek, 3 mies.) → łysienie androgenetyczne (DHT + receptor AR w mieszku). (5) Paznokcie: płytka z keratyny twardej; macierz (matrix unguis) pod obrąbkiem = strefa wzrostu; wzrost ~3 mm/mies.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Przydatki skóry',
    subtopic_id: S.przy,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących gruczołów potowych:\nA. Gruczoły potowe ekrynowe wydzielają pot, który jest izotonicznym roztworem NaCl; podczas intensywnego pocenia (np. przy wysiłku fizycznym w upale) człowiek może tracić do 2–3 litrów potu na godzinę — utrata elektrolitów (Na⁺, K⁺, Cl⁻) może prowadzić do skurczów mięśni.\nB. Wydzielanie potu przez gruczoły ekrynowe jest kontrolowane przez włókna współczulne, które wyjątkowo używają acetylocholiny (nie noradrenaliny) jako neuroprzekaźnika — stąd atropina (bloker muskarynowy) hamuje pocenie.\nC. Gruczoły potowe apokrynowe (pacha, krocze) wydzielają pot, który sam w sobie ma intensywny zapach ciała — bakterie skóry nie mają wpływu na zapach potu apokrynowego.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: gruczoły ekrynowe wydzielają pot pierwotny (izoosmotyczny z osoczem, ~308 mOsm) w kłębuszku; w kanaliku: reabsorpcja Na⁺ i Cl⁻ (przez CFTR i ENaC) → pot wtórny hipotoniczny (ok. 0,1–0,4% NaCl, 50–100 mOsm). Przy intensywnym poceniu kanał jest nasycony i pot wychodzi bardziej izoosmotyczny. Objętość: spoczynkowe 0,5 L/d; intensywny wysiłek w upale → 1–3 L/h. Utrata Na⁺ → hiponatremia + skurcze. Cystyczne włóknienie (mukowiscydoza, CFTR mutacja): sól nie wraca → słony pot (test potowy: [Cl⁻]>60 mmol/L = diagnostyczny). B — PRAWDA: WYJĄTEK w autonomicznym UN: gruczoły potowe ekrynowe → nerwy współczulne → ACh (nie NA!) → receptory M3 (muskarynowe) na gruczole. Atropina/skopolamina blokują M3 → anhidroza (brak pocenia → hipertermia). Leczenie nadmiernego pocenia (hyperhidrosis): toksyna botulinowa (blokuje uwalnianie ACh), lokalne antyperspiranty (Al³⁺ → zamknięcie kanalika), selektywne antymuskarynowe. C — FAŁSZ: pot apokrynowy świeżo wydzielony jest bezwonny (białka, lipidy, steroidy); zapach ciała powstaje DOPIERO po rozkładzie przez bakterie (Corynebacterium, Staphylococcus epidermidis): kwasy tłuszczowe (kwas masłowy, propionowy) + siarczki + aminy → odór. Dezodoranty: zabijają bakterie; antyperspiranty: zmniejszają wydzielanie potu.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Termoregulacja ───
  {
    subtopic: 'Układ powłokowy i termoregulacja — Termoregulacja — mechanizmy i regulacja',
    subtopic_id: S.termo,
    question_type: 'single',
    question_text: 'Człowiek jest organizmem stałocieplnym (homoiotermicznym). Jakie mechanizmy pozwalają utrzymać temperaturę ciała ~37°C niezależnie od temperatury otoczenia?',
    options: [
      { id: 'A', text: 'Produkcja ciepła (termogeneza): metabolizm + drżenie mięśniowe (shivering) + termogeneza bezdrżeniowa (brązowa tkanka tłuszczowa, BAT); oddawanie ciepła: promieniowanie, konwekcja, przewodzenie, parowanie (pocenie); ośrodek: podwzgórze (punkt nastawczy 37°C) + receptory ciepła i zimna skóry i rdzenia', is_correct: true },
      { id: 'B', text: 'Temperatura ciała człowieka jest całkowicie zależna od temperatury otoczenia — człowiek jest organizmem zmiennocieplnym, który nagrzewa się i chłodzi razem z otoczeniem', is_correct: false },
      { id: 'C', text: 'Jedynym mechanizmem termoregulacji jest pocenie — bez gruczołów potowych człowiek nie może regulować temperatury; chłodzenie przez promieniowanie i konwekcję nie ma znaczenia fizjologicznego', is_correct: false },
      { id: 'D', text: 'Termoregulacja jest kontrolowana wyłącznie przez korę mózgową — podwzgórze nie uczestniczy w regulacji temperatury ciała; temperatura ciała wzrasta po każdym wysiłku fizycznym i nie normalizuje się', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Termoregulacja człowieka (homoiotermia, normotermia = 36,5–37,5°C): Centrum: podwzgórze (obszar preoptyczny, POAH = preoptic anterior hypothalamus) = termostat; point nastawczy (set-point) ~ 37°C; integruje: (a) termoreceptory centralne (POAH: neurony ciepłoczułe = wzrost f-AP przy hipertermii + neurony zimnoczułe) + (b) termoreceptory obwodowe skóry (TRPV1–TRPV4 = ciepło; TRPM8 = zimno). Mechanizmy oddawania ciepła (gdy T↑): wazodylatacja naczyń skóry → ↑konwekcja + ↑promieniowanie; pocenie → parowanie (1 mL = 0,6 kcal); hiperpnea. Mechanizmy produkcji/zatrzymywania ciepła (gdy T↓): wazokonstrykcja skóry; drżenie mięśniowe (shivering thermogenesis: nieskoordynowane skurcze mięśni szkieletowych → 3–5× ↑produkcja ciepła); termogeneza bezdrżeniowa: BAT (brązowa tk. tłuszczowa) = UCP1 (thermogenin) → rozprzęga fosforylację oksydacyjną → ciepło (u niemowląt ważna; u dorosłych reaktywuje się przy przewlekłym zimnie); piloerekcja (erector pili → "gęsia skórka" — u człowieka szczątkowa). Gorączka: pirogeny (LPS, IL-1β, IL-6, TNF) → cyklokoxygenaza 2 (COX-2) → prostaglandyna E₂ (PGE₂) → ↑point nastawczy w POAH → drżenie + wazokonstrykcja przy nowej wyższej temp. Leki przeciwgorączkowe (paracetamol, ibuprofen) blokują COX-2 → ↓PGE₂ → normalizacja set-pointu.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Termoregulacja — mechanizmy i regulacja',
    subtopic_id: S.termo,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zaburzeń termoregulacji:\nA. Udar cieplny (heat stroke) jest stanem zagrożenia życia, w którym temperatura ciała przekracza 40°C i dochodzi do dysfunkcji ośrodkowego układu nerwowego — przyczyną jest wyczerpanie mechanizmów termoregulacyjnych, a nie gorączka (infekcja).\nB. Hipotermia (temperatura ciała poniżej 35°C) prowadzi kolejno do: drżenia mięśniowego → zaniku drżenia i senności → zaburzeń rytmu serca → zatrzymania krążenia i śmierci; organizm może przeżyć krótkotrwałą hipotermię głęboką (28–25°C) — stosuje się ją w kardiochirurgii.\nC. Gorączka (febris) jest zawsze szkodliwa i powinna być natychmiast leczona lekami przeciwgorączkowymi — nie pełni żadnej funkcji ochronnej w odpowiedzi immunologicznej.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: udar cieplny (heat stroke): T > 40°C + dysfunkcja OUN (dezorientacja, drgawki, śpiączka) + BRAK pocenia (klasyczny) lub z poceniem (wysiłkowy); patogeneza: wyczerpanie pojemności termoregulacyjnej (nie infekcja!); powikłania: DIC, rabdomioliza, AKI, MODS; leczenie: szybkie chłodzenie (zimna woda, lód na pachwinę/pachy/szyję), nawodnienie i.v. B — PRAWDA: hipotermia: >35°C norma; 32–35°C łagodna (drżenie, tachykardia, dezorientacja); 28–32°C umiarkowana (zanik drżenia → najgorszy scenariusz, bo traci mechanizm ochronny; senność, bradykardia); <28°C ciężka (trzepotanie komór VF, śpiączka); <20°C śmierć. WYJĄTEK: kontrolowana hipotermia (28–32°C) w kardiochirurgii (bypass + zatrzymanie serca) i neuroprotekcji (po asfiksji noworodka, po NZK) → ↓metabolizm OUN → mniejsze uszkodzenie niedokrwienne. C — FAŁSZ: gorączka ma funkcje ochronne: ↑aktywność neutrofili i makrofagów; ↓żelazo wolne (↓wzrost bakterii); ↑synteza białek ostrej fazy; ↑interferon; wiele wirusów/bakterii słabo rośnie >38°C. Leczenie gorączki wskazane gdy T>39–39,5°C (komfort), >41°C (risking drgawki, denaturacja białek), u dzieci ryzyko drgawek gorączkowych. Umiar: nie gasić gorączki <38,5°C u immunokompetentnych pacjentów.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Termoregulacja — mechanizmy i regulacja',
    subtopic_id: S.termo,
    question_type: 'single',
    question_text: 'Fizyczne metody oddawania ciepła przez ciało człowieka obejmują cztery mechanizmy. Które zestawienie POPRAWNIE opisuje ich udział w spoczynku i podczas wysiłku w wysokiej temperaturze?',
    options: [
      { id: 'A', text: 'Promieniowanie (radiation, ~60% w spoczynku), konwekcja (~15%), przewodzenie (~3%), parowanie/pocenie (~22%); w wysokiej temperaturze otoczenia (>35°C, T_ot > T_skóry): promieniowanie i konwekcja stają się DODATKOWYM ŹRÓDŁEM NAGRZEWANIA → parowanie (pocenie) staje się JEDYNYM efektywnym mechanizmem chłodzenia', is_correct: true },
      { id: 'B', text: 'Parowanie jest jedynym mechanizmem w spoczynku (100%); promieniowanie i konwekcja są aktywne tylko przy wysiłku fizycznym; przewodzenie nie istnieje jako mechanizm termiczny', is_correct: false },
      { id: 'C', text: 'Przewodzenie (conduction) odpowiada za 80% utraty ciepła zarówno w spoczynku jak i przy wysiłku; pozostałe mechanizmy (promieniowanie, konwekcja, parowanie) mają marginalne znaczenie', is_correct: false },
      { id: 'D', text: 'W temperaturze otoczenia >35°C parowanie jest niemożliwe, bo powietrze gorące nie może przyjąć pary wodnej; jedynym mechanizmem chłodzenia jest promieniowanie w zakresie IR', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fizyczne mechanizmy wymiany ciepła: (1) Promieniowanie (radiation): emisja fal elektromagnetycznych IR przez każde ciało >0 K; człowiek emituje IR proporcjonalnie do T⁴ (prawo Stefana-Boltzmanna); netto utrata ciepła gdy T_skóry > T_otoczenia; ~60% utraty ciepła w normalnych warunkach; niezależne od ruchu powietrza. (2) Konwekcja (convection): przenoszenie ciepła przez ruch powietrza lub cieczy; wymuszona (wiatr, wentylator) >> swobodna; człowiek jest otoczony cienką warstwą ciepłego powietrza (boundary layer) → wiatr ją usuwa → ↑straty. (3) Przewodzenie (conduction): kontakt fizyczny z chłodniejszą powierzchnią (podłoże, woda, sprzęt); woda przewodzi ciepło 25× lepiej niż powietrze → hipotermia w zimnej wodzie. (4) Parowanie (evaporation): każdy gram wody = 0,58 kcal przy odparowaniu; oddech (~25% w spoczynku) + pocenie. KLUCZOWE: gdy T_otoczenia > 35°C ciało nie może oddawać ciepła przez promieniowanie/konwekcję (gradient odwrócony — absorbuje ciepło z otoczenia) → parowanie = JEDYNY mechanizm chłodzenia. Wysoka wilgotność (>75% RH) → ogranicza parowanie → ryzyko przegrzania. Dlatego upał + wysoka wilgotność = najniebezpieczniejsza kombinacja (wskaźnik WBGT).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Termoregulacja — mechanizmy i regulacja',
    subtopic_id: S.termo,
    question_type: 'single',
    question_text: 'Gorączka (febris) jest regulowanym wzrostem temperatury ciała. Wskaż prawidłowy mechanizm molekularny powstawania gorączki.',
    options: [
      { id: 'A', text: 'Pirogeny egzogenne (LPS, toksyny) i endogenne (IL-1β, IL-6, TNF-α) → COX-2 w komórkach śródbłonka naczyń POAH → prostaglandyna E₂ (PGE₂) → receptor EP3 w podwzgórzu → ↑cAMP → przesunięcie punktu nastawczego → wazokonstrykcja skóry i drżenie mięśniowe aż do osiągnięcia nowej temperatury', is_correct: true },
      { id: 'B', text: 'Bakterie bezpośrednio wnikają do podwzgórza i fizycznie przestawiają termostat; pirogeny są jedynie produktami ubocznymi infekcji bez roli w gorączce', is_correct: false },
      { id: 'C', text: 'Gorączka powstaje przez ↑produkcję ATP w mitochondriach leukocytów — nadmiar energii metabolicznej przenika do krwi i podnosi temperaturę bez udziału podwzgórza', is_correct: false },
      { id: 'D', text: 'PGE₂ blokuje podwzgórze i uniemożliwia mu reagowanie na temperaturę — gorączka to stan, gdy termostat przestaje działać i temperatura rośnie niekontrolowanie; paracetamol przywraca działanie termostatu przez naprawę COX-2', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Gorączka — kaskada molekularna: (1) Pirogeny egzogenne: LPS (lipopolisacharyd Gram(-)), kwas lipotejchojowy (Gram(+)), wirusy, grzyby → aktywacja monocytów/makrofagów przez TLR (Toll-like receptors). (2) Pirogeny endogenne: IL-1β (interleukina-1β), IL-6, TNF-α, IFN-γ → mediatory stanu zapalnego; docierają do POAH przez krew (mała cząsteczka) lub przez narządy obszirkumwentrikularne (bez BBB: organ naczyniowy blaszki końcowej OVLT, narząd podsklepieniowy SFO). (3) COX-2 indukowana (prostaglandynowa syntaza): w śródbłonku naczyń POAH + mikroglejach → kwas arachidonowy → PGE₂. (4) PGE₂ → receptor EP3 na neuronach preoptycznych → ↑cAMP → hamowanie neuronów ciepłoczułych → ↑punkt nastawczy (set-point). (5) Efekty przy nowym wyższym set-poincie: wazokonstrykcja skóry (↓utrata ciepła) + drżenie mięśniowe + ↑metabolizm → T rośnie do nowego set-pointu. Leki: paracetamol i NLPZ (ibuprofen, diklofenak) → blokują COX-1/COX-2 → ↓PGE₂ → ↓set-point → pot + wazodylatacja → ↓T. Aspiryna u dzieci: ryzyko zespołu Reye (nie stosować!).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Witamina D ───
  {
    subtopic: 'Układ powłokowy i termoregulacja — Witamina D',
    subtopic_id: S.witd,
    question_type: 'single',
    question_text: 'Witamina D jest syntetyzowana w skórze pod wpływem promieniowania UV-B. Opisz pełny szlak jej aktywacji i główne biologiczne efekty aktywnej formy.',
    options: [
      { id: 'A', text: 'UV-B na 7-dehydrocholesterol w naskórku → cholekalcyferol (D₃, prowitamina) → wątroba (25-hydroksylaza, CYP27A1) → 25(OH)D₃ (kalcydiol, forma krążąca) → nerka (1α-hydroksylaza, CYP27B1) → 1,25(OH)₂D₃ (kalcytriol, aktywna) → receptor VDR jądrowy → ↑wchłanianie Ca²⁺ i PO₄³⁻ (jelito), ↑reabsorpcja Ca²⁺ (nerka), ↑mineralizacja kości', is_correct: true },
      { id: 'B', text: 'UV-B → synteza kalcytriolu bezpośrednio w skórze bez udziału wątroby ani nerek; kalcytriol działa wyłącznie na kości i nie ma wpływu na jelito ani nerkę', is_correct: false },
      { id: 'C', text: 'Skóra syntetyzuje witaminę D₂ (ergokalcyferol) z cholesterolu; aktywacja następuje w żołądku przez kwas solny; aktywna forma blokuje wchłanianie wapnia i powoduje hipokalcemię', is_correct: false },
      { id: 'D', text: 'Witamina D jest aktywowana wyłącznie w nadnerczach przez kortyzol → kompleks kortyzol-D₃ jest transportowany do kości i bezpośrednio wbudowywany w hydroksyapatyt', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Metabolizm witaminy D: Synteza skórna: UV-B (290–315 nm) fotolizuje 7-dehydrocholesterol (provit. D₃, w str. bazalnej i spinozum) → prewitamina D₃ (termolabilna) → cholekalcyferol (D₃, stabilna) → krąży z białkiem wiążącym witaminę D (DBP). Źródła egzogenne: tłuste ryby (D₃), grzyby/drożdże (D₂ = ergokalcyferol, mniej efektywna). Aktywacja: (1) Wątroba: CYP27A1 lub CYP2R1 → 25(OH)D₃ = kalcydiol; forma magazynowa i wskaźnik statusu D [norma >30 ng/mL, 75 nmol/L; niedobór <20 ng/mL]; T½ ~3 tygodnie. (2) Nerka (proksymalny kanalik): CYP27B1 (1α-hydroksylaza, regulowana przez PTH↑, niskie Ca²⁺↑, niskie PO₄↑; hamowana przez FGF-23 i kalcytriol feedback) → 1,25(OH)₂D₃ = kalcytriol; T½ ~4 h. Receptor VDR (nuclear receptor, rodzina steroidowych): jelito: ↑kalbindyna D-9k/D-28k → ↑absorpcja Ca²⁺ (transkaltachina) i PO₄³⁻; nerka: ↑reabsorpcja Ca²⁺ (TRPV5, kalbindyna); kość: ↑osteoblasty → mineralizacja; też: ↑RANKL na osteoblastach → ↑osteoklasty (paradoks przy niedoborze tłumaczy osteomalację). Niedobór → krzywica (dzieci: miękkie kości, nogi kabłąkowate, guz rachiticze, opóźnione zamknięcie ciemiączka), osteomalacja (dorośli: ból kości, złamania zmęczeniowe). Niedobór D → ↓odporność, ↑autoimmunizacja (MS, DM1), ↑ryzyko nowotworów.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Układ powłokowy i termoregulacja — Witamina D',
    subtopic_id: S.witd,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących witaminy D:\nA. Niedobór witaminy D u dzieci prowadzi do krzywicy (rachitismus) — zmiękczone kości kręgosłupa i kończyn uginają się pod ciężarem ciała; u dorosłych niedobór powoduje osteomalację (miękkie kości) różną od osteoporozy (zmniejszenie masy kostnej).\nB. Promieniowanie UV-B niezbędne do syntezy witaminy D₃ w skórze jest blokowane przez szyby okienne i chmury — długotrwały brak ekspozycji na słońce, szczególnie w strefach klimatycznych o długich zimach (np. Polska), prowadzi do powszechnego niedoboru witaminy D.\nC. Przedawkowanie witaminy D (hiperwitaminoza D) jest niemożliwe, ponieważ nadmiar jest natychmiast wydalany przez nerki bez żadnych skutków zdrowotnych — suplementacja witaminy D jest zawsze bezpieczna w dowolnych dawkach.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: krzywica (niedobór D + Ca²⁺ w dzieciństwie, gdy kości rosną): niezwapniony osteoid → miękkie kości → deformacje: nogi kabłąkowate (genu varum) lub koślawość (genu valgum), klatka piersiowa dzwonowata, powiększenie przynasad (bransolety rachiticze), różaniec krzyżowy (guzki na żebrach), bociani chód. Osteomalacja (dorośli): niezwapniony osteoid → ból kości przy ucisku, złamania pseudoFractures (Looser zones). Osteoporoza: prawidłowa mineralizacja ALE zmniejszona masa = inna choroba (leczenie bisfosfonianami, nie witaminą D). B — PRAWDA: UV-B (290–315 nm) = okna szklane pochłaniają prawie całe UV-B (szkło = absorber); chmury redukują o 50–90%. Polska = strefa 50–55°N: efektywna synteza skórna tylko V–IX (słońce wysoko); zima: kąt padania → UV-B przetrawione przez atmosferę → znikoma synteza. Zalecenia: suplementacja 800–2000 IU/d przez cały rok w Polsce; niemowlęta 400 IU/d od urodzenia. C — FAŁSZ: witamina D jest ROZPUSZCZALNA W TŁUSZCZACH → kumuluje się w tkance tłuszczowej i wątrobie (nie wydalana przez nerki jak wodnorozpuszczalne). Hiperwitaminoza D: >10 000 IU/d przez tygodnie → kalcydiol i kalcytriol ↑ → hiperkalcemia (polyuria, polidipsia, anoreksja, nudności, zwapnienia nerek/tkanek, zaburzenia rytmu serca, śmierć). Dawki terapeutyczne (1000–4000 IU/d) bezpieczne; dawki >10 000 IU/d bez kontroli = ryzyko.',
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
  console.log(`Seeding ${questions.length} mock questions for Uklad powlokowy i termoregulacja...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
