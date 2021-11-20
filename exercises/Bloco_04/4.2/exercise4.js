let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let averageNumbers;

for (numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
  sumNumbers += numbers[numberIndex];  
}

averageNumbers = sumNumbers / numbers.length;

console.log('Average = ' + averageNumbers);

if (averageNumbers > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}