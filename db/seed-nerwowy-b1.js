// Seed batch 1/7 — Fizjologia człowieka: układ nerwowy i hormonalny
// Budowa neuronu (7) + Potencjał czynnościowy (3) = 10 questions

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'a4962fbb-433e-47f2-a241-1562fc6ecae4'

const S = {
  budowa:    'd7975ac2-1866-4a54-8763-e26e7a5c05c7',
  potencjal: '7b6eea4d-0085-4f28-9a8a-95345f5d33f6',
}

const questions = [

  // ── BUDOWA NEURONU (7) ────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.budowa, question_type: 'single',
    question_text: 'Neuron jest podstawową jednostką strukturalną i funkcjonalną układu nerwowego. Które stwierdzenie POPRAWNIE opisuje różnicę między aksonem a dendrytami?',
    options: [
      { id: 'A', text: 'Aksony: zazwyczaj jeden na neuron, przewodzą impulsy OD ciała komórkowego (eferentnie); dendryty: liczne, rozgałęzione, przewodzą impulsy DO ciała komórkowego (aferentnie); aksony mogą być mielinizowane i osiągać długość 1 m; dendryty są zawsze krótkie i niemielinizowane', is_correct: true },
      { id: 'B', text: 'Aksony: liczne, krótkie, odbierają sygnały; dendryty: jeden długi wyrostek przewodzący sygnały z ciała komórkowego do efektora; aksony zawierają jądro komórkowe; mielina jest produkowana wyłącznie przez astrocyty w OUN', is_correct: false },
      { id: 'C', text: 'Aksony i dendryty pełnią identyczne funkcje i nie można ich odróżnić morfologicznie ani czynnościowo; mielina otacza zarówno aksony jak i dendryty; jądro komórkowe neuronu jest zlokalizowane w aksonie hillock; dendryty przewodzą impulsy efektywnie do mięśni', is_correct: false },
      { id: 'D', text: 'Dendryty są częścią rdzenia kręgowego i nie należą do neuronów obwodowych; aksony nie mogą ulegać regeneracji nawet w obwodowym układzie nerwowym; mielina jest zbudowana z fosfolipidów produkowanych przez oligodendrocyty zarówno w OUN jak i ONN; kolce dendrytyczne (dendritic spines) są nieobecne u ssaków', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'BUDOWA NEURONU: CIAŁO KOMÓRKOWE (perikarion, soma): zawiera jądro + rybosomy + ER szorstkie (ciałka Nissla) + aparat Golgiego + mitochondria; synteza białek; integracja sygnałów; DENDRYTY: liczne, krótkie, rozgałęzione; zwiększają powierzchnię odbiorczą; KOLCE DENDRYTYCZNE (dendritic spines): wypustki na dendrytach = miejsca synaps; ↑liczba kolców przy uczeniu (plastyczność LTP); AKSON: jeden (może mieć bocznice: collaterals); aksohn hillock: miejsce inicjacji potencjału czynnościowego (PC); gęstość kanałów Na⁺ najwyższa tutaj; akson kończy się bulwą synaptyczną (synaptic knob, terminal bouton); MIELINA: OUN: oligodendrocyty (jeden tworzy do 50 odcinków mielinowych różnych aksonów); ONN: komórki Schwanna (jeden tworzy jeden odcinek); RÓŻNICA WAŻNA: w OUN brak neurolemmy (Schwanna) → mała zdolność regeneracji po urazie; w ONN: neurolemma (Schwanna) + blaszka podstawna → ↑regeneracja; KLASYFIKACJA: pseudounipolarny (czuciowe DRG) — jeden wyrostek dzieli się; unipolarny (sensoryczne bezkręgowce); bipolarny (siatkówka, ślimak); multipolarny (motoneurony, interneurony).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.budowa, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących komórek glejowych i osłonki mielinowej:',
    options: [
      { id: 'A', text: 'Oligodendrocyty (OUN) i komórki Schwanna (ONN) produkują mielinę; mielina jest zbudowana z wielowarstwowej błony komórkowej owiniętej wokół aksonu; skład mieliny: ~70% lipidy (cholesterol, sfingomielina, cerebrozyd, fosfatydylocholina) + ~30% białka (MBP — myelin basic protein, PLP — proteolipid protein w OUN; P0, MBP w ONN); mielina ↑opór poprzeczny + ↓pojemność elektryczną błony aksonu → przewodzenie skokowe (saltatory)', is_correct: true },
      { id: 'B', text: 'Astrocyty pełnią funkcje: tworzenie bariery krew-mózg (BBB: szczelne połączenia śródbłonka + stopki astrocytów + pericyty), regulacja zewnątrzkomórkowego [K⁺] (K⁺ spatial buffering przez Kir4.1), wydzielanie neurotrofin (BDNF, NGF), modulacja synaptyczna (tripartite synapse), regulacja mózgowego przepływu krwi (NVC = neurovascular coupling przez arachidonian/prostaglandyny); astrocyty GABA-ergiczne hamują neurony przy nadmiernej aktywności', is_correct: true },
      { id: 'C', text: 'Mikroglej jest formą neuronu i produkuje mielinę; komórki Schwanna są zlokalizowane wyłącznie w mózgu i rdzeniu kręgowym; luki mielinowe (nody Ranviera) są nieobecne w obwodowym układzie nerwowym; demielinizacja w stwardnieniu rozsianym (SM) dotyczy komórek Schwanna a nie oligodendrocytów; astrocyty nie mają połączeń szczelinowych (gap junctions)', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: MIELINA: SYNTEZA: oligodendrocyt (OUN) owija swoją błoną komórkową wokół aksonu wielokrotnie → spiralna wielowarstwowa struktura; jeden oligodendrocyt mielinizuje wiele aksonów jednocześnie (do 50); komórka Schwanna (ONN): owija jeden odcinek jednego aksonu; MBP (myelin basic protein): białko zasadowe → neutralizuje ujemne ładunki PL; PLP (OUN): białko transbłonowe > 50% białek mieliny OUN; P0 (ONN): adhezja między warstwami; CHOROBY: SM (sclerosis multiplex): autoimmunologiczna demielinizacja OUN → plaki; MBP jako cel autoprzeciwciał; zespół Guillain-Barré (GBS): postinfekcyjna demielinizacja ONN (Campylobacter, CMV, EBV → mimikra molekularna z gangliozydami); CIDP: chroniczna zapalna demielinizacja ONN; leukodystrofie: genetyczne zaburzenia mielinizacji; B — Prawda: TRIPARTITE SYNAPSE: presynaptyczny neuron + postsynaptyczny neuron + astrocyt → astrocyt absorbuje Glu z synaps (EAAT), wydziela gliotransmitery (D-seryna, ATP, Glu) → modulacja plastyczności; BARIERA KREW-MÓZG: śródbłonek (tight junctions: klaudyna-5, okluzyna, ZO-1) + astrocytarne stopki (end-feet) + pericyty; szczelna dla: dużych cząsteczek, nabitych jonowo białek; przepuszczalna dla: wody (AQP4), CO₂/O₂, lipofil. leków; C — Fałsz: MIKROGLEJ: rezydentne makrofagi OUN (pochodne mezenchymy, nie neuroektodermy!); fagocytoza + prezentacja antygenów + wydzielanie cytokin; NIE produkuje mieliny; SM: dotyczy oligodendrocytów (OUN), GBS — Schwanna (ONN); astrocyty mają gap junctions (connexin-43, Cx43) → syncytium elektryczne i metaboliczne.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.budowa, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują transport aksonalny i jego zaburzenia? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Transport aksonalny szybki anterograde (FAST anterograde, 200–400 mm/d): z ciała komórkowego do zakończeń; kinezynа (kinesin, KIF) na mikrotubulach → transportuje pęcherzyki synaptyczne, organelle, białka błonowe; kierunek: ku (+) końcowi mikrotubuli (tzn. od centrum ku obwodowi = anterograde)', is_correct: true },
      { id: 'B', text: 'Transport aksonalny wsteczny (retrograde, 50–200 mm/d): dyneina (dynein, DYNC1H1) na mikrotubulach; kierunek: ku (−) końcowi mikrotubuli (od obwodowych zakończeń ku ciału komórkowemu); transportuje: zużyte organelle (do degradacji przez lizosomy), neurotrofiny (NGF, BDNF + receptor TrkA/TrkB = retrosoma), wirusy (HSV, polio, wścieklizna, tetanospasmin = toksyna tężca!)', is_correct: true },
      { id: 'C', text: 'Transport powolny (slow axonal transport, 1–6 mm/d): translocacja cytoszkieletu (neurofilamentów, mikrotubuli) i białek cytoplazmatycznych (aktyna, klatoryna) ku zakończeniom; mikrotubule neuronu: zbudowane z α/β-tubuliny, stabilizowane przez MAP tau (microtubule-associated protein); hiperfosforylacja tau (kinazy GSK-3β, CDK5) → agregaty (sploty neurofibrylarne, NFT) → choroba Alzheimera', is_correct: true },
      { id: 'D', text: 'Neurotrofiny (NGF, BDNF, NT-3, NT-4/5): produkowane wyłącznie przez ciało komórkowe neuronu; receptor TrkA wiąże BDNF; transport neurotrof. odbywa się wyłącznie drogą anterograde; zaburzenia transportu aksonalnego nie mają związku z chorobami neurodegeneracyjnymi; mikrotubule w neuronie zorientowane są przypadkowo, bez stałej polaryzacji', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) KINESIN: rodzina białek motorycznych (KIF1–KIF27); struktura: 2 głowy motoryczne (ATP-aza) + domena ogonowa (wiązanie cargo); krok: 8 nm/ATP; siła: 5–7 pN; PĘCHERZYKI SYNAPTYCZNE: produkowane przy aparacie Golgiego → transport anterograde; CHOROBA ALZHEIMERA: mutacje KIF5A (heavy chain) → transport aksonalny; choroba Huntingtona: huntingtyna (HTT) jest czynnikiem ściółkowania kinesyny; (B) TOKSYNA TĘŻCA (tetanospasmin): produkowana przez Clostridium tetani → wchodzi do zakończeń ruchowych → retrograde do interneuronów rdzenia kręgowego → hamuje pęcherzyki GABAergiczne/glicynergiczne → spastyczny paraliż/tężec; WŚCIEKLIZNA: wirus → retrograde w aksonie → OUN (period inkubacji = czas retrograde transport); BOTULINUM vs TETANUS: obie są toksynami Clostridium; botulinun: działa presynaptycznie w synapsie nerwowo-mięśniowej → blokuje SNARE → ↓Ach uwolnienie → wiotki paraliż; tetanospasmin: retrograde → interneurony → blokuje hamowanie → spastyczny; (C) MIKROTUBULE W AKSONIE: w aksonie (+) koniec skierowany ku zakończeniu; w dendrytach: mieszana polaryzacja; MAPs: tau (akson), MAP2 (dendryty, soma); AGREGACJA TAU: fosforylacja S202, T205 (AT8 epitop) → ↓powinowactwo do mikrotubuli → agregacja β-kartka → PHF (paired helical filaments) → NFT (neurofibrylary tangles) → Alzheimer; (D) fałsz: neurotrofiny produkowane przez TKANKĘ DOCELOWĄ (mięśnie, neurony postsynaptyczne) → absorbowane przez zakończenia → retrograde do jądra; TrkA: receptor dla NGF (nie BDNF); BDNF: TrkB; NT-3: TrkC; p75NTR: nisko-powinowactwy receptor pantrk → apoptoza lub modulacja Trk; mikrotubule w aksonie mają STAŁĄ POLARYZACJĘ (+) koniec ku obwodowi.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.budowa, question_type: 'single',
    question_text: 'Nody Ranviera odgrywają kluczową rolę w przewodzeniu impulsów w zmielinizowanych aksonach. Które stwierdzenie POPRAWNIE wyjaśnia mechanizm przewodzenia skokowego?',
    options: [
      { id: 'A', text: 'W zmielinizowanych aksonach prądy elektryczne przeskakują między nodami Ranviera (co 1–2 mm) bez depolaryzacji internodów; nody Ranviera mają bardzo wysoką gęstość napięciozależnych kanałów Na⁺ (Nav1.6 głównie, ~1200/μm²) → regeneracja sygnału; internody: izolacja mielinowa → ↑opór poprzeczny + ↓pojemność → prąd przepływa biernie (elektrotonicznie) przez internod do kolejnego noda; efekt: ↑prędkość przewodzenia (do 120 m/s) + ↓zużycie energii (Na⁺/K⁺-ATPaza tylko w nodach)', is_correct: true },
      { id: 'B', text: 'Nody Ranviera są miejscami, gdzie mielina jest najgrubsza; w nodach nie ma kanałów Na⁺; przewodzenie skokowe polega na skakaniu jonów K⁺ po warstwach mieliny; prędkość przewodzenia w zmielinizowanych aksonach jest wolniejsza niż w niemielinizowanych o tej samej średnicy; ATP zużywane jest głównie w internodach a nie w nodach', is_correct: false },
      { id: 'C', text: 'Przewodzenie skokowe zachodzi wyłącznie w neuronach autonomicznego układu nerwowego; nody Ranviera są obecne tylko w rdzeniu kręgowym; w nodach dominują kanały K⁺ i brak kanałów Na⁺; prędkość przewodzenia nie jest związana ze średnicą aksonu; demielinizacja nie wpływa na szybkość przewodzenia impulsów', is_correct: false },
      { id: 'D', text: 'Internody (odcinki mielinowe) są miejscami generacji potencjałów czynnościowych; nody Ranviera pasywnie przewodzą sygnał; mielina jest produkowana wyłącznie przez astrocyty; gęstość kanałów Na⁺ jest najwyższa w internodach; przewodzenie w aksonach niemielinizowanych jest zawsze szybsze niż w zmielinizowanych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PRZEWODZENIE SKOKOWE (saltatory conduction): FIZYKA: mielina ↑Rm (opór membranowy) × 100 + ↓Cm (pojemność) × 100 → ↑stała czasowa (τ = Rm×Cm nie zmienia się!) ale ↑stała przestrzenna (λ = √(Rm/Ri)) → prąd pasywny sięga dalej; NOD RANVIERA: długość ~1 μm; aksoplazma nieosłonięta; Nav1.6 (główny w nodach dojrzałych, Nav1.2 w nodach niemielinizowanych i niedojrzałych) ~1000–2000/μm²; Kv1.1, Kv1.2 (Kv1 = delayed rectifier K⁺ channels): para-nodalne, wychodzą przy demielinizacji → blokada Kv1 (aminopirydyna = 4-AP) przywraca przewodzenie w SM!; JUXTAPARA-NOD: Kv1 channels + Caspr2 (antygenowy w LGI1 autoimmune); PARA-NOD: Caspr/Paranodin + contactin → wiążą MBP w mielinie; PRĘDKOŚĆ: zależy od średnicy d aksonu (f(√d) w niemieliniz.; f(d) w mieliniz.); reguła: prędkość (m/s) ≈ 6 × średnica (μm) dla Aα włókien (propriocepcja, motoryka); DEMIELINIZACJA (SM): blok przewodzenia lub ↓prędkość; heat-sensitive (objaw Uhthoffa: ↑T → blok) bo mielina + wysoka T → skrócony czas otwierania Nav.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.budowa, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących klasyfikacji neuronów według funkcji i rodzaju włókien nerwowych:',
    options: [
      { id: 'A', text: 'Neurony czuciowe (aferentne, sensoryczne): przewodzą impulsy z receptorów do OUN; ciała komórkowe w zwojach grzbietowych (DRG) lub zwojach nerwów czaszkowych; typ pseudounipolarny; włókna Aα (Ia, Ib): grube, mielinizowane, szybkie (70–120 m/s) = propriocepcja (wrzeciona mięśniowe, narządy ścięgniste Golgiego); Aβ (II): dotyk, wibracja (30–70 m/s); Aδ (III): ból ostry, temperatura zimna (5–30 m/s, cienka mielina); C (IV): ból przewlekły, temperatura ciepła (0,5–2 m/s, niemielinizowane)', is_correct: true },
      { id: 'B', text: 'Neurony ruchowe (eferentne): alfa-motoneurony (Aα) unerwiają włókna mięśniowe szkieletowe (extrafusalne); gamma-motoneurony unerwiają włókna intrafusalne wrzeciona mięśniowego → regulują czułość wrzeciona (coactivation α-γ przy ruchu dobrowolnym); interneurony: komórki Renshaw (glicynergiczne) → hamowanie zwrotne alfa-motoneuronów; komórki Ia inhibitory interneurons: hamują antagonistyczne motoneurony (reciprocal inhibition)', is_correct: true },
      { id: 'C', text: 'Włókna C (niemielinizowane) są najszybszymi włóknami nerwowymi i przewodzą propriocepcję; neurony motoryczne unerwiają bezpośrednio receptory czuciowe; zwoje DRG (dorsal root ganglia) zawierają interneurony; komórki Renshaw są pobudzającymi interneuronami używającymi acetylocholiny jako neuroprzekaźnika; włókna Aβ przewodzą ból ostry z prędkością 120 m/s', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: KLASYFIKACJA ERLANGER-GASSER (A,B,C): A-WŁÓKNA: grube mielinizowane; Aα (Ia,Ib): 12–22 μm, 70–120 m/s; Aβ (II): 6–12 μm, 30–70 m/s; Aγ: 3–6 μm, 15–30 m/s (eferentne do wrzecion); Aδ (III): 1–5 μm, 5–30 m/s; B-WŁÓKNA: przedzwojowe autonomiczne, mielinizowane, <3μm, 3–15 m/s; C-WŁÓKNA: niemielinizowane, 0,2–1,5 μm, 0,5–2 m/s; bólprzewlekły (C), temperatura; PODWÓJNA BÓLOWA odpowiedź: Aδ = ostry, precyzyjny, pierwsza ból ("first pain"); C = palący, rozlany, drugi ból ("second pain"); GATE CONTROL THEORY (Melzack-Wall 1965): Aβ stymulacja → interneurony hamujące → ↓C i Aδ wejście → ↓ból; podstawa TENS (transcutaneous electrical nerve stimulation); B — Prawda: α-MOTONEURON: duże neurony rogu przedniego rdzenia; stała końcowa Ia → tworzą jednostkę ruchową; γ-MOTONEURON: ~30% motoneuronów w DH; fusimotor → włókna intrafusalne (bag1, bag2, chain); RENSHAW: pobudzana przez aksony boczne α-motoneuronów (Ach) → hamuje zwrotnie te same α-motoneurony + γ + interneurony Ia; glicyna (strychnina blokuje!); RECIPROCAL INHIBITION: zginanie kończyny: ↑Ia z wrzeciona zginacza → pobudza zginacz + przez interneuron Ia hamuje prostownik (antagonistyczny); c — Fałsz: włókna C = NAJWOLNIEJSZE (nie najszybsze!); motoneurony unerwiają mięśnie (nie receptory); DRG: ciała komórkowe pseudounipolarnych neuronów czuciowych (nie interneurony); Renshaw = HAMUJĄCE; Aβ przewodzi dotyk (30–70 m/s), nie ból ostry ani 120 m/s.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.budowa, question_type: 'single',
    question_text: 'Na podstawie poniższego opisu: Podczas wybuchu aksonowego neuronu wydzielane są neuroprzekaźniki, które działają na receptor postsynaptyczny. Jednak po pewnym czasie receptor staje się coraz mniej wrażliwy na ten sam bodziec. Który MECHANIZM KOMÓRKOWY wyjaśnia to zjawisko?',
    options: [
      { id: 'A', text: 'Desensytyzacja receptora: przy długotrwałej lub silnej stymulacji receptory jonotropowe (np. nAchR, AMPA) mogą wejść w stan zamknięty/desensytyzowany mimo obecności agonisty; receptory metabotropowe (GPCR): fosforylacja przez GRK (kinazy receptorów sprzężonych z białkami G) → ↑ powinowactwo do β-arrestiny → internalizacja receptora (endocytoza klatrynozależna) + ↓sygnalizacja (downregulation); przywrócenie wrażliwości: recycling receptorów z endosomów lub nowa synteza', is_correct: true },
      { id: 'B', text: 'Receptor jest trwale aktywowany przez neurotransmiter i nie może być dezaktywowany; fosforylacja receptora przez GRK zwiększa jego wrażliwość; β-arrestyna blokuje internalizację i utrzymuje receptor na powierzchni; AMPA receptor nie ulega desensytyzacji nawet przy ciągłej stymulacji glutaminianem; zjawisko to nazywa się uczuleniem (sensitization) a nie desensytyzacją', is_correct: false },
      { id: 'C', text: 'Opisane zjawisko to presynaptyczne hamowanie: presynaptyczny neuron hamuje własne wydzielanie neurotransmitera; receptor postsynaptyczny nie jest zaangażowany; mechanizm opiera się wyłącznie na autoreceptorach metabotropowych; nie dotyczy receptorów jonotropowych takich jak AMPA czy NMDA; zjawisko to nie ma znaczenia klinicznego', is_correct: false },
      { id: 'D', text: 'Zjawisko to wynika z braku ATP w aksonie; neuroprzekaźniki ulegają rozkładowi przez enzymy postsynaptyczne zanim dotrą do receptora; receptor postsynaptyczny produkuje własny neuroprzekaźnik, który hamuje sygnał; tolerancja receptora jest dziedziczona i nie może być modulowana farmakologicznie; mielina blokuje sygnał w połączeniu synaptycznym', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'DESENSYTYZACJA: MECHANIZMY: (1) JONOTROPOWE: a) "channel block" — nAchR przy stałej Ach stymulacji → zmiana konformacyjna do stanu "desensytyzowanego" (zamknięty mimo agonisty); b) fosforylacja przez PKA/PKC → ↑rate desensytyzacji; AMPA: desensytyzacja w ms bez fosforylacji (AMPA w neuronach audytywnych szybka desensytyzacja → kodowanie informacji); NMDA: wolniejsza desensytyzacja + zależna od Mg²⁺-bloku; (2) GPCR (metabotropowe): ETAPY: Agonist → GPCR aktywowany → GRK (1–7) fosforyluje C-koniec i 3. pętlę wewnątrzkomórkową → ↑powinowactwo do β-arrestiny-1/2 → "uncoupling" od G-białka; β-ARRESTINA: funkcja adaptera klasterynowego → klatryna + AP2 → endocytoza; endosomalny los: recykling szybki (np. β₂AR → surface) lub degradacja lizosomalna (długotrwała desensytyzacja); RESENSYTYZACJA: fosfodiesterazy usuwają cAMP; fosfatazy defosforylują receptor; recykling z endosomów; KLINIKA: tolerancja opioidów: ciągła stymulacja μOR → GRK2 fosforylacja → internalizacja → ↓efekt; tolerancja β-agonistów w astmie (salbutamol długotrwały → ↓liczba β₂AR); tachyfilaksja adrenaliny (szybka).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.budowa, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują cytoszkielet neuronu i jego rolę w chorobach neurodegeneracyjnych? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Cytoszkielet neuronu składa się z: mikrofilamentów aktynowych (7 nm, skupione w growth cone i dendrytycznych kolcach), neurofilamentów (intermediate filaments, 10 nm: NF-L + NF-M + NF-H — "H" ma długi ogon z wielokrotnymi fosforylacjami Lys-Ser-Pro → reguluje kaliber aksonu) i mikrotubuli (25 nm, α/β-tubulina, ~13 protofilamenty, zorganizowane wzdłuż osi aksonu); kalibr aksonu determinuje prędkość przewodzenia (↑kaliber → ↑prędkość)', is_correct: true },
      { id: 'B', text: 'Choroba Alzheimera: dwa patologiczne markery: (1) płytki amyloidowe (senile plaques) = zewnątrzkomórkowe złogi peptidu Aβ (amyloid-β, 40–42 aa, produkt sekwencyjnego cięcia APP przez β-sekretazę/BACE1 + γ-sekretazę); (2) sploty neurofibrylarne (NFT, neurofibrillary tangles) = wewnątrzkomórkowe agregaty hiperfosforylowanego tau; tau: normalnie stabilizuje mikrotubule w aksonie; hiperfosforylacja → ↓wiązanie do mikrotubuli → dystabilizacja transportu + agregacja w PHF (paired helical filaments)', is_correct: true },
      { id: 'C', text: 'Choroba Parkinsona: ↓dopaminy w istocie czarnej (substantia nigra, pars compacta → prążkowia = striatum = caudate + putamen); ciała Lewy\'ego (Lewy bodies) = eozynofilowe wtrącenia z α-synukleiną (SNCA) + ubikwityną + neurofilamentami; α-synukleina: presynaptyczne białko, agregacja → toksyczne oligomery → mitochondria uszkodzenie + ↓transport aksonalny + proteasom dysfunkcja; mutacje: SNCA (A53T), Parkin (E3 ligaza ubikwitynowa), PINK1 (kinaza mitochondrialna), DJ-1 (redoks sensor)', is_correct: true },
      { id: 'D', text: 'Neurofilamenty są produkowane wyłącznie przez komórki glejowe; tau jest białkiem błony synaptycznej i nie wiąże się z mikrotubulami; amyloid-β w chorobie Alzheimera pochodzi wyłącznie z lipidów; α-synukleina jest markerem choroby Alzheimera a nie Parkinsona; mikrotubule w neuronie są zbudowane z aktyny a nie tubuliny', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) CYTOSZKIELET: AKTYNA (G-akty + F-aktyna): w growth cone lamellipodia i filopodia → kierowanie aksonu; kolce dendrytyczne: aktyna pod kontrolą RhoA, Rac1, Cdc42 → plastyczność synaptyczna; NEUROFILAMENTY: trifilament (NF-L+M+H); fosforylacja NF-H ogona (w aksonie): ↑odstęp między filamentami → ↑kaliber → ↑prędkość; w chorobach (ALS, Alzheimer): NF kumulują się; MIKROTUBULE: GTP-cap na (+) końcu → stabilny; hydrolyza GTP → GDP-tubulina → katastrofa (depolimeryzacja); MAPs: τ (akson), MAP2 (dendryty), MAP1; leki celujące w mikrotubule: taksany (stabilizacja → ↑polimeryzacja → ↓mitoza → chemioterapia); (B) APP (amyloid precursor protein, gen chr 21): APP → α-sekretaza (ADAM10) → sAPPα + αCTF (nie-amyloidogenny szlak); → BACE1 (β-sekretaza) → sAPPβ + βCTF → γ-sekretaza (PS1/PS2 kompleks) → Aβ40 (normalny) + Aβ42 (agreguje!); FAZA 1: agregacja Aβ42 → oligomery → fibryle → płytki; oligomery toksyczne (nie plaques!); TRISOMIA 21: 3 kopie APP → wcześniejszy alzheimer; FARMAKOTERAPIA: lecanemab (Leqembi), donanemab = anty-Aβ przeciwciała monoklonalne (FDA 2023/2024) → redukują Aβ + spowalniają progresję; (C) PARKINSON: CIRCUIT: substantia nigra (SNc, dopaminergiczna) → nigrostriatalna droga → ↑D1R (bezpośrednia droga, ↑ruch) + ↓D2R (pośrednia droga, ↓ruch) w striatum; utrata SNc → ↓dopaminy → ↑hamowanie aktywności ruchowej → bradykinezja, rigidity, tremor; LECZENIE: L-DOPA + karbidopa (DDC inhibitor) + COMT inhibitor; dopamina agonisty (pramiksepol, ropinirol); MAO-B inhibitory (selegilina, rasagilina); (D) Fałsz: neurofilamenty: NEURONY (NF-L, NF-M, NF-H); tau: wiąże mikrotubule przez powtarzalne domeny R1–R4 (3R i 4R izoformy); Aβ pochodzi z APP (białka); α-synukleina = marker Parkinsona (ciała Lewy\'ego); mikrotubule: tubulina (α+β).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── POTENCJAŁ CZYNNOŚCIOWY (3) ────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.potencjal, question_type: 'single',
    question_text: 'Potencjał czynnościowy neuronu przebiega przez kilka charakterystycznych faz. Który opis POPRAWNIE wyjaśnia sekwencję zdarzeń jonowych podczas potencjału czynnościowego?',
    options: [
      { id: 'A', text: 'FAZY PC: (1) Potencjał spoczynkowy (−70 mV): dominuje przepływ K⁺ przez kanały Kir (inward rectifier) + ↑gK przez GIRK; gradient Na⁺ utrzymywany przez Na⁺/K⁺-ATPazę (3Na⁺ out / 2K⁺ in); (2) Depolaryzacja: bodziec → ↑gNa (Nav, napięciozależne) → Na⁺ rush in → do 0 mV i powyżej (overshooting, +30 mV); (3) Repolaryzacja: Nav inaktywacja (h-gate) + opóźniona aktywacja Kv (delayed rectifier) → K⁺ out; (4) Hiperpolaryzacja (undershoot, −80 mV): Kv powoli zamykają; powrót do spoczynku: Na⁺/K⁺-ATPaza', is_correct: true },
      { id: 'B', text: 'Potencjał spoczynkowy wynosi +70 mV (wewnątrz dodatni); podczas depolaryzacji K⁺ wchodzi do komórki przez kanały Nav; repolaryzacja jest spowodowana wejściem Na⁺; Na⁺/K⁺-ATPaza generuje napięcie i jest głównym źródłem potencjału czynnościowego; prawo wszystko-albo-nic oznacza, że słabszy bodziec wywołuje słabszy potencjał czynnościowy', is_correct: false },
      { id: 'C', text: 'Potencjał czynnościowy polega na ruchu Cl⁻ przez kanały HCN; Ca²⁺ jest jedynym jonem odpowiedzialnym za depolaryzację; hiperpolaryzacja oznacza wzrost potencjału do wartości bardziej dodatnich; kanały Nav otwierają się podczas hiperpolaryzacji; okres refrakcji bezwzględnej trwa kilkanaście sekund i uniemożliwia każdy ruch przez kilkanaście sekund po PC', is_correct: false },
      { id: 'D', text: 'W spoczynku wewnątrz neuronu jest nadmiar Na⁺; podczas PC błona nie zmienia swoich właściwości elektrycznych; Kv (opóźnione prostowniki) aktywują się jako pierwsze przed Nav; hiperpolaryzacja jest wywołana nadmiernym wejściem Na⁺; prawo wszystko-albo-nic nie stosuje się do neuronów, tylko do komórek mięśnia sercowego', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'POTENCJAŁ CZYNNOŚCIOWY — MECHANIZM: HODGKIN-HUXLEY MODEL (1952, nagroda Nobla 1963): prąd jonowy = gNa × (V−ENa) + gK × (V−EK) + gL × (V−EL); RÓWNANIE GOLDMANA: Vm = (RT/F) × ln[(PK×[K]o + PNa×[Na]o + PCl×[Cl]i) / (PK×[K]i + PNa×[Na]i + PCl×[Cl]o)]; SPOCZYNEK: PK >> PNa; EK = −90 mV; ENa = +60 mV; Vm = −70 mV (kompromis); gK dominuje przez Kir2.1 (IK1) i TREK; PRÓG POBUDLIWOŚCI: −55 mV (ok. 15 mV ponad spoczynek); poniżej progu: kanały Nav zamykają się → subprogowy depolaryzacja gaśnie; AKTYWACJA Nav: m-gate (aktywacyjny): otwiera się szybko (ms) przy depolaryzacji; h-gate (inaktywacyjny): zamyka się wolniej → ogranicza czas otwarcia Nav; KINETYКА: Nav: szybki → szybka depolaryzacja; Kv (KDR = delayed rectifier): wolniejszy → K⁺ out podczas repolaryzacji; PRAWO WSZYSTKO-ALBO-NIC: amplituda PC niezależna od siły bodźca (pod warunkiem przekroczenia progu); kodowanie intensywności bodźca przez CZĘSTOTLIWOŚĆ PC (rate coding), nie amplitudę; PRĄD JONOWY: całkowity Na⁺ wchodzący podczas 1 PC: ~3×10⁻¹² mol/cm² → zaniedbywalny wzrost [Na⁺]i; po tysiącach PC — Na⁺/K⁺-ATPaza wyrównuje.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.potencjal, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących okresów refrakcji i prawa wszystko-albo-nic:',
    options: [
      { id: 'A', text: 'Okres refrakcji bezwzględny (absolute refractory period, ARP): czas, gdy żaden bodziec (nawet bardzo silny) nie wywoła nowego PC; odpowiada fazie inaktywacji Nav (h-gate zamknięty); czas trwania: ~1–2 ms w neuronach; wyznacza MAKSYMALNĄ częstotliwość wyładowań neuronu (~500–1000 PC/s); ARP jest niezależny od siły bodźca', is_correct: true },
      { id: 'B', text: 'Okres refrakcji względny (relative refractory period, RRP): następuje po ARP; podczas RRP Nav wychodzą ze stanu inaktywacji (h-gate otwiera się) + Kv (delayed rectifier) są jeszcze częściowo otwarte → błona hiperpolaryzowana; aby wywołać nowy PC w RRP potrzebny jest SILNIEJSZY niż progowy bodziec; w RRP wywołany PC ma mniejszą amplitudę i wolniejszy przebieg', is_correct: true },
      { id: 'C', text: 'Prawo wszystko-albo-nic oznacza, że amplituda PC zależy od siły bodźca: silniejszy bodziec wywołuje wyższy PC; podczas bezwzględnego okresu refrakcji kanały Nav są w stanie aktywacji (m-gate otwarty, h-gate otwarty) i mogą natychmiast reagować na kolejny bodziec; kodowanie intensywności bodźca zmysłowego odbywa się przez zmianę amplitudy PC; RRP jest krótszy niż ARP', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: STANY Nav: Closed (spoczynek: m zamknięty, h otwarty) → Open (aktywowany: m otwarty, h otwarty) → Inactivated (m otwarty, h zamknięty) → Closed (m zamknięty, h otwarty); ARP = czas INACTIVATED; leki stabilizujące inaktywację: leki LA (lignocaina, bupiwakaina) blokcują kanał Nav (use-dependent) → zwiększają ARP → ↓częstotliwość PC (zastosowanie: znieczulenie, arytmie); fenytolina, karbamazepina (Na⁺ channel blockers) → ↑ARP neuronów epileptycznych; B — Prawda: RRP: h-gate wychodzi z inaktywacji (powrót zależy od Vm — jest szybszy przy hiperpolaryzacji); hiperpolaryzacja (undershoot) skraca powrót z inaktywacji: IM Kv → błona hiperpolaryzuje → szybki recovery h-gate; ale jednocześnie: by zdepolaryzować do progu przy hiperpolaryzacji → potrzeba silniejszego bodźca; RRP ważny klinicznie: w epilepsji: ↓ARP lub ↓RRP → ↑łatwość kolejnych PC; antyepileptyki: karbamazepina, fenytolina (użycie-zależne) → wydłużają ARP/RRP; C — Fałsz: WSZYSTKO-ALBO-NIC: amplituda PC NIE zależy od bodźca (stała ≈100 mV); kodowanie = CZĘSTOTLIWOŚĆ (rate code) + TIMING; inaktywacja Nav (h zamknięty) = ARP: Nav NIE może reagować na bodziec; RRP jest DŁUŻSZY (5–15 ms) od ARP (1–2 ms) — fałsz w tekście.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.potencjal, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują czynniki wpływające na prędkość przewodzenia impulsów nerwowych? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Prędkość przewodzenia zależy od: (1) mielinizacji: zmielinizowane aksony przewodzą wielokrotnie szybciej (do 120 m/s) niż niemielinizowane (0,5–2 m/s) tego samego kalibru; przewodzenie skokowe między nodami Ranviera; (2) średnicy aksonu: ↑średnica → ↓opór podłużny (Ri) → ↑stała przestrzenna (λ) → szybsze przewodzenie; reguła dla Aα: v ≈ 6×d (m/s, μm); (3) temperatury: ↑temp. → ↑prędkość (Q10 ≈ 1,8 dla przewodzenia)', is_correct: true },
      { id: 'B', text: 'Prawo Ohma dla aksonu: V = I × R; opór wewnątrzkomórkowy Ri ∝ 1/r² (r = promień); opór transbłonowy Rm ∝ 1/(2πrL); stała przestrzenna λ = √(Rm/Ri) ∝ √r; większy promień → dłuższa λ → sygnał rozchodzi się dalej bez tłumienia → szybsze przewodzenie; mielina: ↑Rm (brak jonów wychodzących przez internod) + ↓Cm → ↑λ + nie zmienia τ (Rm×Cm podobne) ale ↑prędkość przez ↑λ', is_correct: true },
      { id: 'C', text: 'Demielinizacja (np. w stwardnieniu rozsianym) prowadzi do: (1) ↓prędkości przewodzenia (sygnał "wycieka" przez odkryte internody); (2) bloku przewodzenia przy bodźcach o wysokiej częstotliwości; (3) pojawienia się objawów czuciowych (drętwienie, mrowienie) i ruchowych (niedowład); "kontynentalny ruch" PC na internody (continuous conduction) zamiast skokowego; 4-aminopirydyna (dalfampridine): bloker Kv1 ujawnionych przez demielinizację → przywraca przewodzenie (lek w SM na poprawę chodu)', is_correct: true },
      { id: 'D', text: 'Zimno zawsze przyspiesza przewodzenie nerwowe; mielinizacja zmniejsza prędkość przewodzenia o 80%; rozkurcz mięśnia sercowego zależy od szybkości przewodzenia w neuronach motorycznych; demielinizacja nie wpływa na prędkość przewodzenia; grubość aksonu i prędkość przewodzenia są odwrotnie proporcjonalne (grubszy = wolniejszy)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) KLASYFIKACJA WEDŁUG PRĘDKOŚCI: Aα: 70–120 m/s (średnica 12–22 μm); Aβ: 30–70 m/s (6–12 μm); Aγ: 15–30 m/s (3–6 μm); Aδ: 5–30 m/s (1–5 μm); B-włókna: 3–15 m/s (<3 μm); C: 0,5–2 m/s (0,2–1,5 μm); TEMPERATURA: każdy Q10 = 1,3–1,8 dla otwierania kanałów jonowych i dyfuzji; zimno → ↓prędkość + ↓amplituda + ↑threshold; stąd: miejscowe schłodzenie → analgezja (↓Aδ i C); objaw Uhthoffa w SM: gorąca kąpiel → ↓przewodzenie przez demielinizowane aksony → ↑objawy; (B) CABLE THEORY (Hermann Munk, Lord Kelvin): λ = √(Rm/Ri); τ = Rm × Cm; prędkość ∝ λ/τ = √(Rm/Ri)/(Rm×Cm) = √(1/(Ri×Cm)); mielina: ↑Rm (×100) + ↓Cm (×100) → Rm×Cm ≈ stałe → τ podobne; ale ↑Rm → ↑λ → wolna (elektrotoniczna) składowa dociera do następnego noda → aktywuje Nav; bez mieliny: λ krótsze → elektrotoniczna fala gaśnie szybciej; (C) SM LECZENIE OBJAWOWE: DALFAMPRIDINE (Ampyra, 10 mg 2×/d): sustained-release 4-AP; mechanizm: blokcja Kv1.1/1.2 (para-nodalne K⁺ kanały odsłonięte przez demielinizację) → wydłużenie repolaryzacji → umożliwia reinicjację PC na demielinizowanych odcinkach; wskazanie: poprawa chodu u dorosłych z SM; ryzyko: napady padaczkowe (↑neuronalna pobudliwość przy zbyt wysokim stężeniu); (D) fałsz: zimno ↓prędkość; mielina ↑prędkość; serce unierwiają neurony autonomiczne ale skurcz mięśnia sercowego = automatyzm SA węzła + układ przewodzący (nie neurony motoryczne somatyczne); demielinizacja obniża prędkość; grubszy akson = szybszy.',
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
