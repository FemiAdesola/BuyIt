import jwt from 'jsonwebtoken';

import asynchronousHandler from './asynchronousHandler.js';
import User from '../models/userModel.js';

// For protecting routes
export const protect = asynchronousHandler(async (req, res, next) => {
    let token;

    // For  reading JWT from the 'jwt' cookie
  token = req.cookies.jwt;

  if (token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  
        req.user = await User.findById(decoded.userId).select('-password');
  
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
  }else{
    res.status(401);
    throw new Error('Not authorized, no token');
  }

});


// Admin middleware
// For check if the user is admin and user must be admin to continue
export const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error('Not authorized as an admin');
    }
  };
  
//   export { protect, admin };