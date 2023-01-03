import React from "react";
import "./StaffTable.scss";
import { userColumns } from "../../sources/staffSources/staffTable";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { getAllUsers, deletUser } from "../../services/user.service";
import { handleDelet } from "../../services/functions";
import { customStyles } from "../../style/customDataTableStyle";
import useGetApi from "../../hooks/useGetApi";

function StaffTable() {
  const getUsers = useGetApi(getAllUsers);
  const { data, error, loading, request } = getUsers;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    request(0);
  }, []);

  React.useEffect(() => {
    setItems(data);
  }, [data]);

  const actionCol = [
    {
      name: "Action",
      cell: (row) => (
        <div className="action-column">
          <Link
            to={`/staffs/${row.id}`}
            params={{ userId: row.id }}
            state={{
              username: row.username,
              phone: row.phone,
              email: row.email,
            }}
            className=" view-button link"
          >
            View
          </Link>

          <div
            className="delete-button"
            onClick={() => handleDelet(row.id, deletUser, setItems, items)}
          >
            Delet
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="data-table">
      <div className="data-table-title">
        <Link
          to="/staffs/addUser"
          className="link"
        >
          Add new
        </Link>
      </div>

      {items && (
        <DataTable
          title="Staffs"
          columns={userColumns.concat(actionCol)}
          data={items}
          selectableRows
          customStyles={customStyles}
        />
      )}
    </div>
  );
}

export default StaffTable;