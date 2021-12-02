const readline = require('readline-sync');

function game() {
  const resposta = Math.round(Math.random() * 10);
  
  const palpite = readline.questionInt("Digite o seu palpite (um número entre 0 e 10): ");
  
  if(palpite === resposta) console.log("Parabéns, número correto!");
  else console.log(`Opa, não foi dessa vez. O número era ${resposta}`);
  
  const jogarNovamente = readline.question("1 - Jogar de novo\n2 - Sair\n");

  if(jogarNovamente === 1) game();
  else console.log("Até mais! :)");
}

game();

