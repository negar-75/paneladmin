import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./mobileNavbar.scss";
import Avatar from "@mui/material/Avatar";
import store from "../../store";
import { OPEN_SIDEBAR } from "../../actions/type";
import { Link } from "react-router-dom";

function MobileNavbar() {
  return (
    <div className="mobile-navbar">
      <div className="wrapper">
        <MenuIcon
          className="icon"
          onClick={() =>
            store.dispatch({
              type: OPEN_SIDEBAR,
            })
          }
        />
        <Link
          to="/"
          className="link"
        >
          <div className="logo">
            <h2>
              fas<span>Foo</span>
            </h2>
          </div>
        </Link>
        <div className="avatar">
          <Avatar
            alt="profile"
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
