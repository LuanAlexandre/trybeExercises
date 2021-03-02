function palindrome(word) {
  let invertsWord = new String();
  for(indexWord = word.length - 1; indexWord >= 0; indexWord -= 1) {
    invertsWord += word[indexWord];
  }
  if(word === invertsWord) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('arara'));
console.log(palindrome('desenvolvimento'));