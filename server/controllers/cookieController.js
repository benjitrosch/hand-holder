const cookieController = {};
const { v4: uuid_v4 } = require('uuid');

cookieController.setSSIDCookie = (req, res, next) => {
    return req.cookies.ssid ? next () : (res.cookie('ssid', uuid_v4()), next());
}

module.exports = cookieController;