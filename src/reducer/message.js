import { SUCCESS_MESSAGE, CLEAR_MESSAGE, FAILED_MESSAGE, HINT_MESSAGE } from "../actions/type";

const initialState = {
    successMessage: "" ,
    failedMessage:"",
    HintMessage:"",
    success:null
};

 const messReducer = (state = initialState, action) => {
  

  switch (action.type) {
    case SUCCESS_MESSAGE:
      return { 
       ...state,
       successMessage:action.payload,
       success:true
    };

    case CLEAR_MESSAGE:
      return initialState;

    case FAILED_MESSAGE:
      return {
        ...state,
        failedMessage:action.payload,
        success:false
         };

    case HINT_MESSAGE:
      return {
        ...state,
        hintMessage:action.payload,
        success:false
          };     

    default:
      return state;
  }
}

export default messReducer
