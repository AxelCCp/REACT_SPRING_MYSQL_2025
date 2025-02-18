import { createSlice } from "@reduxjs/toolkit";


export const initialUsersSystem = [];

export const initialUserSystemForm = [
    {
        name : '',
        lastname : '',
        position : '', 
        area : '', 
        email : '',
        roles: [],
    },
]

export const initialUserSystemFormErrors = {
    name : '', 
    lastname : '', 
    position : '', 
    area : '', 
    email : '', 
    roleAdmin : false, 
    roleUser : false, 
    password : '', 
    passwordRepeat : ''
}


export const userSystemSlice = createSlice({

    name : 'userSystemSlice',

    initialState : {
        usersSystem : [],
        userSystemSelected : initialUserSystemForm,
    },

    reducers : {
        
        getUsersSystemSlice : (state, action) => {
            console.log('getUsersSystemSlice: ', action.payload)
            state.usersSystem = action.payload
        },

        addUserSystemSlice : (state, action) => {
            state.usersSystem = [
                ...state.usersSystem,
                {
                    ...action.payload
                }
            ];
            state.userSystemSelected = initialUserSystemForm;
        },


    }

});


export const {

    getUsersSystemSlice,
    addUserSystemSlice,

} = userSystemSlice.actions;