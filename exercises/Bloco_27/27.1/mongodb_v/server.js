const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const users = require('./routes/users.routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', users);

app.listen(PORT, () => console.log(`Server is running in  http://localhost:${PORT}`));

app.use(errorMiddleware);

module.exports = app;