const readline = require('readline-sync');

const weight = readline.questionInt("Qual seu peso? ");
const height = readline.questionInt("Qual sua altura? ");

const imc = weight / (height * height);

console.log(imc);

module.exports = imc;
