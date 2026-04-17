const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Schema
const questionSchema = new mongoose.Schema({
  title: String,
  difficulty: String,
  solved: { type: Boolean, default: false }
});

const Question = mongoose.model("Question", questionSchema);

// GET all questions
router.get("/", async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

// ✅ SEED ROUTE (VERY IMPORTANT)
router.get("/seed", async (req, res) => {
  await Question.deleteMany(); // clear old

  const sampleData = [
    { title: "Two Sum", difficulty: "Easy" },
    { title: "Binary Search", difficulty: "Easy" },
    { title: "LRU Cache", difficulty: "Hard" },
    { title: "Merge Intervals", difficulty: "Medium" },
    { title: "DFS Traversal", difficulty: "Medium" },
    { title: "Heap Sort", difficulty: "Hard" },
    { title: "Kadane’s Algorithm", difficulty: "Easy" },
    { title: "Topological Sort", difficulty: "Hard" }
  ];

  await Question.insertMany(sampleData);

  res.send("✅ Data inserted successfully");
});

module.exports = router;