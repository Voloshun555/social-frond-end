import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMessage = createAsyncThunk(
    'messages/sendMessage',
    async ({ chatroomId, content, userId }: { chatroomId: string, content: string, userId: string }, thunkAPI) => {
        try {
            const response = await axios.post(`chatrooms/${chatroomId}/messages`, { content, userId });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'An error occurred while sending message' });
        }
    }
);

export const fetchMessagesForChatroom = createAsyncThunk(
    'messages/fetchMessagesForChatroom',
    async (chatroomId: string, thunkAPI) => {
        try {
            const response = await axios.get(`/chatrooms/${chatroomId}/messages`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'An error occurred while fetching messages for chatroom' });
        }
    }
);