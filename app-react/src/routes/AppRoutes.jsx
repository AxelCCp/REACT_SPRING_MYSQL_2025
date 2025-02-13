import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layouts/Navbar"
import { Footer } from "../components/layouts/Footer"
import { ProductProvider } from "../context/ProductProvider"
import { StockPage } from "../pages/StockPage"
import { RegisterPage } from "../pages/RegisterPage"
import { UserSystemProvider } from "../context/UserSystemProvider"
import { UserSystemPage } from "../pages/UserSystemPage"
import { FormUserSystemPage } from "../pages/FormUserSystemPage"
import { LoginPage } from "../auth/pages/LoginPage"
import { LoginProvider } from "../auth/context/LoginProvider"
import { ImagesPage } from "../pages/ImagesPage"
import { VideosPage } from "../pages/VideosPage"
import { CardsPlacesPage } from "../pages/CardsPlacesPage"
import { AccountPage } from "../pages/AccountPage"


export const AppRoutes = () => {

    return(
        <>

                <div className="vw-100" style={{position:'relative', alignItems: 'center'}}>

                  <div className="w-75" style={{margin:'0 auto'}}>

                    
                      <div className="mb-5">
                          <Navbar/>
                      </div>
                    

                    
                      <ProductProvider>
                        <Routes>
                            <Route path="stock" element={<StockPage />} />
                            <Route path="/" element={<Navigate to="/stock"/>} />
                            <Route path="stock/register" element={<RegisterPage/>} />
                            <Route path="stock/register/:idCorrelative" element={<RegisterPage/>} />
                        </Routes>
                      </ProductProvider>
                    

                    
                      <UserSystemProvider>
                        <Routes>
                          <Route path="user-system/list" element={<UserSystemPage/>} />
                          <Route path="user-system/form" element={<FormUserSystemPage/>} />
                        </Routes>
                      </UserSystemProvider>


                      <Routes>
                        <Route path="/images" element={<ImagesPage/>}/>
                        <Route path="/cards-places" element={<CardsPlacesPage/>}/>
                        <Route path="/videos" element={<VideosPage/>}/>
                      </Routes>
                    

                    
                      <Routes>
                        <Route path="/login" element={<LoginPage/>}/>

                        <Route path="account" element={<AccountPage/>} />
                      </Routes>
                    

                    <Footer/>

                  </div>

                </div>

                
        
        </>
    )
}