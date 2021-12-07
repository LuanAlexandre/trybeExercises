import validateEmail from "../modules/validateEmail.js";
import validatePassword from "../modules/validatePassword.js";
import generateToken from '../modules/crypto.js';

export default (req, res, _next) => {
  const { email, password } = req.body;

  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  if( !isValidEmail || !isValidPassword ) {
    return res.status(400).json({ message: 'email or password is incorrect' });
  }

  return res.status(200).json({ token: generateToken() });

};
