const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/products.controllers')


productRouter.route('/')
.get(productController.getProducts)
.post(productController.createProduct)



productRouter.route("/bulk-update")
.patch(productController.bulkUpdateProduct)


productRouter.route('/:id')
.patch(productController.updateProduct)

module.exports=productRouter;