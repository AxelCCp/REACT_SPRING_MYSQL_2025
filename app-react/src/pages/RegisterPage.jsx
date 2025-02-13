import { useParams } from "react-router-dom";
import { StockForm } from "../components/StockForm"
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect, useState } from "react";


export const RegisterPage = () => {

    const { products = [], initialProductForm } = useContext(ProductContext);

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