const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

// MongoDB connection URI
const uri = "mongodb://mongo_container:27017/user_info_db";

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}
// Use CORS middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Connect to the database
connectDB();

app.get("/", (req, res) => {
  res.send('Hello, Express app named "server"!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
