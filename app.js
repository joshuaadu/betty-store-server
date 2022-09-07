const path = require("path");
const bodyParser = require("body-parser")
const express = require("express");

const mainRoutes = require("./routes/index");
const userData = require("./routes/users");

const rootDir = require("./util/path");

const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({extended: false}))

app.use(mainRoutes);
app.use("/users", userData.routes);
app.get((req, res) => {
	res.status(404).render("404.ejs", {pageTitle: "Page Not Found"});
});

app.listen(3001);
