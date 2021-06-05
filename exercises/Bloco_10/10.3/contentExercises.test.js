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

  it('division operation', () => {
    const mockDividir = jest.spyOn(math, 'dividir')
    .mockResolvedValue(15)
    .mockResolvedValueOnce(2)
    .mockResolvedValueOnce(5);

    expect(mockDividir).toHaveBeenCalledTimes(0);

    expect(mockDividir()).resolves.toBe(2);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(1);

    expect(mockDividir()).resolves.toBe(5);
    expect(mockDividir).toHaveBeenCalledTimes(2);

    expect(mockDividir()).resolves.toBe(15);
    expect(mockDividir).toHaveBeenCalledTimes(3);

    expect(mockDividir(100, 10)).resolves.toBe(10);
    expect(mockDividir).toHaveBeenCalledTimes(4);
    expect(mockDividir).toHaveBeenCalledWith(100, 10);
  });
});

