const readline = require('readline-sync');
const fs = require('fs').promises;

async function replaceWord() {
  const file = readline.question("Escolha o arquivo a ser utilizado: ");
  try {
    const content = await fs.readFile(`./utils/data/${file}`, 'utf-8');
    const oldWord = readline.question("Digite a palavra que deverá ser substituída: ");
    const newWord = readline.question("Digite a palavra que deverá substituir: ");
    const newContent = content.replace(new RegExp(oldWord, 'g'), newWord);
    console.log(newContent);
    const newFile = readline.question("Digite o nome do novo arquivo: ");
    await fs.writeFile(`./utils/data/${newFile}`, JSON.stringify(newContent));
  } catch {
    console.error(`Arquivo não existe`);
    process.exit(1);
  }
}
