const readline = require('readline-sync');

function index() {
  console.log("1 - imc \n2 - velocidade \n3 - sorteio\n");
  const option = readline.questionInt("Escolha o script a ser executado: ");
  switch(option) {
    case 1: {
      const imc = require('./imc');
      imc();
      break;
    }
    case 2: {
      const velocidade = require('./velocidade');
      velocidade();
      break;
    }
    case 3: {
      const sorteio = require('./sorteio');
      sorteio();
      break;
    }
    default: {
      const imc = require('./imc');
      imc();
      break;
    }
  };
}

index();
