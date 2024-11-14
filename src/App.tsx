import "./styles.css";
import React, { useState, useEffect } from "react";

function JokeGenerator() {
  // State to store the joke text
  const [joke, setJoke] = useState("");

  // Function to fetch a joke from an API
  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(`${data.setup} - ${data.punchline}`);
      })
      .catch((error) => {
        console.error("Error fetching joke", error);
      });
  };

  // useEffect to fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke(); // Fetch a joke when the component loads
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random Joke Generator</h1>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get a New Joke</button>
    </div>
  );
}

export default JokeGenerator;
