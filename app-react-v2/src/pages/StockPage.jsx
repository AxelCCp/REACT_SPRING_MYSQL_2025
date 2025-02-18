import { useEffect } from "react"
import { Stocklist } from "../components/Stocklist";
import { useProducts } from "../hooks/useProducts";

export const StockPage = () => {

    const {
        getProducts,
        products
    } = useProducts();

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