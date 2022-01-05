const { validateCep, findCep } = require('../services/cepService');

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

module.exports = {
  find,
};
