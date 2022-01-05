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

module.exports = {
  create,
  list,
};
