const { findCep, createCep } = require('../services/cepService');

const find = async (req, res, _next) => {
  try {
    const { cep } = req.params;

    const result = await findCep(cep);

    return res.status(200).json(result);

  } catch (error) {
    console.error(`GET FIND CEP -> ${error.error.message}`);
    return res.status(error.error.status).json(error.error.message);
  }
};

const create = async (req, res, _next) => {
  try {
    const { body } = req;

    const newCep = await createCep(body);

    return res.status(201).json(newCep);
  } catch (error) {
    console.error(`POST CREATE CEP -> ${error.error.message}`);
    return res.status(error.error.status).json(error.error.message);
  }
};

module.exports = {
  find,
  create,
};
