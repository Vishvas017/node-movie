import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const Navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const role = userData?.role;

  const signOut = () => {
    document.cookie =
      "verificationToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    sessionStorage.clear();
    localStorage.clear();
    Navigate("/sign-in");
  };

  // Dark theme styles
  const navStyle = {
    backgroundColor: "#121212",
    color: "#ffffff",
    padding: "12px 0",
    borderBottom: "1px solid #333",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    color: "#f0f0f0",
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "500",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#1e90ff",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "#1e90ff",
    border: "1px solid #1e90ff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    objectFit: "cover",
    border: "2px solid #fff",
  };

  return (
    <nav style={navStyle}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/MovieList" style={linkStyle}>
            MovieList
          </Link>
          <Link to="/MovieForm" style={linkStyle}>
            MovieForm
          </Link>
          {role === "admin" && (
            <Link to="/admin" style={linkStyle}>
              Admin
            </Link>
          )}
        </div>

        <ul className="navbar-nav d-flex flex-row align-items-center gap-3 mb-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&s"
                alt="user"
                style={imageStyle}
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
              <li className="dropdown-header">@username</li>
              <li>
                <Link to="/dashboard?tab=profile" className="dropdown-item">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" onClick={signOut}>
                  Sign out
                </button>
              </li>
            </ul>
          </li>

          {!role ? (
            <li>
              <Link to="/sign-in" style={buttonStyle}>
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <button onClick={signOut} style={buttonStyle}>
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
