const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
});

module.exports = mongoose.model("Progress", progressSchema);