let custo = 50.0, preco = 100.0;

if (custo >= 0 && preco >= 0) {
  let custoTotal = custo + 0.2*custo;
  console.log('R$ ' + 1000.0*(preco - custoTotal));
} else {
  console.log('Error! Invalid values.');
}
