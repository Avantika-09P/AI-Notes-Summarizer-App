const uploadRoutes = require("./routes/uploadRoutes");
const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.use("/uploads", express.static("uploads"));

// Middleware
app.use(express.json());

app.use("/upload", uploadRoutes);

// Routes
const noteRoutes = require("./routes/noteRoutes");
app.use("/notes", noteRoutes);

// Auth Routes
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
app.use("/auth", authRoutes);
app.use("/ai", aiRoutes);

// Home route (optional)
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

module.exports = app;