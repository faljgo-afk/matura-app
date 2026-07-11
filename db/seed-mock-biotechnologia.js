// Seed: mock_questions — Biotechnologia (19 questions)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const S = {
  bioet:  '306a13c3-097a-448a-beb8-bf8d17534678',
  med:    '2801c82b-c3d0-4e23-9b72-4604b20cbfa8',
  diag:   'f4edf8a6-b6f7-4d30-b9ca-5dbcdfeea93c',
  ferm:   'ab4c8dd5-833b-4094-b7e4-0c94ff44ccc1',
  inz:    '31834ef0-8ae2-4ced-806f-014e54b7dd1d',
  klon:   '5e7ee9ea-3144-4dc7-9f99-b8ca1c38c049',
  gmo:    '2628cff0-d8c2-42cb-ab4c-60c609063091',
  pcr:    'e2a9978b-d943-439a-abc7-f411778757c1',
  sek:    '9f59fca4-ceb3-4483-a3a8-0afcdfa601ee',
}

const questions = [
  // ─── Inzynieria genetyczna ───
  {
    subtopic: 'Biotechnologia — Inzynieria genetyczna',
    subtopic_id: S.inz,
    question_type: 'single',
    question_text: 'Enzymy restrykcyjne (nukleazy restrykcyjne) sa kluczowym narzedziem inzynierii genetycznej. Ktore zestawienie POPRAWNIE opisuje ich dzialanie i zastosowanie?',
    options: [
      { id: 'A', text: 'Enzymy restrykcyjne przecinaja dwuniciowy DNA w specyficznych sekwencjach rozpoznawczych (palindromy 4-8 pz) tworzac lepkie (sticky) lub tupe (blunt) konce; te same enzymy uzywane do ciecia wektora i insrtu -> kompatybilne lepkie konce -> ligacja ligaza DNA -> rekombinowany plazmid', is_correct: true },
      { id: 'B', text: 'Enzymy restrykcyjne tna DNA jednoniciowy (ssDNA) w dowolnym miejscu, niezaleznie od sekwencji; nie rozrozniaja miedzy DNA bakteryjnym a obcym; sa uzywane wylacznie do syntezy oligonukleotydow in vitro', is_correct: false },
      { id: 'C', text: 'Enzymy restrykcyjne dzialaja jak odwrotna transkryptaza — przepisuja mRNA na cDNA; nazwa "restrykcyjne" oznacza ze ograniczaja (restryktuja) ekspresje genow w komorkach bakteryjnych bez dzialania nukleazowego', is_correct: false },
      { id: 'D', text: 'Wszystkie enzymy restrykcyjne tworza wylacznie tupe konce (blunt ends) — lepkie konce sa niemozliwe ze wzgledu na przestrzenna budowe enzymu; ligacja plazmidu z insertem nie wymaga kompatybilnych koncow', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Enzymy restrykcyjne (restriction endonucleases): odkryte u bakterii jako uklad obrony przed wirusami (System Restrykcji-Modyfikacji); bakteria metyluje wlasny DNA (metylaza) → enzymy restrykcyjne rozpoznaja niemożny (niemetylowany) DNA fagowy i go tna. Budowa: endonukleazy II klasy (stosowane w inzynierii): homo- lub heterodimery; rozpoznaja palindromowe sekwencje 4-8 pz (EcoRI: 5-GAATTC-3; HindIII: 5-AAGCTT-3; BamHI: 5-GGATCC-3). Typy ciec: (1) Lepkie konce 5 (EcoRI, BamHI): staggered cut → nukleotydy jednoniciowe na 5 koncu; (2) Lepkie konce 3 (KpnI): jednonicowe na 3; (3) Tupe konce (SmaI, EcoRV): blunt = brak jednonicowego overhang. Zastosowanie w klonowaniu: (1) Ciac wektor i insert tym samym enzymem → kompatybilne lepkie konce → spontaniczne hybrydyzowanie; (2) Ligaza DNA (T4 DNA ligase) → kowalencyjne polaczenie fosfodiesterowe → rekombinowany plazmid; (3) Transformacja do E. coli; (4) Selekcja klonow (antybiotyk, niebiesko-biala selekcja lacZ). Izoshizomery: rozne enzymy rozpoznajace te sama sekwencje (SmaI i XmaI: CCCGGG ale rozne ciecia). Zastosowania: RFLP (polimorfizm dlugosci fragmentow restrykcyjnych), Southern blot, tworzenie bibliotek genomowych.',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — Inzynieria genetyczna',
    subtopic_id: S.inz,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących wektorów klonowania i transformacji:\nA. Plazmidy jako wektory klonowania muszą zawierać: origin of replication (ori — umożliwia namnażanie w komórce gospodarza), gen selekcyjny (np. antybiotykooporności) oraz miejsce klonowania MCS (multiple cloning site) z sekwencjami rozpoznawanymi przez enzymy restrykcyjne.\nB. Wektory wirusowe (retrowirusy, adenowirusy, AAV) stosowane w terapii genowej mogą integrować transgeny do genomu gospodarza — retrowirusy integrują zawsze losowo w całym genomie (ryzyko mutagenezy insercyjnej); AAV preferuje określone miejsca w chromosomie 19.\nC. Transformacja bakterii (wprowadzenie obcego DNA) jest procesem naturalnym niemożliwym do przeprowadzenia w warunkach laboratoryjnych — jedynym sposobem wprowadzenia DNA do bakterii jest transdukcja przez bakteriofagi.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: minimalne elementy plazmidu klonujacego: (1) ori: np. ColE1 (pBR322, pUC19) — replikacja niezalezna od chromosomu gospodarza, numer kopii ~15-700; (2) marker selekcyjny: gen opornosci na ampicyline (bla), tetracykline, kanamycyne itp.; (3) MCS (polylinker): skupisko unikatowych miejsc restrykcyjnych w krotkim fragmencie (~20 roznych enzymow w pUC19); czesto MCS wewnatrz genu lacZ (selekcja niebiesko-biala). B — PRAWDA: retrowirusy (Moloney MLV, lentiwirusy HIV-based): RNA → RT → dsDNA → integraza → losowa integracja w genomie gospodarza; ryzyko: aktywacja protoonkogenu (np. leczenie X-SCID: 5 pacjentow → bialaczka przez integracje pobliżu LMO2); retrowirusy = stale zakazenie komórek dzielacych sie. AAV (adeno-associated virus, wirus AAV serotyp 2): preferencja do AAVS1 (19q13.42) — bezpieczna przestan; stosowany w Zolgensma (atrofia rdzeniowa SMA), Luxturna (amauroza Lebera). Adenowirusy: nie integruja, episomalne → przejsciowa ekspresja; reakcja immunologiczna (smierc Jesse Gelsinger 1999). C — FAŁSZ: transformacja kompetentnych komórek = standardowa technika laboratoryjna: (1) Metoda chemiczna: CaCl₂ → komórki kompetentne → inkubacja z DNA → heat shock 42°C 45 sek → naprawa w LB → plytki; (2) Elektroporacja: krotki impuls elektryczny (1-2,5 kV/cm) → tymczasowe pory → DNA wnika; (3) Transformacja jest tez naturalnym zjawiskiem: Griffith 1928 (pneumokoki virulent S + martwe R → zywe S = transformacja: Avery, MacLeod, McCarty 1944 = DNA).',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  // ─── Klonowanie genow ───
  {
    subtopic: 'Biotechnologia — Klonowanie genow',
    subtopic_id: S.klon,
    question_type: 'single',
    question_text: 'Biblioteka cDNA rozni sie od biblioteki genomowej. Ktore zestawienie POPRAWNIE opisuje obie biblioteki i ich zastosowania?',
    options: [
      { id: 'A', text: 'Biblioteka genomowa: fragmenty calego DNA (chromosomalnego) klonowane w wektorach — zawiera geny + introny + sekwencje regulatorowe; cDNA: odwrotna transkryptaza przepisuje mRNA → cDNA → klonowanie — reprezentuje tylko geny aktywne w danym tkance/czasie, bez intronow; cDNA uzywana do ekspresji bialka w prokariotach (brak mechanizmu wycinania intronow)', is_correct: true },
      { id: 'B', text: 'Biblioteka cDNA zawiera introny i sekwencje miedzygenowe tak jak genomowa; roznica: cDNA jest tworzona z RNA komorek roslinnych, genomowa — z RNA zwierzat; obie biblioteki sa identyczne pod wzgledem zawartosci genow', is_correct: false },
      { id: 'C', text: 'Odwrotna transkryptaza (reverse transcriptase) przepisuje DNA na mRNA — jej produktem jest kopia RNA genu; cDNA = chromosomalny DNA bez intronow; termin cDNA oznacza "chromosomal DNA", a nie "complementary DNA"', is_correct: false },
      { id: 'D', text: 'Biblioteka genomowa zawiera wylacznie geny kodujace bialka; sekwencje niekodujace (intronowe, regulatory, powtorzone) sa automatycznie usuwane podczas tworzenia biblioteki; biblioteka genomowa i cDNA sa identyczne w organizmach prokariotycznych', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Biblioteka genomowa (genomic library): losowe fragmetowanie calego DNA genomowego (sonifikacja lub enzymy restrykcyjne Sau3A partial digestion) → klonowanie do wektora (kosmid, BAC, YAC dla duzych fragmentow); zawiera: eksony + introny + promotory + enhancery + satelitarne DNA + pseudogeny; odwzorowuje CALY GENOM organizmu; uzywana do: mapping genomu, analizy regulacji, sekwencjonowania genomu. Biblioteka cDNA (complementary DNA library): izolacja mRNA (poli-A+) z tkanki → odwrotna transkryptaza (RT): mRNA → ssDNA (transkrypt odwrotny) → RNaza H / polimeraza I → dsDNA (cDNA) → klonowanie; zawiera tylko EKSPRESOWANE GENY (transkryptom danej tkanki w danym czasie); nie zawiera intronow (mRNA juz spliced); rozne biblioteki z roznych tkanek (mRNA mozgu != mRNA watroby); Zastosowania cDNA: (1) Klonowanie i ekspresja bialka ludzkiego w bakteriach: E. coli nie ma spliceosomu → potrzeba cDNA bez intronow (np. insulin: gen z intronami → cDNA → E. coli → ludzka insulina); (2) Identyfikacja genow ekspresjonowanych tkankowo (2-hybrid, microarray); (3) RT-PCR (diagnostyka). Odroznenie: genomowa = encyklopedia pelna, cDNA = wyciag tekstow czytanych aktualnie w danej bibliotece.',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — Klonowanie genow',
    subtopic_id: S.klon,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących klonowania organizmów (klonowania reprodukcyjnego):\nA. Klonowanie reprodukcyjne (SCNT — somatic cell nuclear transfer) polega na przeniesieniu jądra komórki somatycznej dawcy do enukleowanego oocytu biorcy; komórka jest stymulowana do podziałów → blastocysta → implantacja do macicy zastępczej → klon genetyczny dawcy jądra (ale nie dawcy oocytu — mitochondria pochodzą od biorcy).\nB. Dolly (1996, Roslin Institute, Wilmut i Campbell): pierwsza klonowana z komórki somatycznej dorosłego ssaka (komórka gruczołu mlecznego owcy Finn Dorset); dowiodła, że różnicowanie komórek somatycznych jest ODWRACALNE — jądro może być reprogramowane do totipotencji przez cytoplazme oocytu.\nC. Klony organizmów są genetycznie identyczne pod każdym względem, łącznie z epigenomem, ekspresją genów i fenotypem — identyczne bliźnięta jednojajowe i klony SCNT są wzajemnie nieodróżnialne na poziomie molekularnym.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: SCNT (somatic cell nuclear transfer): (1) Izolacja komórki somatycznej dawcy (skóra, fibroblast, gruczoł mleczny); (2) Enukleacja oocytu MII biorcy (usunięcie jadra przez pipetę lub UV); (3) Fuzja jadra dawcy z cytoplazma oocytu (elektrofuzja lub mikroiniekcja); (4) Aktywacja (Ca²⁺ jonofory, elektryczna); (5) Hodowla in vitro → blastocysta; (6) Implantacja do macicy zastepczej. UWAGA: mtDNA od biorcy oocytu → klon ma inne mtDNA niz dawca jadra → nie jest w 100% identyczny; epigenom jest przeprogramowywany ale nie zawsze kompletnie (czesto defekty). B — PRAWDA: Dolly (5 lipca 1996, urodzona; Nature, luty 1997, Wilmut, Campbell, Schnieke): komórka gruczołu mlecznego (mammary gland) owcy Finn Dorset (biala) → jadro do enukleowanego oocytu Scottish Blackface (ciemna) → Dolly biala (jądro) z mlekiem od Blackface (cytoplazma). Znaczenie: obalenie dogmatu o nieodwracalnosci róznicowania; cytoplazma oocytu zawiera czynniki reprogramowania (OCT4, SOX2, KLF4, cMyc = Yamanaka factors 2006); Dolly: usmierzona 2003 (zapalenie pluc, artretyzm — wiek biologiczny jądra 6 lat w momencie klonowania?). C — FAŁSZ: klony SCNT roznia sie od dawcy: (1) Epigenom: reprogramowanie niepelne → inne wzorce metylacji; (2) mtDNA: od biorcy oocytu; (3) Srodowisko prenatalne (inna macica); (4) Srodowisko po urodzeniu (inna dieta, stres, mikrobiom); wynik: klony czesto róznia sie fenotypowo. Koty klonowane (CC Cat 2001): inna siersc niz dawca (losowe inaktywowanie chromosomu X u kota calkamskiego — epigenetyczne = niereprogramowalne przez SCNT).',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  // ─── PCR i elektroforeza ───
  {
    subtopic: 'Biotechnologia — PCR i elektroforeza',
    subtopic_id: S.pcr,
    question_type: 'single',
    question_text: 'PCR (reakcja lancuchowa polimerazy) jest podstawowa technika biologii molekularnej. Ktore zestawienie POPRAWNIE opisuje etapy PCR i kluczowe skladniki reakcji?',
    options: [
      { id: 'A', text: 'PCR: (1) Denaturacja (94-98°C): rozplatanie dsDNA; (2) Hybrydyzacja primerów (50-65°C, annealing): startery 18-25 nt przylegaja do komplementarnych sekwencji matrycy; (3) Elongacja (72°C): Taq polimeraza (termostabilna) syntezuje nowa nic 5→3. Cykl x30-40 → 2ⁿ kopii. Skladniki: DNA matryca, para primerów (forward+reverse), dNTP, Taq polimeraza, MgCl₂, bufor', is_correct: true },
      { id: 'B', text: 'PCR dziala w stalej temperaturze 37°C przez caly czas reakcji; DNA-polimeraza uzywana w PCR to Pol I E. coli (mezofil); startery nie sa potrzebne — polimeraza samodzielnie rozpoznaje poczatek syntezy na ssDNA bez zadnego wskaznika miejsca start', is_correct: false },
      { id: 'C', text: 'W PCR zamiast DNA-polimerazy uzywana jest odwrotna transkryptaza przepisujaca DNA na RNA; produktem PCR jest jednoniciowy RNA; temperatura elongacji wynosi 4°C (lodowa) aby zapobiec denaturacji enzymu', is_correct: false },
      { id: 'D', text: 'PCR amplifikuje wylacznie RNA; sekwencje DNA nie moga byc amplifikowane przez PCR; produktem konwencjonalnego PCR jest zawsze bialko (translacja zachodzi in vitro podczas reakcji)', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'PCR (Polymerase Chain Reaction, Kary Mullis 1983, Nobel Chemia 1993): Skladniki: (1) DNA matryca (template): genomowy, plazmidowy, cDNA; nawet 1 czasteczka wystarczy (ale zwykle ng-pg); (2) Primery (startery): 2 oligonukleotydy ~18-25 nt, komplementarne do nici +/- ograniczajace amplikon; Tm = 50-65°C; (3) dNTP (dATP, dTTP, dCTP, dGTP): substraty syntezy; (4) Taq DNA polimeraza (Thermus aquaticus, hydrotermalne zrodla Yellowstone): termostabilna, optimum 72°C, nie podlega inaktywacji podczas denaturacji; brak proofreading (bledy ~10⁻⁵/nt) → do wiernosci: Pfu, Phusion (3→5 exo); (5) MgCl₂ (~1,5-2,5 mM): kofaktor polimerazy, stabilizuje dNTP-Mg²⁺, wplywa na Tm primerów; (6) Bufor. Cykl: Denaturacja 94-98°C 30s; Annealing (Tm -5°C) 30-60s; Elongacja 72°C 1 min/kb. Po n cyklach: 2ⁿ kopii (teoretycznie); efektywnie ~10⁶-10⁹. Warianty: RT-PCR (odwrotna transkrypcja mRNA → cDNA → PCR); qPCR/real-time PCR (fluorescencja SYBR Green lub probe TaqMan → ilosc); Multiplex PCR (wiele par primerów); LAMP (izotermalne). Zastosowania: diagnostyka (COVID, HIV, Chlamydia), kryminalistyka (STR/microsatelitarne), badania prenatalne, archeogenomika.',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — PCR i elektroforeza',
    subtopic_id: S.pcr,
    question_type: 'single',
    question_text: 'Elektroforeza zelowa DNA rozdziela fragmenty wedlug rozmiaru. W wyniku reakcji PCR z DNA czlowieka uzyskano produkt. Nastepnie cDNA przeanalizowano przez elektroforeze w zelu agarozowym. Ktore stwierdzenie POPRAWNIE opisuje zasade rozdzialu i interpretacje wyniku?',
    options: [
      { id: 'A', text: 'Zasada: DNA naladowany ujemnie (-PO₄) w polu elektrycznym wedrowje od katody (-) do anody (+); mniejsze fragmenty wnikaja w pory zelu szybciej = dalej od studni; wywiazanie z markerem (drabinką DNA o znanych rozmiarach) pozwala odczytac dlugosc amplikonu w parach zasad (pz)', is_correct: true },
      { id: 'B', text: 'DNA jest dodatnio naladowany i wedrowje od anody (+) do katody (-); wieksze fragmenty poruszaja sie szybciej i dalej od studni; marker DNA nie jest potrzebny do okreslenia rozmiaru fragmentow', is_correct: false },
      { id: 'C', text: 'Elektroforeza zelowa rozdziela DNA wedlug masy czasteczkowej w Da (nie dlugosci); bialka i DNA poruszaja sie identycznie w zelu agarozowym; dodanie SDS jest wymagane do rozdzialu DNA (identycznie jak SDS-PAGE dla bialek)', is_correct: false },
      { id: 'D', text: 'Mniejsze fragmenty DNA wedrowja wolniej i sa blizej studni; wieksze — szybciej i dalej; zasada jest identyczna jak rozdzial bialek w SDS-PAGE; zel poliakrylamidowy nie nadaje sie do rozdzialu DNA', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Elektroforeza zelowa DNA: Zasada fizyczna: DNA = polianion (grupy fosforanowe -PO₄⁻ w pH 7-8); w polu elektrycznym (50-150 V): katoda (-) → anoda (+) = DNA → anoda (+); sila napedowa: q·E (ladunek × pole); opor sita molekularnego zelu: mniejsze fragmenty wnikaja w pory szybciej i dalej wêdruja. Zel agarozowy: 0,5-3% (niski % = duze fragmenty; wysoki % = male); wzory w buforze TAE lub TBE; barwnik: EtBr (fluorescencja UV, mutageniczny!) lub bezpieczne alternatywy (SYBR Safe, GelRed). Marker (DNA ladder): mieszanina fragmentow o znanych rozmiarach (100 bp ladder, 1 kb ladder) → skala do odczytu; wizualizacja pod UV lub niebieskim swiatlem. Interpretacja pasm: kazde pasmo = fragment DNA o danej dlugosci; intensywnosc pasma = ilosc DNA (wiecej kopii = jasniejsze). Kel poliakrylamidowy (PAGE): do rozdzialu krotkich DNA (<1 kb) lub RNA; wysoka rozdzielczosc (sekwencjonowanie Sangera!). Zastosowania: kontrola produktu PCR, RFLP, trawienie restrykcyjne, Southern blot (przeniesienie z zelu na membrane), analiza fragmentow STR.',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  // ─── Organizmy GMO ───
  {
    subtopic: 'Biotechnologia — Organizmy GMO',
    subtopic_id: S.gmo,
    question_type: 'single',
    question_text: 'Technologia CRISPR-Cas9 rewolucjonizuje modyfikacje genomu. Ktore zestawienie POPRAWNIE opisuje mechanizm dzialania systemu CRISPR-Cas9?',
    options: [
      { id: 'A', text: 'CRISPR-Cas9: przewodnikowy RNA (sgRNA, ~20 nt) komplementarny do sekwencji docelowej + bialko Cas9 (endonukleaza) tworza kompleks; sgRNA naprowadza Cas9 do miejsca docelowego (wymaga sekwencji PAM: NGG po stronie 3); Cas9 przecina oba lancuchy DNA → DSB → naprawa NHEJ (insercje/delecje = nokaut genu) lub HDR (dokladna naprawa z matryca = edycja genu)', is_correct: true },
      { id: 'B', text: 'CRISPR-Cas9 dziala jak odwrotna transkryptaza i nie tnie DNA; sgRNA przepisuje gen docelowy na RNA ktore jest degradowane; system nie wymaga zadnej sekwencji PAM; mozna editowac dowolne miejsce genomu bez ograniczen', is_correct: false },
      { id: 'C', text: 'CRISPR-Cas9 to metoda wylacznie diagnostyczna uzywana do wykrywania mutacji; nie wprowadza zmian w sekwencji DNA; Cas9 jest polimerazą syntezujaca nowe odcinki DNA w miejscu docelowym bez przecinania', is_correct: false },
      { id: 'D', text: 'W systemie CRISPR-Cas9 biako Cas9 rozpoznaje sekwencje DNA bezposrednio bez potrzeby przewodnikowego RNA; system moze przecinac tylko RNA, nie DNA; PAM (protospacer adjacent motif) jest sekwencja blokujaca dzialalnosc enzymu', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'CRISPR-Cas9 (Clustered Regularly Interspaced Short Palindromic Repeats — CRISPR-associated protein 9): odkryty jako uklad immunizacji adaptacyjnej bakterii (Ishino 1987 CRISPR; Barrangou 2007 funkcja; Doudna + Charpentier 2012 in vitro edycja; Nobel Chemia 2020 Doudna i Charpentier). Komponenty: (1) Cas9: endonukleaza (z S. pyogenes SpCas9); dwie domeny katalityczne: HNH (tnie nic komplementarna) + RuvC (tnie nic niekomplementarna) → DSB (double strand break) 3 pz przed PAM; (2) sgRNA (single guide RNA): fuzja crRNA (20 nt spacer komplementarny do celu) + tracrRNA (scaffold dla Cas9); latwiejsze niz oryginalne dwa-RNA; (3) PAM (protospacer adjacent motif): SpCas9 wymaga 5-NGG-3 na nici niekomplementarnej, bezposrednio za miejscem docelowym → ogranicza dostepnosc (1 co 8 pz statystycznie); alternatywne Cas: SaCas9 (NNGRRT), Cas12a = CPF1 (TTTN). Naprawa DSB: (a) NHEJ (nonhomologous end joining): szybka, niedokladna → indel → frameshift → nokaut; (b) HDR (homology directed repair): z matryca donor DNA → precyzyjna edycja (SNP, insercja fragmentu, korekcja mutacji); HDR tylko w S/G2 fazy cyklu (nizsza wydajnosc). Zastosowania: GMO (Hornless Holstein cattle, Golden Rice 2.0); terapia genowa (in vivo: SCD, Beta-talasemia — CTX001/Casgevy, EMA/FDA 2023 = pierwsze zatwierdzone CRISPR); baza genetyczna (knockout screens); CRISPR-DX (diagnostyka: SHERLOCK, DETECTR = COVID).',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — Organizmy GMO',
    subtopic_id: S.gmo,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących organizmów GMO:\nA. Złoty ryż (Golden Rice) zawiera geny (psy1 z kukurydzy i crtI z Erwinia uredovora) wprowadzone do bielma ziarna ryżu, umożliwiające syntezę beta-karotenu (prowitaminy A) — tradycyjny ryż nie syntetyzuje beta-karotenu w bielmie, a niedobór witaminy A jest przyczyną ślepoty u milionów dzieci w Azji.\nB. Rośliny Bt (Bacillus thuringiensis) produkują białko Cry (delta-endotoksynę) toksyczne dla larw owadów (Lepidoptera, Coleoptera) — toksyna aktywowana przez proteazy jelitowe owada wiąże się z receptorami błony nabłonka jelita → tworzenie porów → liza → śmierć owada; białko Cry jest nieszkodliwe dla ssaków, ptaków i większości bezkręgowców (brak receptorów).\nC. Wszystkie organizmy GMO są prawnie zakazane w Unii Europejskiej i na całym świecie; nie istnieje żaden zatwierdzony przez regulatora produkt GMO stosowany w medycynie lub rolnictwie.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: Zloty Ryż (Golden Rice): Ingo Potrykus i Peter Beyer, 2000 (Science); geny: (1) psy1 (fito fitoene synthase z kukurydzy / Narcissus): geranylgeranyl-PP → fito fitat (pierwszy krok szlaku karotenoidow); (2) crtI (phytoene desaturase z E. uredovora) przeksztalca w beta-karotenoid łancuchem; bielmo ryzu: normalne nie produkuje karotenoidow (szlak nieczynny mimo ze lisc robi); GR2 (nowa wersja 2005): wyzsza zawartosc beta-karotenu; 150 g GR2 pokrywa 50% dziennego zapotrzebowania dzieci na wit. A. B — PRAWDA: Bt: Bacillus thuringiensis naturalna glebowa bakteria; glowne proteiny Cry: Cry1Ac, Cry1Ab (Lepidoptera: Ostrinia nubilalis = omacnica, Heliothis), Cry3A (Coleoptera: Diabrotica = stonka). Mechanizm: protoksyna (pro-Cry) w ciele owada → rozpuszcza sie w alkalicznym jelicie (pH 10) → proteaza jelita owada → aktywna toksyna → receptor (np. cadherin BRAD) na mikrokosmkach → oligomeryzacja → pory w blonie → wylew jonow, osmotyczna liza → smierc. Ssaki: jelito kwasne + inne receptory → brak aktywacji; EPA i EFSA: bezpieczne. Uprawy Bt: Bt-bawelna (Indie, Chiny: ↓80% pestycydow), Bt-kukurydza (Mon810, UE zatwierdzony). C — FAŁSZ: GMO sa legalne i szeroko stosowane: medycyna: insulina rekombinowana (Humulin, 1982, FDA), erytropoetyna (EPO), hormony wzrostu, szczepionki (HBsAg w drozdzy = Engerix-B), czynniki krzepniecia (VIII dla hemofilii); rolnictwo: soja RR (Roundup Ready, 190 mln ha swiatowo), kukurydza Bt, bawelna, rzepak, papaja (ringspot virus resistant na Hawajach). W UE: restrykcyjne przepisy (dyrektywa 2001/18/EC) ale nie zakaz absolutny; MON810 zatwierdzony do uprawy (Bt-kukurydza).',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  // ─── Diagnostyka molekularna ───
  {
    subtopic: 'Biotechnologia — Diagnostyka molekularna',
    subtopic_id: S.diag,
    question_type: 'single',
    question_text: 'Testy DNA stosowane w diagnostyce chorob genetycznych i kryminalistyce opieraja sie na analizie polimorfizmow. Ktore zestawienie POPRAWNIE opisuje STR i ich zastosowanie?',
    options: [
      { id: 'A', text: 'STR (Short Tandem Repeats, mikrosatelity): krotkie sekwencje 2-7 pz powtorzone tandemicznie o zmiennej liczbie powtorzen miedzy osobnikami; amplifikacja PCR specyficznych loci STR → elektroforeza → profil DNA (DNA fingerprint); identyfikacja osobnikow, ojcostwo, kryminalistyka, populacje genetyczne', is_correct: true },
      { id: 'B', text: 'STR to technika sekwencjonowania DNA uzywa do odczytu calego genomu w jeden dzien; kazda osoba ma identyczne STR — róznia sie nie liczba powtorzen ale rodzajem nukleotydu w centrum powtorzeń; STR nie moga byc amplifikowane przez PCR', is_correct: false },
      { id: 'C', text: 'STR (Short Tandem Repeats) sa wylacznymi markerami chorob autosomalnych dominujacych; ich analiza nie jest uzywana w kryminalistyce; profil DNA z analizy STR jest identyczny u blizniat jednojajowych i jest unikatowy biologicznie niemozliwy do sfalsowania', is_correct: false },
      { id: 'D', text: 'Profil DNA uzyskiwany przez analize STR jest identyczny u kazdej pary bracie-siostra (DZ); blizniec jednojajowy ma inny profil STR niz jego klon; technologia STR jest przestarzala i zastapiona w 100% przez sekwencjonowanie calosekwencjowe', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'STR (Short Tandem Repeats = mikrosatelity): sekwencja 2-7 pz (np. AGAT, CAC, TG) tandemicznie powtórzona wiele razy; liczba powtorzen (allel) jest polimorficzna — rózna u roznych osob (np. locus D3S1358: allele 12-20 powtorzen AGAT; czestosci rozne w populacjach). Analiza STR: (1) Izolacja DNA (krew, slina, nasienie, korzenie wlosow, scierane komorki, tkanki); (2) Multipleks PCR: amplifikacja ~15-20 loci STR jednoczesnie + amelogenina (płeć: X/Y); (3) Kapilarna elektroforeza z fluorescencja: precyzyjny rozmiar fragmentow (1 pz rozdzielczosc); (4) Profile dopasowywane do bazy. System CODIS (USA): 20 loci STR; prawdopodobienstwo przypadkowego dopasowania: <1/10¹⁷ (praktycznie zero). Zastosowania: kryminalistyka (GFS FBI, UK National DNA Database ~6 mln profili); ustalenie ojcostwa (matka+dziecko+ojciec potencjalny; wykluczone jesli >2 loci rózne); identyfikacja zwlok/ofiar katastrof (porownanie z DNA krewnych); populacje genetyczne; archeogenomika. UWAGA: MZ blizniety (jednojajowe) maja identyczne STR = problem kryminalistyczny (epigenetyczne rozróznianie lub sekwencjonowanie nowej generacji dla somatycznych mutacji). Róznica STR vs SNP: STR - multiallelic, wysoce informatywne, mniej loci potrzeba; SNP - biallelic, wymaga wiecej pozycji dla tej samej sily dyskryminacji, ale NG-sekwencjonowanie wygodne.',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — Diagnostyka molekularna',
    subtopic_id: S.diag,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących diagnostyki molekularnej:\nA. Test ELISA (Enzyme-Linked Immunosorbent Assay) wykrywa antygen lub przeciwciało przy użyciu przeciwciała sprzężonego z enzymem — zmiana barwy substratu jest proporcjonalna do stężenia wykrywanego cząsteczki; ELISA jest podstawą diagnostyki HIV (wykrycie przeciwciał anty-HIV), markera nowotworowego PSA i wielu innych biomarkerów.\nB. Technika Southern blot (Southern, 1975) polega na: (1) trawieniu DNA enzymami restrykcyjnymi, (2) elektroforezie w zelu agarozowym, (3) przeniesieniu DNA z żelu na membranę nylonową/nitrocelulozową, (4) hybrydyzacji z znakowaną sondą komplementarną do szukanej sekwencji, (5) detekcji; stosowana do wykrywania konkretnych fragmentów DNA (np. mutacja w genie, RFLP).\nC. qPCR (real-time PCR) umożliwia wyłącznie wykrywanie obecności/nieobecności sekwencji DNA (wynik binarny tak/nie) — nie można nim mierzyć ilości (stężenia) DNA lub mRNA; zastąpiony całkowicie przez sekwencjonowanie NGS w każdej aplikacji diagnostycznej.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: ELISA (Engvall i Perlman 1971): warianty: sandwich (antygen miedzy dwiema przeciwcialami: capture Ab na plastiku + detection Ab-enzym); indirect (Ab pacjenta → secondary Ab-HRP); competitive. Enzym: HRP (horseradish peroxidase) + substrat TMB → niebieski → stop kwas = zolty; OPD → pomaranczowy; AP (fosfataza alkaliczna) + pNPP → zolty. Czulosc: ng/mL do pg/mL. Zastosowania: HIV serology (Ag p24 + Ab anty-HIV = 4. generacja combo test); PSA (prostate-specific antigen, marker raka prostaty); hCG (test ciazowy); troponiny (zawal serca); alergologia (IgE swoiste); COVID (Ag-test). B — PRAWDA: Southern blot: Edwin Southern, 1975 (Journal of Molecular Biology); procedura: trawienie → zel agarozowy (rozdzia fragmentow) → denaturacja kwasem (depurynacja długich fragmentow) → przelanie kapilarne/elektryczne DNA na membrane nylonowa → blocking → hybrydyzacja (sonda znakowana: radioaktywna ³²P, fluorescencyjna, digoksygeninowa) → plytkanie → autoradiografia/chemiluminescencja. Analogi: Northern blot (RNA zamiast DNA); Western blot (bialka po SDS-PAGE → membrana → przeciwcialo → wykrycie). Dot/slot blot: bez rozdzialu (tylko hybr. na krazku). C — FAŁSZ: qPCR (real-time PCR): ILOSOWY, nie tylko jakosc; sygnał fluorescencji w kazdym cyklu; parametr Ct (cycle threshold) = cykl gdy sygnal przekracza prog tla; im wiecej matrycy → mniejszy Ct; krzywa standardowa Ct vs log(stezenia) → bezwzgledna ilosc lub ΔΔCt → wzgledna ekspresja (mRNA). Zastosowania: diagnostyka (wirusemia HIV VL, HCV, SARS-CoV-2), ekspresja genow (RT-qPCR), GMO quantification, weterynaryjne. Nie zastapiony NGS: qPCR szybki (1-3 h), tani, wrażliwy na 1-5 kopii; NGS: drogi, dlugi, ale multipleks wiecej sekwencji.',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  // ─── Sekwencjonowanie genomu ───
  {
    subtopic: 'Biotechnologia — Sekwencjonowanie genomu',
    subtopic_id: S.sek,
    question_type: 'single',
    question_text: 'Sekwencjonowanie Sangera (metoda dideoksy) bylo standardem przez 30 lat. Ktore zestawienie POPRAWNIE opisuje jego zasade i roznice od NGS?',
    options: [
      { id: 'A', text: 'Sanger: synteza DNA w obecnosci ddNTP (dideoksynukleotydy, brak OH na 3): wbudowanie ddNTP konczy lancuch w specyficznym miejscu → fragmenty roznej dlugosci zakorczajace sie danym nukleotydem → rozdział elektroforetyczny → sekwencja; NGS: masowo równolegly (miliony fragmentow na raz), tansza/kb, ale krotsze czytania', is_correct: true },
      { id: 'B', text: 'Sekwencjonowanie Sangera i NGS sa identyczne metodologicznie; roznice: Sanger sekwencjonuje RNA, NGS sekwencjonuje DNA; Sanger jest szybszy i tanska niz NGS i jest teraz stosowany globalnie zamiast NGS', is_correct: false },
      { id: 'C', text: 'W metodzie Sangera ddNTP (dideoksynukleotydy) maja dodatkowa grupe OH na 3 koncu (trojhydroksylowe), co pozwala na kontynuacje syntezy bez konczenia lancucha; metoda Sangera sekwencjonuje caly genom jednoczesnie bez potrzeby rozdzialu fragmentow', is_correct: false },
      { id: 'D', text: 'NGS (sekwencjonowanie nowej generacji) sekwencjonuje wylacznie RNA; DNA musi byc transkrybowane do RNA zanim moze byc sekwencjonowane; Sanger analizuje tylko bialka, nie kwasy nukleinowe', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Sekwencjonowanie Sangera (Sanger i Coulson 1977; Nobel Chemia 1980 — Sanger 2x Nobel!): Skladniki: matryca ssDNA + primer + polimeraza DNA + dNTP (normalne) + ddNTP-fluorochrom (4 kolory dla A,T,C,G — wariant kapilarna; lub 4 probowki z jednym ddNTP — stara metoda). Mechanizm: polimeraza syntezuje nowy lancuch; przypadkowe wbudowanie ddNTP (brak 3-OH → brak nastepnego nukleotydu → stop) → statystyczne zakonczenie w kazdym miejscu A, T, C lub G → widmo fragmentow od 1 do ~800-1000 nt. Kapilary: elektroforeza kapilarna; laser wzbudza fluorochrom; detektor czyta sygnal 4 kolorow → chromatogram sekwencji; max ~800 pz jednego czytania; koszt: ~1$/czytanie = $1000 dla ludzkiego genomu (sekwencjonowanie calego = 3×10⁹ pz = prohibitywnie drogie). NGS (Next-Generation Sequencing, Illumina, PacBio, Nanopore): Illumina (sequencing by synthesis): fragmentacja → adapter ligation → mostki PCR na flow cell → sekwencja przez wbudowanie znakowanych nukleotydow z fluorescencja; 2×150 pz czytania, miliardy klastrow/run; koszt: ~$200-600 dla ludzkiego genomu WGS. PacBio (SMRT): dlugie czytania (5-25 kb); Nanopore (Oxford): ultradlugie (>1 Mb). Zastosowania NGS: WGS, WES, RNA-seq, ChIP-seq, ATAC-seq, metagenomika, sekwencjonowanie nowotworow. Sanger: nadal standard dla walidacji mutacji punktowych, genotypowania jednego locus, krótkich ampliko PCR (<1 kb).',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — Sekwencjonowanie genomu',
    subtopic_id: S.sek,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących projektu genomu człowieka i jego znaczenia:\nA. Projekt Genomu Człowieka (HGP, 1990–2003): sekwencjonowanie 3,2 mld par zasad genomu ludzkiego przez konsorcjum 20 instytucji (+ Celera Genomics J. Craig Ventera); wynik: ~20 000–25 000 genów kodujących białka (znacznie mniej niż oczekiwano — "paradoks C-value"), ok. 98,5% DNA to sekwencje niekodujące (dawniej zwane "śmieciowym DNA", ang. junk DNA).\nB. Sekwencjonowanie genomu pozwoliło na identyfikację genów odpowiedzialnych za choroby monogenowe (np. gen CFTR → mukowiscydoza, BRCA1/2 → predyspozycja do raka piersi i jajnika, HTT → choroba Huntingtona) oraz na badania GWAS (Genome-Wide Association Studies) identyfikujące warianty genetyczne zwiększające ryzyko chorób wielogenowych.\nC. Geny kodujące białka stanowią ponad 90% genomu ludzkiego — sekwencje niekoduące (introny, transposony, satelitarne DNA) zajmują mniej niż 10% i nie pełnią żadnej funkcji biologicznej; ich sekwencja jest całkowicie losowa i nie podlega ewolucji.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: HGP (Human Genome Project): start 1990 (James Watson, dyrektorem NHGRI); Sanger + NGS Celera (shotgun); draft 2001 (Nature = konsorcjum; Science = Celera); finalizacja 2003 (50. rocznica odkrycia DNA); pelne telomery dopiero 2022 (Telomere-to-Telomere, T2T konsorcjum). Wyniki: ~20 000 genow bialka-kodujacych (C. elegans tez ~20 000 = brak korelacji zlozonosci z liczba genow = paradoks C-value); exom (~1,5% genomu = eksony); introny + regulatory + enhancery + SINE/LINE (transposony, ~45%) + centromerowe/telomerowe DNA, pseudogeny. B — PRAWDA: geny chorobowe: CFTR (chr.7q31): 1 mutacja ΔF508 → mukowiscydoza; BRCA1 (17q12), BRCA2 (13q12): naprawcza HR; nosicielstwo mutacji BRCA1/2 = ↑ryzyko raka piersi (72%) i jajnika (44%); HTT (chr.4p16.3): powt. CAG > 36 = choroba Huntingtona; GWAS: tysiace SNP asocjowane z T2DM, schizofrenia, Ch.Crohna, BMI. C — FAŁSZ: geny kodujace bialka: ~1,5% genomu (exom); ~98,5% "niekodujace"; jednak nie "smieci": (1) introny: regulacja alternatywnego splicingu; (2) lncRNA (long non-coding RNA): regulacja chromatyny (Xist = inaktywacja X); (3) miRNA, siRNA (regulacja post-transkrypcyjna); (4) promotory, enhancery, silencery, izolatory (CTCF): regulacja przestrzenna (3D genom, TAD = topologically associating domains); (5) ENCODE Project (2012): ~80% genomu ma biochemiczna aktywnosc (transkrypcja, hist. modif., TF binding). Transposony: 45% genomu; czesc reguluje ekspresje genow sasiadujacych. Ewolucja: sekwencje niekodujace rowniez pod presja selekcyjna (ultrakonservowane elementy).',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  // ─── Biotechnologia medyczna ───
  {
    subtopic: 'Biotechnologia — Biotechnologia medyczna',
    subtopic_id: S.med,
    question_type: 'single',
    question_text: 'Produkcja rekombinowanej insuliny ludzkiej w bakteriach E. coli jest klasycznym przykladem biotechnologii medycznej. Ktore zestawienie POPRAWNIE opisuje ten proces?',
    options: [
      { id: 'A', text: 'cDNA genu insuliny (bez intronow) → klonowanie do plazmidu ekspresyjnego pod silnym promotorem (np. lac) → transformacja E. coli → ekspresja: lancuchy A i B osobno lub proinsulina → oczyszczanie → sfaldownie S-S mostki → aktywna insulina; zatwierdzono 1982 (Humulin, Genentech/Eli Lilly) jako pierwsza rekombinowana bialko lecznicze', is_correct: true },
      { id: 'B', text: 'Insulina jest wytwarzana rekombinantowo przez izolacje genu insuliny z mRNA trzustki w postaci genomowego DNA z intronami, ktore sa wymagane do prawidlowej ekspresji w bakteriach; E. coli splisuje introny tak jak komórki eukariotyczne', is_correct: false },
      { id: 'C', text: 'Rekombinowana insulina jest identyczna z insulina swinsk i bovina, ktora stosowano wczesniej (roznica: dwa aminokwasy); insulin ludzka rekombinanta jest bardziej alergizujaca i mniej skuteczna niz insulina zwierzeca — terapia swinsk/bovine jest preferowana', is_correct: false },
      { id: 'D', text: 'Produkcja insuliny rekombinowanej przez baktrie polega na tym, ze E. coli naturalnie wydziela insuline do mediom hodowlanego — gen insuliny jest obecny w chromosomie dzikich szczepow E. coli jako gen chromosomalny, a nie plazimidowy transgen', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Rekombinowana insulina: historia potrzeby: (1) Do 1982: insulina zwierzeca (swinska: rozni sie 1 AA, bovine: 3 AA od ludzkiej) → reakcje alergiczne u ~5% pacjentow; dostepnosc ograniczona (truzustki zwierzat); (2) 1978: Boyer i Cohen klonuja insuline (Genentech); 1982: Humulin (Genentech/Eli Lilly) = 1 zatwierdzony lek rekombinowany przez FDA. Schemat produkcji: (1) Izolacja mRNA preproinsuliny z komórek beta trzustki; (2) RT → cDNA proinsuliny (bez intronow!); (3) Klonowanie cDNA do plazmidu ekspresyjnego E. coli (promotor tac/lac, RBS Kozak-equivalent, signal sequence opcjonalnie); (4) Transformacja E. coli BL21; (5) Indukcja IPTG → ekspresja proinsuliny lub lancuchow A i B oddzielnie; (6) Izolacja z cial wlaczen (inclusion bodies) → renaturacja; (7) Obrobka proteazami (peptyd C): proinsulina → insulina + peptyd C; (8) Oksydacja tworzaca 3 mostki S-S (A6-A11, A7-B7, A20-B19); (9) Chromatografia HPLC = lek farmaceutyczny. Zalety ludzkiej rekombinowanej: brak alergii, nieograniczona dostepnosc, identyczna z ludzka. Wspolczenie: analogi insuliny (aspart, lispro, glargine) = rekombinowane insuliny z modyfik. sekwencji AA dla kinetyku (ultra-szybkie lub dlugo-dzialajace).',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — Biotechnologia medyczna',
    subtopic_id: S.med,
    question_type: 'single',
    question_text: 'Terapia genowa polega na wprowadzeniu funkcjonalnej kopii genu do komorek pacjenta. Na podstawie wiedzy o mechanizmach dostarczania DNA, ktore stwierdzenie POPRAWNIE opisuje wyzwania i sukcesy terapii genowej?',
    options: [
      { id: 'A', text: 'Glowne wyzwania: immunogennosc wektora, ryzyko mutagenezy insercyjnej (retrowirusy), przejsciowa ekspresja (episomalne wektory), efektywnosc transdukcji in vivo. Sukcesy: X-SCID (2000), ADA-SCID (Strimvelis, EMA 2016), LPL-def (Glybera), SMA (Zolgensma/onasemnogene, AAV9, FDA 2019), amauroza Lebera (Luxturna, AAV2)', is_correct: true },
      { id: 'B', text: 'Terapia genowa nie ma zadnych wyzwan technicznych — wszystkie choroby genetyczne sa juz leczone terapia genowa z 100% skutecznoscia; zaden pacjent nie doznal dzialan niepozadanych w historii terapii genowej; retrowirusy sa jedynym stosowanym wektorem', is_correct: false },
      { id: 'C', text: 'Terapia genowa moze byc stosowana wylacznie w chorobach nowotworowych; nie mozna jej uzywac do leczenia chorob monogenowych (jak mukowiscydoza lub hemofilia); wektory wirusowe sa calkowicie bezpieczne i nie wywoluja zadnej odpowiedzi immunologicznej', is_correct: false },
      { id: 'D', text: 'Sukces Zolgensma (SMA) polega na leczeniu somatycznym — efekt trwa 3 miesiace i wymaga powtarzania co roku; wektory AAV integruja zawsze do chromosomu 1 co powoduje rak u 100% pacjentow leczonych terapia genowa', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Terapia genowa: historia i wyzwania: 1990: pierwszy sukces ADA-SCID (Blaese, NIH) — T-limfocyty z genem ADA ex vivo retrowirus; 1999: smierc Jesse Gelsinger (OTC-deficiency): wirus adenowy IV doza → burza cytokinowa → smierc = przerwanie wielu prób; 2000-2003: X-SCID (Alain Fischer, Paryż) ex vivo retrowirus: 9/10 wyleczonych ALE 5 → bialaczka T (insercja pobliżu LMO2 proto-onkogen) = mutageneza insercyjna; lekcja: retrowirusy → lentiwirusy (samounieczynniajace SIN LV) / AAV. Sukcesy: ADA-SCID → Strimvelis (GSK, EMA 2016, gammaretrowirus ex vivo): 18/18 zyje; Luxturna (Spark, FDA 2017, EMA 2018): RPE65 mutacja → amauroza Lebera; AAV2 podsiatkówkowy; Zolgensma (Novartis, FDA 2019): SMA typ 1; SMN1 cDNA w AAV9 IV infuzja; 1 dawka; ~$2,1 mln = najdrozszy lek swiata; Hemgenix (EMA/FDA 2022): hemofilia B (FIX gen w AAV5). Casgevy (Vertex/CRISPR Tx, FDA 2023): CRISPR ex vivo do komorek macierzystych szpiku (edycja BCL11A → reaktywacja HbF) = nie klasyczna terapia genowa ale gene editing. Wyzwania: immunogennosc (kapid AAV → przeciwciala neutralizujace = wyklucza powtorzenie); kapacytosc wektora (AAV: max ~4,7 kb = duze geny jak CFTR niemozliwe); koszt; trwalosc ekspresji.',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  // ─── Fermentacja przemyslowa ───
  {
    subtopic: 'Biotechnologia — Fermentacja przemyslowa',
    subtopic_id: S.ferm,
    question_type: 'single',
    question_text: 'Fermentacja jest anaeroboowym procesem pozyskiwania energii. Ktore zestawienie POPRAWNIE opisuje typy fermentacji i ich produkty?',
    options: [
      { id: 'A', text: 'Fermentacja alkoholowa (drozdze, Saccharomyces cerevisiae): glukoza → 2 etanol + 2 CO₂ (+ 2 ATP); pirogronian → dekarboksylaza → acetaldehyd → ADH → etanol; fermentacja mleczanowa (Lactobacillus, miesnie przy hipoksji): pirogronian → LDH → mleczan (+ NAD⁺) → regeneracja NAD⁺ → oddychanie beztlenowe', is_correct: true },
      { id: 'B', text: 'Fermentacja alkoholowa produkuje CO₂ i kwas mlekowy; fermentacja mleczanowa produkuje etanol i wode; u drozdzy fermentacja jest procesem tlenowym wymagajacym mitochondriow; fermantacja mleczanowa zachodzi wylacznie u roslin', is_correct: false },
      { id: 'C', text: 'Oba typy fermentacji (alkoholowa i mleczanowa) produkuja ATP przez fosforylacje oksydacyjna w lancuchu oddechowym; tlenn jest absolutnie wymagany do fermentacji; bez O₂ zadne z tych procesow nie moze zachodzic', is_correct: false },
      { id: 'D', text: 'Fermentacja alkoholowa produkuje acetylo-CoA i kwas pirogronowy jako produkty koncowe; mleczan jest produktem fermentacji alkoholowej u beztlenowcow; drozdze uzywaja tylko fermentacji mleczanowej, nigdy alkoholowej', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Fermentacja = beztlenowe (anaeroboowe) pozyskiwanie energii z organicznych substratow; cel: regeneracja NAD⁺ (zuzywanego w glikolizie) bez lancucha oddechowego. Glikoliza (wspolna): glukoza → 2 pirogronian + 2 ATP + 2 NADH. (1) Fermentacja alkoholowa: Pirogronian → (dekarboksylaza pirogronianowa, koenzym TPP) → acetalaldehyd + CO₂ → (ADH, dehydrogenaza alkoholowa, NADH → NAD⁺) → etanol. Rowanie: C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ (+2 ATP). Organizmy: Saccharomyces cerevisiae (piekarskie, piwowarskie, winne; efekt Crabtree: nawet tlenowo fermentuje przy duzym stezeniu glukozy); Zymomonas mobilis; Clostridium; niektore grzyby. Produkty przemyslowe: piwo, wino, etanol paliwowy (bioetanol z trzciny/kukurydzy), chleb (CO₂ pulchni ciasto). (2) Fermentacja mleczanowa: Pirogronian → (LDH, dehydrogenaza mleczanowa, NADH → NAD⁺) → L-mleczan lub D-mleczan. Rowanie: C₆H₁₂O₆ → 2 CH₃CHOHCOOH (+ 2 ATP). Organizmy: Lactobacillus, Lactococcus, Streptococcus (fermentacja homolaktyczna = 100% mleczan); takze heterofermentacja (Leuconostoc: 50% mleczan + 25% etanol + 25% CO₂). W miesniach szkieletowych czlowieka: przy intensywnym wysiku O₂ niedobor → pirogronian → LDH → mleczan (bol miesni); mleczan transported do watroby → cykl Corich → ponownie glukoza. Zastosowania: jogurt, kefir, ser (L. bulgaricus + S. thermophilus), kiszona kapusta, ogórki kwaszone, silaz, kwas mlekowy przemyslowy.',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — Fermentacja przemyslowa',
    subtopic_id: S.ferm,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących biotechnologii fermentacyjnej i produkcji biopaliw:\nA. Bioetanol (etanol fermentacyjny) produkowany z biomasy lignocelulozowej (2. generacja) wymaga wstępnej obróbki materiału (np. hydroliza kwasowa lub enzymatyczna celulozy i hemicelulozy do cukrów prostych), ponieważ drożdże Saccharomyces cerevisiae nie fermentują bezpośrednio celulozy.\nB. Biopaliwa 1. generacji (bioetanol z kukurydzy/trzciny cukrowej, biodiesel z rzepaku/soi) są krytykowane ze względu na konflikt "żywność vs paliwo" (food vs fuel) — uprawy na biopaliwa konkurują z produkcją żywności o grunty rolne i wodę; biopaliwa 2. (lignoceluloza) i 3. generacji (algi) nie mają tego problemu.\nC. Metanogeneza (produkcja biogazu = CH₄ + CO₂ przez metanogeny) jest procesem tlenowym wymagającym dostępu tlenu — archeony metanogenne giną w warunkach beztlenowych; biogaz jest produkowany w reaktorach napowietrzanych.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: Bioetanol 2G (lignocelulozy): glowne frakcje lignocelulozy: (1) celuloza (40-50%): beta-1,4-glukan; (2) hemiceluloza (25-35%): xylan, glukomannan; (3) lignina (15-25%): fenylpropanoidowy polimer (niestrukturowany, trudny do degradacji). S. cerevisiae nie ma celulazo ani xylanazy; potrzeba: (1) Preobrobka fizyczna/chemiczna: steam explosion, NaOH, kwas → dezorganizacja struktury; (2) Enzymatyczna hydroliza: celulazo (Trichoderma reesei) + xylanazy → glukoza + xylose; (3) Fermentacja: S. cerevisiae (glukoza) + bakterie lub zywe GMO S. cerevisiae (xylose: gen XYL1, XYL2 + XKS1) = SSF (simultaneous saccharification and fermentation). B — PRAWDA: food vs fuel: kukurydza na etanol (USA 40% zbiorow kukurydzy = etanol) → ceny zywnoscii; soja na biodiesel → deforestacja Brazylii; 2G: odpady rolne (sloma, bagassa), drzewno; brak konkurencji z ziemia uprawna; 3G: algi (olej tluszcz. 20-80% suchej masy, CO₂ fixacja, brak ziemi uprawnej, wysoka wydajnosc/ha). C — FAŁSZ: Metanogeneza = BEZWZGLEDNIE BEZTLENOWA (scisla anaeroboza); Archeony metanogenne (Methanobacterium, Methanococcus, Methanosarcina): OBOWIAZUJACE BEZTLENOWCE (ginac juz przy sladowych ilosc O₂); wymagaja: scisle beztlenowe warunki (-300 mV Eh). Biogaz = mieszanina CH₄ (50-70%) + CO₂ (25-45%) + H₂S, NH₃ (slady); reaktory fermentacyjne: beztlenowe komory bez dostepu O₂; zastosowania: kogeneracja ciepla i elektrycznosci (CHP), biometan do sieci gazowej, obornik odpadowy = nawoz.',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  // ─── Bioetyka ───
  {
    subtopic: 'Biotechnologia — Bioetyka',
    subtopic_id: S.bioet,
    question_type: 'single',
    question_text: 'Dylematy bioetyczne towarzysza postepom biotechnologii. Ktore zestawienie POPRAWNIE opisuje glowne zagadnienia bioetyczne zwiazane z inzynieria genetyczna?',
    options: [
      { id: 'A', text: 'Bioetyczne kwestie: (1) GMO: obawy o bezpieczenstwo zywnoci, biodywersytet, patenty na zycie (Monsanto vs rolnicy), monopol korporacji; (2) Terapia genowa somatyczna (zgoda leczona osoba) vs linia plciowa (dziedziczone przez potomstwo — He Jiankui 2018, CCR5 edycja u zarodkow = powszechne potepienie); (3) Klonowanie reprodukcyjne vs terapeutyczne; (4) Prywatnosc danych genomowych (ubezpieczenia, dyskryminacja)', is_correct: true },
      { id: 'B', text: 'Bioetyka zabrania absolutnie wszelkich badan na DNA — sekwencjonowanie genomu jest nielegalne we wszystkich krajach; terapia genowa jest tylko i wylacznie kwestia techniczna, nie etyczna; klonowanie czlowieka jest powszechnie stosowane i dozwolone prawnie na swiecie', is_correct: false },
      { id: 'C', text: 'Modyfikacje linii plciowej (germline editing) w celach terapeutycznych sa powszechnie zatwierdzane przez komisje etyczne i regularnie stosowane w klinikach na calym swiecie; kwestia GMO jest juz w pelni rozwiazana — wszystkie organizmy GMO sa dopuszczone bez ograniczen', is_correct: false },
      { id: 'D', text: 'Bioetyka zajmuje sie wylacznie kwestiami ekonomicznymi zwiazanymi z cena lekow biotechnologicznych; kwestie moralne i spoleczne (np. modyfikacje embrionu, klonowanie reprodukcyjne) nie sa objete refleksja bioetyczna', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'Bioetyka biotechnologii: (1) GMO — debata: argumenty za: wysoka wydajnosc, opornosc na szkodniki (mniej pestycydow), fortyfikacja zywieniowa (Zloty Ryż), susza-opornosc, krotszy czas dojrzewania; argumenty przeciw: nieznane dlugoterminowe skutki zdrowotne (choc wieloletnie badania bezpieczne), ekologiczne (cross-pollination z dzikimi krewnymi, superchwasty), monopol korporacyjny (Monsanto/Bayer patenty na nasiona = rolnicy musza kupowac co rok), etyczne (patentyowanie zycia). (2) Terapia genowa somatyczna: zmienia tylko leczony organizm → etycznie bardziej akceptowana; wymagana zgoda pacjenta; regulacje FDA/EMA. Terapia linii plciowej: zmiana germline = dziedziczy sie przez potomstwo (niezgodne dziecko nie ma glosu); He Jiankui (2018, Chiny): CRISPR-edycja CCR5-delta32 w zarodkach in vitro → blizniety Lulu i Nana (zniedowidzeni?) → globalny skandal naukowy; skazany 3 lata (2019); kazus katalizuje debate o moratorium na germline editing (Doudna, Baltimore, Lander apel 2019). (3) Klonowanie: reprodukcyjne (SCNT → nowy osobnik) = zakazane w wiekszosci krajow; terapeutyczne (SCNT → blastocysta → izolacja ESC = zrdodlo iPSC w leczeniu, niszczenie zarodka = kontrowersje). (4) Prywatnosc genomowa: DNAbazy komercyjne (23andMe, AncestryDNA) → ryzyko: ubezpieczyciele, pracodawcy; GINA (Genetic Information Nondiscrimination Act, USA 2008) ogranicza dyskryminacje ale niepelna ochrona. (5) Dostep do terapii: Zolgensma = $2,1 mln → tylko bogate kraje i rodziny; sprawiedliwosc spoleczna.',
    difficulty: 1, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
  {
    subtopic: 'Biotechnologia — Bioetyka',
    subtopic_id: S.bioet,
    question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących etyki badań naukowych i biotechnologii:\nA. Zasada świadomej zgody (informed consent) wymaga, aby pacjent/uczestnik badania otrzymał pełną informację o procedurze, ryzyku i alternatywach, a jego zgoda była dobrowolna i możliwa do wycofania w dowolnym momencie bez konsekwencji — jest to fundament etyki badań medycznych (Deklaracja Helsińska 1964).\nB. Badania na embrionach ludzkich (np. edycja genomu, izolacja komórek macierzystych ESC) są przedmiotem intensywnej debaty etycznej — większość krajów zakazuje badań na embrionach powyżej 14 dni od zapłodnienia (reguła 14-dniowa, "primitive streak"), jako granicy przed którą embrion nie ma jeszcze podstawowego układu nerwowego.\nC. Testy na zwierzętach (badania przedkliniczne) są całkowicie zbędne w nowoczesnej biotechnologii — modele komputerowe (in silico) i hodowle komórkowe (in vitro) zastąpiły w 100% testy na zwierzętach; żadne badanie kliniczne leku biotechnologicznego nie wymaga wcześniejszych testów na modelach zwierzęcych.',
    options: [
      { id: 'A', text: 'P, P, F', is_correct: true },
      { id: 'B', text: 'P, P, P', is_correct: false },
      { id: 'C', text: 'P, F, F', is_correct: false },
      { id: 'D', text: 'F, P, F', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'A — PRAWDA: swiadoma zgoda (informed consent): historia: eksperyment Tuskegee (1932-1972: czarni mezczyzni z syfilis bez leczenia bez wiedzy = skandal → komisja Belmont 1979); kodeks norymberski (1947: zakaz badan bez dobrowolnej zgody, po nazistowskich eksperymentach); Deklaracja Helsinska (WMA 1964, wielokrotnie aktualizowana): swiadoma zgoda, badania oparte na naukowych przeslan kach, komitety etyczne (IRB/KEG), ochrona grup wrazliwych. Elementy IC: (1) dobrowolnosc; (2) pelna informacja (cel, metody, ryzyka, korzysci, alternatywy); (3) zdolnosc do zrozumienia (kompetencja); (4) mozliwosc wycofania w kazdym czasie (bez kary). Grupy wrazliwe: dzieci, wiezniowie, osoby z chorobami psychicznymi, biedni = dodatkowa ochrona. B — PRAWDA: regula 14 dni (14-day rule): Warnock Commission (UK 1984): pierwsze 14 dni po zapłodnieniu = "primitive streak" (poczatek linii pierwotnej = pierwsze oznaki osi ciala i nerwow centralnych) = granica; embrion < 14 dni mozna hodowac in vitro (IVF, badania); > 14 dni = zakaz. Debata o wydluzeniu do 28 dni (Nature 2021, niektore kraje aktualizuja) po sukcesach modeli embrioidow. C — FAŁSZ: testy na zwierzetach (vivisection) sa nadal wymagane prawnie przed badaniami klinicznymi: ICH M3(R2), FDA, EMA: bezpieczenstwo i farmakologia: mysz, szczur, pies lub malpa dla nowego leku przed faza I. 3R: Replacement (zastep. przez inne modele jesli mozliwe: in vitro, in silico, organoids); Reduction (minimalizuj liczbe zwierzat); Refinement (minimalizuj cierpienie). Organoidy, microphysiological systems (organ-on-chip): coraz lepiej ale nie zastapily in vivo (PK/PD, immunotoksycznosc, karcinogeneza). Dyrektywa 2010/63/EU: regulacje ochron zwierzat uzywanych w badaniach.',
    difficulty: 2, verified: true, source_reference: 'wlasne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
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
  console.log(`Seeding ${questions.length} mock questions for Biotechnologia...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 140))
    else console.log('OK', q.question_type.padEnd(10), q.question_text.slice(0, 65).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
