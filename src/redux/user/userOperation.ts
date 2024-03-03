import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getAllUsers = createAsyncThunk('users/all/users', async (_, thunkAPI) => {
    try {
        const response = await axios.get('users/all/users');
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: String });
    }
});



