const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const questionRoutes = require("./routes/questionRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app = express();
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/interviewprep")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ✅ Routes
app.use("/api/questions", questionRoutes);
app.use("/api/progress", progressRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// ✅ Start Server
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});