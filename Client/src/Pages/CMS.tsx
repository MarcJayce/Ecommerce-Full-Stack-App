import Header from "../Components/header";
import { use, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CMS = () => {
   const navigate = useNavigate();
    const [isAllowed, setIsAllowed] = useState(false);
  useEffect(() => {
    
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to access this page.");
      navigate("/login");
      return;
    }
    axios.get("/api/protected", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => setIsAllowed(true))
    .catch(() => navigate("/login"));
  },);




  const [formData, setFormData] = useState({
    name: "",
    type: "",
    Image: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.type.trim() !== "" &&
    formData.Image.trim() !== "" &&
    formData.price.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, type, Image, price } = formData;
    try {
      const response = await axios.post("http://localhost:3000/create-product", {
        name,
        type,
        image: Image,
        price: parseFloat(price), // convert string to number
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Product creation failed:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Create Product</h1>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Type</label>
            <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="form-select"
                >
                <option value="">Select type</option>
                <option value="gravel">Gravel</option>
                <option value="road">Road</option>
                <option value="mtb">MTB</option>
                <option value="hybrid">Hybrid</option>
                <option value="gear">Gear</option>
                <option value="outlet">Outlet</option>
            </select>

          </div>

          <div className="col-md-12">
            <label className="form-label">Image</label>
            <input
              type="text"
              name="Image"
              value={formData.Image}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Price</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                min="0"
              />
            </div>
          </div>

          <div className="col-12 text-center mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isFormValid}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CMS;
