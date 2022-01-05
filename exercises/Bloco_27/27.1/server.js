const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const users = require('./routes/users.routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', users);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

app.use(errorMiddleware);

module.exports = app;