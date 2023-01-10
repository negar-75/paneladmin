import axios from "axios";

import {axiosClient} from '../common/axiosClient'





const createStuff = (userObj) => {
   return axiosClient.post('/user/',userObj)
}



const deleteStaff = (id) =>{
    return axiosClient.delete(`/user/${id}`)
}

const updateStaff = (userId,userObj) => {
    return axios.put(`/user/${userId}`,userObj)
}




const getAllStaffs = (pageNum) =>{
   return axiosClient.get(`/user/`, {params: {'skip': `0`,'limit': '100'}})
}


const getCategories =  (pageNum,itemsPerPage) => {
    return axiosClient.get('/category/',{params: {'skip': `${pageNum}`,'limit': `${itemsPerPage}`}})
}


const createCategory =  (categoryName,url) => {
    return axiosClient.post('/category/',{'category_name':`${categoryName}`,'logo_url':`${url}`, 'status': true})
}



const deleteCategory = (id) => {
    return axiosClient.delete(`/category/${id}`)
}




const updateCategory = (id,obj) => {
    return axiosClient.put(`/category/${id}`,obj)
}




const updateItem = (id,obj) => {
    return axiosClient.put(`/item/${id}`,obj)
}


const createStation = (obj) => {
    return axiosClient.post('/station/',obj)
}



const getStations = (pageNum,itemsPerPage) => {
    return axiosClient.get('/station',{params:{'skip': `${pageNum}`,'limit': `${itemsPerPage}`}})
}




const deletStation = (id) => {
    return axiosClient.delete(`/station/${id}`)
}



const createSauce = (obj) =>{
    return axiosClient.post('/sauce/',obj)
}



export {
    createStuff,
    deleteStaff,
    updateStaff,
    getAllStaffs,
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory,
    updateItem,
    createStation,
    getStations,
    deletStation,
    createSauce
    
}