const express = require('express');
const { find } = require('../controllers/cepController');

const router = express.Router();

router.get('/:cep', find);

module.exports = router;