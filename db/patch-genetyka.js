const https = require('https');

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w';
const TOPIC_ID = '417e905f-f10b-49e8-ab02-f7042144e68b';

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const opts = {
      hostname: URL_HOST, path, method,
      headers: {
        'apikey': KEY,
        'Authorization': 'Bearer ' + KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'Prefer': 'return=representation'
      }
    };
    if (bodyStr) opts.headers['Content-Length'] = Buffer.byteLength(bodyStr, 'utf-8');
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

const patches = {
  'a0020902-50b3-4481-850e-44023d3662ac': {
    question_text: "Groch siewny ma kolor nasion żółty (Y) dominujący nad zielonym (y) oraz gładką łupinę (R) dominującą nad pomarszczoną (r). Krzyżówka roślin o genotypie YyRr × YyRr da potomstwo w stosunku fenotypowym:",
    options: [
      {"id":"A","text":"9 żółtych gładkich : 3 żółte pomarszczone : 3 zielone gładkie : 1 zielone pomarszczone","is_correct":true},
      {"id":"B","text":"1 : 1 : 1 : 1","is_correct":false},
      {"id":"C","text":"3 żółte gładkie : 1 zielone pomarszczone","is_correct":false},
      {"id":"D","text":"Całe potomstwo będzie żółte i gładkie","is_correct":false}
    ],
    explanation: "Krzyżówka dihybrydowa YyRr × YyRr: zgodnie z II prawem Mendla (prawo niezależnej segregacji) każda para alleli dziedziczy się niezależnie. Dla koloru: Yy × Yy daje 3 Y_ : 1 yy (3 żółte : 1 zielone). Dla kształtu łupiny: Rr × Rr daje 3 R_ : 1 rr (3 gładkie : 1 pomarszczone). Łącznie: 9 Y_R_ (żółte gładkie) : 3 Y_rr (żółte pomarszczone) : 3 yyR_ (zielone gładkie) : 1 yyrr (zielone pomarszczone). Stosunek 9:3:3:1 jest klasycznym wynikiem krzyżówki dihybrydalnej i potwierdził prawo niezależnej segregacji Mendla. Warunkiem jest brak sprzężenia genów (geny na różnych chromosomach lub odległe na tym samym)."
  },
  'aa092ab8-8b73-42be-ade5-937612aa3149': {
    question_text: "Hemofilia A jest recesywną chorobą sprzężoną z chromosomem X. Matka nosicielka (genotyp X^H X^h) i zdrowy ojciec (X^H Y) mają dzieci. Wskaż, jaki procent SYNÓW będzie chory na hemofilię:",
    options: [
      {"id":"A","text":"0%","is_correct":false},
      {"id":"B","text":"25%","is_correct":false},
      {"id":"C","text":"50%","is_correct":true},
      {"id":"D","text":"100%","is_correct":false}
    ],
    explanation: "Krzyżówka X^H X^h (matka nosicielka) × X^H Y (ojciec zdrowy): możliwe genotypy potomstwa: X^H X^H (córka zdrowa, 25%), X^H X^h (córka nosicielka, 25%), X^H Y (syn zdrowy, 25%), X^h Y (syn chory, 25%). Synowie dziedziczą chromosom X wyłącznie od matki. Z prawdopodobieństwem 50% matka przekazuje synowi allel X^h (z hemofilią). Ponieważ synowie mają tylko jeden chromosom X (XY), jeden allel recesywny wystarczy do zachorowania. Wynik: 50% synów chorych (X^h Y), 50% synów zdrowych (X^H Y). Żadna córka nie zachoruje — otrzymuje X^H od ojca, co maskuje ewentualne X^h od matki."
  },
  'efcb697c-fb46-4bdf-bb03-a2fdba82bcaa': {
    question_text: "Matka ma grupę krwi A (heterozygota I^A i^0), a ojciec grupę krwi B (heterozygota I^B i^0). Wskaż, jakie grupy krwi mogą mieć ich dzieci:",
    options: [
      {"id":"A","text":"Tylko A i B","is_correct":false},
      {"id":"B","text":"A, B, AB i 0","is_correct":true},
      {"id":"C","text":"A, B i AB (bez grupy 0)","is_correct":false},
      {"id":"D","text":"Wyłącznie AB","is_correct":false}
    ],
    explanation: "Krzyżówka I^A i^0 (matka) × I^B i^0 (ojciec): możliwe genotypy i fenotypy potomstwa: I^A I^B (25%) = grupa AB, I^A i^0 (25%) = grupa A, I^B i^0 (25%) = grupa B, i^0 i^0 (25%) = grupa 0. Wszystkie cztery grupy krwi są możliwe. Gen ABO wykazuje kodominację (allele I^A i I^B są równorzędne i oba dominują nad i^0). Jest to klasyczny przykład używany w testach ojcostwa: znajomość grup krwi rodziców pozwala wykluczyć ojcostwo, lecz nie potwierdzić go jednoznacznie. Np. jeżeli ojciec ma grupę 0 (i^0 i^0), dziecko nie może mieć grupy AB."
  },
  '979ad1bd-9768-4c1d-bdc1-66353738b09c': {
    question_text: "Crossing-over zachodzi podczas profazy I mejozy. Wskaż POPRAWNE stwierdzenie dotyczące znaczenia biologicznego crossing-over:",
    options: [
      {"id":"A","text":"Crossing-over zwiększa liczbę chromosomów w komórce o 50% w stosunku do komórki macierzystej","is_correct":false},
      {"id":"B","text":"Crossing-over powoduje wymianę odcinków między niesiostrzenymi chromatydami chromosomów homologicznych, zwiększając zmienność genetyczną gamet","is_correct":true},
      {"id":"C","text":"Crossing-over zachodzi między chromatydami siostrzanymi tego samego chromosomu i prowadzi do duplikacji genów","is_correct":false},
      {"id":"D","text":"Crossing-over jest procesem występującym wyłącznie w mitozie, nie w mejozie","is_correct":false}
    ],
    explanation: "Crossing-over (rekombinacja homologiczna) zachodzi w profazie I mejozy, gdy chromosomy homologiczne łączą się w biwalenty (synapsis) tworząc tetradę czterech chromatyd. Wymiana odcinków następuje między NIESIOSTRZENYMI chromatydami (z różnych homologów, nie między kopiami tego samego chromosomu). W wyniku crossing-over powstają nowe kombinacje alleli w chromosomach rekombinantowych. Zwiększa to zmienność genetyczną gamet i potomstwa — jest to jeden z głównych źródeł zmienności genetycznej w rozrodzie płciowym, obok losowego rozdziału chromosomów homologicznych. Liczba chromosomów nie ulega zmianie — redukcja następuje przez podział redukcyjny (mejoza I). Crossing-over nie występuje w mitozie (brak synapsingu chromosomów homologicznych)."
  },
  '44534440-600c-4ca4-9598-b1275669b85b': {
    question_text: "Mutacja punktowa polegająca na zastąpieniu jednej zasady DNA inną zasadą powoduje zmianę aminokwasu w kodowanym białku. Jak nazywa się ten typ mutacji?",
    options: [
      {"id":"A","text":"Mutacja synonimiczna (milcząca, silent)","is_correct":false},
      {"id":"B","text":"Mutacja nonsensowna","is_correct":false},
      {"id":"C","text":"Mutacja zmiany sensu (missense)","is_correct":true},
      {"id":"D","text":"Mutacja zmiany ramki odczytu (frameshift)","is_correct":false}
    ],
    explanation: "Mutacje punktowe (substytucje jednej pary zasad) dzielimy na trzy typy: (1) Synonimiczne (milczące, silent) — zmiana zasady nie zmienia aminokwasu, bo kodon pozostaje synonimem dla tego samego aminokwasu (dzięki degeneracji kodu genetycznego; najczęściej zmiana w 3. pozycji kodonu). (2) Zmiany sensu (missense) — zmiana zasady prowadzi do powstania kodonu dla innego aminokwasu, co może zmienić strukturę i funkcję białka (np. mutacja w genie HBB powodująca anemię sierpowatą: GAG→GTG, Glu→Val). (3) Nonsensowne — zmiana zasady tworzy kodon stop (UAA, UAG lub UGA), co powoduje przedwczesne zakończenie translacji i skrócone, zwykle nieaktywne białko. Mutacje frameshift (insercje, delecje) nie są substytucjami — zmieniają całą ramkę odczytu."
  }
};

async function run() {
  const r = await request('GET', '/rest/v1/questions?topic_id=eq.' + TOPIC_ID + '&select=id,subtopic_id&order=created_at.desc&limit=5');
  const rows = JSON.parse(r.body);
  console.log('Found ' + rows.length + ' questions');

  let ok = 0;
  for (const row of rows) {
    const update = patches[row.subtopic_id];
    if (!update) { console.log('No patch for subtopic ' + row.subtopic_id); continue; }
    const res = await request('PATCH', '/rest/v1/questions?id=eq.' + row.id, update);
    if (res.status === 200 || res.status === 204) {
      console.log('PATCHED: ' + row.id.substring(0, 8) + '... (' + row.subtopic_id.substring(0, 8) + ')');
      ok++;
    } else {
      console.log('FAIL ' + res.status + ': ' + res.body.substring(0, 120));
    }
  }
  console.log('Done: ' + ok + '/5');
}

run();
