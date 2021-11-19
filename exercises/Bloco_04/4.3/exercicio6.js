const number = 7;
let count = 0;

const isCousin = () => {
  for (let index = 0; index <= number; index += 1) {
    if (index !== 0) {
      if (number % index === 0) {
        count += 1;
      }
    }
  }

  (count === 2) ? console.log('Is a prime number!') : console.log('Is not a prime number');
}

isCousin();
