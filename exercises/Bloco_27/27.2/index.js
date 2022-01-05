const express = require('express');
const ping = require('./routes/ping.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/ping', ping);

app.listen(PORT, console.log(`Server is running in http://localhost:${PORT}`));

module.exports = app;