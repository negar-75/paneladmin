import axios from "axios";



const login = (userObj) => {
    return  axios.post(
        'http://localhost:5500/api/v1/login/access-token',
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
            }
        }
    )
  };

 
  const logout = () => {
    localStorage.removeItem("token");
  };


 //checking authorization

const getUser = () =>{
    return axios.get('http://localhost:5500/api/v1/user/me', {
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