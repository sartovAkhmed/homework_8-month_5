import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginQuery = createAsyncThunk(
    'login/loginQuery',
    async ({userName, userPassword}) => {
        const response = await axios.post('https://dummyjson.com/auth/login', {
            username: userName,
            password: userPassword
        })
        return response.data
    }
)

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginQuery.fulfilled, (state, action) => {
            state.user = action.payload
            localStorage.setItem('token', action.payload.token)
        })
    }
})

export const loginReducer = loginSlice.reducer