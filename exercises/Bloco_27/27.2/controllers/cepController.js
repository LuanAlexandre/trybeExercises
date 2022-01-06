const Joi = require('joi');
const { validateCep, findCep, createCep } = require('../services/cepService');

const find = async (req, res, next) => {
  try {
    const { cep } = req.params;
    const isValid = validateCep(cep);

    if (!isValid) {
      return res.status(400).json({ error: { code: 'invalidData', message: 'CEP inválido' } });
    }

    const result = await findCep(cep);

    if (!result) {
      return res.status(404).json({ error: { code: 'notFound', message: 'CEP não encontrado' } });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const create = async (req, res, next) => {
  const info = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  });

  const isValid = info.validate(req.body);

  if (isValid.error) return next(isValid.error);

  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const newCep = await createCep(cep, logradouro, bairro, localidade, uf);

  if (newCep.error) return next(newCep.error);

  if (newCep) return next({ error: { code: 'alreadyExists', message: 'CEP já existente' }});

  return res.status(201).json(newCep);
};

module.exports = {
  find,
  create,
};
