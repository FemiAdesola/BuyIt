import express from "express";
const router = express.Router();

// import Product from "../models/productModel.js"
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddlewareHandler.js";

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct);

export default router;