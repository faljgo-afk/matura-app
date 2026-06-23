const https = require('https');

const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co';
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// question_id => correct subtopic_id
const patches = [
  // Ekologia: łańcuch troficzny → Przepływ energii
  { id: 'ef131bbf-d111-4386-bf44-89729b296349', subtopic_id: 'a6a5a9e9-026e-4ef4-9857-5ef0f07cdcff', label: 'Ekologia → Przepływ energii' },
  // Komórka: osmoza/plazmoliza → Budowa błony komórkowej i transport
  { id: '1dce7ee7-b254-4eb9-a49b-631d7cc4e86a', subtopic_id: '02bdc9fd-fcc9-4a74-bb86-477bfaa7dba3', label: 'Komórka → Budowa błony i transport' },
  // Fizjologia: wymiana gazowa w płucach → Wymiana gazowa
  { id: '38219b7f-d74c-4307-829f-0e7d6a04950a', subtopic_id: '1e82cd06-799e-4e80-a26e-dc8eeda58196', label: 'Fizjologia → Wymiana gazowa' },
  // Ewolucja: melanizm przemysłowy → Dobór naturalny
  { id: '6c98af9d-7792-4704-b5b4-6ecf3d2a27e8', subtopic_id: '60c54d99-610e-4665-bd0f-a0a817bb3293', label: 'Ewolucja → Dobór naturalny' },
  // Biotechnologia: PCR → PCR i elektroforeza
  { id: '70a31dfc-0658-43c4-acae-b4021311bda3', subtopic_id: 'e2a9978b-d943-439a-abc7-f411778757c1', label: 'Biotechnologia → PCR i elektroforeza' },
];

function patch(id, subtopic_id) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ subtopic_id });
    const opts = {
      hostname: URL_HOST,
      path: '/rest/v1/mock_questions?id=eq.' + id,
      method: 'PATCH',
      headers: {
        'apikey': KEY,
        'Authorization': 'Bearer ' + KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body, 'utf-8')
      }
    };
    const req = https.request(opts, (res) => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => resolve(res.statusCode));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function run() {
  for (const p of patches) {
    const status = await patch(p.id, p.subtopic_id);
    const ok = status === 200 || status === 204;
    console.log((ok ? 'OK' : 'FAIL ' + status) + ' — ' + p.label);
  }
}

run();
