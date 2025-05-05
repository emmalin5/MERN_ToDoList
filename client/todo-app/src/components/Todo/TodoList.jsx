import React, { useState, useEffect } from "react";
import Card from "../Todo/Card";
import TaskModal from "../Todo/TodoModal";
import {
  getDataTasks,
  deleteTask,
  updateTask,
  createDataTask,
} from "../../features/todo/todoService";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const userId = "6816484c176e50c4f0251015";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksData = await getDataTasks(userId);
      const normalizedData = tasksData.map((task) => ({
        ...task,
        date: task.date ? new Date(task.date) : null,
      }));
      setTasks(normalizedData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

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
      if (!taskId) {
        await createDataTask(taskData, userId);
      } else {
        await updateTask(taskId, taskData);
      }
      await fetchTasks();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleDeleteTask = async (index) => {
    try {
      const taskId = tasks[index]._id;
      await deleteTask(taskId, userId);
      setTasks((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xl mt-5">
      <button onClick={openCreateModal} className="mb-4 p-2 bg-blue-500 text-white rounded">
        + New Task
      </button>

      {tasks.map((task, index) => (
        <Card
          key={task._id}
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
        onSave={handleSaveTask}       // ✅ PASSED CORRECTLY
        onDelete={handleDeleteTask}
        task={selectedTask}
      />
    </div>
  );
};

export default TodoList;
