
import AddTodo from './components/AddTodo';
import TodoList from './components/Todolist';

const App = () => {
  return (
    <div className=''>
      <div className="bg-gradient-to-r from-bg-1 via-bg-4 to-bg-5 max-w-md mx-auto mt-16 border-4 rounded-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-900">Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default App;