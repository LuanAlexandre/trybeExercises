let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contOdd = 0;

for (numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
  if (numbers[numbersIndex] % 2 != 0) {
    contOdd += 1;
  }
}

if (contOdd != 0) {
  console.log('There are ' + contOdd + ' odd numbers.');
} else {
  console.log('No odd values ​​found');
}
