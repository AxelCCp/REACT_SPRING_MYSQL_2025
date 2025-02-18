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
        visibleForm : false,  
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

        updateUserSystemSlice : (state, action) => {

            state.usersSystem = state.usersSystem.map(u => {
                if(u.idUser === action.payload.idUser) {
                    return {
                        ...action.payload,
                    };
                }
                return u;
            });

            state.userSystemSelected = initialUserSystemForm;

        },


        onUserSystemSelectedFormSlice : (state, action) => {

            state.visibleForm = true;
            state.userSystemSelected = action.payload;

        },


        onCloseFormUserSystemSlice : (state) => {

            state.visibleForm = false;
            state.userSystemSelected = initialUserSystemForm;

        },


        deleteUserSystemSlice : (state, action) => {
            state.usersSystem = state.usersSystem.filter(u => u.idUser !== action.payload);
        }




    }

});


export const {

    getUsersSystemSlice,
    addUserSystemSlice,
    updateUserSystemSlice,
    onUserSystemSelectedFormSlice,
    onCloseFormUserSystemSlice,
    deleteUserSystemSlice,

} = userSystemSlice.actions;