import { useProducts } from "../hooks/useProducts";
import { ProductContext } from "./ProductContext";


export const ProductProvider = ({children}) => {

    const {
        products, 
        getProducts,
        initialProductForm,
        handlerAddProduct,
        handlerUpdateProduct,
        handlerRemoveProduct,
    } = useProducts();

    return(

        <ProductContext.Provider value={ 
            
            { 
                products, 
                getProducts, 
                initialProductForm, 
                handlerAddProduct,
                handlerUpdateProduct,
                handlerRemoveProduct,
            }
        
        }> {children} </ProductContext.Provider>

    )

}