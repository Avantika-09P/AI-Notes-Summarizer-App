const express = require("express");
const router = express.Router();

const { register, signup, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;


