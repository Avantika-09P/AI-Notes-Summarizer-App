require("dotenv").config();

const app = require("./app");
const initDB = require("./config/db");

// Initialize database
initDB();

const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
if (apiKey) {
  const masked = `${apiKey.slice(0, 4)}... (len=${apiKey.length})`;
  console.log(`OpenRouter API key present: ${masked}`);
} else {
  console.warn("OpenRouter API key not set (OPENROUTER_API_KEY or OPENAI_API_KEY). Requests will fail with 401.");
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT} 🚀`);
});