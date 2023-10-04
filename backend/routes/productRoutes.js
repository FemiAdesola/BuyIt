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
import checkObjectId from "../middleware/checkObjectId.js";

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router.route('/top').get(getProductsAtTop);
router.route('/:id')
    .get(checkObjectId, getProductById)
    .put(protect, admin, checkObjectId, updateProduct)
    .delete(protect, admin, checkObjectId, deleteProduct);

 router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);

export default router;