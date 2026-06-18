const app = require("../backend/app");

module.exports = (req, res) => {
  // Strip the /api prefix when Vercel routes requests to this function.
  if (req.url.startsWith("/api")) {
    req.url = req.url.replace(/^\/api/, "") || "/";
  }
  return app(req, res);
};
