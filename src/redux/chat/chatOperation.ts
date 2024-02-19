import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ChatCredentials {
    name: string;
}

export const createChat = createAsyncThunk(
    'chatrooms/create',
    async (credentials: ChatCredentials, thunkAPI) => {
        try {
            const response = await axios.post('chatrooms/create', credentials);
            console.log(response)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'An error occurred during login' });
        }
    }
);