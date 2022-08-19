const express = require("express");

const app = express();

app.use("/products", (req, res, next) => {
  res.send({ products: ["iphone", "samsung"] });
});

app.listen(3001);
