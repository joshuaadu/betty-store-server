const path = require("path");
const fs = require("fs");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const productData = [];

router.post("/add-product", (req, res, next) => {
	const product = req.body;
	if (product?.title) {
		productData.push({ title: product.title });
		console.log("New product added!");
		res.status(200).redirect("/");
	} else {
		console.log("Invalid data submitted!");
		return res.status(406).send("Invalid product name submitted!");
	}
	// console.log(req.body);
	// fs.appendFile(
	// 	path.join(rootDir, "products.txt"),
	// 	`${req.body.title}\n`,
	// 	(err) => {
	// 		if (err) return res.status(301).send("failed to add product!");
	// 		return res.status(200).redirect("/");
	// 	}
	// );
});

router.use("/add-product", (req, res, next) => {
	res.render("add-product", {
		pageTitle: "Add product",
		path: "/admin/add-product",
	});
	// res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

exports.routes = router;
exports.products = productData;
