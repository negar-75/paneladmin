import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesource"
import { Link }  from "react-router-dom"


function Datatable() {

  const[data,setData] = React.useState(userRows)
   
const handleDelet = (id) =>{

 setData(data.filter((item) => item.id !== id));
 console.log(data)
 console.log('done')


};

   const actionColumn =
   [{field:"actionColumn", 
    headerName:"Action",
    width:250,
    renderCell:(params)=>{
      
      return(
        <div className='actionColumn'>
        <Link to="/users/test">
        <div className='viewButton'>View</div>
        </Link>
        
        <div className='deletButton' onClick={() => handleDelet(params.id)}>Delet</div>
        
        </div>
      )
    }
  }]
  return (
      <div className="dataTable">
        
        <div className="dataTableTitle">
          Add New User
          <Link to="/users/new" className='link'>
            Add new
          </Link> 
        </div>
        
     <div style={{ height: 680, width: '100%' }} >
      <DataGrid className='dataTableMain'
         rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    </div>
    
  )
}


export default Datatable