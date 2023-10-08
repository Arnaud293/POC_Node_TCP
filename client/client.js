const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3002, // Assurez-vous que le port correspond au port du serveur
  path: '/api/session',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_secret_key', 
  },
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Réponse du serveur :', data);
  });
});

req.on('error', (e) => {
  console.error(`Problème avec la requête : ${e.message}`);
});

req.end();