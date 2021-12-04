const randomNumber = require('../utils/functions/generateNumber');
const isGreaterThanFifty = require('./dia26-2-01');

const number1 = randomNumber();
const number2 = randomNumber();
const number3 = randomNumber();

async function solution() {
  try {
    const result = await isGreaterThanFifty(number1, number2, number3)
    console.log(`resultado: ${result}`);
  }
  catch (error) {
    console.log(`${error}`);
  }
}

solution();
