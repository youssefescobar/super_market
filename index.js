require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const path = require("path");

// const seedData =require('./seeds/seed.js');
// const seedUser =require('./seeds/seedUser.js');
// const cartSeed =require('./seeds/cartSeed.js');
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
const error = require("./middleware/error.js");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const userRoutes = require("./routes/userRoute.js");
const productRoutes = require("./routes/productRoute.js");
const cartRoutes = require("./routes/cartRoute.js");
const authRoutes = require("./routes/auth.js");
const paymentRoutes = require("./routes/paymentRoute.js");
const categoryRoutes = require("./routes/categoryRoute.js");
const orderRoutes = require("./routes/orderRoute.js");
const recommendationRoutes = require("./routes/recommendationRoutes.js");
const seedCart = require("./seeds/cartSeed.js");
const receiptRoutes = require("./routes/receiptRoute");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/receipts", receiptRoutes);
app.get("/", (req, res) => {
  res.send("API is runningggg...");
});

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log(" MongoDB Connected Successfully");
    // seedData();
    //    seedUser();
    // seedCart();
  } catch (error) {
    console.error(" MongoDB Connection Failed:", error);
    process.exit(1);
  }
};
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
