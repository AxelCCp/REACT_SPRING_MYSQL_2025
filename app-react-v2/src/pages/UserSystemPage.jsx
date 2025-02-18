import { useEffect } from "react";
import { UserSystemList } from "../components/UserSystemList";
import { UserSystemModalForm } from "../components/UserSystemModalForm";
import { useUsersSystem } from "../hooks/useUsersSystem";

export const UserSystemPage = () => {

    const {
        getUsersSystem,
        usersSystem,
        visibleForm
    } = useUsersSystem();

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