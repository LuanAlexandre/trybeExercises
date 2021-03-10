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