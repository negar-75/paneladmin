import React from "react";
import "./staffs.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MobileNavbar from "../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../components/mobileSidebar/mobileSidebar";
import Datatable from "../../components/datatable/datatable";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import { getUser } from "../../actions/auth";
import { useMediaQuery } from "react-responsive";

function Staffs() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  store.dispatch(getUser());
  const isAuth = useSelector((state) => state.user.isAuth);
  if (!isAuth && !localStorage.getItem("token"))
    return <Navigate to="/login" />;

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="list">
          <Sidebar />
          <div className="listContainer">
            <Navbar />
            <Datatable />
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="list">
          <MobileNavbar />
          <MobileSidebar />
          <div className="listContainer">
            <Datatable />
          </div>
        </div>
      )}
    </>
  );
}

export default Staffs;
