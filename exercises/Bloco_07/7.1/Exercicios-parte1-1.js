let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

const testingScope = (escopo) => ( escopo ?
  console.log(`${ifScope} ótimo, fui utilizada no escopo`) : console.log(elseScope)
);

// testingScope(false);
testingScope(true);