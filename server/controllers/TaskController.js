const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        console.error(error);
    res.status(500).json({ message: 'Internal server error' });
    }
    
}

exports.addTask = async (req, res) => {
    console.log(req.body);
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        createdAt: Date.now(),
       
    });
    try{
        const savedTask = await task.save();
        res.json(savedTask);
    }catch(err){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


exports.updateTask = async (req, res) => {
    const body = req.body;
    console.log(body);
    try{
        const task = await Task.findById(req.params.taskId);
        task.title = req.body.title;
        task.description = req.body.description;
        task.completed = req.body.completed;
        task.updateTask = Date.now();
        const updatedTask = await task.save();
        res.json(updatedTask);
    }catch(err){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.deleteTask = async (req, res) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.taskId);
        res.status(200).json({ message: 'Task deleted successfully' });

    }catch(err){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

