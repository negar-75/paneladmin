import React from "react";
import "./staffsTable.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import MobileNavbar from "../../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../../components/mobileSidebar/mobileSidebar";
import StaffTable from "../../../components/StaffTable/StaffTable";
import { useMediaQuery } from "react-responsive";

function StaffsTable() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="list">
          <Sidebar />
          <div className="listContainer">
            <Navbar />
            <StaffTable />
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="list">
          <MobileNavbar />
          <MobileSidebar />
          <div className="listContainer">
            <StaffTable />
          </div>
        </div>
      )}
    </>
  );
}

export default StaffsTable;
