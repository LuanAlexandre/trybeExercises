const readline = require('readline-sync');
const fs = require('fs').promises;

async function showFile() {
  const file = readline.question('Digite o nome do arquivo que deseja ler: ');
  try {
    const content = await fs.readFile(`./utils/data/${file}`, 'utf-8');
    console.log(content);
  } catch(error) {
    console.error(`Arquivo inexistente`);
  }
}
