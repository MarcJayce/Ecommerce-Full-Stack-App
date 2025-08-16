import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const { email, password } = formData;
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      
      alert(response.data.message);
      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token); 
        navigate("/"); 
        window.location.reload();
      } else {
        alert("No token received");
      }

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  }
  
    return (
      <section className="vh-100" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-white text-dark shadow-sm" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-muted mb-5">Please enter your login and password!</p>
  
                    <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input 
                      type="email" 
                      id="typeEmailX" 
                      className="form-control form-control-lg" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input 
                      type="password" 
                      id="typePasswordX" 
                      className="form-control form-control-lg"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                       />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>
  
                    <p className="small mb-5 pb-lg-2">
                      <a className="text-muted" href="#!">Forgot password?</a>
                    </p>
  
                    <button className="btn btn-primary btn-lg px-5" type="submit">Login</button>
                    </form>
  
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-primary"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href="#!" className="text-info mx-4 px-2"><i className="fab fa-twitter fa-lg"></i></a>
                      <a href="#!" className="text-danger"><i className="fab fa-google fa-lg"></i></a>
                    </div>
                  </div>
  
                  <div>
                    <Link to="/Signup" className="text-decoration-none text-dark">
                    <p className="mb-0">
                      Don't have an account? <a href="#!" className="text-primary fw-bold">Sign Up</a>
                    </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  