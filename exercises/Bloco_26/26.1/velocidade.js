const readline = require('readline-sync');

function calculaVelocidade() {
  const distancia = readline.questionInt("Digite a distancia em metros: ");
  const tempo = readline.questionInt("Digite o tempo em segundos: ");
  
  const velocidade = distancia / tempo;
  
  console.log(`${velocidade}m/s`);
}

module.exports = calculaVelocidade;
