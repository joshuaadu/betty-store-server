const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const app = express();
const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
	res.status(200).render("users.ejs", {users: users, pageTitle: "Welcome"});
});

router.post("/add", (req, res) => {
	console.log(req.body)
	if(req.body.name) {
		users.push({name: req.body.name})
		res.redirect("/users")
	}else {
		res.status(301).send("Invalid username submitted")
	}
}) 

exports.routes = router;
exports.users = users;
