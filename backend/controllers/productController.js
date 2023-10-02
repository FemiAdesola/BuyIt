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

// @desc    Create a product
// @route   POST /api/v1/products
// @access  Private/Admin
const createProduct = asynchronousHandler(async (req, res) => {
  const product = new Product({
    title: "Sample title",
    price: 0,
    user: req.user._id,
    image: "https://source.unsplash.com/Q_6BS8IN0J8",
    productType: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export { getAllProducts, getProductById, createProduct };
