import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => setMessage("Error fetching message"));
  }, []);

  return (
    <div className="App-header">
      <p> Hello from the frontEnd</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
