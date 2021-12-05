const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const generateToken = require('./utils/modules/crypto');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

//Exercício Bônus 1
function tokenValidate(req, res, next) {
  const token = req.headers.authorization;
  const isValid = token.length === 16;
  if(!isValid) return res.status(401).json({ message: 'Token inválido' });
  next();
}

//Exercício 1
app.get('/ping', tokenValidate, (req, res) => {
  res.status(200).json({ message: 'pong' });
});

//Exercício 2
app.post('/hello', tokenValidate, (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` });
});

//Exercício 3
app.post('/greeting', tokenValidate, (req, res) => {
  const { name, age } = req.body;
  if(age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  if(age <= 17) return res.status(401).json({ message: 'Unauthorized' });
});

//Exercício 4
app.put('/users/:name/:age', tokenValidate, (req, res) => {
  const { name, age } = req.params;
  
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

const simpsons = './utils/data/simpsons.json';
//Exercício 7
app.get('/simpsons/:id', tokenValidate, async(req, res) => {
  const { id } = req.params;
  const content = JSON.parse(await fs.readFile(simpsons, 'utf-8'));
  const simpson = content.find((s) => parseInt(s.id) === parseInt(id));

  if(!simpson) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(simpson);
});

//Exercício 6
app.get('/simpsons', tokenValidate, async (req, res) => {
  const file = JSON.parse(await fs.readFile(simpsons, 'utf-8'));

  res.status(200).json(file);
});

//Exercício 8
app.post('/simpsons', tokenValidate, async (req, res) => {
  const { id, name } = req.body;
  const content = JSON.parse(await fs.readFile(simpsons, 'utf-8'));
  const simpson = content.some((s) => parseInt(s.id) === parseInt(id));

  if(simpson) return res.status(409).json({ message: 'id already exists' });

  content.push({ id, name });

  await fs.writeFile(simpsons, JSON.stringify(content));
  res.status(204).end();
});

//Exercício Bônus 2
app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if(!email || !password || !firstName || !phone) return res.status(401).json({ message: 'missing fields' });

  const token = generateToken();

  res.status(200).json({ message: `${token}`});
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
