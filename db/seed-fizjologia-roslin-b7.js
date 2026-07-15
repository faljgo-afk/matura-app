// Seed batch 7/7 — Fizjologia roślin
// Kiełkowanie i spoczynek (4) + Fotoperiodyzm (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'

const S = {
  kielkowanie: '203f922f-00e6-458f-8239-5614e0777ff1',
  fotop:       'c426d845-182c-48d9-b420-bdda8dc95c2a',
}

const questions = [

  // ── KIEŁKOWANIE I SPOCZYNEK (4) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'single',
    question_text: 'Badacz umieścił nasiona sałaty (Lactuca sativa) w czterech warunkach: A) ciągłe ciemność, B) czerwone światło (660 nm), C) dalekie czerwone (730 nm), D) czerwone → dalekie czerwone. Które nasiona kiełkowały? (założenie: nasiona sałaty są fotoblastyczne dodatnie)',
    options: [
      { id: 'A', text: 'Kiełkują: B (czerwone) i potencjalnie A (ciemność tylko jeśli dostatecznie długo namoczone); nie kiełkują: C (730 nm) i D (ostatni impuls = 730 nm → konwersja Pfr → Pr → brak aktywacji kiełkowania)', is_correct: true },
      { id: 'B', text: 'Kiełkują wszystkie cztery warianty bez różnicy; długość fali nie wpływa na kiełkowanie sałaty; sałata kiełkuje wyłącznie przez osmozę w całkowitej ciemności; światło nie uczestniczy w żadnych reakcjach nasion sałaty', is_correct: false },
      { id: 'C', text: 'Kiełkuje wyłącznie C (dalekie czerwone 730 nm); czerwone 660 nm hamuje kiełkowanie sałaty; Pfr jest formą inhibitorową dla fotoblastycznych nasion sałaty; ciemność i 660 nm są równoważne — oba blokują kiełkowanie', is_correct: false },
      { id: 'D', text: 'Kiełkują A i C (ciemność i dalekie czerwone); B i D nie kiełkują; sałata jest fotoblastyczna ujemna (wymaga ciemności); czerwone światło i sekwencja czerwone→dalekie czerwone hamują kiełkowanie przez nadmiar Pfr', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Klasyczny eksperyment Flinta i McAlister (1945): sałata Grand Rapids. Fitochrom B mediuje fotoblastyczność: Pr (660 nm) → Pfr (aktywna forma) → inicjacja kiełkowania (degradacja PIF1/PIL5 → ekspresja GA3ox → GA → elongacja). ANALIZA: A) ciemność: Pr dominuje (Pfr ulega rozkładowi w ciemności) → mało Pfr → brak kiełkowania (u większości fotoblatycznie wymagających odmian ciemność = brak kiełkowania; choć nasiona namoczone 24h bez światła mogą wykazać nieznaczne kiełkowanie przez GA endogenne); B) 660 nm: Pr → Pfr (∼80% konwersja) → wysoki Pfr → aktywacja KIEŁKOWANIA; C) 730 nm: Pfr → Pr (∼97% konwersja) → niski Pfr → BRAK kiełkowania; D) 660 nm → 730 nm: najpierw Pr → Pfr, potem Pfr → Pr; ostatni impuls decyduje → Pr → BRAK kiełkowania. Reguła: OSTATNI IMPULS DECYDUJE (photoreversibility); eksperyment dał podstawy odkrycia fitochromu przez Borthwicka, Hendricksa, Butlera (USDA 1960).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują rolę kwasu abscysynowego (ABA) i giberelin (GA) podczas dormancji i kiełkowania nasion? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'ABA (kwas abscysynowy): syntetyzowany w rozwijającym się nasieniu → utrzymuje dormancję przez hamowanie ekspresji genów kiełkowania (np. poprzez hamowanie syntezy GA i aktywacji α-amylazy); nasiona dojrzałe zawierają wysoki ABA:GA ratio → dormancja; stres wodny → ABA → zamykanie szparek', is_correct: true },
      { id: 'B', text: 'Gibereliny (GA₁, GA₃, GA₄) są hormonami kiełkowania: hydroksylazy GA3ox i GA20ox (endosperm/zarodek) → aktywne GA; GA: (1) aktywuje α-amylazę w aleuronie (przez GAMYB TF); (2) degraduje represory DELLA (przez GID1 receptor + SCFGID2 ubikwitynacja) → de-represja genów kiełkowania; (3) wydłuża hypokotyl i korzeniu', is_correct: true },
      { id: 'C', text: 'Mutanty abi (ABA insensitive) Arabidopsis (abi1, abi2, abi3, abi4, abi5): nadmiernie kiełkują nawet w niekorzystnych warunkach (wysokie stężenia ABA, susz, sól); ABI5 (bZIP TF) wiąże promotory genów dormancji (RAB18, Em1, Em6) i jest celem terapeutycznym dla poprawy odporności upraw na suszę', is_correct: true },
      { id: 'D', text: 'ABA i GA działają synergistycznie na kiełkowanie — obie substancje jednocześnie stymulują wzrost zarodka; brak antagonizmu między nimi; nasiona z nadmierną produkcją ABA kiełkują lepiej dzięki zwiększonemu wydzielaniu GA przez zarodek', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) ABA biosynteza: ksantoksyna → abscisal aldehyde → ABA (gen NCED: 9-cis-epoxycarotenoid dioxygenase w plastydach); poziom ABA in seed development: wzrost w połowie dojrzewania → pik → następnie spada przed zbiorem (secondary dormancy jeśli nie spada); ABA-catabolism: 8\'-hydroxylase (CYP707A: mutant cyp707a → hyperabscisic acid dormancy). (B) DELLA proteins: F-box proteins SLEEPY1 (SLY1) i SNZ Arabidopsis → poliubikwitynacja i degradacja DELLA; DELLA (GAI, RGA, RGL1/2/3) = represory wzrostu; u ryżu: SLR1 = jedyna DELLA; GA3ox mutanty (ga3ox1 ga3ox2) → karłowate, dormantne; zastosowanie: gibbereliny rolnicze (kwas giberelinowy) → winogrono bezpestkowe (elongacja jagody), słodowanie (jęczmień: GA → aleurona → α-amylaza → hydroliza skrobi → fermentacja). (C) ABI3 (B3 domain TF) = główny regulator dormancji nasion; ABI3 mutant (ab i3-1): nie wytwarza typowych rezerw nasionnych (legumin, oleosyn); ABI5 (bZIP) = wskaźnik stanu dormancji; EM (early methionine) Late Embryogenesis Abundant (LEA) białka → ochrona przed wysychaniem. (D) fałsz: ABA i GA działają ANTAGONISTYCZNIE: ABA promotes dormancy, GA promotes germination; równowaga ABA:GA ratio krytyczna; stratyfikacja zimna → wzrost GA₄ + spadek ABA → kiełkowanie; mutanty GA-deficientne (ga1, ga2 Arabidopsis) → głęboka dormancja; dodanie zewnętrznych GA₃ → kiełkowanie mutantów ABA-sensytywnych.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących żywotności i przechowywania nasion:',
    options: [
      { id: 'A', text: 'Banki nasion (seed banks) jak Svalbard Global Seed Vault (Norwegia, Spitsbergen, od 2008) przechowują nasiona w temperaturze -18°C i niskiej wilgotności względnej (~6% zawartości wody w nasieniu) co może przedłużyć żywotność nasion ortodoksyjnych do setek lat.', is_correct: true },
      { id: 'B', text: 'Nasiona ortodoksyjne (np. większość zbóż, warzyw, roślin strączkowych) tolerują wysuszenie do 2–5% wody i głębokie zamrożenie; nasiona rekalsytrantne (np. dąb Quercus, kasztan, kawa, kakao, awokado) nie tolerują suszenia ani zamrażania — tracą żywotność.', is_correct: true },
      { id: 'C', text: 'Nasiona lotosu Nelumbo nucifera wykazują żywotność nawet po 1300 latach; odkryte w wysuszonym torfowisku w Chiny nasiona wykiełkowały; długowieczność tę zawdzięczają glukozydom fenolowym w tegmenie (zewnętrznej łupinie) chroniącym przed utlenianiem i hydrolizą.', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: Svalbard (78°N): wieczna zmarzlina jako naturalna izolacja; 1,5 mln próbek (2024); do 4,5 mln próbek docelowo; bufor dla katastrof naturalnych, politycznych (Egipt, Syria ewakuowały próbki podczas wojen); Polska: Ogród Botaniczny PAN Powsin i Instytut Hodowli Roślin przechowują kolekcje. B — Prawda: Orthodox seeds: odwodnienie do 5–7% → glassy state (stan szklisty) cytoplazmy → zahamowanie metabolizmu; rekalsytrantne (recalcitrant): Quercus robur → traci żywotność w kilka tygodni po zbiorze jeśli wysuszony; konwersja do kriogenicznych metod (ciekły azot -196°C) przez embriogenezę somatyczną lub eksplantaty; tropikalne: Theobroma cacao, Mangifera indica, Persea americana. C — Prawda: Shen-Miller et al. 2002 (PNAS): nasiona Nelumbo nucifera z Chin (osuszony staw, radiowęglowe datowanie: 1288 ± 271 lat BP) wykiełkowały; tegmen (twarda łupina): L-DOPA, kwas ferulowy + katecholiny jako antyoksydanty; wyjątkowe naprawy DNA w mitochondriach, rybosom HSP → możliwa reaktywacja; analogicznie: lupin L. arcticus: 10 000 lat (Yukon permafrost, Porsild et al. 1967) — kontrowersyjne (zanieczyszczenie vs. autentyczność).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.kielkowanie, question_type: 'single',
    question_text: 'Na schemacie przedstawiono etapy kiełkowania nasienia pszenicy. Która kolejność POPRAWNIE opisuje mobilizację energii w tej roślinie jednoliściennej?',
    options: [
      { id: 'A', text: 'Imbibicja → zarodek produkuje GA₃ → GA₃ dyfunduje do warstwy aleuronowej → GAMYB TF aktywuje ekspresję α-amylazy → α-amylaza wydzielana do endospermu → hydroliza skrobi → maltoza → maltaza → glukoza → zarodek pobiera glukozę → oddychanie tlenowe → wzrost', is_correct: true },
      { id: 'B', text: 'Imbibicja → endosperm autonomicznie produkuje ABA → ABA aktywuje proteazy w zarodku → białka zapasowe → aminokwasy → glukoza przez glukoneogenezę → transport do korzenia → mitoza → wzrost', is_correct: false },
      { id: 'C', text: 'Imbibicja → warstwa aleuronowa produkuje gibereliny → GA transport do zarodka → zarodek samodzielnie hydrolizuje własny skrobiowy endosperm → produkty hydrolizy nie są transportowane — zarodek oddycha anaerobowo przez cały okres kiełkowania', is_correct: false },
      { id: 'D', text: 'Imbibicja → coleoptyl wychodzi z nasienia przed radiculą → fotosynteza cotyledon → sukroza transport floem → zarodek → hydroliza sukrozy → ATP → podział komórkowy; GA i aleurona nie są zaangażowane w pszenicy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Kiełkowanie pszenicy (Triticum aestivum) — model sygnalizacji GA w monocots: (1) IMBIBICJA: nasienie absorpcja H₂O; zarodek (scutellum + zarodek właściwy) pęcznieje; (2) PRODUKCJA GA: zarodek (głównie scutellum i epiteliom scutellum) → GA₁ i GA₄; (3) SYGNALIZACJA GA w ALEURONIE: GA → GID1 receptor (GA-Insensitive Dwarf 1, α/β hydrolaza) → GID1-GA-DELLA complex → SCFGID2 E3 ubiquitin ligase → polyubiquitination DELLA → 26S proteasome → degradacja DELLA represora; (4) GAMYB: uwolniony z represe DELLA → aktywacja HvAMY (barley α-amylase 2); u pszenicy: TaAMY1, TaAMY2; (5) α-AMYLAZA → ENDOSPERM: hydroliza amyloza + amylopektyna → maltodekstryny → maltozy; maltozydaza (α-glucosidase) → glukoza; (6) TRANSPORT: glukoza + aminokwasy → scutellum → zarodek; oddychanie tlenowe: glukoza → ATP → elongacja korzenia, liścia; (7) PROTAZY w aleuronie: hydroliza glutelin, gliadyn → aminokwasy → azot dla wzrostu. Ważne: aleurona = 1-warstwowe komórki dookoła endospermu u pszenicy (vs. 3 warstwy u kukurydzy); po wydzieleniu enzymów → komórki aleuronowe ulegają apoptozie (PCD).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── FOTOPERIODYZM (5) ─────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.fotop, question_type: 'single',
    question_text: 'Zegar biologiczny (zegar cyrkadianowy) roślin odgrywa kluczową rolę w pomiarze długości dnia i nocy. Które stwierdzenie POPRAWNIE opisuje jego właściwości?',
    options: [
      { id: 'A', text: 'Zegar cyrkadianowy roślin: oscylator molekularny z pętlami ujemnego sprzężenia zwrotnego ~24 h; u Arabidopsis: CCA1/LHY (MYB TF, peak rano) → represja TOC1 (PRR1); TOC1 (peak wieczór) → represja CCA1/LHY; swobodnobieżący (free-running, ok. 24 h bez sygnałów zewnętrznych); resetowany codziennie przez fitochrom i kryptochrom (dawn light)', is_correct: true },
      { id: 'B', text: 'Zegar cyrkadianowy roślin ma okres ściśle 12 godzin (nie 24 h); jest resetowany co 12 godzin przez temperaturę gleby; u roślin nie ma białek zegarowych — rytmy dobowe wynikają wyłącznie ze zmian pH cytoplazmy i nie angażują ekspresji genów', is_correct: false },
      { id: 'C', text: 'Fitochrom jest jedynym zegarem biologicznym roślin; po nasyceniu Pfr zatrzymuje się i przez 24 h nie ma aktywności; dopiero kolejny poranek resetuje system; kryptochrom i UVR8 nie uczestniczą w rytmice dobowej', is_correct: false },
      { id: 'D', text: 'Zegar cyrkadianowy roślin zaczyna działać wyłącznie po kwitnieniu; siewki i rośliny wegetatywne nie posiadają zegarów cyrkadianowych; rytm dobowy pojawia się dopiero po ekspresji genów MADS-box inicjujących kwitnienie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Zegar cyrkadianowy (circadian clock) roślin — Arabidopsis: Pętla ZEWNĘTRZNA: CCA1 (Circadian Clock Associated 1) + LHY (Late Elongated Hypocotyl) = rano (dawn) ekspresja; wiążą elementy EE (Evening Element) promotora TOC1 → represja TOC1; TOC1 (Timing Of CAB Expression 1 = PRR1) = wieczór; hamuje CCA1/LHY przez PBS3/PRR5/PRR7/PRR9 kaskadę; pętle sprzężeń: PRR9/7/5 (południowy) → CCA1/LHY; TOC1 → PRR9/7/5; LUX/ELF3/ELF4 (Evening Complex, EC) → represja PRR9; EC + CCA1/LHY → dwupętlowy oscylator stabilny temperaturowo (Q10 ≈ 1 = temperatura-compensated). WŁAŚCIWOŚCI zegara: (1) period ~24 h; (2) temperature compensation: Q10 ≈ 1 (nie zwalnia przy niskiej T); (3) entrainability: resetowanie przez LD (світло) i T; (4) persistencja: trwa w ciągłej ciemności (free-running). Powiązanie z fotoperiodyzm: CO (CONSTANS) → FT: CO ma CDF → degradacja przez FKF1 + ZTL; CO mRNA + białko szczyty w połowie nocy → wyeksponowanie na świetle popołudniowym → CO białko stabilizuje → aktywuje FT → kwitnienie RDD.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.fotop, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują szlak CONSTANS (CO) w regulacji kwitnienia Arabidopsis? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'CO (CONSTANS) jest transkrypcyjnym aktywatorem FT; CO mRNA oscyluje dobowo (szczyt ~16 h po świcie); w krótki dzień (RKD) CO białko jest nistabilne w nocy (FBX2 E3 ligase degraduje CO → brak FT → brak kwitnienia); w długi dzień (RDD) po południu fitochrom B stabilizuje CO → FT → kwitnienie', is_correct: true },
      { id: 'B', text: 'Czynnik transkrypcyjny FLC (Flowering Locus C) bezpośrednio hamuje CO; u roślin niewernalizowanych wysoki FLC → represja CO → brak FT; wernalizacja → wyciszenie FLC (H3K27me3) → CO aktywny → FT → kwitnienie; gen SOV (Suppressor Of Overexpression of Constans) reguluje stabilność mRNA FLC', is_correct: false },
      { id: 'C', text: 'FT (Flowering Locus T) = florigen: białko syntetyzowane w komórkach towarzyszących floemu liści (companion cells); przemieszcza się floremalem do pąka szczytowego; kompleks FT-FD (FD = bZIP TF) → aktywacja AP1 i LFY → inicjacja kwiatu; zarówno FT mRNA jak i białko FT transportowane są przez floem', is_correct: false },
      { id: 'D', text: 'ZTL (ZEITLUPE) i FKF1 (FLAVIN-BINDING KELCH REPEAT F-BOX 1) to fotoreceptory LOV-domain (podobne do kryptochromów); FKF1 + niebieskie światło → aktywacja FKF1-GI kompleksu → degradacja CDF1 represora CO → ekspresja CO; ZTL → ubikwitynacja i degradacja TOC1 (wieczór) → uderzenie fazy zegara', is_correct: true },
    ],
    correct_answer: ['A', 'D'],
    explanation: '(A) CO/FT mechanizm: Valverde et al. 2004 (Science): phyB CRY2 fotoreceptory stabilizują/destabilizują CO białko; CRY2 (niebieski → stabilizuje CO popołudniu LD) + phyB (czerwony poranek → destabilizuje CO); COP1 (w ciemności) → ubikwitynacja i degradacja CO; SPA1 (partner COP1) → degradacja CO w nocy; u roślin krótkiego dnia CO dobiera się z CIB1 → nie aktywuje FT; RDD: popołudnie długiego dnia → CRY2 aktywny → CO stablizowany → aktywuje FT. (B) fałsz: FLC nie hamuje CO; FLC hamuje BEZPOŚREDNIO FT i SOC1 (FLC wiąże region promotorowy FT: CArG box, SVP-FLC complex → bezpośrednia represja FT); CO jest upstream regulatorem FT ale nie jest celem FLC; FLC represses FT at locus level (H3K9me2, Polycomb binding). (C) częściowo fałsz: MRNA FT (mRNA) transportowane są floemalem — SPORNA KWESTIA; białko FT zdecydowanie transportowane; Corbesier et al. 2007 (Science): mRNA FT wykrywany w apekach pobranych przez wirusa grafting; nowsze dane: białko FT = dominujący sygnał; FT-FD (FD = bZIP w apekach): aktywuje LFY (LEAFY), AP1, SOC1. (D) Prawda: ZTL/FKF1/LKP2 familia: LOV domain (podobny kryptochromów i fototropin) + F-box + Kelch repeats; FKF1 + GI (GIGANTEA, białko zegara) → kompleks degraduje CDF1 (CYCLING DOF FACTOR) → represor CO usunięty → ekspresja CO; ZTL → degradacja PRR5 i TOC1 (wieczorem → rebound zegara); Imaizumi 2003 (Science): FKF1 niezbędny dla kwitnienia LD.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.fotop, question_type: 'single',
    question_text: 'Porównaj odpowiedzi fotoperiodyczne różnych organizmów. Które stwierdzenie POPRAWNIE opisuje fotoperiodyzm u zwierząt i roślin?',
    options: [
      { id: 'A', text: 'Zarówno rośliny jak i zwierzęta (ptaki, ssaki) mierzą długość nocy za pomocą wewnętrznych zegarów biologicznych; u ssaków fotoreceptory w siatkówce → sygnał przez SCN (suprachiasmatic nucleus) → szyszynka → melatonina (wydzielana w ciemności) → regulacja rozrodu sezonowego i migracji; u roślin fitochrom w liściach → CO → FT → kwitnienie', is_correct: true },
      { id: 'B', text: 'Rośliny mierzą długość dnia wyłącznie przez chlorofil a; zwierzęta nie mają zegarów biologicznych; melatonina jest substancją roślinną syntetyzowaną w chloroplastach i przenoszoną do zwierząt przez łańcuch pokarmowy', is_correct: false },
      { id: 'C', text: 'Fotoperiodyzm opisano wyłącznie u roślin kwiatowych; ptaki i ssaki nie reagują na długość dnia; rozród sezonowy jeleni, owiec i łosi nie jest regulowany przez fotoperiod lecz wyłącznie przez temperaturę i dostępność pożywienia', is_correct: false },
      { id: 'D', text: 'U ssaków długość dnia mierzona jest przez wzrok (siatkówka) i brak alternatywnych fotoreceptorów; ślepe ssaki nie mogą reagować fotoperiodycznie; melatonina nie uczestniczy w przekazywaniu sygnału fotoperiodycznego; wyłącznie temperatura reguluje sezony rozrodcze', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fotoperiodyzm zwierząt — melatonina: szyszynka (pinealis) wydziela melatoninę w ciemności (syntetaza aryloalkiloaminowej N-acetylotransferazy AANAT aktywna w nocy); długa noc (krótkie dnie zimowe) → dłuższy pulse melatoniny; RECEPTORY: MT1, MT2 (GPCR) w przysadce (przysadka mózgowa) i gonadach → regulacja GnRH → FSH/LH → gonady. SSAKI DŁUGIEGO DNIA (LDS): kury, konie, lisy, fretki — kwitną/rozmnażają się gdy dni długie (wiosna/lato); SSAKI KRÓTKIEGO DNIA (SDS): owce, jelenie, kozy, norki — długa noc (jesień) → reprodukcja → poród wiosną; norcies melatonina długa (noc długa) → LH wzrost → ruja jesienią → szczenięta wiosną. SCN (jądra nadskrzyżowaniowe): główny zegar dobowy u ssaków; synchronizacja przez retinal ganglion cells z melanopsyną (OPN4) → szlak retino-hypothalamiczny (RHT) → SCN → szyszynka. PTAKI: fotoreceptory mózgowe (głębokie: cerebralne TS opsin, VA opsin) + siatkówkowe; niezależne od oczu (zaślepione ptaki migrują normalnie); melatonina + GnIH (Gonadotropin-inhibitory hormone) → migracja.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.fotop, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących adaptacyjnego znaczenia fotoperiodyzmu:',
    options: [
      { id: 'A', text: 'Fotoperiodyzm pozwala roślinom synchronizować kwitnienie z sezonem: gdy wszystkie osobniki danego gatunku kwitną równocześnie (synchronizacja populacyjna), zwiększa się prawdopodobieństwo zapylenia krzyżowego i wytworzenia nasion zdolnych do skiełkowania przed mrozem.', is_correct: true },
      { id: 'B', text: 'Zmiana stref klimatycznych (np. uprawa roślin tropikalnych na szerokościach umiarkowanych) może uniemożliwić kwitnienie z powodu niezgodności fotoperiodycznej: odmiany RKD z tropiku (krótki dzień, 12 h) nie zakwitną latem na szerokościach 52°N gdzie dni mogą trwać 16–17 godzin.', is_correct: true },
      { id: 'C', text: 'Długość dnia jest mniej niezawodnym wskaźnikiem pory roku niż temperatura; zmiany fotoperiodu od roku do roku są bardzo duże i nieprzewidywalne; rośliny przystosowały się do temperatury jako głównego sygnału sezonowego, a fotoperiod stanowi jedynie uzupełniający wskaźnik pomocniczy.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: ewolucja fotoperiodyzmu jako mechanizm synchronizacji kwitnienia: Rhoades (1940) i Clausen, Keck, Hiesey (ekotypy) — różne ekotypy California Achillea kiełkują/kwitną w tej samej szerokości geograficznej; synchronizacja populacyjna → outbreeding → genetyczna różnorodność; przykład: dęby w tym samym lesie kwitną w ciągu 2 tygodni; pszczoły ewoluowały równolegle do synchronizacji z roślinami. B — Prawda: soja (Glycine max) pochodzi z Chin (szerokość 25–45°N); tropikalne odmiany (MG VIII-X) wymagają <12 h dnia → latem w Europie (16 h dnia) → brak kwitnienia; "latitude adaptation": selektywna hodowla maturity groups; introdukcja roślin tropikalnych do upraw strefy umiarkowanej wymaga selekcji RDO odmian lub krótkodzieniowych odmian o obniżonej CNL; soja MG00 (Szwecja/Kanada) vs. MG IX (Brazylia/Kolumbia). C — Fałsz: TEMPERATURA jest mniej niezawodna (zmienności rok do roku) niż FOTOPERIOD; fotoperiod (długość dnia/nocy) jest astronomicznie precyzyjny — w danej szerokości geograficznej 15 czerwca długość dnia jest identyczna co rok (±sekundy); temperatura: może być anomalna (marzec ciepły = 10°C lub -5°C w różnych latach); rośliny PREFERUJĄ fotoperiod jako główny zegar sezonowy właśnie dla jego niezawodności; temperatura uczestniczy wtórnie (weralizacja, chilling requirement) ale jej zmiany roczne są duże; zmiany klimatu zaburzają temperaturę bardziej niż fotoperiod → fenologiczne mismatch.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.fotop, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują integrację szlaków kwitnienia u Arabidopsis thaliana? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Cztery główne szlaki kwitnienia Arabidopsis: (1) FOTOPERIODYCZNY: FT/CO (liście → apeks); (2) WERNALIZACYJNY: FLC → wyciszenie H3K27me3; (3) AUTONOMICZNY: FRI/FLC → niezależny od LD; (4) GIBERELINOWY: GA → degradacja DELLA → SOC1 (ważny w krótkim dniu); wszystkie konwergują na INTEGRATORY: SOC1 i LFY (LEAFY)', is_correct: true },
      { id: 'B', text: 'Wiek rośliny (juvenile to adult transition) jest czwartym szlakiem: miR156 (wysoki u siewek) → represja SPL TF; dorastanie → miR156 spada → SPL13 i SPL9 wzrastają → SOC1 i FT aktywowane; miR172 (dorosłe) → represja AP2/TOE (hamulce kwitnienia) → kwitnienie', is_correct: true },
      { id: 'C', text: 'SOC1 (SUPPRESSOR OF OVEREXPRESSION OF CONSTANS 1) i LFY (LEAFY) są INTEGRATORAMI (master regulators kwitnienia): FT-FD → AP1 + SOC1; SOC1 → LFY; LFY aktywuje geny homeotyczne kwiatu (AP1, AP3, PI, AG) → określenie tożsamości płatków, pręcików, słupka (ABC model kwiatu)', is_correct: true },
      { id: 'D', text: 'U Arabidopsis istnieje tylko jeden szlak kwitnienia (fotoperiodyczny); wernalizacja, gibereliny i wiek rośliny nie wpływają na kwitnienie; mutanty FRI (FRIGIDA) kwitną identycznie jak rośliny dzikie niezależnie od ekspozycji na zimno', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) cztery główne szlaki kwitnienia: (1) Fotoperiodyczny: liść → CO → FT → apeks → FD-FT → AP1/SOC1; (2) Wernalizacyjny: FLC represuje FT i SOC1; zimno → PRC2 → H3K27me3 FLC → derepresja FT/SOC1; FRI (FRIGIDA) = aktywator FLC → późne kwitnienie; friCol-0 = brak FRI → wczesne kwitnienie bez wernalizacji; (3) Autonomiczny: FLC regulowany przez RNA processing (FCA, FY = polyadenylation; FLD = histone demethylase) niezależnie od LD → zapewnia brak wernalizacji → kwitnienie; (4) GA pathway: ga1 mutant nie kwitnie w SD; GA4 → SCFSLY1 → degradacja RGA/GAI → SOC1 + LFY aktywacja. (B) wiek (Aging pathway): Wang et al. 2009 (Development): miR156 wysoki u młodych roślin → represja 10 klas SPL (SQUAMOSA PROMOTER BINDING PROTEIN-LIKE); SPL3/4/5 bezpośrednio aktywują AP1, FUL, SOC1, LFY; postarzanie: miR156 spada (H3K27me3 na MIR156A), SPL wzrasta; miR172: HYL1 biogenesis; AP2/TOE1/2 = represory kwitnienia repressora; SPL → aktywacja MIR172 → degradacja AP2/TOE → kwitnienie. (C) ABC model Coen & Meyerowitz 1991: A (AP1+AP2) → działki kielicha; A+B (AP1+AP3+PI) → płatki; B+C (AP3+PI+AG) → pręciki; C (AG) → słupek; LFY → bezpośrednia aktywacja AP1, AG przez wiązanie do promotorów; SOC1 → LFY mRNA. (D) fałsz: Arabidopsis thaliana: ekotyp Columbia (Col-0) = friCol-0 (brak FRI) → kwitnie bez wernalizacji; ekotyp Stockholm = FRI aktywny → późne kwitnienie; vernalizacja skraca kwitnienie; ga1 mutant nie kwitnie w SD → GA konieczna; jasno: 4+ szlaków konwergujących na SOC1/LFY.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: {
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => {
      let r = ''; res.on('data', c => r += c)
      res.on('end', () => resolve({ status: res.statusCode, body: r }))
    })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding batch 7 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
