const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/products.controllers.js')


productRouter.route("/bulk-update")
    .patch(productController.bulkUpdateProduct)

productRouter.route("/bulk-delete")
    .delete(productController.bulkDelete)

productRouter.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)



productRouter.route('/:id')
    .patch(productController.updateProduct)
    .delete(productController.deleteProductById)

module.exports = productRouter; 