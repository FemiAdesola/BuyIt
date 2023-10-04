import asynchronousHandler from "../middleware/asynchronousHandler.js";
import Order from "../models/orderModel.js";

// @description Creates new order
// @route GET /api/v1/orders
// @access public
const addOrderItems = asynchronousHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems: orderItems.map((item) => ({
        ...item,
        product: item._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @desc    Get logged in user orders
// @route   GET /api/v1/myorders
// @access  Private
const getMyOrders = asynchronousHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Private
const getOrderById = asynchronousHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to paid
// @route   PUT /api/v1/orders/:id/pay
// @access  Private
const updateOrderToPaid = asynchronousHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to delivered
// @route   PUT /api/v1/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asynchronousHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }

});

// @desc    Get all orders
// @route   GET /api/v1/orders
// @access  Private/Admin
const getAllOrders = asynchronousHandler(async (req, res) => {
  // for pagination purposes
  const pageSize = process.env.PAGINATION_LIMIT_PAGE_SIZE;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Order.countDocuments();
  
  // const orders = await Order.find({}).populate("user", "id name");
  // res.status(200).json(orders);
  const orders = await Order.find({})
  .limit(pageSize)
  .skip(pageSize * (page - 1))
  .populate("user", "id name");
  res.json({ orders, page, pages: Math.ceil(count / pageSize) });
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
};
