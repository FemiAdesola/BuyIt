import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import connectDB from './database/db.js';
import productRoutes from "./routes/productRoutes.js"

const port = process.env.PORT || 4000;
connectDB(); // way to connect to database with mongoose connection

const app = express();

app.get("/", (req, res) => {
   res.send("API is running....");
});

app.use("/api/v1/products", productRoutes);


app.listen(port, () =>
   console.log(`API is running on ${process.env.NODE_ENV} mode on port ${port}`)
);