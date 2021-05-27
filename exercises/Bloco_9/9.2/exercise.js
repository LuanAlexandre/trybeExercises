const sumNumbers = new Promise((resolve, reject) => {
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
.then((divisions) => {
  const sumOfDivisions = new Promise((resolve, reject) => {
    const totalOfDivisions = divisions.reduce((acc, curr) => acc += curr, 0);
    console.log(`Promise resolvida`);
  })
})
.catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));