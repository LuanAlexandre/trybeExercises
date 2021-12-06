const express = require('express');
const auth = require('./utils/middlewares/authMiddleware');
const generateToken = require('./utils/middlewares/crypto');
const bodyParser = require('body-parser');

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

// app.use(auth);

app.post('/user/register', auth.auth);

app.post('/user/login', (req, res, _next) => {
  const { email, password } = req.body;

  const isValidEmail = auth.validateEmail(email);
  const isValidPassword = auth.validatePassword(password);

  if( isValidEmail || isValidPassword ) {
    return res.status(400).json({ message: 'email or password is incorrrect' });
  }

  return res.status(200).json({ token: generateToken() });

});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
