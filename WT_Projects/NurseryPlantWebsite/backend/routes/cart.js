const express = require("express");
const router = express.Router();
const db = require("../utils/db");
const { verifyToken } = require("./users");

// ADD TO CART (SECURE)
router.post("/", verifyToken, async (req, res) => {
  const email = req.user.email;
  const { plant_id } = req.body;

  try {
    // check existing
    const [rows] = await db.query(
      "SELECT * FROM cart WHERE user_email=? AND plant_id=?",
      [email, plant_id]
    );

    if (rows.length > 0) {
      // increase quantity
      await db.query(
        "UPDATE cart SET quantity = quantity + 1 WHERE id=?",
        [rows[0].id]
      );
    } else {
      // insert new
      await db.query(
        "INSERT INTO cart (user_email, plant_id, quantity) VALUES (?,?,1)",
        [email, plant_id]
      );
    }

    res.json({ status: "success", message: "Added to cart" });

  } catch (err) {
    console.error(err);
    res.json({ status: "error", error: "Cart error" });
  }
});

// GET CART
router.get("/", verifyToken, async (req, res) => {
  const email = req.user.email;

  const [rows] = await db.query(
    `SELECT cart.id, plants.name, plants.price, plants.image, cart.quantity
     FROM cart
     JOIN plants ON cart.plant_id = plants.id
     WHERE cart.user_email=?`,
    [email]
  );

  res.json({ status: "success", data: rows });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await db.query("DELETE FROM cart WHERE id=?", [id]);
    res.json({ status: "success", data: "Removed" });
  } catch (err) {
    res.json({ status: "error", error: err.message });
  }
});


router.post("/checkout", async (req, res) => {
  const { email } = req.body;

  try {
    // 1. Get cart items
    const [cart] = await db.query(
      `SELECT c.*, p.price 
       FROM cart c 
       JOIN plants p ON c.plant_id = p.id 
       WHERE c.user_email=?`,
      [email]
    );

    if (cart.length === 0) {
      return res.json({ status: "error", error: "Cart empty" });
    }

    // 2. Calculate total
    let total = cart.reduce((sum, item) => sum + item.price, 0);

    // 3. Create order
    const [orderResult] = await db.query(
      "INSERT INTO orders (user_email, total) VALUES (?,?)",
      [email, total]
    );

    const orderId = orderResult.insertId;

    // 4. Insert order items
    for (let item of cart) {
      await db.query(
        "INSERT INTO order_items (order_id, plant_id, quantity, price) VALUES (?,?,?,?)",
        [orderId, item.plant_id, 1, item.price]
      );
    }

    // 5. Clear cart
    await db.query("DELETE FROM cart WHERE user_email=?", [email]);

    res.json({ status: "success", data: "Order placed" });

  } catch (err) {
    res.json({ status: "error", error: err.message });
  }
});

module.exports = router;