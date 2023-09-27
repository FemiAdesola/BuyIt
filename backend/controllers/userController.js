import asynchronousHandler from "../middleware/asynchronousHandler.js";
import User from "../models/userModel.js";


// @desc    Auth user & get token
// @route   POST /api/v1/users/login
// @access  Public
const authUser= asynchronousHandler(async (req, res) => {
    res.send('login user');
});

// @desc    Register user
// @route   POST /api/v1/users/register
// @access  Public
const registerUser= asynchronousHandler(async (req, res) => {
    res.send('register user');
});

// @desc    Logout user / Clear cookies
// @route   POST /api/v1/users/logout
// @access  Public
const logoutUser= asynchronousHandler(async (req, res) => {
    res.send('logout user');
});

// @desc    Get User Profile
// @route   GET /api/v1/users/profile
// @access  Private
const getUserProfile= asynchronousHandler(async (req, res) => {
    res.send('get user profile');
});

// @desc    Update User Profile
// @route   PUT /api/v1/users/profile
// @access  Private
const updateUserProfile= asynchronousHandler(async (req, res) => {
    res.send('update user profile');
});

// @desc   Get User 
// @route   GET /api/v1/users
// @access  Private/Admin
const getUsers= asynchronousHandler(async (req, res) => {
    res.send('get user');
});

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Private/Admin
const deleteUser= asynchronousHandler(async (req, res) => {
    res.send('delete user');
});

// @desc    Get user by ID
// @route   GET /api/v1/users/:id
// @access  Private/Admin
const getUserById= asynchronousHandler(async (req, res) => {
    res.send('get user by id');
});

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private/Admin
const updateUser= asynchronousHandler(async (req, res) => {
    res.send('updateUser');
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