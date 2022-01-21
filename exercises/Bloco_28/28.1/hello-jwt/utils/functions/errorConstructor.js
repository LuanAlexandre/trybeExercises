const errorConstructor = (statusCode, message) => ({ statusCode, message });

module.exports = {
  errorConstructor,
};