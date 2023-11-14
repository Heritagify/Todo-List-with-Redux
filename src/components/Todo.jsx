
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../Redux/slice.js';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className={`flex items-center gap-3 w-full text-emerald-900 hover:animate-bounce justify-between p-2 border ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
      <p>{todo.text}</p>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
    </div>
  );
};

Todo.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  };
export default Todo;
