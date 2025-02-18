import { NavLink } from "react-router-dom";
import { useLogin } from "../auth/hooks/useLogin";
import { useUsersSystem } from "../hooks/useUsersSystem";


export const UserSystemList = () => {

    const { usersSystem, handlerUserSystemSelectedForm, handlerDeleteUserSystem } = useUsersSystem();

    console.log('UserSystemList - usersSystem: ', usersSystem )

    //const { login } = useContext(LoginContext);

    const { login } = useLogin();

    return (

        < >
        
            <div className="bg-dark rounded" style={{zIndex: '-1'}}>
                <h3 className="text-secondary lh-base">System users list</h3>
            </div>

            <table className="table text-light mt-3 w-100" style={{zIndex: '-1', backgroundColor:'rgba(20, 20, 20, 0.90)'}}>

                <thead>
                    <tr className="align-middle border-dark">
                        <th className="bg-primary opacity-50 border-0 text-dark">Id</th>
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

                        <tr className="text-start border-dark" key={idUser}>
                            <td className="bg-primary opacity-50 border-0 text-dark">{idUser}</td>
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
                                    <button type="button" className='btn btn-outline-danger btn-sm rounded-pill' onClick={() => handlerDeleteUserSystem(idUser)}>
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