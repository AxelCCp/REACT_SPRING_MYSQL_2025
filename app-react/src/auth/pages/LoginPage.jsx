import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import Swal from "sweetalert2";


const initialLoginForm = {
    username: '',
    password: '',
}

export const LoginPage = () => {


    const { handlerLogin } = useContext(LoginContext);
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        })
    }


    const onSubmit = (event) => {
        
        event.preventDefault();
        
        if (!username || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }

        // aca implementamos el login
        handlerLogin({username, password});
        
        setLoginForm(initialLoginForm);
    }


    return(

        <>
        

           
        <div className="container">
                
                <div className="d-flex justify-content-center my-5">
                    
                    <div className="card">
                        
                        <div className="card-header mt-2">
                            
                            <h3 className="text-secondary">Login</h3>
                            
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-google-plus-square"></i></span>
                            </div>
                        </div>

                        <div className="card-body mx-5 mt-5">
                            
                            <form className="mx-4" onSubmit={ onSubmit }>
                                <div className="input-group form-group mt-3">
                                    
                                    <div className="input-group-prepend">
                                        <span className="input-group-text rounded-circle">
                                            <i className="fas fa-user align-content-center ms-1" style={{height:'30px'}}></i>
                                        </span>
                                    </div>
                                    
                                    <input type="text" className="form-control ms-3" placeholder="username"  name="username" value={username} onChange={ onInputChange }/>
                                    
                                </div>

                                <div className="input-group form-group mt-3">
                                    
                                    <div className="input-group-prepend">
                                        <span className="input-group-text rounded-circle">
                                            <i className="fas fa-key align-content-center ms-1" style={{height:'30px'}}></i>
                                        </span>
                                    </div>
                                    
                                    <input type="password" className="form-control ms-3" placeholder="password" name="password" value={password} onChange={onInputChange}/>
                                
                                </div>
                                
                                <div className="row align-items-center remember mt-4 text-secondary">
                                    <input className="form-check-input" type="checkbox"/>Remember Me
                                </div>

                                <div className="form-group mt-5">
                                    <input type="submit" value="Sign in" className="float-right btn btn-primary rounded-pill btn-lg opacity-75"/>
                                </div>

                            </form>
                        </div>


                        <div className="card-footer">
                            <div className="d-flex justify-content-center links text-secondary">
                                Don't have an account?<a href="#">Contact with us</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        
        </>
    
    )
}