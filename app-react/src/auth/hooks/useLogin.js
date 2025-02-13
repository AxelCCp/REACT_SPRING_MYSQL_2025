import Swal from "sweetalert2";
import { loginUser } from "../service/loginService";
import { useNavigate } from "react-router-dom";
import { loginReducer } from "../reducers/loginReducer";
import { useReducer, useState } from "react";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
}

let usernameLogued = '';

export const useLogin = () => {

    const navigate = useNavigate();

    const [login, dispatch] = useReducer(loginReducer, initialLogin);


    const handlerLogin = async ({username, password}) => {

        //DEVELOPMENT STAGE----------------------------------------
        //const isLogin = loginUser({ username, password });
        //---------------------------------------------------------

        const response = await loginUser({ username, password });

        const token = response.data.token;

        const claims = JSON.parse(window.atob(token.split(".")[1]));                           
        
        console.log('claims: ', claims);

        const user = { username : claims.username } 

        usernameLogued = user.username;

        dispatch({
            type: 'login',
            payload: {user, isAdmin: claims.isAdmin, nickName: user.username},                                       
        });
        
        sessionStorage.setItem('login', JSON.stringify({
            isAuth: true,
            isAdmin: claims.isAdmin,
            nickName: user.username,
            user,
        }));


        sessionStorage.setItem('token', `Bearer ${token}`);                                     

        navigate('/');


        //DEVELOPMENT STAGE----------------------------------------
        /*
        if (isLogin) {
            
            const user = { username: 'admin' }
            
            dispatch({
                type: 'login',
                payload: user,
            });

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user,
            }));


            usernameLogued = user.username;

            console.log('usernameLogued: ', usernameLogued);

            navigate('/');

        } else {
            Swal.fire('Error Login', 'Username o password invalidos', 'error');
        }*/
        //---------------------------------------------------------

    } 



    const handlerLogout = () => {

        dispatch({
            type: 'logout',
        });

        usernameLogued = '';

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();

    }


    return {
        login,
        handlerLogin,
        handlerLogout,
        usernameLogued,
    }
}