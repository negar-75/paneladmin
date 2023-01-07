import React from "react";
import MobileNavbar from "../../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../../components/mobileSidebar/mobileSidebar";
import StaffTable from "../../../components/StaffTable/StaffTable";

function StaffsTableMobile() {
  return (
    <div className="list">
      <MobileNavbar />
      <MobileSidebar />
      <div className="listContainer">
        <StaffTable />
      </div>
    </div>
  );
}

export default StaffsTableMobile;
