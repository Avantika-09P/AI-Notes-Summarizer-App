require('dotenv').config();
const https = require('https');
const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
const body = JSON.stringify({
  model: 'openrouter/auto',
  messages: [
    { role: 'system', content: 'You are a test.' },
    { role: 'user', content: 'Hello' }
  ]
});
const options = {
  hostname: 'openrouter.ai',
  port: 443,
  path: '/api/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
    Authorization: 'Bearer ' + apiKey
  }
};
const req = https.request(options, (res) => {
  console.log('status', res.statusCode);
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log('body', data.slice(0, 1000));
  });
});
req.on('error', (err) => console.error('error', err));
req.write(body);
req.end();
