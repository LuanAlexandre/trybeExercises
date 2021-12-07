const error = (err, _req, res, _next) => {
  if(err.code && err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(400).json({ message: err.message });
};

export default error;
