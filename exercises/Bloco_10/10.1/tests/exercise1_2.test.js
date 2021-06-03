const functions = require('../exercise1_2');
const encode = functions.encode;
const decode = functions.decode;

describe('encode e decode',  () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof(encode)).toEqual(`function`);
    expect(typeof(decode)).toEqual(`function`);
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.', () => {
    expect(encode('arara')).toEqual('1r1r1');
    expect(encode('ele')).toEqual('2l2');
    expect(encode('indi')).toEqual('3nd3');
    expect(encode('oxford')).toEqual('4xf4rd');
    expect(encode('urubu')).toEqual('5r5b5');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('1r1r1')).toEqual('arara');
    expect(decode('2l2')).toEqual('ele');
    expect(decode('3nd3')).toEqual('indi');
    expect(decode('4xf4rd')).toEqual('oxford');
    expect(decode('5r5b5')).toEqual('urubu');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const decodedMessage = 'hello world!';
    const encondedMessage = 'h3ll4 w4rld!';
    expect(encode(decodedMessage).length).toBe(decodedMessage.length);
    expect(decode(encondedMessage).length).toBe(encondedMessage.length);
  });
});