const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-beers', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.send(products);
});

router.get('/get-by-id/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.send(product);
});

router.post('/add-beer', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
});

router.post('/delete-beer/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.post('/update-beer/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;