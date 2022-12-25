import { SUCCESS_MESSAGE, CLEAR_MESSAGE,FAILED_MESSAGE,HINT_MESSAGE } from "./type";

export const setMessage = (message) => {
    return {
       type: SUCCESS_MESSAGE,
       payload: message,
    }
};

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const failedMessage = (message) =>{
  return {
    type:FAILED_MESSAGE,
    payload: message,
 }
}

export const hintMessage = (message) =>{
  return {
    type:HINT_MESSAGE,
    payload: message,
 }
}
