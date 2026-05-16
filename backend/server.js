require("dotenv").config();

const app = require("./app");
const initDB = require("./config/db");

// Initialize database
initDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});