const Task = require("../models/Task");
const User = require("../models/User");
const mongoose = require("mongoose");

exports.createTask = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log(req.body);
    console.log(req.body.userId);
    const user = await User.findById(req.body.userId);

    if(!user){
        console.log("USER NOT EXIST");
    }
    console.log("USER EXIST", user);
    const task = new Task({ ...req.body, userId: req.body.userId });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getTasks = async (req, res) => {
  try {
    console.log("Query params:", req.query);
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }
    const tasks = await Task.find({ userId });
    res.json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.body.userId;

    // ✅ Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }

    // ✅ Find and update the task
    const updatedTask = await Task.findOneAndUpdate(
      { _id: taskId, userId }, // Match both taskId and userId
      req.body,                // Update with all data from body
      { new: true }            // Return updated task
    );

    // ✅ Check if task exists
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    // ✅ Send updated task back
    res.json(updatedTask);
  } catch (err) {
    console.error("Error updating task:", err.message);
    res.status(500).json({ error: "Server error. Failed to update task." });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    console.log("Deleting task with ID:", req.params.id);
    console.log("User ID:", req);
    const result = await Task.deleteOne({ _id: req.params.id, userId: req.body.userId });
    console.log(result);
    res.json({ success: result.deletedCount > 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
