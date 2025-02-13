import { useContext, useEffect, useState } from "react";
import { UserSystemContext } from "../context/UserSystemContext";
import { useRef } from "react"

export const UserSystemForm = ({userSystemSelected}) => {

    const { initialUserSystemForm, handlerAddUserSystem, handlerUpdateUserSystem, userSystemFormErrors, setUserSystemFormErrors, initialUserSystemFormErrors} = useContext(UserSystemContext);
    
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

                <div className="bg-light rounded">
                    <h3 className="text-primary lh-base">User system form</h3>
                </div>

                : ''

            }

            

            <form onSubmit={onSubmit}  style={{width:'850px'}}>

                <input className="form-control my-3" placeholder="name" name="name" value={name} onChange={ onInputChange }/>
                <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.name}</p>   

                <input className="form-control my-3" placeholder="lastname" name="lastname" value={lastname} onChange={ onInputChange }/>
                <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.lastname}</p>   

                <input className="form-control my-3" placeholder="position" name="position" value={position} onChange={ onInputChange }/>
                <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.position}</p>   

                <input className="form-control my-3" placeholder="area" name="area" value={area} onChange={ onInputChange }/>
                <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.area}</p>   

                <input className="form-control my-3" placeholder="email" name="email" value={email} onChange={ onInputChange }/>
                <p className="text-danger divColorError rounded text-start ps-3">{userSystemFormErrors?.email}</p>   

                <div className="bg-light rounded text-start my-3 w-50">

                    <p className="ms-2 pt-2">Select roles for de user system:</p>
                    
                    <div className="form-check form-switch py-3">

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

                { idUser != undefined || 

                    <div className="bg-light rounded text-start my-3 w-75">

                        <div className="pt-2">
                            <p className="ms-2">Create a password</p>
                            <input className="form-control my-3 ms-5 w-75" type="password" placeholder="password" name="password" value={password} onChange={ onInputChange }/>
                        </div>

                        <p className="text-danger divColorError text-start ps-3">{userSystemFormErrors?.password}</p>   

                        <div className="pb-2">
                            <p className="ms-2">Repeat password</p>
                            <input className="form-control my-3 ms-5 w-75" type="password" placeholder="confirm password" name="passwordRepeat" value={passwordRepeat} onChange={ onInputChange }/>
                        </div>

                        <p className="text-danger divColorError rounded-bottom text-start ps-3">{passwordRepeatError}</p>   
                        
                    </div>

                }

                <input className="form-control"  name="idUser" value={idUser} type="hidden"/>


                <div className="text-start mt-4">
                    <button className="btn btn-primary rounded-pill opacity-75" type="submit" onChange={ onInputChange }>{idUser > 0 ? 'Update' : 'Create'}</button>
                </div>


            </form>

            </div>

        
        </>
    );
}