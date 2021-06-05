const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (!animal) return reject('Nenhum animal com esse nome!');
      return resolve(animal);
    }, 100);
  })
);

const getAnimal = (name) => (
  // Adicione o código aqui.
  findAnimalByName(name)
);

module.exports = getAnimal;
