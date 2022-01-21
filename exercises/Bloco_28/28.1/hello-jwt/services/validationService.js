const jwt = require('jsonwebtoken');
const { find } = require('../models/usersModel');
const errorConstructor = require("../utils/functions/errorConstructor");

require('dotenv').config();

const avaliateIfTokenExists = (token) => {
  if (!token) {
    const message = 'Token not found';
    throw errorConstructor(401, message);
  }
};

const validateToken = (token) => {
  const result = jwt.verify(token, process.env.SECRET);

  const user = find(result.data.username);

  if (!user) {
    const message = 'User do not exists';
    throw errorConstructor(401, message);
  }

  return {
    admin: user.admin,
    username: user.username,
  };
};

module.exports = {
  avaliateIfTokenExists,
  validateToken,
};