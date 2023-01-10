import axios from "axios";
import { axiosClient } from "../common/axiosClient";



const login = (userObj) => {
  // const params = new URLSearchParams();
  // params.append( 'username', userObj.username);
  // params.append('password', userObj.password);
  
 
  //   return axiosClient.post('/login/access-token',{},params)


    return  axios.post(
        `http://83.229.85.92:5500/api/v1/login/access-token`,
        new URLSearchParams({
            'username': userObj.username,
            'password': userObj.password,
           
        }),
        {
            headers: {
                'accept': 'application/json'
            },
            
        }
    )
  };

 



 



export default{
    login}