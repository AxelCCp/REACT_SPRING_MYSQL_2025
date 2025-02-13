import { useLogin } from "../hooks/useLogin";
import { LoginContext } from "./LoginContext";

export const LoginProvider = ({children}) => {

    const{

        login,
        handlerLogin,
        handlerLogout,
        usernameLogued,
    } = useLogin();
        
    return(


        <LoginContext.Provider value={

            {
                login,
                handlerLogin,
                handlerLogout,
                usernameLogued,
            }

        }> {children} </LoginContext.Provider>

    )

}