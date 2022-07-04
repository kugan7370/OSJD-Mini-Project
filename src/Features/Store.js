import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/userSlicer'

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
})