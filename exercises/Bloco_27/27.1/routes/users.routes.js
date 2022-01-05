const express = require('express');
const { create } = require('../models/users');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUser = await create(firstName, lastName, email, password);

    return res.status(201).json({ newUser });
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
});

module.exports = router;