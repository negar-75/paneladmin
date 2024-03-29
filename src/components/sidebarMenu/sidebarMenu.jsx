import React from "react";
import "./sidebarMenu.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import store from "../../store";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";
import { handleDropDown } from "../../actions/dropDownMenu";
import { useSelector } from "react-redux";
import { sidebarMenuItems } from "../../sources/sidebarMenu";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = React.useState();
  const [activePage, setActivePage] = React.useState();
  React.useEffect(() => {
    setActivePage(() => {
      const initialIndex =
        window.location.pathname === "/menuCatalogue" ||
        window.location.pathname === "/productList/items"
          ? "/menu"
          : window.location.pathname === "/staffs"
          ? "/staffs"
          : window.location.pathname === "/customers"
          ? "/customers"
          : " ";
      return initialIndex;
    });
    setActiveIndex(() => {
      const initialIndex =
        window.location.pathname === "/menuCatalogue"
          ? 0
          : window.location.pathname === "/productList/items"
          ? 1
          : " ";
      return initialIndex;
    });
  }, [window.location.pathname]);

  const navigate = useNavigate();
  const open = useSelector((state) => state.dropDown.open);
  const menuItemName = useSelector((state) => state.dropDown.menuItemName);

  return (
    <div className="menu">
      <ul className="sidebar-menu">
        {sidebarMenuItems.map((item, index) => {
          if (item.subMenu) {
            return (
              <li
                className="sidebar-menu-accordion"
                id={item.id}
                key={index}
              >
                <a
                  className={`dropdownlink  ${
                    activePage === item.url ? "active" : " "
                  }`}
                  onClick={() => store.dispatch(handleDropDown(`${item.name}`))}
                >
                  {item.icon}
                  {t(item.name)}
                  <ExpandMoreIcon
                    className={
                      menuItemName === `${item.name}` && open
                        ? "fa-chevron-down open"
                        : "fa-chevron-down"
                    }
                  />
                </a>
                <ul
                  className={`collapse ${
                    menuItemName === `${item.name}` && open ? "show" : " "
                  }`}
                >
                  {item.subItems.map((sub, index) => {
                    return (
                      <Link
                        to={sub.url}
                        className="link"
                        key={index}
                      >
                        <li
                          className={
                            activeIndex === sub.activeIndex ? "active" : " "
                          }
                        >
                          {t(sub.name)}
                        </li>
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
                key={index}
              >
                <li
                  className={`sidebar-menu-item ${
                    activePage === item.url ? "active" : " "
                  }`}
                  id={item.name}
                >
                  {item.icon}
                  <span
                    onClick={() =>
                      store.dispatch(handleDropDown(`${item.name}`))
                    }
                  >
                    {t(item.name)}
                  </span>
                </li>
              </Link>
            );
          } else {
            return (
              <li
                className="sidebar-menu-item"
                id={item.name}
                key={index}
                onClick={() => {
                  store.dispatch(logout());
                  navigate("/login");
                }}
              >
                {item.icon}
                <span>{t(item.name)}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Menu;
