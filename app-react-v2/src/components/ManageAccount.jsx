import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLogin } from "../auth/hooks/useLogin";


export const ManageAccount = () => {


    //const { login } = useContext(LoginContext);

    const { login } = useLogin();

    console.log('ManageAccount - login: ', login.nickName)


    return (

        <>
        
            <div className="bg-light border rounded">   

                <div className="row mt-2">


                    <div className="col-3">

                        <div className="list-group ms-2 text-secondary">
                            
                            <a className="list-group-item text-start border-0 hover-list bg-secondary">

                                <div className="row">
                                    <div className="col-1">
                                        <img src="../src/images/rino.ico"  className="me-3" style={{width:'59px', height:'59px'}} />
                                    </div>
                                    <div className="col-9">
                                        <h4 className="ms-5 mt-3 text-white">Your account</h4>
                                    </div>
                                </div>
                               
                            </a>

                            <a className="list-group-item text-start border-0 hover-list">
                                
                                <div className="row ms-1">
                                    <div className="col-1">
                                        <img src="../src/images/user.ico"  className="me-3" style={{width:'35px', height:'35px'}} />
                                    </div>
                                    <div className="col-8">
                                        <p className="ms-4 mt-1">Init</p>
                                    </div>
                                </div>
                        
                            </a>


                            <a className="list-group-item text-start border-0 hover-list">
                                
                                <div className="row ms-1">
                                    <div className="col-1">
                                        <img src="../src/images/info.ico" className="me-3" style={{width:'28px', height:'28px'}} />
                                    </div>
                                    <div className="col-9">
                                        <p className="ms-4 mt-1">Personal information</p> 
                                    </div>
                                </div>
                        
                            </a>

                            <a className="list-group-item text-start border-0 hover-list">
                                
                                <div className="row ms-1">
                                    <div className="col-1">
                                        <img src="../src/images/lock.ico"  className="me-3" style={{width:'30px', height:'30px'}} />
                                    </div>
                                    <div className="col-8">
                                        <p className="ms-4 mt-1">Security</p>
                                    </div>
                                </div>
                        
                            </a>

                            <a className="list-group-item text-start border-0 hover-list">
                                
                                <div className="row ms-1">
                                    <div className="col-1">
                                        <img src="../src/images/infog.ico"  className="me-3" style={{width:'30px', height:'30px'}} />
                                    </div>
                                    <div className="col-8">
                                        <p className="ms-4 mt-1">General information</p>
                                    </div>
                                </div>
                        
                            </a>


                            <p class="text-start font-weight-light mt-3"> 

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam neque a est rutrum pulvinar. 
                            Nullam rutrum, lectus condimentum malesuada tempus, leo purus pellentesque diam, 
                            vitae porttitor tortor dolor eget tortor. Ut vel arcu gravida, tristique turpis eu, 
                            condimentum sapien.
                            
                            </p>

                        </div>

                    </div>


                    <div className="col-8">


                        <div className="contenedor-img-account my-5">

                            <div className="rounded-circle bg-white border border-info img-account"  style={{width:'280px', height:'280px'}}>

                                <img src="../src/images/pngfind.com-skeletor-png-792083.png"  className="mt-4" style={{width:'200px', height:'200px'}} />

                            </div>

                        </div>


                        <h3 className="text-secondary lh-base mt-3">{'Welcome ' + login.nickName + '!'}</h3>


                        <p className="mt-3">Manage your information, privacy and security to improve your experience.</p>



                        <div className="row mt-5 mb-3">

                            <div className="col-4"> 

                            <Card style={{ width: '18rem', height:'400px' }}>
                                <Card.Img variant="top" src="../src/images/akuma.PNG" />
                                <Card.Body>
                                    
                                    <Card.Text>
                                        Customize your account
                                    </Card.Text>
                                    <Button variant="" className="btn btn-outline-primary rounded-pill">Customize</Button>
                                </Card.Body>
                            </Card>
                              

                            </div>

                            <div className="col-4">

                            <Card style={{ width: '18rem', height:'400px' }}>
                                <Card.Img variant="top" src="../src/images/oni-samurai.png" />
                                <Card.Body>
                                    
                                    <Card.Text>
                                        Safety tips
                                    </Card.Text>
                                    <Button variant="" className="btn btn-outline-primary rounded-pill">Go</Button>
                                </Card.Body>
                            </Card>

                            </div>

                            <div className="col-4">

                            <Card style={{ width: '18rem', height:'400px' }}>
                                <Card.Img variant="top" src="../src/images/veg.jpg" />
                                <Card.Body>
                                    
                                    <Card.Text>
                                        Your contact information
                                    </Card.Text>
                                    <Button variant="" className="btn btn-outline-primary rounded-pill">Update</Button>
                                </Card.Body>
                            </Card>

                            </div>

                        </div>


                    </div>


                </div>


                <div className="row mt-4">

                    <p className="text-start font-weight-light mx-2 text-secondary">
                    <img src="../src/images/infog.ico"  className="me-3" style={{width:'25px', height:'25px'}} />
                    Only you can see your settings. We encourage you to also review your settings for Maps. Nulla bibendum at orci vel elementum. In lorem neque, rutrum ac nibh sed, venenatis dignissim metus. Vivamus velit nisl, tincidunt quis odio condimentum, vestibulum sodales diam. <a href="">Learn more.</a>
                    </p>

                   
                  
                </div>

            </div>
        
        
        </>
    )
}