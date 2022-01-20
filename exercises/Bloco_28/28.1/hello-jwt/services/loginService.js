const Joi = require('joi');
const database = require('../utils/data/database');
const errorConstructor = require('../utils/functions/errorConstructor');
const jwt = require('jsonwebtoken');

const validateUserData = (username, password) => {
  const usernameSchema = Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5).required(),
  });

  return usernameSchema.validate({ username, password });
};

const createToken = (data, secret) => {
  const jwtConfig = {
    expiresIn:3600,
    algorithm: 'HS256',
  };

  return jwt.sign({ data }, secret, jwtConfig);
};

const create = (name, password) => {
  const { error } = validateUserData(name, password);

  if (error) {
    throw errorConstructor(422, 'Dados inválidos!');
  }

  const id = database.length + 1;
  const newUser = { id, name, password };

  database.push(newUser);

  const token = createToken(newUser, 'validandoComJWT');

  return token;
};

// const list = () => {
//   const users = database.map((user) => user);

//   return users;
// };

const find = (name, password) => {
  if (!name || !password) {
    const message = 'É necessário usuário e senha para fazer login';
    throw errorConstructor(401, message);
  }

  const { error } = validateUserData(name, password);

  if (error) {
    throw error;
  }

  if (name === 'admin' && password === 's3nh4S3gur4???') {
    const token = createToken({ data: { admin: true, name, password } }, 'validandoComJWT');
    return token;
  }

  const user = database.find((user) => user.username === name && user.password === password);

  if (!user) {
    throw errorConstructor(404, 'Usuário não encontrado.');
  }

  const token = createToken({ data: { admin: false, ...user } }, 'validandoComJWT');

  return token;
};

// const update = (id, name, password) => {
//   const user = find(id);

//   user.name = name;
//   user.password = password;
// };

// const remove = (id) => {
//   const user = find(id);

//   const index = database.indexOf(user);

//   database.splice(index, 1);
// };

module.exports = {
  create,
  // list,
  find,
  // update,
  // remove,
};