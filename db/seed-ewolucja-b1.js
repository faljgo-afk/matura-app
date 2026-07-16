// Seed — Ewolucja: 3 questions
// Dobór naturalny (1) + Specjacja (1) + Ewolucja człowieka (1)

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '425b03ca-900e-482a-8ca2-7b2d7de4beab'

const S = {
  dobor:    '60c54d99-610e-4665-bd0f-a0a817bb3293',
  specjacja:'840e965f-efa5-4f77-9ee1-7e79f65062f8',
  czlowiek: '1b3293cb-2932-4bc0-aea1-c946b80d238d',
}

const questions = [

  {
    topic_id: TOPIC, subtopic_id: S.dobor, question_type: 'single',
    question_text: 'W populacji ćmy brzozowej (Biston betularia) przed industrializacją dominowały osobniki jasne, a po uprzemysłowieniu — ciemne (forma carbonaria). Które stwierdzenie POPRAWNIE wyjaśnia ten mechanizm i klasyfikuje typ doboru?',
    options: [
      { id: 'A', text: 'MELANIZM PRZEMYSŁOWY — MECHANIZM I TYP DOBORU: STAN PRZED INDUSTRIALIZACJĄ: jasne korony drzew pokryte porostami → jasne ćmy (typica) = dobrze skryte przed drapieżnikami (ptakami) → ↑przeżywalność jasnych; ciemne (carbonaria) = widoczne → ↓przeżywalność; STAN PO INDUSTRIALIZACJI: zanieczyszczenie SO₂ → obumarcie porostów + osadzenie sadzy na korze → ciemna kora → ciemne ćmy (carbonaria) = skryte → ↑przeżywalność ciemnych; jasne = widoczne → ↓przeżywalność; GENETYKA: carbonaria = allel dominujący (C) na jednym locus (gen cortex, chromatyna) → selekcja faworyzuje allel C w środowisku przemysłowym; TYP DOBORU: DOBÓR KIERUNKOWY (directional selection) — przesuwa średnią wartość cechy (barwę) w jednym kierunku; po wprowadzeniu Ustawy o czystym powietrzu (lata 50.–60. XX w., UK) → powrót porostów → odwrócenie selekcji → znów przewaga typica', is_correct: true },
      { id: 'B', text: 'Melanizm przemysłowy to przykład DOBORU STABILIZUJĄCEGO (stabilizing selection): eliminuje skrajne fenotypy (zarówno bardzo jasne, jak i bardzo ciemne) i faworyzuje pośrednie (szare); allel carbonaria jest recesywny wobec allelu jasnego (typica); po industrializacji proporcja jasnych ćm WZROSŁA, bo sadza maskuje ciemne osobniki; TYP DOBORU w tej sytuacji to dobór ROZRYWAJĄCY (disruptive): faworyzuje oba ekstremy (jasne + ciemne) jednocześnie', is_correct: false },
      { id: 'C', text: 'DOBÓR PŁCIOWY (sexual selection) jest głównym mechanizmem melanizmu przemysłowego: samice preferują ciemniejszych samców niezależnie od środowiska; barwa ćmy brzozowej jest cechą wielogenową (poligeniczną) bez dominacji; ciemna forma carbonaria nie ma związku z genem cortex; selekcja na ciemną barwę oznacza, że dobór STABILIZUJĄCY faworyzuje pośredni odcień szary; powrót porostów nie ma wpływu na częstość alleli', is_correct: false },
      { id: 'D', text: 'Ćma brzozowa jest przykładem doboru ROZRYWAJĄCEGO (disruptive): środowisko przemysłowe faworyzuje równocześnie jasne i ciemne, eliminując pośrednie; carbonaria to allel recesywny; przeżywalność jasnych ćm NIE zmienia się po industrializacji — zmienia się tylko ich widoczność dla człowieka (nie dla drapieżników); melanizm przemysłowy nie jest uważany za ewolucję, lecz za aklimatyzację fizjologiczną', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'TYPY DOBORU NATURALNEGO — PORÓWNANIE: (1) DOBÓR KIERUNKOWY (directional): faworyzuje jeden kraniec rozkładu cechy → przesuwa średnią; przykłady: melanizm przemysłowy + oporność na antybiotyki + dziób zięby Darwina po suszy (↑grube ziarna → ↑ptaki z grubymi dziobami); (2) DOBÓR STABILIZUJĄCY (stabilizing): eliminuje skrajne fenotypy; faworyzuje średnią wartość; przykład: masa urodzeniowa człowieka (za mała → ↑mortalność, za duża → powikłania porodu → optimum ~ 3,5 kg); zmniejsza wariancję cechy; (3) DOBÓR ROZRYWAJĄCY / DYWERSYFIKUJĄCY (disruptive): faworyzuje oba ekstremy; eliminuje pośrednie; przykład: zięby ziarnojady z małymi lub dużymi dziobami przy dwóch typach nasion; może prowadzić do SYMPATYCZNEJ SPECJACJI; zwiększa wariancję cechy; DOBÓR PŁCIOWY (sexual selection): (a) intraseksualny: rywalizacja samców (jelenie: walka porożem) → lepsze geny → wybór samicy; (b) interseksualny: wybór przez samice (paw: ogon) → "sexy son hypothesis" + "good genes" + "runaway selection" (Fishera); BERNSTEIN\'S PROOF: allel carbonaria na chromosomie 17; gen cortex: reguluje wzorzec skrzydeł u Lepidoptera; NATURAL EXPERIMENT: Kettlewell (1955) — bezpośrednia weryfikacja przez znacznikowanie i odłów; późniejsza krytyka (Majerus) + replications confirmed original conclusion.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  {
    topic_id: TOPIC, subtopic_id: S.specjacja, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących mechanizmów specjacji:',
    options: [
      { id: 'A', text: 'SPECJACJA ALLOPATRYCZNA (allopatric speciation): DEFINICJA: populacje rozdzielone barierą geograficzną (góry, morze, rzeka, pustynna) → ↓przepływ genów → niezależna ewolucja (mutacje + dryf + selekcja) → akumulacja różnic genetycznych → izolacja reprodukcyjna; PRZYKŁADY: wiewiórki po obu stronach Wielkiego Kanionu (Kaibab vs Abert\'s squirrel); zięby Darwina na różnych wyspach Galapagos (14 gatunków z jednego przodka); karaluchy na obu stronach Kanału Panamskiego; POLIPLOIDIA: allopoliploidia = specjacja sympatryczna (w tym samym miejscu) bez bariery geograficznej; np. pszenica heksaploidalna (6n = AABBDD): hybrydyzacja Triticum urartu (AA) × Aegilops speltoides (BB) → Triticum turgidum (4n, AABB) × Aegilops tauschii (DD) → Triticum aestivum (6n)', is_correct: true },
      { id: 'B', text: 'IZOLACJA REPRODUKCYJNA — BARIERY: PREZYGOTYCZNE (zapobiegają zapłodnieniu): (1) IZOLACJA SIEDLISKOWA (habitat): różne nisze / czas aktywności; (2) SEZONOWA / CZASOWA: różne pory rozrodu (żaby Rana pipiens: populacje wschodnie i zachodnie — różne daty godowe); (3) BEHAWIORALNA: różne sygnały (pieśni, feromony, tańce godowe); (4) MECHANICZNA: inkompatybilność genitaliów / kwiatów / pyłkowodów; (5) GAMETYCZNA: ↓zdolność zapłodnienia między gatunkami; POSTZYGOTYCZNE (po zapłodnieniu): (1) ŻYWOTNOŚĆ HYBRYD (hybrid inviability): embrion nie przeżywa (np. liść hybrydowy Drosophila); (2) STERYLNOŚĆ HYBRYD: muł (koń × osioł): 2n = 63, brak koniugacji chromosomów → sterylny; (3) ROZPAD HYBRYD: hybryda rodzi potomstwo niezdolne do przeżycia', is_correct: true },
      { id: 'C', text: 'SPECJACJA SYMPATRYCZNA (sympatric speciation) WYMAGA BARIERY GEOGRAFICZNEJ (błąd: specjacja sympatryczna zachodzi BEZ bariery fizycznej — w tej samej strefie geograficznej; bariera geograficzna → specjacja ALLOPATRYCZNA); muł (hybryd konia i osła) jest PŁODNY (błąd: muł jest STERYLNY — 2n = 63, nieparzysta liczba chromosomów, brak normalnej mejozy); izolacja POSTZYGOTYCZNA zapobiega powstawaniu zygoty (błąd: PREZYGOTYCZNA zapobiega zapłodnieniu; POSTZYGOTYCZNA działa PO zapłodnieniu — zmniejsza żywotność/płodność hybryd); poliploidia jest typowym przykładem specjacji ALLOPATRYCZNEJ (błąd: SYMPATRYCZNEJ)', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'SPECJACJA SYMPATRYCZNA — MECHANIZMY: (1) POLIPLOIDIA: autopoliploidia (ten sam gatunek) + allopoliploidia (hybrydy między gatunkami) → bezpośrednia izolacja reprodukcyjna (poliploid × diploid → triploid, sterylny); szybka specjacja (1 pokolenie); częsta u roślin (~ 70% roślin okrytonasiennych ma poliploidalne pochodzenie); rzadka u zwierząt; (2) DOBÓR ROZRYWAJĄCY (disruptive selection) w środowisku z dwoma niszami → polimorfizm → stopniowe rozejście się populacji → specjacja sympatryczna (model Maynarda-Smitha); PRZYKŁAD: mszyca jabłkowa (Rhagoletis pomonella): pierwotnie na głogu (hawthorn) → adaptacja do jabłoni (1800s, USA) → asortative mating (kopulacja na roślinie gospodarza) → izolacja behawioralna; REINFORCEMENT (wzmocnienie): gdy dwie allopatrycznie rozdzielone populacje wtórnie się zetknęły (secondary contact) → hybrydy mają ↓fitness → dobór naturalny wzmacnia prezygotyczne bariery → ↑izolacja → KOMPLETACJA SPECJACJI; BIOLOGICZNA KONCEPCJA GATUNKU (Mayr 1942): populacje zdolne do interbreeding i produkujące płodne potomstwo → jeden gatunek; ALTERNATYWNE KONCEPCJE: filogenetyczna (clade) + ekologiczna (niche) + morfologiczna; RING SPECIES: np. mewy srebrzyste (Larus argentatus complex): populacje wokół Arktyki tworzą pierścień; sąsiednie = interfertylne; końce pierścienia = sympatryczne, ale izolowane reprodukcyjnie → ilustruje ciągłość specjacji.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },

  {
    topic_id: TOPIC, subtopic_id: S.czlowiek, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują ewolucję człowieka i jego przodków (hominidów)? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'KLUCZOWE CECHY EWOLUCJI HOMINIDÓW: DWUNOŻNOŚĆ (bipedalizm): najwcześniejsza cecha wyróżniająca linię hominidów (przed powiększeniem mózgu!); SAHELANTHROPUS TCHADENSIS (~ 7 mln lat temu, Czad): foramen magnum bardziej ku środkowi (sugeruje bipedalizm) — najstarszy potencjalny hominin; ARDIPITHECUS RAMIDUS (~ 4,4 mln lat, Etiopia): zdolność do chodzenia + chwytne stopy (brak abdukcji palca dużego); AUSTRALOPITHECUS: A. afarensis (~ 3,2–3,9 mln lat, Afar): "Lucy" (AL 288-1) — wyraźny bipedalizm (ślady w Laetoli) + mały mózg (~ 420–500 cm³) + twarz prognatatyczna; po A. afarensis: kladogeneza → A. africanus + Paranthropus + wczesny Homo', is_correct: true },
      { id: 'B', text: 'HOMO — KLUCZOWE GATUNKI I CECHY: HOMO HABILIS (~ 2,4–1,4 mln lat): mózg ~ 600–700 cm³; pierwsze narzędzia kamienne (kultura olduwajska, Oldowan: otoczaki, flaki): "człowiek zręczny"; HOMO ERECTUS (~ 1,9 mln–0,3 mln lat): mózg ~ 850–1100 cm³; kultura aszelska (Acheulean: pięściaki obustronne) + opanowanie ognia (↑Zhoukoudian) + PIERWSZE WYJŚCIE Z AFRYKI (Out of Africa I, ~ 1,8 mln lat → Azja, Europa); HOMO HEIDELBERGENSIS: "Archaic Homo sapiens"; HOMO NEANDERTHALENSIS (~ 400 000–40 000 lat): Europa + Azja Zachodnia; mózg ~ 1400–1600 cm³ (większy niż H. sapiens średnio); kultura musterska; DNA: 1–4% genomu współczesnych Europejczyków i Azjatów pochodzi od Neandertalczyków (krzyżowanie!); HOMO SAPIENS: ~ 300 000 lat temu, Afryka; DRUGIE WYJŚCIE Z AFRYKI (OoA II, ~ 70 000–50 000 lat)', is_correct: true },
      { id: 'C', text: 'Powiększenie mózgu (encefalizacja) jest PIERWSZĄ cechą wyróżniającą hominidów (przed bipedyzmem) — błąd: bipedyzm jest WCZEŚNIEJSZY (Sahelanthropus ~ 7 mln lat); Homo neanderthalensis wymarł BEZ KONTAKTU z Homo sapiens (błąd: krzyżowali się — ~ 1–4% DNA współczesnych ludzi spoza Afryki pochodzi od Neandertalczyków); Lucy (AL 288-1) należy do gatunku Homo habilis (błąd: Australopithecus afarensis); narzędzia kultury aszelskiej (pięściaki) były wytwarzane przez Homo habilis (błąd: Homo erectus; Homo habilis = Oldowan); H. sapiens opuścił Afrykę po raz pierwszy ~ 300 000 lat temu (błąd: DRUGIE wyjście ~ 70 000–50 000 lat temu; PIERWSZE wyjście to H. erectus ~ 1,8 mln lat temu)', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — BIPEDALIZM — SZCZEGÓŁY ANATOMICZNE: ZMIANY SZKIELETOWE: kość krzyżowa poszerzona + miednica skrócona/poszerzona (kolumna pionowa + poród) + kąt Q (biodro → kolano) → ↑kąt nogowy + kolano prostujące się + stopa z łukiem + foramen magnum ku środkowi (kąt potyliczny); KOSZTY BIPEDALIZMU: ból kręgosłupa + ↓szybkość vs czworonogi + węższy kanał porodowy (DILEMMA położnicze: duża głowa vs wąska miednica → poród z obróceniem główki + pomoc społeczna); KORZYŚCI: uwolnienie rąk → narzędzia + noszenie jedzenia; ↓energia na lokomocję po otwartym terenie; ŚLADY W LAETOLI (Tanzania, ~ 3,6 mln lat, Mary Leakey 1976): odciski 3 osobników A. afarensis w popiele wulkanicznym → definitywny dowód bipedyzmu przed ekspansją Homo; B — DENISOWIANIE: odkryci 2010 (Denisowa Cave, Syberia) dzięki ANCIENT DNA bez pełnych kości; hybrydy: "Denny" (13-letnia dziewczynka, matka: Neandertalczykowska, ojciec: Denisowianin); 4–6% DNA współczesnych Melanezyjczyków + Aborygenów australijskich pochodzi od Denisowian; MULTIREGIONAL vs OUT-OF-AFRICA: Out-of-Africa (replacement): H. sapiens z Afryki → zastąpił innych; dane mitochond. + Y-chromo. + autosomal → WYJŚCIE Z AFRYKI z domieszką (admixture) ~ 1–4%; NEANDERTHAL ADMIXTURE: CHRCH 1q21.1 region + TLR1/6/10 (immune genes) + HLA alleles → introgression; negatywne: niektóre allele Neandertalczyka ↑ryzyko COVID-19 (SLC6A20 locus, Pääbo 2020).',
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
  console.log(`Seeding Ewolucja (${questions.length} questions)...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done.')
}
main().catch(err => { console.error(err); process.exit(1) })
