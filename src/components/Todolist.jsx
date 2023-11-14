
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import { deleteTodo } from '../Redux/slice.js';


const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {

    dispatch(deleteTodo(id));
  };

  return (
    <div className="mt-4 border-4">
      {todo.map((todo) => (
        <div key= {todo.id} className='flex items-center justify-between p-2 border'>
        <Todo todo={todo} />
        <button onClick={() => handleDelete(todo.id)} className="ml-2 p-2 bg-red-500 text-white">
            Delete
          </button>
      </div>
      ))}
    </div>
  );
};

export default TodoList;
