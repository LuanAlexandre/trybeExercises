const validation = (req, res, next) => {
  try {
    const { username, admin } = req.user;

    return res.status(200).json({ username, admin });
  } catch (error) {
    console.error(`GET USERS ME -> ${error}`);
    next(error);
  }
};

module.exports = {
  validation
};