const { loginService } = require('../services');

const login = (req, res, next) => {
  try {
    const { username, password } = req.body;

    const token = loginService.generateToken(username, password);

    return res.status(201).json({ token });
  } catch(error) {
    console.error(`POST LOGIN -> ${error}`);
    next(error);
  }
};

module.exports = login;