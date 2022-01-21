const { usersService } = require('../services');
const { findUser, createUser } = usersService;

const login = (req, res, next) => {
  try {
    const { username, password } = req.body;

    const token = findUser(username, password);

    return res.status(201).json({ token });
  } catch(error) {
    console.error(`POST LOGIN -> ${error}`);
    next(error);
  }
};

const signup = (req, res, next) => {
  try {
    const { username, password } = req.body;

    const token = createUser(username, password);

    return res.status(201).json({ token });
  } catch (error) {
    console.error(`POST CREATE USER -> ${error.message}`);
    next(error);
  }
};

module.exports = {
  login,
  signup,
};