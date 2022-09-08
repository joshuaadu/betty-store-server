const Product = require("../models/product")

exports.postAddProduct = (req, res, next) => {
	const {title, imageURL, description, price} = req.body
	console.log(req.body )
	if (title !== "" && price > 0 && description !== "") {
		const product = new Product(title, imageURL, description, price)
		product.save()
		console.log("New product added!");
		res.status(200).redirect("/");
	} else {
		console.log("Invalid data submitted!");
		return res.status(406).send("Invalid product name submitted!");
	}
	
}

exports.getAddProduct = (req, res, next) => {
	res.render("admin/add-product", {
		pageTitle: "Add product",
		path: "/admin/add-product",
		admin: true,
	});
}

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.status(200).render("shop/product-list", { products: products, pageTitle: "Products", path: "/products", admin:false});

	})
}