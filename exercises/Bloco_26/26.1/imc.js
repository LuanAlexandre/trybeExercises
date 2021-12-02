const readline = require('readline-sync');

function calculaImc() {
  const weight = readline.questionFloat("Qual seu peso? ");
  const height = readline.questionFloat("Qual sua altura? ");
  
  const imc = weight / (height * height);
  
  console.log(imc);
  
  if(imc < 18.5) console.log("Abaixo do peso (magreza)");
  if(imc >= 18.5 && imc <= 24.9) console.log("Peso normal");
  if(imc >= 25 && imc <= 29.9) console.log("Acima do peso (sobrepeso)");
  if(imc >= 30 && imc <= 34.9) console.log("Obesidade grau I");
  if(imc >= 35 && imc <= 39.9 ) console.log("Obesidade grau II");
  if(imc >= 40) console.log("Obesidade graus III e IV");
}

module.exports = calculaImc;
