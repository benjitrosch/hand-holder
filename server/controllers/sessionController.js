const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {

  const cookie = req.cookies.ssid;
  console.log(`our requested cookie is ${cookie}`);

  Session.findOne({cookieId: cookie}, (err, result) => {
    if (err) return next(`Error sessionControoler.startSession could not find cookieID: ${err}`);
    if (result) return next();
    else Session.create({cookieId: cookie}).then(() => next()).catch(err => next(`Error sessionControoler.startSession could not create new cookieID: ${err}`));
  });
};

module.exports = sessionController;