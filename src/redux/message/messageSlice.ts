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
    reducers: {
        receiveMessage: (state, action) => {
            state.data.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
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

            })
            .addCase(fetchMessagesForChatroom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMessagesForChatroom.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMessagesForChatroom.rejected, (state, action) => {
                state.loading = false;

            });
    },
});

export const { receiveMessage } = messageSlice.actions;

export default messageSlice.reducer;