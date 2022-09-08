const path = require("path");

const express = require("express");

const adminData = require("./admin");
const productController = require("../controllers/admin")
const shopController = require("../controllers/shop")


const router = express.Router();

router.get("/",shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart",shopController.getCart)
router.post("/cart",shopController.postCart)
router.get("/orders",shopController.getOrders)
router.get("/checkout", shopController.getcheckout)


module.exports = router;
