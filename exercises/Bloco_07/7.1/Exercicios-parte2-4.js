const skills = ['C', 'CSS', 'Github', 'HTML', 'JavaScript'];

function replacesString(string) {
  let phrase = 'Tryber x aqui!';
  phrase = phrase.replace('x', string);
  return phrase;
}

// console.log(`${replacesString('Liandra')}`);

function concatenateStrings(word, newPhrase) {
  const newString = `${word}
${newPhrase}
${skills}`;

  return newString;
}

const showStrings = concatenateStrings(replacesString('Liandra'), 'Minhas cinco principais skills são:');

console.log(`${showStrings}`);
