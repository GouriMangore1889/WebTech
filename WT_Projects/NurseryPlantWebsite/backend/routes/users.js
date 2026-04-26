const express = require("express");
const router = express.Router();
const db = require("../utils/db");
const crypto = require("../utils/crypto");
const createResult = require("../utils/result");
const jwt = require("jsonwebtoken");

const SECRET = "MY_SECRET";

// 🔐 TOKEN MIDDLEWARE
function verifyToken(req, res, next) {
  const header = req.headers.authorization;

  if (!header) return res.json(createResult("No token"));

  try {
    const token = header.split(" ")[1];
    const data = jwt.verify(token, SECRET);
    req.user = data;
    next();
  } catch {
    res.json(createResult("Invalid token"));
  }
}

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password)
    return res.json(createResult("All fields required"));

  const hashed = await crypto.hashPassword(password);

  try {
    await db.query(
      "INSERT INTO users (name,email,password,phone) VALUES (?,?,?,?)",
      [name, email, hashed, phone]
    );

    res.json(createResult(null, "User registered"));
  } catch {
    res.json(createResult("Email already exists"));
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.query(
    "SELECT * FROM users WHERE email=?",
    [email]
  );

  if (!rows.length) return res.json(createResult("Invalid login"));

  const user = rows[0];

  const ok = await crypto.verifyPassword(password, user.password);

  if (!ok) return res.json(createResult("Invalid login"));

  const token = jwt.sign({ email }, SECRET);

  res.json(createResult(null, { email, token }));
});

// PROFILE
router.get("/profile", verifyToken, async (req, res) => {
  const email = req.user.email;

  const [rows] = await db.query(
    "SELECT name,email,phone FROM users WHERE email=?",
    [email]
  );

  res.json(createResult(null, rows[0]));
});

module.exports = { router, verifyToken };