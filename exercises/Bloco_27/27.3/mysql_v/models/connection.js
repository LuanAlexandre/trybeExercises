const mysql = require('mysql2/promise');

require('dotenv').config();

const HOST = process.env.DB_HOST || 'localhost';
const USER = process.env.DB_USER || 'root';
const PASSWORD = process.env.DB_PASS;

const connection = mysql.createPool({
  host: HOST, // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: USER, // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: PASSWORD, // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: 'rest_exercicios',
});

module.exports = connection;
