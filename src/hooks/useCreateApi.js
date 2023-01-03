import { useState } from "react";
import store from "../store";



export default (apiFunc) => {
    
    const [loading, setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const [error,setError] = useState('')

     const request = async (...args) => {
      setMessage('')
      setError('')
      setLoading(true);
      try {
        const result = await apiFunc(...args);
        setMessage('User has been created')
      } catch (err) {
        console.log(err)
        if(err.response.status === 400) {
          setError('User already exist')
        }else setError('Unexpected error!')
      } finally {
        setLoading(false);
       
      }
    };
    
   

    return {
      
     request,
     loading,
     message,
     error
      
    };
  };

  