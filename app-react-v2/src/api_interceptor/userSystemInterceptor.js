import axios from "axios";


//244
const userSystemInterceptor = axios.create({
    baseURL : 'http://localhost:8080/user-system'
});

userSystemInterceptor.interceptors.request.use(config => {
    config.headers = {
        ...config.headers, 
        "Authorization": sessionStorage.getItem('token'),
    }
    return config;
});

export default userSystemInterceptor;