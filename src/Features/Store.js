import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './Admin/CategorySlicer'
import GetJerseyReducer from './Admin/GetJerseySlicer'
import userReducer from './User/userSlicer'


export const store = configureStore({
    reducer: {
        users: userReducer,
        category: CategoryReducer,
        Jerseys: GetJerseyReducer
    },
})