import asynchronousHandler from "../middleware/asynchronousHandler.js";
import User from "../models/userModel.js";
import { forGenetaingToken } from "../utils/forGeneratingToken.js";

import jwt from "jsonwebtoken";

// @desc    Auth user & get token
// @route   POST /api/v1/users/login
// @access  Public
const authUser = asynchronousHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.getMatchPassword(password))) {
    forGenetaingToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register user
// @route   POST /api/v1/users/register
// @access  Public
const registerUser = asynchronousHandler(async (req, res) => {
  const { name, email, password } = req.body;
  
  // For checking if user exists
  const userExists = await User.findOne({email});

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //

  // If user not exists then create user
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    forGenetaingToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Logout user / Clear cookies
// @route   POST /api/v1/users/logout
// @access  Public
const logoutUser = asynchronousHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get User Profile
// @route   GET /api/v1/users/profile
// @access  Private
const getUserProfile = asynchronousHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found or not exists');
  }
});

// @desc    Update User Profile
// @route   PUT /api/v1/users/profile
// @access  Private
const updateUserProfile = asynchronousHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc   Get User
// @route   GET /api/v1/users
// @access  Private/Admin
const getUsers = asynchronousHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Private/Admin
const deleteUser = asynchronousHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error('Can not delete admin user');
    }
    await User.deleteOne({ _id: user._id });
    res.status(201).json({ message: 'User has been deleted successfully' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Get user by ID
// @route   GET /api/v1/users/:id
// @access  Private/Admin
const getUserById = asynchronousHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private/Admin
const updateUser = asynchronousHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
