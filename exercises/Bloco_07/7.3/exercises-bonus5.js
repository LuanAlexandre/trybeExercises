/*
Retirado do gabarito.
*/

const assert = require('assert');

function verify(password) {
  if (password == null) return false;
  else if (password.length <= 8) return false;
  else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) return false;
  return true;
}

assert.strictEqual(typeof verify, 'function');
assert(!verify('12345678'));
assert(!verify(null));
assert(!verify('youshallnotpass'));
assert(!verify('GANDALFTHEGRAY'));
assert(!verify('GandalfTheWhite'));
assert(!verify('G4nd4lfTh3Wh1t3'));
