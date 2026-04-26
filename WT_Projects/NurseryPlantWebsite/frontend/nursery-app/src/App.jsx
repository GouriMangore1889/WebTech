import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plants from "./pages/Plants";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          {/* ✅ THIS IS REQUIRED */}
          <ToastContainer position="top-right" autoClose={2000} />
        </>
    </BrowserRouter>
  );
}

export default App;