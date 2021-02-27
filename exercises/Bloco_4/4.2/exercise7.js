let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minNumber = numbers[0];

for (numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
  if (minNumber > numbers[numberIndex]) {
    minNumber = numbers[numberIndex];
  }
}

console.log('Minimum = ' + minNumber);