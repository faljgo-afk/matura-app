// Seed batch 6/6 — Ekologia
// Ochrona przyrody (5) — finał tematu Ekologia → łącznie 55 pytań

const https = require('https')
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const TOPIC = '27daaa5f-30d8-4519-a525-4b136cad02f2'

const S = {
  ochrona: '1ec41dca-9d4b-4d3f-9bb0-7890b8d6354a',
}

const questions = [

  {
    topic_id: TOPIC, subtopic_id: S.ochrona, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń POPRAWNIE opisują ochronę gatunkową i narzędzia stosowane w ochronie różnorodności biologicznej? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Ex situ (poza naturalnym siedliskiem): ogrody zoologiczne, ogrody botaniczne, banki nasion (np. Svalbard Global Seed Vault — magazynuje ponad 1,3 mln próbek nasion z całego świata w wiecznej zmarzlinie Spitsbergenu), banki genów; uzupełnienie dla ochrony in situ', is_correct: true },
      { id: 'B', text: 'In situ (w naturalnym siedlisku): parki narodowe, rezerwaty, korytarze ekologiczne łączące fragmenty siedlisk; pozwala populacjom ewoluować i zachować procesy ekologiczne; uważa się ją za priorytetową formę ochrony przed ex situ', is_correct: true },
      { id: 'C', text: 'Czerwona Lista IUCN klasyfikuje gatunki wg. kategorii: EX (wymarłe), EW (wymarłe w naturze), CR (krytycznie zagrożone), EN (zagrożone), VU (narażone), NT (bliskie zagrożenia), LC (niezagrożone), DD (niewystarczające dane), NE (nieewaluowane); kategorie CR/EN/VU tworzą listę gatunków zagrożonych', is_correct: true },
      { id: 'D', text: 'Reintrodukcja (przywracanie gatunku do historycznego zasięgu) zawsze kończy się sukcesem; żaden gatunek reintrodukowany nie wyginął ponownie; przykłady: żubr w Polsce — w 100% sukces bez żadnych śmiertelności w reintrodukowanych populacjach', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) EX SITU: Svalbard Global Seed Vault (Norwegia, 2008): 78°N, –18°C; ponad 1,4 mln próbek z 6 200 gatunków roślin uprawnych; "noahs ark" dla nasion; ogrody botaniczne: Kew Gardens (UK) — Millennium Seed Bank: >2,5 mld nasion 40 000 gatunków; ogrody zoo: EEP (European Endangered species Programme): żubr (Bison bonasus), ryś iberyj. (Lynx pardinus — 400 szt. w ZOO 2003→2 000 szt. w nat. 2023). (B) IN SITU: priorytet wg. CBD (Konwencja o różnorodności biologicznej, Rio 1992, art. 8); ~17% lądu chronione (cel Aichi B11: 17% do 2020 → Kunming-Montreal 2022: cel 30×30 — 30% lądu i oceanu do 2030); korytarze: Zielony Pas Europy (dawna żelazna kurtyna), Korytarz Karpacki. (C) IUCN Red List (1964–; aktualna 2023.1: >157 000 ocenionych; >42 000 zagrożonych): CR = ryzyko wyginięcia >50% w 10 lat/3 pokolenia; EN = >20% w 20 lat; VU = >10% w 100 lat; w Polsce: CR: głuszec (Tetrao urogallus: <20 szt. w Bieszczadach); drop (Otis tarda): od 2000 wyginął lęgowo; żółw błotny: EN. (D) fałsz: reintrodukcja jest trudna i nie zawsze udana; żubr: 1952–1963 — pierwsza reintrodukcja Białowieża; SUKCES — 7 żubrów w 1952 → dziś >6 200 na świecie, >1 600 wolnych w Europie; ale: ≠ "zero śmiertelności" — wiele osobników ginęło (kłusownictwo, choroby, konflikty z ludźmi); przykłady porażek: gepardy reintrodukowane w Indiach (Namibia→India 2022): wiele śmiertelności w pierwszych miesiącach.',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ochrona, question_type: 'single',
    question_text: 'Fragmentacja siedlisk jest jednym z kluczowych zagrożeń dla różnorodności biologicznej. Który mechanizm POPRAWNIE wyjaśnia, dlaczego małe, izolowane płaty siedlisk są bardziej podatne na utratę gatunków niż duże, połączone obszary?',
    options: [
      { id: 'A', text: 'Teoria biogeografii wysp (MacArthur i Wilson 1967): mniejsza "wyspa" siedliska = niższy wskaźnik imigracji gatunków + wyższy wskaźnik lokalnego wymierania → mniej gatunków w stanie równowagi; izolacja od innych płatów ogranicza rekolonizację po lokalnym wyginięciu; efekt brzegowy zwiększa proporcję siedliska skrajnego (zaburzonego) do wnętrza', is_correct: true },
      { id: 'B', text: 'Mniejsze płaty siedlisk mają wyższe pH gleby i wyższą bioróżnorodność gleby, co paradoksalnie prowadzi do wymierania gatunków roślinożernych; izolacja działa korzystnie przez eliminację drapieżników; małe fragmenty lasu mają wyższą produktywność netto przez lepsze naświetlenie', is_correct: false },
      { id: 'C', text: 'Fragmentacja siedlisk nie wpływa na różnorodność biologiczną; wyniki badań BDFFP (Biological Dynamics of Forest Fragments Project, Amazonia) wykazały, że małe fragmenty (1 ha) zachowały taką samą różnorodność jak duże (100 ha) po 30 latach; fragmentacja jest korzystna bo zwiększa łączność populacji', is_correct: false },
      { id: 'D', text: 'Efekt krawędzi (edge effect) jest korzystny dla wszystkich gatunków: na granicy lasu i pola zwiększa się bioróżnorodność przez superpozycję dwóch typów siedlisk; gatunki wnętrza lasu (interior species) są adaptowane do życia na krawędzi i odnoszą korzyść z fragmentacji', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'TEORIA BIOGEOGRAFII WYSP (MacArthur & Wilson 1967): model S* (równowagowa liczba gatunków) = I/(I+E) × S_total; I = wskaźnik imigracji (nowych gat./czas); E = wskaźnik wymierania; I maleje z rosnącą odległością wyspy od lądu stałego; E maleje z rosnącą powierzchnią wyspy (S ~ A^z, z ≈ 0,25–0,30 w loglog); ZASTOSOWANIE DO FRAGMENTÓW: małe płaty lasu: mała powierzchnia → więcej wyginięć (małe populacje → stochastyczność demograficzna → Allee effect); izolacja → brak rekolonizacji → populacje zanikają; BDFFP (Biological Dynamics of Forest Fragments Project, 1979–dziś; Lovejoy, Bierregaard): Amazonia, Manaus; fragmenty: 1, 10, 100 ha + kontrola ciągła; wyniki: 1 ha fragmnet stracił >50% gatunków ptaków wnętrza lasu w 10 latach; 10 ha: ~25%; 100 ha: mniej; metapopulacja (Levins 1969): sieć subpopulacji połączonych migracją = trwalsza niż jedna izolowana populacja; korytarze ekologiczne: rozwiązanie fragmentacji (np. korytarz dzikiej przyrody Yellowstone to Yukon Y2Y); EFEKT KRAWĘDZI: niekorzystny dla gatunków wnętrza lasu (forest interior species): Troglodytes troglodytes, Ficedula hypoleuca; krawędź: więcej drapieżników (wrona, sroka, kuna), inwazja gatunków synantropijnych, zmiana mikroklimatu (wiatr, suszenie, słońce).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ochrona, question_type: 'true_false',
    question_text: 'Oceń prawdziwość poniższych stwierdzeń dotyczących gatunków inwazyjnych i ich wpływu na różnorodność biologiczną:',
    options: [
      { id: 'A', text: 'Niecierpek gruczołowaty (Impatiens glandulifera) i nawłoć późna (Solidago gigantea) to ekspansywne gatunki obcego pochodzenia w Polsce, które tworzą gęste zarośla monokulturowe, konkurując z rodzimymi roślinami; ich usuwanie (np. przez koszenie przed owocowaniem) jest działaniem ochrony czynnej.', is_correct: true },
      { id: 'B', text: 'Szczur śniady (Rattus rattus) i norka amerykańska (Neovison vison) zostały introdukowane do Europy i są odpowiedzialne za zmniejszenie populacji rodzimych gatunków: szczur na wyspach eliminuje ptaki morskie (grądzice, rybitwy) atakując gniazda; norka wyparła europejską norkę (Mustela lutreola) z większości zasięgu.', is_correct: true },
      { id: 'C', text: 'Introdukcja gatunków obcych zawsze wzbogaca ekosystemy i zwiększa bioróżnorodność; żaden gatunek obcy nie jest w stanie wyeliminować gatunków rodzimych; przykład: karp wprowadzony do europejskich jezior zwiększył różnorodność ryb bez negatywnego wpływu na inne gatunki.', is_correct: false },
    ],
    correct_answer: ['A', 'B'],
    explanation: 'A — Prawda: GATUNKI INWAZYJNE W POLSCE: Impatiens glandulifera (niecierpek gruczołowaty, orig. Himalaje): introdukowany XIX w. jako roślina ogrodowa; nad rzekami i w lasach łęgowych → monokultury; produkuje do 800 nasion/roślinę, rozprzestrzenia przez hydrochorię (rzeki); konkuruje z Petasites, Filipendula, Urtica; Solidago canadensis / S. gigantea (nawłocie): orig. Ameryka Pn; stepowiska, łąki, skraje lasów → monokultury; metody zwalczania: koszenie 2×/rok przed owocowaniem przez min. 3–5 lat; usuwanie mechaniczne korzeni. B — Prawda: Rattus rattus (szczur czarny, śniady): na wyspach: Hawaje (Hawaiian archipelago): drapieżnik gniazdowy → wytępił wiele endemicznych ptaków nielotnych (Drepanididae); Nowa Zelandia: wraz z łasicą i oposem → 51 gatunków ptaków wyginęło po zasiedleniu Maorysów i Europejczyków; Mustela lutreola (norka europejska): Critically Endangered IUCN; Neovison vison (norka amerykańska) = największy czynnik zaniku; dziś: norka europejska tylko w Rumunii (rzeka Dunaj), Białorusi, Azerbejdżanie, Hiszp. (Navarra); Polska: norka europejska prawdopodobnie wyginęła lęgowo. C — Fałsz: INWAZJE = jedna z 5 głównych przyczyn utraty bioróżnorodności (IPBES 2019); odpowiadają za ~60% wymierań od 1500 (Bellard 2016); KARP (Cyprinus carpio, orig. Azja): introdukowany do Europy w średniowieczu → rycie dna (bioturbacja) → wzrost zawiesiny → redukcja roślinności podwodnej → zmniejszenie bioróżnorodności; w Australii karp = "carp plague" w rzekach Murray-Darling; NIE "zwiększa różnorodności".',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ochrona, question_type: 'multiple',
    question_text: 'Które z poniższych stwierdzeń dotyczących wartości różnorodności biologicznej i argumentów za jej ochroną są POPRAWNE? (zaznacz wszystkie prawdziwe)',
    options: [
      { id: 'A', text: 'Wartość utylitarna (użytkowa) bioróżnorodności: żywność (tysiące gatunków uprawnych — ale 3 gatunki = ryż, pszenica, kukurydza — dostarczają 60% kalorii ludzkości), leki (aspiryna z kory wierzby, morfina z maku, antybiotyki z grzybów, paklitaksel z cisu), surowce (drewno, włókna, kauczuk)', is_correct: true },
      { id: 'B', text: 'Usługi ekosystemowe (ecosystem services): produkcja tlenu i wiązanie CO₂ (regulacja klimatu), oczyszczanie wody (filtry biologiczne mokradeł), zapylanie upraw (pszczoły i dzikie zapylacze — 75% roślin uprawnych wymaga zapylenia), bioróżnorodność gleby (rozkład materii organicznej przez grzyby, bakterie, dżdżownice)', is_correct: true },
      { id: 'C', text: 'Wartość przyrodzona (inherent/intrinsic value): bioróżnorodność ma wartość niezależnie od użyteczności dla człowieka; argument etyczny i filozoficzny (np. "deep ecology" Arne Næss); nie wymaga uzasadnienia ekonomicznego; gatunki mają prawo do istnienia niezależnie od ich znaczenia dla człowieka', is_correct: true },
      { id: 'D', text: 'Redukcja bioróżnorodności nie ma żadnych konsekwencji dla usług ekosystemowych; ekosystemy z jednym gatunkiem są bardziej odporne niż wielogatunkowe (zasada "one species is enough"); monokultury rolnicze na całej planecie byłyby najefektywniejszym rozwiązaniem żywieniowym i nie zagrażałyby stabilności ekosystemów', is_correct: false },
    ],
    correct_answer: ['A', 'B', 'C'],
    explanation: '(A) WARTOŚĆ UTYLITARNA: ŻYWNOŚĆ: 10 000+ gatunków roślin było kiedyś używanych; 150 uprawianych; 12 gatunków = 75% kalorii; rice, wheat, maize = ~60%; "genetyczne rezerwy" dzikich krewnych roślin uprawnych — niezbędne dla hodowli odmian odpornych (Solanum bulbocastanum → odporność ziemniaków na Phytophthora); LEKI: ~50% leków syntetycznych bazuje na związkach naturalnych; Taxol (paklitaksel): Taxus brevifolia (cis krótkolistny, Pacyfik); vincristyna/vinblastyna: Catharanthus roseus (barwinek różowy, Madagaskar) = leki przeciwnowotworowe; kaptopril: Bothrops jararaca (grzechotnik brazylijski); zikonotyd: Conus magus (ślimak stożkowy). (B) USŁUGI EKOSYSTEMOWE (Millennium Ecosystem Assessment 2005): zaopatrujące (food, water, genetic resources); regulujące (klimat, powodzie, oczyszczanie wody, choroby); kulturowe (rekreacja, estetyka, duchowość); wspomagające (NPP, cykl składników); ZAPYLANIE: wartość globalna: >235 mld USD/rok (Gallai 2009); CCD (Colony Collapse Disorder u Apis mellifera): 30% kolonii traci USA rocznie; pollinators decline: pestycydy (neonikotynoides: imidakloprid), Varroa destructor, utrata siedlisk. (C) WARTOŚĆ PRZYRODZONA: deep ecology: Næss 1973 — "biocentric equality"; gatunek ma wartość niezależnie od jego przydatności dla Homo sapiens; konwencja CBD 1992 preambule: "inherent value"; etyka środowiskowa (Rolston, Leopold "Land Ethic"): "A thing is right when it tends to preserve the integrity, stability and beauty of the biotic community." (D) fałsz: RELACJA RÓŻNORODNOŚĆ–USŁUGI: Tilman (1994, Cedar Creek): więcej gatunków traw → wyższa biomasa, stabilność, użytkowanie N; Loreau (2001, BioMERGE): ~50% usług ekosystemowych wrażliwych na utratę gatunków; monokultury: PODATNE na szkodniki (Irish potato famine 1845: monokultura Lumper → Phytophthora infestans → klęska głodu → 1 mln śmierci).',
    difficulty: 2, verified: true, source: 'własne, wzorowane na CKE',
  },
  {
    topic_id: TOPIC, subtopic_id: S.ochrona, question_type: 'single',
    question_text: 'Zmiany klimatu wpływają na rozmieszczenie gatunków i funkcjonowanie ekosystemów. Które zjawisko POPRAWNIE ilustruje ekologiczną odpowiedź na ocieplenie klimatu, udokumentowaną empirycznie?',
    options: [
      { id: 'A', text: 'Przesunięcie zasięgów gatunków ku biegunowi i ku wyżej położonym terenom: np. rośliny alpejskie przesuwają się w górę o ~1–4 m/rok (badania Alps/Pyrinees); ptaki lęgowe (np. brodziec leśny Tringa ochropus) przesunęły zasięg na północ o 50–500 km w ciągu 30 lat; ichtiofauna morska (np. atlantycki makrela) migruje na północ', is_correct: true },
      { id: 'B', text: 'Zmiany klimatu powodują synchronizację fenologiczną: wylęg gąsienic dębowych (Operophtera brumata) i okres lęgowy sikor bogatek (Parus major) idealnie się zsynchronizowały, przez co lęgi ptaków są o 30% bardziej skuteczne niż 50 lat temu; ocieplenie klimatu poprawiło sukces lęgowy wszystkich ptaków leśnych w Polsce', is_correct: false },
      { id: 'C', text: 'Ocieplenie klimatu prowadzi do wydłużenia sezonu wegetacyjnego roślin, co całkowicie eliminuje konkurencję między roślinami; rośliny tropikalne szybko zastąpiły rośliny strefy umiarkowanej w całej Europie; w Polsce od 2010 roku dominują palmy, bananowce i kaktusy jako roślinność naturalna', is_correct: false },
      { id: 'D', text: 'Bielenie korali (coral bleaching) jest spowodowane zbyt niską temperaturą wody; korale bielą się wyłącznie w zimnych wodach polarnych; globalne ocieplenie jest korzystne dla raf koralowych, bo cieplejsza woda przyspiesza wzrost korali i zwiększa bioróżnorodność raf', is_correct: false },
    ],
    correct_answer: ['A'],
    explanation: 'ODPOWIEDŹ EKOSYSTEMÓW NA ZMIANY KLIMATU (empirycznie udokumentowane): (1) PRZESUNIĘCIA ZASIĘGÓW: upward shift (góry): Pauli i in. (2012) — w Alps/Pyrinees: 2/3 gatunków roślin alpejskich przesunęło się o śr. 2,9 m w górę w dekadach; poleward shift (biegun): Parmesan & Yohe (2003), Science: >1700 gatunków → 62% przesunęło zasięg ku biegunowi lub w górę; śr. 6,1 km/dekadę ku biegunowi; makrela atlantycka (Scomber scombrus) w Arktyce; krewetka pandalus w Morzu Norweskim. (2) ZMIANA FENOLOGII: wcześniejsze kwitnienie, wylęgi; MISMATCH (desynchronizacja): sikor bogatka (Parus major) — Visser i in. 1998: wylęg gąsienic dębowych przyspiesza szybciej niż wylęg kurcząt u sikor → LUKI FENOLOGICZNA: ptaki wylęgają się DEPOIS szczytu gąsienic → mniej pokarmu → gorszy sukces lęgowy → NIE synchronizacja, lecz DESynchronizacja! (3) BIELENIE KORALI: spowodowane CIEPŁĄ WODĄ (>1–2°C powyżej max. letniej temperatury): utrata symbiotycznych zooxantelli (Symbiodinium); GBR (Great Barrier Reef, Australia): 2016–2022: masowe bielenia; 2022: 91% raf dotkniętych bieleniem; IPCC AR6: przy +1,5°C → 70–90% raf zaginie; +2°C → >99% zaginie.',
    difficulty: 3, verified: true, source: 'własne, wzorowane na CKE',
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
  console.log(`Seeding batch 6 (${questions.length} questions) — FINAL batch Ekologia...`)
  for (const q of questions) {
    const { status, body } = await post(q)
    const ok = status === 201 || status === 204
    if (!ok) console.log('ERR', status, body.slice(0, 200))
    else console.log('OK', `[${q.question_type}]`, q.question_text.slice(0, 60).replace(/\n/g, ' '))
  }
  console.log('Done. Ekologia complete: 55/55 questions.')
}
main().catch(err => { console.error(err); process.exit(1) })
