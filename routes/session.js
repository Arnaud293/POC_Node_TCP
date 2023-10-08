const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const verifyToken = require('../middlewares/verifyToken'); // Importez le middleware

router.post('/session', verifyToken, sessionController.createSession);

module.exports = router;
