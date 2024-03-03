import { createSlice } from '@reduxjs/toolkit';
import { fetchMessagesForChatroom, sendMessage } from './messageOperation';

interface Sender {
    [x: string]: any;
    avatar: string;
    email: string;
    name: string;
}

interface Message {
    [x: string]: any;
    content: string;
    sender: Sender;
}

interface MessageState {
    data: Message[];
    loading: boolean;
    error: string | null;
}

const initialState: MessageState = {
    data: [],
    loading: false,
    error: null
};


export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Обробка надсилання повідомлення
            .addCase(sendMessage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false;
                // Можливо, ви захочете обробити помилку
            })
            // Обробка отримання повідомлень для чат-кімнати
            .addCase(fetchMessagesForChatroom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMessagesForChatroom.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Оновлюємо дані повідомлень
            })
            .addCase(fetchMessagesForChatroom.rejected, (state, action) => {
                state.loading = false;
                // Можливо, ви захочете обробити помилку
            })
    },
});

export default messageSlice.reducer;