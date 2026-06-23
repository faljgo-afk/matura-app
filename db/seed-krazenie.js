const https = require('https');

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co';
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const TOPIC_ID = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175';

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const opts = new URL(url);
    opts.headers = { 'User-Agent': 'matura-app/1.0 (biology question seeder; faljgo@gmail.com)' };
    https.get(opts, (res) => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

async function getWikiThumb(filename, width = 700) {
  const encoded = encodeURIComponent(filename);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encoded}&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=${width}&format=json`;
  const data = await httpsGet(url);
  const page = Object.values(data.query.pages)[0];
  if (!page.imageinfo) return null;
  const thumb = page.imageinfo[0].thumburl;
  console.log('Wiki thumb (' + filename + '): ' + thumb);
  return thumb;
}

async function findWikiThumb(candidates, width = 700) {
  for (const name of candidates) {
    const thumb = await getWikiThumb(name, width);
    if (thumb) return thumb;
  }
  throw new Error('None of the candidate images found: ' + candidates.join(', '));
}

function postQuestion(q) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify([q]);
    const opts = {
      hostname: URL_HOST, path: '/rest/v1/questions', method: 'POST',
      headers: {
        'apikey': KEY, 'Authorization': 'Bearer ' + KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'Prefer': 'return=representation',
        'Content-Length': Buffer.byteLength(body, 'utf-8')
      }
    };
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => {
        if (res.statusCode === 201) resolve(JSON.parse(data)[0].id);
        else reject(new Error('HTTP ' + res.statusCode + ': ' + data.substring(0, 200)));
      });
    });
    req.on('error', reject);
    req.write(body); req.end();
  });
}

async function run() {
  // Q6 image: oxygen dissociation curve (krzywa dysocjacji oksyhemoglobiny)
  const dissociationCurveThumb = await findWikiThumb([
    'File:Hemoglobin-saturation-curve.svg',
    'File:Hemoglobin saturation curve.svg',
    'File:Oxyhemoglobin dissociation curve.png',
    'File:Oxygen-haemoglobin dissociation curve.svg',
    'File:1701 Oxygen-Hemoglobin Dissociation-a.jpg'
  ], 700);

  const questions = [
    // Q1 — Budowa i praca serca
    {
      topic_id: TOPIC_ID,
      subtopic_id: 'd42a351b-b29f-4d32-95ac-d51058726080',
      image_url: null,
      question_text: 'Wskaż prawidłową kolejność przepływu krwi przez struktury serca i naczynia podczas jednego cyklu krążenia płucnego (małego):',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Prawa komora → tętnica płucna → płuca → żyły płucne → lewy przedsionek', is_correct: true },
        { id: 'B', text: 'Lewa komora → tętnica płucna → płuca → żyła główna → prawy przedsionek', is_correct: false },
        { id: 'C', text: 'Prawy przedsionek → tętnica płucna → płuca → żyły płucne → lewa komora', is_correct: false },
        { id: 'D', text: 'Prawa komora → aorta → płuca → żyły płucne → lewy przedsionek', is_correct: false }
      ],
      correct_answer: ['A'],
      explanation: 'Krążenie małe (płucne): prawa komora wtłacza krew odtlenowaną → tętnica płucna (jedyna tętnica transportująca krew żylną) → naczynia włosowate płuc (wymiana gazowa: pobranie O₂, oddanie CO₂) → cztery żyły płucne (jedyne żyły transportujące krew utlenowaną) → lewy przedsionek → lewa komora → aorta (krążenie duże). To pozorne odwrócenie definicji: tętnice płucne niosą krew żylną, a żyły płucne — tętniczą. Krew nie przepływa przez prawy przedsionek w krążeniu małym — prawa komora zbiera krew z prawego przedsionka PRZED wpompowaniem jej do tętnicy płucnej. Aorta należy do krążenia dużego, nie małego.',
      difficulty: 2, verified: true, ai_confidence: 0.99
    },
    // Q2 — Naczynia krwionośne i krążenie
    {
      topic_id: TOPIC_ID,
      subtopic_id: 'e55fdbd3-f99d-4832-8514-5c088fe8bb0e',
      image_url: null,
      question_text: 'Tętnice i żyły różnią się budową ściany naczynia. Wskaż cechę, która POPRAWNIE odróżnia tętnice od żył:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Tętnice zawsze transportują krew utlenowaną, a żyły — wyłącznie odtlenowaną', is_correct: false },
        { id: 'B', text: 'Ściany tętnic mają grubszą warstwę mięśniówki gładkiej i tkanki sprężystej — umożliwia to wytrzymanie wysokiego ciśnienia krwi', is_correct: true },
        { id: 'C', text: 'Żyły mają grubsze ściany niż tętnice, ponieważ muszą wytrzymać wyższe ciśnienie powrotne', is_correct: false },
        { id: 'D', text: 'Tętnice posiadają zastawki kieszonkowe zapobiegające cofaniu się krwi, natomiast żyły ich nie mają', is_correct: false }
      ],
      correct_answer: ['B'],
      explanation: 'Ściana tętnicy zbudowana jest z trzech warstw: błony wewnętrznej (intima — śródbłonek), grubej błony środkowej (media — mięśniówka gładka + włókna sprężyste) i błony zewnętrznej (adventitia — tkanka łączna). Gruba warstwa mięśniowo-sprężysta umożliwia wytrzymanie wysokiego ciśnienia tętniczego (skurczowego ~120 mmHg). Żyły mają znacznie cieńszą ścianę (niskie ciśnienie żylne ~5–15 mmHg) i posiadają zastawki kieszonkowe (półksiężycowate) — opcja D opisuje żyły, NIE tętnice. Wyjątkiem od reguły utlenowania (opcja A) są tętnice płucne (krew żylna) i żyły płucne (krew tętnicza). Naczynia włosowate mają ścianę jednowarstwową (sam śródbłonek) — przez nią zachodzi wymiana gazów i substancji odżywczych.',
      difficulty: 2, verified: true, ai_confidence: 0.98
    },
    // Q3 — Krew — skład i funkcje
    {
      topic_id: TOPIC_ID,
      subtopic_id: '71faabd8-5948-411f-95a1-1917b2fea837',
      image_url: null,
      question_text: 'Hemoglobina jest białkiem transportującym tlen we krwi. Wskaż POPRAWNE stwierdzenie dotyczące budowy i właściwości hemoglobiny:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Każda cząsteczka hemoglobiny (zbudowana z 4 podjednostek) może przenosić maksymalnie 2 cząsteczki O₂', is_correct: false },
        { id: 'B', text: 'Hemoglobina wiąże O₂ kowalencyjnie — raz przyłączony tlen nie może zostać uwolniony w tkankach', is_correct: false },
        { id: 'C', text: 'Jony Fe²⁺ w grupie hemowej odwracalnie wiążą O₂ — w płucach przyłączają, a w tkankach uwalniają', is_correct: true },
        { id: 'D', text: 'CO₂ jest transportowany wyłącznie w formie karbaminohemoglobiny — połączenia z grupą hemową hemoglobiny', is_correct: false }
      ],
      correct_answer: ['C'],
      explanation: 'Hemoglobina (Hb) to białko czwartorzędowe: 4 podjednostki (u dorosłych 2α + 2β), każda z grupą hemową zawierającą jon Fe²⁺. Każdy Fe²⁺ odwracalnie wiąże jedną cząsteczkę O₂ — wiązanie koordynacyjne (nie kowalencyjne!), zależne od ciśnienia parcjalnego O₂: w płucach (wysokie pO₂) Hb + 4O₂ → HbO₈ (oksyhemoglobina); w tkankach (niskie pO₂) O₂ jest uwalniany. Jedna cząsteczka Hb przenosi 4 cząsteczki O₂ (nie 2 — opcja A błędna). CO₂ transportowany jest trzema drogami: jako jony HCO₃⁻ (70%), karbaminohemoglobina — CO₂ przyłączone do grup aminowych globiny, NIE hemowej (23%), i rozpuszczony w osoczu (7%) — opcja D błędna.',
      difficulty: 2, verified: true, ai_confidence: 0.97
    },
    // Q4 — Układ limfatyczny i odporność
    {
      topic_id: TOPIC_ID,
      subtopic_id: '3c0d3a02-b541-4606-8275-35bb047dbb5b',
      image_url: null,
      question_text: 'Odporność nabyta (swoista) dzieli się na humoralną i komórkową. Wskaż, co jest efektorowym elementem ODPORNOŚCI HUMORALNEJ:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Limfocyty T cytotoksyczne (Tc) bezpośrednio niszczące komórki zakażone wirusami', is_correct: false },
        { id: 'B', text: 'Komórki NK (natural killers) rozpoznające i eliminujące komórki nowotworowe', is_correct: false },
        { id: 'C', text: 'Limfocyty B różnicujące się w komórki plazmatyczne produkujące swoiste przeciwciała', is_correct: true },
        { id: 'D', text: 'Makrofagi pochłaniające bakterie przez fagocytozę i prezentujące antygeny', is_correct: false }
      ],
      correct_answer: ['C'],
      explanation: 'Odporność humoralna: po rozpoznaniu antygenu (z pomocą limfocytów T pomocniczych Th i ich interleukiny IL-2) limfocyty B proliferują i różnicują się w: (1) komórki plazmatyczne — wytwarzają ogromne ilości swoistych przeciwciał (immunoglobulin IgG, IgM, IgA, IgE, IgD); (2) komórki pamięci immunologicznej — długożyjące, umożliwiające szybszą odpowiedź przy kolejnym kontakcie z antygenem. Przeciwciała neutralizują antygeny, aktywują układ dopełniacza i opsoniozę. Limfocyty T cytotoksyczne (Tc) to efektory ODPORNOŚCI KOMÓRKOWEJ — bezpośrednio atakują komórki zakażone wirusem lub nowotworowe przez perforyny i granzymy. Komórki NK należą do odporności NIESWOISTEJ (wrodzonej). Makrofagi uczestniczą w odporności nieswoistej i jako komórki prezentujące antygen (APC) inicjują odpowiedź swoistą.',
      difficulty: 2, verified: true, ai_confidence: 0.97
    },
    // Q5 — Mechanika oddychania
    {
      topic_id: TOPIC_ID,
      subtopic_id: 'b0ec2c4f-0199-4d4d-892a-be6b23195762',
      image_url: null,
      question_text: 'Wdech jest procesem aktywnym wymagającym skurczu mięśni. Wskaż, która sekwencja zdarzeń POPRAWNIE opisuje mechanikę spokojnego wdechu:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Skurcz mięśni międzyżebrowych wewnętrznych i uniesienie przepony → zmniejszenie objętości klatki piersiowej → wzrost ciśnienia w płucach → napływ powietrza', is_correct: false },
        { id: 'B', text: 'Skurcz przepony (obniżenie) i zewnętrznych mięśni międzyżebrowych (uniesienie żeber) → zwiększenie objętości klatki piersiowej → spadek ciśnienia w pęcherzykach → napływ powietrza', is_correct: true },
        { id: 'C', text: 'Bierny rozkurcz mięśni oddechowych → sprężystość płuc powoduje ich rozszerzenie → napływ powietrza', is_correct: false },
        { id: 'D', text: 'Skurcz mięśni brzucha → wzrost ciśnienia w jamie brzusznej → uniesienie przepony i powiększenie klatki piersiowej', is_correct: false }
      ],
      correct_answer: ['B'],
      explanation: 'Mechanika wdechu (prawo Boyle\'a: p·V = const): (1) Skurcz przepony → obniżenie kopuły przepony o ok. 1,5 cm (spokojny wdech) lub do 10 cm (wysiłkowy); (2) Skurcz zewnętrznych mięśni międzyżebrowych → uniesienie żeber i mostka → powiększenie wymiaru przednio-tylnego i poprzecznego. Oba efekty zwiększają objętość klatki piersiowej i płuc → ciśnienie w pęcherzykach płucnych spada poniżej atmosferycznego (o ok. 2–3 mmHg) → powietrze napływa zgodnie z gradientem ciśnień. Spokojny wydech jest BIERNY (opcja C opisuje wydech, nie wdech): rozkurcz mięśni + sprężysty powrót płuc. Mięśnie brzucha i wewnętrzne mięśnie międzyżebrowe aktywują się podczas wydechu forsownego.',
      difficulty: 2, verified: true, ai_confidence: 0.97
    },
    // Q6 — Transport gazów we krwi — Z OBRAZKIEM
    {
      topic_id: TOPIC_ID,
      subtopic_id: 'd367b143-3d4c-4c34-80f1-f023ce5d6a68',
      image_url: dissociationCurveThumb,
      question_text: 'Na wykresie przedstawiono krzywą dysocjacji oksyhemoglobiny — zależność wysycenia hemoglobiny tlenem (%) od ciśnienia parcjalnego O₂ (pO₂). Wskaż, w którym kierunku przesunie się krzywa pod wpływem wzrostu stężenia CO₂ i spadku pH (efekt Bohra), oraz jakie ma to znaczenie fizjologiczne:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Krzywa przesuwa się w lewo — hemoglobina silniej wiąże O₂, co ułatwia pobieranie tlenu w płucach', is_correct: false },
        { id: 'B', text: 'Krzywa przesuwa się w prawo — hemoglobina słabiej wiąże O₂ przy tym samym pO₂, co ułatwia oddawanie tlenu aktywnym metabolicznie tkankom', is_correct: true },
        { id: 'C', text: 'Krzywa nie zmienia położenia — pH i CO₂ wpływają tylko na transport CO₂, nie na wiązanie O₂', is_correct: false },
        { id: 'D', text: 'Krzywa zmienia kształt z sigmoidalnego na liniowy — hemoglobina traci kooperatywność wiązania tlenu', is_correct: false }
      ],
      correct_answer: ['B'],
      explanation: 'Efekt Bohra: wzrost pCO₂ i/lub spadek pH (wzrost stężenia H⁺) powoduje PRZESUNIĘCIE KRZYWEJ W PRAWO — przy tym samym pO₂ hemoglobina jest mniej nasycona tlenem, co oznacza, że łatwiej go oddaje. Mechanizm: CO₂ reaguje z wodą tworząc H₂CO₃, która dysocjuje na H⁺ i HCO₃⁻; jony H⁺ wiążą się z globiną hemoglobiny, zmieniając jej konformację i zmniejszając powinowactwo do O₂. Znaczenie fizjologiczne: w tkankach aktywnie metabolizujących (wytwarzają dużo CO₂) hemoglobina automatycznie oddaje więcej O₂ — jest to elegancki mechanizm dopasowania podaży O₂ do lokalnego zapotrzebowania. W płucach (niskie pCO₂, wyższe pH) krzywa przesuwa się w lewo — hemoglobina efektywnie pobiera O₂. Kształt sigmoidalny wynika z kooperatywności (wiązanie O₂ przez jeden hem ułatwia wiązanie przez kolejne) i nie zmienia się pod wpływem efektu Bohra.',
      difficulty: 3, verified: true, ai_confidence: 0.97
    },
    // Q7 — Hemostaza i krzepnięcie krwi
    {
      topic_id: TOPIC_ID,
      subtopic_id: '708467bb-f048-4c9a-9369-0190e91c0b0c',
      image_url: null,
      question_text: 'Hemostaza pierwotna to pierwsza linia obrony przed utratą krwi. Wskaż, który element krwi i w jaki sposób uczestniczy w tworzeniu pierwotnego czopu hemostatycznego:',
      question_type: 'single',
      options: [
        { id: 'A', text: 'Erytrocyty — przylegają do uszkodzonego śródbłonka i uwalniają fibrynogen inicjujący krzepnięcie', is_correct: false },
        { id: 'B', text: 'Trombocyty (płytki krwi) — adherują do odsłoniętego kolagenu w miejscu uszkodzenia i agregują tworząc czop płytkowy', is_correct: true },
        { id: 'C', text: 'Fibryna — natychmiast polimeryzuje w miejscu uszkodzenia tworząc pierwotną sieć zatykającą naczynie', is_correct: false },
        { id: 'D', text: 'Leukocyty — wydzielają trombinę aktywującą kaskadę krzepnięcia i skurcz naczynia', is_correct: false }
      ],
      correct_answer: ['B'],
      explanation: 'Hemostaza przebiega w dwóch etapach: (1) Hemostaza pierwotna: uszkodzenie śródbłonka odsłania kolagen podśródbłonkowy i czynnik von Willebranda (vWF) → trombocyty (płytki krwi, bezjądrowe fragmenty megakariocytów) przyłączają się do kolagenu przez receptor GP Ib/vWF (adhezja), a następnie agregują przez receptor GP IIb/IIIa wiążący fibrynogen (agregacja) → tworzy się nietrwały czop płytkowy; trombocyty wydzielają ADP i tromboksan A₂ nasilające agregację. (2) Hemostaza wtórna: kaskada krzepnięcia (czynniki osoczowe) → aktywacja trombiny → trombina przekształca fibrynogen w fibrynę → sieć fibrynowa stabilizuje czop. Fibryna (opcja C) jest wytworem hemostazy WTÓRNEJ, nie pierwotnej. Trombinę produkuje kaskada krzepnięcia, a nie leukocyty. Erytrocyty są biernie wciągane do skrzepu, nie inicjują hemostazy.',
      difficulty: 2, verified: true, ai_confidence: 0.97
    }
  ];

  let ok = 0;
  for (let i = 0; i < questions.length; i++) {
    try {
      const id = await postQuestion(questions[i]);
      const img = questions[i].image_url ? ' [+IMG]' : '';
      console.log('[' + (i + 1) + '/7] OK: ' + id.substring(0, 8) + '...' + img + ' — ' + questions[i].question_text.substring(0, 52));
      ok++;
    } catch (e) {
      console.log('[' + (i + 1) + '/7] FAIL: ' + e.message);
    }
  }
  console.log('\nDone: ' + ok + '/7 inserted');
}

run();
