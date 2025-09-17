import asynchronousHandler from "../middleware/asynchronousHandler.js";
import Product from "../models/productModel.js";

// @description Fetches all products
// @route GET /api/v1/products
// @access public
const getAllProducts = asynchronousHandler(async (req, res) => {
  // for pagination purposes
  const pageSize = process.env.PAGINATION_LIMIT_PAGE_SIZE;
  const page = Number(req.query.pageNumber) || 1;

  // for searching keywords
  const keyword = req.query.keyword
    ? { title: { $regex: req.query.keyword, $options: "i" }, }
    : {};
// 
  const count = await Product.countDocuments({...keyword}); 

  const products = await Product.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });

  // const products = await Product.find({});
  // res.json(products);
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

// @desc    Update a product
// @route   PUT /api/v1/products/:id
// @access  Private/Admin
const updateProduct = asynchronousHandler(async (req, res) => {
  const {
    title,
    price,
    description,
    image,
    productType,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.title = title;
    product.price = price;
    product.description = description;
    product.image = image;
    product.productType = productType;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
// @access  Private/Admin
const deleteProduct = asynchronousHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});


// @desc    Get top rated products
// @route   GET /api/v1/products/top
// @access  Public
const getProductsAtTop = asynchronousHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(4);

  res.status(200).json(products);
});

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsAtTop
};
