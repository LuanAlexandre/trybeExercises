let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

const testingScope = (escopo) => ( escopo ?
  ifScope = ifScope + ' ótimo, fui utilizada no escopo !' && console.log(ifScope) : console.log(elseScope)
);

testingScope(true);