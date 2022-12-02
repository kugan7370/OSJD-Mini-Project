import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    orders: [],
    message: null,
}


//add into card
export const AddOrderDetails = createAsyncThunk('orders/add', async (orderDatas) => {
    const token = localStorage.getItem('token')
    const { fullname,
        address,
        zipCode,
        phone,
        country,
        state, ...getCartData } = orderDatas

    let getCarts = getCartData?.getCarts
    try {
        const OrderResult = getCarts?.map(async (getcart) => {

            const addOrderResults = await axios({
                method: "post",
                url: "http://localhost:8080/user/orderJersey",
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: {
                    address,
                    zipCode,
                    fullname,
                    phone,
                    country,
                    state,
                    jersey_id: getcart?.jersey_id,
                    jersey_name: getcart?.jersey_name,
                    size: getcart?.size,
                    jersey_number: getcart?.jersey_number,
                    jersey_image: getcart?.jersey_image
                }

            })
            const removeCartResults = await axios({
                method: "delete",
                url: ` http://localhost:8080/user/removeCart/${getcart?._id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },

            })
            return addOrderResults.data
        })

        const FinalOrderDetails = await Promise.all(OrderResult)

        if (FinalOrderDetails) {
            toast.success("Ordered Successfully", {
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
        // console.log(e);
    }

})
// export const getCartDetails = createAsyncThunk('card/fetch', async () => {
//     const token = localStorage.getItem('token')
//     try {
//         const getCartResults = await axios({
//             method: "get",
//             url: "http://localhost:8080/user/getCart",
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             },
//         })
//
//
//
//         if (getCartResults.data) {
//
//             return getCartResults.data
//         }
//
//     } catch (e) {
//         if (e.response) {
//             toast.error(e.response.data.message, {
//                 position: toast.POSITION.BOTTOM_RIGHT
//             });
//             // alert(e.response.data.error)
//         }
//         console.log(e);
//     }
//
// })





// const CardSlicer = createSlice({
//     name: 'cart',
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(getCartDetails.pending, (state) => {
//             state.loading = true;
//             state.carts = null;
//             state.message = '';
//         })
//         builder.addCase(getCartDetails.fulfilled, (state, actions) => {
//             state.loading = false;
//             state.carts = actions.payload;
//             state.message = 'Successfully added';
//         })
//         builder.addCase(getCartDetails.rejected, (state, actions) => {
//             state.loading = false;
//             state.carts = null;
//             state.message = 'server error';
//         })
//
//     }
// });
//
// //export const { logout } = userSlicer.actions
//
// export default CardSlicer.reducer