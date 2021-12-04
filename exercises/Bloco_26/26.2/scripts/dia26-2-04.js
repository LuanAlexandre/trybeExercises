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

readFileSimpsons(simpsons);
