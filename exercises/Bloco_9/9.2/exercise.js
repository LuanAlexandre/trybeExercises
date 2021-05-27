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
  resolve([sum/2, sum/3, sum/5, sum/10]);
})
.then(() => console.log(`Promise resolvida`))
.catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));