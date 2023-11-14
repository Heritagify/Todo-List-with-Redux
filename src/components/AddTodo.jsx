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
        className="px-3 py-1 outline-none ml-2 rounded-full w-80"
      />
      <button type="submit" className="ml-2 p-2 px-3 text-sm bg-purple-900 rounded-lg text-white hover:skew-y-12">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
