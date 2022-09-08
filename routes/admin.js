const path = require("path");

const express = require("express");

const productControllers = require("../controllers/products")

const router = express.Router();

router.post("/add-product", productControllers.postAddProduct);

router.use("/add-product", productControllers.getAddProduct);

module.exports = router;

