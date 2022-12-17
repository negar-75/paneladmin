import React from 'react'
import './datatable.scss'
import {userColumns} from "../../datatablesource"
import { Link }  from "react-router-dom"
import DataTable from 'react-data-table-component';
import {getAllUsers,deletUser} from '../../services/user.service';
import {handleDelet} from '../../services/functions';
const customStyles = {

	header: {
		style: {
			minHeight: '56px',
      color:' #3A6B35 '
		},
	},
	headRow: {
		style: {
			borderTopStyle: 'solid',
			borderTopWidth: '1px',
      color:' #3A6B35 ',

	
		},
	},
	headCells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
        color:'#3A6B35 '
				
			},
		},
	},
	cells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
        borderRightColor: '#dcd9de'
				
			},
		},
	},
};



function Datatable() {
  
const[data,setData] = React.useState([])
  

  const getData = async (page) => {
    const response  = await getAllUsers(page)
    setData(response.data)
  }
  

  React.useEffect(() =>{
   getData(0)
   },[])




const handlePageChange =  (page) =>{
 getData(page-1)
 
}


 const actionColumn =
   [{selector:"actionColumn", 
    name:"Action",
    
    cell: row =>
    
       (
        <div className='actionColumn'>
        <Link to={`/staffs/${row.id}`} params={{userId:row.id}}
        state={
        {username:row.username,
        phone:row.phone,
        email:row.email}
        }>
        <div className='viewButton' >View</div>
        </Link>
        
        <div className='deletButton' onClick={() => handleDelet(row.id,deletUser,setData,data)}>Delet</div>
        
        </div>
      )
    
  }]
  return (
      <div className="dataTable">
        
        <div className="dataTableTitle">
        
          <Link to="/staffs/new" className='link'>
            Add new
          </Link> 
        </div>
        
     
      <DataTable 
      title='Users'
      columns={userColumns.concat(actionColumn)} 
      data={data} 
      selectableRows 
      customStyles={customStyles}
      pagination
      paginationServer
      onChangePage={handlePageChange}
      paginationTotalRows={14}
     
		  />
    </div>
    
    
  )
}


export default Datatable