import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const todoQuery = createAsyncThunk(
    'todo/todoQuery',
    async () => {
        const response = await axios.post('https://dummyjson.com/auth/todos/add', {
            token: localStorage.getItem('token')
        })
        return response.data
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        loading: false,
        error: null,
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            return {...state, todos: [...state.todos,
                {title: action.payload.title, body: action.payload.body}]}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(todoQuery.fulfilled, (state, action) => {
            state.todos = action.payload
            state.loading = false
            state.error = null
        })
        builder.addCase(todoQuery.rejected, (state, action) => {
            state.error = action.message.error,
            state.loading = false
        })
        builder.addCase(todoQuery.pending, (state, action) => {
            state.loading = true,
            state.error = null
        })
    }
})

export const { addTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer