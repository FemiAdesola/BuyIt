import express from "express";
const router = express.Router();

// import Product from "../models/productModel.js"
import {
    getAllProducts,
    getProductById,
    createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddlewareHandler.js";

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);

export default router;