const express = require('express');
const router = express.Router();
const invitationController = require('../controllers/invitationController');

router.get('/', invitationController.showInvitation);

module.exports = router;