import express from 'express';

import products from "./data/products.js"

const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
   res.send("API is running....");
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:id", (req, res) => {
   const product = products.find((p) => p._id == Number(req.params.id));
  res.json(product);
});

app.listen(port, () =>
   console.log(`API is running on ${process.env.NODE_ENV} mode on port ${port}`)
);