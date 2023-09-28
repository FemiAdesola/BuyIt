import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser';

import connectDB from './database/db.js';
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";

const port = process.env.PORT || 4000;
connectDB(); // way to connect to database with mongoose connection

const app = express();

// for using bodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 

// cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
   res.send("API is running....");
});

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () =>
   console.log(`API is running on ${process.env.NODE_ENV} mode on port ${port}`)
);