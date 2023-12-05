import axios from "axios";


const axiosInstance = axios.create({baseURL:'https://api.spotify.com/v1'})

axiosInstance.interceptors.request.use(function(config){
    
    //const headers = {...config.headers, 'Authorization'}
    config.headers.Authorization =  "Bearer " +token;
     return config;
})
export default axiosInstance;