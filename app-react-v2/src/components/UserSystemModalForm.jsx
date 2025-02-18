import { UserSystemForm } from "./UserSystemForm"
import { useUsersSystem } from "../hooks/useUsersSystem";


export const UserSystemModalForm = () => {

    console.log('en UserSystemModalForm')

    const { handlerCloseForm, userSystemSelected, setUserSystemFormErrors, initialUserSystemFormErrors } = useUsersSystem();


    const closeModal = () => {

        setUserSystemFormErrors(initialUserSystemFormErrors);

        handlerCloseForm();

    }

    return(

            <>
            

                <div className="abrir-modal animacion fadeIn">
                    
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        
                        <div className="modal-content border rounded border-secondary" style={{margin:'0 auto', marginTop:'70px', width: '1200px', backgroundColor:'rgba(20, 20, 20, 0.6)'}}>
                            
                            <div className="modal-header px-3 mt-3 ">
                                <h3 className="modal-title text-light ms-2 opacity-50">Update user system</h3>
                                <button type="button" className="btn btn-outline-danger" onClick={closeModal}>
                                    <span>X</span>
                                </button>
                            </div>

                            
                            <div className="modal-body mb-3 mx-3">

                                <UserSystemForm userSystemSelected={userSystemSelected}/>

                            </div>
                            
                        </div>

                    </div>
                    
                </div>

            
            </>

    )


}