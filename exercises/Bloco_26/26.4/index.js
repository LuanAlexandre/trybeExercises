const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

//Exercício 1
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

//Exercício 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` });
});

//Exercício 3
app.post('/greeting', (req, res) => {
  const { name, age } = req.body;
  if(age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  if(age <= 17) return res.status(401).json({ message: 'Unauthorized' });
});

//Exercício 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

const simpsons = './utils/data/simpsons.json';
//Exercício 7
app.get('/simpsons/:id', async(req, res) => {
  const { id } = req.params;
  const content = JSON.parse(await fs.readFile(simpsons, 'utf-8'));
  const simpson = content.find((s) => parseInt(s.id) === parseInt(id));

  if(!simpson) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(simpson);
});

//Exercício 6
app.get('/simpsons', async (req, res) => {
  const file = JSON.parse(await fs.readFile(simpsons, 'utf-8'));

  res.status(200).json(file);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
