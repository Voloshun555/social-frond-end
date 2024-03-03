import { createSlice } from '@reduxjs/toolkit';
import { createChat, deleteChatroomAsync, getChatroomsForUserAsync } from './chatOperation';

interface Chat {
    ownerId: any;
    id: string;
    name: string;
}

interface ChatState {
    chats: Chat[];
    loading: boolean;
    error: string | null;

}

const initialState: ChatState = {
    chats: [],
    loading: false,
    error: null,

};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createChat.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createChat.fulfilled, (state, action) => {
                state.loading = false;
                state.chats.push(action.payload);
            })
            .addCase(createChat.rejected, (state, action) => {
                state.loading = false;

            })
            .addCase(deleteChatroomAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteChatroomAsync.fulfilled, (state, action) => {
                state.loading = false;
                const chatIdToDelete = action.meta.arg;
                state.chats = state.chats.filter(chat => chat.id !== chatIdToDelete);
            })

            .addCase(getChatroomsForUserAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getChatroomsForUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.chats = action.payload;
            })
            .addCase(getChatroomsForUserAsync.rejected, (state, action) => {
                state.loading = false;

            });
    },
});

export default chatSlice.reducer;