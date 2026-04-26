import { useEffect, useState } from "react";
import { getCart, removeFromCart, checkout } from "../services/api";
import { toast } from "react-toastify";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadCart = async () => {
    const res = await getCart();

    if (res.status === "success") {
      setCart(res.data);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = async (id) => {
    const res = await removeFromCart(id);

    if (res.status === "success") {
      toast.success("Removed");
      loadCart();
    }
  };

  const handleCheckout = async () => {
    const res = await checkout(user.email);

    if (res.status === "success") {
      toast.success("Order placed 🎉");
      setCart([]);
    } else {
      toast.error(res.error);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">

      <h2>🛒 Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="card p-2 mb-2">
          <h5>{item.name}</h5>
          <p>₹{item.price}</p>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h4>Total: ₹{total}</h4>

      <button
        className="btn btn-success"
        onClick={handleCheckout}
      >
        Checkout
      </button>

    </div>
  );
}