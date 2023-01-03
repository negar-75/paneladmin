const emailValidation = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i

export const validateField = (fieldName, value , errObject)  => {
   
    
  
    switch(fieldName) {
      case 'email':
        errObject.emailValid = value.match(emailValidation);
        errObject.email = errObject.emailValid ? '' : ' is invalid';
        break;
      case 'password':
        errObject.passwordValid = value.length >= 12;
        errObject.password = errObject.passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }

    errObject.formValid = errObject.emailValid && errObject.passwordValid
}
  
