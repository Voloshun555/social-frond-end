import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessageState {
    messages: string[]; 
}

const initialState: MessageState = {
    messages: [],
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<string>) => {
            state.messages.push(action.payload);
        },
    },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
