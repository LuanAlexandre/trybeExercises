const fs = require('fs').promises;

async function generateFile() {
  const words = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const path = './utils/data/';
  words.forEach(async (word, index) =>{
    await fs.writeFile(`${path}file${index + 1}.txt`, word);
  });

  const finalFile = './utils/data/fileAll.txt';
  Promise.all([
    fs.readFile(`${path}file1.txt`),
    fs.readFile(`${path}file2.txt`),
    fs.readFile(`${path}file3.txt`),
    fs.readFile(`${path}file4.txt`),
    fs.readFile(`${path}file5.txt`),
  ])
  .then(([file1, file2, file3, file4, file5]) => fs.writeFile(finalFile, `${file1} ${file2} ${file3} ${file4} ${file5}`))
  .catch((error) => console.error(`${error}`));
}

generateFile();
