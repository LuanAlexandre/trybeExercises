const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('./controllers/productController');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productsController);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
