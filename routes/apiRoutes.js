const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const apiKeyMiddleware = require('../middleware/apiKey');

router.post('/comments', apiKeyMiddleware, commentController.storeComment);

module.exports = router;