let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersProduct = [];

for (numbersIndex = 1; numbersIndex < numbers.length; numbersIndex += 1) {
  if (numbersIndex === numbers.length - 1) {
    numbersProduct.push(numbers[numbersIndex] * 2);
  } else {
    numbersProduct.push(numbers[numbersIndex] * numbers[numbersIndex-1]);
  }
}

console.log(numbersProduct);
