const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).send('Accès interdit');
  }

  const token = authHeader.split(' ')[1]; // Récupère le token après 'Bearer '

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

module.exports = verifyToken;