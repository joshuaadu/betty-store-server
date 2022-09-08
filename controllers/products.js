const Product = require("../models/product")

exports.postAddProduct = (req, res, next) => {
	const {title} = req.body
	console.log(title )
	if (title != "") {
		const product = new Product(title)
		product.save()
		console.log("New product added!");
		res.status(200).redirect("/");
	} else {
		console.log("Invalid data submitted!");
		return res.status(406).send("Invalid product name submitted!");
	}
	
}

exports.getAddProduct = (req, res, next) => {
	res.render("add-product", {
		pageTitle: "Add product",
		path: "/admin/add-product",
	});
}

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.status(200).render("shop", { products: products, pageTitle: "Shop", path: "/"});

	})
}