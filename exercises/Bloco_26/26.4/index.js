const express = require('express');
const app = express();
const PORT = 3001;

//Exercício 1
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
