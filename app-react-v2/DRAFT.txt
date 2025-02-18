//249

import { createSlice } from "@reduxjs/toolkit";


export const initialUserForm = {                       //se exporta pq se usa en otros lados, en useUsers
    id: 0,
    username: '',
    password: '',
    email: '',
    admin: false,
}  

const initialErrors = {
    username: '',
    password: '',
    email: '',
}

export const usersSlice = createSlice({
    
    name : 'users',                                   //se le define un nombre.
    
    initialState : {
        users : [],
        userSelected : initialUserForm,               //251
        visibleForm : false,                          //251
        errors : initialErrors,                       //251
    },

    reducers : {

        //se definen las "actions", las funciones del CRUD de los usuarios:

        addUser : (state, action) => {               //esta sera una funcion q va a tener el state y el action. //aquí se manipula el state.
            state.users = [                          //se modifica el estado para el usuario. El estado de los usuarios se pasa una nueva instancia. El estado para el usuario es inmutable, por eso se pasa una copia.
                ...state.users,                      //(se esparce el state)se pasa una copia de todos los usuarios q ya teníamos...
                {
                    ...action.payload,               // ... mas el nuevo usuario. (se esparce el action.payload)
                }
            ];
            state.userSelected = initialUserForm;
            state.visibleForm = false;     
        },


        removeUser : (state, action) => {            //esta es la funcion para eliminar un usuario.
            state.users = state.users.filter(user => user.id !== action.payload)
        },


        updateUser : (state, action) => {
            state.users = state.users.map(u => {
                if (u.id === action.payload.id) {    //en el payload viene el usuario modificado.
                    return {
                        ...action.payload,           //retorna el usuario modificado.
                    };
                }
                return u;
            });
            state.userSelected = initialUserForm;
            state.visibleForm = false; 
        },


        loadingUsers : (state, action) => {
            state.users = action.payload
        },


        onUserSelectedForm : (state, action) => {
            state.userSelected = action.payload;
            state.visibleForm = true;
        },


        onOpenForm : (state) => {
            state.visibleForm = true;
        },


        onCloseForm : (state) => {
            state.visibleForm = false;
            state.userSelected = initialUserForm;
        },


        loadingError : (state, action) => {                  // el action se puede desestructurar en el parametro como {action} ...
            state.errors = action.payload;              // {action} esto sirve para q uno pueda llamar al payload sin anteponer el "action."
        }


    }
});


//Se exportan las funciones:

export const {addUser, removeUser, updateUser, loadingUsers, onUserSelectedForm, onOpenForm, onCloseForm, loadingError} = usersSlice.actions;
