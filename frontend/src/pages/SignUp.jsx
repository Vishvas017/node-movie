import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/signup",
        { username: name, email: email, password: password }
      );
      toast.success(response?.data?.message || "Account created");
      navigate("/sign-in");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const pageStyle = {
    backgroundColor: "#0d1117",
    minHeight: "100vh",
    color: "#c9d1d9",
    padding: "2rem 0",
  };

  const cardStyle = {
    backgroundColor: "#161b22",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 0 20px rgba(0,0,0,0.6)",
    color: "#c9d1d9",
  };

  const inputStyle = {
    backgroundColor: "#0d1117",
    border: "1px solid #30363d",
    color: "#c9d1d9",
    padding: "10px",
    borderRadius: "6px",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#238636",
    border: "none",
    padding: "10px",
    color: "#fff",
    borderRadius: "6px",
    fontWeight: "bold",
    width: "100%",
    cursor: "pointer",
  };

  const linkStyle = {
    color: "#58a6ff",
    textDecoration: "none",
  };

  return (
    <section style={pageStyle}>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div style={cardStyle}>
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6">
                  <h2 className="text-center fw-bold mb-3" style={{ color: "#fff" }}>
                    Sign Up
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        style={inputStyle}
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        style={inputStyle}
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        style={inputStyle}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-grid">
                      <button type="submit" style={buttonStyle}>
                        Register
                      </button>
                    </div>

                    <div className="text-center mt-3">
                      <p>
                        Already have an account?{" "}
                        <Link to="/sign-in" style={linkStyle}>
                          Login
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
