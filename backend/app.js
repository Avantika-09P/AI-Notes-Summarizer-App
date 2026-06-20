const uploadRoutes = require("./routes/uploadRoutes");
const express = require("express");
const app = express();

const cors = require("cors");

// Temporary: allow all origins to unblock frontend while verifying Render env vars.
// WARNING: this makes the API accessible from any origin. Remove or tighten
// this before production use. Prefer setting `FRONTEND_URL` correctly and
// restricting CORS to that origin.
app.use(cors());
console.warn("TEMPORARY CORS POLICY: allowing all origins. Replace with FRONTEND_URL in production.");

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

// Error-handling middleware (catches multer and other errors)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  // Multer errors have name 'MulterError'
  if (err && err.name === "MulterError") {
    return res.status(400).json({ message: err.message });
  }

  res.status(500).json({ message: err.message || "Internal server error" });
});

module.exports = app;