const express = require('express');
const router = express.Router();
const hierarchyController = require('../controllers/hierarchyController');
const authMiddleware = require('../middleware/auth');

// Get the full hierarchy tree (Protected)
router.get('/', authMiddleware, hierarchyController.getHierarchy);

module.exports = router;
