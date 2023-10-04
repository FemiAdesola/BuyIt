import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import connectDB from "./database/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";

import uploadRoutes from "./routes/uploadRoutes.js";

const port = process.env.PORT || 4000;
connectDB(); // way to connect to database with mongoose connection

const app = express();

// for using bodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//

// cookie parser middleware
app.use(cookieParser());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes);

// for uploading image
app.use("/api/v1/upload", uploadRoutes);
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//

// for Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // for any route that is not api routes
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// For paypal routes
app.get("/api/v1/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`API is running on ${process.env.NODE_ENV} mode on port ${port}`)
);
