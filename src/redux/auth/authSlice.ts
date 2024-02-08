import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './authOperation';


interface AuthState {
    accessToken: string;
    email: string
    name: string
}

// Define the initial state using that type
const initialState: AuthState = {
    accessToken: '',
    email: '',
    name: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.email = action.payload.email;
            state.name = action.payload.name;
        });
    },
});

export default authSlice.reducer;

