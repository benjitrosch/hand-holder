const { model } = require('mongoose');
const models = require('../models/msgModel');

const msgController = {};

msgController.getMessages = (req, res, next) => {
  models.Message.find({})
    .then(messages => (res.locals.newMessages = messages, next()));
};

msgController.sendMessage = (req, res, next) => {
  models.Message.create([req.body])
  next();
};

module.exports = msgController;
