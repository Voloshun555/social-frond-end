import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from './userOperation';

interface User {
    isOnline: boolean;
    id: string;
    name: string;
    email: string;
    avatar: string
}

interface UserState {
    user: User[];
    loading: boolean;
    error: string | null;

}

const initialState: UserState = {
    user: [],
    loading: false,
    error: null,

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
           
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;

            });
    },
});

export default userSlice.reducer;