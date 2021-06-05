const uppercase = require('./exercise1');

describe('capitalize the sentence', () => {
  it('return must be in uppercase', done => {
    uppercase('i love you', (str) => {
      expect(str).toBe('I LOVE YOU');
      done();
    });
  });
});
