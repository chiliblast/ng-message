const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const authMiddleware = require('../middleware/auth');

router.post('/bulk', authMiddleware, locationController.bulkSave);
router.get('/', authMiddleware, locationController.getLocations);
router.post('/', authMiddleware, locationController.addLocation);
router.put('/:id', authMiddleware, locationController.updateLocation);
router.delete('/:id', authMiddleware, locationController.deleteLocation);

module.exports = router;
