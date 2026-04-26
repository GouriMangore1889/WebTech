import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    const { name, email, password } = form;

    if (!name || !email || !password) {
      return toast.warn("All fields required");
    }

    const result = await registerUser(form);

    if (!result.error) {
      toast.success("Registered successfully");
      navigate("/login");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Register</h3>

      <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} />
      <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} />
      <input className="form-control mb-2" name="phone" placeholder="Phone" onChange={handleChange} />
      <input className="form-control mb-2" type="password" name="password" placeholder="Password" onChange={handleChange} />

      <button className="btn btn-success w-100" onClick={register}>
        Register
      </button>
    </div>
  );
}