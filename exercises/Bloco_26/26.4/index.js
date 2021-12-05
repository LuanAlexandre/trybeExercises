const express = require('express');
const bodyParser = require('body-parser');
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

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
