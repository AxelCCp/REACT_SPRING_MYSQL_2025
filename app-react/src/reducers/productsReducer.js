
export const productsReducer = (state = [], action) => {

    switch (action.type) {

        case 'addProduct':
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];

        case 'loadProducts':                                              
            return action.payload;

        case 'updateProduct':
            return state.map(p => {
                if (p.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return p;
            });        
            
        case 'deleteProduct':
            return state.filter(product => product.idCorrelative !== action.payload);

        default:
            return state;

    }
}