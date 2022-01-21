const { validationService } = require('../services');
const { avaliateIfTokenExists, validateToken } = validationService;
require('dotenv').config();

const auth = (req, _res, next) => {
  try {
    const token = req.headers['authorization'];

    avaliateIfTokenExists(token);
    const user = validateToken(token);

    req.user = user;

    next();
  } catch (error) {
    console.error(`GET USERS ME -> ${error.message}`);
    next(error);
  }
};

module.exports = auth;