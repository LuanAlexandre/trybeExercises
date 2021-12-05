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

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
