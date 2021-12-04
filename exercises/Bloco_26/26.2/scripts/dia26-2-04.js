const fs = require('fs').promises;
const simpsons = './utils/data/simpsons.json';

//Requisito 1
async function readFileSimpsons(file) {
  try {
    const content = JSON.parse(await fs.readFile(file, 'utf8'));
    content.forEach((element) => console.log(`${element.id} - ${element.name}`));
  } catch(error) {
    console.log(`${error}`);
  };
}

//Requisito 2
async function findPersonById(personId) {
  try {
    const resolve = await fs.readFile(simpsons, 'utf-8');
    const content = await JSON.parse(resolve);
    const subject = content.find(({ id }) => id === personId);
    console.log(`${subject.id} - ${subject.name}`);
  } catch(error) {
    console.log(`id não encontrado`);
  }
}
