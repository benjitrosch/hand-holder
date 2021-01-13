const express = require('express');

const msgController = require('../controllers/msgController');

const router = express.Router();

router.get('/', msgController.getMessages, (req, res) => {
    res.status(200).json(res.locals.newMessages)
    console.log(res.locals.newMessages);
});

router.post('/send', msgController.sendMessage, (req, res) => {
    res.status(200)
});

module.exports = router;