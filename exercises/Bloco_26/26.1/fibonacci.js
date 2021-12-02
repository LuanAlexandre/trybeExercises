const readline = require('readline-sync');

function fibonacci() {
  const quantidade = readline.questionInt("Número de elementos de fibonacci: ");

  for(let curr = 0; curr < quantidade; curr += 1) {
    console.log(curr + (curr + 1));
  }
}

module.exports = fibonacci;
