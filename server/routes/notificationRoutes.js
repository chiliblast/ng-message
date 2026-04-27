const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/auth');

router.post('/subscribe', authMiddleware, notificationController.subscribe);

module.exports = router;
