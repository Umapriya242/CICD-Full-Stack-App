// backend/app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose config
mongoose.set("strictQuery", false);

const MONGO_URI = "mongodb://mongo:27017/devopsdb"; // Docker service name "mongo"

// Retry MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("MongoDB not ready, retrying in 5 seconds...");
    setTimeout(connectDB, 5000); // retry after 5 seconds
  }
};

connectDB();

// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

// Routes

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Add a new user
app.post("/api/users", async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const newUser = new User({ name: req.body.name });
    await newUser.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
