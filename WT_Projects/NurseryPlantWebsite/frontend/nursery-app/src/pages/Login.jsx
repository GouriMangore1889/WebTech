import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      return toast.warn("Enter all fields");
    }

    try {
      setLoading(true);

      const result = await loginUser(email, password);
      console.log("LOGIN RESPONSE:", result);

      if (result.status === "success") {
        // ✅ store token
        localStorage.setItem("token", result.data.token);

        // ✅ store user (important for navbar)
        localStorage.setItem(
          "user",
          JSON.stringify({ email: result.data.email })
        );

        // ✅ notify navbar to refresh
        window.dispatchEvent(new Event("userUpdated"));

        toast.success("Login successful");

        // ✅ redirect
        navigate("/plants");
      } else {
        toast.error(result.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Login</h3>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={login}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* ✅ SCHEME STYLE REGISTER LINK */}
        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}