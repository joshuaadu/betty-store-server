const path = require("path");

const express = require("express");

const adminData = require("./admin");
// const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).render("shop", { products: adminData.products, pageTitle: "Shop", path: "/" });
	// res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
