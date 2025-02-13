import { useContext, useReducer } from "react";
import { createProduct, deleteProduct, findAllProducts, updateProduct } from "../services/productService";
import { productsReducer } from "../reducers/productsReducer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LoginContext } from "../auth/context/LoginContext";


const initialProducts = [];

const initialProductForm = [
    {
        idCorrelative: 0, sku: '', 
        name: '', 
        description: '', 
        brand: '', 
        price: 0, 
        units: 0, 
        manufactureDate:''
    },
];

export const useProducts = () => {

    const navigate = useNavigate();

    const [products, dispatch] = useReducer(productsReducer, initialProducts);

    const { login, handlerLogout } = useContext(LoginContext);


    const getProducts = async () => {
        
        try {

            const result = await findAllProducts();
            dispatch({type:'loadProducts', payload:result.data}); 
        
        } catch(error) {

            if (error.response?.status == 401) {
                handlerLogout();
            }

        }
        
    }


    const handlerAddProduct = async (product) => {

        if(!login.isAdmin) return;

        try {

            const result = await createProduct(product);

            dispatch({
                type:  'addProduct',
                payload: result.data.product,                                                         
            });
    
            Swal.fire('Product created', 'The product was created successfully!', 'success');
            
            navigate('/stock');


        } catch(error) {
            if (error.response?.status == 401) {
            
                handlerLogout();

            }
        }
        

    }



    const handlerUpdateProduct = async (product) => {

        if(!login.isAdmin) return;


        try {

            const result = await updateProduct(product);

            dispatch({
                type:  'updateProduct',
                payload: result.data,                                                         
            });
    
            Swal.fire('Product updated', 'The product was updates successfully!', 'success');
    
            navigate('/stock');

        } catch(error) {

            if (error.response?.status == 401) {
            
                handlerLogout();

            }

        }

       

    }



    const handlerRemoveProduct = async (idCorrelative) => {

        if(!login.isAdmin) return;

        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "Be careful, the product will be deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33', 
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete!'
        }).then((result) => {
            
            if (result.isConfirmed) {


                try {

                    const resultX =  deleteProduct(idCorrelative);
                    
                    dispatch({
                        type: 'deleteProduct',
                        payload: idCorrelative,
                    });

                    Swal.fire({
                        title: 'Product deleted!',
                        text: 'The product has been deleted successfully!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                    });

                } catch (error) {

                    if (error.response?.status == 401) {
                        handlerLogout();
                    }

                }

        
              
            }
        });

    }

    return {
        products,
        getProducts,
        initialProducts,
        initialProductForm,
        handlerAddProduct,
        handlerUpdateProduct,
        handlerRemoveProduct,
    }

}