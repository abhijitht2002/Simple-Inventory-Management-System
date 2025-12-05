const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get("/getProducts", controller.getAllProducts)
router.post("/addProduct", controller.createProduct)
router.get("/getProducts/:id", controller.getProductById)
router.put("/updateProduct/:id", controller.updateProduct)
router.delete("/deleteProduct/:id", controller.deleteProduct)

module.exports = router;