import React from "react";
import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import Switch from "@mui/material/Switch";
import { itemColumns } from "../../../sources/productListSource/productListColumns";

function ItemTable({ cols, rows }) {
  return (
    <div className="prosuct-list-table">
      <DataGrid
        rows={[]}
        columns={cols}
        pageSize={5}
        rowsPerPageOptions={[5]}
        hideFooterSelectedRowCount={true}
      />
    </div>
  );
}

export default ItemTable;
