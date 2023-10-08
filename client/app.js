const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

// Middleware pour vérifier le token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send('Accès interdit');
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).send('Accès interdit');
    }
    req.user = decoded;
    next();
  });
};

app.post('/api/session', verifyToken, (req, res) => {
  res.cookie('sessionId', '123456789'); 
  res.status(200).send('Session créée avec succès');
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});