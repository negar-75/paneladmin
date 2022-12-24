import React from "react";
import { sidebarMenuItems } from "../../sidebarMenuSource";
import { Link } from "react-router-dom";
import store from "../../store";
import { logout } from "../../actions/auth";
import "./mobileSidebar.scss";

function MobileSidebar(props) {
  const { isSidebarMenuOpen } = props;
  return (
    <div className={isSidebarMenuOpen ? "mobileSidebar open" : "mobileSidebar"}>
      <ul className="sidebar-nav">
        {sidebarMenuItems.map((item) => {
          if (item.subMenu) {
            return (
              <li
                className="sidebar-item "
                id={item.id}
              >
                <div className="title">
                  {item.icon}
                  {item.name}
                </div>
                <ul className="sub-menu">
                  {item.subItems.map((sub) => {
                    return (
                      <Link
                        to={sub.url}
                        className="link"
                        id={item.id}
                      >
                        <li>{sub.name}</li>
                      </Link>
                    );
                  })}
                </ul>
              </li>
            );
          } else if (!item.subMenu && !item.logOut) {
            return (
              <Link
                to={item.url}
                className="link"
                id={item.id}
              >
                <li className="sidebar-item">
                  <div className="title">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </li>
              </Link>
            );
          } else {
            return (
              <li
                className="sidebar-item"
                id={item.id}
                onClick={() => store.dispatch(logout())}
              >
                <div className="title">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default MobileSidebar;
