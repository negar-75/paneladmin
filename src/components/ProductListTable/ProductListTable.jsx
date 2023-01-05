import React from "react";
import "./ProductListTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { handleDelet } from "../../services/functions";

function ProductListTable({ cols, rowsArr, deletFun }) {
  const [rowsInTable, setRowsInTable] = React.useState([]);
  React.useEffect(() => {
    setRowsInTable(rowsArr);
  }, [rowsArr]);

  const action = [
    {
      field: "edit",
      headerName: "Edit",
      width: 300,
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (param) => {
        return (
          <Box sx={{ width: "50%", display: "flex", gap: 5 }}>
            <EditIcon sx={{ color: "primary.main", cursor: "pointer" }} />
            <DeleteIcon
              sx={{ color: "crimson", cursor: "pointer" }}
              onClick={() =>
                handleDelet(param.row.id, deletFun, setRowsInTable, rowsInTable)
              }
            />
          </Box>
        );
      },
    },
  ];

  return (
    <div className="prosuct-list-table">
      <DataGrid
        rows={rowsInTable?.length > 0 ? rowsInTable : []}
        columns={cols.concat(action)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        hideFooterSelectedRowCount={true}
      />
    </div>
  );
}

export default ProductListTable;
