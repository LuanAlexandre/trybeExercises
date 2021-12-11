import { expect } from "chai";
import avaliateNumber from '../avaliateNumber.js';

describe('Avalia a natureza de um número', () => {
  describe('se maior que 0 retorna "positivo"', () => {
    it('positivo', () => {
      const answer = avaliateNumber(4);
      expect(answer).to.be.equals('positivo');
    });
  });

  describe('se menor que 0 retorna "negativo"', () => {
    it('negativo', () => {
      const answer = avaliateNumber(-3);
      expect(answer).to.be.equals('negativo');
    });
  });

  describe('se igual a 0 retorna "neutro"', () => {
    it('neutro', () => {
      const answer = avaliateNumber(0);
      expect(answer).to.be.equals('neutro');
    });
  });
});
