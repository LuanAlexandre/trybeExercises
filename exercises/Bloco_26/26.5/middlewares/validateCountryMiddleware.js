import validateCountry from '../modules/validateCountry.js';
import errorMiddleware from '../middlewares/errorMiddleware.js';

const isValidCountryName = (req, res, next) => {
  const { country } = req.body;

  const avalCountry = validateCountry(country);

  if (!avalCountry) {
    return res.status(400).json({ message: 'invalida data' });
  }

  req.country = country;

  next();
};

export default isValidCountryName;
