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

 



 



export default{
    login}