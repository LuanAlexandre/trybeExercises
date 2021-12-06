const validateUsername = (username) => username.length <= 3;
const validatePassword = (password) => password.length < 4 && password.length > 8;
const validateEmail = (email) => email === /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

const auth = (req, res, next) => {
  const { username, email, password } = req.body;

  const isValidUsername = validateUsername(username);
  const isValidPassword = validatePassword(password);
  const isValidEmail = validateEmail(email);

  if( isValidUsername || isValidPassword || isValidEmail ) {
    return res.status(400).json({ message: 'invalid data'});
  }

  return res.status(201).json({ message: 'user created' });
}

module.exports = {
  validateEmail,
  validatePassword,
  validateUsername,
  auth,
};
