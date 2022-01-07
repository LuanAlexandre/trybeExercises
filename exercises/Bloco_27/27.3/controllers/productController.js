const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-beers', async (req, res, next) => {
  const products = await ProductModel.getAll();

  return res.json(products);
});

router.get('/get-by-id/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  return res.json(product);
});

router.post('/add-beer', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  return res.json(newProduct);
});

router.post('/delete-beer/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  return res.json(products);
});

router.post('/update-beer/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  return res.json(products);
});

module.exports = router;