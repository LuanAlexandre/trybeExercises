import validateToken from '../modules/validateToken.js';

const authToken = async (req, res, next) => {
  const token = req.headers.authorization;

  const isValidToken = validateToken(token);

  if(!isValidToken) {
    return res.status(401).json({ message: 'invalid token' });
  }

  next();
};

export default authToken;
