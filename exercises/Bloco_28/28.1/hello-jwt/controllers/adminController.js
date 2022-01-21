const access = (req, res, next) => {
  const secretContent = req.admin;

  return res.status(200).json(secretContent);
};

module.exports = {
  access
};