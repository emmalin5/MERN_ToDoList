import React from 'react';
import TodoPage from '../features/todo/TodoPage';

const Home = () => {
  return (
    
    <div className="container mx-auto p-4">
        <h1>Home</h1>
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <TodoPage />
    </div>
  );
};

export default Home;