const { ObjectId } = require('mongodb');
const connection = require('./connection');

// Função de validação do campos de nome
const validateName = (firstName, lastName) => {
  const message = 'Os campos "firstName" e "lastName" são obrigatórios';

  if (!firstName || !lastName) throw new Error(message);
};

// Função de validação do email
const validateEmail = (email) => {
  const validEmail = /^\S\w+@[a-z]+\.+[a-z]*/i;
  const message1 = 'O campo "email" é obrigatório.';
  const message2 = 'O campo "email" deve ter o formato "email@email.com"';

  if (!email) throw new Error(message1);

  const isValid = validEmail.test(email);

  if (!isValid) throw new Error(message2);
};

// Função de validação da senha
const validatePassword = (password) => {
  const message1 = 'O campos "password" é obrigatório.';
  const message2 = 'O campo "password" deve ter pelo menos 6 caracteres.';

  if (!password) throw new Error(message1);

  const isValid = password.length >= 6 && typeof password === 'string';

  if (!isValid) throw new Error(message2);
};

const create = async (firstName, lastName, email, password) => {
  validateName(firstName, lastName);
  validateEmail(email);
  validatePassword(password);
  const connect = await connection();
  const created = await connect.collection('users').insertOne({ firstName, lastName, email, password });
  return {
    id: created.insertedId,
    firstName,
    lastName,
    email,
  };
};

const list = async () => {
  const connect = await connection();
  const users = await connect.collection('users').find().toArray();
  return users;
}

const userExists = (user) => {
  const message = 'Usuário não encontrado';
  if (!user) throw new Error(message);
};

const findById = async (id) => {
  const connect = await connection();
  const user = await connect.collection('users').findOne({ _id: ObjectId(id) });
  userExists(user);
  return {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
}

module.exports = {
  create,
  list,
  findById,
};
