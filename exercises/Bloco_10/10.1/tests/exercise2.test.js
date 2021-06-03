const myRemove = require('../exercise2');

describe('remove um elemento do array', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  const numbers = [2, 4, 6, 8, 10];
  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove(numbers, 8)).not.toEqual(numbers);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});