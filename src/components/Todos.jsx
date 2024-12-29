import React from 'react'
import { MdDelete } from "react-icons/md";
import {useSelector, useDispatch} from "react-redux"
import {removeTodo} from '../feature/todo/todoSlice'



const Todos = () => {
  const todo = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
  <>
    <h1 className='text-3xl font-sans font-bold mt-5'>todos</h1>
    <div className='min-w-[80vw] mt-[3rem] flex flex-col gap-2 '>
      
    {todo.map((item) => (
      <div className='min-h-16 min-w-[100%] flex justify-between bg-white rounded-md' key={item.id}>
      <p className='border-solid border-black p-4 font-bold text-3xl '>{item.name}</p>
      
      <button 
        className='bg-black text-white p-1 h-[3.5rem] place-self-center mr-3 rounded-md flex justify-center items-center'
        onClick={() => dispatch(removeTodo(item.id))}
      >
        <MdDelete className='h-10 w-16 cursor-pointer'/>
      </button>
    </div>
    ))}
      
    </div>
  </>
  )
}

export default Todos