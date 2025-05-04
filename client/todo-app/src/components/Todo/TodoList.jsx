import React, { useState, useEffect } from "react";
import Card from "../Todo/Card";
import TaskModal from "../Todo/TodoModal";
import { getDataTasks, deleteTask, updateTask, createDataTask } from "../../features/todo/todoService";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const userId = "6816484c176e50c4f0251015";

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getDataTasks(userId);
        console.log(tasksData);
        const normalizedData = Array.isArray(tasksData)
          ? tasksData.map((task) => ({
              _id: task._id,
              title: task.title || "Untitled",
              description: task.description || "",
              date: task.date ? new Date(task.date) : null, // Convert to Date object
              startTime: task.startTime || null,
              endTime: task.endTime || null,
              repeat: task.repeat || false,
              status: task.status || "pending", // Use string values
              reminder: task.reminder || false,
              colorIndex: task.colorIndex || 0,
            }))
          : [];
        setTasks(normalizedData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [userId]);

  const openCreateModal = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task, index) => {
    setSelectedTask({ ...task, index });
    setIsModalOpen(true);
  };

  const handleSaveTask = async (taskData, taskId) => {
    try {
      console.log("Task Id in save:", taskId);
      if (taskId) {
        //  Update task via PUT
        const updatedTask = await updateTask(taskId, taskData);
        setTasks(prev => prev.map(task =>
          task._id === taskId ? { ...updatedTask } : task
        ));
      } else {
        //  Create task via POST
        await createDataTask(taskData, userId);
        const tasksData = await getDataTasks(userId);
        setTasks(tasksData);
      }
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };
  

  const handleDeleteTask = async(index) => {
    try{
      console.log(tasks[index]._id);
      console.log("User ID:", userId);
      await deleteTask(tasks[index]._id, userId);
      setTasks(tasks.filter((_, i) => i !== index));
    }catch(error){
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xl">
      {tasks
        .sort((a, b) => (a.status === "completed" ? 1 : -1))
        .map((task, index) => (
          <Card
            key={task._id || index}
            title={task.title}
            time={task.startTime}
            status={task.status}
            colorIndex={task.colorIndex}
            onClick={() => openEditModal(task, index)}
          />
        ))}

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        onDelete={handleDeleteTask}
        task={selectedTask}
      />
    </div>
  );
};

export default TodoList;
