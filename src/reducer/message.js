import { SUCCESS_MESSAGE, CLEAR_MESSAGE, FAILED_MESSAGE } from "../actions/type";

const initialState = {
    message: "" ,
    success:null
};

 const messReducer = (state = initialState, action) => {
  

  switch (action.type) {
    case SUCCESS_MESSAGE:
      return { 
      message: action.payload,
      success:true
    };

    case CLEAR_MESSAGE:
      return { message: "" };

    case FAILED_MESSAGE:
      return {
         message: action.payload,
         success:false
         };

    default:
      return state;
  }
}

export default messReducer
