import { expect } from "chai";
import fs from 'fs';
import Sinon from "sinon";
import writeContentInAFile from '../writeContent.js';

const fileName = 'arquivoTeste.txt';
const fileContent = 'Testando com Node.js';

describe('Avalia a escrita de conteúdo em um arquivo', () => {
  describe('Quando a escrita é realizada com sucesso', () => {
    before(() => {
      Sinon.stub(fs, 'writeFileSync').returns('OK');
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe('A resposta', () => {
      it('é uma string', () => {
        const answer = writeContentInAFile(fileName, fileContent);

        expect(answer).to.be.a('string');
      });

      it('é igual a "OK"', () => {
        const answer = writeContentInAFile(fileName, fileContent);

        expect(answer).to.be.equals('OK');
      });
    });
  });
});
