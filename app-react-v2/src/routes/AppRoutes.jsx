import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layouts/Navbar"
import { Footer } from "../components/layouts/Footer"
import { StockPage } from "../pages/StockPage"
import { RegisterPage } from "../pages/RegisterPage"
import { UserSystemPage } from "../pages/UserSystemPage"
import { FormUserSystemPage } from "../pages/FormUserSystemPage"
import { LoginPage } from "../auth/pages/LoginPage"
import { ImagesPage } from "../pages/ImagesPage"
import { VideosPage } from "../pages/VideosPage"
import { CardsPlacesPage } from "../pages/CardsPlacesPage"
import { AccountPage } from "../pages/AccountPage"
import { StockRoutes } from "./StockRoutes"


export const AppRoutes = () => {

    return(
        <>

                <div className="vw-100" style={{position:'relative', alignItems: 'center'}}>

                  <div className="mb-5" style={{width:'90%', margin:'0 auto'}}>
                          <Navbar/>
                  </div>

                  <div  className="border rounded border-0" style={{margin:'0 auto', backgroundColor:'rgba(400, 400, 400, 0.45)', width:'90%'}} >


                    <div className="px-5 pt-5"> 
                      
                        <Routes>

                          <Route path="/*" element={<StockRoutes />} />
                          
                          <Route path="/" element={<Navigate to="/stock"/>} />

   
                          { /* <Route path="stock" element={<StockPage />} />
                          <Route path="stock/register" element={<RegisterPage/>} />
                          <Route path="stock/register/:idCorrelative" element={<RegisterPage/>} /> */}

                           
                          <Route path="user-system/list" element={<UserSystemPage/>} />
                          <Route path="user-system/form" element={<FormUserSystemPage/>} />
                        
                
                          <Route path="/images" element={<ImagesPage/>}/>
                          <Route path="/cards-places" element={<CardsPlacesPage/>}/>
                          <Route path="/videos" element={<VideosPage/>}/>
                     

                          <Route path="/login" element={<LoginPage/>}/>

                          <Route path="account" element={<AccountPage/>} />

                      </Routes>
                    

                    <Footer/>

                    <br/>

                    </div>

                  </div>

                </div>

                
        
        </>
    )
}
