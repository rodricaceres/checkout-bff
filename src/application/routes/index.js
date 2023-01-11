const express = require('express');
const router = express.Router();

const products = require('./products.routes');
const basePath = '/checkout-bff';

router.use(`${basePath}/products`, products);
router.use(`/products`, products);

module.exports = router;
