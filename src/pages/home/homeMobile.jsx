import React from "react";
import Widget from "../../components/widget/widget";
import MobileNavbar from "../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../components/mobileSidebar/mobileSidebar";
import Chart from "../../components/chart/chart";
import Featured from "../../components/featured/featured";

function HomeMobile() {
  return (
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
  );
}

export default HomeMobile;
