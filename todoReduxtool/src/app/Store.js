import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/TodoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer  // Corrected: Wrap the reducer in an object with a slice name
    }
})
