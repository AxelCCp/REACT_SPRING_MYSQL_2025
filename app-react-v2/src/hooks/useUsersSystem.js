import { useState } from "react";
import { addUserSystem, userSystemList, updateUserSystem, deleteUserSystem } from "../services/userSystemService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLogin } from "../auth/hooks/useLogin";
import { getUsersSystemSlice, addUserSystemSlice, updateUserSystemSlice, deleteUserSystemSlice, onUserSystemSelectedFormSlice, onCloseFormUserSystemSlice, initialUserSystemForm, initialUserSystemFormErrors } from "../store/slices/userSystem/userSystemSlice";
import { useDispatch, useSelector } from "react-redux";


export const useUsersSystem = () => {

    const navigate = useNavigate();

    const { usersSystem, visibleForm, userSystemSelected } = useSelector(state => state.userSystemSlice);

    const dispatch = useDispatch();

    const [userSystemFormErrors, setUserSystemFormErrors] = useState(initialUserSystemFormErrors);

    const { login, handlerLogout } = useLogin();

    const getUsersSystem = async () => {
        
        try {

            const result = await userSystemList(); 

            //dispatch({type:'loadUsersSystem', payload:result.data});

            dispatch(getUsersSystemSlice(result.data))

        } catch(error) {

            if (error.response?.status == 401) {
                handlerLogout();
            }

        }
    }



    const handlerAddUserSystem = async (userSystem, role_admin, role_user) => {

        if(!login.isAdmin) return;

        let result;

        try {

            const listaRoles = [];

            if(role_admin) {

                const role_1 = 
                    {
                        id: 1,
                        name : "ROLE_ADMIN"
                    }
                listaRoles.push(role_1);
            }

            if(role_user) {
                const role_2 = 
                    {
                        id: 2,
                        name : "ROLE_USER"
                    }
                listaRoles.push(role_2);
            }
        
            console.log('role_admin: ', role_admin);
            console.log('role_user: ', role_user);
            console.log(listaRoles);
                
            result = await addUserSystem(userSystem, listaRoles);  
            
            console.log(result);
            
            //dispatch({type:'addUserSystem', payload:result.data.userSystem}); 

            dispatch(addUserSystemSlice(result.data.userSystem));

            setUserSystemFormErrors(initialUserSystemFormErrors);

            navigate('/user-system/list');

        } catch(error) {

            if (error.response?.status == 401) {
            
                handlerLogout();

            } else if(error.response && error.response.status == 400){
                
                console.log('XXXXXXXXXX: ',error.response.data);
                setUserSystemFormErrors(error.response.data);

                console.log()
             
            } else if (error.response && error.response.status == 500 && error.response.data?.message?.includes('constraint')) {   
                
                //pendiente
                //----------------------------------------
                console.log('yyyyyyyyyyyyy: ',error.response.data);
            
                if(error.response.data?.message?.includes('name')) {    
                    console.log('El name X!')                                                          
                    setUserSystemFormErrors({ username: 'El name X!' });
                }

                if(error.response.data?.message?.includes('lastname')) {   
                    console.log('El lastname X!')                                                                        
                    setUserSystemFormErrors({ email: 'El lastname X!' });
                }
                //----------------------------------------

            } else {

                console.log('zzzzzzzzzzz: ',error.response.data);

                console.error(error);

                throw error;   
            }


        }

        
             
    }


    const handlerUpdateUserSystem = async (userSystem, role_admin, role_user) => {

        if(!login.isAdmin) return;

        let result;

        try {

            const listaRoles = [];

            if(role_admin) {
                const role_1 = 
                    {
                        id: 1,
                        name : "ROLE_ADMIN"
                    }
                listaRoles.push(role_1);
            }

            if(role_user) {
                const role_2 = 
                    {
                        id: 2,
                        name : "ROLE_USER"
                    }
                listaRoles.push(role_2);
            }

            result = await updateUserSystem(userSystem, listaRoles);  
            console.log(result);

            //dispatch({type:'updateUserSystem', payload:result.data.userSystem}); 

            dispatch(updateUserSystemSlice(result.data.userSystem));
            
            handlerCloseForm();

            Swal.fire({
                title: 'User system updated', 
                text: 'The user system was updated successfully!', 
                icon: 'success',
                background: '#212f3d',
                color: '#ccd1d1',
            });

            setUserSystemFormErrors(initialUserSystemFormErrors);

            navigate('/user-system/list');

        } catch (error) {

            if (error.response?.status == 401) {
            
                handlerLogout();

            } else if(error.response && error.response.status == 400){
                
                console.log('XXXXXXXXXX: ',error.response.data);
                setUserSystemFormErrors(error.response.data);

                console.log()
             
            } else if (error.response && error.response.status == 500 && error.response.data?.message?.includes('constraint')) {   
                
                //pendiente
                //----------------------------------------
                console.log('yyyyyyyyyyyyy: ',error.response.data);
            
                if(error.response.data?.message?.includes('name')) {    
                    console.log('El name X!')                                                          
                    setUserSystemFormErrors({ username: 'El name X!' });
                }

                if(error.response.data?.message?.includes('lastname')) {   
                    console.log('El lastname X!')                                                                        
                    setUserSystemFormErrors({ email: 'El lastname X!' });
                }
                //----------------------------------------

            } else {

                console.log('zzzzzzzzzzz: ',error.response.data);

                console.error(error);

                throw error;   
            }

        }
        
    }

      
    const handlerUserSystemSelectedForm = (userSystem) => {

        dispatch(onUserSystemSelectedFormSlice({ ...userSystem }))
        
    }

    const handlerCloseForm = () => {
        //setVisibleForm(false);
        //setUserSystemSelected(initialUserSystemForm);

        dispatch(onCloseFormUserSystemSlice());
    }


    const handlerDeleteUserSystem = (idUser) => {


        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "Be careful, the user system will be deleted!",
            icon: 'warning',
            background: '#212f3d',
            color: '#ccd1d1',
            showCancelButton: true,
            confirmButtonColor: '#d33', 
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete!'
        }).then((result) => {
            
            try {

                if (result.isConfirmed) {

                    const resp = deleteUserSystem(idUser);

                    console.log('handlerDeleteUserSystem - resp: ', resp);

                    dispatch(deleteUserSystemSlice(idUser));

                    Swal.fire({
                        title: 'User system deleted!',
                        text: 'The user system has been deleted successfully!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        background: '#212f3d',
                        color: '#ccd1d1',
                    })
                }

            } catch (error) {

                if (error.response?.status == 401) {
                    handlerLogout();
                }

            }
            
        });





        


    }
    

    return {
        usersSystem,
        getUsersSystem,
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

}