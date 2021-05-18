function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...
  if (remaining < 0) throw new Error('paid value is not enough');
  else {
    while (remaining > 0) {
      if (remaining >= coins[0]) {
        change.push(coins[0]);
        remaining -= coins[0];
      }
      if (remaining >= coins[1] && remaining < coins[0]) {
        change.push(coins[1]);
        remaining -= coins[1];
      }
      if (remaining >= coins[2] && remaining < coins[1]) {
        change.push(coins[2]);
        remaining -= coins[2];
      }
      if (remaining >= coins[3] && remaining < coins[2]) {
        change.push(coins[3]);
        remaining -= coins[3];
      }
      if (remaining >= coins[4] && remaining < coins[3]) {
        change.push(coins[4]);
        remaining -= coins[4];
      }
      if (remaining >= coins[5] && remaining < coins[4]) {
        change.push(coins[5]);
        remaining -= coins[5];
      }
      if (remaining >= coins[6] && remaining < coins[5]) {
        change.push(coins[6]);
        remaining -= coins[6];
      }
      if (remaining >= coins[7] && remaining < coins[6]) {
        change.push(coins[7]);
        remaining -= coins[7];
      }
    }
  }

  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
