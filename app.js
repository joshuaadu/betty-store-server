const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const rootDir = require("./util/path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use("/*", (req, res) => {
	res.status(404).render("404", { pageTitle: "Page Not Found" });
	// res.status(404).sendFile(path.join(__dirname, "views", "404"));
});

app.listen(3001);
