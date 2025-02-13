import { useContext, useEffect } from "react";
import { UserSystemList } from "../components/UserSystemList";
import { UserSystemContext } from "../context/UserSystemContext";
import { UserSystemModalForm } from "../components/UserSystemModalForm";

export const UserSystemPage = () => {

    const {
        getUsersSystem,
        usersSystem,
        visibleForm
    } = useContext(UserSystemContext)

    useEffect(() => {
        getUsersSystem();
        console.log('visibleForm... ', visibleForm)
    }, []);

    

    return (

        <>

            {
                !visibleForm || <UserSystemModalForm />
            }

            {
                usersSystem.length === 0 ? <div className="alert alert-warning">The users system list is empty!</div> : <UserSystemList/>
            }
        
        </>

    );


}