
import AddTodo from './components/AddTodo';
import TodoList from './components/Todolist';

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-8 border-4 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center text-purple-900">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;