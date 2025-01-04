import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/navbar.css";

const kavin = (props) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/project");
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          Welcome to My Avengers EndGame, {props.Name}
        </h1>
        <p style={styles.paragraph}>
          Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers.
        </p>
        <button style={styles.button} onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: "url('../assets/ajyajaya.jpg')", // Update with the correct image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    padding: "20px",
    color: "#fff", // White text for better contrast against the background
    border: "5px solid #fff", // White border around the container
    borderRadius: "15px", // Rounded corners for the container
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "rgba(0, 123, 255, 0.8)", // Transparent button for better contrast
    border: "2px solid #fff", // White border around the button
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default kavin;
