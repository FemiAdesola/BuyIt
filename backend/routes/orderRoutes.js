import express from "express";
const router = express.Router();

import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
  deleteOrder
} from "../controllers/orderController.js";

import { protect, admin } from "../middleware/authMiddlewareHandler.js";

router.route('/').post(protect, addOrderItems).get(protect, admin, getAllOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id')
  .get(protect, getOrderById)
  .delete(protect, admin,  deleteOrder);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;