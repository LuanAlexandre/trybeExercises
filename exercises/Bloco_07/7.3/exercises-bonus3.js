const assert = require('assert');
// escreva a função removeMiddle aqui
function removeMiddle(arrayOfWords) {
  const mid = Math.floor((arrayOfWords.length - 1) / 2);
  return arrayOfWords.splice(mid, 1);
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);