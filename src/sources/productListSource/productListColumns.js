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

const sauceColumns =[
    {
        field: "id",
        headerName: "SAUCE ID",
        width: 0,
        headerAlign: "center",
        align: "center",
        hide: true,
    },
    {
        field: "sauce_name",
        headerName: "ITEM NAME",
        width: 450,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "status",
        headerName: "STATUS",
        width: 450,
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

]  


const actionCols = [
   
    
]




itemColumns.concat(actionCols)
export {
    itemColumns,
    sauceColumns,
    actionCols
}