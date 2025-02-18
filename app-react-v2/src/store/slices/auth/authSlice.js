import { createSlice } from "@reduxjs/toolkit";


const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    nickName: '',
    user: undefined,
}


export const authSlice = createSlice({
    
    name : 'auth', //se le da un nombre a este slice.
    
    initialState : initialLogin,
    
    reducers : {

        onLogin : (state, action) => {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.nickName = action.payload.nickName;
            state.user = action.payload.user;
        },

        onLogOut : (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.nickName = '',
            state.user = undefined;
        }
    }

});

export const {onLogin, onLogOut} = authSlice.actions;


