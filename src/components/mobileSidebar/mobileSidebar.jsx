import React from "react";
import { sidebarMenuItems } from "../../sources/sidebarMenu";
import { Link } from "react-router-dom";
import store from "../../store";
import { logout } from "../../actions/auth";
import "./mobileSidebar.scss";
import { useSelector } from "react-redux";
import { CLOSE_SIDEBAR } from "../../actions/type";

function MobileSidebar() {
  const sidebarRef = React.useRef(null);
  const isSidebarMenuOpen = useSelector(
    (state) => state.isMobileSidebarMenuOpen.isMobileSidebarMenuOpen
  );

  const closeOpenMenus = (e) => {
    if (sidebarRef.current && isSidebarMenuOpen) {
      store.dispatch({
        type: CLOSE_SIDEBAR,
      });
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <div
      className={isSidebarMenuOpen ? "mobile-sidebar open" : "mobile-sidebar"}
      ref={sidebarRef}
    >
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
