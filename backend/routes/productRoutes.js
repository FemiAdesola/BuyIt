import express from "express";
const router = express.Router();

// import Product from "../models/productModel.js"
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsAtTop
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddlewareHandler.js";
import { createProductReview } from "../controllers/reviewController.js";

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router.route('/top').get(getProductsAtTop);
router.route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

 router.route('/:id/reviews').post(protect, createProductReview);

export default router;