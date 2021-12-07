import validateUsername from '../modules/validateUsername.js';
import validatePassword from '../modules/validatePassword.js';
import validateEmail from '../modules/validateEmail.js';

export default (req, res, _next) => {
  const { username, email, password } = req.body;

  const isValidUsername = validateUsername(username);
  const isValidPassword = validatePassword(password);
  const isValidEmail = validateEmail(email);

  if( !isValidUsername || !isValidPassword || !isValidEmail ) {
    return res.status(400).json({ message: 'invalid data'});
  }

  return res.status(201).json({ message: 'user created' });
};
