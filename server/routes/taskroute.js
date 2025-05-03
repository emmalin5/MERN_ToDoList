const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getAllTasks);
router.post('/', TaskController.addTask);
router.put('/:taskId', TaskController.updateTask);
router.delete('/:taskId', TaskController.deleteTask);

module.exports = router;