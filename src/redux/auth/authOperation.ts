import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3005/api/';

export interface Credentials {
    email: string;
    password: string;
    name?: string
}


export const setAuthHeader = (accessToken: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials: Credentials, thunkAPI) => {
        try {
            const response = await axios.post('auth/login', credentials);
            setAuthHeader(response.data.accessToken);
            console.log(response.data.accessToken)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'An error occurred during login' });
        }
    }
);

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk(
    'auth/register',
    async (credentials: Credentials, thunkAPI) => {
        try {
            const response = await axios.post('auth/register', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: String });
        }
    }
);


// export const logIn = createAsyncThunk(
//     'auth/login',
//     async (credentials: Credentials, thunkAPI) => {
//         try {
//             const response = await axios.post('auth/login', credentials);
//             setAuthHeader(response.data.token);
//             console.log(response.data)
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue({message: String});
//         }
//     }
// );



/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        // Після успішного виходу видаліть маркер із заголовка HTTP
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: String });
    }
});

// get @ /users/current
//    заголовки: Авторизація: маркер носія
// export const refreshUser = createAsyncThunk(
//     'auth/refresh',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState();
//         const persistedToken = state.auth.token;
//         if (persistedToken === null) {
//             return thunkAPI.rejectWithValue('Unable to fetch user');
//         }

//         try {
//             setAuthHeader(persistedToken);
//             const response = await axios.get('/users/current');
//             return response.data;
//         } catch (error) {
//             console.log(error);
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );