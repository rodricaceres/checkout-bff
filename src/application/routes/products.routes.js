const express = require('express');
const router = express.Router();

//* Controllers
const products = require('../controllers/products.controller');

//* Middlewares
const validateRequest = require('../middlewares/validateRequest.middleware');

//* Schemas
const getProductsSchema = require('../schemas/products/getProducts.schema');

//* Routes
router.post('/', validateRequest(getProductsSchema, 'query'), products.get);

module.exports = router;
