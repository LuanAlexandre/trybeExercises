const encode = (phrase) => {
  const encoded = phrase.split('');
  encoded.forEach((letter, index, array) => {
    if(letter === 'a') array[index] = '1';
    else if(letter === 'e') array[index] = '2';
    else if(letter === 'i') array[index] = '3';
    else if(letter === 'o') array[index] = '4';
    else if(letter === 'u') array[index] = '5';
  });

  return encoded.join('');
}

const decode = (phrase) => {
  const decoded = phrase.split('');
  decoded.forEach((letter, index, array) => {
    if(letter === '1') array[index] = 'a';
    else if(letter === '2') array[index] = 'e';
    else if(letter === '3') array[index] = 'i';
    else if(letter === '4') array[index] = 'o';
    else if(letter === '5') array[index] = 'u';
  });

  return decoded.join('');
}

module.exports = {encode, decode};
