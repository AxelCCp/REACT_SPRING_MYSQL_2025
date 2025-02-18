import { createSlice } from "@reduxjs/toolkit";


export const initialProductForm = 
    {
        idCorrelative: 0, 
        sku: '', 
        name: '', 
        description: '', 
        brand: '', 
        price: 0, 
        units: 0, 
        manufactureDate:''
    };



/*
const initialErrors = {
    username: '',
    password: '',
    email: '',
}
*/



export const stockSlice = createSlice({
    
    name : 'stock', 
    
    initialState : {
        products : [],
        productSelected : initialProductForm,                                       
        //errors : initialErrors,                       
    },

    
    reducers : {

        getProductsSlice : (state, action) => {
            state.products = action.payload
        },


        addProductSlice : (state, action) => {
            state.products = [
                ...state.products,
                {
                    ...action.payload
                }
            ];
            state.productSelected = initialProductForm;
        },


        updateProductSlice : (state, action) => {

            state.products = state.products.map(p => {
                if(p.idCorrelative === action.payload.idCorrelative) {
                    return {
                        ...action.payload,
                    };
                }
                return p;
            });

            state.productSelected = initialProductForm;

        },


        removeProductSlice : (state, action) => {
            state.products = state.products.filter(p => p.idCorrelative !== action.payload);
        }, 
    }

});

export const {

    getProductsSlice,
    addProductSlice,
    updateProductSlice,
    removeProductSlice,

} = stockSlice.actions;