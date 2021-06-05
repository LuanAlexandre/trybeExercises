const math = require('./contentExercises');

describe('arithmetic operations', () => {
  it('call of minus', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });

  it('multiply operation', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(2, 5)).toBe(10);
  });
});

