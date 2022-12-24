import React from "react";
import Featured from "../../components/featured/featured";
import Navbar from "../../components/navbar/Navbar";
import MobileNavbar from "../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../components/mobileSidebar/mobileSidebar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/widget";
import Chart from "../../components/chart/chart";
import "./home.scss";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import store from "../../store";
import { getUser } from "../../actions/auth";

function Home() {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = React.useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  console.log(isSidebarMenuOpen);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const toggleSidebar = () => {
    setIsSidebarMenuOpen((pre) => !pre);
  };

  if (!isAuth && !localStorage.getItem("token"))
    return <Navigate to="/login" />;

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget
                type="user"
                increase={false}
              />
              <Widget
                type="order"
                increase={true}
              />
              <Widget
                type="earning"
                increase={false}
              />
              <Widget
                type="balance"
                increase={true}
              />
            </div>
            <div className="charts">
              <Featured />
              <Chart
                aspect={2 / 1}
                title="last 6 month (Revenue)"
              />
            </div>
          </div>
        </div>
      )}

      {isTabletOrMobile && (
        <div className="home">
          <MobileNavbar toggleSidebar={toggleSidebar} />
          <MobileSidebar isSidebarMenuOpen={isSidebarMenuOpen} />
          <div
            className="homeContainer"
            onClick={() => setIsSidebarMenuOpen(false)}
          >
            <div className="widgets">
              <Widget
                type="user"
                increase={false}
              />
              <Widget
                type="order"
                increase={true}
              />
              <Widget
                type="earning"
                increase={false}
              />
              <Widget
                type="balance"
                increase={true}
              />
            </div>
            <div className="charts">
              <Featured />
              <Chart
                aspect={2 / 1}
                title="last 6 month (Revenue)"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
