const sum = require('../exercise1');

describe('soma dois números', () => {
  it('sum(4, 5) deve retornar 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('sum(0, 0) deve retornar 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  function testError() {
    sum(4, '5');
  }
  it('testa se um erro é lançado', () => {
    expect(testError).toThrowError(Error);
  });

  it('verifica a mensagem de erro que é lancçada', () => {
    expect(testError).toThrowError(`parameters must be numbers`);
  });
});
