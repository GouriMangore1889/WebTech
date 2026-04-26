const express = require("express");
const cors = require("cors");

const { router: userRoutes } = require("./routes/users");
const plantRoutes = require("./routes/plants");
const cartRoutes = require("./routes/cart");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/plants", plantRoutes);
app.use("/cart", cartRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});