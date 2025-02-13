import { useContext } from "react";
import { UserSystemForm } from "./UserSystemForm"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UserSystemContext } from "../context/UserSystemContext";


export const UserSystemModalForm = () => {

    const { handlerCloseForm, userSystemSelected, setUserSystemFormErrors, initialUserSystemFormErrors } = useContext(UserSystemContext);


    const closeModal = () => {

        setUserSystemFormErrors(initialUserSystemFormErrors);

        handlerCloseForm();

    }

    return(

            <>
            

            <div className="abrir-modal animacion fadeIn">
        	    <div className="modal-dialog modal-dialog-centered" role="document">
			        <div className="modal-content bg-light rounded" style={{margin:'0 auto', marginTop:'250px', width: '950px'}}>
                        <div className="modal-header py-2 px-2">
                            <h5 className="modal-title">Update user system</h5>
                            <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>
                                <span>X</span>
                            </button>
                        </div>

                        <div className="modal-body mb-3"style={{marginLeft:'50px'}}>

                            <UserSystemForm userSystemSelected={userSystemSelected}/>

                        </div>
                        
                    </div>
                </div>
            </div>

            
            </>

    )


}