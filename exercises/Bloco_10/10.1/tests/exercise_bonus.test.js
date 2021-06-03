const searchEmployee = require('../exercise_bonus');

describe('busca por funcionário', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se a função searchEmployee retorna um erro caso o ID não exista', () => {
    expect(() => { searchEmployee('1234-5', 'firstname'); }).toThrow();
  });

  it(`Testa se a função searchEmployee retorna a mensagem de erro 'ID não identificada'`, () => {
    expect(() => { searchEmployee('1234-5', 'firstname'); }).toThrowError(`ID não identificada`);
  });

  it('Testa se a função searchEmployee retorna um erro caso a informação não exista', () => {
    expect(() => { searchEmployee('1234-5', 'firstname'); }).toThrow();
  });

  it(`Testa se a função searchEmployee retorna a mensagem de erro 'Informação indisponível'`, () => {
    expect(() => { searchEmployee('4678-2', 'sports'); }).toThrowError(`Informação indisponível`);
  });

  it(`Testa se a função 'searchEmployee(4678-2, 'firstname')' retorna o primeiro nome do funcionário da ID consultada'`, () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });

  it(`Testa se a função 'searchEmployee(4678-2, 'lastname')' retorna o último nome do funcionário da ID consultada'`, () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });

  it(`Testa se a função 'searchEmployee(4678-2, 'specialities')' retorna as especialidades do funcionário da ID consultada'`, () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
});