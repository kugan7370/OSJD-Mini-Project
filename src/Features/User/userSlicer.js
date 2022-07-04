import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { MdPassword } from 'react-icons/md';

const initialState = {
    loading: false,
    user: null,
    message: '',
}

export const fetchUser = createAsyncThunk('user/fetch', async (user) => {

    const results = await axios.post('http://localhost:8080/user/signin', {
        email: user.email,
        Password: user.password
    })


    if (results.status === 201) {
        const { token, user } = results.data;
        // console.log(token);
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
    }
    return results.data
})



export const userRegister = createAsyncThunk('user/register', async (user) => {
    const results = await axios.post('http://localhost:8080/user/signup', {
        email: user.email,
        Password: user.password,
        username: user.username,
        ConfirmPassword: user.confirmPassword
    })
    console.log(results);
    return results.data;
})

const userSlicer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.message = '';
        })
        builder.addCase(fetchUser.fulfilled, (state, actions) => {
            state.loading = false;
            state.user = actions.payload;
            state.message = 'Successfully login';
        })
        builder.addCase(userRegister.fulfilled, (state, actions) => {
            state.loading = false;
            state.user = actions.payload;
            state.message = 'Successfully Registered';
        })
    }
});

export const { logout } = userSlicer.actions

export default userSlicer.reducer