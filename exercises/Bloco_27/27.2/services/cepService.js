const cepModel = require('../models/cepModel');

const validateCep = (cep) => {
  const validCep = /\d{5}-?\d{3}/;
  return validCep.test(cep);
}

const findCep = async (cep) => {
  const answer = await cepModel.searchCep(cep);

  return answer;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const answer = await cepModel.createCep(cep, logradouro, bairro, localidade, uf);

  return answer;
}

module.exports = {
  validateCep,
  findCep,
  createCep,
};