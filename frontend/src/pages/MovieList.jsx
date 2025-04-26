import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MovieList = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const _id = userData?._id;
  const [Movies, setMovies] = useState("");

  if (!_id) {
    toast.error("login first");
  }

  const getMoviesData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/movies/getMovies/${_id}`,
        { withCredentials: true }
      );
      setMovies(response.data.allmovies);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handelDelete = async (movieId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/movies/deletMovies/${_id}/${movieId}`,
        { withCredentials: true }
      );
      toast.success(response.data.message || "Movie deleted successfully");

      setMovies((prevMovie) =>
        prevMovie.filter((movie) => movie._id !== movieId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.5rem",
    backgroundColor: "#0d1117",
    padding: "2rem",
    minHeight: "100vh",
  };

  const cardStyle = {
    backgroundColor: "#161b22",
    color: "#ffffff",
    border: "1px solid #30363d",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.05)",
  };

  const textStyle = {
    color: "#c9d1d9",
    fontSize: "0.95rem",
  };

  const btnStyle = {
    marginRight: "0.5rem",
  };

  return (
    <div style={gridStyle}>
      {Movies && Movies.length > 0 ? (
        Movies.map((el) => (
          <Card style={cardStyle} key={el._id}>
            <Card.Img
              variant="top"
              src={el.image}
              alt={el.title}
              style={{ height: "200px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
            />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text style={textStyle}>Genre: {el.genre}</Card.Text>
              <Card.Text style={textStyle}>Director: {el.director}</Card.Text>
              <Card.Text style={textStyle}>Year: {el.release_year}</Card.Text>
              <Card.Text style={textStyle}>
                Description: {el.description.substring(0, 100) + " ...read more"}
              </Card.Text>

              <div>
                <Link to={`/edit/${_id}/${el._id}`}>
                  <Button variant="outline-light" size="sm" style={btnStyle}>
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handelDelete(el._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p style={{ color: "#fff", gridColumn: "1 / -1" }}>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
