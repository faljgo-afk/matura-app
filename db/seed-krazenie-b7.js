// Seed batch 7/7 (final) — Fizjologia człowieka: układ krążenia i oddechowy
// Homeostaza układu krążenia (2) + Hemostaza i krzepnięcie krwi (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175'

const S = {
  homeostaza: 'f79c7a2c-c03e-4ed5-89ca-b01dd0047399',
  hemostaza:  '708467bb-f048-4c9a-9369-0190e91c0b0c',
}

const questions = [

  // ── HOMEOSTAZA UKŁADU KRĄŻENIA (2) ───────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.homeostaza, question_type: 'single',
    question_text: 'Wstrząs hipowolemiczny powstaje w wyniku gwałtownej utraty objętości krwi krążącej. Który opis POPRAWNIE przedstawia patofizjologię i klasyfikację wstrząsu hipowolemicznego?',
    options: [
      { id: 'A', text: 'Klasy wg ATLS: I (<15% obj. krwi, ~750 ml; brak istotnych objawów), II (15–30%, ~750–1500 ml; tachykardia ≥100/min, zawężenie ciśnienia tętna), III (30–40%, ~1500–2000 ml; tachykardia + tachypnea + zmieniona świadomość + spadek BP), IV (>40%, >2000 ml; zagrożenie życia, bezmocz); kompensacja: ↑HR + ↑TPR + ↓GFR → oliguria + redystrybucja krwi do "core"', is_correct: true },
      { id: 'B', text: 'Wstrząs hipowolemiczny jest najlepiej leczony dużymi ilościami koloidów i albumin dożylnie; przetaczanie krwi jest przeciwwskazane w każdym typie wstrząsu; BP jest najwcześniejszym i najczulszym wskaźnikiem wstrząsu klasy I; tachykardia nie jest objawem wstrząsu hipowolemicznego', is_correct: false },
      { id: 'C', text: 'Zakwaszenie metaboliczne w wstrząsie jest objawem korzystnym świadczącym o prawidłowej kompensacji; mleczan > 10 mmol/l jest prawidłowy podczas wstrząsu; lizozym jest markerem hipoperfuzji tkankowej i jego wzrost jest pożądany; leczenie wstrząsu klasy I wymaga zawsze transfuzji 10 jednostek krwi', is_correct: false },
      { id: 'D', text: 'Ciśnienie tętna (pulse pressure = SBP-DBP) wzrasta we wstrząsie hipowolemicznym z powodu rozszerzenia naczyń; podczas wstrząsu serce zwalnia (bradykardia wazowagalna) jako główna kompensacja; wstrząs hipowolemiczny klasy IV charakteryzuje się stanem splątania i utratą przytomności ale prawidłową diurezą', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'WSTRZĄS HIPOWOLEMICZNY — klasyfikacja ATLS (Advanced Trauma Life Support): KLASA I: utrata < 750 ml (<15% EBV ~5000 ml); HR < 100; BP norm; PP norm; RR norm; GCS norm; KLASA II: 750–1500 ml (15–30%); HR > 100 (tachykardia!); BP norma lub ↓; PP ↓ (kluczowy wczesny znak: wazokonstrykcja ↑DBP → zawężenie PP przed spadkiem SBP); RR 20–30; lekkie lęki; KLASA III: 1500–2000 ml (30–40%); HR > 120; BP ↓ wyraźnie; RR 30–40; splątanie, pobudzenie; oliguria; KLASA IV: >2000 ml (>40%); HR > 140; BP ciężko ↓; bezmocz; zagrożenie życia, mogą być drgawki, utrata przytomności; KOMPENSACJA (odruch Bezolda-Jarischa przy małym wstrząsie → wazowagal; ale w rzeczywistym wstrząsie dominuje sympatykotonia): ↑HR (chronotropia przez β₁) + ↑TPR (wazokonstrykcja α₁) + ↑kontraktylność + ↑ADH + ↑RAAS → oliguria; MLECZAN: marker hipoperfuzji tkankowej; > 2 mmol/l = podwyższony; > 4 mmol/l = ciężki; clearance mleczanu (zmniejszenie po resuscytacji) = prognostyczny; LECZENIE: crystalloids (0,9% NaCl, Ringer mleczanowy) — 1:1 zamiana strat; przy III/IV klasy: masa erytrocytów (RBC) + FFP (osocze) + PLT w stosunku 1:1:1 (damage control resuscitation); vasopresory przy wstrząsie opornym na płyny.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.homeostaza, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących regulacji funkcji serca i naczyń w odpowiedzi na wysiłek fizyczny:',
    options: [
      { id: 'A', text: 'Frank-Starling podczas wysiłku: ↑powrót żylny (pompowanie mm. szkieletowych + ↑tp żylny) → ↑LVEDV (end-diastolic volume) → ↑długości sarkomeru → ↑wrażliwości troponiny C na Ca²⁺ + ↑overlap aktyny i miozyny → ↑siły skurczu → ↑SV; przy submaksymalnym wysiłku: SV może wzrosnąć do 130–200 ml (vs ~70 ml w spoczynku)', is_correct: true },
      { id: 'B', text: 'Redistributycja przepływu podczas wysiłku: mięśnie szkieletowe: spoczynkowy przepływ ~1 l/min → wysiłek max ~12–15 l/min; mózg: przepływ praktycznie niezmieniony (autoregulacja 50–150 mmHg); serce: ↑przepływ przez rozszerzenie naczyń wieńcowych (metaboliczne: adenozyna, K⁺, H⁺, hypoxia); śluz/nerki: ↓przepływ przez wazokonstrykcję α₁-adrenergiczną', is_correct: true },
      { id: 'C', text: 'Adaptacje serca sportowca (athlete\'s heart): ↑objętości ewnątrzsercowej (dilatacja) + ↑grubości ściany (hipertrofia koncentryczna lub ekscentryczna) → ↑SV → ↑VO₂ max; spoczynkowa bradykardia (<60/min, często <40/min u wyczynowców) wynika z ↑aktywności współczulnej i tachykardii paradoksalnej; EKG sportowca: odwrócony wzorzec z LBBB jako najczęstsza cecha', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: FRANK-STARLING (Starling\'s law of the heart): mechanizm inotropii zależnej od obciążenia wstępnego (preload); sarkomery: optymalna długość 2,0–2,2 μm; ↑długości → ↑wrażliwości TnC na Ca²⁺ (zmiana konformacyjna tropomyozyny); ↑cross-bridge overlap; wysiłek → pompowanie mm. szkieletowych (muscle pump) + ↑tonu żylnego (↑NA) + ↑ciśnienia ujemnego śródklatki podczas wdechu (respiratory pump) → ↑VR → ↑LVEDV → ↑SV; SV w spoczynku: ~70 ml; max wysiłek (wytrenowani): 170–210 ml; CO = HR × SV: spoczynek ~5 l/min; max (Contador, Armstrong?): ~40–50 l/min u wyczynowców!; B — Prawda: REDYSTRYBUCJA: spoczynek: mm. szkieletowe 15–20% CO = ~1 l/min; wysiłek max: 80–85% CO = 20–22 l/min; METABOLICZNE wazodylatatory w mm.: adenozyna (ATP → ADP → AMP → adenozyna), K⁺ (wychodzi przez K_ATP kanały), H⁺ (lactate), CO₂, NO; mózg: AUTOREGULACJA myogenic + metabolic; 50–150 mmHg → CBF stały ~750 ml/min; serce: podobna autoregulacja + metaboliczna (adenozyna DOMINUJE wazodylatacja wieńcowa podczas wysiłku); nerki/gut: α₁ wazokonstrykcja → ↓GFR; po wysiłku: przywrócenie; C — Fałsz: SERCE SPORTOWCA (athlete\'s heart, Morganroth 1975): BRADYKARDIA: wynika z ↑AKTYWNOŚCI PRZYWSPÓŁCZULNEJ (↑tonu wagalnego) + ↓automatyzmu SA + ↓wewnętrznej częstości; NIE z aktywności sympatycznej; EKG sportowca: sinusowa bradykardia, sinusowa arytmia oddechowa, blok AV I/II stopnia Wenckebach (wagalny); wczesna repolaryzacja, ↑QRS voltage; LBBB (left bundle branch block) jest PATOLOGICZNY i wymaga diagnostyki kardiomiopatii; adaptacje strukturalne: biegi/rower (wytrzymałość): dilatacja eccentric (↑EDV + umiarkowana ↑ grubości ściany); zapasy/podnoszenie (siłowe): koncentryczna hipertrofia (↑grubość ściany, noralne EDV); różnicowanie z HCM (kardiomiopatia przerostowa): stopień ↑grubości ściany, diastolic function, regresja po detreningu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── HEMOSTAZA I KRZEPNIĘCIE KRWI (5) ─────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.hemostaza, question_type: 'single',
    question_text: 'Hemostaza pierwotna to proces tworzenia czopu płytkowego. Który opis POPRAWNIE wyjaśnia etapy hemostazy pierwotnej i rolę płytek krwi?',
    options: [
      { id: 'A', text: 'Uszkodzenie śródbłonka → ekspozycja kolagenu i VWF (czynnik von Willebranda, subśródbłonkowy) → adhezja płytek przez receptor GPIb-IX-V (wiązanie VWF) i GPVI/Ia-IIa (kolagen) → aktywacja → zmiana kształtu (discoid → psuedopodia) → degranulacja (ADP, TXA₂, serotonina) → rekrutacja kolejnych płytek → agregacja przez GPIIb-IIIa (fibrinogen bridges) → czop płytkowy (biała skrzeplina)', is_correct: true },
      { id: 'B', text: 'Hemostaza pierwotna polega wyłącznie na skurczu naczynia; płytki nie biorą udziału w tym procesie; kolagen po uszkodzeniu naczynia odpycha płytki, zapobiegając ich adhezji; GPIIb-IIIa (integrin αIIbβ₃) jest receptorem dla trombiny i katalizuje jej enzymatyczną aktywność', is_correct: false },
      { id: 'C', text: 'VWF (czynnik von Willebranda) jest produkowany przez limfocyty T i działa tylko w żyłach; niedobór VWF (choroba von Willebranda) powoduje hemofiliję A (niedobór czynnika IX); GPIb-IX-V wiąże fibrinogen a nie VWF; TXA₂ (tromboksan A₂) jest inhibitorem agregacji płytek produkowanym przez aspiry', is_correct: false },
      { id: 'D', text: 'ADP z gęstych ziarnistości aktywuje receptor P2Y12 na sąsiednich płytkach → ↑cAMP → ↑aktywacja GPIIb-IIIa; aspiryna blokuje COX-2 w płytkach → ↑TXA₂ → ↑agregacji; klopidogrel jest antagonistą GP IIb-IIIa; prostacyklina (PGI₂) produkowana przez śródbłonek stymuluje agregację płytek przez ↓cAMP', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'HEMOSTAZA PIERWOTNA — etapy: (1) SKURCZ NACZYNIA: uszkodzenie → odruch nerwowy (ból) + lokalne mediatory (serotonina, TXA₂) → ↓przepływ krwi; (2) ADHEZJA: subśródbłonek zawiera kolagen (typ I, III) + VWF (Weibel-Palade bodies śródbłonka i α-ziarnistości płytek); VWF w warunkach ścinania "rozwijają się" i wiążą GPIb-IX-V (kompleks: GPIbα, GPIbβ, GPIX, GPV) na płytkach; kolagen: bezpośrednio przez GPVI (signaling) + GPIa-IIa (integrin α2β1, adhezja); (3) AKTYWACJA: GPVI → FcRγ → ITAM → PLCγ2 → ↑IP₃+DAG → ↑Ca²⁺ + PKC → zmiana kształtu (actyna/miozyna → pseudopodia) → degranulacja: α-ziarnistości (VWF, fibrinogen, P-selectin, czynnik V, PDGF), δ (dense granules): ADP, ATP, serotonina, Ca²⁺, polimery polifosfatanów; synteza TXA₂: PLCγ → DAG → AA (fosfolipaza A₂) → COX-1 → TXA₂ (silna agregacja + wazokonstrykcja); (4) AGREGACJA: GPIIb-IIIa (αIIbβ₃, integrin): zmiana konformacji po aktywacji (outside-in/inside-out signaling) → wiąże fibrinogen (mosty) → agregacja płytek; ADP: P2Y1 (Gq → ↑Ca²⁺) + P2Y12 (Gi → ↓cAMP → ↑aktywacji GPIIb-IIIa); FARMAKOLOGIA: aspiryna → nieodwracalna COX-1 blokada → ↓TXA₂ (na całe życie płytki ~7–10 dni); klopidogrel/tikagrelol/prasugrel → P2Y12 bloker; abciximab/tirofiban → GPIIb-IIIa bloker; PGI₂ (prostacyklina): śródbłonek → IP receptor → ↑cAMP → HAMUJE agregację (przeciwnie do TXA₂); ważna równowaga TXA₂/PGI₂.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hemostaza, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują kaskadę krzepnięcia (hemostazę wtórną)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Droga zewnętrzna (extrinsic, TF pathway): uszkodzenie tkanki → ekspozycja TF (tissue factor, CD142, tromboplastyna) na powierzchni fibroblastów i monocytów → TF wiąże czynnik VIIa → kompleks TF-VIIa → aktywacja czynnika X (i IX) → Xa + Va (prothrombinase complex na fosfolipidach płytkowych + Ca²⁺) → protrombina (II) → trombina (IIa)', is_correct: true },
      { id: 'B', text: 'Droga wewnętrzna (intrinsic, contact pathway): kontakt czynnika XII (Hagemana) z kolagenem/kalikreiną/HMWK → XIIa → XI → XIa → IX + VIIIa (tenase complex) → X → Xa; niedobór czynnika XII paradoksalnie powoduje skłonność do zakrzepicy, a nie krwawień (poniewa XII hamuje fibrynolizy); hemofilia B = niedobór czynnika IX (Christmas disease)', is_correct: true },
      { id: 'C', text: 'Trombina (IIa) jest kluczowym enzymem kaskady: aktywuje fibrynogen (I) → fibryna (monomery) → czynnik XIIIa (transglutaminaza) → sieciuje fibrynę → nierozpuszczalna skrzeplina; trombina aktywuje też: V, VIII, XI, XIII, PAR1 na płytkach (silna agregacja) i PAR3 na śródbłonku (produkcja TM, tPA)', is_correct: true },
      { id: 'D', text: 'Witamina K jest niezbędna do syntezy czynników: II, V, VII, IX, X oraz białka C i białka S; działa jako kofaktor gamma-karboksylazy → karboksylacja reszt Glu (kwas glutaminowy) → Gla (kwas gamma-karboksyglutaminowy) → wiązanie Ca²⁺ → wiązanie z fosfolipidami błonowymi; warfaryna hamuje cyklizację witaminy K1 (epoxide reductase, VKORC1)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) DROGA ZEWNĘTRZNA: TF = integralne białko błonowe (3 domeny: ekstra, trans, intra); constitutive: fibroblasty, perisc. SM komórki; inducible: monocyty/makrofagi (przy zapaleniu przez LPS, TNF, IL-1); VII: proenzym, krąży we krwi (unikalne — inne czynniki nie); TF+VII → TF-VII → autodaktywacja (small amount VIIa → TF-VIIa); TF-VIIa → Xa (direct) + IXa (indirect → tenase → Xa); "cell-based model" hemostazy (Hoffman-Monroe 2001): Initiation (TF+VII), Amplification (trombina → V, VIII, XI), Propagation (tenase + protrombinaza na płytkach). (B) DROGA WEWNĘTRZNA: XII-"contact" factors: XII, XI, PK (prekallikrein), HMWK; XII deficiency → BRAK krwawień (Hageman himself died from PE!); ↑zakrzepica przez ↓fibrynolisis (XII aktywuje tPA/urokinazę?; kontrowersyjne); niedobory XI → umiarkowane krwawienia; niedobory IX: HEMOFILIA B (Christmas disease, ~1/25,000); factor IX → Xase (tenase) complex: IXa + VIIIa + Ca²⁺ + PF3 (fosfolipidy płytkowe) → X → Xa; hemofilia A = VIII; hemofilia B = IX. (C) TROMBINA (MW 37 kDa, serine protease): fibrynogen: łańcuchy Aα, Bβ, γ (heterotrimer); trombina → cięcie Arg-Gly w Aα i Bβ → fibrynopeptydy A i B (diagnostyczne markery!) → monomery fibryny → samopolimeryzacja; XIIIa: czynnik XIII (transglutaminaza) aktywowany przez trombinę + Ca²⁺ → wiązania kowalencyjne między łańcuchami γ i α fibryny → skrzeplina stabilna na plazminy?... nie: plazmin MOŻE ją degradować, ale wolniej; PAR1 (protease-activated receptor-1): trombina tnie N-terminal → eksponuje "tethered ligand" → Gq → ↑Ca²⁺ → aktywacja płytek; PAR3: śródbłonek. (D) fałsz: WITAMINA K: niezbędna: II, VII, IX, X + PC, PS, PZ (białko Z); NIE V (V nie jest wit. K-zależny!); gamma-karboksylacja: 4–6 reszt Glu → Gla w obrębie Gla domain; Ca²⁺ → zmiana konformacji → wiązanie z PF (fosfolipidy błonowe zawierające PS); Gla domains: bez karboksylacji czynniki są PIVKA (proteins induced by vitamin K absence or antagonism); WARFARYNA: hamuje VKORC1 (vitamin K epoxide reductase complex 1) → brak regeneracji KH₂ z KO (KH₂ → KO przy karboksylacji) → ↓aktywnych cz. II, VII, IX, X; INR (International Normalized Ratio) = PT_pacjent/PT_control do potęgi ISI; monitorowanie warfaryny.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hemostaza, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących fibrynolizy i zaburzeń hemostazy:',
    options: [
      { id: 'A', text: 'Fibrynoliza: tPA (tissue plasminogen activator) i uPA (urokinase PA) przekształcają plazminogen (produkowany w wątrobie) → plazminę; plazmina rozkłada fibrynę → FDP (fibrin degradation products), w tym D-dimer (fragment z sieciowanej fibryny); D-dimer ↑ = marker aktywnej fibrynolizy/zakrzepicy → stosowany w diagnostyce DVT, PE, DIC', is_correct: true },
      { id: 'B', text: 'DIC (rozsiane wykrzepianie wewnątrznaczyniowe): jednoczesna aktywacja krzepnięcia i fibrynolizy → zużycie czynników krzepnięcia (koagulopatia konsumpcyjna) + płytek → krwawienia + mikroskrzepliny → niedokrwienie narządów (nerki, mózg); laboratoryjnie: ↑PT, ↑aPTT, ↑D-dimer, ↓fibrynogen, ↓PLT; przyczyny: sepsa, urazy, powikłania położnicze, nowotwory', is_correct: true },
      { id: 'C', text: 'Hemofilia A (niedobór czynnika VIII): X-linked recessive (gen F8 na Xq28) → głównie mężczyźni chorzy; poziomy: ciężka (<1% F8), umiarkowana (1–5%), łagodna (5–40%); objawy: hemarthrosis (krwawienie do stawów) → artropatia; leczenie: koncentrat F VIII lub desmopresyna (↑F VIII z magazynów śródbłonka) przy łagodnej postaci; inhibitory F VIII (autoprzeciwciała) u 30% ciężkiej postaci', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: FIBRYNOLIZA: naturalny mechanizm ograniczający krzepnięcie; PLAZMINOGEN: syntetyzowany przez wątrobę; tPA: produkowany przez śródbłonek (stymulowany przez fibrynę → tPA ma 1000× wyższe powinowactwo do plazminogenu gdy oba są związane z fibryną — celowana fibrynoliza); uPA: produkowany przez nerki + makrofagi; aPα2 (α₂-antyplazmina) hamuje wolną plazminę; FDP: wczesne X,Y,D,E fragmenty; D-dimer: specyficznie z SIECIOWANEJ fibryny (tylko cross-linked) → marker zakrzepu; DIAGNOSTYKA: DVT/PE: wrażliwość D-dimeru ~95% ale specyficzność niska ~50%; wartość ujemna predykcyjna wysoka → "rule out" przy niskim pretest probability; tPA rekombinant: rtPA (alteplase, tenecteplase) = trombolityki przy zawale STEMI, udaru (4,5h okno), masywnej PE. B — Prawda: DIC: sepsa: LPS + TNF + IL-1 → TF na monocytach/makrofagach + uszkodzenie śródbłonka → masywna aktywacja TF-drogi → TROMBINA → fibryna + aktywacja płytek → mikroskrzepliny (nerki: ostra nerkowa AKI; mózg: encefalopatia; nadnercza: Waterhouse-Friderichsen syndrome przy meningokokcemii) + zużycie cz. krzepnięcia → PAT krwawień; fibrynolizy wtórna: ↑plazminy → ↑FDP/D-dimer; LAB: PT ↑, aPTT ↑, PLT ↓, fibrynogen ↓ (<1g/l ciężki), D-dimer ↑↑; LECZENIE DIC: leczyć przyczynę (antybiotyki przy sepsie)! + FFP (cz. krzepnięcia) + krio (fibrynogen, cz. VIII, VWF) + PLT; heparyna kontrowersyjna (tylko przy zakrzepicy dominującej). C — Prawda: HEMOFILIA A: gen F8 (2.4 Mb, największy gen ludzki); mutacje: inversja intronu 22 (45%); intron 1 inversja (5%); nonsense, missense, del; ciężka: hemarthrosis, hematomy mięśniowe, samoistne krwawienia; DESMOPRESYNA (DDAVP): V2R → ↑cAMP → ↑egzocytoza VWF z Weibel-Palade bodies + towarzyszy mu F VIII → ↑F VIII 3-5× przy łagodnej HemA; INHIBITORY: u 30% ciężkiej HemA (alloimmunizacja po ekspozycji na F VIII) → leczenie: bypassing agents: rFVIIa (NovoSeven) lub FEIBA (F VIII Inhibitor Bypass Activity = pCC); emicizumab (bispecific Ab F IXa+X, "Hemlibra").',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hemostaza, question_type: 'single',
    question_text: 'Antykoagulacja jest niezbędna w wielu sytuacjach klinicznych. Który opis POPRAWNIE przedstawia mechanizmy działania leków przeciwzakrzepowych?',
    options: [
      { id: 'A', text: 'Heparyna niefrakcjonowana (UFH): wiąże antytrombinę III (AT III) → zmiana konformacji AT III → ↑10 000× szybkości hamowania trombiny (IIa) + Xa (i XIa, IXa); do monitorowania: aPTT (cel: 2–3× norma); heparyna drobnocząsteczkowa (LMWH, np. enoksaparyna): hamuje głównie Xa (mniejszy wpływ na IIa); monitorowanie: anty-Xa; nie przechodzi przez łożysko; antagonizacja: protamina (neutralizuje UFH całkowicie, LMWH ~60%)', is_correct: true },
      { id: 'B', text: 'Warfaryna działa przez bezpośrednie wiązanie trombiny i inaktywację czynnika Xa; INR jest stosowany do monitorowania heparyny; warfaryna ma szybki onset działania (godziny) i nie wymaga bridgingingu; witamina K jest podawana przy przedawkowaniu i jest antidotum dla LMWH', is_correct: false },
      { id: 'C', text: 'Dabigatran: bezpośredni inhibitor Xa (faktor Xa); rywaroksaban: bezpośredni inhibitor trombiny (IIa); oba wymagają monitorowania INR; antidotum dla dabigatranu to andeksanet alfa (Ondexxya); nie interagują z żywnością ani innymi lekami', is_correct: false },
      { id: 'D', text: 'HIT (Heparin-induced thrombocytopenia): spowodowana bezpośrednią cytotoksycznością heparyny na megakariocyty; PLT spada do 0 w ciągu 24 h; leczenie: podanie większej dawki heparyny; diagnoza: bezpośredni test Coombsa; typ I HIT jest groźny i wymaga natychmiastowego odstawienia', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'HEPARYNA UFH: glikozaminoglikan (MW 3–30 kDa, mieszanina); PENTASACHARYD: kluczowa sekwencja wiążąca AT III (antytrombina III, serpin SERPINC1); UFH-AT III: hamuje IIa (trombina), Xa, IXa, XIa, XIIa; do hamowania IIa potrzeba minimum 18-sacharydowego łańcucha (AT III + trombina muszą być oba związane z heparyną); dla Xa: tylko ATIII musi być związana (krótkie łańcuchy wystarczą); dlatego LMWH (MW 4–6 kDa, 4–6 saccharidów): GŁÓWNIE anty-Xa, mało anty-IIa; MONITOROWANIE: UFH → aPTT (droga wewnętrzna); LMWH → aPTT nieużyteczne, anty-Xa activity (peak 4h po dawce); PROTAMINA: białko z łososia (27 kDa, silnie dodatnie) → elektrostatyczne wiązanie z ujemną heparyną; 1 mg protaminy neutralizuje 100 U UFH; dla enoksaparyny: 1 mg/1 mg → ale ~60% neutralizacji anti-Xa; LMWH: nie przechodzi przez łożysko → bezpieczna w ciąży (warfaryna przechodzi → teratogenność); DOAK (bezpośrednie doustne antykoagulant): dabigatran (PRADAXA): bezpośredni inhibitor TROMBINY (IIa); riwaroksaban (Xarelto), apiksaban, edoksaban: bezpośrednie inhibitory Xa; antidotum: idarucizumab (dabigatran → "Praxbind"); andeksanet alfa (Xa inhibitorów → "Ondexxya"); HIT: typ I: nieimmunologiczny, pierwsze 1–4 dni, PLT ↓ ale >100k, łagodny, spontanicznie ustępuje; typ II: immunologiczny (IgG anty-PF4-heparyna → FcγRIIa na płytkach → aktywacja → PARADOKSALNA ZAKRZEPICA + ↓PLT); diagnoza: 4T score + ELISA (anty-PF4) + serotonine release assay; leczenie: NATYCHMIAST odstawienie heparyny + alternatywny antykoagulant (argatroban, fondaparynuks, biwalirudyna); NIE heparyna!; NIE transfuzja PLT (paradoksalnie ↑zakrzepicę).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.hemostaza, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują trombofilie (skłonność do zakrzepicy)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Czynnik V Leiden (FVL): mutacja R506Q genu F5 → oporność czynnika V na inaktywację przez aktywowane białko C (APC); APC normalnie inaktywuje Va i VIIIa (cięcie Arg506 i Arg306 w Va); FVL → brak cięcia w R506 → Va aktywny dłużej → ↑trombiny → zakrzepica; najbardziej powszechna genetyczna trombofilii u Europejczyków (3–8% populacji, heterozygoty: ↑5× DVT, homozygoty: ↑80×)', is_correct: true },
      { id: 'B', text: 'Mutacja G20210A protrombiny (PTM): mutacja w regionie 3\'UTR genu F2 → ↑mRNA stabilność → ↑protrombiny (czynnik II) w osoczu o ~30% → ↑trombiny → ↑DVT/PE; 2–5% Europejczyków; diagnoza: PCR/genotyping (nie można diagnostykować poziomem protrombiny gdy pacjent jest na antykoagulancie)', is_correct: true },
      { id: 'C', text: 'Antykoagulacyjne białko C i S: białko C (PC): witamina K-zależna, aktywowane przez trombinę związaną z trombomoduliną (TM) na śródbłonku; APC + białko S (kofaktor) → inaktywacja Va + VIIIa; niedobór PC lub PS (heterozygoty) → ↑ryzyko DVT ~10×; purpura fulminans (martwica skóry u noworodków): homozygotyczny niedobór PC → zakrzepica mikronaczyniowa', is_correct: true },
      { id: 'D', text: 'Antytrombina III (AT III) jest aktywatorem krzepnięcia — jej niedobór powoduje krwawienia, a nadmiar powoduje zakrzepicę; heparyna hamuje AT III, dlatego nie można stosować heparyny przy niedoborze AT III; zespół antyfosfolipidowy (APS) jest monogenową chorobą genetyczną powodującą wyłącznie żylną zakrzepicę i nie jest związany z poronieniami', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) CZYNNIK V LEIDEN (Leiden, 1994): najczęstsza genetyczna trombofilii (po rutynowym badaniu u pacjentów z DVT/PE!); mechanizm: APC (activated protein C) = naturalny antykoagulant; normalnie: trombomodulina (TM, śródbłonek) + trombina → kompleks TM-trombina → aktywacja białka C → APC + białko S → proteoliza Va (Arg506 > Arg306 > Arg679) + VIIIa; FVL (R506Q): APC nie może ciąć R506Q → Va aktywny 10× dłużej → nadmiar trombiny; test: APC resistance test (aPTT + APC → normalnie ↑aPTT, przy FVL ≈ bez zmiany); GENETYKA: A (Adenina) zamiast G w pozycji 1691 (missense) → Arg→Gln; heterozygoty: 5–10× ↑DVT; homozygoty: 50–100× ↑DVT; w ciąży + OCP + FVL: ↑ryzyko 35×. (B) PROTROMBINA G20210A: G→A w pozycji 20210 (3\'UTR); ↑mRNA stability → ↑protrombiny ≈ 30% wyższe niż norma; ~2–4% populacji europejskiej; diagnoza: PCR; ↑DVT 2–5×; oba FVL + G20210A razem → synergizm; kliniczne wskazanie do badania: DVT < 50 lat, rodzinne DVT, zakrzepica w nietypowym miejscu (krezka, wątroba, mózg), nawracające poronienia (szczeg. II trymestr). (C) BIAŁKO C i S: Gla-domain (vit K-dependent): PC zsyntetyzowane w wątrobie; EPCR (endothelial protein C receptor) + TM → aktywacja PC; APC + PS (niesprzężone) na fosfolipidach → cięcie Va Arg506+Arg306 + VIIIa Arg336+Arg562; NIEDOBÓR PC: typ I (↓ilości) typ II (↓aktywności); heterozygota: DVT ~10×; homozygota: purpura fulminans noworodkowa (zakrzepica + martwica skóry zaraz po urodzeniu) → fatal bez FFP/koncentrat PC; warfaryna u chorych z niedoborem PC: UWAGA na skin necrosis (warfaryna szybko ↓PC t₁/₂ 8h zanim ↓czynniki zakrzepowe → paradoks zakrzepowy); dlatego bridging heparyną ZAWSZE. (D) fałsz: AT III = antykoagulant inhibujący trombinę i Xa; niedobór → ↑zakrzepicy (nie krwawień); HEPARYNA przy niedoborze AT III: heparyna działa PRZEZ AT III (↑aktywności AT III) → przy ciężkim niedoborze AT III heparyna działa gorzej; leczenie: koncentrat AT III + LMWH; APS (antiphospholipid syndrome): nabyta autoimmunologiczna trombofilii; antyfosfolipidowe Ab: antykoagulant toczniowy (LA) + anty-β₂-GPI + antykardiolipinowe; objawy: żylna DVT/PE + TĘTNICZA (udar, zawał!) + powikłania położnicze (poronienia zwłaszcza II i III trymestr, przedrzucawkowe) + małopłytkowość; diagnoza: LA + aCL + aβ₂GPI w 2 pomiarach ≥12 tygodni; leczenie: warfaryna (INR 2–3); aspiryna w ciąży + LMWH; CAPS (catastrophic APS): rzadki, <1% APS, mikroangiopatia wielonarządowa śmiertelność 50%.',
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
  console.log(`Seeding batch 7 — FINAL (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done. Fizjologia krążenia i oddechowego: 67/67 complete.')
}
main().catch(err => { console.error(err); process.exit(1) })
