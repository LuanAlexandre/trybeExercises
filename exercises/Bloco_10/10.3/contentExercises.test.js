const math = require('./contentExercises');

describe('arithmetic operations', () => {
  it('sum', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
});

