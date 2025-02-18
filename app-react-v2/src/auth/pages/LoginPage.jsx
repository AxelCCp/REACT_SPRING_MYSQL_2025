import { useContext, useState } from "react";

import Swal from "sweetalert2";
import { useLogin } from "../hooks/useLogin";


const initialLoginForm = {
    username: '',
    password: '',
}

export const LoginPage = () => {


    //const { handlerLogin } = useContext(LoginContext);
    const { handlerLogin } = useLogin();
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
            Swal.fire('Error de validacion', 'Username y password are required', 'error');
        }

        // aca implementamos el login
        handlerLogin({username, password});
        
        setLoginForm(initialLoginForm);
    }


    return(

        <>
        

            <div className="d-flex justify-content-center mb-5 border rounded border-0" style={{backgroundColor:'rgba(30, 30, 30, 0.60)'}}>


                <form onSubmit={ onSubmit } className="pt-5 pb-4 px-5 my-5 mx-5 border rounded border-0" style={{backgroundColor:'rgba(30, 30, 30, 0.80)'}}>

                    <h3 className="text-secondary">Login</h3>

                    <hr className="text-light"/>
                    
                    <div className="form-group mt-4">
                        
                        <label htmlFor="exampleInputEmail1" className="text-light mb-2">Username</label>
                        
                        <input type="text" className="form-control bg-secondary border-0 rounded-pill text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username"  name="username" value={username} onChange={ onInputChange }/>
                    
                    </div>
                    
                    <div className="form-group pt-2">

                        <label htmlFor="exampleInputPassword1" className="text-light mb-2">Password</label>

                        <input type="password" className="form-control bg-secondary border-0 rounded-pill text-light" id="exampleInputPassword1" placeholder="Enter your password" name="password" value={password} onChange={onInputChange}/>

                    </div>
                    
                    <div className="form-group form-check mt-5">

                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>

                        <label className="form-check-label text-light" htmlFor="exampleCheck1">Remember me</label>

                    </div>
                    
                    <button type="submit" className="btn btn-secondary mt-5 rounded-pill">Sign in</button>

                    <hr className="text-light mt-4"/>

                    <div className="mt-4">

                    <div className="d-flex justify-content-center links text-secondary">
                                Don't have an account?<a href="#">Contact with us</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>

                    </div>
                
                </form>

            </div>



        
        </>
    
    )
}