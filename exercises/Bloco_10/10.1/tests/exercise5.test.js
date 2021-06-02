const objts = require('../exercise5');

describe('compara objetos', () => {
  it('compara se dois objetos são iguais', () => {
    expect(objts[0]).toEqual(objts[1]);
  });

  it('compara se dois objetos são iguais', () => {
    expect(objts[0]).toEqual(objts[2]);
  });

  it('compara se dois objetos são iguais', () => {
    expect(objts[1]).toEqual(objts[2]);
  });
});