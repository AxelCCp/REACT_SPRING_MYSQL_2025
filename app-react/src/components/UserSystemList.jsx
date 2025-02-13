import { useContext } from "react";
import { UserSystemContext } from "../context/UserSystemContext";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../auth/context/LoginContext";


export const UserSystemList = () => {

    const { usersSystem, handlerUserSystemSelectedForm, handlerDeleteUserSystem } = useContext(UserSystemContext);

    const { login } = useContext(LoginContext);

    return (

        < >
        
            <div className="bg-light rounded" style={{zIndex: '-1'}}>
                <h3 className="text-primary lh-base">System users list</h3>
            </div>

            <table className="table table-light mt-3 opacity-75 w-100" style={{zIndex: '-1'}}>

                <thead>
                    <tr className="align-middle">
                        <th className="bg-primary opacity-75 border-0">Id</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Position</th>
                        <th>Area</th>
                        <th>Email</th>
                        <th>Roles</th>

                        {
                            !login.isAdmin || 
                        
                        <>
                            <th>Update</th>
                            <th>Delete</th>
                        </>

                        }
                    </tr>
                </thead>

                <tbody className="align-middle">
                
                {
                    usersSystem.map(({idUser, name, lastname, position, area, email, roles}) => { 
                        
                        let contador = 0;
                        
                        return (

                        <tr className="text-start" key={idUser}>
                            <td className="bg-primary opacity-50 border-0">{idUser}</td>
                            <td>{name}</td>
                            <td>{lastname}</td>
                            <td>{position}</td>
                            <td>{area}</td>
                            <td>{email}</td>
                            <td>{
                                roles.map( ({id, name}) =>  {
                                    contador++;
                                    let nametable = '';
                                    if(name === 'ROLE_ADMIN') nametable = 'admin';
                                    if(name === 'ROLE_USER') nametable = 'user';
                                    return (<p style={{lineHeight:'20px', marginBottom:'0px', color: '#5dade2'}} key={contador}>{id} {nametable}</p>)
                                  })
                                }
                            </td>
                            
                            
                            {

                            !login.isAdmin || 

                            <>

                                <td className="text-center">
                                    <button type="button" className="btn btn-outline-primary btn-sm opacity-75 rounded-pill"
                                        onClick={() => handlerUserSystemSelectedForm({
                                            idUser,
                                            name,
                                            lastname,
                                            position,
                                            area,
                                            email, 
                                            roles
                                        })}>
                                        Update
                                    </button>
                                </td>
                                <td className="text-center">
                                    <button type="button" className='btn btn-outline-danger btn-sm opacity-75 rounded-pill' onClick={() => handlerDeleteUserSystem(idUser)}>
                                            Del
                                    </button>
                                </td>

                            </>

                            }

                        </tr>

                                )
                            }
                        )


                }

                    
                            
                </tbody>

            </table>
        
        </>

    )

}