import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3006/api/';

export interface CredentialsWithoutPassword {
    email: string;
    name?: string;
}
export type Credentials = CredentialsWithoutPassword & {
    password: string;
};

export const setAuthHeader = (accessToken: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials: Credentials, thunkAPI) => {
        try {
            const response = await axios.post('auth/login', credentials);
            setAuthHeader(response.data.accessToken);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'An error occurred during login' });
        }
    }
);

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials: Credentials, thunkAPI) => {
        try {
            const response = await axios.post('auth/register', credentials);
            setAuthHeader(response.data.token);
            console.log(response);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: String });
        }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.get('auth/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: String });
    }
});

export const updateUser = createAsyncThunk(
    'auth/update',
    async (credentials: CredentialsWithoutPassword, thunkAPI) => {
        try {
            const res = await axios.put('users', credentials);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: String });
        }
    }
);

export const currentUser = createAsyncThunk(
    'auth',
    async (_, thunkAPI) => {
        const state: any = thunkAPI.getState();
        const persistedToken = state.auth.accessToken;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('/users');
            
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshTokens = createAsyncThunk(
    'auth/refreshTokens',
    async (refreshToken: string, { extra }: { extra: any }) => {
        try {
            const response = await extra.api.refreshTokens(refreshToken);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const updateAvatar = createAsyncThunk('user/avatars', async avatarData => {
    try {
        const { data } = await axios.post('media/avatar', avatarData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('data after avatar update', data);
        return data.avatar;
    } catch (error) {
        console.log(error)
    }
});