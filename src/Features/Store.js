import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './Admin/CategorySlicer'
import GetJerseyReducer from './Admin/GetJerseySlicer'
import CartReducer from './User/cartSlicer'
import userReducer from './User/userSlicer'


export const store = configureStore({
    reducer: {
        users: userReducer,
        category: CategoryReducer,
        Jerseys: GetJerseyReducer,
        cart: CartReducer
    },
})