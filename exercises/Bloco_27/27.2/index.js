const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ping = require('./routes/ping.routes');
const cep = require('./routes/cep.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/ping', ping);

app.use('/cep', cep);

app.listen(PORT, console.log(`Server is running in http://localhost:${PORT}`));

module.exports = app;