const https = require('https');
const URL_HOST = 'gzpxvfaftvkfwpvljcrk.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHh2ZmFmdHZrZndwdmxqY3JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc3MjY5MCwiZXhwIjoyMDk3MzQ4NjkwfQ.E-wLyCSNY4UohTIvIh1y9a4f0VLmNRCY7IoLR1qS__w';

function get(path) {
  return new Promise((resolve, reject) => {
    const req = https.request({ hostname: URL_HOST, path, method: 'GET', headers: { 'apikey': KEY, 'Authorization': 'Bearer ' + KEY } }, (res) => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    });
    req.on('error', reject); req.end();
  });
}

async function run() {
  // Get all topics
  const topics = await get('/rest/v1/topics?select=id,name&order=order_index');

  // Filter the ones we need
  const needed = ['Ekologia', 'Ewolucja', 'Biotechnologia', 'Komórka i biochemia', 'Fizjologia człowieka — układ krążenia i oddechowy'];
  const filtered = topics.filter(t => needed.includes(t.name));

  console.log('Relevant topics and their first subtopics:');
  for (const t of filtered) {
    const subs = await get('/rest/v1/subtopics?topic_id=eq.' + t.id + '&select=id,name&order=order_index&limit=4');
    console.log('\n[' + t.name + ']');
    subs.forEach(s => console.log('  ' + s.name + ' — ' + s.id));
  }

  // Get 5 most recent mock questions
  const mq = await get('/rest/v1/mock_questions?select=id,subtopic,subtopic_id&order=created_at.desc&limit=5');
  console.log('\nOur 5 mock questions (most recent):');
  mq.forEach(q => console.log('  ' + q.id + ' | [' + q.subtopic + '] subtopic_id=' + q.subtopic_id));
}

run();
