import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


// getJersey
export const getJersey = createAsyncThunk('admin/getJersey', async (user) => {

    const results = await axios.get('http://localhost:8080/admin/getJersey')
    // console.log(results.data);
    return results.data
})


const initialState = {
    loading: false,
    Jerseys: null,
    message: null,
}

const GetJerseySlicer = createSlice({
    name: 'Jerseys',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getJersey.pending, (state) => {
            state.loading = true;
            state.Jerseys = null;
            state.message = null;
        })
        builder.addCase(getJersey.fulfilled, (state, actions) => {
            state.loading = false;
            state.Jerseys = actions.payload;
            state.message = 'Successfully login';
        })

        builder.addCase(getJersey.rejected, (state, actions) => {
            state.loading = false;
            state.Jerseys = actions.payload;
            state.message = 'Fetching error';
        })
    }

});

export const { } = GetJerseySlicer.actions

export default GetJerseySlicer.reducer