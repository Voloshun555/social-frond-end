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
            console.log("response", response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'An error occurred during login' });
        }
    }
);

export const deleteChatroomAsync = createAsyncThunk(
    'chatrooms/delete',
    async (chatroomId: string, thunkAPI) => {
        try {
            const response = await axios.delete(`chatrooms/${chatroomId}/delete`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'An error occurred during deletion' });
        }
    }
);

export const getChatroomsForUserAsync = createAsyncThunk(
    'chatrooms/getForUser',
    async (userId: string, thunkAPI) => {
        try {
            const response = await axios.get(`chatrooms/${userId}/chatrooms`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'An error occurred while fetching chatrooms for user' });
        }
    }
);