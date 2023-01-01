import React from "react";
import "./sidebar.scss";
import Menu from "../sidebarMenu/sidebarMenu";
import { Link } from "react-router-dom";
import store from "../../store";
import { DARK, LIGHT } from "../../actions/type";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link
        to="/"
        className="link"
      >
        <div className="top">
          <span className="logo">
            fas<span>Foo</span>
          </span>
        </div>
      </Link>
      <div className="center">
        <Menu />
      </div>
      <div className="bottom">
        <div
          className="color-option"
          onClick={() => {
            store.dispatch({ type: LIGHT });
          }}
        ></div>
        <div
          className="colorOption"
          onClick={() => {
            store.dispatch({ type: DARK });
          }}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
