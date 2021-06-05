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

  it('sum operation', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    
    math.somar(5, 5);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(5, 5);
    expect(math.somar(5, 5)).toBe(10);
  });
});

