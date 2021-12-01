const readline = require('readline-sync');

const weight = readline.questionFloat("Qual seu peso? ");
const height = readline.questionFloat("Qual sua altura? ");

const imc = weight / (height * height);

console.log(imc);

module.exports = imc;
