// Secao 1 - Funcao palindromo

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
console.log();

// Secao 2 - Funcao que retorna o indice do maior numero de um array

function indexHigherNumber(listOfIntegers) {
  let number;
  for(indexListOfIntegers = 0; indexListOfIntegers < listOfIntegers.length; indexListOfIntegers += 1) {
    number = listOfIntegers[indexListOfIntegers];
    for (indexList = 0; indexList < listOfIntegers.length; indexList += 1) {
      if(number < listOfIntegers[indexList]){
        indexMyHigherNumber = indexList;
      }
    }
  }

  return indexMyHigherNumber;

}

console.log(indexHigherNumber([2,3,6,7,10,1]));
console.log();

// Secao 3 - Funcao que retorna o indice do menor numero de um array

function indexSmallestNumber(listOfIntegers) {
  let number;
  for(indexListOfIntegers = 0; indexListOfIntegers < listOfIntegers.length; indexListOfIntegers += 1) {
    number = listOfIntegers[indexListOfIntegers];
    for (indexList = 0; indexList < listOfIntegers.length; indexList += 1) {
      if(number > listOfIntegers[indexList]){
        indexMySmallestNumber = indexList;
      }
    }
  }

  return indexMySmallestNumber;

}

console.log(indexSmallestNumber([2,4,6,7,10,0,-3]));
console.log();

// Secao 4 - Funcao que retorna a string com o maior numero de caracteres

function lesserString(listOfNames) {
  let name;

  for (let i=0; i < listOfNames.length; i += 1) {
    for (let j=0; j < listOfNames.length; j += 1) {
      if(listOfNames[i].length < listOfNames[j].length) {
        name = listOfNames[j];
      }
    }
  }

  return name;

}

console.log(lesserString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log();
