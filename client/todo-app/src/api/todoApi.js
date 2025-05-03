import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos'; // Example API

// Get all todos
export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.slice(0, 10); // Limit to 10 todos for simplicity
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Add a new todo
export const addTodo = async (text) => {
  try {
    const response = await axios.post(API_URL, { title: text, completed: false });
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};

// Delete a todo
export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};

// Toggle complete status of a todo
export const toggleComplete = async (id) => {
  try {
    const todo = await axios.get(`${API_URL}/${id}`);
    await axios.put(`${API_URL}/${id}`, { ...todo.data, completed: !todo.data.completed });
  } catch (error) {
    console.error('Error toggling complete:', error);
    throw error;
  }
};