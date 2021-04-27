const highestWord = (phrase) => {
  const wordsOfPhrase = phrase.split(' ');
  let highest = wordsOfPhrase[0];
  for(let index = 0; index < wordsOfPhrase.length; index += 1) {
    const word = wordsOfPhrase[index];

    if(highest.length <= word.length) {
      highest = word
    }
  }

  return highest;
}

console.log(highestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));