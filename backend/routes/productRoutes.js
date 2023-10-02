import express from "express";
const router = express.Router();

// import Product from "../models/productModel.js"
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddlewareHandler.js";

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router.route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

export default router;