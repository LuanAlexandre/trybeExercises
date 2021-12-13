import { writeFileSync } from 'fs';

const writeContent = (fileName, fileContent) => {
  try {
    writeFileSync(fileName, fileContent, 'utf-8');
    return 'OK';
  } catch(error) {
    console.error(`${error}`);
  }
};

export default writeContent;
