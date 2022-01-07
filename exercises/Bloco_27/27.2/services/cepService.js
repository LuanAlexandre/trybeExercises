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
  return validCep.test(cep);
};

const validateInfo = (info) => {
  const { error } = cepSchema.validate(info);

  if (error) throw { error: { code: 'invalidData', status: 400, message: error.message } };

  return info;
};

const findCep = async (cep) => {
  const isValidCep = validateCep(cep);

  if (!isValidCep) throw { error: { code: 'invalidData', status: 400, message: 'CEP inválido' }};

  const answer = await cepModel.searchCep(cep);

  if (!answer) throw { error: { code: 'notFound', status: 404, message: 'CEP não encontrado'}};

  return answer;
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  validateInfo({ cep, logradouro, bairro, localidade, uf });

  const exists = await findCep(cep);

  if (exists && exists.length !== 0) throw { error: { code: 'alreadyExists', status: 409, message: 'CEP já existente' }};

  const answer = await cepModel.createCep(cep, logradouro, bairro, localidade, uf);

  return answer;
};

module.exports = {
  findCep,
  createCep,
};