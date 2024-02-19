
import { createSlice } from '@reduxjs/toolkit';
import { createChat } from './chatOperation';


interface AuthState {
    data: {}
}

const initialState: AuthState = {
    data: {}
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createChat.fulfilled, (state, action) => {
                state.data = action.payload.data
            })

    },
});

export default chatSlice.reducer;