// Seed: open questions — Fizjologia roślin (8 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const TOPIC = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c'

const S = {
  foto:  'c426d845-182c-48d9-b420-bdda8dc95c2a',
  fot2:  '0f762f3b-45ca-422b-ab30-8cc5e2dfc530',
  horm:  'c3f1012e-cde4-47d7-adcb-9887d090322a',
  kiel:  '203f922f-00e6-458f-8239-5614e0777ff1',
  min:   '57d2864b-dd3e-42de-8a9f-0b7b2c533894',
  c4:    '469e8529-d140-498f-bed7-5790c9e2d55d',
  ruch:  '550d7c0b-6b30-4527-93d7-aab33d62dfb1',
  trans: '0587c00d-b47e-4264-8a86-cebd8544ae22',
  tranp: 'f69fab83-0563-4d75-92a0-6e49afd505d0',
}

const questions = [
  // ─── Fotosynteza — fazy jasna i ciemna ───
  {
    topic_id: TOPIC, subtopic_id: S.fot2,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego faza jasna fotosyntezy jest niezbędna do przeprowadzenia fazy ciemnej (cyklu Calvina). Podaj dwa produkty fazy jasnej, które są bezpośrednio wykorzystywane w cyklu Calvina, i opisz ich rolę.',
    options: [], correct_answer: [],
    explanation: 'Faza jasna → ATP (z fosforylacji fotosyntetycznej) i NADPH (z fotolizy wody i transportu elektronów) → cykl Calvina: ATP zasila fosforylację intermediarów, NADPH redukuje 3-fosfoglicerynian do G3P (gliceraldehydo-3-fosforanu).',
    max_points: 2,
    key_points: [
      'ATP (adenozynotrifosforan): produkowany w fotosyntetycznej fosforylacji (cyklicznej i niecyklicznej) na tylakoidach; w cyklu Calvina ATP zasila dwa etapy: (1) fosforylację 3-fosfoglicerynianu (3-PGA) do 1,3-bisfosfoglicerynianu oraz (2) regenerację akceptora CO₂ — rybulozo-1,5-bisfosforanu (RuBP) z rybulozo-5-fosforanu; bez ATP cykl Calvina nie może się toczyć',
      'NADPH (zredukowany fosforan dinukleotydu nikotynoamidoadeninowego): produkowany przez reduktazę ferredoksyna-NADP⁺ na końcu niehemowego łańcucha transportu elektronów (PSI → Fd → FNR → NADPH); w cyklu Calvina NADPH redukuje 1,3-bisfosfoglicerynian do gliceraldehydo-3-fosforanu (G3P) — to kluczowy etap redukcji węgla; G3P jest wyjściowym produktem fotosyntezy, z którego syntetyzowane są glukoza, skrobia, lipidy, aminokwasy'
    ],
    model_answer: 'Faza jasna (reakcje świetlne) dostarcza energii chemicznej dla fazy ciemnej (cyklu Calvina/Bensona-Calvina): ATP: produkowany przez ATP-syntazę tylakoidową napędzaną gradientem protonów H⁺ (chemioosmoza Mitchella) — gradient powstaje dzięki: fotolizie wody w PSII (4H⁺ do lumen) + transportowi H⁺ przez plastochinon (PQ) + pracy PSI. W cyklu Calvina ATP zużywane: etap 2 (fosforylacja 3-PGA → 1,3-bisPGA, 3 ATP/CO₂) + etap 3 (regeneracja RuBP z Ru5P, 3 ATP/CO₂) = łącznie 9 ATP na 3 CO₂ (1 G3P). NADPH: produkowany przez FNR (ferredoxin-NADP⁺ reductase) na PSI: Fd⁻ + NADP⁺ → Fd + NADPH. W cyklu Calvina NADPH zużywane w etapie redukcji: 1,3-bisPGA + NADPH → G3P + NADP⁺ + Pᵢ; 6 NADPH na 3 CO₂ (1 G3P netto). G3P (gliceraldehydo-3-fosforan) = trójwęglowy cukier → wyjście z chloroplastu (eksport do cytoplazmy jako dihydroksyaceton fosforanu) → synteza sacharozy, skrobi, lipidów, aminokwasów. Bez fazy jasnej: brak ATP i NADPH → cykl Calvina niemożliwy mimo dostępności CO₂.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Rośliny C3, C4 i CAM ───
  {
    topic_id: TOPIC, subtopic_id: S.c4,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego rośliny C4 (np. kukurydza, trzcina cukrowa) są bardziej wydajne fotosyntetycznie od roślin C3 (np. pszenica) w warunkach wysokiej temperatury i intensywnego nasłonecznienia. Uwzględnij w odpowiedzi problem fotorespiracji.',
    options: [], correct_answer: [],
    explanation: 'C3: RuBisCO wiąże CO₂ → 3-PGA, ale przy wysokiej T i niskim CO₂ wiąże też O₂ → fotooddychanie (fotorespiraracja) → straty węgla. C4: komórki mezofilu wstępnie koncentrują CO₂ (via PEP-karboksylaza → szczawiooctan → jabłczan → komórki pochwy wiązkowej → CO₂ uwolnione = wysokie stężenie przy RuBisCO → minimalna fotorespiratia). Anatolia Kranza = oddzielenie fizyczne.',
    max_points: 2,
    key_points: [
      'Fotorespiracja (fotooddychanie) u roślin C3: przy wysokiej temperaturze i intensywnym świetle stomata zamykają się (redukcja parowania) → [CO₂] spada, [O₂] rośnie → RuBisCO wiąże O₂ zamiast CO₂ (oksygenaza zamiast karboksylaza) → 2-fosfoglikolan (wymagający kosztownej naprawy — cykl fotorespiracyjny) → utrata 25–30% wiązanego węgla; fotorespiratia = poważna strata wydajności u C3 w gorącym klimacie',
      'Mechanizm koncentracji CO₂ u roślin C4: komórki mezofilu — PEP-karboksylaza (PEPC, nie wiąże O₂ nawet przy niskim CO₂) wiąże CO₂ do PEP → szczawiooctan (4C) → jabłczan/asparaginian; transportowany do komórek pochwy wiązkowej (bundle sheath) → dekarboksylacja → uwolnienie CO₂ w wysokim stężeniu ([CO₂] 10–20× wyższe niż w mezofilu) → RuBisCO w pochwach wiązkowych działa prawie wyłącznie jako karboksylaza → minimalna fotorespiratia; w efekcie C4 asymilują węgiel bardziej wydajnie w warunkach wysokiej T i nasłonecznienia (wyższe Vmax, niższa strata C)'
    ],
    model_answer: 'Rośliny C3 a fotorespiratia: RuBisCO (rybulozo-1,5-bisfosforan karboksylaza/oksygenaza) katalizuje dwie reakcje: (1) karboksylacja: RuBP + CO₂ → 2× 3-PGA (fotosynteza); (2) oksygenacja: RuBP + O₂ → 3-PGA + 2-fosfoglikolan (fotorespiratia). Stosunek CO₂/O₂ w chloroplaście decyduje który szlak dominuje. Przy wysokiej T (>30°C) i zamkniętych szparkach: [CO₂]↓, [O₂]↑ + ↑powinowactwo RuBisCO do O₂ → fotorespiratia pochłania 25–30% wiązanego węgla → C3 (pszenica, ryż, soja) tracą wydajność. Rośliny C4 — pompa CO₂ (anatomia Kranza): dwa typy komórek: mezofil (zewnętrzne, z chloroplastami granowymi) + pochwa wiązkowa (wewnętrzne, z chloroplastami agranal). Etap 1 (mezofil): PEP + CO₂ → szczawiooctan (4C) przez PEP-karboksylazę (PEPC; niemal brak oksygenazowej aktywności, duże powinowactwo do CO₂); szczawiooctan → jabłczan lub asparaginian → transport do pochwy. Etap 2 (pochwa wiązkowa): dekarboksylacja jabłczanu → pirogronian + CO₂; lokalne [CO₂] wzrasta 10–20× → RuBisCO pracuje prawie wyłącznie jako karboksylaza → cykl Calvina bez fotorespiratii. Wynik: kukurydza, trzcina cukrowa, sorgo: wyższy plon w klimacie tropikalnym, sub-tropikalnym.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Transport wody i soli mineralnych ───
  {
    topic_id: TOPIC, subtopic_id: S.tranp,
    question_type: 'open',
    question_text: 'Wyjaśnij teorię kohezji i tensji (teorię Dixona-Joly\'ego) tłumaczącą wznoszenie wody w ksylemie drzew. Jakie właściwości wody umożliwiają jej wznoszenie na wysokość kilkudziesięciu metrów bez pompy?',
    options: [], correct_answer: [],
    explanation: 'Transpiracja → ujemne ciśnienie (tension) w ksylemie liści → ciągłość kolumny wody dzięki kohezji (silne wiązania wodorowe H₂O-H₂O) i adhezji do ścian naczyń → "ssanie" wody z korzeni w górę. Woda wytrzymuje napięcie do –30 MPa. Siłą napędową jest gradient potencjału wodnego: gleba > korzenie > łodyga > liście > atmosfera.',
    max_points: 2,
    key_points: [
      'Kohezja i adhezja wody: kohezja — silne wiązania wodorowe między cząsteczkami wody tworzą ciągłą, nierywalną kolumnę cieczy w naczyniach ksylemu; adhezja — woda przykleja się do hydrofilowych ścian naczyń ksylemu (polisacharydy, lignina z grupami -OH) → kapilarne napięcie podpiera kolumnę; woda może wytrzymać napięcia rozciągające do –3 MPa (–30 barów) w naczyniach ksylemu bez kawitacji',
      'Mechanizm napędzający (teoria Cohesion-Tension, Dixon i Joly 1894): transpiracja przez szparki → parowanie wody z komórek mezofilu → [H₂O] spada w liściach → potencjał wodny (ψ) liści maleje (staje się bardziej ujemny) → gradient ψ: gleba (≈ 0 MPa) > korzenie > łodyga > liście (–0,5 do –2 MPa) > atmosfera (–100 MPa) → woda "wciągana" od korzeni ku górze siłą tensji (ujemnego ciśnienia hydraulicznego); kolumna wody w ksylemie jest pod stałym napięciem rozciągającym (metastabilna ciecz pod ujemnym ciśnieniem)'
    ],
    model_answer: 'Teoria kohezji-tensji (Cohesion-Tension theory, Dixon i Joly 1894; Böhm 1893): wyjaśnia wznoszenie wody w wysokich drzewach (do 130 m — Sequoia sempervirens) bez pompy hydraulicznej. Siła napędowa: transpiracja liści → parowanie ze ścian komórek mezofilu do przestworów powietrznych → szparki → atmosfera; utrata wody z liści → ψ_leaf spada (do –1 do –2,5 MPa lub niżej w suszy) → gradient ψ: gleba (~0 MPa lub lekko ujemny) → korzeń (–0,2 MPa) → łodyga → liść → atmosfera (–100 MPa przy 50% RH) → ciągły przepływ po gradiencie potencjału. Rola kohezji: cząsteczki wody tworzą sieć silnych wiązań wodorowych (energia ≈ 23 kJ/mol × ~3,7 wiązania = ciągłość kolumny); kolumna wody w naczyniach ksylemu jest pod napięciem (tensja/tension) — ciecz metastabilna (poniżej ciśnienia atmosferycznego, a nawet ujemna!) → nie rwana. Rola adhezji: woda "przykleja się" do skupin -OH ścian ksylemu → siły kapilarne wspomagają; kawitacja (pęcherz parowy): ryzyko przy silnym napięciu → naczynia z perforacjami i jamkami zapobiegają propagacji pęcherzy. Potwierdzenie: wybarwianie ksylemu (farbowanie apoplastyczne) pokazuje drogę transpiracyjną; pomiary tensji ciśnieniometrem ("pressure bomb", Scholander).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Transpiracja i gospodarka wodna ───
  {
    topic_id: TOPIC, subtopic_id: S.trans,
    question_type: 'open',
    question_text: 'Wyjaśnij mechanizm otwierania i zamykania aparatów szparkowych w zależności od światła i stężenia CO₂. Jaką rolę odgrywa jon potasowy (K⁺) i kwas abscysynowy (ABA) w regulacji szparkowych?',
    options: [], correct_answer: [],
    explanation: 'Światło → pompa H⁺-ATPaza w błonie komórek szparkowych → gradient H⁺ → kanały K⁺ otwierają się → K⁺ wnika do komórek → ↑ciśnienie osmotyczne → woda wchodzi (osmoza) → turgoru ↑ → szparka otwiera się. ABA (stres wodny) → zamknięcie kanałów K⁺ wejścia, otwarcie K⁺ wyjścia + wzrost [Ca²⁺] → turgoru ↓ → szparka się zamyka.',
    max_points: 2,
    key_points: [
      'Otwieranie szparek przez światło i niskie [CO₂]: światło (szczególnie niebieskie 430 nm) aktywuje fototropiny (LOV-domeny) → aktywacja H⁺-ATPazy w błonie plazmatycznej komórek szparkowych → pompowanie H⁺ na zewnątrz → hiperpolaryzacja błony → otwierają się zależne od napięcia kanały K⁺-in (wejściowe, KAT1/KAT2) → K⁺ napływa do komórki szparkowej + import malanu i Cl⁻ → ↑stężenie osmotyczne w komórkach szparkowych → woda wnika przez akwaporyny (osmoza) → ↑turgor asymetryczny (gruba ściana wewnętrzna + cienka zewnętrzna) → szparka otwiera się',
      'Zamykanie przez ABA (kwas abscysynowy): susza/stres wodny → ABA syntetyzowany w liściach i korzeniach → receptor PYR/PYL w komórkach szparkowych wiąże ABA → PP2C (fosfataza) zablokowana → SnRK2 (kinaza) aktywna → fosforylacja SLAC1 (kanał anionowy) → Cl⁻ i malat wypływają → depolaryzacja błony → zamknięcie K⁺-in, otwarcie K⁺-out (GORK) → K⁺ wypływa → ↓stężenie osmotyczne + wzrost [Ca²⁺] wewnętrznego (wtórny przekaźnik) → spadek turgoru → szparka zamyka się; efekt: ↓transpiracja przy stresie wodnym'
    ],
    model_answer: 'Aparaty szparkowe (stomata): dwie komórki szparkowe (guard cells) z asymetryczną ścianą (gruba ściana ventralna/wewnętrzna, cienka dorsalna/zewnętrzna) — przy wzroście turgoru komórek szparkowych ściana dorsalna rozciąga się bardziej → komórki wyginają się → szparka otwiera się. Otwieranie (światło + niskie [CO₂]): (1) Fototropiny (phot1, phot2) absorbują niebieskie światło → autofosforylacja → aktywacja H⁺-ATPazy (AHA1/AHA2) na plazmolemie → eksport H⁺ do apoplastu → hiperpolaryzacja błony (do –200 mV) → otwarcie kanałów K⁺ wejściowych (K⁺in — KAT1, KAT2, AKT1): K⁺ napływa; (2) Równoczesny import anionów (malat²⁻ syntetyzowany z PEP + CO₂ przez PEPC; Cl⁻) = kompensacja ładunku; (3) ↑[K⁺ + malat] → ↑potencjał osmotyczny → woda wnika → ↑turgor → szparka otwarta. Zamykanie (ABA, ciemność, wysokie [CO₂]): ABA → receptor PYR/RCAR → inhibicja PP2C → aktywacja SnRK2.2/2.6 → fosforylacja kanału SLAC1 (slow anion channel) i QUAC1 → eksport Cl⁻ i malatu → depolaryzacja → inaktywacja K⁺in + aktywacja K⁺out (GORK) → eksport K⁺ → ↓turgor → szparka zamknięta; Ca²⁺ (wewnętrzny drugi przekaźnik) wzmacnia sygnał.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Hormony roślinne ───
  {
    topic_id: TOPIC, subtopic_id: S.horm,
    question_type: 'open',
    question_text: 'Opisz rolę auksyn (IAA) w regulacji wzrostu rośliny. Wyjaśnij zjawisko fototropizmu łodygi, uwzględniając kierunkowy transport auksyn i różnicową elongację komórek.',
    options: [], correct_answer: [],
    explanation: 'IAA: pobudza elongację komórek przez zakwaszenie ściany komórkowej (aktywacja ekspansyn → luźnienie ściany → woda wnika → komórka się wydłuża). Fototropizm: światło z jednej strony → lateralny transport IAA na stronę zacienioną (kanały PIN → wyższe [IAA] po ciemnej stronie) → szybsza elongacja po ciemnej → łodyga zgina się ku światłu.',
    max_points: 2,
    key_points: [
      'Rola auksyn (IAA — kwas indolooctowy) w elongacji: IAA wiąże się z receptorem TIR1 (kompleks SCF-TIR1) → ubikwitynacja represorów Aux/IAA → degradacja przez proteasom → derepresja czynników transkrypcyjnych ARF → ekspresja genów elongacyjnych; na poziomie komórkowym: aktywacja H⁺-ATPazy → pompowanie H⁺ do ściany komórkowej → zakwaszenie ściany (acid growth hypothesis Hager) → ekspansyny (białka enzymatycznie rozluźniające wiązania niekowalencyjne w ścianie) aktywowane → ściana rozciągliwa → woda wchodzi osmotycznie → turgor → elongacja komórki',
      'Fototropizm łodygi: niebieski foton absorbowany przez fototropiny (phot1 przy słabym świetle, phot1+phot2 przy silnym) na oświetlonej stronie → aktywacja kinaz → boczny (lateralny) transport IAA z oświetlonej strony na zacienioną przez białka PIN (PIN-formed, asymetryczne nośniki IAA); wyższe [IAA] po ciemnej stronie → silniejsza elongacja komórek po stronie zacienionej > oświetlonej → różnicowa elongacja → zagięcie łodygi ku źródłu światła (pozytywny fototropizm)'
    ],
    model_answer: 'Auksyny (IAA — indol-3-acetic acid, kwas indolo-3-octowy): główny hormon wzrostu odkryty przez Wenta (1926); synteza głównie w merystemach wierzchołkowych; biegunowy transport polarny (z wierzchołka w dół) przez białka AUX/LAX (importery) i PIN (eksportery). Działanie na elongację komórek — hipoteza kwaśnego wzrostu (Hager 1971): IAA → receptor TIR1 (F-box SCF ubikwitynaligaza) → degradacja represorów Aux/IAA → aktywacja ARF (auxin response factors) → transkrypcja genów; + bezpośrednia aktywacja H⁺-ATPazy plazmolematycznej → H⁺ pompowane do ściany → pH ściany spada (5,0–5,5) → ekspansyny i XTH (xyloglucan endotranshydrolases) aktywne → luźnienie sieci ksyloglukanowo-celulozowej → ściana rozciągliwa → woda wnika przez akwaporyny → komórka elonguje. Fototropizm (pozytywny, ku światłu): niebieski foton (450 nm) → fototropiny (LOV-domeny) → autofosforylacja → aktywacja kaskady → NPH3/RPT2 → indukcja bocznego transportu IAA przez PIN3 i PIN7 (depolaryzacja PIN na stronie zaciemnionej) → [IAA] wyższe po ciemnej stronie → więcej elongacji po ciemnej → zagięcie ku światu; eksperyment Boysen-Jensen: blok skrobiowy blokuje wyginanie = potwierdzenie chemicznego sygnału.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Fotoperiodyzm i kwitnienie ───
  {
    topic_id: TOPIC, subtopic_id: S.foto,
    question_type: 'open',
    question_text: 'Wyjaśnij, na czym polega fotoperiodyzm u roślin. Porównaj rośliny długiego dnia (RDD) i krótkiego dnia (RKD), uwzględniając rolę ciągłości nocy (a nie dnia) w inicjacji kwitnienia. Podaj po jednym przykładzie każdego typu.',
    options: [], correct_answer: [],
    explanation: 'Fotoperiodyzm: reakcja na długość dnia/nocy. Kluczowa: długość CIĄGŁEJ NOCY. RKD (np. chryzantema): kwitną gdy noc > krytyczna; przerwanie nocy błyskiem światła → brak kwitnienia. RDD (np. szpinak): kwitną gdy noc < krytyczna; rola fitochromu Pr/Pfr — Pfr (forma aktywna) degraduje się w ciemności; długa noc u RKD = wystarczające przelączenie na Pr → sygnał kwitnienia.',
    max_points: 2,
    key_points: [
      'Fotoperiodyzm — rola długości nocy: wbrew nazwie "długi dzień / krótki dzień", czynnikiem decydującym jest długość CIĄGŁEJ NOCY (Hamner i Bonner 1938): rośliny krótkiego dnia (RKD) kwitną gdy NOC jest dłuższa od wartości krytycznej (np. >12 h); przerwanie długiej nocy nawet krótkim błyskiem czerwonego światła (~660 nm) → zahamowanie kwitnienia RKD (bo Pfr regenerowany → noc "przerwana"); rośliny długiego dnia (RDD) kwitną gdy noc jest krótsza od wartości krytycznej (krótka noc); doświetlanie nocą (ciągłe lub błysk) → inicjacja kwitnienia RDD',
      'Przykłady i rola fitochromu: RKD (np. chryzantema, poinsecja, truskawka, soja): kwitną jesienią (krótki dzień = długa noc); uprawiając chryzantemy, ogrodnicy skracają "dzień świetlny" czarną folią → wymuszenie kwitnienia; RDD (np. szpinak, rzodkiewka, pszenica ozima, hyzop): kwitną wiosną/latem (długi dzień = krótka noc); roślina-zegar: fitoochrom Pfr (forma "dzienna", absorbuje czerwone 660 nm) → powoli konwertuje do Pr w ciemności; długa noc → mało Pfr = sygnał dla RKD; krótka noc → dużo Pfr = sygnał dla RDD; florigen (FT — FLOWERING LOCUS T, białko wędrujące floemem z liścia do merystemu) mediuje odpowiedź na fotoperiod'
    ],
    model_answer: 'Fotoperiodyzm: zdolność roślin do mierzenia długości dnia i nocy (fotoperiodu) i reagowania na nią poprzez inicjację lub zahamowanie kwitnienia; odkryty przez Garnera i Alarda (1920). Kluczowe odkrycie: decyduje długość CIĄGŁEJ CIEMNOŚCI (nocy), nie długość dnia (Hamner i Bonner 1938) — przerwanie długiej nocy błyskiem czerwonego światła (660 nm, Pfr) blokuje kwitnienie roślin krótkiego dnia. Rośliny krótkiego dnia (RKD, ang. SDP — Short Day Plants): kwitną, gdy noc jest dłuższa od krytycznej wartości (różna dla każdego gatunku, np. >12 h ciemności); biochemia: długa noc → Pfr konwertuje do Pr (fitoochrom w formie nieaktywnej) + degradacja Pfr → wzrost stężenia sygnału "nocnego" → produkcja florigenu (FT mRNA) w liściach → florigen (FT białko) przez floem do merystemu wierzchołkowego → przełączenie na program generatywny; przykład: chryzantema, poinsecja, soja, kukurydza, ryż. Rośliny długiego dnia (RDD, LDP — Long Day Plants): kwitną gdy noc krótsza od krytycznej (= długi fotoperiod); długa noc blokuje kwitnienie; błysk światła nocą = inicjacja kwitnienia (jak w stacjach badań agrotechnicznych); przykład: szpinak, rzodkiewka (Arabidopsis thaliana — model), pszenica jara, hyzop.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Ruchy roślin ───
  {
    topic_id: TOPIC, subtopic_id: S.ruch,
    question_type: 'open',
    question_text: 'Rozróżnij tropizmy od nastii u roślin. Podaj po jednym przykładzie tropizmu i nastii, wyjaśnij mechanizm każdego z tych ruchów i wskaż, czy są one zależne od kierunku bodźca.',
    options: [], correct_answer: [],
    explanation: 'Tropizm: kierunkowy ruch wzrostowy zależny od kierunku bodźca (fototropizm, geotropizm, tigmotropizm). Nastia: ruch niezależny od kierunku bodźca — odpowiedź na sam bodziec (np. sejsmonastia u mimozki, termonastia u tulipana). Mechanizmy: tropizmy = nierównomierna elongacja komórek; nastie = zmiany turgoru (często odwracalne).',
    max_points: 2,
    key_points: [
      'Tropizm: wzrostowy ruch kierunkowy, którego kierunek zależy od kierunku bodźca; bodziec określa, w którą stronę wygina się roślina; mechanizm: nierównomierna elongacja komórek po obu stronach organu (różnicowa elongacja napędzana różnicą stężeń auksyn); przykład: fototropizm łodygi (ku światłu, +:) — bodziec: kierunek światła; geotropizm korzenia (w dół, +:) — bodziec: wektor grawitacji; tigmotropizm wąsów pnączy — bodziec: punkt mechanicznego kontaktu',
      'Nastia: ruch niezależny od kierunku bodźca — roślina reaguje na sam fakt wystąpienia bodźca (np. dotyk, temperatura, oświetlenie), a kierunek ruchu jest z góry anatomicznie określony; mechanizm: najczęściej odwracalne, szybkie zmiany turgoru w specjalizowanych komórkach motorycznych (pulwinus); przykład: sejsmonastia (tigmonastia) u Mimosa pudica — dotyk → impuls elektryczny (jonowy) → odpływ K⁺ i wody z komórek motorycznych pulwinus → spadek turgoru → opadanie liścia w < 1 sek; ruch ten następuje zawsze w tym samym kierunku (zamknięcie) niezależnie od kierunku dotyku'
    ],
    model_answer: 'Tropizmy vs nastie — porównanie: Tropizmy: definicja: wzrostowe ruchy kierunkowe, w których kierunek ruchu zależy od kierunku bodźca (bodziec nierównomierny przestrzennie → asymetryczna elongacja). Mechanizm: nierównomierny rozkład auksyn (lub innych hormonów) po dwóch stronach organu → różnicowa elongacja → wyginanie. Odwracalność: zazwyczaj nieodwracalne (wzrostowe zmiany komórek). Przykład — fototropizm łodygi: bodziec = kierunek niebieskiego światła; fototropiny po stronie oświetlonej → lateralny transport IAA na stronę ciemną → więcej elongacji po ciemnej → wyginanie ku światłu; kierunek określa bodziec (obróć źródło światła → łodyga wygina się w nowym kierunku). Nastie: definicja: ruchy niezależne od kierunku bodźca — bodziec (dotyk, temperatura, oświetlenie ogólne) wywołuje ruch, ale kierunek ruchu jest z góry anatomicznie zdeterminowany. Mechanizm: często odwracalne, szybkie zmiany turgoru w pulwinus (spécjalizowana tkanka motoryczna na podstawie ogonka liściowego lub ulotka). Przykład — sejsmonastia Mimosa pudica: bodziec = mechaniczny dotyk (z dowolnej strony); impuls elektryczny (potencjał czynnościowy, szybki przepływ Ca²⁺ i Cl⁻) → pulwinus podstawowy: gwałtowny odpływ K⁺ i H₂O przez SLAC-like kanały z komórek motorycznych (extensor cells) → spadek turgoru → opadnięcie liścia; kierunek zawsze ten sam (opadnięcie) niezależnie od kierunku dotyku.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  // ─── Odżywianie mineralne roślin ───
  {
    topic_id: TOPIC, subtopic_id: S.min,
    question_type: 'open',
    question_text: 'Wyjaśnij, dlaczego rośliny owadożerne (np. rosiczka, muchołówka) rozwinęły zdolność do trawienia owadów. Jakie składniki mineralne pozyskują z ciał owadów i jakie przystosowania morfologiczne im to umożliwiają?',
    options: [], correct_answer: [],
    explanation: 'Rośliny owadożerne rosną na glebach ubogich w azot i fosfor (torfowiska, kwaśne grunty). Owady: bogate źródło N (białka → aminokwasy) i P (ATP, kwasy nukleinowe). Przystosowania: liście w formę pułapek (rosiczka — lepkie gruczoły; muchołówka — zatrzask mechaniczny), wydzielanie enzymów trawiennych (proteazy, nukleazy), wchłanianie produktów trawienia.',
    max_points: 2,
    key_points: [
      'Przyczyna ewolucji owadożerności: rośliny owadożerne zajmują środowiska skrajnie ubogie w składniki mineralne, szczególnie azot (N) i fosfor (P) — torfowiska, moczary, kwaśne gleby piaszczyste; pobieranie N i P z gleby jest niewystarczające → ewolucja dodatkowego źródła: ciała owadów i innych zwierząt bogate w białka (N w grupach aminowych) i kwasy nukleinowe (P w szkielecie cukrowo-fosforanowym DNA/RNA); N i P wchłonięte z ofiary są transportowane do tkanek rośliny i użyte do syntezy chlorofilu, enzymów, ATP',
      'Przystosowania morfologiczne: (1) rosiczka (Drosera): liście pokryte gruczołami wydzielającymi lepką, błyszczącą substancję mucilaginozową (wabik + pułapka adhezyjne); po złapaniu owada gruczoły zaginają się (tygmotropizm), wydzielają enzymy trawienne (proteazy, esterazy, rybonukleazy) i wchłaniają strawione produkty; (2) muchołówka (Dionaea muscipula): liść dwudzielny z rzęsami na brzegach; dwa sztuczne włoski czuciowe na każdej połówce — dotknięcie dwóch włosków w ciągu 20 sek → potencjał czynnościowy → gwałtowne zamknięcie (zmiana turgoru) → pułapka; następnie wydzielanie enzymów i trawienie przez ~10 dni'
    ],
    model_answer: 'Rośliny owadożerne (Carnivorous plants) — ewolucja odżywiania heterotroficznego u autotrofów: Przyczyna: środowisko niskoskładnikowe — torfowiska (kwaśne pH 4–5, anaerobia hamuje mineralizację azotu organicznego), piaszczyste wydmy, kwaśne kamieniołomy; gleby ubogie w dostępny azot (NH₄⁺, NO₃⁻) i fosfor (H₂PO₄⁻); fotosynteza jest możliwa (CO₂ z powietrza), ale RuBisCO i chlorofil wymagają N — trzeba go skądinąd. Składniki pozyskiwane z owadów: N (z aminokwasów białek ciała owada → aminokwasy wchłonięte → synteza białek, chlorofilu, enzymów); P (z ATP, DNA, fosfolipidów → Pi wchłonięty → cząsteczki komórkowe); Mg, K, S — uzupełniane. Przystosowania morfologiczne: Rosiczka (Drosera): liście z setek gruczołowych tentakul; tentakule wydzielają słodką, lepką mucylaginę (wabik wizualny — błyszczy jak rosa) + pułapka adhezyjno-mechaniczna; po złapaniu — ruch tentakul ku centrum (tygmotropizm napędzany auksyną i etylonem) + wydzielanie proteaz i nukleaz; trawienie zewnętrzne → wchłanianie. Muchołówka (Dionaea): "zatrzask" — zmodyfikowane liście z wyzwalaczem mechanicznym (2 spośród 3 włosków czuciowych stymulowane w 20 s → potencjał czynnościowy → gwałtowna zmiana turgoru w komórkach motorycznych krawędzi liścia → zatrzaśnięcie ~100 ms); gruczołowe enzymy trawią ofiarę przez kilka-kilkanaście dni.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
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
  console.log(`Seeding ${questions.length} open questions for Fizjologia roślin...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.max_points}pkt]`, q.question_text.slice(0, 70).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
