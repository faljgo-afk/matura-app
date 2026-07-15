// Seed batch 1/7 — Fizjologia człowieka: układ pokarmowy i wydalniczy
// Trawienie węglowodanów (7) + Trawienie białek (3)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'b876f606-00ef-4586-81c2-82d3fe69e97d'

const S = {
  weglo:  '60fed091-5212-4c65-b9fa-a1c959253a9c',
  bialka: '013f473b-19f6-46d8-8cb1-44057ec6d0a7',
}

const questions = [

  // ── TRAWIENIE WĘGLOWODANÓW (7) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.weglo, question_type: 'single',
    question_text: 'Trawienie węglowodanów rozpoczyna się w jamie ustnej. Który opis POPRAWNIE przedstawia działanie amylazy ślinowej (ptialiny)?',
    options: [
      { id: 'A', text: 'Amylaza ślinowa (ptyalina) jest wydzielana przez ślinianki (przyuszne, podżuchwowe, podjęzykowe); hydrolizuje wiązania α-1,4-glikozydowe w skrobi i glikogenie → produkty: maltoza + maltotrioza + dekstryny α-graniczne (dextrin limitans); optymum pH ~6,7–7,0; dezaktywowana przez kwas żołądkowy (pH < 4); nie trawi wiązań α-1,6-glikozydowych (w punktach rozgałęzienia)', is_correct: true },
      { id: 'B', text: 'Amylaza ślinowa trawi wyłącznie celulozę (wiązania β-1,4); optymum pH wynosi 2,0 jak kwas żołądkowy; jest aktywowana przez niskie pH → kontynuuje trawienie w żołądku; główny produkt jej działania to glukoza (monosacharydy) gotowe do wchłonięcia przez śluzówkę jamy ustnej', is_correct: false },
      { id: 'C', text: 'Amylaza ślinowa jest enzymem lipolitycznym rozkładającym tłuszcze; produkowana wyłącznie przez ślinianki przyuszne (nie podżuchwowe); jej działanie trwa przez cały czas przebywania pokarmu w żołądku; celuloza jest głównym substratem amylazy ślinowej u człowieka', is_correct: false },
      { id: 'D', text: 'Amylaza ślinowa jest identyczna z trypsyną trzustkową; oba enzymy są aktywowane w środowisku zasadowym pH > 9; amylaza ślinowa rozkłada laktozę w jelicie cienkim; ślinianka przyuszna produkuje wyłącznie ślinę bogatą w mucyny, bez enzymów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'AMYLAZA ŚLINOWA (ptyalina, EC 3.2.1.1): ŹRÓDŁO: ślinianki przyuszne (gl. parotis) — bogate w enzymy surowicze; podżuchwowe (gl. submandibularis) — mieszane; podjęzykowe (gl. sublingualis) — głównie śluzowe (mucyny, mało amylazy); SUBSTRAT: skrobia (amyloza — liniowy łańcuch α-1,4; amylopektyna — rozgałęziony, α-1,4 + α-1,6); glikogen; MECHANIZM: endo-amylaza — cięcie wewnętrznych wiązań α-1,4 w sposób losowy; PRODUKTY: maltoza (disacharyd Glc-α1,4-Glc), maltotrioza (trisacharyd), dekstryny α-graniczne (oligosacharydy z wiązaniami α-1,6 przy rozgałęzieniach — amylaza NIE może ich ciąć); WG AKTYWNOŚCI: optymum pH 6,7–7,0 (Cl⁻ jako aktywator!); dezaktywacja w żołądku (pH 2–3) po kontakcie z HCl; czas działania w jamie ustnej: 15–30 s (zależnie od żucia); w żołądku: działanie trwa jeszcze ~20–30 min w centrum bolusa pokarmowego (zanim kwas dyfunduje); KLINIKA: niedobór amylazy ślinowej — marginalne skutki (amylaza trzustkowa kompensuje); hiperamylazemia: ostre zapalenie trzustki (OZT) — głównie amylaza trzustkowa, ale też ślinowa (mumps, parotitis).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.weglo, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących enzymów rąbka szczoteczkowego jelita cienkiego trawiących węglowodany:',
    options: [
      { id: 'A', text: 'Maltaza (α-glukozydaza): hydrolizuje maltozę → 2 × glukoza; zlokalizowana na mikrokosmkach enterocytów (rąbek szczoteczkowy); substrat pochodzi z działania amylazy ślinowej i trzustkowej; jej niedobór jest rzadki i zwykle kompensowany przez inne α-glukozydazy', is_correct: true },
      { id: 'B', text: 'Sacharaza-izomaltaza (SI, sukraza): jeden enzym z dwiema domenami katalitycznymi; sacharaza trawi sacharozę (Glc-α1,2β-Fruc) → glukoza + fruktoza; izomaltaza trawi izomaltasę (Glc-α1,6-Glc) = wiązania w punktach rozgałęzień dekstryn α-granicznych; niedobór wrodzonego SI jest najczęstszą wrodzoną disacharydzymią (częściej niż nietolerancja laktozy genetyczna)', is_correct: false },
      { id: 'C', text: 'Laktaza (β-galaktozydaza): hydrolizuje laktozę (Glc-β1,4-Gal) → glukoza + galaktoza; aktywność laktazy u niemowląt jest wysoka; persistencja laktazy (utrzymanie aktywności w dorosłości) jest wynikiem mutacji regulatorowej LCT-13910C>T; u większości dorosłych na świecie aktywność laktazy spada po odstawieniu mleka (hypolaktazja pierwotna = "norma ewolucyjna")', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: MALTAZA: rąbek szczoteczkowy (brush border) enterocytów jelita cienkiego; EC 3.2.1.20; substrat: maltoza (Glc-α1,4-Glc) z trawienia skrobi; maltotrioza też; WAŻNE: istnieje kilka form α-glukozydaz na rąbku (MGA1, MGA2 = "maltase-glucoamylase"), a sacharaza-izomaltaza też hydrolizuje maltozę; niedobór izolowanej maltazy klinicznie mało istotny. B — Fałsz: SACHARAZA-IZOMALTAZA: to prawda, że jest to jeden enzym dwufunkcyjny; JEDNAK twierdzenie, że "niedobór SI jest najczęstszą wrodzoną disacharydzymią" jest fałszywe; NAJCZĘSTSZA wrodzona: wrodzony niedobór sacharazy-izomaltazy to ~0,2% populacji (częstszy wśród Inuitów ~10%); JEDNAK nietolerancja laktozy NIE jest wrodzoną chorobą — większość hypolaktazji to typ pierwotny (fizjologiczny spadek laktazy po odstawieniu mleka), nie "wrodzona dysacharydemia"; wrodzona (congenital) alaktazja (niedobór laktazy od urodzenia) jest niezwykle rzadka. C — Prawda: LAKTAZA: EC 3.2.1.108 (β-galaktozydaza); LCT (lactase gene, 2q21.3); persistencja: LCT-13910C>T lub -22018G>A w rejonie promotora → aktywacja transkrypcji LCT w dorosłości; EPIDEMIOLOGIA: persistencja laktazy: Europejczycy północni ~90%; Azjaci, Afrykanie, rdzenni Amerykanie: ~10–30%; "norma" ewolucyjna to hipolaktazja — persistencja to mutacja korzystna dla pasterzy; HYPOLAKTAZJA: osmotyczna biegunka + gazy (fermentacja laktozy przez bakterie → H₂, CH₄, SCFA) + wzdęcia.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.weglo, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują trawienie skrobi przez amylazę trzustkową i jej regulację? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Amylaza trzustkowa (α-amylaza, AMY2): wydzielana przez komórki acynarne trzustki w formie aktywnej (nie wymaga aktywacji, w odróżnieniu od proteaz trzustkowych); optymum pH 6,7–7,1; wymaga Cl⁻ jako aktywatora allosterycznego; stężenie w soku trzustkowym: ~200× wyższe niż w ślinie; działanie w dwunastnicy i jelicie cienkim', is_correct: true },
      { id: 'B', text: 'Regulacja wydzielania soku trzustkowego: CCK (cholecystokinina) wydzielana przez komórki I jelita cienkiego przy kontakcie z białkami i tłuszczami → stymuluje komórki acynarne trzustki (CCK-A receptor) → enzymy; sekretyna wydzielana przez komórki S przy kwaśnej treści (pH < 4,5) w dwunastnicy → stymuluje komórki przewodowe (CFTR, AE2) → HCO₃⁻ bogaty sok → neutralizacja kwasu', is_correct: true },
      { id: 'C', text: 'Celuloza (β-1,4-glukan) jest trawiona przez amylazę trzustkową u człowieka; człowiek posiada własny gen celulazy; błonnik pokarmowy jest wchłaniany w jelicie cienkim jako glukoza; fermentacja celulozy przez bakterie jelitowe nie dostarcza żadnej energii dla człowieka', is_correct: false },
      { id: 'D', text: 'W ostrym zapaleniu trzustki (OZT): lipaza i amylaza trzustkowa aktywują się wewnątrz komórek acynarnych (mechanizm aktywacji wewnątrzkomórkowej, np. koleistaza, alkohol) → samostrawienie trzustki; amylazemia (↑amylaza we krwi) i lipazemia (↑lipaza we krwi) są markerami OZT; lipaza jest specyficzniejsza dla OZT niż amylaza', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) AMYLAZA TRZUSTKOWA: AMY2A i AMY2B; wydzielana aktywna (nie jako zymogen) — bo nie zagraża samej trzustce (nie trawi białek/tłuszczów); Cl⁻: wiąże się w miejscu allosterycznym → ↑Vmax ~2×; optymum pH bliskie neutralnemu → idealne dla jelita cienkiego po neutralizacji przez HCO₃⁻; (B) REGULACJA TRZUSTKOWA: CCK: uwolnienie przez monoacyloglicerol, kwasy tłuszczowe, peptydy/aminokwasy; CCK-AR (CCKAR, receptor A): na komórkach acynarnych → Gq → PKC → egzocytoza ziarnistości zymogenowych; stymuluje też skurcz pęcherzyka żółciowego; sekretyna: uwolnienie przez kwas (pH<4,5) w duodenum → SCTR (Gs → cAMP → PKA) na komórkach przewodowych → aktywacja CFTR (Cl⁻) + AE2 (anion exchanger) → HCO₃⁻ bogaty sekret (do 120 mEq/l); VIP (vasoactive intestinal peptide): podobnie do sekretyny (VPAC1 → Gs → cAMP); odruch wago-wagalny: ACh → M3R → enzymy; (C) fałsz: CZŁOWIEK nie ma celulazy; celuloza (β-1,4) nie trawiona przez amylazę (α-1,4 specyficzność); JEDNAK bakterie jelita grubego (Bacteroides, Ruminococcus) fermentują celulozę → SCFA (krótkołańcuchowe kwasy tłuszczowe: maślan, propionian, octan) → wchłaniane przez kolonocyty → 5–10% energii; maślan: główne źródło energii dla kolonocytów; (D) OZT: przyczyny: kamica żółciowa (40%), alkohol (30%), hipertrójglicerydemia (>1000 mg/dl), leki; AKTYWACJA WEWNĄTRZKOMÓRKOWA: kolokaliz. trypsyny (tripsynogen → trypsyna przez katepsynę B w lizosomach) + lipazy; lipaza: t₁/₂ 7h (dłuższy niż amylaza 2h) → utrzymuje się dłużej; SPECYFICZNOŚĆ: amylaza ↑ też w: zapalenie ślinianek (mumps), perforacja wrzodu, niedrożność jelit, ciąża; lipaza bardziej specyficzna dla trzustki; diagnoza: amylaza lub lipaza > 3× norma + ból + imaging.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.weglo, question_type: 'single',
    question_text: 'Nietolerancja laktozy jest powszechnym zaburzeniem trawienia u dorosłych. Które stwierdzenie POPRAWNIE wyjaśnia mechanizm objawów nietolerancji laktozy?',
    options: [
      { id: 'A', text: 'Niedobór laktazy w rąbku szczoteczkowym → laktoza nie jest hydrolizowana → niestrawiona laktoza przechodzi do jelita grubego → osmotyczne wiązanie wody w świetle jelita (↑ciśnienie osmotyczne treści) + fermentacja bakteryjna laktozy (Lactobacillus, E.coli) → H₂ + CO₂ + CH₄ + SCFA → wzdęcia, kolki, biegunka osmotyczna; test oddechowy (breath test) H₂: ↑H₂ w powietrzu wydychanym po laktozie = potwierdzenie', is_correct: true },
      { id: 'B', text: 'Nietolerancja laktozy jest chorobą autoimmunologiczną — przeciwciała IgE atakują enterocyty produkujące laktazę; jest identyczna z alergią na białka mleka (CMPA); laktoza nie dociera do jelita grubego bo jest wchłaniana przez bierne dyfuzję przez błonę śluzową jelita cienkiego; test diagnostyczny: biopsja nerki', is_correct: false },
      { id: 'C', text: 'W nietolerancji laktozy laktaza produkuje za dużo galaktozy → galaktozemia → toksyczne nagromadzenie galaktitolu; objawy pojawiają się wyłącznie u niemowląt; dorośli nie mogą mieć nietolerancji laktozy bo ich komórki produkują więcej laktazy z wiekiem; jedyne leczenie to transplantacja wątroby', is_correct: false },
      { id: 'D', text: 'Fermentacja laktozy przez bakterie jelita cienkiego (nie grubego) produkuje wyłącznie CO₂; H₂ nigdy nie jest produkowany podczas fermentacji laktozy; SCFA (krótkołańcuchowe kwasy tłuszczowe) produkowane podczas fermentacji powodują zasadowicę metaboliczną; laktoza powoduje zaparcia (nie biegunkę) przez wiązanie wody', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'MECHANIZM NIETOLERANCJI LAKTOZY: (1) ↓aktywność laktazy (hypolaktazja pierwotna = genetyczna lub wtórna = po uszkodzeniu śluzówki) → laktoza nie hydrolizowana; (2) OSMOTYCZNY: niestrawiona laktoza (disacharyd, MW 342) → ↑osmolalność treści jelita cienkiego → woda zatrzymana → przyspieszenie pasażu → biegunka osmotyczna; (3) FERMENTACJA: laktoza w okrężnicy → bakterie (Streptococcus thermophilus, Lactobacillus bulgaricus, Bacteroides, E. coli) → fermentacja → H₂ + CO₂ (gaz w przewodzie) + CH₄ (metanogeny) + SCFA (octan, propionian, maślan) → ↓pH stolca; OBJAWY: wzdęcia (gaz), bóle brzucha, przelewania, biegunka; CZAS: 30 min – 2 h po spożyciu laktozy; PRÓG: większość hypolaktazji znosi 12g laktozy (~1 szklanka mleka); TYPY: pierwotna (LCT polimorfizm, ~70% populacji świata); wtórna (po gastroenteritis, celiakii, ch. Leśniowskiego-Crohna); congenital (bardzo rzadka, od urodzenia); TEST ODDECHOWY H₂: pacjent spożywa 25–50 g laktozy → H₂ mierzony w powietrzu wydychanym; ↑>20 ppm ponad wartość bazową po 2–3 h = pozytywny; LECZENIE: eliminacja lub ↓laktozy; jogurt lepiej tolerowany (bakterie mają własną laktazę); suplementy laktazy; mleko bez laktozy (laktoza hydrolizowana enzymatycznie).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.weglo, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wchłaniania i metabolizmu monosacharydów po trawieniu węglowodanów:',
    options: [
      { id: 'A', text: 'Glukoza i galaktoza wchłaniane są z jelita cienkiego przez SGLT1 (sodium-glucose linked transporter 1) na apikalnej błonie enterocytów: wtórny aktywny transport sprzężony z gradientem Na⁺ (Na⁺/K⁺-ATPaza utrzymuje gradient); fruktoza wchłaniana przez GLUT5 (ułatwiona dyfuzja); eksport do krwi przez wszystkie monosacharydy: GLUT2 na błonie podstawno-bocznej', is_correct: true },
      { id: 'B', text: 'Po wchłonięciu monosacharydy trafiają bezpośrednio do krwiobiegu systemowego (żyły głównej); wątroba nie bierze udziału w pierwszym przejściu metabolizmu glukozy; fruktoza po wchłonięciu jest przekształcana w glukozę w jelicie cienkim przed dotarciem do wątroby', is_correct: false },
      { id: 'C', text: 'Glikemia poposiłkowa (poposiłkowy wzrost glukozy we krwi): insulina wydzielana przez komórki β trzustki → ↑GLUT4 na adipocytach i mięśniach szkieletowych (translokacja pęcherzyków z GLUT4 do błony) → ↑wychwyt glukozy; glukagon z komórek α trzustki: wydzielany przy ↓glikemii → ↑glikogenoliza + ↑glukoneogeneza w wątrobie', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: WCHŁANIANIE MONOSACHARYDÓW: SGLT1 (SLC5A1): na apikalnej błonie enterocytów; ko-transport 2 Na⁺: 1 Glc (lub Gal) → elektrogeniczny; gradienty Na⁺ utrzymywane przez basolateral Na⁺/K⁺-ATPaza (3 Na⁺ out, 2 K⁺ in, ATP); glukoza wchodzi "pod górę" stężenia; GLUT5 (SLC2A5): na apikalnej → fruktoza (ułatwiona dyfuzja, bez Na⁺); GLUT2 (SLC2A2): na bazolateralnej → eksport wszystkich monosacharydów do żyły wrotnej; KLINIKA: mutacja SGLT1 → glukozo-galaktozowa malabsorpcja (noworodkowa biegunka zagrożenia życia); leki SGLT2 (kanagliflozyna, dapagliflozyna): hamują reabsorpcję glukozy w nerce → glikozuria → ↓glikemia (DM2). B — Fałsz: PIERWSZE PRZEJŚCIE: wchłonięte monosacharydy → żyła wrotna (v. portae) → WĄTROBA (pierwsze przejście!); wątroba: wychwyt glukozy (GLUT2, wysoki Km → proporcjonalnie do glikemii) → glikogeneza + glikoliza; FRUKTOZA: GLUT5 → żyła wrotna → WĄTROBA (nie jelito) → fruktokinaza (nie glukokinaza!) → fruktoza-1-P → aldolaza B → DHAP + gliceralaldehyd → szybszy wejście do glikolizy niż glukoza (omija PFK1); fruktoza promuje lipogenezę de novo. C — Prawda: GLUT4: insulin-sensitive transporter; spoczynkowe komórki mięśniowe/tłuszczowe: GLUT4 w pęcherzykach intracellular (GSV — GLUT4 storage vesicles); insulina → IRS-1 → PI3K → Akt/PKB → AS160 (RabGAP) inaktywacja → Rab10 aktywny → fuzja GSV z błoną → ↑GLUT4 w błonie → ↑wychwyt glukozy; GLUKAGON: działanie na hepatocyty (GCGR, Gs → cAMP → PKA) → ↑glikogenoliza (fosforylacja glikogenu fosforylazy) + ↑glukoneogeneza (↑PEPCK, FBPase-1, G6Paza).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.weglo, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują regulację hormonalną trawienia węglowodanów i odpowiedź glikemiczną? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Inkretyny (GIP i GLP-1): hormony jelitowe wzmacniające odpowiedź insulinową na glukozę; GIP (glucose-dependent insulinotropic peptide) wydzielany przez komórki K jelita cienkiego przy wchłanianiu glukozy i tłuszczów; GLP-1 (glucagon-like peptide-1) wydzielany przez komórki L jelita krętego i okrężnicy; oba → GPCR (Gs → cAMP) na komórkach β → ↑insuliny tylko gdy glikemia jest podwyższona (efekt glukozozależny)', is_correct: true },
      { id: 'B', text: 'Indeks glikemiczny (IG): mierzy jak szybko węglowodany w danym pokarmie podnoszą glikemię w stosunku do glukozy czystej (IG=100) lub białego chleba (IG=100); niski IG (<55): soczewica, makaron al dente, jabłka; wysoki IG (>70): biały chleb, ryż biały, ziemniaki gotowane; IG spada przy ↑zawartości błonnika + ↓przetworzeniu + ↑zawartości białek/tłuszczów (spowalniają opróżnianie żołądka)', is_correct: true },
      { id: 'C', text: 'Efekt inkretynowy: u zdrowych osób 50–70% odpowiedzi insulinowej po doustnej glukozie wynika z inkretyn; u DM2 efekt inkretynowy jest zachowany lub nawet zwiększony (hipersekrecja GIP i GLP-1); leki GLP-1RA (semaglutyd, liraglutyd) i DPP-4 inhibitory (sitagliptyna) są stosowane w DM2', is_correct: false },
      { id: 'D', text: 'Kortyzol i adrenalina działają antagonistycznie do insuliny: kortyzol (długoterminowy stres) → ↑glukoneogeneza + ↑proteolizy (substraty do glukoneogenezy) + ↑lipolizy + ↓wrażliwości tkanek na insulinę (insulinooporność); adrenalina (ostry stres, wysiłek) → ↑glikogenoliza w wątrobie i mięśniach + ↑lipoliza + ↓wydzielania insuliny (α₂-adrenoreceptory na komórkach β)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: '(A) INKRETYNY: Efekt inkretynowy opisany w 1964 (McIntyre); GIP (dawniej: gastric inhibitory peptide): komórki K (duodenum, jelito czcze); GLP-1: komórki L (jelito kręte, okrężnica); WAŻNE: oba działają TYLKO przy ↑glikemii → bezpieczne (nie wywołują hipoglikemii w monoterapii); DPP-4 (dipeptidyl peptidase-4): degraduje GIP i GLP-1 (t₁/₂ ~2 min); GLP-1RA: exenatyd, liraglutyd, semaglutyd (sc/oral): trwały agonizm; mechanizm: cAMP → PKA + Epac2 → zamknięcie K_ATP → depolaryzacja → ↑Ca²⁺ → egzocytoza insuliny. (B) INDEKS GLIKEMICZNY: definicja poprawna; WAŻNE: IG ≠ ładunek glikemiczny (GL = IG × g węglowodanów/100); marchewka: IG wysokie (~70) ale GL niskie (mało węglowodanów); arbuzy podobnie; czynniki ↓IG: kwas (ocet, kwaśne owoce → ↓amylazy, ↓opróżniania żołądka), błonnik (lepkość → ↓wchłaniania), schłodzone skrobi (skrobia oporna RS3), al dente (mniej żelowana skrobia). (C) fałsz: U DM2 efekt inkretynowy jest ZMNIEJSZONY (~2× vs zdrowi), a nie zachowany czy zwiększony; wydzielanie GLP-1 może być niższe lub podobne, ale ODPOWIEDŹ komórek β na GLP-1 jest upośledzona; dlatego leki GLP-1RA nadal działają (farmakologiczne dawki pokonują oporność receptora). (D) HORMONY KONTRREGULACYJNE: KORTYZOL: działa przez GR (jądrowy) → ↑transkrypcja PEPCK, G6Pazy, FBPazy-1 → ↑glukoneogeneza; ↑lipoliza w adipocytach → FFA → insulinooporność wątrobowa; ↑proteolizy mięśni → Ala, Gln → substraty do gluconeogenezy; ↓GLUT4 → insulinooporność obwodowa; ADRENALINA: wątroba (β₂) → Gs → cAMP → ↑glikogenoliza; mięśnie (β₂) → glikogenoliza (bez exportu Glc — brak G6Pazy → mleczan) → cykl Corich (mleczan → wątroba → glukoza); trzustka (α₂): ↓insuliny; β-cel trzustki (β₂): ↑glukagonu; efekt netto: ↑glikemia szybko.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.weglo, question_type: 'single',
    question_text: 'Cukrzyca typu 1 i typu 2 różnią się pod względem patofizjologii zaburzeń metabolizmu węglowodanów. Który opis POPRAWNIE różnicuje oba typy?',
    options: [
      { id: 'A', text: 'DM1 (cukrzyca typu 1): autoimmunologiczne zniszczenie komórek β wysp Langerhansa → bezwzględny niedobór insuliny → IDDM (insulinozależna); markerы: autoprzeciwciała (anty-GAD65, anty-IA2, anty-insulinowe, anty-ZnT8); DM2: insulinooporność tkanek + względny niedobór insuliny (początkowo hiperinsulinemia, potem wyczerpanie β) → NIDDM; związana z otyłością, siedzącym trybem życia, genetyką (poligenetyczna)', is_correct: true },
      { id: 'B', text: 'DM1 jest spowodowana otyłością i insulinoopornością; DM2 jest chorobą autoimmunologiczną atakującą wyspy trzustki; leczenie DM1 to wyłącznie metformina (biguanid) podawana doustnie; DM2 wymaga insuliny od początku diagnozy; aceton w moczu (ketonuria) jest charakterystyczną cechą DM2', is_correct: false },
      { id: 'C', text: 'Kwasica ketonowa (DKA): charakterystyczna dla DM2; ketony powstają gdy glukozy jest zbyt dużo; β-hydroksymaślan i octan to główne ketonowe ciała; insulina hamuje lipolizę i ketogenezę, więc przy nadmiarze insuliny dochodzi do DKA; leczenie DKA polega na podaniu glukagonu', is_correct: false },
      { id: 'D', text: 'Kryterium rozpoznania cukrzycy: glikemia na czczo ≥ 180 mg/dl (10 mmol/l) lub glikemia przygodna ≥ 300 mg/dl; HbA1c (hemoglobina glikowana) mierzy glikemię z ostatnich 30 dni; cel terapeutyczny HbA1c u DM2 to < 10%; insulina może być podawana tylko dożylnie (iv)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'DM1 vs DM2: DM1 (T1DM): epidemiologia: ~10% cukrzycy; szczyt: dzieci/młodzież (5–15 lat), ale może w każdym wieku; PATOFIZJOLOGIA: TH1-mediated autoimmunoatak → destrukcja komórek β → insulina = 0; LADA (latent autoimmune diabetes in adults): wersja u dorosłych (wolniejsza); GENETYKA: HLA DR3-DQ2 + DR4-DQ8 (50% ryzyka); 12 genów (PTPN22, CTLA4 itd.); środowisko: enterowirusy?, higiena?; KLINICZNE: hiperglikemia + polidypsja/poliuria + utrata wagi; DKA (diabetic ketoacidosis): przy BRAKU insuliny → ↑glukagonu → lipoliza ↑↑ → FFA → β-oksydacja → acetylo-CoA ↑ → ketogeneza (aceton, acetooctan, β-hydroksymaślan) → kwasica; DM2 (T2DM): epidemiologia: ~90% cukrzycy; INSULINOOPORNOŚĆ: ↓wrażliwości GLUT4 na insulinę (mięśnie, adipo) → hiperinsulinemia kompensacyjna → stopniowe wyczerpanie β (lipotoksyczność, glukotoksyczność, stres ER, amyloid IAPP); LECZENIE DM1: insulina (niezbędna!) — basal-bolus (NPH/glargina + szybka analogowa); DM2: dieta + metformina (biguanid, 1. linia) + GLP-1RA / SGLT2i / DPP-4i / sulfonylomocznik / insulina; HbA1c: odzwierciedla glikemię 2–3 miesiące (życie erytrocytu 120 dni); cel DM2: <7% (53 mmol/mol); kryterium DM: FPG ≥ 126 mg/dl (7 mmol/l) lub 2h OGTT ≥ 200 mg/dl lub przygodna ≥ 200 + objawy lub HbA1c ≥ 6,5% (48 mmol/mol).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── TRAWIENIE BIAŁEK (3) ──────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.bialka, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących trawienia białek w żołądku:',
    options: [
      { id: 'A', text: 'Pepsyna: wydzielana jako nieaktywny pepsynogen przez komórki główne (chief cells) żołądka; aktywacja: pH < 5 (autokatalityczna) lub HCl → pepsynogen → pepsyna (usunięcie N-terminalnego peptydu hamującego); pepsyna jest endopeptydazą (aspartylową) trawiącą wiązania peptydowe po stronie hydrofobowych/aromatycznych aa (Phe, Tyr, Leu) → peptydy i polipeptydy; optymum pH 1,5–2,0; dezaktywacja w pH > 7', is_correct: true },
      { id: 'B', text: 'HCl (kwas solny) w żołądku: produkowany przez komórki okładzinowe (parietal cells) ściany żołądka; mechanizm: H⁺/K⁺-ATPaza (proton pump, OMP) → pompa protonowa → H⁺ do światła żołądka; stymulacja: gastryna (G komórki antralne → CCK-B receptor na okładzinowych), histamina (komórki ECL → H₂-receptor), ACh (CN X → M3R); inhibicja: somatostatyna (D komórki); PPI (inhibitory pompy protonowej: omeprazol) blokują H⁺/K⁺-ATPazę', is_correct: true },
      { id: 'C', text: 'Czynnik wewnętrzny Castle\'a (intrinsic factor, IF): produkowany przez komórki główne (chief cells) żołądka; wiąże witaminę B₁ (tiaminę) w żołądku; kompleks IF-tiamina wchłaniany jest w dwunastnicy; niedobór IF → megaloblastyczna anemia z niedoboru tiaminy → leczenie: suplementacja tiaminy doustnie', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: PEPSYNA: IZOFORMY: pepsyna A (główna), pepsyna C (gastrycyna), pepsynogen B; komórki główne (chief, zymogenic cells): w dnie żołądka; AKTYWACJA: pepsynogen (MW 42 kDa) → pepsyna (MW 35 kDa) przez usunięcie 44 aa N-końcowego propeptyd u; pH < 5 → zmiana konformacyjna → odsłonięcie aktywnego centrum (dwa Asp) → autokataliza (pepsyna aktywuje pepsynogen); SPECYFICZNOŚĆ: głównie wiązania Phe↓, Tyr↓, Leu↓, Trp↓ (duże hydrofobowe); endopeptydaza → duże peptydy; (aspartyl protease: kataliza przez dwa Asp 32 i 215); ROLA: ~10–20% trawienia białek; dezaktywacja w pH > 7 (duodenum); KLINIKA: reflux → pepsyna w przełyku → naruszenie śluzówki (przy pH < 4 → erozje). B — Prawda: KOMÓRKI OKŁADZINOWE (parietal): dno i trzon żołądka; H⁺/K⁺-ATPaza (OMP, pompa protonowa): na kanalikulach wydzielniczych; pompuje H⁺ do światła w zamian za K⁺; pH żołądka: ~1,5–2,0 (10⁶× gradient!); STYMULACJA: Gastryna: G-komórki antrum (po białkach, pH ↑, distensja) → gastryna → krew → CCK2R na OMP → ↑HCl; też bezpośrednio na komórki ECL → histamina → H2R → Gs → cAMP → PKA → ↑OMP; ACh: CN X (odruch wagalny: widok/zapach/myśl o jedzeniu + połykanie) → M3R → Gq → Ca²⁺ → ↑HCl; HAMOWANIE: somatostatyna (D-komórki antrum i dna): SST2/5R → Gi → ↓cAMP; nerwowy VIP; treść kwasna w antrum → ↓gastryny (ujemne sprzężenie); PPI: omeprazol, pantoprazol, ezomeprazol; inaktywowane w kanalikach (pH < 2 → aktywna forma) → nieodwracalne wiązanie z OMP; H2RA: ranitydyna, famotydyna → blokują H2R. C — Fałsz: IF Castle\'a: produkowany przez OKŁADZINOWE (parietal) komórki, NIE główne; wiąże witaminę B₁₂ (kobalaminę), NIE tiaminę; kompleks IF-B₁₂ wchłaniany w JELICIE KRĘTYM (końcowy odcinek) przez kubam/amnionless receptor; niedobór IF = choroba Addisona-Biermera (pernicious anemia) → megaloblastyczna anemia z niedoboru B₁₂ + neuropatia; leczenie: B₁₂ domięśniowo (po gastrektomii lub autoimmunologicznym zapaleniu żołądka).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bialka, question_type: 'single',
    question_text: 'Proteazy trzustkowe trawią białka w jelicie cienkim. Który opis POPRAWNIE wyjaśnia mechanizm ich aktywacji i działania?',
    options: [
      { id: 'A', text: 'Trypsyna, chymotrypsyna, elastaza wydzielane jako nieaktywne proenzymy (zymogeny): trypszynogen, chymotrypsynogen, proelastaza; enteropeptydaza (enterokinaza) na rąbku szczoteczkowym dwunastnicy aktywuje trypszynogen → trypsyna; trypsyna następnie aktywuje wszystkie pozostałe proenzymy (kaskada); trypsyna: tnie po Arg↓ i Lys↓; chymotrypsyna: Phe↓, Tyr↓, Trp↓; elastaza: małe aa (Ala, Gly, Val)', is_correct: true },
      { id: 'B', text: 'Trypsyna jest wydzielana w aktywnej formie przez trzustkę; aktywuje ją kwas solny w żołądku zanim dotrze do jelita; chymotrypsyna i elastaza nie wymagają aktywacji; inhibitory trypsyny (np. SPINK1) są produkowane przez wątrobę i chronią żołądek; enteropeptydaza jest enzymem żołądkowym', is_correct: false },
      { id: 'C', text: 'Karboksypeptydazy (A i B): produkowane przez śluzówkę jelita w aktywnej formie; są endopeptydazami (tną wewnątrz łańcucha); nie wymagają jonów cynku; karboksypeptydaza A trawi reszty Arg i Lys z C-końca; trypsynogen jest aktywowany przez somastatynę; kolagenaza trzustkowa trawi wszystkie białka pokarmowe', is_correct: false },
      { id: 'D', text: 'Aktywacja trypsyny jest procesem jednoetapowym bez kaskady; elastaza trawi wyłącznie elastynę naczyniową i nie bierze udziału w trawieniu pokarmów; pH optymum proteaz trzustkowych wynosi 2,0 (kwaśne) jak pH żołądka; produktem końcowym trawienia białek przez proteazy trzustkowe są wyłącznie wolne aminokwasy', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PROTEAZY TRZUSTKOWE — kaskada aktywacji: ZYMOGENY: trzustka wydziela wyłącznie proenzymy → ochrona przed samostrawieniem; ENTEROPEPTYDAZA (enterokinaza): transbłonowa serynowa proteaza na rąbku szczoteczkowym (SI duodenum); tnie trypszynogen (Asp4-Lys5) → oderwanie aktywacyjnego peptydu (VAL-DISP) → TRYPSYNA; TRYPSYNA → aktywuje: chymotrypsynogen → chymotrypsyna; proelastazę → elastaza; prokarboksypeptydazę A → karboksypeptydaza A (Zn²⁺, egzopeptydaza: tnie aromatyczne/alifatyczne aa z C-końca); prokarboksypeptydazę B → karboksypeptydaza B (Zn²⁺, egzopeptydaza: tnie Arg/Lys z C-końca); WŁAŚCIWOŚCI PROTEAZ: WSZYSTKIE to serynowe proteazy (prócz karboksypeptydaz); trypsyna: Asp-His-Ser triada katalityczna; specyficzność kieszeni wiążącej: trypsyna: ładunek ujemny (Asp189) → wiąże Arg⁺/Lys⁺; chymotrypsyna: hydrofobowa kieszeń → aromat; elastaza: małe boczne łańcuchy; pH opt: 7–8 (jelito neutralne/lekko zasadowe); INHIBITORY WEWNĘTRZNE: SPINK1 (Kazal-type serine protease inhibitor 1) = PSTI: w ziarnistościach zymogenowych → chroni komórki acynarne; mutacje SPINK1 → ↑ryzyko przewlekłego zapalenia trzustki; KLINIKA: OZT = wewnątrzkomórkowa aktywacja → samostrawienie; PRODUKTY TRAWIENIA: mieszanina oligopeptydów (di-, tri-peptydy) + wolnych aminokwasów; dalsze trawienie: peptydazy rąbka szczoteczkowego (aminopeptydazy, dipeptydazy) i cytoplazmatyczne.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.bialka, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują wchłanianie aminokwasów i peptydów w jelicie cienkim? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Di- i tripeptydy wchłaniane przez PepT1 (SLC15A1): symporter H⁺/peptyd na apikalnej błonie enterocytów; gradient H⁺ utrzymywany przez antyporter NHE3 (Na⁺/H⁺) i Na⁺/K⁺-ATPazę; PepT1 ma szeroką specyficzność substratową (wszystkie kombinacje dipeptydów); wewnątrz enterocytu di/tripeptydy hydrolizowane przez cytoplazmatyczne peptydazy → wolne aa → TRANSPORT do krwi przez różne transportery na błonie bazolateralnej', is_correct: true },
      { id: 'B', text: 'Wolne aminokwasy wchłaniane przez różne rodziny transporterów: SGLT1-podobne (Na⁺-zależne) dla aa obojętnych (B⁰AT1, SLC6A19 — substrat dla Hartnup disease); transportery kationowe dla Arg, Lys (CAT1, SLC7A1); transportery anionowe dla Glu, Asp; wspólny LAT1/4F2hc dla dużych neutralnych aa (system L, Na⁺-niezależny); w jelicie dominuje wchłanianie dipeptydów przez PepT1 (efektywniejsze niż aa)', is_correct: true },
      { id: 'C', text: 'Glutamina jest głównym paliwem energetycznym enterocytów jelita cienkiego (nie glukoza); metabolizowana do glutaminianu → α-ketoglutaran → TCA → ATP; enterocyty preferują glutaminę nad glukozą; dlatego żywienie dojelitowe (enteral) z glutaminą chroni śluzówkę jelita (znaczenie kliniczne przy sepsie, oparzeniach, chemioterapii)', is_correct: true },
      { id: 'D', text: 'Kwashiorkor (niedożywienie białkowe): dotyczy wyłącznie krajów bogatych; obrzęki w kwashiorkorze wynikają z ↑ciśnienia onkotycznego krwi (↑albumin); dzieci z kwashiorkorem mają podwyższony poziom albumin i prawidłowe enzymy trzustkowe; zaniknięcie kosmków jelita cienkiego w kwashiorkorze jest mitologią bez podstaw naukowych', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) PepT1 (peptide transporter 1): SLC15A1; elektrogenny symport H⁺ + di/tripeptyd (1:1 do 2:1); gradient H⁺ utrzymywany przez: apikalna NHE3 (Na⁺ wchodzi, H⁺ wychodzi do lumen → ↑H⁺ wewnątrz → gradient dla PepT1); Na⁺/K⁺-ATPaza basolateralna; SPECYFICZNOŚĆ: akceptuje prawie wszystkie kombinacje di- i tripeptydów (20² = 400 dipeptydów); FARMAKOLOGICZNE ZNACZENIE: PepT1 transportuje też β-laktamy, ACE inhibitory, valacyclovir (proleki!) → szybkie wchłanianie; wewnątrz komórki: dipeptydazy cytoplazmatyczne (DPP IV, DPPIII) + wewnątrz retikulum?; aa → basolateralna transportery (MeAIB dla małych, LAT2/4F2hc dla dużych, y+LAT dla kationowych). (B) TRANSPORTERY AA: B⁰AT1 (SLC6A19): apikalna; neutralne aa (Phe, Leu, Ile, Val, Met + Trp, Thr, Ser, Ala); wymaga angiotensiny (ACE2) jako chaperona na apikalnej; HARTNUP: mutacja B⁰AT1 → ↓Trp wchłanianie → ↓niacyna (Trp→Niacyna) → pellagra-like; SLC6A20 (IMINO): Pro, Hy-Pro; y+LAT1 (SLC7A7)/4F2hc: Lys, Arg, Orn; defekt → lizinuryczna nietolerancja białek (LPI); EFEKTYWNOŚĆ PepT1: di/tripeptyd wchłaniany 3–5× szybciej niż wolne aa per mol. (C) GLUTAMINA A ENTEROCYTY: 20–30% zużycia O₂ enterocytów = glutamina (Windmueller 1975); drogi: GLS (glutaminaza): Gln → Glu + NH₃; Glu → α-ketoglutaran → cykl Krebsa; produkcja Ala (cykl jelito-wątroba) i Cit (citrulina); KLINICZNE: critical illness → ↑zapotrzebowanie na Gln → ↑przepuszczalność jelita bez Gln; immunomodulacja (Gln → puryny → limfocyty); JEDNAK: duże RCT (REDOXS, MetaPlus) → suplementacja Gln w ICU: brak korzyści lub szkodliwa przy dawkach >0,5 g/kg; aktualne wytyczne ESPEN: ostrożność. (D) fałsz: KWASHIORKOR: kraje rozwijające się (sub-Saharan Africa, S. Asia); niedobór białka przy wystarczającej energii; PATOFIZJOLOGIA: ↓albumin (synteza w wątrobie wymaga aa) → ↓COP (ciśnienie onkotyczne) → obrzęki (nie hiperonikotyczne!); "dermatoza nakraplana", stłuszczenie wątroby (↓VLDL z powodu ↓apolipoproteiny B); ↓enzymy trawienne trzustki → wychudzone kosmki jelita; MARASMUS: niedobór kalorii + białka → wychudzenie bez obrzęków; kosmki jelita zanikają (enterocyty szybko dzielące się są wrażliwe na niedobór białka/Gln).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
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
  console.log(`Seeding batch 1 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
