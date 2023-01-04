import axios from "axios";
import { baseUrl } from "./baseUrl";



const createUser = (userObj) => {
 return axios.post(
    `${baseUrl}user/`,
    
    userObj,
    {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
    }
)
}

const deletUser = (id) =>{
    return axios.delete(`${baseUrl}user/${id}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
}

const updateUser = (userId,userObj) =>{
    console.log('update user ran')
    return axios.put(
        ` ${baseUrl}user/${userId}`,
         
        userObj,
         {
             headers: {
                 'accept': 'application/json',
                 'Authorization': 'Bearer ' + localStorage.getItem('token'),
                 'Content-Type': 'application/json'
             }
         }
     )
}


const getAllUsers = async (pageNum) => {
    return await axios.get(`${baseUrl}user/`, {
      params: {
          'skip': `0`,
          'limit': '100'
      },
      headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
  })
}


const getAllItems = async (pageNum) =>{
    return await axios.get(`${baseUrl}item/`, {
        params: {
            'skip': `${pageNum*10}`,
            'limit': '10',
            'column': 'name',
            'is_archived': 'false'
        },
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

const deletItem = async (id) =>{
    return await axios.delete(`${baseUrl}item/${id}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}


const  getCategory =  (pageNum,itemsPerPage) =>{
   return  axios.get(`${baseUrl}category/`, {
    params: {
        'skip': `${pageNum}`,
        'limit': `${itemsPerPage}`
    },
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});
}

const createCategory =  (categoryName,url) => {
     return  axios.post(
        `${baseUrl}category/`,
        
        {
            'category_name':`${categoryName}`,
            'logo_url':`${url}`,
            'status': true
        },
        {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            timeout: 10000
        }
    );
}

const deleteCategory = async(id) => {
    return await axios.delete(`${baseUrl}category/${id}`, {
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});
}


const updateCategory = (id,obj) => {
    return axios.put(
        `${baseUrl}category/${id}`,
        
        obj,
        {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
              
            },
            
            
        }
    );
}


const updateItem = (id,obj) => {
    return axios.put(`${baseUrl}item/${id}`,
    obj,
    {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          
        },
    }
    )
}

const createStation = (obj) => {
    return axios.post(`${baseUrl}station/` , 
    obj,
    {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          
        },
    }
    )
}

export {
    createUser,
    deletUser,
    updateUser,
    getAllUsers,
    getAllItems,
    deletItem,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory,
    updateItem,
    createStation
    
}