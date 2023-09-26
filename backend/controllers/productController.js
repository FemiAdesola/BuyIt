import asynchronousHandler from "../middleware/asynchronousHandler.js";
import Product from "../models/productModel.js";

// @description Fetches all products
// @route GET /api/v1/products
// @access public
const getAllProducts = asynchronousHandler(async (req, res) => {
      const products = await Product.find({});
      res.json(products);
});

// @description Fetches  product
// @route GET /api/v1/products/:productId
// @access public
const getProductById = asynchronousHandler(async (req, res) => {
 const product = await Product.findById(req.params.id);
 if (product) {
   return res.json(product);
 }
 res.status(404).json({ message: "Product not found" });
});

export { getAllProducts, getProductById };