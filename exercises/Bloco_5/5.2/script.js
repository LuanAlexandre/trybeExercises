let title = document.createElement('h1');
title.innerText = 'Exercicio 5.2 - JavaScript DOM';
document.body.appendChild(title);

let firstChildBody = document.createElement('div');
document.body.appendChild(firstChildBody).className = 'main-content';

let centerContent = document.createElement('div');
document.querySelector('.main-content').appendChild(centerContent).className = 'center-content';

let paragraph = document.createElement('p');
document.querySelector('.center-content').appendChild(paragraph).innerText = 'Pizza Frita';
