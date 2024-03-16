import { createSlice } from '@reduxjs/toolkit';
import { currentUser, logIn, logOut, refreshTokens, register, updateUser } from './authOperation';

interface AuthState {
    accessToken: string;
    isLoggedIn: boolean;
    isRefreshing: boolean;
    user: {
        [x: string]: any;
        name: string;
        email: string;
        avatar: string;

    };
}

const initialState: AuthState = {
    accessToken: '',
    isLoggedIn: false,
    isRefreshing: false,
    user: {
        name: '',
        email: '',
        avatar: '',
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.data;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(logIn.rejected, (state) => {
                state.isRefreshing = false;
            })
            .addCase(logIn.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.data;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(register.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: '', email: '', avatar: '' };
                state.accessToken = '';
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(refreshTokens.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.isRefreshing = false;
            })
            .addCase(refreshTokens.rejected, (state) => {
                state.isRefreshing = false;
                state.isLoggedIn = false;
            })
            .addCase(refreshTokens.pending, (state) => {
                state.isRefreshing = true;
            })

    },
});


export default authSlice.reducer;