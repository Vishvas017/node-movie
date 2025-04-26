import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [genre, setgenre] = useState("");
  const [director, setdirector] = useState("");
  const [release_year, setrelease_year] = useState("");
  const [description, setdescription] = useState("");

  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const { _id } = userData || {};

  if (!_id) {
    toast.error("login first");
  }

  const hendleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/movies/postMovie`,
        {
          title,
          genre,
          director,
          release_year,
          description,
          image,
        },
        { withCredentials: true }
      );
      console.log(res);
      toast.success("Movie posted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to post movie.");
    }
  };

  const containerStyle = {
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#161b22",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.05)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "1.5rem",
    border: "1px solid #30363d",
    borderRadius: "8px",
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  };

  const submitStyle = {
    backgroundColor: "#238636",
    border: "none",
    padding: "10px 20px",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={hendleSubmit} style={formStyle}>
        <label style={labelStyle}>Image URL:</label>
        <input
          type="text"
          placeholder="Enter image URL"
          onChange={(e) => setImage(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Title:</label>
        <input
          type="text"
          placeholder="Enter movie title"
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Genre:</label>
        <input
          type="text"
          placeholder="Enter genre"
          onChange={(e) => setgenre(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Director:</label>
        <input
          type="text"
          placeholder="Enter director"
          onChange={(e) => setdirector(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Release Year:</label>
        <input
          type="text"
          placeholder="Enter release year"
          onChange={(e) => setrelease_year(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Description:</label>
        <textarea
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter movie description"
          rows={6}
          style={{ ...inputStyle, resize: "vertical" }}
        />

        <input type="submit" value="Submit" style={submitStyle} />
      </form>
    </div>
  );
};

export default MovieForm;
