const readline = require('readline-sync');

function calculaFatorial() {
  let numero = readline.questionInt("Digite um número positivo: ");

  if(numero > 0) {
    let resultado = 1;
    while(numero > 0) {
      resultado = resultado * numero;
      numero -= 1;
    };
    console.log(resultado);
  }
  else {
    console.log("Não positivo.\n")
    calculaFatorial();
  }
}

module.exports = calculaFatorial;
