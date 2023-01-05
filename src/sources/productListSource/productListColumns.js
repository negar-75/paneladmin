import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StatusSwitch from '../../components/statusSwitch/satusSwitch';
import { updateItem } from '../../services/user.service';



 const itemColumns = [
    {
      field: "id",
      headerName: "ITEM ID",
      width: 0,
      headerAlign: "center",
      align: "center",
      hide: true,
    },
    {
      field: "itemName",
      headerName: "ITEM NAME",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "CATEGORY",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
        field: "status",
        headerName: "STATUS",
        width: 200,
        headerAlign: "center",
        align: "center",
        sortable: false,
        renderCell: (param) => {
          return (
            <>
              <StatusSwitch status={param?.row?.status} id={param?.row?.id} apiFunc={updateItem}  />
            </>
          );
        },
    },
    {
        field: "edit",
        headerName: "Edit",
        width: 200,
        headerAlign: "right",
        align: "right",
        sortable: false,
        renderCell: (param) => {
          return (
           <div className='edit-container'>
            <EditIcon />
            <DeleteIcon/>
           </div>
          );
        },
      },

  ];

const stationColumns =[
    {
        field: "id",
        headerName: "STATION ID",
        width: 0,
        headerAlign: "center",
        align: "center",
        hide: true,
    },
    {
        field: "station_name",
        headerName: "STATION NAME",
        width: 450,
        headerAlign: "center",
        align: "center",
      },
      {
        field:  "max_time",
        headerName: "MAX TIME",
        width: 450,
        headerAlign: "center",
        align: "center",
        sortable: false,
      },
    // {
    //     field: "edit",
    //     headerName: "Edit",
    //     width: 300,
    //     headerAlign: "center",
    //     align: "center",
    //     sortable: false,
    //     renderCell: (param) => {
    //       return (
    //       <Box sx={{width:'50%',display:'flex',gap:5 }}>
    //         <EditIcon sx={{color:'primary.main',cursor:'pointer'}}/>
    //         <DeleteIcon sx={{color:'crimson',cursor:'pointer'}} />
    //       </Box>
           
    //       );
    //     },
        
    //   },

]  








export {
    itemColumns,
    stationColumns,
    
}