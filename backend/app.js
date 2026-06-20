const uploadRoutes = require("./routes/uploadRoutes");
const express = require("express");
const app = express();

const cors = require("cors");

// Configure CORS: allow all by default (works for development).
// In production set the FRONTEND_URL env var (e.g. https://your-frontend.onrender.com)
// to restrict allowed origins for improved security.
const frontendOrigin = process.env.FRONTEND_URL || null;
if (frontendOrigin) {
  app.use(
    cors({ origin: frontendOrigin })
  );
  console.log(`CORS configured for origin: ${frontendOrigin}`);
} else {
  app.use(cors());
  console.log("CORS configured: allowing all origins (development)");
}

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