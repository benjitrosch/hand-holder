const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {

  const cookie = req.cookies.ssid;

  Session.findOne({cookieId: cookie}, (err, result) => {
    if (err) return next(err);
    if (result) return next();
    else Session.create({cookieId: cookie}).then(() => next()).catch(err => next(err));
  });
};

module.exports = sessionController;