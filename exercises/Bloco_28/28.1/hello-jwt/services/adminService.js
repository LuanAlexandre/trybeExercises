const errorConstructor = require("../utils/functions/errorConstructor");

const verifyIfUserIsAdmin = (admin) => {
  if (admin === false) {
    const message = 'Restricted access';
    throw errorConstructor(403, message);
  }
  return { secretInfo: 'Peter Parker é o Homem-Aranha'};
};

module.exports = {
  verifyIfUserIsAdmin,
};