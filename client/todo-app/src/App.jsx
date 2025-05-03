import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/styles/index.css'
import AppRoute from '../src/routes/AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    
      <AppRoute/>
   
  //   <div className="min-h-screen flex items-center justify-center bg-gray-100 text-2xl">
  //   Hello Todo App 👋
  // </div>
  );
}

export default App
