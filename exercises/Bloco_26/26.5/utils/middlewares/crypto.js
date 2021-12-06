const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(12).toString('hex');

module.exports = generateToken;
