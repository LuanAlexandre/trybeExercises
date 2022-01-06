const connection = require('./connection');

const searchCep = async (cep) => {
  const [answer] = await connection.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  return answer;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf],
  );

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
}

module.exports = {
  searchCep,
  createCep,
};