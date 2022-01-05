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
  const [created] = await connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  );
  return {
    id: created.insertId,
    firstName,
    lastName,
    email,
  };
};

const list = async () => {
  const [users] = await connection.execute('SELECT * FROM users_crud.users');
  return users;
};

const userExists = (user) => {
  const message = 'Usuário não encontrado';
  if (!user) throw new Error(message);
};

const findById = async (id) => {
  const [user] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users_crud.users WHERE id = ?',
    [id],
  );
  userExists(user);
  return {
    id: user[0].id,
    firstName: user[0].first_name,
    lastName: user[0].last_name,
    email: user[0].email,
  };
};

const update = async (id, firstName, lastName, email, password) => {
  validateName(firstName, lastName);
  validateEmail(email);
  validatePassword(password);
  userExists(id);
  await connection.execute(
    'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id],
  );
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

const remove = async (id) => {
  await connection.execute('DELETE FROM users_crud.users WHERE id = ?', [id]);
}

module.exports = {
  create,
  list,
  findById,
  update,
  remove,
};
