import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import connectDB from './database/db.js';
import products from "./data/products.js"

const port = process.env.PORT || 4000;
connectDB(); // way to connect to database with mongoose connection

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