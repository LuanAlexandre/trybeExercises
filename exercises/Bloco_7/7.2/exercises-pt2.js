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
  return Object.keys(object);
}

console.log(showKeys(lesson1));
