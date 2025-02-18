import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { stockSlice } from "./slices/stock/stockSlice";
import { userSystemSlice } from "./slices/userSystem/userSystemSlice";

export const store = configureStore({

    reducer : {
        
        auth : authSlice.reducer, 
        stock : stockSlice.reducer,
        userSystemSlice : userSystemSlice.reducer,

    }

});