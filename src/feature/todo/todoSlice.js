import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos:[{id:1, name:"Hello world!"}]
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        //state: allow to access data from the store.
        //action: it store changes that passed as argument. 
        addTodo: (state, action)=>{
            const todo = {
                id:nanoid(),
                name:action.payload,
            }
            state.todos.push(todo);

        },
        removeTodo: (state, action)=>{  
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        upDate: (state, action)=>{
            state.todos.map((item)=>{
                if(item.id === action.payload){
                    item.name = action.payload;
                }
            })
        }
    },
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;