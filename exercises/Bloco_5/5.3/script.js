function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercicio 1
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = document.createElement('li');
    const days = document.getElementById('days');

    days.appendChild(day).className = 'day';
    days.children[index].innerHTML = dezDaysList[index];

    if (index === 25 || index === 26 || index === 32) {
      days.children[index].classList.add('holiday');
    }

    if (index === 5 || index === 12 || index === 19 || index === 26) {
      days.children[index].classList.add('friday');
    }
  }
}

createDays();

// Exercicio 2
function createButtonHoliday(strHoliday) {
  const feriados = document.createElement('button');

  document.querySelector('.buttons-container').appendChild(feriados).id = 'btn-holiday';
  document.getElementById('btn-holiday').innerText = strHoliday;
}

createButtonHoliday('Feriados');

// Exercicio 3
function checkHolidayColor() {
  const holidayList = document.getElementsByClassName('holiday');
  const defaultColor = 'rgb(238,238,238)';
  const newColor = 'gold';

  for (let index = 0; index < holidayList.length; index += 1) {
    let element = holidayList[index];

    //Essa estrutura condicional foi baseada no código do Lucas Pedroso, disponível neste link abaixo
    //https://github.com/LucasPedroso/trybe-exercises/pull/16/commits/ecbada6986c065c9746447d93def9c6f74830d34
    //O código dele me deu muita luz para o que eu queria fazer, thank you sou much!!
    if (element.style.backgroundColor === newColor) {
      element.style.backgroundColor = defaultColor;
    } else {
      element.style.backgroundColor = newColor;
    }
  }
}

function changeColorButtonHoliday() {
  const buttonHoliday = document.getElementById('btn-holiday');
  buttonHoliday.addEventListener('click', checkHolidayColor);
}

changeColorButtonHoliday();

// Exercicio 4
function createButtonFriday(strFriday) {
  const sextas = document.createElement('button');

  document.querySelector('.buttons-container').appendChild(sextas).id = 'btn-friday';
  document.getElementById('btn-friday').innerText = strFriday;
}

createButtonFriday('Sexta-feira');

// Exercicio 5
function checkFridayText() {
  const fridayList = document.getElementsByClassName('friday');
  const newText = 'Sexta-feira';
  // let fridayDays = [];

  // for (let index = 0; index < fridayList.length; index += 1) {
  //   fridayDays.push(fridayList[index].innerText);
  // }

  let numberDay = 4;

  for (let index = 0; index < fridayList.length; index += 1) {
    let element = fridayList[index];

    if (element.innerText === newText) {
      element.innerText = numberDay;
    } else  {
      element.innerText = newText;
    }

    numberDay += 7;
  }
}

function changeTextFriday() {
  const buttonFriday = document.getElementById('btn-friday');
  buttonFriday.addEventListener('click', checkFridayText);
}

changeTextFriday();

// Exercicio 6
const daysList = document.getElementsByClassName('day');

function zoomIn(dayElement) {
  for (let index = 0; index < daysList.length; index += 1) {
    const element = daysList[index];

    if (dayElement.target === element) {
      element.style.fontSize = '30px';
    }
  }
}

function addEventZoomIn() {
  for (let index = 0; index < daysList.length; index += 1) {
    const element = daysList[index];

    element.addEventListener('mouseover', zoomIn);
  }
}

addEventZoomIn();

function zoomOut(dayElement) {
  for (let index = 0; index < daysList.length; index += 1) {
    const element = daysList[index];

    if (dayElement.target === element) {
      element.style.fontSize = '20px';
    }
  }
}

function addEventZoomOut() {
  for (let index = 0; index < daysList.length; index += 1) {
    const element = daysList[index];

    element.addEventListener('mouseout', zoomOut);
  }
}

addEventZoomOut();
