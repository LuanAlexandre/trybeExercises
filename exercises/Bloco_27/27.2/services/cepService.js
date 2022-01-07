const Joi = require('joi');
const cepModel = require('../models/cepModel');
const apiModel = require('../models/externalApiModel');

const cepSchema = Joi.object({
  cep: Joi.string().not().empty().required(),
  logradouro: Joi.string().not().empty().required(),
  bairro: Joi.string().not().empty().required(),
  localidade: Joi.string().not().empty().required(),
  uf: Joi.string().not().empty().required(),
});

const validateCep = (cep) => {
  const validCep = /\d{5}-?\d{3}/;

  if (!validCep.test(cep)) return { error: { code: 'invalidData', status: 400, message: 'CEP inválido' }};

  return cep;
};

const findCep = async (cep) => {
  const answer = await cepModel.searchCep(cep);

  if (!answer) return { error: { code: 'notFound', status: 404, message: 'CEP não encontrado'}};

  return answer;
};

const validateInfo = (cep, logradouro, bairro, localidade, uf) => {
  console.log('To validando as informacoes');
  const { error } = cepSchema.validate({ cep, logradouro, bairro, localidade, uf });

  if (error) return { error: { code: 'invalidData', status: 400, message: error.message } };

  return true;
};

const validInexistenceOfCep = async (cep) => {
  console.log('To validando se o cep ja existe');
  const exists = await findCep(cep);

  if (!exists.error) return { error: { code: 'alreadyExists', status: 409, message: 'CEP já existente' }};

  return exists;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  console.log('To criando o cep');
  await cepModel.createCep(cep, logradouro, bairro, localidade, uf);

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = {
  findCep,
  createCep,
  validateCep,
  validateInfo,
  validInexistenceOfCep,
};