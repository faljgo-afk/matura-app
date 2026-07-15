// Seed batch 5/6 — Biotechnologia
// Fermentacja przemysłowa (5) + Sekwencjonowanie genomu (5)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '8abfb5fe-655a-44b2-910c-7ffe3ce744a1'

const S = {
  ferm: 'ab4c8dd5-833b-4094-b7e4-0c94ff44ccc1',
  sekw: '9f59fca4-ceb3-4483-a3a8-0afcdfa601ee',
}

const questions = [

  // ── FERMENTACJA PRZEMYSŁOWA (5) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.ferm, question_type: 'single',
    question_text: 'Fermentacja alkoholowa i mlekowa to dwa rodzaje fermentacji beztlenowej. Czym różnią się ich produkty końcowe?',
    options: [
      { id: 'A', text: 'Alkoholowa (drożdże, Saccharomyces cerevisiae): glukoza → 2 etanol + 2 CO₂ + 2 ATP; mlekowa (bakterie Lactobacillus, Streptococcus; mięśnie w hipoksji): glukoza → 2 kwas mlekowy + 2 ATP; obie regenerują NAD⁺ bez użycia tlenu', is_correct: true },
      { id: 'B', text: 'Alkoholowa: glukoza → 2 kwas mlekowy + 2 CO₂; mlekowa: glukoza → 2 etanol + H₂O; obydwie produkują identyczną ilość ATP co oddychanie tlenowe', is_correct: false },
      { id: 'C', text: 'Alkoholowa produkuje octanol (C8H17OH) i metan; mlekowa produkuje wyłącznie octan i CO₂; obie fermentacje nie produkują ATP (są wyłącznie kataboliczne)', is_correct: false },
      { id: 'D', text: 'Fermentacja mlekowa i alkoholowa produkują te same produkty (etanol i kwas mlekowy) ale w różnych proporcjach zależnych od temperatury; w niskiej temperaturze dominuje mlekowa, w wysokiej — alkoholowa', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fermentacja = oddychanie beztlenowe po glikolizie; regeneruje NAD⁺ bez łańcucha oddechowego: (1) ALKOHOLOWA: pirogronian (z glikolizy) → dekarboksylaza pirogronianowa → acetaldehyd + CO₂ → dehydrogenaza alkoholowa (ALDH) + NADH → etanol + NAD⁺; produkty: 2 etanol + 2 CO₂; ATP: 2 (tylko z glikolizy); organizmy: Saccharomyces cerevisiae (piwo, wino, pieczywo), Zymomonas mobilis, drożdże Kluyveromyces; (2) MLEKOWA: pirogronian → dehydrogenaza mleczanowa (LDH) + NADH → mleczan + NAD⁺; bez CO₂; ATP: 2; homolaktyczna (Lactobacillus acidophilus: wyłącznie mleczan) vs heterolaktyczna (mleczan + etanol + CO₂); zastosowanie: jogurt, kefir, kiszona kapusta, ogórki, sery.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ferm, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują zastosowania fermentacji przemysłowej? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Produkcja antybiotyków: Penicillium chrysogenum fermentuje w głębinowych bioreaktorach aerobowo → penicylina; selekcja szczepów nadproducentów przez mutagenezę UV + screening; wydajność: 70 g/L (z oryginalnych 0,001 g/L u Fleminga)', is_correct: true },
      { id: 'B', text: 'Produkcja kwasu cytrynowego: Aspergillus niger fermentuje melasę (odpad z produkcji cukru) w warunkach niedoboru azotu i manganu → nagromadzenie kwasu cytrynowego; stosowany jako konserwant (E330) i zakwaszacz w przemyśle spożywczym', is_correct: true },
      { id: 'C', text: 'Bioetanol: fermentacja skrobi kukurydzianej lub cukrowców trzcinowych przez drożdże → etanol stosowany jako paliwo (E10 = 10% etanol w benzynie, E85 = 85%); lignocelulozowy bioetanol (ze słomy) wymaga wstępnej obróbki enzymatycznej (celulazy)', is_correct: true },
      { id: 'D', text: 'Fermentacja przemysłowa nie wymaga kontroli pH, temperatury ani dopływu tlenu; bakterie i drożdże rosną optymalnie w każdych warunkach; biorektory są jedynie pojemnikami i nie mają żadnych systemów sterowania', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) penicylina: Fleming 1928 (odkrycie); Florey & Chain 1940 (oczyszczenie i zastosowanie kliniczne, Nobel 1945); bioreaktory: 100 000 L; pH 6,5; T 25°C; O₂ (aerobowy); precursor: fenyloactan. (B) kwas cytrynowy (E330): >2,5 mln ton/rok; A. niger: zakwaszanie podłoża H₂SO₄ do pH 2 → ogranicza zanieczyszczenia; niedobór Fe²⁺ i Mn²⁺ → hamowanie izocytrynianu dehydrogenazy → akumulacja cytrynianu; zastosowania: napoje, cukierki, kosmetyki, leki (bufor). (C) bioetanol 1. generacji: cukrzcowce (Brazylia: trzcina cukrowa → >70% samochodów); 2. generacja: lignoceluloza (słoma, drewno) → celulazy + hemicelulazy → cukry fermentowalne → etanol; POET-DSM: 1. komercyjna lignocelulozowa biorafineria 2014. (D) fałsz: bioreaktor wyposażony w: systemy pH (kwas/zasada), temperatury (płaszcz chłodzący), napowietrzania (O₂), mieszania (mieszadło), piany (antyspieniacze), sterylności (auto-klawowanie 121°C); kontrola pH kluczowa (penicylina: pH 6,5; kwas cytrynowy: pH 2).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ferm, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących biotechnologii żywności:',
    options: [
      { id: 'A', text: 'Starter bakteryjny w produkcji jogurtu: Lactobacillus delbrueckii subsp. bulgaricus + Streptococcus thermophilus; fermentacja w 42°C przez 4–6h; LAB (lactic acid bacteria) zakwaszają mleko przez produkcję kwasu mlekowego → denaturacja kazeiny → skrzep jogurtowy; probiotyki (żywe kultury) wywierają korzystne efekty zdrowotne.', is_correct: true },
      { id: 'B', text: 'Ser cheddar dojrzewa przez aktywność bakterii Propionibacterium freudenreichii, które produkują CO₂ (dziury w serze) i kwas propionowy (smak orzechowy); dotyczy to wyłącznie serów szwajcarskich (Emmental), nie cheddar.', is_correct: false },
      { id: 'C', text: 'Produkcja wina: tłoczone winogrona (moszcz) fermentowane przez Saccharomyces cerevisiae w warunkach beztlenowych (13–18°C dla białych, nieco wyżej dla czerwonych); zawartość alkoholu ograniczona do ~15% przez toksyczność etanolu dla drożdży.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: symbioza L. bulgaricus + S. thermophilus: protosymbioza — L. bulgaricus produkuje aminokwasy stymulujące wzrost S. thermophilus, który produkuje CO₂ i kwas mrówkowy dla L. bulgaricus; kwas mlekowy → pH 4,6 (punkt izoelektryczny kazeiny) → koagulacja; probiotyki: Lactobacillus acidophilus, Bifidobacterium → korzystne dla mikrobiomu jelita. B — Fałsz: dziury w serze szwajcarskim (Emmental, Gruyère): Propionibacterium freudenreichii produkuje CO₂ z mleczanu → pęcherzyki → otwory (eyes); smak: kwas propionowy + kwas octowy. CHEDDAR: brak dziur; dojrzewanie przez Lactococcus lactis subsp. cremoris + Lb. helveticus; długie dojrzewanie → proteoliza + lipoliza → intensywny smak. C — Prawda: wine yeast S. cerevisiae (szczepy winiarskie: S288C, K1-V1116); fermentacja 10–25°C; powyżej ~15% EtOH → zahamowanie drożdży; desery słodkie (Porto, Sherry): alkohol wynajęty; musujące: drugorzędna fermentacja w butelce (metoda Champenoise).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ferm, question_type: 'single',
    question_text: 'Biogazownia produkuje biogaz w procesie fermentacji beztlenowej (metanowej). Jakie mikroorganizmy i reakcje uczestniczą w tym procesie?',
    options: [
      { id: 'A', text: 'Etapy: (1) hydroliza (bakterie hydrolityczne rozkładają polimery — celulozę, białka, tłuszcze → monomery); (2) acidogeneza (bakterie acidogenne → kwasy organiczne, CO₂, H₂); (3) acetogeneza (bakterie acetogenne → octan, H₂, CO₂); (4) metanogeneza (archeony metanogenne np. Methanobacterium → CH₄ + CO₂); końcowy biogaz: ~60–70% CH₄ + ~30–40% CO₂', is_correct: true },
      { id: 'B', text: 'Biogaz produkowany jest wyłącznie przez drożdże alkoholowe Saccharomyces cerevisiae; jedynym produktem jest etanol, a CO₂ produkowany jako odpad; CH₄ nie jest produkowany w biogazowniach', is_correct: false },
      { id: 'C', text: 'Metanogeneza odbywa się aerobowo (tlenowo) przez grzyby z rodzaju Aspergillus; archeony i bakterie beztlenowe nie uczestniczą w produkcji metanu; temperatura procesu: 400°C', is_correct: false },
      { id: 'D', text: 'Wszystkie etapy fermentacji metanowej katalizowane są przez jeden gatunek bakterii; wyspecjalizowane mikroorganizmy nie istnieją — każda bakteria beztlenowa może przeprowadzić wszystkie 4 etapy jednocześnie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fermentacja beztlenowa / digestion anaerobowa (AD): (1) HYDROLIZA: bacterie Clostridium, Bacteroides, Ruminococcus → celulazy, proteazy, lipazy → glukoza, aminokwasy, glicerol + kwasy tłuszczowe; (2) ACIDOGENEZA: Clostridium, Lactobacillus, Enterobacter → propionian, butyran, etanol, CO₂, H₂, mleczan; (3) ACETOGENEZA (syntrofia): obligatoryjna syntropia z methanogens → octan + CO₂ + H₂ (termodynamicznie możliwa tylko przy niskim [H₂] — usuwany przez metanogeny); (4) METANOGENEZA: archeony (Methanosarcina, Methanobacterium, Methanosaeta): CO₂ + 4H₂ → CH₄ + 2H₂O (hydrogenotroficzna) lub CH₃COO⁻ + H₂O → CH₄ + HCO₃⁻ (acetotroficzna). Biogaz: 60–70% CH₄ + 30–40% CO₂ + śladowe H₂S; temp. 37°C (mezofilne) lub 55°C (termofilne). Zastosowanie: generacja elektryczności/ciepła (CHP); poferment = nawóz (digestat).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ferm, question_type: 'multiple',
    question_text: 'Które z poniższych procesów przemysłowych wykorzystują mikroorganizmy? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Produkcja kwasu glutaminowego (MSG, glutaminian sodu E621): Corynebacterium glutamicum fermentuje melasę w warunkach niedoboru biotyny lub przy wysokiej przepuszczalności błony → nadprodukcja i wydzielanie kwasu glutaminowego (>100 g/L)', is_correct: true },
      { id: 'B', text: 'Bioremediacja: mikroorganizmy (Pseudomonas putida, Rhodococcus) rozkładają zanieczyszczenia organiczne (ropa naftowa, PCB, wielopierścieniowe węglowodory) w glebie i wodzie; katalizowane przez oksygenazy rozkładające pierścienie aromatyczne', is_correct: true },
      { id: 'C', text: 'Biopestycydy: Bacillus thuringiensis produkowany fermentacyjnie i stosowany jako bioinsektycyd zamiast chemicznych insektycydów; stosowany w uprawach ekologicznych i na mosquito larvae (Bti)', is_correct: true },
      { id: 'D', text: 'Produkcja stali: bakterie Acidithiobacillus ferrooxidans przeprowadzają wszystkie etapy produkcji stali w wielkich piecach biologicznych; fermentacja zastąpiła koksowniki w hutnictwie w latach 1990.', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) MSG: Corynebacterium glutamicum odkryte 1957 (Kinoshita, Ajinomoto) przez skrining gleby; C. glutamicum jest biosyntetyczne — zamiast oksaloacetanu → glutaminian przez transaminację; niedobór biotyny lub surowica → nieszczelna błona → wydzielanie Glu (normalnie akumuluje); >3 mln ton/rok MSG; zastosowanie: wzmacniacz smaku (umami). (B) bioremediacja: biostymulacja (dodanie N/P do gleby) + bioaugmentacja (dodanie wybranych szczepów); wycieki ropy (Deepwater Horizon 2010); PCB (polichlorowane bifenyle): Dehalococcoides (dechloracja redukcyjna). (C) Bt: B. thuringiensis var. israelensis (Bti) → larwy Aedes/Culex (komar) i Simulium (meszka); Bt var. kurstaki → larwy Lepidoptera; Bt var. tenebrionis → Coleoptera; NATURALNE, biopestycydy, ekologiczne. (D) fałsz: A. ferrooxidans stosowany w BIOŁUGOWANIU (bioleaching) metali z rud niskogatunkowych (Cu, U, Au) przez oksydację FeS₂ i minerałów siarczkowych → uwalnianie jonów metali; nie w produkcji stali; wielkie piece to wciąż technologia koksowa/elektryczna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── SEKWENCJONOWANIE GENOMU (5) ───────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.sekw, question_type: 'single',
    question_text: 'Projekt Poznania Ludzkiego Genomu (Human Genome Project, HGP) był przełomowym przedsięwzięciem naukowym. Które stwierdzenie POPRAWNIE opisuje jego wyniki i znaczenie?',
    options: [
      { id: 'A', text: 'HGP (1990–2003): sekwencjonowanie haploidalnego genomu ludzkiego (~3 Gb); wyniki: ~20 000–25 000 genów kodujących białka (znacznie mniej niż oczekiwano), >50% genomu = sekwencje powtórzone (SINE, LINE, satelitarne), ~1,5% DNA koduje białka; otworzyło erę genomiki', is_correct: true },
      { id: 'B', text: 'HGP zakończono w 1985 roku przy użyciu wyłącznie metod biochemicznych bez sekwencjonowania DNA; projekt nie stosował żadnych technik bioinformatycznych ani komputerowych', is_correct: false },
      { id: 'C', text: 'HGP wykazał, że liczba genów człowieka wynosi ~3 miliony, po jednym genie na każdą parę zasad DNA; każdy gen koduje dokładnie jedno białko bez alternatywnego splicingu', is_correct: false },
      { id: 'D', text: 'Genom ludzki jest w 60% identyczny z genomem drożdży Saccharomyces cerevisiae; HGP wykazał że geny rybosomalne są jedynymi genami funkcjonalnymi; pozostałe sekwencje to "śmieciowe DNA" bez żadnej funkcji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'HGP: Collins (NIH) + Venter (Celera, prywatny) — konkurencyjna sekwencjonowanie; 2001: drafty (Collins Nature, Venter Science); 2003: kompletny (99,9% euchromatyny). Wyniki kluczowe: (1) ~3 Gb haploidalny; ~6 Gb diploidalny; (2) ~20 000–25 000 genów kodujących białka (C. elegans: 19 000 — tzw. "paradoks C. elegans"; ludzki proteom: ~100 000 białek przez AS, PTM); (3) >80% genomu transkrybowane (ENCODE 2012: ~80% "biochemicznie aktywne"); (4) >50% powtórzone: LINE-1 (17%), Alu (SINE, 10%), LTR-retrotransposony; (5) gęstość genów: chromosom 19 (gęsty) vs Y (rzadki). Zastosowania: identyfikacja genów chorób, SNP mapping, pharmacogenomics, ancestry.',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sekw, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują technologie sekwencjonowania nowej generacji (NGS)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Sekwencjonowanie Illumina (SBS — sequencing by synthesis): fragmenty DNA mostkowane i amplifikowane na flow cell → sekwencjonowanie przy użyciu znakowanych fluorescencyjnie dNTP (reversible terminators) → detekcja kamera CCD; odczyty krótkie (150 bp PE); wysoka przepustowość (>3 Tb/run)', is_correct: true },
      { id: 'B', text: 'Oxford Nanopore Technology (ONT): DNA/RNA przepływa przez białkowe nanopory (MspA lub CsgG) w błonie; prąd jonowy zmienia się gdy każda zasada przechodzi przez por → detekcja sekwencji; odczyty ultradługie (>1 Mb); działa z natywnym RNA bez konwersji cDNA', is_correct: true },
      { id: 'C', text: 'PacBio SMRT (Single Molecule Real-Time): sekwencjonowanie pojedynczych cząsteczek DNA przez polimerazy zakotwiczone w ZMW (Zero-Mode Waveguides); fluorescencyjne dNTP → sygnał optyczny → odczyty długie (10–30 kb); używane do de novo assembly genomów', is_correct: true },
      { id: 'D', text: 'Wszystkie technologie NGS sekwencjonują DNA i RNA z identyczną dokładnością i przy identycznych kosztach; nie ma żadnych różnic w długości odczytów, przepustowości ani zastosowaniach praktycznych między Illumina, PacBio i ONT', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) Illumina (SBS): 2006 (Solexa przejęty przez Illumina); cluster amplification (bridge PCR) na flow cell; reversible terminator: każdy dNTP ma unikalny fluorofor + blokadę 3\'OH → dodanie → fotografia → usunięcie fluoroforu + blokady → następny cykl; błąd główny: substitucje (Q30 = 0,1% błąd); HiSeq X: 3 Tb, WGS za ~200 USD. (B) ONT (Oxford Nanopore, 2014): MinION (USB, 512 pory) → sekwencjonowanie w terenie; MaxSeq 10 (>10 Gb), PromethION; błędy: INDELy (~5%); zastosowania: epidemiologia (COVID-19 GISAID), mikrobiom, strukturalne warianty (SVs). (C) PacBio SMRT (HiFi/CCS): 15–30 kb odczyty; HiFi (circular consensus): wysoka dokładność (>99.9%) przez wielokrotne odczytanie tej samej cząsteczki w kółku; idealny do de novo assembly (T2T genome 2022: chromosome-scale assembly), powtórzonych regionów. (D) fałsz: wyraźne różnice: Illumina: krótkie odczyty (150–300 bp), wysoka dokładność, tania; PacBio: długie, drogie, umiarkowanie przepustowe; ONT: ultradługie, portable, wyższy błąd (choć poprawia się); każda ma inne aplikacje.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sekw, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących genomiki porównawczej i funkcjonalnej:',
    options: [
      { id: 'A', text: 'Genomika porównawcza: porównanie genomów różnych gatunków pozwala identyfikować konserwatywne sekwencje (ultrakonservowane elementy, UCE) o potencjalnej funkcji regulatorowej; im bardziej konserwatywna sekwencja między odległymi gatunkami, tym prawdopodobniej funkcjonalna.', is_correct: true },
      { id: 'B', text: 'Metagenomika: bezpośrednie sekwencjonowanie DNA/RNA ze środowisk bez uprzedniej hodowli mikroorganizmów (np. gleba, woda, jelito); pozwala odkrywać nowe gatunki (niemożliwe do hodowli) i analizować skład mikrobiomu.', is_correct: true },
      { id: 'C', text: 'Projekt ENCODE (Encyclopedia of DNA Elements): wykazał, że 100% genomu człowieka ma precyzyjnie zdefiniowaną funkcję białkową; żadna sekwencja nie jest "junk DNA"; każdy nukleotyd koduje co najmniej jeden exon.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: UCE (Ultraconserved Elements): Bejerano et al. 2004 (Science): 481 elementów 200 nt identycznych między człowiekiem, myszą i szczurem (choć różnią się 300 mln lat ewolucji) → muszą mieć funkcję (regulatory, ncRNA); phastCons (conservation score). B — Prawda: metagenomika: Craig Venter Global Ocean Survey 2004: 1,2 mln nowych białek z oceanu; Human Microbiome Project: ~38 bilionów bakterii w/na człowieku; odkrycie nowych genów antybiotykooporności, szlaków metabolicznych. C — Fałsz: ENCODE 2012: "80% genomu biochemicznie aktywne" (przynajmniej raz transkrybowane lub ze znakami chromatyny) — ale kontrowersyjne; ok. 20% genomu ma prawdopodobną funkcję regulatorową; ENCODE nie twierdził że 100% = funkcjonalne białko; pojęcie "junk DNA" (Ohno 1972) zastępowane "low-constraint DNA"; ok. 8% genomu pod selekcją oczyszczającą (Rands et al. 2014).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sekw, question_type: 'single',
    question_text: 'Projekt sekwencjonowania Telomere-to-Telomere (T2T) zakończony w 2022 roku uzupełnił braki w genomie z HGP. Co było głównym wyzwaniem i jak je pokonano?',
    options: [
      { id: 'A', text: 'Problematyczne regiony: telomery (TTAGGG×n), centromery (α-satelitarne DNA, miliony kopii) i inne sekwencje wysokopowtórzone były niemożliwe do złożenia krótkimi odczytami Illumina (150 bp); T2T stosował ultradługie odczyty PacBio HiFi + ONT (>100 kb) umożliwiające złożenie powtórzeń', is_correct: true },
      { id: 'B', text: 'T2T był projektem polegającym wyłącznie na poprawieniu błędów literówkowych w sekwencji HGP; nie dodano żadnych nowych sekwencji — jedynie poprawiono znane błędy punktowe w 3 miliardach par zasad', is_correct: false },
      { id: 'C', text: 'Głównym wyzwaniem T2T było zsekwencjonowanie mitochondrialnego DNA; rozwiązano to przez hodowlę mitochondriów in vitro i ekstrakcję mtDNA w postaci kolistej; chromosomalne DNA nadal zawiera luki', is_correct: false },
      { id: 'D', text: 'T2T stosował wyłącznie sekwencjonowanie chemiczne (metoda Maxam-Gilberta) które umożliwia sekwencjonowanie długich powtórzeń; NGS nie był stosowany ponieważ jest zbyt zawodny dla powtórzonych regionów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'T2T Consortium (Nurk et al., Science 2022): pierwsza kompletna sekwencja ludzka od telomeru do telomeru obu ramion 23 chromosomów homologowych. Braki HGP: ~8% genomu = "gaps" — głównie centromery, telomery, rDNA (45S ribosomal), heterochromatyna konstytutywna (9p, 9q, 1q, 16q, Yq); krótkimi odczytami Illumina: błędne złożenie powtórzeń (collapse). Podejście T2T: (1) linia komórkowa CHM13 (hydatidiform mole = kompletna haplotypia diploidalna z 1 genomu): eliminuje heterozygotyczność; (2) PacBio HiFi (15–25 kb, 99,9% dokładności) + ONT ultralong (>100 kb) → overlapping reads przez powtórzenia; (3) nowe narzędzia assembly: verkko, hifiasm. Wyniki: +200 Mb nowej sekwencji, 3 967 nowych genów, 2 226 nowych genów białkowych; centromery: mega-kb α-satelitarnych macierzy; zastosowania: pangenomika (PLPANgenomics).',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.sekw, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują zastosowania danych genomowych? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Medycyna personalizowana (precision medicine): profil genomiczny pacjenta (SNP, CNV, mutacje somatyczne) pozwala dostosować leczenie; np. mutacja BRCA1/2 → profilaktyczna mastektomia lub terapia PARP inhibitorami; HER2 amplifikacja → trastuzumab', is_correct: true },
      { id: 'B', text: 'GWAS (Genome-Wide Association Study): porównanie SNP w setkach tysięcy pozycji genomu między przypadkami (chorymi) a kontrolami (zdrowymi) → identyfikacja wariantów genetycznych związanych z ryzykiem chorób wieloczynnikowych (T2D, CVD, schizofrenia, IBD)', is_correct: true },
      { id: 'C', text: 'Bazy danych genomowych: GenBank (NCBI), Ensembl (EBI), UCSC Genome Browser; publiczny dostęp do milionów sekwencji; dbSNP (polimorfizmy), ClinVar (warianty kliniczne), gnomAD (częstość alleli w populacji)', is_correct: true },
      { id: 'D', text: 'Dane genomowe nie mają zastosowania w medycynie sądowej; jedyną uznaną metodą identyfikacji sądowej jest analiza linii papilarnych; DNA nie może być stosowane jako dowód w procesach sądowych w żadnym kraju', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) precision medicine: Initiative "All of Us" (NIH, 1 mln Amerykanów WGS); FoundationOne CDx (FDA) = comprehensive genomic profiling nowotworu; PARP inhibitory (olaparib, niraparib) dla BRCA1/2-mutowanych raków. (B) GWAS: ukDBioBank (>500 000 osób, WGS + EHR); AstraZeneca genomic initiative; odkrycia: FTO → otyłość; APOE4 → Alzheimer (OR 3,7); TCF7L2 → T2D; LDL-C → CAD; wyzwanie: większość SNP (non-coding) → interpretacja. (C) GenBank: >2 miliarda sekwencji; Ensembl: annotacja genomów; VCF format; API BLAST, Entrez. (D) fałsz: DNA forensics: uznane w ponad 100 krajach; CODIS (FBI): 14 STR loci; interpretacja statystyczna (likelihood ratio, match probability); DNA używane jako dowód od lat 1986 (pierwsza sprawa: Pitchfork, UK); cold cases rozwiązywane dzięki genomowym bazom danych komercyjnych (GEDmatch).',
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
  console.log(`Seeding batch 5 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
