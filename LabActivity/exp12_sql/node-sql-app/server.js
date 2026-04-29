const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "studentdb",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});


// ================= CRUD APIs =================

// 1. CREATE
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ error: "All fields required" });
  }

  const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";

  db.query(sql, [name, age, course], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Student added", id: result.insertId });
  });
});


// 2. READ
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});


// 3. UPDATE
app.put("/students/:id", (req, res) => {
  const { name, age, course } = req.body;
  const { id } = req.params;

  const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";

  db.query(sql, [name, age, course, id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Student updated" });
  });
});


// 4. DELETE
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM students WHERE id=?", [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Student deleted" });
  });
});


// Server Start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
