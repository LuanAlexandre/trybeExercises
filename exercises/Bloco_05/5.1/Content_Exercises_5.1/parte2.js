// 1
document.getElementById('page-title').innerText = 'Alien, o oitavo passageiro.';

// 2
document.getElementById('second-paragraph').style.border = '2px solid purple';

// 3
document.getElementById('subtitle').style.backgroundColor = 'gold';
document.getElementById('subtitle').style.border = '2px solid red';

// getElementsByClassName e getElementsByTagName
// 2
const paragraphs = document.getElementsByClassName('paragraph-style');

// 3
paragraphs[0].style.textDecoration = 'line-through';

// 4
const subtitle = document.getElementsByTagName('h4');