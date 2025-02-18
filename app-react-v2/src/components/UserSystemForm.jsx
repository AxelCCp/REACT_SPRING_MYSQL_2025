import { useEffect, useState } from "react";

import { useRef } from "react"
import { useUsersSystem } from "../hooks/useUsersSystem";

export const UserSystemForm = ({userSystemSelected}) => {

    const { initialUserSystemForm, handlerAddUserSystem, handlerUpdateUserSystem, userSystemFormErrors, setUserSystemFormErrors, initialUserSystemFormErrors} = useUsersSystem();
    
    const [userSystemForm, setUserSystemForm] = useState(initialUserSystemForm);  

    const {idUser, name, lastname, position, area, email, roleAdmin, roleUser, password, passwordRepeat} = userSystemForm;

    const checkboxRef_admin = useRef(null);

    const checkboxRef_user = useRef(null)

    const [passwordRepeatError, setpasswordRepeatError] = useState('');


    useEffect(() => {

        if(userSystemSelected != undefined) {

            setUserSystemFormErrors(initialUserSystemFormErrors);

            console.log('userSystemSelected: ', userSystemSelected);

            const {idUser, name, lastname, position, area, email, roles} = userSystemSelected;
    
            roles.forEach( elem => {
                if(elem.id === 1) {
                    checkboxRef_admin.current.checked=true;
                }
                if(elem.id === 2) {
                    checkboxRef_user.current.checked=true;
                }
            });
    
            setUserSystemForm({
                ...userSystemSelected,
                //password: '',
            });

        }
       
    }, [userSystemSelected]);


    useEffect(() => {
        setpasswordRepeatError('');
    }, [userSystemFormErrors]);


    const onSubmit = (event) => {

        event.preventDefault();   

        if(idUser > 0) {
        
            handlerUpdateUserSystem(userSystemForm, checkboxRef_admin.current.checked, checkboxRef_user.current.checked);
        
        } else {

            if(passwordRepeat == '' || passwordRepeat == null) {

                setpasswordRepeatError('Please confirm your password!');

            } else if(password != passwordRepeat) {
               
                setpasswordRepeatError('The passwords fields does not match!');

            } else {
                
                handlerAddUserSystem(userSystemForm, checkboxRef_admin.current.checked, checkboxRef_user.current.checked);
                
                setUserSystemForm(initialUserSystemForm);
            }

        }
        
    }


    const onInputChange = ({target}) => {
        
        const {name, value} = target;

        console.log('name: ', name )
        console.log('value: ', value)

        setUserSystemForm({
            ...userSystemForm,
            [name]: value,
        })
    }

    return (

        <>

            <div  style={{position:"relative", zIndex: '1'}}>

            {

                (idUser === undefined) ?

                <div className="bg-dark rounded">
                    <h3 className="text-secondary lh-base">User system form</h3>
                </div>

                : ''

            }


            <div className="border rounded border-0 " style={{backgroundColor:'rgba(20, 20, 20, 0.90)'}}>
            
            <div className="" style={{width:  '69%' , margin: '0 auto'}}>


            <form onSubmit={onSubmit}  className="mt-4 ">

            
                <div className="row my-3 pt-5 ms-2">
                    <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                        <label htmlFor="">Name:</label>
                    </div>
                    <div className="col-sm-9">
                        <input className="form-control my-3 bg-secondary text-light border-secondary" placeholder="name" name="name" value={name} onChange={ onInputChange }/>
                        <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.name}</p> 
                    </div>
                </div>
                
                


                <div className="row my-3 ms-2">
                    <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                        <label htmlFor="">Lastname:</label>
                    </div>
                    <div className="col-sm-9">
                        <input className="form-control my-3 bg-secondary text-light border-secondary" placeholder="lastname" name="lastname" value={lastname} onChange={ onInputChange }/>
                        <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.lastname}</p>  
                    </div>
                </div>

                


                <div className="row my-3 ms-2">
                    <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                        <label htmlFor="">Position:</label>
                    </div>
                    <div className="col-sm-9">
                        <input className="form-control my-3 bg-secondary text-light border-secondary" placeholder="position" name="position" value={position} onChange={ onInputChange }/>
                        <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.position}</p>   
                    </div>
                </div>
                
                


                <div className="row my-3 ms-2">
                    <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                        <label htmlFor="">Area:</label>
                    </div>
                    <div className="col-sm-9">
                        <input className="form-control my-3 bg-secondary text-light border-secondary" placeholder="area" name="area" value={area} onChange={ onInputChange }/>
                        <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.area}</p>  
                    </div>
                </div>
                
                
                 


                <div className="row my-3 ms-2">
                    <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                        <label htmlFor="">Email:</label>
                    </div>
                    <div className="col-sm-9">
                        <input className="form-control my-3 bg-secondary text-light border-secondary" placeholder="email" name="email" value={email} onChange={ onInputChange }/>
                        <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.email}</p>   
                    </div>
                </div>
               
               
                



                <div className="row text-danger text-start my-5">

                    <div className="col-sm-5">

                        <p className="ms-2 pt-2">Select roles for the user system:</p>

                    </div>


                    <div className="col-sm-7">
                    
                    
                        <div className="form-check py-3">

                            <div className="row">

                                <div className="col-1">
                                    <input className="form-check-input ms-3 border-primary" name="roleAdmin" type="checkbox" id="checkAdmin" value={roleAdmin} onChange={ onInputChange } ref={checkboxRef_admin} />
                                </div>

                                <div className="col-9">
                                    <label className="form-check-label ms-5" htmlFor="checkAdmin">Admin role</label>
                                </div>

                            </div>
                            
                            <br/>

                            <div className="row">

                                <div className="col-1">
                                    <input className="form-check-input ms-3 border-primary" name="roleUser" type="checkbox" id="checkUser" value={roleUser} onChange={ onInputChange } ref={checkboxRef_user}/>
                                </div>
                            
                                <div className="col-9">
                                    <label className="form-check-label ms-5" htmlFor="checkUser">User role</label>
                                </div>

                            </div>

                        </div>


                    </div>
                

                </div>

                { idUser != undefined || 

                    <>


                        <div className="row my-1 ms-2">
                            <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                                <label htmlFor="">Set password:</label>
                            </div>
                            <div className="col-sm-9">
                                <input className="form-control my-3 w-50  bg-secondary text-light border-secondary" type="password" placeholder="password" name="password" value={password} onChange={ onInputChange }/>
                                <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.password}</p>
                            </div>
                         </div>

                          

                    
                        <div className="row my-3 ms-2">
                            <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                                <label htmlFor="">Confirm password:</label>
                            </div>
                            <div className="col-sm-9">   
                                <input className="form-control my-3 w-50  bg-secondary text-light border-secondary" type="password" placeholder="confirm password" name="passwordRepeat" value={passwordRepeat} onChange={ onInputChange }/>
                                <p className="text-danger divColorError rounded text-start ps-3">{passwordRepeatError}</p>   
                            </div>
                         </div>

                        
                        
                        </>

                }

                <input className="form-control"  name="idUser" value={idUser} type="hidden"/>


                <div className="text-end mt-4 pb-5">
                    <button className="btn btn-secondary rounded-pill opacity-75" type="submit" onChange={ onInputChange }>{idUser > 0 ? 'Update' : 'Create'}</button>
                </div>


            </form>

            </div>

            </div>

            </div>

        
        </>
    );
}