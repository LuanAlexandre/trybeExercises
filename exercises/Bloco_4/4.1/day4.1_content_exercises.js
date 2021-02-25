// Parte II
const name = 'Luan Alexandre';
const birthCity = 'Manaus';
let birthYear = 1997;
console.log(name, birthCity, birthYear);
birthYear = 2020;
console.log(birthYear);
// birthCity = 'Canutama'; // constantes não podem ter seu valor alterado

// Parte III
let base = 5, altura = 10;
let area = base * altura;
let perimetro = 2*base + 2*altura;

//Parte IV
let status = 76;
if (status >= 80) {
  console.log('Parabéns, você foi aprovado(a)')
} else if (status < 80 && status >= 60) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovado(a)');
}

//Parte V
status = 'aprovado(a)';

switch (status) {
  case 'aprovado(a)':
    console.log('Você foi aprovado(a)');
    break;
  
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;
  
  case 'reprovado(a)':
    console.log('Você foi reprovado(a)');
    break;
}