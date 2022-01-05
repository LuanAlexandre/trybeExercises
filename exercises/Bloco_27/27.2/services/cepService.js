const { searchCep } = require('../models/cepModel');

const validateCep = (cep) => {
  const validCep = /\d{5}-?\d{3}/;
  return validCep.test(cep);
}

const findCep = async (cep) => {
  const answer = await searchCep(cep);

  return answer;
};

module.exports = {
  validateCep,
  findCep,
};