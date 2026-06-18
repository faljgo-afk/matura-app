-- ============================================================
-- BIOLOGY MATURA QUESTIONS SEED
-- 5 questions per topic, 10 topics = 50 questions total
-- ============================================================

-- ============================================================
-- TOPIC 1: Komórka i biochemia
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'Które organellum komórkowe jest odpowiedzialne za syntezę ATP w procesie oddychania komórkowego?',
    'single',
    '[{"id":"A","text":"Rybosomy","is_correct":false},{"id":"B","text":"Mitochondria","is_correct":true},{"id":"C","text":"Aparat Golgiego","is_correct":false},{"id":"D","text":"Retikulum endoplazmatyczne","is_correct":false}]',
    '["B"]',
    'Mitochondria to "elektrownie komórki" — to w nich zachodzi oddychanie komórkowe (cykl Krebsa i fosforylacja oksydacyjna), w wyniku którego powstaje ATP. Rybosomy syntetyzują białka, aparat Golgiego modyfikuje i pakuje białka, a retikulum endoplazmatyczne uczestniczy w transporcie białek i lipidów.',
    1
  ),
  (
    'Błona komórkowa zbudowana jest głównie z:',
    'single',
    '[{"id":"A","text":"Białek i węglowodanów","is_correct":false},{"id":"B","text":"Fosfolipidów i białek","is_correct":true},{"id":"C","text":"Cholesterolu i kwasów nukleinowych","is_correct":false},{"id":"D","text":"Glikoprotein i kwasów tłuszczowych","is_correct":false}]',
    '["B"]',
    'Błona komórkowa zbudowana jest z dwuwarstwy fosfolipidowej, w której zanurzone są białka (model mozaiki płynnej wg Singera i Nicolsona). Fosfolipidy mają głowę hydrofilową (zwróconą na zewnątrz) i ogon hydrofobowy (skierowany do środka). Białka pełnią funkcje transportowe, receptorowe i enzymatyczne.',
    1
  ),
  (
    'Które z poniższych procesów zachodzą w chloroplastach?',
    'multiple',
    '[{"id":"A","text":"Fotosynteza","is_correct":true},{"id":"B","text":"Oddychanie komórkowe","is_correct":false},{"id":"C","text":"Synteza cukrów w cyklu Calvina","is_correct":true},{"id":"D","text":"Synteza białek na rybosomach chloroplastów","is_correct":true}]',
    '["A","C","D"]',
    'W chloroplastach zachodzi fotosynteza (faza jasna w tylakoidach i cykl Calvina w stromie). Chloroplasty mają własne rybosomy (70S, podobne do bakteryjnych) i mogą syntetyzować niektóre własne białka. Oddychanie komórkowe zachodzi głównie w mitochondriach, nie w chloroplastach.',
    2
  ),
  (
    'Enzym to białko, które w reakcji chemicznej ulega zużyciu.',
    'true_false',
    '[{"id":"T","text":"Prawda","is_correct":false},{"id":"F","text":"Fałsz","is_correct":true}]',
    '["F"]',
    'Enzymy są biokatalizatorami — przyspieszają reakcje chemiczne, ale same nie ulegają zużyciu w trakcie reakcji. Enzym łączy się z substratem w centrum aktywnym, tworząc kompleks enzym-substrat, a po zakończeniu reakcji zostaje uwolniony w niezmienionej formie i może katalizować kolejne reakcje.',
    1
  ),
  (
    'Transport aktywny przez błonę komórkową wymaga:',
    'single',
    '[{"id":"A","text":"Gradientu stężeń i białek nośnikowych","is_correct":false},{"id":"B","text":"Energii ATP i białek transportowych","is_correct":true},{"id":"C","text":"Tylko gradientu elektrochemicznego","is_correct":false},{"id":"D","text":"Rozpuszczalności substancji w lipidach","is_correct":false}]',
    '["B"]',
    'Transport aktywny przebiega wbrew gradientowi stężeń (od niższego do wyższego stężenia), dlatego wymaga nakładu energii w postaci ATP. Przeprowadzają go specyficzne białka transportowe (pompy). Przykładem jest pompa sodowo-potasowa (Na+/K+-ATPaza). Transport bierny (dyfuzja, osmoza) nie wymaga energii.',
    2
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'komorka-i-biochemia';

-- ============================================================
-- TOPIC 2: Genetyka i dziedziczenie (adding to existing 4)
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'Crossing-over to proces wymiany odcinków chromatyd, który zachodzi podczas:',
    'single',
    '[{"id":"A","text":"Mitozy, w fazie profazy","is_correct":false},{"id":"B","text":"Mejozy I, w fazie profazy I","is_correct":true},{"id":"C","text":"Mejozy II, w fazie metafazy II","is_correct":false},{"id":"D","text":"Interfazy, podczas replikacji DNA","is_correct":false}]',
    '["B"]',
    'Crossing-over (wymiana odcinków między chromatydami niesiostrzanymi) zachodzi podczas profazy I mejozy, gdy homologiczne chromosomy tworzą biwalenty (synapsis). Prowadzi do rekombinacji genetycznej, zwiększając różnorodność potomstwa. To jeden z kluczowych mechanizmów zmienności genetycznej.',
    2
  ),
  (
    'Kobieta będąca nosicielką genu hemofilii (XHXh) i mężczyzna zdrowy (XHY) mają dzieci. Jakie jest prawdopodobieństwo, że syn będzie chory na hemofilię?',
    'single',
    '[{"id":"A","text":"0%","is_correct":false},{"id":"B","text":"25%","is_correct":false},{"id":"C","text":"50%","is_correct":true},{"id":"D","text":"100%","is_correct":false}]',
    '["C"]',
    'Hemofilia jest sprzężona z chromosomem X i recesywna. Matka nosicielka (XHXh) przekazuje synom albo chromosom XH (syn zdrowy) albo Xh (syn chory). Ojciec przekazuje synom chromosom Y. Zatem 50% synów otrzyma Xh od matki i będzie chorych, a 50% otrzyma XH i będzie zdrowych. Córki nie będą chore (dostaną XH od ojca).',
    3
  ),
  (
    'Które z poniższych stwierdzeń dotyczących DNA są prawdziwe?',
    'multiple',
    '[{"id":"A","text":"DNA ma strukturę podwójnej helisy","is_correct":true},{"id":"B","text":"W DNA uracyl łączy się z adeninę","is_correct":false},{"id":"C","text":"Nić DNA ma kierunek 5'' → 3''","is_correct":true},{"id":"D","text":"Guanina łączy się z cytozyną trzema wiązaniami wodorowymi","is_correct":true}]',
    '["A","C","D"]',
    'DNA ma strukturę podwójnej helisy (Watson i Crick, 1953). Każda nić ma kierunek od końca 5'' (fosforan) do końca 3'' (hydroksyl) — obie nici są antyrównoległe. Guanina (G) łączy się z cytozyną (C) trzema wiązaniami wodorowymi, a adenina (A) z tyminą (T) dwoma. Uracyl występuje w RNA, nie w DNA.',
    2
  ),
  (
    'Groch o genotypie AaBb (A — żółte nasiona, B — gładka powierzchnia, geny niezależne) krzyżuje się z grochem aabb. Jakie fenotypy pojawią się w potomstwie?',
    'single',
    '[{"id":"A","text":"Tylko żółte gładkie","is_correct":false},{"id":"B","text":"Żółte gładkie i zielone pomarszczone w stosunku 1:1","is_correct":false},{"id":"C","text":"4 fenotypy w stosunku 1:1:1:1","is_correct":true},{"id":"D","text":"Żółte gładkie i żółte pomarszczone w stosunku 1:1","is_correct":false}]',
    '["C"]',
    'To krzyżówka testowa (testcross) — osobnik heterozygotyczny AaBb z homozygotą recesywną aabb. Rodzic AaBb wytwarza 4 typy gamet: AB, Ab, aB, ab. Rodzic aabb wytwarza tylko gamety ab. Potomstwo: AaBb (żółte gładkie), Aabb (żółte pomarszczone), aaBb (zielone gładkie), aabb (zielone pomarszczone) — każdy w stosunku 1:1:1:1.',
    3
  ),
  (
    'Replikacja DNA jest procesem semikonserwatywnym, co oznacza że:',
    'single',
    '[{"id":"A","text":"Obie nici nowej cząsteczki DNA są nowo zsyntetyzowane","is_correct":false},{"id":"B","text":"Każda nowa cząsteczka DNA zawiera jedną nić macierzystą i jedną nowo zsyntetyzowaną","is_correct":true},{"id":"C","text":"Tylko jedna z dwóch nowych cząsteczek zawiera materiał macierzysty","is_correct":false},{"id":"D","text":"DNA replikuje się tylko w fazie S mitozy","is_correct":false}]',
    '["B"]',
    'Semikonserwatywny model replikacji DNA (potwierdzony eksperymentem Meselsona i Stahla) zakłada, że podczas replikacji dwie nici macierzystego DNA rozdzielają się, a na każdej z nich syntetyzowana jest nowa nić komplementarna. Każda z dwóch powstałych cząsteczek DNA zawiera więc jedną starą nić i jedną nową.',
    2
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'genetyka';

-- ============================================================
-- TOPIC 3: Ewolucja
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'Dobór naturalny działa na:',
    'single',
    '[{"id":"A","text":"Geny bezpośrednio","is_correct":false},{"id":"B","text":"Fenotypy osobników w populacji","is_correct":true},{"id":"C","text":"Wyłącznie cechy dziedziczne","is_correct":false},{"id":"D","text":"Gatunki jako całość","is_correct":false}]',
    '["B"]',
    'Dobór naturalny działa na fenotypy — widoczne cechy osobników. Osobniki o fenotypach lepiej przystosowanych do środowiska mają większą szansę przeżycia i pozostawienia potomstwa. Geny (genotyp) są "niewidoczne" dla doboru — dobór faworyzuje lub eliminuje genotypy pośrednio, poprzez ich wpływ na fenotyp.',
    2
  ),
  (
    'Które z poniższych są dowodem na ewolucję organizmów?',
    'multiple',
    '[{"id":"A","text":"Zapis kopalny (skamieniałości)","is_correct":true},{"id":"B","text":"Homologiczne narządy u różnych gatunków","is_correct":true},{"id":"C","text":"Podobieństwo sekwencji DNA między gatunkami","is_correct":true},{"id":"D","text":"Stała liczba gatunków na Ziemi","is_correct":false}]',
    '["A","B","C"]',
    'Dowodem na ewolucję są: skamieniałości (pokazują sekwencję zmian w czasie), narządy homologiczne (np. kończyna człowieka, skrzydło ptaka, płetwa wieloryba — ta sama budowa, różne funkcje), podobieństwo sekwencji DNA (im bliżej spokrewnione gatunki, tym bardziej podobne DNA). Liczba gatunków na Ziemi zmienia się — wiele wymarło, nowe powstają.',
    2
  ),
  (
    'Specjacja allopatryczna polega na powstawaniu nowych gatunków wskutek:',
    'single',
    '[{"id":"A","text":"Poliploidyzacji w obrębie tej samej populacji","is_correct":false},{"id":"B","text":"Geograficznej izolacji populacji","is_correct":true},{"id":"C","text":"Doboru płciowego wewnątrz populacji","is_correct":false},{"id":"D","text":"Mutacji mitochondrialnego DNA","is_correct":false}]',
    '["B"]',
    'Specjacja allopatryczna zachodzi gdy populacja zostaje podzielona barierą geograficzną (góry, morze, rzeka). Izolowane populacje ewoluują niezależnie pod wpływem różnych warunków środowiska i dryfu genetycznego. Z czasem różnice genetyczne stają się tak duże, że osobniki z obu populacji nie mogą się krzyżować — powstają dwa odrębne gatunki.',
    2
  ),
  (
    'Teoria ewolucji Darwina opierała się na znajomości mechanizmów dziedziczenia na poziomie molekularnym.',
    'true_false',
    '[{"id":"T","text":"Prawda","is_correct":false},{"id":"F","text":"Fałsz","is_correct":true}]',
    '["F"]',
    'Darwin opublikował "O powstawaniu gatunków" w 1859 roku — na 6 lat przed pracami Mendla i dziesiątki lat przed odkryciem DNA. Darwin nie znał mechanizmów dziedziczenia na poziomie molekularnym ani nawet mendlowskiej genetyki. Swoją teorię oparł na obserwacjach przyrodniczych, hodowli zwierząt i roślin oraz analizie zapisu kopalnego.',
    2
  ),
  (
    'Dryfem genetycznym nazywamy:',
    'single',
    '[{"id":"A","text":"Ukierunkowane zmiany częstości alleli pod wpływem doboru naturalnego","is_correct":false},{"id":"B","text":"Losowe zmiany częstości alleli w małych populacjach","is_correct":true},{"id":"C","text":"Przepływ genów między populacjami przez migracje","is_correct":false},{"id":"D","text":"Zmiany częstości alleli spowodowane mutacjami","is_correct":false}]',
    '["B"]',
    'Dryfem genetycznym to losowe zmiany częstości alleli w populacji, niezwiązane z doborem naturalnym. Działa najsilniej w małych populacjach, gdzie przypadkowe zdarzenia (np. która osobnik przeżyje, które allele zostaną przekazane potomstwu) mogą drastycznie zmienić skład genetyczny populacji. Może prowadzić do utrwalenia lub zaniku alleli przez przypadek.',
    3
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'ewolucja';

-- ============================================================
-- TOPIC 4: Ekologia
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'W łańcuchu pokarmowym: trawa → zając → lis → orzeł, lis należy do poziomu troficznego:',
    'single',
    '[{"id":"A","text":"Producenta","is_correct":false},{"id":"B","text":"Konsumenta I rzędu","is_correct":false},{"id":"C","text":"Konsumenta II rzędu","is_correct":true},{"id":"D","text":"Konsumenta III rzędu","is_correct":false}]',
    '["C"]',
    'Trawa to producent (organizm autotroficzny). Zając jako roślinożerca to konsument I rzędu. Lis zjada zająca, więc jest konsumentem II rzędu (drapieżnik I rzędu). Orzeł zjadając lisa jest konsumentem III rzędu. Każdy poziom troficzny to o jeden krok wyżej w łańcuchu pokarmowym.',
    1
  ),
  (
    'Które z poniższych procesów wchodzą w skład obiegu azotu w przyrodzie?',
    'multiple',
    '[{"id":"A","text":"Nitryfikacja","is_correct":true},{"id":"B","text":"Denitryfikacja","is_correct":true},{"id":"C","text":"Wiązanie azotu atmosferycznego przez bakterie","is_correct":true},{"id":"D","text":"Fotosynteza","is_correct":false}]',
    '["A","B","C"]',
    'Obieg azotu obejmuje: wiązanie N2 przez bakterie (np. Rhizobium w brodawkach korzeniowych), nitryfikację (utlenianie NH3 do NO2- i NO3- przez bakterie nitryfikacyjne), denitryfikację (redukcja NO3- do N2 przez bakterie denitryfikacyjne) oraz amonifikację (rozkład białek do NH3). Fotosynteza dotyczy obiegu węgla.',
    2
  ),
  (
    'Sukcesja ekologiczna pierwotna rozpoczyna się na:',
    'single',
    '[{"id":"A","text":"Terenie po pożarze lasu","is_correct":false},{"id":"B","text":"Podłożu, które wcześniej nie było zasiedlone przez organizmy","is_correct":true},{"id":"C","text":"Gruntach ornych pozostawionych odłogiem","is_correct":false},{"id":"D","text":"Terenie po powodzi","is_correct":false}]',
    '["B"]',
    'Sukcesja pierwotna zachodzi na podłożu, które nigdy wcześniej nie było zasiedlone — np. na nagiej skale, lawie wulkanicznej, wydmach piaszczystych. Pionierami są organizmy zdolne do życia w ekstremalnych warunkach (porosty, mchy). Sukcesja wtórna zachodzi na terenach, gdzie ekosystem został zniszczony (pożar, powódź, uprawa), ale gleba jest już ukształtowana.',
    2
  ),
  (
    'Reguła 10% w ekologii oznacza, że:',
    'single',
    '[{"id":"A","text":"10% gatunków w ekosystemie to drapieżniki szczytowe","is_correct":false},{"id":"B","text":"Przy przejściu na wyższy poziom troficzny przekazywane jest około 10% energii","is_correct":true},{"id":"C","text":"Biomasa producentów stanowi 10% całkowitej biomasy ekosystemu","is_correct":false},{"id":"D","text":"10% energii słonecznej jest wykorzystywane przez rośliny w fotosyntezie","is_correct":false}]',
    '["B"]',
    'Reguła 10% (prawo Lindmanna) mówi, że przy przejściu z jednego poziomu troficznego na wyższy, tylko około 10% energii jest przekazywane dalej. Reszta jest tracona jako ciepło podczas metabolizmu, oddychania i wydalania. Dlatego łańcuchy pokarmowe mają zwykle 4-5 ogniw — po tym energii byłoby zbyt mało.',
    2
  ),
  (
    'Komensalizm to rodzaj zależności, w której:',
    'single',
    '[{"id":"A","text":"Obydwa gatunki odnoszą korzyści","is_correct":false},{"id":"B","text":"Jeden gatunek odnosi korzyść, drugi nie jest ani zyskuje ani traci","is_correct":true},{"id":"C","text":"Jeden gatunek korzysta kosztem drugiego","is_correct":false},{"id":"D","text":"Obydwa gatunki są sobie szkodliwe","is_correct":false}]',
    '["B"]',
    'Komensalizm to zależność, w której jeden gatunek (komensal) odnosi korzyści, a drugi (gospodarz) nie jest ani poszkodowany, ani zyskuje. Przykład: czapla bydlęca żeruje przy bydle zbierając owady spłoszone przez zwierzęta — bydło nie czerpie z tego korzyści, ale też nie jest szkodzone. Mutualizm (+/+), pasożytnictwo (+/-), drapieżnictwo (+/-).',
    2
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'ekologia';

-- ============================================================
-- TOPIC 5: Fizjologia roślin
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'Gdzie w komórce roślinnej przebiega faza jasna fotosyntezy?',
    'single',
    '[{"id":"A","text":"W stromie chloroplastu","is_correct":false},{"id":"B","text":"W błonie tylakoidów","is_correct":true},{"id":"C","text":"W cytoplazmie","is_correct":false},{"id":"D","text":"W mitochondriach","is_correct":false}]',
    '["B"]',
    'Fotosynteza przebiega w dwóch etapach. Faza jasna (reakcje świetlne) zachodzi w błonach tylakoidów (grana) chloroplastów — tu absorbowane jest światło, rozkładana jest woda (fotoliza), powstaje ATP i NADPH oraz wydzielany jest tlen. Faza ciemna (cykl Calvina) zachodzi w stromie chloroplastu — tu CO2 jest wiązane i redukowane do glukozy.',
    1
  ),
  (
    'Transpiracja u roślin pełni następujące funkcje:',
    'multiple',
    '[{"id":"A","text":"Napędza transport wody z korzeni do liści","is_correct":true},{"id":"B","text":"Chłodzi liście podczas gorących dni","is_correct":true},{"id":"C","text":"Dostarcza CO2 do komórek mezofilu","is_correct":false},{"id":"D","text":"Umożliwia transport soli mineralnych z wodą","is_correct":true}]',
    '["A","B","D"]',
    'Transpiracja (parowanie wody przez aparaty szparkowe) tworzy ssącą siłę transpiracyjną, która napędza słup wody w naczyniach ksylemu od korzeni do liści (teoria kohezyjno-tensyjna). Parowanie wody chłodzi liście (podobnie jak pocenie u człowieka). Wraz z wodą transportowane są sole mineralne. CO2 wnika przez szparki dyfuzją, niezwiązaną bezpośrednio z transpiracją.',
    2
  ),
  (
    'Auksyny (IAA) u roślin powodują wydłużanie się komórek po jasnej stronie łodygi, co prowadzi do:',
    'single',
    '[{"id":"A","text":"Wzrostu ku dołowi (geotropizm dodatni)","is_correct":false},{"id":"B","text":"Wzrostu ku światłu (fototropizm dodatni)","is_correct":true},{"id":"C","text":"Wzrostu od światła (fototropizm ujemny)","is_correct":false},{"id":"D","text":"Otwarcia aparatów szparkowych","is_correct":false}]',
    '["B"]',
    'Auksyny (IAA) gromadzą się po ciemnej stronie łodygi (z dala od źródła światła) i powodują szybsze wydłużanie komórek po tej stronie. W efekcie łodyga zagina się ku światłu — fototropizm dodatni. To klasyczne doświadczenie Darwina (ojca i syna) z trawami. Korzenie reagują na auksyny odwrotnie — wykazują fototropizm ujemny.',
    2
  ),
  (
    'Roślina C4 różni się od rośliny C3 tym, że:',
    'single',
    '[{"id":"A","text":"Nie przeprowadza fotosyntezy w nocy","is_correct":false},{"id":"B","text":"Posiada dodatkowy mechanizm wstępnego wiązania CO2 zmniejszający fotooddychanie","is_correct":true},{"id":"C","text":"Nie zawiera chlorofilu","is_correct":false},{"id":"D","text":"Produkuje glukozę tylko w korzeniach","is_correct":false}]',
    '["B"]',
    'Rośliny C4 (np. kukurydza, trzcina cukrowa) mają dodatkowy mechanizm koncentrowania CO2: wstępnie wiążą CO2 do 4-węglowego kwasu szczawiooctowego (OAA) w komórkach mezofilu, skąd CO2 jest transportowany do komórek pochwy wiązkowej i tam używany w cyklu Calvina. Zmniejsza to fotooddychanie i zwiększa wydajność fotosyntezy w ciepłych, słonecznych warunkach.',
    3
  ),
  (
    'Nasiona większości roślin wymagają do kiełkowania:',
    'single',
    '[{"id":"A","text":"Wyłącznie obecności światła","is_correct":false},{"id":"B","text":"Wody, odpowiedniej temperatury i dostępu do tlenu","is_correct":true},{"id":"C","text":"Wyłącznie wysokiej temperatury i wilgoci","is_correct":false},{"id":"D","text":"Obecności giberelin z zewnątrz","is_correct":false}]',
    '["B"]',
    'Do kiełkowania nasion potrzebne są: woda (aktywuje enzymy, umożliwia transport substancji), odpowiednia temperatura (optymalna dla enzymów metabolicznych) oraz tlen (do oddychania tlenowego, które dostarcza energii na wzrost). Światło jest wymagane do kiełkowania tylko u niektórych gatunków (np. sałata). Gibereliny są produkowane wewnętrznie przez zarodek.',
    1
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'fizjologia-roslin';

-- ============================================================
-- TOPIC 6: Fizjologia człowieka — układ krążenia i oddechowy
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'Krew utlenowana (bogata w tlen) płynie:',
    'single',
    '[{"id":"A","text":"Żyłami płucnymi i lewą stroną serca","is_correct":true},{"id":"B","text":"Tętnicą płucną i prawą stroną serca","is_correct":false},{"id":"C","text":"Żyłą główną i lewą stroną serca","is_correct":false},{"id":"D","text":"Tętnicą główną i prawą stroną serca","is_correct":false}]',
    '["A"]',
    'Krew utlenowana płynie żyłami płucnymi (z płuc do serca) → lewy przedsionek → lewa komora → aorta → do organów ciała. Krew nieutlenowana wraca żyłami głównymi → prawy przedsionek → prawa komora → tętnica płucna → do płuc. Uwaga: żyły płucne to jedyne żyły w ciele, którymi płynie krew utlenowana.',
    2
  ),
  (
    'Hemoglobina transportuje tlen w postaci:',
    'single',
    '[{"id":"A","text":"Jonu wodorowęglanowego (HCO3-)","is_correct":false},{"id":"B","text":"Oksyhemoglobiny (HbO2)","is_correct":true},{"id":"C","text":"Karbaminohemoglobiny (HbCO2)","is_correct":false},{"id":"D","text":"Rozpuszczonego w osoczu","is_correct":false}]',
    '["B"]',
    'Hemoglobina łączy się z tlenem tworząc oksyhemoglobinę (HbO2) — ta forma transportuje O2 z płuc do tkanek. Karbaminohemoglobina (HbCO2) powstaje gdy hemoglobina wiąże CO2 i transportuje dwutlenek węgla z tkanek do płuc. Większość CO2 jest jednak transportowana jako jony HCO3- w osoczu. Tylko ok. 1-2% O2 jest rozpuszczone w osoczu.',
    2
  ),
  (
    'Skurcz mięśnia sercowego jest inicjowany przez:',
    'single',
    '[{"id":"A","text":"Sygnały z mózgu przez nerwy ruchowe","is_correct":false},{"id":"B","text":"Węzeł zatokowo-przedsionkowy (SA) — naturalny rozrusznik serca","is_correct":true},{"id":"C","text":"Hormony nadnerczy wydzielane do krwi","is_correct":false},{"id":"D","text":"Stężenie jonów wapnia w osoczu","is_correct":false}]',
    '["B"]',
    'Serce ma własny układ bodźco-przewodzący. Węzeł zatokowo-przedsionkowy (SA) w prawym przedsionku jest naturalnym rozrusznikiem — generuje impulsy elektryczne z częstotliwością ok. 70/min. Impulsy te przewodzone są do węzła przedsionkowo-komorowego (AV), a następnie przez pęczek Hisa i włókna Purkinjego do komór. Układ nerwowy autonomiczny i hormony jedynie modulują tempo pracy.',
    3
  ),
  (
    'Podczas wdechu przepona:',
    'single',
    '[{"id":"A","text":"Unosi się ku górze, zmniejszając objętość klatki piersiowej","is_correct":false},{"id":"B","text":"Obniża się ku dołowi, zwiększając objętość klatki piersiowej","is_correct":true},{"id":"C","text":"Pozostaje nieruchoma, a żebra unoszą się","is_correct":false},{"id":"D","text":"Kurczy się ku środkowi, zwiększając ciśnienie w płucach","is_correct":false}]',
    '["B"]',
    'Podczas wdechu przepona kurczy się i obniża ku dołowi, jednocześnie mięśnie międzyżebrowe zewnętrzne unoszą żebra ku górze i na boki. Zwiększa to objętość klatki piersiowej, ciśnienie w płucach spada poniżej atmosferycznego i powietrze wpływa do płuc. Podczas wydechu przepona unosi się i żebra opadają — objętość maleje, ciśnienie rośnie i powietrze wypływa.',
    1
  ),
  (
    'Które z poniższych zwiększają częstość i głębokość oddychania?',
    'multiple',
    '[{"id":"A","text":"Wzrost stężenia CO2 we krwi","is_correct":true},{"id":"B","text":"Spadek pH krwi (kwasica)","is_correct":true},{"id":"C","text":"Wzrost stężenia O2 we krwi","is_correct":false},{"id":"D","text":"Wysiłek fizyczny","is_correct":true}]',
    '["A","B","D"]',
    'Centrum oddechowe w rdzeniu przedłużonym monitoruje głównie stężenie CO2 i pH krwi (nie O2). Wzrost CO2 i/lub spadek pH (więcej H+) silnie pobudzają oddychanie. Podczas wysiłku fizycznego rośnie produkcja CO2 i kwasu mlekowego, co przyspiesza oddychanie. Natomiast stężenie O2 we krwi musi spaść bardzo znacznie (hipoksja), żeby stymulować oddychanie przez chemoreceptory obwodowe.',
    3
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'uklad-krazenia';

-- ============================================================
-- TOPIC 7: Fizjologia człowieka — układ nerwowy i hormonalny
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'Potencjał czynnościowy (impuls nerwowy) jest możliwy dzięki:',
    'single',
    '[{"id":"A","text":"Przepływowi jonów Na+ do wnętrza neuronu i K+ na zewnątrz","is_correct":true},{"id":"B","text":"Przepływowi jonów Ca2+ przez błonę neuronu","is_correct":false},{"id":"C","text":"Zmianie stężenia neuroprzekaźników w szczelinie synaptycznej","is_correct":false},{"id":"D","text":"Depolaryzacji mitochondriów w aksonie","is_correct":false}]',
    '["A"]',
    'Potencjał czynnościowy powstaje przez gwałtowny napływ jonów Na+ do wnętrza komórki przez kanały sodowe (depolaryzacja: błona z -70mV do +30mV). Następnie kanały sodowe zamykają się, otwierają kanały potasowe — K+ wypływa na zewnątrz (repolaryzacja). Pompa Na+/K+ przywraca stan spoczynkowy. Ten elektryczny impuls jest przewodzony wzdłuż aksonu.',
    2
  ),
  (
    'Synapsa chemiczna działa w następującej kolejności:',
    'single',
    '[{"id":"A","text":"Impuls elektryczny → uwolnienie neuroprzekaźnika → receptor → efekt w komórce postsynaptycznej","is_correct":true},{"id":"B","text":"Neuroprzekaźnik → impuls elektryczny → receptor → efekt","is_correct":false},{"id":"C","text":"Impuls elektryczny przechodzi bezpośrednio przez szczelinę synaptyczną","is_correct":false},{"id":"D","text":"Receptor → uwolnienie neuroprzekaźnika → impuls elektryczny","is_correct":false}]',
    '["A"]',
    'W synapsie chemicznej: impuls nerwowy dociera do zakończenia aksonu (kolbka synaptyczna) → Ca2+ napływa do kolbki → pęcherzyki synaptyczne zlewają się z błoną i uwalniają neuroprzekaźnik do szczeliny synaptycznej → neuroprzekaźnik wiąże się z receptorami na błonie postsynaptycznej → zmiana przepuszczalności błony → nowy potencjał czynnościowy lub hamowanie.',
    2
  ),
  (
    'Insulina i glukagon to hormony trzustki, które działają antagonistycznie. Insulina:',
    'single',
    '[{"id":"A","text":"Podnosi poziom glukozy we krwi","is_correct":false},{"id":"B","text":"Obniża poziom glukozy we krwi, pobudzając komórki do jej pobierania","is_correct":true},{"id":"C","text":"Pobudza rozpad glikogenu w wątrobie","is_correct":false},{"id":"D","text":"Jest wydzielana gdy poziom glukozy jest zbyt niski","is_correct":false}]',
    '["B"]',
    'Insulina (wydzielana przez komórki β wysp Langerhansa) jest wydzielana po posiłku gdy poziom glukozy we krwi rośnie. Obniża glikemię przez: pobudzenie komórek do pobierania glukozy, syntezę glikogenu w wątrobie i mięśniach, syntezę tłuszczów. Glukagon (komórki α) działa odwrotnie — wydzielany przy niskiej glikemii, pobudza rozpad glikogenu i glukoneogenezę w wątrobie.',
    2
  ),
  (
    'Do ośrodkowego układu nerwowego (OUN) należą:',
    'multiple',
    '[{"id":"A","text":"Mózg","is_correct":true},{"id":"B","text":"Nerwy czaszkowe","is_correct":false},{"id":"C","text":"Rdzeń kręgowy","is_correct":true},{"id":"D","text":"Nerwy rdzeniowe","is_correct":false}]',
    '["A","C"]',
    'Ośrodkowy układ nerwowy (OUN) tworzą mózg i rdzeń kręgowy — zamknięte w ochronnych strukturach (czaszka, kręgosłup) i otoczone oponami mózgowo-rdzeniowymi. Obwodowy układ nerwowy (OUN) tworzą nerwy (czaszkowe i rdzeniowe) oraz zwoje nerwowe. Nerwy to pęczki aksonów przewodzących informacje między OUN a resztą ciała.',
    1
  ),
  (
    'Adrenalina (epinefryna) wydzielana w stresie powoduje:',
    'multiple',
    '[{"id":"A","text":"Przyspieszenie akcji serca","is_correct":true},{"id":"B","text":"Rozszerzenie oskrzeli","is_correct":true},{"id":"C","text":"Zwolnienie trawienia","is_correct":true},{"id":"D","text":"Obniżenie poziomu glukozy we krwi","is_correct":false}]',
    '["A","B","C"]',
    'Adrenalina (hormon "walki lub ucieczki" wydzielany przez rdzeń nadnerczy) przygotowuje organizm do działania: przyspiesza akcję serca (więcej krwi do mięśni), rozszerza oskrzela (więcej tlenu), zwęża naczynia w narządach trawiennych (zwalnia trawienie — niepriorytетowe w stresie), rozszerza naczynia w mięśniach, podnosi poziom glukozy we krwi (nie obniża).',
    2
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'uklad-nerwowy';

-- ============================================================
-- TOPIC 8: Fizjologia człowieka — układ pokarmowy i wydalniczy
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'Trawienie skrobi rozpoczyna się w:',
    'single',
    '[{"id":"A","text":"Żołądku pod wpływem kwasu solnego","is_correct":false},{"id":"B","text":"Jamie ustnej pod wpływem amylazy ślinowej","is_correct":true},{"id":"C","text":"Dwunastnicy pod wpływem lipazy trzustkowej","is_correct":false},{"id":"D","text":"Jelicie cienkim pod wpływem żółci","is_correct":false}]',
    '["B"]',
    'Trawienie skrobi (polisacharyd) zaczyna się już w jamie ustnej. Amylaza ślinowa (ptialina) hydrolizuje wiązania α-1,4-glikozydowe, rozkładając skrobię do maltozy (dysacharydu). Żołądek nie trawi skrobi (brak enzymów, kwaśne pH inaktywuje amylazę). Trawienie skrobi kontynuuje amylaza trzustkowa w dwunastnicy.',
    1
  ),
  (
    'Żółć produkowana przez wątrobę pełni rolę:',
    'single',
    '[{"id":"A","text":"Enzymu trawiącego tłuszcze","is_correct":false},{"id":"B","text":"Emulgatora — rozdrabnia krople tłuszczu ułatwiając działanie lipaz","is_correct":true},{"id":"C","text":"Hormonu regulującego wchłanianie glukozy","is_correct":false},{"id":"D","text":"Enzymu trawiącego białka w jelicie cienkim","is_correct":false}]',
    '["B"]',
    'Żółć nie jest enzymem — nie trawi tłuszczów chemicznie. Działa jako emulgator (detergent): sole żółciowe otaczają duże krople tłuszczu i rozbijają je na małe kropelki, zwiększając powierzchnię kontaktu z lipazami. Dopiero lipaza trzustkowa trawi chemicznie te zmulsyfikowane tłuszcze do kwasów tłuszczowych i glicerolu. Żółć jest produkowana w wątrobie i magazynowana w pęcherzyku żółciowym.',
    2
  ),
  (
    'W nefronie nerki filtracja krwi zachodzi w:',
    'single',
    '[{"id":"A","text":"Kanaliku proksymalnym","is_correct":false},{"id":"B","text":"Kłębuszku nerkowym (ciałku Malpighiego)","is_correct":true},{"id":"C","text":"Pętli Henlego","is_correct":false},{"id":"D","text":"Kanaliku dystalnym","is_correct":false}]',
    '["B"]',
    'Filtracja krwi zachodzi w kłębuszku nerkowym (glomerulus) wchodzącym w skład ciałka nerkowego (Malpighiego). Krew pod wysokim ciśnieniem jest filtrowana przez śródbłonek naczyń włosowatych i podocyty do torebki Bowmana — powstaje mocz pierwotny (ultrafiltrat). Kanalik proksymalny — resorpcja. Pętla Henlego — zagęszczanie moczu. Kanalik dystalny — regulacja pH i elektrolitów.',
    2
  ),
  (
    'Które z poniższych substancji są wchłaniane z jelita cienkiego do krwi?',
    'multiple',
    '[{"id":"A","text":"Glukoza i inne monosacharydy","is_correct":true},{"id":"B","text":"Aminokwasy","is_correct":true},{"id":"C","text":"Kwasy tłuszczowe i glicerol","is_correct":true},{"id":"D","text":"Niestrawione cząsteczki skrobi","is_correct":false}]',
    '["A","B","C"]',
    'W jelicie cienkim wchłaniane są: monosacharydy (glukoza, fruktoza) i aminokwasy — bezpośrednio do naczyń krwionośnych kosmków jelitowych; kwasy tłuszczowe i glicerol — wchłaniane do komórek nabłonkowych, gdzie odbudowują się w triglicerydy i wchodzą do naczyń limfatycznych (chłonnych) jako chylomikrony. Niestrawiona skrobia nie może być wchłonięta — musi zostać rozłożona do cukrów prostych.',
    2
  ),
  (
    'Wątroba pełni w organizmie następujące funkcje:',
    'multiple',
    '[{"id":"A","text":"Detoksykacja szkodliwych substancji","is_correct":true},{"id":"B","text":"Synteza białek osocza (albumin, fibrynogenu)","is_correct":true},{"id":"C","text":"Produkcja erytrocytów u dorosłego","is_correct":false},{"id":"D","text":"Magazynowanie glikogenu","is_correct":true}]',
    '["A","B","D"]',
    'Wątroba pełni ponad 500 funkcji! Najważniejsze: detoksykacja (rozkład alkoholu, leków, amoniaku → mocznik), synteza białek osocza (albuminy, fibrynogen, czynniki krzepnięcia), magazynowanie glikogenu i regulacja glikemii, produkcja żółci, metabolizm lipidów i witamin. Erytrocyty u dorosłego człowieka są produkowane w szpiku kostnym (u płodu — wątroba i śledziona).',
    2
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'uklad-pokarmowy';

-- ============================================================
-- TOPIC 9: Różnorodność organizmów
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'Wirusy różnią się od bakterii tym, że:',
    'multiple',
    '[{"id":"A","text":"Nie mają własnego metabolizmu i rozmnażają się tylko wewnątrz komórek gospodarza","is_correct":true},{"id":"B","text":"Nie posiadają własnych rybosomów","is_correct":true},{"id":"C","text":"Są mniejsze od bakterii","is_correct":true},{"id":"D","text":"Nie zawierają kwasów nukleinowych","is_correct":false}]',
    '["A","B","C"]',
    'Wirusy to niekomórkowe cząstki zakaźne. Nie mają własnego metabolizmu — nie oddychają, nie rosną samodzielnie, rozmnażają się tylko wewnątrz żywej komórki gospodarza. Nie mają rybosomów (używają rybosomów gospodarza do syntezy białek). Są znacznie mniejsze od bakterii (20-300 nm vs. 0,5-5 μm). Każdy wirus zawiera kwas nukleinowy (DNA lub RNA) — to jego materiał genetyczny.',
    2
  ),
  (
    'Grzyby różnią się od roślin tym, że:',
    'single',
    '[{"id":"A","text":"Mają ściany komórkowe","is_correct":false},{"id":"B","text":"Są heterotrofami i mają ściany komórkowe z chityny","is_correct":true},{"id":"C","text":"Rozmnażają się przez zarodniki","is_correct":false},{"id":"D","text":"Mają eukariotyczną budowę komórki","is_correct":false}]',
    '["B"]',
    'Grzyby i rośliny mają ściany komórkowe, są eukariotami i rozmnażają się przez zarodniki — te cechy ich łączą. Kluczowe różnice: grzyby są heterotrofami (nie mają chlorofilu, nie przeprowadzają fotosyntezy) i ich ściany komórkowe zbudowane są z chityny (nie z celulozy jak u roślin). Chityna jest charakterystyczna dla grzybów i stawonogów.',
    1
  ),
  (
    'Rośliny okrytonasienne (Angiospermae) różnią się od nagozalążkowych (Gymnospermae) tym, że:',
    'single',
    '[{"id":"A","text":"Mają naczynia w ksylemie","is_correct":false},{"id":"B","text":"Nasiona są zamknięte w owocu","is_correct":true},{"id":"C","text":"Przeprowadzają fotosyntezę","is_correct":false},{"id":"D","text":"Rozmnażają się płciowo","is_correct":false}]',
    '["B"]',
    'Kluczowa różnica: u okrytonasiennych (kwiatowych) zalążki (i nasiona po zapłodnieniu) są zamknięte w słupku, a potem w owocu. U nagozalążkowych (np. sosna, świerk) nasiona są "nagie" — leżą na łuskach szyszek. Owoce to struktura charakterystyczna TYLKO dla okrytonasiennych. Obie grupy mają naczynia (lub cewki) w ksylemie i rozmnażają się płciowo.',
    2
  ),
  (
    'Bakterie to organizmy:',
    'single',
    '[{"id":"A","text":"Eukariotyczne — mające jądro komórkowe z błoną","is_correct":false},{"id":"B","text":"Prokariotyczne — bez jądra komórkowego otoczonego błoną","is_correct":true},{"id":"C","text":"Eukariotyczne — bez mitochondriów","is_correct":false},{"id":"D","text":"Prokariotyczne — z mitochondriami i chloroplastami","is_correct":false}]',
    '["B"]',
    'Bakterie są prokariotami — ich materiał genetyczny (chromosom bakteryjny) nie jest otoczony błoną jądrową, lecz leży w nukleoidzie w cytoplazmie. Bakterie nie mają organelli błonowych: mitochondriów, chloroplastów, aparatu Golgiego, ER. Mają natomiast rybosomy (70S, mniejsze niż eukariotyczne 80S), ścianę komórkową (z peptydoglikanu) i często wici.',
    1
  ),
  (
    'Płazińce (Platyhelminthes) charakteryzują się:',
    'single',
    '[{"id":"A","text":"Obecnością układu krwionośnego i jamy ciała","is_correct":false},{"id":"B","text":"Ciałem spłaszczonym grzbietobrzusznie, bez jamy ciała (acelomaty)","is_correct":true},{"id":"C","text":"Trzema parami odnóży i segmentacją","is_correct":false},{"id":"D","text":"Szkieletem wewnętrznym i kręgosłupem","is_correct":false}]',
    '["B"]',
    'Płazińce (np. tasiemce, motylice, planarie) mają ciało spłaszczone grzbietobrzusznie i są acelomatami — nie mają jamy ciała. Zamiast układu krwionośnego mają układ wydalniczy z komórkami płomykowymi. Wiele płazińców to pasożyty (tasiemiec, przywry). Trzy pary odnóży i segmentacja to cechy stawonogów. Kręgosłup jest cechą kręgowców.',
    2
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'roznorodnosc-organizmow';

-- ============================================================
-- TOPIC 10: Biotechnologia
-- ============================================================
insert into questions (topic_id, question_text, question_type, options, correct_answer, explanation, difficulty, verified, ai_confidence)
select t.id, q.question_text, q.question_type, q.options::jsonb, q.correct_answer::jsonb, q.explanation, q.difficulty, true, 0.95
from topics t, (values
  (
    'PCR (reakcja łańcuchowa polimerazy) służy do:',
    'single',
    '[{"id":"A","text":"Wycinania genów z chromosomów","is_correct":false},{"id":"B","text":"Powielania (amplifikacji) wybranego fragmentu DNA","is_correct":true},{"id":"C","text":"Wprowadzania DNA do komórek bakteryjnych","is_correct":false},{"id":"D","text":"Sekwencjonowania nukleotydów w DNA","is_correct":false}]',
    '["B"]',
    'PCR to metoda amplifikacji DNA — pozwala skopiować wybrany fragment DNA miliony razy w ciągu kilku godzin. Wymaga: matrycy DNA, starterów (primerów) komplementarnych do końców kopiowanego fragmentu, termostabilnej polimerazy DNA (Taq), nukleotydów i buforu. Cykl: denaturacja (95°C) → przyłączenie primerów (55-65°C) → elongacja (72°C). Zastosowania: diagnostyka, kryminalistyka, badania naukowe.',
    2
  ),
  (
    'Organizmy GMO (genetycznie modyfikowane) tworzy się metodami:',
    'multiple',
    '[{"id":"A","text":"Wprowadzania obcego DNA do genomu organizmu","is_correct":true},{"id":"B","text":"Krzyżowania blisko spokrewnionych organizmów","is_correct":false},{"id":"C","text":"Użycia wektora (np. plazmidu lub wirusa) do transferu genów","is_correct":true},{"id":"D","text":"Edycji genomu metodą CRISPR-Cas9","is_correct":true}]',
    '["A","C","D"]',
    'Organizmy GMO tworzy się przez wprowadzanie obcego DNA do genomu. Metody: wektory biologiczne (plazmidy bakteryjne, wirusy — retrowirusy, adenowirusy), biolistyka (strzelanie mikrosferami pokrytymi DNA), elektroporacja, mikroiniekcja DNA do jądra komórkowego, CRISPR-Cas9 (precyzyjna edycja genomu). Krzyżowanie organizmów to hodowla tradycyjna, nie inżynieria genetyczna.',
    2
  ),
  (
    'Enzym restrykcyjny (restryktaza) stosowany w inżynierii genetycznej służy do:',
    'single',
    '[{"id":"A","text":"Łączenia (ligacji) fragmentów DNA","is_correct":false},{"id":"B","text":"Cięcia DNA w specyficznych sekwencjach nukleotydowych","is_correct":true},{"id":"C","text":"Kopiowania DNA w reakcji PCR","is_correct":false},{"id":"D","text":"Transkrypcji DNA do RNA","is_correct":false}]',
    '["B"]',
    'Enzymy restrykcyjne (restryktazy) to "molekularne nożyczki" — rozcinają cząsteczki DNA w określonych, krótkich sekwencjach nukleotydowych (miejsca restrykcyjne, zwykle 4-8 par zasad). Wytwarzają końce "lepkie" (komplementarne jednoniciowe końce) lub "tępe". Są kluczowym narzędziem inżynierii genetycznej. Ligaza DNA łączy (liguje) fragmenty. Polimeraza DNA kopiuje DNA.',
    2
  ),
  (
    'Fermentacja mlekowa to proces, który:',
    'single',
    '[{"id":"A","text":"Wymaga obecności tlenu i produkuje CO2 i wodę","is_correct":false},{"id":"B","text":"Zachodzi beztlenowo i produkuje kwas mlekowy","is_correct":true},{"id":"C","text":"Produkuje etanol i CO2 bez udziału tlenu","is_correct":false},{"id":"D","text":"Zachodzi tylko w komórkach drożdży","is_correct":false}]',
    '["B"]',
    'Fermentacja mlekowa jest procesem beztlenowym (anaerobowym). Glukoza jest rozkładana do pirogronianu (glikoliza), a następnie pirogronian jest redukowany do kwasu mlekowego przez dehydrogenazę mleczanową. Efekt: 2 ATP netto z jednej cząsteczki glukozy. Zachodzi w mięśniach podczas intensywnego wysiłku i u bakterii mlekowych (Lactobacillus — jogurt, kefir, kiszonki). Fermentacja alkoholowa (drożdże) produkuje etanol i CO2.',
    2
  ),
  (
    'Technika Southern blot służy do:',
    'single',
    '[{"id":"A","text":"Wykrywania specyficznych białek w mieszaninie","is_correct":false},{"id":"B","text":"Wykrywania specyficznych sekwencji DNA","is_correct":true},{"id":"C","text":"Wykrywania specyficznych sekwencji RNA","is_correct":false},{"id":"D","text":"Amplifikacji fragmentów DNA","is_correct":false}]',
    '["B"]',
    'Southern blot (Edwin Southern, 1975) to technika wykrywania specyficznych sekwencji DNA: DNA jest cięty restryktazami, rozdzielany elektroforezą w żelu agarozowym, przenoszony na membranę nitrocelulozową i hybrydyzowany z znakowaną sondą (komplementarną do szukanej sekwencji). Northern blot — wykrywa RNA. Western blot — wykrywa białka. PCR — ampliflikuje DNA.',
    3
  )
) as q(question_text, question_type, options, correct_answer, explanation, difficulty)
where t.slug = 'biotechnologia';
