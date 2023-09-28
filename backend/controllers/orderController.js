import asynchronousHandler from "../middleware/asynchronousHandler.js";
import Order from "../models/orderModel.js";

// @description Creates new order
// @route GET /api/v1/orders
// @access public
const addOrderItems = asynchronousHandler(async (req, res) => {
  res.send("add order items");
});

// @desc    Get logged in user orders
// @route   GET /api/v1/myorders
// @access  Private
const getMyOrders = asynchronousHandler(async (req, res) => {
  res.send("get my orders");
});

// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Private
const getOrderById = asynchronousHandler(async (req, res) => {
  res.send("get order by Id");
});

// @desc    Update order to paid
// @route   PUT /api/v1/orders/:id/pay
// @access  Private
const updateOrderToPaid = asynchronousHandler(async (req, res) => {
  res.send("update order to paid");
});

// @desc    Update order to delivered
// @route   GET /api/v1/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asynchronousHandler(async (req, res) => {
  res.send("updated order to deliver");
});

// @desc    Get all orders
// @route   GET /api/v1/orders
// @access  Private/Admin
const getAllOrders = asynchronousHandler(async (req, res) => {
  res.send("get All Orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders
};
