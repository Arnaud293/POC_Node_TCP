const net = require('net');

const tcpServer = net.createServer((socket) => {
  // Gérez les connexions ici
});

const TCP_PORT = 3001;

module.exports = {
  startServer: () => {
    tcpServer.listen(TCP_PORT, () => {
      console.log(`Serveur TCP en écoute sur le port ${TCP_PORT}`);
    });
  },
};
