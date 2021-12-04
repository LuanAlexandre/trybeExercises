function newPromise(number) {
  return new Promise((resolve, reject) => {
    if(number % 3 === 0) resolve('Fizz');
  });
}
