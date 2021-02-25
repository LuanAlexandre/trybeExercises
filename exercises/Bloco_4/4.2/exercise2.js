let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
  soma += numbers[numberIndex];  
}

console.log('Soma = ' + soma);