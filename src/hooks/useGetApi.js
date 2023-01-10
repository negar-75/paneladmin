
import { useState } from "react";

export default (apiFunc,keyName) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectOptionItems, setSelectoptionItems] = useState([])
  
  


  const request = async (...args) => {
    
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      
      setData(result.data);
      const test = await  result?.data?.records ? result?.data?.records?.map((item) => {
        return {
          name:item[keyName],
          id:item.id
        }

      }): result?.data?.map((item) => {
        return {
          name:item[keyName],
          id:item.id
        }
      })

      
      setSelectoptionItems(test)
      
      
      
      

      
      
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  
  
  return {
    data,
    error,
    loading,
    request,
    selectOptionItems,
    
  };
};