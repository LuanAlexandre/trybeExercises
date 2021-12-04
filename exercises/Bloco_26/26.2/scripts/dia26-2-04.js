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

//Requisito 3
async function filterPersons() {
  try {
    const resolve = await fs.readFile(simpsons, 'utf-8');
    const content = await JSON.parse(resolve);
    const filteredContent = content.filter(({ id }) => (id !== '6' && id !== '10'));
    await fs.writeFile(simpsons, JSON.stringify(filteredContent));
    console.log(`Filtragem realizada.`);
  } catch(error) {
    console.error(`Não foi possível escrever no arquivo: ${error}`);
  }
}

//Requisito 4
async function createNewSimpsonsFile() {
  try {
    const resolve = await fs.readFile(simpsons, 'utf-8');
    const content = await JSON.parse(resolve);
    const family = content.filter(({ id }) => (id === '1' || id === '2' || id === '3' || id === '4'));
    await fs.writeFile('./utils/data/simpsonFamily.json', JSON.stringify(family));
    console.log('Arquivo criado com sucesso');
  } catch(error) {
    console.error(`${error}`);
  }
}

//Requisito 5
const simpsonFamily = './utils/data/simpsonFamily.json';

async function addPerson() {
  const nelson = { id: 5, name: 'Nelson Muntz' };
  try {
    const resolve = await fs.readFile(simpsonFamily, 'utf-8');
    const content = await JSON.parse(resolve);
    content.push(nelson);
    await fs.writeFile(simpsonFamily, JSON.stringify(content));
    console.log('Operação realizada com sucesso');
  } catch(error) {
    console.error(`${error}`);
  }
}

//Requisito 6
async function replacePerson() {
  const maggie = 'Maggie Simpson';

  try {
    const resolve = await fs.readFile(simpsonFamily, 'utf-8');
    const content = await JSON.parse(resolve);
    content.forEach((element) => {
      if(element.name === 'Nelson Muntz') element.name = maggie;
    });
    await fs.writeFile(simpsonFamily, JSON.stringify(content));
    console.log('Substituição realizada com sucesso');
  } catch(error) {
    console.error(`${error}`);
  }
}
