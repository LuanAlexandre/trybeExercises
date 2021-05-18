function countRightAnswers(array1, array2) {
  let finalPoints = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) finalPoints += 1;
    else if (array2[index] !== 'N.A') finalPoints -= 0.5;
    else finalPoints = finalPoints;
  }
  return finalPoints;
}

function showPoints(feedback, answers, compareAnswers) {
  return compareAnswers(feedback, answers);
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(showPoints(rightAnswers, studentAnswers, countRightAnswers));
