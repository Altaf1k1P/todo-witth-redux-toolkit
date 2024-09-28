import React from 'react'
import { addTodos } from '../features/Todo/TodoSlice';
import {useDispatch} from 'react-redux'



function AddTodo() {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
                addTodos(input)
            );
        setInput('');
    }

  return (
    <form onSubmit={handleSubmit} className='flex justify-center mt-20 mx-12'>
        <input 
        className='w-2/4  border-gray-900 text-white bg-gray-900 outline-none px-2 py-3 rounded-md'
        type="text"
        placeholder='todo msg...' 
        value={input}
        onChange={(e)=>setInput(e.target.value)} />
        <button type='submit' className='ml-4 rounded-md px-2 font-medium bg-[#04AA6D]'>Add</button>
    </form>
  )
}

export default AddTodo

