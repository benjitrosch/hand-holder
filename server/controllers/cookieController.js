const cookieController = {};
const { uuid } = require('uuidv4');

cookieController.setSSIDCookie = (req, res, next) => {
    return req.cookies.ssid ? next () : (res.cookie('ssid', uuid()), next());
}

module.exports = cookieController;
