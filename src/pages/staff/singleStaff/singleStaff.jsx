import React from "react";
import "./singleStaff.scss";
import Chart from "../../../components/chart/chart";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { singleStaffInformation } from "../../../sources/staffSources/singleStaffInformation";

function SingleStaffDesktop() {
  const viewUser = useLocation().state;
  let { staffId } = useParams();

  return (
    <div className="single">
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
  );
}

export default SingleStaffDesktop;
