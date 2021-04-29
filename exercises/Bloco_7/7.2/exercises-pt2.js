const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1
function changeShift(object, key, value) {
  object[key] = value;
}

changeShift(lesson2, 'turno', 'manhã');

// Exercicio 2
function showKeys(object) {
  console.log(Object.keys(object));
}

// showKeys(lesson1);
// showKeys(lesson2);
// showKeys(lesson3);

// Exercicio 3
const showSize = (object) => {
  console.log(Object.keys(object).length);
}

// showSize(lesson1);
// showSize(lesson2);
// showSize(lesson3);

// Exercicio 4
function showValues(object) {
  console.log(Object.values(object));
}

// showValues(lesson1);
// showValues(lesson2);
// showValues(lesson3);
