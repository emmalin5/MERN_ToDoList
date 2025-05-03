import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TodoList from '../../components/Todo/TodoList';
import { Calendar } from 'antd';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

function TodoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto justify-between">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Left side: Todo List */}
          <div className="md:w-2/3 w-full">
            <p className="text-l text-gray-400 font-semibold pt-4">Sat 3 May  </p>
            <TodoList />
          </div>

          {/* Right side: Calendar */}
          <div className="md:w-1/3 w-full p-4">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TodoPage;
