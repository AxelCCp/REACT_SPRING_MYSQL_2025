import { useContext, useReducer } from "react";
import { createProduct, deleteProduct, findAllProducts, updateProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLogin } from "../auth/hooks/useLogin";
import { useDispatch, useSelector } from "react-redux";
import { addProductSlice, getProductsSlice, removeProductSlice, updateProductSlice, initialProductForm } from "../store/slices/stock/stockSlice";


export const useProducts = () => {

    const navigate = useNavigate();

    const { products } = useSelector(state => state.stock);

    const dispatch = useDispatch(); 

    const { login, handlerLogout } = useLogin();


    const getProducts = async () => {
        
        try {

            const result = await findAllProducts();

            dispatch(getProductsSlice(result.data)); 
        
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

            dispatch(addProductSlice(result.data));
    
            Swal.fire({
                title: 'Product created', 
                text: 'The product was created successfully!', 
                icon: 'success',
                background: '#212f3d',
                color: '#ccd1d1',
            });
            
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

            dispatch(updateProductSlice(result.data));
    
            Swal.fire({
                title: 'Product updated', 
                text: 'The product was updated successfully!', 
                icon: 'success',
                background: '#212f3d',
                color: '#ccd1d1',
            });
    
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
            background: '#212f3d',
            color: '#ccd1d1',
            showCancelButton: true,
            confirmButtonColor: '#d33', 
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete!'
        }).then((result) => {
            
            if (result.isConfirmed) {


                try {

                    const resultX =  deleteProduct(idCorrelative);
                    
                    dispatch(removeProductSlice(idCorrelative));

                    Swal.fire({
                        title: 'Product deleted!',
                        text: 'The product has been deleted successfully!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        background: '#212f3d',
                        color: '#ccd1d1',
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
        //initialProducts,
        initialProductForm,
        handlerAddProduct,
        handlerUpdateProduct,
        handlerRemoveProduct,
    }

}