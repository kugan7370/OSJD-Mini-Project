import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { MdPassword } from 'react-icons/md';
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    user: null,
    message: null,
}


//signin action
export const fetchUser = createAsyncThunk('user/fetch', async (user) => {
    try {
        const results = await axios.post('http://localhost:8080/user/signin', {
            email: user.email,
            Password: user.password
        })


        if (results.status === 201) {
            const { token, user } = results.data;
            // console.log(token);
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))

            toast.success("User login Successfully", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        return results.data
    } catch (e) {
        if (e.response) {
            toast.error(e.response.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            // alert(e.response.data.error)
        }
        console.log(e);
    }

})


//signup action
export const userRegister = createAsyncThunk('user/register', async (user) => {
    // console.log(user);
    try {
        const results = await axios.post('http://localhost:8080/user/signup', {
            email: user.email,
            Password: user.password,
            username: user.username,
            ConfirmPassword: user.confirmPassword
        })
        if (results.data) {
            toast.success("User Created Successfully", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }

    } catch (e) {
        if (e.response) {
            toast.error(e.response.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            // alert(e.response.data.error)
        }
        console.log(e);
    }





})

//logout action
export const Logout = createAsyncThunk('user/logout', () => {
    localStorage.clear();
    toast.success("User logout Successfully", {
        position: toast.POSITION.BOTTOM_RIGHT
    });
})



//isuseraction
export const isUser = createAsyncThunk('user/isUser', () => {
    const token = localStorage.getItem('token')
    if (token) {

        const user = JSON.parse(localStorage.getItem('user'))
        return { user, token }
    }

    else {
        return null;
    }
})




const userSlicer = createSlice({
    name: 'users',
    initialState,
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
            state.user = null;
            state.message = 'Successfully Registered';
        })
        builder.addCase(Logout.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
            state.message = 'Successfuly Logout';
        })
        builder.addCase(isUser.fulfilled, (state, actions) => {
            state.loading = false;
            state.user = actions.payload;
            state.message = '';
        })
    }
});

//export const { logout } = userSlicer.actions

export default userSlicer.reducer