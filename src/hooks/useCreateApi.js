import { useState } from "react";




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
        setMessage('Done')
      } catch (err) {
        console.log(err)
        if(err?.response?.status === 400) {
          setError('It is already exist')
        }else{ 
          
          setError('Unexpected error!')
        }
        
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

  