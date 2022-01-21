const ping = require('./ping');
const login = require('./loginController');
const validation = require('./validationController');
const admin = require('./adminController');

module.exports = {
  ping,
  login,
  validation,
  admin,
};
