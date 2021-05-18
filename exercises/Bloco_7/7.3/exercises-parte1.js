// Exercicio 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const test1 = sum(4, 5);
const test2 = sum(0, 0);

assert.strictEqual(test1, 9, `4 + 5 = 9`);
assert.strictEqual(test2, 0, `0 + 0 = 0`);
assert.strictEqual(sum(4, '5'), 9);
assert.throws(() => sum(4, '5'), `'parameters must be numbers'`);

// Exercicio 2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const newList = [1, 3, 5, 7, 9];
myRemove(newList, 5);
assert.deepStrictEqual(newList, [1, 3, 5, 7, 9]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// Exercicio 3
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const listToChange = [0, 2, 4, 6, 8];
myRemoveWithoutCopy(listToChange, 4);
assert.deepStrictEqual(listToChange, [0, 2, 4, 6, 8]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// Exercicio 4
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), `fizzbuzz`);
assert.strictEqual(myFizzBuzz(9), `fizz`);
assert.strictEqual(myFizzBuzz(25), `buzz`);
assert.strictEqual(myFizzBuzz(28), 28);
assert.strictEqual(myFizzBuzz('5'), 'buzz', 'Parameter must be number');

// Exercicio 5
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2);
assert.deepStrictEqual(obj1, obj3);
assert.deepStrictEqual(obj2, obj3);
