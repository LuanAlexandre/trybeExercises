import validateInitials from '../modules/validateInitials.js';

const isValidInitials = (req, res, next) => {
  const { initials } = req.body;

  const avalInitials = validateInitials(initials);

  if (!avalInitials) {
    return res.status(400).json({ message: 'invalid initials' });
  }

  req.initials = initials;

  next();
}

export default isValidInitials;