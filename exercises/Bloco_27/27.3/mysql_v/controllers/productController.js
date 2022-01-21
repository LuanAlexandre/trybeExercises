const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);
});

router.get('/get-product-by-id/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  return res.status(200).json(product);
});

router.post('/add-product', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  return res.status(201).json(newProduct);
});

router.delete('/delete-product/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  return res.status(200).json(products);
});

router.put('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  return res.status(200).json(products);
});

module.exports = router;