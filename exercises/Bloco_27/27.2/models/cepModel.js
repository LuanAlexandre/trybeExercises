const connection = require('./connection');

const searchCep = async (cep) => {
  const [answer] = await connection.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  return answer[0];
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  console.log('To adicionando no banco');
  const [answer] = await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf],
  );

  return answer;
};

module.exports = {
  searchCep,
  createCep,
};