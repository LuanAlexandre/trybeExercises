function changeText(){
  document.getElementsByTagName('p')[1].innerHTML = 'Empregado, Independencia financeira, Casa propria';
}

function changeColorGreen(){
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb('+76+','+164+','+109+')';
}

function changeColorWhite(){
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}

changeText();
changeColorGreen();
changeColorWhite();