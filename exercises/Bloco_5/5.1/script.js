function changeText(){
  document.getElementsByTagName('p')[1].innerHTML = 'Empregado, Independencia financeira, Casa propria';
}

function changeColorGreen(){
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb('+76+','+164+','+109+')';
}

function changeColorWhite(){
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}

function repaireText(){
  document.getElementsByClassName('title')[0].innerHTML = 'Exercício 5.1 - JavaScript';
}

function upperCaseText(){
  let centerContentList = document.getElementsByTagName('p');

  for (let index = 0; index < centerContentList.length; index += 1) {
    centerContentList[index].innerText = centerContentList[index].innerText.toUpperCase();
  }
}

function logText() {
  let centerContentParagraph = document.getElementsByTagName('p');
  let print;

  for (let index = 0; index < centerContentParagraph.length; index += 1) {
    print = centerContentParagraph[index].innerText;
    console.log(print);
  }
}

changeText();
changeColorGreen();
changeColorWhite();
repaireText();
upperCaseText();
logText();