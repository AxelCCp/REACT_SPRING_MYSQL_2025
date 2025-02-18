import { NavLink } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import { useLogin } from "../../auth/hooks/useLogin";

export const Navbar = () => {

    //const { login, handlerLogout } = useContext(LoginContext);

    const { login, handlerLogout } = useLogin();

    console.log('Navbar - login: ', login.nickName)

    return (

        <>

        <nav className="navbar navbar-expand-lg rounded" style={{zIndex: '10', backgroundColor:'rgba(200, 200, 200, 0.65)'}}>
  
            <div className="container-fluid">
                <NavLink className="nav-link mt-2" to="/stock">
                    <img src="../src/images/react_original_wordmark_logo_icon_146375.ico"  className="me-3" style={{width:'50px', height:'50px'}} />
                    <img src="../src/images/redux.ico"  className="me-3" style={{width:'50px', height:'50px'}} />
                    <img src="../src/images/boot_spring_logo_icon_214693.ico" className="me-3" style={{width:'50px', height:'50px'}}/>
                    <img src="../src/images/mysql_plain_wordmark_logo_icon_146415.ico" className="me-3" style={{width:'50px', height:'50px'}} />
                </NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                
                    <ul className="navbar-nav mt-2">

                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/stock">
                                <p className="h5 text-dark">Stock list</p>
                            </NavLink>
                        </li>

                        { !login.isAdmin ||
                        
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/stock/register">
                                <p className="h5 text-dark">Register stock</p>
                            </NavLink>
                        </li>

                        }
                        
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/user-system/list">
                                <p className="h5 text-dark">User system list</p>
                            </NavLink>
                        </li>

                        { !login.isAdmin ||

                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/user-system/form">
                                <p className="h5 text-dark">Create user</p>
                            </NavLink>
                        </li>

                        }

                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/images">
                                <p className="h5 text-dark">Images</p>
                            </NavLink>
                        </li>


                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/videos">
                                <p className="h5 text-dark">Videos</p>
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>


            {
                        
               // (usernameLogued === '')  ?
               (login.nickName === undefined || login.nickName === '')  ?
                    <div className="mx-2">
                        <button className="btn btn-dark rounded-pill btn-lg">
                            <NavLink className="nav-link" to="/login" style={{width:'108px'}}>
                                <img src="../src/images/login.ico"  className="me-3" style={{width:'35px', height:'35px'}} />
                                Login
                            </NavLink>
                        </button>
                    </div>

                : ''
                        
            }
    




            {

                //(usernameLogued != '') ?    ----- {'Hi ' + usernameLogued + '!'}
                (login.nickName != undefined && login.nickName != '')  ?

                <div>

                <Dropdown className="mx-2 ">

                    <Dropdown.Toggle variant="dark rounded-pill btn-lg" id="dropdown-basic">
                        <img src="../src/images/pngfind.com-skeletor-png-792083.png"  className="me-3" style={{width:'30px', height:'30px'}} />
                        
                        {login.nickName}

                    </Dropdown.Toggle>
          
                    <Dropdown.Menu className="bg-light mr-2 my-3" >
                        
                        <Dropdown.Item className="my-1" href="#/action-1">
                            <img src="../src/images/pngfind.com-skeletor-png-792083.png"  className="me-3" style={{width:'35px', height:'35px'}} />
                            {login.nickName}
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        
                        <Dropdown.Item className="my-1 dropdownItem" href="#/action-2">
                            <img src="../src/images/config.ico"  className="ml-1" style={{width:'25px', height:'25px'}} />
                            <NavLink className="btn btn-link rounded-pill text-dark" to={'/account'} style={{textDecoration:'none'}}>Manage your acccount</NavLink>
                        </Dropdown.Item>
                        
                        <Dropdown.Item className="my-1 dropdownItem" href="#/action-3">
                            <img src="../src/images/cloud.ico"  className="ml-1" style={{width:'25px', height:'25px'}} /> 
                            <NavLink className="btn btn-link rounded-pill text-dark" style={{textDecoration:'none'}}>Something else</NavLink> 
                        </Dropdown.Item>
                        
                        <Dropdown.Item className="my-1 dropdownItem" href="#/action-4">
                            <img src="../src/images/moon.ico"  className="ml-1" style={{width:'25px', height:'25px'}} /> 
                            <NavLink className="btn btn-link rounded-pill text-dark" style={{textDecoration:'none'}}>Dark theme</NavLink>
                        </Dropdown.Item>
                        
                        <Dropdown.Item className="my-1 dropdownItem" href="#/action-5">
                            <img src="../src/images/help.ico"  className="ml-1" style={{width:'25px', height:'25px'}} /> 
                            <NavLink className="btn btn-link rounded-pill text-dark" style={{textDecoration:'none'}}>Help</NavLink>
                        </Dropdown.Item>
                        
                        <Dropdown.Divider />
                        
                        <Dropdown.Item className="my-1 dropdownItem" href="#/action-6">
                            <img src="../src/images/logout.ico"  className="ml-1" style={{width:'25px', height:'25px'}} />
                            <NavLink className="btn btn-link rounded-pill text-dark" style={{textDecoration:'none'}} onClick={handlerLogout}>Sign out</NavLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                </div>
                
                : ''

            }

        </nav>

            <div className=" w-50">
                <div className="bg-danger rounded w-50 opacity-50 text-white">
                    My full stack app demo 2025 - with Redux!
                </div>
                
            </div>

        </>


    )
}