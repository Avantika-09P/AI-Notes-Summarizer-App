import axios from "axios";

// Determine API base URL based on environment
let baseURL = "/api"; // default

if (process.env.REACT_APP_API_URL) {
  // Use explicit env var if set (Render, production)
  baseURL = process.env.REACT_APP_API_URL;
} else if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  // Local development: connect directly to backend
  baseURL = "http://localhost:5000";
}

const API = axios.create({
  baseURL,
});

export default API;
