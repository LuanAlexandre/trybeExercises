const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
// const sort = () => {
//   for(let index = 0; index < oddsAndEvens.length; index += 1) {
//     for(let element = 0; element < oddsAndEvens.length; element += 1) {
//       if (oddsAndEvens[index] <= oddsAndEvens[element]) {
//         const assistant = oddsAndEvens[index];
//         oddsAndEvens[index] = oddsAndEvens[element];
//         oddsAndEvens[element] = assistant;
//       }
//     }
//   }
// }

// sort();

oddsAndEvens.sort();

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
