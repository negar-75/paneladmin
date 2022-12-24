import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./mobileNavbar.scss";
import Avatar from "@mui/material/Avatar";

function MobileNavbar(props) {
  const { toggleSidebar } = props;
  return (
    <div className="mobileNavbar">
      <div className="wrapper">
        <MenuIcon
          className="icon"
          onClick={() => toggleSidebar()}
        />
        <div className="logo">
          <h2>
            fas<span>Foo</span>
          </h2>
        </div>
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
