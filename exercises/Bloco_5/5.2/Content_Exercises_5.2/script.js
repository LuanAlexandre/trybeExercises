// Parte I:
// 1.Acesse o elemento **elementoOndeVoceEsta**.
document.getElementById('elementoOndeVoceEsta');

// 2.Acesse pai a partir de **elementoOndeVoceEsta** e adicione uma _color_ a ele.
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';

// 3.Acesse o **primeiroFilhoDoFilho** e adicione um _texto_ a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText = 'I like cheese';

// 4.Acesse o **primeiroFilho** a partir de **pai**.
document.getElementById('pai').firstElementChild;

// 5.Agora acesse o **primeiroFilho** a partir de **elementoOndeVoceEsta**.
document.getElementById('elementoOndeVoceEsta').previousSibling;

// 6.Agora acesse o texto _Atenção!_ a partir de **elementoOndeVoceEsta**.
document.getElementById('elementoOndeVoceEsta').nextSibling;

// 7.Agora acesse o **terceiroFilho** a partir de **elementoOndeVoceEsta**.
document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling;

// 8.Agora acesse o **terceiroFilho** a partir de **pai**.
document.getElementById('pai').children[2];

// Parte II:
// 1.Crie um irmão para elementoOndeVoceEsta.
let myDiv = document.createElement('div');
document.getElementById('pai').appendChild(myDiv);

// 2.Crie um filho para elementoOndeVoceEsta.
let elementoOndeVoceEstaChild = document.createElement('div');
document.getElementById('elementoOndeVoceEsta').appendChild(elementoOndeVoceEstaChild);

// 3.Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilhoChild = document.createElement('div');
document.getElementById('primeiroFilhoDoFilho').appendChild(primeiroFilhoDoFilhoChild);

// 4.A partir desse filho criado, acesse terceiroFilho.
primeiroFilhoDoFilhoChild.className = 'test';
document.getElementsByClassName('test')[0].parentNode.parentNode.nextElementSibling;