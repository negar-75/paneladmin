
export const StaffInputs = [
    {
      id: 1,
      label: "Username",
      type: "text",
      placeholder: "john_doe",
      name:"username"
      
    },
    {
      id: 2,
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
      name:"email",
      errorMessage : 'it should be a valid email address',
      required: true
    },
    {
      id: 3,
      label: "Phone",
      type: "tel",
      placeholder: "+1 234 567 89",
      name:"phone"
      
    },
    {
      id: 4,
      label: "Password",
      type: "password",
      name:"password",
      errorMessage : 'it should be at least 12 characters',
      required: true


    }
  ];
  


  // export const createCategoryInput = [
  //   { 
  //     id: '1',
  //     lable : "Category name",
  //     variant : "standard"
  //   }
  // ]

 

 
  
