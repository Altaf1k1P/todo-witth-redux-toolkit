import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../features/Todo/TodoSlice'

function Todo() {
    const todos = useSelector(state => state.todo.todos || []); // Ensure todos is always an array

  const dispatch = useDispatch()

  return (
    <>
      <ul className='list-none mt-9'>
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className='flex rounded-lg  mt-4 mx-20  bg-gray-900'>
              <div className='w-full mt-2  font-semibold text-white shadow-sm rounded-l-md py-2 px-2 '>{todo.text}</div>
              <button className='rounded-md  py-2 px-5 font-semibold  my-3 mr-4 bg-[#04AA6D] ' onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
            </li>
          ))
        ) : (
          <p className='text-center text-xl font-extralight'>No todos available</p>
        )}
      </ul>
    </>
  );
  
}

export default Todo
