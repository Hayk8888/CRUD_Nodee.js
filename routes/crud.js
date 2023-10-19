
const express = require('express');
const  router = express.Router();
const categoriesController = require('../controller/categoryController');
const productController = require('../controller/productController');


router.get('/categories', categoriesController.getCategories )
router.post('/categories',  categoriesController.createCategories );
router.put('categories/:id', categoriesController.updateCategory )
router.delete('/categgories/:id', categoriesController.deleteCategory );


router.get('/products', productController.getProducts);
router.post('/products', productController.createProduct );
router.put('/products/:id', productController.updateProduct );
router.delete('/products/:id', productController.deleteProduct );

module.exports = router;