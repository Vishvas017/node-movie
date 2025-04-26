import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/user/signin`,
        { email, password },
        { withCredentials: true }
      );
      toast.success(response?.data?.message || "Signed in successfully");
      sessionStorage.setItem("userData", JSON.stringify(response.data.rest));
      navigate("/"); // Redirect after login if needed
    } catch (error) {
      toast.error(error?.response?.data?.message || "Sign in failed");
    }
  };

  const backgroundStyle = {
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardStyle = {
    backgroundColor: "#161b22",
    color: "#c9d1d9",
    padding: "2rem",
    borderRadius: "12px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  };

  const inputStyle = {
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
    border: "1px solid #30363d",
    borderRadius: "6px",
    padding: "10px",
    width: "100%",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
    display: "block",
  };

  const buttonStyle = {
    backgroundColor: "#238636",
    border: "none",
    padding: "10px",
    color: "#fff",
    borderRadius: "6px",
    width: "100%",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "1rem",
  };

  const linkStyle = {
    color: "#58a6ff",
    textDecoration: "none",
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <div className="text-center mb-4">
          <h2 style={{ color: "#fff" }}>Sign In</h2>
          <p style={{ color: "#8b949e" }}>Access your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" style={labelStyle}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" style={labelStyle}>
              Your Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
        </form>

        <div className="text-center mt-3">
          <small style={{ color: "#8b949e" }}>
            Don't have an account?{" "}
            <Link to="/sign-up" style={linkStyle}>
              Sign Up
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
