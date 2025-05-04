const Task = require("../models/Task");
const User = require("../models/User");

exports.createTask = async (req, res) => {
  try {
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
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.body.userId },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const result = await Task.deleteOne({ _id: req.params.id, userId: req.body.userId });
    res.json({ success: result.deletedCount > 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
