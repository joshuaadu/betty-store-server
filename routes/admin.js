const express = require("express");

const router = express.Router();

router.use("/products", (req, res, next) => {
	res.send({ products: ["iphone", "samsung"] });
});

module.exports = router;
