import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MobileNavbar from "../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../components/mobileSidebar/mobileSidebar";
import "./menuCatalogue.scss";
import Menugrid from "../../components/menuGrid/menugrid";
import CreateCategory from "../../components/createCategory/createCategory";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import { getUser } from "../../actions/auth";
import { useMediaQuery } from "react-responsive";

function MenuCatalogue() {
  const [success, setSuccess] = React.useState(false);
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = React.useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  store.dispatch(getUser());

  const isAuth = useSelector((state) => state.user.isAuth);
  if (!isAuth && !localStorage.getItem("token"))
    return <Navigate to="/login" />;

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="menuCatalogue">
          <Sidebar />
          <div className="menuCatalogue-container">
            <Navbar />
            <div className="up">
              <CreateCategory setSuccess={setSuccess} />
            </div>
            <div className="down">
              <Menugrid
                success={success}
                setSuccess={setSuccess}
              />
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="menuCatalogue">
          <MobileNavbar />
          <MobileSidebar />
          <div className="menuCatalogue-container">
            <CreateCategory setSuccess={setSuccess} />
            <Menugrid
              success={success}
              setSuccess={setSuccess}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MenuCatalogue;
