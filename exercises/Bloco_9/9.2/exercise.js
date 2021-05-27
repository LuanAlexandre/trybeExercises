const fetch = require('node-fetch');

const fetchNumbers = new Promise((resolve, reject) => {
  const numbers = [];
  let sum = 0;
  for (let i = 0; i < 10; i += 1) {
    number = Math.floor(Math.random() * 51);
    numbers.push(number*number);
    sum += number*number;
  }
  if (sum >= 8000) return reject(sum);
  resolve(sum);
})
.then((divisions) => [divisions/2, divisions/3, divisions/5, divisions/10])
.catch(() => console.log(`Promise rejeitada`));