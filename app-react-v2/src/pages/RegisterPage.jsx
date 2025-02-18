import { useParams } from "react-router-dom";
import { StockForm } from "../components/StockForm"
import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";


export const RegisterPage = () => {

    const { products = [], initialProductForm } = useProducts();

    const [productSelected, setProductSelected] = useState(initialProductForm);

    const { idCorrelative } = useParams();

    useEffect(() => {
        console.log(idCorrelative);
        if (idCorrelative) {
            const product = products.find(p => p.idCorrelative == idCorrelative) || initialProductForm;
            setProductSelected(product);
        }
    }, [idCorrelative])

    return(

        <>
        
            <StockForm productSelected={productSelected}/>

        </>

    )

}