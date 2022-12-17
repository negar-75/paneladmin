
export const userColumns =[

  
    {
      name: 'username',
      selector: row => row.username,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'phone',
      selector: row => row.phone,
      sortable: true,
    },
  
   
    // {
    //   field:'username',
    //   headerName : 'User',
    //   width: 230 
    
    // },
    
    // {
    //     field:'email',
    //     headerName:'Email',
    //     width:300,
    //     sortable: false,
        
    // },
    // {
    //   field:'phone',
    //   headerName:'Phone',
    //   width:300,
    //   sortable: false,
      
    // }
  
]

export const productColumns =[
  {
    name: 'name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Discription',
    selector: row => row.description,
    sortable: true,
  },
  {
    name: 'Category Id',
    selector: row => row.category_id,
    sortable: true,
  },
]








 
  

 