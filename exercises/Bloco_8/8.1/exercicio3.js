function checarResposta(feedback, answer) {
  const feedbackLowerCase = feedback.toLowerCase();
  const answerLowerCase = answer.toLowerCase();

  if (feedbackLowerCase === answerLowerCase) return true;
  else return false;
}

const correctAnswer = 'high order functions';
const userAnswer = 'HIGH ORDER FUNCTIONS';

console.log(checarResposta(correctAnswer, userAnswer));

/*
Resolução retirada do gabarito

const CORRECT_ANSWER = 'higher order function';
const USER_ANSWER = 'HIGHER ORDER FUNCTION';

const checkAnswer2 = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase();

console.log(checkAnswer2(CORRECT_ANSWER)(USER_ANSWER));
*/
