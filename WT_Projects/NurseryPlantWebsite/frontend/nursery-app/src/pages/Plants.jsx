import { useEffect, useState } from "react";
import { getPlants, addToCart } from "../services/api";
import { toast } from "react-toastify";

export default function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants().then(res => {
      if (res.status === "success") {
        setPlants(res.data);
      }
    });
  }, []);

  const handleAddToCart = async (id) => {
    const res = await addToCart(id);

    if (res.status === "success") {
      toast.success("Added to cart 🌱");
    } else {
      toast.error("Failed to add");
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">🌿 Our Plants</h2>

      <div className="row">

        {plants.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>

            <div className="card shadow-sm h-100">

              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.name}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />

              {/* BODY */}
              <div className="card-body d-flex flex-column">

                <h5 className="card-title">{p.name}</h5>

                <p className="text-muted small">
                  {p.description}
                </p>

                <h6 className="mt-auto text-success">
                  ₹{p.price}
                </h6>

                <button
                  className="btn btn-success mt-2 w-100"
                  onClick={() => handleAddToCart(p.id)}
                >
                  Add to Cart 🌱
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}