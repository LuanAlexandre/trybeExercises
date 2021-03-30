const compareNumbers = (a, b) => {
  return (a === b);
}

const result = (number, checkNumbers) => {
  const drawNumber = Math.ceil(Math.random()*5);

  return console.log(checkNumbers(number,drawNumber) ? `Congratulation, you won` : `Try again`);

}

result(3,compareNumbers);
