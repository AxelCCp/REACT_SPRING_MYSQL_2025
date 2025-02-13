import { useContext, useEffect } from "react"

import { Stocklist } from "../components/Stocklist";
import { ProductContext } from "../context/ProductContext";


export const StockPage = () => {

    const {
        getProducts,
        products
    } = useContext(ProductContext)

    useEffect(() => {
        getProducts();
    }, []);

    return (

        <>
        
            {
                products.length === 0 ? <div className="alert alert-warning">The stock list is empty!</div> : <Stocklist/>
            }

        </>

    )

}