import axios from "axios";

const localDevUrl =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000"
    : "/api";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || localDevUrl,
});

export default API;
