import React from "react";
import "./singleStaff.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import MobileNavbar from "../../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../../components/mobileSidebar/mobileSidebar";
import Chart from "../../../components/chart/chart";

import { useLocation } from "react-router-dom";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { singleStaffInformation } from "../../../sources/staffSources/singleStaffInformation";
import { useMediaQuery } from "react-responsive";

function SingleStaffDesktop() {
  const viewUser = useLocation().state;
  let { staffId } = useParams();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="single">
          <Sidebar />

          <div className="singleContainer">
            <Navbar />
            <div className="top">
              <div className="left">
                <Link
                  to={`/staffs/${staffId}/editprofile`}
                  state={viewUser}
                >
                  <div className="editButton">Edit</div>
                </Link>
                <h1 className="title">Information</h1>
                <div className="item">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt="user"
                      className="itemImg"
                    />
                  </div>

                  <div className="details">
                    <h1 className="itemTitle">{viewUser.username}</h1>
                    {singleStaffInformation.map((item) => {
                      return (
                        <div
                          className="detailItem"
                          id={item.id}
                        >
                          <span className="itemKey">{item.fieldName}:</span>
                          <span className="itemValue">
                            {viewUser[item.typeInformation]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="right">
                <Chart
                  aspect={3 / 1}
                  title="User spending ( last 6 month )"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="single">
          <MobileNavbar />
          <MobileSidebar />

          <div className="singleContainer">
            <div className="top">
              <div className="left">
                <Link
                  to={`/staffs/${staffId}/editprofile`}
                  state={viewUser}
                >
                  <div className="editButton">Edit</div>
                </Link>
                <h1 className="title">Information</h1>
                <div className="item">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt="user"
                      className="itemImg"
                    />
                  </div>
                  <div className="details">
                    <h1 className="itemTitle">{viewUser.username}</h1>
                    {singleStaffInformation.map((item) => {
                      return (
                        <div
                          className="detailItem"
                          id={item.id}
                        >
                          <span className="itemKey">{item.fieldName}:</span>
                          <span className="itemValue">
                            {viewUser[item.typeInformation]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="right">
                <Chart
                  aspect={3 / 2}
                  title="User spending ( last 6 month )"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleStaffDesktop;
