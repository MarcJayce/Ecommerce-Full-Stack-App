import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value,} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, password} = formData;
    const name = `${firstName} ${lastName}`;
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        name,
        email,
        password,
      });
      
      alert(response.data.message);
      navigate("/"); 
      
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  return (
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5 ">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(220, 89.10%, 32.40%)" }}>
          The best offer <br />
          <span style={{ color: "hsl(218, 72.20%, 15.50%)" }}>for your business</span>
        </h1>
        <p className="mb-4 opacity-70" style={{ color: "hsl(220, 10.30%, 11.40%)" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni 
          tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass ">
          <div className="card-body px-4 py-5 px-md-5">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
              <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

              <div className="form-outline mb-4">
                <input 
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                 />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>
              <div className="form-check d-flex justify-content-center mb-4">
              <button type="submit" className="btn btn-primary btn-block mb-4 ">
                Sign up
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
