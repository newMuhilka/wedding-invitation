const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');

router.get('/login', adminController.showLogin);
router.post('/login', adminController.login);
router.get('/dashboard', authMiddleware, adminController.dashboard);
router.post('/logout', authMiddleware, adminController.logout);

module.exports = router;