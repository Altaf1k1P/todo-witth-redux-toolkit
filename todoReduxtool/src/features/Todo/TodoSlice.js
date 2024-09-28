import { createSlice, nanoid } from "@reduxjs/toolkit";

//initialState is use for show defual value 
const initialState = {
    todos:[
        {id:1,
        text :'hello world'}
         
    ]
}

// create slice 

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action)=>{
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter(todo=> todo.id!== action.payload)
        }
    }
})


export const {addTodos, deleteTodo} = TodoSlice.actions

export default TodoSlice.reducer;

