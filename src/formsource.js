
export const userInputs = [
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
  
  export const productInputs = [
    {
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Apple Macbook Pro",
    },
    {
      id: 2,
      label: "Description",
      type: "text",
      placeholder: "Description",
    },
    {
      id: 3,
      label: "Category",
      type: "text",
      placeholder: "Computers",
    },
    {
      id: 4,
      label: "Price",
      type: "text",
      placeholder: "100",
    },
    {
      id: 5,
      label: "Stock",
      type: "text",
      placeholder: "in stock",
    },
  ];

  export const createCategoryInput = [
    { 
      id: '1',
      lable : "Category name",
      variant : "standard"
    }
  ]

  export const loginInputs =[
    {
     id:1,
     lable: 'Your username',
     variant : "standard",
     name : "username",
     type:"text"

    },
    {
     id:2,
     lable:"Your password",
     variant : "standard",
     name:"password",
     type:"password"
     
    }
  ]


  export const staffInformation =[
    {
      id:'1',
      fieldName:'Email',
      typeInformation:'email'
    },
    {
      id:'2',
      fieldName:'Phone',
      typeInformation:'phone'

    }
  ]
  
