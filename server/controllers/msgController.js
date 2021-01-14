const { model } = require('mongoose');
const models = require('../models/msgModel');

const msgController = {};

msgController.getMessages = (req, res, next) => {
  models.Message.find({sessionID: req.query.ssid}, (err, messages) => {
    if (err) return next(err);
    else {
      res.locals.newMessages = messages
      return next();
    }
  })
};

msgController.sendMessage = (req, res, next) => {
  models.Message.create([req.body])
  next();
};

module.exports = msgController;
