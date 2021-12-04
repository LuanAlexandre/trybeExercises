function newPromise(number) {
  return new Promise((resolve, reject) => {
    if((number % 3 === 0) && (number % 5 === 0)) resolve('FizzBuzz');
    if(number % 3 === 0) resolve('Fizz');
    if(number % 5 === 0) resolve('Buzz');
    return reject(number);
  });
}
