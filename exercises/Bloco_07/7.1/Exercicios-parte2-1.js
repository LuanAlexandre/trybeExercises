//sem recursão
function factorial(integer) {
  let product = 1;
  let count = 1;
  while(count <= integer) {
    product *= count;
    count += 1;
  }
  return product;
}

console.log(factorial(0));

//com recursão
function fatorial(n) {
  if (n === 0) return 1;
  else return n*fatorial(n-1);
}

console.log(fatorial(4));
