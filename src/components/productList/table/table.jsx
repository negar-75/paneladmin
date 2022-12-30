import React from "react";
import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import Switch from "@mui/material/Switch";
import { itemColumns } from "../../../sources/productListSource/productListColumns";

function ItemTable({ col }) {
  const columns = [
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
        console.log(param);
        return (
          <>
            <Switch checked={param?.row?.status} />
          </>
        );
      },
    },
    {
      field: "edit",
      headerName: "EDIT",
      sortable: false,
      width: 300,
      align: "right",
      disableColumnMenu: true,
      headerAlign: "right",
    },
  ];

  const rows = [];

  return (
    <div className="prosuct-list-table">
      <DataGrid
        rows={rows}
        columns={col}
        pageSize={5}
        rowsPerPageOptions={[5]}
        hideFooterSelectedRowCount={true}
      />
    </div>
  );
}

export default ItemTable;
