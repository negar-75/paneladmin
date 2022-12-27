import axios from "axios";
import { baseUrl } from "./baseUrl";


const login = (userObj) => {
    return  axios.post(
        `${baseUrl}login/access-token`,
        new URLSearchParams({
            'grant_type': '',
            'username': userObj.username,
            'password': userObj.password,
            'scope': '',
            'client_id': '',
            'client_secret': ''
        }),
        {
            headers: {
                'accept': 'application/json'
            },
            timeout: 10000
        }
    )
  };

 
const logout = () => {
    localStorage.removeItem("token");
  };


 //checking authorization

const getUser = () =>{
    return axios.get(`${baseUrl}user/me`, {
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        
    }
    })
} 

export default{
    login,
    logout,
    getUser
  }