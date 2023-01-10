
import axios from "axios";


const axiosClient = axios.create({
  baseURL: 'http://83.229.85.92:5500/api/v1',
  timeout:10000,
  headers: {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    
  },
});



axiosClient.interceptors.request.use(
    (config)  => {
      
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      return config
    }, 
     (error) => {
      return Promise.reject(error);
    }

    
  );

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    
   if (error.response.status == 401) {
     
     window.location.href='/login'
     
   }
   console.error(`Looks like there was a problem. Status Code: ${error.response.status}`);
  }
)  
  
  export  {
    axiosClient
  }; 