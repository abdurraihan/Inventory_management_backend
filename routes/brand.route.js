const express = require('express');
const brandRouter = express.Router();
const brandController = require('../controllers/brand.controller.js');

brandRouter.route('/')
.post(brandController.createBrand)
.get(brandController.getBrands)

brandRouter.route('/:id')
.get(brandController.getBrandsById)
.put(brandController.updateBrandById)



module.exports = brandRouter;