const express = require('express');
const { create, list, findById } = require('../models/users');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const allUsers = await list();
    return res.status(200).json(allUsers);
  } catch(error) {
    console.error(error.message);
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await findById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
});

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