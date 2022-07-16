import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


// getCategory
export const getCategory = createAsyncThunk('admin/getcategory', async (user) => {

    const results = await axios.get('http://localhost:8080/admin/getCategory')
    // console.log(results.data);
    return results.data
})



const initialState = {
    loading: false,
    Categories: null,
    message: null,
}

const CategorySlicer = createSlice({
    name: "category",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state) => {
            state.loading = true;
            state.Categories = null;
            state.message = null;
        })
        builder.addCase(getCategory.fulfilled, (state, actions) => {
            state.loading = false;
            state.Categories = actions.payload;
            state.message = 'Successfully login';
        })

        builder.addCase(getCategory.rejected, (state, actions) => {
            state.loading = false;
            state.Categories = actions.payload;
            state.message = 'Fetching error';
        })
    }

});



export default CategorySlicer.reducer