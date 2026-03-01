const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://priyarajavel15_db_user:priya1234@cluster0.8cusf6v.mongodb.net/repeatMistakeDetector?retryWrites=true&w=majority"
)
.then(() => {
  console.log("Database Connected ✅");
})
.catch((err) => {
  console.log("Database Error ❌", err);
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend Working ✅");
});

// Server start
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});