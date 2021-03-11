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

    if (index === 5 || index === 12 || index === 19 || index === 27) {
      days.children[index].classList.add('friday');
    }
  }
}

// Exercicio 2
function createButtonHoliday(strHoliday) {
  const feriados = document.createElement('button');

  document.querySelector('.buttons-container').appendChild(feriados).id = 'btn-holiday';
  document.getElementById('btn-holiday').innerText = strHoliday;
}

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

// Exercicio 4
function createButtonFriday(strFriday) {
  const sextas = document.createElement('button');

  document.querySelector('.buttons-container').appendChild(sextas).id = 'btn-friday';
  document.getElementById('btn-friday').innerText = strFriday;
}

createDays();
createButtonHoliday('Feriados');
changeColorButtonHoliday();
createButtonFriday('Sexta-feira');
