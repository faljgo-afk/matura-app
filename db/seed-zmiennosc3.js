// Seed: Zmienność i mutacje — batch 3 (15 questions)
const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const T = 'dbd40510-9cc5-4a56-8733-2455c18e5c76'
const S = {
  jednogenowe: '6853283a-4c8b-4117-ab70-432aa25e4a58',
  chromosom_c: '2020184b-368b-4365-a9ad-708db9f1030f',
  ewolucja:    '3f1ac27d-827e-4715-932d-a815516d8396',
}

const questions = [
  // ─── Choroby genetyczne jednogenowe (7) ───
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nMukowiscydoza (cystic fibrosis) jest przykładem choroby autosomalnej recesywnej, w której:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'mutacja genu CFTR powoduje brak funkcjonalnego kanału chlorkowego w komórkach nabłonkowych → gęsty śluz w płucach, przewodzie pokarmowym i trzustce → nawracające infekcje i niewydolność trzustki', is_correct: true },
      { id: 'B', text: 'mutacja powoduje nadprodukcję mukopolisacharydów przez lizosomy → nagromadzenie substancji w komórkach → choroba spichrzeniowa', is_correct: false },
      { id: 'C', text: 'choroba dotyczy wyłącznie układu nerwowego — dzieci z mukowiscydozą mają prawidłową czynność płuc i trzustki', is_correct: false },
      { id: 'D', text: 'choroba dziedziczona jest autosomalnie dominująco — wystarczy jeden wadliwy allel CFTR, aby zachorować', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Mukowiscydoza (CF): gen CFTR (chr. 7q31.2), koduje kanał chlorkowy (ABC transporter). Najczęstsza mutacja: delta-F508 (delecja fenyloalaniny w pozycji 508) → białko CFTR nieprawidłowo złożone → degradacja w ER. Brak CFTR → brak transportu Cl⁻ → woda nie płynie za jonami → śluz gęsty i lepki. Skutki: płuca (nawracające infekcje Pseudomonas, bronchiektazja, niewydolność oddechowa); trzustka (niedrożność przewodów → niedożywienie, cukrzyca); układ rozrodczy (azoospermia u mężczyzn; zmniejszona płodność u kobiet). AR: oboje rodzice muszą być nosicielami (Ff × Ff → 1/4 ff = chory). Czestość 1:2500 w populacji europejskiej.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących anemii sierpowatokrwinkowej.\nA. Anemia sierpowatokrwinkowa (SCA) jest spowodowana mutacją missense w genie HBB (beta-globina): GAG→GTG (kodon 6) → Glu→Val → hemoglobina HbS, która polimeryzuje w warunkach niskiego ciśnienia parcjalnego O2.\nB. Heterozygoty (HbA/HbS, "cecha sierpowatokrwinkowa") są prawie całkowicie zdrowe w normalnych warunkach, ale mają zwiększoną odporność na malarię wywołaną Plasmodium falciparum — jest to przykład heterozji (hybrid vigour).\nC. SCA dziedziczy się autosomalnie dominująco — wystarczy jeden allel HbS, aby wystąpiła pełna choroba.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'SCA: missense GAG→GTG w HBB; Glu→Val w pozycji 6; HbS polimeryzuje przy niskim O2.', is_correct: true },
      { id: 'B', text: 'Heterozygoty HbAS: zdrowe, ale odporne na malarię P. falciparum — heterozja.', is_correct: true },
      { id: 'C', text: 'SCA: autosomalna dominująca — jeden allel HbS → pełna choroba.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: 6. kodon HBB: GAG (Glu, hydrofilowy) → GTG (Val, hydrofobowy) → hydrofobowa kieszeń HbS łączy się z sąsiednimi cząsteczkami → polimery → sierpowate erytrocyty → hemoliza, zakrzepy, ból. B — Prawda: HbAS: nosiciele mają dwa rodzaje Hb; w komórkach zainfekowanych Plasmodium → sicklingowe warunki → zakażona komórka jest niszczona przez śledzionę zanim pasożyt się namnoży; heterozygotyczna przewaga (balancing selection) utrzymuje allel HbS w populacjach malarycznych Afryki (HWE zaburzone przez selekcję). Nie jest to heterozja (vigor baster) sensu stricto, lecz heterozygotyczna przewaga (overdominance). C — Fałsz: SCA jest AUTOSOMALNA RECESYWNA; HbSS = chory; HbAS = nosiciel, prawie zdrowy; HbAA = zdrowy.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Które z poniższych chorób genetycznych dziedziczą się AUTOSOMALNIE DOMINUJĄCO?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Choroba Huntingtona (HD) — ekspansja CAG w HTT; heterozygoty chorują', is_correct: true },
      { id: 'B', text: 'Neurofibromatoza typ 1 (NF1) — mutacja genu NF1 (neurofibrominа); haploinsuficjencja', is_correct: true },
      { id: 'C', text: 'Fenyloketonuria (PKU) — mutacja PAH; kumulacja fenyloalaniny; wymaga dwóch wadliwych alleli', is_correct: false },
      { id: 'D', text: 'Achondroplazja (najczęstsza postać karłowatości) — mutacja FGFR3 (G380R); 99% de novo, dominująca GOF', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'AD (autosomalnie dominujące): wystarczy jeden wadliwy allel → choroba. A — HD: GOF mutacja HTT (CAG>36) → toksyczna huntingtyna → AD z pełną penetracją zależną od liczby powtórzeń. B — NF1: haploinsuficjencja (utrata jednej kopii neurofibrominy, białka RAS-GAP → nadaktywny RAS) → guzy nerwów obwodowych, plamki café-au-lait. Spontaniczne mutacje często. D — achondroplazja: FGFR3 G380R → konstytutywna aktywacja receptora → hamowanie proliferacji chondrocytów → krótkie kości; 99% de novo; 1 kopii wystarczy (GOF). C — PKU: AR! Oba allele PAH muszą być wadliwe. Inne AR: CF, SCA, galaktozemia, albinizm.',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nFenyloketonuria (PKU) jest leczona przede wszystkim przez:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'podawanie enzymu zastępczego (ERT) — egzogenna hydroksylaza fenyloalaninowa (PAH) podawana dożylnie zastępuje brakujący enzym', is_correct: false },
      { id: 'B', text: 'restrykcję fenyloalaniny w diecie od urodzenia — ograniczenie spożycia Phe zapobiega jej akumulacji we krwi i uszkodzeniu mózgu; dieta musi być stosowana całe życie (szczególnie ważne u kobiet w ciąży z PKU)', is_correct: true },
      { id: 'C', text: 'terapię genową — koryguje gen PAH w hepatocytach pacjenta, przywracając prawidłowy metabolizm Phe; dostępna od 1990 roku', is_correct: false },
      { id: 'D', text: 'przeszczep szpiku kostnego — nowe komórki wytwarzają prawidłową PAH i zastępują metabolicznie deficytowe hepatocyty', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'PKU leczenie: przesiewowe noworodkowe (Guthrie test, LC-MS/MS): diagnostyka w ciągu 2-3 dni po urodzeniu → natychmiastowe wdrożenie diety. Leczenie PKU: dieta niskofenyloalaninowa (eliminacja białek naturalnych bogatych w Phe: mięso, ryby, nabiał, jajka, orzechy) + specjalne mieszanki aminokwasów bez Phe + suplementacja Tyr (nie syntetyzowana przy braku PAH). Sapropterin (BH4, kofaktor PAH): skuteczny u ~25-50% chorych (głównie łagodna PKU z resztkową aktywnością PAH) → wzrost tolerancji Phe. Maternal PKU: niekontrolowana PKU u matki → wysoka Phe u płodu → uszkodzenie mózgu, wady serca, małogłowie (teratogenny efekt Phe). A — ERT: metabolity nie przenikają do mózgu; stosowana w lizosomalnych chorobach spichrzeniowych, nie PKU. C — terapia genowa PKU: w fazie badań.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących dystrofii mięśniowej Duchenne\'a (DMD).\nA. DMD jest X-sprzężoną chorobą recesywną spowodowaną mutacją genu DMD (dystrofina) — u chłopców hemizygotycznych jeden wadliwy allel powoduje brak dystrofiny → postępujący zanik mięśni.\nB. Dystrofina (427 kDa) łączy cytoszkielet (F-aktyna) z zewnątrzkomórkową macierzą (laminina) przez kompleks dystrofina-glikoproteiny — jej brak prowadzi do mechanicznego uszkodzenia błony mięśniowej przy skurczu.\nC. Nośniczki (matki) genu DMD zawsze chorują tak samo ciężko jak chłopcy, ponieważ chromosom X z mutacją jest zawsze aktywny (brak inaktywacji X).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'DMD: X-sprzężona recesywna; brak dystrofiny u chłopców hemizygotycznych.', is_correct: true },
      { id: 'B', text: 'Dystrofina: łączy aktynę z macierzą zewnątrzkomórkową; brak → uszkodzenie sarkolemmy.', is_correct: true },
      { id: 'C', text: 'Nosicielki DMD chorują tak samo ciężko jak chłopcy — X z mutacją zawsze aktywny.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: gen DMD (2,3 Mb, największy gen ludzki) na Xp21.2; mutacje: delecje eksonów (70%), duplikacje, punktowe. Brak dystrofiny → postępujące osłabienie mięśni, utrata chodzenia ~10-12 r.ż., cardiomyopatia, śmierć w 20-30 r.ż. (dawniej; teraz sterydowe leczenie przedłuża). B — Prawda: dystrofina DGC (dystrophin-associated glycoprotein complex) = mechaniczny "amortyzator" → brak DGC → pęknięcia sarkolemmy przy skurczu → napływ Ca²⁺ → nekroza. C — Fałsz: nosicielki DMD zazwyczaj ZDROWE (mają drugi X z prawidłowym allelem DMD); mogą mieć łagodną kardiomiopatię; rzadko (skewed inactivation: X z prawidłowym allelem preferencyjnie inaktywowany) nosicielka może mieć objawy. To inaktywacja X (losowa) chroni nosicielki.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nChoroby lizosomalne spichrzeniowe (lysosomal storage diseases) są spowodowane głównie:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'mutacjami genów peroksysomu — brak enzymów rozkładających kwasy tłuszczowe w peroksysomach prowadzi do ich akumulacji w lizosomach', is_correct: false },
      { id: 'B', text: 'mutacjami genów kodujących enzymy hydrolazy lizosomalne lub białka błonowe lizosomów — nagromadzenie niestrawionego substratu (glikozaminoglikany, ganglizydy, glukocerebrozyd) prowadzi do dysfunkcji i śmierci komórek', is_correct: true },
      { id: 'C', text: 'mutacjami genów receptorów hormonalnych — brak reaktywności komórek na hormony prowadzi do gromadzenia metabolitów w lizosomach', is_correct: false },
      { id: 'D', text: 'mutacjami mitochondrialnego DNA — brak energii powoduje zatrzymanie lizosomów i akumulację niestrawionych produktów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Choroby lizosomalne (LSDs): ok. 70 znanych chorób, łączna częstość ~1:5000. Mechanizm: brak enzymu lizosomalnego (lub kofaktora, transportera błonowego) → niestrawione makromolekuły gromadzą się w lizosomach → powiększenie lizosomów → dysfunkcja komórki → śmierć. Przykłady: choroba Gauchera (glukocerebrozydaza, GBA) — glukocerebrozyd w makrofagach → hepatosplenomegalia; choroba Niemann-Picka typ A/B (sfingomyelinaza); choroba Tay-Sachsa (heksozaminidaza A) — gangliozydy GM2 w neuronach; mukopolisacharydozy (MPS, np. Hurler = IDUA). Leczenie: enzymatyczna terapia zastępcza (ERT, np. imigluceraza w Gauchera) — IV infuzje enzymu; substrat reduction therapy (SRT).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.jednogenowe,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących chorób mitochondrialnych.\nA. Choroby mitochondrialne (wywołane mutacjami mtDNA) dziedziczą się wyłącznie po linii matczynej — mtDNA jest przekazywane tylko przez oocyty (komórki jajowe), ponieważ mitochondria plemnika są eliminowane po zapłodnieniu.\nB. Ze względu na heteroplazmię (mieszaninę normalnych i zmutowanych cząsteczek mtDNA w komórce), objawy chorób mitochondrialnych mogą być zmienne — zależą od proporcji zmutowanego mtDNA w danych tkankach.\nC. Wszystkie mutacje powodujące choroby mitochondrialne są zlokalizowane w mtDNA — geny jądrowe nie mogą powodować chorób mitochondrialnych, ponieważ nie kodują białek mitochondrialnych.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Choroby mtDNA: matczyne dziedziczenie; mitochondria plemnika eliminowane po zapłodnieniu.', is_correct: true },
      { id: 'B', text: 'Heteroplazmia: mieszanina mutant/WT mtDNA → zmienny fenotyp zależny od proporcji w tkankach.', is_correct: true },
      { id: 'C', text: 'Wszystkie choroby mitochondrialne: mutacje tylko w mtDNA; geny jądrowe nie kodują białek mitochondrialnych.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: mtDNA przekazywane z cytoplazmą oocytu; mitochondria plemnika (w wici) są ubikwitynylowane i degradowane przez autoptozofagię po wejściu do komórki jajowej (ojcowskie mitochondria eliminowane przez LONP1/BNIP3L). B — Prawda: heteroplazmia: komórka zawiera 100-8000 kopii mtDNA; mutacja w niektórych → mieszanina; próg: gdy proporcja zmutowanych >60-80% → dysfunkcja; tkanki o wysokim zapotrzebowaniu energetycznym (neurony, mięsień sercowy) najbardziej wrażliwe. C — Fałsz: ok. 1500 białek mitochondrialnych; mtDNA koduje tylko 13 białek łańcucha oddechowego + 22 tRNA + 2 rRNA; POZOSTAŁE ~1487 białek kodowane przez JĄDROWE DNA i importowane do mitochondriów. Dlatego choroby mitochondrialne mogą mieć dziedziczenie autosomalne (AR lub AD) przez mutacje jądrowych genów POLG, TWNK, SCO1, SURF1 itd.',
    difficulty: 2, verified: true,
  },

  // ─── Choroby chromosomowe (4) ───
  {
    topic_id: T, subtopic_id: S.chromosom_c,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nZespół DiGeorge\'a (22q11.2 deletion syndrome) jest spowodowany:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'trisomią chromosomu 22 — dodatkowy chromosom 22 powoduje wady wrodzone serca, łęku aorty i tarczycy', is_correct: false },
      { id: 'B', text: 'mikrodelecją 22q11.2 (~3 Mb) — utrata ok. 40 genów, w tym TBX1 (czynnik transkrypcyjny niezbędny do rozwoju III i IV łuku skrzelowego) → wady serca, brak/hipoplazja grasicy, hipokalcemia (brak przytarczyc), rysy dysmorficzne, zwiększone ryzyko psychozy', is_correct: true },
      { id: 'C', text: 'mutacją punktową genu TBX1 na chromosomie 22 — single nucleotide variant powoduje identyczne objawy jak delecja', is_correct: false },
      { id: 'D', text: 'translokacją chromosomu 22 na chromosom 9 — chromosom Philadelphia (BCR-ABL1) powoduje objawy DiGeorge\'a', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'DiGeorge/22q11.2 DS (velocardiofacial syndrome, VCFS): najczęstsza mikrodelecja chromosomalna (1:3000-6000); delecja ~3 Mb lub ~1,5 Mb na 22q11.2; zawiera gen TBX1 (T-box transcription factor) kluczowy dla rozwoju III i IV kieszonki skrzelowej → rdzeń nadnerczy, grasica, przytarczyce, wielkie naczynia. Fenotyp (CATCH-22 lub CATCH22): Cardiac defects (tetralogy Fallot, VSD, interrupted aortic arch); Abnormal facies; Thymic hypoplasia/aplasia → niedobory immunologiczne; Cleft palate; Hypocalcemia (hipokalcemia → tężyczka). Plus: psychoza schizofreniczna (25%), ADHD, problemy z uczeniem. ~90% de novo.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom_c,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących zespołu Williamsа (Williams syndrome).\nA. Zespół Williamsa jest spowodowany mikrodelecją 7q11.23 (~1,5 Mb) obejmującą gen ELN (elastyna) i ok. 26 innych genów — powoduje wady serca (zwężenie nadaortalne), niedobory intelektualne, ale paradoksalnie wyjątkowe zdolności werbalne i społeczne ("koktajl party personality").\nB. Gen ELN (elastyna) jest kluczowy dla prawidłowej budowy naczyń krwionośnych — jego brak prowadzi do zwężenia aorty (supravalvular aortic stenosis) i innych naczyń.\nC. Delecja 7q11.23 powoduje zespół Williamsa, natomiast DUPLIKACJA tego samego regionu jest całkowicie łagodna i nie ma żadnych skutków klinicznych.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Williams: del 7q11.23; ELN + 26 genów; wady serca + deficyt intelektualny + wybitne zdolności werbalne/społeczne.', is_correct: true },
      { id: 'B', text: 'ELN (elastyna): kluczowy dla naczyń; brak → zwężenie aortalne nadwartowskie.', is_correct: true },
      { id: 'C', text: 'Duplikacja 7q11.23 jest łagodna — brak skutków klinicznych.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: Williams: del 7q11.23 (~1,5 Mb); genotyp fenotyp: haploinsuficjencja ELN → wady serca; haploinsuficjencja CLIP2, GTF2I → deficyt intelektualny (IQ 50-70) ale wyjątkowe zdolności: pamięć werbalna, muzyczna, empatia/towarzyskość. B — Prawda: elastyna: składnik ściany aorty i naczyń; jej brak → SVAS (supravalvular aortic stenosis) → przeciążenie serca → ryzyko śmierci nagłej przy wysiłku lub znieczuleniu. C — Fałsz: duplikacja 7q11.23 (~dup(7)(q11.23)) → autyzm, lęk społeczny, problemy z mową — odwrotny fenotyp do Williams (który ma nadmierną towarzyskość); to doskonały przykład "mirror syndrome" (ten sam region: delecja i duplikacja dają odwrotne objawy).',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom_c,
    question_text: 'Które z poniższych stwierdzeń dotyczących zespołu Downa (trisomia 21) są PRAWDZIWE?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Najczęstszą przyczyną (~95% przypadków) jest wolna trisomia 21 — trzy oddzielne kopie chromosomu 21 w każdej komórce, wynikające z nondysjunkcji gametycznej', is_correct: true },
      { id: 'B', text: 'Translokacyjna postać Downa (~4-5%) może być dziedziczona od nosiciela translokacji Robertsonowskiej t(14;21) — ryzyko Downa u potomka nosicielki wynosi ok. 10-15%', is_correct: true },
      { id: 'C', text: 'Ryzyko urodzenia dziecka z trisomią 21 nie zależy od wieku matki — jest stałe i wynosi 1:700 dla każdej kobiety niezależnie od wieku', is_correct: false },
      { id: 'D', text: 'Wśród objawów trisomii 21: umiarkowany deficyt intelektualny, hipotonia, charakterystyczne rysy twarzy, wrodzone wady serca (50%), zwiększone ryzyko białaczki (ALL), choroba Alzheimera po 40 r.ż. (gen APP na chr. 21)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'A — Prawda: wolna trisomia 21: ~95%; nondysjunkcja mejozy I matczynej (~80%) lub ojcowskiej (~20%). B — Prawda: nosiciel t(14;21): 45 chromosomów; córka-nosicielka: ~10-15% potomstwa z Downem (gamety z dodatkowym chr. 21). C — Fałsz: ryzyko Downa silnie zależy od wieku matki: 20 lat ~1:2000; 35 lat ~1:350; 40 lat ~1:100; 45 lat ~1:25-30. Stąd badania prenatalne (NIPT, amniopunkcja) proponowane kobietom powyżej 35 r.ż. D — Prawda: gen APP (amyloid precursor protein) na chr. 21 → 3 kopie → nadprodukcja amyloidu-beta → blaszki amyloidowe → Alzheimer prawie u wszystkich po 40. Białaczka: głównie ALL i AML.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.chromosom_c,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nZespół Angelmana różni się od zespołu Pradera-Williego tym, że mimo iż oba dotyczą regionu 15q11-13:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Angelman (AS) wynika z braku MATCZYNEJ kopii 15q11-13 (delecja, UPD ojcowska lub mutacja UBE3A) → ciężka niepełnosprawność intelektualna, napady śmiechu, epilepsja, brak mowy; PWS — brak OJCOWSKIEJ kopii → hipotonia, otyłość, hipogonadyzm, łagodna niepełnosprawność intelektualna', is_correct: true },
      { id: 'B', text: 'Angelman wynika z braku OJCOWSKIEJ kopii (jak PWS) — oba zespoły mają identyczną przyczynę, różnią się tylko nasileniem objawów', is_correct: false },
      { id: 'C', text: 'PWS i AS są spowodowane mutacjami w tym samym genie UBE3A, ale różnymi substytucjami aminokwasowymi — nie ma związku z imprintingiem', is_correct: false },
      { id: 'D', text: 'Oba zespoły dotyczą chromosomu 15 ojcowskiego — matczyne chromosomy nie mają znaczenia dla obu fenotypów', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Imprinting 15q11-13: region podlega imprintingowi genomowemu. Geny aktywne ojcowsko (na chr. 15 ojca): SNRPN, NDN, MAGEL2 itd. → ich utrata → PWS. Gen aktywny matczyno: UBE3A (ubikwityna ligaza E3, aktywna tylko na chromosomie matki w neuronach) → brak UBE3A → AS. Mechanizmy: delecja de novo (70%): AS = del matczynej kopii; PWS = del ojcowskiej; UPD: AS = dwie kopie ojcowskiego 15 (brak matczynego 15) → brak UBE3A; PWS = dwie kopie matczynego 15 (brak ojcowskiego) → brak genów ojcowskich; Mutacja UBE3A: tylko w AS. Ten sam region chromosomowy → dwa różne zespoły zależnie od rodzicielskiego pochodzenia utraconej kopii.',
    difficulty: 2, verified: true,
  },

  // ─── Znaczenie ewolucyjne mutacji (4) ───
  {
    topic_id: T, subtopic_id: S.ewolucja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ewolucyjnego znaczenia mutacji.\nA. Mutacje są jedynym źródłem nowych alleli w populacji — bez mutacji nie byłoby surowego materiału dla selekcji naturalnej i ewolucji.\nB. Większość mutacji punktowych w genomie jest neutralna lub prawie neutralna (teoria neutralna Kimury) — nie zmienia sprawności organizmu i może utrwalać się przez dryf genetyczny.\nC. Mutacje kodujące nowe funkcje białek (neofunkcjonalizacja) mogą powstawać po duplikacji genów — jeden paralog zachowuje pierwotną funkcję, drugi może akumulować mutacje i ewoluować ku nowej funkcji.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mutacje: jedyne źródło nowych alleli; surowiec dla selekcji.', is_correct: true },
      { id: 'B', text: 'Większość mutacji: neutralne/prawie neutralne (Kimura); utrwalane przez dryf.', is_correct: true },
      { id: 'C', text: 'Neofunkcjonalizacja po duplikacji genów: jeden paralog ewoluuje ku nowej funkcji.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: mutacje (punktowe, chromosomowe, genomowe) są jedynym źródłem de novo alleli w populacji; rekombinacja przetasowuje istniejące allele, ale nie tworzy nowych sekwencji. B — Prawda: teoria neutralna ewolucji molekularnej (Kimura, 1968): większość zmian aminokwasowych jest neutralna lub prawie neutralna (very slightly deleterious); ewoluują przez losowy dryf genetyczny; mutacje silnie szkodliwe są usuwane przez selekcję oczyszczającą; mutacje korzystne rzadkie, ale one napędzają adaptację. C — Prawda: model dywergencji paralogów (Ohno): gen duplikuje się → dwa paralogi; jeden pełni pierwotną funkcję → konserwatywny; drugi pod zmniejszoną presją selekcji → gromadzi mutacje → możliwa neofunkcjonalizacja; przykład: geny globin (α, β, γ, δ, ε, ζ) z jednego przodka → różne powinowactwa do tlenu. Wszystkie prawdziwe.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.ewolucja,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nSelekcja balansująca (balancing selection) utrzymuje w populacji dwa lub więcej alleli na długi czas, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'jeden allel jest zawsze dominujący i wypiera drugi — po wystarczająco długim czasie pozostaje tylko jeden allel (selekcja kierunkowa)', is_correct: false },
      { id: 'B', text: 'heterozygoty mają wyższy fitness niż obie homozygoty (overdominance/heterozja) — obie homozygoty wybierane negatywnie, co utrzymuje oba allele; przykład: HbA/HbS przy malarii', is_correct: true },
      { id: 'C', text: 'selekcja balansująca dotyczy wyłącznie genów układu odpornościowego (MHC) i nie jest obserwowana w innych loci', is_correct: false },
      { id: 'D', text: 'selekcja balansująca i selekcja oczyszczająca to synonimy opisujące ten sam proces usuwania alleli z populacji', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Selekcja balansująca: mechanizmy utrzymujące polimorfizm: 1) Overdominancja (heterozygotyczna przewaga): heterozygota A1A2 > A1A1 i A2A2; klasyczny: HbA/HbS w rejonach malarycznych — HbSS: ciężka anemia; HbAA: podatny na malarię; HbAS: zdrowy + odporny → równowaga częstości alleli. 2) Selekcja zależna od częstości (frequency-dependent): rzadki allel faworyzowany (np. rozpoznawanie pasożytów przez MHC). 3) Zmienny dobór w czasie lub przestrzeni: różne środowiska faworyzują różne allele → polimorfizm. MHC (HLA): ogromny polimorfizm dzięki selekcji balansującej (>10 000 alleli HLA-A/B/C/DR); ważne dla rozpoznawania patogenów → heterozygoty MHC mają szerszy repertuar prezentowanych antygenów.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.ewolucja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących molekularnego zegara ewolucyjnego.\nA. Molekularny zegar ewolucyjny (Zuckerkandl i Pauling, 1965) zakłada, że neutralne zmiany w sekwencjach DNA lub białek akumulują się w przybliżeniu stałym tempie w czasie — umożliwia szacowanie czasu dywergencji linii ewolucyjnych.\nB. Geny kodujące histony są powszechnie używane jako szybkie zegary molekularne — ich sekwencja zmienia się bardzo szybko, co umożliwia datowanie bliskich podziałów ewolucyjnych.\nC. Mitochondrialne DNA (mtDNA) jest często używane w badaniach filogeograficznych i ewolucji człowieka, ponieważ ewoluuje szybciej niż jądrowe DNA (wyższe tempo substytucji) i jest dziedziczone matczylinearnie.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Molekularny zegar: neutralne mutacje akumulują się stale → szacowanie czasu dywergencji.', is_correct: true },
      { id: 'B', text: 'Histony: szybkie zegary molekularne do bliskich podziałów.', is_correct: false },
      { id: 'C', text: 'mtDNA: szybsze tempo ewolucji niż jądrowe DNA; matczyne dziedziczenie; filogeografia.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: zegar molekularny: wzorzec substytucji neutralnych ≈ stały; kalibrowany przez zdarzenia kopalne; zastosowania: datowanie dywergencji człowiek-szympans (~6 Mln lat), wyjście Homo sapiens z Afryki (~60-70 tys. lat). B — Fałsz: histony (H2A, H2B, H3, H4) są jedną z NAJWOLNIEJSZYCH ewoluujących sekwencji u eukariotów (silna selekcja oczyszczająca — każda zmiana zaburza pakowanie chromatyny); H4 człowieka i groszku zielonego: 2 aminokwasy różne na 102! Historyczne zegary molekularne: cytochrom c, hemoglobiny (pośrednie tempo); szybkie: mtDNA, intronowe sekwencje, mikrosatelity. C — Prawda: mtDNA ewoluuje ~10-17× szybciej niż jądrowe (mniej naprawy, brak rekombinacji, środowisko ROS); hipervariabilne regiony (HVR1, HVR2) w D-loop: używane do filogeografii człowieka; haplogrupy mtDNA śledzone wzdłuż linii matczynej.',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.ewolucja,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nElementy transpozowalne (transposony, "skaczące geny") mają znaczenie ewolucyjne, ponieważ:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'elementy transpozowalne stanowią ok. 45% genomu ludzkiego i mogą powodować mutacje przez insercje w genach lub regionach regulatorowych; odegrały rolę w ewolucji genomu (nowe regulatory, pseudogeny, duplikacje segmentalne)', is_correct: true },
      { id: 'B', text: 'transposony są obecne wyłącznie u bakterii — u eukariontów wszystkie sekwencje DNA są kodujące i żaden element nie może się przemieszczać', is_correct: false },
      { id: 'C', text: 'transposony są całkowicie szkodliwe i nie wnoszą żadnej wartości ewolucyjnej — ich jedyną funkcją jest powodowanie chorób genetycznych', is_correct: false },
      { id: 'D', text: 'elementy transpozowalne działają jak zegary molekularne — ich czas wstawienia jest zawsze znany i pozwala datować wszystkie zdarzenia ewolucyjne', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Elementy transpozowalne (TE, transposable elements): ~45% genomu ludzkiego (LINEs ~20%, SINEs ~13%, DNA transposons ~3%, LTR retrotransposons ~9%). Typy: Klasa I (retrotransposony): kopiuj-wklej przez RNA (LINE-1, Alu). Klasa II (DNA transposony): wytnij-wklej przez transpomazę. Znaczenie ewolucyjne: 1) Mutageneza insercyjna → nowe mutacje (ok. 1/20 mutacji u myszy to insercje L1); 2) Nowe promotory/enhancery — sieci regulatorowe; 3) Egzonizacja sekwencji TE → nowe eksony (exonization); 4) Gen capture → nowe funkcje kodujące; 5) Pseudogeny procesowane (mRNA → cDNA wstawione przez L1); 6) Centromery i telomery zawierają sekwencje TE; 7) Gen syncytyna (ssacze łożysko) pochodzi z otoczki retrowirusa endogennego. Tło: Barbary McClintock odkryła transposony u kukurydzy (Nobel 1983).',
    difficulty: 2, verified: true,
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body))
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions',
      method: 'POST',
      headers: {
        apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length,
      },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve(res.statusCode)) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} questions...`)
  for (const q of questions) {
    const s = await post(q)
    console.log((s===201||s===204?'OK':'ERR '+s), q.question_type, q.question_text.slice(0,60).replace(/\n/g,' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
