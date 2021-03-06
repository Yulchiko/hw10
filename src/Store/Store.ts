import {combineReducers, configureStore} from "@reduxjs/toolkit";

import { carReducer } from "../Redux";

export  const  rootReducer = combineReducers({
    carReducer
})

export const setupStore=()=>configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]