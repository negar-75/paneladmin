import React from "react";
import Featured from "../../components/featured/featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/widget";
import Chart from "../../components/chart/chart";
import "./home.scss";

function HomeDesktop() {
  return (
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
  );
}

export default HomeDesktop;
