const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', invitationController.showInvitation);

module.exports = router