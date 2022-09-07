const path = require("path");

const express = require("express");

const mainRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");

const rootDir = require("./util/path");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

app.use(mainRoutes);
app.use("/users", usersRoutes);
app.get("/*", (req, res) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3003);
