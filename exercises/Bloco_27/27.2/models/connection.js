const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'alexandre',
  password: '24L11a*19R97b',
  database: 'cep_lookup',
});

module.exports = connection;