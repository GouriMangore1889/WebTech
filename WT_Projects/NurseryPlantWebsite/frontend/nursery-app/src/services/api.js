const BASE_URL = "http://localhost:5000";

// helper
function getAuthHeader() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// ================= USER =================

export async function registerUser(data) {
  const res = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
}

// ✅ GET PROFILE
export async function getProfile() {
  const res = await fetch(`${BASE_URL}/users/profile`, {
    headers: getAuthHeader(),
  });
  return await res.json();
}

// ================= PLANTS =================

export async function getPlants() {
  const res = await fetch(`${BASE_URL}/plants`);
  return await res.json();
}

// ================= CART =================

// ✅ FIXED (NO EMAIL)
export async function addToCart(plant_id) {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: getAuthHeader(),
    body: JSON.stringify({ plant_id }),
  });

  return await res.json();
}

// ✅ FIXED
export async function getCart() {
  const res = await fetch(`${BASE_URL}/cart`, {
    headers: getAuthHeader(),
  });

  return await res.json();
}

export async function removeFromCart(id) {
  const res = await fetch(`${BASE_URL}/cart/${id}`, {
    method: "DELETE",
  });

  return await res.json();
}

export async function checkout(email) {
  const res = await fetch(`${BASE_URL}/cart/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  return await res.json();
}