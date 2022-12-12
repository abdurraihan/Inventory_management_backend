const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/products.controllers')


productRouter.route('/')
.get(productController.getProducts)
.post(productController.createProduct)




module.exports=productRouter;