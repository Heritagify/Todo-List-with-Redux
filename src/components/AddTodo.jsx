import { useState } from 'react';


import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/slice.js';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="p-2 border"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
