
import axios from "axios";
import stockApiInterceptor from "../api_interceptor/stockApiInterceptor";

const BASE_URL = 'http://localhost:8080/prod';

export const findAllProducts = async() => {
    try {
        const response = await stockApiInterceptor.get(BASE_URL);                    
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}


export const createProduct = async ({sku, name, description, brand, price, units, manufactureDate}) => {
    try {
        const response = await stockApiInterceptor.post(BASE_URL,
            
            {

                sku : sku, 
                name : name, 
                description : description, 
                brand : brand, 
                price : price, 
                units : units, 
                manufactureDate : manufactureDate

            });

        return response;
    } catch (error) {
        console.error(error);
    }
    return undefined;
}


export const updateProduct = async ({idCorrelative, sku, name, description, brand, price, units, manufactureDate}) => {

    try {
        return await stockApiInterceptor.put(`${BASE_URL}/${idCorrelative}`, 
    
        {   
            idCorrelative,
            sku, 
            name, 
            description, 
            brand, 
            price, 
            units, 
            manufactureDate
        });
    
    } catch (error) {
        console.error(error);
    }
    return undefined;

}



export const deleteProduct = async (idCorrelative) => {
    try {
        return await stockApiInterceptor.delete(`${BASE_URL}/${idCorrelative}`);
    } catch (error) {
        console.error(error);
    }
    return undefined;
}