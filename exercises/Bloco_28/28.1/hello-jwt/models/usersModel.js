const database = require('../utils/data/database');

const usersQuantity = database.length;

const create = (admin, username, password) => {
  const id = usersQuantity + 1;
  const newUser = { id, admin, username, password };

  database.push(newUser);

  return id;
};

const list = () => {
  const users = database.map((user) => user);

  return users;
};

const find = (username) => {
  const user = database.find((user) => user.username === username);

  return user;
};

const update = (username, admin, password) => {
  const user = find(username);

  user.admin = admin;
  user.password = password;
};

const remove = (username) => {
  const user = find(username);
  const index = database.indexOf(user);

  database.splice(index, 1);

  return user;
};

module.exports = {
  create,
  list,
  find,
  update,
  remove,
};