import React from "react";
import "./datatable.scss";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { getAllUsers, deletUser } from "../../services/user.service";
import { handleDelet } from "../../services/functions";
import { theme, customStyles } from "../../style/customDataTableStyle";

function Datatable() {
  const [data, setData] = React.useState([]);

  const getData = async (page) => {
    const response = await getAllUsers(page);
    setData(response.data);
  };

  React.useEffect(() => {
    getData(0);
  }, []);

  const handlePageChange = (page) => {
    getData(page - 1);
  };

  const actionCol = [
    {
      name: "Action",

      cell: (row) => (
        <div className="actionColumn">
          <Link
            to={`/staffs/${row.id}`}
            params={{ userId: row.id }}
            state={{
              username: row.username,
              phone: row.phone,
              email: row.email,
            }}
          >
            <div className="viewButton">View</div>
          </Link>

          <div
            className="deletButton"
            onClick={() => handleDelet(row.id, deletUser, setData, data)}
          >
            Delet
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        <Link
          to="/staffs/new"
          className="link"
        >
          Add new
        </Link>
      </div>

      <DataTable
        title="Users"
        columns={userColumns.concat(actionCol)}
        data={data}
        selectableRows
        customStyles={customStyles}
        theme="solarized"
        onChangePage={handlePageChange}
      />
    </div>
  );
}

export default Datatable;
