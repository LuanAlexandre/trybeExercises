const randomNumber = require('../utils/functions/generateNumber');
const isGreaterThanFifty = require('./dia26-2-01');

const number1 = randomNumber();
const number2 = randomNumber();
const number3 = randomNumber();

isGreaterThanFifty(number1, number2, number3)
  .then((result) => console.log(`resultado: ${result}`))
  .catch((error) => console.log(`${error}`));
