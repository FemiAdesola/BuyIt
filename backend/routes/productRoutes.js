import express from "express";
const router = express.Router();

import Product from "../models/productModel.js"
import asynchronousHandler from "../middleware/asynchronousHandler.js";
// import products from "../data/products.js";


router.get('/', asynchronousHandler(async (req, res) => {
    const products = await Product.find({})
  res.json(products);
}));

router.get("/:id", asynchronousHandler(async(req, res) => {
//   const product = products.find((p) => p._id == Number(req.params.id));
    const product = await Product.findById(req.params.id);
    if (product) {
        return res.json(product);
    }
    res.status(404).json({message: 'Product not found'});
}));

export default router;