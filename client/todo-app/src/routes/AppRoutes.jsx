import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoPage from '../features/todo/TodoPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TodoPage />} />
      {/* Future routes can be added here */}
    </Routes>
  </Router>

);

export default AppRoutes;
