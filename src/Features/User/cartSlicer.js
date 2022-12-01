import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { MdPassword } from 'react-icons/md';
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    carts: [],
    message: null,
}


//add into card
export const AddCartDetails = createAsyncThunk('card/add', async (cardData) => {
    const token = localStorage.getItem('token')
    console.log(token);
    try {
        const addCartResults = await axios({
            method: "post",
            url: "http://localhost:8080/user/addCart",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: cardData

        })



        if (addCartResults.data) {
            toast.success("Added Successfully", {
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
export const getCartDetails = createAsyncThunk('card/fetch', async () => {
    const token = localStorage.getItem('token')
    try {
        const getCartResults = await axios({
            method: "get",
            url: "http://localhost:8080/user/getCart",
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })



        if (getCartResults.data) {

            return getCartResults.data
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
export const removeCartDetails = createAsyncThunk('card/remove', async (id) => {
    console.log(id);
    const token = localStorage.getItem('token')
    try {
        const removeCartResults = await axios({
            method: "delete",
            url: ` http://localhost:8080/user/removeCart/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            },

        })
        console.log(removeCartResults.data);


        if (removeCartResults.data) {
            toast.success("Removed item Successfully", {
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




const CardSlicer = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCartDetails.pending, (state) => {
            state.loading = true;
            state.carts = null;
            state.message = '';
        })
        builder.addCase(getCartDetails.fulfilled, (state, actions) => {
            state.loading = false;
            state.carts = actions.payload;
            state.message = 'Successfully added';
        })
        builder.addCase(getCartDetails.rejected, (state, actions) => {
            state.loading = false;
            state.carts = null;
            state.message = 'server error';
        })

    }
});

//export const { logout } = userSlicer.actions

export default CardSlicer.reducer