import React from "react";
import Featured from "../../components/featured/featured";
import Navbar from "../../components/navbar/Navbar";
import MobileNavbar from "../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../components/mobileSidebar/mobileSidebar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/widget";
import Chart from "../../components/chart/chart";
import "./home.scss";

import { useMediaQuery } from "react-responsive";

function HomeDesktop() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="home">
          <Sidebar />
          <div className="home-container">
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
          <MobileNavbar />
          <MobileSidebar />
          <div className="home-container">
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

export default HomeDesktop;
