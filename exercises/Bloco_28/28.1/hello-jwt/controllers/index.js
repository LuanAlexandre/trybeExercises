const ping = require('./ping');
const users = require('./usersController');
const validation = require('./validationController');
const admin = require('./adminController');

module.exports = {
  ping,
  users,
  validation,
  admin,
};
