import axios from "axios";

// Create Task
const createTask = async (taskData, userId) => {
    try {
      const response = await axios.post('http://localhost:4000/api/tasks', {
        ...taskData,
        userId: userId
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

// Get Tasks
export const getTasks = async (userId = '6816484c176e50c4f0251015') => {
  try {
    console.log(userId);
    const response = await axios.get("http://localhost:4000/api/tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Update Task
export const updateTask = async (taskId, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:4000/api/tasks/${taskId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Delete Task
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/api/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};