const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleware/auth');

router.post('/send', authMiddleware, messageController.sendMessage);
router.get('/received', authMiddleware, messageController.getReceivedMessages);
router.get('/sent', authMiddleware, messageController.getSentMessages);
router.get('/all-other', authMiddleware, messageController.getAllOtherMessages);

module.exports = router;
