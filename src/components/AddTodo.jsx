import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';
const AddTodo = () => {
    const[input, setInput] = useState("");
    const dispatch = useDispatch();

    function clickHandler(e){
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    
  return (
    <>
        <form className='mt-[5rem]' onSubmit={clickHandler}>
            <div className='flex justify-center '>

                <input 

                    className='w-[40rem] h-[3.5rem] rounded-md text-3xl '
                    type="text" 
                    value={input} 
                    placeholder='Add todos'
                    onChange={(e) =>setInput(() =>e.target.value)}
                    
                />
                <button 
                    
                    className='bg-black text-white w-[10rem]'

                >Add Todo</button>

            </div>  
        </form>
    </>
  )
}

export default AddTodo