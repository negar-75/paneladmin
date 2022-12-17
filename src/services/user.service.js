import axios from "axios";



const createUser = (userObj) => {
 return axios.post(
    'http://localhost:5500/api/v1/user/',
    
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
    return axios.delete(`http://localhost:5500/api/v1/user/${id}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
}

const updateUser = (userId,userObj) =>{
    console.log('update user ran')
    return axios.put(
        ` http://localhost:5500/api/v1/user/${userId}`,
         
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
    return await axios.get('http://localhost:5500/api/v1/user/', {
      params: {
          'skip': `${pageNum*10}`,
          'limit': '10'
      },
      headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
  })
}


const getAllItems = async (pageNum) =>{
    return await axios.get('http://localhost:5500/api/v1/item/', {
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
    return await axios.delete(`http://localhost:5500/api/v1/item/${id}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}


const  getCategory =  (pageNum) =>{
   return  axios.get('http://localhost:5500/api/v1/category/', {
    params: {
        'skip': `${pageNum}`,
        'limit': '6'
    },
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});
}

const createCategory =  (categoryName,url) => {
     return  axios.post(
        'http://localhost:5500/api/v1/category/',
        
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
    return await axios.delete(`http://localhost:5500/api/v1/category/${id}`, {
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});
}


const updateCategory = (id,obj) => {
    return axios.put(
        `http://localhost:5500/api/v1/category/${id}`,
        
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
    updateCategory
    
}