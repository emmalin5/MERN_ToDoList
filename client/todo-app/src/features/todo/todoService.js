import axios from "axios";

// Create Task
export const createDataTask = async (taskData, userId) => {
  try {
    const response = await axios.post('http://localhost:4000/api/tasks', {
      ...taskData,
      userId: userId
    });
    console.log(response.data);
    return response.data; // Return created task
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get Tasks
export const getDataTasks = async (userId = '6816484c176e50c4f0251015') => {
  try {
    console.log('User ID in getDataTasks:', userId);
    const response = await axios.get(`http://localhost:4000/api/tasks`, {
      params: { userId } 
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};



// Update Task
export const updateTask = async (taskId, updatedData) => {
  try {
    console.log("Updating task with ID:", taskId, updatedData);
    updatedData.userId = "6816484c176e50c4f0251015";
    const response = await axios.put(`http://localhost:4000/api/tasks/${taskId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Delete Task

export const deleteTask = async (taskId, userId) => {
  try {
    console.log("This is in delete Task", taskId);
    console.log("User ID:", userId);
    const response = await axios.delete(`http://localhost:4000/api/tasks/${taskId}`, {
      data: { userId: userId } // this is the fix
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
