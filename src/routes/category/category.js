const express = require('express');
const Category = require('../../models/category/category');
const catchAsync = require('../../appError/catchAsync');
const router = express.Router();

router.get(
  '/api/category',
  catchAsync(async (req, res, next) => {
    const category = await Category.findAll();
    res.send(category);
  })
);

router.post(
  '/api/category',
  catchAsync(async (req, res, next) => {
    const category = await Category.create({
      title: req.body.title,
    });
    res.status(201).send({});
  })
);
module.exports = router;
