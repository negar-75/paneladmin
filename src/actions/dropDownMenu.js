import {DROP_DOWN} from './type'

export const handleDropDown = (name) =>{
  return{
      type:DROP_DOWN,
      payload:name
  }
} 