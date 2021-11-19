// Exercicio 1
const assert = require('assert');
// escreva a função addOne aqui
function addOne(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    let element = arr[index];
    element += 1;
  }
  return arr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// Exercicio 2
const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(arrayOfWords) {
  let newArray = [];

  for (let index = 0; index < arrayOfWords.length; index += 1) {
    newArray.push(arrayOfWords[index].length);
  }

  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// Exercicio 3
const assert = require('assert');
// escreva a função sumAllNumbers aqui
function sumAllNumbers(arrayOfIntegers) {
  let sum = 0;

  for (let index = 0; index < arrayOfIntegers.length; index += 1) {
    sum += arrayOfIntegers[index];
  }

  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// Exercicio 4
const assert = require('assert');
// escreva a função findTheNeedle aqui
function findTheNeedle(arrayOfWords, word) {
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    if (word === arrayOfWords[index]) return index;
  }
  return -1;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
