const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middleware/auth');

// Get dynamic status actions (Protected)
router.get('/status-actions', authMiddleware, settingsController.getStatusActions);

module.exports = router;
