const express = require('express');
const { find, create } = require('../controllers/cepController');

const router = express.Router();

router.get('/:cep', find);

router.post('/', create);

module.exports = router;