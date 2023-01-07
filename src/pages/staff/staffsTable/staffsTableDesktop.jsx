import React from "react";
import "./staffsTable.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import StaffTable from "../../../components/StaffTable/StaffTable";

function StaffsTableDesktop() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <StaffTable />
      </div>
    </div>
  );
}

export default StaffsTableDesktop;
