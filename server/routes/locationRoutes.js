const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const authMiddleware = require('../middleware/auth');

router.post('/bulk', authMiddleware, locationController.bulkSave);
router.get('/', authMiddleware, locationController.getLocations);

module.exports = router;
