const express = require("express");
const app = express();
const cors = require("cors");

// Use CORS middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

app.get("/", (req, res) => {
  res.send('Hello, Express app named "server"!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
