const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: false },
  description: String,
  date: Date,
  startTime: String,
  endTime: String,
  reminder: Boolean,
  repeat: Boolean,
  status: { type: String, default: "pending" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
