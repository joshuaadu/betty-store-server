const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const app = express();
const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).render("index.ejs", {pageTitle: "Welcome"});
});

module.exports = router;
