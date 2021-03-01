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

//Secao 3

for (let i in info) {
  console.log(i);
}


