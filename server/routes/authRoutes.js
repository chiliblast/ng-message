const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/login-raw-biometric', authController.loginRawBiometric);
router.post('/login-with-biometric', authController.loginWithBiometric);
router.post('/register-raw-biometric', authController.registerRawBiometric);
router.post('/register-biometric', authController.registerBiometric);

module.exports = router;

