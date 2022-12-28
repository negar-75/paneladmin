import React from "react";
import { productListTabs } from "../../../productListTabs";
import "./tab.scss";
import { Link } from "react-router-dom";

function Tab() {
  return (
    <div className="product-list-tabs">
      <ul className="tab-names">
        {productListTabs.map((item) => {
          return (
            <Link
              className="link"
              to={item.url}
              key={item.id}
            >
              <li>{item.tabName}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Tab;
