
import React, { useEffect, useRef } from 'react';

const useDidMountEffect = (func, deps) => {
    console.log('first function')
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, [deps]);
}

;

const handleDelet = async(deletId,apiFunc,setState,items) =>{
    try{
       const res = apiFunc(deletId)
       setState(items.filter (item => item.id != deletId ));
    }  
    catch(err){
      console.log(err)
    } 
 }

 const firstLetterToUpperCase = (string) =>{
   return string[0].toUpperCase() + string.slice(1)
 }


 export {
    handleDelet, 
    firstLetterToUpperCase, 
    useDidMountEffect
 }