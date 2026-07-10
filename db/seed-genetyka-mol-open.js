// Seed: Genetyka molekularna — ekspresja genów — 10 open questions
// Topic: 87346a24-dd63-4896-85f9-1124188982a7

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const T = '87346a24-dd63-4896-85f9-1124188982a7'
const S = {
  dna_rna:    'be147aae-d7b6-4dde-9126-f5ea06635e74',
  replikacja: '509e44e6-44f6-41bf-8f2c-e6d28ec2ac66',
  transkryp:  '080488a3-c287-46ec-b337-d87e1736d7da',
  obrobka:    '7e58aed3-066f-410e-a5c4-19fe84a3821e',
  kod:        'd3f5edfd-647b-4850-8dcd-3168a5805c61',
  translacja: 'd6c4adf0-caa3-46f3-b24a-d4d662a7a9cc',
  prokaryoty: 'a5dee6c1-8f72-4f35-9d6a-0b694089ddaf',
  eukaryoty:  'c0f6a1a7-b95b-468f-be90-6430736c2ec5',
  epigenet:   '56b9ee49-9719-42a5-baac-e106038c1ba5',
}

const questions = [
  {
    topic_id: T, subtopic_id: S.replikacja,
    question_type: 'open',
    question_text: 'Replikacja DNA u eukariontów jest określana jako semikonserwatywna. Wyjaśnij, co oznacza ten termin, i opisz, jakie konsekwencje ma ten mechanizm dla zachowania informacji genetycznej w kolejnych pokoleniach komórek.',
    max_points: 2,
    key_points: [
      'Semikonserwatywna oznacza, że każda nowa cząsteczka DNA składa się z jednej nici matrycowej (zachowanej ze starego DNA) i jednej nowo zsyntetyzowanej — obie nici starego dupleksu służą jednocześnie jako matryca dla nowych nici.',
      'Konsekwencja: każda komórka potomna otrzymuje identyczną kopię informacji genetycznej (dokładna replikacja sekwencji); ewentualne błędy polimerazy (ok. 1 na 10⁹ nukleotydów po korekcie) są rzadkie — gwarantuje stabilność genomu między pokoleniami komórek.',
    ],
    model_answer: 'Replikacja semikonserwatywna: podwójna helisa DNA rozplata się, a każda z dwóch nici służy jako matryca. Do każdej matrycy dobudowywana jest nowa, komplementarna nić. W efekcie powstają dwie identyczne cząsteczki DNA, z których każda zawiera jedną starą (matrycową) i jedną nową nić. Dzięki temu informacja genetyczna jest precyzyjnie kopiowana — każda komórka potomna otrzymuje dokładną kopię genomu rodzicielskiego. Błędy polimerazy (ok. 1 na 10⁷ nukleotydów) są korygowane przez aktywność korekcyjną 3→5 egzonukleazy i system MMR, ostateczna częstość błędów: ~1 na 10⁹–10¹⁰.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.replikacja,
    question_text: 'W replikacji DNA u prokariontów uczestniczy kilka enzymów. Wyjaśnij, dlaczego polimeraza DNA III nie może samodzielnie rozpocząć syntezy nowej nici, i opisz, jaka cząsteczka pełni tę funkcję oraz na czym polega jej działanie.',
    question_type: 'open',
    max_points: 2,
    key_points: [
      'Polimeraza DNA może jedynie wydłużać istniejący łańcuch polinukleotydowy — wymaga wolnej grupy 3\'-OH jako punktu startowego; nie może syntezować nowej nici od zera (de novo).',
      'Funkcję startera pełni prajmer (primer) — krótki odcinek RNA (ok. 10 nukleotydów) syntetyzowany przez prymazę (RNA-polimerazę) komplementarnie do nici matrycowej; dostarcza wolnej grupy 3\'-OH, do której polimeraza DNA III przyłącza kolejne deoksynukleotydy.',
    ],
    model_answer: 'Polimeraza DNA III może jedynie dodawać nukleotydy do wolnej grupy 3\'-OH — nie potrafi inicjować syntezy nici od zera. Rolę inicjatora pełni prymaza (RNA-polimeraza), która syntetyzuje krótki odcinek RNA zwany prajmerem (ok. 10 nt), komplementarny do matrycy. Prajmer zapewnia wolną grupę 3\'-OH, do której polimeraza DNA przyłącza kolejne deoksynukleotydy. Po replikacji prajmery RNA są usuwane przez polimerazy DNA I (u prokariontów) lub RNazę H (u eukariontów), a luki wypełniane deoksynukleotydami i zszywane ligazą.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.transkryp,
    question_text: 'Porównaj transkrypcję u prokariontów i eukariontów, wskazując dwie istotne różnice dotyczące miejsca i obróbki produktu.',
    question_type: 'open',
    max_points: 2,
    key_points: [
      'Miejsce: u prokariontów transkrypcja i translacja zachodzą w cytoplazmie jednocześnie (brak jądra) — rybosom może przyłączyć się do mRNA jeszcze podczas jego syntezy (sprzężona transkrypcja-translacja); u eukariontów transkrypcja zachodzi w jądrze komórkowym, translacja w cytoplazmie — oba procesy są przestrzennie i czasowo rozdzielone.',
      'Obróbka produktu: u prokariontów pierwotny transkrypt (pre-mRNA) jest bezpośrednio używany jako matryca — brak intronów, brak czapeczki ani ogona poli-A; u eukariontów pre-mRNA wymaga obróbki: przyłączenie czapeczki 7-metyloguanozynowej na 5\', poliadenylacja na 3\' (ogon poli-A) oraz wycięcie intronów i połączenie eksonów (splicingowanie).',
    ],
    model_answer: 'Różnica 1 — lokalizacja i sprzężenie z translacją: u prokariontów transkrypcja i translacja zachodzą jednocześnie w cytoplazmie (polysome tworzy się na mRNA jeszcze podczas transkrypcji). U eukariontów transkrypcja odbywa się w jądrze, a przetworzone mRNA eksportowane jest do cytoplazmy, gdzie dopiero następuje translacja — procesy są odseparowane przestrzennie i czasowo. Różnica 2 — obróbka mRNA: prokarioty: mRNA gotowy do translacji natychmiast (brak intronów, brak czapeczki i ogona poli-A u większości mRNA); eukarionty: pre-mRNA musi przejść obróbkę — dodanie czapeczki m7G (5\'), poliadenylację (3\' poli-A ~200 nt) i splicing (usunięcie intronów przez spliceosom).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.obrobka,
    question_text: 'Wyjaśnij, na czym polega alternatywny splicing pre-mRNA u eukariontów. Podaj, jakie znaczenie biologiczne ma ten proces dla różnorodności białek w organizmie.',
    question_type: 'open',
    max_points: 2,
    key_points: [
      'Alternatywny splicing: ten sam gen może dostarczyć różnych dojrzałych mRNA przez różne kombinacje wycinania intronów i łączenia eksonów — niektóre eksony są pomijane (exon skipping) lub włączane warunkowo w zależności od rodzaju komórki, etapu rozwoju lub sygnału.',
      'Znaczenie: jeden gen może kodować wiele różnych białek (izoform) o różnej budowie i funkcji — zwiększa proteom bez zwiększania liczby genów; szacuje się, że >90% genów ludzkich ulega alternatywnemu splicingowi; przykład: gen troponiny T — serce vs mięśnie szkieletowe produkują różne izoformy przez alternatywny splicing.',
    ],
    model_answer: 'Alternatywny splicing: podczas obróbki pre-mRNA spliceosom może łączyć eksony w różnych kombinacjach — niektóre eksony są pomijane, inne włączane warunkowo. Np. gen z eksonami 1-2-3-4-5: w komórce A łączy 1-2-4-5 (pomija ekson 3), w komórce B łączy 1-3-5 (pomija 2 i 4). Efekt: jeden gen produkuje kilka różnych mRNA → kilka różnych białek (izoform). Znaczenie biologiczne: dramatyczne zwiększenie różnorodności proteom (człowiek: ~20 000 genów kodujących → >100 000 białek, w dużej mierze dzięki alternatywnemu splicingowi). Umożliwia tkankową specyficzność białek bez duplikacji genów.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.kod,
    question_text: 'Kod genetyczny określany jest jako zdegenerowany (zwyrodniały). Wyjaśnij, co oznacza ta cecha kodu genetycznego, i podaj, jaką korzyść biologiczną daje degeneracja kodu.',
    question_type: 'open',
    max_points: 2,
    key_points: [
      'Degeneracja (redundancja) kodu: jeden aminokwas może być kodowany przez więcej niż jeden kodon (synonimiczne kodony); np. leucyna — 6 kodonów (UUA, UUG, CUU, CUC, CUA, CUG); 64 kodony → 20 aminokwasów + 3 kodony STOP → matematycznie konieczna degeneracja.',
      'Korzyść biologiczna: mutacje ciche (silent mutations) — zmiana trzeciej zasady kodonu często nie zmienia aminokwasu (efekt "pozycji chwiejnej" — wobble position) → DNA może ewoluować bez zmiany sekwencji aminokwasów białka → bufor chroniący przed szkodliwymi skutkami mutacji.',
    ],
    model_answer: 'Zdegenerowany kod genetyczny: wiele aminokwasów jest kodowanych przez więcej niż jeden kodon — np. Ser: UCU, UCC, UCA, UCG, AGU, AGC (6 kodonów); Ala: GCU, GCC, GCA, GCG (4 kodony); Met i Trp: tylko 1 kodon każdy. 64 kodony → 20 aminokwasów + 3 STOP = konieczność redundancji. Korzyść: degeneracja szczególnie widoczna w 3. pozycji kodonu (pozycja "chwiejna" — wobble) — zmiana zasady na tej pozycji często nie zmienia aminokwasu → mutacje ciche. Oznacza to, że nie każda zmiana sekwencji DNA prowadzi do zmiany sekwencji białka, co chroni proteom przed nadmierną mutagenezą.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.translacja,
    question_text: 'Opisz rolę tRNA w procesie translacji. Wyjaśnij, czym jest antykodon i w jaki sposób zapewnia on dokładność doboru aminokwasów podczas syntezy białka.',
    question_type: 'open',
    max_points: 2,
    key_points: [
      'tRNA pełni rolę adaptera: na jednym końcu (ramię akceptorowe, CCA-3\') przenosi specyficzny aminokwas (przyłączony przez aminoacylo-tRNA syntetazę); na pętli antykodonowej ma sekwencję antykodonu — trójkę nukleotydów komplementarną do kodonu na mRNA.',
      'Antykodon wiąże się komplementarnie (antyrównolegle) z kodonem mRNA na rybosomie w miejscu A — tylko tRNA z pasującym antykodonem może się przyłączyć do danego kodonu, co gwarantuje wbudowanie właściwego aminokwasu w odpowiednim miejscu rosnącego łańcucha polipeptydowego.',
    ],
    model_answer: 'tRNA (transferowy RNA) — adapter między językiem nukleotydów (mRNA) a językiem aminokwasów (białko). Budowa funkcjonalna: (1) ramię akceptorowe z sekwencją CCA-3\': aminoacylo-tRNA syntetaza przyłącza specyficzny aminokwas do końca 3\'-OH; (2) pętla antykodonowa z trójką nukleotydów (antykodon) komplementarną do kodonu mRNA. Mechanizm: gdy kodon mRNA znajdzie się w miejscu A rybosomu, tRNA z komplementarnym antykodonem wiąże się z nim przez wiązania wodorowe (reguła komplementarności zasad, kierunek antyrównoległy). Tylko "właściwy" tRNA przyłącza swój aminokwas do rosnącego łańcucha — aminokwas jest przenoszony z miejsca A do miejsca P przez transpeptydację.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 1, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.prokaryoty,
    question_text: 'U bakterii E. coli ekspresja genów laktozy kontrolowana jest przez operon lac. Wyjaśnij, co dzieje się z ekspresją operonu lac, gdy komórka bakteryjna rośnie w podłożu zawierającym WYŁĄCZNIE glukozę (brak laktozy). Opisz rolę represora w tej sytuacji.',
    question_type: 'open',
    max_points: 2,
    key_points: [
      'Brak laktozy → brak induktora (allolaktozy) → represor lac (białko LacI) pozostaje aktywny i wiąże się z operatorem (sekwencją DNA między promotorem a genami strukturalnymi) — blokuje przyłączenie polimerazy RNA do promotoru → transkrypcja genów lacZ, lacY, lacA jest wyłączona (represja).',
      'Glukoza jest preferowanym źródłem węgla — gdy glukoza jest dostępna, stężenie cAMP jest niskie, więc aktywator CAP (CRP) nie może aktywować promotoru; nawet gdyby laktoza była obecna (represor odblokowany), transkrypcja byłaby słaba bez CAP-cAMP — podwójna kontrola (represja + brak aktywacji).',
    ],
    model_answer: 'Gdy dostępna jest tylko glukoza (brak laktozy): 1) Represja: brak laktozy = brak allolaktozy (induktora) → białko represora (LacI) pozostaje związane z operatorem → polimeraza RNA nie może przejść przez operator → brak transkrypcji genów lacZ (beta-galaktozydaza), lacY (permeaza), lacA (transacetylaza) — enzymy do trawienia laktozy nie są produkowane. 2) Brak aktywacji CAP: glukoza hamuje cyklazę adenylową → niski cAMP → CAP (catabolite activator protein) nie wiąże się z DNA przy promotorze lac → brak aktywacji transkrypcji. Komórka oszczędza energię nie produkując enzymów do substratu, który nie jest dostępny.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.prokaryoty,
    question_text: 'Operon trp u E. coli jest opernem represyjnym (repressible operon). Wyjaśnij, jak tryptofan reguluje własną biosyntezę, opisując rolę korepresor–aporepresora. Określ, co dzieje się z ekspresją operonu trp przy niskim i wysokim stężeniu tryptofanu w komórce.',
    question_type: 'open',
    max_points: 2,
    key_points: [
      'Niskie stężenie tryptofanu: aporepressor (białko TrpR) nie ma korepresor → nieaktywna forma represora → nie wiąże się z operatorem → RNA-polimeraza transkrybuje geny strukturalne trpEDCBA → synteza enzymów szlaku biosyntezy tryptofanu.',
      'Wysokie stężenie tryptofanu: tryptofan jako korepressor wiąże się z aporepresorem → zmiana konformacji → aktywny kompleks repressor-korepresor wiąże się z operatorem → blokada transkrypcji → zahamowanie produkcji enzymów biosyntezujących tryptofan (sprzężenie zwrotne ujemne).',
    ],
    model_answer: 'Operon trp (represyjny): geny biosyntezy tryptofanu wyłączane gdy tryptofan jest nadmiarowy. Aporepressor (białko TrpR) sam w sobie jest nieaktywny. Niskie [Trp]: brak kopreresora → aporepressor nie wiąże operatora → polimeraza RNA transkrybuje geny trpE, trpD, trpC, trpB, trpA → synteza enzymów tryptofanu, np. antranilan syntazy. Wysokie [Trp]: tryptofan (korepresor) wiąże aporepressor → zmiana konformacji 3D → aktywny kompleks repressor-korepresor przyłącza się do operatora → blokuje transkrypcję → produkcja enzymów biosyntezujących Trp zostaje wyłączona. Logika: gdy Trp w nadmiarze, komórka go nie produkuje — oszczędność energii i substratów.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.eukaryoty,
    question_text: 'W komórkach eukariontycznych ekspresja genów może być regulowana na wielu poziomach. Wymień i krótko scharakteryzuj trzy różne poziomy regulacji ekspresji genów u eukariontów.',
    question_type: 'open',
    max_points: 3,
    key_points: [
      'Poziom transkrypcji: czynniki transkrypcyjne (aktywatory, represory) wiążą się z promotorami i wzmacniaczami (enhancerami) — zwiększają lub zmniejszają częstotliwość inicjacji transkrypcji przez RNA-polimerazę II; chromatyna musi być dostępna (otwarta).',
      'Poziom obróbki pre-mRNA: alternatywny splicing (różne izoformy białek z jednego genu), poliadenylacja alternatywna (różna stabilność mRNA), edycja RNA (zmiana sekwencji nukleotydów).',
      'Poziom translacyjny i postranslacyjny: miRNA wiążą się z 3\'-UTR mRNA → degradacja lub hamowanie translacji; modyfikacje potranslacyjne białek (fosforylacja, ubikwitynacja → proteoliza) zmieniają aktywność lub trwałość białka.',
    ],
    model_answer: '1. Regulacja transkrypcji: czynniki transkrypcyjne (TF) wiążą się ze specyficznymi sekwencjami DNA (promotory, enhancery, silencery) i rekrutują lub blokują maszynerię transkrypcyjną (RNA-pol II + czynniki ogólne). Dostępność chromatyny kontrolowana przez modyfikacje histonów (acetylacja/metylacja) i remodelatory. 2. Regulacja posttranskrypcyjna: alternatywny splicing (>90% genów ludzkich) → różne izoformy białek; stabilność mRNA (sekwencje ARE w 3\'-UTR → szybka degradacja); miRNA i siRNA — wiążą się z komplementarnymi sekwencjami mRNA → degradacja lub hamowanie translacji (mechanizm RNA interference, RNAi). 3. Regulacja translacyjna i potranslacyjna: inicjacja translacji regulowana przez fosforylację eIF2a (stres komórkowy); białka poddawane modyfikacjom (fosforylacja, glikozylacja, ubikwitynacja → proteasom) — zmiana aktywności, lokalizacji lub czasu półtrwania białka.',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
    difficulty: 2, verified: true,
  },
  {
    topic_id: T, subtopic_id: S.epigenet,
    question_text: 'Wyjaśnij, w jaki sposób metylacja DNA wpływa na ekspresję genów. Podaj przykład biologiczny, w którym metylacja DNA odgrywa kluczową rolę regulacyjną.',
    question_type: 'open',
    max_points: 2,
    key_points: [
      'Metylacja DNA polega na przyłączeniu grupy metylowej do cytozyny w kontekście CpG (→ 5-metylocytozyna, 5mC) przez metylotransferazy DNMT; metylacja regionów promotorowych (wysp CpG) koreluje z wyciszeniem transkrypcji — białka MBD (methyl-CpG binding domain) wiążą metylowane CpG i rekrutują represory transkrypcji i deacetylazy histonów.',
      'Przykład biologiczny: imprinting genomowy — geny imprintingowe mają jedną kopię zmetylowaną (wyciszoną) zależnie od rodzicielskiego pochodzenia; np. gen H19 (aktywny allel matczyny, ojcowski zmetylowany) lub IGF2 (aktywny allel ojcowski, matczyny zmetylowany); utrata prawidłowego imprintingu → choroby (PWS, AS, Beckwith-Wiedemann).',
    ],
    model_answer: 'Metylacja DNA: metylotransferazy (DNMT1 utrzymuje metylację podczas replikacji; DNMT3A/3B — de novo metylacja) przyłączają grupę -CH₃ do C w dinukleotydach CpG → 5-metylocytozyna. Wyspy CpG w promotorach: gdy hipometylowane → gen aktywny (dostępna chromatyna); gdy hipermetylowane → wyciszenie genu — białka MBD (np. MeCP2) wiążą 5mC i rekrutują HDAC i NuRD → zagęszczenie chromatyny → brak transkrypcji. Przykład: imprinting genomowy — gen IGF2 (insulin-like growth factor 2): allel ojcowski aktywny (promotor niemetylowany), allel matczyny wyciszony (metylacja ICR — imprinting control region); allel matczyny H19 aktywny, ojcowski wyciszony. Utrata prawidłowej metylacji ICR → syndrom Beckwitha-Wiedemanna (przero­ślenie) lub Russell-Silvera (zahamowanie wzrostu).',
    options: [], correct_answer: [], explanation: '',
    source: 'własne, wzorowane na CKE',
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
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding ${questions.length} open questions...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 120))
    else console.log('OK', q.max_points + 'pkt', q.question_text.slice(0, 72).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
