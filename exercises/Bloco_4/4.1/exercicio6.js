let pecaXadrez = 'quEen';

switch (pecaXadrez.toLowerCase()) {
  case 'pawn':
    console.log('vertical');
    break;
  
  case 'rook':
    console.log('vertical and horizontal');
    break;

  case 'knight':
    console.log('in L format');
    break;
  
  case 'bishop':
    console.log('diagonals');
    break;

  case 'queen':
    console.log('vertical, horizontal and diagonals');
    break;

  case 'king':
    console.log('vertical, horizontal and diagonals');
    break;

  default:
    console.log('Error. Unknow piece!');
}