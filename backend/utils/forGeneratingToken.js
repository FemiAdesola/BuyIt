import jwt from 'jsonwebtoken';

export const forGenetaingToken = (res, userId) => {
    const token = jwt.sign({ userId}, process.env.JWT_SECRET_KEY, {
        expiresIn: "20d",
      }); //
  
      // For setting jwt token as HTTP only cookies
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 20 * 24 * 60 * 60 * 1000, // 20 days
      }); //
};

// export default forGenetaingToken;