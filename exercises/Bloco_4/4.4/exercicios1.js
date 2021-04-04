//Secao 1
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem vinda, ' + info.personagem + '\n');

//Secao 2

info.recorrente = 'Sim';

console.log(info);
console.log();

//Secao 3

for (let i in info) {
  console.log(i);
}
console.log();

//Secao 4

for (let i in info) {
  console.log(info[i]);
}
console.log();

// Secao 5

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim'
}

for (let i in info && info2) {
  if (info[i] === info2[i]) {
    console.log('Ambos ' + i + 's');
  } else {
    console.log(info[i] + ' e ' + info2[i]);
  }
}

