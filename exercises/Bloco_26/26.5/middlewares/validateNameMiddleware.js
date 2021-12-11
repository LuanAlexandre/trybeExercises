import validateName from '../modules/validateName.js';

const isValidName = (req, res, next) => {
  const { name } = req.body;

  const avalName = validateName(name);

  if (!avalName) {
    return res.status(400).json({ message: 'invalid name' });
  }

  req.name = name;

  next();
}

export default isValidName;