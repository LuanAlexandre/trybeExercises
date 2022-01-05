const errorMiddleware = (err, _req, res, _next) => {
  const { message } = err;
  return res.status(400).json({ message });
};

module.exports = errorMiddleware;
