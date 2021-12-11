import { expect } from "chai";
import avaliateNumber from '../avaliateNumber.js';

describe('Avalia a natureza de um valor', () => {
  describe('se o valor é um número e', () => {
    describe('é maior que 0 retorna', () => {
      it('"positivo"', () => {
        const answer = avaliateNumber(4);
        expect(answer).to.be.equals('positivo');
      });
    });

    describe('é menor que 0 retorna', () => {
      it('"negativo"', () => {
        const answer = avaliateNumber(-3);
        expect(answer).to.be.equals('negativo');
      });
    });

    describe('é igual a 0 retorna', () => {
      it('"neutro"', () => {
        const answer = avaliateNumber(0);
        expect(answer).to.be.equals('neutro');
      });
    });
  });

  describe('se não for um número e', () => {
    describe('é um objeto retorna', () => {
      it('"o valor deve ser um número"', () => {
        const answer = avaliateNumber({});
        expect(answer).to.be.equals('o valor deve ser um número');
      });
    });

    describe('é um array retorna', () => {
      it('"o valor deve ser um número"', () => {
        const answer = avaliateNumber([]);
        expect(answer).to.be.equals('o valor deve ser um número');
      });
    });

    describe('é uma string retorna', () => {
      it('"o valor deve ser um número"', () => {
        const answer = avaliateNumber('Olá');
        expect(answer).to.be.equals('o valor deve ser um número');
      });
    });

    describe('é um booleano retorna', () => {
      it('"o valor deve ser um número"', () => {
        const answer = avaliateNumber(true);
        expect(answer).to.be.equals('o valor deve ser um número');
      });
    });
  });
});
