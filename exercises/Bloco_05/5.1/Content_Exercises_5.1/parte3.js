document.getElementById('header-container').style.backgroundColor = 'green';

document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'gold';

let emergencyTasksList = document.querySelectorAll('.emergency-tasks div h3');

for (index = 0; index < emergencyTasksList.length; index += 1) {
  emergencyTasksList[index].style.backgroundColor = 'purple';
}

let noEmergencyTasksList = document.querySelectorAll('.no-emergency-tasks div h3');

for (index = 0; index < noEmergencyTasksList.length; index += 1) {
  noEmergencyTasksList[index].style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = 'darkgreen';