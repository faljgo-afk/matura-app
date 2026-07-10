// Seed: mock_questions — Genetyka molekularna — ekspresja genów (20 questions)
// These appear in the /mock-exam "Sprawdzian z całego materiału"

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  budowa:     'be147aae-d7b6-4dde-9126-f5ea06635e74',
  replikacja: '509e44e6-44f6-41bf-8f2c-e6d28ec2ac66',
  transkryp:  '080488a3-c287-46ec-b337-d87e1736d7da',
  obrobka:    '7e58aed3-066f-410e-a5c4-19fe84a3821e',
  kod:        'd3f5edfd-647b-4850-8dcd-3168a5805c61',
  translacja: 'd6c4adf0-caa3-46f3-b24a-d4d662a7a9cc',
  regProk:    'a5dee6c1-8f72-4f35-9d6a-0b694089ddaf',
  regEuk:     'c0f6a1a7-b95b-468f-be90-6430736c2ec5',
  epigenet:   '56b9ee49-9719-42a5-baac-e106038c1ba5',
}

const questions = [
  // ─── Budowa DNA ───
  {
    subtopic: 'Genetyka molekularna — Budowa DNA',
    subtopic_id: S.budowa,
    question_type: 'single',
    question_text: 'Nić matrycowa DNA odczytywana jest przez polimerazę RNA w kierunku 3′→5′. W jakim kierunku przebiega synteza nici mRNA?',
    options: [
      { id: 'A', text: '3′→5′, zgodnie z kierunkiem odczytu nici matrycowej', is_correct: false },
      { id: 'B', text: '5′→3′, antyrównoległe do nici matrycowej', is_correct: true },
      { id: 'C', text: 'Kierunek syntezy zależy od organizmu (prokariota vs. eukariota)', is_correct: false },
      { id: 'D', text: '5′→3′, równolegle do nici matrycowej (zgodny kierunek)', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Zasada syntezy kwasów nukleinowych: polimeraza zawsze wydłuża łańcuch w kierunku 5′→3′ (dodaje nukleotyd do wolnej grupy 3′-OH). Nić matrycowa DNA odczytywana jest antyrównolegle (3′→5′), więc nowo syntetyzowany mRNA biegnie 5′→3′. Obie cząsteczki są antyrównoległe — tak samo jak dwie nici podwójnej helisy DNA.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Budowa DNA',
    subtopic_id: S.budowa,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących struktury DNA:\nA. Adenina paruje z tyminą przez dwa wiązania wodorowe, a cytozyna z guaniną — przez trzy.\nB. Obie nici podwójnej helisy DNA biegną równolegle (w tym samym kierunku 5′→3′).\nC. Sekwencja zasad azotowych w DNA koduje informację genetyczną.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: A=T dwa wiązania H; G≡C trzy wiązania H (dlatego DNA bogate w GC jest stabilniejsze termicznie). B — FAŁSZ: nici DNA są ANTYRÓWNOLEGŁE — jedna biegnie 5′→3′, druga 3′→5′; równoległość uniemożliwiałaby komplementarne parowanie zasad. C — PRAWDA: sekwencja zasad (A, T, G, C) jest nośnikiem informacji genetycznej — koduje kolejność aminokwasów w białkach.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Replikacja ───
  {
    subtopic: 'Genetyka molekularna — Replikacja',
    subtopic_id: S.replikacja,
    question_type: 'single',
    question_text: 'Replikacja DNA jest semikonserwatywna. Co to oznacza w praktyce — jakie cząsteczki DNA powstają po jednej rundzie replikacji z jednej cząsteczki macierzystej?',
    options: [
      { id: 'A', text: 'Dwie cząsteczki DNA: jedna w pełni nowa (obie nici nowe), jedna w pełni stara (obie nici stare)', is_correct: false },
      { id: 'B', text: 'Dwie cząsteczki DNA, każda złożona z jednej starej nici i jednej nowo zsyntetyzowanej', is_correct: true },
      { id: 'C', text: 'Cztery cząsteczki DNA — każda zawiera fragmenty zarówno starej, jak i nowej nici wymieszane losowo', is_correct: false },
      { id: 'D', text: 'Dwie identyczne cząsteczki DNA, obie zbudowane wyłącznie z nowych nici', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Semikonserwatywna replikacja (Meselson i Stahl, 1958, eksperyment z ¹⁵N/¹⁴N): każda z dwóch nici macierzystej helisy służy jako matryca dla nowej nici komplementarnej. Wynik: 2 cząsteczki córki, każda z jedną starą (matrycową) + jedną nową nicią — stąd "semi" (pół) + "konserwatywna" (zachowanie). Model konserwatywny (A) i dyspersyjny (C) zostały wykluczone przez eksperyment Meselsona-Stahla.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Replikacja',
    subtopic_id: S.replikacja,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE enzymy biorące udział w replikacji DNA u prokariontów.',
    options: [
      { id: 'A', text: 'Helikaza — rozplata podwójną helisę w widełkach replikacyjnych', is_correct: true },
      { id: 'B', text: 'Prymeraza (polimeraza RNA) — syntetyzuje krótki starter RNA (primer) dla polimerazy DNA', is_correct: true },
      { id: 'C', text: 'Polimeraza DNA I (Pol I) — usuwa startery RNA i wypełnia luki DNA', is_correct: true },
      { id: 'D', text: 'Odwrotna transkryptaza — syntetyzuje DNA na matrycy RNA', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Replikacja prokariontów: helikaza (rozplata, np. DnaB), topoizomeraza (usuwa naprężenie skrętne), SSB (stabilizuje jednoniciowe DNA), prymeraza (syntetyzuje primer RNA ~10 nt), polimeraza DNA III (główna synteza 5′→3′), polimeraza DNA I (usuwa primer, wypełnia lukę), ligaza DNA (łączy fragmenty Okazaki). Odwrotna transkryptaza (D) — enzym retrowirusów (HIV), nie uczestniczy w standardowej replikacji prokariontów.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Replikacja',
    subtopic_id: S.replikacja,
    question_type: 'single',
    question_text: 'Problem końca chromosomu linearnego polega na tym, że polimeraza DNA nie może odtworzyć samego końca nici opóźnionej. W komórkach eukariotycznych problem ten rozwiązuje:\n(wybierz właściwy mechanizm)',
    options: [
      { id: 'A', text: 'Ligaza DNA łącząca koniec chromosomu z sąsiednim chromosomem', is_correct: false },
      { id: 'B', text: 'Telomeraza — enzym z własną matrycą RNA, który dodaje powtórzenia telomerowe (TTAGGG) do końców chromosomów', is_correct: true },
      { id: 'C', text: 'Dodatkowa polimeraza DNA syntetyzująca nić w kierunku 3′→5′ od końca chromosomu', is_correct: false },
      { id: 'D', text: 'Chromosomy eukariotyczne są koliste, więc problem końca nie istnieje', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Chromosomy eukariotyczne są liniowe (D błędne — koliste mają prokarionta). Po każdej replikacji chromosomy skracają się od końców (telomerów) przez niemożność uzupełnienia końca nici opóźnionej po usunięciu ostatniego primera. Telomeraza (ryboprotein złożona z podjednostki katalitycznej hTERT i matrycowego RNA hTERC z sekwencją 3′-AAUCCC-5′) wydłuża koniec nici wiodącej → uzupełnienie przez primazę i polimerazę. Aktywna w komórkach macierzystych, rozrodczych i nowotworowych.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Transkrypcja ───
  {
    subtopic: 'Genetyka molekularna — Transkrypcja',
    subtopic_id: S.transkryp,
    question_type: 'single',
    question_text: 'Transkrypcja u prokariontów różni się od transkrypcji u eukariontów. Które z poniższych stwierdzeń jest PRAWDZIWE wyłącznie dla eukariontów?',
    options: [
      { id: 'A', text: 'Transkrypcja odbywa się na nici matrycowej DNA w kierunku 3′→5′', is_correct: false },
      { id: 'B', text: 'Jeden RNA-polimeraz odpowiada za syntezę rRNA, mRNA i tRNA', is_correct: false },
      { id: 'C', text: 'Transkrypcja i translacja są czasowo i przestrzennie oddzielone — mRNA jest eksportowany z jądra do cytoplazmy przed translacją', is_correct: true },
      { id: 'D', text: 'Polimeraza RNA nie wymaga startera (primera) do inicjacji syntezy', is_correct: false },
    ],
    correct_answer: ['C'],
    explanation: 'A — dotyczy obu (kierunek odczytu matrycy 3′→5′ jest uniwersalny). B — u prokariontów jeden RNA-polimeraz syntetyzuje wszystkie klasy RNA; u eukariontów: Pol I (rRNA), Pol II (mRNA i miRNA), Pol III (tRNA, 5S rRNA). D — dotyczy obu: RNA-polimeraza nie potrzebuje startera (w odróżnieniu od polimerazy DNA). C — wyłącznie eukarionty: jądro komórkowe oddziela transkrypcję od translacji; pre-mRNA musi przejść obróbkę (czapeczka, ogon poli-A, splicing) i transport przez pory jądrowe zanim zostanie przetłumaczony. U prokariontów translacja zaczyna się jeszcze podczas transkrypcji (sprzężenie).',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Transkrypcja',
    subtopic_id: S.transkryp,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących transkrypcji:\nA. Promotor genu to sekwencja DNA, do której przyłącza się polimeraza RNA, inicjując transkrypcję.\nB. Transkrypcja obejmuje cały chromosom jednocześnie — wszystkie geny są przepisywane w tym samym czasie.\nC. Produkt bezpośredni transkrypcji u eukariontów to pre-mRNA (pierwotny transkrypt), który wymaga dalszej obróbki.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: promotor (sekwencja TATA-box u eukariontów, -10 i -35 box u prokariontów) jest miejscem wiązania czynników transkrypcyjnych i RNA-polimerazy. B — FAŁSZ: ekspresja genów jest selektywna — tylko część genów jest transkrybowana w danej komórce w danym czasie (regulacja ekspresji). C — PRAWDA: u eukariontów: DNA → pre-mRNA (integruje eksony i introny) → obróbka (5′-czapeczka, splicing introny, ogon poli-A) → dojrzały mRNA eksportowany do cytoplazmy.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Obróbka pre-mRNA ───
  {
    subtopic: 'Genetyka molekularna — Obróbka pre-mRNA',
    subtopic_id: S.obrobka,
    question_type: 'single',
    question_text: 'Alternatywny splicing pre-mRNA u eukariontów ma duże znaczenie biologiczne. Które stwierdzenie NAJLEPIEJ opisuje konsekwencję tego procesu?',
    options: [
      { id: 'A', text: 'Jeden gen może dać wiele różnych białek dzięki różnym kombinacjom eksonów włączanych do dojrzałego mRNA', is_correct: true },
      { id: 'B', text: 'Alternatywny splicing usuwa losowe fragmenty mRNA, co prowadzi do mutacji białka', is_correct: false },
      { id: 'C', text: 'Dzięki alternatywnemu splicingowi introny mogą zostać zachowane w dojrzałym mRNA i przetłumaczone na białko', is_correct: false },
      { id: 'D', text: 'Alternatywny splicing zwiększa liczbę genów w genomie, kopiując eksony do nowych miejsc w chromosomie', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Alternatywny splicing: spliceosom może łączyć eksony pre-mRNA w różnych kombinacjach w zależności od typu komórki lub stanu fizjologicznego. Np. gen DSCAM Drosophila może teoretycznie dać >38 000 różnych białek przez alternatywny splicing. U człowieka szacuje się, że >90% genów z wieloma eksonami podlega alternatywnemu splicingowi → proteom (zbiór białek) jest wielokrotnie bardziej złożony niż liczba genów (~20 000 genów, ale >100 000 różnych białek).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Obróbka pre-mRNA',
    subtopic_id: S.obrobka,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE modyfikacje, którym ulega pre-mRNA podczas obróbki potranskrypcyjnej u eukariontów.',
    options: [
      { id: 'A', text: 'Dodanie czapeczki 7-metylguanozynowej (m7G) do końca 5′', is_correct: true },
      { id: 'B', text: 'Usunięcie intronów i połączenie eksonów przez spliceosom', is_correct: true },
      { id: 'C', text: 'Dodanie ogona poli-A (~200 adenozynowych nukleotydów) do końca 3′', is_correct: true },
      { id: 'D', text: 'Zamiana wszystkich kodonów UAG na UGA (edycja kodonu stop)', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Trzy główne modyfikacje pre-mRNA u eukariontów: (1) Czapeczka 5′: 7-metylguanozyna dodana odwrotnie (5′→5′ połączenie trójfosforanowe) — chroni przed degradacją i umożliwia rozpoznanie przez rybosom. (2) Splicing: spliceosom (kompleks snRNP) wycina introny i łączy eksony. (3) Ogon poli-A: polimeraza poli-A dodaje ~100–250 reszt adenylanowych do 3′ — stabilność mRNA i eksport z jądra. Opcja D jest zmyślona — nie istnieje mechanizm masowej zamiany kodonów stop.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Kod genetyczny ───
  {
    subtopic: 'Genetyka molekularna — Kod genetyczny',
    subtopic_id: S.kod,
    question_type: 'single',
    question_text: 'Kod genetyczny jest zdegenerowany (redundantny). Co to oznacza?',
    options: [
      { id: 'A', text: 'Jeden kodon może kodować więcej niż jeden aminokwas — jeden kodon ma wiele znaczeń', is_correct: false },
      { id: 'B', text: 'Jeden aminokwas może być kodowany przez więcej niż jeden kodon — jeden aminokwas ma wiele synonimicznych kodonów', is_correct: true },
      { id: 'C', text: 'Niektóre kodony w ogóle nie kodują aminokwasów ani nie pełnią funkcji stop — są "puste"', is_correct: false },
      { id: 'D', text: 'Kod genetyczny różni się między organizmami — każdy gatunek ma własny zestaw kodonów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Degeneracja kodu: 64 kodony (4³) kodują tylko 20 aminokwasów + 3 kodony stop → średnio 3 kodony na aminokwas. Synonimiczne kodony (np. UCU, UCC, UCA, UCG, AGU, AGC — wszystkie kodują Ser) często różnią się tylko trzecią pozycją (zasada chwiejności, "wobble"). Biologically ważna konsekwencja: mutacja synonimiczna (cicha) w trzeciej pozycji kodonu zazwyczaj nie zmienia aminokwasu → nie zmienia fenotypu. Kod jest prawie uniwersalny (D — błędne: wyjątki nieliczne, np. UGA = Trp w mitochondriach).',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Kod genetyczny',
    subtopic_id: S.kod,
    question_type: 'single',
    question_text: 'Sekwencja kodująca pewnego genu zawiera kodon 5′-AUG-3′. Jaką rolę pełni ten kodon w translacji?',
    options: [
      { id: 'A', text: 'Jest kodonem stop — zatrzymuje translację i uwalnia polipeptyd', is_correct: false },
      { id: 'B', text: 'Jest kodonem inicjującym (startowym) — koduje metioninę i wyznacza początek ramki odczytu', is_correct: true },
      { id: 'C', text: 'Koduje wyłącznie fMet u prokariontów — u eukariontów AUG nie inicjuje translacji', is_correct: false },
      { id: 'D', text: 'Jest kodonem kodującym alanę, używanym tylko w środku sekwencji białka', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'AUG to jedyny kodon startowy w standardowym kodzie genetycznym — koduje Met (metioninę) i wyznacza ramkę odczytu (+1 ramka, od której liczy się trójki). U prokariontów: pierwszy AUG koduje fMet (N-formylometioninę); u eukariontów: Met. Po syntezie białka metionina startowa często jest usuwana. Wszystkie białka zaczynają się od Met (lub fMet), choć dojrzałe białko może jej nie zawierać. Kodony stop: UAA, UAG, UGA.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Translacja ───
  {
    subtopic: 'Genetyka molekularna — Translacja',
    subtopic_id: S.translacja,
    question_type: 'single',
    question_text: 'W trakcie translacji rybosomy przemieszczają się wzdłuż mRNA w kierunku 5′→3′. Kolejność zdarzeń w jednym cyklu elongacji jest następująca:',
    options: [
      { id: 'A', text: 'Translokacja → wejście aminoacylo-tRNA do miejsca A → tworzenie wiązania peptydowego', is_correct: false },
      { id: 'B', text: 'Wejście aminoacylo-tRNA do miejsca A → tworzenie wiązania peptydowego → translokacja rybosomu', is_correct: true },
      { id: 'C', text: 'Tworzenie wiązania peptydowego → wejście aminoacylo-tRNA do miejsca A → translokacja', is_correct: false },
      { id: 'D', text: 'Inicjacja → elongacja → terminacja, bez powtarzających się cykli', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Cykl elongacji (×n dla każdego aminokwasu): (1) Aminoacylo-tRNA wchodzi do miejsca A rybosomu (kompleks z EF-Tu·GTP u prokariontów), antykodon tRNA paruje z kodonem mRNA. (2) Peptydylotransferaza (rybozym — 23S rRNA u prokariontów) katalizuje tworzenie wiązania peptydowego: przenosi rosnący łańcuch polipeptydowy z tRNA w miejscu P na aminoacylo-tRNA w miejscu A. (3) Translokacja: rybosom przesuwa się o 1 kodon w kierunku 3′ (EF-G·GTP u prokariontów) → łańcuch polipeptydowy przechodzi do miejsca P, miejsce A wolne dla następnego tRNA.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Translacja',
    subtopic_id: S.translacja,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących translacji:\nA. tRNA pełni rolę adaptera — jeden jego koniec rozpoznaje kodon mRNA (antykodon), drugi niesie właściwy aminokwas.\nB. Rybosom składa się z dwóch podjednostek — każda zbudowana wyłącznie z białek rybosomowych bez RNA.\nC. Polisomy (polirybosom) to kilka rybosomów translujących jednocześnie tę samą cząsteczkę mRNA, co zwiększa wydajność syntezy białka.',
    options: [
      { id: 'A', text: 'P, F, P', is_correct: true },
      { id: 'B', text: 'P, P, F', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'P, F, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: tRNA ma strukturę koniczynki; pętla antykodonu (pozycje 34–36) rozpoznaje kodon mRNA; koniec 3′-CCA wiąże aminokwas (aminoacylo-tRNA syntetaza łączy właściwy aa). B — FAŁSZ: rybosom to ryboprotein — zawiera rRNA (rybosomalny RNA) i białka; podjednostka mała (30S/40S) i duża (50S/60S); rRNA pełni funkcję katalityczną (peptydylotransferaza = rybozymy 23S rRNA). C — PRAWDA: polisomy (≥2 rybosomu na jednym mRNA) pozwalają produkować wiele kopii białka jednocześnie z jednej nici mRNA.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Regulacja u prokariontów ───
  {
    subtopic: 'Genetyka molekularna — Regulacja u prokariontów',
    subtopic_id: S.regProk,
    question_type: 'single',
    question_text: 'Operon laktozowy (lac) E. coli koduje enzymy do metabolizmu laktozy. W warunkach BRAKU laktozy i BRAKU glukozy w podłożu, transkrypcja genów operonu lac jest:',
    options: [
      { id: 'A', text: 'Maksymalna — brak laktozy aktywuje operon', is_correct: false },
      { id: 'B', text: 'Całkowicie zahamowana — represor wiąże się z operatorem, blokując RNA-polimerazę', is_correct: true },
      { id: 'C', text: 'Umiarkowana — katabolit aktywator (CAP) zwiększa transkrypcję, ale represor ją ogranicza', is_correct: false },
      { id: 'D', text: 'Zmienna — operon lac nie podlega regulacji w nieobecności laktozy', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Operon lac (Jacob i Monod, 1961): regulacja negatywna przez represor (LacI) i pozytywna przez CAP-cAMP. Bez laktozy: represor (białko LacI) wiąże operator (sekwencja DNA) → blokuje przejście RNA-polimerazy → brak transkrypcji lacZYA. Z laktozą: allolaktoza (metabolit laktozy) wiąże represor → zmiana konformacji → represor odpada od operatora → transkrypcja możliwa. Regulacja pozytywna (CAP): brak glukozy → wzrost cAMP → cAMP-CAP wiąże miejsce CAP blisko promotora → ułatwia wiązanie RNA-polimerazy. Łącznie: maksymalna transkrypcja gdy laktoza jest, glukozy nie ma.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Regulacja u prokariontów',
    subtopic_id: S.regProk,
    question_type: 'single',
    question_text: 'Czym jest operon jako jednostka regulacyjna u prokariontów? Wskaż prawidłowy opis.',
    options: [
      { id: 'A', text: 'Pojedynczy gen prokariontów wraz ze swoim promotorem i terminatorem', is_correct: false },
      { id: 'B', text: 'Klaster genów o powiązanej funkcji transkrybowany do jednego polistrukturalnego mRNA, regulowany wspólnym promotorem i operatorem', is_correct: true },
      { id: 'C', text: 'Sekwencja DNA kodująca wyłącznie białka regulatorowe (represory i aktywatory)', is_correct: false },
      { id: 'D', text: 'Jednostka transkrypcyjna eukariotyczna obejmująca geny i ich introny', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Operon: prokariontyczna jednostka transkrypcyjna składająca się z: (1) promotora, (2) operatora (sekwencja wiązania represora), (3) genów strukturalnych o powiązanej funkcji metabolicznej (transkrybowanych do jednego polistrukturalnego mRNA). Jeden operon = jeden mRNA → wiele białek. Zaleta: ekonomiczna koordynacja — jeden sygnał regulacyjny kontroluje zestaw genów potrzebnych do danego szlaku. U eukariontów operony praktycznie nie występują (wyjątek: C. elegans) — każdy gen ma własny promotor.',
    difficulty: 1, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Regulacja u eukariontów ───
  {
    subtopic: 'Genetyka molekularna — Regulacja u eukariontów',
    subtopic_id: S.regEuk,
    question_type: 'single',
    question_text: 'Enhancery (wzmacniacze) to sekwencje regulatorowe DNA u eukariontów. Które stwierdzenie POPRAWNIE opisuje właściwość enhancerów?',
    options: [
      { id: 'A', text: 'Enhancery muszą znajdować się bezpośrednio przy promotorze (maks. 100 pz odległości) i tylko przed genem', is_correct: false },
      { id: 'B', text: 'Enhancery mogą działać w odległości setek tysięcy par zasad od promotora i po obu stronach genu — w obu orientacjach', is_correct: true },
      { id: 'C', text: 'Enhancery kodują białka aktywatorowe, które bezpośrednio aktywują RNA-polimerazę II', is_correct: false },
      { id: 'D', text: 'Enhancery to sekwencje RNA, które działają po transkrypcji na poziomie stabilności mRNA', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Enhancery: sekwencje DNA (cis-regulatorowe), do których przyłączają się białka aktywatorowe (czynniki transkrypcyjne). Kluczowe właściwości: (1) odległość — mogą działać z odległości 1 Mpz (megapary zasad) od promotora przez formowanie pętli chromatynowej (mediator + kohezynowy kompleks); (2) orientacja — działają niezależnie od orientacji (w obu kierunkach względem genu); (3) pozycja — mogą być przed genem (upstream), w intronach lub po genie (downstream); (4) tkankowa specyficzność — aktywne tylko w komórkach ekspresjonujących dany TF. Wyciszacze (silencery) działają analogicznie, ale hamują transkrypcję.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Regulacja u eukariontów',
    subtopic_id: S.regEuk,
    question_type: 'multiple',
    question_text: 'Zaznacz WSZYSTKIE mechanizmy regulacji ekspresji genów, które działają po transkrypcji (post-transkrypcyjnie) u eukariontów.',
    options: [
      { id: 'A', text: 'Interferencja RNA (RNAi) — miRNA lub siRNA indukują degradację komplementarnego mRNA lub hamują translację', is_correct: true },
      { id: 'B', text: 'Regulacja stabilności mRNA — różny czas półtrwania mRNA wpływa na ilość produkowanego białka', is_correct: true },
      { id: 'C', text: 'Metylacja promotora genu — wyciszenie transkrypcji przez metylację cytozyny w sekwencji CpG', is_correct: false },
      { id: 'D', text: 'Modyfikacje potranslacyjne białka — fosforylacja, ubikwitynacja, glikozylacja zmieniające aktywność białka', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Post-transkrypcyjna regulacja (po powstaniu mRNA): A — RNAi: miRNA (20–22 nt) komplementarny do mRNA prowadzi do jego degradacji lub blokady translacji przez kompleks RISC. B — stabilność mRNA: sekwencje ARE (AU-rich elements) w 3′UTR mRNA sygnalizują szybką degradację; elementy stabilizujące wydłużają czas życia. D — modyfikacje potranslacyjne zmieniają aktywność, lokalizację lub czas życia białka (np. fosforylacja przez kinazy; ubikwityna → degradacja przez proteasom). C — metylacja promotora to mechanizm epigenetyczny działający NA POZIOMIE TRANSKRYPCJI (pre-transkrypcyjny), nie post-transkrypcyjny.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  // ─── Epigenetyka ───
  {
    subtopic: 'Genetyka molekularna — Epigenetyka',
    subtopic_id: S.epigenet,
    question_type: 'single',
    question_text: 'Metylacja DNA (dodanie grupy metylowej –CH₃ do cytozyny w sekwencji CpG) jest modyfikacją epigenetyczną. Jaki jest jej typowy skutek dla ekspresji genu w obrębie którego promotor jest silnie metylowany?',
    options: [
      { id: 'A', text: 'Wzmożona transkrypcja — metylacja przyciąga RNA-polimerazę do promotora', is_correct: false },
      { id: 'B', text: 'Zahamowanie transkrypcji — metylowane CpG w promotorze blokują wiązanie czynników transkrypcyjnych i przyciągają białka kompaktujące chromatynę', is_correct: true },
      { id: 'C', text: 'Brak wpływu na ekspresję — metylacja DNA dotyczy wyłącznie sekwencji niekodujaących (repetytywnych)', is_correct: false },
      { id: 'D', text: 'Przyspieszenie degradacji mRNA — metylowane DNA produkuje niestabilny transkrypt', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Metylacja CpG w promotorze (wyspy CpG): (1) bezpośrednio blokuje wiązanie aktywatorowych czynników transkrypcyjnych; (2) przyciąga białka MBD (methyl-CpG-binding domain) → rekrutują deacetylazy histonów (HDAC) i metylotransferazy histonów → kompaktacja chromatyny (heterochromatyna) → geny niedostępne dla RNA-polimerazy → wyciszenie genu. Rak: hipometylacja genomu (aktywacja onkogenów) + hipermetylacja genów supresorowych nowotworów (np. p53) to klasyczny epigenetyczny mechanizm transformacji nowotworowej.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
  {
    subtopic: 'Genetyka molekularna — Epigenetyka',
    subtopic_id: S.epigenet,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących epigenetyki:\nA. Modyfikacje epigenetyczne zmieniają sekwencję nukleotydową DNA.\nB. Acetylacja histonów zazwyczaj aktywuje ekspresję genów przez rozluźnienie struktury chromatyny.\nC. Modyfikacje epigenetyczne mogą być dziedziczone przez komórki potomne podczas podziałów mitotycznych.',
    options: [
      { id: 'A', text: 'F, P, P', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'F, F, P', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — FAŁSZ: to kluczowa definicja epigenetyki — modyfikacje epigenetyczne zmieniają ekspresję genów BEZ zmiany sekwencji DNA (stąd "epi-" = ponad/poza). B — PRAWDA: acetylacja reszt lizyny histonów (przez HAT) neutralizuje ładunek dodatni → zmniejsza elektrostatyczne oddziaływanie z ujemnie naładowanym DNA → otwarta chromatyna (euchromatyna) → geny aktywne. Deacetylacja (HDAC) = zamknięta chromatyna = wyciszenie. C — PRAWDA: modyfikacje epigenetyczne są kopiowane podczas replikacji DNA i podziałów mitotycznych → komórki córki dziedziczą wzorzec ekspresji (różnicowanie komórkowe). Dziedziczenie przez gamety (transgeneracyjne) jest bardziej kontrowersyjne, ale udokumentowane w kilku przypadkach.',
    difficulty: 2, verified: true, source_reference: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body))
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
  console.log(`Seeding ${questions.length} mock questions for Genetyka molekularna...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
