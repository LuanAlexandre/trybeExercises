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

function changeShift(object, key, value) {
  object[key] = value;
}

changeShift(lesson2, 'turno', 'manhã');

const allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);
console.log();

const allLessonsKeys = Object.values(allLessons);

function countStudents() {
  
  const x = new Array();
  let totalOfStudents = 0;

  for(let i = 0; i < allLessonsKeys.length; i++) {
    const y = Object.keys(allLessonsKeys[i]);
    const z = Object.values(allLessonsKeys[i]);

    for(let j = 0; j < y.length; j++) {

      if (z.includes('Matemática') && y[j] === 'numeroEstudantes') totalOfStudents += z[j];
    }
  }

  return totalOfStudents;

}

console.log(countStudents());
console.log();

function report(object, teacherName) {
  let classes = new Array();

  for(let i = 0; i < allLessonsKeys.length; i++) {
    const y = Object.keys(allLessonsKeys[i]);
    const z = Object.values(allLessonsKeys[i]);

    for(let j = 0; j < y.length; j++) {

      if (z[j] === 'Matemática') classes.push(z[j]);
    }
  }
  
  const report = {
    professor: teacherName,
    aulas: classes,
    estudantes: countStudents()
  }

  return report;
}

console.log(report(allLessons, 'Maria Clara'));
