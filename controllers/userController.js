// userController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
  // ...

  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      // Vérifiez si l'utilisateur existe dans la base de données (dans cet exemple, utilisez une condition)
      const userExists = true;

      if (userExists) {
        // Vérifiez si le mot de passe est correct
        const validPassword = await bcrypt.compare(password, hashedPassword);

        if (validPassword) {
          // Générez un token JWT
          const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });

          // Définissez le cookie
          res.cookie('token', token, { httpOnly: true });

          res.status(200).send('Connexion réussie');
        } else {
          res.status(401).send('Mot de passe incorrect');
        }
      } else {
        res.status(401).send('Utilisateur non trouvé');
      }
    } catch (error) {
      res.status(500).send('Erreur lors de la connexion');
    }
  },

  authenticate: (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
      jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
          return res.status(401).send('Authentification échouée');
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      return res.status(401).send('Authentification échouée');
    }
  },

  // ...
};

module.exports = userController;
