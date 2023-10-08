const jwt = require('jsonwebtoken');

const createSession = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).send('Accès interdit');
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).send('Accès interdit');
    }

    // Le token est vérifié, vous pouvez maintenant créer la session
    res.cookie('sessionId', '123456789'); // Définit le cookie
    res.status(200).send('Session créée avec succès');
  });
};

module.exports = {
  createSession,
};