
/* //DEVELOPMENT STAGE
export const loginUser = (userLogin) => {
    return (userLogin.username === 'admin' && userLogin.password === '12345');
}*/


import axios from "axios";

export const loginUser = async ({username, password}) => {       
        
    try {
        return await axios.post('http://localhost:8080/login', {name: username, password: password});          
    } catch (error) {
        throw error;
    }
    
}