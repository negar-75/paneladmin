import React from "react";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/chart";
import List from "../../components/table/table";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getUser } from "../../actions/auth";

function Single() {
  const viewUser = useLocation().state;
  let { staffId } = useParams();

  store.dispatch(getUser());
  const isAuth = useSelector((state) => state.user.isAuth);
  if (!isAuth && !localStorage.getItem("token"))
    return <Navigate to="/login" />;

  return (
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
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="user"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{viewUser.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{viewUser.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{viewUser.phone}</span>
                </div>
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
        {/* <div className="bottom">
          <h1 className="title"> Last Transaction</h1>
          <List />
        </div> */}
      </div>
    </div>
  );
}

export default Single;
