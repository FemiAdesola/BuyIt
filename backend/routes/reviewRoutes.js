import express from "express";
const router = express.Router();

import { createProductReview } from "../controllers/reviewController.js";
import { protect, admin } from "../middleware/authMiddlewareHandler.js";

router.route('/').post(protect, createProductReview);

export default router;