/* Processo de criação de uma promise */

// Passo 1 - Construtor

/* 
 const promise = new Promise((resolve, reject) => {});

 O construtor recebe como parâmetro uma função com dois parâmetros.
 resolve para quando a função ocorrer com sucesso,
 reject para quando a função falhar.
*/


// Exemplo 1
// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
// });

// Gestores de fluxo
// then() e catch()

//Exemplo 1 com .then()
// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(number);
// }).then(number => `Que sucesso =) nosso número foi ${number}`).then(msg => console.log(msg));

//Exemplo com .cath()
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));