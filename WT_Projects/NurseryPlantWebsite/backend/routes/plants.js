const express = require("express");
const router = express.Router();
const db = require("../utils/db");

// GET ALL PLANTS
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM plants");
    res.json({ status: "success", data: rows });
  } catch (err) {
    console.error(err);
    res.json({ status: "error", error: "Failed to fetch plants" });
  }
});

module.exports = router;