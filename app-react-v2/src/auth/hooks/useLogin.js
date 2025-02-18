import Swal from "sweetalert2";
import { loginUser } from "../service/loginService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogOut, onLogin } from "../../store/slices/auth/authSlice";


export const useLogin = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { user, isAdmin, isAuth, nickName} = useSelector(state => state.auth); 


    const handlerLogin = async ({username, password}) => {

        try {

            const response = await loginUser({ username, password });

            const token = response.data.token;

            const claims = JSON.parse(window.atob(token.split(".")[1]));                           
            
            console.log('claims: ', claims);

            const user = { username : claims.username } 


            dispatch(onLogin( {user, isAdmin: claims.isAdmin, nickName: user.username} ));
            
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                nickName: user.username,
                user,
            }));

            sessionStorage.setItem('token', `Bearer ${token}`);                                     

            navigate('/');

        } catch (error) {

            if(error.response?.status == 401){
                Swal.fire('Error Login', 'Username o password invalidos', 'error');
            } else if (error.response?.status == 403) {
                Swal.fire('Error Login', 'No tiene acceso al recurso!', 'error');
            } else {
                throw error;
            }

        }

    } 



    const handlerLogout = () => {
        console.log('handlerLogout 1')

        dispatch(onLogOut());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
        console.log('handlerLogout 2')

    }


    return {
        login : {user, isAdmin, isAuth, nickName},
        handlerLogin,
        handlerLogout,
    }
}