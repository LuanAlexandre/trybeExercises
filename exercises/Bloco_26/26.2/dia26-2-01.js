function isGreaterThanFifty(number1, number2, number3) {
  return new Promise((resolve, reject) => {
    if((typeof(number1) !== 'number') || (typeof(number2) !== 'number') || (typeof(number3) !== 'number')) {
      return reject(new Error("Informe apenas números"));
    }

    const result = (number1 + number2) * number3;
    if(result < 50) return reject(new Error("Valor muito baixo."));

    resolve(result);
  });
}

module.exports = isGreaterThanFifty;
