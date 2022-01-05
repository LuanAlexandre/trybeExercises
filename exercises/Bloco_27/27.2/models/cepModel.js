const connection = require('./connection');

const searchCep = (cep) => {
  const [answer] = connection.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  return answer;
};

module.exports = {
  searchCep,
};