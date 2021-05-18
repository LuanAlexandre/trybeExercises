// Exercicio 1
const assert = require('assert');
const greetPeople = (persons) => {
  let greeting = 'Hello ';

  for (let index = 0; index < persons.length; index += 1) {
    persons[index] = greeting + persons[index];
  }

  return persons;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

// Exercicio 2
const assert = require('assert');
const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let count = 1;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results += count;
      count += 1;
    } else {
      results += characters[index];
    }
  }
  return results.toString();
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);

// Exercicio 3
const assert = require('assert');
const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);

// Exercicio 4
const assert = require('assert');
function secondThirdSmallest(array) {
  let results = [];
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
