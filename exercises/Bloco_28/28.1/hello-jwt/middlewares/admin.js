const { adminService } = require('../services');
const { verifyIfUserIsAdmin } = adminService;

const admin = (req, _res, next) => {
  try {
    const { admin } = req.user;

    const isAdmin = verifyIfUserIsAdmin(admin);

    req.admin = isAdmin;

    next();
  } catch(error) {
    console.error(`GET TOP SECRET -> ${error.message}`);
    next(error);
  }
};

module.exports = admin;