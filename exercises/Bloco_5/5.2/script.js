// Passo 1
let title = document.createElement('h1');
title.innerText = 'Exercicio 5.2 - JavaScript DOM';
document.body.appendChild(title);

// Passo 2
let firstChildBody = document.createElement('div');
document.body.appendChild(firstChildBody).className = 'main-content';

// Passo 3
let centerContent = document.createElement('div');
document.querySelector('.main-content').appendChild(centerContent).className = 'center-content';

// Passo 4
let paragraph = document.createElement('p');
document.querySelector('.center-content').appendChild(paragraph).innerText = 'Pizza Frita';

// Passo 5
let left = document.createElement('div');
document.querySelector('.main-content').appendChild(left).className = 'left-content';

// Passo 6
let right = document.createElement('div');
document.querySelector('.main-content').appendChild(right).className = 'right-content';

// Passo 7
let img = document.createElement('img');
document.querySelector('.left-content').appendChild(img).className = 'small-image';
img.src = 'https://picsum.photos/200';

// Passo 8
let listaOneToTen = document.createElement('ul');
document.querySelector('.right-content').appendChild(listaOneToTen);

for (let index = 0; index < 10; index += 1) {
  let listItem = document.createElement('li');

  document.querySelector('ul').appendChild(listItem);
  }

for (let index = 0; index < 10; index += 1) {
  switch (index) {
    case 0:
      document.getElementsByTagName('li')[index].innerText = 'One';
      break;
    case 1:
      document.getElementsByTagName('li')[index].innerText = 'Two';
      break;
    case 2:
      document.getElementsByTagName('li')[index].innerText = 'Three';
      break;
    case 3:
      document.getElementsByTagName('li')[index].innerText = 'Four';
      break;
    case 4:
      document.getElementsByTagName('li')[index].innerText = 'Five';
      break;
    case 5:
      document.getElementsByTagName('li')[index].innerText = 'Six';
      break;
    case 6:
      document.getElementsByTagName('li')[index].innerText = 'Seven';
      break;
    case 7:
      document.getElementsByTagName('li')[index].innerText = 'Eight';
      break;
    case 8:
      document.getElementsByTagName('li')[index].innerText = 'Nine';
      break;
    case 9:
      document.getElementsByTagName('li')[index].innerText = 'Ten';
      break;
    default:
      console.log('Error!');
  }
}