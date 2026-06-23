const https = require('https')
const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w'

const TOPIC_ID = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf'
const SUB = {
  klasyfikacja: '93f55825-0ec2-45fe-ad8e-ca3dce7bd98a',
  wirusy:       'ade8a64a-1b78-47c6-a317-a90c15dcf367',
  bakterie:     '34a5f416-a22e-438b-b4ff-7d56dd7279a4',
  protisty:     '22562e1a-ecfb-4b00-99c1-7f66be359a7b',
  grzyby:       '44e9a9be-d038-4287-a1fb-819e129d63f9',
  bezkregowce:  '2e08b827-45a1-4f25-a87f-01ca8bdcffda',
  rosliny:      '331cb215-d830-49f5-b3dd-19c5d51b1374',
}

function supabaseRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null
    const options = {
      hostname: URL_HOST,
      path: '/rest/v1/' + path,
      method,
      headers: {
        'apikey': KEY, 'Authorization': 'Bearer ' + KEY,
        'Content-Type': 'application/json', 'Prefer': 'return=representation',
        ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {}),
      },
    }
    const req = https.request(options, res => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }) }
        catch { resolve({ status: res.statusCode, body: data }) }
      })
    })
    req.on('error', reject)
    if (payload) req.write(payload)
    req.end()
  })
}

const QUESTIONS = [

  // ══ SYSTEMY KLASYFIKACJI ═══════════════════════════════════════════════════

  {
    sub: 'klasyfikacja', type: 'single', diff: 2,
    q: 'Wskaż prawidłowe dokończenie zdania.\nW systematyce biologicznej takson bezpośrednio nadrzędny nad rodzajem (genus) to:',
    opts: [
      { id: 'A', text: 'Rząd (ordo)', ok: false },
      { id: 'B', text: 'Rodzina (familia)', ok: true },
      { id: 'C', text: 'Klasa (classis)', ok: false },
      { id: 'D', text: 'Gromada (divisio)', ok: false },
    ],
    ans: ['B'],
    exp: 'Hierarchia taksonów: Domena → Królestwo → Typ → Klasa → Rząd → Rodzina → Rodzaj → Gatunek. Taksonem bezpośrednio nadrzędnym nad rodzajem jest rodzina (familia). Przykład: rodzaj Homo należy do rodziny Hominidae, rzędu Primates, klasy Mammalia.',
  },

  {
    sub: 'klasyfikacja', type: 'true_false', diff: 2,
    q: 'Oceń prawdziwość poniższych stwierdzeń dotyczących nomenklatury binominalnej i klasyfikacji organizmów.',
    opts: [
      { id: 'A', text: 'Nazwa gatunkowa organizmu składa się z nazwy rodzajowej i epitetu gatunkowego, zawsze zapisywanych kursywą.', ok: true },
      { id: 'B', text: 'Dwie populacje, których osobniki krzyżują się swobodnie i wydają płodne potomstwo, należą do różnych gatunków.', ok: false },
      { id: 'C', text: 'Systemy klasyfikacji filogenetycznej (kladystycznej) grupują organizmy na podstawie wspólnego pochodzenia ewolucyjnego.', ok: true },
    ],
    ans: ['A-P', 'B-F', 'C-P'],
    exp: 'A–P: nomenklatura binominalna Linneusza — dwuczłonowa nazwa łacińska kursywą (np. Homo sapiens: rodzaj + epitet gatunkowy). B–F: populacje krzyżujące się swobodnie z płodnym potomstwem należą do TEGO SAMEGO gatunku (biologiczna koncepcja gatunku Mayra). C–P: kladystyka grupuje organizmy w klady — wspólny przodek i wszyscy jego potomkowie; podstawą są synapomorfie (cechy pochodne wspólne).',
  },

  // ══ WIRUSY ════════════════════════════════════════════════════════════════

  {
    sub: 'wirusy', type: 'single', diff: 2,
    q: 'Które z poniższych stwierdzeń jest PRAWDZIWE w odniesieniu do wirusów?',
    opts: [
      { id: 'A', text: 'Wirusy posiadają własne rybosomy, które wykorzystują do syntezy białek kapsydu.', ok: false },
      { id: 'B', text: 'Wirusy mogą zawierać jako materiał genetyczny zarówno DNA, jak i RNA, nigdy jednak oba jednocześnie.', ok: true },
      { id: 'C', text: 'Wirusy są zdolne do samodzielnego przeprowadzania procesów metabolicznych poza komórką gospodarza.', ok: false },
      { id: 'D', text: 'Wszystkie bakteriofagi mają identyczną budowę morfologiczną.', ok: false },
    ],
    ans: ['B'],
    exp: 'Wirusy nie mają rybosomów ani własnego metabolizmu — są bezwzględnymi pasożytami wewnątrzkomórkowymi. Materiałem genetycznym jest albo DNA (adenowirusy, herpeswirusy) albo RNA (wirusy grypy, HIV, SARS-CoV-2) — nigdy oba jednocześnie. Bakteriofagi mają różnorodne morfologie (np. T4 z ogonem i płytkami, fagi nitkowate).',
  },

  {
    sub: 'wirusy', type: 'true_false', diff: 3,
    q: 'Oceń prawdziwość poniższych stwierdzeń dotyczących cyklu życiowego wirusa HIV.',
    opts: [
      { id: 'A', text: 'HIV jest retrowirusem — jego materiałem genetycznym jest RNA, które po wniknięciu do komórki jest przepisywane na DNA przez odwrotną transkryptazę.', ok: true },
      { id: 'B', text: 'HIV infekuje głównie limfocyty T cytotoksyczne (CD8+), co prowadzi do obniżenia odporności komórkowej.', ok: false },
      { id: 'C', text: 'Faza latentna zakażenia HIV polega na tym, że wirus może być zintegrowany z genomem gospodarza jako prowirus, nie powodując objawów choroby przez wiele lat.', ok: true },
    ],
    ans: ['A-P', 'B-F', 'C-P'],
    exp: 'A–P: HIV (retrowirus) ma jednoniciowe RNA przepisywane przez odwrotną transkryptazę na DNA, które integruje się z chromosomem jako prowirus. B–F: HIV infekuje głównie limfocyty T pomocnicze CD4+ (nie CD8+) — ich zniszczenie prowadzi do AIDS. C–P: prowirus w komórkach pamięci T może pozostawać latentny przez wiele lat, niedostępny dla leków i układu odpornościowego.',
  },

  {
    sub: 'wirusy', type: 'single', diff: 2,
    q: 'Które zdarzenie następuje JAKO PIERWSZE po wstrzyknięciu materiału genetycznego faga T4 do komórki E. coli w cyklu litycznym?',
    opts: [
      { id: 'A', text: 'Złożenie nowych cząsteczek fagowych z wyprodukowanych elementów', ok: false },
      { id: 'B', text: 'Transkrypcja wczesnych genów fagowych i synteza białek wczesnych przez mechanizm komórkowy bakterii', ok: true },
      { id: 'C', text: 'Lizis komórki bakteryjnej i uwolnienie wirionów do środowiska', ok: false },
      { id: 'D', text: 'Integracja DNA faga z chromosomem bakteryjnym jako profag', ok: false },
    ],
    ans: ['B'],
    exp: 'Cykl lityczny T4: 1) Adsorpcja do receptorów bakterii → 2) Wstrzyknięcie DNA → 3) Transkrypcja wczesnych genów fagowych (przez polimerazy RNA bakterii) → synteza białek wczesnych (nukleazy rozkładające DNA bakterii, enzymy replikacji DNA faga) → 4) Replikacja DNA faga → 5) Transkrypcja genów późnych → białka strukturalne → 6) Montaż wirionów → 7) Lizis. Integracja jako profag dotyczy cyklu lizogenicznego.',
  },

  // ══ BAKTERIE ══════════════════════════════════════════════════════════════

  {
    sub: 'bakterie', type: 'single', diff: 2,
    q: 'Która struktura lub cecha jest CHARAKTERYSTYCZNA wyłącznie dla komórki prokariotycznej i NIE występuje w komórce eukariotycznej?',
    opts: [
      { id: 'A', text: 'Rybosomy 70S (podjednostki 30S i 50S)', ok: true },
      { id: 'B', text: 'Błona komórkowa zbudowana z fosfolipidów', ok: false },
      { id: 'C', text: 'DNA jako materiał genetyczny', ok: false },
      { id: 'D', text: 'Enzymy uczestniczące w oddychaniu komórkowym', ok: false },
    ],
    ans: ['A'],
    exp: 'Prokaryoty mają rybosomy 70S (podjednostki 30S i 50S); eukaryoty — 80S (40S i 60S). Ta różnica jest podstawą selektywnego działania antybiotyków (streptomycyna, erytromycyna blokują 70S, nie wpływając na 80S komórek eukariotycznych). Błona fosfolipidowa, DNA i enzymy oddechowe są obecne u obu grup.',
  },

  {
    sub: 'bakterie', type: 'multiple', diff: 2,
    q: 'Zaznacz wszystkie cechy odróżniające komórkę bakteryjną od komórki roślinnej.',
    opts: [
      { id: 'A', text: 'Brak błony jądrowej — materiał genetyczny nie jest oddzielony od cytoplazmy', ok: true },
      { id: 'B', text: 'Obecność ściany komórkowej zbudowanej z peptydoglikanu (mureiny)', ok: true },
      { id: 'C', text: 'Zdolność do przeprowadzania fotosyntezy (u sinic)', ok: false },
      { id: 'D', text: 'Brak mitochondriów i chloroplastów jako organelli otoczonych podwójną błoną', ok: true },
    ],
    ans: ['A', 'B', 'D'],
    exp: 'A–tak: prokaryoty mają nukleoid (bez otoczki jądrowej), eukaryoty — jądro otoczone podwójną błoną. B–tak: ściana bakterii zbudowana z peptydoglikanu (mureiny); ściana roślin — z celulozy. Antybiotyki beta-laktamowe blokują syntezę peptydoglikanu. C–nie odróżnia: sinice też fotosyntetyzują (jak rośliny). D–tak: bakterie nie mają organelli błonowych — oddychanie na błonie komórkowej/mezosomalnej.',
  },

  {
    sub: 'bakterie', type: 'true_false', diff: 2,
    q: 'Oceń prawdziwość poniższych stwierdzeń dotyczących bakterii.',
    opts: [
      { id: 'A', text: 'Barwienie metodą Grama pozwala podzielić bakterie na Gram-dodatnie (gruba warstwa peptydoglikanu) i Gram-ujemne (cienka warstwa peptydoglikanu + zewnętrzna błona lipopolisacharydowa).', ok: true },
      { id: 'B', text: 'Koniugacja bakteryjna polega na przekazaniu fragmentu DNA z komórki dawcy do komórki biorcy przez bezpośredni kontakt komórek.', ok: true },
      { id: 'C', text: 'Endospory bakteryjne są formą rozmnażania wegetatywnego i zawierają kilka kopii DNA bakteryjnego.', ok: false },
    ],
    ans: ['A-P', 'B-P', 'C-F'],
    exp: 'A–P: Gram+ (np. Staphylococcus) — gruba ściana peptydoglikanu, barwi się fioletowo. Gram- (np. E. coli) — cienka ściana + zewnętrzna błona LPS, barwi się różowo (safranina). B–P: koniugacja wymaga pili płciowego i bezpośredniego kontaktu; przekazywany plazmid F lub fragment chromosomu. C–F: endospory to przetrwalniki odpornościowe (nie rozmnażanie) — jedna komórka → jedna endospora z jedną kopią DNA i minimalną ilością wody.',
  },

  // ══ PROTISTY ══════════════════════════════════════════════════════════════

  {
    sub: 'protisty', type: 'single', diff: 2,
    q: 'Plasmodium falciparum wywołuje malarię. Które zdanie prawidłowo opisuje jego cykl rozwojowy?',
    opts: [
      { id: 'A', text: 'Zarówno stadia bezpłciowe, jak i płciowe Plasmodium przebiegają wyłącznie w organizmie komara Anopheles.', ok: false },
      { id: 'B', text: 'Sporozoity wstrzykiwane przez komara infekują najpierw hepatocyty wątroby człowieka, a następnie erytrocyty.', ok: true },
      { id: 'C', text: 'Gorączka w przebiegu malarii jest wywoływana przez toksyny produkowane przez komara Anopheles.', ok: false },
      { id: 'D', text: 'Człowiek jest żywicielem ostatecznym Plasmodium, ponieważ w jego organizmie zachodzi rozmnażanie płciowe pasożyta.', ok: false },
    ],
    ans: ['B'],
    exp: 'Cykl Plasmodium: komar wstrzykuje sporozoity → migrują do wątroby i namnażają się w hepatocytach → merozoity infekują erytrocyty → cykliczne pękanie erytrocytów powoduje gorączkę (wywoływaną przez toksyny i fragmenty merozoitów). Rozmnażanie płciowe zachodzi w komarze (żywiciel ostateczny); człowiek jest żywicielem pośrednim.',
  },

  {
    sub: 'protisty', type: 'multiple', diff: 2,
    q: 'Zaznacz wszystkie cechy wspólne dla glonów eukariotycznych (alg) i roślin lądowych.',
    opts: [
      { id: 'A', text: 'Przeprowadzają oksygeniczną fotosyntezę z udziałem chlorofilu a', ok: true },
      { id: 'B', text: 'Posiadają tkanki przewodzące (ksylem i floem)', ok: false },
      { id: 'C', text: 'Mają komórki eukariotyczne z plastydem otoczonym podwójną błoną', ok: true },
      { id: 'D', text: 'Wytwarzają zarodniki lub gamety jako formy rozmnażania', ok: true },
    ],
    ans: ['A', 'C', 'D'],
    exp: 'A–tak: obie grupy mają fotosystemy I i II z chlorofilem a i wydzielają O2 z fotolizy wody. B–nie: tkanki przewodzące (ksylem, floem) mają wyłącznie rośliny naczyniowe (paprotniki + nasienne); glony i mszaki ich nie mają. C–tak: chloroplasty glonów eukariotycznych otoczone są podwójną błoną (jak u roślin). D–tak: obie grupy wytwarzają gamety i/lub zarodniki w przemiennym cyklu pokoleń.',
  },

  // ══ GRZYBY ════════════════════════════════════════════════════════════════

  {
    sub: 'grzyby', type: 'single', diff: 2,
    q: 'Które stwierdzenie poprawnie opisuje różnicę między grzybami a roślinami?',
    opts: [
      { id: 'A', text: 'Grzyby mają komórki eukariotyczne, a rośliny — prokariotyczne.', ok: false },
      { id: 'B', text: 'Grzyby są heterotrofami (odżywiają się przez absorpcję), a rośliny — autotrofami fotosyntetyzującymi.', ok: true },
      { id: 'C', text: 'Ściana komórkowa grzybów zbudowana jest z celulozy, a roślin — z chityny.', ok: false },
      { id: 'D', text: 'Grzyby przeprowadzają wyłącznie oddychanie beztlenowe, a rośliny — tlenowe.', ok: false },
    ],
    ans: ['B'],
    exp: 'Grzyby są cudzożywnymi heterotrofami absorpcyjnymi — wydzielają enzymy trawienne i wchłaniają strawione substancje organiczne. Rośliny są samożywne — produkują materię organiczną przez fotosyntezę. Ściana grzybów zbudowana jest z CHITYNY (roślin — z celulozy). Obie grupy mają komórki eukariotyczne i przeprowadzają głównie oddychanie tlenowe.',
  },

  {
    sub: 'grzyby', type: 'true_false', diff: 2,
    q: 'Oceń prawdziwość poniższych stwierdzeń dotyczących grzybów i ich roli w ekosystemie.',
    opts: [
      { id: 'A', text: 'Mikoryza jest symbiozą grzyba z korzeniami roślin, w której grzyb zwiększa powierzchnię chłonną korzenia, a roślina dostarcza grzybowi związków organicznych.', ok: true },
      { id: 'B', text: 'Porosty (lichenes) są organizmami, w których grzyb żyje w symbiozie z sinicami lub zielonymi glonami jednokomórkowymi.', ok: true },
      { id: 'C', text: 'Phytophthora infestans (zaraza ziemniaka) należy do królestwa Fungi.', ok: false },
    ],
    ans: ['A-P', 'B-P', 'C-F'],
    exp: 'A–P: mikoryzy (endo- i ektomykoryzowe) — grzyb dostarcza minerałów (P, N) zwiększając powierzchnię chłonną; roślina dostarcza cukrów fotosyntetycznych. B–P: porosty = mykobiont (grzyb, zwykle workowiec) + fotobiont (glon lub sinica). C–F: Phytophthora należy do Oomycota (lęgniowce), królestwo Chromista/Stramenopila — NIE jest prawdziwym grzybem mimo morfologicznego podobieństwa.',
  },

  {
    sub: 'grzyby', type: 'single', diff: 3,
    q: 'Drożdże Saccharomyces cerevisiae w warunkach beztlenowych przeprowadzają fermentację alkoholową. Która sekwencja poprawnie opisuje ten proces?',
    opts: [
      { id: 'A', text: 'Glukoza → pirogronian → etanol + CO2 (z regeneracją NAD+)', ok: true },
      { id: 'B', text: 'Glukoza → pirogronian → kwas mlekowy (z regeneracją NAD+)', ok: false },
      { id: 'C', text: 'Glukoza → etanol → pirogronian → CO2', ok: false },
      { id: 'D', text: 'Glukoza → pirogronian → acetylo-CoA → CO2 + H2O', ok: false },
    ],
    ans: ['A'],
    exp: 'Fermentacja alkoholowa: glikoliza → pirogronian + ATP + NADH. Dekarboksylaza pirogronianowa → aldehyd octowy + CO2. Dehydrogenaza alkoholowa (NADH→NAD+) → etanol. Regeneracja NAD+ umożliwia ciągłą glikolizę. Fermentacja mleczanowa (kwas mlekowy) zachodzi w mięśniach i u bakterii kwasu mlekowego. Acetylo-CoA i cykl Krebsa to szlak tlenowy.',
  },

  // ══ BEZKREGOWCE ═══════════════════════════════════════════════════════════

  {
    sub: 'bezkregowce', type: 'single', diff: 2,
    q: 'Wskaż cechę charakterystyczną wyłącznie dla stawonogów (Arthropoda), odróżniającą je od innych bezkręgowców.',
    opts: [
      { id: 'A', text: 'Obecność symetrii dwubocznej', ok: false },
      { id: 'B', text: 'Chitynowy oskórek (egzoszkielet) i członowane odnóża', ok: true },
      { id: 'C', text: 'Brak jamy ciała (acoelomat)', ok: false },
      { id: 'D', text: 'Rozmnażanie płciowe z zapłodnieniem zewnętrznym', ok: false },
    ],
    ans: ['B'],
    exp: 'Stawonogi wyróżnia połączenie: 1) chitynowy egzoszkielet wymagający linienia (ekdyzja) podczas wzrostu oraz 2) stawowych, członowanych odnóży. Symetria dwuboczna jest cechą wielu bezkręgowców (pierścienice, mięczaki). Brak jamy ciała cechuje płazińce (wirki). Zapłodnienie zewnętrzne nie jest cechą wyłączną stawonogów.',
  },

  {
    sub: 'bezkregowce', type: 'true_false', diff: 2,
    q: 'Oceń prawdziwość poniższych stwierdzeń dotyczących budowy i fizjologii owadów.',
    opts: [
      { id: 'A', text: 'Układ oddechowy owadów oparty jest na sieci tchawek — cienkich rurek dostarczających O2 bezpośrednio do tkanek, z pominięciem układu krwionośnego.', ok: true },
      { id: 'B', text: 'Owady posiadają zamknięty układ krwionośny z sercem pompującym hemolimfę przez naczynia krwionośne do wszystkich narządów.', ok: false },
      { id: 'C', text: 'Metamorfoza zupełna (holometabolia) owadów obejmuje stadia: jajo, larwa, poczwarka i imago.', ok: true },
    ],
    ans: ['A-P', 'B-F', 'C-P'],
    exp: 'A–P: tchawki (tracheae) otwierają się przetchlinkami na powierzchni ciała; gaz wymieniany bezpośrednio z tkankami — układ krwionośny nie przenosi O2 u owadów. B–F: owady mają OTWARTY układ krwionośny — serce rurkowate tłoczy hemolimfę do hemocelu (jamy ciała), gdzie kąpie narządy. C–P: holometabolia (motyle, chrząszcze, muchy, błonkówki) — larwa i imago mają inną morfologię, niszę ekologiczną i tryb życia.',
  },

  // ══ ROŚLINY ═══════════════════════════════════════════════════════════════

  {
    sub: 'rosliny', type: 'single', diff: 2,
    q: 'Wskaż prawidłową kolejność grup roślin odzwierciedlającą ewolucyjne zdobywanie przystosowań do życia na lądzie (od najmniej do najbardziej zaawansowanej):',
    opts: [
      { id: 'A', text: 'Mszaki → Paprocie → Nagonasienne → Okrytonasienne', ok: true },
      { id: 'B', text: 'Paprocie → Mszaki → Nagonasienne → Okrytonasienne', ok: false },
      { id: 'C', text: 'Mszaki → Nagonasienne → Paprocie → Okrytonasienne', ok: false },
      { id: 'D', text: 'Okrytonasienne → Nagonasienne → Paprocie → Mszaki', ok: false },
    ],
    ans: ['A'],
    exp: 'Ewolucja roślin lądowych: Mszaki — brak tkanek przewodzących, dominujący gametofit, wymaga wody do zapłodnienia. Paprocie (i widłaki) — pierwsze rośliny naczyniowe (ksylem, floem), dominujący sporofit, ale nadal wymagają wody do zapłodnienia. Nagonasienne — nasiona, pyłek przenoszony przez wiatr (brak potrzeby wody). Okrytonasienne — kwiat, owocnia, podwójne zapłodnienie, najbardziej zróżnicowane.',
  },

  {
    sub: 'rosliny', type: 'true_false', diff: 2,
    q: 'Oceń prawdziwość poniższych stwierdzeń dotyczących rozmnażania roślin nasiennych.',
    opts: [
      { id: 'A', text: 'U okrytonasiennych podwójne zapłodnienie polega na połączeniu jednego plemnika z komórką jajową (zygota 2n) i drugiego z jądrem centralnym (bielmowiec 3n).', ok: true },
      { id: 'B', text: 'U nagonasiennych nasiono jest osłonięte owocnią, co odróżnia je od okrytonasiennych.', ok: false },
      { id: 'C', text: 'Pyłek roślin okrytonasiennych kiełkując wytwarza łagiewkę pyłkową, która transportuje gamety męskie do woreczka zalążkowego.', ok: true },
    ],
    ans: ['A-P', 'B-F', 'C-P'],
    exp: 'A–P: podwójne zapłodnienie (cecha wyłączna okrytonasiennych) — jeden plemnik + jajowa → zygota 2n → zarodek; drugi + jądro centralne 2n → bielmowiec 3n → tkanka odżywcza nasienia. B–F: to OKRYTONASIENNE mają owocnię (przekształcona ściana zalążni); nagonasienne mają nasiona nagie (brak owocni, leżą na łuskach szyszki). C–P: łagiewka pyłkowa przerasta szyjkę słupka i zalążnię, uwalniając dwa gamety bezpośrednio w woreczku zalążkowym.',
  },

  {
    sub: 'rosliny', type: 'single', diff: 2,
    q: 'Na podstawie opisu wskaż prawidłową odpowiedź:\nBadacz obserwuje roślinę bez korzeni i tkanek przewodzących, której dominującym pokoleniem jest gametofit (n). Sporofit (2n) jest z nim trwale połączony i od niego zależny. Do której grupy należy ta roślina?',
    opts: [
      { id: 'A', text: 'Paprocie (Pteridophyta)', ok: false },
      { id: 'B', text: 'Mszaki (Bryophyta)', ok: true },
      { id: 'C', text: 'Nagonasienne (Gymnospermae)', ok: false },
      { id: 'D', text: 'Widłaki (Lycopodiophyta)', ok: false },
    ],
    ans: ['B'],
    exp: 'Mszaki (Bryophyta — mchy, wątrobowce, glewiki) charakteryzuje: brak prawdziwych korzeni (ryzoidy zamiast nich), brak tkanek przewodzących, dominujący samożywny gametofit (n — to "zielona roślinka"), sporofit (2n) wyrastający z gametofitu i od niego zależny energetycznie. Paprocie i widłaki mają tkanki przewodzące i dominujący sporofit. Nagonasienne to rośliny nasienne z dobrze rozwiniętymi korzeniami.',
  },

]

async function main() {
  const rows = QUESTIONS.map(q => ({
    topic_id: TOPIC_ID,
    subtopic_id: SUB[q.sub],
    question_type: q.type,
    difficulty: q.diff,
    verified: true,
    question_text: q.q,
    options: q.opts.map(o => ({ id: o.id, text: o.text, is_correct: o.ok })),
    correct_answer: q.ans,
    explanation: q.exp,
    image_url: null,
  }))

  console.log(`Inserting ${rows.length} questions for Roznorodnosc organizmow...`)
  for (const row of rows) {
    const res = await supabaseRequest('POST', 'questions', row)
    if (res.status === 201) {
      console.log(`  ok [${row.question_type}] ${row.question_text.slice(0, 60).replace(/\n/g, ' ')}`)
    } else {
      console.error(`  FAIL (${res.status}):`, JSON.stringify(res.body).slice(0, 200))
    }
  }
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
