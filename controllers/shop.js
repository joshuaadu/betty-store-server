const Product = require("../models/product")

exports.getIndex = (req, res) => {
	res.render("shop/index", {pageTitle: "Shop", path: "/"})
}

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.status(200).render("shop/product-list", { products: products, pageTitle: "All Products", path: "/products", admin:false});

	})
}

exports.getCart = (req, res) => {
    res.status(200).render('shop/cart', {pageTitle: "Cart", path: "/cart"})
}

exports.postCart = (req, res) => {
    res.send("Cart submitted")
}

exports.getOrders = (req, res) => {
	res.status(200).render('shop/orders', {pageTitle: "Your Orders", path: "/orders"})
}


exports.getcheckout = (req, res) => {
    res.status(200).render('shop/checkout', {pageTitle: "Checkout", path: "/checkout"})
}