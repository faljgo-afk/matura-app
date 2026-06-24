// Seed: Ekologia — 20 questions
// Topic: 27daaa5f-30d8-4519-a525-4b136cad02f2

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC_ID = '27daaa5f-30d8-4519-a525-4b136cad02f2'

const S = {
  ekosystem:   'd3fbbe32-335b-4893-979c-9ca4962494e3',
  lancuchy:    'd012abdd-8747-4b9d-bffd-fa4928e8b48c',
  energia:     'a6a5a9e9-026e-4ef4-9857-5ef0f07cdcff',
  materia:     '8de030ed-9c47-429a-b69a-6356cbbf57fb',
  populacja:   'ddb988fb-1e19-498c-9c4c-f72bb5779c9c',
  zaleznosci:  '2fbd2cbd-e4a3-428c-af6d-38c4a2e71080',
  sukcesja:    '63b1ca74-4c2d-4c15-95d6-3b322d07d1b9',
  biomy:       '0ede378a-6be2-442c-a02b-b8c70b3630c7',
  ochrona:     '1ec41dca-9d4b-4d3f-9bb0-7890b8d6354a',
}

const questions = [
  // --- Ekosystem ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ekosystem,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących struktury ekosystemu.\nA. Ekosystem składa się z biotopu (nieożywionego środowiska abiotycznego) i biocenozy (zespołu organizmów żywych).\nB. Producenci (autotrofy) stanowią zawsze najliczniejszą grupę organizmów w ekosystemie pod względem liczby osobników i biomasy.\nC. Destruenci (detrytofagi i reducenci) rozkładają martwe szczątki organiczne, uwalniając mineralne składniki odżywcze z powrotem do ekosystemu.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Ekosystem = biotop (abiotyczny) + biocenoza (ożywiony).', is_correct: true },
      { id: 'B', text: 'Producenci zawsze stanowią najliczniejszą grupę pod względem biomasy.', is_correct: false },
      { id: 'C', text: 'Destruenci rozkładają szczątki organiczne, uwalniając składniki mineralne.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: ekosystem to biotop (gleba, woda, klimat — czynniki abiotyczne) + biocenoza (wszystkie organizmy żywe w tym środowisku i ich wzajemne zależności). C — Prawda: destruenci (grzyby, bakterie saprofityczne) i detrytofagi (dżdżownice, stonogi) mineralizują materię organiczną → zamykają obieg pierwiastków (C, N, P). B — Fałsz: nie zawsze — w ekosystemach morskich fitoplankton (producent) ma często niższą biomasę niż zooplankton go konsumujący (odwrócona piramida biomasy). Piramida biomasy bywa odwrócona w ekosystemach wodnych.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ekosystem,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nNisza ekologiczna gatunku to:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'fizyczne miejsce w ekosystemie, gdzie dany gatunek zamieszkuje (np. strefa liściowa lasu)', is_correct: false },
      { id: 'B', text: 'całokształt wymagań środowiskowych organizmu oraz jego rola funkcjonalna w ekosystemie — co je, kto go je, jak wpływa na środowisko', is_correct: true },
      { id: 'C', text: 'zasięg geograficzny gatunku na mapie świata, obejmujący wszystkie kontynenty, gdzie go spotykamy', is_correct: false },
      { id: 'D', text: 'liczba osobników danego gatunku zamieszkujących określony obszar w danym czasie', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Nisza ekologiczna (Hutchinson) to wielowymiarowa przestrzeń czynników środowiskowych (temperatura, wilgotność, pokarm, drapieżniki itp.), w których gatunek może przeżyć i się rozmnażać — oraz jego rola funkcjonalna (co je, kto nim się żywi, jak modyfikuje środowisko). Nisza fundamentalna (potencjalna) vs nisza realizowana (rzeczywista, zawężona przez konkurencję). A — opisuje habitat (siedlisko) — fizyczne miejsce życia. C — opisuje zasięg (areał) gatunku. D — opisuje zagęszczenie populacji.',
    difficulty: 2,
    verified: true,
  },

  // --- Łańcuchy i sieci pokarmowe ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.lancuchy,
    question_text: 'Na podstawie poniższego łańcucha pokarmowego:\nTrawa → Zając → Lis → Orzeł\n\nOceń prawdziwość poniższych stwierdzeń.\nA. Zając jest konsumentem I rzędu (roślinożercą), a lis — konsumentem II rzędu.\nB. Orzeł zajmuje poziom troficzny IV i jest konsumentem III rzędu.\nC. Usunięcie lisa z ekosystemu zawsze prowadzi do natychmiastowego zaniku populacji orła.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Zając to konsument I rzędu, lis — konsument II rzędu.', is_correct: true },
      { id: 'B', text: 'Orzeł zajmuje poziom troficzny IV i jest konsumentem III rzędu.', is_correct: true },
      { id: 'C', text: 'Usunięcie lisa zawsze prowadzi do natychmiastowego zaniku orła.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A i B — Prawda: poziomy troficzne: trawa (I, producent) → zając (II, konsument I°) → lis (III, konsument II°) → orzeł (IV, konsument III°). C — Fałsz: "zawsze" i "natychmiastowo" to zbyt silne twierdzenie. W rzeczywistości orzeł może polować bezpośrednio na zające (pomijając lisa) lub inne ofiary — jest elementem sieci pokarmowej, nie prostego łańcucha. Populacja orła może się zmniejszyć, ale nie musi "natychmiast zanikać". Ekosystemy mają pewną odporność (resilience).',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.lancuchy,
    question_text: 'Które z poniższych organizmów są detrytofagami (organizmami żywiącymi się martwą materią organiczną)?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Dżdżownica (Lumbricus terrestris)', is_correct: true },
      { id: 'B', text: 'Stonoga (Porcellio scaber)', is_correct: true },
      { id: 'C', text: 'Szczupak (Esox lucius)', is_correct: false },
      { id: 'D', text: 'Grzyby saprofityczne (np. Agaricus bisporus)', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'Detrytofagi to zwierzęta rozdrabniające i spożywające martwe szczątki organiczne (detrytus): dżdżownice, stonogi, krocionogi, niektóre chrząszcze gnilne, larwy much. A i B — poprawne: dżdżownice i stonogi pobierają martwe liście, drewno i szczątki zwierzęce, rozdrabniając je i zwiększając powierzchnię dla bakterii i grzybów. C — błąd: szczupak to drapieżnik (konsument II/III rzędu), żywi się żywymi rybami. D — błąd: grzyby saprofityczne to REDUCENCI (nie detrytofagi) — rozkładają materię organiczną chemicznie przez enzymy zewnątrzkomórkowe, nie pobierają jej cząstek mechanicznie.',
    difficulty: 2,
    verified: true,
  },

  // --- Przepływ energii ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.energia,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nWydajność ekologiczna (efektywność troficzna) na poziomie ok. 10% oznacza, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'konsumenci wchłaniają 10% energii zawartej w spożytym pokarmie, reszta jest wydalana jako ciepło podczas fotosyntezy', is_correct: false },
      { id: 'B', text: 'tylko ok. 10% energii zakumulowanej na danym poziomie troficznym jest dostępne dla następnego poziomu — reszta tracona jest jako ciepło podczas oddychania, wydalania i niepełnego wchłaniania', is_correct: true },
      { id: 'C', text: 'producenci przekazują 10% energii słonecznej do konsumentów I rzędu, a pozostałe 90% magazynują w biomasie', is_correct: false },
      { id: 'D', text: 'energia przepływa przez ekosystem w 10% obiegu zamkniętego, a 90% pochodzi z rozkładu materii przez destruentów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Reguła 10% (Lindeman): z energii zgromadzonej na danym poziomie troficznym tylko ~10% przechodzi na poziom wyższy. Energia tracona to: ciepło metaboliczne (oddychanie komórkowe), nieprzyswojona materia (wydalana jako ekskrementy), energia w martwych szczątkach (detrytus). Konsekwencja: łańcuchy pokarmowe rzadko mają więcej niż 4–5 ogniw (energia wyczerpuje się zbyt szybko), a żywienie na niższych poziomach troficznych (rośliny) jest ~10× efektywniejsze energetycznie niż żywienie mięsem. A — błąd: opisuje efektywność netto wchłaniania, miesza z fotosyntezą. C i D — błędne opisy.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.energia,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących przepływu energii w ekosystemach.\nA. Energia przepływa przez ekosystem jednostronnie — nie krąży jak materia, lecz jest stale uzupełniana ze źródła zewnętrznego (głównie Słońca).\nB. Piramida energii zawsze ma kształt prostej piramidy (podstawa szersza od wierzchołka), niezależnie od typu ekosystemu.\nC. Produkcja pierwotna netto (NPP) to ilość energii utrwalonej przez producentów po odjęciu energii zużytej na własne oddychanie.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Energia przepływa jednostronnie — nie krąży, lecz pochodzi stale ze Słońca.', is_correct: true },
      { id: 'B', text: 'Piramida energii zawsze ma kształt prosty, niezależnie od ekosystemu.', is_correct: true },
      { id: 'C', text: 'NPP = GPP minus energia zużyta przez producentów na oddychanie.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-P', 'C-P'],
    explanation: 'A — Prawda: w przeciwieństwie do materii (która krąży w biogeochemicznych cyklach), energia przepływa jednostronnie: Słońce → producenci → konsumenci → ciepło. Na każdym etapie energia termodynamicznie degraduje się i ucieka z ekosystemu jako ciepło. B — Prawda: piramida energii jest ZAWSZE prawidłowa (szeroka podstawa = producenci), bo liczy się przepływ energii w czasie, nie chwilową biomasę. Inaczej niż piramida biomasy, która może być odwrócona. C — Prawda: GPP (gross primary production) = całkowita fotosynteza; NPP (net primary production) = GPP − R (oddychanie producentów). NPP to energia dostępna dla konsumentów.',
    difficulty: 2,
    verified: true,
  },

  // --- Obieg materii ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.materia,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących obiegu azotu w przyrodzie.\nA. Bakterie Rhizobium wiążące azot atmosferyczny (N₂) żyją w symbiozie z roślinami bobowatymi w brodawkach korzeniowych.\nB. Nitryfikacja to proces, w którym bakterie nitryfikacyjne (np. Nitrosomonas, Nitrobacter) utleniają amoniak do azotanów (NO₃⁻).\nC. Denitryfikacja to proces asymilacji azotu przez rośliny — pobieranie NO₃⁻ z gleby i wbudowywanie go w aminokwasy.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Rhizobium wiąże N₂ w symbiozie z bobowatymi w brodawkach korzeniowych.', is_correct: true },
      { id: 'B', text: 'Nitryfikacja: bakterie utleniają NH₃ → NO₂⁻ → NO₃⁻.', is_correct: true },
      { id: 'C', text: 'Denitryfikacja to pobieranie NO₃⁻ przez rośliny i synteza aminokwasów.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: Rhizobium (i inne rizobia) infekują korzenie roślin bobowatych (groch, fasola, koniczyna) → brodawki korzeniowe zawierające nitrogenazę → redukcja N₂ → NH₃ dostępny dla rośliny; roślina dostarcza węglowodany (mutualizm). B — Prawda: nitryfikacja dwuetapowa: Nitrosomonas: NH₄⁺ → NO₂⁻; Nitrobacter: NO₂⁻ → NO₃⁻. Bakterie chemolitotroficzne uzyskują energię z utleniania. C — Fałsz: denitryfikacja to proces ODWROTNY — bakterie denitryfikacyjne (np. Pseudomonas, Thiobacillus) w warunkach beztlenowych redukują NO₃⁻ → N₂ (gazowy azot wraca do atmosfery). To co opisano w C to asymilacja azotu przez rośliny.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.materia,
    question_text: 'Które z poniższych procesów są częścią obiegu węgla w przyrodzie?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Fotosynteza — pobieranie CO₂ z atmosfery i utrwalanie go w związkach organicznych', is_correct: true },
      { id: 'B', text: 'Oddychanie komórkowe organizmów — uwalnianie CO₂ do atmosfery', is_correct: true },
      { id: 'C', text: 'Spalanie paliw kopalnych — uwalnianie CO₂ z wieloletnich "rezerwuarów" węgla', is_correct: true },
      { id: 'D', text: 'Nitryfikacja — przekształcanie CO₂ w azotany przez bakterie glebowe', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Obieg węgla obejmuje: A — fotosynteza: CO₂ + H₂O → glukoza + O₂ (asymilacja CO₂ przez producenty). B — oddychanie komórkowe wszystkich organizmów: glukoza + O₂ → CO₂ + H₂O (uwalnianie CO₂). C — spalanie paliw kopalnych: uwalnianie CO₂ zakumulowanego przez miliony lat (węgiel kamienny, ropa, gaz) — główna przyczyna wzrostu CO₂ i efektu cieplarnianego. Także: rozkład przez destruenty, wietrzenie skał wapiennych, emisje wulkaniczne. D — błąd: nitryfikacja dotyczy AZOTU (NH₄⁺ → NO₃⁻), nie węgla — to odrębny cykl biogeochemiczny.',
    difficulty: 1,
    verified: true,
  },

  // --- Populacja ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.populacja,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nKrzywa wzrostu logistycznego (sigmoidalna, kształt litery S) populacji różni się od wzrostu wykładniczego tym, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'wzrost logistyczny jest możliwy tylko w populacjach owadów, a wykładniczy — wyłącznie u ssaków', is_correct: false },
      { id: 'B', text: 'wzrost logistyczny uwzględnia pojemność środowiska (K) — tempo wzrostu maleje gdy populacja zbliża się do K, a przy wzroście wykładniczym brak tego ograniczenia', is_correct: true },
      { id: 'C', text: 'wzrost logistyczny opisuje populacje inwazyjne bez naturalnych wrogów, a wykładniczy — stabilne populacje w równowadze', is_correct: false },
      { id: 'D', text: 'wzrost wykładniczy uwzględnia sezonowe zmiany rozrodczości, a logistyczny — tylko stałe tempo rozrodu', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Wzrost wykładniczy (J-shaped): dN/dt = rN — tempo wzrostu proporcjonalne tylko do liczebności (r = współczynnik przyrostu naturalnego); brak ograniczeń środowiskowych — model teoretyczny dla nieograniczonych zasobów. Wzrost logistyczny (S-shaped): dN/dt = rN·(K-N)/K — tempo wzrostu maleje gdy N zbliża się do pojemności środowiska K (carrying capacity). Przy N=K: dN/dt = 0 (równowaga). Czynniki ograniczające: konkurencja wewnątrzgatunkowa, brak pożywienia, drapieżniki. W praktyce wzrost wykładniczy dotyczy gatunków inwazyjnych lub wczesnej fazy kolonizacji.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.populacja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cech populacji.\nA. Rozrodczość (natalność) i śmiertelność (mortalność) to czynniki wewnętrzne populacji bezpośrednio wpływające na jej liczebność.\nB. Strategia r (r-strategia) charakteryzuje gatunki produkujące liczne potomstwo z małymi inwestycjami w każdego osobnika, np. owady lub chwasty.\nC. Zjawisko Allego (efekt Allego) polega na tym, że bardzo duże populacje mają wyższe tempo wzrostu niż małe, co prowadzi do nieograniczonego wzrostu.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Natalność i mortalność bezpośrednio wpływają na liczebność populacji.', is_correct: true },
      { id: 'B', text: 'Strategia r: liczne potomstwo z małą inwestycją — np. owady, chwasty.', is_correct: true },
      { id: 'C', text: 'Efekt Allego: bardzo duże populacje mają wyższe tempo wzrostu, co prowadzi do nieograniczonego wzrostu.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: N(t+1) = N(t) + narodziny − zgony + imigracja − emigracja. Natalność i mortalność to podstawowe parametry demograficzne. B — Prawda: r-strategiści (oportuniści) vs K-strategiści; owady, jednoletnie rośliny, ryby (wiele jaj bez opieki) vs ssaki, drzewa (mało potomstwa z dużą inwestycją rodzicielską). C — Fałsz: efekt Allego to zjawisko ODWROTNE — zbyt małe populacje mają OBNIŻONE tempo wzrostu (trudności ze znalezieniem partnera, zmniejszona obrona grupowa, inbred) → próg minimalna wielkość populacji; poniżej niego populacja może wymrzeć.',
    difficulty: 2,
    verified: true,
  },

  // --- Zależności międzygatunkowe ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zaleznosci,
    question_text: 'Przyporządkuj typ zależności do opisanej sytuacji.\nOceń prawdziwość stwierdzeń:\nA. Mutualizm — relacja, w której obydwa gatunki odnoszą korzyść (np. pszczoła i kwiat, kleszcz żołądkowy i termity).\nB. Komensalizm — relacja, w której jeden gatunek czerpie korzyść, a drugi nie jest ani zyskuje, ani traci (np. czapla bydlęca i bydło).\nC. Amensalizm — relacja, w której jeden gatunek zyskuje kosztem drugiego (np. grzyb Penicillium wydzielający antybiotyki hamujące bakterie).',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Mutualizm: obydwa gatunki odnoszą korzyść.', is_correct: true },
      { id: 'B', text: 'Komensalizm: jeden zyskuje, drugi bez zmian.', is_correct: true },
      { id: 'C', text: 'Amensalizm: jeden zyskuje kosztem drugiego (Penicillium i bakterie).', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: mutualizm (+/+): obie strony zyskują — pszczoła: nektar i pyłek; kwiat: zapylenie. Obligatoryjny (niezbędny dla obu) vs fakultatywny. B — Prawda: komensalizm (+/0): czapla bydlęca łowi owady spłoszone przez bydło — czapla zyskuje, bydło obojętne. C — Fałsz: opisana relacja to AMENSALIZM (−/0), ale odwrócona interpretacja. Amensalizm: jeden gatunek jest hamowany, drugi obojętny — Penicillium hamuje bakterie (−), a sam nie zyskuje ani nie traci (0). To NIE jest pasożytnictwo ani drapieżnictwo (gdzie jeden aktywnie zyskuje). Pasożytnictwo (+/−) — pasożyt zyskuje kosztem żywiciela.',
    difficulty: 3,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zaleznosci,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nZasada Gausego (zasada konkurencyjnego wykluczenia) głosi, że:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'dwa gatunki nigdy nie mogą zamieszkiwać tego samego biotopu, bo zawsze dojdzie do migracji słabszego gatunku', is_correct: false },
      { id: 'B', text: 'dwa gatunki zajmujące identyczną niszę ekologiczną nie mogą trwale współistnieć — jeden wyprze drugi lub nastąpi różnicowanie nisz', is_correct: true },
      { id: 'C', text: 'konkurencja wewnątrzgatunkowa jest zawsze silniejsza od międzygatunkowej i reguluje wielkość populacji w granicach K', is_correct: false },
      { id: 'D', text: 'gatunki inwazyjne zawsze wygrywają konkurencję z gatunkami rodzimymi, bo nie mają naturalnych wrogów w nowym środowisku', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Zasada Gausego (1934): dwa gatunki o identycznych wymaganiach (tej samej niszy) nie mogą trwale współistnieć. Jeden z dwóch wyników: a) gatunek słabszy wymiera lokalnie (competitive exclusion); b) gatunki różnicują się ekologicznie — niszowe przesunięcie (character displacement) pozwala im współistnieć przez zajęcie nieco innych nisz. Przykład: zięby Darwina na Galapagos — różnicowanie dziobów zmniejsza konkurencję o pokarm. A — błąd: biotop ≠ nisza; gatunki mogą zamieszkiwać ten sam biotop o różnych niszach. D — błąd: "zawsze" jest zbyt silne.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.zaleznosci,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących pasożytnictwa.\nA. Endopasożyty żyją wewnątrz ciała żywiciela (np. tasiemce, glista ludzka), a ektopasożyty — na powierzchni (np. pchły, wszy).\nB. Pasożyty zazwyczaj zabijają żywiciela natychmiast po zakażeniu, co jest korzystne dla dalszego rozprzestrzenienia pasożyta.\nC. Mimetyzm Batesowski polega na tym, że gatunek nieszkodliwy upodabnia się do gatunku niebezpiecznego lub trującego, co chroni go przed drapieżnikami.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Endopasożyty: wewnątrz ciała; ektopasożyty: na powierzchni.', is_correct: true },
      { id: 'B', text: 'Pasożyty zazwyczaj zabijają żywiciela natychmiast po zakażeniu.', is_correct: false },
      { id: 'C', text: 'Mimetyzm Batesowski: nieszkodliwy gatunek upodabnia się do niebezpiecznego.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: standardowy podział pasożytów według miejsca bytowania. C — Prawda: mimetyzm Batesowski (Henry Bates, 1862) — naśladowca (mimic) jest nieszkodliwy, a model jest szkodliwy/trujący; np. nietrująca mucha bzygowata (Syrphidae) upodabnia się do trującej osy. B — Fałsz: pasożyt, który zbyt szybko zabija żywiciela, traci środowisko życia i możliwość przeniesienia się na nowego żywiciela — ewolucja faworyzuje raczej chroniczność i łagodność choroby. Idealne pasożytnictwo = jak najdłuższe życie kosztem żywiciela.',
    difficulty: 2,
    verified: true,
  },

  // --- Sukcesja ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.sukcesja,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nPodczas sukcesji pierwotnej (np. na nagiej skale po cofnięciu lodowca) pierwszymi organizmami zasiedlającymi siedlisko są zazwyczaj:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'drzewa liściaste tworzące klimaksowy las, który jest najbardziej odporny na warunki pionierskie', is_correct: false },
      { id: 'B', text: 'porosty i mchy — organizmy pionierskie zdolne do życia na nagim substracie mineralnym, które stopniowo przygotowują glebę dla kolejnych gatunków', is_correct: true },
      { id: 'C', text: 'duże ssaki roślinożerne, które przez wypas tworzą warunki dla roślin pionierskich', is_correct: false },
      { id: 'D', text: 'bakterie i grzyby glebowe, które mogą rozwijać się wyłącznie na glebie bogatej w materię organiczną', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Sukcesja pierwotna: nagi substrat (skała, wydma, lawa) → organizmy pionierskie → stopniowe budowanie gleby → kolejne stadia → zbiorowisko klimaksowe. Pionierzy: porosty (grzyb + glon/sinica) — rozkładają skałę kwasami, nagromadzają materię org. → mchy → trawy i zioła → krzewy → las klimaksowy. Kluczowe: każde stadium modyfikuje środowisko, umożliwiając zasiedlenie kolejnym gatunkom (facilitacja). A — drzewa to końcowe stadium. C — ssaki nie są pierwszymi kolonizatorami. D — bakterie glebowe wymagają już istniejącej gleby.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.sukcesja,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących sukcesji ekologicznej.\nA. Sukcesja wtórna przebiega szybciej niż pierwotna, ponieważ zaczyna się na obszarze, gdzie wcześniej istniało zbiorowisko i zachowała się gleba oraz bank nasion.\nB. Zbiorowisko klimaksowe to końcowe, stabilne stadium sukcesji, które utrzymuje się bez dalszych zmian przez nieograniczony czas.\nC. Eutrofizacja jeziora (nadmierne wzbogacenie w azot i fosfor) może być przykładem sukcesji — stopniowe wypłycanie i zarastanie zbiornika.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Sukcesja wtórna jest szybsza niż pierwotna — zachowała się gleba i bank nasion.', is_correct: true },
      { id: 'B', text: 'Klimaks to końcowe stabilne stadium utrzymujące się bez zmian przez nieograniczony czas.', is_correct: false },
      { id: 'C', text: 'Eutrofizacja jeziora to przykład sukcesji prowadzącej do zarastania zbiornika.', is_correct: true },
    ],
    correct_answer: ['A-P', 'B-F', 'C-P'],
    explanation: 'A — Prawda: po pożarze lub wylesieniu gleba jest zachowana, nasiona i fragmenty korzeni przetrwały → sukcesja wtórna trwa dziesiątki lat (vs tysiące dla sukcesji pierwotnej). B — Fałsz: klimaks nie jest stanem absolutnej równowagi bez zmian — jest dynamiczną równowagą z małymi zaburzeniami (dying trees, blow-downs). Współczesna ekologia odrzuca koncepcję idealnego, niezmiennego klimaksu na rzecz mozaiki dynamicznych zbiorowisk. C — Prawda: eutrofizacja (często antropogeniczna — nawozy, ścieki) → zakwit glonów → rozkład przez bakterie → deficyt tlenu (hypoksja) → zamieranie fauny → zarastanie szuwarami → wypłycanie → sukcesja w kierunku łąki.',
    difficulty: 3,
    verified: true,
  },

  // --- Biomy ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.biomy,
    question_text: 'Które z poniższych biomów charakteryzuje się największą bioróżnorodnością gatunkową?',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Tundra arktyczna — ze względu na stabilne warunki i brak konkurencji', is_correct: false },
      { id: 'B', text: 'Las deszczowy strefy równikowej (wilgotny las tropikalny) — bogaty w gatunki dzięki stałemu ciepłu, wilgoci i dużej ilości nisz', is_correct: true },
      { id: 'C', text: 'Tajga (las borealny) — dominacja jednolitych lasów iglastych tworzy wiele specjalistycznych nisz', is_correct: false },
      { id: 'D', text: 'Pustynie gorące — ekstremalne warunki selekcjonują gatunki o wyjątkowych przystosowaniach', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Wilgotne lasy tropikalne (Amazonia, Kongo, Azja Pd-Wsch.) to najbogatszy w bioróżnorodność biom: ok. 50–80% wszystkich gatunków lądowych przy ok. 6% powierzchni Ziemi. Przyczyny wysokiej bioróżnorodności: stałe i wysokie temperatury, duże opady (brak sezonowości eliminującej gatunki), złożona pionowa struktura (kilka pięter), stara historia ewolucyjna, brak dawnych zlodowaceń (refugia). A — tundra ma niską bioróżnorodność (ekstremalne warunki, krótki sezon). C — tajga zdominowana przez kilka gatunków drzew iglastych. D — pustynie mają umiarkowaną bioróżnorodność.',
    difficulty: 1,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.biomy,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących biomów.\nA. Tundra charakteryzuje się obecnością wiecznej zmarzliny (permafrost), krótkim sezonem wegetacyjnym i dominacją mchów, porostów oraz niskich krzewów.\nB. Step (preria) to biom o małych opadach i bogatej, ciemnej glebie czarnoziemnej — jeden z najbardziej urodzajnych typów gleb na świecie.\nC. Tajga (las borealny) jest biomem o największym zasięgu lądowym na Ziemi i charakteryzuje się dominacją drzew liściastych zrzucających liście zimą.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Tundra: permafrost, krótki sezon wegetacyjny, mchy/porosty/krzewy.', is_correct: true },
      { id: 'B', text: 'Step: małe opady, czarnoziem — jedna z najbardziej urodzajnych gleb.', is_correct: true },
      { id: 'C', text: 'Tajga to biom o największym zasięgu z dominacją drzew liściastych.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: permafrost (wieczna zmarzlina) uniemożliwia wzrost głębokich korzeni i drenaż wody → torfowiska, bezleśna roślinność; sezon wegetacyjny 50–90 dni. B — Prawda: stepy/prerie (umiarkowane opady 250–750 mm, gorące lata, mroźne zimy) wykształcają czarnoziemy (chernozemy) — bogate w próchnicę gleby uprawne (Ukraina, Kansas). C — Fałsz: tajga (las borealny) ma NAJWIĘKSZY zasięg spośród lądowych biomów, ale dominują w niej drzewa IGLASTE (świerk, sosna, jodła, modrzew — zimozielone lub półzimozielone), nie liściaste. Las liściasty umiarkowany to odrębny biom (dąb, buk, klon).',
    difficulty: 2,
    verified: true,
  },

  // --- Ochrona przyrody ---
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ochrona,
    question_text: 'Wskaż prawidłowe dokończenie zdania.\nGatunki kluczowe (keystone species) w ekosystemie to gatunki, które:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'są najliczniejsze w ekosystemie i stanowią podstawę sieci pokarmowej jako główne producenty', is_correct: false },
      { id: 'B', text: 'mają nieproporcjonalnie duży wpływ na strukturę i funkcjonowanie ekosystemu w stosunku do ich liczebności — ich usunięcie drastycznie zmienia ekosystem', is_correct: true },
      { id: 'C', text: 'są gatunkami inwazyjnymi, które po wprowadzeniu do nowego środowiska stają się dominantami', is_correct: false },
      { id: 'D', text: 'są gatunkami endemicznymi, nieobecnymi nigdzie indziej na świecie, co czyni je priorytetem ochronnym', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Gatunek kluczowy (keystone species, R. Paine 1969): jego biomasa jest relatywnie mała, ale odgrywa nieproporcjonalnie dużą rolę w utrzymaniu struktury i bioróżnorodności ekosystemu. Klasyczny przykład: wydra morska (Enhydra lutris) — żywi się jeżowcami → reguluje ich populację → chroni lasy kelpu. Bez wydry: eksplozja jeżowców → zniszczenie kelpu → utrata habitatu dla setek gatunków. Inne przykłady: wilki w Yellowstone (efekt kaskady troficznej), figi jako pokarm dla wielu zwierząt tropikalnych. A — opisuje dominanty (nie keystone). D — opisuje endemity.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ochrona,
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących ochrony przyrody i kryzysu bioróżnorodności.\nA. Główną przyczyną obecnego kryzysu bioróżnorodności jest utrata i fragmentacja siedlisk spowodowana działalnością człowieka.\nB. Gatunki inwazyjne (obce, introdukowane) są jedną z pięciu głównych przyczyn wymierania gatunków, bo konkurują z gatunkami rodzimymi lub je drapieżą.\nC. Ochrona ex situ (poza naturalnym siedliskiem, np. ogrody zoologiczne i botaniczne) jest wystarczająca do zachowania bioróżnorodności bez konieczności ochrony in situ.',
    question_type: 'true_false',
    options: [
      { id: 'A', text: 'Utrata i fragmentacja siedlisk to główna przyczyna kryzysu bioróżnorodności.', is_correct: true },
      { id: 'B', text: 'Gatunki inwazyjne to jedna z głównych przyczyn wymierania gatunków rodzimych.', is_correct: true },
      { id: 'C', text: 'Ochrona ex situ jest wystarczająca bez konieczności ochrony in situ.', is_correct: false },
    ],
    correct_answer: ['A-P', 'B-P', 'C-F'],
    explanation: 'A — Prawda: 5 głównych przyczyn wymierania (HIPPO): Habitat loss, Invasive species, Pollution, Population (human overpopulation), Overharvesting. Utrata siedlisk (wylesianie, urbanizacja, rolnictwo) jest najistotniejsza. B — Prawda: gatunki inwazyjne (np. szczur wędrowny na wyspach, minóg morski w Wielkich Jeziorach, barszcz Sosnowskiego) wygrywają konkurencję, drapieżą gatunki nieznające zagrożenia, przenoszą choroby. C — Fałsz: ochrona ex situ (ZOO, banki nasion, ogród botaniczny) jest ważnym uzupełnieniem, ale NIE wystarczy — gatunki wymagają naturalnych ekosystemów, interakcji z innymi gatunkami. Ochrona in situ (parki narodowe, rezerwaty) jest priorytetem.',
    difficulty: 2,
    verified: true,
  },
  {
    topic_id: TOPIC_ID,
    subtopic_id: S.ochrona,
    question_text: 'Które z poniższych działań człowieka prowadzą do eutrofizacji wód?',
    question_type: 'multiple',
    options: [
      { id: 'A', text: 'Stosowanie nadmiaru nawozów mineralnych (azotowych i fosforowych) na polach uprawnych — spływ do rzek i jezior', is_correct: true },
      { id: 'B', text: 'Odprowadzanie nieoczyszczonych ścieków komunalnych bogatych w związki azotu i fosforu do wód', is_correct: true },
      { id: 'C', text: 'Zalesianie zlewni jezior, które zwiększa pochłanianie CO₂ i nasila zakwit glonów', is_correct: false },
      { id: 'D', text: 'Hodowla zwierząt (gnojówka, gnojowica) na terenach w pobliżu zbiorników wodnych', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Eutrofizacja (nadmierne wzbogacenie wody w biogeny — głównie N i P) jest zjawiskiem w dużej mierze antropogenicznym: A — spływ powierzchniowy nawozów (szczególnie fosforanów, które silnie wiążą się z glebą, ale przy nasyceniu spływają) → wzrost fitoplankton → hypoksja. B — ścieki komunalne zawierają fosfor (detergenty, metabolity) i azot (mocznik, amoniak) — najczęstsza przyczyna eutrofizacji jezior w Polsce. D — gnojówka bogata w azot amonowy i fosfor — szczególnie niebezpieczna w pobliżu wód. C — błąd: zalesianie jest ochronne — korzenie drzew zatrzymują biogeny w glebie i redukują spływ; NIE nasila eutrofizacji.',
    difficulty: 2,
    verified: true,
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
  console.log(`Seeding ${questions.length} questions for Ekologia...`)
  for (const q of questions) {
    const status = await post(q)
    const ok = status === 201 || status === 204
    console.log((ok ? '✓' : '✗ ' + status), q.question_type, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
