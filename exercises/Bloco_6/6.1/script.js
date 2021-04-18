window.onload = addOption();

function addOption() {
  let statesList = [['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'], ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'], ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'],  ['MG', 'Minas Gerais'], ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'], ['PI', 'Piauí'], ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'], ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'], ['SE', 'Sergipe'], ['TO', 'Tocantins']];

  console.log(statesList.length);

  for (let index = 0; index < statesList.length; index += 1) {
    let option = document.createElement('option');

    document.getElementById('choose-state').appendChild(option).setAttribute('value', statesList[index][0]);

  }

  for (let index = 0; index < statesList.length; index += 1) {
    let element = document.getElementById('choose-state').children;

    element[index].innerText = statesList[index][1];
  }
}

function checkDateFormat() {
  const btnSubmit = document.getElementById('btn-submit');
  btnSubmit.addEventListener('click', () => {
    const dateValue = document.getElementById('date').value;
    const date = dateValue.split('/');
    
    if (date[0] <= 0 || date[0] > 31 ) {
      alert('Invalid format of day');
    } else if (date[1] <= 0 || date[1] > 12) {
      alert('Invalid format of month');
    } else if (date[3] <= 0) {
      alert('Invalida format of year');
    }
  });
}

checkDateFormat();
