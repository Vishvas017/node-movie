import React from 'react';

const Homepage = () => {
  const sectionStyle = {
    padding: "4rem 0",
    backgroundColor: "#0d1117",
    color: "#ffffff",
    position: "relative",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const containerStyle = {
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const textColStyle = {
    flex: "1 1 50%",
    paddingRight: "2rem",
  };

  const imageColStyle = {
    flex: "1 1 50%",
    display: "none",
    position: "relative",
  };

  const gradientBlob = {
    position: "absolute",
    bottom: "0",
    left: "60%",
    width: "300px",
    height: "300px",
    background: "linear-gradient(135deg, #8e44ad, #00bcd4)",
    filter: "blur(80px)",
    borderRadius: "50%",
    transform: "translate(-50%, 50%)",
    zIndex: "0",
  };

  const titleStyle = {
    color: "#f1c40f",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    letterSpacing: "1px",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "1.5rem",
    color: "#ffffff",
  };

  const leadStyle = {
    fontSize: "1.125rem",
    marginBottom: "2.5rem",
    color: "#cccccc",
  };

  const buttonPrimary = {
    backgroundColor: "#1e90ff",
    color: "#ffffff",
    border: "none",
    padding: "12px 30px",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "600",
    marginRight: "1rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(30, 144, 255, 0.3)",
  };

  const buttonNeutral = {
    backgroundColor: "#2c2f33",
    color: "#ffffff",
    border: "1px solid #444",
    padding: "12px 30px",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <div style={imageColStyle} className="d-none d-lg-block">
          {/* Gradient Blob */}
          <div style={gradientBlob}></div>
        </div>

        <div style={textColStyle}>
          <h5 style={titleStyle}>Welcome </h5>
          <h1 style={headingStyle}>
            Dive into the latest stories, trends, and tips from industry experts.
          </h1>
          <p style={leadStyle}>
            Accelerate your development while remaining consistent.
          </p>
          <div>
            <button style={buttonPrimary}>Get started</button>
            <button style={buttonNeutral}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
