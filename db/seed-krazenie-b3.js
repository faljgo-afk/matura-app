// Seed batch 3/7 — Fizjologia człowieka: układ krążenia i oddechowy
// Krew — skład i funkcje (1) + Układ limfatyczny i odporność (7) + Mechanika oddychania (2)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175'

const S = {
  krew:        '71faabd8-5948-411f-95a1-1917b2fea837',
  limfatyczny: '3c0d3a02-b541-4606-8275-35bb047dbb5b',
  mechanika:   'b0ec2c4f-0199-4d4d-892a-be6b23195762',
}

const questions = [

  // ── KREW — SKŁAD I FUNKCJE (1) ────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.krew, question_type: 'single',
    question_text: 'Płytki krwi (trombocyty) pełnią kluczową rolę w hemostazie pierwotnej. Które stwierdzenie POPRAWNIE opisuje ich właściwości i aktywację?',
    options: [
      { id: 'A', text: 'Płytki krwi: fragmenty cytoplazmy megakariocytów (bez jądra); liczba 150 000–400 000/μl; życie ~7–10 dni; po uszkodzeniu naczynia → adhezja (vWF + GPIb) → aktywacja → degranulacja (ADP, TXA₂, serotonina, Ca²⁺) → agregacja (fibrynogen + GPIIb/IIIa) → czop hemostatyczny', is_correct: true },
      { id: 'B', text: 'Płytki krwi to dojrzałe komórki z jądrem i mitochondriami; są produkowane w grasicy; ich główną funkcją jest transport O₂; liczba prawidłowa: 10–50/μl; uszkodzenie naczynia hamuje aktywność płytek', is_correct: false },
      { id: 'C', text: 'Aspiryna (kwas acetylosalicylowy) aktywuje płytki przez blokowanie receptora GPIIb/IIIa → zwiększa agregację → lek stosowany w nadkrzepliwości; klopidogrel blokuje cyklooksygenazę COX-1 → hamuje TXA₂ → stosowany jako przeciwzakrzepowy', is_correct: false },
      { id: 'D', text: 'Trombocytopenia (niedobór płytek < 150 000/μl) jest zawsze bezobjawowa; płytki nie mają związku z krwawieniem; niedobór płytek nie zwiększa ryzyka wylewów; trombopoetyna jest produkowana przez serce i reguluje hematokryt', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PŁYTKI KRWI (thrombocytes): fragmenty oderwane od megakariocytów w szpiku kostnym; brak jądra, ale zawierają: RNA, mitochondria, PE, lipidy błony (źródło AA dla TXA₂); ziarnistości: α (vWF, P-selektyna, fibrynogen, czynnik V, PAI-1) i dense (δ, gęste: ADP, ATP, serotonina, Ca²⁺); HEMOSTAZA PIERWOTNA (< 3 min): (1) zwężenie naczynia (spazm): noradrenalina, serotonina, TXA₂; (2) adhezja: kollagen → vWF (multimer) → receptor GPIb (von Willebrand factor disease: brak vWF lub GPIb → Bernard-Soulier syndrome); (3) aktywacja: ADP (receptory P2Y₁₂ → klopidogrel! i P2Y₁) + TXA₂ (COX-1 → ASPIRYNA! blokuje COX-1 nieodwracalnie → ↓TXA₂) + trombina; (4) aggregacja: GPIIb/IIIa (integryna αIIbβ₃) + fibrynogen lub vWF → most między płytkami; lek: abcyksimab, tirofiban (anti-GPIIb/IIIa); TROMBOCYTOPENIA: < 100 000 → ryzyko krwawień; < 20 000 → spontaniczne wylewy; ITP (immune thrombocytopenic purpura): autoprzeciwciała anty-GPIIb/IIIa; TROMBOPOETYNA (TPO): synteza wątroba + nerki; reguluje liczbę płytek.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── UKŁAD LIMFATYCZNY I ODPORNOŚĆ (7) ────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.limfatyczny, question_type: 'single',
    question_text: 'Odporność wrodzona (nieswoista) i nabyta (swoista) to dwa filary układu odpornościowego. Które zestawienie POPRAWNIE opisuje ich charakterystyczne cechy?',
    options: [
      { id: 'A', text: 'Odporność wrodzona: szybka (minuty–godziny), niespecyficzna, bez pamięci immunologicznej; komórki: neutrofile, makrofagi, komórki NK, dendrytyczne; receptory PRR (pattern recognition receptors) rozpoznają PAMP (pathogen-associated molecular patterns), np. TLR-4 → LPS; odporność nabyta: wolna (dni–tygodnie), specyficzna, z pamięcią; limfocyty T i B; receptor klonotypowy (TCR, BCR)', is_correct: true },
      { id: 'B', text: 'Odporność wrodzona: wolna (miesiące), specyficzna dla każdego patogenu, z długą pamięcią immunologiczną; komórki: wyłącznie limfocyty B; odporność nabyta: szybka (sekundy), niespecyficzna, bez pamięci; komórki: neutrofile; brak różnicy między odpornością wrodzoną a nabytą pod względem specyficzności', is_correct: false },
      { id: 'C', text: 'Interferony (IFN-α, IFN-β) są produkowane przez limfocyty T zabójcze (cytotoksyczne CTL) wyłącznie po szczepieniu; działają na komórkę produkującą — nie sygnalizują sąsiednim komórkom; główna rola interferonów to aktywacja płytek krwi i krzepnięcie', is_correct: false },
      { id: 'D', text: 'Komórki NK (natural killer): należą do odporności nabytej; wymagają wcześniejszego kontaktu z antygenem i sensytyzacji przez 14 dni; ich zabijanie zależy od rozpoznania MHC I przez receptor aktywujący; brak MHC I na komórkach nowotworowych chroni je przed NK', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ODPORNOŚĆ WRODZONA (innate immunity): cechy: szybka, niespecyficzna, bez pamięci; RECEPTORY PRR: TLR (Toll-like receptors): TLR-4 (LPS Gram−), TLR-2 (pepydoglikan Gram+), TLR-3 (dsRNA wirusowy), TLR-7/8 (ssRNA), TLR-9 (CpG DNA); NLR (NOD-like): NOD1/2 → inflammasom NLRP3 → IL-1β, IL-18; RLR (RIG-I): dsRNA cytoplazmatyczny; PAMP: LPS, peptydoglikan, mannan, flagellin, dsRNA, CpG; DAMP: HMGB1, ATP, dsDNA (danger signals własnego organizmu); komórki: neutrofile (pierwsza fala), makrofagi (tkankowe), komórki tuczne (mast cells: TLR + FcεRI), eozynofile, bazofile, NK, komórki dendrytyczne (DC: łącznik z nabytą); ODPORNOŚĆ NABYTA (adaptive): limfocyty B (BCR = immunoglobulina) → przeciwciała; limfocyty T: TCR αβ (MHC-zależny) lub γδ (niezależny); CD4+ Th (pomocnicze): Th1 (IFN-γ, cytotoksyczność), Th2 (IL-4/5/13, alergia), Th17 (IL-17, bakterie+grzyby), Treg (FoxP3, tolerancja); CD8+ CTL → perforyna/granzym → apoptoza celu; NK: wrodzone (brak TCR/BCR), zabijają przez "missing self" — brak MHC I na celu aktywuje KIR/NKG2D → zabijanie (nie "chroni" ich!); interferony (IFN-α/β): wrodzone → sygnalizacja paraokrynna do sąsiednich komórek → antywirusowa ochrona (↑MHC I, ↑RNazy, ↑PKR).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.limfatyczny, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących przeciwciał (immunoglobulin):',
    options: [
      { id: 'A', text: 'Przeciwciało (immunoglobulina, Ig) zbudowane jest z 4 łańcuchów polipeptydowych: 2 ciężkich (H) i 2 lekkich (L), połączonych mostkami disiarczkowymi; każdy łańcuch ma region zmienny (V, antigen-binding) i stały (C); fragment Fab (antigen binding) wiąże antygen; fragment Fc (crystallizable) wiąże receptory FcR na komórkach immunologicznych i aktywuje dopełniacz', is_correct: true },
      { id: 'B', text: 'IgM: pentamer (5 monomerów połączonych łańcuchem J); pierwsza klasa wytwarzana po kontakcie z antygenem (odpowiedź pierwotna); 10 miejsc wiążących antygen; skutecznie aktywuje dopełniacz (droga klasyczna); nie przechodzi przez łożysko (zbyt duży); IgG: monomer; dominuje w odpowiedzi wtórnej; 4 podklasy; przechodzi przez łożysko (IgG1, IgG3 → odporność bierna noworodka)', is_correct: true },
      { id: 'C', text: 'IgE: występuje w bardzo wysokim stężeniu w surowicy (> 10 mg/ml); jest odpowiedzialna za odporność humoralną przeciwko bakteriom; jej receptor FcεRI znajduje się na erytrocytach; wiązanie IgE z FcεRI powoduje bezpośrednie zabijanie bakterii bez udziału mastocytów i bazofilów', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: STRUKTURA Ig (Porter 1959, Nobel 1972): 2H + 2L; MW IgG: ~150 kDa; łańcuchy H: γ (IgG), α (IgA), μ (IgM), δ (IgD), ε (IgE); łańcuchy L: κ lub λ; V-region: 3 CDR (complementarity-determining regions) = paratope; C-region: efektorowy; papaina → Fab + Fc; pepsin → F(ab\')₂ + pFc; Fab: wiąże antygen; Fc: FcγR (makrofagi, NK), FcεRI (mastocyty), dopełniacz C1q; koniugaty: ADC (antibody-drug conjugate) w onkologii. B — Prawda: KLASY Ig: IgM (pentamer, 900 kDa, 10 miejsc): izohemaglutyniny ABO; pierwsza odpowiedź (IgM → IgG switch po pomocy Th2 + CD40L/CD40); IgG (~150 kDa, monomer): 4 podklasy (IgG1 dominuje); główna klasa wtórna; FcRn → transfer przez łożysko → odporność noworodka do 6 mies.; IgA (dimer + łańcuch sekrecyjny J): mleko matki, ślina, łzy, śluz; ochrona błon śluzowych; IgD: BCR na naiwnych B (marker różnicowania); IgE: bardzo niskie stężenie (< 1 mg/ml); FcεRI na mastocytach i bazofilach; alergia I° (natychmiastowa): sensytyzacja → IgE → FcεRI → ponowny kontakt z alergenem → degranulacja → histamina, leukotrieny, prostaglandyny; alergia III°: IgE + pasożyty. C — Fałsz: IgE: NAJNIŻSZE stężenie surowicze ze wszystkich klas (< 0,001 mg/ml, << 10 mg/ml); FcεRI na MASTOCYTACH i BAZOFILACH (nie erytrocytach); sensytyzacja: B → IgE → mastocyty/bazofile wyeksponowane na antygen → degranulacja → histamina, tryptaza, PGD₂, leukotrieny → reakcja alergiczna; BRAK bezpośredniego zabijania bakterii przez IgE.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.limfatyczny, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują mechanizmy odporności swoistej i prezentacji antygenów? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Komórki prezentujące antygen (APC: dendrytyczne, makrofagi, limfocyty B) prezentują peptydy antygenowe w kontekście MHC: MHC klasy I (na wszystkich jądrzastych komórkach) prezentuje peptydy wewnątrzkomórkowe (endogenne: wirusy, nowotwory) → limfocyty T CD8⁺ (cytotoksyczne); MHC II (tylko APC) → peptydy zewnątrzkomórkowe (egzogenne) → limfocyty T CD4⁺ (pomocnicze)', is_correct: true },
      { id: 'B', text: 'Aktywacja limfocytu T naiwnego wymaga dwóch sygnałów: sygnał 1 = TCR/CD3 + peptyd-MHC; sygnał 2 = kostymulacja CD28 (T) + B7/CD80/CD86 (APC); bez sygnału 2 → anergja T-komórkowa (tolerancja); aktywowany Th → IL-2 (proliferacja), IFN-γ, TNF-α, IL-4/5 (zależnie od podtypu Th)', is_correct: true },
      { id: 'C', text: 'Pamięć immunologiczna: po wygaśnięciu odpowiedzi pierwotnej przeżywają komórki pamięci T (centralna i efektorowa) i B (komórki pamięci B → szybka produkcja Ab po ponownym kontakcie); odpowiedź wtórna: szybsza, silniejsza, wyższy poziom Ab, wyższa specyficzność (affinity maturation w centrum rozrodczym); szczepionki opierają się właśnie na tym mechanizmie', is_correct: true },
      { id: 'D', text: 'Tolerancja immunologiczna: selekcja negatywna w grasicy usuwa limfocyty T reaktywne na białka własne; gen AIRE (autoimmune regulator) w komórkach nabłonkowych grasicy: ekspresja "ekto-powych" białek własnych (insuliny, tyreoglobuliny) → prezentacja → apoptoza auto-reaktywnych T; brak AIRE → APS-1 (autoimmune polyendocrinopathy) z bielactwem, niedoczynnością nadnerczy, kandydozą', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C', 'D'],
    explanation: '(A) MHC (Major Histocompatibility Complex = HLA u człowieka): MHC I: HLA-A, B, C; heterodimer α + β₂-mikroglobulina; peptyd 8–10 aa; TAP transporter → peptyd z cytoplazmy; CD8 wiąże α₃ MHC I → "CD8-restrykcja"; MHC II: HLA-DR, DQ, DP; heterodimer α+β; peptyd 13–25 aa; endosom/lizosom → DM chaperon; CD4 wiąże β₂ MHC II → "CD4-restrykcja"; cross-presentation: DC prezentuje zewnętrzne antygeny na MHC I (retrotraslokacja) → priming CTL. (B) AKTYWACJA T: 2-sygnałowy model (Jenkins & Schwartz, Bretscher & Cohn): S1 = TCR/CD3 + pMHC → ZAP-70 → PLCγ → Ca²⁺/calcineurin → NFAT; S2 = CD28 + B7 → PI3K → NFκB + AP-1; brak S2: CTLA-4 (na T) > CD28 → anergja; ipilimumab/tremelimumab: anti-CTLA4 Ab → znosi hamowanie → PD-1/PD-L1: checkpoint inhibitors; pembrolizumab, nivolumab. (C) PAMIĘĆ: T-pamięci: CCR7+ (centralna, TCM) = węzły chłonne; CCR7− (efektorowa, TEM) = tkanki; T rezydentne (TRM) w tkankach (płuco, jelito, skóra); B-pamięci: po centrum rozrodczym (GC) → somatic hypermutation (AID) → affinity maturation → wyższe powinowactwo Ab; class switch: IgM → IgG/IgA/IgE; odpowiedź wtórna: IgG dominuje, szybsza (dni vs tygodnie), wyższy titer. (D) TOLERANCJA CENTRALNA: grasica: pozytywna (MHC-zależność) → negatywna (auto-reaktywne → apoptoza/Treg); AIRE (autoimmune regulator): gen na chr. 21; mutacje → APS-1 (APECED): Addison + hipoparatyreoza + kandydoza; Treg (CD4+CD25+FoxP3+): obwodowa tolerancja; mutacje FOXP3 → IPEX syndrome.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.limfatyczny, question_type: 'single',
    question_text: 'Dopełniacz (complement system) jest kaskadą białek surowicy biorącą udział w odporności wrodzonej. Która odpowiedź POPRAWNIE opisuje drogi aktywacji i główne efektory układu dopełniacza?',
    options: [
      { id: 'A', text: 'Trzy drogi aktywacji: (1) droga klasyczna: IgM lub IgG związane z antygenem → C1q → C1r/C1s → C4, C2 → C3 konwertaza; (2) droga lektynowa (MBL): mannoza na patogenie → MBL + MASP1/MASP2 → C4, C2 → C3 konwertaza; (3) droga alternatywna: spontaniczna hydroliza C3 na powierzchniach patogenu (brak regulatorów); wszystkie prowadzą do C3 konwertazy → C3b (opsonizacja) + C3a (anafilatoksyna); dalej C5 konwertaza → C5a + C5b → MAC (C5b-9) → liza komórki docelowej', is_correct: true },
      { id: 'B', text: 'Dopełniacz jest aktywowany wyłącznie przez limfocyty T; C3b hamuje fagocytozę; C3a i C5a są inhibitorami zapalenia; MAC (membrane attack complex) chroni komórki przed lizą, nie ją powoduje; układ dopełniacza nie jest związany z odporność wrodzoną', is_correct: false },
      { id: 'C', text: 'Układ dopełniacza składa się z 3 białek (C1, C5, C9); aktywacja zawsze zaczyna się od drogi alternatywnej bez udziału przeciwciał; niedobór C9 powoduje najcięższą postać niedoboru dopełniacza z nawracającymi zakażeniami wszystkimi bakteriami; niedobory dopełniacza są niemożliwe do zdiagnozowania', is_correct: false },
      { id: 'D', text: 'Droga klasyczna jest tak nazwana, bo jest filogenetycznie najstarsza; droga alternatywna wymaga przeciwciał klasy IgA; C3 konwertaza jest zbudowana wyłącznie z białka C5; MAC składa się z pojedynczego białka C5b; regulacja dopełniacza jest niemożliwa, więc stale niszczy własne komórki', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'UKŁAD DOPEŁNIACZA (complement, ~30 białek surowicy): DROGI AKTYWACJI: (1) KLASYCZNA (discovered first, but evolutionarily youngest): C1 kompleks (C1q+C1r₂+C1s₂) → IgM (1 cząsteczka) lub IgG (2+ cząsteczki) + Ag; C1q wiąże Fc → C1r autokataliza → C1s → cięcie C4 + C2 → C3 konwertaza (C4b2a); (2) LEKTYNOWA: MBL (mannose-binding lectin) lub fikoliny wiążą mannozę/N-GlcNAc na pathogenie → MASP-1/MASP-2 (jak C1r/C1s) → C4, C2 → C3 konwertaza (C4b2a); (3) ALTERNATYWNA (filogenetycznie najstarsza): spontaniczna hydroliza C3 → C3(H₂O) + czynnik B + D → C3 konwertaza (C3bBb); amplifikacja pętli; patogen brak DAF/CD55/CD46 → odkładanie C3b; KONWERGENCJA na C3: C3 konwertaza → C3 → C3b + C3a; C3b = opsonina (CR1/CD35 na fagocytach); C3a = anafilatoksyna (degranulacja mastocytów, skurcz mięśni gładkich, chemotaksja); C5 konwertaza → C5 → C5b + C5a (silna anafilatoksyna + chemotaksja neutrofili); C5b → C6, C7, C8, C9 (poly) → MAC (C5b-9) → pory w błonie → osmotyczna liza; Neisseria (N. meningitidis, N. gonorrhoeae) wrażliwa na MAC → niedobór C5-C9 → nawracające Neisseria; REGULACJA: DAF (CD55), CD59 (protectin) chroni własne komórki przed MAC; C1-INH (C1 inhibitor) → niedobór → hereditary angioedema (HAE); CFH (factor H) → regulacja drogi alternatywnej; PNH (paroxysmal nocturnal hemoglobinuria): brak GPI-anchors (CD55, CD59) → hemoliza przez własny MAC.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.limfatyczny, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących szczepień i odporności biernej:',
    options: [
      { id: 'A', text: 'Odporność czynna (aktywna): indukowana przez kontakt z antygenem (zakażenie lub szczepienie); organizm sam produkuje przeciwciała i komórki pamięci; trwała (lata–całe życie); odporność bierna: gotowe przeciwciała podane z zewnątrz (surowica odpornościowa, IVIG, mleko matki dla noworodka); natychmiastowa, ale krótkotrwała (tygodnie–miesiące, bo IgG degraduje się w ~3 tygodnie t₁/₂)', is_correct: true },
      { id: 'B', text: 'Szczepionki żywe atenuowane (np. MMR — odra, świnka, różyczka; OPV — polio Sabina; varicella; żółta gorączka) zapewniają silną, wieloletnią odporność komórkową i humoralną; wadą jest ryzyko rewersji do wirulencji u immunosupresowanych; są PRZECIWWSKAZANE w ciąży i przy ciężkim niedoborze odporności', is_correct: true },
      { id: 'C', text: 'Szczepionki mRNA (np. Pfizer-BioNTech, Moderna przeciwko SARS-CoV-2) integrują się z DNA człowieka w jądrze komórkowym i mogą powodować trwałe zmiany genomu; mRNA jest odwrotnie transkrybowane przez ludzką odwrotną transkryptazę i następnie integrowane losowo w chromosomach', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: ODPORNOŚĆ CZYNNA: latencja (opóźnienie): 1–3 tygodnie; pamięć immunologiczna; trwała; szczepienie = symulacja zakażenia bez choroby; rodzaje: naturalna (po chorobie) i indukowana (szczepionka); ODPORNOŚĆ BIERNA: gotowe Ab; brak pamięci; stosowanie: (1) profilaktyka po ekspozycji: RIG (rabies IG po ugryzieniu), HBIG (hepatitis B IG po zranienia), TIG (tężcowa IG); (2) leczenie: bezpośrednia ekspozycja na toksynę (botulinum, jad wężowy — poliklonalne Ab); (3) IVIG (IV immunoglobulins): wtórne niedobory Ab, Kawasaki, GBS; (4) mleko matki: IgA wydzielnicza → ochrona błon śluzowych noworodka. B — Prawda: SZCZEPIONKI ŻYWE ATENUOWANE: patogen osłabiony przez wielokrotne pasażowanie w hodowli komórkowej (↓zjadliwość, zachowana immunogenność); replikacja w organizmie → silna i długotrwała odpowiedź; RYZYKO: rewersja (zwłaszcza OPV → VAPP, vaccine-associated paralytic polio = ~1:750 000 pierwszej dawki; dlatego IPV preferowane); przeciwwskazanie: ciąża, immunosupresja (np. HIV, chemioterapia), czynne choroby; MMR: łączy 3 wirusy; 2 dawki → odporność > 95%. C — Fałsz: mRNA SZCZEPIONKI (Karikó i Weissman, Nobel 2023): mRNA dostarczone w nanocząstkach lipidowych (LNP); w cytozolu: translacja przez rybosomy → białko spike SARS-CoV-2 → odp. immunologiczna → degradacja mRNA (t₁/₂ ~ kilka dni); mRNA NIE wchodzi do jądra komórkowego (brak transportu jądrowego); NIE jest odwrotnie transkrybowane (ludzkie komórki somatyczne nie mają aktywnej telomerazy/odwrotnej transkryptazy w ilościach funkcjonalnych); INTEGRACJA NIEMOŻLIWA: mRNA → DNA wymaga odwrotnej transkryptazy + integrazy (brak); bezpieczeństwo: najszybciej wdrożone szczepionki w historii przy najintensywniejszym nadzorze.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.limfatyczny, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują narządy i naczynia układu limfatycznego? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Grasica (thymus): pierwotny narząd limfatyczny; dojrzewanie limfocytów T (selekcja pozytywna i negatywna); szczyt masy w dojrzewaniu, inwolucja po 20. r.ż.; kortykal: podwójnie pozytywne (CD4+CD8+) tymocyty; medulla: selekcja negatywna przez AIRE; brak grasicy (DiGeorge/22q11.2 deletion) → poważny niedobór limfocytów T', is_correct: true },
      { id: 'B', text: 'Śledziona (spleen): największy narząd limfatyczny; miazga biała = centrum rozrodcze + PALS (periarteriolar lymphoid sheath, głównie T) + otoczka (B); miazga czerwona = zatoki śledzionowe + filtracja erytrocytów; splenektomia → ↑ryzyko zakażenia Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis (bacteria otoczkowe) → OPSI (overwhelming post-splenectomy infection)', is_correct: true },
      { id: 'C', text: 'Naczynia limfatyczne: zbierają płyn tkankowy (limfę) → naczynia limfatyczne włosowate (ślepy koniec) → naczynia limfatyczne zbiorcze (z zastawkami) → węzły chłonne → pnie chłonne → pień piersiowy (ductus thoracicus, zbiera ~75% limfy) + prawy przewód limfatyczny → kąty żylne (lewy i prawy)', is_correct: true },
      { id: 'D', text: 'Węzły chłonne zawierają wyłącznie limfocyty B i nie mają limfocytów T; nie filtrują limfy; nie prezentują antygenów; nie zawierają makrofagów; ich funkcja polega wyłącznie na wydzielaniu erytropoetyny do krwiobiegu', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) GRASICA: dwupłatowa, śródpiersie górne; torebka + przegrody → zraziki; korteks: proliferacja i selekcja (90%+ tymocytów ginie!); selekcja pozytywna: TCR musi wiązać self-MHC (słabo) → przeżywa; nie wiąże → apoptoza (zaniedbanie); selekcja negatywna: TCR wiąże self-MHC + self-peptyd SILNIE → apoptoza (klonalna delecja autoagresywnych); medulla: AIRE ekspresja antygenów tkankowych; 22q11.2 deletion (DiGeorge): brak grasicy + wady serca + hipoparaty. → tetralogikacja Fallota + brak odp. T-komórkowej. (B) ŚLEDZIONA: ~120 g; torebka + beleczki (mięśniówka); MIAZGA BIAŁA: tętniczki centralne → PALS (T-zone, środowisko T) + grudki chłonne (B-zone, centre germinativum); MIAZGA CZERWONA: erytrofagocytoza (old RBC → Fe → transferryna); platelet pooling (~30% płytek w śledzionie); filtr bakterii nieopsonizowanych; splenomegalia: EBV, malaria, CML, portal HTN. OPSI: szczepienie przed splenektomią (PCV13, MenACWY, Hib) + profilaktyczna penicylina. (C) LIMFA: 2–4 l/dobę; ductus thoracicus: od cysterna chyli (L2) → lewą żyłę podobojczykową; prawy przewód: prawa strona głowy/szyi + prawa kończyna górna → prawy kąt żylny; po posiłku tłustym: limfa mleczna (chylomikrony) → chylothorax (płyn limfatyczny w opłucnej) po urazie. (D) fałsz: węzły chłonne mają obie populacje: KORA = grudki chłonne pierwotne i wtórne (B-zone = centrum germinativum); PARAKORA = T-zone (wysoka endotelia w HEV, high endothelial venules, tędy limfocyty wchodzą z krwi); RDZEŃ = sznury i zatoki (makrofagi, plazmocyty); FUNKCJA: filtracja limfy + prezentacja antygenów (DC) → aktywacja limfocytów.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.limfatyczny, question_type: 'single',
    question_text: 'Reakcja alergiczna I typu (natychmiastowa, IgE-zależna) jest przykładem błędnej odpowiedzi immunologicznej. Który opis POPRAWNIE wyjaśnia jej mechanizm?',
    options: [
      { id: 'A', text: 'Sensytyzacja (1. kontakt): alergen → APC → Th2 (IL-4, IL-13) → klasa-switch B → IgE; IgE wiąże FcεRI na mastocytach/bazofilach (uczulenie); prowokacja (2.+ kontakt): alergen wiąże IgE na mastocytach → cross-linking FcεRI → degranulacja → histamina (natychmiastowa: świąd, obrzęk, skurcz) + prostaglandyny + leukotrieny (późna faza: zapalenie)', is_correct: true },
      { id: 'B', text: 'Alergia I° jest wywołana przez IgM (nie IgE); sensytyzacja nie jest potrzebna — natychmiastowa reakcja pojawia się przy pierwszym kontakcie; mastocyty uwalniają wyłącznie serotoninę, która powoduje skurcz oskrzeli; adrenalina pogarsza reakcję anafilaktyczną', is_correct: false },
      { id: 'C', text: 'Anafilaksja to łagodna postać alergii ograniczona do skóry; nigdy nie zagraża życiu; adrenalina jest przeciwwskazana w anafilaksji; leukotrieny (LTC4, LTD4, LTE4) powodują rozkurcz oskrzeli i są stosowane w leczeniu astmy; IgE nie ma związku z atopią', is_correct: false },
      { id: 'D', text: 'W reakcji alergicznej I° czynnikiem decydującym jest aktywacja limfocytów T cytotoksycznych (CTL, CD8+); CTL rozpoznają hapten na MHC I na keratynocytach → zabijają komórki skóry → egzema; histamina jest produkowana przez CTL; kortykosteroidy wzmagają reakcję alergiczną', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ALERGIA I° (immediate hypersensitivity, Gell & Coombs type I): SENSYTYZACJA: alergen (pyłek, roztocza, pokarm, jad owadów, leki) → DC → węzeł chłonny → Th2 (IL-4 + IL-13 → CD40L + CD40B → IgE switch); IgE → FcεRI na mastocytach (skóra, błony śluzowe, jelito) i bazofilach; PROWOKACJA (efferent phase): alergen → cross-linking 2+ FcεRI przez Ag-IgE → sygnał wewnątrzkomórkowy (Lyn, Syk, PLCγ) → degranulacja: FAZA NATYCHMIASTOWA (<15 min): histamina (H₁R: itch, vasodilation, ↑permeability, bronchospasm), tryptaza (marker), heparyna; FAZA PÓŹNA (4–12 h): synteza de novo: PGD₂ (prostaglandyna D₂: bronchospasm, platelet agg.), LTC4→LTD4→LTE4 (leukotrieny cysteinylowe: silny bronchospasm, mucus → astma oskrzelowa!), IL-5 (rekrutacja eozynofilów); ANAFILAKSJA: systemowa → wstrząs anafilaktyczny; leczenie: adrenalina i.m. (0,3–0,5 mg, epinefryna: α₁ → vasoconstriction, β₁ → inotropia, β₂ → bronchodilatacja) → PRIORYTET; antyhistaminiki (H₁-blokery) i kortykosteroidy: wspierają, ale wolniejsze; LEKI ANTY-LEUKOTRIENOWE (montelukast, zafirlukast): blokują CysLT₁R → w astmie i alergicznym nieżycie nosa; MONOTERAPIA ALERGICZNA (SIT): stopniowe zwiększanie dawki alergenu → przesunięcie Th2→Th1/Treg → tolerancja.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── MECHANIKA ODDYCHANIA (2) ──────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.mechanika, question_type: 'single',
    question_text: 'Mechanika wdechu i wydechu opiera się na zmianach ciśnienia w klatce piersiowej. Który opis POPRAWNIE wyjaśnia mechanizm spokojnego wdechu?',
    options: [
      { id: 'A', text: 'Spokojny wdech (aktywny): skurcz przepony (opuszcza się o ~1,5 cm, zwiększa wymiar pionowy klatki) + zewnętrznych mięśni międzyżebrowych (unoszą żebra → wzrost wymiaru przednio-tylnego) → ↑objętość klatki → ↓ciśnienie śródopłucnowe (np. z −5 do −8 cmH₂O) → ↓ciśnienie pęcherzykowe (chwilowo poniżej atmosferycznego) → napływ powietrza do płuc', is_correct: true },
      { id: 'B', text: 'Spokojny wdech jest procesem BIERNYM; przepona i mięśnie oddechowe są zrelaksowane; ciśnienie pęcherzykowe wzrasta powyżej atmosferycznego, co "wciąga" powietrze przez gradient ciśnienia; wydech jest procesem aktywnym wymagającym skurczu przepony', is_correct: false },
      { id: 'C', text: 'Wdech: zmniejszenie objętości klatki piersiowej → wzrost ciśnienia pęcherzykowego → napływ powietrza z zewnątrz; wydech: zwiększenie objętości klatki → spadek ciśnienia → wypływ powietrza; przepona podnosi się podczas wdechu i opuszcza podczas wydechu', is_correct: false },
      { id: 'D', text: 'Ciśnienie śródopłucnowe jest zawsze równe ciśnieniu atmosferycznemu (0 cmH₂O); nie zmienia się podczas oddychania; płuca są bezpośrednio przyłączone do ściany klatki piersiowej bez przestrzeni opłucnowej; odma opłucnowa jest niemożliwa', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'MECHANIKA ODDYCHANIA — wdech (inspiracja): SIŁY NAPĘDOWE: gradient ciśnienia Patm − Palv; Palv < Patm → napływ powietrza; MIĘŚNIE WDECHU SPOKOJNEGO: przepona (diaphragma): kopuła zbudowana z mięśnia (n. phrenicus C3-C5); skurcz → opuszczenie kopuły (o 1,5–7 cm) → wzrost wymiaru pionowego klatki (~75% wentylacji); zewnętrzne mięśnie międzyżebrowe (mm. intercostales externi): unoszą żebra → wzrost wymiaru strzałkowego i poprzecznego (ruch "bucket handle"); GŁĘBOKI WDECH: dodatkowe: mm. pochyłe (scalene → unoszą żebro I), mostkowo-obojczykowo-sutkowy (SCM), pectoralis minor; CIŚNIENIE ŚRÓDOPŁUCNOWE (Pip): przestrzeń między blaszkami opłucnej (< 0,1 mm płynu); spoczynek: −5 cmH₂O (podciśnienie utrzymuje płuca rozciągnięte); wdech: −8 do −10 cmH₂O; odma opłucnowa (pneumothorax): powietrze wnika do przestrzeni → Pip = Patm → płuco się zapada (atelektaza); WYDECH SPOKOJNY (bierny): relaksacja przepony + elastyczne cofnięcie płuc (elastin) + ściana kl. pier. → ↓V → ↑Palv > Patm → wypływ; WYDECH FORSOWNY: aktywny: mm. brzucha (rec. abdominis, obliq.), wewnętrzne mm. międzyżebrowe.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.mechanika, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących objętości i pojemności płuc:',
    options: [
      { id: 'A', text: 'Objętość oddechowa (TV, tidal volume): ~500 ml w spoczynku; zapasowa objętość wdechowa (IRV): ~3 000 ml; zapasowa objętość wydechowa (ERV): ~1 100 ml; objętość zalegająca (RV): ~1 200 ml (nie wydychana, utrzymuje płuca otwarte); pojemność życiowa (VC = TV + IRV + ERV): ~4 600 ml; całkowita pojemność płuc (TLC = VC + RV): ~5 800 ml', is_correct: true },
      { id: 'B', text: 'Przestrzeń martwa anatomiczna (anatomical dead space): ~150 ml (drogi oddechowe od nozdrzy do oskrzelików końcowych, gdzie NIE zachodzi wymiana gazów); objętość oddechowa 500 ml → wentylacja pęcherzykowa = (TV − VD) × RR = (500 − 150) × 12 = 4 200 ml/min; przestrzeń martwa fizjologiczna (physiological dead space) = anatomical + pęcherzyki z ↓perfuzją', is_correct: true },
      { id: 'C', text: 'Natężona objętość wydechowa w 1. sekundzie (FEV₁) i całkowita natężona pojemność życiowa (FVC) są używane do różnicowania chorób płuc: FEV₁/FVC > 0,70 = norma; FEV₁/FVC < 0,70 = obturacja (astma, POChP = obstruktywna); w chorobach restrykcyjnych (zwłóknienie płuc) FEV₁/FVC jest PRAWIDŁOWY lub ZWIĘKSZONY, ale FVC i TLC są ZMNIEJSZONE', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'A — Prawda: SPIROMETRIA (objętości płuc): TV = 500 ml; IRV = 3000 ml; ERV = 1100 ml; RV = 1200 ml (mierzone plethyzmografią lub He dilution — nie spirometrią!); IC (inspiratory capacity) = TV + IRV = 3500 ml; FRC (functional residual capacity, w spoczynku na końcu wydechu) = ERV + RV = 2300 ml; VC = IC + ERV = 4600 ml; TLC = VC + RV = 5800 ml; wartości zależą od wzrostu, wieku, płci; kobiety ~ 80% mężczyzn. B — Prawda: PRZESTRZEŃ MARTWA: anatomiczna (~150 ml = 2,2 ml/kg): nos, gardło, krtań, tchawica, oskrzela, oskrzeliki do i włącznie z końcowymi oskrzelikami (respiratoryjne oskrzeliki i pęcherzyki = strefa wymiany = przestrzeń pęcherzykowa); wentylacja minutowa: VE = TV × RR = 500 × 12 = 6 000 ml/min; wentylacja PĘCHERZYKOWA: VA = (TV − VD) × RR = (500 − 150) × 12 = 4 200 ml/min; płytki oddech: 250 ml × 24 = 6000 ml/min, ale VA = (250 − 150) × 24 = 2400 ml/min (niższa!); FIZJOLOGICZNA przestrzeń martwa (VDphys) = VDanat + pęcherzyki nieperfundowane (dead alveoli): w POChP, zatorowości płucnej. C — Prawda: SPIROMETRIA DYNAMICZNA: FEV₁ = objętość w 1. sekundzie forsownego wydechu; FVC = całkowita obj. forsowna; FEV₁/FVC (index Tiffeneau): norma > 70%; OBTURACJA (astma, POChP): FEV₁/FVC < 70% (wąskie drogi → wolny wydech → mała FEV₁); RESTRIKCJA (zwłóknienie, kifoskolioza): FEV₁ i FVC OBA zmniejszone proporcjonalnie → FEV₁/FVC N lub ↑; TLC zmniejszona.',
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
