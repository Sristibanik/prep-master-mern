const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// ✅ Mark as solved
router.post("/solve", async (req, res) => {
  try {
    const { questionId } = req.body;

    const exists = await Progress.findOne({ questionId });

    if (exists) {
      return res.json({ message: "Already solved" });
    }

    const progress = await Progress.create({ questionId });

    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get solved questions
router.get("/", async (req, res) => {
  try {
    const data = await Progress.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;