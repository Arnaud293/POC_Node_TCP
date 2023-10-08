const express = require('express');
const cookieParser = require('cookie-parser');
const tcpServer = require('./tcpServer'); // Importez le serveur TCP
const sessionRoutes = require('./routes/session.js')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Autorise toutes les origines
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

app.use('/api', sessionRoutes);

// Démarrage du serveur TCP
tcpServer.startServer();