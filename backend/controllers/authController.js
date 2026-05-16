const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// In-memory user storage
const users = [];

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET || "secret-key", {
    expiresIn: "7d",
  });
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Check if user exists
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = {
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };
    users.push(user);

    // Generate token
    const token = generateToken(email);

    res.status(201).json({
      message: "Registration successful",
      token,
      user: { email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Check if user exists
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = {
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };
    users.push(user);

    // Generate token
    const token = generateToken(email);

    res.status(201).json({
      message: "Signup successful",
      token,
      user: { email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Find user
    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate token
    const token = generateToken(email);

    res.json({
      message: "Login successful",
      token,
      user: { email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, signup, login };