import axios from "axios";



const stockApiInterceptor = axios.create({
    baseURL : 'http://localhost:8080/prod'
});

stockApiInterceptor.interceptors.request.use(config => {
    config.headers = {
        ...config.headers, 
        "Authorization": sessionStorage.getItem('token'),
    }
    return config;
});

export default stockApiInterceptor;