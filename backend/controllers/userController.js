import asynchronousHandler from "../middleware/asynchronousHandler.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';


// @desc    Auth user & get token
// @route   POST /api/v1/users/login
// @access  Public
const authUser= asynchronousHandler(async (req, res) => {
    const {email, password} = (req.body);

    const user = await User.findOne({email});

    if (user && (await user.getMatchPassword(password))) {
        // For adding tokens
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {
            expiresIn: '20d'
        }); // 

        // For setting jwt token as HTTP only cookies
        res.cookie('jwt', token,{
            httpOnly:true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 20 * 24 * 60 * 60 * 1000 // 20 days
        }); //

        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
      } else {
        res.status(401);
        throw new Error('Invalid email or password');
      }
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