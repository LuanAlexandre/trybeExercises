const { create, find } = require('../models/usersModel');
const Joi = require('joi');
const { errorConstructor } = require('../utils/functions/errorConstructor');
const jwt = require('jsonwebtoken');
const { generateRandomNumber } = require('../utils/functions/generateRandomNumber');
const { avaliateNumber } = require('../utils/functions/avaliateNumber');

require('dotenv').config();

const avaliateExistence = (username, password) => {
  if (!username || !password) {
    const message = 'É necessário usuário e senha para fazer login';
    throw errorConstructor(401, message);
  }
};

const validateUserData = (username, password) => {
  const usernameSchema = Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5).required(),
  });

  const { error } = usernameSchema.validate({ username, password });

  if (error) {
    throw error;
  }
};

const createToken = (data, secret) => {
  const jwtConfig = {
    expiresIn:3600,
    algorithm: 'HS256',
  };

  return jwt.sign({ data }, secret, jwtConfig);
};

// const avaliateIfIsAdmin = (username, password) => {
//   if (username === 'admin' && password === 's3nh4S3gur4???') {
//     const token = createToken({ data: { admin: true, username } }, process.env.SECRET);
//     return token;
//   }
// };

const findUser = (username, password) => {
  avaliateExistence(username, password);
  validateUserData(username, password);
  // avaliateIfIsAdmin(username, password);

  const user = find(username, password);

  if (!user) {
    throw errorConstructor(404, 'Usuário não encontrado.');
  }

  const userData = { admin: user.admin, username: user.username };

  const token = createToken({ ...userData }, process.env.SECRET);

  return token;
};

const createUser = (username, password) => {
  validateUserData(username, password);

  const user = find(username);

  if (user) {
    const message = 'User already exists';
    throw errorConstructor(409, message);
  }

  const number = generateRandomNumber();
  const admin = avaliateNumber(number);

  create(admin, username, password);

  const token = createToken({ admin, username }, process.env.SECRET);

  return token;
}

module.exports = {
  findUser,
  createUser,
};