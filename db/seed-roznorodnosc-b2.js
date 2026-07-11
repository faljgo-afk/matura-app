// Seed batch 2/4 — Różnorodność organizmów
// Protisty (4) + Grzyby (6)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf'

const S = {
  prot: '22562e1a-ecfb-4b00-99c1-7f66be359a7b',
  grz:  '44e9a9be-d038-4287-a1fb-819e129d63f9',
}

const questions = [

  // ── PROTISTY (4) ──────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.prot, question_type: 'single',
    question_text: 'Zielenice (Chlorophyta) uznawane są za ewolucyjnych przodków roślin lądowych, ponieważ posiadają szereg wspólnych z nimi cech. Wskaż tę, która jest NAJSILNIEJSZYM dowodem pokrewieństwa:',
    options: [
      { id: 'A', text: 'Chitynową ścianę komórkową, podobnie jak grzyby i niektóre rośliny', is_correct: false },
      { id: 'B', text: 'Chlorofil a i b, skrobię jako materiał zapasowy i celulozową ścianę komórkową — cechy wspólne z roślinami lądowymi', is_correct: true },
      { id: 'C', text: 'Zdolność do tworzenia nasion pozwalających na rozmnażanie poza środowiskiem wodnym', is_correct: false },
      { id: 'D', text: 'Obecność mitochondriów, których brak u pozostałych glonów', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Zielenice (i w szczególności ramienicowate Charophyta) dzielą z roślinami lądowymi: chlorofil a i b (barwniki fotosyntetyczne), skrobię jako produkt zapasowy fotosyntezy, celulozę w ścianie komórkowej, podobny cykl komórkowy i enzymy. Analizy molekularne (rbcL, 18S rRNA) potwierdzają, że rośliny lądowe wyewoluowały z zielenic zbliżonych do współczesnych ramienicowatych.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prot, question_type: 'single',
    question_text: 'Śluzowce (Myxomycota) różnią się od prawdziwych grzybów (Fungi) tym, że:',
    options: [
      { id: 'A', text: 'Śluzowce mają ścianę komórkową z chityny i rozmnażają się przez zarodniki, identycznie jak grzyby', is_correct: false },
      { id: 'B', text: 'W fazie wegetatywnej śluzowce tworzą plazmodium — nagą, wielojądrową masę cytoplazmy bez ściany komórkowej, zdolną do aktywnego pełzania i fagocytozy', is_correct: true },
      { id: 'C', text: 'Śluzowce są autotrofami zdolnymi do fotosyntezy, a grzyby — wyłącznie heterotrofami', is_correct: false },
      { id: 'D', text: 'Śluzowce należą do Animalia ze względu na zdolność do aktywnego ruchu i pobierania pokarmu przez fagocytozę', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Śluzowce (Myxomycota lub Mycetozoa) to protisty, nie prawdziwe grzyby. Cechą wyróżniającą jest plazmodium: bezścienna, wielojądrowa (diploidalna) masa cytoplazmy pełzająca na pokarm (bakterie, grzyby, rozpadające się drewno) przez fagocytozę — zachowanie typowe dla pełzaków. W fazie rozmnażania bezpłciowego tworzą owocniki ze zarodnikami (tu podobne do grzybów), stąd historyczna pomyłka klasyfikacyjna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prot, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują różnorodność glonów? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Glony to polifiletyczna lub parafiletyczna grupa fotosyntetyzujących protistów — nie tworzą naturalnej jednostki ewolucyjnej', is_correct: true },
      { id: 'B', text: 'Brunatnice (Phaeophyta), np. morszczyn (Fucus), są wielokomórkowymi galonami morskimi zawierającymi chlorofil a i c oraz fukoksantynę nadającą im brunatne zabarwienie', is_correct: true },
      { id: 'C', text: 'Wszystkie glony są organizmami morskimi i nie zasiedlają zbiorników słodkowodnych ani środowisk lądowych', is_correct: false },
      { id: 'D', text: 'Czerwienice (Rhodophyta) magazynują skrobię florydejską i posiadają chlorofil a i d oraz fikoerytrynę — czerwony barwnik', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Glony to polifiletyczna grupa — zielenice są bliżej roślin niż brunatnic. Brunatnice: chlorofil a+c + fukoksantyna → brązowe; wielokomórkowe; morskie (kelp forests). Czerwienice: chlorofil a+d + fikoerytryna; zdolne do życia na dużych głębokościach. Glony zasiedlają też słodkie wody (zielenice, okrzemki) i środowisko lądowe (glony glebowe, porosty). Odpowiedź C jest fałszywa.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.prot, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących protistów:',
    options: [
      { id: 'A', text: 'Chloroplasty wtórne, obecne u wielu protistów (brunatnic, euglenin, dinoflagellatów), powstały przez wtórną endosymbiozę — eukariotyczna komórka pochłonęła inny eukariotyczny autotroficzny protist posiadający chloroplast pierwotny.', is_correct: true },
      { id: 'B', text: 'Pełzaki (Amoebozoa), np. Amoeba proteus, poruszają się za pomocą wici i pobierają pokarm wyłącznie przez osmozę bez tworzenia pseudopodiów.', is_correct: false },
      { id: 'C', text: 'Orzęski (Ciliophora) posiadają dwa typy jąder: poliploidalny makronukleus regulujący metabolizm oraz diploidalny mikronukleus uczestniczący w rozmnażaniu płciowym (koniugacji).', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: endosymbioza wtórna: chloroplasty pierwotne (z sinic) → zielenice/czerwienice; chloroplasty wtórne (z pochłoniętej eukariotycznej glony) → brunatnice, eugleniny, apikompleksy etc. — ślad: dodatkowe błony wokół chloroplastu. B — Fałsz: Amoeba porusza się za pomocą nibynóżek (pseudopodiów) i pobiera pokarm przez fagocytozę (aktywne otaczanie ofiary cytoplazną), nie osmozę. C — Prawda: u orzęsków dwa jądra pełnią różne funkcje; koniugacja = wymiana mikronukleusów → rekombinacja genetyczna.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  // ── GRZYBY (6) ────────────────────────────────────────────────────────────
  {
    topic_id: TOPIC, subtopic_id: S.grz, question_type: 'single',
    question_text: 'Które stwierdzenie POPRAWNIE opisuje cechy charakterystyczne grzybów (Fungi)?',
    options: [
      { id: 'A', text: 'Grzyby są autotrofami zdolnymi do fotosyntezy dzięki chloroplastom zawierającym chlorofil a i b', is_correct: false },
      { id: 'B', text: 'Grzyby to cudzożywne eukarionty z ścianą komórkową z chityny, trawią pokarm zewnątrzkomórkowo (wydzielają enzymy na zewnątrz) i wchłaniają strawione substancje', is_correct: true },
      { id: 'C', text: 'Grzyby mają ścianę komórkową z celulozy, co łączy je ewolucyjnie z roślinami', is_correct: false },
      { id: 'D', text: 'Grzyby są prokariotami — ich komórki pozbawione są jądra komórkowego i organelli błonowych', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Grzyby (Fungi) to eukarionty (jądro, mitochondria) heterotroficzne (brak chlorofilu i fotosyntezy). Ściana komórkowa z chityny (β-1,4-N-acetyloglukosamina) — inaczej niż rośliny (celuloza) i zwierzęta (brak ściany). Strategia pokarmowa: wydzielanie enzymów litycznych na zewnątrz komórki (saprotrofia, pasożytnictwo, mutualizm) → wchłanianie aminokwasów, cukrów przez grzybnię (mycelium). Materiał zapasowy: glikogen (jak u zwierząt).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grz, question_type: 'single',
    question_text: 'Mycorrhiza (mikoryza) to symbioza, w której:',
    options: [
      { id: 'A', text: 'Grzyb pasożytuje na korzeniach rośliny, powodując ich gnicie i blokując pobieranie wody', is_correct: false },
      { id: 'B', text: 'Grzyb żyje w mutualistycznej symbiozie z korzeniami rośliny: dostarcza jej wodę i sole mineralne (szczególnie fosfor), a otrzymuje węglowodany z fotosyntezy', is_correct: true },
      { id: 'C', text: 'Roślina i grzyb żyją w komensalizmie — grzyb korzysta z korzeni jako mechanicznego oparcia, nie wpływając na roślinę', is_correct: false },
      { id: 'D', text: 'Grzyb syntetyzuje chlorofil i dostarcza roślinie produkty fotosyntezy w zamian za sole mineralne z gleby', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'Mikoryza to mutualistyczna symbioza grzyb–korzeń. Grzyb (głównie Basidiomycota i Glomeromycota) tworzy sieć strzępek zwiększającą kilkadziesiąt razy powierzchnię chłonną korzenia → ↑pobieranie wody, fosforanów (P), azotu. Roślina w zamian dostarcza do 30% produktów fotosyntezy (sacharozy). Ok. 80–90% roślin lądowych tworzy mikoryzę. Typy: ektomikoryza (strzępki oplatają korzeń z zewnątrz) i endomikoryza/AM (arbuskulo-mykorrhiza, strzępki wnikają do komórek korzenia).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grz, question_type: 'single',
    question_text: 'Etap dikaryotyczny (n+n) w cyklu życiowym grzybów jest charakterystyczny i polega na:',
    options: [
      { id: 'A', text: 'Fuzji dwóch haploidalnych jąder w jedno diploidalne — kariogamii następującej natychmiast po plazmogamii', is_correct: false },
      { id: 'B', text: 'Fazie, w której strzępki zawierają pary sparowanych, haploidalnych jąder (n+n) nieulegające fuzji, poprzedzającej kariogamię i mejozę', is_correct: true },
      { id: 'C', text: 'Wytworzeniu diploidalnych zarodników podczas mejozy w strukturach płciowych', is_correct: false },
      { id: 'D', text: 'Fazie haploidalnego gametofitu dominującego, identycznej jak u mszaków', is_correct: false },
    ],
    correct_answer: ['B'],
    explanation: 'U grzybów workowych (Ascomycota) i podstawkowych (Basidiomycota) cykl obejmuje stadium dikaryotyczne (n+n, heterokaryon): plazmogamia (fuzja cytoplazm) → dikaryont z parami jąder → kariogamia (fuzja jąder → 2n) → mejoza → haploidalne zarodniki płciowe. Dikaryont może trwać latami (np. grzyb kapeluszowy to dikaryotyczna grzybnia). Jest to unikatowa cecha grzybów — nie ma jej u roślin ani zwierząt.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grz, question_type: 'multiple',
    question_text: 'Które cechy ODRÓŻNIAJĄ grzyby (Fungi) od roślin (Plantae)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Grzyby są heterotrofami (cudzożywne), rośliny — autotrofami (fotosyntetyzują)', is_correct: true },
      { id: 'B', text: 'Grzyby mają ścianę komórkową z chityny, rośliny — z celulozy', is_correct: true },
      { id: 'C', text: 'Grzyby nie mają chloroplastów, rośliny posiadają chloroplasty zawierające chlorofil', is_correct: true },
      { id: 'D', text: 'Grzyby rozmnażają się wyłącznie bezpłciowo przez fragmentację grzybni, rośliny — wyłącznie płciowo przez nasiona', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: 'Grzyby vs rośliny: (A) heterotrofia (grzyby wydzielają enzymy → wchłaniają organiczne składniki) vs autotrofia (fotosynteza); (B) chityna vs celuloza w ścianach; (C) brak chloroplastów i chlorofilu vs obecność. (D) jest fałszywe: grzyby rozmnażają się zarówno bezpłciowo (konidia, pączkowanie, fragmentacja) jak i płciowo (askospory, bazydiospory); rośliny — obydwoma trybami (zarodniki, wegetatywne, nasiona, kwiatowe).',
    difficulty: 1, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grz, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują grupy systematyczne grzybów? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Grzyby workowe (Ascomycota) wytwarzają płciowe zarodniki (askospory) w workach (askusach); należą do nich drożdże, pleśnie i trufle', is_correct: true },
      { id: 'B', text: 'Grzyby podstawkowe (Basidiomycota) wytwarzają płciowe zarodniki (bazydiospory) na podstawkach (bazydiach); należą do nich grzyby kapeluszowe, pieczarki, hub', is_correct: true },
      { id: 'C', text: 'Lęgniowce (Oomycota), np. zaraza ziemniaczana (Phytophthora infestans), są prawdziwymi grzybami z chitynową ścianą komórkową należącymi do Fungi', is_correct: false },
      { id: 'D', text: 'Porosty (lichenes) to symbiotyczne organizmy złożone z grzyba (głównie Ascomycota) i fotosyntetyzującego partnera (glonu lub sinicy)', is_correct: true },
    ],
    correct_answer: ['A', 'B', 'D'],
    explanation: 'Ascomycota i Basidiomycota to dwie największe grupy grzybów. (C) jest fałszywe: lęgniowce (Oomycota) to PROTISTY, nie prawdziwe grzyby — mają celulozową ścianę komórkową (nie chitynową), diploidalną grzybnię i należą do grupy Stramenopiles/SAR. Phytophthora infestans (sprawca zarazy ziemniaczanej, Wielki Głód Irlandzki 1845) to lęgniowiec. Porosty: ok. 20 000 gatunków, grzyb zapewnia ochronę, glon/sinica produkuje substancje organiczne.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.grz, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących grzybów:',
    options: [
      { id: 'A', text: 'Grzyby magazynują glikogen jako materiał zapasowy — podobnie jak komórki zwierzęce, a nie skrobię jak rośliny.', is_correct: true },
      { id: 'B', text: 'Wszystkie grzyby są wielokomórkowymi organizmami tworzącymi grzybnię (mycelium) — wśród grzybów nie ma form jednokomórkowych.', is_correct: false },
      { id: 'C', text: 'Grzyby saprotroficzne (destruenci) pełnią kluczową rolę w ekosystemach jako rozkładacze materii organicznej, uczestnicząc w obiegu węgla, azotu i fosforu.', is_correct: true },
    ],
    correct_answer: ['A', 'C'],
    explanation: 'A — Prawda: materiałem zapasowym grzybów jest glikogen (polimer glukozy z rozgałęzieniami α-1,6), identyczny jak u zwierząt — cechy potwierdzające bliższe pokrewieństwo grzybów ze zwierzętami niż z roślinami. B — Fałsz: drożdże (np. Saccharomyces cerevisiae, Candida) są jednokomórkowymi grzybami rozmnażającymi się przez pączkowanie. C — Prawda: destruenci (ligninazy, celulazy, chitynazy grzybów) rozkładają najtrudniejsze polimery organiczne; bez nich materia organiczna gromadziłaby się i pierwiastki nie wracałyby do obiegu.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
]

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body), 'utf8')
    const req = https.request({
      hostname: 'gzpxvfaftvkfwpvljcrk.supabase.co',
      path: '/rest/v1/questions', method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json', Prefer: 'return=minimal',
        'Content-Length': data.length },
    }, res => { let r = ''; res.on('data', c => r += c); res.on('end', () => resolve({ status: res.statusCode, body: r })) })
    req.on('error', reject); req.write(data); req.end()
  })
}

async function main() {
  console.log(`Seeding batch 2 (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
