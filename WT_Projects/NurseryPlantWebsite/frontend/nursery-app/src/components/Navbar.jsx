import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../services/api";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH PROFILE
  useEffect(() => {
    if (!token) return;

    setLoading(true);

    getProfile()
      .then((res) => {
        if (res.status === "success") {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      })
      .catch(() => console.log("Profile error"))
      .finally(() => setLoading(false));
  }, [token]);

  // ✅ LOGOUT
  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      
      {/* LEFT */}
      <div className="d-flex align-items-center gap-3">
        <Link to="/" className="navbar-brand fw-bold">
          🌱 NurseryApp
        </Link>

        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => navigate("/plants")}
        >
          Plants
        </button>

        {token && (
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => navigate("/cart")}
          >
            Cart
          </button>
        )}
      </div>

      {/* RIGHT */}
      <div className="ms-auto d-flex align-items-center">

        {!token ? (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <>
            {/* EMAIL */}
            <span className="text-white me-3">
              {user?.email || "Loading..."}
            </span>

            {/* PROFILE */}
            <div className="position-relative me-3">
              <button
                className="btn btn-outline-light"
                onClick={() => setShowProfile(!showProfile)}
              >
                👤
              </button>

              {showProfile && (
                <div
                  className="card position-absolute end-0 mt-2 p-3 shadow"
                  style={{ width: "250px" }}
                >
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      <h6 className="mb-2">{user?.name}</h6>

                      <div><strong>Email:</strong> {user?.email}</div>
                      <div><strong>Phone:</strong> {user?.phone || "-"}</div>
                    </>
                  )}

                  <button
                    className="btn btn-danger w-100 mt-3"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}