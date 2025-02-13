import { useUsersSystem } from "../hooks/useUsersSystem"
import { UserSystemContext } from "./UserSystemContext"

export const UserSystemProvider = ({children}) => {

    const {
        getUsersSystem,
        usersSystem,
        initialUserSystemForm,
        handlerAddUserSystem,
        handlerUserSystemSelectedForm,
        visibleForm,
        handlerCloseForm,
        userSystemSelected,
        handlerUpdateUserSystem,
        handlerDeleteUserSystem,
        userSystemFormErrors,
        setUserSystemFormErrors,
        initialUserSystemFormErrors
    } = useUsersSystem();
    
    return(

        <UserSystemContext.Provider value={ 
            
            { 
                getUsersSystem,
                usersSystem,
                initialUserSystemForm,
                handlerAddUserSystem,
                handlerUserSystemSelectedForm,
                visibleForm,
                handlerCloseForm,
                userSystemSelected,
                handlerUpdateUserSystem,
                handlerDeleteUserSystem,
                userSystemFormErrors,
                setUserSystemFormErrors,
                initialUserSystemFormErrors
            }
        
        }> {children} </UserSystemContext.Provider>

    )

}