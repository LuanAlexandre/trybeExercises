const {
  validateCep,
  findCep,
  createCep,
  validateInfo,
  validInexistenceOfCep,
} = require('../services/cepService');

const find = async (req, res, _next) => {
  try {
    const { cep } = req.params;

    const isValid = validateCep(cep);

    if (isValid.error) throw(isValid.error);

    const result = await findCep(cep);

    if (result.error) throw(result.error);

    return res.status(200).json(result);

  } catch (error) {
    console.error(`GET FIND CEP -> ${error.message}`);
    return res.status(error.status).json(error.message);
  }
};

const create = async (req, res, _next) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    const isValid = validateInfo(cep, logradouro, bairro, localidade, uf);

    if (isValid.error) throw (isValid.error);

    const exists = await validInexistenceOfCep(cep);

    if (exists.error.status === 409) throw (exists.error);

    const newCep = await createCep(cep, logradouro, bairro, localidade, uf);

    return res.status(201).json(newCep);
  } catch (error) {
    console.error(`POST CREATE CEP -> ${error.message}`);
    return res.status(error.status).json(error.message);
  }
};

module.exports = {
  find,
  create,
};
