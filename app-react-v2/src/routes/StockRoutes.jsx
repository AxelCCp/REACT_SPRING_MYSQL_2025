import { Route, Routes } from "react-router-dom"
import { StockPage } from "../pages/StockPage"
import { RegisterPage } from "../pages/RegisterPage"


export const StockRoutes = () => {



    return(

        <>

            <Routes> 
            
                <Route path="stock" element={<StockPage />} />

                <Route path="stock/register" element={<RegisterPage/>} />

                <Route path="stock/register/:idCorrelative" element={<RegisterPage/>} />

            </Routes>

        </>
    )

}