const https = require('https');

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w';

const questions = [
  {
    image_url: null,
    subtopic_id: null,
    subtopic: 'Ekologia',
    question_text: 'W łańcuchu troficznym: rośliny → owady → żaby → bociany biomasa roślin wynosi 10 000 kg. Przy założeniu 10-procentowej efektywności przekazywania energii między poziomami troficznymi, ile wynosi biomasa bocianów?',
    question_type: 'single',
    options: [
      { id: 'A', text: '1000 kg', is_correct: false },
      { id: 'B', text: '100 kg', is_correct: false },
      { id: 'C', text: '10 kg', is_correct: true },
      { id: 'D', text: '1 kg', is_correct: false }
    ],
    correct_answer: ['C'],
    explanation: 'Zgodnie z regułą 10% (prawo Lindenmana), między kolejnymi poziomami troficznymi przekazywane jest tylko ok. 10% energii (reszta jest tracona jako ciepło w procesach metabolicznych). Obliczenie: rośliny (10 000 kg) → owady: 10 000 × 10% = 1000 kg → żaby: 1000 × 10% = 100 kg → bociany: 100 × 10% = 10 kg. Z 10 000 kg biomasy roślinnej powstaje zaledwie 10 kg biomasy bocianów. Dlatego łańcuchy pokarmowe są krótkie (zwykle 3–5 ogniw) — po kilku poziomach troficznych dostępna energia jest zbyt mała, by utrzymać kolejne ogniwo.',
    difficulty: 2,
    verified: true
  },
  {
    image_url: null,
    subtopic_id: null,
    subtopic: 'Komórka i biochemia',
    question_text: 'Komórkę roślinną umieszczono w roztworze hipertonicznym (o stężeniu wyższym niż stężenie soku komórkowego). Wskaż, które zjawisko zachodzi w tej komórce:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Komórka pobiera wodę i osiąga stan pełnego turgoru', is_correct: false },
      { id: 'B', text: 'Protoplast odrywa się od ściany komórkowej — zachodzi plazmoliza', is_correct: true },
      { id: 'C', text: 'Ściana komórkowa pęka pod wpływem ciśnienia osmotycznego roztworu', is_correct: false },
      { id: 'D', text: 'W komórce zachodzi endocytoza — pobieranie cząsteczek z roztworu', is_correct: false }
    ],
    correct_answer: ['B'],
    explanation: 'W roztworze hipertonicznym (o wyższym stężeniu substancji rozpuszczonych niż sok komórkowy) woda osmotycznie opuszcza komórkę przez błonę półprzepuszczalną, przemieszczając się w kierunku wyższego stężenia. Utrata wody powoduje kurczenie się protoplastu, który odrywa się od ściany komórkowej — jest to plazmoliza. Ściana komórkowa roślin jest sztywna i nie kurczy się razem z protoplasten — dlatego między ścianą a protoplasten pojawia się przestrzeń wypełniona roztworem zewnętrznym. Plazmoliza jest odwracalna — po przeniesieniu komórki do wody lub roztworu hipotonocznego następuje deplazmoliza. Turgor (opcja A) zachodzi w roztworze hipotonicznym.',
    difficulty: 2,
    verified: true
  },
  {
    image_url: null,
    subtopic_id: null,
    subtopic: 'Fizjologia człowieka',
    question_text: 'Wymiana gazowa w płucach człowieka odbywa się na zasadzie dyfuzji przez ścianę pęcherzyków płucnych. Wskaż gradient, który umożliwia transport tlenu z pęcherzyków do krwi żylnej:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Wyższe ciśnienie parcjalne O₂ w krwi żylnej niż w powietrzu pęcherzykowym', is_correct: false },
      { id: 'B', text: 'Wyższe ciśnienie parcjalne O₂ w powietrzu pęcherzykowym (~13,3 kPa) niż w krwi żylnej (~5,3 kPa)', is_correct: true },
      { id: 'C', text: 'Wyższe stężenie CO₂ w powietrzu pęcherzykowym niż w krwi żylnej — CO₂ wypiera O₂ z hemoglobiny', is_correct: false },
      { id: 'D', text: 'Równe ciśnienie parcjalne O₂ po obu stronach nabłonka — dyfuzja zachodzi dzięki aktywnemu transportowi', is_correct: false }
    ],
    correct_answer: ['B'],
    explanation: 'Dyfuzja gazów oddechowych zachodzi zgodnie z gradientem ciśnień parcjalnych (od wyższego do niższego). W pęcherzykach płucnych ciśnienie parcjalne O₂ wynosi ok. 13,3 kPa, natomiast w dopływającej krwi żylnej (z tkanek) tylko ok. 5,3 kPa — tlen dyfunduje z pęcherzyków do krwi. Jednocześnie CO₂ dyfunduje w odwrotnym kierunku: ciśnienie parcjalne CO₂ w krwi żylnej (~6,1 kPa) jest wyższe niż w pęcherzykach (~5,3 kPa). Dyfuzja jest procesem biernym — nie wymaga nakładu energii. Bariera krew-powietrze w pęcherzykach ma grubość zaledwie ok. 0,5 μm (nabłonek pęcherzyków + śródbłonek naczyń włosowatych), co sprzyja szybkiej wymianie gazów.',
    difficulty: 2,
    verified: true
  },
  {
    image_url: null,
    subtopic_id: null,
    subtopic: 'Ewolucja',
    question_text: 'Przed uprzemysłowieniem Anglii dominowała jasna odmiana ćmy brzozówki (Biston betularia). Po rewolucji przemysłowej zaczęła dominować ciemna odmiana melanistyczna. Wskaż poprawne ewolucyjne wyjaśnienie tego zjawiska:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Ciemne ćmy powstały de novo wskutek mutagennego działania zanieczyszczeń — była to jednorazowa masowa mutacja całej populacji', is_correct: false },
      { id: 'B', text: 'Ćmy stopniowo ciemniały pod wpływem sadzy i przekazywały nabytą cechę potomstwu (dziedziczenie cech nabytych)', is_correct: false },
      { id: 'C', text: 'Sadza zaciemniła pnie drzew, przez co jasne ćmy stały się bardziej widoczne dla drapieżników i były częściej eliminowane — ciemne ćmy zyskały przewagę selekcyjną', is_correct: true },
      { id: 'D', text: 'Jasne ćmy wyemigrowały do nieskażonych rejonów, a ciemne zajęły ich niszę ekologiczną', is_correct: false }
    ],
    correct_answer: ['C'],
    explanation: 'Przykład ćmy brzozówki (melanizm przemysłowy) jest klasycznym dowodem doboru naturalnego w działaniu. Przed uprzemysłowieniem kora brzozy była jasna i pokryta porostami — jasne ćmy były doskonale zamaskowane, ciemne łatwo wychwytywane przez ptaki. Po uprzemysłowieniu sadza zniszczyła porosty i zaciemniła korę — teraz jasne ćmy były widoczne, a ciemne ukryte. Dobór naturalny faworyzował ciemne osobniki: były rzadziej zjadane, częściej rozmnażały się i przekazywały allel melanizmu potomstwu. Allel ciemnej barwy istniał w populacji od dawna jako rzadki wariant — przemysł nie stworzył go, ale zmienił warunki środowiskowe tak, że stał się korzystny. Dziedziczenie cech nabytych (opcja B) to teoria Lamarcka, odrzucona przez biologię ewolucyjną.',
    difficulty: 2,
    verified: true
  },
  {
    image_url: null,
    subtopic_id: null,
    subtopic: 'Biotechnologia',
    question_text: 'Reakcja PCR (łańcuchowa reakcja polimerazy) jest powszechnie stosowana w diagnostyce medycznej i badaniach genetycznych. Wskaż składnik NIEZBĘDNY do przeprowadzenia reakcji PCR:',
    question_type: 'single',
    options: [
      { id: 'A', text: 'Żywe komórki bakteryjne E. coli jako źródło polimerazy DNA', is_correct: false },
      { id: 'B', text: 'Startery (primery) — krótkie jednoniciowe oligonukleotydy komplementarne do końców amplifikowanego fragmentu', is_correct: true },
      { id: 'C', text: 'Rybosomy do syntezy nowych nici DNA w fazie elongacji w temperaturze 72°C', is_correct: false },
      { id: 'D', text: 'Enzymy restrykcyjne do cięcia matrycowego DNA przed amplifikacją', is_correct: false }
    ],
    correct_answer: ['B'],
    explanation: 'PCR to bezkomórkowa reakcja amplifikacji DNA wymagająca: (1) matrycowego DNA (template); (2) starterów (primers) — dwóch krótkich jednoniciowych oligonukleotydów (18–25 nt) komplementarnych do końców amplifikowanego fragmentu; bez starterów polimeraza nie ma miejsca przyłączenia i nie może syntetyzować; (3) termostabilnej polimerazy DNA (Taq polymerase z Thermus aquaticus, aktywna w 72°C); (4) dNTP (deoksyrybonukleotydów: dATP, dCTP, dGTP, dTTP); (5) buforu z Mg²⁺. Cykl PCR: denaturacja (94–98°C) → przyłączenie starterów (annealing, 50–65°C) → elongacja (72°C). PCR nie wymaga komórek, rybosomów (synteza białek, nie DNA) ani enzymów restrykcyjnych (stosowanych w klonowaniu, nie w PCR).',
    difficulty: 2,
    verified: true
  }
];

function postQuestion(q) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify([q]);
    const opts = {
      hostname: URL_HOST,
      path: '/rest/v1/mock_questions',
      method: 'POST',
      headers: {
        'apikey': KEY,
        'Authorization': 'Bearer ' + KEY,
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
    req.write(body);
    req.end();
  });
}

async function run() {
  let ok = 0;
  for (let i = 0; i < questions.length; i++) {
    try {
      const id = await postQuestion(questions[i]);
      console.log('[' + (i + 1) + '/5] OK: ' + id.substring(0, 8) + '... [' + questions[i].subtopic + '] ' + questions[i].question_text.substring(0, 50));
      ok++;
    } catch (e) {
      console.log('[' + (i + 1) + '/5] FAIL: ' + e.message);
    }
  }
  console.log('Done: ' + ok + '/5 inserted into mock_questions');
}

run();
